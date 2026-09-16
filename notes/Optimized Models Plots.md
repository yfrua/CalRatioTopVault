# Optimized Models Plots Dashboard

This dashboard provides direct access and embedded visualizations for the **16 Pareto-optimal models** evaluated across their last 10 training epochs.

> [!TIP]
> Click any Trial link to open its dedicated full evaluation note, or expand the collapsible callouts below to inspect plots directly inside this note.

## Pareto Front Models Summary

| Trial ID | Max Epochs | SR Val Loss | CR Val Loss | Pareto Regime | Plotted Epochs | Dedicated Note |
| :---: | :---: | :---: | :---: | :--- | :---: | :---: |
| **4** | 40 | 0.54083 | 0.4392 | Central balanced knee | `epoch030` - `epoch039` | [Trial 4](Optimized%20Models/Trial%204.md) |
| **8** | 20 | 0.69029 | 0.18055 | Low CR loss | `epoch010` - `epoch019` | [Trial 8](Optimized%20Models/Trial%208.md) |
| **13** | 40 | 0.5564 | 0.28801 | Central balanced knee | `epoch030` - `epoch039` | [Trial 13](Optimized%20Models/Trial%2013.md) |
| **25** | 30 | 0.5148 | 0.58522 | Extreme SR focus | `epoch020` - `epoch029` | [Trial 25](Optimized%20Models/Trial%2025.md) |
| **45** | 30 | 0.69758 | 0.14171 | Extreme CR focus | `epoch020` - `epoch029` | [Trial 45](Optimized%20Models/Trial%2045.md) |
| **46** | 40 | 0.94563 | 0.09172 | Absolute lowest CR loss (bottom-right) | `epoch030` - `epoch039` | [Trial 46](Optimized%20Models/Trial%2046.md) |
| **47** | 20 | 0.51235 | 0.60071 | Absolute lowest SR loss (top-left) | `epoch010` - `epoch019` | [Trial 47](Optimized%20Models/Trial%2047.md) |
| **48** | 40 | 0.5564 | 0.28801 | Central balanced knee | `epoch030` - `epoch039` | [Trial 48](Optimized%20Models/Trial%2048.md) |
| **83** | 40 | 0.53423 | 0.54827 | Transition to central knee | `epoch030` - `epoch039` | [Trial 83](Optimized%20Models/Trial%2083.md) |
| **125** | 30 | 0.51662 | 0.55014 | Extreme SR focus | `epoch020` - `epoch029` | [Trial 125](Optimized%20Models/Trial%20125.md) |
| **167** | 15 | 0.59464 | 0.2323 | Low CR loss | `epoch005` - `epoch014` | [Trial 167](Optimized%20Models/Trial%20167.md) |
| **171** | 40 | 0.54538 | 0.34087 | Central balanced knee | `epoch030` - `epoch039` | [Trial 171](Optimized%20Models/Trial%20171.md) |
| **175** | 40 | 0.53502 | 0.45329 | Central balanced knee | `epoch030` - `epoch039` | [Trial 175](Optimized%20Models/Trial%20175.md) |
| **265** | 20 | 0.57107 | 0.233 | Transition to CR focus | `epoch010` - `epoch019` | [Trial 265](Optimized%20Models/Trial%20265.md) |
| **269** | 15 | 0.60486 | 0.21679 | Low CR loss | `epoch005` - `epoch014` | [Trial 269](Optimized%20Models/Trial%20269.md) |
| **300** | 15 | 0.54109 | 0.38884 | Central balanced knee | `epoch005` - `epoch014` | [Trial 300](Optimized%20Models/Trial%20300.md) |

---

## Quick Jump & Collapsible Trial Inspector

> [!abstract]- Trial 4 (max_epochs=40, SR Loss=0.54083, CR Loss=0.4392)
> **Dedicated Note**: [Open Trial 4 Full Note](Optimized%20Models/Trial%204.md) | **Regime**: Central balanced knee
>
> > [!note]- Epoch 030
> > **ROC Curve**:
> > ![4_epoch030_ROC](../plots/calRatioTransformer_trial_4/epoch030/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch030_SR_sig](../plots/calRatioTransformer_trial_4/epoch030/SR_pred_sig.png) | ![4_epoch030_SR_sig_logY](../plots/calRatioTransformer_trial_4/epoch030/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![4_epoch030_SR_bkg](../plots/calRatioTransformer_trial_4/epoch030/SR_pred_bkg.png) | ![4_epoch030_SR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch030/SR_pred_bkg_logY.png) |
> > | **BIB** | ![4_epoch030_SR_bib](../plots/calRatioTransformer_trial_4/epoch030/SR_pred_bib.png) | ![4_epoch030_SR_bib_logY](../plots/calRatioTransformer_trial_4/epoch030/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch030_CR_sig_logY](../plots/calRatioTransformer_trial_4/epoch030/CR_ttbar_pred_sig_logY.png) | ![4_epoch030_CR_sig_logX_logY](../plots/calRatioTransformer_trial_4/epoch030/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![4_epoch030_CR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch030/CR_ttbar_pred_bkg_logY.png) | ![4_epoch030_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_4/epoch030/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![4_epoch030_CR_bib_logY](../plots/calRatioTransformer_trial_4/epoch030/CR_ttbar_pred_bib_logY.png) | ![4_epoch030_CR_bib_logX_logY](../plots/calRatioTransformer_trial_4/epoch030/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 031
> > **ROC Curve**:
> > ![4_epoch031_ROC](../plots/calRatioTransformer_trial_4/epoch031/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch031_SR_sig](../plots/calRatioTransformer_trial_4/epoch031/SR_pred_sig.png) | ![4_epoch031_SR_sig_logY](../plots/calRatioTransformer_trial_4/epoch031/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![4_epoch031_SR_bkg](../plots/calRatioTransformer_trial_4/epoch031/SR_pred_bkg.png) | ![4_epoch031_SR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch031/SR_pred_bkg_logY.png) |
> > | **BIB** | ![4_epoch031_SR_bib](../plots/calRatioTransformer_trial_4/epoch031/SR_pred_bib.png) | ![4_epoch031_SR_bib_logY](../plots/calRatioTransformer_trial_4/epoch031/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch031_CR_sig_logY](../plots/calRatioTransformer_trial_4/epoch031/CR_ttbar_pred_sig_logY.png) | ![4_epoch031_CR_sig_logX_logY](../plots/calRatioTransformer_trial_4/epoch031/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![4_epoch031_CR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch031/CR_ttbar_pred_bkg_logY.png) | ![4_epoch031_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_4/epoch031/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![4_epoch031_CR_bib_logY](../plots/calRatioTransformer_trial_4/epoch031/CR_ttbar_pred_bib_logY.png) | ![4_epoch031_CR_bib_logX_logY](../plots/calRatioTransformer_trial_4/epoch031/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 032
> > **ROC Curve**:
> > ![4_epoch032_ROC](../plots/calRatioTransformer_trial_4/epoch032/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch032_SR_sig](../plots/calRatioTransformer_trial_4/epoch032/SR_pred_sig.png) | ![4_epoch032_SR_sig_logY](../plots/calRatioTransformer_trial_4/epoch032/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![4_epoch032_SR_bkg](../plots/calRatioTransformer_trial_4/epoch032/SR_pred_bkg.png) | ![4_epoch032_SR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch032/SR_pred_bkg_logY.png) |
> > | **BIB** | ![4_epoch032_SR_bib](../plots/calRatioTransformer_trial_4/epoch032/SR_pred_bib.png) | ![4_epoch032_SR_bib_logY](../plots/calRatioTransformer_trial_4/epoch032/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch032_CR_sig_logY](../plots/calRatioTransformer_trial_4/epoch032/CR_ttbar_pred_sig_logY.png) | ![4_epoch032_CR_sig_logX_logY](../plots/calRatioTransformer_trial_4/epoch032/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![4_epoch032_CR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch032/CR_ttbar_pred_bkg_logY.png) | ![4_epoch032_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_4/epoch032/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![4_epoch032_CR_bib_logY](../plots/calRatioTransformer_trial_4/epoch032/CR_ttbar_pred_bib_logY.png) | ![4_epoch032_CR_bib_logX_logY](../plots/calRatioTransformer_trial_4/epoch032/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 033
> > **ROC Curve**:
> > ![4_epoch033_ROC](../plots/calRatioTransformer_trial_4/epoch033/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch033_SR_sig](../plots/calRatioTransformer_trial_4/epoch033/SR_pred_sig.png) | ![4_epoch033_SR_sig_logY](../plots/calRatioTransformer_trial_4/epoch033/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![4_epoch033_SR_bkg](../plots/calRatioTransformer_trial_4/epoch033/SR_pred_bkg.png) | ![4_epoch033_SR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch033/SR_pred_bkg_logY.png) |
> > | **BIB** | ![4_epoch033_SR_bib](../plots/calRatioTransformer_trial_4/epoch033/SR_pred_bib.png) | ![4_epoch033_SR_bib_logY](../plots/calRatioTransformer_trial_4/epoch033/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch033_CR_sig_logY](../plots/calRatioTransformer_trial_4/epoch033/CR_ttbar_pred_sig_logY.png) | ![4_epoch033_CR_sig_logX_logY](../plots/calRatioTransformer_trial_4/epoch033/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![4_epoch033_CR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch033/CR_ttbar_pred_bkg_logY.png) | ![4_epoch033_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_4/epoch033/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![4_epoch033_CR_bib_logY](../plots/calRatioTransformer_trial_4/epoch033/CR_ttbar_pred_bib_logY.png) | ![4_epoch033_CR_bib_logX_logY](../plots/calRatioTransformer_trial_4/epoch033/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 034
> > **ROC Curve**:
> > ![4_epoch034_ROC](../plots/calRatioTransformer_trial_4/epoch034/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch034_SR_sig](../plots/calRatioTransformer_trial_4/epoch034/SR_pred_sig.png) | ![4_epoch034_SR_sig_logY](../plots/calRatioTransformer_trial_4/epoch034/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![4_epoch034_SR_bkg](../plots/calRatioTransformer_trial_4/epoch034/SR_pred_bkg.png) | ![4_epoch034_SR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch034/SR_pred_bkg_logY.png) |
> > | **BIB** | ![4_epoch034_SR_bib](../plots/calRatioTransformer_trial_4/epoch034/SR_pred_bib.png) | ![4_epoch034_SR_bib_logY](../plots/calRatioTransformer_trial_4/epoch034/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch034_CR_sig_logY](../plots/calRatioTransformer_trial_4/epoch034/CR_ttbar_pred_sig_logY.png) | ![4_epoch034_CR_sig_logX_logY](../plots/calRatioTransformer_trial_4/epoch034/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![4_epoch034_CR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch034/CR_ttbar_pred_bkg_logY.png) | ![4_epoch034_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_4/epoch034/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![4_epoch034_CR_bib_logY](../plots/calRatioTransformer_trial_4/epoch034/CR_ttbar_pred_bib_logY.png) | ![4_epoch034_CR_bib_logX_logY](../plots/calRatioTransformer_trial_4/epoch034/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 035
> > **ROC Curve**:
> > ![4_epoch035_ROC](../plots/calRatioTransformer_trial_4/epoch035/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch035_SR_sig](../plots/calRatioTransformer_trial_4/epoch035/SR_pred_sig.png) | ![4_epoch035_SR_sig_logY](../plots/calRatioTransformer_trial_4/epoch035/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![4_epoch035_SR_bkg](../plots/calRatioTransformer_trial_4/epoch035/SR_pred_bkg.png) | ![4_epoch035_SR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch035/SR_pred_bkg_logY.png) |
> > | **BIB** | ![4_epoch035_SR_bib](../plots/calRatioTransformer_trial_4/epoch035/SR_pred_bib.png) | ![4_epoch035_SR_bib_logY](../plots/calRatioTransformer_trial_4/epoch035/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch035_CR_sig_logY](../plots/calRatioTransformer_trial_4/epoch035/CR_ttbar_pred_sig_logY.png) | ![4_epoch035_CR_sig_logX_logY](../plots/calRatioTransformer_trial_4/epoch035/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![4_epoch035_CR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch035/CR_ttbar_pred_bkg_logY.png) | ![4_epoch035_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_4/epoch035/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![4_epoch035_CR_bib_logY](../plots/calRatioTransformer_trial_4/epoch035/CR_ttbar_pred_bib_logY.png) | ![4_epoch035_CR_bib_logX_logY](../plots/calRatioTransformer_trial_4/epoch035/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 036
> > **ROC Curve**:
> > ![4_epoch036_ROC](../plots/calRatioTransformer_trial_4/epoch036/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch036_SR_sig](../plots/calRatioTransformer_trial_4/epoch036/SR_pred_sig.png) | ![4_epoch036_SR_sig_logY](../plots/calRatioTransformer_trial_4/epoch036/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![4_epoch036_SR_bkg](../plots/calRatioTransformer_trial_4/epoch036/SR_pred_bkg.png) | ![4_epoch036_SR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch036/SR_pred_bkg_logY.png) |
> > | **BIB** | ![4_epoch036_SR_bib](../plots/calRatioTransformer_trial_4/epoch036/SR_pred_bib.png) | ![4_epoch036_SR_bib_logY](../plots/calRatioTransformer_trial_4/epoch036/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch036_CR_sig_logY](../plots/calRatioTransformer_trial_4/epoch036/CR_ttbar_pred_sig_logY.png) | ![4_epoch036_CR_sig_logX_logY](../plots/calRatioTransformer_trial_4/epoch036/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![4_epoch036_CR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch036/CR_ttbar_pred_bkg_logY.png) | ![4_epoch036_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_4/epoch036/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![4_epoch036_CR_bib_logY](../plots/calRatioTransformer_trial_4/epoch036/CR_ttbar_pred_bib_logY.png) | ![4_epoch036_CR_bib_logX_logY](../plots/calRatioTransformer_trial_4/epoch036/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 037
> > **ROC Curve**:
> > ![4_epoch037_ROC](../plots/calRatioTransformer_trial_4/epoch037/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch037_SR_sig](../plots/calRatioTransformer_trial_4/epoch037/SR_pred_sig.png) | ![4_epoch037_SR_sig_logY](../plots/calRatioTransformer_trial_4/epoch037/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![4_epoch037_SR_bkg](../plots/calRatioTransformer_trial_4/epoch037/SR_pred_bkg.png) | ![4_epoch037_SR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch037/SR_pred_bkg_logY.png) |
> > | **BIB** | ![4_epoch037_SR_bib](../plots/calRatioTransformer_trial_4/epoch037/SR_pred_bib.png) | ![4_epoch037_SR_bib_logY](../plots/calRatioTransformer_trial_4/epoch037/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch037_CR_sig_logY](../plots/calRatioTransformer_trial_4/epoch037/CR_ttbar_pred_sig_logY.png) | ![4_epoch037_CR_sig_logX_logY](../plots/calRatioTransformer_trial_4/epoch037/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![4_epoch037_CR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch037/CR_ttbar_pred_bkg_logY.png) | ![4_epoch037_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_4/epoch037/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![4_epoch037_CR_bib_logY](../plots/calRatioTransformer_trial_4/epoch037/CR_ttbar_pred_bib_logY.png) | ![4_epoch037_CR_bib_logX_logY](../plots/calRatioTransformer_trial_4/epoch037/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 038
> > **ROC Curve**:
> > ![4_epoch038_ROC](../plots/calRatioTransformer_trial_4/epoch038/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch038_SR_sig](../plots/calRatioTransformer_trial_4/epoch038/SR_pred_sig.png) | ![4_epoch038_SR_sig_logY](../plots/calRatioTransformer_trial_4/epoch038/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![4_epoch038_SR_bkg](../plots/calRatioTransformer_trial_4/epoch038/SR_pred_bkg.png) | ![4_epoch038_SR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch038/SR_pred_bkg_logY.png) |
> > | **BIB** | ![4_epoch038_SR_bib](../plots/calRatioTransformer_trial_4/epoch038/SR_pred_bib.png) | ![4_epoch038_SR_bib_logY](../plots/calRatioTransformer_trial_4/epoch038/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch038_CR_sig_logY](../plots/calRatioTransformer_trial_4/epoch038/CR_ttbar_pred_sig_logY.png) | ![4_epoch038_CR_sig_logX_logY](../plots/calRatioTransformer_trial_4/epoch038/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![4_epoch038_CR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch038/CR_ttbar_pred_bkg_logY.png) | ![4_epoch038_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_4/epoch038/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![4_epoch038_CR_bib_logY](../plots/calRatioTransformer_trial_4/epoch038/CR_ttbar_pred_bib_logY.png) | ![4_epoch038_CR_bib_logX_logY](../plots/calRatioTransformer_trial_4/epoch038/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 039
> > **ROC Curve**:
> > ![4_epoch039_ROC](../plots/calRatioTransformer_trial_4/epoch039/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch039_SR_sig](../plots/calRatioTransformer_trial_4/epoch039/SR_pred_sig.png) | ![4_epoch039_SR_sig_logY](../plots/calRatioTransformer_trial_4/epoch039/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![4_epoch039_SR_bkg](../plots/calRatioTransformer_trial_4/epoch039/SR_pred_bkg.png) | ![4_epoch039_SR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch039/SR_pred_bkg_logY.png) |
> > | **BIB** | ![4_epoch039_SR_bib](../plots/calRatioTransformer_trial_4/epoch039/SR_pred_bib.png) | ![4_epoch039_SR_bib_logY](../plots/calRatioTransformer_trial_4/epoch039/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![4_epoch039_CR_sig_logY](../plots/calRatioTransformer_trial_4/epoch039/CR_ttbar_pred_sig_logY.png) | ![4_epoch039_CR_sig_logX_logY](../plots/calRatioTransformer_trial_4/epoch039/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![4_epoch039_CR_bkg_logY](../plots/calRatioTransformer_trial_4/epoch039/CR_ttbar_pred_bkg_logY.png) | ![4_epoch039_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_4/epoch039/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![4_epoch039_CR_bib_logY](../plots/calRatioTransformer_trial_4/epoch039/CR_ttbar_pred_bib_logY.png) | ![4_epoch039_CR_bib_logX_logY](../plots/calRatioTransformer_trial_4/epoch039/CR_ttbar_pred_bib_logX_logY.png) |
>


> [!abstract]- Trial 8 (max_epochs=20, SR Loss=0.69029, CR Loss=0.18055)
> **Dedicated Note**: [Open Trial 8 Full Note](Optimized%20Models/Trial%208.md) | **Regime**: Low CR loss
>
> > [!note]- Epoch 010
> > **ROC Curve**:
> > ![8_epoch010_ROC](../plots/calRatioTransformer_trial_8/epoch010/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch010_SR_sig](../plots/calRatioTransformer_trial_8/epoch010/SR_pred_sig.png) | ![8_epoch010_SR_sig_logY](../plots/calRatioTransformer_trial_8/epoch010/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![8_epoch010_SR_bkg](../plots/calRatioTransformer_trial_8/epoch010/SR_pred_bkg.png) | ![8_epoch010_SR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch010/SR_pred_bkg_logY.png) |
> > | **BIB** | ![8_epoch010_SR_bib](../plots/calRatioTransformer_trial_8/epoch010/SR_pred_bib.png) | ![8_epoch010_SR_bib_logY](../plots/calRatioTransformer_trial_8/epoch010/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch010_CR_sig_logY](../plots/calRatioTransformer_trial_8/epoch010/CR_ttbar_pred_sig_logY.png) | ![8_epoch010_CR_sig_logX_logY](../plots/calRatioTransformer_trial_8/epoch010/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![8_epoch010_CR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch010/CR_ttbar_pred_bkg_logY.png) | ![8_epoch010_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_8/epoch010/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![8_epoch010_CR_bib_logY](../plots/calRatioTransformer_trial_8/epoch010/CR_ttbar_pred_bib_logY.png) | ![8_epoch010_CR_bib_logX_logY](../plots/calRatioTransformer_trial_8/epoch010/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 011
> > **ROC Curve**:
> > ![8_epoch011_ROC](../plots/calRatioTransformer_trial_8/epoch011/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch011_SR_sig](../plots/calRatioTransformer_trial_8/epoch011/SR_pred_sig.png) | ![8_epoch011_SR_sig_logY](../plots/calRatioTransformer_trial_8/epoch011/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![8_epoch011_SR_bkg](../plots/calRatioTransformer_trial_8/epoch011/SR_pred_bkg.png) | ![8_epoch011_SR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch011/SR_pred_bkg_logY.png) |
> > | **BIB** | ![8_epoch011_SR_bib](../plots/calRatioTransformer_trial_8/epoch011/SR_pred_bib.png) | ![8_epoch011_SR_bib_logY](../plots/calRatioTransformer_trial_8/epoch011/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch011_CR_sig_logY](../plots/calRatioTransformer_trial_8/epoch011/CR_ttbar_pred_sig_logY.png) | ![8_epoch011_CR_sig_logX_logY](../plots/calRatioTransformer_trial_8/epoch011/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![8_epoch011_CR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch011/CR_ttbar_pred_bkg_logY.png) | ![8_epoch011_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_8/epoch011/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![8_epoch011_CR_bib_logY](../plots/calRatioTransformer_trial_8/epoch011/CR_ttbar_pred_bib_logY.png) | ![8_epoch011_CR_bib_logX_logY](../plots/calRatioTransformer_trial_8/epoch011/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 012
> > **ROC Curve**:
> > ![8_epoch012_ROC](../plots/calRatioTransformer_trial_8/epoch012/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch012_SR_sig](../plots/calRatioTransformer_trial_8/epoch012/SR_pred_sig.png) | ![8_epoch012_SR_sig_logY](../plots/calRatioTransformer_trial_8/epoch012/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![8_epoch012_SR_bkg](../plots/calRatioTransformer_trial_8/epoch012/SR_pred_bkg.png) | ![8_epoch012_SR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch012/SR_pred_bkg_logY.png) |
> > | **BIB** | ![8_epoch012_SR_bib](../plots/calRatioTransformer_trial_8/epoch012/SR_pred_bib.png) | ![8_epoch012_SR_bib_logY](../plots/calRatioTransformer_trial_8/epoch012/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch012_CR_sig_logY](../plots/calRatioTransformer_trial_8/epoch012/CR_ttbar_pred_sig_logY.png) | ![8_epoch012_CR_sig_logX_logY](../plots/calRatioTransformer_trial_8/epoch012/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![8_epoch012_CR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch012/CR_ttbar_pred_bkg_logY.png) | ![8_epoch012_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_8/epoch012/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![8_epoch012_CR_bib_logY](../plots/calRatioTransformer_trial_8/epoch012/CR_ttbar_pred_bib_logY.png) | ![8_epoch012_CR_bib_logX_logY](../plots/calRatioTransformer_trial_8/epoch012/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 013
> > **ROC Curve**:
> > ![8_epoch013_ROC](../plots/calRatioTransformer_trial_8/epoch013/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch013_SR_sig](../plots/calRatioTransformer_trial_8/epoch013/SR_pred_sig.png) | ![8_epoch013_SR_sig_logY](../plots/calRatioTransformer_trial_8/epoch013/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![8_epoch013_SR_bkg](../plots/calRatioTransformer_trial_8/epoch013/SR_pred_bkg.png) | ![8_epoch013_SR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch013/SR_pred_bkg_logY.png) |
> > | **BIB** | ![8_epoch013_SR_bib](../plots/calRatioTransformer_trial_8/epoch013/SR_pred_bib.png) | ![8_epoch013_SR_bib_logY](../plots/calRatioTransformer_trial_8/epoch013/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch013_CR_sig_logY](../plots/calRatioTransformer_trial_8/epoch013/CR_ttbar_pred_sig_logY.png) | ![8_epoch013_CR_sig_logX_logY](../plots/calRatioTransformer_trial_8/epoch013/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![8_epoch013_CR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch013/CR_ttbar_pred_bkg_logY.png) | ![8_epoch013_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_8/epoch013/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![8_epoch013_CR_bib_logY](../plots/calRatioTransformer_trial_8/epoch013/CR_ttbar_pred_bib_logY.png) | ![8_epoch013_CR_bib_logX_logY](../plots/calRatioTransformer_trial_8/epoch013/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 014
> > **ROC Curve**:
> > ![8_epoch014_ROC](../plots/calRatioTransformer_trial_8/epoch014/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch014_SR_sig](../plots/calRatioTransformer_trial_8/epoch014/SR_pred_sig.png) | ![8_epoch014_SR_sig_logY](../plots/calRatioTransformer_trial_8/epoch014/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![8_epoch014_SR_bkg](../plots/calRatioTransformer_trial_8/epoch014/SR_pred_bkg.png) | ![8_epoch014_SR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch014/SR_pred_bkg_logY.png) |
> > | **BIB** | ![8_epoch014_SR_bib](../plots/calRatioTransformer_trial_8/epoch014/SR_pred_bib.png) | ![8_epoch014_SR_bib_logY](../plots/calRatioTransformer_trial_8/epoch014/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch014_CR_sig_logY](../plots/calRatioTransformer_trial_8/epoch014/CR_ttbar_pred_sig_logY.png) | ![8_epoch014_CR_sig_logX_logY](../plots/calRatioTransformer_trial_8/epoch014/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![8_epoch014_CR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch014/CR_ttbar_pred_bkg_logY.png) | ![8_epoch014_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_8/epoch014/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![8_epoch014_CR_bib_logY](../plots/calRatioTransformer_trial_8/epoch014/CR_ttbar_pred_bib_logY.png) | ![8_epoch014_CR_bib_logX_logY](../plots/calRatioTransformer_trial_8/epoch014/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 015
> > **ROC Curve**:
> > ![8_epoch015_ROC](../plots/calRatioTransformer_trial_8/epoch015/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch015_SR_sig](../plots/calRatioTransformer_trial_8/epoch015/SR_pred_sig.png) | ![8_epoch015_SR_sig_logY](../plots/calRatioTransformer_trial_8/epoch015/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![8_epoch015_SR_bkg](../plots/calRatioTransformer_trial_8/epoch015/SR_pred_bkg.png) | ![8_epoch015_SR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch015/SR_pred_bkg_logY.png) |
> > | **BIB** | ![8_epoch015_SR_bib](../plots/calRatioTransformer_trial_8/epoch015/SR_pred_bib.png) | ![8_epoch015_SR_bib_logY](../plots/calRatioTransformer_trial_8/epoch015/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch015_CR_sig_logY](../plots/calRatioTransformer_trial_8/epoch015/CR_ttbar_pred_sig_logY.png) | ![8_epoch015_CR_sig_logX_logY](../plots/calRatioTransformer_trial_8/epoch015/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![8_epoch015_CR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch015/CR_ttbar_pred_bkg_logY.png) | ![8_epoch015_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_8/epoch015/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![8_epoch015_CR_bib_logY](../plots/calRatioTransformer_trial_8/epoch015/CR_ttbar_pred_bib_logY.png) | ![8_epoch015_CR_bib_logX_logY](../plots/calRatioTransformer_trial_8/epoch015/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 016
> > **ROC Curve**:
> > ![8_epoch016_ROC](../plots/calRatioTransformer_trial_8/epoch016/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch016_SR_sig](../plots/calRatioTransformer_trial_8/epoch016/SR_pred_sig.png) | ![8_epoch016_SR_sig_logY](../plots/calRatioTransformer_trial_8/epoch016/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![8_epoch016_SR_bkg](../plots/calRatioTransformer_trial_8/epoch016/SR_pred_bkg.png) | ![8_epoch016_SR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch016/SR_pred_bkg_logY.png) |
> > | **BIB** | ![8_epoch016_SR_bib](../plots/calRatioTransformer_trial_8/epoch016/SR_pred_bib.png) | ![8_epoch016_SR_bib_logY](../plots/calRatioTransformer_trial_8/epoch016/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch016_CR_sig_logY](../plots/calRatioTransformer_trial_8/epoch016/CR_ttbar_pred_sig_logY.png) | ![8_epoch016_CR_sig_logX_logY](../plots/calRatioTransformer_trial_8/epoch016/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![8_epoch016_CR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch016/CR_ttbar_pred_bkg_logY.png) | ![8_epoch016_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_8/epoch016/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![8_epoch016_CR_bib_logY](../plots/calRatioTransformer_trial_8/epoch016/CR_ttbar_pred_bib_logY.png) | ![8_epoch016_CR_bib_logX_logY](../plots/calRatioTransformer_trial_8/epoch016/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 017
> > **ROC Curve**:
> > ![8_epoch017_ROC](../plots/calRatioTransformer_trial_8/epoch017/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch017_SR_sig](../plots/calRatioTransformer_trial_8/epoch017/SR_pred_sig.png) | ![8_epoch017_SR_sig_logY](../plots/calRatioTransformer_trial_8/epoch017/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![8_epoch017_SR_bkg](../plots/calRatioTransformer_trial_8/epoch017/SR_pred_bkg.png) | ![8_epoch017_SR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch017/SR_pred_bkg_logY.png) |
> > | **BIB** | ![8_epoch017_SR_bib](../plots/calRatioTransformer_trial_8/epoch017/SR_pred_bib.png) | ![8_epoch017_SR_bib_logY](../plots/calRatioTransformer_trial_8/epoch017/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch017_CR_sig_logY](../plots/calRatioTransformer_trial_8/epoch017/CR_ttbar_pred_sig_logY.png) | ![8_epoch017_CR_sig_logX_logY](../plots/calRatioTransformer_trial_8/epoch017/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![8_epoch017_CR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch017/CR_ttbar_pred_bkg_logY.png) | ![8_epoch017_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_8/epoch017/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![8_epoch017_CR_bib_logY](../plots/calRatioTransformer_trial_8/epoch017/CR_ttbar_pred_bib_logY.png) | ![8_epoch017_CR_bib_logX_logY](../plots/calRatioTransformer_trial_8/epoch017/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 018
> > **ROC Curve**:
> > ![8_epoch018_ROC](../plots/calRatioTransformer_trial_8/epoch018/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch018_SR_sig](../plots/calRatioTransformer_trial_8/epoch018/SR_pred_sig.png) | ![8_epoch018_SR_sig_logY](../plots/calRatioTransformer_trial_8/epoch018/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![8_epoch018_SR_bkg](../plots/calRatioTransformer_trial_8/epoch018/SR_pred_bkg.png) | ![8_epoch018_SR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch018/SR_pred_bkg_logY.png) |
> > | **BIB** | ![8_epoch018_SR_bib](../plots/calRatioTransformer_trial_8/epoch018/SR_pred_bib.png) | ![8_epoch018_SR_bib_logY](../plots/calRatioTransformer_trial_8/epoch018/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch018_CR_sig_logY](../plots/calRatioTransformer_trial_8/epoch018/CR_ttbar_pred_sig_logY.png) | ![8_epoch018_CR_sig_logX_logY](../plots/calRatioTransformer_trial_8/epoch018/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![8_epoch018_CR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch018/CR_ttbar_pred_bkg_logY.png) | ![8_epoch018_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_8/epoch018/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![8_epoch018_CR_bib_logY](../plots/calRatioTransformer_trial_8/epoch018/CR_ttbar_pred_bib_logY.png) | ![8_epoch018_CR_bib_logX_logY](../plots/calRatioTransformer_trial_8/epoch018/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 019
> > **ROC Curve**:
> > ![8_epoch019_ROC](../plots/calRatioTransformer_trial_8/epoch019/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch019_SR_sig](../plots/calRatioTransformer_trial_8/epoch019/SR_pred_sig.png) | ![8_epoch019_SR_sig_logY](../plots/calRatioTransformer_trial_8/epoch019/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![8_epoch019_SR_bkg](../plots/calRatioTransformer_trial_8/epoch019/SR_pred_bkg.png) | ![8_epoch019_SR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch019/SR_pred_bkg_logY.png) |
> > | **BIB** | ![8_epoch019_SR_bib](../plots/calRatioTransformer_trial_8/epoch019/SR_pred_bib.png) | ![8_epoch019_SR_bib_logY](../plots/calRatioTransformer_trial_8/epoch019/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![8_epoch019_CR_sig_logY](../plots/calRatioTransformer_trial_8/epoch019/CR_ttbar_pred_sig_logY.png) | ![8_epoch019_CR_sig_logX_logY](../plots/calRatioTransformer_trial_8/epoch019/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![8_epoch019_CR_bkg_logY](../plots/calRatioTransformer_trial_8/epoch019/CR_ttbar_pred_bkg_logY.png) | ![8_epoch019_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_8/epoch019/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![8_epoch019_CR_bib_logY](../plots/calRatioTransformer_trial_8/epoch019/CR_ttbar_pred_bib_logY.png) | ![8_epoch019_CR_bib_logX_logY](../plots/calRatioTransformer_trial_8/epoch019/CR_ttbar_pred_bib_logX_logY.png) |
>


> [!abstract]- Trial 13 (max_epochs=40, SR Loss=0.5564, CR Loss=0.28801)
> **Dedicated Note**: [Open Trial 13 Full Note](Optimized%20Models/Trial%2013.md) | **Regime**: Central balanced knee
>
> > [!note]- Epoch 030
> > **ROC Curve**:
> > ![13_epoch030_ROC](../plots/calRatioTransformer_trial_13/epoch030/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch030_SR_sig](../plots/calRatioTransformer_trial_13/epoch030/SR_pred_sig.png) | ![13_epoch030_SR_sig_logY](../plots/calRatioTransformer_trial_13/epoch030/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![13_epoch030_SR_bkg](../plots/calRatioTransformer_trial_13/epoch030/SR_pred_bkg.png) | ![13_epoch030_SR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch030/SR_pred_bkg_logY.png) |
> > | **BIB** | ![13_epoch030_SR_bib](../plots/calRatioTransformer_trial_13/epoch030/SR_pred_bib.png) | ![13_epoch030_SR_bib_logY](../plots/calRatioTransformer_trial_13/epoch030/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch030_CR_sig_logY](../plots/calRatioTransformer_trial_13/epoch030/CR_ttbar_pred_sig_logY.png) | ![13_epoch030_CR_sig_logX_logY](../plots/calRatioTransformer_trial_13/epoch030/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![13_epoch030_CR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch030/CR_ttbar_pred_bkg_logY.png) | ![13_epoch030_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_13/epoch030/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![13_epoch030_CR_bib_logY](../plots/calRatioTransformer_trial_13/epoch030/CR_ttbar_pred_bib_logY.png) | ![13_epoch030_CR_bib_logX_logY](../plots/calRatioTransformer_trial_13/epoch030/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 031
> > **ROC Curve**:
> > ![13_epoch031_ROC](../plots/calRatioTransformer_trial_13/epoch031/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch031_SR_sig](../plots/calRatioTransformer_trial_13/epoch031/SR_pred_sig.png) | ![13_epoch031_SR_sig_logY](../plots/calRatioTransformer_trial_13/epoch031/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![13_epoch031_SR_bkg](../plots/calRatioTransformer_trial_13/epoch031/SR_pred_bkg.png) | ![13_epoch031_SR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch031/SR_pred_bkg_logY.png) |
> > | **BIB** | ![13_epoch031_SR_bib](../plots/calRatioTransformer_trial_13/epoch031/SR_pred_bib.png) | ![13_epoch031_SR_bib_logY](../plots/calRatioTransformer_trial_13/epoch031/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch031_CR_sig_logY](../plots/calRatioTransformer_trial_13/epoch031/CR_ttbar_pred_sig_logY.png) | ![13_epoch031_CR_sig_logX_logY](../plots/calRatioTransformer_trial_13/epoch031/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![13_epoch031_CR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch031/CR_ttbar_pred_bkg_logY.png) | ![13_epoch031_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_13/epoch031/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![13_epoch031_CR_bib_logY](../plots/calRatioTransformer_trial_13/epoch031/CR_ttbar_pred_bib_logY.png) | ![13_epoch031_CR_bib_logX_logY](../plots/calRatioTransformer_trial_13/epoch031/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 032
> > **ROC Curve**:
> > ![13_epoch032_ROC](../plots/calRatioTransformer_trial_13/epoch032/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch032_SR_sig](../plots/calRatioTransformer_trial_13/epoch032/SR_pred_sig.png) | ![13_epoch032_SR_sig_logY](../plots/calRatioTransformer_trial_13/epoch032/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![13_epoch032_SR_bkg](../plots/calRatioTransformer_trial_13/epoch032/SR_pred_bkg.png) | ![13_epoch032_SR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch032/SR_pred_bkg_logY.png) |
> > | **BIB** | ![13_epoch032_SR_bib](../plots/calRatioTransformer_trial_13/epoch032/SR_pred_bib.png) | ![13_epoch032_SR_bib_logY](../plots/calRatioTransformer_trial_13/epoch032/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch032_CR_sig_logY](../plots/calRatioTransformer_trial_13/epoch032/CR_ttbar_pred_sig_logY.png) | ![13_epoch032_CR_sig_logX_logY](../plots/calRatioTransformer_trial_13/epoch032/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![13_epoch032_CR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch032/CR_ttbar_pred_bkg_logY.png) | ![13_epoch032_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_13/epoch032/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![13_epoch032_CR_bib_logY](../plots/calRatioTransformer_trial_13/epoch032/CR_ttbar_pred_bib_logY.png) | ![13_epoch032_CR_bib_logX_logY](../plots/calRatioTransformer_trial_13/epoch032/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 033
> > **ROC Curve**:
> > ![13_epoch033_ROC](../plots/calRatioTransformer_trial_13/epoch033/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch033_SR_sig](../plots/calRatioTransformer_trial_13/epoch033/SR_pred_sig.png) | ![13_epoch033_SR_sig_logY](../plots/calRatioTransformer_trial_13/epoch033/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![13_epoch033_SR_bkg](../plots/calRatioTransformer_trial_13/epoch033/SR_pred_bkg.png) | ![13_epoch033_SR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch033/SR_pred_bkg_logY.png) |
> > | **BIB** | ![13_epoch033_SR_bib](../plots/calRatioTransformer_trial_13/epoch033/SR_pred_bib.png) | ![13_epoch033_SR_bib_logY](../plots/calRatioTransformer_trial_13/epoch033/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch033_CR_sig_logY](../plots/calRatioTransformer_trial_13/epoch033/CR_ttbar_pred_sig_logY.png) | ![13_epoch033_CR_sig_logX_logY](../plots/calRatioTransformer_trial_13/epoch033/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![13_epoch033_CR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch033/CR_ttbar_pred_bkg_logY.png) | ![13_epoch033_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_13/epoch033/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![13_epoch033_CR_bib_logY](../plots/calRatioTransformer_trial_13/epoch033/CR_ttbar_pred_bib_logY.png) | ![13_epoch033_CR_bib_logX_logY](../plots/calRatioTransformer_trial_13/epoch033/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 034
> > **ROC Curve**:
> > ![13_epoch034_ROC](../plots/calRatioTransformer_trial_13/epoch034/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch034_SR_sig](../plots/calRatioTransformer_trial_13/epoch034/SR_pred_sig.png) | ![13_epoch034_SR_sig_logY](../plots/calRatioTransformer_trial_13/epoch034/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![13_epoch034_SR_bkg](../plots/calRatioTransformer_trial_13/epoch034/SR_pred_bkg.png) | ![13_epoch034_SR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch034/SR_pred_bkg_logY.png) |
> > | **BIB** | ![13_epoch034_SR_bib](../plots/calRatioTransformer_trial_13/epoch034/SR_pred_bib.png) | ![13_epoch034_SR_bib_logY](../plots/calRatioTransformer_trial_13/epoch034/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch034_CR_sig_logY](../plots/calRatioTransformer_trial_13/epoch034/CR_ttbar_pred_sig_logY.png) | ![13_epoch034_CR_sig_logX_logY](../plots/calRatioTransformer_trial_13/epoch034/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![13_epoch034_CR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch034/CR_ttbar_pred_bkg_logY.png) | ![13_epoch034_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_13/epoch034/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![13_epoch034_CR_bib_logY](../plots/calRatioTransformer_trial_13/epoch034/CR_ttbar_pred_bib_logY.png) | ![13_epoch034_CR_bib_logX_logY](../plots/calRatioTransformer_trial_13/epoch034/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 035
> > **ROC Curve**:
> > ![13_epoch035_ROC](../plots/calRatioTransformer_trial_13/epoch035/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch035_SR_sig](../plots/calRatioTransformer_trial_13/epoch035/SR_pred_sig.png) | ![13_epoch035_SR_sig_logY](../plots/calRatioTransformer_trial_13/epoch035/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![13_epoch035_SR_bkg](../plots/calRatioTransformer_trial_13/epoch035/SR_pred_bkg.png) | ![13_epoch035_SR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch035/SR_pred_bkg_logY.png) |
> > | **BIB** | ![13_epoch035_SR_bib](../plots/calRatioTransformer_trial_13/epoch035/SR_pred_bib.png) | ![13_epoch035_SR_bib_logY](../plots/calRatioTransformer_trial_13/epoch035/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch035_CR_sig_logY](../plots/calRatioTransformer_trial_13/epoch035/CR_ttbar_pred_sig_logY.png) | ![13_epoch035_CR_sig_logX_logY](../plots/calRatioTransformer_trial_13/epoch035/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![13_epoch035_CR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch035/CR_ttbar_pred_bkg_logY.png) | ![13_epoch035_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_13/epoch035/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![13_epoch035_CR_bib_logY](../plots/calRatioTransformer_trial_13/epoch035/CR_ttbar_pred_bib_logY.png) | ![13_epoch035_CR_bib_logX_logY](../plots/calRatioTransformer_trial_13/epoch035/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 036
> > **ROC Curve**:
> > ![13_epoch036_ROC](../plots/calRatioTransformer_trial_13/epoch036/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch036_SR_sig](../plots/calRatioTransformer_trial_13/epoch036/SR_pred_sig.png) | ![13_epoch036_SR_sig_logY](../plots/calRatioTransformer_trial_13/epoch036/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![13_epoch036_SR_bkg](../plots/calRatioTransformer_trial_13/epoch036/SR_pred_bkg.png) | ![13_epoch036_SR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch036/SR_pred_bkg_logY.png) |
> > | **BIB** | ![13_epoch036_SR_bib](../plots/calRatioTransformer_trial_13/epoch036/SR_pred_bib.png) | ![13_epoch036_SR_bib_logY](../plots/calRatioTransformer_trial_13/epoch036/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch036_CR_sig_logY](../plots/calRatioTransformer_trial_13/epoch036/CR_ttbar_pred_sig_logY.png) | ![13_epoch036_CR_sig_logX_logY](../plots/calRatioTransformer_trial_13/epoch036/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![13_epoch036_CR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch036/CR_ttbar_pred_bkg_logY.png) | ![13_epoch036_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_13/epoch036/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![13_epoch036_CR_bib_logY](../plots/calRatioTransformer_trial_13/epoch036/CR_ttbar_pred_bib_logY.png) | ![13_epoch036_CR_bib_logX_logY](../plots/calRatioTransformer_trial_13/epoch036/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 037
> > **ROC Curve**:
> > ![13_epoch037_ROC](../plots/calRatioTransformer_trial_13/epoch037/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch037_SR_sig](../plots/calRatioTransformer_trial_13/epoch037/SR_pred_sig.png) | ![13_epoch037_SR_sig_logY](../plots/calRatioTransformer_trial_13/epoch037/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![13_epoch037_SR_bkg](../plots/calRatioTransformer_trial_13/epoch037/SR_pred_bkg.png) | ![13_epoch037_SR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch037/SR_pred_bkg_logY.png) |
> > | **BIB** | ![13_epoch037_SR_bib](../plots/calRatioTransformer_trial_13/epoch037/SR_pred_bib.png) | ![13_epoch037_SR_bib_logY](../plots/calRatioTransformer_trial_13/epoch037/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch037_CR_sig_logY](../plots/calRatioTransformer_trial_13/epoch037/CR_ttbar_pred_sig_logY.png) | ![13_epoch037_CR_sig_logX_logY](../plots/calRatioTransformer_trial_13/epoch037/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![13_epoch037_CR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch037/CR_ttbar_pred_bkg_logY.png) | ![13_epoch037_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_13/epoch037/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![13_epoch037_CR_bib_logY](../plots/calRatioTransformer_trial_13/epoch037/CR_ttbar_pred_bib_logY.png) | ![13_epoch037_CR_bib_logX_logY](../plots/calRatioTransformer_trial_13/epoch037/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 038
> > **ROC Curve**:
> > ![13_epoch038_ROC](../plots/calRatioTransformer_trial_13/epoch038/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch038_SR_sig](../plots/calRatioTransformer_trial_13/epoch038/SR_pred_sig.png) | ![13_epoch038_SR_sig_logY](../plots/calRatioTransformer_trial_13/epoch038/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![13_epoch038_SR_bkg](../plots/calRatioTransformer_trial_13/epoch038/SR_pred_bkg.png) | ![13_epoch038_SR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch038/SR_pred_bkg_logY.png) |
> > | **BIB** | ![13_epoch038_SR_bib](../plots/calRatioTransformer_trial_13/epoch038/SR_pred_bib.png) | ![13_epoch038_SR_bib_logY](../plots/calRatioTransformer_trial_13/epoch038/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch038_CR_sig_logY](../plots/calRatioTransformer_trial_13/epoch038/CR_ttbar_pred_sig_logY.png) | ![13_epoch038_CR_sig_logX_logY](../plots/calRatioTransformer_trial_13/epoch038/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![13_epoch038_CR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch038/CR_ttbar_pred_bkg_logY.png) | ![13_epoch038_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_13/epoch038/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![13_epoch038_CR_bib_logY](../plots/calRatioTransformer_trial_13/epoch038/CR_ttbar_pred_bib_logY.png) | ![13_epoch038_CR_bib_logX_logY](../plots/calRatioTransformer_trial_13/epoch038/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 039
> > **ROC Curve**:
> > ![13_epoch039_ROC](../plots/calRatioTransformer_trial_13/epoch039/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch039_SR_sig](../plots/calRatioTransformer_trial_13/epoch039/SR_pred_sig.png) | ![13_epoch039_SR_sig_logY](../plots/calRatioTransformer_trial_13/epoch039/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![13_epoch039_SR_bkg](../plots/calRatioTransformer_trial_13/epoch039/SR_pred_bkg.png) | ![13_epoch039_SR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch039/SR_pred_bkg_logY.png) |
> > | **BIB** | ![13_epoch039_SR_bib](../plots/calRatioTransformer_trial_13/epoch039/SR_pred_bib.png) | ![13_epoch039_SR_bib_logY](../plots/calRatioTransformer_trial_13/epoch039/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![13_epoch039_CR_sig_logY](../plots/calRatioTransformer_trial_13/epoch039/CR_ttbar_pred_sig_logY.png) | ![13_epoch039_CR_sig_logX_logY](../plots/calRatioTransformer_trial_13/epoch039/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![13_epoch039_CR_bkg_logY](../plots/calRatioTransformer_trial_13/epoch039/CR_ttbar_pred_bkg_logY.png) | ![13_epoch039_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_13/epoch039/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![13_epoch039_CR_bib_logY](../plots/calRatioTransformer_trial_13/epoch039/CR_ttbar_pred_bib_logY.png) | ![13_epoch039_CR_bib_logX_logY](../plots/calRatioTransformer_trial_13/epoch039/CR_ttbar_pred_bib_logX_logY.png) |
>


> [!abstract]- Trial 25 (max_epochs=30, SR Loss=0.5148, CR Loss=0.58522)
> **Dedicated Note**: [Open Trial 25 Full Note](Optimized%20Models/Trial%2025.md) | **Regime**: Extreme SR focus
>
> > [!note]- Epoch 020
> > **ROC Curve**:
> > ![25_epoch020_ROC](../plots/calRatioTransformer_trial_25/epoch020/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch020_SR_sig](../plots/calRatioTransformer_trial_25/epoch020/SR_pred_sig.png) | ![25_epoch020_SR_sig_logY](../plots/calRatioTransformer_trial_25/epoch020/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![25_epoch020_SR_bkg](../plots/calRatioTransformer_trial_25/epoch020/SR_pred_bkg.png) | ![25_epoch020_SR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch020/SR_pred_bkg_logY.png) |
> > | **BIB** | ![25_epoch020_SR_bib](../plots/calRatioTransformer_trial_25/epoch020/SR_pred_bib.png) | ![25_epoch020_SR_bib_logY](../plots/calRatioTransformer_trial_25/epoch020/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch020_CR_sig_logY](../plots/calRatioTransformer_trial_25/epoch020/CR_ttbar_pred_sig_logY.png) | ![25_epoch020_CR_sig_logX_logY](../plots/calRatioTransformer_trial_25/epoch020/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![25_epoch020_CR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch020/CR_ttbar_pred_bkg_logY.png) | ![25_epoch020_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_25/epoch020/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![25_epoch020_CR_bib_logY](../plots/calRatioTransformer_trial_25/epoch020/CR_ttbar_pred_bib_logY.png) | ![25_epoch020_CR_bib_logX_logY](../plots/calRatioTransformer_trial_25/epoch020/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 021
> > **ROC Curve**:
> > ![25_epoch021_ROC](../plots/calRatioTransformer_trial_25/epoch021/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch021_SR_sig](../plots/calRatioTransformer_trial_25/epoch021/SR_pred_sig.png) | ![25_epoch021_SR_sig_logY](../plots/calRatioTransformer_trial_25/epoch021/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![25_epoch021_SR_bkg](../plots/calRatioTransformer_trial_25/epoch021/SR_pred_bkg.png) | ![25_epoch021_SR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch021/SR_pred_bkg_logY.png) |
> > | **BIB** | ![25_epoch021_SR_bib](../plots/calRatioTransformer_trial_25/epoch021/SR_pred_bib.png) | ![25_epoch021_SR_bib_logY](../plots/calRatioTransformer_trial_25/epoch021/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch021_CR_sig_logY](../plots/calRatioTransformer_trial_25/epoch021/CR_ttbar_pred_sig_logY.png) | ![25_epoch021_CR_sig_logX_logY](../plots/calRatioTransformer_trial_25/epoch021/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![25_epoch021_CR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch021/CR_ttbar_pred_bkg_logY.png) | ![25_epoch021_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_25/epoch021/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![25_epoch021_CR_bib_logY](../plots/calRatioTransformer_trial_25/epoch021/CR_ttbar_pred_bib_logY.png) | ![25_epoch021_CR_bib_logX_logY](../plots/calRatioTransformer_trial_25/epoch021/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 022
> > **ROC Curve**:
> > ![25_epoch022_ROC](../plots/calRatioTransformer_trial_25/epoch022/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch022_SR_sig](../plots/calRatioTransformer_trial_25/epoch022/SR_pred_sig.png) | ![25_epoch022_SR_sig_logY](../plots/calRatioTransformer_trial_25/epoch022/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![25_epoch022_SR_bkg](../plots/calRatioTransformer_trial_25/epoch022/SR_pred_bkg.png) | ![25_epoch022_SR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch022/SR_pred_bkg_logY.png) |
> > | **BIB** | ![25_epoch022_SR_bib](../plots/calRatioTransformer_trial_25/epoch022/SR_pred_bib.png) | ![25_epoch022_SR_bib_logY](../plots/calRatioTransformer_trial_25/epoch022/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch022_CR_sig_logY](../plots/calRatioTransformer_trial_25/epoch022/CR_ttbar_pred_sig_logY.png) | ![25_epoch022_CR_sig_logX_logY](../plots/calRatioTransformer_trial_25/epoch022/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![25_epoch022_CR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch022/CR_ttbar_pred_bkg_logY.png) | ![25_epoch022_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_25/epoch022/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![25_epoch022_CR_bib_logY](../plots/calRatioTransformer_trial_25/epoch022/CR_ttbar_pred_bib_logY.png) | ![25_epoch022_CR_bib_logX_logY](../plots/calRatioTransformer_trial_25/epoch022/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 023
> > **ROC Curve**:
> > ![25_epoch023_ROC](../plots/calRatioTransformer_trial_25/epoch023/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch023_SR_sig](../plots/calRatioTransformer_trial_25/epoch023/SR_pred_sig.png) | ![25_epoch023_SR_sig_logY](../plots/calRatioTransformer_trial_25/epoch023/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![25_epoch023_SR_bkg](../plots/calRatioTransformer_trial_25/epoch023/SR_pred_bkg.png) | ![25_epoch023_SR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch023/SR_pred_bkg_logY.png) |
> > | **BIB** | ![25_epoch023_SR_bib](../plots/calRatioTransformer_trial_25/epoch023/SR_pred_bib.png) | ![25_epoch023_SR_bib_logY](../plots/calRatioTransformer_trial_25/epoch023/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch023_CR_sig_logY](../plots/calRatioTransformer_trial_25/epoch023/CR_ttbar_pred_sig_logY.png) | ![25_epoch023_CR_sig_logX_logY](../plots/calRatioTransformer_trial_25/epoch023/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![25_epoch023_CR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch023/CR_ttbar_pred_bkg_logY.png) | ![25_epoch023_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_25/epoch023/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![25_epoch023_CR_bib_logY](../plots/calRatioTransformer_trial_25/epoch023/CR_ttbar_pred_bib_logY.png) | ![25_epoch023_CR_bib_logX_logY](../plots/calRatioTransformer_trial_25/epoch023/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 024
> > **ROC Curve**:
> > ![25_epoch024_ROC](../plots/calRatioTransformer_trial_25/epoch024/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch024_SR_sig](../plots/calRatioTransformer_trial_25/epoch024/SR_pred_sig.png) | ![25_epoch024_SR_sig_logY](../plots/calRatioTransformer_trial_25/epoch024/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![25_epoch024_SR_bkg](../plots/calRatioTransformer_trial_25/epoch024/SR_pred_bkg.png) | ![25_epoch024_SR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch024/SR_pred_bkg_logY.png) |
> > | **BIB** | ![25_epoch024_SR_bib](../plots/calRatioTransformer_trial_25/epoch024/SR_pred_bib.png) | ![25_epoch024_SR_bib_logY](../plots/calRatioTransformer_trial_25/epoch024/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch024_CR_sig_logY](../plots/calRatioTransformer_trial_25/epoch024/CR_ttbar_pred_sig_logY.png) | ![25_epoch024_CR_sig_logX_logY](../plots/calRatioTransformer_trial_25/epoch024/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![25_epoch024_CR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch024/CR_ttbar_pred_bkg_logY.png) | ![25_epoch024_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_25/epoch024/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![25_epoch024_CR_bib_logY](../plots/calRatioTransformer_trial_25/epoch024/CR_ttbar_pred_bib_logY.png) | ![25_epoch024_CR_bib_logX_logY](../plots/calRatioTransformer_trial_25/epoch024/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 025
> > **ROC Curve**:
> > ![25_epoch025_ROC](../plots/calRatioTransformer_trial_25/epoch025/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch025_SR_sig](../plots/calRatioTransformer_trial_25/epoch025/SR_pred_sig.png) | ![25_epoch025_SR_sig_logY](../plots/calRatioTransformer_trial_25/epoch025/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![25_epoch025_SR_bkg](../plots/calRatioTransformer_trial_25/epoch025/SR_pred_bkg.png) | ![25_epoch025_SR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch025/SR_pred_bkg_logY.png) |
> > | **BIB** | ![25_epoch025_SR_bib](../plots/calRatioTransformer_trial_25/epoch025/SR_pred_bib.png) | ![25_epoch025_SR_bib_logY](../plots/calRatioTransformer_trial_25/epoch025/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch025_CR_sig_logY](../plots/calRatioTransformer_trial_25/epoch025/CR_ttbar_pred_sig_logY.png) | ![25_epoch025_CR_sig_logX_logY](../plots/calRatioTransformer_trial_25/epoch025/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![25_epoch025_CR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch025/CR_ttbar_pred_bkg_logY.png) | ![25_epoch025_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_25/epoch025/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![25_epoch025_CR_bib_logY](../plots/calRatioTransformer_trial_25/epoch025/CR_ttbar_pred_bib_logY.png) | ![25_epoch025_CR_bib_logX_logY](../plots/calRatioTransformer_trial_25/epoch025/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 026
> > **ROC Curve**:
> > ![25_epoch026_ROC](../plots/calRatioTransformer_trial_25/epoch026/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch026_SR_sig](../plots/calRatioTransformer_trial_25/epoch026/SR_pred_sig.png) | ![25_epoch026_SR_sig_logY](../plots/calRatioTransformer_trial_25/epoch026/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![25_epoch026_SR_bkg](../plots/calRatioTransformer_trial_25/epoch026/SR_pred_bkg.png) | ![25_epoch026_SR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch026/SR_pred_bkg_logY.png) |
> > | **BIB** | ![25_epoch026_SR_bib](../plots/calRatioTransformer_trial_25/epoch026/SR_pred_bib.png) | ![25_epoch026_SR_bib_logY](../plots/calRatioTransformer_trial_25/epoch026/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch026_CR_sig_logY](../plots/calRatioTransformer_trial_25/epoch026/CR_ttbar_pred_sig_logY.png) | ![25_epoch026_CR_sig_logX_logY](../plots/calRatioTransformer_trial_25/epoch026/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![25_epoch026_CR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch026/CR_ttbar_pred_bkg_logY.png) | ![25_epoch026_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_25/epoch026/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![25_epoch026_CR_bib_logY](../plots/calRatioTransformer_trial_25/epoch026/CR_ttbar_pred_bib_logY.png) | ![25_epoch026_CR_bib_logX_logY](../plots/calRatioTransformer_trial_25/epoch026/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 027
> > **ROC Curve**:
> > ![25_epoch027_ROC](../plots/calRatioTransformer_trial_25/epoch027/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch027_SR_sig](../plots/calRatioTransformer_trial_25/epoch027/SR_pred_sig.png) | ![25_epoch027_SR_sig_logY](../plots/calRatioTransformer_trial_25/epoch027/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![25_epoch027_SR_bkg](../plots/calRatioTransformer_trial_25/epoch027/SR_pred_bkg.png) | ![25_epoch027_SR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch027/SR_pred_bkg_logY.png) |
> > | **BIB** | ![25_epoch027_SR_bib](../plots/calRatioTransformer_trial_25/epoch027/SR_pred_bib.png) | ![25_epoch027_SR_bib_logY](../plots/calRatioTransformer_trial_25/epoch027/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch027_CR_sig_logY](../plots/calRatioTransformer_trial_25/epoch027/CR_ttbar_pred_sig_logY.png) | ![25_epoch027_CR_sig_logX_logY](../plots/calRatioTransformer_trial_25/epoch027/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![25_epoch027_CR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch027/CR_ttbar_pred_bkg_logY.png) | ![25_epoch027_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_25/epoch027/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![25_epoch027_CR_bib_logY](../plots/calRatioTransformer_trial_25/epoch027/CR_ttbar_pred_bib_logY.png) | ![25_epoch027_CR_bib_logX_logY](../plots/calRatioTransformer_trial_25/epoch027/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 028
> > **ROC Curve**:
> > ![25_epoch028_ROC](../plots/calRatioTransformer_trial_25/epoch028/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch028_SR_sig](../plots/calRatioTransformer_trial_25/epoch028/SR_pred_sig.png) | ![25_epoch028_SR_sig_logY](../plots/calRatioTransformer_trial_25/epoch028/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![25_epoch028_SR_bkg](../plots/calRatioTransformer_trial_25/epoch028/SR_pred_bkg.png) | ![25_epoch028_SR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch028/SR_pred_bkg_logY.png) |
> > | **BIB** | ![25_epoch028_SR_bib](../plots/calRatioTransformer_trial_25/epoch028/SR_pred_bib.png) | ![25_epoch028_SR_bib_logY](../plots/calRatioTransformer_trial_25/epoch028/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch028_CR_sig_logY](../plots/calRatioTransformer_trial_25/epoch028/CR_ttbar_pred_sig_logY.png) | ![25_epoch028_CR_sig_logX_logY](../plots/calRatioTransformer_trial_25/epoch028/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![25_epoch028_CR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch028/CR_ttbar_pred_bkg_logY.png) | ![25_epoch028_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_25/epoch028/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![25_epoch028_CR_bib_logY](../plots/calRatioTransformer_trial_25/epoch028/CR_ttbar_pred_bib_logY.png) | ![25_epoch028_CR_bib_logX_logY](../plots/calRatioTransformer_trial_25/epoch028/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 029
> > **ROC Curve**:
> > ![25_epoch029_ROC](../plots/calRatioTransformer_trial_25/epoch029/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch029_SR_sig](../plots/calRatioTransformer_trial_25/epoch029/SR_pred_sig.png) | ![25_epoch029_SR_sig_logY](../plots/calRatioTransformer_trial_25/epoch029/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![25_epoch029_SR_bkg](../plots/calRatioTransformer_trial_25/epoch029/SR_pred_bkg.png) | ![25_epoch029_SR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch029/SR_pred_bkg_logY.png) |
> > | **BIB** | ![25_epoch029_SR_bib](../plots/calRatioTransformer_trial_25/epoch029/SR_pred_bib.png) | ![25_epoch029_SR_bib_logY](../plots/calRatioTransformer_trial_25/epoch029/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![25_epoch029_CR_sig_logY](../plots/calRatioTransformer_trial_25/epoch029/CR_ttbar_pred_sig_logY.png) | ![25_epoch029_CR_sig_logX_logY](../plots/calRatioTransformer_trial_25/epoch029/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![25_epoch029_CR_bkg_logY](../plots/calRatioTransformer_trial_25/epoch029/CR_ttbar_pred_bkg_logY.png) | ![25_epoch029_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_25/epoch029/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![25_epoch029_CR_bib_logY](../plots/calRatioTransformer_trial_25/epoch029/CR_ttbar_pred_bib_logY.png) | ![25_epoch029_CR_bib_logX_logY](../plots/calRatioTransformer_trial_25/epoch029/CR_ttbar_pred_bib_logX_logY.png) |
>


> [!abstract]- Trial 45 (max_epochs=30, SR Loss=0.69758, CR Loss=0.14171)
> **Dedicated Note**: [Open Trial 45 Full Note](Optimized%20Models/Trial%2045.md) | **Regime**: Extreme CR focus
>
> > [!note]- Epoch 020
> > **ROC Curve**:
> > ![45_epoch020_ROC](../plots/calRatioTransformer_trial_45/epoch020/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch020_SR_sig](../plots/calRatioTransformer_trial_45/epoch020/SR_pred_sig.png) | ![45_epoch020_SR_sig_logY](../plots/calRatioTransformer_trial_45/epoch020/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![45_epoch020_SR_bkg](../plots/calRatioTransformer_trial_45/epoch020/SR_pred_bkg.png) | ![45_epoch020_SR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch020/SR_pred_bkg_logY.png) |
> > | **BIB** | ![45_epoch020_SR_bib](../plots/calRatioTransformer_trial_45/epoch020/SR_pred_bib.png) | ![45_epoch020_SR_bib_logY](../plots/calRatioTransformer_trial_45/epoch020/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch020_CR_sig_logY](../plots/calRatioTransformer_trial_45/epoch020/CR_ttbar_pred_sig_logY.png) | ![45_epoch020_CR_sig_logX_logY](../plots/calRatioTransformer_trial_45/epoch020/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![45_epoch020_CR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch020/CR_ttbar_pred_bkg_logY.png) | ![45_epoch020_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_45/epoch020/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![45_epoch020_CR_bib_logY](../plots/calRatioTransformer_trial_45/epoch020/CR_ttbar_pred_bib_logY.png) | ![45_epoch020_CR_bib_logX_logY](../plots/calRatioTransformer_trial_45/epoch020/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 021
> > **ROC Curve**:
> > ![45_epoch021_ROC](../plots/calRatioTransformer_trial_45/epoch021/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch021_SR_sig](../plots/calRatioTransformer_trial_45/epoch021/SR_pred_sig.png) | ![45_epoch021_SR_sig_logY](../plots/calRatioTransformer_trial_45/epoch021/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![45_epoch021_SR_bkg](../plots/calRatioTransformer_trial_45/epoch021/SR_pred_bkg.png) | ![45_epoch021_SR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch021/SR_pred_bkg_logY.png) |
> > | **BIB** | ![45_epoch021_SR_bib](../plots/calRatioTransformer_trial_45/epoch021/SR_pred_bib.png) | ![45_epoch021_SR_bib_logY](../plots/calRatioTransformer_trial_45/epoch021/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch021_CR_sig_logY](../plots/calRatioTransformer_trial_45/epoch021/CR_ttbar_pred_sig_logY.png) | ![45_epoch021_CR_sig_logX_logY](../plots/calRatioTransformer_trial_45/epoch021/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![45_epoch021_CR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch021/CR_ttbar_pred_bkg_logY.png) | ![45_epoch021_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_45/epoch021/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![45_epoch021_CR_bib_logY](../plots/calRatioTransformer_trial_45/epoch021/CR_ttbar_pred_bib_logY.png) | ![45_epoch021_CR_bib_logX_logY](../plots/calRatioTransformer_trial_45/epoch021/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 022
> > **ROC Curve**:
> > ![45_epoch022_ROC](../plots/calRatioTransformer_trial_45/epoch022/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch022_SR_sig](../plots/calRatioTransformer_trial_45/epoch022/SR_pred_sig.png) | ![45_epoch022_SR_sig_logY](../plots/calRatioTransformer_trial_45/epoch022/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![45_epoch022_SR_bkg](../plots/calRatioTransformer_trial_45/epoch022/SR_pred_bkg.png) | ![45_epoch022_SR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch022/SR_pred_bkg_logY.png) |
> > | **BIB** | ![45_epoch022_SR_bib](../plots/calRatioTransformer_trial_45/epoch022/SR_pred_bib.png) | ![45_epoch022_SR_bib_logY](../plots/calRatioTransformer_trial_45/epoch022/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch022_CR_sig_logY](../plots/calRatioTransformer_trial_45/epoch022/CR_ttbar_pred_sig_logY.png) | ![45_epoch022_CR_sig_logX_logY](../plots/calRatioTransformer_trial_45/epoch022/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![45_epoch022_CR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch022/CR_ttbar_pred_bkg_logY.png) | ![45_epoch022_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_45/epoch022/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![45_epoch022_CR_bib_logY](../plots/calRatioTransformer_trial_45/epoch022/CR_ttbar_pred_bib_logY.png) | ![45_epoch022_CR_bib_logX_logY](../plots/calRatioTransformer_trial_45/epoch022/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 023
> > **ROC Curve**:
> > ![45_epoch023_ROC](../plots/calRatioTransformer_trial_45/epoch023/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch023_SR_sig](../plots/calRatioTransformer_trial_45/epoch023/SR_pred_sig.png) | ![45_epoch023_SR_sig_logY](../plots/calRatioTransformer_trial_45/epoch023/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![45_epoch023_SR_bkg](../plots/calRatioTransformer_trial_45/epoch023/SR_pred_bkg.png) | ![45_epoch023_SR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch023/SR_pred_bkg_logY.png) |
> > | **BIB** | ![45_epoch023_SR_bib](../plots/calRatioTransformer_trial_45/epoch023/SR_pred_bib.png) | ![45_epoch023_SR_bib_logY](../plots/calRatioTransformer_trial_45/epoch023/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch023_CR_sig_logY](../plots/calRatioTransformer_trial_45/epoch023/CR_ttbar_pred_sig_logY.png) | ![45_epoch023_CR_sig_logX_logY](../plots/calRatioTransformer_trial_45/epoch023/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![45_epoch023_CR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch023/CR_ttbar_pred_bkg_logY.png) | ![45_epoch023_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_45/epoch023/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![45_epoch023_CR_bib_logY](../plots/calRatioTransformer_trial_45/epoch023/CR_ttbar_pred_bib_logY.png) | ![45_epoch023_CR_bib_logX_logY](../plots/calRatioTransformer_trial_45/epoch023/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 024
> > **ROC Curve**:
> > ![45_epoch024_ROC](../plots/calRatioTransformer_trial_45/epoch024/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch024_SR_sig](../plots/calRatioTransformer_trial_45/epoch024/SR_pred_sig.png) | ![45_epoch024_SR_sig_logY](../plots/calRatioTransformer_trial_45/epoch024/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![45_epoch024_SR_bkg](../plots/calRatioTransformer_trial_45/epoch024/SR_pred_bkg.png) | ![45_epoch024_SR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch024/SR_pred_bkg_logY.png) |
> > | **BIB** | ![45_epoch024_SR_bib](../plots/calRatioTransformer_trial_45/epoch024/SR_pred_bib.png) | ![45_epoch024_SR_bib_logY](../plots/calRatioTransformer_trial_45/epoch024/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch024_CR_sig_logY](../plots/calRatioTransformer_trial_45/epoch024/CR_ttbar_pred_sig_logY.png) | ![45_epoch024_CR_sig_logX_logY](../plots/calRatioTransformer_trial_45/epoch024/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![45_epoch024_CR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch024/CR_ttbar_pred_bkg_logY.png) | ![45_epoch024_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_45/epoch024/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![45_epoch024_CR_bib_logY](../plots/calRatioTransformer_trial_45/epoch024/CR_ttbar_pred_bib_logY.png) | ![45_epoch024_CR_bib_logX_logY](../plots/calRatioTransformer_trial_45/epoch024/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 025
> > **ROC Curve**:
> > ![45_epoch025_ROC](../plots/calRatioTransformer_trial_45/epoch025/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch025_SR_sig](../plots/calRatioTransformer_trial_45/epoch025/SR_pred_sig.png) | ![45_epoch025_SR_sig_logY](../plots/calRatioTransformer_trial_45/epoch025/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![45_epoch025_SR_bkg](../plots/calRatioTransformer_trial_45/epoch025/SR_pred_bkg.png) | ![45_epoch025_SR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch025/SR_pred_bkg_logY.png) |
> > | **BIB** | ![45_epoch025_SR_bib](../plots/calRatioTransformer_trial_45/epoch025/SR_pred_bib.png) | ![45_epoch025_SR_bib_logY](../plots/calRatioTransformer_trial_45/epoch025/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch025_CR_sig_logY](../plots/calRatioTransformer_trial_45/epoch025/CR_ttbar_pred_sig_logY.png) | ![45_epoch025_CR_sig_logX_logY](../plots/calRatioTransformer_trial_45/epoch025/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![45_epoch025_CR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch025/CR_ttbar_pred_bkg_logY.png) | ![45_epoch025_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_45/epoch025/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![45_epoch025_CR_bib_logY](../plots/calRatioTransformer_trial_45/epoch025/CR_ttbar_pred_bib_logY.png) | ![45_epoch025_CR_bib_logX_logY](../plots/calRatioTransformer_trial_45/epoch025/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 026
> > **ROC Curve**:
> > ![45_epoch026_ROC](../plots/calRatioTransformer_trial_45/epoch026/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch026_SR_sig](../plots/calRatioTransformer_trial_45/epoch026/SR_pred_sig.png) | ![45_epoch026_SR_sig_logY](../plots/calRatioTransformer_trial_45/epoch026/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![45_epoch026_SR_bkg](../plots/calRatioTransformer_trial_45/epoch026/SR_pred_bkg.png) | ![45_epoch026_SR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch026/SR_pred_bkg_logY.png) |
> > | **BIB** | ![45_epoch026_SR_bib](../plots/calRatioTransformer_trial_45/epoch026/SR_pred_bib.png) | ![45_epoch026_SR_bib_logY](../plots/calRatioTransformer_trial_45/epoch026/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch026_CR_sig_logY](../plots/calRatioTransformer_trial_45/epoch026/CR_ttbar_pred_sig_logY.png) | ![45_epoch026_CR_sig_logX_logY](../plots/calRatioTransformer_trial_45/epoch026/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![45_epoch026_CR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch026/CR_ttbar_pred_bkg_logY.png) | ![45_epoch026_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_45/epoch026/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![45_epoch026_CR_bib_logY](../plots/calRatioTransformer_trial_45/epoch026/CR_ttbar_pred_bib_logY.png) | ![45_epoch026_CR_bib_logX_logY](../plots/calRatioTransformer_trial_45/epoch026/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 027
> > **ROC Curve**:
> > ![45_epoch027_ROC](../plots/calRatioTransformer_trial_45/epoch027/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch027_SR_sig](../plots/calRatioTransformer_trial_45/epoch027/SR_pred_sig.png) | ![45_epoch027_SR_sig_logY](../plots/calRatioTransformer_trial_45/epoch027/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![45_epoch027_SR_bkg](../plots/calRatioTransformer_trial_45/epoch027/SR_pred_bkg.png) | ![45_epoch027_SR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch027/SR_pred_bkg_logY.png) |
> > | **BIB** | ![45_epoch027_SR_bib](../plots/calRatioTransformer_trial_45/epoch027/SR_pred_bib.png) | ![45_epoch027_SR_bib_logY](../plots/calRatioTransformer_trial_45/epoch027/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch027_CR_sig_logY](../plots/calRatioTransformer_trial_45/epoch027/CR_ttbar_pred_sig_logY.png) | ![45_epoch027_CR_sig_logX_logY](../plots/calRatioTransformer_trial_45/epoch027/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![45_epoch027_CR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch027/CR_ttbar_pred_bkg_logY.png) | ![45_epoch027_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_45/epoch027/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![45_epoch027_CR_bib_logY](../plots/calRatioTransformer_trial_45/epoch027/CR_ttbar_pred_bib_logY.png) | ![45_epoch027_CR_bib_logX_logY](../plots/calRatioTransformer_trial_45/epoch027/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 028
> > **ROC Curve**:
> > ![45_epoch028_ROC](../plots/calRatioTransformer_trial_45/epoch028/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch028_SR_sig](../plots/calRatioTransformer_trial_45/epoch028/SR_pred_sig.png) | ![45_epoch028_SR_sig_logY](../plots/calRatioTransformer_trial_45/epoch028/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![45_epoch028_SR_bkg](../plots/calRatioTransformer_trial_45/epoch028/SR_pred_bkg.png) | ![45_epoch028_SR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch028/SR_pred_bkg_logY.png) |
> > | **BIB** | ![45_epoch028_SR_bib](../plots/calRatioTransformer_trial_45/epoch028/SR_pred_bib.png) | ![45_epoch028_SR_bib_logY](../plots/calRatioTransformer_trial_45/epoch028/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch028_CR_sig_logY](../plots/calRatioTransformer_trial_45/epoch028/CR_ttbar_pred_sig_logY.png) | ![45_epoch028_CR_sig_logX_logY](../plots/calRatioTransformer_trial_45/epoch028/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![45_epoch028_CR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch028/CR_ttbar_pred_bkg_logY.png) | ![45_epoch028_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_45/epoch028/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![45_epoch028_CR_bib_logY](../plots/calRatioTransformer_trial_45/epoch028/CR_ttbar_pred_bib_logY.png) | ![45_epoch028_CR_bib_logX_logY](../plots/calRatioTransformer_trial_45/epoch028/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 029
> > **ROC Curve**:
> > ![45_epoch029_ROC](../plots/calRatioTransformer_trial_45/epoch029/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch029_SR_sig](../plots/calRatioTransformer_trial_45/epoch029/SR_pred_sig.png) | ![45_epoch029_SR_sig_logY](../plots/calRatioTransformer_trial_45/epoch029/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![45_epoch029_SR_bkg](../plots/calRatioTransformer_trial_45/epoch029/SR_pred_bkg.png) | ![45_epoch029_SR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch029/SR_pred_bkg_logY.png) |
> > | **BIB** | ![45_epoch029_SR_bib](../plots/calRatioTransformer_trial_45/epoch029/SR_pred_bib.png) | ![45_epoch029_SR_bib_logY](../plots/calRatioTransformer_trial_45/epoch029/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![45_epoch029_CR_sig_logY](../plots/calRatioTransformer_trial_45/epoch029/CR_ttbar_pred_sig_logY.png) | ![45_epoch029_CR_sig_logX_logY](../plots/calRatioTransformer_trial_45/epoch029/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![45_epoch029_CR_bkg_logY](../plots/calRatioTransformer_trial_45/epoch029/CR_ttbar_pred_bkg_logY.png) | ![45_epoch029_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_45/epoch029/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![45_epoch029_CR_bib_logY](../plots/calRatioTransformer_trial_45/epoch029/CR_ttbar_pred_bib_logY.png) | ![45_epoch029_CR_bib_logX_logY](../plots/calRatioTransformer_trial_45/epoch029/CR_ttbar_pred_bib_logX_logY.png) |
>


> [!abstract]- Trial 46 (max_epochs=40, SR Loss=0.94563, CR Loss=0.09172)
> **Dedicated Note**: [Open Trial 46 Full Note](Optimized%20Models/Trial%2046.md) | **Regime**: Absolute lowest CR loss (bottom-right)
>
> > [!note]- Epoch 030
> > **ROC Curve**:
> > ![46_epoch030_ROC](../plots/calRatioTransformer_trial_46/epoch030/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch030_SR_sig](../plots/calRatioTransformer_trial_46/epoch030/SR_pred_sig.png) | ![46_epoch030_SR_sig_logY](../plots/calRatioTransformer_trial_46/epoch030/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![46_epoch030_SR_bkg](../plots/calRatioTransformer_trial_46/epoch030/SR_pred_bkg.png) | ![46_epoch030_SR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch030/SR_pred_bkg_logY.png) |
> > | **BIB** | ![46_epoch030_SR_bib](../plots/calRatioTransformer_trial_46/epoch030/SR_pred_bib.png) | ![46_epoch030_SR_bib_logY](../plots/calRatioTransformer_trial_46/epoch030/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch030_CR_sig_logY](../plots/calRatioTransformer_trial_46/epoch030/CR_ttbar_pred_sig_logY.png) | ![46_epoch030_CR_sig_logX_logY](../plots/calRatioTransformer_trial_46/epoch030/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![46_epoch030_CR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch030/CR_ttbar_pred_bkg_logY.png) | ![46_epoch030_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_46/epoch030/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![46_epoch030_CR_bib_logY](../plots/calRatioTransformer_trial_46/epoch030/CR_ttbar_pred_bib_logY.png) | ![46_epoch030_CR_bib_logX_logY](../plots/calRatioTransformer_trial_46/epoch030/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 031
> > **ROC Curve**:
> > ![46_epoch031_ROC](../plots/calRatioTransformer_trial_46/epoch031/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch031_SR_sig](../plots/calRatioTransformer_trial_46/epoch031/SR_pred_sig.png) | ![46_epoch031_SR_sig_logY](../plots/calRatioTransformer_trial_46/epoch031/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![46_epoch031_SR_bkg](../plots/calRatioTransformer_trial_46/epoch031/SR_pred_bkg.png) | ![46_epoch031_SR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch031/SR_pred_bkg_logY.png) |
> > | **BIB** | ![46_epoch031_SR_bib](../plots/calRatioTransformer_trial_46/epoch031/SR_pred_bib.png) | ![46_epoch031_SR_bib_logY](../plots/calRatioTransformer_trial_46/epoch031/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch031_CR_sig_logY](../plots/calRatioTransformer_trial_46/epoch031/CR_ttbar_pred_sig_logY.png) | ![46_epoch031_CR_sig_logX_logY](../plots/calRatioTransformer_trial_46/epoch031/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![46_epoch031_CR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch031/CR_ttbar_pred_bkg_logY.png) | ![46_epoch031_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_46/epoch031/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![46_epoch031_CR_bib_logY](../plots/calRatioTransformer_trial_46/epoch031/CR_ttbar_pred_bib_logY.png) | ![46_epoch031_CR_bib_logX_logY](../plots/calRatioTransformer_trial_46/epoch031/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 032
> > **ROC Curve**:
> > ![46_epoch032_ROC](../plots/calRatioTransformer_trial_46/epoch032/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch032_SR_sig](../plots/calRatioTransformer_trial_46/epoch032/SR_pred_sig.png) | ![46_epoch032_SR_sig_logY](../plots/calRatioTransformer_trial_46/epoch032/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![46_epoch032_SR_bkg](../plots/calRatioTransformer_trial_46/epoch032/SR_pred_bkg.png) | ![46_epoch032_SR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch032/SR_pred_bkg_logY.png) |
> > | **BIB** | ![46_epoch032_SR_bib](../plots/calRatioTransformer_trial_46/epoch032/SR_pred_bib.png) | ![46_epoch032_SR_bib_logY](../plots/calRatioTransformer_trial_46/epoch032/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch032_CR_sig_logY](../plots/calRatioTransformer_trial_46/epoch032/CR_ttbar_pred_sig_logY.png) | ![46_epoch032_CR_sig_logX_logY](../plots/calRatioTransformer_trial_46/epoch032/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![46_epoch032_CR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch032/CR_ttbar_pred_bkg_logY.png) | ![46_epoch032_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_46/epoch032/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![46_epoch032_CR_bib_logY](../plots/calRatioTransformer_trial_46/epoch032/CR_ttbar_pred_bib_logY.png) | ![46_epoch032_CR_bib_logX_logY](../plots/calRatioTransformer_trial_46/epoch032/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 033
> > **ROC Curve**:
> > ![46_epoch033_ROC](../plots/calRatioTransformer_trial_46/epoch033/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch033_SR_sig](../plots/calRatioTransformer_trial_46/epoch033/SR_pred_sig.png) | ![46_epoch033_SR_sig_logY](../plots/calRatioTransformer_trial_46/epoch033/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![46_epoch033_SR_bkg](../plots/calRatioTransformer_trial_46/epoch033/SR_pred_bkg.png) | ![46_epoch033_SR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch033/SR_pred_bkg_logY.png) |
> > | **BIB** | ![46_epoch033_SR_bib](../plots/calRatioTransformer_trial_46/epoch033/SR_pred_bib.png) | ![46_epoch033_SR_bib_logY](../plots/calRatioTransformer_trial_46/epoch033/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch033_CR_sig_logY](../plots/calRatioTransformer_trial_46/epoch033/CR_ttbar_pred_sig_logY.png) | ![46_epoch033_CR_sig_logX_logY](../plots/calRatioTransformer_trial_46/epoch033/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![46_epoch033_CR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch033/CR_ttbar_pred_bkg_logY.png) | ![46_epoch033_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_46/epoch033/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![46_epoch033_CR_bib_logY](../plots/calRatioTransformer_trial_46/epoch033/CR_ttbar_pred_bib_logY.png) | ![46_epoch033_CR_bib_logX_logY](../plots/calRatioTransformer_trial_46/epoch033/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 034
> > **ROC Curve**:
> > ![46_epoch034_ROC](../plots/calRatioTransformer_trial_46/epoch034/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch034_SR_sig](../plots/calRatioTransformer_trial_46/epoch034/SR_pred_sig.png) | ![46_epoch034_SR_sig_logY](../plots/calRatioTransformer_trial_46/epoch034/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![46_epoch034_SR_bkg](../plots/calRatioTransformer_trial_46/epoch034/SR_pred_bkg.png) | ![46_epoch034_SR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch034/SR_pred_bkg_logY.png) |
> > | **BIB** | ![46_epoch034_SR_bib](../plots/calRatioTransformer_trial_46/epoch034/SR_pred_bib.png) | ![46_epoch034_SR_bib_logY](../plots/calRatioTransformer_trial_46/epoch034/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch034_CR_sig_logY](../plots/calRatioTransformer_trial_46/epoch034/CR_ttbar_pred_sig_logY.png) | ![46_epoch034_CR_sig_logX_logY](../plots/calRatioTransformer_trial_46/epoch034/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![46_epoch034_CR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch034/CR_ttbar_pred_bkg_logY.png) | ![46_epoch034_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_46/epoch034/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![46_epoch034_CR_bib_logY](../plots/calRatioTransformer_trial_46/epoch034/CR_ttbar_pred_bib_logY.png) | ![46_epoch034_CR_bib_logX_logY](../plots/calRatioTransformer_trial_46/epoch034/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 035
> > **ROC Curve**:
> > ![46_epoch035_ROC](../plots/calRatioTransformer_trial_46/epoch035/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch035_SR_sig](../plots/calRatioTransformer_trial_46/epoch035/SR_pred_sig.png) | ![46_epoch035_SR_sig_logY](../plots/calRatioTransformer_trial_46/epoch035/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![46_epoch035_SR_bkg](../plots/calRatioTransformer_trial_46/epoch035/SR_pred_bkg.png) | ![46_epoch035_SR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch035/SR_pred_bkg_logY.png) |
> > | **BIB** | ![46_epoch035_SR_bib](../plots/calRatioTransformer_trial_46/epoch035/SR_pred_bib.png) | ![46_epoch035_SR_bib_logY](../plots/calRatioTransformer_trial_46/epoch035/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch035_CR_sig_logY](../plots/calRatioTransformer_trial_46/epoch035/CR_ttbar_pred_sig_logY.png) | ![46_epoch035_CR_sig_logX_logY](../plots/calRatioTransformer_trial_46/epoch035/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![46_epoch035_CR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch035/CR_ttbar_pred_bkg_logY.png) | ![46_epoch035_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_46/epoch035/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![46_epoch035_CR_bib_logY](../plots/calRatioTransformer_trial_46/epoch035/CR_ttbar_pred_bib_logY.png) | ![46_epoch035_CR_bib_logX_logY](../plots/calRatioTransformer_trial_46/epoch035/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 036
> > **ROC Curve**:
> > ![46_epoch036_ROC](../plots/calRatioTransformer_trial_46/epoch036/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch036_SR_sig](../plots/calRatioTransformer_trial_46/epoch036/SR_pred_sig.png) | ![46_epoch036_SR_sig_logY](../plots/calRatioTransformer_trial_46/epoch036/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![46_epoch036_SR_bkg](../plots/calRatioTransformer_trial_46/epoch036/SR_pred_bkg.png) | ![46_epoch036_SR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch036/SR_pred_bkg_logY.png) |
> > | **BIB** | ![46_epoch036_SR_bib](../plots/calRatioTransformer_trial_46/epoch036/SR_pred_bib.png) | ![46_epoch036_SR_bib_logY](../plots/calRatioTransformer_trial_46/epoch036/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch036_CR_sig_logY](../plots/calRatioTransformer_trial_46/epoch036/CR_ttbar_pred_sig_logY.png) | ![46_epoch036_CR_sig_logX_logY](../plots/calRatioTransformer_trial_46/epoch036/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![46_epoch036_CR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch036/CR_ttbar_pred_bkg_logY.png) | ![46_epoch036_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_46/epoch036/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![46_epoch036_CR_bib_logY](../plots/calRatioTransformer_trial_46/epoch036/CR_ttbar_pred_bib_logY.png) | ![46_epoch036_CR_bib_logX_logY](../plots/calRatioTransformer_trial_46/epoch036/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 037
> > **ROC Curve**:
> > ![46_epoch037_ROC](../plots/calRatioTransformer_trial_46/epoch037/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch037_SR_sig](../plots/calRatioTransformer_trial_46/epoch037/SR_pred_sig.png) | ![46_epoch037_SR_sig_logY](../plots/calRatioTransformer_trial_46/epoch037/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![46_epoch037_SR_bkg](../plots/calRatioTransformer_trial_46/epoch037/SR_pred_bkg.png) | ![46_epoch037_SR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch037/SR_pred_bkg_logY.png) |
> > | **BIB** | ![46_epoch037_SR_bib](../plots/calRatioTransformer_trial_46/epoch037/SR_pred_bib.png) | ![46_epoch037_SR_bib_logY](../plots/calRatioTransformer_trial_46/epoch037/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch037_CR_sig_logY](../plots/calRatioTransformer_trial_46/epoch037/CR_ttbar_pred_sig_logY.png) | ![46_epoch037_CR_sig_logX_logY](../plots/calRatioTransformer_trial_46/epoch037/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![46_epoch037_CR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch037/CR_ttbar_pred_bkg_logY.png) | ![46_epoch037_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_46/epoch037/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![46_epoch037_CR_bib_logY](../plots/calRatioTransformer_trial_46/epoch037/CR_ttbar_pred_bib_logY.png) | ![46_epoch037_CR_bib_logX_logY](../plots/calRatioTransformer_trial_46/epoch037/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 038
> > **ROC Curve**:
> > ![46_epoch038_ROC](../plots/calRatioTransformer_trial_46/epoch038/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch038_SR_sig](../plots/calRatioTransformer_trial_46/epoch038/SR_pred_sig.png) | ![46_epoch038_SR_sig_logY](../plots/calRatioTransformer_trial_46/epoch038/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![46_epoch038_SR_bkg](../plots/calRatioTransformer_trial_46/epoch038/SR_pred_bkg.png) | ![46_epoch038_SR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch038/SR_pred_bkg_logY.png) |
> > | **BIB** | ![46_epoch038_SR_bib](../plots/calRatioTransformer_trial_46/epoch038/SR_pred_bib.png) | ![46_epoch038_SR_bib_logY](../plots/calRatioTransformer_trial_46/epoch038/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch038_CR_sig_logY](../plots/calRatioTransformer_trial_46/epoch038/CR_ttbar_pred_sig_logY.png) | ![46_epoch038_CR_sig_logX_logY](../plots/calRatioTransformer_trial_46/epoch038/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![46_epoch038_CR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch038/CR_ttbar_pred_bkg_logY.png) | ![46_epoch038_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_46/epoch038/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![46_epoch038_CR_bib_logY](../plots/calRatioTransformer_trial_46/epoch038/CR_ttbar_pred_bib_logY.png) | ![46_epoch038_CR_bib_logX_logY](../plots/calRatioTransformer_trial_46/epoch038/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 039
> > **ROC Curve**:
> > ![46_epoch039_ROC](../plots/calRatioTransformer_trial_46/epoch039/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch039_SR_sig](../plots/calRatioTransformer_trial_46/epoch039/SR_pred_sig.png) | ![46_epoch039_SR_sig_logY](../plots/calRatioTransformer_trial_46/epoch039/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![46_epoch039_SR_bkg](../plots/calRatioTransformer_trial_46/epoch039/SR_pred_bkg.png) | ![46_epoch039_SR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch039/SR_pred_bkg_logY.png) |
> > | **BIB** | ![46_epoch039_SR_bib](../plots/calRatioTransformer_trial_46/epoch039/SR_pred_bib.png) | ![46_epoch039_SR_bib_logY](../plots/calRatioTransformer_trial_46/epoch039/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![46_epoch039_CR_sig_logY](../plots/calRatioTransformer_trial_46/epoch039/CR_ttbar_pred_sig_logY.png) | ![46_epoch039_CR_sig_logX_logY](../plots/calRatioTransformer_trial_46/epoch039/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![46_epoch039_CR_bkg_logY](../plots/calRatioTransformer_trial_46/epoch039/CR_ttbar_pred_bkg_logY.png) | ![46_epoch039_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_46/epoch039/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![46_epoch039_CR_bib_logY](../plots/calRatioTransformer_trial_46/epoch039/CR_ttbar_pred_bib_logY.png) | ![46_epoch039_CR_bib_logX_logY](../plots/calRatioTransformer_trial_46/epoch039/CR_ttbar_pred_bib_logX_logY.png) |
>


> [!abstract]- Trial 47 (max_epochs=20, SR Loss=0.51235, CR Loss=0.60071)
> **Dedicated Note**: [Open Trial 47 Full Note](Optimized%20Models/Trial%2047.md) | **Regime**: Absolute lowest SR loss (top-left)
>
> > [!note]- Epoch 010
> > **ROC Curve**:
> > ![47_epoch010_ROC](../plots/calRatioTransformer_trial_47/epoch010/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch010_SR_sig](../plots/calRatioTransformer_trial_47/epoch010/SR_pred_sig.png) | ![47_epoch010_SR_sig_logY](../plots/calRatioTransformer_trial_47/epoch010/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![47_epoch010_SR_bkg](../plots/calRatioTransformer_trial_47/epoch010/SR_pred_bkg.png) | ![47_epoch010_SR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch010/SR_pred_bkg_logY.png) |
> > | **BIB** | ![47_epoch010_SR_bib](../plots/calRatioTransformer_trial_47/epoch010/SR_pred_bib.png) | ![47_epoch010_SR_bib_logY](../plots/calRatioTransformer_trial_47/epoch010/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch010_CR_sig_logY](../plots/calRatioTransformer_trial_47/epoch010/CR_ttbar_pred_sig_logY.png) | ![47_epoch010_CR_sig_logX_logY](../plots/calRatioTransformer_trial_47/epoch010/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![47_epoch010_CR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch010/CR_ttbar_pred_bkg_logY.png) | ![47_epoch010_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_47/epoch010/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![47_epoch010_CR_bib_logY](../plots/calRatioTransformer_trial_47/epoch010/CR_ttbar_pred_bib_logY.png) | ![47_epoch010_CR_bib_logX_logY](../plots/calRatioTransformer_trial_47/epoch010/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 011
> > **ROC Curve**:
> > ![47_epoch011_ROC](../plots/calRatioTransformer_trial_47/epoch011/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch011_SR_sig](../plots/calRatioTransformer_trial_47/epoch011/SR_pred_sig.png) | ![47_epoch011_SR_sig_logY](../plots/calRatioTransformer_trial_47/epoch011/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![47_epoch011_SR_bkg](../plots/calRatioTransformer_trial_47/epoch011/SR_pred_bkg.png) | ![47_epoch011_SR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch011/SR_pred_bkg_logY.png) |
> > | **BIB** | ![47_epoch011_SR_bib](../plots/calRatioTransformer_trial_47/epoch011/SR_pred_bib.png) | ![47_epoch011_SR_bib_logY](../plots/calRatioTransformer_trial_47/epoch011/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch011_CR_sig_logY](../plots/calRatioTransformer_trial_47/epoch011/CR_ttbar_pred_sig_logY.png) | ![47_epoch011_CR_sig_logX_logY](../plots/calRatioTransformer_trial_47/epoch011/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![47_epoch011_CR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch011/CR_ttbar_pred_bkg_logY.png) | ![47_epoch011_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_47/epoch011/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![47_epoch011_CR_bib_logY](../plots/calRatioTransformer_trial_47/epoch011/CR_ttbar_pred_bib_logY.png) | ![47_epoch011_CR_bib_logX_logY](../plots/calRatioTransformer_trial_47/epoch011/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 012
> > **ROC Curve**:
> > ![47_epoch012_ROC](../plots/calRatioTransformer_trial_47/epoch012/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch012_SR_sig](../plots/calRatioTransformer_trial_47/epoch012/SR_pred_sig.png) | ![47_epoch012_SR_sig_logY](../plots/calRatioTransformer_trial_47/epoch012/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![47_epoch012_SR_bkg](../plots/calRatioTransformer_trial_47/epoch012/SR_pred_bkg.png) | ![47_epoch012_SR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch012/SR_pred_bkg_logY.png) |
> > | **BIB** | ![47_epoch012_SR_bib](../plots/calRatioTransformer_trial_47/epoch012/SR_pred_bib.png) | ![47_epoch012_SR_bib_logY](../plots/calRatioTransformer_trial_47/epoch012/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch012_CR_sig_logY](../plots/calRatioTransformer_trial_47/epoch012/CR_ttbar_pred_sig_logY.png) | ![47_epoch012_CR_sig_logX_logY](../plots/calRatioTransformer_trial_47/epoch012/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![47_epoch012_CR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch012/CR_ttbar_pred_bkg_logY.png) | ![47_epoch012_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_47/epoch012/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![47_epoch012_CR_bib_logY](../plots/calRatioTransformer_trial_47/epoch012/CR_ttbar_pred_bib_logY.png) | ![47_epoch012_CR_bib_logX_logY](../plots/calRatioTransformer_trial_47/epoch012/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 013
> > **ROC Curve**:
> > ![47_epoch013_ROC](../plots/calRatioTransformer_trial_47/epoch013/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch013_SR_sig](../plots/calRatioTransformer_trial_47/epoch013/SR_pred_sig.png) | ![47_epoch013_SR_sig_logY](../plots/calRatioTransformer_trial_47/epoch013/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![47_epoch013_SR_bkg](../plots/calRatioTransformer_trial_47/epoch013/SR_pred_bkg.png) | ![47_epoch013_SR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch013/SR_pred_bkg_logY.png) |
> > | **BIB** | ![47_epoch013_SR_bib](../plots/calRatioTransformer_trial_47/epoch013/SR_pred_bib.png) | ![47_epoch013_SR_bib_logY](../plots/calRatioTransformer_trial_47/epoch013/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch013_CR_sig_logY](../plots/calRatioTransformer_trial_47/epoch013/CR_ttbar_pred_sig_logY.png) | ![47_epoch013_CR_sig_logX_logY](../plots/calRatioTransformer_trial_47/epoch013/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![47_epoch013_CR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch013/CR_ttbar_pred_bkg_logY.png) | ![47_epoch013_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_47/epoch013/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![47_epoch013_CR_bib_logY](../plots/calRatioTransformer_trial_47/epoch013/CR_ttbar_pred_bib_logY.png) | ![47_epoch013_CR_bib_logX_logY](../plots/calRatioTransformer_trial_47/epoch013/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 014
> > **ROC Curve**:
> > ![47_epoch014_ROC](../plots/calRatioTransformer_trial_47/epoch014/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch014_SR_sig](../plots/calRatioTransformer_trial_47/epoch014/SR_pred_sig.png) | ![47_epoch014_SR_sig_logY](../plots/calRatioTransformer_trial_47/epoch014/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![47_epoch014_SR_bkg](../plots/calRatioTransformer_trial_47/epoch014/SR_pred_bkg.png) | ![47_epoch014_SR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch014/SR_pred_bkg_logY.png) |
> > | **BIB** | ![47_epoch014_SR_bib](../plots/calRatioTransformer_trial_47/epoch014/SR_pred_bib.png) | ![47_epoch014_SR_bib_logY](../plots/calRatioTransformer_trial_47/epoch014/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch014_CR_sig_logY](../plots/calRatioTransformer_trial_47/epoch014/CR_ttbar_pred_sig_logY.png) | ![47_epoch014_CR_sig_logX_logY](../plots/calRatioTransformer_trial_47/epoch014/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![47_epoch014_CR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch014/CR_ttbar_pred_bkg_logY.png) | ![47_epoch014_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_47/epoch014/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![47_epoch014_CR_bib_logY](../plots/calRatioTransformer_trial_47/epoch014/CR_ttbar_pred_bib_logY.png) | ![47_epoch014_CR_bib_logX_logY](../plots/calRatioTransformer_trial_47/epoch014/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 015
> > **ROC Curve**:
> > ![47_epoch015_ROC](../plots/calRatioTransformer_trial_47/epoch015/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch015_SR_sig](../plots/calRatioTransformer_trial_47/epoch015/SR_pred_sig.png) | ![47_epoch015_SR_sig_logY](../plots/calRatioTransformer_trial_47/epoch015/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![47_epoch015_SR_bkg](../plots/calRatioTransformer_trial_47/epoch015/SR_pred_bkg.png) | ![47_epoch015_SR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch015/SR_pred_bkg_logY.png) |
> > | **BIB** | ![47_epoch015_SR_bib](../plots/calRatioTransformer_trial_47/epoch015/SR_pred_bib.png) | ![47_epoch015_SR_bib_logY](../plots/calRatioTransformer_trial_47/epoch015/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch015_CR_sig_logY](../plots/calRatioTransformer_trial_47/epoch015/CR_ttbar_pred_sig_logY.png) | ![47_epoch015_CR_sig_logX_logY](../plots/calRatioTransformer_trial_47/epoch015/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![47_epoch015_CR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch015/CR_ttbar_pred_bkg_logY.png) | ![47_epoch015_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_47/epoch015/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![47_epoch015_CR_bib_logY](../plots/calRatioTransformer_trial_47/epoch015/CR_ttbar_pred_bib_logY.png) | ![47_epoch015_CR_bib_logX_logY](../plots/calRatioTransformer_trial_47/epoch015/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 016
> > **ROC Curve**:
> > ![47_epoch016_ROC](../plots/calRatioTransformer_trial_47/epoch016/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch016_SR_sig](../plots/calRatioTransformer_trial_47/epoch016/SR_pred_sig.png) | ![47_epoch016_SR_sig_logY](../plots/calRatioTransformer_trial_47/epoch016/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![47_epoch016_SR_bkg](../plots/calRatioTransformer_trial_47/epoch016/SR_pred_bkg.png) | ![47_epoch016_SR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch016/SR_pred_bkg_logY.png) |
> > | **BIB** | ![47_epoch016_SR_bib](../plots/calRatioTransformer_trial_47/epoch016/SR_pred_bib.png) | ![47_epoch016_SR_bib_logY](../plots/calRatioTransformer_trial_47/epoch016/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch016_CR_sig_logY](../plots/calRatioTransformer_trial_47/epoch016/CR_ttbar_pred_sig_logY.png) | ![47_epoch016_CR_sig_logX_logY](../plots/calRatioTransformer_trial_47/epoch016/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![47_epoch016_CR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch016/CR_ttbar_pred_bkg_logY.png) | ![47_epoch016_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_47/epoch016/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![47_epoch016_CR_bib_logY](../plots/calRatioTransformer_trial_47/epoch016/CR_ttbar_pred_bib_logY.png) | ![47_epoch016_CR_bib_logX_logY](../plots/calRatioTransformer_trial_47/epoch016/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 017
> > **ROC Curve**:
> > ![47_epoch017_ROC](../plots/calRatioTransformer_trial_47/epoch017/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch017_SR_sig](../plots/calRatioTransformer_trial_47/epoch017/SR_pred_sig.png) | ![47_epoch017_SR_sig_logY](../plots/calRatioTransformer_trial_47/epoch017/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![47_epoch017_SR_bkg](../plots/calRatioTransformer_trial_47/epoch017/SR_pred_bkg.png) | ![47_epoch017_SR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch017/SR_pred_bkg_logY.png) |
> > | **BIB** | ![47_epoch017_SR_bib](../plots/calRatioTransformer_trial_47/epoch017/SR_pred_bib.png) | ![47_epoch017_SR_bib_logY](../plots/calRatioTransformer_trial_47/epoch017/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch017_CR_sig_logY](../plots/calRatioTransformer_trial_47/epoch017/CR_ttbar_pred_sig_logY.png) | ![47_epoch017_CR_sig_logX_logY](../plots/calRatioTransformer_trial_47/epoch017/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![47_epoch017_CR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch017/CR_ttbar_pred_bkg_logY.png) | ![47_epoch017_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_47/epoch017/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![47_epoch017_CR_bib_logY](../plots/calRatioTransformer_trial_47/epoch017/CR_ttbar_pred_bib_logY.png) | ![47_epoch017_CR_bib_logX_logY](../plots/calRatioTransformer_trial_47/epoch017/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 018
> > **ROC Curve**:
> > ![47_epoch018_ROC](../plots/calRatioTransformer_trial_47/epoch018/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch018_SR_sig](../plots/calRatioTransformer_trial_47/epoch018/SR_pred_sig.png) | ![47_epoch018_SR_sig_logY](../plots/calRatioTransformer_trial_47/epoch018/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![47_epoch018_SR_bkg](../plots/calRatioTransformer_trial_47/epoch018/SR_pred_bkg.png) | ![47_epoch018_SR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch018/SR_pred_bkg_logY.png) |
> > | **BIB** | ![47_epoch018_SR_bib](../plots/calRatioTransformer_trial_47/epoch018/SR_pred_bib.png) | ![47_epoch018_SR_bib_logY](../plots/calRatioTransformer_trial_47/epoch018/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch018_CR_sig_logY](../plots/calRatioTransformer_trial_47/epoch018/CR_ttbar_pred_sig_logY.png) | ![47_epoch018_CR_sig_logX_logY](../plots/calRatioTransformer_trial_47/epoch018/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![47_epoch018_CR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch018/CR_ttbar_pred_bkg_logY.png) | ![47_epoch018_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_47/epoch018/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![47_epoch018_CR_bib_logY](../plots/calRatioTransformer_trial_47/epoch018/CR_ttbar_pred_bib_logY.png) | ![47_epoch018_CR_bib_logX_logY](../plots/calRatioTransformer_trial_47/epoch018/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 019
> > **ROC Curve**:
> > ![47_epoch019_ROC](../plots/calRatioTransformer_trial_47/epoch019/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch019_SR_sig](../plots/calRatioTransformer_trial_47/epoch019/SR_pred_sig.png) | ![47_epoch019_SR_sig_logY](../plots/calRatioTransformer_trial_47/epoch019/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![47_epoch019_SR_bkg](../plots/calRatioTransformer_trial_47/epoch019/SR_pred_bkg.png) | ![47_epoch019_SR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch019/SR_pred_bkg_logY.png) |
> > | **BIB** | ![47_epoch019_SR_bib](../plots/calRatioTransformer_trial_47/epoch019/SR_pred_bib.png) | ![47_epoch019_SR_bib_logY](../plots/calRatioTransformer_trial_47/epoch019/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![47_epoch019_CR_sig_logY](../plots/calRatioTransformer_trial_47/epoch019/CR_ttbar_pred_sig_logY.png) | ![47_epoch019_CR_sig_logX_logY](../plots/calRatioTransformer_trial_47/epoch019/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![47_epoch019_CR_bkg_logY](../plots/calRatioTransformer_trial_47/epoch019/CR_ttbar_pred_bkg_logY.png) | ![47_epoch019_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_47/epoch019/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![47_epoch019_CR_bib_logY](../plots/calRatioTransformer_trial_47/epoch019/CR_ttbar_pred_bib_logY.png) | ![47_epoch019_CR_bib_logX_logY](../plots/calRatioTransformer_trial_47/epoch019/CR_ttbar_pred_bib_logX_logY.png) |
>


> [!abstract]- Trial 48 (max_epochs=40, SR Loss=0.5564, CR Loss=0.28801)
> **Dedicated Note**: [Open Trial 48 Full Note](Optimized%20Models/Trial%2048.md) | **Regime**: Central balanced knee
>
> > [!note]- Epoch 030
> > **ROC Curve**:
> > ![48_epoch030_ROC](../plots/calRatioTransformer_trial_48/epoch030/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch030_SR_sig](../plots/calRatioTransformer_trial_48/epoch030/SR_pred_sig.png) | ![48_epoch030_SR_sig_logY](../plots/calRatioTransformer_trial_48/epoch030/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![48_epoch030_SR_bkg](../plots/calRatioTransformer_trial_48/epoch030/SR_pred_bkg.png) | ![48_epoch030_SR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch030/SR_pred_bkg_logY.png) |
> > | **BIB** | ![48_epoch030_SR_bib](../plots/calRatioTransformer_trial_48/epoch030/SR_pred_bib.png) | ![48_epoch030_SR_bib_logY](../plots/calRatioTransformer_trial_48/epoch030/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch030_CR_sig_logY](../plots/calRatioTransformer_trial_48/epoch030/CR_ttbar_pred_sig_logY.png) | ![48_epoch030_CR_sig_logX_logY](../plots/calRatioTransformer_trial_48/epoch030/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![48_epoch030_CR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch030/CR_ttbar_pred_bkg_logY.png) | ![48_epoch030_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_48/epoch030/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![48_epoch030_CR_bib_logY](../plots/calRatioTransformer_trial_48/epoch030/CR_ttbar_pred_bib_logY.png) | ![48_epoch030_CR_bib_logX_logY](../plots/calRatioTransformer_trial_48/epoch030/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 031
> > **ROC Curve**:
> > ![48_epoch031_ROC](../plots/calRatioTransformer_trial_48/epoch031/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch031_SR_sig](../plots/calRatioTransformer_trial_48/epoch031/SR_pred_sig.png) | ![48_epoch031_SR_sig_logY](../plots/calRatioTransformer_trial_48/epoch031/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![48_epoch031_SR_bkg](../plots/calRatioTransformer_trial_48/epoch031/SR_pred_bkg.png) | ![48_epoch031_SR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch031/SR_pred_bkg_logY.png) |
> > | **BIB** | ![48_epoch031_SR_bib](../plots/calRatioTransformer_trial_48/epoch031/SR_pred_bib.png) | ![48_epoch031_SR_bib_logY](../plots/calRatioTransformer_trial_48/epoch031/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch031_CR_sig_logY](../plots/calRatioTransformer_trial_48/epoch031/CR_ttbar_pred_sig_logY.png) | ![48_epoch031_CR_sig_logX_logY](../plots/calRatioTransformer_trial_48/epoch031/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![48_epoch031_CR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch031/CR_ttbar_pred_bkg_logY.png) | ![48_epoch031_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_48/epoch031/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![48_epoch031_CR_bib_logY](../plots/calRatioTransformer_trial_48/epoch031/CR_ttbar_pred_bib_logY.png) | ![48_epoch031_CR_bib_logX_logY](../plots/calRatioTransformer_trial_48/epoch031/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 032
> > **ROC Curve**:
> > ![48_epoch032_ROC](../plots/calRatioTransformer_trial_48/epoch032/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch032_SR_sig](../plots/calRatioTransformer_trial_48/epoch032/SR_pred_sig.png) | ![48_epoch032_SR_sig_logY](../plots/calRatioTransformer_trial_48/epoch032/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![48_epoch032_SR_bkg](../plots/calRatioTransformer_trial_48/epoch032/SR_pred_bkg.png) | ![48_epoch032_SR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch032/SR_pred_bkg_logY.png) |
> > | **BIB** | ![48_epoch032_SR_bib](../plots/calRatioTransformer_trial_48/epoch032/SR_pred_bib.png) | ![48_epoch032_SR_bib_logY](../plots/calRatioTransformer_trial_48/epoch032/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch032_CR_sig_logY](../plots/calRatioTransformer_trial_48/epoch032/CR_ttbar_pred_sig_logY.png) | ![48_epoch032_CR_sig_logX_logY](../plots/calRatioTransformer_trial_48/epoch032/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![48_epoch032_CR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch032/CR_ttbar_pred_bkg_logY.png) | ![48_epoch032_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_48/epoch032/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![48_epoch032_CR_bib_logY](../plots/calRatioTransformer_trial_48/epoch032/CR_ttbar_pred_bib_logY.png) | ![48_epoch032_CR_bib_logX_logY](../plots/calRatioTransformer_trial_48/epoch032/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 033
> > **ROC Curve**:
> > ![48_epoch033_ROC](../plots/calRatioTransformer_trial_48/epoch033/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch033_SR_sig](../plots/calRatioTransformer_trial_48/epoch033/SR_pred_sig.png) | ![48_epoch033_SR_sig_logY](../plots/calRatioTransformer_trial_48/epoch033/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![48_epoch033_SR_bkg](../plots/calRatioTransformer_trial_48/epoch033/SR_pred_bkg.png) | ![48_epoch033_SR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch033/SR_pred_bkg_logY.png) |
> > | **BIB** | ![48_epoch033_SR_bib](../plots/calRatioTransformer_trial_48/epoch033/SR_pred_bib.png) | ![48_epoch033_SR_bib_logY](../plots/calRatioTransformer_trial_48/epoch033/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch033_CR_sig_logY](../plots/calRatioTransformer_trial_48/epoch033/CR_ttbar_pred_sig_logY.png) | ![48_epoch033_CR_sig_logX_logY](../plots/calRatioTransformer_trial_48/epoch033/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![48_epoch033_CR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch033/CR_ttbar_pred_bkg_logY.png) | ![48_epoch033_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_48/epoch033/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![48_epoch033_CR_bib_logY](../plots/calRatioTransformer_trial_48/epoch033/CR_ttbar_pred_bib_logY.png) | ![48_epoch033_CR_bib_logX_logY](../plots/calRatioTransformer_trial_48/epoch033/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 034
> > **ROC Curve**:
> > ![48_epoch034_ROC](../plots/calRatioTransformer_trial_48/epoch034/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch034_SR_sig](../plots/calRatioTransformer_trial_48/epoch034/SR_pred_sig.png) | ![48_epoch034_SR_sig_logY](../plots/calRatioTransformer_trial_48/epoch034/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![48_epoch034_SR_bkg](../plots/calRatioTransformer_trial_48/epoch034/SR_pred_bkg.png) | ![48_epoch034_SR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch034/SR_pred_bkg_logY.png) |
> > | **BIB** | ![48_epoch034_SR_bib](../plots/calRatioTransformer_trial_48/epoch034/SR_pred_bib.png) | ![48_epoch034_SR_bib_logY](../plots/calRatioTransformer_trial_48/epoch034/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch034_CR_sig_logY](../plots/calRatioTransformer_trial_48/epoch034/CR_ttbar_pred_sig_logY.png) | ![48_epoch034_CR_sig_logX_logY](../plots/calRatioTransformer_trial_48/epoch034/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![48_epoch034_CR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch034/CR_ttbar_pred_bkg_logY.png) | ![48_epoch034_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_48/epoch034/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![48_epoch034_CR_bib_logY](../plots/calRatioTransformer_trial_48/epoch034/CR_ttbar_pred_bib_logY.png) | ![48_epoch034_CR_bib_logX_logY](../plots/calRatioTransformer_trial_48/epoch034/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 035
> > **ROC Curve**:
> > ![48_epoch035_ROC](../plots/calRatioTransformer_trial_48/epoch035/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch035_SR_sig](../plots/calRatioTransformer_trial_48/epoch035/SR_pred_sig.png) | ![48_epoch035_SR_sig_logY](../plots/calRatioTransformer_trial_48/epoch035/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![48_epoch035_SR_bkg](../plots/calRatioTransformer_trial_48/epoch035/SR_pred_bkg.png) | ![48_epoch035_SR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch035/SR_pred_bkg_logY.png) |
> > | **BIB** | ![48_epoch035_SR_bib](../plots/calRatioTransformer_trial_48/epoch035/SR_pred_bib.png) | ![48_epoch035_SR_bib_logY](../plots/calRatioTransformer_trial_48/epoch035/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch035_CR_sig_logY](../plots/calRatioTransformer_trial_48/epoch035/CR_ttbar_pred_sig_logY.png) | ![48_epoch035_CR_sig_logX_logY](../plots/calRatioTransformer_trial_48/epoch035/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![48_epoch035_CR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch035/CR_ttbar_pred_bkg_logY.png) | ![48_epoch035_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_48/epoch035/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![48_epoch035_CR_bib_logY](../plots/calRatioTransformer_trial_48/epoch035/CR_ttbar_pred_bib_logY.png) | ![48_epoch035_CR_bib_logX_logY](../plots/calRatioTransformer_trial_48/epoch035/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 036
> > **ROC Curve**:
> > ![48_epoch036_ROC](../plots/calRatioTransformer_trial_48/epoch036/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch036_SR_sig](../plots/calRatioTransformer_trial_48/epoch036/SR_pred_sig.png) | ![48_epoch036_SR_sig_logY](../plots/calRatioTransformer_trial_48/epoch036/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![48_epoch036_SR_bkg](../plots/calRatioTransformer_trial_48/epoch036/SR_pred_bkg.png) | ![48_epoch036_SR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch036/SR_pred_bkg_logY.png) |
> > | **BIB** | ![48_epoch036_SR_bib](../plots/calRatioTransformer_trial_48/epoch036/SR_pred_bib.png) | ![48_epoch036_SR_bib_logY](../plots/calRatioTransformer_trial_48/epoch036/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch036_CR_sig_logY](../plots/calRatioTransformer_trial_48/epoch036/CR_ttbar_pred_sig_logY.png) | ![48_epoch036_CR_sig_logX_logY](../plots/calRatioTransformer_trial_48/epoch036/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![48_epoch036_CR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch036/CR_ttbar_pred_bkg_logY.png) | ![48_epoch036_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_48/epoch036/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![48_epoch036_CR_bib_logY](../plots/calRatioTransformer_trial_48/epoch036/CR_ttbar_pred_bib_logY.png) | ![48_epoch036_CR_bib_logX_logY](../plots/calRatioTransformer_trial_48/epoch036/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 037
> > **ROC Curve**:
> > ![48_epoch037_ROC](../plots/calRatioTransformer_trial_48/epoch037/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch037_SR_sig](../plots/calRatioTransformer_trial_48/epoch037/SR_pred_sig.png) | ![48_epoch037_SR_sig_logY](../plots/calRatioTransformer_trial_48/epoch037/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![48_epoch037_SR_bkg](../plots/calRatioTransformer_trial_48/epoch037/SR_pred_bkg.png) | ![48_epoch037_SR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch037/SR_pred_bkg_logY.png) |
> > | **BIB** | ![48_epoch037_SR_bib](../plots/calRatioTransformer_trial_48/epoch037/SR_pred_bib.png) | ![48_epoch037_SR_bib_logY](../plots/calRatioTransformer_trial_48/epoch037/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch037_CR_sig_logY](../plots/calRatioTransformer_trial_48/epoch037/CR_ttbar_pred_sig_logY.png) | ![48_epoch037_CR_sig_logX_logY](../plots/calRatioTransformer_trial_48/epoch037/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![48_epoch037_CR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch037/CR_ttbar_pred_bkg_logY.png) | ![48_epoch037_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_48/epoch037/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![48_epoch037_CR_bib_logY](../plots/calRatioTransformer_trial_48/epoch037/CR_ttbar_pred_bib_logY.png) | ![48_epoch037_CR_bib_logX_logY](../plots/calRatioTransformer_trial_48/epoch037/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 038
> > **ROC Curve**:
> > ![48_epoch038_ROC](../plots/calRatioTransformer_trial_48/epoch038/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch038_SR_sig](../plots/calRatioTransformer_trial_48/epoch038/SR_pred_sig.png) | ![48_epoch038_SR_sig_logY](../plots/calRatioTransformer_trial_48/epoch038/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![48_epoch038_SR_bkg](../plots/calRatioTransformer_trial_48/epoch038/SR_pred_bkg.png) | ![48_epoch038_SR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch038/SR_pred_bkg_logY.png) |
> > | **BIB** | ![48_epoch038_SR_bib](../plots/calRatioTransformer_trial_48/epoch038/SR_pred_bib.png) | ![48_epoch038_SR_bib_logY](../plots/calRatioTransformer_trial_48/epoch038/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch038_CR_sig_logY](../plots/calRatioTransformer_trial_48/epoch038/CR_ttbar_pred_sig_logY.png) | ![48_epoch038_CR_sig_logX_logY](../plots/calRatioTransformer_trial_48/epoch038/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![48_epoch038_CR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch038/CR_ttbar_pred_bkg_logY.png) | ![48_epoch038_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_48/epoch038/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![48_epoch038_CR_bib_logY](../plots/calRatioTransformer_trial_48/epoch038/CR_ttbar_pred_bib_logY.png) | ![48_epoch038_CR_bib_logX_logY](../plots/calRatioTransformer_trial_48/epoch038/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 039
> > **ROC Curve**:
> > ![48_epoch039_ROC](../plots/calRatioTransformer_trial_48/epoch039/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch039_SR_sig](../plots/calRatioTransformer_trial_48/epoch039/SR_pred_sig.png) | ![48_epoch039_SR_sig_logY](../plots/calRatioTransformer_trial_48/epoch039/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![48_epoch039_SR_bkg](../plots/calRatioTransformer_trial_48/epoch039/SR_pred_bkg.png) | ![48_epoch039_SR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch039/SR_pred_bkg_logY.png) |
> > | **BIB** | ![48_epoch039_SR_bib](../plots/calRatioTransformer_trial_48/epoch039/SR_pred_bib.png) | ![48_epoch039_SR_bib_logY](../plots/calRatioTransformer_trial_48/epoch039/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![48_epoch039_CR_sig_logY](../plots/calRatioTransformer_trial_48/epoch039/CR_ttbar_pred_sig_logY.png) | ![48_epoch039_CR_sig_logX_logY](../plots/calRatioTransformer_trial_48/epoch039/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![48_epoch039_CR_bkg_logY](../plots/calRatioTransformer_trial_48/epoch039/CR_ttbar_pred_bkg_logY.png) | ![48_epoch039_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_48/epoch039/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![48_epoch039_CR_bib_logY](../plots/calRatioTransformer_trial_48/epoch039/CR_ttbar_pred_bib_logY.png) | ![48_epoch039_CR_bib_logX_logY](../plots/calRatioTransformer_trial_48/epoch039/CR_ttbar_pred_bib_logX_logY.png) |
>


> [!abstract]- Trial 83 (max_epochs=40, SR Loss=0.53423, CR Loss=0.54827)
> **Dedicated Note**: [Open Trial 83 Full Note](Optimized%20Models/Trial%2083.md) | **Regime**: Transition to central knee
>
> > [!note]- Epoch 030
> > **ROC Curve**:
> > ![83_epoch030_ROC](../plots/calRatioTransformer_trial_83/epoch030/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch030_SR_sig](../plots/calRatioTransformer_trial_83/epoch030/SR_pred_sig.png) | ![83_epoch030_SR_sig_logY](../plots/calRatioTransformer_trial_83/epoch030/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![83_epoch030_SR_bkg](../plots/calRatioTransformer_trial_83/epoch030/SR_pred_bkg.png) | ![83_epoch030_SR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch030/SR_pred_bkg_logY.png) |
> > | **BIB** | ![83_epoch030_SR_bib](../plots/calRatioTransformer_trial_83/epoch030/SR_pred_bib.png) | ![83_epoch030_SR_bib_logY](../plots/calRatioTransformer_trial_83/epoch030/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch030_CR_sig_logY](../plots/calRatioTransformer_trial_83/epoch030/CR_ttbar_pred_sig_logY.png) | ![83_epoch030_CR_sig_logX_logY](../plots/calRatioTransformer_trial_83/epoch030/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![83_epoch030_CR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch030/CR_ttbar_pred_bkg_logY.png) | ![83_epoch030_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_83/epoch030/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![83_epoch030_CR_bib_logY](../plots/calRatioTransformer_trial_83/epoch030/CR_ttbar_pred_bib_logY.png) | ![83_epoch030_CR_bib_logX_logY](../plots/calRatioTransformer_trial_83/epoch030/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 031
> > **ROC Curve**:
> > ![83_epoch031_ROC](../plots/calRatioTransformer_trial_83/epoch031/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch031_SR_sig](../plots/calRatioTransformer_trial_83/epoch031/SR_pred_sig.png) | ![83_epoch031_SR_sig_logY](../plots/calRatioTransformer_trial_83/epoch031/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![83_epoch031_SR_bkg](../plots/calRatioTransformer_trial_83/epoch031/SR_pred_bkg.png) | ![83_epoch031_SR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch031/SR_pred_bkg_logY.png) |
> > | **BIB** | ![83_epoch031_SR_bib](../plots/calRatioTransformer_trial_83/epoch031/SR_pred_bib.png) | ![83_epoch031_SR_bib_logY](../plots/calRatioTransformer_trial_83/epoch031/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch031_CR_sig_logY](../plots/calRatioTransformer_trial_83/epoch031/CR_ttbar_pred_sig_logY.png) | ![83_epoch031_CR_sig_logX_logY](../plots/calRatioTransformer_trial_83/epoch031/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![83_epoch031_CR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch031/CR_ttbar_pred_bkg_logY.png) | ![83_epoch031_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_83/epoch031/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![83_epoch031_CR_bib_logY](../plots/calRatioTransformer_trial_83/epoch031/CR_ttbar_pred_bib_logY.png) | ![83_epoch031_CR_bib_logX_logY](../plots/calRatioTransformer_trial_83/epoch031/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 032
> > **ROC Curve**:
> > ![83_epoch032_ROC](../plots/calRatioTransformer_trial_83/epoch032/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch032_SR_sig](../plots/calRatioTransformer_trial_83/epoch032/SR_pred_sig.png) | ![83_epoch032_SR_sig_logY](../plots/calRatioTransformer_trial_83/epoch032/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![83_epoch032_SR_bkg](../plots/calRatioTransformer_trial_83/epoch032/SR_pred_bkg.png) | ![83_epoch032_SR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch032/SR_pred_bkg_logY.png) |
> > | **BIB** | ![83_epoch032_SR_bib](../plots/calRatioTransformer_trial_83/epoch032/SR_pred_bib.png) | ![83_epoch032_SR_bib_logY](../plots/calRatioTransformer_trial_83/epoch032/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch032_CR_sig_logY](../plots/calRatioTransformer_trial_83/epoch032/CR_ttbar_pred_sig_logY.png) | ![83_epoch032_CR_sig_logX_logY](../plots/calRatioTransformer_trial_83/epoch032/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![83_epoch032_CR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch032/CR_ttbar_pred_bkg_logY.png) | ![83_epoch032_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_83/epoch032/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![83_epoch032_CR_bib_logY](../plots/calRatioTransformer_trial_83/epoch032/CR_ttbar_pred_bib_logY.png) | ![83_epoch032_CR_bib_logX_logY](../plots/calRatioTransformer_trial_83/epoch032/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 033
> > **ROC Curve**:
> > ![83_epoch033_ROC](../plots/calRatioTransformer_trial_83/epoch033/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch033_SR_sig](../plots/calRatioTransformer_trial_83/epoch033/SR_pred_sig.png) | ![83_epoch033_SR_sig_logY](../plots/calRatioTransformer_trial_83/epoch033/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![83_epoch033_SR_bkg](../plots/calRatioTransformer_trial_83/epoch033/SR_pred_bkg.png) | ![83_epoch033_SR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch033/SR_pred_bkg_logY.png) |
> > | **BIB** | ![83_epoch033_SR_bib](../plots/calRatioTransformer_trial_83/epoch033/SR_pred_bib.png) | ![83_epoch033_SR_bib_logY](../plots/calRatioTransformer_trial_83/epoch033/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch033_CR_sig_logY](../plots/calRatioTransformer_trial_83/epoch033/CR_ttbar_pred_sig_logY.png) | ![83_epoch033_CR_sig_logX_logY](../plots/calRatioTransformer_trial_83/epoch033/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![83_epoch033_CR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch033/CR_ttbar_pred_bkg_logY.png) | ![83_epoch033_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_83/epoch033/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![83_epoch033_CR_bib_logY](../plots/calRatioTransformer_trial_83/epoch033/CR_ttbar_pred_bib_logY.png) | ![83_epoch033_CR_bib_logX_logY](../plots/calRatioTransformer_trial_83/epoch033/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 034
> > **ROC Curve**:
> > ![83_epoch034_ROC](../plots/calRatioTransformer_trial_83/epoch034/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch034_SR_sig](../plots/calRatioTransformer_trial_83/epoch034/SR_pred_sig.png) | ![83_epoch034_SR_sig_logY](../plots/calRatioTransformer_trial_83/epoch034/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![83_epoch034_SR_bkg](../plots/calRatioTransformer_trial_83/epoch034/SR_pred_bkg.png) | ![83_epoch034_SR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch034/SR_pred_bkg_logY.png) |
> > | **BIB** | ![83_epoch034_SR_bib](../plots/calRatioTransformer_trial_83/epoch034/SR_pred_bib.png) | ![83_epoch034_SR_bib_logY](../plots/calRatioTransformer_trial_83/epoch034/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch034_CR_sig_logY](../plots/calRatioTransformer_trial_83/epoch034/CR_ttbar_pred_sig_logY.png) | ![83_epoch034_CR_sig_logX_logY](../plots/calRatioTransformer_trial_83/epoch034/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![83_epoch034_CR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch034/CR_ttbar_pred_bkg_logY.png) | ![83_epoch034_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_83/epoch034/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![83_epoch034_CR_bib_logY](../plots/calRatioTransformer_trial_83/epoch034/CR_ttbar_pred_bib_logY.png) | ![83_epoch034_CR_bib_logX_logY](../plots/calRatioTransformer_trial_83/epoch034/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 035
> > **ROC Curve**:
> > ![83_epoch035_ROC](../plots/calRatioTransformer_trial_83/epoch035/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch035_SR_sig](../plots/calRatioTransformer_trial_83/epoch035/SR_pred_sig.png) | ![83_epoch035_SR_sig_logY](../plots/calRatioTransformer_trial_83/epoch035/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![83_epoch035_SR_bkg](../plots/calRatioTransformer_trial_83/epoch035/SR_pred_bkg.png) | ![83_epoch035_SR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch035/SR_pred_bkg_logY.png) |
> > | **BIB** | ![83_epoch035_SR_bib](../plots/calRatioTransformer_trial_83/epoch035/SR_pred_bib.png) | ![83_epoch035_SR_bib_logY](../plots/calRatioTransformer_trial_83/epoch035/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch035_CR_sig_logY](../plots/calRatioTransformer_trial_83/epoch035/CR_ttbar_pred_sig_logY.png) | ![83_epoch035_CR_sig_logX_logY](../plots/calRatioTransformer_trial_83/epoch035/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![83_epoch035_CR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch035/CR_ttbar_pred_bkg_logY.png) | ![83_epoch035_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_83/epoch035/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![83_epoch035_CR_bib_logY](../plots/calRatioTransformer_trial_83/epoch035/CR_ttbar_pred_bib_logY.png) | ![83_epoch035_CR_bib_logX_logY](../plots/calRatioTransformer_trial_83/epoch035/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 036
> > **ROC Curve**:
> > ![83_epoch036_ROC](../plots/calRatioTransformer_trial_83/epoch036/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch036_SR_sig](../plots/calRatioTransformer_trial_83/epoch036/SR_pred_sig.png) | ![83_epoch036_SR_sig_logY](../plots/calRatioTransformer_trial_83/epoch036/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![83_epoch036_SR_bkg](../plots/calRatioTransformer_trial_83/epoch036/SR_pred_bkg.png) | ![83_epoch036_SR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch036/SR_pred_bkg_logY.png) |
> > | **BIB** | ![83_epoch036_SR_bib](../plots/calRatioTransformer_trial_83/epoch036/SR_pred_bib.png) | ![83_epoch036_SR_bib_logY](../plots/calRatioTransformer_trial_83/epoch036/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch036_CR_sig_logY](../plots/calRatioTransformer_trial_83/epoch036/CR_ttbar_pred_sig_logY.png) | ![83_epoch036_CR_sig_logX_logY](../plots/calRatioTransformer_trial_83/epoch036/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![83_epoch036_CR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch036/CR_ttbar_pred_bkg_logY.png) | ![83_epoch036_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_83/epoch036/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![83_epoch036_CR_bib_logY](../plots/calRatioTransformer_trial_83/epoch036/CR_ttbar_pred_bib_logY.png) | ![83_epoch036_CR_bib_logX_logY](../plots/calRatioTransformer_trial_83/epoch036/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 037
> > **ROC Curve**:
> > ![83_epoch037_ROC](../plots/calRatioTransformer_trial_83/epoch037/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch037_SR_sig](../plots/calRatioTransformer_trial_83/epoch037/SR_pred_sig.png) | ![83_epoch037_SR_sig_logY](../plots/calRatioTransformer_trial_83/epoch037/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![83_epoch037_SR_bkg](../plots/calRatioTransformer_trial_83/epoch037/SR_pred_bkg.png) | ![83_epoch037_SR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch037/SR_pred_bkg_logY.png) |
> > | **BIB** | ![83_epoch037_SR_bib](../plots/calRatioTransformer_trial_83/epoch037/SR_pred_bib.png) | ![83_epoch037_SR_bib_logY](../plots/calRatioTransformer_trial_83/epoch037/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch037_CR_sig_logY](../plots/calRatioTransformer_trial_83/epoch037/CR_ttbar_pred_sig_logY.png) | ![83_epoch037_CR_sig_logX_logY](../plots/calRatioTransformer_trial_83/epoch037/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![83_epoch037_CR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch037/CR_ttbar_pred_bkg_logY.png) | ![83_epoch037_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_83/epoch037/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![83_epoch037_CR_bib_logY](../plots/calRatioTransformer_trial_83/epoch037/CR_ttbar_pred_bib_logY.png) | ![83_epoch037_CR_bib_logX_logY](../plots/calRatioTransformer_trial_83/epoch037/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 038
> > **ROC Curve**:
> > ![83_epoch038_ROC](../plots/calRatioTransformer_trial_83/epoch038/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch038_SR_sig](../plots/calRatioTransformer_trial_83/epoch038/SR_pred_sig.png) | ![83_epoch038_SR_sig_logY](../plots/calRatioTransformer_trial_83/epoch038/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![83_epoch038_SR_bkg](../plots/calRatioTransformer_trial_83/epoch038/SR_pred_bkg.png) | ![83_epoch038_SR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch038/SR_pred_bkg_logY.png) |
> > | **BIB** | ![83_epoch038_SR_bib](../plots/calRatioTransformer_trial_83/epoch038/SR_pred_bib.png) | ![83_epoch038_SR_bib_logY](../plots/calRatioTransformer_trial_83/epoch038/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch038_CR_sig_logY](../plots/calRatioTransformer_trial_83/epoch038/CR_ttbar_pred_sig_logY.png) | ![83_epoch038_CR_sig_logX_logY](../plots/calRatioTransformer_trial_83/epoch038/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![83_epoch038_CR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch038/CR_ttbar_pred_bkg_logY.png) | ![83_epoch038_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_83/epoch038/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![83_epoch038_CR_bib_logY](../plots/calRatioTransformer_trial_83/epoch038/CR_ttbar_pred_bib_logY.png) | ![83_epoch038_CR_bib_logX_logY](../plots/calRatioTransformer_trial_83/epoch038/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 039
> > **ROC Curve**:
> > ![83_epoch039_ROC](../plots/calRatioTransformer_trial_83/epoch039/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch039_SR_sig](../plots/calRatioTransformer_trial_83/epoch039/SR_pred_sig.png) | ![83_epoch039_SR_sig_logY](../plots/calRatioTransformer_trial_83/epoch039/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![83_epoch039_SR_bkg](../plots/calRatioTransformer_trial_83/epoch039/SR_pred_bkg.png) | ![83_epoch039_SR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch039/SR_pred_bkg_logY.png) |
> > | **BIB** | ![83_epoch039_SR_bib](../plots/calRatioTransformer_trial_83/epoch039/SR_pred_bib.png) | ![83_epoch039_SR_bib_logY](../plots/calRatioTransformer_trial_83/epoch039/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![83_epoch039_CR_sig_logY](../plots/calRatioTransformer_trial_83/epoch039/CR_ttbar_pred_sig_logY.png) | ![83_epoch039_CR_sig_logX_logY](../plots/calRatioTransformer_trial_83/epoch039/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![83_epoch039_CR_bkg_logY](../plots/calRatioTransformer_trial_83/epoch039/CR_ttbar_pred_bkg_logY.png) | ![83_epoch039_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_83/epoch039/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![83_epoch039_CR_bib_logY](../plots/calRatioTransformer_trial_83/epoch039/CR_ttbar_pred_bib_logY.png) | ![83_epoch039_CR_bib_logX_logY](../plots/calRatioTransformer_trial_83/epoch039/CR_ttbar_pred_bib_logX_logY.png) |
>


> [!abstract]- Trial 125 (max_epochs=30, SR Loss=0.51662, CR Loss=0.55014)
> **Dedicated Note**: [Open Trial 125 Full Note](Optimized%20Models/Trial%20125.md) | **Regime**: Extreme SR focus
>
> > [!note]- Epoch 020
> > **ROC Curve**:
> > ![125_epoch020_ROC](../plots/calRatioTransformer_trial_125/epoch020/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch020_SR_sig](../plots/calRatioTransformer_trial_125/epoch020/SR_pred_sig.png) | ![125_epoch020_SR_sig_logY](../plots/calRatioTransformer_trial_125/epoch020/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![125_epoch020_SR_bkg](../plots/calRatioTransformer_trial_125/epoch020/SR_pred_bkg.png) | ![125_epoch020_SR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch020/SR_pred_bkg_logY.png) |
> > | **BIB** | ![125_epoch020_SR_bib](../plots/calRatioTransformer_trial_125/epoch020/SR_pred_bib.png) | ![125_epoch020_SR_bib_logY](../plots/calRatioTransformer_trial_125/epoch020/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch020_CR_sig_logY](../plots/calRatioTransformer_trial_125/epoch020/CR_ttbar_pred_sig_logY.png) | ![125_epoch020_CR_sig_logX_logY](../plots/calRatioTransformer_trial_125/epoch020/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![125_epoch020_CR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch020/CR_ttbar_pred_bkg_logY.png) | ![125_epoch020_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_125/epoch020/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![125_epoch020_CR_bib_logY](../plots/calRatioTransformer_trial_125/epoch020/CR_ttbar_pred_bib_logY.png) | ![125_epoch020_CR_bib_logX_logY](../plots/calRatioTransformer_trial_125/epoch020/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 021
> > **ROC Curve**:
> > ![125_epoch021_ROC](../plots/calRatioTransformer_trial_125/epoch021/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch021_SR_sig](../plots/calRatioTransformer_trial_125/epoch021/SR_pred_sig.png) | ![125_epoch021_SR_sig_logY](../plots/calRatioTransformer_trial_125/epoch021/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![125_epoch021_SR_bkg](../plots/calRatioTransformer_trial_125/epoch021/SR_pred_bkg.png) | ![125_epoch021_SR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch021/SR_pred_bkg_logY.png) |
> > | **BIB** | ![125_epoch021_SR_bib](../plots/calRatioTransformer_trial_125/epoch021/SR_pred_bib.png) | ![125_epoch021_SR_bib_logY](../plots/calRatioTransformer_trial_125/epoch021/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch021_CR_sig_logY](../plots/calRatioTransformer_trial_125/epoch021/CR_ttbar_pred_sig_logY.png) | ![125_epoch021_CR_sig_logX_logY](../plots/calRatioTransformer_trial_125/epoch021/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![125_epoch021_CR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch021/CR_ttbar_pred_bkg_logY.png) | ![125_epoch021_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_125/epoch021/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![125_epoch021_CR_bib_logY](../plots/calRatioTransformer_trial_125/epoch021/CR_ttbar_pred_bib_logY.png) | ![125_epoch021_CR_bib_logX_logY](../plots/calRatioTransformer_trial_125/epoch021/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 022
> > **ROC Curve**:
> > ![125_epoch022_ROC](../plots/calRatioTransformer_trial_125/epoch022/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch022_SR_sig](../plots/calRatioTransformer_trial_125/epoch022/SR_pred_sig.png) | ![125_epoch022_SR_sig_logY](../plots/calRatioTransformer_trial_125/epoch022/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![125_epoch022_SR_bkg](../plots/calRatioTransformer_trial_125/epoch022/SR_pred_bkg.png) | ![125_epoch022_SR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch022/SR_pred_bkg_logY.png) |
> > | **BIB** | ![125_epoch022_SR_bib](../plots/calRatioTransformer_trial_125/epoch022/SR_pred_bib.png) | ![125_epoch022_SR_bib_logY](../plots/calRatioTransformer_trial_125/epoch022/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch022_CR_sig_logY](../plots/calRatioTransformer_trial_125/epoch022/CR_ttbar_pred_sig_logY.png) | ![125_epoch022_CR_sig_logX_logY](../plots/calRatioTransformer_trial_125/epoch022/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![125_epoch022_CR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch022/CR_ttbar_pred_bkg_logY.png) | ![125_epoch022_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_125/epoch022/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![125_epoch022_CR_bib_logY](../plots/calRatioTransformer_trial_125/epoch022/CR_ttbar_pred_bib_logY.png) | ![125_epoch022_CR_bib_logX_logY](../plots/calRatioTransformer_trial_125/epoch022/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 023
> > **ROC Curve**:
> > ![125_epoch023_ROC](../plots/calRatioTransformer_trial_125/epoch023/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch023_SR_sig](../plots/calRatioTransformer_trial_125/epoch023/SR_pred_sig.png) | ![125_epoch023_SR_sig_logY](../plots/calRatioTransformer_trial_125/epoch023/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![125_epoch023_SR_bkg](../plots/calRatioTransformer_trial_125/epoch023/SR_pred_bkg.png) | ![125_epoch023_SR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch023/SR_pred_bkg_logY.png) |
> > | **BIB** | ![125_epoch023_SR_bib](../plots/calRatioTransformer_trial_125/epoch023/SR_pred_bib.png) | ![125_epoch023_SR_bib_logY](../plots/calRatioTransformer_trial_125/epoch023/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch023_CR_sig_logY](../plots/calRatioTransformer_trial_125/epoch023/CR_ttbar_pred_sig_logY.png) | ![125_epoch023_CR_sig_logX_logY](../plots/calRatioTransformer_trial_125/epoch023/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![125_epoch023_CR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch023/CR_ttbar_pred_bkg_logY.png) | ![125_epoch023_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_125/epoch023/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![125_epoch023_CR_bib_logY](../plots/calRatioTransformer_trial_125/epoch023/CR_ttbar_pred_bib_logY.png) | ![125_epoch023_CR_bib_logX_logY](../plots/calRatioTransformer_trial_125/epoch023/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 024
> > **ROC Curve**:
> > ![125_epoch024_ROC](../plots/calRatioTransformer_trial_125/epoch024/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch024_SR_sig](../plots/calRatioTransformer_trial_125/epoch024/SR_pred_sig.png) | ![125_epoch024_SR_sig_logY](../plots/calRatioTransformer_trial_125/epoch024/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![125_epoch024_SR_bkg](../plots/calRatioTransformer_trial_125/epoch024/SR_pred_bkg.png) | ![125_epoch024_SR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch024/SR_pred_bkg_logY.png) |
> > | **BIB** | ![125_epoch024_SR_bib](../plots/calRatioTransformer_trial_125/epoch024/SR_pred_bib.png) | ![125_epoch024_SR_bib_logY](../plots/calRatioTransformer_trial_125/epoch024/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch024_CR_sig_logY](../plots/calRatioTransformer_trial_125/epoch024/CR_ttbar_pred_sig_logY.png) | ![125_epoch024_CR_sig_logX_logY](../plots/calRatioTransformer_trial_125/epoch024/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![125_epoch024_CR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch024/CR_ttbar_pred_bkg_logY.png) | ![125_epoch024_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_125/epoch024/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![125_epoch024_CR_bib_logY](../plots/calRatioTransformer_trial_125/epoch024/CR_ttbar_pred_bib_logY.png) | ![125_epoch024_CR_bib_logX_logY](../plots/calRatioTransformer_trial_125/epoch024/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 025
> > **ROC Curve**:
> > ![125_epoch025_ROC](../plots/calRatioTransformer_trial_125/epoch025/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch025_SR_sig](../plots/calRatioTransformer_trial_125/epoch025/SR_pred_sig.png) | ![125_epoch025_SR_sig_logY](../plots/calRatioTransformer_trial_125/epoch025/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![125_epoch025_SR_bkg](../plots/calRatioTransformer_trial_125/epoch025/SR_pred_bkg.png) | ![125_epoch025_SR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch025/SR_pred_bkg_logY.png) |
> > | **BIB** | ![125_epoch025_SR_bib](../plots/calRatioTransformer_trial_125/epoch025/SR_pred_bib.png) | ![125_epoch025_SR_bib_logY](../plots/calRatioTransformer_trial_125/epoch025/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch025_CR_sig_logY](../plots/calRatioTransformer_trial_125/epoch025/CR_ttbar_pred_sig_logY.png) | ![125_epoch025_CR_sig_logX_logY](../plots/calRatioTransformer_trial_125/epoch025/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![125_epoch025_CR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch025/CR_ttbar_pred_bkg_logY.png) | ![125_epoch025_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_125/epoch025/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![125_epoch025_CR_bib_logY](../plots/calRatioTransformer_trial_125/epoch025/CR_ttbar_pred_bib_logY.png) | ![125_epoch025_CR_bib_logX_logY](../plots/calRatioTransformer_trial_125/epoch025/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 026
> > **ROC Curve**:
> > ![125_epoch026_ROC](../plots/calRatioTransformer_trial_125/epoch026/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch026_SR_sig](../plots/calRatioTransformer_trial_125/epoch026/SR_pred_sig.png) | ![125_epoch026_SR_sig_logY](../plots/calRatioTransformer_trial_125/epoch026/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![125_epoch026_SR_bkg](../plots/calRatioTransformer_trial_125/epoch026/SR_pred_bkg.png) | ![125_epoch026_SR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch026/SR_pred_bkg_logY.png) |
> > | **BIB** | ![125_epoch026_SR_bib](../plots/calRatioTransformer_trial_125/epoch026/SR_pred_bib.png) | ![125_epoch026_SR_bib_logY](../plots/calRatioTransformer_trial_125/epoch026/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch026_CR_sig_logY](../plots/calRatioTransformer_trial_125/epoch026/CR_ttbar_pred_sig_logY.png) | ![125_epoch026_CR_sig_logX_logY](../plots/calRatioTransformer_trial_125/epoch026/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![125_epoch026_CR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch026/CR_ttbar_pred_bkg_logY.png) | ![125_epoch026_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_125/epoch026/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![125_epoch026_CR_bib_logY](../plots/calRatioTransformer_trial_125/epoch026/CR_ttbar_pred_bib_logY.png) | ![125_epoch026_CR_bib_logX_logY](../plots/calRatioTransformer_trial_125/epoch026/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 027
> > **ROC Curve**:
> > ![125_epoch027_ROC](../plots/calRatioTransformer_trial_125/epoch027/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch027_SR_sig](../plots/calRatioTransformer_trial_125/epoch027/SR_pred_sig.png) | ![125_epoch027_SR_sig_logY](../plots/calRatioTransformer_trial_125/epoch027/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![125_epoch027_SR_bkg](../plots/calRatioTransformer_trial_125/epoch027/SR_pred_bkg.png) | ![125_epoch027_SR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch027/SR_pred_bkg_logY.png) |
> > | **BIB** | ![125_epoch027_SR_bib](../plots/calRatioTransformer_trial_125/epoch027/SR_pred_bib.png) | ![125_epoch027_SR_bib_logY](../plots/calRatioTransformer_trial_125/epoch027/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch027_CR_sig_logY](../plots/calRatioTransformer_trial_125/epoch027/CR_ttbar_pred_sig_logY.png) | ![125_epoch027_CR_sig_logX_logY](../plots/calRatioTransformer_trial_125/epoch027/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![125_epoch027_CR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch027/CR_ttbar_pred_bkg_logY.png) | ![125_epoch027_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_125/epoch027/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![125_epoch027_CR_bib_logY](../plots/calRatioTransformer_trial_125/epoch027/CR_ttbar_pred_bib_logY.png) | ![125_epoch027_CR_bib_logX_logY](../plots/calRatioTransformer_trial_125/epoch027/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 028
> > **ROC Curve**:
> > ![125_epoch028_ROC](../plots/calRatioTransformer_trial_125/epoch028/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch028_SR_sig](../plots/calRatioTransformer_trial_125/epoch028/SR_pred_sig.png) | ![125_epoch028_SR_sig_logY](../plots/calRatioTransformer_trial_125/epoch028/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![125_epoch028_SR_bkg](../plots/calRatioTransformer_trial_125/epoch028/SR_pred_bkg.png) | ![125_epoch028_SR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch028/SR_pred_bkg_logY.png) |
> > | **BIB** | ![125_epoch028_SR_bib](../plots/calRatioTransformer_trial_125/epoch028/SR_pred_bib.png) | ![125_epoch028_SR_bib_logY](../plots/calRatioTransformer_trial_125/epoch028/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch028_CR_sig_logY](../plots/calRatioTransformer_trial_125/epoch028/CR_ttbar_pred_sig_logY.png) | ![125_epoch028_CR_sig_logX_logY](../plots/calRatioTransformer_trial_125/epoch028/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![125_epoch028_CR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch028/CR_ttbar_pred_bkg_logY.png) | ![125_epoch028_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_125/epoch028/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![125_epoch028_CR_bib_logY](../plots/calRatioTransformer_trial_125/epoch028/CR_ttbar_pred_bib_logY.png) | ![125_epoch028_CR_bib_logX_logY](../plots/calRatioTransformer_trial_125/epoch028/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 029
> > **ROC Curve**:
> > ![125_epoch029_ROC](../plots/calRatioTransformer_trial_125/epoch029/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch029_SR_sig](../plots/calRatioTransformer_trial_125/epoch029/SR_pred_sig.png) | ![125_epoch029_SR_sig_logY](../plots/calRatioTransformer_trial_125/epoch029/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![125_epoch029_SR_bkg](../plots/calRatioTransformer_trial_125/epoch029/SR_pred_bkg.png) | ![125_epoch029_SR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch029/SR_pred_bkg_logY.png) |
> > | **BIB** | ![125_epoch029_SR_bib](../plots/calRatioTransformer_trial_125/epoch029/SR_pred_bib.png) | ![125_epoch029_SR_bib_logY](../plots/calRatioTransformer_trial_125/epoch029/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![125_epoch029_CR_sig_logY](../plots/calRatioTransformer_trial_125/epoch029/CR_ttbar_pred_sig_logY.png) | ![125_epoch029_CR_sig_logX_logY](../plots/calRatioTransformer_trial_125/epoch029/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![125_epoch029_CR_bkg_logY](../plots/calRatioTransformer_trial_125/epoch029/CR_ttbar_pred_bkg_logY.png) | ![125_epoch029_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_125/epoch029/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![125_epoch029_CR_bib_logY](../plots/calRatioTransformer_trial_125/epoch029/CR_ttbar_pred_bib_logY.png) | ![125_epoch029_CR_bib_logX_logY](../plots/calRatioTransformer_trial_125/epoch029/CR_ttbar_pred_bib_logX_logY.png) |
>


> [!abstract]- Trial 167 (max_epochs=15, SR Loss=0.59464, CR Loss=0.2323)
> **Dedicated Note**: [Open Trial 167 Full Note](Optimized%20Models/Trial%20167.md) | **Regime**: Low CR loss
>
> > [!note]- Epoch 005
> > **ROC Curve**:
> > ![167_epoch005_ROC](../plots/calRatioTransformer_trial_167/epoch005/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch005_SR_sig](../plots/calRatioTransformer_trial_167/epoch005/SR_pred_sig.png) | ![167_epoch005_SR_sig_logY](../plots/calRatioTransformer_trial_167/epoch005/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![167_epoch005_SR_bkg](../plots/calRatioTransformer_trial_167/epoch005/SR_pred_bkg.png) | ![167_epoch005_SR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch005/SR_pred_bkg_logY.png) |
> > | **BIB** | ![167_epoch005_SR_bib](../plots/calRatioTransformer_trial_167/epoch005/SR_pred_bib.png) | ![167_epoch005_SR_bib_logY](../plots/calRatioTransformer_trial_167/epoch005/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch005_CR_sig_logY](../plots/calRatioTransformer_trial_167/epoch005/CR_ttbar_pred_sig_logY.png) | ![167_epoch005_CR_sig_logX_logY](../plots/calRatioTransformer_trial_167/epoch005/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![167_epoch005_CR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch005/CR_ttbar_pred_bkg_logY.png) | ![167_epoch005_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_167/epoch005/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![167_epoch005_CR_bib_logY](../plots/calRatioTransformer_trial_167/epoch005/CR_ttbar_pred_bib_logY.png) | ![167_epoch005_CR_bib_logX_logY](../plots/calRatioTransformer_trial_167/epoch005/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 006
> > **ROC Curve**:
> > ![167_epoch006_ROC](../plots/calRatioTransformer_trial_167/epoch006/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch006_SR_sig](../plots/calRatioTransformer_trial_167/epoch006/SR_pred_sig.png) | ![167_epoch006_SR_sig_logY](../plots/calRatioTransformer_trial_167/epoch006/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![167_epoch006_SR_bkg](../plots/calRatioTransformer_trial_167/epoch006/SR_pred_bkg.png) | ![167_epoch006_SR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch006/SR_pred_bkg_logY.png) |
> > | **BIB** | ![167_epoch006_SR_bib](../plots/calRatioTransformer_trial_167/epoch006/SR_pred_bib.png) | ![167_epoch006_SR_bib_logY](../plots/calRatioTransformer_trial_167/epoch006/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch006_CR_sig_logY](../plots/calRatioTransformer_trial_167/epoch006/CR_ttbar_pred_sig_logY.png) | ![167_epoch006_CR_sig_logX_logY](../plots/calRatioTransformer_trial_167/epoch006/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![167_epoch006_CR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch006/CR_ttbar_pred_bkg_logY.png) | ![167_epoch006_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_167/epoch006/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![167_epoch006_CR_bib_logY](../plots/calRatioTransformer_trial_167/epoch006/CR_ttbar_pred_bib_logY.png) | ![167_epoch006_CR_bib_logX_logY](../plots/calRatioTransformer_trial_167/epoch006/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 007
> > **ROC Curve**:
> > ![167_epoch007_ROC](../plots/calRatioTransformer_trial_167/epoch007/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch007_SR_sig](../plots/calRatioTransformer_trial_167/epoch007/SR_pred_sig.png) | ![167_epoch007_SR_sig_logY](../plots/calRatioTransformer_trial_167/epoch007/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![167_epoch007_SR_bkg](../plots/calRatioTransformer_trial_167/epoch007/SR_pred_bkg.png) | ![167_epoch007_SR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch007/SR_pred_bkg_logY.png) |
> > | **BIB** | ![167_epoch007_SR_bib](../plots/calRatioTransformer_trial_167/epoch007/SR_pred_bib.png) | ![167_epoch007_SR_bib_logY](../plots/calRatioTransformer_trial_167/epoch007/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch007_CR_sig_logY](../plots/calRatioTransformer_trial_167/epoch007/CR_ttbar_pred_sig_logY.png) | ![167_epoch007_CR_sig_logX_logY](../plots/calRatioTransformer_trial_167/epoch007/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![167_epoch007_CR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch007/CR_ttbar_pred_bkg_logY.png) | ![167_epoch007_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_167/epoch007/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![167_epoch007_CR_bib_logY](../plots/calRatioTransformer_trial_167/epoch007/CR_ttbar_pred_bib_logY.png) | ![167_epoch007_CR_bib_logX_logY](../plots/calRatioTransformer_trial_167/epoch007/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 008
> > **ROC Curve**:
> > ![167_epoch008_ROC](../plots/calRatioTransformer_trial_167/epoch008/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch008_SR_sig](../plots/calRatioTransformer_trial_167/epoch008/SR_pred_sig.png) | ![167_epoch008_SR_sig_logY](../plots/calRatioTransformer_trial_167/epoch008/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![167_epoch008_SR_bkg](../plots/calRatioTransformer_trial_167/epoch008/SR_pred_bkg.png) | ![167_epoch008_SR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch008/SR_pred_bkg_logY.png) |
> > | **BIB** | ![167_epoch008_SR_bib](../plots/calRatioTransformer_trial_167/epoch008/SR_pred_bib.png) | ![167_epoch008_SR_bib_logY](../plots/calRatioTransformer_trial_167/epoch008/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch008_CR_sig_logY](../plots/calRatioTransformer_trial_167/epoch008/CR_ttbar_pred_sig_logY.png) | ![167_epoch008_CR_sig_logX_logY](../plots/calRatioTransformer_trial_167/epoch008/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![167_epoch008_CR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch008/CR_ttbar_pred_bkg_logY.png) | ![167_epoch008_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_167/epoch008/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![167_epoch008_CR_bib_logY](../plots/calRatioTransformer_trial_167/epoch008/CR_ttbar_pred_bib_logY.png) | ![167_epoch008_CR_bib_logX_logY](../plots/calRatioTransformer_trial_167/epoch008/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 009
> > **ROC Curve**:
> > ![167_epoch009_ROC](../plots/calRatioTransformer_trial_167/epoch009/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch009_SR_sig](../plots/calRatioTransformer_trial_167/epoch009/SR_pred_sig.png) | ![167_epoch009_SR_sig_logY](../plots/calRatioTransformer_trial_167/epoch009/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![167_epoch009_SR_bkg](../plots/calRatioTransformer_trial_167/epoch009/SR_pred_bkg.png) | ![167_epoch009_SR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch009/SR_pred_bkg_logY.png) |
> > | **BIB** | ![167_epoch009_SR_bib](../plots/calRatioTransformer_trial_167/epoch009/SR_pred_bib.png) | ![167_epoch009_SR_bib_logY](../plots/calRatioTransformer_trial_167/epoch009/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch009_CR_sig_logY](../plots/calRatioTransformer_trial_167/epoch009/CR_ttbar_pred_sig_logY.png) | ![167_epoch009_CR_sig_logX_logY](../plots/calRatioTransformer_trial_167/epoch009/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![167_epoch009_CR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch009/CR_ttbar_pred_bkg_logY.png) | ![167_epoch009_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_167/epoch009/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![167_epoch009_CR_bib_logY](../plots/calRatioTransformer_trial_167/epoch009/CR_ttbar_pred_bib_logY.png) | ![167_epoch009_CR_bib_logX_logY](../plots/calRatioTransformer_trial_167/epoch009/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 010
> > **ROC Curve**:
> > ![167_epoch010_ROC](../plots/calRatioTransformer_trial_167/epoch010/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch010_SR_sig](../plots/calRatioTransformer_trial_167/epoch010/SR_pred_sig.png) | ![167_epoch010_SR_sig_logY](../plots/calRatioTransformer_trial_167/epoch010/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![167_epoch010_SR_bkg](../plots/calRatioTransformer_trial_167/epoch010/SR_pred_bkg.png) | ![167_epoch010_SR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch010/SR_pred_bkg_logY.png) |
> > | **BIB** | ![167_epoch010_SR_bib](../plots/calRatioTransformer_trial_167/epoch010/SR_pred_bib.png) | ![167_epoch010_SR_bib_logY](../plots/calRatioTransformer_trial_167/epoch010/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch010_CR_sig_logY](../plots/calRatioTransformer_trial_167/epoch010/CR_ttbar_pred_sig_logY.png) | ![167_epoch010_CR_sig_logX_logY](../plots/calRatioTransformer_trial_167/epoch010/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![167_epoch010_CR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch010/CR_ttbar_pred_bkg_logY.png) | ![167_epoch010_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_167/epoch010/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![167_epoch010_CR_bib_logY](../plots/calRatioTransformer_trial_167/epoch010/CR_ttbar_pred_bib_logY.png) | ![167_epoch010_CR_bib_logX_logY](../plots/calRatioTransformer_trial_167/epoch010/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 011
> > **ROC Curve**:
> > ![167_epoch011_ROC](../plots/calRatioTransformer_trial_167/epoch011/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch011_SR_sig](../plots/calRatioTransformer_trial_167/epoch011/SR_pred_sig.png) | ![167_epoch011_SR_sig_logY](../plots/calRatioTransformer_trial_167/epoch011/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![167_epoch011_SR_bkg](../plots/calRatioTransformer_trial_167/epoch011/SR_pred_bkg.png) | ![167_epoch011_SR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch011/SR_pred_bkg_logY.png) |
> > | **BIB** | ![167_epoch011_SR_bib](../plots/calRatioTransformer_trial_167/epoch011/SR_pred_bib.png) | ![167_epoch011_SR_bib_logY](../plots/calRatioTransformer_trial_167/epoch011/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch011_CR_sig_logY](../plots/calRatioTransformer_trial_167/epoch011/CR_ttbar_pred_sig_logY.png) | ![167_epoch011_CR_sig_logX_logY](../plots/calRatioTransformer_trial_167/epoch011/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![167_epoch011_CR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch011/CR_ttbar_pred_bkg_logY.png) | ![167_epoch011_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_167/epoch011/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![167_epoch011_CR_bib_logY](../plots/calRatioTransformer_trial_167/epoch011/CR_ttbar_pred_bib_logY.png) | ![167_epoch011_CR_bib_logX_logY](../plots/calRatioTransformer_trial_167/epoch011/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 012
> > **ROC Curve**:
> > ![167_epoch012_ROC](../plots/calRatioTransformer_trial_167/epoch012/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch012_SR_sig](../plots/calRatioTransformer_trial_167/epoch012/SR_pred_sig.png) | ![167_epoch012_SR_sig_logY](../plots/calRatioTransformer_trial_167/epoch012/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![167_epoch012_SR_bkg](../plots/calRatioTransformer_trial_167/epoch012/SR_pred_bkg.png) | ![167_epoch012_SR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch012/SR_pred_bkg_logY.png) |
> > | **BIB** | ![167_epoch012_SR_bib](../plots/calRatioTransformer_trial_167/epoch012/SR_pred_bib.png) | ![167_epoch012_SR_bib_logY](../plots/calRatioTransformer_trial_167/epoch012/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch012_CR_sig_logY](../plots/calRatioTransformer_trial_167/epoch012/CR_ttbar_pred_sig_logY.png) | ![167_epoch012_CR_sig_logX_logY](../plots/calRatioTransformer_trial_167/epoch012/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![167_epoch012_CR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch012/CR_ttbar_pred_bkg_logY.png) | ![167_epoch012_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_167/epoch012/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![167_epoch012_CR_bib_logY](../plots/calRatioTransformer_trial_167/epoch012/CR_ttbar_pred_bib_logY.png) | ![167_epoch012_CR_bib_logX_logY](../plots/calRatioTransformer_trial_167/epoch012/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 013
> > **ROC Curve**:
> > ![167_epoch013_ROC](../plots/calRatioTransformer_trial_167/epoch013/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch013_SR_sig](../plots/calRatioTransformer_trial_167/epoch013/SR_pred_sig.png) | ![167_epoch013_SR_sig_logY](../plots/calRatioTransformer_trial_167/epoch013/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![167_epoch013_SR_bkg](../plots/calRatioTransformer_trial_167/epoch013/SR_pred_bkg.png) | ![167_epoch013_SR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch013/SR_pred_bkg_logY.png) |
> > | **BIB** | ![167_epoch013_SR_bib](../plots/calRatioTransformer_trial_167/epoch013/SR_pred_bib.png) | ![167_epoch013_SR_bib_logY](../plots/calRatioTransformer_trial_167/epoch013/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch013_CR_sig_logY](../plots/calRatioTransformer_trial_167/epoch013/CR_ttbar_pred_sig_logY.png) | ![167_epoch013_CR_sig_logX_logY](../plots/calRatioTransformer_trial_167/epoch013/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![167_epoch013_CR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch013/CR_ttbar_pred_bkg_logY.png) | ![167_epoch013_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_167/epoch013/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![167_epoch013_CR_bib_logY](../plots/calRatioTransformer_trial_167/epoch013/CR_ttbar_pred_bib_logY.png) | ![167_epoch013_CR_bib_logX_logY](../plots/calRatioTransformer_trial_167/epoch013/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 014
> > **ROC Curve**:
> > ![167_epoch014_ROC](../plots/calRatioTransformer_trial_167/epoch014/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch014_SR_sig](../plots/calRatioTransformer_trial_167/epoch014/SR_pred_sig.png) | ![167_epoch014_SR_sig_logY](../plots/calRatioTransformer_trial_167/epoch014/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![167_epoch014_SR_bkg](../plots/calRatioTransformer_trial_167/epoch014/SR_pred_bkg.png) | ![167_epoch014_SR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch014/SR_pred_bkg_logY.png) |
> > | **BIB** | ![167_epoch014_SR_bib](../plots/calRatioTransformer_trial_167/epoch014/SR_pred_bib.png) | ![167_epoch014_SR_bib_logY](../plots/calRatioTransformer_trial_167/epoch014/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![167_epoch014_CR_sig_logY](../plots/calRatioTransformer_trial_167/epoch014/CR_ttbar_pred_sig_logY.png) | ![167_epoch014_CR_sig_logX_logY](../plots/calRatioTransformer_trial_167/epoch014/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![167_epoch014_CR_bkg_logY](../plots/calRatioTransformer_trial_167/epoch014/CR_ttbar_pred_bkg_logY.png) | ![167_epoch014_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_167/epoch014/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![167_epoch014_CR_bib_logY](../plots/calRatioTransformer_trial_167/epoch014/CR_ttbar_pred_bib_logY.png) | ![167_epoch014_CR_bib_logX_logY](../plots/calRatioTransformer_trial_167/epoch014/CR_ttbar_pred_bib_logX_logY.png) |
>


> [!abstract]- Trial 171 (max_epochs=40, SR Loss=0.54538, CR Loss=0.34087)
> **Dedicated Note**: [Open Trial 171 Full Note](Optimized%20Models/Trial%20171.md) | **Regime**: Central balanced knee
>
> > [!note]- Epoch 030
> > **ROC Curve**:
> > ![171_epoch030_ROC](../plots/calRatioTransformer_trial_171/epoch030/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch030_SR_sig](../plots/calRatioTransformer_trial_171/epoch030/SR_pred_sig.png) | ![171_epoch030_SR_sig_logY](../plots/calRatioTransformer_trial_171/epoch030/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![171_epoch030_SR_bkg](../plots/calRatioTransformer_trial_171/epoch030/SR_pred_bkg.png) | ![171_epoch030_SR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch030/SR_pred_bkg_logY.png) |
> > | **BIB** | ![171_epoch030_SR_bib](../plots/calRatioTransformer_trial_171/epoch030/SR_pred_bib.png) | ![171_epoch030_SR_bib_logY](../plots/calRatioTransformer_trial_171/epoch030/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch030_CR_sig_logY](../plots/calRatioTransformer_trial_171/epoch030/CR_ttbar_pred_sig_logY.png) | ![171_epoch030_CR_sig_logX_logY](../plots/calRatioTransformer_trial_171/epoch030/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![171_epoch030_CR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch030/CR_ttbar_pred_bkg_logY.png) | ![171_epoch030_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_171/epoch030/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![171_epoch030_CR_bib_logY](../plots/calRatioTransformer_trial_171/epoch030/CR_ttbar_pred_bib_logY.png) | ![171_epoch030_CR_bib_logX_logY](../plots/calRatioTransformer_trial_171/epoch030/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 031
> > **ROC Curve**:
> > ![171_epoch031_ROC](../plots/calRatioTransformer_trial_171/epoch031/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch031_SR_sig](../plots/calRatioTransformer_trial_171/epoch031/SR_pred_sig.png) | ![171_epoch031_SR_sig_logY](../plots/calRatioTransformer_trial_171/epoch031/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![171_epoch031_SR_bkg](../plots/calRatioTransformer_trial_171/epoch031/SR_pred_bkg.png) | ![171_epoch031_SR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch031/SR_pred_bkg_logY.png) |
> > | **BIB** | ![171_epoch031_SR_bib](../plots/calRatioTransformer_trial_171/epoch031/SR_pred_bib.png) | ![171_epoch031_SR_bib_logY](../plots/calRatioTransformer_trial_171/epoch031/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch031_CR_sig_logY](../plots/calRatioTransformer_trial_171/epoch031/CR_ttbar_pred_sig_logY.png) | ![171_epoch031_CR_sig_logX_logY](../plots/calRatioTransformer_trial_171/epoch031/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![171_epoch031_CR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch031/CR_ttbar_pred_bkg_logY.png) | ![171_epoch031_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_171/epoch031/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![171_epoch031_CR_bib_logY](../plots/calRatioTransformer_trial_171/epoch031/CR_ttbar_pred_bib_logY.png) | ![171_epoch031_CR_bib_logX_logY](../plots/calRatioTransformer_trial_171/epoch031/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 032
> > **ROC Curve**:
> > ![171_epoch032_ROC](../plots/calRatioTransformer_trial_171/epoch032/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch032_SR_sig](../plots/calRatioTransformer_trial_171/epoch032/SR_pred_sig.png) | ![171_epoch032_SR_sig_logY](../plots/calRatioTransformer_trial_171/epoch032/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![171_epoch032_SR_bkg](../plots/calRatioTransformer_trial_171/epoch032/SR_pred_bkg.png) | ![171_epoch032_SR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch032/SR_pred_bkg_logY.png) |
> > | **BIB** | ![171_epoch032_SR_bib](../plots/calRatioTransformer_trial_171/epoch032/SR_pred_bib.png) | ![171_epoch032_SR_bib_logY](../plots/calRatioTransformer_trial_171/epoch032/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch032_CR_sig_logY](../plots/calRatioTransformer_trial_171/epoch032/CR_ttbar_pred_sig_logY.png) | ![171_epoch032_CR_sig_logX_logY](../plots/calRatioTransformer_trial_171/epoch032/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![171_epoch032_CR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch032/CR_ttbar_pred_bkg_logY.png) | ![171_epoch032_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_171/epoch032/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![171_epoch032_CR_bib_logY](../plots/calRatioTransformer_trial_171/epoch032/CR_ttbar_pred_bib_logY.png) | ![171_epoch032_CR_bib_logX_logY](../plots/calRatioTransformer_trial_171/epoch032/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 033
> > **ROC Curve**:
> > ![171_epoch033_ROC](../plots/calRatioTransformer_trial_171/epoch033/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch033_SR_sig](../plots/calRatioTransformer_trial_171/epoch033/SR_pred_sig.png) | ![171_epoch033_SR_sig_logY](../plots/calRatioTransformer_trial_171/epoch033/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![171_epoch033_SR_bkg](../plots/calRatioTransformer_trial_171/epoch033/SR_pred_bkg.png) | ![171_epoch033_SR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch033/SR_pred_bkg_logY.png) |
> > | **BIB** | ![171_epoch033_SR_bib](../plots/calRatioTransformer_trial_171/epoch033/SR_pred_bib.png) | ![171_epoch033_SR_bib_logY](../plots/calRatioTransformer_trial_171/epoch033/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch033_CR_sig_logY](../plots/calRatioTransformer_trial_171/epoch033/CR_ttbar_pred_sig_logY.png) | ![171_epoch033_CR_sig_logX_logY](../plots/calRatioTransformer_trial_171/epoch033/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![171_epoch033_CR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch033/CR_ttbar_pred_bkg_logY.png) | ![171_epoch033_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_171/epoch033/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![171_epoch033_CR_bib_logY](../plots/calRatioTransformer_trial_171/epoch033/CR_ttbar_pred_bib_logY.png) | ![171_epoch033_CR_bib_logX_logY](../plots/calRatioTransformer_trial_171/epoch033/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 034
> > **ROC Curve**:
> > ![171_epoch034_ROC](../plots/calRatioTransformer_trial_171/epoch034/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch034_SR_sig](../plots/calRatioTransformer_trial_171/epoch034/SR_pred_sig.png) | ![171_epoch034_SR_sig_logY](../plots/calRatioTransformer_trial_171/epoch034/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![171_epoch034_SR_bkg](../plots/calRatioTransformer_trial_171/epoch034/SR_pred_bkg.png) | ![171_epoch034_SR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch034/SR_pred_bkg_logY.png) |
> > | **BIB** | ![171_epoch034_SR_bib](../plots/calRatioTransformer_trial_171/epoch034/SR_pred_bib.png) | ![171_epoch034_SR_bib_logY](../plots/calRatioTransformer_trial_171/epoch034/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch034_CR_sig_logY](../plots/calRatioTransformer_trial_171/epoch034/CR_ttbar_pred_sig_logY.png) | ![171_epoch034_CR_sig_logX_logY](../plots/calRatioTransformer_trial_171/epoch034/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![171_epoch034_CR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch034/CR_ttbar_pred_bkg_logY.png) | ![171_epoch034_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_171/epoch034/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![171_epoch034_CR_bib_logY](../plots/calRatioTransformer_trial_171/epoch034/CR_ttbar_pred_bib_logY.png) | ![171_epoch034_CR_bib_logX_logY](../plots/calRatioTransformer_trial_171/epoch034/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 035
> > **ROC Curve**:
> > ![171_epoch035_ROC](../plots/calRatioTransformer_trial_171/epoch035/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch035_SR_sig](../plots/calRatioTransformer_trial_171/epoch035/SR_pred_sig.png) | ![171_epoch035_SR_sig_logY](../plots/calRatioTransformer_trial_171/epoch035/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![171_epoch035_SR_bkg](../plots/calRatioTransformer_trial_171/epoch035/SR_pred_bkg.png) | ![171_epoch035_SR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch035/SR_pred_bkg_logY.png) |
> > | **BIB** | ![171_epoch035_SR_bib](../plots/calRatioTransformer_trial_171/epoch035/SR_pred_bib.png) | ![171_epoch035_SR_bib_logY](../plots/calRatioTransformer_trial_171/epoch035/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch035_CR_sig_logY](../plots/calRatioTransformer_trial_171/epoch035/CR_ttbar_pred_sig_logY.png) | ![171_epoch035_CR_sig_logX_logY](../plots/calRatioTransformer_trial_171/epoch035/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![171_epoch035_CR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch035/CR_ttbar_pred_bkg_logY.png) | ![171_epoch035_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_171/epoch035/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![171_epoch035_CR_bib_logY](../plots/calRatioTransformer_trial_171/epoch035/CR_ttbar_pred_bib_logY.png) | ![171_epoch035_CR_bib_logX_logY](../plots/calRatioTransformer_trial_171/epoch035/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 036
> > **ROC Curve**:
> > ![171_epoch036_ROC](../plots/calRatioTransformer_trial_171/epoch036/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch036_SR_sig](../plots/calRatioTransformer_trial_171/epoch036/SR_pred_sig.png) | ![171_epoch036_SR_sig_logY](../plots/calRatioTransformer_trial_171/epoch036/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![171_epoch036_SR_bkg](../plots/calRatioTransformer_trial_171/epoch036/SR_pred_bkg.png) | ![171_epoch036_SR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch036/SR_pred_bkg_logY.png) |
> > | **BIB** | ![171_epoch036_SR_bib](../plots/calRatioTransformer_trial_171/epoch036/SR_pred_bib.png) | ![171_epoch036_SR_bib_logY](../plots/calRatioTransformer_trial_171/epoch036/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch036_CR_sig_logY](../plots/calRatioTransformer_trial_171/epoch036/CR_ttbar_pred_sig_logY.png) | ![171_epoch036_CR_sig_logX_logY](../plots/calRatioTransformer_trial_171/epoch036/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![171_epoch036_CR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch036/CR_ttbar_pred_bkg_logY.png) | ![171_epoch036_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_171/epoch036/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![171_epoch036_CR_bib_logY](../plots/calRatioTransformer_trial_171/epoch036/CR_ttbar_pred_bib_logY.png) | ![171_epoch036_CR_bib_logX_logY](../plots/calRatioTransformer_trial_171/epoch036/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 037
> > **ROC Curve**:
> > ![171_epoch037_ROC](../plots/calRatioTransformer_trial_171/epoch037/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch037_SR_sig](../plots/calRatioTransformer_trial_171/epoch037/SR_pred_sig.png) | ![171_epoch037_SR_sig_logY](../plots/calRatioTransformer_trial_171/epoch037/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![171_epoch037_SR_bkg](../plots/calRatioTransformer_trial_171/epoch037/SR_pred_bkg.png) | ![171_epoch037_SR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch037/SR_pred_bkg_logY.png) |
> > | **BIB** | ![171_epoch037_SR_bib](../plots/calRatioTransformer_trial_171/epoch037/SR_pred_bib.png) | ![171_epoch037_SR_bib_logY](../plots/calRatioTransformer_trial_171/epoch037/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch037_CR_sig_logY](../plots/calRatioTransformer_trial_171/epoch037/CR_ttbar_pred_sig_logY.png) | ![171_epoch037_CR_sig_logX_logY](../plots/calRatioTransformer_trial_171/epoch037/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![171_epoch037_CR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch037/CR_ttbar_pred_bkg_logY.png) | ![171_epoch037_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_171/epoch037/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![171_epoch037_CR_bib_logY](../plots/calRatioTransformer_trial_171/epoch037/CR_ttbar_pred_bib_logY.png) | ![171_epoch037_CR_bib_logX_logY](../plots/calRatioTransformer_trial_171/epoch037/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 038
> > **ROC Curve**:
> > ![171_epoch038_ROC](../plots/calRatioTransformer_trial_171/epoch038/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch038_SR_sig](../plots/calRatioTransformer_trial_171/epoch038/SR_pred_sig.png) | ![171_epoch038_SR_sig_logY](../plots/calRatioTransformer_trial_171/epoch038/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![171_epoch038_SR_bkg](../plots/calRatioTransformer_trial_171/epoch038/SR_pred_bkg.png) | ![171_epoch038_SR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch038/SR_pred_bkg_logY.png) |
> > | **BIB** | ![171_epoch038_SR_bib](../plots/calRatioTransformer_trial_171/epoch038/SR_pred_bib.png) | ![171_epoch038_SR_bib_logY](../plots/calRatioTransformer_trial_171/epoch038/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch038_CR_sig_logY](../plots/calRatioTransformer_trial_171/epoch038/CR_ttbar_pred_sig_logY.png) | ![171_epoch038_CR_sig_logX_logY](../plots/calRatioTransformer_trial_171/epoch038/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![171_epoch038_CR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch038/CR_ttbar_pred_bkg_logY.png) | ![171_epoch038_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_171/epoch038/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![171_epoch038_CR_bib_logY](../plots/calRatioTransformer_trial_171/epoch038/CR_ttbar_pred_bib_logY.png) | ![171_epoch038_CR_bib_logX_logY](../plots/calRatioTransformer_trial_171/epoch038/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 039
> > **ROC Curve**:
> > ![171_epoch039_ROC](../plots/calRatioTransformer_trial_171/epoch039/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch039_SR_sig](../plots/calRatioTransformer_trial_171/epoch039/SR_pred_sig.png) | ![171_epoch039_SR_sig_logY](../plots/calRatioTransformer_trial_171/epoch039/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![171_epoch039_SR_bkg](../plots/calRatioTransformer_trial_171/epoch039/SR_pred_bkg.png) | ![171_epoch039_SR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch039/SR_pred_bkg_logY.png) |
> > | **BIB** | ![171_epoch039_SR_bib](../plots/calRatioTransformer_trial_171/epoch039/SR_pred_bib.png) | ![171_epoch039_SR_bib_logY](../plots/calRatioTransformer_trial_171/epoch039/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![171_epoch039_CR_sig_logY](../plots/calRatioTransformer_trial_171/epoch039/CR_ttbar_pred_sig_logY.png) | ![171_epoch039_CR_sig_logX_logY](../plots/calRatioTransformer_trial_171/epoch039/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![171_epoch039_CR_bkg_logY](../plots/calRatioTransformer_trial_171/epoch039/CR_ttbar_pred_bkg_logY.png) | ![171_epoch039_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_171/epoch039/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![171_epoch039_CR_bib_logY](../plots/calRatioTransformer_trial_171/epoch039/CR_ttbar_pred_bib_logY.png) | ![171_epoch039_CR_bib_logX_logY](../plots/calRatioTransformer_trial_171/epoch039/CR_ttbar_pred_bib_logX_logY.png) |
>


> [!abstract]- Trial 175 (max_epochs=40, SR Loss=0.53502, CR Loss=0.45329)
> **Dedicated Note**: [Open Trial 175 Full Note](Optimized%20Models/Trial%20175.md) | **Regime**: Central balanced knee
>
> > [!note]- Epoch 030
> > **ROC Curve**:
> > ![175_epoch030_ROC](../plots/calRatioTransformer_trial_175/epoch030/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch030_SR_sig](../plots/calRatioTransformer_trial_175/epoch030/SR_pred_sig.png) | ![175_epoch030_SR_sig_logY](../plots/calRatioTransformer_trial_175/epoch030/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![175_epoch030_SR_bkg](../plots/calRatioTransformer_trial_175/epoch030/SR_pred_bkg.png) | ![175_epoch030_SR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch030/SR_pred_bkg_logY.png) |
> > | **BIB** | ![175_epoch030_SR_bib](../plots/calRatioTransformer_trial_175/epoch030/SR_pred_bib.png) | ![175_epoch030_SR_bib_logY](../plots/calRatioTransformer_trial_175/epoch030/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch030_CR_sig_logY](../plots/calRatioTransformer_trial_175/epoch030/CR_ttbar_pred_sig_logY.png) | ![175_epoch030_CR_sig_logX_logY](../plots/calRatioTransformer_trial_175/epoch030/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![175_epoch030_CR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch030/CR_ttbar_pred_bkg_logY.png) | ![175_epoch030_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_175/epoch030/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![175_epoch030_CR_bib_logY](../plots/calRatioTransformer_trial_175/epoch030/CR_ttbar_pred_bib_logY.png) | ![175_epoch030_CR_bib_logX_logY](../plots/calRatioTransformer_trial_175/epoch030/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 031
> > **ROC Curve**:
> > ![175_epoch031_ROC](../plots/calRatioTransformer_trial_175/epoch031/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch031_SR_sig](../plots/calRatioTransformer_trial_175/epoch031/SR_pred_sig.png) | ![175_epoch031_SR_sig_logY](../plots/calRatioTransformer_trial_175/epoch031/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![175_epoch031_SR_bkg](../plots/calRatioTransformer_trial_175/epoch031/SR_pred_bkg.png) | ![175_epoch031_SR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch031/SR_pred_bkg_logY.png) |
> > | **BIB** | ![175_epoch031_SR_bib](../plots/calRatioTransformer_trial_175/epoch031/SR_pred_bib.png) | ![175_epoch031_SR_bib_logY](../plots/calRatioTransformer_trial_175/epoch031/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch031_CR_sig_logY](../plots/calRatioTransformer_trial_175/epoch031/CR_ttbar_pred_sig_logY.png) | ![175_epoch031_CR_sig_logX_logY](../plots/calRatioTransformer_trial_175/epoch031/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![175_epoch031_CR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch031/CR_ttbar_pred_bkg_logY.png) | ![175_epoch031_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_175/epoch031/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![175_epoch031_CR_bib_logY](../plots/calRatioTransformer_trial_175/epoch031/CR_ttbar_pred_bib_logY.png) | ![175_epoch031_CR_bib_logX_logY](../plots/calRatioTransformer_trial_175/epoch031/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 032
> > **ROC Curve**:
> > ![175_epoch032_ROC](../plots/calRatioTransformer_trial_175/epoch032/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch032_SR_sig](../plots/calRatioTransformer_trial_175/epoch032/SR_pred_sig.png) | ![175_epoch032_SR_sig_logY](../plots/calRatioTransformer_trial_175/epoch032/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![175_epoch032_SR_bkg](../plots/calRatioTransformer_trial_175/epoch032/SR_pred_bkg.png) | ![175_epoch032_SR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch032/SR_pred_bkg_logY.png) |
> > | **BIB** | ![175_epoch032_SR_bib](../plots/calRatioTransformer_trial_175/epoch032/SR_pred_bib.png) | ![175_epoch032_SR_bib_logY](../plots/calRatioTransformer_trial_175/epoch032/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch032_CR_sig_logY](../plots/calRatioTransformer_trial_175/epoch032/CR_ttbar_pred_sig_logY.png) | ![175_epoch032_CR_sig_logX_logY](../plots/calRatioTransformer_trial_175/epoch032/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![175_epoch032_CR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch032/CR_ttbar_pred_bkg_logY.png) | ![175_epoch032_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_175/epoch032/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![175_epoch032_CR_bib_logY](../plots/calRatioTransformer_trial_175/epoch032/CR_ttbar_pred_bib_logY.png) | ![175_epoch032_CR_bib_logX_logY](../plots/calRatioTransformer_trial_175/epoch032/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 033
> > **ROC Curve**:
> > ![175_epoch033_ROC](../plots/calRatioTransformer_trial_175/epoch033/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch033_SR_sig](../plots/calRatioTransformer_trial_175/epoch033/SR_pred_sig.png) | ![175_epoch033_SR_sig_logY](../plots/calRatioTransformer_trial_175/epoch033/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![175_epoch033_SR_bkg](../plots/calRatioTransformer_trial_175/epoch033/SR_pred_bkg.png) | ![175_epoch033_SR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch033/SR_pred_bkg_logY.png) |
> > | **BIB** | ![175_epoch033_SR_bib](../plots/calRatioTransformer_trial_175/epoch033/SR_pred_bib.png) | ![175_epoch033_SR_bib_logY](../plots/calRatioTransformer_trial_175/epoch033/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch033_CR_sig_logY](../plots/calRatioTransformer_trial_175/epoch033/CR_ttbar_pred_sig_logY.png) | ![175_epoch033_CR_sig_logX_logY](../plots/calRatioTransformer_trial_175/epoch033/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![175_epoch033_CR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch033/CR_ttbar_pred_bkg_logY.png) | ![175_epoch033_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_175/epoch033/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![175_epoch033_CR_bib_logY](../plots/calRatioTransformer_trial_175/epoch033/CR_ttbar_pred_bib_logY.png) | ![175_epoch033_CR_bib_logX_logY](../plots/calRatioTransformer_trial_175/epoch033/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 034
> > **ROC Curve**:
> > ![175_epoch034_ROC](../plots/calRatioTransformer_trial_175/epoch034/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch034_SR_sig](../plots/calRatioTransformer_trial_175/epoch034/SR_pred_sig.png) | ![175_epoch034_SR_sig_logY](../plots/calRatioTransformer_trial_175/epoch034/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![175_epoch034_SR_bkg](../plots/calRatioTransformer_trial_175/epoch034/SR_pred_bkg.png) | ![175_epoch034_SR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch034/SR_pred_bkg_logY.png) |
> > | **BIB** | ![175_epoch034_SR_bib](../plots/calRatioTransformer_trial_175/epoch034/SR_pred_bib.png) | ![175_epoch034_SR_bib_logY](../plots/calRatioTransformer_trial_175/epoch034/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch034_CR_sig_logY](../plots/calRatioTransformer_trial_175/epoch034/CR_ttbar_pred_sig_logY.png) | ![175_epoch034_CR_sig_logX_logY](../plots/calRatioTransformer_trial_175/epoch034/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![175_epoch034_CR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch034/CR_ttbar_pred_bkg_logY.png) | ![175_epoch034_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_175/epoch034/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![175_epoch034_CR_bib_logY](../plots/calRatioTransformer_trial_175/epoch034/CR_ttbar_pred_bib_logY.png) | ![175_epoch034_CR_bib_logX_logY](../plots/calRatioTransformer_trial_175/epoch034/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 035
> > **ROC Curve**:
> > ![175_epoch035_ROC](../plots/calRatioTransformer_trial_175/epoch035/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch035_SR_sig](../plots/calRatioTransformer_trial_175/epoch035/SR_pred_sig.png) | ![175_epoch035_SR_sig_logY](../plots/calRatioTransformer_trial_175/epoch035/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![175_epoch035_SR_bkg](../plots/calRatioTransformer_trial_175/epoch035/SR_pred_bkg.png) | ![175_epoch035_SR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch035/SR_pred_bkg_logY.png) |
> > | **BIB** | ![175_epoch035_SR_bib](../plots/calRatioTransformer_trial_175/epoch035/SR_pred_bib.png) | ![175_epoch035_SR_bib_logY](../plots/calRatioTransformer_trial_175/epoch035/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch035_CR_sig_logY](../plots/calRatioTransformer_trial_175/epoch035/CR_ttbar_pred_sig_logY.png) | ![175_epoch035_CR_sig_logX_logY](../plots/calRatioTransformer_trial_175/epoch035/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![175_epoch035_CR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch035/CR_ttbar_pred_bkg_logY.png) | ![175_epoch035_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_175/epoch035/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![175_epoch035_CR_bib_logY](../plots/calRatioTransformer_trial_175/epoch035/CR_ttbar_pred_bib_logY.png) | ![175_epoch035_CR_bib_logX_logY](../plots/calRatioTransformer_trial_175/epoch035/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 036
> > **ROC Curve**:
> > ![175_epoch036_ROC](../plots/calRatioTransformer_trial_175/epoch036/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch036_SR_sig](../plots/calRatioTransformer_trial_175/epoch036/SR_pred_sig.png) | ![175_epoch036_SR_sig_logY](../plots/calRatioTransformer_trial_175/epoch036/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![175_epoch036_SR_bkg](../plots/calRatioTransformer_trial_175/epoch036/SR_pred_bkg.png) | ![175_epoch036_SR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch036/SR_pred_bkg_logY.png) |
> > | **BIB** | ![175_epoch036_SR_bib](../plots/calRatioTransformer_trial_175/epoch036/SR_pred_bib.png) | ![175_epoch036_SR_bib_logY](../plots/calRatioTransformer_trial_175/epoch036/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch036_CR_sig_logY](../plots/calRatioTransformer_trial_175/epoch036/CR_ttbar_pred_sig_logY.png) | ![175_epoch036_CR_sig_logX_logY](../plots/calRatioTransformer_trial_175/epoch036/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![175_epoch036_CR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch036/CR_ttbar_pred_bkg_logY.png) | ![175_epoch036_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_175/epoch036/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![175_epoch036_CR_bib_logY](../plots/calRatioTransformer_trial_175/epoch036/CR_ttbar_pred_bib_logY.png) | ![175_epoch036_CR_bib_logX_logY](../plots/calRatioTransformer_trial_175/epoch036/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 037
> > **ROC Curve**:
> > ![175_epoch037_ROC](../plots/calRatioTransformer_trial_175/epoch037/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch037_SR_sig](../plots/calRatioTransformer_trial_175/epoch037/SR_pred_sig.png) | ![175_epoch037_SR_sig_logY](../plots/calRatioTransformer_trial_175/epoch037/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![175_epoch037_SR_bkg](../plots/calRatioTransformer_trial_175/epoch037/SR_pred_bkg.png) | ![175_epoch037_SR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch037/SR_pred_bkg_logY.png) |
> > | **BIB** | ![175_epoch037_SR_bib](../plots/calRatioTransformer_trial_175/epoch037/SR_pred_bib.png) | ![175_epoch037_SR_bib_logY](../plots/calRatioTransformer_trial_175/epoch037/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch037_CR_sig_logY](../plots/calRatioTransformer_trial_175/epoch037/CR_ttbar_pred_sig_logY.png) | ![175_epoch037_CR_sig_logX_logY](../plots/calRatioTransformer_trial_175/epoch037/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![175_epoch037_CR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch037/CR_ttbar_pred_bkg_logY.png) | ![175_epoch037_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_175/epoch037/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![175_epoch037_CR_bib_logY](../plots/calRatioTransformer_trial_175/epoch037/CR_ttbar_pred_bib_logY.png) | ![175_epoch037_CR_bib_logX_logY](../plots/calRatioTransformer_trial_175/epoch037/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 038
> > **ROC Curve**:
> > ![175_epoch038_ROC](../plots/calRatioTransformer_trial_175/epoch038/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch038_SR_sig](../plots/calRatioTransformer_trial_175/epoch038/SR_pred_sig.png) | ![175_epoch038_SR_sig_logY](../plots/calRatioTransformer_trial_175/epoch038/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![175_epoch038_SR_bkg](../plots/calRatioTransformer_trial_175/epoch038/SR_pred_bkg.png) | ![175_epoch038_SR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch038/SR_pred_bkg_logY.png) |
> > | **BIB** | ![175_epoch038_SR_bib](../plots/calRatioTransformer_trial_175/epoch038/SR_pred_bib.png) | ![175_epoch038_SR_bib_logY](../plots/calRatioTransformer_trial_175/epoch038/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch038_CR_sig_logY](../plots/calRatioTransformer_trial_175/epoch038/CR_ttbar_pred_sig_logY.png) | ![175_epoch038_CR_sig_logX_logY](../plots/calRatioTransformer_trial_175/epoch038/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![175_epoch038_CR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch038/CR_ttbar_pred_bkg_logY.png) | ![175_epoch038_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_175/epoch038/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![175_epoch038_CR_bib_logY](../plots/calRatioTransformer_trial_175/epoch038/CR_ttbar_pred_bib_logY.png) | ![175_epoch038_CR_bib_logX_logY](../plots/calRatioTransformer_trial_175/epoch038/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 039
> > **ROC Curve**:
> > ![175_epoch039_ROC](../plots/calRatioTransformer_trial_175/epoch039/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch039_SR_sig](../plots/calRatioTransformer_trial_175/epoch039/SR_pred_sig.png) | ![175_epoch039_SR_sig_logY](../plots/calRatioTransformer_trial_175/epoch039/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![175_epoch039_SR_bkg](../plots/calRatioTransformer_trial_175/epoch039/SR_pred_bkg.png) | ![175_epoch039_SR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch039/SR_pred_bkg_logY.png) |
> > | **BIB** | ![175_epoch039_SR_bib](../plots/calRatioTransformer_trial_175/epoch039/SR_pred_bib.png) | ![175_epoch039_SR_bib_logY](../plots/calRatioTransformer_trial_175/epoch039/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![175_epoch039_CR_sig_logY](../plots/calRatioTransformer_trial_175/epoch039/CR_ttbar_pred_sig_logY.png) | ![175_epoch039_CR_sig_logX_logY](../plots/calRatioTransformer_trial_175/epoch039/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![175_epoch039_CR_bkg_logY](../plots/calRatioTransformer_trial_175/epoch039/CR_ttbar_pred_bkg_logY.png) | ![175_epoch039_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_175/epoch039/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![175_epoch039_CR_bib_logY](../plots/calRatioTransformer_trial_175/epoch039/CR_ttbar_pred_bib_logY.png) | ![175_epoch039_CR_bib_logX_logY](../plots/calRatioTransformer_trial_175/epoch039/CR_ttbar_pred_bib_logX_logY.png) |
>


> [!abstract]- Trial 265 (max_epochs=20, SR Loss=0.57107, CR Loss=0.233)
> **Dedicated Note**: [Open Trial 265 Full Note](Optimized%20Models/Trial%20265.md) | **Regime**: Transition to CR focus
>
> > [!note]- Epoch 010
> > **ROC Curve**:
> > ![265_epoch010_ROC](../plots/calRatioTransformer_trial_265/epoch010/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch010_SR_sig](../plots/calRatioTransformer_trial_265/epoch010/SR_pred_sig.png) | ![265_epoch010_SR_sig_logY](../plots/calRatioTransformer_trial_265/epoch010/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![265_epoch010_SR_bkg](../plots/calRatioTransformer_trial_265/epoch010/SR_pred_bkg.png) | ![265_epoch010_SR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch010/SR_pred_bkg_logY.png) |
> > | **BIB** | ![265_epoch010_SR_bib](../plots/calRatioTransformer_trial_265/epoch010/SR_pred_bib.png) | ![265_epoch010_SR_bib_logY](../plots/calRatioTransformer_trial_265/epoch010/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch010_CR_sig_logY](../plots/calRatioTransformer_trial_265/epoch010/CR_ttbar_pred_sig_logY.png) | ![265_epoch010_CR_sig_logX_logY](../plots/calRatioTransformer_trial_265/epoch010/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![265_epoch010_CR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch010/CR_ttbar_pred_bkg_logY.png) | ![265_epoch010_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_265/epoch010/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![265_epoch010_CR_bib_logY](../plots/calRatioTransformer_trial_265/epoch010/CR_ttbar_pred_bib_logY.png) | ![265_epoch010_CR_bib_logX_logY](../plots/calRatioTransformer_trial_265/epoch010/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 011
> > **ROC Curve**:
> > ![265_epoch011_ROC](../plots/calRatioTransformer_trial_265/epoch011/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch011_SR_sig](../plots/calRatioTransformer_trial_265/epoch011/SR_pred_sig.png) | ![265_epoch011_SR_sig_logY](../plots/calRatioTransformer_trial_265/epoch011/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![265_epoch011_SR_bkg](../plots/calRatioTransformer_trial_265/epoch011/SR_pred_bkg.png) | ![265_epoch011_SR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch011/SR_pred_bkg_logY.png) |
> > | **BIB** | ![265_epoch011_SR_bib](../plots/calRatioTransformer_trial_265/epoch011/SR_pred_bib.png) | ![265_epoch011_SR_bib_logY](../plots/calRatioTransformer_trial_265/epoch011/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch011_CR_sig_logY](../plots/calRatioTransformer_trial_265/epoch011/CR_ttbar_pred_sig_logY.png) | ![265_epoch011_CR_sig_logX_logY](../plots/calRatioTransformer_trial_265/epoch011/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![265_epoch011_CR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch011/CR_ttbar_pred_bkg_logY.png) | ![265_epoch011_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_265/epoch011/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![265_epoch011_CR_bib_logY](../plots/calRatioTransformer_trial_265/epoch011/CR_ttbar_pred_bib_logY.png) | ![265_epoch011_CR_bib_logX_logY](../plots/calRatioTransformer_trial_265/epoch011/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 012
> > **ROC Curve**:
> > ![265_epoch012_ROC](../plots/calRatioTransformer_trial_265/epoch012/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch012_SR_sig](../plots/calRatioTransformer_trial_265/epoch012/SR_pred_sig.png) | ![265_epoch012_SR_sig_logY](../plots/calRatioTransformer_trial_265/epoch012/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![265_epoch012_SR_bkg](../plots/calRatioTransformer_trial_265/epoch012/SR_pred_bkg.png) | ![265_epoch012_SR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch012/SR_pred_bkg_logY.png) |
> > | **BIB** | ![265_epoch012_SR_bib](../plots/calRatioTransformer_trial_265/epoch012/SR_pred_bib.png) | ![265_epoch012_SR_bib_logY](../plots/calRatioTransformer_trial_265/epoch012/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch012_CR_sig_logY](../plots/calRatioTransformer_trial_265/epoch012/CR_ttbar_pred_sig_logY.png) | ![265_epoch012_CR_sig_logX_logY](../plots/calRatioTransformer_trial_265/epoch012/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![265_epoch012_CR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch012/CR_ttbar_pred_bkg_logY.png) | ![265_epoch012_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_265/epoch012/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![265_epoch012_CR_bib_logY](../plots/calRatioTransformer_trial_265/epoch012/CR_ttbar_pred_bib_logY.png) | ![265_epoch012_CR_bib_logX_logY](../plots/calRatioTransformer_trial_265/epoch012/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 013
> > **ROC Curve**:
> > ![265_epoch013_ROC](../plots/calRatioTransformer_trial_265/epoch013/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch013_SR_sig](../plots/calRatioTransformer_trial_265/epoch013/SR_pred_sig.png) | ![265_epoch013_SR_sig_logY](../plots/calRatioTransformer_trial_265/epoch013/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![265_epoch013_SR_bkg](../plots/calRatioTransformer_trial_265/epoch013/SR_pred_bkg.png) | ![265_epoch013_SR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch013/SR_pred_bkg_logY.png) |
> > | **BIB** | ![265_epoch013_SR_bib](../plots/calRatioTransformer_trial_265/epoch013/SR_pred_bib.png) | ![265_epoch013_SR_bib_logY](../plots/calRatioTransformer_trial_265/epoch013/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch013_CR_sig_logY](../plots/calRatioTransformer_trial_265/epoch013/CR_ttbar_pred_sig_logY.png) | ![265_epoch013_CR_sig_logX_logY](../plots/calRatioTransformer_trial_265/epoch013/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![265_epoch013_CR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch013/CR_ttbar_pred_bkg_logY.png) | ![265_epoch013_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_265/epoch013/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![265_epoch013_CR_bib_logY](../plots/calRatioTransformer_trial_265/epoch013/CR_ttbar_pred_bib_logY.png) | ![265_epoch013_CR_bib_logX_logY](../plots/calRatioTransformer_trial_265/epoch013/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 014
> > **ROC Curve**:
> > ![265_epoch014_ROC](../plots/calRatioTransformer_trial_265/epoch014/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch014_SR_sig](../plots/calRatioTransformer_trial_265/epoch014/SR_pred_sig.png) | ![265_epoch014_SR_sig_logY](../plots/calRatioTransformer_trial_265/epoch014/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![265_epoch014_SR_bkg](../plots/calRatioTransformer_trial_265/epoch014/SR_pred_bkg.png) | ![265_epoch014_SR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch014/SR_pred_bkg_logY.png) |
> > | **BIB** | ![265_epoch014_SR_bib](../plots/calRatioTransformer_trial_265/epoch014/SR_pred_bib.png) | ![265_epoch014_SR_bib_logY](../plots/calRatioTransformer_trial_265/epoch014/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch014_CR_sig_logY](../plots/calRatioTransformer_trial_265/epoch014/CR_ttbar_pred_sig_logY.png) | ![265_epoch014_CR_sig_logX_logY](../plots/calRatioTransformer_trial_265/epoch014/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![265_epoch014_CR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch014/CR_ttbar_pred_bkg_logY.png) | ![265_epoch014_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_265/epoch014/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![265_epoch014_CR_bib_logY](../plots/calRatioTransformer_trial_265/epoch014/CR_ttbar_pred_bib_logY.png) | ![265_epoch014_CR_bib_logX_logY](../plots/calRatioTransformer_trial_265/epoch014/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 015
> > **ROC Curve**:
> > ![265_epoch015_ROC](../plots/calRatioTransformer_trial_265/epoch015/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch015_SR_sig](../plots/calRatioTransformer_trial_265/epoch015/SR_pred_sig.png) | ![265_epoch015_SR_sig_logY](../plots/calRatioTransformer_trial_265/epoch015/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![265_epoch015_SR_bkg](../plots/calRatioTransformer_trial_265/epoch015/SR_pred_bkg.png) | ![265_epoch015_SR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch015/SR_pred_bkg_logY.png) |
> > | **BIB** | ![265_epoch015_SR_bib](../plots/calRatioTransformer_trial_265/epoch015/SR_pred_bib.png) | ![265_epoch015_SR_bib_logY](../plots/calRatioTransformer_trial_265/epoch015/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch015_CR_sig_logY](../plots/calRatioTransformer_trial_265/epoch015/CR_ttbar_pred_sig_logY.png) | ![265_epoch015_CR_sig_logX_logY](../plots/calRatioTransformer_trial_265/epoch015/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![265_epoch015_CR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch015/CR_ttbar_pred_bkg_logY.png) | ![265_epoch015_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_265/epoch015/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![265_epoch015_CR_bib_logY](../plots/calRatioTransformer_trial_265/epoch015/CR_ttbar_pred_bib_logY.png) | ![265_epoch015_CR_bib_logX_logY](../plots/calRatioTransformer_trial_265/epoch015/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 016
> > **ROC Curve**:
> > ![265_epoch016_ROC](../plots/calRatioTransformer_trial_265/epoch016/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch016_SR_sig](../plots/calRatioTransformer_trial_265/epoch016/SR_pred_sig.png) | ![265_epoch016_SR_sig_logY](../plots/calRatioTransformer_trial_265/epoch016/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![265_epoch016_SR_bkg](../plots/calRatioTransformer_trial_265/epoch016/SR_pred_bkg.png) | ![265_epoch016_SR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch016/SR_pred_bkg_logY.png) |
> > | **BIB** | ![265_epoch016_SR_bib](../plots/calRatioTransformer_trial_265/epoch016/SR_pred_bib.png) | ![265_epoch016_SR_bib_logY](../plots/calRatioTransformer_trial_265/epoch016/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch016_CR_sig_logY](../plots/calRatioTransformer_trial_265/epoch016/CR_ttbar_pred_sig_logY.png) | ![265_epoch016_CR_sig_logX_logY](../plots/calRatioTransformer_trial_265/epoch016/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![265_epoch016_CR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch016/CR_ttbar_pred_bkg_logY.png) | ![265_epoch016_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_265/epoch016/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![265_epoch016_CR_bib_logY](../plots/calRatioTransformer_trial_265/epoch016/CR_ttbar_pred_bib_logY.png) | ![265_epoch016_CR_bib_logX_logY](../plots/calRatioTransformer_trial_265/epoch016/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 017
> > **ROC Curve**:
> > ![265_epoch017_ROC](../plots/calRatioTransformer_trial_265/epoch017/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch017_SR_sig](../plots/calRatioTransformer_trial_265/epoch017/SR_pred_sig.png) | ![265_epoch017_SR_sig_logY](../plots/calRatioTransformer_trial_265/epoch017/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![265_epoch017_SR_bkg](../plots/calRatioTransformer_trial_265/epoch017/SR_pred_bkg.png) | ![265_epoch017_SR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch017/SR_pred_bkg_logY.png) |
> > | **BIB** | ![265_epoch017_SR_bib](../plots/calRatioTransformer_trial_265/epoch017/SR_pred_bib.png) | ![265_epoch017_SR_bib_logY](../plots/calRatioTransformer_trial_265/epoch017/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch017_CR_sig_logY](../plots/calRatioTransformer_trial_265/epoch017/CR_ttbar_pred_sig_logY.png) | ![265_epoch017_CR_sig_logX_logY](../plots/calRatioTransformer_trial_265/epoch017/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![265_epoch017_CR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch017/CR_ttbar_pred_bkg_logY.png) | ![265_epoch017_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_265/epoch017/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![265_epoch017_CR_bib_logY](../plots/calRatioTransformer_trial_265/epoch017/CR_ttbar_pred_bib_logY.png) | ![265_epoch017_CR_bib_logX_logY](../plots/calRatioTransformer_trial_265/epoch017/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 018
> > **ROC Curve**:
> > ![265_epoch018_ROC](../plots/calRatioTransformer_trial_265/epoch018/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch018_SR_sig](../plots/calRatioTransformer_trial_265/epoch018/SR_pred_sig.png) | ![265_epoch018_SR_sig_logY](../plots/calRatioTransformer_trial_265/epoch018/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![265_epoch018_SR_bkg](../plots/calRatioTransformer_trial_265/epoch018/SR_pred_bkg.png) | ![265_epoch018_SR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch018/SR_pred_bkg_logY.png) |
> > | **BIB** | ![265_epoch018_SR_bib](../plots/calRatioTransformer_trial_265/epoch018/SR_pred_bib.png) | ![265_epoch018_SR_bib_logY](../plots/calRatioTransformer_trial_265/epoch018/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch018_CR_sig_logY](../plots/calRatioTransformer_trial_265/epoch018/CR_ttbar_pred_sig_logY.png) | ![265_epoch018_CR_sig_logX_logY](../plots/calRatioTransformer_trial_265/epoch018/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![265_epoch018_CR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch018/CR_ttbar_pred_bkg_logY.png) | ![265_epoch018_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_265/epoch018/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![265_epoch018_CR_bib_logY](../plots/calRatioTransformer_trial_265/epoch018/CR_ttbar_pred_bib_logY.png) | ![265_epoch018_CR_bib_logX_logY](../plots/calRatioTransformer_trial_265/epoch018/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 019
> > **ROC Curve**:
> > ![265_epoch019_ROC](../plots/calRatioTransformer_trial_265/epoch019/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch019_SR_sig](../plots/calRatioTransformer_trial_265/epoch019/SR_pred_sig.png) | ![265_epoch019_SR_sig_logY](../plots/calRatioTransformer_trial_265/epoch019/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![265_epoch019_SR_bkg](../plots/calRatioTransformer_trial_265/epoch019/SR_pred_bkg.png) | ![265_epoch019_SR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch019/SR_pred_bkg_logY.png) |
> > | **BIB** | ![265_epoch019_SR_bib](../plots/calRatioTransformer_trial_265/epoch019/SR_pred_bib.png) | ![265_epoch019_SR_bib_logY](../plots/calRatioTransformer_trial_265/epoch019/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![265_epoch019_CR_sig_logY](../plots/calRatioTransformer_trial_265/epoch019/CR_ttbar_pred_sig_logY.png) | ![265_epoch019_CR_sig_logX_logY](../plots/calRatioTransformer_trial_265/epoch019/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![265_epoch019_CR_bkg_logY](../plots/calRatioTransformer_trial_265/epoch019/CR_ttbar_pred_bkg_logY.png) | ![265_epoch019_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_265/epoch019/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![265_epoch019_CR_bib_logY](../plots/calRatioTransformer_trial_265/epoch019/CR_ttbar_pred_bib_logY.png) | ![265_epoch019_CR_bib_logX_logY](../plots/calRatioTransformer_trial_265/epoch019/CR_ttbar_pred_bib_logX_logY.png) |
>


> [!abstract]- Trial 269 (max_epochs=15, SR Loss=0.60486, CR Loss=0.21679)
> **Dedicated Note**: [Open Trial 269 Full Note](Optimized%20Models/Trial%20269.md) | **Regime**: Low CR loss
>
> > [!note]- Epoch 005
> > **ROC Curve**:
> > ![269_epoch005_ROC](../plots/calRatioTransformer_trial_269/epoch005/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch005_SR_sig](../plots/calRatioTransformer_trial_269/epoch005/SR_pred_sig.png) | ![269_epoch005_SR_sig_logY](../plots/calRatioTransformer_trial_269/epoch005/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![269_epoch005_SR_bkg](../plots/calRatioTransformer_trial_269/epoch005/SR_pred_bkg.png) | ![269_epoch005_SR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch005/SR_pred_bkg_logY.png) |
> > | **BIB** | ![269_epoch005_SR_bib](../plots/calRatioTransformer_trial_269/epoch005/SR_pred_bib.png) | ![269_epoch005_SR_bib_logY](../plots/calRatioTransformer_trial_269/epoch005/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch005_CR_sig_logY](../plots/calRatioTransformer_trial_269/epoch005/CR_ttbar_pred_sig_logY.png) | ![269_epoch005_CR_sig_logX_logY](../plots/calRatioTransformer_trial_269/epoch005/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![269_epoch005_CR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch005/CR_ttbar_pred_bkg_logY.png) | ![269_epoch005_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_269/epoch005/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![269_epoch005_CR_bib_logY](../plots/calRatioTransformer_trial_269/epoch005/CR_ttbar_pred_bib_logY.png) | ![269_epoch005_CR_bib_logX_logY](../plots/calRatioTransformer_trial_269/epoch005/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 006
> > **ROC Curve**:
> > ![269_epoch006_ROC](../plots/calRatioTransformer_trial_269/epoch006/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch006_SR_sig](../plots/calRatioTransformer_trial_269/epoch006/SR_pred_sig.png) | ![269_epoch006_SR_sig_logY](../plots/calRatioTransformer_trial_269/epoch006/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![269_epoch006_SR_bkg](../plots/calRatioTransformer_trial_269/epoch006/SR_pred_bkg.png) | ![269_epoch006_SR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch006/SR_pred_bkg_logY.png) |
> > | **BIB** | ![269_epoch006_SR_bib](../plots/calRatioTransformer_trial_269/epoch006/SR_pred_bib.png) | ![269_epoch006_SR_bib_logY](../plots/calRatioTransformer_trial_269/epoch006/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch006_CR_sig_logY](../plots/calRatioTransformer_trial_269/epoch006/CR_ttbar_pred_sig_logY.png) | ![269_epoch006_CR_sig_logX_logY](../plots/calRatioTransformer_trial_269/epoch006/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![269_epoch006_CR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch006/CR_ttbar_pred_bkg_logY.png) | ![269_epoch006_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_269/epoch006/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![269_epoch006_CR_bib_logY](../plots/calRatioTransformer_trial_269/epoch006/CR_ttbar_pred_bib_logY.png) | ![269_epoch006_CR_bib_logX_logY](../plots/calRatioTransformer_trial_269/epoch006/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 007
> > **ROC Curve**:
> > ![269_epoch007_ROC](../plots/calRatioTransformer_trial_269/epoch007/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch007_SR_sig](../plots/calRatioTransformer_trial_269/epoch007/SR_pred_sig.png) | ![269_epoch007_SR_sig_logY](../plots/calRatioTransformer_trial_269/epoch007/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![269_epoch007_SR_bkg](../plots/calRatioTransformer_trial_269/epoch007/SR_pred_bkg.png) | ![269_epoch007_SR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch007/SR_pred_bkg_logY.png) |
> > | **BIB** | ![269_epoch007_SR_bib](../plots/calRatioTransformer_trial_269/epoch007/SR_pred_bib.png) | ![269_epoch007_SR_bib_logY](../plots/calRatioTransformer_trial_269/epoch007/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch007_CR_sig_logY](../plots/calRatioTransformer_trial_269/epoch007/CR_ttbar_pred_sig_logY.png) | ![269_epoch007_CR_sig_logX_logY](../plots/calRatioTransformer_trial_269/epoch007/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![269_epoch007_CR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch007/CR_ttbar_pred_bkg_logY.png) | ![269_epoch007_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_269/epoch007/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![269_epoch007_CR_bib_logY](../plots/calRatioTransformer_trial_269/epoch007/CR_ttbar_pred_bib_logY.png) | ![269_epoch007_CR_bib_logX_logY](../plots/calRatioTransformer_trial_269/epoch007/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 008
> > **ROC Curve**:
> > ![269_epoch008_ROC](../plots/calRatioTransformer_trial_269/epoch008/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch008_SR_sig](../plots/calRatioTransformer_trial_269/epoch008/SR_pred_sig.png) | ![269_epoch008_SR_sig_logY](../plots/calRatioTransformer_trial_269/epoch008/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![269_epoch008_SR_bkg](../plots/calRatioTransformer_trial_269/epoch008/SR_pred_bkg.png) | ![269_epoch008_SR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch008/SR_pred_bkg_logY.png) |
> > | **BIB** | ![269_epoch008_SR_bib](../plots/calRatioTransformer_trial_269/epoch008/SR_pred_bib.png) | ![269_epoch008_SR_bib_logY](../plots/calRatioTransformer_trial_269/epoch008/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch008_CR_sig_logY](../plots/calRatioTransformer_trial_269/epoch008/CR_ttbar_pred_sig_logY.png) | ![269_epoch008_CR_sig_logX_logY](../plots/calRatioTransformer_trial_269/epoch008/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![269_epoch008_CR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch008/CR_ttbar_pred_bkg_logY.png) | ![269_epoch008_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_269/epoch008/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![269_epoch008_CR_bib_logY](../plots/calRatioTransformer_trial_269/epoch008/CR_ttbar_pred_bib_logY.png) | ![269_epoch008_CR_bib_logX_logY](../plots/calRatioTransformer_trial_269/epoch008/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 009
> > **ROC Curve**:
> > ![269_epoch009_ROC](../plots/calRatioTransformer_trial_269/epoch009/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch009_SR_sig](../plots/calRatioTransformer_trial_269/epoch009/SR_pred_sig.png) | ![269_epoch009_SR_sig_logY](../plots/calRatioTransformer_trial_269/epoch009/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![269_epoch009_SR_bkg](../plots/calRatioTransformer_trial_269/epoch009/SR_pred_bkg.png) | ![269_epoch009_SR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch009/SR_pred_bkg_logY.png) |
> > | **BIB** | ![269_epoch009_SR_bib](../plots/calRatioTransformer_trial_269/epoch009/SR_pred_bib.png) | ![269_epoch009_SR_bib_logY](../plots/calRatioTransformer_trial_269/epoch009/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch009_CR_sig_logY](../plots/calRatioTransformer_trial_269/epoch009/CR_ttbar_pred_sig_logY.png) | ![269_epoch009_CR_sig_logX_logY](../plots/calRatioTransformer_trial_269/epoch009/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![269_epoch009_CR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch009/CR_ttbar_pred_bkg_logY.png) | ![269_epoch009_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_269/epoch009/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![269_epoch009_CR_bib_logY](../plots/calRatioTransformer_trial_269/epoch009/CR_ttbar_pred_bib_logY.png) | ![269_epoch009_CR_bib_logX_logY](../plots/calRatioTransformer_trial_269/epoch009/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 010
> > **ROC Curve**:
> > ![269_epoch010_ROC](../plots/calRatioTransformer_trial_269/epoch010/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch010_SR_sig](../plots/calRatioTransformer_trial_269/epoch010/SR_pred_sig.png) | ![269_epoch010_SR_sig_logY](../plots/calRatioTransformer_trial_269/epoch010/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![269_epoch010_SR_bkg](../plots/calRatioTransformer_trial_269/epoch010/SR_pred_bkg.png) | ![269_epoch010_SR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch010/SR_pred_bkg_logY.png) |
> > | **BIB** | ![269_epoch010_SR_bib](../plots/calRatioTransformer_trial_269/epoch010/SR_pred_bib.png) | ![269_epoch010_SR_bib_logY](../plots/calRatioTransformer_trial_269/epoch010/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch010_CR_sig_logY](../plots/calRatioTransformer_trial_269/epoch010/CR_ttbar_pred_sig_logY.png) | ![269_epoch010_CR_sig_logX_logY](../plots/calRatioTransformer_trial_269/epoch010/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![269_epoch010_CR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch010/CR_ttbar_pred_bkg_logY.png) | ![269_epoch010_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_269/epoch010/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![269_epoch010_CR_bib_logY](../plots/calRatioTransformer_trial_269/epoch010/CR_ttbar_pred_bib_logY.png) | ![269_epoch010_CR_bib_logX_logY](../plots/calRatioTransformer_trial_269/epoch010/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 011
> > **ROC Curve**:
> > ![269_epoch011_ROC](../plots/calRatioTransformer_trial_269/epoch011/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch011_SR_sig](../plots/calRatioTransformer_trial_269/epoch011/SR_pred_sig.png) | ![269_epoch011_SR_sig_logY](../plots/calRatioTransformer_trial_269/epoch011/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![269_epoch011_SR_bkg](../plots/calRatioTransformer_trial_269/epoch011/SR_pred_bkg.png) | ![269_epoch011_SR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch011/SR_pred_bkg_logY.png) |
> > | **BIB** | ![269_epoch011_SR_bib](../plots/calRatioTransformer_trial_269/epoch011/SR_pred_bib.png) | ![269_epoch011_SR_bib_logY](../plots/calRatioTransformer_trial_269/epoch011/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch011_CR_sig_logY](../plots/calRatioTransformer_trial_269/epoch011/CR_ttbar_pred_sig_logY.png) | ![269_epoch011_CR_sig_logX_logY](../plots/calRatioTransformer_trial_269/epoch011/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![269_epoch011_CR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch011/CR_ttbar_pred_bkg_logY.png) | ![269_epoch011_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_269/epoch011/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![269_epoch011_CR_bib_logY](../plots/calRatioTransformer_trial_269/epoch011/CR_ttbar_pred_bib_logY.png) | ![269_epoch011_CR_bib_logX_logY](../plots/calRatioTransformer_trial_269/epoch011/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 012
> > **ROC Curve**:
> > ![269_epoch012_ROC](../plots/calRatioTransformer_trial_269/epoch012/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch012_SR_sig](../plots/calRatioTransformer_trial_269/epoch012/SR_pred_sig.png) | ![269_epoch012_SR_sig_logY](../plots/calRatioTransformer_trial_269/epoch012/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![269_epoch012_SR_bkg](../plots/calRatioTransformer_trial_269/epoch012/SR_pred_bkg.png) | ![269_epoch012_SR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch012/SR_pred_bkg_logY.png) |
> > | **BIB** | ![269_epoch012_SR_bib](../plots/calRatioTransformer_trial_269/epoch012/SR_pred_bib.png) | ![269_epoch012_SR_bib_logY](../plots/calRatioTransformer_trial_269/epoch012/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch012_CR_sig_logY](../plots/calRatioTransformer_trial_269/epoch012/CR_ttbar_pred_sig_logY.png) | ![269_epoch012_CR_sig_logX_logY](../plots/calRatioTransformer_trial_269/epoch012/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![269_epoch012_CR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch012/CR_ttbar_pred_bkg_logY.png) | ![269_epoch012_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_269/epoch012/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![269_epoch012_CR_bib_logY](../plots/calRatioTransformer_trial_269/epoch012/CR_ttbar_pred_bib_logY.png) | ![269_epoch012_CR_bib_logX_logY](../plots/calRatioTransformer_trial_269/epoch012/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 013
> > **ROC Curve**:
> > ![269_epoch013_ROC](../plots/calRatioTransformer_trial_269/epoch013/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch013_SR_sig](../plots/calRatioTransformer_trial_269/epoch013/SR_pred_sig.png) | ![269_epoch013_SR_sig_logY](../plots/calRatioTransformer_trial_269/epoch013/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![269_epoch013_SR_bkg](../plots/calRatioTransformer_trial_269/epoch013/SR_pred_bkg.png) | ![269_epoch013_SR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch013/SR_pred_bkg_logY.png) |
> > | **BIB** | ![269_epoch013_SR_bib](../plots/calRatioTransformer_trial_269/epoch013/SR_pred_bib.png) | ![269_epoch013_SR_bib_logY](../plots/calRatioTransformer_trial_269/epoch013/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch013_CR_sig_logY](../plots/calRatioTransformer_trial_269/epoch013/CR_ttbar_pred_sig_logY.png) | ![269_epoch013_CR_sig_logX_logY](../plots/calRatioTransformer_trial_269/epoch013/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![269_epoch013_CR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch013/CR_ttbar_pred_bkg_logY.png) | ![269_epoch013_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_269/epoch013/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![269_epoch013_CR_bib_logY](../plots/calRatioTransformer_trial_269/epoch013/CR_ttbar_pred_bib_logY.png) | ![269_epoch013_CR_bib_logX_logY](../plots/calRatioTransformer_trial_269/epoch013/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 014
> > **ROC Curve**:
> > ![269_epoch014_ROC](../plots/calRatioTransformer_trial_269/epoch014/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch014_SR_sig](../plots/calRatioTransformer_trial_269/epoch014/SR_pred_sig.png) | ![269_epoch014_SR_sig_logY](../plots/calRatioTransformer_trial_269/epoch014/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![269_epoch014_SR_bkg](../plots/calRatioTransformer_trial_269/epoch014/SR_pred_bkg.png) | ![269_epoch014_SR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch014/SR_pred_bkg_logY.png) |
> > | **BIB** | ![269_epoch014_SR_bib](../plots/calRatioTransformer_trial_269/epoch014/SR_pred_bib.png) | ![269_epoch014_SR_bib_logY](../plots/calRatioTransformer_trial_269/epoch014/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![269_epoch014_CR_sig_logY](../plots/calRatioTransformer_trial_269/epoch014/CR_ttbar_pred_sig_logY.png) | ![269_epoch014_CR_sig_logX_logY](../plots/calRatioTransformer_trial_269/epoch014/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![269_epoch014_CR_bkg_logY](../plots/calRatioTransformer_trial_269/epoch014/CR_ttbar_pred_bkg_logY.png) | ![269_epoch014_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_269/epoch014/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![269_epoch014_CR_bib_logY](../plots/calRatioTransformer_trial_269/epoch014/CR_ttbar_pred_bib_logY.png) | ![269_epoch014_CR_bib_logX_logY](../plots/calRatioTransformer_trial_269/epoch014/CR_ttbar_pred_bib_logX_logY.png) |
>


> [!abstract]- Trial 300 (max_epochs=15, SR Loss=0.54109, CR Loss=0.38884)
> **Dedicated Note**: [Open Trial 300 Full Note](Optimized%20Models/Trial%20300.md) | **Regime**: Central balanced knee
>
> > [!note]- Epoch 005
> > **ROC Curve**:
> > ![300_epoch005_ROC](../plots/calRatioTransformer_trial_300/epoch005/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch005_SR_sig](../plots/calRatioTransformer_trial_300/epoch005/SR_pred_sig.png) | ![300_epoch005_SR_sig_logY](../plots/calRatioTransformer_trial_300/epoch005/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![300_epoch005_SR_bkg](../plots/calRatioTransformer_trial_300/epoch005/SR_pred_bkg.png) | ![300_epoch005_SR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch005/SR_pred_bkg_logY.png) |
> > | **BIB** | ![300_epoch005_SR_bib](../plots/calRatioTransformer_trial_300/epoch005/SR_pred_bib.png) | ![300_epoch005_SR_bib_logY](../plots/calRatioTransformer_trial_300/epoch005/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch005_CR_sig_logY](../plots/calRatioTransformer_trial_300/epoch005/CR_ttbar_pred_sig_logY.png) | ![300_epoch005_CR_sig_logX_logY](../plots/calRatioTransformer_trial_300/epoch005/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![300_epoch005_CR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch005/CR_ttbar_pred_bkg_logY.png) | ![300_epoch005_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_300/epoch005/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![300_epoch005_CR_bib_logY](../plots/calRatioTransformer_trial_300/epoch005/CR_ttbar_pred_bib_logY.png) | ![300_epoch005_CR_bib_logX_logY](../plots/calRatioTransformer_trial_300/epoch005/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 006
> > **ROC Curve**:
> > ![300_epoch006_ROC](../plots/calRatioTransformer_trial_300/epoch006/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch006_SR_sig](../plots/calRatioTransformer_trial_300/epoch006/SR_pred_sig.png) | ![300_epoch006_SR_sig_logY](../plots/calRatioTransformer_trial_300/epoch006/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![300_epoch006_SR_bkg](../plots/calRatioTransformer_trial_300/epoch006/SR_pred_bkg.png) | ![300_epoch006_SR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch006/SR_pred_bkg_logY.png) |
> > | **BIB** | ![300_epoch006_SR_bib](../plots/calRatioTransformer_trial_300/epoch006/SR_pred_bib.png) | ![300_epoch006_SR_bib_logY](../plots/calRatioTransformer_trial_300/epoch006/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch006_CR_sig_logY](../plots/calRatioTransformer_trial_300/epoch006/CR_ttbar_pred_sig_logY.png) | ![300_epoch006_CR_sig_logX_logY](../plots/calRatioTransformer_trial_300/epoch006/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![300_epoch006_CR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch006/CR_ttbar_pred_bkg_logY.png) | ![300_epoch006_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_300/epoch006/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![300_epoch006_CR_bib_logY](../plots/calRatioTransformer_trial_300/epoch006/CR_ttbar_pred_bib_logY.png) | ![300_epoch006_CR_bib_logX_logY](../plots/calRatioTransformer_trial_300/epoch006/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 007
> > **ROC Curve**:
> > ![300_epoch007_ROC](../plots/calRatioTransformer_trial_300/epoch007/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch007_SR_sig](../plots/calRatioTransformer_trial_300/epoch007/SR_pred_sig.png) | ![300_epoch007_SR_sig_logY](../plots/calRatioTransformer_trial_300/epoch007/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![300_epoch007_SR_bkg](../plots/calRatioTransformer_trial_300/epoch007/SR_pred_bkg.png) | ![300_epoch007_SR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch007/SR_pred_bkg_logY.png) |
> > | **BIB** | ![300_epoch007_SR_bib](../plots/calRatioTransformer_trial_300/epoch007/SR_pred_bib.png) | ![300_epoch007_SR_bib_logY](../plots/calRatioTransformer_trial_300/epoch007/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch007_CR_sig_logY](../plots/calRatioTransformer_trial_300/epoch007/CR_ttbar_pred_sig_logY.png) | ![300_epoch007_CR_sig_logX_logY](../plots/calRatioTransformer_trial_300/epoch007/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![300_epoch007_CR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch007/CR_ttbar_pred_bkg_logY.png) | ![300_epoch007_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_300/epoch007/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![300_epoch007_CR_bib_logY](../plots/calRatioTransformer_trial_300/epoch007/CR_ttbar_pred_bib_logY.png) | ![300_epoch007_CR_bib_logX_logY](../plots/calRatioTransformer_trial_300/epoch007/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 008
> > **ROC Curve**:
> > ![300_epoch008_ROC](../plots/calRatioTransformer_trial_300/epoch008/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch008_SR_sig](../plots/calRatioTransformer_trial_300/epoch008/SR_pred_sig.png) | ![300_epoch008_SR_sig_logY](../plots/calRatioTransformer_trial_300/epoch008/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![300_epoch008_SR_bkg](../plots/calRatioTransformer_trial_300/epoch008/SR_pred_bkg.png) | ![300_epoch008_SR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch008/SR_pred_bkg_logY.png) |
> > | **BIB** | ![300_epoch008_SR_bib](../plots/calRatioTransformer_trial_300/epoch008/SR_pred_bib.png) | ![300_epoch008_SR_bib_logY](../plots/calRatioTransformer_trial_300/epoch008/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch008_CR_sig_logY](../plots/calRatioTransformer_trial_300/epoch008/CR_ttbar_pred_sig_logY.png) | ![300_epoch008_CR_sig_logX_logY](../plots/calRatioTransformer_trial_300/epoch008/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![300_epoch008_CR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch008/CR_ttbar_pred_bkg_logY.png) | ![300_epoch008_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_300/epoch008/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![300_epoch008_CR_bib_logY](../plots/calRatioTransformer_trial_300/epoch008/CR_ttbar_pred_bib_logY.png) | ![300_epoch008_CR_bib_logX_logY](../plots/calRatioTransformer_trial_300/epoch008/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 009
> > **ROC Curve**:
> > ![300_epoch009_ROC](../plots/calRatioTransformer_trial_300/epoch009/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch009_SR_sig](../plots/calRatioTransformer_trial_300/epoch009/SR_pred_sig.png) | ![300_epoch009_SR_sig_logY](../plots/calRatioTransformer_trial_300/epoch009/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![300_epoch009_SR_bkg](../plots/calRatioTransformer_trial_300/epoch009/SR_pred_bkg.png) | ![300_epoch009_SR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch009/SR_pred_bkg_logY.png) |
> > | **BIB** | ![300_epoch009_SR_bib](../plots/calRatioTransformer_trial_300/epoch009/SR_pred_bib.png) | ![300_epoch009_SR_bib_logY](../plots/calRatioTransformer_trial_300/epoch009/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch009_CR_sig_logY](../plots/calRatioTransformer_trial_300/epoch009/CR_ttbar_pred_sig_logY.png) | ![300_epoch009_CR_sig_logX_logY](../plots/calRatioTransformer_trial_300/epoch009/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![300_epoch009_CR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch009/CR_ttbar_pred_bkg_logY.png) | ![300_epoch009_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_300/epoch009/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![300_epoch009_CR_bib_logY](../plots/calRatioTransformer_trial_300/epoch009/CR_ttbar_pred_bib_logY.png) | ![300_epoch009_CR_bib_logX_logY](../plots/calRatioTransformer_trial_300/epoch009/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 010
> > **ROC Curve**:
> > ![300_epoch010_ROC](../plots/calRatioTransformer_trial_300/epoch010/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch010_SR_sig](../plots/calRatioTransformer_trial_300/epoch010/SR_pred_sig.png) | ![300_epoch010_SR_sig_logY](../plots/calRatioTransformer_trial_300/epoch010/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![300_epoch010_SR_bkg](../plots/calRatioTransformer_trial_300/epoch010/SR_pred_bkg.png) | ![300_epoch010_SR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch010/SR_pred_bkg_logY.png) |
> > | **BIB** | ![300_epoch010_SR_bib](../plots/calRatioTransformer_trial_300/epoch010/SR_pred_bib.png) | ![300_epoch010_SR_bib_logY](../plots/calRatioTransformer_trial_300/epoch010/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch010_CR_sig_logY](../plots/calRatioTransformer_trial_300/epoch010/CR_ttbar_pred_sig_logY.png) | ![300_epoch010_CR_sig_logX_logY](../plots/calRatioTransformer_trial_300/epoch010/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![300_epoch010_CR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch010/CR_ttbar_pred_bkg_logY.png) | ![300_epoch010_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_300/epoch010/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![300_epoch010_CR_bib_logY](../plots/calRatioTransformer_trial_300/epoch010/CR_ttbar_pred_bib_logY.png) | ![300_epoch010_CR_bib_logX_logY](../plots/calRatioTransformer_trial_300/epoch010/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 011
> > **ROC Curve**:
> > ![300_epoch011_ROC](../plots/calRatioTransformer_trial_300/epoch011/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch011_SR_sig](../plots/calRatioTransformer_trial_300/epoch011/SR_pred_sig.png) | ![300_epoch011_SR_sig_logY](../plots/calRatioTransformer_trial_300/epoch011/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![300_epoch011_SR_bkg](../plots/calRatioTransformer_trial_300/epoch011/SR_pred_bkg.png) | ![300_epoch011_SR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch011/SR_pred_bkg_logY.png) |
> > | **BIB** | ![300_epoch011_SR_bib](../plots/calRatioTransformer_trial_300/epoch011/SR_pred_bib.png) | ![300_epoch011_SR_bib_logY](../plots/calRatioTransformer_trial_300/epoch011/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch011_CR_sig_logY](../plots/calRatioTransformer_trial_300/epoch011/CR_ttbar_pred_sig_logY.png) | ![300_epoch011_CR_sig_logX_logY](../plots/calRatioTransformer_trial_300/epoch011/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![300_epoch011_CR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch011/CR_ttbar_pred_bkg_logY.png) | ![300_epoch011_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_300/epoch011/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![300_epoch011_CR_bib_logY](../plots/calRatioTransformer_trial_300/epoch011/CR_ttbar_pred_bib_logY.png) | ![300_epoch011_CR_bib_logX_logY](../plots/calRatioTransformer_trial_300/epoch011/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 012
> > **ROC Curve**:
> > ![300_epoch012_ROC](../plots/calRatioTransformer_trial_300/epoch012/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch012_SR_sig](../plots/calRatioTransformer_trial_300/epoch012/SR_pred_sig.png) | ![300_epoch012_SR_sig_logY](../plots/calRatioTransformer_trial_300/epoch012/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![300_epoch012_SR_bkg](../plots/calRatioTransformer_trial_300/epoch012/SR_pred_bkg.png) | ![300_epoch012_SR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch012/SR_pred_bkg_logY.png) |
> > | **BIB** | ![300_epoch012_SR_bib](../plots/calRatioTransformer_trial_300/epoch012/SR_pred_bib.png) | ![300_epoch012_SR_bib_logY](../plots/calRatioTransformer_trial_300/epoch012/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch012_CR_sig_logY](../plots/calRatioTransformer_trial_300/epoch012/CR_ttbar_pred_sig_logY.png) | ![300_epoch012_CR_sig_logX_logY](../plots/calRatioTransformer_trial_300/epoch012/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![300_epoch012_CR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch012/CR_ttbar_pred_bkg_logY.png) | ![300_epoch012_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_300/epoch012/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![300_epoch012_CR_bib_logY](../plots/calRatioTransformer_trial_300/epoch012/CR_ttbar_pred_bib_logY.png) | ![300_epoch012_CR_bib_logX_logY](../plots/calRatioTransformer_trial_300/epoch012/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 013
> > **ROC Curve**:
> > ![300_epoch013_ROC](../plots/calRatioTransformer_trial_300/epoch013/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch013_SR_sig](../plots/calRatioTransformer_trial_300/epoch013/SR_pred_sig.png) | ![300_epoch013_SR_sig_logY](../plots/calRatioTransformer_trial_300/epoch013/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![300_epoch013_SR_bkg](../plots/calRatioTransformer_trial_300/epoch013/SR_pred_bkg.png) | ![300_epoch013_SR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch013/SR_pred_bkg_logY.png) |
> > | **BIB** | ![300_epoch013_SR_bib](../plots/calRatioTransformer_trial_300/epoch013/SR_pred_bib.png) | ![300_epoch013_SR_bib_logY](../plots/calRatioTransformer_trial_300/epoch013/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch013_CR_sig_logY](../plots/calRatioTransformer_trial_300/epoch013/CR_ttbar_pred_sig_logY.png) | ![300_epoch013_CR_sig_logX_logY](../plots/calRatioTransformer_trial_300/epoch013/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![300_epoch013_CR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch013/CR_ttbar_pred_bkg_logY.png) | ![300_epoch013_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_300/epoch013/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![300_epoch013_CR_bib_logY](../plots/calRatioTransformer_trial_300/epoch013/CR_ttbar_pred_bib_logY.png) | ![300_epoch013_CR_bib_logX_logY](../plots/calRatioTransformer_trial_300/epoch013/CR_ttbar_pred_bib_logX_logY.png) |
>
> > [!note]- Epoch 014
> > **ROC Curve**:
> > ![300_epoch014_ROC](../plots/calRatioTransformer_trial_300/epoch014/ROC.png)
> >
> > **Signal Region (SR) Predictions**:
> > | Class | Linear | Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch014_SR_sig](../plots/calRatioTransformer_trial_300/epoch014/SR_pred_sig.png) | ![300_epoch014_SR_sig_logY](../plots/calRatioTransformer_trial_300/epoch014/SR_pred_sig_logY.png) |
> > | **QCD Bkg** | ![300_epoch014_SR_bkg](../plots/calRatioTransformer_trial_300/epoch014/SR_pred_bkg.png) | ![300_epoch014_SR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch014/SR_pred_bkg_logY.png) |
> > | **BIB** | ![300_epoch014_SR_bib](../plots/calRatioTransformer_trial_300/epoch014/SR_pred_bib.png) | ![300_epoch014_SR_bib_logY](../plots/calRatioTransformer_trial_300/epoch014/SR_pred_bib_logY.png) |
> >
> > **Control Region ($t\bar{t}$ CR) Predictions**:
> > | Class | Log Y | Log X & Log Y |
> > | :--- | :---: | :---: |
> > | **Signal** | ![300_epoch014_CR_sig_logY](../plots/calRatioTransformer_trial_300/epoch014/CR_ttbar_pred_sig_logY.png) | ![300_epoch014_CR_sig_logX_logY](../plots/calRatioTransformer_trial_300/epoch014/CR_ttbar_pred_sig_logX_logY.png) |
> > | **QCD Bkg** | ![300_epoch014_CR_bkg_logY](../plots/calRatioTransformer_trial_300/epoch014/CR_ttbar_pred_bkg_logY.png) | ![300_epoch014_CR_bkg_logX_logY](../plots/calRatioTransformer_trial_300/epoch014/CR_ttbar_pred_bkg_logX_logY.png) |
> > | **BIB** | ![300_epoch014_CR_bib_logY](../plots/calRatioTransformer_trial_300/epoch014/CR_ttbar_pred_bib_logY.png) | ![300_epoch014_CR_bib_logX_logY](../plots/calRatioTransformer_trial_300/epoch014/CR_ttbar_pred_bib_logX_logY.png) |
>

