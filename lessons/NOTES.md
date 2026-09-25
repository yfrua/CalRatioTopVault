# Working Notes & Teaching Preferences

## Learner Context
- Repository: CalRatio GNN trainer (`calratiognntrainer_hp_opt_ttbar`), built on PyTorch Lightning / Salt framework.
- Active branch: `perf/hp_opt_ttbar`.
- Hardware: Multi-GPU workstation running parallel trial execution on SQLite (`WAL` mode).
- Immediate challenge: Diagnosed why the current HPO round on ttbar plateaued at Signal Region (SR) validation loss > 0.51 (and Trial 0 at 0.637) while the benchmark champion reached 0.244. Uncovered the primary root cause: modality and padding mask scrambling in `salt` / `hp_opt` caused by alphabetical sorting of YAML dictionary keys and mismatched `init_nets` ordering, alongside effective batch size differences (4800 vs 1000). Fixed via defensive mask alignment in `CalRatioTransformer.forward`, `sort_keys=False` in YAML dumping, standardized `init_nets` ordering, and sequential 4-GPU execution. Confirmed resolution on live HPO: Trial 0 reached SR validation loss 0.24393.

## Course Structure Plan
1. **Lesson 0001**: Optuna Under the Hood — How TPE Samples New Trials & How Pruners Make Early-Stopping Decisions.
2. **Reference 0001**: Optuna Hyperparameter Optimization Cheat Sheet & Architecture Blueprint.
3. **Lesson 0002**: Diagnosing the HPO Performance Regression on ttbar — Modality Mask Scrambling, Metric Alignment, Distributed Batch Sizing, and Live Resolution.

