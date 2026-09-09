# Investigation Report: Discrepancy Between Native Test Inference and ONNX Export

### 1. Overview and Key Finding

When running inference on the test dataset (`signal_test.h5`) using `salt_cpm test`, the model classified jet `eventNumber 47639` (index 1674) strongly as **Signal** (`pSignal = 0.999512`). However, the exported ONNX model and the standalone comparison script classified the exact same jet as **QCD** (`pQCD = 0.915618`, `pSignal = 0.000271`).

**Key findings:**
- **FlashAttention kernel numerics are NOT the cause**: when provided identical constituent tokens, `flash-varlen` (FP16) matches `torch-math` (FP32) and ONNX to within **0.0001 (0.01%)**.
- The discrepancy is caused by a **silent dictionary key-order mismatch between `init_nets` and `data.variables`** in the model configuration.
- During training and `salt_cpm test`, this mismatch scrambled the constituent padding mask inside `undo_padding`, dropping real muon segments and substituting all-zero padding tracks in their place.
- The model learned under this scrambled condition. ONNX, which receives cleanly packed unpadded tokens, evaluated the true constituent features and correctly predicted QCD.

---

### 2. Numerical Comparison Table (Event 47639)

| Evaluation Mode | Attention Backend | Input Format | pQCD | pSignal | pBIB |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **salt_cpm test (`signal_test_pred.h5`)** | `flash-varlen` (FP16) | `SaltDataset` (padded) | **0.000169** | **0.999512** | **0.000272** |
| **PyTorch test (default mask order)** | `flash-varlen` (FP16) | `SaltDataset` (padded) | **0.000169** | **0.999559** | **0.000272** |
| **PyTorch test (aligned mask order)** | `flash-varlen` (FP16) | `SaltDataset` (padded) | **0.953428** | **0.000429** | **0.046143** |
| **Standalone PyTorch (`flash-varlen`)** | `flash-varlen` (FP16) | Unpadded (valid only) | **0.915527** | **0.000271** | **0.084045** |
| **Standalone PyTorch (`torch-math`)** | `torch-math` (FP32) | Unpadded (valid only) | **0.915618** | **0.000271** | **0.084111** |
| **ONNX Runtime** | `torch-math` (FP32) | Unpadded (valid only) | **0.915618** | **0.000271** | **0.084111** |

---

### 3. Detailed Mechanism of the Bug

#### Step 1: Configuration Key-Order Divergence
In the training configuration (`calRatioTransformer_20260814-T182555/config.yaml`):
- `init_nets` specified input stream projections in this order:
  ```yaml
  init_nets:
    - input_name: tracks
    - input_name: msegs
    - input_name: clusters
  ```
- `data.variables` specified input feature mappings in this order:
  ```yaml
  data:
    variables:
      msegs: [...]
      jets: [...]
      tracks: [...]
      clusters: [...]
  ```

#### Step 2: Dataloader Insertion Order
In `SaltDataset.__getitem__`, the dictionary of boolean padding masks (`pad_masks`) is constructed by iterating over `self.input_map`, which preserves the insertion order of `data.variables`:
```python
pad_masks keys: ['msegs', 'tracks', 'clusters']
```

#### Step 3: Concatenation Inside Transformer Encoder
In `Transformer.forward` (`salt/models/transformer.py`):
```python
if isinstance(x, dict):
    x = torch.cat(list(x.values()), dim=1)
mask = torch.cat(list(pad_mask.values()), dim=1) if isinstance(pad_mask, dict) else pad_mask
```
- `x` concatenated in `init_nets` order:
  `[tracks (20), msegs (30), clusters (30), registers (1)]` (81 tokens total)
- `mask` concatenated in `pad_masks` order:
  `[msegs_mask (30), tracks_mask (20), clusters_mask (30), registers_mask (1)]` (81 tokens total)

Because the slice sizes differ (`tracks` has 20 elements, while `msegs` has 30 elements), the mask slices were completely out of alignment with the token slices!

#### Step 4: Token Slicing in `flash-varlen`
In `flash-varlen`, variable-length packing calls `undo_padding(x, mask)`, which evaluates `x[~mask]`:
- For event 47639:
  - Valid counts: **0 tracks, 9 muon segments, 13 clusters**.
  - `msegs_mask` has 9 valid flags at indices 0 to 8, followed by 21 padded flags.
  - `tracks_mask` has all 20 flags marked as padded.
- Because `mask` placed `msegs_mask` at positions 0 to 29:
  - It selected the first 9 positions from the `tracks` slice of `x`. Because tracks had 0 valid constituents, these were **all-zero dummy padding tokens**.
  - The actual 9 valid muon segments (located at positions 20 to 28 of `x`) landed on padded mask flags and were **completely dropped**.
  - The transformer encoder processed: **9 fake zero-track tokens, 0 muon segments, and 13 clusters**.

#### Step 5: Why `salt_cpm test` Output Matches Training
The model was trained from scratch under this exact same configuration. The neural network weights learned to associate that specific scrambled zero-token pattern with Signal. Running `salt_cpm test` on the padded HDF5 file reproduced this exact training artifact, yielding `pSignal = 0.999512`.

#### Step 6: Why ONNX and Standalone Inference Predict QCD
During ONNX export (`to_onnx.py`):
- Inputs are variable-length unpadded tensors: **0 tracks, 13 clusters, 9 muon segments**.
- No padding masks or `undo_padding` are used; each input stream is projected by its corresponding `init_net`.
- The encoder receives the true constituent features (9 real muon segments + 13 real clusters).
- Evaluated on the physical input data, the network assigns `pQCD = 0.915618` and `pSignal = 0.000271`.

---

### 4. Experimental Proof on GPU

We isolated the effect by testing the exact same padded batch from `SaltDataset` under three conditions:

1. **Original dictionary order (`msegs`, `tracks`, `clusters`)**:
   `[pQCD, pSignal, pBIB] = [0.000169, 0.999559, 0.000272]`
   *(Exact match to `salt_cpm test` / `signal_test_pred.h5`)*

2. **Reordering mask keys to match `init_nets` (`tracks`, `msegs`, `clusters`)**:
   `[pQCD, pSignal, pBIB] = [0.953428, 0.000429, 0.046143]`
   *(The prediction immediately flips from 99.95% Signal to 95.34% QCD, converging with ONNX)*

3. **Feeding unpadded valid tokens to PyTorch `flash-varlen`**:
   `[pQCD, pSignal, pBIB] = [0.915527, 0.000271, 0.084045]`
   *(Matches ONNX to within 0.0001)*

---

### 5. Action Items and Fixes

1. **Constituent Ordering in Configs**:
   - Reordered `init_nets` across all configuration files to follow detector geometry:
     **Inner Detector (`tracks`) -> Calorimeter (`clusters`) -> Muon Spectrometer (`msegs`)**.
   - Reordered `data.variables` to match: `[jets, tracks, clusters, msegs]`.

2. **`data_prep` Variable Ordering**:
   - Updated `data_prep/constants.py` so that feature lists (`CLUSTER_VARS`, `MSEG_VARS`, `JET_VARS`, `TRAINING_VARS`) follow the alphabetical order defined in `calRatio.yaml`.

3. **Model Retraining**:
   - Models trained with the old configuration learned on scrambled constituent tokens. To ensure consistent physics between native PyTorch training, offline test evaluation, and ONNX Athena inference, models should be trained with the updated configuration.
