# GIT-Y2 — 黒磯島（Kuroiso-jima / 1985年廃村）3D 孤島探索プロジェクト

周囲を見渡す限りの外洋に囲まれた **3km × 6km（18km²）** の超リアル火山孤島「黒磯島（1800年代後半開村・1890年炭鉱開坑・1985年廃村）」を、スマホ横画面全画面表示＆一人称視点で探索できる 3D 廃村探索ゲームです。  
全テクスチャは [`assets/textures/`](assets/textures/) の支給画像36枚から抽出した 212 枚の WebP タイルのみを使用しています。

- **公開ページ（GitHub Pages / `main` 直配信）**: https://sc8z35a-collab.github.io/GIT-Y2/

## 現在の実装状況（3km×6km 超リアル火山地形＆全32/32拠点 完全公開）
- **3km × 6km（18km²）超リアル火山・構造地形 (`src/world/terrainMath.ts`, `src/world/terrainStreamer.ts`)**:
  - ドメインワープ構造尾根・リアス式海岸線（北西リアス湾・漂着湾＆双子南岬「西黒崎」「東白浜岬」・東西入江）・**北カルデラ爆裂火口＆外輪山**・**東観音連峰＆隆起海岸段丘**・**西屏風連山**・4水系V字渓谷・雨水侵食ガリー・海食棚を実装。
  - **5段階マルチLOD（24×48 = 1,152区画・毎フレーム 4.2ms 予算）** ＋ **12バイオーム地層PBRシェーダー**（37°回転アンチタイリング・玄武岩/縞状凝灰岩/酸化鉄岩の三平面地層ブレンド・斜面方位マイクロクライメート・動的濡れ粗さ・Mikkelsen画面空間微分マイクロバンプ法線）で圧倒的な実在感と高FPSを両立。
  - 漂着浜（2.2m）から黒磯岳主峰（**865.0m**）、北カルデラ外輪山展望（492m）、東展望断崖（159m）、西屏風大展望台（501m）、秘境旧港（2.8m）、1890炭鉱（348m）まで **全11本の村道・林道・縦走獣道** がすべて徒歩踏破可能（最大勾配 `<= 25.8°`）。
- **32樹種・4〜15本枝分かれ・現実密度の超軽量森林 (`src/world/treeArchetypes.ts`, `src/world/foliageStreamer.ts`)**:
  - 杉・檜・黒松・広葉樹・低木・古木の **32種**（全種4〜15本枝分かれ・樹高 `3.4m〜25.5m`）を区画あたり僅か3ドローコールへ静的GPU統合し、3km×6km の遠方連峰まで現実密度の緑をシームレスにストリーミング。
- **完全手作業・非テンプレートの明治〜昭和伝統瓦木造民家 全25棟（2〜4階建・全室入室＆階段昇降対応）**:
  - 下段斜面道（8棟）: `H01` 浜田家, `H02` 磯部家, `H03` 高木家, `H04` 岩崎家, `H05` 佐伯家, `H06` 藤原家(水車小屋半崩落), `H07` 安藤家(★4F懸造り360°回廊櫓), `H08` 永井家(教員宿舎＆補習教室)
  - 中段本通り（10棟）: `H09` 森本家, `H10` 白井医院, `H11` 黒田本家(★4F庄屋望楼), `H12` 松岡家, `H13` 神谷家, `H14` 村田家, `H15` 吉田家(空中渡り廊下), `H16` 田辺家(半地下石倉3F), `H17` 大野家(蔦全壊寸前廃墟), `H18` 杉山家(ノッチ丸太組木こり小屋)
  - 上段山腹道（7棟）: `H19` 小川家(3F懸造り木橋茶亭), `H20` 明治技師館(★4F角望楼), `H21` 第一坑夫長屋(幅19.6m三戸連棟), `H22` 黒岩監督邸(★4F懸造り), `H23` 鉄山鍛冶場, `H24` 炭鉱詰所兼独身寮(3F共同浴場＆4個室), `H25` 沢田小屋(巨大落石直撃半崩壊番小屋)
- **商業施設 全2軒（1F店舗〜2F居住/宴会階まで完全入室可能）**:
  - **`S01` 黒磯よろず商店・簡易郵便取扱所**（赤白縞テント庇・丸型ポスト・レジ台・冷蔵飲料ケース・郵便窓口・2F店主居宅）
  - **`S02` 炭鉱購買部・大衆食堂「みなとや」**（食堂暖簾・L字カウンター＆丸椅子・木札メニュー・炭鉱購買部・2F大宴会座敷）
- **秘境の旧港（`PORT01` 旧黒磯秘境港）**:
  - 北西リアス湾の天然入江に面した石造荷揚げ岸壁・**22m歩行可能木造旧桟橋**＆係留漁船「黒磯丸」・**17.5m石造防波堤＆登頂可能な2F旧石灯台**・**2F建海運倉庫・荷捌所**。
- **1890年開坑 地下炭鉱洞窟・交番・村営公園・子供たちの秘密基地（最終4大ランドマーク完遂）**:
  - **`M01` 旧黒磯炭鉱 第一坑口・地下坑道（1890年開坑）**: 切石＆赤煉瓦坑門・入室可能な安全灯室・全長 **135m** 地下坑道（坑木鳥居枠・半開鉄扉の赤煉瓦火薬庫・中央転車台＆捲揚機室・西水没排水ポンプ坑グレーチング歩廊・東1890年手掘り炭層＆「山の神」小祠・北22m斜坑→地下`-5.2m`大採炭空洞＆28m排気縦坑＆登れる鉄骨ホッパー歩廊）。入坑時は自動で暗黒霧＆携行カンテラ点灯！
  - **`K01` 黒磯駐在所（交番・1896年築）**: 村入口三叉路の白壁＆いぶし銀本瓦二階建、赤色丸型常夜灯・青ホーロー看板・屋外掲示板・巡回黒自転車置場・1F事務室＆鉄格子保護室・2F官舎＆バルコニー。
  - **`P01` 見晴らし村営公園（1964年整備）**: 苔石垣＆西石門・登って滑れる昭和レトロすべり台・二連ブランコ・3×3×3ジャングルジム・砂場＆シーソー・宝形本瓦東屋・白青タイル水飲み場・入室可能な公園管理小屋兼公衆便所。
  - **`B01` 子供たちの山奥の秘密基地（1980〜1985年）**: 苔巨岩の焚き火広場＆流木門・廃材トタン1F隠れ家（赤ラグ・漫画本棚・宝の地図黒板）・直径1.3mの古杉を抱く登れる2F樹上見張りやぐら！
- **KHDR（独自強化 16bit 線形 HDR）＆ Shadow Flame 1.0 Flash / Pro 独自シャドウエンジン (`src/core/khdrPipeline.ts`, `src/core/shadowFlame.ts`)**:
  - **KHDR (ON / OFF 切替)**: RGBA16F 線形HDR・Karis加重 Dual-Kawase 光学ブルーム・K-LHE 局所明暗平衡・K-Clarity 局所マイクロコントラスト・AgX着想色相保持 K-Filmic v1 カーブ＋抗バンディングディザ。
  - **Shadow Flame 1.0 Flash**: 1536² テンポラルキャッシュ＋6タップ IGN 回転 Vogel ディスク（標準 PCFSoft 比 -44%画素 / -33%フェッチ）＋大気青空散乱影。
  - **Shadow Flame 1.0 Pro**: 近景±50m（`4.8cm/texel`）＋遠景±245m デュアルカスケード・8探索＋16可変半径 SF-PCSS 物理接触硬化・画面空間 SF-MicroContact 微細接地影・山岳遠景セルフシャドウ・2色間接反射影。
- **スマホ横画面全画面 UI・解像度（HD / FHD / 1.5K）・120/無制限FPS・3km×6km 精密25m/100m等高線地形図 (`src/ui/hud.ts`, `src/main.ts`)**

## 設計図ドキュメント
- [`docs/01_terrain_blueprint.md`](docs/01_terrain_blueprint.md) — 初期 2km×5km 地形・道路・獣道・32区画配置・最適化設計図
- [`docs/02_buildings_blueprints.md`](docs/02_buildings_blueprints.md) — 全25棟民家＋2棟商業施設マスター間取り設計図
- [`docs/03_coal_mine_blueprint.md`](docs/03_coal_mine_blueprint.md) — 1890年開坑 旧黒磯炭鉱 構想設計図
- [`docs/03_phase3_3houses_design.md`](docs/03_phase3_3houses_design.md) — 追加3棟（`H13`・`H20`・`H23`）精密設計書
- [`docs/05_finale_houses_shops_port_blueprint.md`](docs/05_finale_houses_shops_port_blueprint.md) — 最終4民家・商業施設2軒・秘境旧港 完全設計書
- [`docs/06_mine_koban_park_secretbase_blueprint.md`](docs/06_mine_koban_park_secretbase_blueprint.md) — 1890年炭鉱地下坑道・駐在所・村営公園・秘密基地 完全設計書
- [`docs/07_3x6km_hyper_realistic_terrain_plan.md`](docs/07_3x6km_hyper_realistic_terrain_plan.md) — 3km×6km（18km²）超リアル火山・構造地形研究＆実装設計書
- [`docs/08_khdr_and_shadow_flame_architecture.md`](docs/08_khdr_and_shadow_flame_architecture.md) — KHDR（独自強化HDR）＆ Shadow Flame 1.0 Flash / Pro 独自シャドウ技術設計書
- [`docs/09_khdr_1_1_and_shadow_flame_1_1_research.md`](docs/09_khdr_1_1_and_shadow_flame_1_1_research.md) — KHDR 1.1 ＆ Shadow Flame 1.1 研究レポート
- [`docs/10_khdr_1_2_hyper_research_plan.md`](docs/10_khdr_1_2_hyper_research_plan.md) — KHDR 1.2 hyper 研究・設計計画書（POCO F7 向け、KHDR 1.3 展望つき。実験コードは [`docs/research/khdr_1_2/`](docs/research/khdr_1_2/)）

## 開発・ビルド方法
```bash
npm install
npm run dev     # ローカル開発サーバー起動 (dev.html)
npm run build   # TypeScript型検査 + 本番ビルド (dist/ & GitHub Pages用 index.html 自動同期)
```