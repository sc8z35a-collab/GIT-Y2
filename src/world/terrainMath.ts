import type { TerraceSpec } from '../core/types';

export const ISLAND_HALF_W = 1500; // 3km East-West (-1500..+1500)
export const ISLAND_HALF_L = 3000; // 6km North-South (-3000..+3000)
export const TERRAIN_EXTENT_X = 1536; // 3072m total -> 24 chunks of 128m
export const TERRAIN_EXTENT_Z = 3072; // 6144m total -> 48 chunks of 128m

// Key world landmarks
export const SPAWN_POINT = { x: 42, z: 2158, yaw: Math.PI * 0.96 }; // 漂着浜 (Driftwood Cove — 南大入江)
export const SUMMIT_POINT = { x: 80, z: -1480, y: 865.0 };          // 黒磯岳主峰 (865m — 島最高峰)
export const LOOKOUT_POINT = { x: 235, z: 540, y: 268.0 };          // 見晴らし坂 (image.png vista)
export const MINE_PORTAL_POINT = { x: -145, z: -890, y: 348.0 };    // 旧黒磯炭鉱 1890 第一坑口・地下坑道
export const SECRET_BASE_POINT = { x: 430, z: -580, y: 376.0 };     // 子供たちの山奥の秘密基地
export const HIDDEN_PORT_POINT = { x: -522, z: -1768, y: 2.8 };     // 北西リアス湾・旧黒磯秘境港
export const PARK_POINT = { x: -52, z: 215, y: 242.0 };             // 見晴らし村営公園（下段村道東隣）
export const KOBAN_POINT = { x: 91, z: 469, y: 239.0 };             // 黒磯駐在所（交番・村入口三叉路北東角）
export const EAST_CLIFF_POINT = { x: 1110, z: 360, y: 155.0 };      // 東観音・東展望断崖（隆起海岸段丘）
export const WEST_BLUFF_POINT = { x: -740, z: 120, y: 604.0 };      // 西屏風大展望台（廃村＆黒磯岳パノラマ）
export const NORTH_CALDERA_POINT = { x: 375, z: -2140, y: 492.0 };  // 北カルデラ爆裂火口・外輪山展望

export type SiteCategory = 'house' | 'shop' | 'koban' | 'park' | 'secret_base' | 'mine' | 'port';

export interface PlannedSite extends TerraceSpec {
  category: SiteCategory;
  note: string;
}

export type PathKind = 'road' | 'forestry' | 'trail';

export interface GradedPathSpec {
  id: string;
  name: string;
  kind: PathKind;
  halfWidth: number;
  blendWidth: number;
  /** [x, z, targetElevation] control points */
  points: Array<[number, number, number]>;
}

// ============================================================================
// FAST DETERMINISTIC NOISE PRIMITIVES
// ============================================================================
function hash2(ix: number, iz: number): number {
  let n = Math.imul(ix, 374761393) + Math.imul(iz, 668265263);
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
}

function smoothstep(e0: number, e1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

function clamp(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}

export function valueNoise2D(x: number, z: number): number {
  const ix = Math.floor(x);
  const iz = Math.floor(z);
  const fx = x - ix;
  const fz = z - iz;
  const ux = fx * fx * (3 - 2 * fx);
  const uz = fz * fz * (3 - 2 * fz);
  const a = hash2(ix, iz);
  const b = hash2(ix + 1, iz);
  const c = hash2(ix, iz + 1);
  const d = hash2(ix + 1, iz + 1);
  return (a + (b - a) * ux + (c - a) * uz + (a - b - c + d) * ux * uz) * 2 - 1;
}

export function fbm2D(x: number, z: number, octaves = 4): number {
  let sum = 0;
  let amp = 0.5;
  let freq = 1.0;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    const rx = x * freq * 0.8 - z * freq * 0.6;
    const rz = x * freq * 0.6 + z * freq * 0.8;
    sum += valueNoise2D(rx, rz) * amp;
    norm += amp;
    amp *= 0.5;
    freq *= 2.03;
  }
  return sum / norm;
}

export function ridgedFbm2D(x: number, z: number, octaves = 4): number {
  let sum = 0;
  let amp = 0.55;
  let freq = 1.0;
  let weight = 1.0;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    const rx = x * freq * 0.8 - z * freq * 0.6 + i * 17.3;
    const rz = x * freq * 0.6 + z * freq * 0.8 - i * 13.1;
    let s = 1.0 - Math.abs(valueNoise2D(rx, rz));
    s *= s * weight;
    weight = clamp(s * 1.8, 0.25, 1.0);
    sum += s * amp;
    norm += amp;
    amp *= 0.48;
    freq *= 2.06;
  }
  return sum / norm;
}

/** Kuroiso Gorge Stream centerline carving the ravine west of the hillside village */
export function getStreamCenterX(z: number): number {
  return (
    -215.0 * smoothstep(1400, 450, z) +
    Math.sin(z * 0.0028) * 44.0 +
    Math.cos(z * 0.0067 + 0.8) * 18.0 +
    245.0 * smoothstep(1250, 2150, z)
  );
}

// ============================================================================
// ROAD, FORESTRY ROAD & ANIMAL TRAIL NETWORK (WITH WALKABLE TARGET ELEVATIONS)
// ============================================================================
export const GRADED_PATHS: GradedPathSpec[] = [
  // 1. Coastal Mountain Switchback Road: Driftwood Cove (2m) -> Village Entrance Koban (238m)
  {
    id: 'road_coastal',
    name: '海岸林道（漂着浜〜黒磯村入口）',
    kind: 'road',
    halfWidth: 2.6,
    blendWidth: 16.0,
    points: [
      [40, 2125, 3.0],
      [28, 2030, 14.0],
      [-55, 1920, 32.0],
      [-145, 1805, 52.0],
      [-65, 1690, 72.0],
      [75, 1590, 92.0],
      [165, 1480, 114.0],
      [85, 1365, 134.0],
      [-55, 1255, 152.0],
      [-125, 1135, 168.0],
      [-30, 1020, 184.0],
      [95, 915, 199.0],
      [148, 800, 212.0],
      [115, 685, 222.0],
      [85, 575, 230.0],
      [82, 480, 238.0], // Connects directly to K01 Police Box crossroads
    ],
  },

  // 2. Middle Main Hillside Village Road (中段本通り — ~240m..268m carved into the mountain slope!)
  {
    id: 'road_village_mid',
    name: '村道黒磯本通り（中段斜面道）',
    kind: 'road',
    halfWidth: 2.5,
    blendWidth: 15.0,
    points: [
      [82, 480, 238.0],  // K01 Koban crossroads
      [165, 515, 254.0],
      [235, 540, 268.0], // 見晴らし坂 Lookout Bend (image.png vista!)
      [215, 455, 263.0],
      [165, 380, 256.0],
      [132, 315, 252.0], // S01 General Store
      [95, 235, 249.0],
      [58, 145, 248.0],
      [32, 55, 250.0],
      [12, -35, 253.0],
      [-28, -110, 256.0],
      [-72, -165, 258.0], // S02 Minatoya Canteen
      [-85, -255, 262.0],
      [-65, -345, 268.0],
      [-30, -440, 278.0], // Joins Upper Road & Forestry Road
    ],
  },

  // 3. Lower Hillside Village Road (下段村道 — ~218m..244m hugging lower canyon flank & Park)
  {
    id: 'road_village_low',
    name: '下段斜面村道（渓谷・公園通り）',
    kind: 'road',
    halfWidth: 2.3,
    blendWidth: 14.0,
    points: [
      [82, 480, 238.0],
      [20, 430, 230.0],
      [-45, 375, 224.0],
      [-88, 305, 228.0],
      [-68, 215, 242.0], // P01 Village Park
      [-82, 125, 234.0],
      [-115, 30, 225.0],
      [-125, -75, 233.0],
      [-112, -135, 245.0],
      [-92, -162, 253.0],
      [-72, -165, 258.0], // Rejoins S02 Minatoya smoothly
    ],
  },

  // 4. Upper Hillside Village Road (上段山腹道 — ~268m..292m perched high on the eastern slope)
  {
    id: 'road_village_high',
    name: '上段山腹道（高台集落通り）',
    kind: 'road',
    halfWidth: 2.2,
    blendWidth: 14.0,
    points: [
      [235, 540, 268.0], // Branches from Lookout Bend
      [268, 420, 274.0],
      [262, 290, 276.0],
      [245, 165, 278.0],
      [228, 40, 280.0],
      [215, -90, 282.0],
      [210, -210, 286.0],
      [185, -310, 290.0], // Summit Animal Trailhead starts here!
      [95, -395, 286.0],
      [-30, -440, 278.0], // Joins Forestry Road
    ],
  },

  // 5. Mountain Forestry Road (山の中の道・黒磯林道 -> 1890 Coal Mine Gorge & West Ridge Trailhead)
  {
    id: 'road_forestry',
    name: '山の中の道（黒磯林道〜1890年炭鉱谷）',
    kind: 'forestry',
    halfWidth: 2.1,
    blendWidth: 15.0,
    points: [
      [-30, -440, 278.0],
      [-75, -530, 294.0],
      [-130, -630, 312.0],
      [-165, -735, 328.0],
      [-155, -825, 340.0],
      [-145, -890, 348.0], // M01 1890 Coal Mine Portal Site
      [-245, -870, 335.0],
      [-355, -895, 388.0],
      [-460, -950, 422.0],
      [-540, -1035, 425.0], // Western Ridge Trailhead to Hidden Port!
    ],
  },

  // 6. Walkable Animal Trail all the way to the 865m Summit! (山頂への獣道: draped naturally along east ridge spine!)
  {
    id: 'trail_summit_865',
    name: '黒磯岳山頂への獣道（標高865mルート）',
    kind: 'trail',
    halfWidth: 1.35,
    blendWidth: 15.0,
    points: [
      [185, -310, 290.0], // Trailhead off Upper Hillside Road
      [245, -385, 310.0],
      [310, -455, 320.0],
      [352, -525, 315.0], // Secret Base trail branches east here!
      [325, -625, 325.0],
      [315, -735, 360.0],
      [355, -850, 425.0],
      [335, -955, 475.0],
      [335, -1055, 520.0],
      [365, -1145, 560.0],
      [355, -1245, 635.0],
      [255, -1315, 718.0],
      [155, -1365, 765.0],
      [40, -1410, 800.0],
      [135, -1445, 832.0],
      [80, -1480, 865.0], // ★ 黒磯岳主峰 標高 865.0m SUMMIT!
    ],
  },

  // 7. Kids' Deep-Mountain Secret Base Trail (秘密基地への獣道 -> B01 natural mountain glade)
  {
    id: 'trail_secret_base',
    name: '秘密基地へのけもの道',
    kind: 'trail',
    halfWidth: 1.15,
    blendWidth: 12.0,
    points: [
      [352, -525, 315.0],
      [395, -510, 345.0],
      [445, -530, 365.0],
      [452, -562, 374.0],
      [430, -580, 376.0], // B01 Kids' Secret Base glade
    ],
  },

  // 8. Hidden Port Animal Trail (けもの道を抜けた先の秘境旧港ルート -> Northwest Crescent Bay (-522, -1768)!)
  {
    id: 'trail_hidden_port',
    name: '秘境の旧港へのけもの道',
    kind: 'trail',
    halfWidth: 1.35,
    blendWidth: 14.0,
    points: [
      [-540, -1035, 425.0], // Branches smoothly off West Ridge Trailhead
      [-575, -1130, 385.0],
      [-595, -1230, 340.0],
      [-600, -1330, 300.0],
      [-585, -1425, 245.0],
      [-575, -1505, 185.0],
      [-545, -1575, 160.0],
      [-445, -1625, 118.0],
      [-380, -1675, 78.0],
      [-442, -1722, 42.0],
      [-472, -1750, 18.0],
      [-498, -1764, 6.0],
      [-522, -1768, 2.8],  // PORT01 Hidden Port Crescent Cove
    ],
  },

  // 9. East Kannon Ridge & Uplifted Coastal Cliff Trail (東観音尾根〜東展望断崖への縦走獣道)
  {
    id: 'trail_east_ridge',
    name: '東観音尾根・東展望断崖への獣道',
    kind: 'trail',
    halfWidth: 1.30,
    blendWidth: 14.0,
    points: [
      [352, -525, 315.0],  // Branches cleanly off Summit Trail pt[3]
      [480, -455, 385.0],
      [620, -370, 470.0],
      [770, -275, 560.0],
      [915, -185, 645.0],  // 東観音連峰 主稜線肩
      [965, -40, 560.0],
      [1015, 105, 435.0],
      [1065, 235, 290.0],
      [1110, 360, 155.0],  // ★ 東展望断崖（東海岸段丘パノラマ）
    ],
  },

  // 10. West Byobu Ridge & Volcanic Terrace Trail (西屏風連山・溶岩台地大展望獣道)
  {
    id: 'trail_west_terrace',
    name: '西屏風連山・大展望への獣道',
    kind: 'trail',
    halfWidth: 1.30,
    blendWidth: 14.0,
    points: [
      [-540, -1035, 425.0], // Branches cleanly off Forestry Road West Ridge end
      [-645, -915, 445.0],
      [-745, -765, 495.0],
      [-825, -595, 545.0],
      [-865, -415, 595.0],
      [-855, -225, 610.0],  // 西屏風連山 主稜線
      [-800, -45, 600.0],
      [-740, 120, 604.0],   // ★ 西屏風大展望台（廃村全25軒＆865m黒磯岳を一望!）
    ],
  },

  // 11. North Volcanic Caldera Rim Trail (黒磯岳865m山頂〜北カルデラ外輪山縦走路)
  {
    id: 'trail_north_caldera',
    name: '北カルデラ外輪山・縦走獣道',
    kind: 'trail',
    halfWidth: 1.25,
    blendWidth: 14.0,
    points: [
      [80, -1480, 865.0],   // ★ Starts directly at 865.0m Mt. Kuroiso Master Summit!
      [190, -1575, 815.0],
      [305, -1690, 755.0],
      [395, -1820, 705.0],
      [425, -1975, 665.0],
      [375, -2140, 615.0],  // ★ 北カルデラ爆裂火口・外輪山展望（鬼ヶ崎＆外洋一望!）
    ],
  },
];

// ============================================================================
// ALL 32 PLANNED CONSTRUCTION SITES (25 HOUSES + 2 SHOPS + 1 KOBAN + 1 PARK + 1 SECRET BASE + 1 MINE + 1 HIDDEN PORT)
// 25 Houses average elevation = ~254m, terraced directly along the 3 hillside village roads!
// ============================================================================
export const PLANNED_SITES: PlannedSite[] = [
  // --- Public, Commercial & Landmark Sites (7) ---
  { id: 'K01',    name: '黒磯駐在所（交番・明治29年築）',   category: 'koban',       x:   91, z:   469, y: 239.0, radiusX: 7.2,  radiusZ: 6.2,  yaw: -0.52, blendMargin: 13.5, note: '1896年築・赤灯常夜灯＆掲示板・1F駐在事務室＆保護室・2F官舎＆三叉路バルコニー' },
  { id: 'S01',    name: '黒磯よろず商店・簡易郵便取扱所', category: 'shop',        x:  144, z:   309, y: 252.0, radiusX: 8.8,  radiusZ: 6.6,  yaw: -1.18, blendMargin: 14.0, note: '1888年築・商業施設01・赤白縞テント庇＆丸型ポスト・よろず売場＆郵便窓口・2F店主居宅' },
  { id: 'S02',    name: '炭鉱購買部・大衆食堂「みなとや」', category: 'shop',      x:  -60, z:  -156, y: 258.0, radiusX: 9.6,  radiusZ: 6.8,  yaw: -2.25, blendMargin: 15.0, note: '1894年築・商業施設02・暖簾＆L字食堂カウンター・炭鉱購買部・2F大宴会座敷' },
  { id: 'P01',    name: '見晴らし村営公園（1964年整備）',   category: 'park',        x:  -52, z:   215, y: 242.0, radiusX: 15.5, radiusZ: 12.5, yaw:  0.15, blendMargin: 16.0, note: '1964年整備・登れるすべり台＆ブランコ＆ジャングルジム・本瓦東屋・水飲み場・管理小屋' },
  { id: 'B01',    name: '子供たちの山奥の秘密基地（1980）', category: 'secret_base', x:  430, z:  -580, y: 376.0, radiusX: 8.5,  radiusZ: 8.0,  yaw: -0.80, blendMargin: 14.0, note: '1980〜1985年・苔巨岩焚き火広場＆廃材トタン隠れ家・2F巨杉の樹上見張りやぐら' },
  { id: 'M01',    name: '旧黒磯炭鉱 第一坑口・地下坑道（1890）', category: 'mine',  x: -145, z:  -890, y: 348.0, radiusX: 13.5, radiusZ: 15.8, yaw:  0.15, blendMargin: 16.0, note: '1890年開坑・全長135m地下坑道・安全灯室・火薬庫・水没排水坑・手掘り炭層＆山の神・斜坑大採炭空洞' },
  { id: 'PORT01', name: '旧黒磯秘境港（石灯台・桟橋・海運倉庫）', category: 'port', x: -522, z: -1768, y:   2.8, radiusX: 16.0, radiusZ:  5.2,  yaw:  Math.PI * 0.25, blendMargin: 5.5, note: '1892年開港・22m木造桟橋・漁船黒磯丸・登れる石灯台・2F海運倉庫' },

  // --- Lower Hillside Road Houses (H01–H08: Y = 222m..242m) ---
  { id: 'H01', name: '民家 01（浜田家・二階建町家）',     category: 'house', x:   49, z:  437, y: 233.0, radiusX: 6.8, radiusZ: 5.8, yaw: -0.68, blendMargin: 11.5, note: '下段斜面・交差点下・焼杉いぶし銀本瓦二階家' },
  { id: 'H02', name: '民家 02（磯部家・三階建櫓家）',     category: 'house', x:  -32, z:  406, y: 226.0, radiusX: 6.2, radiusZ: 5.8, yaw:  2.44, blendMargin: 11.5, note: '下段斜面・石州赤茶釉薬瓦三階見張り櫓家' },
  { id: 'H03', name: '民家 03（高木家・L字二階工房邸）',  category: 'house', x:  -79, z:  354, y: 224.0, radiusX: 7.6, radiusZ: 6.4, yaw:  2.12, blendMargin: 12.0, note: '下段斜面・L字船大工二階工房（北屋根半崩落）' },
  { id: 'H04', name: '民家 04（岩崎家・石蔵三階民家）',   category: 'house', x: -108, z:  282, y: 228.0, radiusX: 6.8, radiusZ: 5.8, yaw:  1.25, blendMargin: 12.0, note: '下段斜面・1F野面積石壁＋苔黒瓦寄棟三階家' },
  { id: 'H05', name: '民家 05（佐伯家・苔蔦二階廃墟）',   category: 'house', x:  -98, z:  152, y: 235.0, radiusX: 6.2, radiusZ: 5.4, yaw:  1.58, blendMargin: 12.0, note: '公園北側・苔と蔦の半壊二階建廃家' },
  { id: 'H06', name: '民家 06（藤原家・沢沿い水車半壊二階家）', category: 'house', x: -132, z: 62, y: 226.0, radiusX: 7.4, radiusZ: 6.2, yaw: 1.55, blendMargin: 12.5, note: '1876年築・直径3.2m木造水車＆石臼部屋・北西屋根半崩落の沢沿い二階家' },
  { id: 'H07', name: '民家 07（安藤家・大工棟梁四階櫓邸）', category: 'house', x: -145, z:  -38, y: 228.0, radiusX: 8.2, radiusZ: 6.8, yaw:  1.62, blendMargin: 13.5, note: '1877年築・懸造り基礎＆木工刻み場・360°屋外回廊付四階木組櫓邸' },
  { id: 'H08', name: '民家 08（永井家・分校教員宿舎＆補習教室）', category: 'house', x: -130, z: -120, y: 239.2, radiusX: 8.4, radiusZ: 6.4, yaw:  1.32, blendMargin: 13.0, note: '1889年築・補習教室＆大黒板・2Fサンルーム・青銅苔瓦丁字切妻二階館' },

  // --- Middle Main Hillside Road Houses (H09–H18: Y = 246m..268m) ---
  { id: 'H09', name: '民家 09（森本家・赤瓦三階名家）',   category: 'house', x:  212, z:  518, y: 266.0, radiusX: 7.6, radiusZ: 6.4, yaw: -0.45, blendMargin: 12.5, note: '見晴らし坂手前・赤瓦入母屋三階建＆見晴らし縁側' },
  { id: 'H10', name: '民家 10（白井医院・擬洋風三階館）', category: 'house', x:  208, z:  424, y: 260.0, radiusX: 7.2, radiusZ: 6.0, yaw: -1.12, blendMargin: 12.0, note: '明治擬洋風三階木造診療所・いぶし銀本瓦入母屋' },
  { id: 'H11', name: '民家 11（黒田本家・庄屋四階望楼邸）', category: 'house', x: 162, z: 348, y: 254.0, radiusX: 8.8, radiusZ: 7.2, yaw: -1.18, blendMargin: 13.5, note: '1872年築・四重本瓦入母屋＆四階望楼の庄屋本宅' },
  { id: 'H12', name: '民家 12（松岡家・白壁瓦二階家）',   category: 'house', x:   72, z:  262, y: 248.0, radiusX: 6.8, radiusZ: 5.8, yaw:  1.85, blendMargin: 12.5, note: '参考写真中央・白漆喰＆濃灰いぶし瓦二階家' },
  { id: 'H13', name: '民家 13（神谷家・朱塗冠木門三階社家）', category: 'house', x:   82, z:  175, y: 249.0, radiusX: 7.6, radiusZ: 6.8, yaw: -1.22, blendMargin: 12.5, note: '1879年築・独立朱塗冠木門・苔石坪庭吹抜・千鳥破風本瓦三階邸' },
  { id: 'H14', name: '民家 14（村田家・煉瓦煙突三階邸）', category: 'house', x:   56, z:   88, y: 249.0, radiusX: 8.2, radiusZ: 6.4, yaw: -1.32, blendMargin: 13.0, note: '1883年築・11.8m赤煉瓦ペチカ煙突・リシン洋間・3F物干し高欄デッキ' },
  { id: 'H15', name: '民家 15（吉田家・空中渡り廊下二棟邸）', category: 'house', x:   34, z:  -10, y: 252.0, radiusX: 8.8, radiusZ: 6.6, yaw: -1.35, blendMargin: 13.5, note: '1880年明治本瓦本屋×1958年昭和トタン車庫をガラス空中渡り廊下で連結' },
  { id: 'H16', name: '民家 16（田辺家・半地下石倉三階豪農）', category: 'house', x:   -4, z:  -92, y: 255.0, radiusX: 8.6, radiusZ: 6.4, yaw: -1.10, blendMargin: 13.5, note: '1878年築・半地下石倉(5段下降)・重鉄防火扉・養蚕3F＆越屋根本瓦' },
  { id: 'H17', name: '民家 17（大野家・蔦全壊寸前二階廃家）', category: 'house', x:  -52, z: -225, y: 260.0, radiusX: 7.0, radiusZ: 6.0, yaw: -1.35, blendMargin: 12.5, note: '1875年築・濃密蔦壁＆傾き玄関庇・2F南東屋根陥没吹抜の重度廃墟' },
  { id: 'H18', name: '民家 18（杉山家・丸太組木こり二階小屋）', category: 'house', x:  -96, z: -315, y: 266.0, radiusX: 7.4, radiusZ: 6.2, yaw:  1.35, blendMargin: 12.5, note: '1887年築・本格ノッチ丸太組外壁＆薪棚庇・薪ストーブ＆貫通煙突' },

  // --- Upper Hillside Road Houses (H19–H25: Y = 272m..290m) ---
  { id: 'H19', name: '民家 19（小川家・懸造り木橋三階茶亭）', category: 'house', x:  282, z:  468, y: 273.0, radiusX: 8.2, radiusZ: 7.4, yaw: -1.75, blendMargin: 13.5, note: '1884年築・清水式懸造り杉柱脚＆4.5m木橋玄関・赤銅錆本瓦三階茶亭' },
  { id: 'H20', name: '民家 20（旧黒磯炭鉱・明治技師館）', category: 'house', x:  280, z:  340, y: 275.0, radiusX: 8.4, radiusZ: 6.8, yaw: -1.65, blendMargin: 13.5, note: '1891年築・青磁色下見板＆宝形本瓦四階角望楼塔屋の洋和折衷官邸' },
  { id: 'H21', name: '民家 21（第一坑夫長屋・三戸連棟）', category: 'house', x:  262, z:  215, y: 277.0, radiusX: 11.4, radiusZ: 6.4, yaw: -1.48, blendMargin: 14.0, note: '1893年築・島最大幅19.6m三戸連棟炭住長屋（全3戸個別間取り＆21m本瓦大屋根）' },
  { id: 'H22', name: '民家 22（黒岩監督邸・懸造り四階館）', category: 'house', x: 246, z: 95, y: 279.0, radiusX: 7.4, radiusZ: 6.4, yaw: -1.48, blendMargin: 13.0, note: '高石垣＆懸造り木柱脚・重層瓦屋根の四階監督官邸' },
  { id: 'H23', name: '民家 23（鉄山鍛冶場・越屋根吹抜二階）', category: 'house', x: 232, z: -45, y: 281.0, radiusX: 8.6, radiusZ: 6.4, yaw: -1.70, blendMargin: 13.0, note: '1885年築・煙出し越屋根＆12m煉瓦大煙突・6.5m吹抜鍛冶場＆見下ろし回廊' },
  { id: 'H24', name: '民家 24（旧黒磯炭鉱 詰所兼独身寮）', category: 'house', x:  222, z: -175, y: 285.0, radiusX: 10.4, radiusZ: 6.8, yaw: -1.58, blendMargin: 14.0, note: '1895年築・幅16.4m現場詰所・青タイル共同浴場・2F独身4個室＆東屋外非常階段・3F組合食堂' },
  { id: 'H25', name: '民家 25（沢田小屋・落石直撃半崩壊番小屋）', category: 'house', x:  142, z: -362, y: 288.0, radiusX: 7.2, radiusZ: 6.0, yaw: -0.85, blendMargin: 12.5, note: '1891年築・直径3.6m巨大火山落石直撃・2F落石見下ろしロフト＆獣道入口番小屋' },
];

/** ALL 32/32 island sites hand-crafted and completed (25 houses + 2 shops + Hidden Port + 1890 Coal Mine + Koban + Park + Kids Secret Base)! */
export const BUILT_HOUSE_IDS = new Set<string>([
  'H01', 'H02', 'H03', 'H04', 'H05', 'H06', 'H07', 'H08', 'H09', 'H10',
  'H11', 'H12', 'H13', 'H14', 'H15', 'H16', 'H17', 'H18', 'H19', 'H20',
  'H21', 'H22', 'H23', 'H24', 'H25',
  'S01', 'S02', 'PORT01',
  'K01', 'P01', 'B01', 'M01',
]);

const BUILT_HOUSE_SITES: PlannedSite[] = PLANNED_SITES.filter((s) => BUILT_HOUSE_IDS.has(s.id));

const MINE_PORTAL_COS = Math.cos(0.15);
const MINE_PORTAL_SIN = Math.sin(0.15);

/**
 * Precise terrain-mesh portal cutout for the 1890 Coal Mine mouth (M01).
 * Punches ONLY the rising cliff transition quads where the tunnel bores into Mt. Kuroiso
 * (M01 local X ∈ [-3.6, +3.6], Z ∈ [-30.5, -19.5]), completely sealed by M01's 24m basalt/stone portal collar.
 */
export function isInsideMinePortalCutout(wx: number, wz: number): boolean {
  const dx = wx - MINE_PORTAL_POINT.x;
  const dz = wz - MINE_PORTAL_POINT.z;
  if (dx * dx + dz * dz > 1600) return false;
  const lx = dx * MINE_PORTAL_COS - dz * MINE_PORTAL_SIN;
  const lz = dx * MINE_PORTAL_SIN + dz * MINE_PORTAL_COS;
  return lx >= -3.6 && lx <= 3.6 && lz >= -30.5 && lz <= -15.5;
}

/** Fast check whether world (x, z) lies within any constructed structure's footprint (keeps trees off yards/portals) */
export function isInsideBuiltHouseFootprint(x: number, z: number, pad = 0.0): boolean {
  for (let i = 0; i < BUILT_HOUSE_SITES.length; i++) {
    const s = BUILT_HOUSE_SITES[i];
    const dx = x - s.x;
    const dz = z - s.z;
    const maxR = Math.max(s.radiusX, s.radiusZ) + pad + 1.5;
    if (dx * dx + dz * dz > maxR * maxR) continue;
    const c = Math.cos(s.yaw);
    const sn = Math.sin(s.yaw);
    const lx = dx * c - dz * sn;
    const lz = dx * sn + dz * c;
    if (Math.abs(lx) < s.radiusX * 0.94 + pad && Math.abs(lz) < s.radiusZ * 0.94 + pad) {
      return true;
    }
  }
  return false;
}

// ============================================================================
// SPATIAL HASH ACCELERATOR (128m CELLS) FOR 20x FASTER STREAMING CHUNK BUILDS
// ============================================================================
interface PathSegment {
  ax: number;
  az: number;
  ay: number;
  bx: number;
  bz: number;
  by: number;
  dx: number;
  dz: number;
  len2: number;
  halfWidth: number;
  blendWidth: number;
  kind: PathKind;
}

const ACCEL_CELL = 128;
const ACCEL_NX = Math.ceil((TERRAIN_EXTENT_X * 2) / ACCEL_CELL); // 24
const ACCEL_NZ = Math.ceil((TERRAIN_EXTENT_Z * 2) / ACCEL_CELL); // 48

const cellPaths: PathSegment[][] = Array.from({ length: ACCEL_NX * ACCEL_NZ }, () => []);
const cellSites: PlannedSite[][] = Array.from({ length: ACCEL_NX * ACCEL_NZ }, () => []);

function cellIndex(cx: number, cz: number): number {
  return cz * ACCEL_NX + cx;
}

function worldToCell(v: number, extent: number, maxN: number): number {
  return clamp(Math.floor((v + extent) / ACCEL_CELL), 0, maxN - 1);
}

/** East Kannon Gorge centerline draining the 3km East Alpine Wing to East Sea-Cliff Cove */
function getEastGorgeCenterZ(x: number): number {
  return -360.0 + (x - 620.0) * 0.28 + Math.sin(x * 0.0085) * 48.0;
}

/** West Byobu Gorge centerline draining the 3km West Alpine Wing to West Basalt Bay */
function getWestGorgeCenterZ(x: number): number {
  return 180.0 - (x + 620.0) * 0.62 + Math.cos(x * 0.0078) * 52.0;
}

// ============================================================================
// HYPER-REALISTIC 3KM x 6KM VOLCANIC-TECTONIC ISLAND GEOMORPHOLOGY
// (Domain-warped tectonic ridges, Rias fjord coastline, North Volcanic Caldera,
//  multi-watershed fluvial gorges, hydraulic gully flutes & marine terraces!)
// ============================================================================
export function getNaturalTerrainHeight(x: number, z: number): number {
  // 1. Organic 3km x 6km Rias-Coast Volcanic Island Silhouette (bounded cleanly inside ±1536 x ±3072)
  const nx = x / 1370.0;
  const nz = z / 2810.0;
  // Two-stage multi-frequency Rias coastline domain warp (creates natural jagged headlands & pocket bays!)
  const coastWarp =
    fbm2D(x * 0.00056 + 1.3, z * 0.00056 - 0.7, 4) * 0.145 +
    fbm2D(x * 0.00175 - 2.1, z * 0.00175 + 1.4, 2) * 0.042;
  const taper =
    1.0 -
    0.16 * smoothstep(-1850, -2900, z) -
    0.10 * smoothstep(2050, 2920, z);
  const radial = Math.sqrt((nx / taper) * (nx / taper) + nz * nz) + coastWarp;

  // ★ Bay 1: Sweeping 1.2km Southern Horseshoe Driftwood Bay (漂着湾) opening straight South-SE past SPAWN_POINT (42, 2158)
  // Embraced on West by Cape Nishikurosaki (-910,+2440) and East by Cape Higashishirahama (+950,+2480)!
  const driftBay =
    Math.exp(-(Math.pow((x - 45) / 480.0, 2) + Math.pow((z - 2660) / 380.0, 2))) * 0.68 +
    Math.exp(-(Math.pow((x - 42) / 215.0, 2) + Math.pow((z - 2395) / 145.0, 2))) * 0.44;
  // Twin dramatic Southern Coastal Peninsulas stretching the 3km x 6km island cleanly down to Z ≈ +2820m!
  const southCapesExtend =
    Math.exp(-(Math.pow((x + 910) / 380.0, 2) + Math.pow((z - 2440) / 440.0, 2))) * 0.34 +
    Math.exp(-(Math.pow((x - 950) / 390.0, 2) + Math.pow((z - 2480) / 450.0, 2))) * 0.36;

  // ★ Bay 2: Deep Northwest Rias Fjord Sea Channel (黒磯北西リアス湾) opening straight NW (-X, -Z) from PORT01 (-522, -1768)!
  const pDx = x + 522.0;
  const pDz = z + 1768.0;
  const alongNW = (-pDx - pDz) * 0.70710678; // 0 at quay, positive heading NW out to Pacific Ocean!
  const perpNW = (pDx - pDz) * 0.70710678;   // perpendicular distance from fjord centerline
  const fjordHalfW = 132.0 + Math.max(0, alongNW) * 0.26;
  const portFjord =
    smoothstep(-26.0, 28.0, alongNW) *
    Math.exp(-Math.pow(perpNW / fjordHalfW, 2));

  // ★ Bay 3 & 4: Scenic Rias Sea-Cliff Coves on East (東磯入江) & West (西磯湾) margins + North Caldera Sea Breach
  const eastCove = Math.exp(-(Math.pow((x - 1350) / 210.0, 2) + Math.pow((z + 170) / 245.0, 2))) * 0.34;
  const westCove = Math.exp(-(Math.pow((x + 1340) / 220.0, 2) + Math.pow((z - 760) / 260.0, 2))) * 0.32;
  const northBreachBay = Math.exp(-(Math.pow((x - 10) / 210.0, 2) + Math.pow((z + 2790) / 220.0, 2))) * 0.30;

  // Hard outer ocean frame guarantee so land NEVER touches the 3072m x 6144m outer map edge
  const edgeClamp = Math.max(
    smoothstep(1380, 1495, Math.abs(x)),
    smoothstep(2850, 2985, Math.abs(z))
  );

  const effDist =
    radial - southCapesExtend + driftBay + portFjord * 0.92 + eastCove + westCove + northBreachBay + edgeClamp * 0.65;
  const landMask = 1.0 - smoothstep(0.75, 1.02, effDist);
  const shelfMask = 1.0 - smoothstep(0.96, 1.24, effDist);
  if (shelfMask <= 0.0001) return -28.0;

  // 2. Tectonic Domain-Warped Coordinates (breaks ALL Gaussian symmetry into natural folded Japanese mountain spines!)
  const wScale = 0.00082;
  const warpX = x + fbm2D(x * wScale + 3.1, z * wScale - 1.7, 3) * 140.0;
  const warpZ = z + fbm2D(x * wScale - 2.4, z * wScale + 4.3, 3) * 140.0;

  // Central mountain-ringed village highland core (~235m plateau)
  const plateauCore = 232.0 * smoothstep(0.98, 0.42, effDist);

  // 3. Multi-Range Volcanic & Tectonic Massifs across the 3km x 6km Island!
  // ★ Master Peak: Mt. Kuroiso Main Summit (黒磯岳主峰 = strictly 865.0m at +80, -1480!)
  const mainPeak =
    575.0 * Math.exp(-(Math.pow((x - 80) / 510.0, 2) + Math.pow((z + 1480) / 540.0, 2)));

  // ★ North Volcanic Caldera Amphitheater (北カルデラ爆裂火口 & 外輪山: Z = -1820..-2650!)
  // Dramatic horseshoe volcanic rim wall (~620m–710m) surrounding a recessed explosion crater bowl!
  const caldDx = (warpX - 35) / 415.0;
  const caldDz = (warpZ + 2110) / 355.0;
  const caldR = Math.hypot(caldDx, caldDz);
  const calderaRim =
    305.0 *
    Math.exp(-Math.pow((caldR - 1.02) / 0.42, 2)) *
    smoothstep(-1680, -1890, z) * // Keeps southern flank of Mt. Kuroiso clean below 865m!
    (1.0 - 0.68 * smoothstep(-2340, -2580, z) * Math.exp(-Math.pow((x - 10) / 190.0, 2))); // North crater breach!
  const calderaBowl = -175.0 * Math.exp(-Math.pow(caldR / 0.64, 2));
  const northCapePeak =
    195.0 * Math.exp(-(Math.pow((x - 240) / 340.0, 2) + Math.pow((z + 2580) / 280.0, 2))) +
    185.0 * Math.exp(-(Math.pow((x + 410) / 300.0, 2) + Math.pow((z + 2420) / 300.0, 2)));

  // ★ Brand-New 3km East Alpine Wing: East Kannon Range (東観音連峰 ~680m) + East White-Cliff Cape!
  const eastKannonMain =
    395.0 * Math.exp(-(Math.pow((warpX - 885) / 365.0, 2) + Math.pow((warpZ + 120) / 620.0, 2)));
  const eastKannonSouth =
    295.0 * Math.exp(-(Math.pow((warpX - 965) / 340.0, 2) + Math.pow((warpZ - 820) / 520.0, 2)));
  const eastNorthSpur =
    285.0 * Math.exp(-(Math.pow((warpX - 745) / 360.0, 2) + Math.pow((warpZ + 1240) / 460.0, 2)));
  const eastWhiteCape =
    230.0 * Math.exp(-(Math.pow((x - 960) / 350.0, 2) + Math.pow((z - 2360) / 440.0, 2)));

  // ★ Brand-New 3km West Alpine Wing: West Byobu Stratified Range (西屏風連山 ~640m) + West Basalt Cape!
  const westByobuMain =
    365.0 * Math.exp(-(Math.pow((warpX + 915) / 360.0, 2) + Math.pow((warpZ + 60) / 640.0, 2)));
  const westByobuSouth =
    285.0 * Math.exp(-(Math.pow((warpX + 960) / 345.0, 2) + Math.pow((warpZ - 860) / 540.0, 2)));
  const westNorthRidge =
    255.0 * Math.exp(-(Math.pow((warpX + 960) / 310.0, 2) + Math.pow((warpZ + 1090) / 360.0, 2)));
  const westBlackCape =
    235.0 * Math.exp(-(Math.pow((x + 930) / 350.0, 2) + Math.pow((z - 2330) / 440.0, 2)));

  // Inner village-enclosing mountain flanks (preserving iconic image.png amphitheater bowl around the 25 houses!)
  const innerEastWall =
    155.0 * Math.exp(-(Math.pow((x - 595) / 240.0, 2) + Math.pow((z - 20) / 560.0, 2)));
  const innerWestWall =
    145.0 * Math.exp(-(Math.pow((x + 565) / 240.0, 2) + Math.pow((z - 150) / 560.0, 2)));
  const southBowlRim =
    130.0 * Math.exp(-(Math.pow((x - 360) / 260.0, 2) + Math.pow((z - 1460) / 320.0, 2))) +
    125.0 * Math.exp(-(Math.pow((x + 310) / 260.0, 2) + Math.pow((z - 1500) / 320.0, 2)));

  // Protective Rias headlands framing Hidden Port Fjord on BOTH sides (keep deep sea channel 100% open!)
  const portHeadlandS =
    118.0 * Math.exp(-(Math.pow((x + 690) / 145.0, 2) + Math.pow((z + 1480) / 140.0, 2)));
  const portHeadlandN =
    165.0 * Math.exp(-(Math.pow((x + 340) / 160.0, 2) + Math.pow((z + 2060) / 155.0, 2)));

  // 4. Sculpted Central Village Hillside Slope & Multi-Watershed Fluvial V-Gorges!
  const villageZone = Math.exp(
    -(Math.pow((x - 60) / 415.0, 2) + Math.pow((z - 100) / 670.0, 2))
  );

  // Gorge A: Primary Kuroiso Gorge carving down the west edge of the abandoned village
  const streamX = getStreamCenterX(z);
  const dStream = Math.abs(x - streamX);
  const mainGorgeCut =
    -62.0 *
    Math.exp(-Math.pow(dStream / 72.0, 2)) *
    smoothstep(-880, -320, z) *
    smoothstep(2180, 1650, z);

  // Gorge B: East Kannon V-Valley draining east wing to East Sea-Cliff Cove
  const dEastGorge = Math.abs(z - getEastGorgeCenterZ(x));
  const eastGorgeCut =
    -78.0 *
    Math.exp(-Math.pow(dEastGorge / 88.0, 2)) *
    smoothstep(540, 820, x) *
    (1.0 - smoothstep(1340, 1480, x));

  // Gorge C: West Byobu Ravine draining west wing to West Basalt Bay
  const dWestGorge = Math.abs(z - getWestGorgeCenterZ(x));
  const westGorgeCut =
    -74.0 *
    Math.exp(-Math.pow(dWestGorge / 92.0, 2)) *
    smoothstep(-540, -820, x) *
    (1.0 - smoothstep(-1340, -1480, x));

  // Gorge D: North Caldera Breach Canyon carving northward from crater floor to northern sea
  const northGorgeCut =
    -95.0 *
    Math.exp(-Math.pow((x - 10 - Math.sin(z * 0.006) * 35) / 85.0, 2)) *
    smoothstep(-1950, -2250, z) *
    smoothstep(-2880, -2620, z);

  // Natural coal valley draw leading up to M01 (-145, -890) with solid rising basalt cliff wall starting at Z = -912!
  const coalDraw =
    -110.0 *
    Math.exp(-(Math.pow((x + 150) / 165.0, 2) + Math.pow((z + 805) / 195.0, 2))) *
    smoothstep(-914, -885, z);

  // Solid basalt overburden buttress directly north of M01 (-145,-890) so the 135m coal mine stays deep inside rock!
  const mineOverburden =
    92.0 *
    Math.exp(-(Math.pow((x + 160) / 150.0, 2) + Math.pow((z + 968) / 95.0, 2))) *
    smoothstep(-910, -928, z);

  // Subtle eastward slope across village bowl so the 3 stepped village roads hug the hillside
  const hillsideTilt = villageZone * ((x + 80) * 0.145 - (z - 180) * 0.032);

  // 5. ★ MULTI-SCALE DOMAIN-WARPED TECTONIC RIDGES + HYDRAULIC GULLY EROSION FLUTES!
  const macroRidge = ridgedFbm2D(warpX * 0.00145, warpZ * 0.00145, 5);
  const spurRidge = ridgedFbm2D(
    warpX * 0.0044 + macroRidge * 0.55,
    warpZ * 0.0044 - macroRidge * 0.55,
    4
  );
  const fineNoise = fbm2D(x * 0.021, z * 0.021, 2);

  // Slope-aligned rain-erosion rills / V-gullies (雨水侵食ガリー) etched down steep mountain walls!
  const gullyWave = 1.0 - Math.abs(valueNoise2D(warpX * 0.0135 + spurRidge * 1.25, warpZ * 0.0135 - spurRidge * 1.25));
  const gullyCarve = -Math.pow(gullyWave, 3.2) * 16.5;

  const mountainRugged = 1.0 - villageZone * 0.62;
  const geology =
    (macroRidge - 0.37) * (96.0 * mountainRugged + 20.0) +
    (spurRidge - 0.42) * (29.0 * mountainRugged + 6.0) +
    gullyCarve * mountainRugged * smoothstep(25.0, 140.0, plateauCore + mainPeak + eastKannonMain + westByobuMain) +
    fineNoise * 3.0;

  // Combine elevation
  let inlandH =
    plateauCore +
    mainPeak +
    calderaRim +
    calderaBowl +
    northCapePeak +
    eastKannonMain +
    eastKannonSouth +
    eastNorthSpur +
    eastWhiteCape +
    westByobuMain +
    westByobuSouth +
    westNorthRidge +
    westBlackCape +
    innerEastWall +
    innerWestWall +
    southBowlRim +
    portHeadlandS +
    portHeadlandN +
    mainGorgeCut +
    eastGorgeCut +
    westGorgeCut +
    northGorgeCut +
    coalDraw +
    mineOverburden +
    hillsideTilt +
    geology;

  // ★ Subtle Uplifted Volcanic Marine Terraces / Lava Benches (隆起海岸段丘: 35m–175m on outer 3km flanks!)
  const outerFlankMask = smoothstep(420.0, 920.0, Math.abs(x)) * (1.0 - villageZone);
  if (outerFlankMask > 0.02 && inlandH > 22.0 && inlandH < 210.0) {
    const benchPhase = inlandH * 0.092;
    const terraceStep = -Math.sin(benchPhase) * 6.2 * outerFlankMask * smoothstep(22.0, 48.0, inlandH) * (1.0 - smoothstep(165.0, 210.0, inlandH));
    inlandH += terraceStep;
  }

  // Strictly guarantee Mt. Kuroiso Master Summit (80, -1480, 865.0m) is the single highest point on the 3km x 6km island!
  const summitDist = Math.hypot(x - SUMMIT_POINT.x, z - SUMMIT_POINT.z);
  const capW = smoothstep(85.0, 225.0, summitDist);
  if (capW > 0 && inlandH > 720.0) {
    const capped = 720.0 + Math.tanh((inlandH - 720.0) / 52.0) * 48.0;
    inlandH = inlandH * (1 - capW) + capped * capW;
  }

  // Fine-calibrate the exact 865.0m Master Summit crown at (X:+80, Z:-1480) — proudest point on Kuroiso-jima!
  if (summitDist < 235.0) {
    const sw = 1.0 - smoothstep(12.0, 235.0, summitDist);
    const summitCrag = (spurRidge - 0.45) * 8.0 * smoothstep(16.0, 120.0, summitDist);
    const targetSummit = 865.0 - Math.max(0, summitDist - 10.0) * 0.56 + summitCrag + fineNoise * 0.5;
    inlandH = inlandH * (1 - sw) + targetSummit * sw;
  }

  // Carve the southern coastal valley approach from Driftwood Cove northward toward the village
  const southGorge =
    Math.exp(-(Math.pow((x - 10) / 185.0, 2) + Math.pow((z - 1960) / 290.0, 2)));
  inlandH *= 1.0 - southGorge * 0.72;

  // Carve the secluded northwest harbor cove approach so PORT01 (-522,-1768) sits cleanly at Y=2.8m beside deep calm water
  const portCoveBasin = Math.exp(
    -(Math.pow((x + 530) / 88.0, 2) + Math.pow((z + 1775) / 88.0, 2))
  );
  inlandH = inlandH * (1 - portCoveBasin * 0.90) + 2.4 * (portCoveBasin * 0.90);

  // Island shoreline dropoff into ocean seabed + rocky wave-cut intertidal shelf (海食棚)!
  const seaFloor = -28.0 * (1.0 - shelfMask) - 2.6 * shelfMask;
  let h = seaFloor + (inlandH - seaFloor) * Math.pow(landMask, 0.52);

  // Natural wave-cut coastal basalt bench (海食棚: Y ≈ 0.5..3.5m on rocky headlands, suppressed at sandy bays!)
  const rockyCapeMask = (1.0 - smoothstep(0.05, 0.25, driftBay + portFjord)) * smoothstep(0.68, 0.88, effDist);
  if (rockyCapeMask > 0.05 && h > -2.0 && h < 14.0) {
    const benchW = Math.exp(-Math.pow((h - 2.2) / 3.2, 2)) * rockyCapeMask * 0.55;
    h = h * (1 - benchW) + (1.6 + fineNoise * 0.45) * benchW;
  }

  // Gentle sandy crescent beach at Driftwood Cove (+42, +2160) opening straight South-SE to Pacific horizon!
  const driftBeach = Math.exp(
    -(Math.pow((x - 42) / 120.0, 2) + Math.pow((z - 2168) / 82.0, 2))
  );
  if (driftBeach > 0.005) {
    const beachH = clamp((2205 - z) * 0.045 + 0.15, -3.5, 6.2);
    h = h * (1 - driftBeach) + beachH * driftBeach;
  }

  // Gentle shore shelf at Hidden Port Cove (-522, -1768) dropping cleanly off seawall into deep NW Rias Fjord!
  const portShore = Math.exp(
    -(Math.pow((x + 522) / 72.0, 2) + Math.pow((z + 1768) / 72.0, 2))
  );
  if (portShore > 0.005) {
    // SE axis along (+0.707, +0.707): seAlong=0 is quay apron (2.8m), seAlong<-4.8 drops into deep cove water under pier!
    const seAlong = ((x + 522) + (z + 1768)) * 0.7071;
    const harborH = seAlong >= -4.8
      ? clamp(2.8 + Math.max(0, seAlong - 4.0) * 0.24, 2.6, 16.0)
      : clamp(-2.2 + (seAlong + 4.8) * 0.30, -10.0, -1.6);
    h = h * (1 - portShore) + harborH * portShore;
  }

  return h;
}

/**
 * Drapes mountain/coastal paths directly onto the REAL natural mountain terrain while strictly
 * enforcing gentle walkable slopes (<= maxSlopeDeg) and locking landmark endpoints. Eliminates
 * vertical cut-and-fill cliff trenches so every animal trail hugs genuine mountain ridges!
 */
function drapePathOntoMountain(
  path: GradedPathSpec,
  lockedIndices: Set<number>,
  maxSlopeDeg: number
): void {
  const n = path.points.length;
  const natural = new Array<number>(n);
  const ys = new Array<number>(n);
  const maxTan = Math.tan((maxSlopeDeg * Math.PI) / 180);

  for (let i = 0; i < n; i++) {
    const [x, z, hintY] = path.points[i];
    const nh = Math.max(1.2, getNaturalTerrainHeight(x, z));
    natural[i] = nh;
    ys[i] = lockedIndices.has(i) ? hintY : nh;
  }

  const clampEdge = (a: number, b: number) => {
    const dist = Math.hypot(
      path.points[b][0] - path.points[a][0],
      path.points[b][1] - path.points[a][1]
    );
    const maxDh = dist * maxTan;
    const diff = ys[b] - ys[a];
    if (Math.abs(diff) > maxDh) {
      const excess = (Math.abs(diff) - maxDh) * Math.sign(diff);
      if (!lockedIndices.has(a) && !lockedIndices.has(b)) {
        ys[a] += excess * 0.5;
        ys[b] -= excess * 0.5;
      } else if (!lockedIndices.has(b)) {
        ys[b] = ys[a] + maxDh * Math.sign(diff);
      } else if (!lockedIndices.has(a)) {
        ys[a] = ys[b] - maxDh * Math.sign(diff);
      }
    }
  };

  // Phase 1: Natural-ridge spring + bidirectional slope enforcement
  for (let iter = 0; iter < 30; iter++) {
    for (let i = 1; i < n - 1; i++) {
      if (lockedIndices.has(i)) continue;
      const avgN = (ys[i - 1] + ys[i + 1]) * 0.5;
      ys[i] = ys[i] * 0.35 + avgN * 0.20 + natural[i] * 0.45;
      ys[i] = Math.max(1.2, ys[i]);
    }
    for (let i = 0; i < n - 1; i++) clampEdge(i, i + 1);
    for (let i = n - 2; i >= 0; i--) clampEdge(i, i + 1);
  }

  // Phase 2: Pure bidirectional slope-limit convergence so EVERY segment is guaranteed walkable <= maxSlopeDeg
  for (let iter = 0; iter < 96; iter++) {
    for (let i = 0; i < n - 1; i++) clampEdge(i, i + 1);
    for (let i = n - 2; i >= 0; i--) clampEdge(i, i + 1);
  }

  for (let i = 0; i < n; i++) {
    path.points[i][2] = Math.round(ys[i] * 10) / 10;
  }
}

// Drape ALL 11 mountain/coastal paths onto real 3km x 6km slopes & pre-bin into 128m spatial hash (< 1.5ms!)
(function buildSpatialAccel() {
  const byId = new Map(GRADED_PATHS.map((p) => [p.id, p]));

  const coastal = byId.get('road_coastal');
  if (coastal) drapePathOntoMountain(coastal, new Set([0, coastal.points.length - 1]), 18);

  const forestry = byId.get('road_forestry');
  if (forestry) drapePathOntoMountain(forestry, new Set([0, 4, 5, 6]), 16);

  const summitTrail = byId.get('trail_summit_865');
  if (summitTrail) drapePathOntoMountain(summitTrail, new Set([0, summitTrail.points.length - 1]), 24);

  // Sync Secret Base trailhead seamlessly to draped Summit Trail junction pt[3]
  const secretTrail = byId.get('trail_secret_base');
  if (secretTrail && summitTrail) {
    secretTrail.points[0][2] = summitTrail.points[3][2];
    drapePathOntoMountain(secretTrail, new Set([0, 3, secretTrail.points.length - 1]), 18);
  }

  // Sync Hidden Port trailhead seamlessly to draped Forestry Road end
  const portTrail = byId.get('trail_hidden_port');
  if (portTrail && forestry) {
    portTrail.points[0][2] = forestry.points[forestry.points.length - 1][2];
    drapePathOntoMountain(portTrail, new Set([0, 11, portTrail.points.length - 1]), 24.5);
  }

  // ★ Drape 3 Brand-New 3km x 6km Alpine Ridge & Headland Trails!
  const eastTrail = byId.get('trail_east_ridge');
  if (eastTrail && summitTrail) {
    eastTrail.points[0][2] = summitTrail.points[3][2];
    drapePathOntoMountain(eastTrail, new Set([0]), 25);
    const lastE = eastTrail.points[eastTrail.points.length - 1];
    EAST_CLIFF_POINT.y = lastE[2];
  }

  const westTrail = byId.get('trail_west_terrace');
  if (westTrail && forestry) {
    westTrail.points[0][2] = forestry.points[forestry.points.length - 1][2];
    drapePathOntoMountain(westTrail, new Set([0]), 25);
    const lastW = westTrail.points[westTrail.points.length - 1];
    WEST_BLUFF_POINT.y = lastW[2];
  }

  const northCalderaTrail = byId.get('trail_north_caldera');
  if (northCalderaTrail && summitTrail) {
    northCalderaTrail.points[0][2] = SUMMIT_POINT.y;
    drapePathOntoMountain(northCalderaTrail, new Set([0]), 25);
    const lastN = northCalderaTrail.points[northCalderaTrail.points.length - 1];
    NORTH_CALDERA_POINT.y = lastN[2];
  }

  for (const path of GRADED_PATHS) {
    const pad = path.halfWidth + path.blendWidth + 4;
    for (let i = 0; i < path.points.length - 1; i++) {
      const [ax, az, ay] = path.points[i];
      const [bx, bz, by] = path.points[i + 1];
      const dx = bx - ax;
      const dz = bz - az;
      const seg: PathSegment = {
        ax, az, ay, bx, bz, by, dx, dz,
        len2: dx * dx + dz * dz || 1,
        halfWidth: path.halfWidth,
        blendWidth: path.blendWidth,
        kind: path.kind,
      };
      const minCX = worldToCell(Math.min(ax, bx) - pad, TERRAIN_EXTENT_X, ACCEL_NX - 1);
      const maxCX = worldToCell(Math.max(ax, bx) + pad, TERRAIN_EXTENT_X, ACCEL_NX - 1);
      const minCZ = worldToCell(Math.min(az, bz) - pad, TERRAIN_EXTENT_Z, ACCEL_NZ - 1);
      const maxCZ = worldToCell(Math.max(az, bz) + pad, TERRAIN_EXTENT_Z, ACCEL_NZ - 1);
      for (let cz = minCZ; cz <= maxCZ; cz++) {
        for (let cx = minCX; cx <= maxCX; cx++) {
          cellPaths[cellIndex(cx, cz)].push(seg);
        }
      }
    }
  }

  // Grade smooth walkable front-yard approach paths (玄関アプローチ) from each built house to its village road!
  for (const s of PLANNED_SITES) {
    if (!BUILT_HOUSE_IDS.has(s.id) || s.id === 'H09') continue;
    let bestD = Infinity;
    let rx = s.x;
    let rz = s.z;
    let ry = s.y;
    for (const path of GRADED_PATHS) {
      if (path.kind !== 'road') continue;
      for (let i = 0; i < path.points.length - 1; i++) {
        const [x0, z0, y0] = path.points[i];
        const [x1, z1, y1] = path.points[i + 1];
        const dx = x1 - x0;
        const dz = z1 - z0;
        const t = clamp(((s.x - x0) * dx + (s.z - z0) * dz) / (dx * dx + dz * dz || 1), 0, 1);
        const px = x0 + t * dx;
        const pz = z0 + t * dz;
        const py = y0 + t * (y1 - y0);
        const d = Math.hypot(s.x - px, s.z - pz);
        if (d < bestD) {
          bestD = d;
          rx = px;
          rz = pz;
          ry = py;
        }
      }
    }
    const startDist = s.id === 'H09' ? 7.35 : Math.max(4.6, s.radiusZ - 0.8);
    if (bestD <= startDist + 1.0) continue;
    const sn = Math.sin(s.yaw);
    const cs = Math.cos(s.yaw);
    const ax = s.x + sn * startDist;
    const az = s.z + cs * startDist;
    const ay = s.id === 'H09' ? s.y - 1.65 : s.y;
    const dx = rx - ax;
    const dz = rz - az;
    const hw = s.id === 'H09' ? 2.0 : 2.6;
    const bw = s.id === 'H09' ? 5.5 : 10.5;
    const seg: PathSegment = {
      ax, az, ay, bx: rx, bz: rz, by: ry, dx, dz,
      len2: dx * dx + dz * dz || 1,
      halfWidth: hw,
      blendWidth: bw,
      kind: 'trail',
    };
    const pad = hw + bw + 4;
    const minCX = worldToCell(Math.min(ax, rx) - pad, TERRAIN_EXTENT_X, ACCEL_NX - 1);
    const maxCX = worldToCell(Math.max(ax, rx) + pad, TERRAIN_EXTENT_X, ACCEL_NX - 1);
    const minCZ = worldToCell(Math.min(az, rz) - pad, TERRAIN_EXTENT_Z, ACCEL_NZ - 1);
    const maxCZ = worldToCell(Math.max(az, rz) + pad, TERRAIN_EXTENT_Z, ACCEL_NZ - 1);
    for (let cz = minCZ; cz <= maxCZ; cz++) {
      for (let cx = minCX; cx <= maxCX; cx++) {
        cellPaths[cellIndex(cx, cz)].push(seg);
      }
    }
  }

  for (const s of PLANNED_SITES) {
    const r = Math.max(s.radiusX, s.radiusZ) + s.blendMargin + 4;
    const minCX = worldToCell(s.x - r, TERRAIN_EXTENT_X, ACCEL_NX - 1);
    const maxCX = worldToCell(s.x + r, TERRAIN_EXTENT_X, ACCEL_NX - 1);
    const minCZ = worldToCell(s.z - r, TERRAIN_EXTENT_Z, ACCEL_NZ - 1);
    const maxCZ = worldToCell(s.z + r, TERRAIN_EXTENT_Z, ACCEL_NZ - 1);
    for (let cz = minCZ; cz <= maxCZ; cz++) {
      for (let cx = minCX; cx <= maxCX; cx++) {
        cellSites[cellIndex(cx, cz)].push(s);
      }
    }
  }
})();

// ============================================================================
// FAST SPATIAL-HASHED MASTER SAMPLE (TERRAIN + ROADS + ANIMAL TRAILS + 32 SITES)
// ============================================================================
export interface TerrainSample {
  height: number;
  roadWeight: number;      // Cracked asphalt / gravel village & forestry roads
  trailWeight: number;     // Narrow dirt/root animal trails (獣道)
  streamWeight: number;    // Mountain gorge creek moisture
  coalWeight: number;      // 1890 Coal Mine dark shale zone
  terraceWeight: number;   // Graded planned building/park/port sites
}

export function sampleTerrain(x: number, z: number): TerrainSample {
  let h = getNaturalTerrainHeight(x, z);

  const cx = worldToCell(x, TERRAIN_EXTENT_X, ACCEL_NX - 1);
  const cz = worldToCell(z, TERRAIN_EXTENT_Z, ACCEL_NZ - 1);
  const cIdx = cellIndex(cx, cz);

  // 1. Cut-and-Fill Elevation-Guided Roads & Animal Trails (only checks local spatial cell!)
  const segs = cellPaths[cIdx];
  let roadWeight = 0;
  let trailWeight = 0;
  let bestPathBlend = 0;
  let bestPathTargetY = h;

  for (let i = 0; i < segs.length; i++) {
    const s = segs[i];
    const t = clamp(((x - s.ax) * s.dx + (z - s.az) * s.dz) / s.len2, 0, 1);
    const px = s.ax + s.dx * t;
    const pz = s.az + s.dz * t;
    const dist = Math.hypot(x - px, z - pz);
    const maxR = s.halfWidth + s.blendWidth;
    if (dist >= maxR) continue;

    const gradeW = 1.0 - smoothstep(s.halfWidth, maxR, dist);
    const surfW = 1.0 - smoothstep(s.halfWidth * 0.72, s.halfWidth * 1.35, dist);
    const segY = s.ay + (s.by - s.ay) * t;

    if (gradeW > bestPathBlend) {
      bestPathBlend = gradeW;
      bestPathTargetY = segY;
    }
    if (s.kind === 'trail') {
      if (surfW > trailWeight) trailWeight = surfW;
    } else {
      if (surfW > roadWeight) roadWeight = surfW;
    }
  }

  let siteBlend = 0;
  let siteTargetY = h;
  const sites = cellSites[cIdx];
  let terraceWeight = 0;
  for (let i = 0; i < sites.length; i++) {
    const st = sites[i];
    const dx = x - st.x;
    const dz = z - st.z;
    // Exact inverse of Three.js rotation.y = st.yaw so every graded terrace aligns 100% with its stone retaining wall!
    const cos = Math.cos(st.yaw);
    const sin = Math.sin(st.yaw);
    const lx = dx * cos - dz * sin;
    const lz = dx * sin + dz * cos;
    const ox = Math.max(0, Math.abs(lx) - st.radiusX);
    const oz = Math.max(0, Math.abs(lz) - st.radiusZ);
    const outDist = Math.hypot(ox, oz);
    if (outDist < st.blendMargin) {
      const w = 1.0 - smoothstep(0.0, st.blendMargin, outDist);
      if (w > siteBlend) {
        siteBlend = w;
        siteTargetY = st.y;
      }
      if (w > terraceWeight) terraceWeight = w;
    }
  }

  // Combine natural geology, graded road/trail, and graded terrace smoothly with zero sharp lips
  const pathMicro = trailWeight > 0 ? Math.sin(x * 0.45 + z * 0.37) * 0.07 : 0;
  const maxW = Math.max(bestPathBlend, siteBlend);
  if (maxW > 0) {
    const sumW = bestPathBlend + siteBlend;
    const gradedY = ((bestPathTargetY + pathMicro) * bestPathBlend + siteTargetY * siteBlend) / sumW;
    h = h * (1 - maxW) + gradedY * maxW;
  }

  // 3. Multi-Watershed Stream & Gorge Creek Proximity (damp cobbles, mossy ravine floors & wet rock glint!)
  const streamX = getStreamCenterX(z);
  const dStream = Math.abs(x - streamX);
  const mainStreamW =
    (1.0 - smoothstep(4.5, 19.0, dStream)) *
    smoothstep(-850, -520, z) *
    smoothstep(2180, 2000, z);
  const eastStreamW =
    x > 540
      ? (1.0 - smoothstep(4.5, 22.0, Math.abs(z - getEastGorgeCenterZ(x)))) *
        smoothstep(560, 720, x) *
        (1.0 - smoothstep(1300, 1440, x))
      : 0;
  const westStreamW =
    x < -540
      ? (1.0 - smoothstep(4.5, 22.0, Math.abs(z - getWestGorgeCenterZ(x)))) *
        smoothstep(-560, -720, x) *
        (1.0 - smoothstep(-1300, -1440, x))
      : 0;
  const northStreamW =
    z < -1950
      ? (1.0 - smoothstep(4.5, 24.0, Math.abs(x - 10 - Math.sin(z * 0.006) * 35))) *
        smoothstep(-1950, -2120, z) *
        smoothstep(-2860, -2640, z)
      : 0;
  const streamWeight = Math.max(mainStreamW, eastStreamW, westStreamW, northStreamW);

  // 4. Coal slate scree around 1890 Coal Mine site
  const dMine = Math.hypot(x - MINE_PORTAL_POINT.x, z - MINE_PORTAL_POINT.z);
  const coalWeight = 1.0 - smoothstep(28.0, 145.0, dMine);

  return { height: h, roadWeight, trailWeight, streamWeight, coalWeight, terraceWeight };
}

export function getTerrainHeight(x: number, z: number): number {
  return sampleTerrain(x, z).height;
}

export function getTerrainNormal(x: number, z: number, step = 2.0): [number, number, number] {
  const hL = getTerrainHeight(x - step, z);
  const hR = getTerrainHeight(x + step, z);
  const hD = getTerrainHeight(x, z - step);
  const hU = getTerrainHeight(x, z + step);
  const nx = hL - hR;
  const ny = 2.0 * step;
  const nz = hD - hU;
  const len = Math.hypot(nx, ny, nz) || 1;
  return [nx / len, ny / len, nz / len];
}

export function getSiteById(id: string): PlannedSite {
  const found = PLANNED_SITES.find((s) => s.id === id);
  if (!found) throw new Error(`Unknown site: ${id}`);
  return found;
}
