# CalRatio HPO & Tuning Glossary

Canonical terminology and precise definitions for hyperparameter optimization and model tuning in the CalRatio framework.

## Terms

**Tree-structured Parzen Estimator (TPE)**:
A non-parametric Bayesian optimization algorithm that models parameter distributions conditioned on performance classes $\ell(x) = P(x \mid y < y^*)$ and $g(x) = P(x \mid y \ge y^*)$, choosing candidates that maximize Expected Improvement via the density ratio $\ell(x)/g(x)$.  
_Avoid_: Gaussian Process surrogate, grid search, random search

**Expected Improvement (EI)**:
The continuous expectation of how much a candidate configuration will improve over an established validation loss threshold $y^*$.  
_Avoid_: Loss delta, simple improvement score

**Cohort Trajectory Pruning**:
An early-stopping procedure that terminates unpromising trials by tracking multi-objective Euclidean distance trajectories $\sqrt{\mathcal{L}_{\text{SR}}^2 + \mathcal{L}_{\text{CR}}^2}$ against completed cohort medians after a warmup budget.  
_Avoid_: Epoch killing, loss dropping

**Pareto Frontier (Non-Dominated Set)**:
The set of configurations where neither objective (Signal Region loss or Control Region loss) can be improved without degrading the other.  
_Avoid_: Winner list, top score list

**Bayes Error Rate Floor**:
The irreducible lower bound on classification cross-entropy loss dictated by the conditional entropy $H(Y \mid X)$ when feature distributions between classes physically overlap.  
_Avoid_: Model failure, loss convergence bug

**Multi-Objective Tree-structured Parzen Estimator (MOTPE)**:
An extension of TPE for multi-objective spaces where trials are partitioned into the "good" set $\ell(x)$ via non-dominated Pareto ranking and hypervolume subset selection rather than a 1D scalar threshold $y^*$. Trials in $\ell(x)$ are weighted by their marginal hypervolume contribution $\Delta HV_i$.  
_Avoid_: Scalarized TPE, weighted-sum TPE

**Hypervolume Subset Selection Problem (HSSP)**:
The combinatorial problem of choosing a fixed-size subset of Pareto solutions that maximizes the dominated hypervolume against a reference point. Optuna uses a greedy $(1 - 1/e)$ approximation algorithm to resolve tie-breaks when a Pareto rank straddles the $\gamma$-quantile quota.  
_Avoid_: Random rank subsampling, first-come selection

**Trial Enqueueing**:
The mechanism (`study.enqueue_trial`) of pre-registering specific hyperparameter configurations to be evaluated before or during autonomous TPE search. Used in CalRatio (`--enqueue-trials`) to warm-start studies with proven architectures and anchor the initial Pareto front.  
_Avoid_: Hardcoded seeding, manual override
