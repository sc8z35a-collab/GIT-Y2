import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H09: 森本家（見晴らし坂の赤瓦三階名家）— 1888年（明治21年）築・1985年廃村
 * 見晴らし坂手前の象徴的ランドマーク！高石垣正面石段・白漆喰＆横下見板・
 * 石州赤瓦＋赤トタン混成の三重入母屋屋根＋頂部越屋根・2F/3F西向き絶景見晴らし縁側・青タイル風呂
 */
export function buildHouse09Morimoto(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  const stoneWall = catalog.getMaterial('ishigaki_mossy', { roughness: 0.94, bumpScale: 0.08 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.91, bumpScale: 0.06 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xf7f2e8 });
  const woodSiding = catalog.getMaterial('horizontal_wood_siding', { roughness: 0.89, bumpScale: 0.05 });
  const darkTimber = catalog.getMaterial('dark_hardwood', { roughness: 0.86, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.84, bumpScale: 0.04 });
  const lightCeiling = catalog.getMaterial('light_wood_grain', { roughness: 0.84, bumpScale: 0.03 });
  const tatamiMat = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const blueBath = catalog.getMaterial('blue_bath_tile', { roughness: 0.42, metalness: 0.06, bumpScale: 0.03 });
  const fusumaMat = catalog.getMaterial('linen_fusuma', { roughness: 0.9, bumpScale: 0.02 });
  const shojiMat = catalog.getMaterial('shoji_sliding_door', { roughness: 0.88, opacity: 0.90, transparent: true });
  const glassMat = catalog.getMaterial('window_frosted_wood', { roughness: 0.35, opacity: 0.45, transparent: true });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.76, bumpScale: 0.03 });
  const cabMat = catalog.getMaterial('kitchen_cabinet', { roughness: 0.8, bumpScale: 0.03 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const dresserMat = catalog.getMaterial('wooden_dresser', { roughness: 0.82, bumpScale: 0.04 });
  const bookcaseMat = catalog.getMaterial('full_bookcase', { roughness: 0.84, bumpScale: 0.04 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const rugRed = catalog.getMaterial('vintage_rug_red', { roughness: 0.93, bumpScale: 0.03 });

  // Signature Iconic Crimson-Red Kawara & Red Metal Roofs + Dark Ibushi Lower Eaves!
  const redKawaraDeck = catalog.getMaterial('red_tin_roof', { roughness: 0.66, metalness: 0.16, bumpScale: 0.05, tint: 0xd9604a });
  const redKawaraRib = catalog.getMaterial('glazed_brown_brick', { roughness: 0.54, metalness: 0.18, bumpScale: 0.05, tint: 0xb64a38 });
  const redRidge = catalog.getMaterial('old_red_brick', { roughness: 0.64, metalness: 0.14, tint: 0x8f3628 });
  const darkSkirtDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.76, metalness: 0.16, bumpScale: 0.05 });
  const darkSkirtRib = catalog.getMaterial('dark_slate', { roughness: 0.72, metalness: 0.2, bumpScale: 0.05 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.60, metalness: 0.30, tint: 0x6b2c22 });

  const Y1 = 0.50;
  const Y2 = 3.55;
  const Y3 = 6.55;
  const YTOP = 9.30;

  // =========================================================================
  // 1. TALL HILLSIDE STONE PLINTH & GRAND 9-STEP FRONT STONE STAIRCASE (-1.65m -> +0.50m)
  // =========================================================================
  p.box('ext', 11.2, 4.2, 8.8, 0, Y1 - 2.12, 0, stoneWall);
  // Grand mossy granite front steps descending cleanly to the Lookout Bend road shoulder!
  p.stoneSteps('ext', 0.2, 7.15, 4.25, -1.65, Y1, 2.45, 9, stepStone);
  // Flanking stone cheek walls alongside the grand steps
  p.box('ext', 0.42, 2.45, 2.95, -1.25, -0.80, 5.70, stoneWall, { solid: true });
  p.box('ext', 0.42, 2.45, 2.95, 1.65, -0.80, 5.70, stoneWall, { solid: true });

  // =========================================================================
  // 2. 1F: SHIKIDAI GENKAN, 10-MAT ZASHIKI, BLUE-TILE BATH & SHOWA KITCHEN (Y=+0.50m)
  // =========================================================================
  const h1 = Y2 - Y1; // 3.05m
  const mid1 = Y1 + h1 * 0.5;

  p.box('int', 10.6, 0.10, 8.2, 0, Y1 - 0.03, 0, warmFloor);
  p.box('int', 6.8, 0.04, 4.4, 0.1, Y1 + 0.03, 1.4, tatamiMat);     // 10-mat main Zashiki
  p.box('int', 2.8, 0.04, 3.2, -3.7, Y1 + 0.03, -2.35, blueBath);   // NW Blue-tile Bath
  p.floor(-5.2, 5.2, -4.05, 4.35, Y1 + 0.04);

  // 1F Exterior Walls (Horizontal Wood Siding lower + White Plaster upper trim)
  // Front 1F (+Z = +4.2): wide ceremonial Shikidai entrance X ∈ [-0.8, +1.2]
  p.box('ext', 4.65, h1, 0.22, -3.12, mid1, 4.2, woodSiding, { solid: true });
  p.box('ext', 2.05, 0.80, 0.22, 0.20, Y1 + 2.65, 4.2, woodSiding, { solid: true });
  p.box('ext', 4.25, h1, 0.22, 3.32, mid1, 4.2, woodSiding, { solid: true });
  // Half-open shoji entry leaf
  p.box('ext', 1.05, 2.20, 0.06, -1.25, Y1 + 1.10, 4.04, shojiMat, { uvScale: 0 });
  // Back 1F (-Z = -4.2) with kitchen window
  p.box('ext', 5.8, h1, 0.22, -2.55, mid1, -4.2, woodSiding, { solid: true });
  p.box('ext', 2.4, 0.95, 0.22, 1.55, Y1 + 0.47, -4.2, woodSiding, { solid: true });
  p.box('ext', 2.4, 0.72, 0.22, 1.55, Y1 + 2.69, -4.2, woodSiding, { solid: true });
  p.box('ext', 2.36, 1.38, 0.06, 1.55, Y1 + 1.64, -4.2, glassMat, { uvScale: 0 });
  p.box('ext', 2.75, h1, 0.22, 4.08, mid1, -4.2, woodSiding, { solid: true });
  // West 1F (-X = -5.4) with wide valley window in Zashiki
  p.box('ext', 0.22, h1, 4.2, -5.4, mid1, -2.15, woodSiding, { solid: true });
  p.box('ext', 0.22, 0.88, 2.4, -5.4, Y1 + 0.44, 1.15, woodSiding, { solid: true });
  p.box('ext', 0.22, 0.72, 2.4, -5.4, Y1 + 2.69, 1.15, woodSiding, { solid: true });
  p.box('ext', 0.06, 1.45, 2.36, -5.4, Y1 + 1.60, 1.15, glassMat, { uvScale: 0 });
  p.box('ext', 0.22, h1, 1.95, -5.4, mid1, 3.28, woodSiding, { solid: true });
  // East 1F (+X = +5.4)
  p.box('ext', 0.22, h1, 8.55, 5.4, mid1, 0, woodSiding, { solid: true });

  // 1F Partitions: Blue-Tile Bath NW & Fusuma dividing front Zashiki from rear Tea/Kitchen
  p.box('int', 0.14, h1, 3.4, -2.35, mid1, -2.4, blueBath, { solid: true });
  p.box('int', 1.75, h1, 0.14, -4.45, mid1, -0.75, blueBath, { solid: true });
  p.box('int', 1.35, 0.75, 0.14, -2.95, Y1 + 2.67, -0.75, blueBath, { solid: true });
  // Sunken Blue Tile Bathtub
  p.box('int', 1.55, 0.65, 1.05, -4.45, Y1 + 0.34, -3.45, blueBath, { solid: true });
  // Fusuma divider at Z = -0.75 (wide opening at X ∈ [-0.4, +1.5], ending at X = 3.50 to clear east staircase!)
  p.box('int', 1.95, h1, 0.12, -1.35, mid1, -0.75, fusumaMat, { solid: true, uvScale: 0 });
  p.box('int', 1.95, 0.75, 0.12, 0.55, Y1 + 2.67, -0.75, whitePlaster, { solid: true });
  p.box('int', 2.00, h1, 0.12, 2.50, mid1, -0.75, fusumaMat, { solid: true, uvScale: 0 });

  // 1F Furnishings: Tokonoma, low table + red zabutons, Antique Tansu, Showa Kitchen
  p.box('int', 2.2, 0.18, 0.82, -3.9, Y1 + 0.11, 3.65, darkTimber, { solid: true });
  p.box('int', 1.75, 0.38, 1.05, -1.25, Y1 + 0.22, 1.35, darkTimber, { solid: true });
  p.box('int', 0.62, 0.07, 0.62, -1.25, Y1 + 0.08, 0.45, zabutonMat, { uvScale: 0 });
  p.box('int', 0.62, 0.07, 0.62, -1.25, Y1 + 0.08, 2.25, zabutonMat, { uvScale: 0 });
  p.box('int', 1.55, 1.45, 0.56, 2.45, Y1 + 0.74, -0.35, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 2.1, 0.88, 0.66, 2.2, Y1 + 0.44, -3.72, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 0.62, 1.82, 1.25, 4.92, Y1 + 0.91, -2.4, cabMat, { solid: true, uvScale: 0 });

  // 1F -> 2F Wide Wooden Staircase along East Gallery (X = 4.35, Z: +2.80 -> -1.00)
  p.stairRun('int', {
    x0: 4.35,
    z0: 2.80,
    x1: 4.35,
    z1: -1.00,
    y0: Y1 + 0.04,
    y1: Y2 + 0.04,
    width: 1.18,
    steps: 14,
    treadMat: warmFloor,
    stringerMat: darkTimber,
    railMat: darkTimber,
    railLeft: true,
    railRight: false,
    guardLeft: true,
    guardRight: false,
  });

  // =========================================================================
  // 3. 2F: 8-MAT GUEST ZASHIKI, TEA ROOM & WEST SCENIC ENGAWA (Y=+3.55m)
  // =========================================================================
  const h2 = Y3 - Y2; // 3.00m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs leaving clean East stairwell cutout (X ∈ [3.55, 5.3], Z ∈ [-1.05, +2.90])
  p.box('int', 8.95, 0.16, 8.25, -0.90, Y2 - 0.06, 0, warmFloor);
  p.box('int', 1.78, 0.16, 3.15, 4.42, Y2 - 0.06, -2.58, warmFloor);
  p.box('int', 1.78, 0.16, 1.35, 4.42, Y2 - 0.06, 3.52, warmFloor);
  p.box('int', 5.2, 0.04, 5.4, -2.4, Y2 + 0.03, 0.2, tatamiMat); // 8-mat Guest Zashiki

  // Projecting West 2F Scenic Engawa Balcony (見晴らし縁側 X ∈ [-6.65, -5.4], Z ∈ [-3.6, +3.6])!
  p.box('ext', 1.35, 0.16, 7.35, -6.02, Y2 - 0.04, 0, warmFloor);
  for (const bz of [-3.2, -1.1, 1.1, 3.2]) {
    p.box('ext', 0.14, 1.35, 0.14, -5.85, Y2 - 0.62, bz, darkTimber, { rz: -0.78 });
  }
  p.kouranRailing('ext', -6.62, -3.62, -6.62, 3.62, Y2, 0.96, darkTimber, 0.56);
  p.kouranRailing('ext', -6.62, -3.62, -5.40, -3.62, Y2, 0.96, darkTimber, 0.56);
  p.kouranRailing('ext', -6.62, 3.62, -5.40, 3.62, Y2, 0.96, darkTimber, 0.56);

  p.collider(-5.3, 3.55, Y2 - 0.16, Y2 + 0.02, -4.1, 4.1);
  p.collider(3.55, 5.3, Y2 - 0.16, Y2 + 0.02, -4.1, -1.08);
  p.collider(3.55, 5.3, Y2 - 0.16, Y2 + 0.02, 2.92, 4.1);

  p.floor(-6.55, 3.55, -3.55, 3.55, Y2 + 0.04);
  p.floor(-5.25, 3.55, -4.05, 4.05, Y2 + 0.04);
  p.floor(3.55, 5.25, -4.05, -1.00, Y2 + 0.04);
  p.floor(3.55, 5.25, 2.85, 4.05, Y2 + 0.04);

  // 2F Stairwell protective guard rails
  p.box('int', 0.08, 0.92, 3.95, 3.56, Y2 + 0.46, 0.92, darkTimber, { solid: true });
  p.box('int', 1.72, 0.92, 0.08, 4.42, Y2 + 0.46, 2.90, darkTimber, { solid: true });

  // 2F Exterior Walls (White Plaster Shinkabe + Wide Open West Balcony Door!)
  // Front 2F (+Z = +4.2)
  p.box('ext', 3.4, h2, 0.22, -3.75, mid2, 4.2, whitePlaster, { solid: true });
  p.box('ext', 3.4, 0.85, 0.22, -0.35, Y2 + 0.42, 4.2, whitePlaster, { solid: true });
  p.box('ext', 3.4, 0.65, 0.22, -0.35, Y2 + 2.67, 4.2, whitePlaster, { solid: true });
  p.box('ext', 3.36, 1.50, 0.06, -0.35, Y2 + 1.60, 4.2, glassMat, { uvScale: 0 });
  p.box('ext', 4.15, h2, 0.22, 3.40, mid2, 4.2, whitePlaster, { solid: true });
  // Back 2F (-Z = -4.2)
  p.box('ext', 10.95, h2, 0.22, 0, mid2, -4.2, whitePlaster, { solid: true });
  // East 2F (+X = +5.4)
  p.box('ext', 0.22, h2, 8.55, 5.4, mid2, 0, whitePlaster, { solid: true });
  // West 2F (-X = -5.4): wide 2.0m OPEN scenic engawa doorway at Z ∈ [-0.8, +1.2]!
  p.box('ext', 0.22, h2, 3.45, -5.4, mid2, -2.52, whitePlaster, { solid: true });
  p.box('ext', 0.22, 0.72, 2.05, -5.4, Y2 + 2.64, 0.20, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 3.05, -5.4, mid2, 2.72, whitePlaster, { solid: true });
  // Decorative half-slid shoji door flanking 2F balcony opening
  p.box('ext', 0.06, 2.22, 1.15, -5.24, Y2 + 1.12, -1.25, shojiMat, { uvScale: 0 });
  // 2F Shinkabe dark-timber corner posts, rhythmic wall pilasters & belt beams (真壁造り)
  for (const cx of [-5.42, 5.42]) {
    for (const cz of [-4.22, 4.22]) {
      p.box('ext', 0.28, h2 + 0.08, 0.28, cx, mid2, cz, darkTimber);
    }
  }
  for (const px of [-2.05, 1.35]) {
    p.box('ext', 0.16, h2, 0.26, px, mid2, 4.21, darkTimber);
    p.box('ext', 0.16, h2, 0.26, px, mid2, -4.21, darkTimber);
  }
  p.box('ext', 11.12, 0.18, 0.28, 0, Y2 + 0.04, 4.22, darkTimber);
  p.box('ext', 11.12, 0.18, 0.28, 0, Y2 + 0.04, -4.22, darkTimber);
  p.box('ext', 0.28, 0.18, 8.68, -5.42, Y2 + 0.04, 0, darkTimber);
  p.box('ext', 0.28, 0.18, 8.68, 5.42, Y2 + 0.04, 0, darkTimber);

  // 2F Guest Zashiki Furniture
  p.box('int', 1.45, 1.38, 0.54, -2.55, Y2 + 0.72, -3.75, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 1.45, 0.36, 0.92, -2.45, Y2 + 0.22, 0.35, darkTimber, { solid: true });
  p.box('int', 0.60, 0.07, 0.60, -2.45, Y2 + 0.07, -0.45, zabutonMat, { uvScale: 0 });
  p.box('int', 0.60, 0.07, 0.60, -2.45, Y2 + 0.07, 1.15, zabutonMat, { uvScale: 0 });

  // 2F -> 3F Staircase rising along NORTH-CENTER wall (Z = -2.65, X: +2.65 -> -1.15, Y2 -> Y3!)
  p.stairRun('int', {
    x0: 2.65,
    z0: -2.65,
    x1: -1.15,
    z1: -2.65,
    y0: Y2 + 0.04,
    y1: Y3 + 0.04,
    width: 1.15,
    steps: 14,
    treadMat: warmFloor,
    stringerMat: darkTimber,
    railMat: darkTimber,
    railLeft: true,
    railRight: false,
    guardLeft: true,
    guardRight: false,
  });

  // =========================================================================
  // 4. 3F: PANORAMIC OBSERVATION STUDY & 3F HIGH ENGAWA (Y=+6.55m, X∈[-4.2,+4.2], Z∈[-3.4,+3.4])
  // =========================================================================
  const h3 = YTOP - Y3; // 2.75m
  const mid3 = Y3 + h3 * 0.5;

  // 3F Floor Slabs leaving clean cutout over 2F->3F stairwell (X ∈ [-1.20, +2.75], Z ∈ [-3.35, -1.95])
  p.box('int', 8.35, 0.16, 5.42, 0, Y3 - 0.06, 0.72, warmFloor);
  p.box('int', 3.05, 0.16, 1.55, -2.68, Y3 - 0.06, -2.65, warmFloor);
  p.box('int', 1.52, 0.16, 1.55, 3.45, Y3 - 0.06, -2.65, warmFloor);
  p.box('int', 3.8, 0.03, 3.4, -0.4, Y3 + 0.03, 0.85, rugRed);

  // Projecting West 3F High Scenic Balcony (X ∈ [-5.45, -4.2], Z ∈ [-3.0, +3.0])!
  p.box('ext', 1.32, 0.16, 6.1, -4.82, Y3 - 0.04, 0, warmFloor);
  p.kouranRailing('ext', -5.42, -3.02, -5.42, 3.02, Y3, 0.96, darkTimber, 0.56);
  p.kouranRailing('ext', -5.42, -3.02, -4.20, -3.02, Y3, 0.96, darkTimber, 0.56);
  p.kouranRailing('ext', -5.42, 3.02, -4.20, 3.02, Y3, 0.96, darkTimber, 0.56);

  p.collider(-4.2, 4.2, Y3 - 0.16, Y3 + 0.02, -1.95, 3.4);
  p.collider(-4.2, -1.22, Y3 - 0.16, Y3 + 0.02, -3.4, -1.95);
  p.collider(2.75, 4.2, Y3 - 0.16, Y3 + 0.02, -3.4, -1.95);

  p.floor(-5.35, 4.1, -1.95, 2.95, Y3 + 0.04);
  p.floor(-4.1, 4.1, -1.95, 3.3, Y3 + 0.04);
  p.floor(-4.1, -1.15, -3.3, -1.90, Y3 + 0.04);
  p.floor(2.75, 4.1, -3.3, -1.90, Y3 + 0.04);

  // 3F Stairwell protective guard rail (south & east edges of 2F->3F opening)
  p.box('int', 3.98, 0.92, 0.08, 0.78, Y3 + 0.46, -1.95, darkTimber, { solid: true });
  p.box('int', 0.08, 0.92, 1.42, 2.76, Y3 + 0.46, -2.66, darkTimber, { solid: true });

  // 3F Exterior Walls (White Plaster with panoramic windows & open West 3F Balcony door!)
  p.box('ext', 2.2, h3, 0.22, -3.1, mid3, 3.4, whitePlaster, { solid: true });
  p.box('ext', 4.0, 0.80, 0.22, 0.0, Y3 + 0.40, 3.4, whitePlaster, { solid: true });
  p.box('ext', 4.0, 0.58, 0.22, 0.0, Y3 + 2.46, 3.4, whitePlaster, { solid: true });
  p.box('ext', 3.96, 1.38, 0.06, 0.0, Y3 + 1.48, 3.4, glassMat, { uvScale: 0 });
  p.box('ext', 2.2, h3, 0.22, 3.1, mid3, 3.4, whitePlaster, { solid: true });
  p.box('ext', 8.55, h3, 0.22, 0, mid3, -3.4, whitePlaster, { solid: true });
  p.box('ext', 0.22, h3, 6.95, 4.2, mid3, 0, whitePlaster, { solid: true });
  // West 3F (-X = -4.2): wide OPEN balcony doorway Z ∈ [-0.6, +1.0]
  p.box('ext', 0.22, h3, 2.85, -4.2, mid3, -2.02, whitePlaster, { solid: true });
  p.box('ext', 0.22, 0.62, 1.65, -4.2, Y3 + 2.44, 0.20, whitePlaster, { solid: true });
  p.box('ext', 0.22, h3, 2.45, -4.2, mid3, 2.22, whitePlaster, { solid: true });
  // 3F Shinkabe dark-timber corner posts, pilasters & belt beams (真壁造り)
  for (const cx of [-4.22, 4.22]) {
    for (const cz of [-3.42, 3.42]) {
      p.box('ext', 0.26, h3 + 0.06, 0.26, cx, mid3, cz, darkTimber);
    }
  }
  for (const px of [-2.0, 2.0]) {
    p.box('ext', 0.16, h3, 0.26, px, mid3, 3.41, darkTimber);
    p.box('ext', 0.16, h3, 0.26, px, mid3, -3.41, darkTimber);
  }
  p.box('ext', 8.70, 0.16, 0.28, 0, Y3 + 0.04, 3.42, darkTimber);
  p.box('ext', 8.70, 0.16, 0.28, 0, Y3 + 0.04, -3.42, darkTimber);
  p.box('ext', 0.28, 0.16, 7.08, -4.22, Y3 + 0.04, 0, darkTimber);
  p.box('ext', 0.28, 0.16, 7.08, 4.22, Y3 + 0.04, 0, darkTimber);

  // 3F Study Ceiling & Furnishings (Bookcase, Dresser, Study Desk)
  p.box('int', 8.3, 0.12, 6.7, 0, YTOP - 0.04, 0, lightCeiling);
  p.collider(-4.15, 4.15, YTOP - 0.12, YTOP + 0.1, -3.35, 3.35);
  p.box('int', 0.52, 1.85, 2.2, 3.78, Y3 + 0.94, 0.35, bookcaseMat, { solid: true, uvScale: 0 });
  p.box('int', 1.45, 0.80, 0.78, 1.35, Y3 + 0.42, 0.65, darkTimber, { solid: true });
  p.box('int', 1.25, 1.15, 0.54, 1.55, Y3 + 0.60, 2.95, dresserMat, { solid: true, uvScale: 0 });

  // =========================================================================
  // 5. TRIPLE-TIERED CRIMSON RED KAWARA IRIMOYA ROOFS + KOSHIYANE LANTERN!
  // =========================================================================
  // 5A. 1F Dark Ibushi Kawara Lower Eave Skirt (front & west)
  p.kawaraSlope('ext', {
    bottomWidth: 11.4,
    run: 1.25,
    pitch: 0.36,
    ridgeX: 0,
    ridgeY: Y2 + 0.10,
    ridgeZ: 4.25,
    downslopeYaw: 0,
    tileMat: darkSkirtDeck,
    ribMat: darkSkirtRib,
    eaveMat: oniMat,
    rafterMat: darkTimber,
    ribSpacing: 0.38,
  });

  // 5B. 2F Crimson-Red Kawara Perimeter Skirt (wrapping the recessed 3F story on all 4 sides!)
  p.kawaraSlope('ext', {
    topWidth: 8.6,
    bottomWidth: 12.2,
    run: 1.75,
    pitch: 0.42,
    ridgeX: 0,
    ridgeY: Y3 + 0.35,
    ridgeZ: 3.40,
    downslopeYaw: 0,
    tileMat: redKawaraDeck,
    ribMat: redKawaraRib,
    eaveMat: redRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 8.6,
    bottomWidth: 12.2,
    run: 1.75,
    pitch: 0.42,
    ridgeX: 0,
    ridgeY: Y3 + 0.35,
    ridgeZ: -3.40,
    downslopeYaw: Math.PI,
    tileMat: redKawaraDeck,
    ribMat: redKawaraRib,
    eaveMat: redRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 6.9,
    bottomWidth: 10.4,
    run: 1.95,
    pitch: 0.40,
    ridgeX: 4.20,
    ridgeY: Y3 + 0.35,
    ridgeZ: 0,
    downslopeYaw: Math.PI * 0.5,
    tileMat: redKawaraDeck,
    ribMat: redKawaraRib,
    eaveMat: redRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 6.9,
    bottomWidth: 10.4,
    run: 2.35,
    pitch: 0.36,
    ridgeX: -4.20,
    ridgeY: Y3 + 0.42,
    ridgeZ: 0,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: redKawaraDeck,
    ribMat: redKawaraRib,
    eaveMat: redRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.38,
  });

  // 5C. Grand 3F Crimson-Red Kawara Irimoya Crown Roof!
  const pTop = 0.48;
  const runTop = 4.65;
  const yRidge = YTOP - 0.14 + runTop * Math.tan(pTop); // ~11.58m
  const yBreak = YTOP + 1.05;

  p.kawaraSlope('ext', {
    topWidth: 5.6,
    bottomWidth: 11.4,
    run: runTop,
    pitch: pTop,
    ridgeX: 0,
    ridgeY: yRidge,
    ridgeZ: 0,
    downslopeYaw: 0,
    tileMat: redKawaraDeck,
    ribMat: redKawaraRib,
    eaveMat: redRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 5.6,
    bottomWidth: 11.4,
    run: runTop,
    pitch: pTop,
    ridgeX: 0,
    ridgeY: yRidge,
    ridgeZ: 0,
    downslopeYaw: Math.PI,
    tileMat: redKawaraDeck,
    ribMat: redKawaraRib,
    eaveMat: redRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 4.5,
    bottomWidth: 9.3,
    run: 2.95,
    pitch: pTop,
    ridgeX: 2.80,
    ridgeY: yBreak + 0.12,
    ridgeZ: 0,
    downslopeYaw: Math.PI * 0.5,
    tileMat: redKawaraDeck,
    ribMat: redKawaraRib,
    eaveMat: redRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 4.5,
    bottomWidth: 9.3,
    run: 2.95,
    pitch: pTop,
    ridgeX: -2.80,
    ridgeY: yBreak + 0.12,
    ridgeZ: 0,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: redKawaraDeck,
    ribMat: redKawaraRib,
    eaveMat: redRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.38,
  });

  // White Plaster Irimoya Gables + Four Hip Ridges
  p.gablePrism('ext', 4.6, yRidge - yBreak, 0.22, 2.75, yBreak, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 4.6, yRidge - yBreak, 0.22, -2.75, yBreak, 0, whitePlaster, { ry: Math.PI * 0.5 });
  const yEave = YTOP - 0.12;
  p.kawaraRidge('ext', -2.8, yBreak + 0.12, 2.25, -5.65, yEave, 4.60, redRidge, oniMat, { scale: 0.72, oniEnd: true });
  p.kawaraRidge('ext', 2.8, yBreak + 0.12, 2.25, 5.65, yEave, 4.60, redRidge, oniMat, { scale: 0.72, oniEnd: true });
  p.kawaraRidge('ext', -2.8, yBreak + 0.12, -2.25, -5.65, yEave, -4.60, redRidge, oniMat, { scale: 0.72, oniEnd: true });
  p.kawaraRidge('ext', 2.8, yBreak + 0.12, -2.25, 5.65, yEave, -4.60, redRidge, oniMat, { scale: 0.72, oniEnd: true });

  // 5D. Crowning Koshiyane (越屋根 — Raised Traditional Clerestory Roof Monitor at peak!)
  p.box('ext', 3.4, 0.62, 1.15, 0, yRidge + 0.16, 0, whitePlaster);
  p.kawaraSlope('ext', {
    bottomWidth: 4.1,
    run: 1.05,
    pitch: 0.44,
    ridgeX: 0,
    ridgeY: yRidge + 0.92,
    ridgeZ: 0,
    downslopeYaw: 0,
    tileMat: redKawaraDeck,
    ribMat: redKawaraRib,
    eaveMat: redRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.34,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 4.1,
    run: 1.05,
    pitch: 0.44,
    ridgeX: 0,
    ridgeY: yRidge + 0.92,
    ridgeZ: 0,
    downslopeYaw: Math.PI,
    tileMat: redKawaraDeck,
    ribMat: redKawaraRib,
    eaveMat: redRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.34,
  });
  p.kawaraRidge('ext', -2.05, yRidge + 0.96, 0, 2.05, yRidge + 0.96, 0, redRidge, oniMat, {
    scale: 1.05,
    oniStart: true,
    oniEnd: true,
    courses: 2,
  });

  return p.build({
    id: site.id,
    name: '森本家（見晴らし坂の赤瓦三階名家）',
    subtitle: '明治21年築・石州赤瓦三重入母屋＆越屋根・2F/3F見晴らし縁側・青タイル風呂・三階建',
    category: 'house',
    builtYear: 1888,
    abandonedYear: 1985,
    stories: 3,
    floorElevations: [Y1 + 0.04, Y2 + 0.04, Y3 + 0.04],
    entryLocal: [0.2, -1.5, 8.2],
  });
}
