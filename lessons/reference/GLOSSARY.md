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
An early-stopping procedure that terminates unpromising trials by tracking multi-objective Euclidean distance trajectories in normalized validation-loss space against completed cohort percentiles after a warmup budget.  
_Avoid_: Epoch killing, loss dropping

**Pareto Frontier (Non-Dominated Set)**:
The set of configurations where neither objective (Signal Region loss or Control Region loss) can be improved without degrading the other.  
_Avoid_: Winner list, top score list

**Bayes Error Rate Floor**:
The irreducible lower bound on classification cross-entropy loss dictated by the conditional entropy $H(Y \mid X)$ when feature distributions between classes physically overlap.  
_Avoid_: Model failure, loss convergence bug
