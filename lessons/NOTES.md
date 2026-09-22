# Working Notes & Teaching Preferences

## Learner Context
- Repository: CalRatio GNN trainer (`calratiognntrainer_hp_opt_ttbar`), built on PyTorch Lightning / Salt framework.
- Active branch: `perf/hp_opt_ttbar`.
- Hardware: Multi-GPU workstation running parallel trial execution on SQLite (`WAL` mode).
- Immediate challenge: Diagnosing why the current HPO round on ttbar plateaued at Signal Region (SR) validation loss > 0.51, whereas the previous ttbar round reached 0.244 (with CR loss 0.00353), confirming via retraining with previous HPs that this is an HPO optimization failure rather than an irreducible dataset Bayes floor.

## Course Structure Plan
1. **Lesson 0001**: Optuna Under the Hood — How TPE Samples New Trials & How Pruners Make Early-Stopping Decisions.
2. **Reference 0001**: Optuna Hyperparameter Optimization Cheat Sheet & Architecture Blueprint.
3. **Lesson 0002**: Diagnosing the HPO Performance Regression on ttbar — Optimization Pathologies, Metric Alignment, and Corrective Actions.
