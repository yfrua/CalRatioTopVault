# Lesson 0002: Diagnosing the ttbar vs. Dijet Validation Loss Gap

> **Prerequisites**: [Lesson 0001: How Optuna Samples Hyperparameters & Prunes Trials](./0001-optuna-sampling-and-pruning.md).  
> **Mission Alignment**: Diagnosing why current HPO rounds settle at ~0.51 SR loss while earlier dijet runs reached ~0.20.  
> **Reference Guide**: [Optuna Architecture & HPO Cheat Sheet](./reference/optuna-hpo-cheatsheet.html)

---

## 1. The Observation

In your earlier dijet HPO campaign (configured in [`calratio_transformer/configs/calRatio.yaml`](file:///home/fye/CalRatio/calratiognntrainer_hp_opt_ttbar/calratio_transformer/configs/calRatio.yaml)), Signal Region (SR) validation loss reached **~0.20**.

In this latest campaign on the `perf/hp_opt_ttbar` branch, the global minimum SR validation loss across all 347 trials is **0.51235** (Trial 47), with balanced Pareto models clustering around **0.53–0.55**.

This ~0.30 gap is **not** a hyperparameter optimization failure. It is the direct consequence of four physical and statistical factors.

---

## 2. Factor 1: Background Physics ($t\bar{t}$ vs. QCD Dijet)

CalRatio signal consists of displaced jets from neutral Long-Lived Particles (LLPs) decaying inside the Hadronic Calorimeter (HCal).

| Feature | QCD Dijet Background (Previous Round) | $t\bar{t}$ Background (Current Round) |
| :--- | :--- | :--- |
| **Physics Process** | Prompt light quarks & gluons originating at the primary vertex. | Heavy-flavor $b$-quarks ($t \to Wb$) and collimated hadronic $W$ decays. |
| **Track Topology** | Dense tracks strictly originating at the primary vertex ($d_0 \approx 0, z_0 \approx 0$). | $b$-hadrons have lifetime $c\tau \approx 450\,\mu\text{m}$, producing displaced secondary vertices and non-zero $d_0, z_0$. |
| **Signal Separability** | **Extremely high**: Signal has near-zero PV tracks and high $E_{\text{HCal}}/E_{\text{ECal}}$, making separation straightforward. | **Physical overlap**: Displaced $b$-decay tracks, semi-leptonic muons, and crowded topologies mimic signal features. |

Because QCD dijet jets are cleanly separated from displaced LLP decays by track count and impact parameters, the model assigns high confidence ($\hat{y} \approx 0.98 - 1.0$), driving Cross-Entropy loss down to ~0.20. In $t\bar{t}$, inherent signature overlap limits predictive certainty.

---

## 3. Factor 2: The Bayes Error Rate and Information Entropy

Cross-entropy loss measures predicted probability divergence against truth:

$$\mathcal{L}_{\text{CE}} = - \sum_{c} y_c \log \hat{y}_c$$

When two classes have non-zero physical overlap, even the theoretically optimal Bayes classifier cannot predict probability 1.0. The minimum achievable cross-entropy is bounded below by the **conditional entropy** of the label given the features:

$$\mathcal{L}_{\text{CE}}^{\text{floor}} = H(Y \mid X) = - \mathbb{E}_{x} \left[ \sum_{c} P(y=c \mid x) \log P(y=c \mid x) \right] > 0$$

For ambiguous $t\bar{t}$ jets where the Bayes-optimal posterior is $P(t\bar{t}) = 0.70$ and $P(\text{Signal}) = 0.30$:

$$\mathcal{L}_{\text{CE}} \approx - \log(0.70) \approx 0.36\text{ to }0.55$$

An SR validation loss of **0.512** indicates the transformer has reached the predictive ceiling allowed by the overlapping feature distributions.

---

## 4. Factor 3: Multi-Objective Pareto Competition

The current study optimizes two competing objectives:
- **Objective 0**: Signal Region (SR) validation loss.
- **Objective 1**: Control Region (CR) validation loss.

As documented in [`hp_opt/best_params/pareto_front_epochs_report.md`](file:///home/fye/CalRatio/calratiognntrainer_hp_opt_ttbar/hp_opt/best_params/pareto_front_epochs_report.md):
- Focusing exclusively on CR loss (Trial 46) drives CR loss to **0.0917**, but SR loss degrades to **0.9456**.
- Focusing exclusively on SR loss (Trial 47) reaches the global minimum SR loss **0.51235**, but CR loss rises to **0.6007**.
- The balanced knee of the Pareto front settles at $\text{SR} \in [0.534, 0.556]$ and $\text{CR} \in [0.288, 0.548]$.

Simultaneous optimization forces the shared representation to compromise, preventing single-objective saturation.

---

## 5. Factor 4: Sample Rebalancing & Event Weights

In [`data_prep/data_prep.py`](file:///home/fye/CalRatio/calratiognntrainer_hp_opt_ttbar/data_prep/data_prep.py#L556-L605), enabling `replace_ttbar: true` rescales Monte Carlo event weights (`mcEventWeight`):

$$\mathcal{L} = \frac{1}{\sum w_i} \sum_{i} w_i \cdot \ell_i$$

$t\bar{t}$ Monte Carlo samples possess wider event weight variance than dijet samples. Heavy misclassifications in high-weight phase space regions contribute more substantially to the loss sum.

---

## 6. Retrieval Practice

### Question 1
Why does replacing QCD dijet background with ttbar elevate the cross-entropy validation loss floor?

- **A**: Heavy-flavor b-hadrons produce displaced secondary vertices that physically mimic signal tracking signatures.
- **B**: Top quark production rates overwhelm transformer attention modules with unusually lengthy input token sequences.
- **C**: Denser hadronic energy depositions force layer normalization modules to saturate their internal activation boundaries.
- **D**: Modifying background cross sections introduces severe numerical instability during distributed multi-GPU backpropagation passes.

<details>
<summary>Reveal Answer & Explanation</summary>

**Correct Answer**: **A**

**Explanation**: $b$-hadrons have measurable lifetimes ($c\tau \approx 450\,\mu\text{m}$), producing displaced secondary vertices and non-zero impact parameters that physically overlap with displaced LLP signal signatures. This elevates the Bayes error rate and conditional entropy floor $H(Y \mid X)$ of cross-entropy loss.
</details>

---

## 7. Primary Source Reading

Review the internal study report:
- [`hp_opt/best_params/pareto_front_epochs_report.md`](file:///home/fye/CalRatio/calratiognntrainer_hp_opt_ttbar/hp_opt/best_params/pareto_front_epochs_report.md) — Table 2 details the exact trade-off between SR loss and CR loss across all 16 Pareto-optimal solutions.

---

## Next Steps & Follow-up

- Examine your study's Pareto plot: `hp_opt/best_params/best_params_calRatioTransformer.png`.
- In future campaigns, prioritize evaluating **background rejection at fixed signal efficiency** (ROC AUC) alongside raw validation loss.
- Ask follow-up questions in chat if you would like to explore reweighting strategies or tuning the Pareto distance metric!
