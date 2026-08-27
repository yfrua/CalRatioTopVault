
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
-  signal region veto
	- logRatio

# Number of jets obtained
- training data fetch $\to$ data preparation
- train/val/test = 0.75/0.15/0.10.
- bracket after class/label name is the label value.

**main_training_data_dijet**

| file  |   total | QCD (0) | Signal (1) | BIB (2) |
| :---- | ------: | ------: | ---------: | ------: |
| train | 508,516 | 172,965 |    171,028 | 164,523 |
| val   | 101,703 |  34,644 |     33,995 |  33,064 |
| test  |  67,803 |  23,012 |     22,808 |  21,983 |
| total | 678,022 | 230,621 |    227,831 | 219,570 |

**main_training_data_ttbar**

| file  |   total | Ttbar (0) | Signal (1) | BIB (2) |
| :---- | ------: | --------: | ---------: | ------: |
| train | 748,379 |   412,183 |    171,097 | 165,099 |
| val   | 149,675 |    82,488 |     34,179 |  33,008 |
| test  |  99,785 |    54,947 |     22,841 |  21,997 |
| total | 997,839 |   549,618 |    228,117 | 220,104 |

**control_region_dijet**

| file  |     total |    MC (0) |  data (2) |
| :---- | --------: | --------: | --------: |
| train | 3,575,622 | 2,350,960 | 1,224,662 |
| val   |   715,124 |   470,343 |   244,781 |
| test  |   476,750 |   313,391 |   163,359 |
| total | 4,767,496 | 3,134,694 | 1,632,802 |

**control_region_ttbar**

| file | total | MC (0) | data (2) |
| :--- | ---: | ---: | ---: |
| train | 4,442,847 | 3,687,680 | 755,167 |
| val | 888,569 | 737,865 | 150,704 |
| test | 592,380 | 491,677 | 100,703 |
| total | 5,923,796 | 4,917,222 | 1,006,574 |
