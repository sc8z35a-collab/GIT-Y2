import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H08: 永井家（1889年築・黒磯分校 明治教員宿舎＆補習教室・二階館）— 2階建
 * 下段斜面村道北側・黒磯渓谷を見下ろす静かな高台に建つ、島の分校教員の宿舎兼寺子屋補習館。
 *  - 外観: 幅13.6mのT字切妻構成。西翼は一段前へ張り出した「補習教室棟（切妻破風＋杉鎧戸換気窓＋縦格子磨りガラス窓）」、
 *    東翼は深い南東縁側と2F障子サンルームを備えた和風教員住居棟。渓谷側擁壁には蛇籠石積み（gabion_stone）を採用。
 *  - 屋根: 他棟にない落ち着いた青銅苔瓦（青緑系いぶし本瓦・丁字切妻＋双鬼瓦＋西破風鬼瓦＋1F庇瓦）。
 *  - 1F: 西に木製教壇・大緑黒板・島地図・児童木机×4脚を備えた「補習教室」、東に石敷土間玄関・緑縁畳茶の間・昭和台所・南東広縁。
 *  - 2F: 本棚沿いの直階段を登ると、西に書道＆島史資料室、東に教員寝室＆磨りアクリル障子の「読書サンルーム」。
 */
export function buildHouse08Nagai(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Teacher's Schoolhouse & Residence Materials ---
  const gabionStone = catalog.getMaterial('gabion_stone', { roughness: 0.94, bumpScale: 0.08 });
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });
  const pebbleWalk = catalog.getMaterial('pebble_aggregate', { roughness: 0.93, bumpScale: 0.06 });
  const smoothCurb = catalog.getMaterial('smooth_concrete_dark', { roughness: 0.88, bumpScale: 0.04 });
  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.90, bumpScale: 0.05 });
  const horizWood = catalog.getMaterial('horizontal_wood_siding', { roughness: 0.88, bumpScale: 0.05 });
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.91, bumpScale: 0.05 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xf6f2e7 });
  const creamPlaster = catalog.getMaterial('cream_plaster', { roughness: 0.91, bumpScale: 0.03 });
  const washiWall = catalog.getMaterial('washi_plaster', { roughness: 0.91, bumpScale: 0.03 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.82, bumpScale: 0.04 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.80, bumpScale: 0.03 });
  const cobbleFloor = catalog.getMaterial('cobblestone', { roughness: 0.92, bumpScale: 0.06 });
  const ajiroCeil = catalog.getMaterial('woven_screen_brown', { roughness: 0.90, bumpScale: 0.05 });

  // --- Schoolhouse Windows, Screens & Props ---
  const schoolGlass = catalog.getMaterial('frosted_grid_window', { roughness: 0.28, opacity: 0.44, transparent: true });
  const frostedAcrylic = catalog.getMaterial('frosted_acrylic', { roughness: 0.30, opacity: 0.52, transparent: true });
  const shojiMat = catalog.getMaterial('shoji_sliding_door', { roughness: 0.88, opacity: 0.88, transparent: true });
  const louverMat = catalog.getMaterial('cedar_louvers', { roughness: 0.86, bumpScale: 0.05 });
  const latticeMat = catalog.getMaterial('carved_wood_lattice', { roughness: 0.86, bumpScale: 0.05 });

  const darkGreenChalk = catalog.getMaterial('dark_green_chalk', { roughness: 0.88, bumpScale: 0.02 });
  const mapSign = catalog.getMaterial('island_map_sign', { roughness: 0.80, bumpScale: 0.02 });
  const noticeMat = catalog.getMaterial('notice_board', { roughness: 0.88, bumpScale: 0.02 });
  const corkMat = catalog.getMaterial('cork_board', { roughness: 0.92, bumpScale: 0.03 });
  const bookcaseMat = catalog.getMaterial('full_bookcase', { roughness: 0.84, bumpScale: 0.04 });
  const fileCab = catalog.getMaterial('file_cabinet', { roughness: 0.66, metalness: 0.25 });
  const tatamiGreen = catalog.getMaterial('tatami_green_border', { roughness: 0.92, bumpScale: 0.04 });
  const tatamiBord = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const grayCarpet = catalog.getMaterial('woven_carpet_gray', { roughness: 0.94, bumpScale: 0.04 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.78, bumpScale: 0.03 });
  const cabMat = catalog.getMaterial('kitchen_cabinet', { roughness: 0.82, bumpScale: 0.03 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.92, bumpScale: 0.03 });
  const wardrobeMat = catalog.getMaterial('wardrobe_wood', { roughness: 0.82, bumpScale: 0.03 });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });

  // --- Muted Patina Teal-Slate Hon-gawara (青銅苔いぶし本瓦) ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.72, metalness: 0.18, bumpScale: 0.06, tint: 0x7b9692 });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.68, metalness: 0.22, bumpScale: 0.05, tint: 0x69827e });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.60, metalness: 0.30, tint: 0x5c7270 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.52, metalness: 0.40, tint: 0x4b5e5c });

  const Y1 = 0.50;
  const Y2 = 3.65;
  const YTOP = 6.55;

  // =========================================================================
  // 1. GABION & CUT-STONE GORGE FOUNDATION + PEBBLE APPROACH WALK
  // =========================================================================
  // Deep gorge-side gabion stone embankment + upper cut-stone plinth
  p.box('ext', 14.4, 3.80, 9.4, 0, Y1 - 2.30, -0.20, gabionStone);
  p.box('ext', 6.8, 0.95, 9.7, -3.60, Y1 - 0.50, 0.35, cutStone);      // Projecting West Classroom base
  p.box('ext', 7.4, 0.95, 9.8, 3.30, Y1 - 0.50, 0.45, cutStone);       // East Residence + Engawa base
  // Teacher's pebbled garden walk & dark concrete curb at entrance
  p.box('ext', 4.6, 0.10, 2.2, 1.35, 0.02, 6.75, pebbleWalk);
  p.box('ext', 4.8, 0.14, 0.18, 1.35, 0.05, 7.82, smoothCurb);
  p.stoneSteps('ext', 1.35, 6.35, 5.25, -0.05, Y1, 2.40, 3, stepStone);

  // South-East Covered Engawa Veranda (X ∈ [-0.40, +6.80], Z ∈ [+4.30, +5.35])
  p.box('ext', 7.25, 0.16, 1.10, 3.20, Y1 - 0.04, 4.82, warmFloor);
  p.floor(-0.40, 6.72, 4.22, 5.30, Y1 + 0.04);
  for (const px of [-0.30, 2.65, 4.75, 6.72]) {
    p.box('ext', 0.26, 0.20, 0.26, px, Y1 + 0.10, 5.28, stepStone);
    p.box('ext', 0.15, 2.95, 0.15, px, Y1 + 1.62, 5.28, timberDark, { solid: true });
  }
  p.box('ext', 7.25, 0.18, 0.18, 3.20, Y1 + 3.06, 5.28, timberDark);
  // Engawa side railing east of steps (X ∈ [+2.65, +6.72])
  p.kouranRailing('ext', 2.65, 5.28, 6.72, 5.28, Y1, 0.88, timberDark, 0.54);
  p.kouranRailing('ext', 6.72, 4.30, 6.72, 5.28, Y1, 0.88, timberDark, 0.50);

  // =========================================================================
  // 2. 1F: WEST AFTER-SCHOOL TUTORING HALL & EAST TEACHER'S RESIDENCE
  // =========================================================================
  const h1 = Y2 - Y1; // 3.15m
  const mid1 = Y1 + h1 * 0.5;

  // 1F Floors
  p.box('int', 6.45, 0.12, 9.30, -3.60, Y1 - 0.04, 0.35, oakFloor);     // West Classroom oak planks
  p.box('int', 7.25, 0.12, 8.60, 3.20, Y1 - 0.04, 0.0, warmFloor);      // East Residence wood base
  p.box('int', 2.45, 0.05, 2.25, 1.35, Y1 + 0.02, 3.15, cobbleFloor);   // Entry vestibule doma
  p.box('int', 1.15, 0.03, 0.68, 1.35, Y1 + 0.04, 3.92, coirMat, { uvScale: 0 });
  p.box('int', 4.45, 0.04, 4.75, 4.35, Y1 + 0.03, 1.55, tatamiGreen);   // East teacher sitting room
  p.floor(-6.70, -0.32, -4.18, 4.88, Y1 + 0.04);
  p.floor(-0.48, 6.68, -4.18, 4.35, Y1 + 0.04);

  // 1F Exterior Walls — West Tutoring Hall (X ∈ [-6.80, -0.40], Z ∈ [-4.30, +5.00])
  // Projecting Front Classroom Facade (Z = +5.00) with twin tall frosted-grid school windows
  p.box('ext', 6.48, 0.96, 0.24, -3.60, Y1 + 0.48, 5.00, cedarDark, { solid: true });
  p.box('ext', 0.85, h1 - 0.96, 0.24, -6.40, Y1 + 2.06, 5.00, horizWood, { solid: true });
  p.box('ext', 0.72, h1 - 0.96, 0.24, -3.60, Y1 + 2.06, 5.00, horizWood, { solid: true });
  p.box('ext', 0.85, h1 - 0.96, 0.24, -0.80, Y1 + 2.06, 5.00, horizWood, { solid: true });
  p.box('ext', 6.48, 0.56, 0.24, -3.60, Y2 - 0.28, 5.00, horizWood, { solid: true });
  for (const wx of [-4.98, -2.22]) {
    p.box('ext', 2.02, 0.08, 0.28, wx, Y1 + 0.98, 5.00, timberDark);
    p.box('ext', 2.02, 0.08, 0.28, wx, Y2 - 0.56, 5.00, timberDark);
    p.box('ext', 1.98, 1.60, 0.06, wx, Y1 + 1.79, 5.00, schoolGlass, { uvScale: 0 });
  }
  // West Classroom Projection East Cheek (X = -0.40, Z ∈ [+4.30, +5.00])
  p.box('ext', 0.24, h1, 0.80, -0.40, mid1, 4.65, horizWood, { solid: true });
  // West 1F Wall (X = -6.80, Z ∈ [-4.30, +5.00]) — solid behind the giant classroom chalkboard!
  p.box('ext', 0.24, 1.05, 9.36, -6.80, Y1 + 0.52, 0.35, cedarDark, { solid: true });
  p.box('ext', 0.24, h1 - 1.05, 9.36, -6.80, Y1 + 2.10, 0.35, horizWood, { solid: true });

  // 1F Exterior Walls — East Teacher's Residence (X ∈ [-0.40, +6.80], Z = +4.30 front)
  // Wide 2.00m Main Entrance Doorway X ∈ [+0.35, +2.35] at Z = +4.30
  p.box('ext', 0.80, h1, 0.24, -0.02, mid1, 4.30, horizWood, { solid: true });
  p.box('ext', 2.04, 0.72, 0.24, 1.35, Y2 - 0.36, 4.30, horizWood, { solid: true });
  p.box('ext', 2.06, 0.09, 0.28, 1.35, Y2 - 0.72, 4.30, timberDark); // Doorway kamoi lintel
  p.box('ext', 4.50, 0.92, 0.24, 4.58, Y1 + 0.46, 4.30, cedarDark, { solid: true });
  p.box('ext', 1.15, h1 - 0.92, 0.24, 2.90, Y1 + 2.04, 4.30, whitePlaster, { solid: true });
  p.box('ext', 2.35, 0.56, 0.24, 4.60, Y2 - 0.28, 4.30, whitePlaster, { solid: true });
  p.box('ext', 2.35, 0.08, 0.28, 4.60, Y1 + 0.94, 4.30, timberDark);
  p.box('ext', 2.35, 0.08, 0.28, 4.60, Y2 - 0.56, 4.30, timberDark);
  p.box('ext', 2.30, 1.62, 0.06, 4.60, Y1 + 1.76, 4.30, latticeMat, { uvScale: 0 });
  p.box('ext', 1.08, h1 - 0.92, 0.24, 6.28, Y1 + 2.04, 4.30, whitePlaster, { solid: true });

  // Back 1F (-Z = -4.30) & East 1F (+X = +6.80)
  p.box('ext', 13.65, 1.05, 0.24, 0, Y1 + 0.52, -4.30, cedarDark, { solid: true });
  p.box('ext', 13.65, h1 - 1.05, 0.24, 0, Y1 + 2.10, -4.30, creamPlaster, { solid: true });
  p.box('ext', 0.24, 1.05, 8.66, 6.80, Y1 + 0.52, 0, cedarDark, { solid: true });
  p.box('ext', 0.24, h1 - 1.05, 2.40, 6.80, Y1 + 2.10, -3.10, whitePlaster, { solid: true });
  p.box('ext', 0.24, 0.62, 3.85, 6.80, Y2 - 0.31, 0.0, whitePlaster, { solid: true });
  p.box('ext', 0.28, 0.08, 3.88, 6.80, Y1 + 1.06, 0.0, timberDark);
  p.box('ext', 0.28, 0.08, 3.88, 6.80, Y2 - 0.62, 0.0, timberDark);
  p.box('ext', 0.06, 1.46, 3.80, 6.80, Y1 + 1.80, 0.0, shojiMat, { uvScale: 0 });
  p.box('ext', 0.24, h1 - 1.05, 2.40, 6.80, Y1 + 2.10, 3.10, whitePlaster, { solid: true });

  // Internal 1F Partition dividing Tutoring Hall & Residence at X = -0.40 (wide 1.80m doorway Z ∈ [+1.15, +2.95]!)
  p.box('int', 0.18, h1, 5.45, -0.40, mid1, -1.58, washiWall, { solid: true });
  p.box('int', 0.18, 0.72, 1.84, -0.40, Y2 - 0.36, 2.05, washiWall, { solid: true });
  p.box('int', 0.22, 0.08, 1.86, -0.40, Y2 - 0.72, 2.05, timberDark);
  p.box('int', 0.18, h1, 1.38, -0.40, mid1, 3.62, washiWall, { solid: true });

  // --- 1F WEST TUTORING CLASSROOM FURNISHINGS (黒磯分校・補習教室!) ---
  // Raised Teacher's Cedar Dais (教壇) along West wall + Giant Framed Chalkboard + Podium!
  p.box('int', 1.35, 0.18, 4.40, -6.00, Y1 + 0.09, 0.30, timberDark, { solid: true });
  p.box('int', 0.06, 1.56, 3.45, -6.66, Y1 + 1.80, 0.30, timberDark);                     // Giant chalkboard frame
  p.box('int', 0.06, 1.42, 3.30, -6.62, Y1 + 1.80, 0.30, darkGreenChalk, { uvScale: 0 }); // Island school chalkboard!
  p.box('int', 0.62, 1.05, 0.88, -5.65, Y1 + 0.70, 0.30, warmFloor, { solid: true });     // Teacher's lectern podium
  // North Classroom Wall: Kuroiso Island Map + School Schedule Notice Board
  p.box('int', 1.65, 1.15, 0.06, -4.35, Y1 + 1.82, -4.14, mapSign, { uvScale: 0 });
  p.box('int', 1.35, 1.02, 0.06, -2.15, Y1 + 1.78, -4.14, noticeMat, { uvScale: 0 });
  // Four Handcrafted Two-Seater Wooden Pupil Desks & Benches in two tidy rows!
  for (const dx of [-3.95, -2.15]) {
    for (const dz of [-1.45, 1.55]) {
      // Desk tabletop + side legs
      p.box('int', 0.64, 0.06, 1.32, dx, Y1 + 0.72, dz, warmFloor, { solid: true });
      p.box('int', 0.54, 0.70, 0.07, dx, Y1 + 0.35, dz - 0.56, timberDark, { solid: true });
      p.box('int', 0.54, 0.70, 0.07, dx, Y1 + 0.35, dz + 0.56, timberDark, { solid: true });
      // Pupil wooden bench behind desk (+X side facing West chalkboard)
      p.box('int', 0.34, 0.05, 1.24, dx + 0.58, Y1 + 0.42, dz, agedTimber, { solid: true });
      p.box('int', 0.28, 0.40, 0.06, dx + 0.58, Y1 + 0.20, dz - 0.50, timberDark);
      p.box('int', 0.28, 0.40, 0.06, dx + 0.58, Y1 + 0.20, dz + 0.50, timberDark);
    }
  }

  // --- 1F EAST TEACHER'S RESIDENCE FURNISHINGS & BOOKCASE STAIRCASE ---
  p.box('int', 1.45, 0.36, 0.88, 4.35, Y1 + 0.20, 1.55, timberDark, { solid: true });
  p.box('int', 0.60, 0.07, 0.60, 4.35, Y1 + 0.07, 0.75, zabutonMat, { uvScale: 0 });
  p.box('int', 0.60, 0.07, 0.60, 4.35, Y1 + 0.07, 2.35, zabutonMat, { uvScale: 0 });
  p.box('int', 1.95, 0.92, 0.64, 3.65, Y1 + 0.46, -3.86, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 1.35, 1.82, 0.54, 5.65, Y1 + 0.92, -3.90, cabMat, { solid: true, uvScale: 0 });
  // Signature Bookcase Wall lining the staircase approach!
  p.box('int', 0.48, 2.15, 2.05, 1.58, Y1 + 1.08, -0.85, bookcaseMat, { solid: true, uvScale: 0 });

  // 1F -> 2F Central Bookcase-Lined Staircase (X = +0.60, Z: +1.40 -> -2.70, Y1 -> Y2!)
  p.stairRun('int', {
    x0: 0.60, z0: 1.40, x1: 0.60, z1: -2.70, y0: Y1 + 0.04, y1: Y2 + 0.04,
    width: 1.12, steps: 14, treadMat: timberDark, stringerMat: timberDark, railMat: warmFloor,
    railLeft: true, railRight: true, closedRisers: false, guardLeft: true, guardRight: true,
  });

  // =========================================================================
  // 3. 2F: CALLIGRAPHY & ISLAND ARCHIVE STUDY + SUNROOM READING GALLERY
  // =========================================================================
  const h2 = YTOP - Y2; // 2.90m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs (clean stairwell cutout X ∈ [-0.08, +1.28], Z ∈ [-2.78, +1.52])
  p.box('int', 6.74, 0.16, 9.25, -3.45, Y2 - 0.06, 0.35, warmFloor);      // West Study Wing X∈[-6.82,-0.08]
  p.box('int', 1.40, 0.16, 1.56, 0.60, Y2 - 0.06, -3.54, warmFloor);      // North Arrival Landing Z∈[-4.32,-2.76]
  p.box('int', 1.40, 0.16, 2.82, 0.60, Y2 - 0.06, 2.91, warmFloor);       // South Corridor Strip Z∈[+1.50,+4.32]
  p.box('int', 5.56, 0.16, 8.62, 4.04, Y2 - 0.06, 0.0, warmFloor);        // East Bedroom Wing X∈[+1.26,+6.82]
  p.box('int', 5.20, 0.04, 6.20, -3.65, Y2 + 0.03, 0.45, tatamiBord);     // West Study Tatami
  p.box('int', 4.40, 0.04, 6.40, 4.25, Y2 + 0.03, 0.0, grayCarpet);       // East Bedroom Carpet
  p.box('int', 13.4, 0.08, 8.40, 0, YTOP - 0.06, 0, ajiroCeil);           // Woven ceiling

  p.collider(-6.80, -0.08, Y2 - 0.16, Y2 + 0.02, -4.30, 5.00);
  p.collider(-0.08, 1.28, Y2 - 0.16, Y2 + 0.02, -4.30, -2.78);
  p.collider(-0.08, 1.28, Y2 - 0.16, Y2 + 0.02, 1.52, 4.30);
  p.collider(1.28, 6.80, Y2 - 0.16, Y2 + 0.02, -4.30, 4.30);
  p.floor(-6.70, -0.04, -4.20, 4.88, Y2 + 0.04);
  p.floor(-0.10, 1.32, -4.20, -2.74, Y2 + 0.04);
  p.floor(-0.10, 1.32, 1.48, 4.24, Y2 + 0.04);
  p.floor(1.24, 6.68, -4.20, 4.24, Y2 + 0.04);

  // 2F Stairwell Guard Railings
  p.kouranRailing('int', -0.08, -2.78, -0.08, 1.52, Y2, 0.94, timberDark, 0.54);
  p.kouranRailing('int', 1.28, -2.78, 1.28, 1.52, Y2, 0.94, timberDark, 0.54);
  p.kouranRailing('int', -0.08, 1.52, 1.28, 1.52, Y2, 0.94, timberDark, 0.45);

  // ★ 2F ENCLOSED SUNROOM READING GALLERY (X ∈ [-0.40, +6.80], Z ∈ [+4.30, +5.30] — Frosted Acrylic & Shoji!)
  p.box('ext', 7.25, 0.16, 1.08, 3.20, Y2 - 0.04, 4.82, oakFloor);
  p.floor(-0.32, 6.68, 4.22, 5.24, Y2 + 0.04);
  // Low shikkui wainscot + panoramic frosted_acrylic sunroom windows!
  p.box('ext', 7.26, 0.84, 0.16, 3.20, Y2 + 0.42, 5.30, whitePlaster, { solid: true });
  p.box('ext', 7.26, 0.08, 0.22, 3.20, Y2 + 0.86, 5.30, timberDark);
  p.box('ext', 7.26, 0.10, 0.22, 3.20, YTOP - 0.44, 5.30, timberDark);
  p.box('ext', 7.26, 0.44, 0.16, 3.20, YTOP - 0.22, 5.30, whitePlaster, { solid: true });
  p.box('ext', 7.10, 1.52, 0.06, 3.20, Y2 + 1.66, 5.30, frostedAcrylic, { uvScale: 0 });
  for (const sx of [-0.36, 1.42, 3.20, 4.98, 6.76]) {
    p.box('ext', 0.10, h2, 0.18, sx, mid2, 5.30, timberDark);
  }
  p.box('ext', 0.16, h2, 1.08, 6.80, mid2, 4.82, whitePlaster, { solid: true });
  p.box('ext', 7.28, 0.12, 1.18, 3.20, YTOP - 0.04, 4.82, timberDark);

  // 2F Exterior Walls (White Plaster Shinkabe + Exposed Timber Columns + Sunroom Doorway!)
  // West Classroom 2F Front Wall (Z = +5.00, X ∈ [-6.80, -0.40])
  p.box('ext', 6.48, 0.88, 0.22, -3.60, Y2 + 0.44, 5.00, whitePlaster, { solid: true });
  p.box('ext', 1.40, h2 - 0.88, 0.22, -6.12, Y2 + 1.90, 5.00, whitePlaster, { solid: true });
  p.box('ext', 3.68, 0.48, 0.22, -3.60, YTOP - 0.24, 5.00, whitePlaster, { solid: true });
  p.box('ext', 3.70, 0.08, 0.26, -3.60, Y2 + 0.90, 5.00, timberDark);
  p.box('ext', 3.70, 0.08, 0.26, -3.60, YTOP - 0.48, 5.00, timberDark);
  p.box('ext', 0.08, 1.52, 0.14, -3.60, Y2 + 1.66, 5.00, timberDark);
  p.box('ext', 3.62, 1.50, 0.06, -3.60, Y2 + 1.66, 5.00, schoolGlass, { uvScale: 0 });
  p.box('ext', 1.40, h2 - 0.88, 0.22, -1.08, Y2 + 1.90, 5.00, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 0.80, -0.40, mid2, 4.65, whitePlaster, { solid: true });

  // East 2F Front Wall (Z = +4.30) with wide 1.80m Open Sunroom Doorway X ∈ [+2.20, +4.00]
  p.box('ext', 2.62, h2, 0.20, 0.90, mid2, 4.30, washiWall, { solid: true });
  p.box('ext', 1.84, 0.66, 0.20, 3.10, YTOP - 0.33, 4.30, washiWall, { solid: true });
  p.box('ext', 1.86, 0.08, 0.24, 3.10, YTOP - 0.66, 4.30, timberDark);
  p.box('ext', 2.82, h2, 0.20, 5.40, mid2, 4.30, washiWall, { solid: true });

  // Back 2F (-Z = -4.30), West 2F (-X = -6.80), East 2F (+X = +6.80)
  p.box('ext', 13.65, h2, 0.22, 0, mid2, -4.30, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 9.36, -6.80, mid2, 0.35, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 8.66, 6.80, mid2, 0, whitePlaster, { solid: true });

  // Exposed Shinkabe Corner & Bay Timber Posts on 2F
  for (const [px, pz] of [[-6.82, 5.02], [-0.38, 5.02], [-6.82, -4.32], [6.82, -4.32], [6.82, 4.32]]) {
    p.box('ext', 0.18, h2 + 0.06, 0.18, px, mid2, pz, timberDark);
  }

  // --- 2F FURNISHINGS (Archive Bookcases, Calligraphy Desk, Bedroom Futon, Sunroom Reading Bench) ---
  p.box('int', 0.52, 2.00, 1.95, -6.34, Y2 + 1.00, -1.85, bookcaseMat, { solid: true, uvScale: 0 });
  p.box('int', 0.52, 2.00, 1.95, -6.34, Y2 + 1.00, 1.25, bookcaseMat, { solid: true, uvScale: 0 });
  p.box('int', 1.45, 1.42, 0.54, -4.20, Y2 + 0.72, -3.86, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 1.35, 0.96, 0.07, -1.85, Y2 + 1.62, -4.12, corkMat, { uvScale: 0 });
  p.box('int', 1.50, 0.36, 0.86, -3.55, Y2 + 0.20, 1.35, timberDark, { solid: true }); // Calligraphy low desk
  p.box('int', 0.60, 0.07, 0.60, -3.55, Y2 + 0.07, 2.15, zabutonMat, { uvScale: 0 });
  // East 2F Bedroom
  p.box('int', 1.65, 0.20, 2.15, 4.55, Y2 + 0.13, -1.55, futonMat, { solid: true, uvScale: 0 });
  p.box('int', 0.58, 1.88, 1.32, 6.28, Y2 + 0.94, 1.65, wardrobeMat, { solid: true, uvScale: 0 });
  p.box('int', 0.56, 1.48, 0.74, 6.18, Y2 + 0.74, -3.72, fileCab, { solid: true, uvScale: 0 });

  // =========================================================================
  // 4. PATINA BLUE-SLATE T-SHAPED CROSS-GABLE HON-GAWARA ROOFS (青銅苔瓦・丁字切妻!)
  // =========================================================================
  const mainPitch = 0.44;
  const mainRun = 5.45;
  const mainRidgeY = YTOP + mainRun * Math.tan(mainPitch) - 0.38; // ~8.75m
  // Main East-West Kirizuma Roof spanning full 15.2m width!
  p.kawaraSlope('ext', {
    bottomWidth: 15.2, run: mainRun, pitch: mainPitch,
    ridgeX: 0, ridgeY: mainRidgeY, ridgeZ: 0, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 15.2, run: mainRun, pitch: mainPitch,
    ridgeX: 0, ridgeY: mainRidgeY, ridgeZ: 0, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  // East & West White-Plaster Gable Cheeks + Louver Attic Vents
  const mainGableH = mainRidgeY - YTOP - 0.06;
  p.gablePrism('ext', 8.60, mainGableH, 0.22, -6.80, YTOP, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 8.60, mainGableH, 0.22, 6.80, YTOP, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.kawaraRidge('ext', -7.50, mainRidgeY + 0.04, 0, 7.50, mainRidgeY + 0.04, 0, kawaraRidge, oniMat, {
    scale: 1.05, courses: 2, oniStart: true, oniEnd: true,
  });

  // ★ SIGNATURE WEST CLASSROOM CROSS-GABLE PEDIMENT (南向き切妻破風＋杉鎧戸換気窓＋鬼瓦!)
  const crossPitch = 0.46;
  const crossRun = 3.85;
  const crossRidgeY = YTOP + crossRun * Math.tan(crossPitch) - 0.22; // ~8.24m (neatly below main ridge!)
  p.kawaraSlope('ext', {
    bottomWidth: 6.20, run: crossRun, pitch: crossPitch,
    ridgeX: -3.60, ridgeY: crossRidgeY, ridgeZ: 2.85, downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.36,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 6.20, run: crossRun, pitch: crossPitch,
    ridgeX: -3.60, ridgeY: crossRidgeY, ridgeZ: 2.85, downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.36,
  });
  const crossGableH = crossRidgeY - YTOP - 0.06;
  p.gablePrism('ext', 6.45, crossGableH, 0.22, -3.60, YTOP, 5.00, whitePlaster);
  p.box('ext', 1.45, 0.72, 0.14, -3.60, YTOP + 0.62, 5.10, louverMat, { uvScale: 0 }); // Schoolhouse attic louver!
  p.kawaraRidge('ext', -3.60, crossRidgeY + 0.04, -0.20, -3.60, crossRidgeY + 0.04, 5.95, kawaraRidge, oniMat, {
    scale: 0.92, courses: 2, oniStart: false, oniEnd: true,
  });

  // 1F Front Engawa & West Classroom Kawara Skirt Eaves
  p.kawaraSlope('ext', {
    bottomWidth: 7.80, run: 1.48, pitch: 0.34,
    ridgeX: 3.20, ridgeY: Y2 + 0.10, ridgeZ: 4.30, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 6.80, run: 0.95, pitch: 0.34,
    ridgeX: -3.60, ridgeY: Y2 + 0.06, ridgeZ: 4.98, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });

  return p.build({
    id: 'H08',
    name: '永井家（黒磯分校 教員宿舎＆補習教室二階館）',
    subtitle: '大黒板・教壇・児童机の補習教室・本棚階段・2Fサンルーム・青銅苔瓦丁字切妻',
    category: 'house',
    builtYear: 1889,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y1, Y2],
    entryLocal: [1.35, 0.0, 8.8],
    entryLookLocalYaw: 0,
  });
}
