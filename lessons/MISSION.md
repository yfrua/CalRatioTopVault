# Mission: Master Optuna Hyperparameter Optimization & Tuning Dynamics for CalRatio GNN

## Why
Understand and control the hyperparameter optimization (HPO) pipeline in the CalRatio
framework so that you can diagnose training regressions, configure multi-objective searches,
and systematically improve model performance on the new ttbar dataset.

## Success looks like
- Accurately explain how Optuna generates new trial parameters via TPE/MOTPE (Expected Improvement, ℓ(x)/g(x) densities) and how to evaluate search-space exploration.
- Master pruning mechanics: standard single-objective pruners (Median, ASHA, Hyperband) and why/how custom cohort trajectory pruning is required for multi-objective CalRatio runs.
- Accurately diagnose HPO regressions across rounds (e.g., why current ttbar HPO settled at SR loss > 0.50 while the previous ttbar round reached 0.244, and why training with previous HPs proves this is an HPO search failure rather than a dataset limit).
- Make informed decisions on adjusting search spaces, metric alignment, and pruning strategies for future HPO campaigns.

## Constraints
- CalRatio repository environment (PyTorch Lightning / Salt, multi-GPU DDP).
- Two-objective optimization (Signal Region vs. Control Region validation loss).

## Out of scope
- Theoretical derivations of continuous Gaussian Processes unrelated to TPE.
- Rewriting Salt submodule internals.
