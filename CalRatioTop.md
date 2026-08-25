# TODO
- [x] Let NN can take arbitrary number of jet constituents (track, topo-cluster, muon segment)
	- use a `valid` column in dataset to enable/disable that row
- [ ] hyperparameter optimization 
	- two training scenarios: ttbar, dijet
		- ttbar: SR: ttbar, signal, BIB. CR: ttbar, data
		- dijet: SR: dijet/QCD, signal, BIB. CR: dijet, data

# Note Navigation
- defined analysis [channels](notes/Channels.md).

# Resources 
- CalRatio-Transformer-Trainer: [gitlab](https://gitlab.cern.ch/atlas-phys/exot/ueh/calratio_top/calratiognntrainer)
- TopCPToolkit for CalRatioTop: [TopCalRatio](https://gitlab.cern.ch/atlas-phys/exot/ueh/calratio_top/topcalratio)
