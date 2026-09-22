# Optuna HPO Architecture & Algorithm Reference

> **Document Type**: Reference Sheet • CalRatio HPO  
> **Related Lessons**: [Lesson 0001: Optuna Sampling & Pruning](../0001-optuna-sampling-and-pruning.md) • [Lesson 0002: Diagnosing ttbar Loss](../0002-diagnosing-ttbar-loss-discrepancy.md) • [Glossary](./GLOSSARY.md)

---

## 1. Optuna Core Architecture

| Component | Responsibility | CalRatio Implementation |
| :--- | :--- | :--- |
| **Study** | An optimization session managing objective direction(s) and trial history. | `optuna.create_study(directions=["minimize", "minimize"], ...)` |
| **Trial** | A single execution evaluating a candidate parameter set. | Spawned inside `objective_two_vars(trial, ...)` |
| **Storage** | Backend database persisting trial metrics and statuses. | SQLite with WAL mode (`sqlite:///hp_opt/optuna.db`) |
| **Sampler** | Algorithm suggesting the next hyperparameter vector. | Default `TPESampler` (MOTPE for multi-objective) |
| **Pruner** | Early-stopping rule for unpromising intermediate curves. | Custom `_CohortTrajectoryPruner` (2D normalized distance) |

---

## 2. TPE (Tree-structured Parzen Estimator) Algorithm

TPE models $P(x \mid y)$ by partitioning past trials using a loss quantile threshold $\gamma \in (0, 1)$:

- $\ell(x) = P(x \mid y < y^*)$ — Probability density over good hyperparameter configurations.
- $g(x) = P(x \mid y \ge y^*)$ — Probability density over poor hyperparameter configurations.

To sample the next configuration $x^*$, TPE maximizes the **Expected Improvement (EI)**:

> [!math] Expected Improvement Derivation
> $$\text{EI}_{y^*}(x) = \int_{-\infty}^{y^*} (y^* - y) P(y \mid x) \, dy \propto \left[ \gamma + (1 - \gamma) \frac{g(x)}{\ell(x)} \right]^{-1} \propto \frac{\ell(x)}{g(x)}$$
>
> **Decision Rule**:
> $$x^* = \arg\max_{x} \frac{\ell(x)}{g(x)}$$

---

## 3. Pruning Algorithms Overview

| Algorithm | Pruning Criterion | Multi-Objective Support? |
| :--- | :--- | :--- |
| **MedianPruner** | Metric at step $t$ is strictly worse than median of completed trials at step $t$. | **No** (Requires scalar value) |
| **PercentilePruner** | Metric at step $t$ falls below the $p$-th percentile of historical trials. | **No** (Requires scalar value) |
| **SuccessiveHalving (SHA)** | Promotes only top $1/\eta$ trials at geometric budget rungs (e.g. 1, 3, 9 epochs). | **No** (Scalar rank per rung) |
| **CohortTrajectoryPruner** | Normalized 2D Euclidean distance to origin $( \Delta \text{SR}^2 + \Delta \text{CR}^2 )$ exceeds slack times median cohort distance. | **Yes** (Custom CalRatio engine) |

---

## 4. SQLite WAL Mode for Multi-Worker Concurrency

```python
# Required to prevent "database is locked" errors across parallel GPU trials
import sqlite3

with sqlite3.connect("hp_opt/optuna.db") as conn:
    conn.execute("PRAGMA journal_mode=WAL;")
    conn.execute("PRAGMA synchronous=NORMAL;")
```

---

[← Return to Lesson 0001](../0001-optuna-sampling-and-pruning.md)
