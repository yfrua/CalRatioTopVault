# TODO
- [x] Let NN can take arbitrary number of jet constituents (track, topo-cluster, muon segment)
	- use a `valid` column in dataset to enable/disable that row
- [ ] dataset preparation
	- [x] drop events with negative or non-finite `mcEventWeight`.
	- [ ] drop jets with post-normalized constituents fp16_overflow
		- fp16 is needed for `flash-attn` (FP16 / BF16 forward and backward, FP8 forward), which is 2x faster and more memory efficient than standard attention.
		- 
- [ ] hyperparameter optimization 
	- two training scenarios: ttbar, dijet
		- ttbar: SR: ttbar, signal, BIB. CR: ttbar, data
		- dijet: SR: dijet/QCD, signal, BIB. CR: dijet, data

# Note Navigation
- defined analysis [channels](notes/Channels.md).

# Resources 
- CalRatio-Transformer-Trainer: [gitlab](https://gitlab.cern.ch/atlas-phys/exot/ueh/calratio_top/calratiognntrainer)
- TopCPToolkit for CalRatioTop: [TopCalRatio](https://gitlab.cern.ch/atlas-phys/exot/ueh/calratio_top/topcalratio)
