# Lesson 0002: Diagnosing the HPO Performance Regression on ttbar

> **Prerequisites**: [Lesson 0001: How Optuna Samples Hyperparameters & Prunes Trials](./0001-optuna-sampling-and-pruning.md).  
> **Mission Alignment**: Diagnosing why the current HPO round on $t\bar{t}$ plateaued at SR loss > 0.50 while the previous $t\bar{t}$ round reached 0.244, and correcting the optimization setup.  
> **Reference Guide**: [Optuna Architecture & HPO Cheat Sheet](./reference/optuna-hpo-cheatsheet.md)

---

## 1. The Observation: What the Data Actually Tells Us

During the previous round of Hyperparameter Optimization (HPO) on the $t\bar{t}$ dataset, the best discovered configuration achieved:
- **Signal Region (SR) Validation Loss**: **0.244**
- **Control Region (CR) Validation Loss**: **0.00353**

In the current HPO round (on branch `perf/hp_opt_ttbar`), the global minimum SR validation loss across all 347 trials was only **0.51235** (Trial 47), with most models clustering between **0.53 and 0.55**.

Crucially, **both rounds were trained on the $t\bar{t}$ dataset**. The only dataset difference is that the current sample fixed a bug in the muon segments (`msegs`). 

### The Decisive Experiment
To test whether the new dataset had an intrinsically higher loss floor, a validation run was conducted:
> **Retraining the current bugfixed $t\bar{t}$ dataset using the hyperparameters from the previous HPO round immediately recovers the superior performance (SR loss ~0.24).**

This empirical fact leads to a fundamental conclusion:
> **The ~0.50 validation loss floor in the current HPO campaign is NOT a data limitation or an irreducible Bayes error rate floor. It is an HPO search and optimization failure.**

The algorithm failed to locate the high-performing hyperparameter manifold that we know exists in the search space.

---

## 2. Root Cause Analysis: Why Did Current HPO Fail to Find the Good Region?

Detailed inspection of the training pipeline, `hp_opt/objective.py`, and the search space reveals four compounding causes that degraded this HPO round:

```
┌────────────────────────────────────────────────────────────────────────┐
│             Causes of Current HPO Optimization Failure                 │
├────────────────────────────────┬───────────────────────────────────────┤
│ 1. Metric Mismatch             │ Optuna selected best epochs via       │
│    (Callbacks vs. Objective)   │ normalized distance; Checkpoint saved │
│                                │ via raw square sum √(SR² + CR²).      │
├────────────────────────────────┼───────────────────────────────────────┤
│ 2. Cohort-Dependent Pruning    │ Pruner relied on shifting cohort min/ │
│    Distortions                 │ max bounds, cutting off trials with   │
│                                │ slower OneCycleLR warmup schedules.   │
├────────────────────────────────┼───────────────────────────────────────┤
│ 3. Multi-Objective Pareto      │ TPE models non-dominated trials as    │
│    Drift in MOTPE              │ "good"; trials with low CR but awful  │
│                                │ SR loss pulled sampling away from SR. │
├────────────────────────────────┼───────────────────────────────────────┤
│ 4. Search Space Explosion      │ Adding dynamic `max_epochs` [15..40]  │
│    & Schedule Stretching       │ altered learning rate dynamics and    │
│                                │ diluted Parzen density resolution.    │
└────────────────────────────────┴───────────────────────────────────────┘
```

---

### Cause 1: Checkpoint Metric Mismatch Between Callbacks and Optuna

In [`calratio_transformer/callbacks.py`](file:///home/fye/CalRatio/calratiognntrainer_hp_opt_ttbar/calratio_transformer/callbacks.py#L21-L40), [`ComplementPerformanceWriter`](file:///home/fye/CalRatio/calratiognntrainer_hp_opt_ttbar/calratio_transformer/callbacks.py#L18-L40) computes:
$$\text{val\_loss} = \sqrt{\mathcal{L}_{\text{SR}}^2 + \mathcal{L}_{\text{CR}}^2}$$
PyTorch Lightning’s `salt.callbacks.Checkpoint` saves the best model checkpoint (`.ckpt`) strictly based on this combined scalar metric.

However, in the current HPO round, [`hp_opt/objective.py`](file:///home/fye/CalRatio/calratiognntrainer_hp_opt_ttbar/hp_opt/objective.py) evaluated each trial's final best epoch using **min-max normalized distance**:
$$D_{\text{norm}} = \left(\frac{\mathcal{L}_{\text{SR}} - \min(\mathcal{L}_{\text{SR}})}{\Delta_{\text{SR}}}\right)^2 + \left(\frac{\mathcal{L}_{\text{CR}} - \min(\mathcal{L}_{\text{CR}})}{\Delta_{\text{CR}}}\right)^2$$

Because $D_{\text{norm}}$ and $\sqrt{\mathcal{L}_{\text{SR}}^2 + \mathcal{L}_{\text{CR}}^2}$ have different optima across training epochs:
- Optuna selected and reported $( \mathcal{L}_{\text{SR}}, \mathcal{L}_{\text{CR}} )$ from an epoch that **did not correspond to the actual checkpoint saved on disk**.
- The hyperparameter feedback loop was optimizing for a parameter set whose evaluated metrics diverged from the saved model weights.

---

### Cause 2: Cohort-Dependent Pruning Thresholds

The custom `_CohortTrajectoryPruner` in `hp_opt/objective.py` scaled running trials using the min and max of previously completed cohort trials:
- When early exploratory trials produced extreme outlier losses, the cohort range $(\max - \min)$ expanded erratically.
- Trials utilizing conservative learning rate schedules (e.g., lower `lr_init`, high `lr_pct_start` OneCycle warmup) experienced slower loss descent during early epochs.
- Because the pruner compared the running best distance against `slack_factor × cohort_median_distance`, promising parameter sets were prematurely pruned before their learning rates peaked and began rapid convergence.

---

### Cause 3: MOTPE Pareto Drift on Unbalanced Objectives

In Optuna's multi-objective TPE (MOTPE), the definition of the "good" history partition $H_\ell$ is based on **Pareto non-domination**:
- A trial is non-dominated if no other trial is strictly better in both objectives.
- In this study, trials that strongly over-indexed on the Control Region (e.g., Trial 46 with $\text{CR} = 0.0917$ but catastrophic $\text{SR} = 0.9456$) were treated as non-dominated "good" points in $H_\ell$.
- As detailed in Step 4 of TPE, kernel estimators $\ell(x)$ sample near trials in $H_\ell$. Because extreme single-objective outliers entered $H_\ell$, the sampler was repeatedly drawn into parameter regimes that sacrificed Signal Region discrimination to gain marginal improvements in Control Region loss.

---

### Cause 4: Search Space Dilution and Schedule Stretching

In commit `8ea9a2a`, dynamic epoch budgets were introduced:
```python
MAX_EPOCH_CHOICES = [15, 20, 30, 40]
max_epochs = trial.suggest_categorical("max_epochs", MAX_EPOCH_CHOICES)
```
In the previous round, trials ran with a fixed epoch budget (20 epochs). Adding `max_epochs` created two problems:
1. **Schedule Stretching**: `OneCycleLR` scales its entire cosine annealing schedule over `max_epochs`. A configuration tested for 15 epochs receives a completely different effective learning rate at epoch 10 compared to the same configuration tested for 40 epochs. This made the hyperparameter landscape non-stationary.
2. **Curse of Dimensionality**: TPE draws $K = 24$ candidates and relies on local kernel clustering. Expanding the search space to 18+ dimensions without increasing sample density degraded TPE's ability to locate narrow, high-performing parameter basins.

---

## 3. The Corrective Actions

To ensure future HPO campaigns match and exceed the previous round's performance ($\text{SR} = 0.244$), the following corrections are established:

### 1. Unified Metric: Euclidean Distance (Square Root of Square Sum)
We eliminated cohort min/max normalization and aligned the pruner and trial evaluation in [`hp_opt/objective.py`](file:///home/fye/CalRatio/calratiognntrainer_hp_opt_ttbar/hp_opt/objective.py) with [`calratio_transformer/callbacks.py`](file:///home/fye/CalRatio/calratiognntrainer_hp_opt_ttbar/calratio_transformer/callbacks.py#L21-L40):
$$D = \sqrt{\mathcal{L}_{\text{SR}}^2 + \mathcal{L}_{\text{CR}}^2}$$
- Eliminates cohort dependency, division-by-zero vulnerability, and outlier distortion.
- Re-establishes exact 1:1 alignment between Optuna's trial scoring and PyTorch Lightning's checkpoint saving (`val_loss`).

### 2. Warm-Starting Optuna with Known Good Configurations
Rather than forcing Optuna to explore blindly from scratch, seed the study with the proven hyperparameters from the previous successful round:
```python
# Seed the study with the previous best configuration
study.enqueue_trial({
    "lr_init": 6.988e-05,
    "lr_max": 4.799e-04,
    "lr_end": 7.824e-05,
    "lr_pct_start": 0.1629,
    "weight_decay": 0.00305,
    "sf_max": 1.453,
    "sf_pct_start": 0.079,
    "sf_pct_end": 0.210,
    "embed_dim": 128,
    "num_layers": 3,
    "num_heads": 1,
    "out_dim": 256,
    "dropout": 0.0632,
    "max_epochs": 20,
})
```
This guarantees that the good loss basin ($\text{SR} \approx 0.24$) immediately enters $H_\ell$ to anchor TPE's $\ell(x)$ density from the very first trials.

### 3. Tightening the Search Space
Narrow parameter ranges around the known good basin (e.g., constraining `num_heads \in [1, 2]`, `embed_dim = 128`, `num_layers \in [2, 4]`, and fixing `max_epochs = 20` or `30`) to concentrate sampling power where high performance has already been demonstrated.

---

## 4. Retrieval Practice

Attempt each question before expanding the answer.

### Question 1
Why does training with last round's hyperparameters on the new dataset prove the current HPO result is a search failure?

- **A**: It demonstrates the bugfixed sample retains high separability when provided optimal network parameters.
- **B**: It confirms that muon segment features contribute negligible discriminatory power toward jet classification.
- **C**: It reveals that distributed data parallel workers produce identical gradients across multiple compute clusters.
- **D**: It proves that Optuna database locks artificially inflate validation loss values during checkpoint generation.

> [!check]- Reveal Answer & Explanation
> **Correct Answer**: **A**
> 
> **Explanation**: Because retraining on the new dataset using previous hyperparameters immediately recovers the low validation loss (~0.24), the higher loss (~0.51) in the current HPO round cannot be attributed to an elevated dataset Bayes error rate floor. It proves the model is physically capable of separating the classes, and the HPO search simply failed to locate the proper parameter manifold.

---

### Question 2
How does replacing normalized cohort distance with raw square sum distance improve HPO reliability?

- **A**: It aligns trial scoring with checkpoint callbacks while eliminating distortion from cohort extreme losses.
- **B**: It guarantees that learning rate schedules reach maximum amplitude within the initial training epoch.
- **C**: It restricts transformer attention matrix sizes to prevent out-of-memory exceptions during evaluation passes.
- **D**: It forces Tree-structured Parzen Estimators to sample candidates uniformly across all categorical choices.

> [!check]- Reveal Answer & Explanation
> **Correct Answer**: **A**
> 
> **Explanation**: Raw square sum distance $\mathcal{L}_{\text{SR}}^2 + \mathcal{L}_{\text{CR}}^2$ removes dependency on moving cohort min/max bounds and matches `ComplementPerformanceWriter` (`val_loss = sqrt(SR^2 + CR^2)`), ensuring that Optuna evaluates trials on the exact same metric that PyTorch Lightning uses to save model checkpoints.

---

## 5. Primary Source & Code References

- [`calratio_transformer/callbacks.py`](file:///home/fye/CalRatio/calratiognntrainer_hp_opt_ttbar/calratio_transformer/callbacks.py#L21-L40): Implementation of `ComplementPerformanceWriter` computing combined validation loss.
- [`hp_opt/objective.py`](file:///home/fye/CalRatio/calratiognntrainer_hp_opt_ttbar/hp_opt/objective.py#L86-L128): Implementation of square sum distance and cohort trajectory pruning.
- [`calratio_transformer/configs/calRatio.yaml`](file:///home/fye/CalRatio/calratiognntrainer_hp_opt_ttbar/calratio_transformer/configs/calRatio.yaml): Previous round's optimal hyperparameters yielding $\text{SR} = 0.244$.

---

## Next Steps & Follow-up

- In your next HPO launch, enqueue the known good trial parameters using `study.enqueue_trial(...)` to immediately anchor the TPE good density $\ell(x)$.
- Keep the square sum distance metric active to maintain strict fidelity between trial evaluation and model checkpointing.
