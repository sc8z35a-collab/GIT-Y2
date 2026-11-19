import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H07: 安藤家（1877年築・西斜面 大工棟梁の懸造り総檜組木＆四階360°回廊櫓邸）— ★4階建ランドマーク
 * 下段斜面村道・黒磯渓谷西斜面にそびえる島の建築棟梁（宮大工）の四階建邸宅。
 * 急斜面へ深く根を張る石垣＆懸造り（かけづくり）極太木柱脚・筋交い基礎、
 * 1F西翼は丸太材・積材・道具壁・鉄骨吊り梁を備えた棟梁の木工刻み場、東翼は組子格子の客間座敷、
 * 2Fは渓谷と廃村全体を一望する幅11.8mの大高欄縁側＆本座敷、
 * 3Fは緑黒板の社寺屋根反り原寸図面室＆建築古書庫、
 * 4Fは屋外を360°ぐるり一周回遊できる「四方高欄ギャラリー付・木組望楼櫓」＆四重銀黒本瓦入母屋屋根（鬼瓦×6基）！
 */
export function buildHouse07Ando(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Master Carpenter Kakezukuri Timber, Stone & Joinery Materials ---
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const rubbleStone = catalog.getMaterial('ishigaki_rubble', { roughness: 0.94, bumpScale: 0.08 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });
  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.90, bumpScale: 0.05 });
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.91, bumpScale: 0.06 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xf7f3e9 });
  const washiWall = catalog.getMaterial('washi_plaster', { roughness: 0.91, bumpScale: 0.03 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.82, bumpScale: 0.04 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.80, bumpScale: 0.03 });
  const treeBark = catalog.getMaterial('tree_bark', { roughness: 0.94, bumpScale: 0.07 });
  const steelTruss = catalog.getMaterial('steel_truss_wall', { roughness: 0.62, metalness: 0.52, bumpScale: 0.05 });
  const latticeMat = catalog.getMaterial('carved_wood_lattice', { roughness: 0.86, bumpScale: 0.05 });
  const slatScreen = catalog.getMaterial('wood_slat_screen', { roughness: 0.85, bumpScale: 0.05 });
  const ajiroCeil = catalog.getMaterial('woven_screen_brown', { roughness: 0.90, bumpScale: 0.05 });

  // --- Interior & Drafting Materials ---
  const tatamiBord = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const tatamiGreen = catalog.getMaterial('tatami_green_border', { roughness: 0.92, bumpScale: 0.04 });
  const shojiMat = catalog.getMaterial('shoji_sliding_door', { roughness: 0.88, opacity: 0.90, transparent: true });
  const clearGlass = catalog.getMaterial('window_frosted_wood', { roughness: 0.20, opacity: 0.20, transparent: true, tint: 0xdcebf4 });
  const glassMat = catalog.getMaterial('window_frosted_wood', { roughness: 0.32, opacity: 0.36, transparent: true });
  const pegboardMat = catalog.getMaterial('pegboard', { roughness: 0.84, bumpScale: 0.04 });
  const darkGreenChalk = catalog.getMaterial('dark_green_chalk', { roughness: 0.88, bumpScale: 0.02 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.78, bumpScale: 0.03 });
  const dresserMat = catalog.getMaterial('wooden_dresser', { roughness: 0.82, bumpScale: 0.03 });
  const bookcaseMat = catalog.getMaterial('full_bookcase', { roughness: 0.84, bumpScale: 0.04 });
  const fileCab = catalog.getMaterial('file_cabinet', { roughness: 0.66, metalness: 0.25 });
  const counterMat = catalog.getMaterial('office_counter', { roughness: 0.80, bumpScale: 0.03 });
  const mapSign = catalog.getMaterial('island_map_sign', { roughness: 0.80, bumpScale: 0.02 });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });

  // --- Noble Silver-Black Master-Carpenter Hon-gawara (棟梁四重銀黒本瓦) ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.68, metalness: 0.22, bumpScale: 0.06, tint: 0xb6c0ca });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.64, metalness: 0.26, bumpScale: 0.05, tint: 0x9ea8b4 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.58, metalness: 0.32, tint: 0x86909c });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.50, metalness: 0.42, tint: 0x707a86 });

  const Y1 = 0.55;
  const Y2 = 3.75;
  const Y3 = 6.85;
  const Y4 = 9.85;
  const YTOP = 12.55;

  // =========================================================================
  // 1. DEEP KAKEZUKURI STONE & HEAVY CEDAR STILT SUBSTRUCTURE (ROOTED TO Y = -4.8m!)
  // =========================================================================
  // Central recessed stone retaining core anchored deep into steep west gorge slope
  p.box('ext', 11.4, 5.2, 8.2, 0, Y1 - 2.65, -0.2, rubbleStone);
  p.box('ext', 12.9, 0.36, 9.5, 0, Y1 - 0.22, 0, timberDark); // Heavy cantilevered timber sill deck!
  // Exposed Kakezukuri stout cedar stilt columns + diagonal cross-bracing along gorge-facing edges
  for (const sx of [-6.15, -3.10, 0.0, 3.10, 6.15]) {
    for (const sz of [-4.45, 4.45]) {
      p.box('ext', 0.34, 5.4, 0.34, sx, Y1 - 2.72, sz, timberDark);
    }
  }
  for (const sx of [-4.6, -1.55, 1.55, 4.6]) {
    p.box('ext', 3.4, 0.20, 0.20, sx, Y1 - 1.65, 4.45, timberDark, { rz: 0.42 });
    p.box('ext', 3.4, 0.20, 0.20, sx, Y1 - 1.65, 4.45, timberDark, { rz: -0.42 });
    p.box('ext', 3.4, 0.20, 0.20, sx, Y1 - 1.65, -4.45, timberDark, { rz: 0.42 });
  }
  // Sturdy Front Granite Approach Stoop & 5 Entry Steps meeting graded valley approach (X = -1.40)
  p.box('ext', 3.4, 4.6, 1.9, -1.40, Y1 - 2.34, 5.35, cutStone);
  p.stoneSteps('ext', -1.40, 6.45, 4.80, -0.35, Y1, 2.75, 5, stepStone);
  p.floor(-2.9, 0.1, 4.4, 5.4, Y1 + 0.04);

  // =========================================================================
  // 2. 1F: MASTER CARPENTER'S TIMBER MILL (WEST) & KUMIKO RECEPTION ZASHIKI (EAST)
  // =========================================================================
  const h1 = Y2 - Y1; // 3.20m
  const mid1 = Y1 + h1 * 0.5;

  p.box('int', 12.4, 0.12, 9.0, 0, Y1 - 0.04, 0, agedTimber);
  p.box('int', 5.4, 0.04, 8.5, 3.45, Y1 + 0.03, 0, tatamiBord);          // East guest zashiki
  p.box('int', 1.25, 0.03, 0.72, -1.40, Y1 + 0.04, 4.18, coirMat, { uvScale: 0 });
  p.floor(-6.15, 6.15, -4.45, 4.65, Y1 + 0.04);

  // 1F Exterior Walls (Charred Cedar + Aged Timber Workshop West + White Plaster & Kumiko East!)
  // Front 1F (+Z = +4.60): Wide 2.40m carpenter workshop double portal X ∈ [-2.60, -0.20]
  p.box('ext', 3.74, 1.25, 0.26, -4.45, Y1 + 0.62, 4.60, cedarDark, { solid: true });
  p.box('ext', 3.74, h1 - 1.25, 0.26, -4.45, Y1 + 2.22, 4.60, agedTimber, { solid: true });
  p.box('ext', 2.44, 0.74, 0.26, -1.40, Y1 + 2.83, 4.60, agedTimber, { solid: true });
  p.box('ext', 6.54, 1.20, 0.26, 3.05, Y1 + 0.60, 4.60, cedarDark, { solid: true });
  p.box('ext', 1.55, h1 - 1.20, 0.26, 0.58, Y1 + 2.20, 4.60, whitePlaster, { solid: true });
  p.box('ext', 2.85, 0.56, 0.26, 2.75, Y1 + 2.92, 4.60, whitePlaster, { solid: true });
  p.box('ext', 2.80, 1.44, 0.07, 2.75, Y1 + 1.92, 4.60, latticeMat, { uvScale: 0 }); // Master Kumiko showcase!
  p.box('ext', 2.15, h1 - 1.20, 0.26, 5.25, Y1 + 2.20, 4.60, whitePlaster, { solid: true });

  // Back 1F (-Z = -4.60), West 1F (-X = -6.30), East 1F (+X = +6.30)
  p.box('ext', 12.65, 1.25, 0.26, 0, Y1 + 0.62, -4.60, cedarDark, { solid: true });
  p.box('ext', 12.65, h1 - 1.25, 0.26, 0, Y1 + 2.22, -4.60, whitePlaster, { solid: true });
  p.box('ext', 0.26, 1.25, 9.25, -6.30, Y1 + 0.62, 0, cedarDark, { solid: true });
  p.box('ext', 0.26, h1 - 1.25, 9.25, -6.30, Y1 + 2.22, 0, agedTimber, { solid: true });
  p.box('ext', 0.26, 1.25, 9.25, 6.30, Y1 + 0.62, 0, cedarDark, { solid: true });
  p.box('ext', 0.26, h1 - 1.25, 9.25, 6.30, Y1 + 2.22, 0, whitePlaster, { solid: true });

  // 1F Interior Partition (Workshop West ↔ Guest Zashiki East at X = +0.60, 1.80m doorway Z ∈ [+1.20, +3.00])
  p.box('int', 0.16, h1, 5.82, 0.60, mid1, -1.70, washiWall, { solid: true });
  p.box('int', 0.16, 0.72, 1.85, 0.60, Y1 + 2.84, 2.10, slatScreen, { uvScale: 0 });
  p.box('int', 0.16, h1, 1.62, 0.60, mid1, 3.80, washiWall, { solid: true });

  // ★ 1F Master Carpenter's Timber Mill Props (raw logs, lumber stack, joinery bench, steel truss hoist, tool wall!)
  p.cyl('int', 0.24, 0.26, 4.4, 8, -5.25, Y1 + 0.26, -1.2, treeBark, { rx: Math.PI * 0.5 });
  p.cyl('int', 0.22, 0.25, 4.2, 8, -4.68, Y1 + 0.24, -1.3, treeBark, { rx: Math.PI * 0.5 });
  p.cyl('int', 0.20, 0.22, 4.0, 8, -4.96, Y1 + 0.62, -1.25, treeBark, { rx: Math.PI * 0.5 });
  p.collider(-5.65, -4.35, Y1, Y1 + 1.0, -3.45, 1.05);
  p.box('int', 1.15, 0.82, 3.20, -2.55, Y1 + 0.41, -1.65, warmFloor, { solid: true }); // Heavy joinery workbench!
  p.box('int', 0.08, 1.55, 2.65, -6.12, Y1 + 1.85, 1.65, pegboardMat, { uvScale: 0 });  // Saws & chisels wall!
  p.box('int', 6.60, 0.48, 0.18, -2.90, Y2 - 0.34, 0.20, steelTruss, { uvScale: 0 });   // Overhead timber hoist truss!
  // East Reception Zashiki props
  p.box('int', 1.65, 0.38, 1.00, 2.95, Y1 + 0.20, -1.15, timberDark, { solid: true });
  p.box('int', 0.62, 0.08, 0.62, 2.95, Y1 + 0.08, -2.05, zabutonMat, { uvScale: 0 });
  p.box('int', 0.62, 0.08, 0.62, 2.95, Y1 + 0.08, -0.25, zabutonMat, { uvScale: 0 });
  p.box('int', 1.55, 1.48, 0.52, 2.65, Y1 + 0.75, -4.15, tansuMat, { solid: true, uvScale: 0 });

  // 1F -> 2F East Staircase (X = +5.20, Z: +2.60 -> -1.50, Y1 -> Y2)
  p.stairRun('int', {
    x0: 5.20, z0: 2.60, x1: 5.20, z1: -1.50, y0: Y1 + 0.04, y1: Y2 + 0.04,
    width: 1.20, steps: 15, treadMat: timberDark, stringerMat: timberDark, railMat: warmFloor,
    railLeft: true, railRight: false, closedRisers: true, guardLeft: true, guardRight: false,
  });

  // =========================================================================
  // 3. 2F: GRAND FAMILY ZASHIKI & FULL-WIDTH 11.8m GORGE-VIEW VERANDA (Y = +3.75m)
  // =========================================================================
  const h2 = Y3 - Y2; // 3.10m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs (cutout: East 1F->2F stairwell X ∈ [+4.44, +6.22], Z ∈ [-1.56, +2.70])
  p.box('int', 10.74, 0.16, 9.20, -0.93, Y2 - 0.06, 0, warmFloor);         // X∈[-6.30,+4.44]
  p.box('int', 1.88, 0.16, 3.06, 5.36, Y2 - 0.06, -3.07, warmFloor);       // NE Landing
  p.box('int', 1.88, 0.16, 1.92, 5.36, Y2 - 0.06, 3.64, warmFloor);        // SE Strip
  p.box('int', 8.8, 0.04, 7.6, -0.8, Y2 + 0.03, 0, tatamiGreen);           // Expansive master tatami suite

  p.collider(-6.30, 4.44, Y2 - 0.16, Y2 + 0.02, -4.60, 4.60);
  p.collider(4.44, 6.30, Y2 - 0.16, Y2 + 0.02, -4.60, -1.56);
  p.collider(4.44, 6.30, Y2 - 0.16, Y2 + 0.02, 2.70, 4.60);
  p.floor(-6.18, 4.42, -4.48, 4.52, Y2 + 0.04);
  p.floor(4.38, 6.18, -4.48, -1.50, Y2 + 0.04);
  p.floor(4.38, 6.18, 2.66, 4.48, Y2 + 0.04);

  // 2F Stairwell Guard Rails
  p.kouranRailing('int', 4.44, -1.54, 4.44, 2.70, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('int', 4.44, 2.70, 6.18, 2.70, Y2, 0.94, timberDark, 0.52);

  // ★ 2F Full-Width 11.8m Gorge-View Front Veranda (X ∈ [-5.9, +5.9], Z ∈ [+4.60, +5.75])!
  p.box('ext', 11.95, 0.16, 1.18, 0, Y2 - 0.04, 5.18, warmFloor);
  p.kouranRailing('ext', -5.92, 5.72, 5.92, 5.72, Y2, 0.96, timberDark, 0.56);
  p.kouranRailing('ext', -5.92, 4.60, -5.92, 5.72, Y2, 0.96, timberDark, 0.52);
  p.kouranRailing('ext', 5.92, 4.60, 5.92, 5.72, Y2, 0.96, timberDark, 0.52);
  p.floor(-5.82, 5.82, 4.50, 5.65, Y2 + 0.04);

  // 2F Exterior Walls (White Plaster Shinkabe + Exposed Timber Columns + 1.8m Veranda Door X ∈ [-0.9, +0.9])
  p.box('ext', 5.42, h2, 0.22, -3.60, mid2, 4.60, whitePlaster, { solid: true });
  p.box('ext', 1.84, 0.72, 0.22, 0.0, Y2 + 2.74, 4.60, whitePlaster, { solid: true });
  p.box('ext', 5.42, h2, 0.22, 3.60, mid2, 4.60, whitePlaster, { solid: true });
  p.box('ext', 12.65, h2, 0.22, 0, mid2, -4.60, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 9.25, -6.30, mid2, 0, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 9.25, 6.30, mid2, 0, whitePlaster, { solid: true });
  for (const px of [-6.32, -3.15, -0.92, 0.92, 3.15, 6.32]) {
    p.box('ext', 0.18, h2 + 0.06, 0.28, px, mid2, 4.62, timberDark);
  }

  // 2F Furnishings (Kumiko screen accent, kitchen unit, dresser, family shoji)
  p.box('int', 0.14, h2, 3.25, 0.45, mid2, -2.95, latticeMat, { solid: true, uvScale: 0 });
  p.box('int', 1.95, 0.92, 0.62, 2.25, Y2 + 0.46, -4.18, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 1.35, 1.15, 0.50, -5.15, Y2 + 0.58, 3.95, dresserMat, { solid: true, uvScale: 0 });
  p.box('int', 2.40, 1.65, 0.06, -1.65, Y2 + 1.55, -4.44, shojiMat, { uvScale: 0 });

  // 2F -> 3F West-North Staircase (ENTIRELY INSIDE 3F footprint X∈[-4.7,+4.7], Z∈[-3.6,+3.6]!)
  p.stairRun('int', {
    x0: -3.65, z0: -2.40, x1: -3.65, z1: 1.70, y0: Y2 + 0.04, y1: Y3 + 0.04,
    width: 1.15, steps: 14, treadMat: timberDark, stringerMat: timberDark, railMat: warmFloor,
    railLeft: true, railRight: true, closedRisers: false, guardLeft: true, guardRight: true,
  });

  // =========================================================================
  // 4. 3F: TEMPLE-CARPENTER ROOF BLUEPRINT LOFT (9.4m x 7.2m, Y = +6.85m)
  // =========================================================================
  const h3 = Y4 - Y3; // 3.00m
  const mid3 = Y3 + h3 * 0.5;

  // 3F Floor Slabs (cutout: 2F->3F stairwell X ∈ [-4.38, -2.92], Z ∈ [-2.46, +1.78])
  p.box('int', 7.64, 0.16, 7.20, 0.88, Y3 - 0.06, 0, oakFloor);            // Main East/Center X∈[-2.92,+4.70]
  p.box('int', 1.82, 0.16, 1.18, -3.81, Y3 - 0.06, -3.02, oakFloor);       // NW Strip Z∈[-3.60,-2.44]
  p.box('int', 1.82, 0.16, 1.84, -3.81, Y3 - 0.06, 2.68, oakFloor);        // SW Arrival Landing Z∈[+1.76,+3.60]
  p.box('int', 9.2, 0.08, 7.0, 0, Y4 - 0.08, 0, ajiroCeil);                // Ajiro woven ceiling outside 4F stair!

  p.collider(-2.92, 4.70, Y3 - 0.16, Y3 + 0.02, -3.60, 3.60);
  p.collider(-4.70, -2.92, Y3 - 0.16, Y3 + 0.02, -3.60, -2.46);
  p.collider(-4.70, -2.92, Y3 - 0.16, Y3 + 0.02, 1.78, 3.60);
  p.floor(-2.90, 4.58, -3.48, 3.48, Y3 + 0.04);
  p.floor(-4.58, -2.86, -3.48, -2.42, Y3 + 0.04);
  p.floor(-4.58, -2.86, 1.72, 3.48, Y3 + 0.04);

  // 3F Stairwell Guard Railings
  p.kouranRailing('int', -2.92, -2.46, -2.92, 1.78, Y3, 0.94, timberDark, 0.56);
  p.kouranRailing('int', -4.58, -2.46, -2.92, -2.46, Y3, 0.94, timberDark, 0.50);

  // 3F Exterior Walls with Panoramic Valley Windows
  p.box('ext', 9.45, 0.88, 0.22, 0, Y3 + 0.44, 3.60, whitePlaster, { solid: true });
  p.box('ext', 2.60, h3 - 0.88, 0.22, -3.42, Y3 + 1.94, 3.60, whitePlaster, { solid: true });
  p.box('ext', 4.20, 0.52, 0.22, 0.0, Y3 + 2.74, 3.60, whitePlaster, { solid: true });
  p.box('ext', 4.16, 1.60, 0.06, 0.0, Y3 + 1.68, 3.60, clearGlass, { uvScale: 0 });
  p.box('ext', 2.65, h3 - 0.88, 0.22, 3.40, Y3 + 1.94, 3.60, whitePlaster, { solid: true });
  p.box('ext', 9.45, h3, 0.22, 0, mid3, -3.60, whitePlaster, { solid: true });
  p.box('ext', 0.22, h3, 7.25, -4.70, mid3, 0, whitePlaster, { solid: true });
  p.box('ext', 0.22, 0.90, 7.25, 4.70, Y3 + 0.45, 0, whitePlaster, { solid: true });
  p.box('ext', 0.22, h3 - 0.90, 2.25, 4.70, Y3 + 1.95, -2.50, whitePlaster, { solid: true });
  p.box('ext', 0.22, 0.54, 2.60, 4.70, Y3 + 2.73, -0.05, whitePlaster, { solid: true });
  p.box('ext', 0.06, 1.56, 2.56, 4.70, Y3 + 1.68, -0.05, glassMat, { uvScale: 0 });
  p.box('ext', 0.22, h3 - 0.90, 2.40, 4.70, Y3 + 1.95, 2.42, whitePlaster, { solid: true });

  // 3F Temple-Carpenter Drafting Loft Props
  p.box('int', 2.77, 1.60, 0.05, -0.55, Y3 + 1.72, -3.45, timberDark);                     // Drafting chalkboard frame
  p.box('int', 2.65, 1.48, 0.06, -0.55, Y3 + 1.72, -3.41, darkGreenChalk, { uvScale: 0 }); // Roof-curve full-scale drafting board!
  p.box('int', 1.85, 0.82, 0.92, -0.55, Y3 + 0.41, -0.95, counterMat, { solid: true, uvScale: 0 });
  p.box('int', 1.92, 0.06, 0.98, -0.55, Y3 + 0.85, -0.95, warmFloor, { solid: true });     // Polished hinoki drafting tabletop
  p.box('int', 0.52, 1.95, 1.75, 4.26, Y3 + 0.98, -2.15, bookcaseMat, { solid: true, uvScale: 0 });
  p.box('int', 0.56, 1.48, 0.74, 4.24, Y3 + 0.74, 1.95, fileCab, { solid: true, uvScale: 0 });

  // 3F -> 4F Central Yagura Staircase (ENTIRELY INSIDE 4F Yagura: X = +1.75, Z: +1.95 -> -1.75, Y3 -> Y4!)
  p.stairRun('int', {
    x0: 1.75, z0: 1.95, x1: 1.75, z1: -1.75, y0: Y3 + 0.04, y1: Y4 + 0.04,
    width: 1.08, steps: 14, treadMat: timberDark, stringerMat: timberDark, railMat: warmFloor,
    railLeft: true, railRight: false, closedRisers: false, guardLeft: true, guardRight: false,
  });

  // =========================================================================
  // 5. ★ 4F MASTER CARPENTER'S 360° WALKAROUND YAGURA WATCHTOWER (5.4m x 5.4m + 360° BALCONY!)
  // =========================================================================
  const h4 = YTOP - Y4; // 2.70m
  const mid4 = Y4 + h4 * 0.5;

  // 4F Interior Yagura Floor (X ∈ [-2.7, +2.7], Z ∈ [-2.7, +2.7]) with 3F->4F cutout (X∈[+1.08,+2.64], Z∈[-1.80,+2.02])
  p.box('int', 3.80, 0.16, 5.40, -0.80, Y4 - 0.06, 0, oakFloor);           // West/Center viewing room X∈[-2.70,+1.10]
  p.box('int', 1.64, 0.16, 0.92, 1.88, Y4 - 0.06, -2.24, oakFloor);        // NE Arrival landing Z∈[-2.70,-1.78]
  p.box('int', 1.64, 0.16, 0.72, 1.88, Y4 - 0.06, 2.34, oakFloor);         // SE Strip Z∈[+2.00,+2.70]
  p.collider(-2.70, 1.08, Y4 - 0.16, Y4 + 0.02, -2.70, 2.70);
  p.collider(1.08, 2.70, Y4 - 0.16, Y4 + 0.02, -2.70, -1.80);
  p.collider(1.08, 2.70, Y4 - 0.16, Y4 + 0.02, 2.02, 2.70);
  p.floor(-2.65, 1.06, -2.65, 2.65, Y4 + 0.04);
  p.floor(1.02, 2.62, -2.65, -1.74, Y4 + 0.04);
  p.floor(1.02, 2.62, 1.98, 2.65, Y4 + 0.04);

  // 4F Stairwell Guard Railings
  p.kouranRailing('int', 1.08, -1.78, 1.08, 2.02, Y4, 0.94, timberDark, 0.52);
  p.kouranRailing('int', 1.08, 2.02, 2.62, 2.02, Y4, 0.94, timberDark, 0.48);

  // ★ 4F FULL 360° OUTDOOR WALKAROUND KOURAN GALLERY (X ∈ [-3.75, +3.75], Z ∈ [-3.75, +3.75] — 1.05m wide all around!)
  p.box('ext', 7.58, 0.16, 1.12, 0, Y4 - 0.04, 3.24, warmFloor);  // South gallery deck
  p.box('ext', 7.58, 0.16, 1.12, 0, Y4 - 0.04, -3.24, warmFloor); // North gallery deck
  p.box('ext', 1.12, 0.16, 5.44, -3.24, Y4 - 0.04, 0, warmFloor); // West gallery deck
  p.box('ext', 1.12, 0.16, 5.44, 3.24, Y4 - 0.04, 0, warmFloor);  // East gallery deck
  p.kouranRailing('ext', -3.76, 3.76, 3.76, 3.76, Y4, 0.96, timberDark, 0.54);
  p.kouranRailing('ext', -3.76, -3.76, 3.76, -3.76, Y4, 0.96, timberDark, 0.54);
  p.kouranRailing('ext', -3.76, -3.76, -3.76, 3.76, Y4, 0.96, timberDark, 0.54);
  p.kouranRailing('ext', 3.76, -3.76, 3.76, 3.76, Y4, 0.96, timberDark, 0.54);
  p.floor(-3.68, 3.68, 2.62, 3.68, Y4 + 0.04);
  p.floor(-3.68, 3.68, -3.68, -2.62, Y4 + 0.04);
  p.floor(-3.68, -2.62, -3.68, 3.68, Y4 + 0.04);
  p.floor(2.62, 3.68, -3.68, 3.68, Y4 + 0.04);

  // 4F Yagura Walls (Panoramic 360° Timber-Framed Clear Glass + TWO Walk-Out Gallery Doors on South & West!)
  // South 4F (+Z = +2.70): Open gallery door X ∈ [-1.60, -0.05] (1.55m wide!) + Framed window X ∈ [-0.05, +2.70]
  p.box('ext', 1.12, h4, 0.20, -2.16, mid4, 2.70, whitePlaster, { solid: true });
  p.box('ext', 1.60, 0.64, 0.20, -0.82, Y4 + 2.38, 2.70, whitePlaster, { solid: true });
  p.box('ext', 1.64, 0.09, 0.26, -0.82, Y4 + 2.06, 2.70, timberDark); // South doorway kamoi lintel beam
  p.box('ext', 0.11, h4, 0.25, -1.60, mid4, 2.70, timberDark);        // Doorway jambs
  p.box('ext', 0.11, h4, 0.25, -0.04, mid4, 2.70, timberDark);
  p.box('ext', 2.78, 0.78, 0.20, 1.34, Y4 + 0.39, 2.70, whitePlaster, { solid: true });
  p.box('ext', 2.78, 0.08, 0.26, 1.34, Y4 + 0.80, 2.70, timberDark);  // South window timber sill
  p.box('ext', 2.78, 0.09, 0.26, 1.34, YTOP - 0.42, 2.70, timberDark); // South window timber header
  p.box('ext', 0.08, 1.50, 0.14, 0.88, Y4 + 1.54, 2.70, timberDark);  // Window mullions
  p.box('ext', 0.08, 1.50, 0.14, 1.80, Y4 + 1.54, 2.70, timberDark);
  p.box('ext', 2.74, 1.50, 0.06, 1.34, Y4 + 1.54, 2.70, clearGlass, { uvScale: 0 });
  p.box('ext', 2.78, 0.42, 0.20, 1.34, YTOP - 0.21, 2.70, whitePlaster, { solid: true });
  // West 4F (-X = -2.70): Open gallery door Z ∈ [-0.80, +0.75] (1.55m wide!)
  p.box('ext', 0.20, h4, 1.92, -2.70, mid4, -1.76, whitePlaster, { solid: true });
  p.box('ext', 0.20, 0.64, 1.60, -2.70, Y4 + 2.38, -0.02, whitePlaster, { solid: true });
  p.box('ext', 0.26, 0.09, 1.64, -2.70, Y4 + 2.06, -0.02, timberDark); // West doorway kamoi lintel beam
  p.box('ext', 0.25, h4, 0.11, -2.70, mid4, -0.80, timberDark);        // West doorway jambs
  p.box('ext', 0.25, h4, 0.11, -2.70, mid4, 0.76, timberDark);
  p.box('ext', 0.20, h4, 1.98, -2.70, mid4, 1.74, whitePlaster, { solid: true });
  // North 4F (-Z = -2.70) & East 4F (+X = +2.70): Full timber-framed panoramic window walls!
  p.box('ext', 5.45, 0.78, 0.20, 0, Y4 + 0.39, -2.70, whitePlaster, { solid: true });
  p.box('ext', 3.84, 0.08, 0.26, 0.0, Y4 + 0.80, -2.70, timberDark);
  p.box('ext', 3.84, 0.09, 0.26, 0.0, YTOP - 0.42, -2.70, timberDark);
  for (const mx of [-0.95, 0.0, 0.95]) p.box('ext', 0.08, 1.50, 0.14, mx, Y4 + 1.54, -2.70, timberDark);
  p.box('ext', 0.85, h4 - 0.78, 0.20, -2.30, Y4 + 1.74, -2.70, whitePlaster, { solid: true });
  p.box('ext', 3.74, 1.50, 0.06, 0.0, Y4 + 1.54, -2.70, clearGlass, { uvScale: 0 });
  p.box('ext', 3.78, 0.42, 0.20, 0.0, YTOP - 0.21, -2.70, whitePlaster, { solid: true });
  p.box('ext', 0.85, h4 - 0.78, 0.20, 2.30, Y4 + 1.74, -2.70, whitePlaster, { solid: true });
  p.box('ext', 0.20, 0.78, 5.45, 2.70, Y4 + 0.39, 0, whitePlaster, { solid: true });
  p.box('ext', 0.26, 0.08, 3.84, 2.70, Y4 + 0.80, 0.0, timberDark);
  p.box('ext', 0.26, 0.09, 3.84, 2.70, YTOP - 0.42, 0.0, timberDark);
  for (const mz of [-0.95, 0.0, 0.95]) p.box('ext', 0.14, 1.50, 0.08, 2.70, Y4 + 1.54, mz, timberDark);
  p.box('ext', 0.20, h4 - 0.78, 0.85, 2.70, Y4 + 1.74, -2.30, whitePlaster, { solid: true });
  p.box('ext', 0.06, 1.50, 3.74, 2.70, Y4 + 1.54, 0.0, clearGlass, { uvScale: 0 });
  p.box('ext', 0.20, 0.42, 3.78, 2.70, YTOP - 0.21, 0.0, whitePlaster, { solid: true });
  p.box('ext', 0.20, h4 - 0.78, 0.85, 2.70, Y4 + 1.74, 2.30, whitePlaster, { solid: true });

  // 4F Corner Pillars, Woven Ceiling, Exposed Master-Joinery Crossed Trusses & Village Survey Map Table!
  for (const [px, pz] of [[-2.72, -2.72], [2.72, -2.72], [-2.72, 2.72], [2.72, 2.72]]) {
    p.box('ext', 0.22, h4 + 0.08, 0.22, px, mid4, pz, timberDark);
  }
  p.box('int', 5.36, 0.08, 5.36, 0, YTOP - 0.04, 0, ajiroCeil);
  p.box('int', 5.2, 0.20, 0.20, 0, YTOP - 0.14, 0, timberDark);
  p.box('int', 0.20, 0.20, 5.2, 0, YTOP - 0.14, 0, timberDark);
  p.box('int', 1.15, 0.82, 0.92, -0.75, Y4 + 0.41, 0.10, timberDark, { solid: true });
  p.box('int', 0.98, 0.03, 0.76, -0.75, Y4 + 0.84, 0.10, mapSign, { uvScale: 0 });

  // =========================================================================
  // 6. FOUR-TIER MASTER-CARPENTER SILVER-BLACK HON-GAWARA ROOFS (鬼瓦×6基!)
  // =========================================================================
  // A. 1F Front & Side Kawara Eaves
  p.kawaraSlope('ext', {
    bottomWidth: 13.4, run: 1.32, pitch: 0.36, ridgeX: 0, ridgeY: Y2 + 0.14, ridgeZ: 4.56,
    downslopeYaw: 0, tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 10.0, run: 1.05, pitch: 0.36, ridgeX: -6.26, ridgeY: Y2 + 0.10, ridgeZ: 0,
    downslopeYaw: -Math.PI * 0.5, tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });

  // B. 2F Deep Skirt Kawara Eaves framing 3F Base (all 4 sides)
  const sk2Pitch = 0.40;
  p.kawaraSlope('ext', {
    topWidth: 9.6, bottomWidth: 13.8, run: 2.30, pitch: sk2Pitch, ridgeX: 0, ridgeY: Y3 + 0.50, ridgeZ: 3.58,
    downslopeYaw: 0, tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 9.6, bottomWidth: 13.8, run: 1.95, pitch: sk2Pitch, ridgeX: 0, ridgeY: Y3 + 0.42, ridgeZ: -3.58,
    downslopeYaw: Math.PI, tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 7.4, bottomWidth: 10.6, run: 2.25, pitch: sk2Pitch, ridgeX: 4.68, ridgeY: Y3 + 0.48, ridgeZ: 0,
    downslopeYaw: Math.PI * 0.5, tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 7.4, bottomWidth: 10.6, run: 2.25, pitch: sk2Pitch, ridgeX: -4.68, ridgeY: Y3 + 0.48, ridgeZ: 0,
    downslopeYaw: -Math.PI * 0.5, tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });

  // C. 3F Lower Skirt Kawara Eaves cleanly outside the 4F 360° Balcony (starts at ±3.78m outward!)
  const sk3Pitch = 0.40;
  p.kawaraSlope('ext', {
    topWidth: 7.6, bottomWidth: 10.4, run: 1.35, pitch: sk3Pitch, ridgeX: 0, ridgeY: Y4 + 0.02, ridgeZ: 3.74,
    downslopeYaw: 0, tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 7.6, bottomWidth: 10.4, run: 1.35, pitch: sk3Pitch, ridgeX: 0, ridgeY: Y4 + 0.02, ridgeZ: -3.74,
    downslopeYaw: Math.PI, tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 7.6, bottomWidth: 9.2, run: 1.55, pitch: sk3Pitch, ridgeX: 3.74, ridgeY: Y4 + 0.06, ridgeZ: 0,
    downslopeYaw: Math.PI * 0.5, tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 7.6, bottomWidth: 9.2, run: 1.55, pitch: sk3Pitch, ridgeX: -3.74, ridgeY: Y4 + 0.06, ridgeZ: 0,
    downslopeYaw: -Math.PI * 0.5, tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });

  // ★ D. 4F GRAND MASTER-CARPENTER SILVER-BLACK HON-GAWARA IRIMOYA WATCHTOWER ROOF (YTOP = 12.55 -> crest 15.00m!)
  const topPitch = 0.52;
  const topRun = 4.45; // Generously shelters the entire 4F 360° Outdoor Kouran Balcony!
  const topRidgeY = YTOP + topRun * Math.tan(topPitch) - 0.12; // ~14.97m!
  const topRidgeHalfX = 1.65;
  const topBotW = topRun * 2; // 8.90m square flared drip eave!
  const gableH = 1.05;
  const sideStartY = topRidgeY - gableH;

  p.kawaraSlope('ext', {
    topWidth: topRidgeHalfX * 2, bottomWidth: topBotW, run: topRun, pitch: topPitch,
    ridgeX: 0, ridgeY: topRidgeY, ridgeZ: 0, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.34,
  });
  p.kawaraSlope('ext', {
    topWidth: topRidgeHalfX * 2, bottomWidth: topBotW, run: topRun, pitch: topPitch,
    ridgeX: 0, ridgeY: topRidgeY, ridgeZ: 0, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.34,
  });
  // East & West Irimoya hip aprons + white-plaster upper gable cheeks (tucked cleanly under ridge!)
  p.gablePrism('ext', 3.40, gableH - 0.08, 0.18, topRidgeHalfX, sideStartY, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 3.40, gableH - 0.08, 0.18, -topRidgeHalfX, sideStartY, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.kawaraSlope('ext', {
    topWidth: 3.6, bottomWidth: topBotW, run: topRun - topRidgeHalfX + 0.10, pitch: 0.48,
    ridgeX: topRidgeHalfX, ridgeY: sideStartY, ridgeZ: 0, downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.34,
  });
  p.kawaraSlope('ext', {
    topWidth: 3.6, bottomWidth: topBotW, run: topRun - topRidgeHalfX + 0.10, pitch: 0.48,
    ridgeX: -topRidgeHalfX, ridgeY: sideStartY, ridgeZ: 0, downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.34,
  });

  // Grand 3-Course Ridge + 4 Diagonal Hip Ridges = 6 Sculpted Horned Onigawara!
  p.kawaraRidge('ext', -topRidgeHalfX, topRidgeY + 0.04, 0, topRidgeHalfX, topRidgeY + 0.04, 0, kawaraRidge, oniMat, {
    scale: 1.12, courses: 3, oniStart: true, oniEnd: true,
  });
  const eaveY = topRidgeY - topRun * Math.tan(topPitch);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      p.kawaraRidge(
        'ext',
        sx * topRidgeHalfX, sideStartY + 0.04, sz * 1.75,
        sx * (topRun - 0.10), eaveY + 0.05, sz * (topRun - 0.10),
        kawaraRidge, oniMat,
        { scale: 0.72, courses: 1, oniStart: false, oniEnd: true }
      );
    }
  }

  return p.build({
    id: 'H07',
    name: '安藤家（大工棟梁・懸造り四階木組櫓邸）',
    subtitle: '懸造り柱脚・木工刻み場・原寸図面室・4F 360°屋外回廊付望楼櫓',
    category: 'house',
    builtYear: 1877,
    abandonedYear: 1985,
    stories: 4,
    floorElevations: [Y1, Y2, Y3, Y4],
    entryLocal: [-1.4, 0.0, 7.6],
    entryLookLocalYaw: 0,
  });
}
