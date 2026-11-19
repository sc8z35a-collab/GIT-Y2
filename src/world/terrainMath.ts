import type { TerraceSpec } from '../core/types';

export const ISLAND_HALF_W = 1000; // 2km East-West (-1000..+1000)
export const ISLAND_HALF_L = 2500; // 5km North-South (-2500..+2500)
export const TERRAIN_EXTENT_X = 1024; // 2048m total -> 16 chunks of 128m
export const TERRAIN_EXTENT_Z = 2560; // 5120m total -> 40 chunks of 128m

// Key world landmarks
export const SPAWN_POINT = { x: 42, z: 2158, yaw: Math.PI * 0.96 }; // 漂着浜 (Driftwood Cove)
export const SUMMIT_POINT = { x: 80, z: -1480, y: 865.0 };          // 黒磯岳主峰 (865m)
export const LOOKOUT_POINT = { x: 235, z: 540, y: 268.0 };          // 見晴らし坂 (image.png vista)
export const MINE_PORTAL_POINT = { x: -145, z: -890, y: 348.0 };    // 旧黒磯炭鉱 1890 坑口予定地
export const SECRET_BASE_POINT = { x: 430, z: -580, y: 376.0 };     // 子供たちの山奥の秘密基地
export const HIDDEN_PORT_POINT = { x: -522, z: -1768, y: 2.8 };     // けもの道先の秘境旧港（建設案）
export const PARK_POINT = { x: -68, z: 215, y: 242.0 };             // 見晴らし村営公園
export const KOBAN_POINT = { x: 82, z: 480, y: 238.0 };             // 黒磯駐在所（交番）

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
      [-545, -1575, 130.0],
      [-480, -1635, 120.0],
      [-442, -1690, 82.0],
      [-455, -1722, 42.0],
      [-472, -1748, 18.0],
      [-498, -1764, 6.0],
      [-522, -1768, 2.8],  // PORT01 Hidden Port Crescent Cove
    ],
  },
];

// ============================================================================
// ALL 32 PLANNED CONSTRUCTION SITES (25 HOUSES + 2 SHOPS + 1 KOBAN + 1 PARK + 1 SECRET BASE + 1 MINE + 1 HIDDEN PORT)
// 25 Houses average elevation = ~254m, terraced directly along the 3 hillside village roads!
// ============================================================================
export const PLANNED_SITES: PlannedSite[] = [
  // --- Public, Commercial & Landmark Sites (7) ---
  { id: 'K01',    name: '黒磯駐在所（交番）予定地',       category: 'koban',       x:   82, z:   480, y: 238.0, radiusX: 7.0,  radiusZ: 6.0,  yaw: -0.40, blendMargin: 13.0, note: '海岸林道と中段・下段村道の要衝交差点' },
  { id: 'S01',    name: '黒磯よろず商店・郵便取扱所',     category: 'shop',        x:  132, z:   315, y: 252.0, radiusX: 8.5,  radiusZ: 7.0,  yaw: -1.35, blendMargin: 14.0, note: '中段本通り角地・商業施設01予定地' },
  { id: 'S02',    name: '炭鉱購買部・食堂「みなとや」',   category: 'shop',        x:  -72, z:  -165, y: 258.0, radiusX: 9.5,  radiusZ: 7.2,  yaw:  0.45, blendMargin: 15.0, note: '渓谷中央・商業施設02予定地' },
  { id: 'P01',    name: '見晴らし村営公園',               category: 'park',        x:  -68, z:   215, y: 242.0, radiusX: 15.0, radiusZ: 12.0, yaw:  0.20, blendMargin: 16.0, note: '石垣縁の芝雑草広場・村営公園（1件）' },
  { id: 'B01',    name: '子供たちの山奥の秘密基地',       category: 'secret_base', x:  430, z:  -580, y: 376.0, radiusX: 8.0,  radiusZ: 7.5,  yaw: -0.80, blendMargin: 14.0, note: '東山中・深い杉林とシダの隠れ窪地' },
  { id: 'M01',    name: '旧黒磯炭鉱 第一坑口（1890）',    category: 'mine',        x: -145, z:  -890, y: 348.0, radiusX: 13.0, radiusZ: 11.0, yaw:  0.15, blendMargin: 16.0, note: '明治23年開坑予定地・黒岩断崖直下' },
  { id: 'PORT01', name: '秘境の旧港（建設案）',           category: 'port',        x: -522, z: -1768, y:   2.8, radiusX: 14.0, radiusZ:  4.8, yaw:  Math.PI * 0.25, blendMargin: 4.5, note: 'けもの道を抜けた先の北西天然入江港' },

  // --- Lower Hillside Road Houses (H01–H08: Y = 222m..242m) ---
  { id: 'H01', name: '民家 01（浜田家・二階建町家）',     category: 'house', x:   49, z:  437, y: 233.0, radiusX: 6.8, radiusZ: 5.8, yaw: -0.68, blendMargin: 11.5, note: '下段斜面・交差点下・焼杉いぶし銀本瓦二階家' },
  { id: 'H02', name: '民家 02（磯部家・三階建櫓家）',     category: 'house', x:  -32, z:  406, y: 226.0, radiusX: 6.2, radiusZ: 5.8, yaw:  2.44, blendMargin: 11.5, note: '下段斜面・石州赤茶釉薬瓦三階見張り櫓家' },
  { id: 'H03', name: '民家 03（高木家・L字二階工房邸）',  category: 'house', x:  -79, z:  354, y: 224.0, radiusX: 7.6, radiusZ: 6.4, yaw:  2.12, blendMargin: 12.0, note: '下段斜面・L字船大工二階工房（北屋根半崩落）' },
  { id: 'H04', name: '民家 04（岩崎家・石蔵三階民家）',   category: 'house', x: -108, z:  282, y: 228.0, radiusX: 6.8, radiusZ: 5.8, yaw:  1.25, blendMargin: 12.0, note: '下段斜面・1F野面積石壁＋苔黒瓦寄棟三階家' },
  { id: 'H05', name: '民家 05（佐伯家・苔蔦二階廃墟）',   category: 'house', x:  -98, z:  152, y: 235.0, radiusX: 6.2, radiusZ: 5.4, yaw:  1.58, blendMargin: 12.0, note: '公園北側・苔と蔦の半壊二階建廃家' },
  { id: 'H06', name: '民家予定地 06（藤原家）',           category: 'house', x: -132, z:   62, y: 226.0, radiusX: 6.2, radiusZ: 5.4, yaw:  1.45, blendMargin: 12.0, note: '沢沿い・半壊家屋予定地' },
  { id: 'H07', name: '民家予定地 07（安藤家）',           category: 'house', x: -145, z:  -38, y: 228.0, radiusX: 6.6, radiusZ: 5.6, yaw:  1.50, blendMargin: 12.5, note: '西斜面・大工棟梁家予定地' },
  { id: 'H08', name: '民家予定地 08（永井家）',           category: 'house', x: -130, z: -120, y: 238.0, radiusX: 6.4, radiusZ: 5.4, yaw:  1.25, blendMargin: 12.0, note: '教員宿舎予定地' },

  // --- Middle Main Hillside Road Houses (H09–H18: Y = 246m..268m) ---
  { id: 'H09', name: '民家 09（森本家・赤瓦三階名家）',   category: 'house', x:  212, z:  518, y: 266.0, radiusX: 7.6, radiusZ: 6.4, yaw: -0.45, blendMargin: 12.5, note: '見晴らし坂手前・赤瓦入母屋三階建＆見晴らし縁側' },
  { id: 'H10', name: '民家 10（白井医院・擬洋風三階館）', category: 'house', x:  208, z:  424, y: 260.0, radiusX: 7.2, radiusZ: 6.0, yaw: -1.12, blendMargin: 12.0, note: '明治擬洋風三階木造診療所・いぶし銀本瓦入母屋' },
  { id: 'H11', name: '民家 11（黒田本家・庄屋四階望楼邸）', category: 'house', x: 162, z: 348, y: 254.0, radiusX: 8.8, radiusZ: 7.2, yaw: -1.18, blendMargin: 13.5, note: '1872年築・四重本瓦入母屋＆四階望楼の庄屋本宅' },
  { id: 'H12', name: '民家 12（松岡家・白壁瓦二階家）',   category: 'house', x:   72, z:  262, y: 248.0, radiusX: 6.8, radiusZ: 5.8, yaw:  1.85, blendMargin: 12.5, note: '参考写真中央・白漆喰＆濃灰いぶし瓦二階家' },
  { id: 'H13', name: '民家予定地 13（神谷家）',           category: 'house', x:   82, z:  175, y: 249.0, radiusX: 6.4, radiusZ: 5.6, yaw: -1.65, blendMargin: 12.0, note: '鎮守宮守の家予定地' },
  { id: 'H14', name: '民家予定地 14（村田家）',           category: 'house', x:   56, z:   88, y: 249.0, radiusX: 6.6, radiusZ: 5.6, yaw: -1.55, blendMargin: 12.0, note: '煉瓦煙突の家予定地' },
  { id: 'H15', name: '民家予定地 15（吉田家）',           category: 'house', x:   34, z:  -10, y: 252.0, radiusX: 7.2, radiusZ: 6.4, yaw: -1.35, blendMargin: 12.5, note: '増築つぎはぎ二棟家予定地' },
  { id: 'H16', name: '民家予定地 16（田辺家）',           category: 'house', x:   -4, z:  -92, y: 255.0, radiusX: 6.8, radiusZ: 5.6, yaw: -1.10, blendMargin: 12.5, note: '半地下石倉農家予定地' },
  { id: 'H17', name: '民家予定地 17（大野家）',           category: 'house', x:  -52, z: -225, y: 260.0, radiusX: 6.0, radiusZ: 5.4, yaw:  0.60, blendMargin: 12.0, note: '蔦に覆われた全壊寸前家予定地' },
  { id: 'H18', name: '民家予定地 18（杉山家）',           category: 'house', x:  -96, z: -315, y: 266.0, radiusX: 6.2, radiusZ: 5.4, yaw:  0.90, blendMargin: 12.0, note: '木こりの丸太小屋予定地' },

  // --- Upper Hillside Road Houses (H19–H25: Y = 272m..290m) ---
  { id: 'H19', name: '民家予定地 19（小川家・懸造り）',   category: 'house', x:  282, z:  468, y: 273.0, radiusX: 6.0, radiusZ: 5.8, yaw: -1.75, blendMargin: 12.5, note: '急斜面・懸造り家屋予定地' },
  { id: 'H20', name: '民家予定地 20（明治技師館）',       category: 'house', x:  280, z:  340, y: 275.0, radiusX: 7.4, radiusZ: 6.2, yaw: -1.65, blendMargin: 13.0, note: '高台展望・洋館社宅予定地' },
  { id: 'H21', name: '民家予定地 21（第一坑夫長屋）',     category: 'house', x:  262, z:  215, y: 277.0, radiusX: 10.0, radiusZ: 5.2, yaw: -1.60, blendMargin: 13.5, note: '三戸連棟炭住長屋予定地' },
  { id: 'H22', name: '民家 22（黒岩監督邸・懸造り四階館）', category: 'house', x: 246, z: 95, y: 279.0, radiusX: 7.4, radiusZ: 6.4, yaw: -1.48, blendMargin: 13.0, note: '高石垣＆懸造り木柱脚・重層瓦屋根の四階監督官邸' },
  { id: 'H23', name: '民家予定地 23（鉄山鍛冶場）',       category: 'house', x:  232, z:  -45, y: 281.0, radiusX: 7.0, radiusZ: 5.4, yaw: -1.70, blendMargin: 12.5, note: '鍛冶屋仕事場兼住居予定地' },
  { id: 'H24', name: '民家予定地 24（炭鉱詰所）',         category: 'house', x:  222, z: -175, y: 285.0, radiusX: 7.0, radiusZ: 5.4, yaw: -1.80, blendMargin: 12.5, note: '詰所兼独身寮予定地' },
  { id: 'H25', name: '民家予定地 25（沢田小屋）',         category: 'house', x:  142, z: -362, y: 288.0, radiusX: 5.8, radiusZ: 5.2, yaw: -2.15, blendMargin: 12.0, note: '落石崩壊小屋・獣道入口近く' },
];

/** The 10 individually hand-crafted 2F–4F wooden detached houses completed in Phase 2 */
export const BUILT_HOUSE_IDS = new Set<string>([
  'H01', 'H02', 'H03', 'H04', 'H05', 'H09', 'H10', 'H11', 'H12', 'H22',
]);

const BUILT_HOUSE_SITES: PlannedSite[] = PLANNED_SITES.filter((s) => BUILT_HOUSE_IDS.has(s.id));

/** Fast check whether world (x, z) lies within any constructed house's interior footprint */
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
const ACCEL_NX = Math.ceil((TERRAIN_EXTENT_X * 2) / ACCEL_CELL); // 16
const ACCEL_NZ = Math.ceil((TERRAIN_EXTENT_Z * 2) / ACCEL_CELL); // 40

const cellPaths: PathSegment[][] = Array.from({ length: ACCEL_NX * ACCEL_NZ }, () => []);
const cellSites: PlannedSite[][] = Array.from({ length: ACCEL_NX * ACCEL_NZ }, () => []);

function cellIndex(cx: number, cz: number): number {
  return cz * ACCEL_NX + cx;
}

function worldToCell(v: number, extent: number, maxN: number): number {
  return clamp(Math.floor((v + extent) / ACCEL_CELL), 0, maxN - 1);
}

// ============================================================================
// NATURAL 2KM x 5KM MOUNTAIN ISLAND GEOLOGY (BEFORE ROAD/TRAIL/TERRACE GRADING)
// ============================================================================
export function getNaturalTerrainHeight(x: number, z: number): number {
  // 1. Organic 2km x 5km volcanic-tectonic island silhouette
  const nx = x / 960.0;
  const nz = z / 2410.0;
  const coastWarp = fbm2D(x * 0.00072, z * 0.00072, 3) * 0.13;
  const taper = 1.0 - 0.14 * smoothstep(-1350, -2420, z) - 0.08 * smoothstep(1600, 2420, z);
  const radial = Math.sqrt((nx / taper) * (nx / taper) + nz * nz) + coastWarp;

  // Driftwood Cove bay carved cleanly on south shore (+42, +2290)
  const driftBay = Math.exp(
    -(Math.pow((x - 42) / 215.0, 2) + Math.pow((z - 2345) / 240.0, 2))
  );

  // Hidden Port Crescent Cove carved cleanly on northwest shore (-610, -1815) so (-522,-1768) sits right on shore!
  const portBay = Math.exp(
    -(Math.pow((x + 615) / 185.0, 2) + Math.pow((z + 1820) / 175.0, 2))
  );

  const effDist = radial + driftBay * 0.36 + portBay * 0.24;
  const landMask = 1.0 - smoothstep(0.74, 1.03, effDist);
  const shelfMask = 1.0 - smoothstep(0.95, 1.24, effDist);
  if (shelfMask <= 0.0001) return -28.0;

  // 2. Elevated Mountain Island Core Plateau (~235m central mountain-ringed village bowl!)
  // Smoothly rises from coast inward to ~235m highland plateau, surrounded by higher mountain rings
  const plateauCore = 232.0 * smoothstep(0.98, 0.44, effDist);

  // 3. Surrounding Rolling & Jagged Mountain Peaks (起伏ある山々)
  // ★ Master Peak: Mt. Kuroiso Main Summit (黒磯岳主峰 = 865.0m at +80, -1480 — strictly highest peak on island!)
  const mainPeak =
    595.0 * Math.exp(-(Math.pow((x - 80) / 485.0, 2) + Math.pow((z + 1480) / 560.0, 2)));

  // Sub-peaks surrounding the 250m village bowl on ALL FOUR sides + northern alpine range
  const nePeak =
    235.0 * Math.exp(-(Math.pow((x - 610) / 340.0, 2) + Math.pow((z + 1320) / 400.0, 2)));
  const nwPeak =
    255.0 * Math.exp(-(Math.pow((x + 495) / 335.0, 2) + Math.pow((z + 1230) / 390.0, 2)));
  const northCliffPeak =
    250.0 * Math.exp(-(Math.pow((x + 120) / 350.0, 2) + Math.pow((z + 2060) / 330.0, 2)));

  // East & West towering ridges enclosing the village bowl (matching image.png!)
  const eastKannon =
    415.0 * Math.exp(-(Math.pow((x - 765) / 295.0, 2) + Math.pow((z + 60) / 680.0, 2)));
  const westByobu =
    385.0 * Math.exp(-(Math.pow((x + 710) / 315.0, 2) + Math.pow((z - 120) / 680.0, 2)));

  // Southeast & Southwest outer ring ridges enclosing the south of the village
  const seRing =
    275.0 * Math.exp(-(Math.pow((x - 650) / 335.0, 2) + Math.pow((z - 1050) / 520.0, 2)));
  const swRing =
    255.0 * Math.exp(-(Math.pow((x + 610) / 335.0, 2) + Math.pow((z - 1120) / 520.0, 2)));

  // South bowl rim spurs & twin coastal headlands flanking Driftwood Cove
  const sRimE =
    145.0 * Math.exp(-(Math.pow((x - 310) / 240.0, 2) + Math.pow((z - 1500) / 300.0, 2)));
  const sRimW =
    130.0 * Math.exp(-(Math.pow((x + 250) / 240.0, 2) + Math.pow((z - 1540) / 300.0, 2)));
  const swCape =
    155.0 * Math.exp(-(Math.pow((x + 520) / 240.0, 2) + Math.pow((z - 2050) / 280.0, 2)));
  const seCape =
    180.0 * Math.exp(-(Math.pow((x - 550) / 250.0, 2) + Math.pow((z - 2010) / 280.0, 2)));

  // Protective natural headland sheltering the Northwest Hidden Port Cove
  const portHeadland =
    98.0 * Math.exp(-(Math.pow((x + 560) / 115.0, 2) + Math.pow((z + 1575) / 120.0, 2)));

  // 4. Sculpted Central Village Hillside Slope + Northern Coal Gorge valley
  const villageZone = Math.exp(
    -(Math.pow((x - 60) / 420.0, 2) + Math.pow((z - 100) / 680.0, 2))
  );
  // Kuroiso Gorge incision down the western edge of the village bowl
  const streamX = getStreamCenterX(z);
  const dStream = Math.abs(x - streamX);
  const gorgeCut =
    -58.0 *
    Math.exp(-Math.pow(dStream / 72.0, 2)) *
    smoothstep(-880, -320, z) *
    smoothstep(2180, 1650, z);

  // Natural coal valley draw leading up to M01 (-145, -890) beneath the main peak cliff
  const coalDraw =
    -112.0 *
    Math.exp(-(Math.pow((x + 150) / 165.0, 2) + Math.pow((z + 820) / 210.0, 2))) *
    smoothstep(-965, -895, z);

  // Subtle eastward slope across the village so houses sit on stepped mountain flank roads!
  const hillsideTilt = villageZone * ((x + 80) * 0.145 - (z - 180) * 0.032);

  // 5. Multi-scale Alpine Ridged Erosion & Sharp Mountain Spurs
  const macroRidge = ridgedFbm2D(x * 0.0018, z * 0.0018, 4);
  const midRidge = ridgedFbm2D(x * 0.0054, z * 0.0054, 3);
  const fineNoise = fbm2D(x * 0.022, z * 0.022, 2);

  const mountainRugged = 1.0 - villageZone * 0.58;
  const geology =
    (macroRidge - 0.36) * (88.0 * mountainRugged + 22.0) +
    (midRidge - 0.42) * (22.0 * mountainRugged + 6.0) +
    fineNoise * 3.2;

  // Combine elevation
  let inlandH =
    plateauCore +
    mainPeak +
    nePeak +
    nwPeak +
    northCliffPeak +
    eastKannon +
    westByobu +
    seRing +
    swRing +
    sRimE +
    sRimW +
    swCape +
    seCape +
    portHeadland +
    gorgeCut +
    coalDraw +
    hillsideTilt +
    geology;

  // Fine-calibrate the exact 865.0m Master Summit crown at (X:+80, Z:-1480) — proudest point on Kuroiso-jima!
  const summitDist = Math.hypot(x - SUMMIT_POINT.x, z - SUMMIT_POINT.z);
  if (summitDist < 220.0) {
    const sw = 1.0 - smoothstep(12.0, 220.0, summitDist);
    const targetSummit = 865.0 - Math.max(0, summitDist - 10.0) * 0.58 + fineNoise * 0.5;
    inlandH = inlandH * (1 - sw) + targetSummit * sw;
  }

  // Carve the southern coastal valley approach from Driftwood Cove northward toward the village
  const southGorge =
    Math.exp(-(Math.pow((x - 10) / 185.0, 2) + Math.pow((z - 1960) / 290.0, 2)));
  inlandH *= 1.0 - southGorge * 0.72;

  // Carve the secluded northwest harbor cove approach so PORT01 (-522,-1768) sits cleanly at Y=2.8m beside deep calm water
  const portCoveBasin = Math.exp(
    -(Math.pow((x + 530) / 86.0, 2) + Math.pow((z + 1775) / 86.0, 2))
  );
  inlandH = inlandH * (1 - portCoveBasin * 0.90) + 2.4 * (portCoveBasin * 0.90);

  // Island shoreline dropoff into ocean seabed
  const seaFloor = -28.0 * (1.0 - shelfMask) - 2.6 * shelfMask;
  let h = seaFloor + (inlandH - seaFloor) * Math.pow(landMask, 0.54);

  // Gentle sandy crescent beach at Driftwood Cove (+42, +2160)
  const driftBeach = Math.exp(
    -(Math.pow((x - 42) / 105.0, 2) + Math.pow((z - 2165) / 72.0, 2))
  );
  if (driftBeach > 0.005) {
    const beachH = clamp((2205 - z) * 0.045 + 0.15, -2.5, 6.2);
    h = h * (1 - driftBeach) + beachH * driftBeach;
  }

  // Gentle shore shelf at Hidden Port Cove (-522, -1768) dropping cleanly off seawall into deep harbor water
  const portShore = Math.exp(
    -(Math.pow((x + 522) / 66.0, 2) + Math.pow((z + 1768) / 66.0, 2))
  );
  if (portShore > 0.005) {
    // SE axis along (+0.707, +0.707): seAlong=0 is quay apron (2.8m), seAlong<-4.8 drops into deep cove water under pier!
    const seAlong = ((x + 522) + (z + 1768)) * 0.7071;
    const harborH = seAlong >= -4.8
      ? clamp(2.8 + Math.max(0, seAlong - 4.0) * 0.24, 2.6, 16.0)
      : clamp(-2.2 + (seAlong + 4.8) * 0.30, -9.0, -1.6);
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
  for (let iter = 0; iter < 24; iter++) {
    for (let i = 0; i < n - 1; i++) clampEdge(i, i + 1);
    for (let i = n - 2; i >= 0; i--) clampEdge(i, i + 1);
  }

  for (let i = 0; i < n; i++) {
    path.points[i][2] = Math.round(ys[i] * 10) / 10;
  }
}

// Drape mountain/coastal paths onto real slopes & pre-bin all segments + 32 sites into 128m spatial hash (< 1ms!)
(function buildSpatialAccel() {
  const byId = new Map(GRADED_PATHS.map((p) => [p.id, p]));

  const coastal = byId.get('road_coastal');
  if (coastal) drapePathOntoMountain(coastal, new Set([0, coastal.points.length - 1]), 18);

  const forestry = byId.get('road_forestry');
  if (forestry) drapePathOntoMountain(forestry, new Set([0, 5]), 22);

  const summitTrail = byId.get('trail_summit_865');
  if (summitTrail) drapePathOntoMountain(summitTrail, new Set([0, summitTrail.points.length - 1]), 27);

  // Sync Secret Base trailhead seamlessly to draped Summit Trail junction pt[3]
  const secretTrail = byId.get('trail_secret_base');
  if (secretTrail && summitTrail) {
    secretTrail.points[0][2] = summitTrail.points[3][2];
    drapePathOntoMountain(secretTrail, new Set([0, secretTrail.points.length - 1]), 22);
  }

  // Sync Hidden Port trailhead seamlessly to draped Forestry Road end
  const portTrail = byId.get('trail_hidden_port');
  if (portTrail && forestry) {
    portTrail.points[0][2] = forestry.points[forestry.points.length - 1][2];
    drapePathOntoMountain(portTrail, new Set([0, portTrail.points.length - 1]), 27);
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

  // 3. Stream proximity (for damp creek bed & mossy rocks)
  const streamX = getStreamCenterX(z);
  const dStream = Math.abs(x - streamX);
  const streamWeight =
    (1.0 - smoothstep(4.5, 18.0, dStream)) *
    smoothstep(-850, -520, z) *
    smoothstep(2180, 2000, z);

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
