# Working Notes & Teaching Preferences

## Learner Context
- Repository: CalRatio GNN trainer (`calratiognntrainer_hp_opt_ttbar`), built on PyTorch Lightning / Salt framework.
- Active branch: `perf/hp_opt_ttbar`.
- Hardware: Multi-GPU workstation running parallel trial execution on SQLite (`WAL` mode).
- Immediate challenge: Diagnosing why the current HPO round yielded Signal Region (SR) validation loss ~0.51, compared to ~0.20 in the prior dijet run, while understanding Optuna's internal sampling and pruning algorithms.

## Course Structure Plan
1. **Lesson 0001**: Optuna Under the Hood — How TPE Samples New Trials & How Pruners Make Early-Stopping Decisions.
2. **Reference 0001**: Optuna Hyperparameter Optimization Cheat Sheet & Architecture Blueprint.
3. **Lesson 0002**: The $t\bar{t}$ vs. Dijet Loss Discrepancy — Physics, Information Theory, and Multi-Objective Pareto Dynamics.
