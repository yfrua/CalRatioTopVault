# TODO
- [x] Let NN can take arbitrary number of jet constituents (track, topo-cluster, muon segment)
	- use a `valid` column in dataset to enable/disable that row
- [ ] dataset preparation
	- [x] drop events with negative or non-finite `mcEventWeight`.
	- [ ] drop jets with post-normalized constituents fp16_overflow ($\pm 65504$)
		- fp16 is needed for `flash-attn` (FP16 / BF16 forward and backward, FP8 forward), which is 2x faster and more memory efficient than standard attention.
		- tracks pT
			- dijet control region: 
				- worst raw values up to 2.45e6 GeV (469.1 GeV for jet pT); 
				- 33 jets over raw 65504 in train (19 MC + 14 data), 10 in val, 3 in test
			- ttbar control region: 1 in train
		- post-normalization (main _dijet_ norm dict) only this variable produces true fp16 inf: 3 rows in train exceed |z| > 65504 (max |z| ≈ 155,650)
		- danger band 1000 < |z| < 65504: ~145 train / 34 val / 15 test rows
		- msegs → chiSquared: 4 rows in CR dijet train/val with raw ≈ 9.3×10⁴; post-norm |z| ≤ ~4000 — inside fp16 range, caught by the new filter anyway
		- clusters → l1..l4ecal/hcal: huge raw values (up to 2.2×10⁶, ~66% of CR-dijet jets touched) but stds are enormous, so post-norm |z| ≤ ~306 — benign, deliberately kept by the filter
- [ ] hyperparameter optimization 
	- two training scenarios: ttbar, dijet
		- ttbar: SR: ttbar, signal, BIB. CR: ttbar, data
		- dijet: SR: dijet/QCD, signal, BIB. CR: dijet, data

# Note Navigation
- defined analysis [channels](notes/Channels.md).

# Resources 
- CalRatio-Transformer-Trainer: [gitlab](https://gitlab.cern.ch/atlas-phys/exot/ueh/calratio_top/calratiognntrainer)
- TopCPToolkit for CalRatioTop: [TopCalRatio](https://gitlab.cern.ch/atlas-phys/exot/ueh/calratio_top/topcalratio)
