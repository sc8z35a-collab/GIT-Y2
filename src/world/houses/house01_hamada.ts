import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H01: 浜田家（網元の二階建町家）— 1876年（明治9年）築・1985年廃村
 * 2階建木造町家・いぶし銀本瓦入母屋屋根＋1F深瓦庇・出格子・虫籠窓・明治の箱階段・西縁側
 */
export function buildHouse01Hamada(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // Materials (strictly from user-provided textures)
  const plinthMat = catalog.getMaterial('ishigaki_cut', { roughness: 0.94, bumpScale: 0.07 });
  const stepMat = catalog.getMaterial('dressed_stone', { roughness: 0.92, bumpScale: 0.06 });
  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.91, bumpScale: 0.05 });
  const plasterExt = catalog.getMaterial('white_plaster', { roughness: 0.93, bumpScale: 0.04, tint: 0xf4efe6 });
  const plasterInt = catalog.getMaterial('washi_plaster', { roughness: 0.92, bumpScale: 0.03 });
  const timberPost = catalog.getMaterial('dark_hardwood', { roughness: 0.86, bumpScale: 0.04 });
  const warmWood = catalog.getMaterial('warm_wood_plank', { roughness: 0.85, bumpScale: 0.04 });
  const lightWood = catalog.getMaterial('light_wood_grain', { roughness: 0.84, bumpScale: 0.03 });
  const domaFloor = catalog.getMaterial('cobblestone', { roughness: 0.93, bumpScale: 0.06 });
  const tatamiMat = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const latticeMat = catalog.getMaterial('carved_wood_lattice', { roughness: 0.86, bumpScale: 0.05 });
  const louverMat = catalog.getMaterial('cedar_louvers', { roughness: 0.88, bumpScale: 0.05 });
  const shojiMat = catalog.getMaterial('shoji_sliding_door', { roughness: 0.88, bumpScale: 0.02, opacity: 0.92, transparent: true });
  const fusumaMat = catalog.getMaterial('linen_fusuma', { roughness: 0.9, bumpScale: 0.02 });
  const glassMat = catalog.getMaterial('frosted_grid_window', { roughness: 0.35, metalness: 0.08, opacity: 0.45, transparent: true });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.75, bumpScale: 0.03 });
  const cabMat = catalog.getMaterial('kitchen_cabinet', { roughness: 0.8, bumpScale: 0.03 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const shrineMat = catalog.getMaterial('shrine_facade', { roughness: 0.82, bumpScale: 0.04 });
  const ropeMat = catalog.getMaterial('woven_rope_mat', { roughness: 0.95, bumpScale: 0.06 });
  const crateMat = catalog.getMaterial('shop_produce_crates', { roughness: 0.9, bumpScale: 0.05 });
  const ashMat = catalog.getMaterial('black_volcanic_gravel', { roughness: 0.97, bumpScale: 0.06 });
  const ironMat = catalog.getMaterial('matte_black_metal', { roughness: 0.58, metalness: 0.65 });
  const mossMat = catalog.getMaterial('deep_moss', { roughness: 0.96, bumpScale: 0.08 });

  // Traditional Ibushi-gin (いぶし銀) Kawara roof materials
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.76, metalness: 0.14, bumpScale: 0.06, tint: 0xd0d6de });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.72, metalness: 0.18, bumpScale: 0.05, tint: 0xbac2cc });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.68, metalness: 0.24, bumpScale: 0.04, tint: 0xa8b2be });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.62, metalness: 0.3, tint: 0x8e98a4 });

  const Y1 = 0.45;
  const Y2 = 3.45;
  const YTOP = 6.25;

  // =========================================================================
  // 1. CUT-STONE FOUNDATION PLINTH (基礎) & FRONT STONE ENTRY STEPS
  // =========================================================================
  p.box('ext', 10.0, 0.90, 8.0, 0, Y1 - 0.46, 0, plinthMat);
  // Moss growth along shaded north/west foundation corners
  p.box('ext', 3.4, 0.38, 0.22, -3.2, 0.16, -4.05, mossMat);
  p.box('ext', 0.24, 0.42, 3.2, -5.06, 0.18, -1.4, mossMat);

  // Front stone entrance steps leading into 通り土間 (X = 3.55) & main entrance (X = 1.0)
  p.stoneSteps('ext', 1.0, 5.15, 3.92, -0.35, Y1, 2.0, 4, stepMat);
  p.stoneSteps('ext', 3.55, 4.95, 3.92, -0.35, Y1, 1.35, 4, stepMat);

  // =========================================================================
  // 2. 1F FLOORS & WALKABLE SURFACES (Y = +0.45m)
  // =========================================================================
  // East Toori-Doma (石敷き通り土間) X ∈ [2.2, 4.85]
  p.box('int', 2.75, 0.08, 7.6, 3.52, Y1 - 0.04, 0, domaFloor);
  // Central Irori Tatami Room (囲炉裏の間) X ∈ [-1.6, 2.2], Z ∈ [-3.8, 1.8]
  p.box('int', 3.85, 0.12, 5.6, 0.3, Y1 + 0.02, -1.0, tatamiMat);
  // Front Genkan Hall (玄関の間) X ∈ [-1.6, 2.2], Z ∈ [1.8, 3.85]
  p.box('int', 3.85, 0.08, 2.1, 0.3, Y1 - 0.04, 2.82, domaFloor);
  // West Kitchen & Storage (勝手・納戸) X ∈ [-4.85, -1.6]
  p.box('int', 3.3, 0.10, 7.6, -3.22, Y1 - 0.01, 0, warmWood);

  // Entire 1F interior walkable floor surface
  p.floor(-4.75, 4.75, -3.75, 3.95, Y1 + 0.04);

  // =========================================================================
  // 3. 1F EXTERIOR WALLS (焼杉板張り + 正面木彫出格子 + 開放格子戸)
  // =========================================================================
  const h1 = Y2 - Y1; // 3.00m
  const mid1 = Y1 + h1 * 0.5;

  // Front Wall (+Z = +3.85): Doorway 1 at X ∈ [0.25, 1.75], Doorway 2 (doma) at X ∈ [2.95, 4.15]
  p.box('ext', 5.15, h1, 0.22, -2.32, mid1, 3.85, cedarDark, { solid: true });
  // Projecting Machiya Degoshi (木彫出格子) bay window on front-west!
  p.box('ext', 2.6, 1.45, 0.34, -2.6, Y1 + 1.45, 4.04, latticeMat, { uvScale: 0 });
  p.box('ext', 2.78, 0.14, 0.44, -2.6, Y1 + 2.22, 4.06, timberPost);
  p.box('ext', 2.78, 0.14, 0.44, -2.6, Y1 + 0.68, 4.06, timberPost);
  // Pier between main entry & doma entry
  p.box('ext', 1.20, h1, 0.22, 2.35, mid1, 3.85, cedarDark, { solid: true });
  // East corner pier
  p.box('ext', 0.78, h1, 0.22, 4.54, mid1, 3.85, cedarDark, { solid: true });
  // Transom lintels above both front doors (clear height = 2.20m!)
  p.box('ext', 1.54, 0.80, 0.22, 1.00, Y1 + 2.60, 3.85, cedarDark, { solid: true });
  p.box('ext', 1.24, 0.80, 0.22, 3.55, Y1 + 2.60, 3.85, cedarDark, { solid: true });
  // Decorative half-slid open wooden lattice door leaf
  p.box('ext', 0.82, 2.15, 0.06, 0.05, Y1 + 1.08, 3.72, shojiMat, { uvScale: 0 });

  // Back Wall (-Z = -3.85): solid with kitchen window opening at X ∈ [-3.6, -2.2]
  p.box('ext', 1.35, h1, 0.22, -4.25, mid1, -3.85, cedarDark, { solid: true });
  p.box('ext', 1.45, 0.95, 0.22, -2.90, Y1 + 0.475, -3.85, cedarDark, { solid: true });
  p.box('ext', 1.45, 0.75, 0.22, -2.90, Y1 + 2.625, -3.85, cedarDark, { solid: true });
  p.box('ext', 1.42, 1.32, 0.06, -2.90, Y1 + 1.60, -3.85, glassMat, { uvScale: 0 });
  p.box('ext', 7.15, h1, 0.22, 1.35, mid1, -3.85, cedarDark, { solid: true });

  // West Wall (-X = -4.85) with frosted window at Z ∈ [-1.2, +0.4]
  p.box('ext', 0.22, h1, 2.75, -4.85, mid1, -2.52, cedarDark, { solid: true });
  p.box('ext', 0.22, 0.92, 1.65, -4.85, Y1 + 0.46, -0.40, cedarDark, { solid: true });
  p.box('ext', 0.22, 0.78, 1.65, -4.85, Y1 + 2.61, -0.40, cedarDark, { solid: true });
  p.box('ext', 0.06, 1.32, 1.62, -4.85, Y1 + 1.56, -0.40, glassMat, { uvScale: 0 });
  p.box('ext', 0.22, h1, 3.55, -4.85, mid1, 2.15, cedarDark, { solid: true });

  // East Wall (+X = +4.85) solid charred cedar along doma
  p.box('ext', 0.22, h1, 7.82, 4.85, mid1, 0, cedarDark, { solid: true });

  // Interior white plaster wall liners & exposed dark structural beams (真壁造り)
  p.box('int', 9.45, h1 - 0.1, 0.06, 0, mid1, -3.70, plasterInt);
  p.box('int', 0.06, h1 - 0.1, 7.45, 4.70, mid1, 0, plasterInt);
  // 1F structural dark timber posts & ceiling tie-beams
  for (const px of [-4.72, -1.6, 2.2, 4.72]) {
    for (const pz of [-3.72, 1.8, 3.72]) {
      p.box('int', 0.16, h1, 0.16, px, mid1, pz, timberPost);
    }
  }
  for (const bz of [-2.4, -0.6, 1.2, 2.8]) {
    p.box('int', 9.4, 0.18, 0.16, 0, Y2 - 0.14, bz, timberPost);
  }

  // 1F Interior Partitions (with wide >=1.35m doorways!)
  // Partition between West Kitchen/Nando (X=-1.6): opening at Z ∈ [-0.4, +1.1]
  p.box('int', 0.14, h1, 3.35, -1.6, mid1, -2.10, plasterInt, { solid: true });
  p.box('int', 0.14, h1, 2.65, -1.6, mid1, 2.45, plasterInt, { solid: true });
  p.box('int', 0.14, 0.78, 1.52, -1.6, Y1 + 2.61, 0.35, plasterInt, { solid: true });
  // Partition dividing Kitchen (-Z) & Fishing Nando (+Z) at Z = 1.1, opening at X ∈ [-3.9, -2.5]
  p.box('int', 0.95, h1, 0.12, -4.35, mid1, 1.1, plasterInt, { solid: true });
  p.box('int', 0.95, h1, 0.12, -2.08, mid1, 1.1, plasterInt, { solid: true });
  p.box('int', 1.42, 0.78, 0.12, -3.20, Y1 + 2.61, 1.1, plasterInt, { solid: true });
  // Raised wooden Agarikamachi (上り框) step between Genkan and Irori Tatami
  p.box('int', 3.75, 0.16, 0.24, 0.3, Y1 + 0.08, 1.82, timberPost);

  // =========================================================================
  // 4. 1F STORYTELLING FURNITURE & MEIJI-SHOWA DETAILS
  // =========================================================================
  // Sunken Irori Hearth (黒木囲炉裏) in center of 囲炉裏の間 (X=0.2, Z=-1.1)
  p.box('int', 1.55, 0.20, 1.55, 0.2, Y1 + 0.12, -1.1, timberPost, { solid: true });
  p.box('int', 1.18, 0.18, 1.18, 0.2, Y1 + 0.14, -1.1, ashMat);
  p.cyl('int', 0.22, 0.25, 0.22, 10, 0.2, Y1 + 0.32, -1.1, ironMat); // Iron Tetsunabe pot
  p.cyl('int', 0.03, 0.03, 2.15, 6, 0.2, Y1 + 1.55, -1.1, ironMat);  // Jizaikagi hanging hook rod
  // Red zabuton cushions around the hearth
  p.box('int', 0.62, 0.07, 0.62, 0.2, Y1 + 0.10, -2.25, zabutonMat, { uvScale: 0 });
  p.box('int', 0.62, 0.07, 0.62, -0.95, Y1 + 0.10, -1.1, zabutonMat, { uvScale: 0 });
  p.box('int', 0.62, 0.07, 0.62, 1.35, Y1 + 0.10, -1.1, zabutonMat, { uvScale: 0 });
  // Antique Tansu chest against north wall of Irori room
  p.box('int', 1.55, 1.45, 0.56, 0.8, Y1 + 0.78, -3.38, tansuMat, { solid: true, uvScale: 0 });

  // West Kitchen: Retro Showa kitchen sink unit + wooden cabinet
  p.box('int', 1.85, 0.88, 0.66, -3.25, Y1 + 0.44, -3.32, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 0.58, 1.78, 1.15, -4.42, Y1 + 0.89, -1.85, cabMat, { solid: true, uvScale: 0 });

  // Southwest Fishing Net Storage (網置き納戸): wooden crates & coiled rope mats
  p.box('int', 0.92, 0.72, 0.68, -4.22, Y1 + 0.36, 2.95, crateMat, { solid: true, uvScale: 0 });
  p.box('int', 0.74, 0.54, 0.58, -4.18, Y1 + 0.98, 2.92, crateMat, { ry: 0.18, uvScale: 0 });
  p.cyl('int', 0.42, 0.44, 0.26, 10, -2.75, Y1 + 0.15, 3.05, ropeMat);

  // =========================================================================
  // 5. MEIJI HAKO-KAIDAN (明治の箱階段) IN TOORI-DOMA (1F -> 2F)
  // =========================================================================
  // Rises along X = 3.55 from Z = +1.75 (Y1) to Z = -2.05 (Y2)
  p.stairRun('int', {
    x0: 3.55,
    z0: 1.75,
    x1: 3.55,
    z1: -2.05,
    y0: Y1 + 0.04,
    y1: Y2 + 0.04,
    width: 1.18,
    steps: 14,
    treadMat: timberPost,
    stringerMat: timberPost,
    railMat: warmWood,
    railLeft: true,
    railRight: false,
    closedRisers: true,
    boxChestMat: tansuMat,
    guardLeft: true,
    guardRight: false,
  });

  // =========================================================================
  // 6. 2F FLOOR SLABS (WITH CLEAN STAIRWELL CUTOUT OVER X ∈ [2.65, 4.8], Z ∈ [-2.0, +2.0])
  // =========================================================================
  // Main 2F slab left of stairwell: X ∈ [-4.8, 2.65], Z ∈ [-3.8, 3.8]
  p.box('int', 7.48, 0.16, 7.62, -1.07, Y2 - 0.06, 0, warmWood);
  // Top landing slab north of stairwell: X ∈ [2.65, 4.8], Z ∈ [-3.8, -2.05]
  p.box('int', 2.18, 0.16, 1.78, 3.72, Y2 - 0.06, -2.92, warmWood);
  // Front landing slab south of stairwell: X ∈ [2.65, 4.8], Z ∈ [2.05, 3.8]
  p.box('int', 2.18, 0.16, 1.78, 3.72, Y2 - 0.06, 2.92, warmWood);

  // Tatami overlay in 2F 8-mat Zashiki & Butsuma
  p.box('int', 5.3, 0.04, 5.2, -2.05, Y2 + 0.03, -1.1, tatamiMat);
  p.box('int', 1.85, 0.04, 3.4, 1.62, Y2 + 0.03, -1.9, tatamiMat);

  // Overhead 1F ceiling colliders (strictly matching floor slabs so stairwell has full open headroom!)
  p.collider(-4.8, 2.65, Y2 - 0.18, Y2 + 0.02, -3.8, 3.8);
  p.collider(2.65, 4.8, Y2 - 0.18, Y2 + 0.02, -3.8, -2.08);
  p.collider(2.65, 4.8, Y2 - 0.18, Y2 + 0.02, 2.08, 3.8);

  // 2F walkable floor surfaces (leaving stairwell hole open!)
  p.floor(-4.75, 2.65, -3.75, 3.75, Y2 + 0.04);
  p.floor(2.65, 4.75, -3.75, -2.0, Y2 + 0.04);
  p.floor(2.65, 4.75, 2.0, 3.75, Y2 + 0.04);

  // Protective wooden railing around 2F stairwell opening (west & south edges)
  p.box('int', 0.08, 0.92, 4.05, 2.65, Y2 + 0.46, 0.0, timberPost, { solid: true });
  p.box('int', 2.10, 0.92, 0.08, 3.70, Y2 + 0.46, 2.04, timberPost, { solid: true });

  // =========================================================================
  // 7. 2F EXTERIOR WALLS (白漆喰真壁 + 虫籠窓 + 西側張り出し縁側)
  // =========================================================================
  const h2 = YTOP - Y2; // 2.80m
  const mid2 = Y2 + h2 * 0.5;

  // Front 2F Wall (+Z = +3.85) with twin traditional Mushikomado (虫籠窓) lattice windows
  p.box('ext', 2.4, h2, 0.22, -3.65, mid2, 3.85, plasterExt, { solid: true });
  p.box('ext', 1.8, 0.85, 0.22, -1.55, Y2 + 0.42, 3.85, plasterExt, { solid: true });
  p.box('ext', 1.8, 0.75, 0.22, -1.55, Y2 + 2.42, 3.85, plasterExt, { solid: true });
  p.box('ext', 1.76, 1.18, 0.08, -1.55, Y2 + 1.45, 3.87, louverMat, { uvScale: 0 });
  p.box('ext', 1.5, h2, 0.22, 0.10, mid2, 3.85, plasterExt, { solid: true });
  p.box('ext', 1.8, 0.85, 0.22, 1.75, Y2 + 0.42, 3.85, plasterExt, { solid: true });
  p.box('ext', 1.8, 0.75, 0.22, 1.75, Y2 + 2.42, 3.85, plasterExt, { solid: true });
  p.box('ext', 1.76, 1.18, 0.08, 1.75, Y2 + 1.45, 3.87, louverMat, { uvScale: 0 });
  p.box('ext', 2.25, h2, 0.22, 3.78, mid2, 3.85, plasterExt, { solid: true });

  // Back 2F Wall (-Z = -3.85) with wide mountain-view window
  p.box('ext', 3.4, h2, 0.22, -3.15, mid2, -3.85, plasterExt, { solid: true });
  p.box('ext', 2.4, 0.82, 0.22, -0.25, Y2 + 0.41, -3.85, plasterExt, { solid: true });
  p.box('ext', 2.4, 0.65, 0.22, -0.25, Y2 + 2.47, -3.85, plasterExt, { solid: true });
  p.box('ext', 2.36, 1.32, 0.06, -0.25, Y2 + 1.48, -3.85, glassMat, { uvScale: 0 });
  p.box('ext', 4.0, h2, 0.22, 2.95, mid2, -3.85, plasterExt, { solid: true });

  // East 2F Wall (+X = +4.85) with stairwell window
  p.box('ext', 0.22, h2, 2.8, 4.85, mid2, -2.45, plasterExt, { solid: true });
  p.box('ext', 0.22, 0.90, 2.0, 4.85, Y2 + 0.45, -0.05, plasterExt, { solid: true });
  p.box('ext', 0.22, 0.65, 2.0, 4.85, Y2 + 2.47, -0.05, plasterExt, { solid: true });
  p.box('ext', 0.06, 1.25, 1.96, 4.85, Y2 + 1.52, -0.05, glassMat, { uvScale: 0 });
  p.box('ext', 0.22, h2, 2.95, 4.85, mid2, 2.42, plasterExt, { solid: true });

  // West 2F Wall (-X = -4.85) with OPEN Engawa Balcony Doorway at Z ∈ [-1.6, -0.1]!
  p.box('ext', 0.22, h2, 2.30, -4.85, mid2, -2.75, plasterExt, { solid: true });
  p.box('ext', 0.22, 0.68, 1.55, -4.85, Y2 + 2.46, -0.85, plasterExt, { solid: true });
  p.box('ext', 0.22, h2, 4.00, -4.85, mid2, 1.92, plasterExt, { solid: true });

  // Projecting West 2F Wooden Engawa Balcony (縁側) X ∈ [-6.05, -4.85], Z ∈ [-3.2, +2.6]
  p.box('ext', 1.28, 0.16, 5.85, -5.45, Y2 - 0.04, -0.30, warmWood);
  p.floor(-5.98, -4.75, -3.15, 2.55, Y2 + 0.04);
  // Diagonal cantilever support brackets beneath balcony
  for (const bz of [-2.8, -1.1, 0.6, 2.2]) {
    p.box('ext', 0.14, 1.25, 0.14, -5.32, Y2 - 0.56, bz, timberPost, { rz: -0.78 });
  }
  // Open traditional Japanese wooden balustrade (高欄手すり) around West Balcony
  p.kouranRailing('ext', -6.02, -3.18, -6.02, 2.58, Y2, 0.94, timberPost, 0.56);
  p.kouranRailing('ext', -6.02, -3.18, -4.85, -3.18, Y2, 0.94, timberPost, 0.56);
  p.kouranRailing('ext', -6.02, 2.58, -4.85, 2.58, Y2, 0.94, timberPost, 0.56);

  // Exposed exterior dark cedar Shinkabe (真壁) posts & belt-course trim on 2F facade
  for (const px of [-4.86, -2.5, 0.1, 2.6, 4.86]) {
    p.box('ext', 0.18, h2 + 0.08, 0.28, px, mid2, 3.86, timberPost);
    p.box('ext', 0.18, h2 + 0.08, 0.28, px, mid2, -3.86, timberPost);
  }
  p.box('ext', 9.95, 0.22, 0.28, 0, Y2 + 0.04, 3.86, timberPost);
  p.box('ext', 9.95, 0.22, 0.28, 0, YTOP - 0.08, 3.86, timberPost);

  // 2F Interior Partitions, Ceiling & Props
  // Corridor wall at Z = 1.65 (wide opening into Zashiki at X ∈ [-2.2, -0.7])
  p.box('int', 2.6, h2, 0.12, -3.50, mid2, 1.65, fusumaMat, { solid: true, uvScale: 0 });
  p.box('int', 1.55, 0.68, 0.12, -1.45, Y2 + 2.46, 1.65, plasterInt, { solid: true });
  p.box('int', 3.35, h2, 0.12, 0.98, mid2, 1.65, fusumaMat, { solid: true, uvScale: 0 });
  // Butsuma divider at X = 0.65 (opening at Z ∈ [-1.2, +0.3])
  p.box('int', 0.12, h2, 2.55, 0.65, mid2, -2.50, plasterInt, { solid: true });
  p.box('int', 0.12, 0.68, 1.55, 0.65, Y2 + 2.46, -0.45, plasterInt, { solid: true });
  p.box('int', 0.12, h2, 1.35, 0.65, mid2, 0.98, plasterInt, { solid: true });

  // 2F Ceiling deck
  p.box('int', 9.6, 0.14, 7.6, 0, YTOP - 0.06, 0, lightWood);
  p.collider(-4.8, 4.8, YTOP - 0.14, YTOP + 0.1, -3.8, 3.8);

  // 2F Zashiki Furniture: Tokonoma alcove, low Zataku table, antique Tansu & Butsuma altar
  p.box('int', 2.2, 0.18, 0.85, -3.2, Y2 + 0.09, -3.35, timberPost, { solid: true }); // Raised Tokonoma floor
  p.box('int', 0.16, h2, 0.92, -2.08, mid2, -3.35, timberPost); // Tokobashira sacred cedar post
  p.box('int', 1.55, 0.36, 0.95, -2.1, Y2 + 0.22, -0.95, timberPost, { solid: true }); // Low Zataku table
  p.box('int', 0.58, 0.07, 0.58, -2.1, Y2 + 0.07, -1.78, zabutonMat, { uvScale: 0 });
  p.box('int', 0.58, 0.07, 0.58, -2.1, Y2 + 0.07, -0.12, zabutonMat, { uvScale: 0 });
  p.box('int', 1.45, 1.40, 0.55, -0.45, Y2 + 0.72, -3.42, tansuMat, { solid: true, uvScale: 0 });
  // Butsuma Family Altar (仏壇・神棚) in NE room
  p.box('int', 1.25, 1.65, 0.55, 1.62, Y2 + 0.86, -3.40, shrineMat, { solid: true, uvScale: 0 });

  // =========================================================================
  // 8. TRADITIONAL JAPANESE KAWARA ROOFS (1F深瓦庇 + 2F重厚いぶし銀本瓦入母屋屋根)
  // =========================================================================
  // 8A. Deep 1F Front Kawara Hisashi Eave (瓦庇) projecting over street entrance & Degoshi
  p.kawaraSlope('ext', {
    bottomWidth: 10.6,
    topWidth: 10.6,
    run: 1.45,
    pitch: 0.36,
    ridgeX: 0,
    ridgeY: Y2 + 0.14,
    ridgeZ: 3.92,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: timberPost,
    ribSpacing: 0.36,
  });
  // West 2F Balcony protective kawara eave overhang
  p.kawaraSlope('ext', {
    bottomWidth: 6.4,
    topWidth: 6.4,
    run: 1.55,
    pitch: 0.38,
    ridgeX: -4.85,
    ridgeY: YTOP + 0.05,
    ridgeZ: -0.30,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: timberPost,
    ribSpacing: 0.38,
  });

  // 8B. Grand 2F Ibushi-gin Irimoya Kawara Roof (いぶし銀本瓦・入母屋屋根)
  // Lower hipped skirt (下屋根: Y = 6.25 -> 7.45) + Upper gable crown (上切妻: Y = 7.45 -> 8.75)
  const roofPitch = 0.48;
  const skirtRun = 2.35;
  const skirtRise = skirtRun * Math.tan(roofPitch); // ~1.22m
  const yBreak = YTOP + skirtRise - 0.15; // 7.32m

  // Front & Back full-length slopes from top ridge (Y = 8.75) to deep eaves (Z = ±5.05)
  const mainRun = 5.05;
  const mainRise = mainRun * Math.tan(roofPitch); // ~2.63m
  const yRidge = YTOP - 0.15 + mainRise; // 8.73m
  // Upper gable span along X: [-3.4..+3.4] (6.8m) -> widens via hip skirts to ±6.1m at eaves!
  p.kawaraSlope('ext', {
    topWidth: 7.2,
    bottomWidth: 12.2,
    run: mainRun,
    pitch: roofPitch,
    ridgeX: 0,
    ridgeY: yRidge,
    ridgeZ: 0,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: timberPost,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 7.2,
    bottomWidth: 12.2,
    run: mainRun,
    pitch: roofPitch,
    ridgeX: 0,
    ridgeY: yRidge,
    ridgeZ: 0,
    downslopeYaw: Math.PI,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: timberPost,
    ribSpacing: 0.38,
  });

  // East & West Lower Irimoya Hip Skirts (入母屋妻側下屋根)
  p.kawaraSlope('ext', {
    topWidth: 5.2,
    bottomWidth: 10.1,
    run: 2.50,
    pitch: roofPitch,
    ridgeX: 3.60,
    ridgeY: yBreak + 0.12,
    ridgeZ: 0,
    downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: timberPost,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 5.2,
    bottomWidth: 10.1,
    run: 2.50,
    pitch: roofPitch,
    ridgeX: -3.60,
    ridgeY: yBreak + 0.12,
    ridgeZ: 0,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: timberPost,
    ribSpacing: 0.38,
  });

  // White-plaster triangular Irimoya Gable Walls (入母屋妻壁・破風) at X = ±3.55
  const gableH = yRidge - (yBreak + 0.02);
  p.gablePrism('ext', 5.2, gableH, 0.24, 3.55, yBreak + 0.02, 0, plasterExt, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 5.2, gableH, 0.24, -3.55, yBreak + 0.02, 0, plasterExt, { ry: Math.PI * 0.5 });
  // Dark timber gable vents (木連格子) inside the plaster triangles
  p.box('ext', 0.14, 0.52, 1.35, 3.68, yBreak + 0.52, 0, louverMat, { uvScale: 0 });
  p.box('ext', 0.14, 0.52, 1.35, -3.68, yBreak + 0.52, 0, louverMat, { uvScale: 0 });

  // Main Ridge (大棟) with Twin Sculpted Horned Onigawara (鬼瓦)
  p.kawaraRidge('ext', -3.68, yRidge + 0.04, 0, 3.68, yRidge + 0.04, 0, kawaraRidge, oniMat, {
    scale: 1.12,
    oniStart: true,
    oniEnd: true,
    courses: 3,
  });

  // Four Diagonal Hip Ridges (隅棟) descending from gable corners to the 4 outer eave corners!
  const yEave = YTOP - 0.12;
  p.kawaraRidge('ext', -3.6, yBreak + 0.12, 2.55, -6.05, yEave, 5.0, kawaraRidge, oniMat, { scale: 0.72, oniEnd: true, courses: 2 });
  p.kawaraRidge('ext', 3.6, yBreak + 0.12, 2.55, 6.05, yEave, 5.0, kawaraRidge, oniMat, { scale: 0.72, oniEnd: true, courses: 2 });
  p.kawaraRidge('ext', -3.6, yBreak + 0.12, -2.55, -6.05, yEave, -5.0, kawaraRidge, oniMat, { scale: 0.72, oniEnd: true, courses: 2 });
  p.kawaraRidge('ext', 3.6, yBreak + 0.12, -2.55, 6.05, yEave, -5.0, kawaraRidge, oniMat, { scale: 0.72, oniEnd: true, courses: 2 });

  return p.build({
    id: site.id,
    name: '浜田家（網元の二階建町家）',
    subtitle: '明治9年築・焼杉と白漆喰真壁・いぶし銀本瓦入母屋・二階建',
    category: 'house',
    builtYear: 1876,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y1 + 0.04, Y2 + 0.04],
    entryLocal: [1.0, 0.0, 6.2],
  });
}
