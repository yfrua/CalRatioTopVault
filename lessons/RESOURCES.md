# Optuna HPO & CalRatio Tuning Resources

## Knowledge

- [Paper: _Optuna: A Next-generation Hyperparameter Optimization Framework_ by Akiba et al. (KDD 2019)](https://arxiv.org/abs/1907.10902)
  Foundational framework architecture paper. Use for: define-by-run API mechanics, architecture of Study/Trial/Storage, and comparison of pruning strategies.
- [Paper: _Algorithms for Hyper-Parameter Optimization_ by Bergstra, Bardenet, Bengio, Kégl (NeurIPS 2011)](https://proceedings.neurips.cc/paper_files/paper/2011/hash/86e8f7ab32cfd12577bc2619bc635690-Abstract.html)
  Primary derivation of the Tree-structured Parzen Estimator (TPE). Use for: understanding non-parametric Parzen density modeling $\ell(x)$ and $g(x)$, and proving the Expected Improvement (EI) ratio $\ell(x)/g(x)$.
- [Paper: _Multiobjective Tree-Structured Parzen Estimator for Efficiently Exploring Pareto Frontier_ by Ozaki et al. (2020)](https://arxiv.org/abs/2004.14014)
  Formal description of MOTPE. Use for: how non-dominated sorting and hypervolume contribution split multi-objective trials into $\ell(x)$ and $g(x)$ distributions.
- [Paper: _Hyperband: A Novel Bandit-Based Approach to Hyperparameter Optimization_ by Li et al. (JMLR 2018)](https://jmlr.org/papers/v18/16-558.html)
  Foundational theory on multi-fidelity pruning and Successive Halving. Use for: understanding resource allocation schedules across epochs and trials.

## Wisdom (Communities)

- [Optuna GitHub Discussions](https://github.com/optuna/optuna/discussions)
  Active forum maintained by Preferred Networks developers. Use for: multi-objective pruning workarounds, SQLite locking with parallel workers, and sampler tuning.
- [PyTorch Lightning Forum](https://lightning.ai/community/)
  Community platform for Lightning practitioners. Use for: troubleshooting multi-GPU DDP training callbacks, metric synchronization, and scheduler interactions.
