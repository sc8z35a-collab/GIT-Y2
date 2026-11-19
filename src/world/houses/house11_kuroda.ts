import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H11: 黒田本家（1872年築・庄屋の四階望楼邸）— ★4階建ランドマーク
 * 島最古・最大の庄屋本宅！切石高基礎・焼杉＆白漆喰真壁・四重いぶし銀本瓦入母屋屋根＆多重鬼瓦・
 * 唐破風風玄関庇・1F12畳大広間＆竈土間・2F書斎＆欄干回廊・3F大宴会座敷・4F360°黒磯望楼展望室
 */
export function buildHouse11Kuroda(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });
  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.90, bumpScale: 0.05 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xf7f3ea });
  const washiWall = catalog.getMaterial('washi_plaster', { roughness: 0.91, bumpScale: 0.03 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.83, bumpScale: 0.04 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.82, bumpScale: 0.03 });
  const cobbleFloor = catalog.getMaterial('cobblestone', { roughness: 0.92, bumpScale: 0.06 });
  const tatamiBord = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const tatamiGreen = catalog.getMaterial('tatami_green_border', { roughness: 0.92, bumpScale: 0.04 });
  const fusumaMat = catalog.getMaterial('linen_fusuma', { roughness: 0.9, bumpScale: 0.02 });
  const shojiMat = catalog.getMaterial('shoji_sliding_door', { roughness: 0.88, opacity: 0.90, transparent: true });
  const latticeMat = catalog.getMaterial('carved_wood_lattice', { roughness: 0.86, bumpScale: 0.05 });
  const glassMat = catalog.getMaterial('window_frosted_wood', { roughness: 0.35, opacity: 0.44, transparent: true });
  const bourouGlassMat = catalog.getMaterial('window_frosted_wood', { roughness: 0.22, opacity: 0.20, transparent: true, tint: 0xdce8f2 });
  const shrineMat = catalog.getMaterial('shrine_facade', { roughness: 0.80, bumpScale: 0.04 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const bookcaseMat = catalog.getMaterial('full_bookcase', { roughness: 0.84, bumpScale: 0.04 });
  const counterMat = catalog.getMaterial('office_counter', { roughness: 0.82, bumpScale: 0.03 });
  const cabMat = catalog.getMaterial('kitchen_cabinet', { roughness: 0.82, bumpScale: 0.03 });
  const rackMat = catalog.getMaterial('storage_rack', { roughness: 0.88, bumpScale: 0.04 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const rugRed = catalog.getMaterial('vintage_rug_red', { roughness: 0.93, bumpScale: 0.03 });
  const mapSign = catalog.getMaterial('island_map_sign', { roughness: 0.82, bumpScale: 0.02 });
  const ironMat = catalog.getMaterial('matte_black_metal', { roughness: 0.58, metalness: 0.65 });

  // Noble Castle-Grade Ibushi-gin Hon-gawara (四重いぶし銀本瓦)
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.72, metalness: 0.18, bumpScale: 0.06, tint: 0xc8d2dc });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.68, metalness: 0.22, bumpScale: 0.05, tint: 0xb2bcc8 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.64, metalness: 0.28, tint: 0x9aa6b4 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.56, metalness: 0.36, tint: 0x828e9c });

  const Y1 = 0.55;
  const Y2 = 3.75;
  const Y3 = 6.85;
  const Y4 = 9.85;
  const YTOP = 12.40;

  // =========================================================================
  // 1. GRAND CUT-STONE PLINTH, CEREMONIAL ENTRY PORCH & STONE STEPS
  // =========================================================================
  p.box('ext', 13.0, 1.35, 10.0, 0, Y1 - 0.68, 0, cutStone);
  p.box('ext', 3.8, 1.25, 1.65, 1.0, Y1 - 0.64, 5.55, cutStone);
  p.stoneSteps('ext', 1.0, 7.45, 6.30, -0.35, Y1, 2.8, 5, stepStone);
  p.floor(-0.8, 2.8, 4.7, 6.4, Y1 + 0.04);

  // Heavy ceremonial cedar entrance porch columns
  p.box('ext', 0.22, 3.0, 0.22, -0.65, Y1 + 1.50, 6.18, timberDark);
  p.box('ext', 0.22, 3.0, 0.22, 2.65, Y1 + 1.50, 6.18, timberDark);
  p.box('ext', 3.65, 0.28, 0.26, 1.0, Y1 + 3.02, 6.18, timberDark);

  // =========================================================================
  // 2. 1F: 12-MAT GRAND HALL, CEREMONIAL SHIKIDAI & KAMADO DOMA (12.6m x 9.6m, Y=+0.55m)
  // =========================================================================
  const h1 = Y2 - Y1; // 3.20m
  const mid1 = Y1 + h1 * 0.5;

  p.box('int', 12.4, 0.10, 9.4, 0, Y1 - 0.03, 0, warmFloor);
  p.box('int', 3.8, 0.06, 9.2, -4.3, Y1 + 0.01, 0, cobbleFloor);  // West Kamado Doma
  p.box('int', 7.8, 0.04, 6.4, 2.0, Y1 + 0.03, -1.2, tatamiBord); // 12-mat Grand Tatami Hall
  p.floor(-6.15, 6.15, -4.65, 4.85, Y1 + 0.04);

  // 1F Exterior Walls (Charred Cedar lower dado + White Plaster Shinkabe upper!)
  // Front 1F (+Z = +4.8): Grand 2.2m Shikidai entrance X ∈ [-0.1, +2.1]
  p.box('ext', 6.25, 1.35, 0.26, -3.22, Y1 + 0.68, 4.8, cedarDark, { solid: true });
  p.box('ext', 6.25, h1 - 1.35, 0.26, -3.22, Y1 + 2.28, 4.8, whitePlaster, { solid: true });
  p.box('ext', 2.24, 0.85, 0.26, 1.00, Y1 + 2.78, 4.8, whitePlaster, { solid: true });
  p.box('ext', 1.15, 2.30, 0.06, -0.55, Y1 + 1.15, 4.62, shojiMat, { uvScale: 0 });
  p.box('ext', 4.25, 1.35, 0.26, 4.22, Y1 + 0.68, 4.8, cedarDark, { solid: true });
  p.box('ext', 4.25, h1 - 1.35, 0.26, 4.22, Y1 + 2.28, 4.8, whitePlaster, { solid: true });

  // Back 1F (-Z = -4.8) with wide tatami garden window
  p.box('ext', 12.75, 1.15, 0.26, 0, Y1 + 0.58, -4.8, cedarDark, { solid: true });
  p.box('ext', 4.8, h1 - 1.15, 0.26, -3.95, Y1 + 2.18, -4.8, whitePlaster, { solid: true });
  p.box('ext', 3.4, 0.62, 0.26, 0.15, Y1 + 2.89, -4.8, whitePlaster, { solid: true });
  p.box('ext', 3.36, 1.44, 0.06, 0.15, Y1 + 1.86, -4.8, glassMat, { uvScale: 0 });
  p.box('ext', 4.6, h1 - 1.15, 0.26, 4.15, Y1 + 2.18, -4.8, whitePlaster, { solid: true });

  // West & East 1F Walls
  p.box('ext', 0.26, 1.35, 9.75, -6.3, Y1 + 0.68, 0, cedarDark, { solid: true });
  p.box('ext', 0.26, h1 - 1.35, 9.75, -6.3, Y1 + 2.28, 0, whitePlaster, { solid: true });
  p.box('ext', 0.26, 1.35, 9.75, 6.3, Y1 + 0.68, 0, cedarDark, { solid: true });
  p.box('ext', 0.26, h1 - 1.35, 2.8, 6.3, Y1 + 2.28, -3.45, whitePlaster, { solid: true });
  p.box('ext', 0.26, 0.65, 3.0, 6.3, Y1 + 2.88, -0.55, whitePlaster, { solid: true });
  p.box('ext', 0.06, 1.25, 2.96, 6.3, Y1 + 1.95, -0.55, latticeMat, { uvScale: 0 });
  p.box('ext', 0.26, h1 - 1.15, 3.9, 6.3, Y1 + 2.18, 2.9, whitePlaster, { solid: true });

  // 1F Interior Partitions (West Kamado Doma divider at X = -2.35, wide opening Z ∈ [+0.9, +2.6])
  p.box('int', 0.16, h1, 5.65, -2.35, mid1, -1.90, washiWall, { solid: true });
  p.box('int', 0.16, 0.80, 1.75, -2.35, Y1 + 2.80, 1.75, washiWall, { solid: true });
  p.box('int', 0.16, h1, 2.15, -2.35, mid1, 3.65, washiWall, { solid: true });

  // 1F Grand Hall Furnishings: Raised Tokonoma, Clan Shrine, Banquet Table, Kamado Stone Stove!
  p.box('int', 2.8, 0.22, 0.92, 4.4, Y1 + 0.12, -4.18, timberDark, { solid: true }); // Raised Tokonoma
  p.box('int', 1.55, 1.95, 0.62, 5.62, Y1 + 1.00, -3.05, shrineMat, { solid: true, ry: -Math.PI * 0.5, uvScale: 0 });
  p.box('int', 2.4, 0.38, 1.15, 1.6, Y1 + 0.22, -1.35, timberDark, { solid: true });
  for (const zx of [0.85, 1.60, 2.35]) {
    p.box('int', 0.62, 0.07, 0.62, zx, Y1 + 0.08, -2.35, zabutonMat, { uvScale: 0 });
    p.box('int', 0.62, 0.07, 0.62, zx, Y1 + 0.08, -0.35, zabutonMat, { uvScale: 0 });
  }
  // West Doma Stone Kamado Stove (石竈) & Iron Cauldron + Kitchen Cabinets
  p.box('int', 1.85, 0.85, 1.15, -4.85, Y1 + 0.42, -3.85, cutStone, { solid: true });
  p.cyl('int', 0.34, 0.30, 0.26, 12, -4.85, Y1 + 0.96, -3.85, ironMat);
  p.box('int', 0.64, 1.85, 1.45, -5.85, Y1 + 0.92, -1.65, cabMat, { solid: true, uvScale: 0 });
  p.box('int', 0.64, 1.85, 1.55, -5.85, Y1 + 0.92, 2.85, rackMat, { solid: true, uvScale: 0 });

  // 1F -> 2F Grand West Kura-style Wide Staircase (X = -4.25, Z: +2.65 -> -1.35, Y1 -> Y2)
  p.stairRun('int', {
    x0: -4.25,
    z0: 2.65,
    x1: -4.25,
    z1: -1.35,
    y0: Y1 + 0.04,
    y1: Y2 + 0.04,
    width: 1.24,
    steps: 15,
    treadMat: timberDark,
    stringerMat: timberDark,
    railMat: warmFloor,
    railLeft: false,
    railRight: true,
    closedRisers: true,
    guardLeft: false,
    guardRight: true,
  });

  // =========================================================================
  // 3. 2F: HEADMAN'S STUDY, FUSUMA CHAMBERS & FRONT VERANDA (10.8m x 8.0m, Y=+3.75m)
  // =========================================================================
  const h2 = Y3 - Y2; // 3.10m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs (X ∈ [-5.4, +5.4], Z ∈ [-4.0, +4.0]) with clean West stairwell cutout (X ∈ [-5.3, -3.45], Z ∈ [-1.40, +2.75])
  p.box('int', 8.95, 0.16, 7.95, 0.95, Y2 - 0.06, 0, warmFloor);
  p.box('int', 1.95, 0.16, 2.62, -4.40, Y2 - 0.06, -2.68, warmFloor);
  p.box('int', 1.95, 0.16, 1.30, -4.40, Y2 - 0.06, 3.35, warmFloor);
  p.box('int', 5.2, 0.04, 6.8, 2.5, Y2 + 0.03, 0.0, tatamiBord); // East twin tatami chambers
  p.box('int', 2.8, 0.03, 3.4, -1.6, Y2 + 0.03, -1.6, rugRed);   // Headman study carpet

  // Projecting Front 2F Open Balustrade Corridor (2F欄干回廊 Z ∈ [+4.0, +5.05], X ∈ [-4.8, +4.8])
  p.box('ext', 9.75, 0.16, 1.12, 0, Y2 - 0.04, 4.54, warmFloor);
  p.kouranRailing('ext', -4.85, 5.05, 4.85, 5.05, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('ext', -4.85, 4.00, -4.85, 5.05, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('ext', 4.85, 4.00, 4.85, 5.05, Y2, 0.94, timberDark, 0.56);

  p.collider(-3.45, 5.4, Y2 - 0.16, Y2 + 0.02, -4.0, 4.0);
  p.collider(-5.4, -3.45, Y2 - 0.16, Y2 + 0.02, -4.0, -1.42);
  p.collider(-5.4, -3.45, Y2 - 0.16, Y2 + 0.02, 2.78, 4.0);

  p.floor(-3.45, 5.3, -3.9, 3.9, Y2 + 0.04);
  p.floor(-5.3, -3.45, -3.9, -1.35, Y2 + 0.04);
  p.floor(-5.3, -3.45, 2.70, 3.9, Y2 + 0.04);
  p.floor(-4.75, 4.75, 3.9, 4.98, Y2 + 0.04);

  // 2F Stairwell guard rails
  p.box('int', 0.08, 0.92, 4.20, -3.46, Y2 + 0.46, 0.68, timberDark, { solid: true });
  p.box('int', 1.85, 0.92, 0.08, -4.38, Y2 + 0.46, 2.76, timberDark, { solid: true });

  // 2F Exterior Walls (White Plaster Shinkabe + Exposed Dark Pillars Framing Veranda Door!)
  // Front 2F (+Z = +4.0): Open veranda door X ∈ [-0.8, +0.8]
  p.box('ext', 4.7, h2, 0.22, -3.1, mid2, 4.0, whitePlaster, { solid: true });
  p.box('ext', 1.65, 0.78, 0.22, 0.0, Y2 + 2.71, 4.0, whitePlaster, { solid: true });
  p.box('ext', 4.7, h2, 0.22, 3.1, mid2, 4.0, whitePlaster, { solid: true });
  p.box('ext', 10.95, h2, 0.22, 0, mid2, -4.0, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 8.15, -5.4, mid2, 0, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 8.15, 5.4, mid2, 0, whitePlaster, { solid: true });
  for (const px of [-5.42, -2.75, -0.84, 0.84, 2.75, 5.42]) {
    p.box('ext', 0.18, h2 + 0.08, 0.28, px, mid2, 4.02, timberDark);
  }
  for (const px of [-5.42, -2.7, 0.0, 2.7, 5.42]) {
    p.box('ext', 0.18, h2 + 0.08, 0.28, px, mid2, -4.02, timberDark);
  }

  // 2F Study & Fusuma Chamber Furnishings
  p.box('int', 0.12, h2, 3.4, -0.05, mid2, -2.25, fusumaMat, { solid: true, uvScale: 0 });
  p.box('int', 2.2, 1.95, 0.52, -1.6, Y2 + 0.98, -3.62, bookcaseMat, { solid: true, uvScale: 0 });
  p.box('int', 1.75, 0.84, 0.80, -1.6, Y2 + 0.44, -1.45, counterMat, { solid: true, uvScale: 0 });
  p.box('int', 1.45, 1.42, 0.54, 1.45, Y2 + 0.72, -3.62, tansuMat, { solid: true, uvScale: 0 });

  // 2F -> 3F East Wing Grand Staircase (X = 3.55, Z: -1.85 -> +1.95, Y2 -> Y3!)
  p.stairRun('int', {
    x0: 3.55,
    z0: -1.85,
    x1: 3.55,
    z1: 1.95,
    y0: Y2 + 0.04,
    y1: Y3 + 0.04,
    width: 1.18,
    steps: 14,
    treadMat: timberDark,
    stringerMat: timberDark,
    railMat: warmFloor,
    railLeft: true,
    railRight: false,
    guardLeft: true,
    guardRight: false,
  });

  // =========================================================================
  // 4. 3F: GRAND BANQUET ZASHIKI & HIGH GALLERY (8.6m x 6.6m, Y=+6.85m)
  // =========================================================================
  const h3 = Y4 - Y3; // 3.00m
  const mid3 = Y3 + h3 * 0.5;

  // 3F Floor Slabs (X ∈ [-4.3, +4.3], Z ∈ [-3.3, +3.3]) with clean East stairwell cutout (X ∈ [2.85, 4.25], Z ∈ [-1.95, +2.00])
  p.box('int', 7.20, 0.16, 6.55, -0.72, Y3 - 0.06, 0, tatamiGreen);
  p.box('int', 1.48, 0.16, 1.40, 3.55, Y3 - 0.06, -2.62, oakFloor);
  p.box('int', 1.48, 0.16, 1.35, 3.55, Y3 - 0.06, 2.65, oakFloor);

  // Projecting Front 3F Open High Balustrade Gallery (3F高欄縁 Z ∈ [+3.3, +4.15], X ∈ [-4.0, +4.0])
  p.box('ext', 8.1, 0.14, 0.90, 0, Y3 - 0.04, 3.74, warmFloor);
  p.kouranRailing('ext', -4.02, 4.16, 4.02, 4.16, Y3, 0.94, timberDark, 0.54);
  p.kouranRailing('ext', -4.02, 3.30, -4.02, 4.16, Y3, 0.94, timberDark, 0.54);
  p.kouranRailing('ext', 4.02, 3.30, 4.02, 4.16, Y3, 0.94, timberDark, 0.54);

  p.collider(-4.3, 2.85, Y3 - 0.16, Y3 + 0.02, -3.3, 3.3);
  p.collider(2.85, 4.3, Y3 - 0.16, Y3 + 0.02, -3.3, -1.98);
  p.collider(2.85, 4.3, Y3 - 0.16, Y3 + 0.02, 2.04, 3.3);

  p.floor(-4.2, 2.85, -3.2, 3.2, Y3 + 0.04);
  p.floor(2.85, 4.2, -3.2, -1.90, Y3 + 0.04);
  p.floor(2.85, 4.2, 1.98, 3.2, Y3 + 0.04);
  p.floor(-3.95, 3.95, 3.2, 4.08, Y3 + 0.04);

  // 3F Stairwell protective railings
  p.box('int', 0.08, 0.92, 4.02, 2.86, Y3 + 0.46, 0.04, timberDark, { solid: true });
  p.box('int', 1.40, 0.92, 0.08, 3.55, Y3 + 0.46, -1.96, timberDark, { solid: true });

  // 3F Exterior Walls (White Plaster + Open Front Gallery Door & Wide Scenic Windows)
  p.box('ext', 3.6, h3, 0.22, -2.55, mid3, 3.3, whitePlaster, { solid: true });
  p.box('ext', 1.55, 0.72, 0.22, 0.0, Y3 + 2.64, 3.3, whitePlaster, { solid: true });
  p.box('ext', 3.6, h3, 0.22, 2.55, mid3, 3.3, whitePlaster, { solid: true });
  p.box('ext', 8.75, h3, 0.22, 0, mid3, -3.3, whitePlaster, { solid: true });
  p.box('ext', 0.22, h3, 2.0, -4.3, mid3, -2.35, whitePlaster, { solid: true });
  p.box('ext', 0.22, 0.80, 2.8, -4.3, Y3 + 0.40, 0.05, whitePlaster, { solid: true });
  p.box('ext', 0.22, 0.62, 2.8, -4.3, Y3 + 2.69, 0.05, whitePlaster, { solid: true });
  p.box('ext', 0.06, 1.50, 2.76, -4.3, Y3 + 1.58, 0.05, glassMat, { uvScale: 0 });
  p.box('ext', 0.22, h3, 2.0, -4.3, mid3, 2.45, whitePlaster, { solid: true });
  p.box('ext', 0.22, h3, 6.75, 4.3, mid3, 0, whitePlaster, { solid: true });

  // 3F Banquet Furnishings
  p.box('int', 2.2, 0.36, 1.05, -0.95, Y3 + 0.22, 0.65, timberDark, { solid: true });
  for (const bx of [-1.65, -0.95, -0.25]) {
    p.box('int', 0.58, 0.07, 0.58, bx, Y3 + 0.08, 1.55, zabutonMat, { uvScale: 0 });
    p.box('int', 0.58, 0.07, 0.58, bx, Y3 + 0.08, -0.25, zabutonMat, { uvScale: 0 });
  }
  p.box('int', 1.45, 1.42, 0.54, -3.85, Y3 + 0.72, -1.85, tansuMat, { solid: true, ry: Math.PI * 0.5, uvScale: 0 });

  // 3F -> 4F Watchtower Staircase (Z = -1.75, X: +1.75 -> -1.55, Y3 -> Y4, climbing straight into the 4F Bourou!)
  p.stairRun('int', {
    x0: 1.75,
    z0: -1.75,
    x1: -1.55,
    z1: -1.75,
    y0: Y3 + 0.04,
    y1: Y4 + 0.04,
    width: 1.12,
    steps: 14,
    treadMat: oakFloor,
    stringerMat: timberDark,
    railMat: timberDark,
    railLeft: true,
    railRight: false,
    guardLeft: true,
    guardRight: false,
  });

  // =========================================================================
  // 5. ★ 4F: 360° KUROISO BOUROU WATCHTOWER PAVILION (5.4m x 5.0m, Y=+9.85m) ★
  // =========================================================================
  const h4 = YTOP - Y4; // 2.55m
  const mid4 = Y4 + h4 * 0.5;

  // 4F Floor Slabs leaving clean cutout over 3F->4F stairwell (X ∈ [-1.62, +1.82], Z ∈ [-2.45, -1.08])
  p.box('int', 5.35, 0.16, 3.60, 0, Y4 - 0.06, 0.72, oakFloor);
  p.box('int', 1.15, 0.16, 1.45, -2.15, Y4 - 0.06, -1.78, oakFloor);
  p.box('int', 0.95, 0.16, 1.45, 2.25, Y4 - 0.06, -1.78, oakFloor);

  // 3F Ceiling Colliders outside 4F footprint & around 4F stairwell
  p.collider(-4.3, 4.3, Y4 - 0.16, Y4 + 0.02, -1.08, 3.3);
  p.collider(-4.3, -1.62, Y4 - 0.16, Y4 + 0.02, -3.3, -1.08);
  p.collider(1.82, 4.3, Y4 - 0.16, Y4 + 0.02, -3.3, -1.08);

  p.floor(-2.62, 2.62, -1.08, 2.42, Y4 + 0.04);
  p.floor(-2.62, -1.55, -2.42, -1.05, Y4 + 0.04);
  p.floor(1.80, 2.62, -2.42, -1.05, Y4 + 0.04);

  // 4F Stairwell guard rails
  p.box('int', 3.45, 0.90, 0.08, 0.10, Y4 + 0.45, -1.10, timberDark, { solid: true });
  p.box('int', 0.08, 0.90, 1.38, 1.82, Y4 + 0.45, -1.78, timberDark, { solid: true });

  // 4F 360° Open Panoramic Watchtower Walls (Low White Plaster Sill + Wide Clear Panoramic Bays on ALL 4 Sides!)
  for (const bz of [-2.5, 2.5]) {
    p.box('ext', 5.55, 0.86, 0.20, 0, Y4 + 0.43, bz, whitePlaster, { solid: true });
    p.box('ext', 5.55, 0.42, 0.20, 0, Y4 + 2.34, bz, timberDark, { solid: true });
    for (const px of [-2.7, -0.9, 0.9, 2.7]) {
      p.box('ext', 0.18, h4, 0.22, px, mid4, bz, timberDark);
    }
    for (const bx of [-1.8, 0, 1.8]) {
      p.box('ext', 1.64, 1.25, 0.04, bx, Y4 + 1.48, bz, bourouGlassMat, { uvScale: 0 });
    }
  }
  for (const bx of [-2.7, 2.7]) {
    p.box('ext', 0.20, 0.86, 5.15, bx, Y4 + 0.43, 0, whitePlaster, { solid: true });
    p.box('ext', 0.20, 0.42, 5.15, bx, Y4 + 2.34, 0, timberDark, { solid: true });
    p.box('ext', 0.22, h4, 0.18, bx, mid4, 0, timberDark);
    for (const bz of [-1.25, 1.25]) {
      p.box('ext', 0.04, 1.25, 2.32, bx, Y4 + 1.48, bz, bourouGlassMat, { uvScale: 0 });
    }
  }

  // 4F Exposed Roof Beams & Central Island Map Observation Desk
  p.box('int', 5.3, 0.12, 4.9, 0, YTOP - 0.04, 0, timberDark);
  p.collider(-2.65, 2.65, YTOP - 0.12, YTOP + 0.1, -2.45, 2.45);
  p.box('int', 1.45, 0.82, 1.05, 0.15, Y4 + 0.42, 0.85, timberDark, { solid: true });
  p.box('int', 1.25, 0.04, 0.85, 0.15, Y4 + 0.85, 0.85, mapSign, { uvScale: 0 }); // Topographic island map laid flat on 4F table!

  // =========================================================================
  // 6. FOUR-TIERED NOBLE IBUSHI-GIN HON-GAWARA ROOFS (四重入母屋本瓦＆多重鬼瓦!!)
  // =========================================================================
  // 6A. Ceremonial Front Karahafu-style Entrance Kawara Roof
  const ePitch = 0.44;
  const eRun = 2.15;
  const eRidgeY = Y2 + 0.12 + eRun * Math.tan(ePitch);
  p.kawaraSlope('ext', {
    bottomWidth: 2.3,
    run: eRun,
    pitch: ePitch,
    ridgeX: 1.0,
    ridgeY: eRidgeY,
    ridgeZ: 5.55,
    downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: timberDark,
    ribSpacing: 0.34,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 2.3,
    run: eRun,
    pitch: ePitch,
    ridgeX: 1.0,
    ridgeY: eRidgeY,
    ridgeZ: 5.55,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: timberDark,
    ribSpacing: 0.34,
  });
  p.gablePrism('ext', 3.9, eRidgeY - Y2, 0.22, 1.0, Y2 - 0.04, 6.20, whitePlaster);
  p.kawaraRidge('ext', 1.0, eRidgeY + 0.05, 4.70, 1.0, eRidgeY + 0.05, 6.72, kawaraRidge, oniMat, {
    scale: 0.92,
    oniStart: false,
    oniEnd: true,
    courses: 2,
  });

  // 6B. Tier-1 Skirt Kawara Roof (wrapping 1F/2F step-in on all 4 sides!)
  const addSkirtTier = (
    topHalfX: number,
    topHalfZ: number,
    run: number,
    yBase: number,
    pitch: number
  ) => {
    const botWNS = (topHalfX + run) * 2;
    const botWEW = (topHalfZ + run) * 2;
    const yTop = yBase + run * Math.tan(pitch);
    p.kawaraSlope('ext', { topWidth: topHalfX * 2, bottomWidth: botWNS, run, pitch, ridgeX: 0, ridgeY: yTop, ridgeZ: topHalfZ, downslopeYaw: 0, tileMat: kawaraDeck, ribMat: kawaraRib, eaveMat: kawaraRidge, rafterMat: timberDark, ribSpacing: 0.38 });
    p.kawaraSlope('ext', { topWidth: topHalfX * 2, bottomWidth: botWNS, run, pitch, ridgeX: 0, ridgeY: yTop, ridgeZ: -topHalfZ, downslopeYaw: Math.PI, tileMat: kawaraDeck, ribMat: kawaraRib, eaveMat: kawaraRidge, rafterMat: timberDark, ribSpacing: 0.38 });
    p.kawaraSlope('ext', { topWidth: topHalfZ * 2, bottomWidth: botWEW, run, pitch, ridgeX: topHalfX, ridgeY: yTop, ridgeZ: 0, downslopeYaw: Math.PI * 0.5, tileMat: kawaraDeck, ribMat: kawaraRib, eaveMat: kawaraRidge, rafterMat: timberDark, ribSpacing: 0.38 });
    p.kawaraSlope('ext', { topWidth: topHalfZ * 2, bottomWidth: botWEW, run, pitch, ridgeX: -topHalfX, ridgeY: yTop, ridgeZ: 0, downslopeYaw: -Math.PI * 0.5, tileMat: kawaraDeck, ribMat: kawaraRib, eaveMat: kawaraRidge, rafterMat: timberDark, ribSpacing: 0.38 });
    // Corner hip ridges + Onigawara on every tier!
    p.kawaraRidge('ext', -topHalfX, yTop, topHalfZ, -(topHalfX + run), yBase, topHalfZ + run, kawaraRidge, oniMat, { scale: 0.68, oniEnd: true, courses: 2 });
    p.kawaraRidge('ext', topHalfX, yTop, topHalfZ, topHalfX + run, yBase, topHalfZ + run, kawaraRidge, oniMat, { scale: 0.68, oniEnd: true, courses: 2 });
    p.kawaraRidge('ext', -topHalfX, yTop, -topHalfZ, -(topHalfX + run), yBase, -(topHalfZ + run), kawaraRidge, oniMat, { scale: 0.68, oniEnd: true, courses: 2 });
    p.kawaraRidge('ext', topHalfX, yTop, -topHalfZ, topHalfX + run, yBase, -(topHalfZ + run), kawaraRidge, oniMat, { scale: 0.68, oniEnd: true, courses: 2 });
  };

  // Tier 1 skirt around 2F base (12.6×9.6 -> 10.8×8.0)
  addSkirtTier(5.40, 4.00, 1.85, Y2 - 0.14, 0.38);
  // Tier 2 skirt around 3F base (10.8×8.0 -> 8.6×6.6)
  addSkirtTier(4.30, 3.30, 1.90, Y3 - 0.14, 0.40);
  // Tier 3 skirt around 4F Watchtower base (8.6×6.6 -> 5.4×5.0)
  addSkirtTier(2.70, 2.50, 2.35, Y4 - 0.14, 0.44);

  // 6C. Tier-4 Crowning 4F Watchtower Irimoya Kawara Roof (4階望楼・大入母屋本瓦屋根!)
  const crownPitch = 0.50;
  const crownRun = 3.65;
  const yCrownRidge = YTOP - 0.14 + crownRun * Math.tan(crownPitch); // ~14.25m!!
  const yCrownBreak = YTOP + 0.85;

  p.kawaraSlope('ext', { topWidth: 3.4, bottomWidth: 7.7, run: crownRun, pitch: crownPitch, ridgeX: 0, ridgeY: yCrownRidge, ridgeZ: 0, downslopeYaw: 0, tileMat: kawaraDeck, ribMat: kawaraRib, eaveMat: kawaraRidge, rafterMat: timberDark, ribSpacing: 0.34 });
  p.kawaraSlope('ext', { topWidth: 3.4, bottomWidth: 7.7, run: crownRun, pitch: crownPitch, ridgeX: 0, ridgeY: yCrownRidge, ridgeZ: 0, downslopeYaw: Math.PI, tileMat: kawaraDeck, ribMat: kawaraRib, eaveMat: kawaraRidge, rafterMat: timberDark, ribSpacing: 0.34 });
  p.kawaraSlope('ext', { topWidth: 3.2, bottomWidth: 7.3, run: 2.15, pitch: crownPitch, ridgeX: 1.70, ridgeY: yCrownBreak + 0.10, ridgeZ: 0, downslopeYaw: Math.PI * 0.5, tileMat: kawaraDeck, ribMat: kawaraRib, eaveMat: kawaraRidge, rafterMat: timberDark, ribSpacing: 0.34 });
  p.kawaraSlope('ext', { topWidth: 3.2, bottomWidth: 7.3, run: 2.15, pitch: crownPitch, ridgeX: -1.70, ridgeY: yCrownBreak + 0.10, ridgeZ: 0, downslopeYaw: -Math.PI * 0.5, tileMat: kawaraDeck, ribMat: kawaraRib, eaveMat: kawaraRidge, rafterMat: timberDark, ribSpacing: 0.34 });

  p.gablePrism('ext', 3.2, yCrownRidge - yCrownBreak, 0.20, 1.66, yCrownBreak, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 3.2, yCrownRidge - yCrownBreak, 0.20, -1.66, yCrownBreak, 0, whitePlaster, { ry: Math.PI * 0.5 });

  // Grand Top Main Ridge with Monumental Sculpted Onigawara Finials!
  p.kawaraRidge('ext', -1.80, yCrownRidge + 0.06, 0, 1.80, yCrownRidge + 0.06, 0, kawaraRidge, oniMat, {
    scale: 1.30,
    oniStart: true,
    oniEnd: true,
    courses: 3,
  });
  const yCrownEave = YTOP - 0.12;
  p.kawaraRidge('ext', -1.7, yCrownBreak + 0.10, 1.6, -3.82, yCrownEave, 3.62, kawaraRidge, oniMat, { scale: 0.72, oniEnd: true });
  p.kawaraRidge('ext', 1.7, yCrownBreak + 0.10, 1.6, 3.82, yCrownEave, 3.62, kawaraRidge, oniMat, { scale: 0.72, oniEnd: true });
  p.kawaraRidge('ext', -1.7, yCrownBreak + 0.10, -1.6, -3.82, yCrownEave, -3.62, kawaraRidge, oniMat, { scale: 0.72, oniEnd: true });
  p.kawaraRidge('ext', 1.7, yCrownBreak + 0.10, -1.6, 3.82, yCrownEave, -3.62, kawaraRidge, oniMat, { scale: 0.72, oniEnd: true });

  return p.build({
    id: site.id,
    name: '黒田本家（1872年築・庄屋の四階望楼邸）',
    subtitle: '明治5年築・村最大最古・四重いぶし銀本瓦入母屋＆4F360°望楼展望室・四階建',
    category: 'house',
    builtYear: 1872,
    abandonedYear: 1985,
    stories: 4,
    floorElevations: [Y1 + 0.04, Y2 + 0.04, Y3 + 0.04, Y4 + 0.04],
    entryLocal: [1.0, 0.0, 8.6],
  });
}
