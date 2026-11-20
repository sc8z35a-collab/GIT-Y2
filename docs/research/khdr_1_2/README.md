# KHDR 1.2 hyper 研究用の再現コード

[`docs/10_khdr_1_2_hyper_research_plan.md`](../../10_khdr_1_2_hyper_research_plan.md) の数値実験（E1〜E10）を再現するための Python スクリプトです。
**ゲーム本体のコードではありません**（`src/` やビルドには一切関係しません）。

| スクリプト | 内容 | 出力 |
| :--- | :--- | :--- |
| `colorlib.py` | 色空間（Oklab / ICtCp / P3 / Rec.2020）、KHDR 1.0・1.1 のトーンマップの移植、ACES / AgX / PBR Neutral（three.js 版）、GT7（MIT サンプルの移植） | — |
| `kfilmic3.py` | K-Filmic v3 の研究用試作（GT 曲線 × Oklab 定色相 × 色域圧縮） | — |
| `e1_bloom_prefilter.py` | E1: ブルーム前段フィルタの時間安定性 | `results/e1_bloom_prefilter.txt` |
| `e2_tonemappers.py` / `e2b_ranges.py` | E2: トーンマッパーの色相・コントラスト・彩度の比較 | `results/e2*.txt` |
| `e3_lut.py` / `e3b_lut.py` | E3: 3D LUT への焼き込み精度（コード値と ΔE_ITP） | `results/e3*.txt` |
| `e4_banding.py` | E4: 空のグラデーションの縞（RGBA16F と R11G11B10F の比較） | `results/e4_banding.txt` |
| `e5_budget.py` | E5 / E9 / E10: 帯域モデル、深度精度、FP16 の輝度レンジ | `results/e5_budget.txt` |
| `e6_local_tm.py` | E6: 局所トーンマップの試作（実テクスチャで作った窓のある和室） | `results/e6_local_tm.txt`、`results/e6_*.webp` |
| `e7_metering.py` | E7: パン中の測光の安定性 | `results/e7_metering.txt` |
| `e8_albedo.py` | E8: 212 枚のタイルのアルベド監査 | `results/e8_albedo.txt` |

## 実行方法
リポジトリのルートで実行します（必要なのは Python 3、`numpy`、`Pillow`）。

```bash
python3 -I docs/research/khdr_1_2/e2_tonemappers.py
```

## ライセンス表記
`colorlib.py` の `GT7` クラスは、Polyphony Digital Inc. が SIGGRAPH 2025 PBS Course で公開した
`gt7_tone_mapping.cpp`（MIT License, Copyright (c) 2025 Polyphony Digital Inc.）の移植です。著作権表示と許諾表示はファイル内に同梱しています。
