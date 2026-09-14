# Analysis: Impact of `max_epochs` on the Pareto Front

**Analysis target**: [`hp_opt/best_params/best_params_calRatioTransformer.png`](best_params_calRatioTransformer.png)  
**Underlying data**: [`hp_opt/best_params/best_params_calRatioTransformer.yaml`](best_params_calRatioTransformer.yaml) & Optuna study database (`hp_opt/optuna.db`)

---

## Executive Summary

**Yes, higher `max_epochs` (specifically `max_epochs = 40`) significantly helps populate and improve key portions of the Pareto front**, but with distinct trade-offs:
- **Dominates the balanced "knee" region**: 40-epoch runs provide the densest concentration of high-performing, well-balanced models where both Signal Region (SR) and Control Region (CR) validation losses are simultaneously minimized.
- **Achieves lowest Control Region loss**: The lowest CR validation loss across all trials is reached at 40 epochs.
- **Does not improve extreme Signal Region loss**: The lowest SR validation losses are achieved by **moderate budgets (20 and 30 epochs)**; 40 epochs never breaks below an SR loss of ~0.534.
- **Lower budgets (15, 20, 30) remain competitive**: Each budget secures spots on the front, demonstrating that higher epochs are beneficial for multi-objective balance but not strictly dominating across all trade-off regimes.

---

## 1. Pareto Front Composition by Epoch Budget

Across the 16 Pareto-optimal solutions identified in the study:

| Epoch Budget (`max_epochs`) | Front Trials Count | Share of Pareto Front | Total Complete Trials | Yield Rate (Front / Total) |
| :-------------------------: | :----------------: | :-------------------: | :-------------------: | :------------------------: |
|           **15**            |         3          |         18.8%         |          24           |           12.5%            |
|           **20**            |         3          |         18.8%         |          23           |           13.0%            |
|           **30**            |         3          |         18.8%         |          22           |           13.6%            |
|           **40**            |       **7**        |       **43.8%**       |        **28**         |         **25.0%**          |

*Key Takeaway*: Despite all epoch budgets having comparable exploration (~22–28 completed trials each), **`max_epochs = 40` achieved nearly double the conversion rate to the Pareto front (25.0%)** compared to lower budgets (~12.5%–13.6%).

---

## 2. Spatial Distribution Along the Pareto Front

Sorting all 16 Pareto-front configurations by **Signal Region Validation Loss** (from lowest SR loss to lowest CR loss):

| Trial ID | `max_epochs` | Signal Region Val Loss (Obj 0) | Control Region Val Loss (Obj 1) | Regime / Location on Curve |
|:---:|:---:|:---:|:---:|:---|
| **47** | **20** | **0.51235** | 0.60071 | **Absolute lowest SR loss** (top-left) |
| **25** | **30** | 0.51480 | 0.58522 | Extreme SR focus |
| **125** | **30** | 0.51662 | 0.55014 | Extreme SR focus |
| **83** | **40** | 0.53423 | 0.54827 | Transition to central knee |
| **175** | **40** | 0.53502 | 0.45329 | Central balanced knee |
| **4** | **40** | 0.54083 | 0.43920 | Central balanced knee |
| **300** | **15** | 0.54109 | 0.38884 | Central balanced knee |
| **171** | **40** | 0.54538 | 0.34087 | Central balanced knee |
| **13** | **40** | 0.55640 | 0.28801 | Central balanced knee |
| **48** | **40** | 0.55640 | 0.28801 | Central balanced knee |
| **265** | **20** | 0.57107 | 0.23300 | Transition to CR focus |
| **167** | **15** | 0.59464 | 0.23230 | Low CR loss |
| **269** | **15** | 0.60486 | 0.21679 | Low CR loss |
| **8** | **20** | 0.69029 | 0.18055 | Low CR loss |
| **45** | **30** | 0.69758 | 0.14171 | Extreme CR focus |
| **46** | **40** | 0.94563 | **0.09172** | **Absolute lowest CR loss** (bottom-right) |

### Detailed Observations by Regime:

1. **The Balanced "Knee" Regime ($\text{SR} \in [0.534, 0.556]$, $\text{CR} \in [0.288, 0.548]$)**:
   - **Heavily dominated by `max_epochs = 40`**: 6 out of the 7 configurations in this optimal trade-off zone belong to `max_epochs = 40`.
   - The additional training epochs allow the transformer model to learn shared representations that satisfy both objectives concurrently without collapsing one task.

2. **The Minimum Signal Region Loss Regime ($\text{SR} < 0.530$)**:
   - **Exclusively populated by `max_epochs = 20` and `30`**.
   - `max_epochs = 20` holds the global minimum SR loss (0.51235).
   - Higher epochs (40) fail to reach this boundary. This indicates that for purely minimizing signal discrimination loss, 20–30 epochs is already sufficient; 40 epochs may suffer from slight overfitting on the signal region or suboptimal learning rate scheduling at later epochs.

3. **The Minimum Control Region Loss Regime ($\text{CR} < 0.200$)**:
   - Spanned by `max_epochs = 20` (0.18055), `30` (0.14171), and `40` (0.09172).
   - `max_epochs = 40` achieves the absolute lowest CR loss (0.09172), though at the expense of severe degradation in SR loss (0.94563).

---

## 3. Global Study Statistics Across All Completed Trials

Evaluating all completed trials (including non-front points) in the Optuna study:

| `max_epochs` | Completed Trials | SR Loss Median | SR Loss Min | CR Loss Median | CR Loss Min |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **15** | 24 | 0.5988 | 0.5272 | 0.4008 | 0.2168 |
| **20** | 23 | 0.5939 | **0.5123** | 0.4356 | 0.1805 |
| **30** | 22 | 0.5859 | 0.5148 | 0.4877 | 0.1417 |
| **40** | 28 | **0.5729** | 0.5342 | **0.3844** | **0.0917** |

- **Median Performance**: `max_epochs = 40` yields the **lowest median SR loss (0.5729)** and **lowest median CR loss (0.3844)** of all budgets, demonstrating that higher epochs systematically shift the trial distribution toward better overall loss values.
- **Variance / Robustness**: The majority of non-front points in the upper-right region (poorer losses) belong to lower epoch runs or early-stage parameter explorations.

---

## 4. Compute vs. Performance Trade-off

- **Compute scaling**: Training for 40 epochs consumes $2.0\times$ the GPU budget of 20 epochs and $2.67\times$ that of 15 epochs.
- **Efficiency finding**:
  - If the primary objective is **balanced performance** (the knee of the curve), the $2\times$ compute cost of 40 epochs is well-justified, as 85% of balanced-knee candidates require 40 epochs.
  - If the primary objective is **pure Signal Region discrimination**, `max_epochs = 20` or `30` delivers better results at half the computational footprint.

---

## 5. Conclusion & Recommendations

1. **Does higher `max_epochs` help the Pareto front?**  
   **Yes**. It contributes 43.8% of the Pareto front, doubles the front-yield rate to 25%, and is the primary driver of models in the balanced trade-off region.
2. **Is higher `max_epochs` strictly superior everywhere?**  
   **No**. It does not achieve the lowest Signal Region validation loss (where 20 and 30 epochs win), and lower budgets (15–20) produce competitive, compute-efficient solutions across the front.
3. **Operational Recommendation**:
   - For multi-objective / complementary training where balanced performance is desired: use **`max_epochs = 40`**.
   - For fast hyperparameter exploration or signal-focused benchmarks: use **`max_epochs = 20` to `30`**.
