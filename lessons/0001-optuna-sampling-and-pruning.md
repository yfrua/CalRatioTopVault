# Lesson 0001: How Optuna Samples Hyperparameters & Prunes Trials

> **Prerequisites**: Basic understanding of supervised neural network training.  
> **Mission Alignment**: Core theoretical foundation for managing the CalRatio HPO search space and early stopping.  
> **Reference Guide**: [Optuna Architecture & HPO Cheat Sheet](./reference/optuna-hpo-cheatsheet.md)

---

## 1. The Optimization Problem

Evaluating a hyperparameter configuration $x$ (learning rate, layer count, attention heads) requires training a model for many epochs to observe the validation loss $y$.

Because the mapping $x \mapsto y$ is expensive, non-convex, and lacks analytical gradients with respect to $x$, random or grid search wastes GPU cycles. We use **Bayesian Optimization** to determine which configuration to evaluate next based on historical results.

---

## 2. How TPE Samples New Trials

Classical Bayesian optimization models the objective function $P(y \mid x)$ directly using Gaussian Processes (GPs). However, GPs scale cubically $\mathcal{O}(N^3)$ with trial count $N$ and struggle with mixed discrete, continuous, and categorical dimensions.

Optuna’s default algorithm is the **Tree-structured Parzen Estimator (TPE)** (Bergstra et al., 2011). TPE inverts Bayes' rule to model $P(x \mid y)$ instead of $P(y \mid x)$ by splitting completed trials into two non-parametric probability densities using a performance quantile $\gamma$ (typically $\gamma = 0.10$ or $0.15$):

$$\ell(x) = P(x \mid y < y^*) \quad \text{(Density of good configurations)}$$
$$g(x) = P(x \mid y \ge y^*) \quad \text{(Density of remaining/poor configurations)}$$

The marginal distribution of hyperparameters $x$ is:
$$P(x) = \int_{-\infty}^{\infty} P(x \mid y) P(y) \, dy = \gamma \ell(x) + (1 - \gamma) g(x)$$

```
Trial History (ranked by validation loss):
[ Top 15% Best Trials (y < y*)  ] ──► Fit Parzen Density Estimator ──► ℓ(x)
[ Remaining 85% Trials (y ≥ y*) ] ──► Fit Parzen Density Estimator ──► g(x)
```

### Mathematical Derivation of Expected Improvement

Expected Improvement (EI) evaluates the expected gain over threshold $y^*$:

$$\text{EI}_{y^*}(x) = \int_{-\infty}^{y^*} (y^* - y) P(y \mid x) \, dy = \int_{-\infty}^{y^*} (y^* - y) \frac{P(x \mid y) P(y)}{P(x)} \, dy$$

Because $P(x \mid y) = \ell(x)$ for all $y < y^*$, we can pull $\ell(x)$ outside the integral:

$$\text{EI}_{y^*}(x) = \frac{\ell(x) \int_{-\infty}^{y^*} (y^* - y) P(y) \, dy}{\gamma \ell(x) + (1 - \gamma) g(x)}$$

Defining $C = \int_{-\infty}^{y^*} (y^* - y) P(y) \, dy$, which is strictly constant with respect to $x$, and dividing numerator and denominator by $\ell(x)$:

$$\text{EI}_{y^*}(x) = \frac{C}{\gamma + (1 - \gamma) \frac{g(x)}{\ell(x)}} \propto \left[ \gamma + (1 - \gamma) \frac{g(x)}{\ell(x)} \right]^{-1}$$

Maximizing this quantity is mathematically equivalent to minimizing the denominator term $\frac{g(x)}{\ell(x)}$, which is equivalent to maximizing the density ratio:

$$x^* = \arg\max_{x} \frac{\ell(x)}{g(x)}$$

---

### The Complete TPE Sampling Algorithm

The practical sampling procedure implemented in Optuna (`optuna.samplers.TPESampler`) executes the following sequential steps:

|           Step            | Operation                                    | Description                                                                                                                                                                                                                                                                                                |
| :-----------------------: | :------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   **1. Startup Check**    | $N < N_{\text{startup}}$                     | If the number of completed trials is below the threshold (default $N_{\text{startup}} = 10$), sample $x$ uniformly at random from the search space to seed initial data.                                                                                                                                   |
| **2. Loss Thresholding**  | $y^* = \text{Quantile}(\{y^{(i)}\}, \gamma)$ | Rank completed trials by objective loss $y$ in ascending order. Determine $y^*$ such that $P(y < y^*) = \gamma$ (typically $\gamma = 0.15$).                                                                                                                                                               |
|   **3. History Split**    | Partition into $H_{\ell}$ & $H_g$            | Split trial parameter vectors into two sets: <br>• $H_{\ell} = \{x^{(i)} \mid y^{(i)} < y^*\}$ (the top performers) <br>• $H_g = \{x^{(i)} \mid y^{(i)} \ge y^*\}$ (the remaining trials)                                                                                                                  |
| **4. Density Estimation** | Fit $\ell(x)$ & $g(x)$                       | Construct Parzen Estimators (Kernel Density Estimation - KDE) for each hyperparameter: <br>• **Continuous (linear/log)**: Parzen mixture of Gaussians with adaptive bandwidth centered at observations. <br>• **Categorical/Discrete**: Categorical distributions smoothed with a Laplace/Dirichlet prior. |
| **5. Candidate Drawing**  | Sample candidates from $\ell(x)$             | Draw a pool of $K$ candidate parameter configurations $\{x^{(1)}_{\text{cand}}, \dots, x^{(K)}_{\text{cand}}\}$ exclusively from the good density $\ell(x)$ (Optuna sets $K = 24$ by default).                                                                                                             |
|  **6. Ratio Evaluation**  | Compute $\frac{\ell(x)}{g(x)}$               | For each candidate $x^{(k)}_{\text{cand}}$, evaluate the probability density under both models and compute the ratio $\frac{\ell(x^{(k)}_{\text{cand}})}{g(x^{(k)}_{\text{cand}})}$.                                                                                                                       |
|   **7. Best Selection**   | Return $x^*$                                 | Select the candidate that maximizes the ratio: $x^* = \arg\max_{k} \frac{\ell(x^{(k)}_{\text{cand}})}{g(x^{(k)}_{\text{cand}})}$ and launch the new trial.                                                                                                                                                 |

---

### Deep Dive: How Step 4 (Density Estimation) Leverages Trial History

Kernel Density Estimation in TPE does not treat past trials as static rows in a database. It converts the trial history into continuous probability distributions $\ell(x)$ and $g(x)$ through five mathematical and algorithmic mechanisms:

#### 1. Kernel Placement at Historical Observations ($\mu_i = x^{(i)}$)
Every historical trial parameter $x^{(i)}$ in partition $H_\ell$ or $H_g$ serves directly as the mean ($\mu_i$) of a probability kernel. For continuous variables (in linear or log space), this forms a Gaussian mixture:
$$P(x \mid H) = \sum_{i=1}^{M} w_i \, \mathcal{N}(x \mid \mu_i = x^{(i)}, \sigma_i^2)$$
This anchors density mass directly on parameter values that were actually evaluated in past runs.

#### 2. Adaptive Bandwidth ($\sigma_i$) via Nearest-Neighbor Spacing
Rather than applying a fixed bandwidth across the entire search space, TPE calculates the kernel standard deviation $\sigma_i$ adaptively based on how tightly historical points cluster.
1. Historical observations along each dimension are sorted: $\{x_{(1)}, x_{(2)}, \dots, x_{(M)}\}$.
2. For each interior observation $x_{(i)}$, $\sigma_i$ is set to the maximum distance to its immediate left and right neighbors:
   $$\sigma_i = \max\left( x_{(i)} - x_{(i-1)}, \, x_{(i+1)} - x_{(i)} \right)$$
- **High-Density History (Exploitation)**: In regions where multiple historical trials evaluated nearby values, the neighbor distance shrinks $\implies \sigma_i$ becomes small. The estimator resolves sharp, localized peaks.
- **Low-Density History (Exploration)**: In sparse regions with few historical points, the neighbor distance expands $\implies \sigma_i$ becomes broad, smoothing probability over unexplored gaps.
- **Magic Clipping**: Optuna clamps $\sigma_i$ to a minimum $\sigma_{\min} = \frac{\text{high} - \text{low}}{\min(100, M + 1)}$. As trial count $M$ grows, $\sigma_{\min}$ progressively shrinks, allowing the model to fit narrower, more precise peaks as data accumulates.

#### 3. Temporal Recency Weighting (`default_weights`)
Older trials do not retain equal voting power indefinitely:
- When history size $M \le 25$, all historical trials carry uniform weight $w_i = 1.0$.
- When history size $M > 25$, Optuna applies a linear ramp to past trials:
  $$\mathbf{w} = \left[ \text{linspace}\left(\frac{1}{M}, 1.0, M - 25\right), \, \underbrace{1.0, 1.0, \dots, 1.0}_{25 \text{ most recent trials}} \right]$$
The 25 most recent trials receive full weight ($1.0$), while older trials linearly ramp down toward $1/M$. This allows the density model to adapt to the optimizer's evolving focus without discarding historical failures or successes.

#### 4. Regularization via a Global Exploration Prior
If density estimation relied strictly on historical trials, unvisited search regions would evaluate to zero probability ($\ell(x) = 0$). To preserve exploratory drive across unvisited parameter space, Optuna appends a wide prior pseudo-observation:
$$\mu_{\text{prior}} = \frac{\text{low} + \text{high}}{2}, \quad \sigma_{\text{prior}} = \text{high} - \text{low}, \quad \text{prior\_weight} = 1.0$$
When trial history $M$ is small, this prior distribution exerts strong influence. As $M$ grows, the relative prior weight decays as $\frac{1}{M + 1}$, smoothly shifting the density from prior-guided exploration to data-driven exploitation.

#### 5. Categorical Dirichlet/Laplace Smoothing
For discrete or categorical hyperparameters with $C$ choices, historical trials increment the frequency bin of the selected category. A Laplace smoothing term proportional to the prior weight ensures unselected choices retain non-zero probability:
$$P(x = c) = \frac{\sum_{i=1}^{M} w_i \cdot \mathbb{I}(x^{(i)} = c) + \frac{\text{prior\_weight}}{C}}{\sum_{i=1}^{M} w_i + \text{prior\_weight}}$$
If a categorical choice yielded top validation losses in $H_\ell$, $\ell(c)$ rises. If it produced poor results in $H_g$, $g(c)$ increases, driving down the selection ratio $\frac{\ell(c)}{g(c)}$.

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

> [!check]- Reveal Answer & Explanation
> **Correct Answer**: **A**
> 
> **Explanation**: Maximizing $\frac{\ell(x)}{g(x)}$ directs sampling toward parameter spaces where good runs cluster while actively penalizing areas where runs frequently fail, which mathematically maximizes Expected Improvement. TPE does not use gradients (ruling out C) nor does it force uniform coverage or magnitude filtering (ruling out B and D).

---

### Question 2
Why can't Optuna's built-in `MedianPruner` be used directly in your CalRatio two-objective optimization?

- **A**: Multi-objective optimization produces no single scalar score across Pareto metrics.
- **B**: PyTorch Lightning DDP suppresses early stopping signals emitted across worker GPUs.
- **C**: SQLite WAL storage mode cannot record intermediate evaluation metrics across epochs.
- **D**: Learning rate schedulers produce oscillating loss curves that confuse median thresholds.

> [!check]- Reveal Answer & Explanation
> **Correct Answer**: **A**
> 
> **Explanation**: In multi-objective studies, trials evaluate multiple non-dominated objectives (Signal Region loss and Control Region loss). Because points along a Pareto front cannot be sorted by a single scalar order, a scalar median cannot be computed, requiring the custom trajectory distance metric implemented in `_CohortTrajectoryPruner`.

---

## 5. Primary Source Reading

Read Section 3 ("Tree-structured Parzen Estimator Approach") of:
- [**Algorithms for Hyper-Parameter Optimization** (Bergstra et al., NeurIPS 2011)](https://proceedings.neurips.cc/paper_files/paper/2011/hash/86e8f7ab32cfd12577bc2619bc635690-Abstract.html) ([Direct PDF](https://proceedings.neurips.cc/paper_files/paper/2011/file/86e8f7ab32cfd12577bc2619bc635690-Paper.pdf)).

---

## Next Steps & Follow-up

- Review the [Optuna Cheat Sheet Reference](./reference/optuna-hpo-cheatsheet.md).
- Proceed to [Lesson 0002: Diagnosing the ttbar vs. Dijet Validation Loss Gap](./0002-diagnosing-ttbar-loss-discrepancy.md).
- Ask follow-up questions in chat if any aspect of TPE sampling or cohort pruning requires clarification!
