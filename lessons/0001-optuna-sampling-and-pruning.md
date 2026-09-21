# Lesson 0001: How Optuna Samples Hyperparameters & Prunes Trials

> **Prerequisites**: Basic understanding of supervised neural network training.  
> **Mission Alignment**: Core theoretical foundation for managing the CalRatio HPO search space and early stopping.  
> **Reference Guide**: [Optuna Architecture & HPO Cheat Sheet](./reference/optuna-hpo-cheatsheet.html)

---

## 1. The Optimization Problem

Evaluating a hyperparameter configuration $x$ (learning rate, layer count, attention heads) requires training a model for many epochs to observe the validation loss $y$.

Because the mapping $x \mapsto y$ is expensive, non-convex, and lacks analytical gradients with respect to $x$, random or grid search wastes GPU cycles. We use **Bayesian Optimization** to determine which configuration to evaluate next based on historical results.

---

## 2. How TPE Samples New Trials

Classical Bayesian optimization models the objective function $P(y \mid x)$ directly using Gaussian Processes (GPs). However, GPs scale cubically $\mathcal{O}(N^3)$ with trial count $N$ and struggle with mixed discrete, continuous, and categorical dimensions.

Optuna’s default algorithm is the **Tree-structured Parzen Estimator (TPE)** (Bergstra et al., 2011). TPE inverts Bayes' rule to model $P(x \mid y)$ by splitting completed trials into two non-parametric probability densities using a performance quantile $\gamma$ (typically the top 15%):

$$\ell(x) = P(x \mid y < y^*) \quad \text{(Density of good configurations)}$$
$$g(x) = P(x \mid y \ge y^*) \quad \text{(Density of remaining/poor configurations)}$$

```
Trial History (ranked by validation loss):
[ Top 15% Best Trials  ] ──► Parzen Kernel Density Estimation ──► ℓ(x)
[ Remaining 85% Trials ] ──► Parzen Kernel Density Estimation ──► g(x)
```

### The Expected Improvement Decision Rule

Bergstra et al. showed that maximizing **Expected Improvement (EI)** over the loss threshold $y^*$ is mathematically proportional to the ratio of these two densities:

$$\text{EI}_{y^*}(x) = \int_{-\infty}^{y^*} (y^* - y) P(y \mid x) \, dy \propto \left[ \gamma + (1 - \gamma) \frac{g(x)}{\ell(x)} \right]^{-1} $$

$$x^* = \arg\max_{x} \frac{\ell(x)}{g(x)}$$

TPE draws candidate configurations from $\ell(x)$ and selects the candidate that **maximizes $\frac{\ell(x)}{g(x)}$**. This provides automatic exploration-exploitation balance:
- **Exploitation**: Samples where good trials cluster ($\ell(x)$ is high).
- **Exploration**: Avoids regions where bad trials congregate ($g(x)$ is high).

---

## 3. How Pruning Algorithms Work

Pruning terminates unpromising trials before they consume their full epoch budget.

### Standard Single-Objective Pruning
In standard Optuna, the training loop reports intermediate metrics at each step (`trial.report(val_loss, step=epoch)`):
- **`MedianPruner`**: Terminates a trial at epoch $E$ if its loss is worse than the median of completed trials at epoch $E$.
- **`HyperbandPruner` / Successive Halving (SHA)**: Evaluates trials in geometric resource rungs (e.g., 1, 3, 9 epochs), discarding the worst $1 - 1/\eta$ fraction at each rung.

### The Multi-Objective Challenge in CalRatio
> **Key Insight**: Stock Optuna pruners cannot prune multi-objective studies (Signal Region loss vs. Control Region loss). Because trials form a non-dominated Pareto front, there is no single scalar order for intermediate scores.

To solve this, this repository implements a custom cohort trajectory pruner (`_CohortTrajectoryPruner` in [`hp_opt/objective.py`](file:///home/fye/CalRatio/calratiognntrainer_hp_opt_ttbar/hp_opt/objective.py#L201-L295)):
1. **2D Normalized Distance**: Tracks Euclidean distance in normalized $(\text{SR}, \text{CR})$ loss space:
   $$D = \left(\frac{\text{SR} - \min(\text{SR})}{\max(\text{SR}) - \min(\text{SR})}\right)^2 + \left(\frac{\text{CR} - \min(\text{CR})}{\max(\text{CR}) - \min(\text{CR})}\right)^2$$
2. **Warmup Budget**: Requires at least 5 completed trials and 30% of the epoch budget before pruning activates.
3. **Threshold Termination**: Kills the training subprocess if the running best distance exceeds `slack_factor × cohort_median_distance`.

---

## 4. Retrieval Practice

Attempt each question before expanding the answer.

### Question 1
Why does TPE maximize the density ratio $\frac{\ell(x)}{g(x)}$ rather than simply sampling from the peak of $\ell(x)$?

- **A**: It balances selecting regions of high positive reward against regions having elevated failure rates.
- **B**: It guarantees sampling points with high parameter variance while ensuring completely uniform exploratory coverage.
- **C**: It isolates parameters whose loss gradients point directly towards the direction of steepest reduction.
- **D**: It minimizes computational evaluation overhead by discarding all hyperparameter candidates having unusually large values.

<details>
<summary>Reveal Answer & Explanation</summary>

**Correct Answer**: **A**

**Explanation**: Maximizing $\frac{\ell(x)}{g(x)}$ directs sampling toward parameter spaces where good runs cluster while actively penalizing areas where runs frequently fail, which mathematically maximizes Expected Improvement. TPE does not use gradients (ruling out C) nor does it force uniform coverage or magnitude filtering (ruling out B and D).
</details>

---

### Question 2
Why can't Optuna's built-in `MedianPruner` be used directly in your CalRatio two-objective optimization?

- **A**: Multi-objective optimization produces no single scalar score across Pareto metrics.
- **B**: PyTorch Lightning DDP suppresses early stopping signals emitted across worker GPUs.
- **C**: SQLite WAL storage mode cannot record intermediate evaluation metrics across epochs.
- **D**: Learning rate schedulers produce oscillating loss curves that confuse median thresholds.

<details>
<summary>Reveal Answer & Explanation</summary>

**Correct Answer**: **A**

**Explanation**: In multi-objective studies, trials evaluate multiple non-dominated objectives (Signal Region loss and Control Region loss). Because points along a Pareto front cannot be sorted by a single scalar order, a scalar median cannot be computed, requiring the custom trajectory distance metric implemented in `_CohortTrajectoryPruner`.
</details>

---

## 5. Primary Source Reading

Read Section 3 ("Tree-structured Parzen Estimator Approach") of:
- [**Algorithms for Hyper-Parameter Optimization** (Bergstra et al., NeurIPS 2011)](https://proceedings.neurips.cc/paper_files/paper/2011/hash/86e8f7ab32cfd12577bc2619bc635690-Abstract.html) ([Direct PDF](https://proceedings.neurips.cc/paper_files/paper/2011/file/86e8f7ab32cfd12577bc2619bc635690-Paper.pdf)).

---

## Next Steps & Follow-up

- Review the [Optuna Cheat Sheet Reference](./reference/optuna-hpo-cheatsheet.html).
- Proceed to [Lesson 0002: Diagnosing the ttbar vs. Dijet Validation Loss Gap](./0002-diagnosing-ttbar-loss-discrepancy.md).
- Ask follow-up questions in chat if any aspect of TPE sampling or cohort pruning requires clarification!
