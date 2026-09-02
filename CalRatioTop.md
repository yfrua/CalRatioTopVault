# TODO
- [x] Let NN can take arbitrary number of jet constituents (track, topo-cluster, muon segment)
	- use a `valid` column in dataset to enable/disable that row
- [x] dataset preparation
	- [x] drop events with negative or non-finite `mcEventWeight`.
		- [ ] how negative weight jets affects?
	- [x] drop jets with post-normalized constituents fp16_overflow ($\pm$ 65,504)
		- fp16 is needed for `flash-attn` (FP16 / BF16 forward and backward, FP8 forward), which is 2x faster and more memory efficient than standard attention.
		- h5 files store raw float32, salt `autocast` casts normalized inputs to fp16.
			- use $z = (x - \mu)/\sigma$ to indicate post-norm value.
		- `control_region_dijet_*.h5` contained corrupt track pT entries
			- up to 2.45×10⁶ GeV inside ≤500 GeV jets, physically impossible, for both MC and data.
			- Post-normalization |z| reached 155,650 → inf in fp16 → NaN loss.
		- drop events by |z| cap of 1,000.
			- Expected effect on real data: ~200/4.77M dijet-CR jets dropped (~0.004%), main region untouched.
		- [ ] provide more details. 
	- number of jets obtained: [Training Dataset](notes/Training%20Dataset.md)
- [ ] hyperparameter optimization
	- two training scenarios: ttbar, dijet
		- ttbar: 
			- SR: ttbar, signal, BIB. 
			- CR: ttbar, data
		- dijet: 
			- SR: dijet/QCD, signal, BIB. 
			- CR: dijet, data
	- [x] make `max_epochs` a hp, selected from {15, 20, 30, 40}
		- make a `max_epochs`-colored pareto front plot
			- see if training longer do improve val loss.
	- [ ] evaluate the optimized trials, see [NN Training Results](notes/NN%20Training%20Results.md).
- [ ] check NN consistency with TopCPToolkit
	- signal and QCD test dataset
		- Signal: `mc23_13p6TeV:DAOD_LLP1.47755565._000002.pool.root.1` from `mc23_13p6TeV:mc23_13p6TeV.562146.MGPy8EG_A14N23LO_ttbar_LL_ALP_fixed_ma5_ctau100.deriv.DAOD_LLP1.e8599_s4159_r15530_p7106`
		- QCD: `mc23_13p6TeV:DAOD_LLP1.47659217._001354.pool.root.1` from `mc23_13p6TeV:mc23_13p6TeV.801167.Py8EG_A14NNPDF23LO_jj_JZ2.deriv.DAOD_LLP1.e8514_s4159_r15224_p7077`
	- to better compare with TCPT
		- [ ] add the index of the jet in the event when they are ordered by pT
		- [ ] disable LLP-matching

# Note Navigation
- defined analysis [Channels](notes/Channels.md).
- DAOD used in the analysis: [DAOD](notes/DAOD.md)
- description for training dataset: [Training Dataset](notes/Training%20Dataset.md)
- subjective tier list for optimized models: [NN Training Results](notes/NN%20Training%20Results.md)

# Resources 
- CalRatio-Transformer-Trainer: [gitlab](https://gitlab.cern.ch/atlas-phys/exot/ueh/calratio_top/calratiognntrainer)
- TopCPToolkit for CalRatioTop: [TopCalRatio](https://gitlab.cern.ch/atlas-phys/exot/ueh/calratio_top/topcalratio)
