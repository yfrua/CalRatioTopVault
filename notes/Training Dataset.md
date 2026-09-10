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

# Signal region ([plots](https://gitlab.cern.ch/fye/oldnewcomparison))

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
	- Signal inclusive trigger fired AND BIB removal trigger not fired.
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

**main_training_data_ttbar**

| file  |   total | Ttbar (0) | Signal (1) | BIB (2) |
| :---- | ------: | --------: | ---------: | ------: |
| train | 508,339 |   173,325 |    170,764 | 164,250 |
| val   | 101,667 |    34,836 |     33,961 |  32,870 |
| test  |  67,780 |    23,106 |     22,781 |  21,893 |
| total | 677,786 |   231,267 |    227,506 | 219,013 |

**control_region_ttbar**

| file  |     total |    MC (0) |  data (2) |
| :---- | --------: | --------: | --------: |
| train | 1,507,073 |   751,834 |   755,239 |
| val   |   301,414 |   150,654 |   150,760 |
| test  |   200,944 |   100,368 |   100,576 |
| total | 2,009,431 | 1,002,856 | 1,006,575 |


# dataset status check
## Ttbar Dataset Health & Overflow Summary

| Dataset                           |      Rows |   Neg Weights | Non-finite W | BF16 Over | FP16 Over | >1000 sigma | Max \|z\| |  Status  |
| :-------------------------------- | --------: | ------------: | -----------: | --------: | --------: | ----------: | --------: | :------: |
| control_region_ttbar_test.h5      |   200,944 |     0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    833.18 | **PASS** |
| control_region_ttbar_train.h5     | 1,507,073 |     0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    953.58 | **PASS** |
| control_region_ttbar_val.h5       |   301,414 |     0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    888.25 | **PASS** |
| main_training_data_ttbar_test.h5  |    67,780 |     0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    131.46 | **PASS** |
| main_training_data_ttbar_train.h5 |   508,339 |     0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    243.05 | **PASS** |
| main_training_data_ttbar_val.h5   |   101,667 |     0 (0.00%) |    0 (0.00%) |         0 |         0 |           0 |    210.82 | **PASS** |
| control_region_ttbar.parquet      | 2,013,158 | 3,720 (0.18%) |    0 (0.00%) |         0 |         0 |           7 |  42281.47 | **FAIL** |
| main_training_data_ttbar.parquet  |   716,601 | 1,008 (0.14%) |    0 (0.00%) |         0 |         0 |           2 |   5486.73 | **FAIL** |



---

### `control_region_ttbar_test.h5` (PASS)

**`mcEventWeight` Breakdown:**
- **Valid weights:** 200,944 / 200,944 (100.00%)
- **Negative weights:** 0 (0.00%)
- **Infinite weights:** 0 (0.00%)
- **NaN weights:** 0 (0.00%)
- **Weight range:** [0.988, 4.643], mean=1.002, sum=2.013e+05

**Per-Class Breakdown:**

| Class (Label) | Total | Valid | Negative | Non-finite | Weight Sum |
| :--- | ---: | ---: | ---: | ---: | :---: |
| MC (0) | 100,368 | 100,368 | 0 | 0 | 1.007e+05 |
| class_2 (2) | 100,576 | 100,576 | 0 | 0 | 1.006e+05 |

**Overflow & Outlier Breakdown:**
- **Norm dict applied:** `/data/fye/CalRatio/salt/data/main_training_data_ttbar_norm_dict.yaml`
- **BF16 overflow events:** 0 (elements: 0)
- **FP16 overflow events:** 0 (elements: 0)
- **Outliers > 1000 sigma events:** 0 (elements: 0)
- **Non-finite feature events:** 0 (elements: 0)
- **Worst normalized |z|:** 833.18

**Top Extreme Features:**

| Feature | Max \|z\| | Example Raw | Mean | Std | BF16 Over | FP16 Over | >1000 sigma | NaN/Inf |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| tracks.pt | 833.18 | 1.182e+04 | 8.992 | 14.17 | 0 | 0 | 0 | 0 |
| clusters.l3ecal | 123.77 | 1.594e+06 | 3679 | 1.285e+04 | 0 | 0 | 0 | 0 |
| msegs.chiSquared | 120.65 | 2436 | 10.65 | 20.1 | 0 | 0 | 0 | 0 |
| clusters.l2ecal | 72.73 | 3.385e+05 | 1429 | 4634 | 0 | 0 | 0 | 0 |
| clusters.l4ecal | 68.77 | 8.292e+04 | 335.4 | 1201 | 0 | 0 | 0 | 0 |
| clusters.l1ecal | 56.39 | 9.367e+04 | 438.2 | 1653 | 0 | 0 | 0 | 0 |
| tracks.d0 | 40.11 | 3.856 | -0.0007625 | 0.09614 | 0 | 0 | 0 | 0 |
| clusters.time | 34.61 | 165.1 | 0.09178 | 4.768 | 0 | 0 | 0 | 0 |
| tracks.chiSquared | 17.28 | 313.2 | 31.65 | 16.29 | 0 | 0 | 0 | 0 |
| clusters.pt | 16.42 | 404.5 | 9.547 | 24.05 | 0 | 0 | 0 | 0 |

**Extreme Feature Value Examples (Top by |z|):**

| Row | Event Number | Feature | Raw Value | Mean | Std | \|z\| |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| 147,101 | 93,553,970 | tracks.pt | 1.182e+04 | 8.992 | 14.17 | 833.18 |
| 38,908 | 781,821,586 | tracks.pt | 8163 | 8.992 | 14.17 | 575.34 |
| 187,875 | 82,295,007 | tracks.pt | 4130 | 8.992 | 14.17 | 290.76 |
| 156,998 | 65,790,849 | tracks.pt | 3806 | 8.992 | 14.17 | 267.91 |
| 129,112 | 69,517,538 | tracks.pt | 3384 | 8.992 | 14.17 | 238.15 |
| 111,220 | 73,709,775 | tracks.pt | 3290 | 8.992 | 14.17 | 231.50 |
| 182,054 | 52,335,263 | tracks.pt | 1766 | 8.992 | 14.17 | 123.99 |
| 44,202 | 711,122,883 | clusters.l3ecal | 1.594e+06 | 3679 | 1.285e+04 | 123.77 |
| 150,901 | 70,021,255 | tracks.pt | 1746 | 8.992 | 14.17 | 122.57 |
| 76,781 | 1,464,871,877 | msegs.chiSquared | 2436 | 10.65 | 20.1 | 120.65 |

---

### `control_region_ttbar_train.h5` (PASS)

**`mcEventWeight` Breakdown:**
- **Valid weights:** 1,507,073 / 1,507,073 (100.00%)
- **Negative weights:** 0 (0.00%)
- **Infinite weights:** 0 (0.00%)
- **NaN weights:** 0 (0.00%)
- **Weight range:** [0.988, 4.862], mean=1.002, sum=1.51e+06

**Per-Class Breakdown:**

| Class (Label) | Total | Valid | Negative | Non-finite | Weight Sum |
| :--- | ---: | ---: | ---: | ---: | :---: |
| MC (0) | 751,834 | 751,834 | 0 | 0 | 7.546e+05 |
| class_2 (2) | 755,239 | 755,239 | 0 | 0 | 7.552e+05 |

**Overflow & Outlier Breakdown:**
- **Norm dict applied:** `/data/fye/CalRatio/salt/data/main_training_data_ttbar_norm_dict.yaml`
- **BF16 overflow events:** 0 (elements: 0)
- **FP16 overflow events:** 0 (elements: 0)
- **Outliers > 1000 sigma events:** 0 (elements: 0)
- **Non-finite feature events:** 0 (elements: 0)
- **Worst normalized |z|:** 953.58

**Top Extreme Features:**

| Feature | Max \|z\| | Example Raw | Mean | Std | BF16 Over | FP16 Over | >1000 sigma | NaN/Inf |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| tracks.pt | 953.58 | 1.352e+04 | 8.992 | 14.17 | 0 | 0 | 0 | 0 |
| msegs.chiSquared | 208.16 | 4196 | 10.65 | 20.1 | 0 | 0 | 0 | 0 |
| clusters.l3ecal | 138.75 | 1.786e+06 | 3679 | 1.285e+04 | 0 | 0 | 0 | 0 |
| clusters.l4ecal | 137.56 | 1.655e+05 | 335.4 | 1201 | 0 | 0 | 0 | 0 |
| clusters.l2ecal | 114.15 | 5.304e+05 | 1429 | 4634 | 0 | 0 | 0 | 0 |
| clusters.l1ecal | 89.61 | 1.486e+05 | 438.2 | 1653 | 0 | 0 | 0 | 0 |
| clusters.time | 63.31 | 302 | 0.09178 | 4.768 | 0 | 0 | 0 | 0 |
| tracks.d0 | 41.38 | -3.979 | -0.0007625 | 0.09614 | 0 | 0 | 0 | 0 |
| msegs.etaDir | 20.92 | 37.68 | 0.0179 | 1.8 | 0 | 0 | 0 | 0 |
| tracks.chiSquared | 20.10 | 359.2 | 31.65 | 16.29 | 0 | 0 | 0 | 0 |

**Extreme Feature Value Examples (Top by |z|):**

| Row | Event Number | Feature | Raw Value | Mean | Std | \|z\| |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1,456,267 | 65,332,181 | tracks.pt | 1.352e+04 | 8.992 | 14.17 | 953.58 |
| 53,320 | 750,641,631 | tracks.pt | 1.302e+04 | 8.992 | 14.17 | 918.15 |
| 289,358 | 1,729,606,090 | tracks.pt | 1.229e+04 | 8.992 | 14.17 | 866.47 |
| 818,425 | 84,793,042 | tracks.pt | 1.217e+04 | 8.992 | 14.17 | 857.82 |
| 78,721 | 340,395,944 | tracks.pt | 1.17e+04 | 8.992 | 14.17 | 824.62 |
| 1,445,592 | 51,673,175 | tracks.pt | 7207 | 8.992 | 14.17 | 507.88 |
| 519,768 | 1,441,427,442 | tracks.pt | 6742 | 8.992 | 14.17 | 475.09 |
| 331,923 | 2,876,843,130 | tracks.pt | 6620 | 8.992 | 14.17 | 466.43 |
| 651,808 | 910,445,862 | tracks.pt | 6077 | 8.992 | 14.17 | 428.11 |
| 880,041 | 66,915,670 | tracks.pt | 5856 | 8.992 | 14.17 | 412.52 |

---

### `control_region_ttbar_val.h5` (PASS)

**`mcEventWeight` Breakdown:**
- **Valid weights:** 301,414 / 301,414 (100.00%)
- **Negative weights:** 0 (0.00%)
- **Infinite weights:** 0 (0.00%)
- **NaN weights:** 0 (0.00%)
- **Weight range:** [0.988, 4.247], mean=1.002, sum=3.02e+05

**Per-Class Breakdown:**

| Class (Label) | Total | Valid | Negative | Non-finite | Weight Sum |
| :--- | ---: | ---: | ---: | ---: | :---: |
| MC (0) | 150,654 | 150,654 | 0 | 0 | 1.512e+05 |
| class_2 (2) | 150,760 | 150,760 | 0 | 0 | 1.508e+05 |

**Overflow & Outlier Breakdown:**
- **Norm dict applied:** `/data/fye/CalRatio/salt/data/main_training_data_ttbar_norm_dict.yaml`
- **BF16 overflow events:** 0 (elements: 0)
- **FP16 overflow events:** 0 (elements: 0)
- **Outliers > 1000 sigma events:** 0 (elements: 0)
- **Non-finite feature events:** 0 (elements: 0)
- **Worst normalized |z|:** 888.25

**Top Extreme Features:**

| Feature | Max \|z\| | Example Raw | Mean | Std | BF16 Over | FP16 Over | >1000 sigma | NaN/Inf |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| tracks.pt | 888.25 | 1.26e+04 | 8.992 | 14.17 | 0 | 0 | 0 | 0 |
| msegs.chiSquared | 335.57 | 6757 | 10.65 | 20.1 | 0 | 0 | 0 | 0 |
| clusters.l3ecal | 147.61 | 1.9e+06 | 3679 | 1.285e+04 | 0 | 0 | 0 | 0 |
| clusters.l2ecal | 95.43 | 4.437e+05 | 1429 | 4634 | 0 | 0 | 0 | 0 |
| clusters.l4ecal | 84.20 | 1.015e+05 | 335.4 | 1201 | 0 | 0 | 0 | 0 |
| clusters.l1ecal | 67.12 | 1.114e+05 | 438.2 | 1653 | 0 | 0 | 0 | 0 |
| tracks.d0 | 41.04 | 3.945 | -0.0007625 | 0.09614 | 0 | 0 | 0 | 0 |
| clusters.time | 28.80 | 137.4 | 0.09178 | 4.768 | 0 | 0 | 0 | 0 |
| tracks.chiSquared | 18.03 | 325.3 | 31.65 | 16.29 | 0 | 0 | 0 | 0 |
| clusters.pt | 16.92 | 416.5 | 9.547 | 24.05 | 0 | 0 | 0 | 0 |

**Extreme Feature Value Examples (Top by |z|):**

| Row | Event Number | Feature | Raw Value | Mean | Std | \|z\| |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| 179,620 | 89,065,586 | tracks.pt | 1.26e+04 | 8.992 | 14.17 | 888.25 |
| 156,216 | 83,073,877 | tracks.pt | 1.028e+04 | 8.992 | 14.17 | 724.49 |
| 56,871 | 410,646,696 | tracks.pt | 6005 | 8.992 | 14.17 | 423.07 |
| 129,831 | 577,703,064 | tracks.pt | 5235 | 8.992 | 14.17 | 368.73 |
| 80,119 | 3,064,292,150 | msegs.chiSquared | 6757 | 10.65 | 20.1 | 335.57 |
| 293,242 | 85,236,134 | tracks.pt | 4708 | 8.992 | 14.17 | 331.53 |
| 296,725 | 94,228,681 | tracks.pt | 3944 | 8.992 | 14.17 | 277.67 |
| 286,673 | 54,801,788 | tracks.pt | 3323 | 8.992 | 14.17 | 233.84 |
| 233,239 | 71,258,891 | tracks.pt | 2991 | 8.992 | 14.17 | 210.40 |
| 242,996 | 52,114,729 | tracks.pt | 2324 | 8.992 | 14.17 | 163.31 |

---

### `main_training_data_ttbar_test.h5` (PASS)

**`mcEventWeight` Breakdown:**
- **Valid weights:** 67,780 / 67,780 (100.00%)
- **Negative weights:** 0 (0.00%)
- **Infinite weights:** 0 (0.00%)
- **NaN weights:** 0 (0.00%)
- **Weight range:** [0.7995, 4.045], mean=1.002, sum=6.79e+04

**Per-Class Breakdown:**

| Class (Label) | Total | Valid | Negative | Non-finite | Weight Sum |
| :--- | ---: | ---: | ---: | ---: | :---: |
| Ttbar (0) | 23,106 | 23,106 | 0 | 0 | 2.32e+04 |
| Signal (1) | 22,781 | 22,781 | 0 | 0 | 2.28e+04 |
| BIB (2) | 21,893 | 21,893 | 0 | 0 | 2.189e+04 |

**Overflow & Outlier Breakdown:**
- **Norm dict applied:** `/data/fye/CalRatio/salt/data/main_training_data_ttbar_norm_dict.yaml`
- **BF16 overflow events:** 0 (elements: 0)
- **FP16 overflow events:** 0 (elements: 0)
- **Outliers > 1000 sigma events:** 0 (elements: 0)
- **Non-finite feature events:** 0 (elements: 0)
- **Worst normalized |z|:** 131.46

**Top Extreme Features:**

| Feature | Max \|z\| | Example Raw | Mean | Std | BF16 Over | FP16 Over | >1000 sigma | NaN/Inf |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| clusters.l1hcal | 131.46 | 1.046e+06 | 755.7 | 7948 | 0 | 0 | 0 | 0 |
| tracks.pt | 98.49 | 1405 | 8.992 | 14.17 | 0 | 0 | 0 | 0 |
| msegs.chiSquared | 97.55 | 1972 | 10.65 | 20.1 | 0 | 0 | 0 | 0 |
| clusters.l4hcal | 81.28 | 6.854e+05 | 889.1 | 8422 | 0 | 0 | 0 | 0 |
| clusters.l3hcal | 65.34 | 9.514e+05 | 2060 | 1.453e+04 | 0 | 0 | 0 | 0 |
| clusters.l2hcal | 55.32 | 8.755e+05 | 2603 | 1.578e+04 | 0 | 0 | 0 | 0 |
| clusters.l1ecal | 40.04 | 6.665e+04 | 438.2 | 1653 | 0 | 0 | 0 | 0 |
| clusters.l2ecal | 36.37 | 1.7e+05 | 1429 | 4634 | 0 | 0 | 0 | 0 |
| tracks.d0 | 34.48 | 3.314 | -0.0007625 | 0.09614 | 0 | 0 | 0 | 0 |
| clusters.l3ecal | 24.88 | 3.233e+05 | 3679 | 1.285e+04 | 0 | 0 | 0 | 0 |

**Extreme Feature Value Examples (Top by |z|):**

| Row | Event Number | Feature | Raw Value | Mean | Std | \|z\| |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| 40,495 | 1,409,025,711 | clusters.l1hcal | 1.046e+06 | 755.7 | 7948 | 131.46 |
| 31,875 | 1,442,173,011 | clusters.l1hcal | 9.516e+05 | 755.7 | 7948 | 119.63 |
| 33,629 | 631,300,827 | clusters.l1hcal | 8.672e+05 | 755.7 | 7948 | 109.01 |
| 39,394 | 2,684,382,559 | tracks.pt | 1405 | 8.992 | 14.17 | 98.49 |
| 36,760 | 811,044,740 | msegs.chiSquared | 1972 | 10.65 | 20.1 | 97.55 |
| 32,980 | 834,042,087 | clusters.l1hcal | 7.513e+05 | 755.7 | 7948 | 94.43 |
| 31,924 | 866,643,633 | msegs.chiSquared | 1906 | 10.65 | 20.1 | 94.27 |
| 23,969 | 2,419,030,016 | clusters.l1hcal | 7.315e+05 | 755.7 | 7948 | 91.93 |
| 24,844 | 2,798,686,466 | clusters.l1hcal | 6.793e+05 | 755.7 | 7948 | 85.37 |
| 13,910 | 45,429 | clusters.l4hcal | 6.854e+05 | 889.1 | 8422 | 81.28 |

---

### `main_training_data_ttbar_train.h5` (PASS)

**`mcEventWeight` Breakdown:**
- **Valid weights:** 508,339 / 508,339 (100.00%)
- **Negative weights:** 0 (0.00%)
- **Infinite weights:** 0 (0.00%)
- **NaN weights:** 0 (0.00%)
- **Weight range:** [0.7995, 6.35], mean=1.001, sum=5.09e+05

**Per-Class Breakdown:**

| Class (Label) | Total | Valid | Negative | Non-finite | Weight Sum |
| :--- | ---: | ---: | ---: | ---: | :---: |
| Ttbar (0) | 173,325 | 173,325 | 0 | 0 | 1.741e+05 |
| Signal (1) | 170,764 | 170,764 | 0 | 0 | 1.707e+05 |
| BIB (2) | 164,250 | 164,250 | 0 | 0 | 1.642e+05 |

**Overflow & Outlier Breakdown:**
- **Norm dict applied:** `/data/fye/CalRatio/salt/data/main_training_data_ttbar_norm_dict.yaml`
- **BF16 overflow events:** 0 (elements: 0)
- **FP16 overflow events:** 0 (elements: 0)
- **Outliers > 1000 sigma events:** 0 (elements: 0)
- **Non-finite feature events:** 0 (elements: 0)
- **Worst normalized |z|:** 243.05

**Top Extreme Features:**

| Feature | Max \|z\| | Example Raw | Mean | Std | BF16 Over | FP16 Over | >1000 sigma | NaN/Inf |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| tracks.pt | 243.05 | 3454 | 8.992 | 14.17 | 0 | 0 | 0 | 0 |
| msegs.chiSquared | 194.94 | 3930 | 10.65 | 20.1 | 0 | 0 | 0 | 0 |
| clusters.time | 181.56 | -865.6 | 0.09178 | 4.768 | 0 | 0 | 0 | 0 |
| clusters.l1hcal | 145.34 | 1.156e+06 | 755.7 | 7948 | 0 | 0 | 0 | 0 |
| clusters.l4hcal | 101.92 | 8.592e+05 | 889.1 | 8422 | 0 | 0 | 0 | 0 |
| clusters.l2hcal | 80.25 | 1.269e+06 | 2603 | 1.578e+04 | 0 | 0 | 0 | 0 |
| clusters.l3hcal | 71.41 | 1.04e+06 | 2060 | 1.453e+04 | 0 | 0 | 0 | 0 |
| clusters.l2ecal | 45.79 | 2.136e+05 | 1429 | 4634 | 0 | 0 | 0 | 0 |
| clusters.l1ecal | 41.84 | 6.963e+04 | 438.2 | 1653 | 0 | 0 | 0 | 0 |
| tracks.d0 | 40.69 | 3.912 | -0.0007625 | 0.09614 | 0 | 0 | 0 | 0 |

**Extreme Feature Value Examples (Top by |z|):**

| Row | Event Number | Feature | Raw Value | Mean | Std | \|z\| |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| 356,824 | 98,147,154 | tracks.pt | 3454 | 8.992 | 14.17 | 243.05 |
| 193,869 | 1,818,812,257 | tracks.pt | 2773 | 8.992 | 14.17 | 195.01 |
| 324,877 | 457,317,267 | msegs.chiSquared | 3930 | 10.65 | 20.1 | 194.94 |
| 435,142 | 72,483,025 | clusters.time | -865.6 | 0.09178 | 4.768 | 181.56 |
| 263,328 | 1,035,061,438 | clusters.l1hcal | 1.156e+06 | 755.7 | 7948 | 145.34 |
| 205,026 | 875,810,577 | clusters.l1hcal | 1.112e+06 | 755.7 | 7948 | 139.77 |
| 234,590 | 773,607,944 | clusters.l1hcal | 1.034e+06 | 755.7 | 7948 | 129.99 |
| 245,232 | 661,565,480 | clusters.l1hcal | 9.963e+05 | 755.7 | 7948 | 125.26 |
| 308,347 | 2,989,249,633 | tracks.pt | 1751 | 8.992 | 14.17 | 122.92 |
| 247,937 | 975,541,525 | msegs.chiSquared | 2481 | 10.65 | 20.1 | 122.87 |

---

### `main_training_data_ttbar_val.h5` (PASS)

**`mcEventWeight` Breakdown:**
- **Valid weights:** 101,667 / 101,667 (100.00%)
- **Negative weights:** 0 (0.00%)
- **Infinite weights:** 0 (0.00%)
- **NaN weights:** 0 (0.00%)
- **Weight range:** [0.7995, 4.477], mean=1.001, sum=1.018e+05

**Per-Class Breakdown:**

| Class (Label) | Total | Valid | Negative | Non-finite | Weight Sum |
| :--- | ---: | ---: | ---: | ---: | :---: |
| Ttbar (0) | 34,836 | 34,836 | 0 | 0 | 3.497e+04 |
| Signal (1) | 33,961 | 33,961 | 0 | 0 | 3.395e+04 |
| BIB (2) | 32,870 | 32,870 | 0 | 0 | 3.287e+04 |

**Overflow & Outlier Breakdown:**
- **Norm dict applied:** `/data/fye/CalRatio/salt/data/main_training_data_ttbar_norm_dict.yaml`
- **BF16 overflow events:** 0 (elements: 0)
- **FP16 overflow events:** 0 (elements: 0)
- **Outliers > 1000 sigma events:** 0 (elements: 0)
- **Non-finite feature events:** 0 (elements: 0)
- **Worst normalized |z|:** 210.82

**Top Extreme Features:**

| Feature | Max \|z\| | Example Raw | Mean | Std | BF16 Over | FP16 Over | >1000 sigma | NaN/Inf |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| msegs.chiSquared | 210.82 | 4249 | 10.65 | 20.1 | 0 | 0 | 0 | 0 |
| clusters.l1hcal | 156.71 | 1.246e+06 | 755.7 | 7948 | 0 | 0 | 0 | 0 |
| clusters.l4hcal | 95.97 | 8.092e+05 | 889.1 | 8422 | 0 | 0 | 0 | 0 |
| clusters.l3hcal | 65.02 | 9.468e+05 | 2060 | 1.453e+04 | 0 | 0 | 0 | 0 |
| clusters.l2hcal | 59.11 | 9.354e+05 | 2603 | 1.578e+04 | 0 | 0 | 0 | 0 |
| clusters.time | 48.08 | 229.3 | 0.09178 | 4.768 | 0 | 0 | 0 | 0 |
| tracks.pt | 43.53 | 625.9 | 8.992 | 14.17 | 0 | 0 | 0 | 0 |
| clusters.l2ecal | 42.88 | 2.002e+05 | 1429 | 4634 | 0 | 0 | 0 | 0 |
| clusters.l1ecal | 41.69 | 6.937e+04 | 438.2 | 1653 | 0 | 0 | 0 | 0 |
| tracks.d0 | 40.96 | 3.937 | -0.0007625 | 0.09614 | 0 | 0 | 0 | 0 |

**Extreme Feature Value Examples (Top by |z|):**

| Row | Event Number | Feature | Raw Value | Mean | Std | \|z\| |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| 17,431 | 169,948 | msegs.chiSquared | 4249 | 10.65 | 20.1 | 210.82 |
| 35,243 | 852,671,886 | clusters.l1hcal | 1.246e+06 | 755.7 | 7948 | 156.71 |
| 65,616 | 2,790,684,932 | msegs.chiSquared | 2515 | 10.65 | 20.1 | 124.55 |
| 59,714 | 547,711,478 | clusters.l1hcal | 9.287e+05 | 755.7 | 7948 | 116.75 |
| 53,272 | 2,434,530,167 | clusters.l1hcal | 8.008e+05 | 755.7 | 7948 | 100.66 |
| 43,462 | 224,278,375 | clusters.l1hcal | 7.741e+05 | 755.7 | 7948 | 97.30 |
| 37,769 | 779,643,653 | msegs.chiSquared | 1940 | 10.65 | 20.1 | 95.99 |
| 42,551 | 3,201,712,627 | clusters.l4hcal | 8.092e+05 | 889.1 | 8422 | 95.97 |
| 52,039 | 1,304,288,106 | clusters.l1hcal | 7.343e+05 | 755.7 | 7948 | 92.29 |
| 38,318 | 1,384,137,473 | clusters.l1hcal | 6.802e+05 | 755.7 | 7948 | 85.49 |

---

### `control_region_ttbar.parquet` (FAIL)

**Issues Detected:**
- 3,720 negative `mcEventWeight` rows

**`mcEventWeight` Breakdown:**
- **Valid weights:** 2,009,438 / 2,013,158 (99.82%)
- **Negative weights:** 3,720 (0.18%)
- **Infinite weights:** 0 (0.00%)
- **NaN weights:** 0 (0.00%)
- **Weight range:** [1, 417.4], mean=43.51, sum=8.742e+07

**Per-Class Breakdown:**

| Class (Label) |     Total |     Valid | Negative | Non-finite | Weight Sum |
| :------------ | --------: | --------: | -------: | ---------: | :--------: |
| QCD (0)       | 1,006,579 | 1,002,859 |    3,720 |          0 | 8.642e+07  |
| BIB (2)       | 1,006,579 | 1,006,579 |        0 |          0 | 1.007e+06  |

**Overflow & Outlier Breakdown:**
- **Norm dict applied:** `/data/fye/CalRatio/salt/data/main_training_data_ttbar_norm_dict.yaml`
- **BF16 overflow events:** 0 (elements: 0)
- **FP16 overflow events:** 0 (elements: 0)
- **Outliers > 1000 sigma events:** 7 (elements: 7)
- **Non-finite feature events:** 0 (elements: 0)
- **Worst normalized |z|:** 42281.47

**Top Extreme Features:**

| Feature           | Max \|z\| | Example Raw |       Mean |       Std | BF16 Over | FP16 Over | >1000 sigma | NaN/Inf |
| :---------------- | --------: | ----------: | ---------: | --------: | --------: | --------: | ----------: | ------: |
| tracks.pt         |  42281.47 |   5.993e+05 |      8.992 |     14.17 |         0 |         0 |           7 |       0 |
| msegs.chiSquared  |    335.57 |        6757 |      10.65 |      20.1 |         0 |         0 |           0 |       0 |
| clusters.l3ecal   |    147.61 |     1.9e+06 |       3679 | 1.285e+04 |         0 |         0 |           0 |       0 |
| clusters.l4ecal   |    137.56 |   1.655e+05 |      335.4 |      1201 |         0 |         0 |           0 |       0 |
| clusters.l2ecal   |    114.15 |   5.304e+05 |       1429 |      4634 |         0 |         0 |           0 |       0 |
| clusters.l1ecal   |     89.61 |   1.486e+05 |      438.2 |      1653 |         0 |         0 |           0 |       0 |
| clusters.time     |     63.31 |         302 |    0.09178 |     4.768 |         0 |         0 |           0 |       0 |
| tracks.d0         |     41.38 |      -3.979 | -0.0007625 |   0.09614 |         0 |         0 |           0 |       0 |
| msegs.etaDir      |     20.92 |       37.68 |     0.0179 |       1.8 |         0 |         0 |           0 |       0 |
| tracks.chiSquared |     20.10 |       359.2 |      31.65 |     16.29 |         0 |         0 |           0 |       0 |

**Extreme Feature Value Examples (Top by |z|):**

| Row       |  Event Number |   Feature | Raw Value |  Mean |   Std |    \|z\| |
| :-------- | ------------: | --------: | --------: | ----: | ----: | -------: |
| 1,696,686 |    60,545,685 | tracks.pt | 5.993e+05 | 8.992 | 14.17 | 42281.47 |
| 831,060   | 2,814,716,036 | tracks.pt |  7.28e+04 | 8.992 | 14.17 |  5135.63 |
| 419,137   | 1,651,040,135 | tracks.pt | 4.179e+04 | 8.992 | 14.17 |  2948.22 |
| 1,696,097 |    60,542,940 | tracks.pt | 3.866e+04 | 8.992 | 14.17 |  2727.17 |
| 1,787,090 |    70,305,064 | tracks.pt | 2.257e+04 | 8.992 | 14.17 |  1592.07 |
| 473,989   | 1,794,546,733 | tracks.pt | 1.856e+04 | 8.992 | 14.17 |  1308.86 |
| 773,915   | 3,694,649,258 | tracks.pt | 1.496e+04 | 8.992 | 14.17 |  1054.82 |
| 1,945,420 |    65,332,181 | tracks.pt | 1.352e+04 | 8.992 | 14.17 |   953.58 |
| 71,204    |   750,641,631 | tracks.pt | 1.302e+04 | 8.992 | 14.17 |   918.15 |
| 1,199,360 |    89,065,586 | tracks.pt |  1.26e+04 | 8.992 | 14.17 |   888.25 |

---

### `main_training_data_ttbar.parquet` (FAIL)

**Issues Detected:**
- 1,008 negative `mcEventWeight` rows

**`mcEventWeight` Breakdown:**
- **Valid weights:** 715,593 / 716,601 (99.86%)
- **Negative weights:** 1,008 (0.14%)
- **Infinite weights:** 0 (0.00%)
- **NaN weights:** 0 (0.00%)
- **Weight range:** [8.542e-06, 544.9], mean=28.98, sum=2.073e+07

**Per-Class Breakdown:**

| Class (Label) |   Total |   Valid | Negative | Non-finite | Weight Sum |
| :------------ | ------: | ------: | -------: | ---------: | :--------: |
| Signal (1)    | 238,867 | 238,861 |        6 |          0 |   2.552    |
| BIB (2)       | 238,867 | 238,867 |        0 |          0 | 2.389e+05  |
| Ttbar (3)     | 238,867 | 237,865 |    1,002 |          0 |  2.05e+07  |

**Overflow & Outlier Breakdown:**
- **Norm dict applied:** `/data/fye/CalRatio/salt/data/main_training_data_ttbar_norm_dict.yaml`
- **BF16 overflow events:** 0 (elements: 0)
- **FP16 overflow events:** 0 (elements: 0)
- **Outliers > 1000 sigma events:** 2 (elements: 2)
- **Non-finite feature events:** 0 (elements: 0)
- **Worst normalized |z|:** 5486.73

**Top Extreme Features:**

| Feature | Max \|z\| | Example Raw | Mean | Std | BF16 Over | FP16 Over | >1000 sigma | NaN/Inf |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| tracks.pt | 5486.73 | 7.777e+04 | 8.992 | 14.17 | 0 | 0 | 2 | 0 |
| clusters.l4ecal | 467.44 | 5.617e+05 | 335.4 | 1201 | 0 | 0 | 0 | 0 |
| msegs.chiSquared | 210.82 | 4249 | 10.65 | 20.1 | 0 | 0 | 0 | 0 |
| clusters.time | 181.56 | -865.6 | 0.09178 | 4.768 | 0 | 0 | 0 | 0 |
| clusters.l1ecal | 159.82 | 2.647e+05 | 438.2 | 1653 | 0 | 0 | 0 | 0 |
| clusters.l1hcal | 156.71 | 1.246e+06 | 755.7 | 7948 | 0 | 0 | 0 | 0 |
| clusters.l3ecal | 110.97 | 1.429e+06 | 3679 | 1.285e+04 | 0 | 0 | 0 | 0 |
| clusters.l4hcal | 101.92 | 8.592e+05 | 889.1 | 8422 | 0 | 0 | 0 | 0 |
| clusters.l2hcal | 92.18 | 1.457e+06 | 2603 | 1.578e+04 | 0 | 0 | 0 | 0 |
| clusters.l3hcal | 71.41 | 1.04e+06 | 2060 | 1.453e+04 | 0 | 0 | 0 | 0 |

**Extreme Feature Value Examples (Top by |z|):**

| Row | Event Number | Feature | Raw Value | Mean | Std | \|z\| |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| 458,999 | 2,207,101,797 | tracks.pt | 7.777e+04 | 8.992 | 14.17 | 5486.73 |
| 670,828 | 57,026,511 | tracks.pt | 2.374e+04 | 8.992 | 14.17 | 1674.32 |
| 379,831 | 2,835,208,862 | tracks.pt | 9157 | 8.992 | 14.17 | 645.48 |
| 526,315 | 71,840,308 | tracks.pt | 8569 | 8.992 | 14.17 | 603.99 |
| 418,618 | 2,361,014,468 | tracks.pt | 8525 | 8.992 | 14.17 | 600.84 |
| 537,227 | 71,849,115 | tracks.pt | 8316 | 8.992 | 14.17 | 586.14 |
| 379,214 | 2,414,232,451 | clusters.l4ecal | 5.617e+05 | 335.4 | 1201 | 467.44 |
| 573,517 | 71,920,284 | tracks.pt | 5831 | 8.992 | 14.17 | 410.81 |
| 240,096 | 2,133,715,419 | tracks.pt | 5681 | 8.992 | 14.17 | 400.17 |
| 351,688 | 869,416,024 | clusters.l4ecal | 4.689e+05 | 335.4 | 1201 | 390.22 |
