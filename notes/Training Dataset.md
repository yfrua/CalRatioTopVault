
# Signal region ([plots](https://gitlab.cern.ch/algolub/oldnewcomparison)):

## Signal (label=1): charming ALP model

- LLP decay in calorimeter.
- Have any LLP survived previous condition matched to jet by ΔR(LLP,jet)<0.4.

## QCD/SM multi-jet (label=0): JZ2 only

- No specific requirements other than the global good_training_jet (jet pT, eta, cleaning selection).
	- quite a loose selection, a majority of QCD jets will be chosen. 
	- let NN see more samples than what will be used in inference may be good.

## BIB (label=2): data24

- Signal trigger fired and BIB removal trigger not fired.
- Only 1 jet per event: the jet with lowest EMF.

# Control region
## ttbar
- main background comes from ttbar:
	- $pp\to t \bar{t} \to b \bar{b} + W^+ W^-$
	- $W$ decay leptonly, choose different flavor lepton to veto decay from Z.
- using samples list [here](Samples.md)

### Event Selection
- [Trigger](Trigger.md)
- two opposite sign $e \mu$.
- clean jets
- #TODO signal region veto
	- logRatio?
