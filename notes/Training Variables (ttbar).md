# Training Variable Distributions ($t\bar{t}$ Scenario)

This note displays the kinematic and constituent distribution plots for the $t\bar{t}$ training dataset across Signal, $t\bar{t}$ Background, and BIB samples.

[Training Dataset](Training%20Dataset.md) | [Optimized Models Plots](Optimized%20Models%20Plots.md) | [CalRatioTop](../CalRatioTop.md)

---

## Overview Distributions

### Summary & Jet Kinematics
| Linear Scale | Log Scale |
| :---: | :---: |
| ![Jets Summary Lin](../plots/training_vars_ttbar/overview_jets_summary_lin.png) | ![Jets Summary Log](../plots/training_vars_ttbar/overview_jets_summary_log.png) |

### Constituent Tracks
| Linear Scale | Log Scale |
| :---: | :---: |
| ![Tracks Lin](../plots/training_vars_ttbar/overview_tracks_lin.png) | ![Tracks Log](../plots/training_vars_ttbar/overview_tracks_log.png) |

### Constituent Topo-Clusters
| Linear Scale | Log Scale |
| :---: | :---: |
| ![Clusters Lin](../plots/training_vars_ttbar/overview_clusters_lin.png) | ![Clusters Log](../plots/training_vars_ttbar/overview_clusters_log.png) |

### Associated Muon Segments
| Linear Scale | Log Scale |
| :---: | :---: |
| ![Muon Segments Lin](../plots/training_vars_ttbar/overview_msegs_lin.png) | ![Muon Segments Log](../plots/training_vars_ttbar/overview_msegs_log.png) |

---

## Individual Variable Distributions

### Multiplicities & Event Weights

> [!note]- Multiplicity & Weight Plots
> | Variable | Distribution |
> | :--- | :---: |
> | **mcEventWeight** | ![mcEventWeight](../plots/training_vars_ttbar/individual/summary/mcEventWeight.png) |
> | **Number of Tracks ($n_{\text{tracks}}$)** | ![nTracks](../plots/training_vars_ttbar/individual/summary/nTracks.png) |
> | **Number of Clusters ($n_{\text{clusters}}$)** | ![nClusters](../plots/training_vars_ttbar/individual/summary/nClusters.png) |
> | **Number of Muon Segments ($n_{\text{msegs}}$)** | ![nMsegs](../plots/training_vars_ttbar/individual/summary/nMsegs.png) |

### Jet Level Variables

> [!note]- Jet Variables
> | Variable | Distribution |
> | :--- | :---: |
> | **Jet $p_T$** | ![jet_pt](../plots/training_vars_ttbar/individual/jets/jet_pt.png) |
> | **Jet $\eta$** | ![jet_eta](../plots/training_vars_ttbar/individual/jets/jet_eta.png) |
> | **Jet $\phi$** | ![jet_phi](../plots/training_vars_ttbar/individual/jets/jet_phi.png) |

### Track Variables

> [!note]- Track Variables
> | Variable | Distribution |
> | :--- | :---: |
> | **Track $p_T$** | ![tracks_pt](../plots/training_vars_ttbar/individual/tracks/tracks_pt.png) |
> | **Track $\eta$** | ![tracks_eta](../plots/training_vars_ttbar/individual/tracks/tracks_eta.png) |
> | **Track $\phi$** | ![tracks_phi](../plots/training_vars_ttbar/individual/tracks/tracks_phi.png) |
> | **Track $d_0$** | ![tracks_d0](../plots/training_vars_ttbar/individual/tracks/tracks_d0.png) |
> | **Track $z_0$** | ![tracks_z0](../plots/training_vars_ttbar/individual/tracks/tracks_z0.png) |
> | **Track $\chi^2$** | ![tracks_chiSquared](../plots/training_vars_ttbar/individual/tracks/tracks_chiSquared.png) |
> | **Pixel Hits** | ![tracks_PixelHits](../plots/training_vars_ttbar/individual/tracks/tracks_PixelHits.png) |
> | **Pixel Holes** | ![tracks_PixelHoles](../plots/training_vars_ttbar/individual/tracks/tracks_PixelHoles.png) |
> | **Pixel Shared** | ![tracks_PixelShared](../plots/training_vars_ttbar/individual/tracks/tracks_PixelShared.png) |
> | **SCT Hits** | ![tracks_SCTHits](../plots/training_vars_ttbar/individual/tracks/tracks_SCTHits.png) |
> | **SCT Holes** | ![tracks_SCTHoles](../plots/training_vars_ttbar/individual/tracks/tracks_SCTHoles.png) |
> | **SCT Shared** | ![tracks_SCTShared](../plots/training_vars_ttbar/individual/tracks/tracks_SCTShared.png) |
> | **Vertex $n_{\text{particles}}$** | ![tracks_vertex_nParticles](../plots/training_vars_ttbar/individual/tracks/tracks_vertex_nParticles.png) |

### Cluster Variables

> [!note]- Cluster Energy & Timing Variables
> | Variable | Distribution |
> | :--- | :---: |
> | **Cluster $p_T$** | ![clusters_pt](../plots/training_vars_ttbar/individual/clusters/clusters_pt.png) |
> | **Cluster $\eta$** | ![clusters_eta](../plots/training_vars_ttbar/individual/clusters/clusters_eta.png) |
> | **Cluster $\phi$** | ![clusters_phi](../plots/training_vars_ttbar/individual/clusters/clusters_phi.png) |
> | **Cluster Time** | ![clusters_time](../plots/training_vars_ttbar/individual/clusters/clusters_time.png) |
> | **Layer 1 ECAL Energy** | ![clusters_l1ecal](../plots/training_vars_ttbar/individual/clusters/clusters_l1ecal.png) |
> | **Layer 2 ECAL Energy** | ![clusters_l2ecal](../plots/training_vars_ttbar/individual/clusters/clusters_l2ecal.png) |
> | **Layer 3 ECAL Energy** | ![clusters_l3ecal](../plots/training_vars_ttbar/individual/clusters/clusters_l3ecal.png) |
> | **Layer 4 ECAL Energy** | ![clusters_l4ecal](../plots/training_vars_ttbar/individual/clusters/clusters_l4ecal.png) |
> | **Layer 1 HCAL Energy** | ![clusters_l1hcal](../plots/training_vars_ttbar/individual/clusters/clusters_l1hcal.png) |
> | **Layer 2 HCAL Energy** | ![clusters_l2hcal](../plots/training_vars_ttbar/individual/clusters/clusters_l2hcal.png) |
> | **Layer 3 HCAL Energy** | ![clusters_l3hcal](../plots/training_vars_ttbar/individual/clusters/clusters_l3hcal.png) |
> | **Layer 4 HCAL Energy** | ![clusters_l4hcal](../plots/training_vars_ttbar/individual/clusters/clusters_l4hcal.png) |

### Muon Segment Variables

> [!note]- Muon Segment Variables
> | Variable | Distribution |
> | :--- | :---: |
> | **$t_0$** | ![msegs_t0](../plots/training_vars_ttbar/individual/msegs/msegs_t0.png) |
> | **$\chi^2$** | ![msegs_chiSquared](../plots/training_vars_ttbar/individual/msegs/msegs_chiSquared.png) |
> | **$\eta_{\text{pos}}$** | ![msegs_etaPos](../plots/training_vars_ttbar/individual/msegs/msegs_etaPos.png) |
> | **$\phi_{\text{pos}}$** | ![msegs_phiPos](../plots/training_vars_ttbar/individual/msegs/msegs_phiPos.png) |
> | **$\eta_{\text{dir}}$** | ![msegs_etaDir](../plots/training_vars_ttbar/individual/msegs/msegs_etaDir.png) |
> | **$\phi_{\text{dir}}$** | ![msegs_phiDir](../plots/training_vars_ttbar/individual/msegs/msegs_phiDir.png) |
