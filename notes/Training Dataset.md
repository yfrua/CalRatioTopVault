# Global Preselection & Common Jet Requirements

Applied to all datasets prior to dataset-specific cuts:

- **Primary Vertex (PV) Selection:**
	- Event must have at least one primary vertex with `vertexType() == VxType.VertexType.PriVtx`.
	  - Leading primary vertex must have at least one valid track (`nTrackParticles() > 0`).
- **Good Training Jet Selection (`good_training_jet`):**
	- Collection: `AntiKt4EMTopoJets` (uncalibrated).
	- Jet kinematics: $40 < p_T < 500\text{ GeV}$ and $|\eta| < 2.5$.
	- Jet cleaning: Must pass ATLAS `JetCleaningTool` with cut level `"LooseBadLLP"`.
	- Non-empty cluster veto: Must contain at least one constituent cluster (`len(clusters.pt) > 0`).
	- At least one good jet per event is required (`len(e.jets) > 0`).
- **Constituent & Associated Objects:**
	- **Constituent Clusters:** Dynamic cast from `j.constituentLinks()` to raw `CaloCluster`s via `originalObjectLink`.
	- **Associated Tracks:** Leading PV tracks matched within $\Delta R(\text{jet}, \text{track}) < 0.2$.
	- **Associated Muon Segments:** Segments from `MuonSegments` matched within $|\Delta\phi(\text{jet}, \text{mseg.x})| < 0.2$.
- **Coordinate Rotations (Standardization):**
	- Enabled by default (`--rotation`). Clusters and tracks sorted by $p_T$ descending.
	- $\eta$ and $\phi$ translated relative to the leading cluster (for clusters) or jet axis (for tracks and muon segments).
	- Parity flips applied in $\eta$ and $\phi$ so $\sum (\eta \cdot p_T) \ge 0$ and $\sum (\phi \cdot p_T) \ge 0$.

---

# Signal region ([plots](https://gitlab.cern.ch/algolub/oldnewcomparison))

## Signal (label=1): charming ALP model

- **Truth BSM Particle Filtering:**
	- Truth container: `TruthBSMWithDecayParticles`.
	- PDG IDs: $|\text{pdgId}| == 35$ (scalar/ALP) or $|\text{pdgId}| == 51$ (dark photon / pseudo-scalar).
	- Radiation filter: Particle must not radiate further into a child with the same PDG ID (`not particle_radiates(p)`), isolating the decaying LLP.
	- Must have a valid decay vertex (`hasDecayVtx() == True`).
- **LLP Decay in Calorimeter (Detector Coordinates):**
	- Divided by $|\eta_{\text{LLP}}| = 1.4$:
		- **Central ($|\eta_{\text{LLP}}| < 1.4$):** Transverse decay radius $1200\text{ mm} < L_{xy} < 4000\text{ mm}$ ($L_{xy} = \sqrt{x^2 + y^2}$).
		- **Endcap ($|\eta_{\text{LLP}}| \ge 1.4$):** Longitudinal decay distance $3500\text{ mm} < |L_z| < 6000\text{ mm}$.
- **LLP-to-Jet Matching:**
	- Good training jets matched to surviving fiducial LLPs with $\Delta R(\text{LLP}, \text{jet}) < 0.4$.
	- Only jets with at least one matched LLP are kept.
	- Closest LLP by $\Delta R$ is assigned to each matched jet.
- **Event Weight:** Generator `mcEventWeight`.

## QCD/SM multi-jet (label=0): JZ2 only

- **Event & Jet Selection:**
	- Global preselection and `good_training_jet` ($40 < p_T < 500\text{ GeV}$, $|\eta| < 2.5$, `LooseBadLLP`, $\ge 1$ cluster).
	- No specific requirements other than the global `good_training_jet`.
		- Quite a loose selection; a majority of QCD jets will be chosen.
		- Letting the NN see more samples than what will be used in inference helps training robustness.
	- Dummy null LLP record populated to maintain consistent output schema.
- **Event Weight:** Generator `mcEventWeight`.

## BIB (label=2): data24

- **Event-Level Trigger Selection:**
	- Evaluated on data via Trigger Decision Tool (TDT).
	- Signal inclusive trigger fired AND BIB removal trigger not fired:
	$$\bigvee_{(T_{\text{incl}}, T_{\text{rmbib}})} \Big( \text{tdt\_chain\_fired}(T_{\text{incl}}) \;\land\; \neg \text{tdt\_chain\_fired}(T_{\text{rmbib}}) \Big)$$
	- Trigger pairs:
		1. `HLT_j30_CLEANllp_momemfrac006_calratio_L1jJ160` $\land$ $\neg$ `...calratiormbib_L1jJ160`
		2. `HLT_j30_CLEANllp_momemfrac006_calratio_L1eTAU140` $\land$ $\neg$ `...calratiormbib_L1eTAU140`
		3. `HLT_j30_CLEANllp_momemfrac006_calratio_L1eTAU80` $\land$ $\neg$ `...calratiormbib_L1eTAU80`
		4. `HLT_j30_CLEANllp_momemfrac006_calratio_L1eTAU60_EMPTY` $\land$ $\neg$ `...calratiormbib_L1eTAU60_EMPTY`
		5. `HLT_j30_CLEANllp_momemfrac006_calratio_L1eTAU60_UNPAIRED_ISO` $\land$ $\neg$ `...calratiormbib_L1eTAU60_UNPAIRED_ISO`
- **Jet Selection:**
	- Passes `good_training_jet`.
	- Only 1 jet per event: the jet with the lowest Electromagnetic Fraction (`argmin(jet_emf)`).
- **Event Weight:** Fixed to `1.0`.

## ttbar Background in Signal Region (label=3)

- **Dataset:** Dileptonic $t\bar{t}$ MC (`mc23_13p6TeV.601230.PhPy8EG_A14_ttbar_hdamp258p75_dil...`).
- **Event-Level Selection:** Global preselection only (no CR lepton or trigger cut).
- **Jet Selection:**
	- Passes `good_training_jet`.
	- Hadronic jet selection: Per-jet **$\text{EMF} < 0.97$** (complements the CR $> 0.97$ cut).
- **Event Weight:** Generator `mcEventWeight`.

---

# Control region

## ttbar Control Region (MC: `cr_ttbar`, Data: `cr_data`)

- **Physics Motivation:**
	- Main background comes from dileptonic $t\bar{t}$:
		- $pp \to t \bar{t} \to b \bar{b} + W^+ W^-$
		- $W$ decays leptonically; choose different flavor leptons ($e^\pm \mu^\mp$) to veto decay from $Z / \gamma^* \to \ell^+\ell^-$.
- **Samples Used:**
	- **MC (`cr_ttbar`, label=0):** `mc23_13p6TeV.601230.PhPy8EG_A14_ttbar_hdamp258p75_dil` across `mc23a`, `mc23d`, `mc23e`.
	- **Data (`cr_data`, label=2):** Run 3 collision data (`physics_Main.PhysCont.DAOD_LLP1` for `data22`, `data23`, `data24`).

### Event Selection

- **Trigger:**
	- At least one $e\mu$ trigger fired:
		- `HLT_e7_lhmedium_mu24_L1MU14FCH` (Data 22 / mc23a)
		- `HLT_e7_lhmedium_L1eEM5_mu24_L1MU14FCH` (Data 23 to 25 / mc23d, mc23e)
- **Two Opposite-Sign $e\mu$:**
	- Uncalibrated electrons (`"Electrons"`) and muons (`"Muons"`).
	- Requirement: $(q_e > 0 \land q_\mu < 0) \lor (q_e < 0 \land q_\mu > 0)$.
	- Events lacking an opposite-sign $e\mu$ pair are rejected.
- **Clean Jets:**
	- Jets must pass `good_training_jet` ($40 < p_T < 500\text{ GeV}$, $|\eta| < 2.5$, `LooseBadLLP`, $\ge 1$ cluster).
- **Signal Region Veto (via EMF / logRatio):**
	- Per-jet cut: **$\text{EMF} > 0.97$**.
	- *Mechanism:* Signal region jets have displaced decays in the HCal, producing low EM fraction and high $\text{logRatio} = \log_{10}(E_{\text{HAD}} / E_{\text{EM}})$. Requiring $\text{EMF} = E_{\text{EM}} / (E_{\text{EM}} + E_{\text{HAD}}) > 0.97$ ensures
	$E_{\text{EM}} \gg E_{\text{HAD}}$ and $\log_{10}(E_{\text{HAD}} / E_{\text{EM}}) \ll 0$, vetoing signal-like jets and selecting EM-dominated jets.
- **Event Weight:**
	- `cr_ttbar`: Generator `mcEventWeight`.
	- `cr_data`: Fixed to `1.0`.

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

| file  |     total |    MC (0) |  data (2) |
| :---- | --------: | --------: | --------: |
| train | 4,442,847 | 3,687,680 |   755,167 |
| val   |   888,569 |   737,865 |   150,704 |
| test  |   592,380 |   491,677 |   100,703 |
| total | 5,923,796 | 4,917,222 | 1,006,574 |

# dataset status check
## Ttbar Dataset Health & Overflow Summary

| Dataset                           |      Rows |    Neg Weights | Non-finite W | BF16 Over | FP16 Over | >1000 sigma | Max \|z\| |  Status  |
| :-------------------------------- | --------: | -------------: | -----------: | --------: | --------: | ----------: | --------: | :------: |
| control_region_ttbar_test.h5      |   592,380 |      0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    881.72 | **PASS** |
| control_region_ttbar_train.h5     | 4,442,847 |      0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    912.47 | **PASS** |
| control_region_ttbar_val.h5       |   888,569 |      0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    995.20 | **PASS** |
| main_training_data_ttbar_test.h5  |    99,785 |      0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    240.41 | **PASS** |
| main_training_data_ttbar_train.h5 |   748,379 |      0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    259.57 | **PASS** |
| main_training_data_ttbar_val.h5   |   149,675 |      0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    216.00 | **PASS** |
| control_region_ttbar.parquet      | 5,942,657 | 18,829 (0.32%) |    0 (0.00%) |         0 |         0 |           0 |      6.44 | **FAIL** |
| main_training_data_ttbar.parquet  | 1,044,374 |  2,364 (0.23%) |    0 (0.00%) |         0 |         0 |           0 |      6.44 | **FAIL** |



---

### `control_region_ttbar.parquet` (FAIL)

**Issues Detected:**
- 18,829 negative `mcEventWeight` rows

**`mcEventWeight` Breakdown:**
- **Valid weights:** 5,923,828 / 5,942,657 (99.68%)
- **Negative weights:** 18,829 (0.32%)
- **Infinite weights:** 0 (0.00%)
- **NaN weights:** 0 (0.00%)
- **Weight range:** [1, 1074], mean=71.69, sum=4.247e+08

**Per-Class Breakdown:**

| Class (Label) | Total | Valid | Negative | Non-finite | Weight Sum |
| :--- | ---: | ---: | ---: | ---: | :---: |
| QCD (0) | 4,936,078 | 4,917,249 | 18,829 | 0 | 4.237e+08 |
| BIB (2) | 1,006,579 | 1,006,579 | 0 | 0 | 1.007e+06 |

**Overflow & Outlier Breakdown:**
- **Norm dict applied:** `/data/fye/CalRatio/salt/data/main_training_data_ttbar_norm_dict.yaml`
- **BF16 overflow events:** 0 (elements: 0)
- **FP16 overflow events:** 0 (elements: 0)
- **Outliers > 1000 sigma events:** 0 (elements: 0)
- **Non-finite feature events:** 0 (elements: 0)
- **Worst normalized |z|:** 6.44

---

### `main_training_data_ttbar.parquet` (FAIL)

**Issues Detected:**
- 2,364 negative `mcEventWeight` rows

**`mcEventWeight` Breakdown:**
- **Valid weights:** 1,042,010 / 1,044,374 (99.77%)
- **Negative weights:** 2,364 (0.23%)
- **Infinite weights:** 0 (0.00%)
- **NaN weights:** 0 (0.00%)
- **Weight range:** [8.542e-06, 537.5], mean=46.87, sum=4.883e+07

**Per-Class Breakdown:**

| Class (Label) | Total | Valid | Negative | Non-finite | Weight Sum |
| :--- | ---: | ---: | ---: | ---: | :---: |
| Signal (1) | 238,852 | 238,846 | 6 | 0 | 2.552 |
| BIB (2) | 238,852 | 238,852 | 0 | 0 | 2.389e+05 |
| Ttbar (3) | 566,670 | 564,312 | 2,358 | 0 | 4.86e+07 |

**Overflow & Outlier Breakdown:**
- **Norm dict applied:** `/data/fye/CalRatio/salt/data/main_training_data_ttbar_norm_dict.yaml`
- **BF16 overflow events:** 0 (elements: 0)
- **FP16 overflow events:** 0 (elements: 0)
- **Outliers > 1000 sigma events:** 0 (elements: 0)
- **Non-finite feature events:** 0 (elements: 0)
- **Worst normalized |z|:** 6.44

---
## Dijet Dataset Health & Overflow Summary

| Dataset                           |      Rows | Neg Weights | Non-finite W | BF16 Over | FP16 Over | >1000 sigma | Max \|z\| |  Status  |
| :-------------------------------- | --------: | ----------: | -----------: | --------: | --------: | ----------: | --------: | :------: |
| control_region_dijet_test.h5      |   476,750 |   0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    951.98 | **PASS** |
| control_region_dijet_train.h5     | 3,575,622 |   0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    993.07 | **PASS** |
| control_region_dijet_val.h5       |   715,124 |   0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    964.13 | **PASS** |
| main_training_data_dijet_test.h5  |    67,803 |   0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    232.39 | **PASS** |
| main_training_data_dijet_train.h5 |   508,516 |   0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    223.04 | **PASS** |
| main_training_data_dijet_val.h5   |   101,703 |   0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    206.57 | **PASS** |
| diject_control_region.parquet     | 4,767,749 |   0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |      6.42 | **PASS** |
| main_training_file.parquet        |   716,556 |   6 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |      6.42 | **FAIL** |


---

### `main_training_file.parquet` (FAIL)

**Issues Detected:**
- 6 negative `mcEventWeight` rows

**`mcEventWeight` Breakdown:**
- **Valid weights:** 716,550 / 716,556 (100.00%)
- **Negative weights:** 6 (0.00%)
- **Infinite weights:** 0 (0.00%)
- **NaN weights:** 0 (0.00%)
- **Weight range:** [2.337e-08, 1], mean=0.3334, sum=2.389e+05

**Per-Class Breakdown:**

| Class (Label) | Total | Valid | Negative | Non-finite | Weight Sum |
| :--- | ---: | ---: | ---: | ---: | :---: |
| QCD (0) | 238,852 | 238,852 | 0 | 0 | 32.57 |
| Signal (1) | 238,852 | 238,846 | 6 | 0 | 2.552 |
| BIB (2) | 238,852 | 238,852 | 0 | 0 | 2.389e+05 |

**Overflow & Outlier Breakdown:**
- **Norm dict applied:** `/data/fye/CalRatio/salt/data/main_training_data_dijet_norm_dict.yaml`
- **BF16 overflow events:** 0 (elements: 0)
- **FP16 overflow events:** 0 (elements: 0)
- **Outliers > 1000 sigma events:** 0 (elements: 0)
- **Non-finite feature events:** 0 (elements: 0)
- **Worst normalized |z|:** 6.42