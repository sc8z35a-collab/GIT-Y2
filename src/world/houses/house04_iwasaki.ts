import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H04: 岩崎家（石工の石壁三階民家）— 1874年（明治7年）築・1985年廃村
 * 1F全面野面積み石壁＆鉄鋲重木扉、2F和紙真壁＆西出窓＆青モザイク風呂、
 * 3F焼杉＆木彫格子・神棚格天井寝室、苔むし黒瓦四方寄棟屋根（四隅棟＆双鬼瓦）、東側U字折り返し階段
 */
export function buildHouse04Iwasaki(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  const rubbleStone = catalog.getMaterial('ishigaki_rubble', { roughness: 0.95, bumpScale: 0.08 });
  const mossyStone = catalog.getMaterial('ishigaki_mossy', { roughness: 0.96, bumpScale: 0.08 });
  const dampStone = catalog.getMaterial('dark_damp_stone', { roughness: 0.94, bumpScale: 0.07 });
  const dressedStone = catalog.getMaterial('dressed_stone', { roughness: 0.91, bumpScale: 0.06 });
  const studdedDoor = catalog.getMaterial('heavy_studded_wood', { roughness: 0.85, bumpScale: 0.06 });
  const washiWall = catalog.getMaterial('washi_plaster', { roughness: 0.92, bumpScale: 0.03, tint: 0xf4eee2 });
  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.91, bumpScale: 0.05 });
  const latticeMat = catalog.getMaterial('carved_wood_lattice', { roughness: 0.86, bumpScale: 0.05 });
  const timberBeam = catalog.getMaterial('dark_hardwood', { roughness: 0.86, bumpScale: 0.04 });
  const warmPlank = catalog.getMaterial('warm_wood_plank', { roughness: 0.85, bumpScale: 0.04 });
  const cobbleFloor = catalog.getMaterial('cobblestone', { roughness: 0.93, bumpScale: 0.06 });
  const blueMosaic = catalog.getMaterial('blue_mosaic_tile', { roughness: 0.45, metalness: 0.06, bumpScale: 0.03 });
  const blueFloral = catalog.getMaterial('floral_wallpaper_blue', { roughness: 0.88, bumpScale: 0.02 });
  const tatamiGreen = catalog.getMaterial('tatami_green_border', { roughness: 0.92, bumpScale: 0.04 });
  const glassMat = catalog.getMaterial('frosted_grid_window', { roughness: 0.36, opacity: 0.46, transparent: true });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const shrineMat = catalog.getMaterial('shrine_facade', { roughness: 0.82, bumpScale: 0.04 });
  const bookcaseMat = catalog.getMaterial('full_bookcase', { roughness: 0.84, bumpScale: 0.04 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.93, bumpScale: 0.03 });
  const ashMat = catalog.getMaterial('black_volcanic_gravel', { roughness: 0.97, bumpScale: 0.06 });
  const ironMat = catalog.getMaterial('matte_black_metal', { roughness: 0.6, metalness: 0.6 });
  const mossMat = catalog.getMaterial('deep_moss', { roughness: 0.96, bumpScale: 0.08 });

  // Mossy Black Kawara (苔むし黒瓦・寄棟屋根)
  const blackKawara = catalog.getMaterial('dark_slate', { roughness: 0.82, metalness: 0.14, bumpScale: 0.06, tint: 0x9aa2a8 });
  const blackRib = catalog.getMaterial('slate_roof_dark', { roughness: 0.78, metalness: 0.18, bumpScale: 0.05, tint: 0x848c94 });
  const mossyKawara = catalog.getMaterial('moss_rock_heavy', { roughness: 0.94, bumpScale: 0.08, tint: 0x6f8463 });
  const ridgeMat = catalog.getMaterial('dark_iron_plate', { roughness: 0.72, metalness: 0.22, tint: 0x767e88 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.62, metalness: 0.30 });

  const Y1 = 0.40;
  const Y2 = 3.35;
  const Y3 = 6.25;
  const YTOP = 8.95;

  // =========================================================================
  // 1. HEAVY STONE FOUNDATION & FRONT STEPS
  // =========================================================================
  p.box('ext', 9.5, 1.0, 7.7, 0, Y1 - 0.52, 0, mossyStone);
  p.stoneSteps('ext', -0.2, 4.9, 3.72, -0.35, Y1, 2.0, 4, dressedStone);

  // =========================================================================
  // 2. 1F: FORTRESS RUBBLE-STONE WALLS, STONE HEARTH & DARK STONE VAULT (Y=+0.40m)
  // =========================================================================
  const h1 = Y2 - Y1; // 2.95m
  const mid1 = Y1 + h1 * 0.5;
  p.box('int', 8.9, 0.08, 7.1, 0, Y1 - 0.04, 0, cobbleFloor);
  p.floor(-4.35, 4.35, -3.45, 3.75, Y1 + 0.04);

  // 1F Massive 0.34m Thick Stone Walls! Front doorway at X ∈ [-0.95, +0.55]
  p.box('ext', 3.75, h1, 0.34, -2.80, mid1, 3.65, rubbleStone, { solid: true });
  p.box('ext', 4.15, h1, 0.34, 2.60, mid1, 3.65, rubbleStone, { solid: true });
  p.box('ext', 1.56, 0.72, 0.34, -0.20, Y1 + 2.59, 3.65, dressedStone, { solid: true });
  // Swung half-open heavy iron-studded wooden fortress door!
  p.box('ext', 0.12, 2.18, 1.35, -1.04, Y1 + 1.09, 3.05, studdedDoor, { ry: 0.38, uvScale: 0 });

  // Shaded North (-Z) & West (-X) 1F Walls: Heavy Mossy Stone!
  p.box('ext', 9.45, h1, 0.34, 0, mid1, -3.65, mossyStone, { solid: true });
  p.box('ext', 0.34, h1, 7.55, -4.55, mid1, 0, mossyStone, { solid: true });
  // East (+X) 1F Wall with narrow slit window lighting stairwell
  p.box('ext', 0.34, h1, 2.6, 4.55, mid1, -2.4, rubbleStone, { solid: true });
  p.box('ext', 0.34, 1.05, 1.8, 4.55, Y1 + 0.52, -0.1, rubbleStone, { solid: true });
  p.box('ext', 0.34, 0.65, 1.8, 4.55, Y1 + 2.62, -0.1, rubbleStone, { solid: true });
  p.box('ext', 0.06, 1.25, 1.76, 4.55, Y1 + 1.68, -0.1, glassMat, { uvScale: 0 });
  p.box('ext', 0.34, h1, 2.95, 4.55, mid1, 2.32, rubbleStone, { solid: true });

  // 1F Interior Stone Vault Partition (X = -1.75, doorway at Z ∈ [+0.6, +2.0])
  p.box('int', 0.28, h1, 4.2, -1.75, mid1, -1.5, dampStone, { solid: true });
  p.box('int', 0.28, 0.72, 1.45, -1.75, Y1 + 2.59, 1.30, dampStone, { solid: true });
  p.box('int', 0.28, h1, 1.65, -1.75, mid1, 2.82, dampStone, { solid: true });

  // 1F Stone Vault Props (dressed granite stonecutter blocks & chisel bench)
  p.box('int', 1.15, 0.68, 0.72, -3.55, Y1 + 0.34, -2.55, dressedStone, { solid: true });
  p.box('int', 0.85, 0.56, 0.65, -3.45, Y1 + 0.96, -2.45, dressedStone, { ry: 0.14 });
  p.box('int', 0.78, 0.82, 1.85, -3.82, Y1 + 0.41, -0.25, timberBeam, { solid: true });

  // 1F Central Massive Dressed-Stone Irori Hearth (X = 0.25, Z = -0.85)
  p.box('int', 1.75, 0.36, 1.75, 0.25, Y1 + 0.18, -0.85, dressedStone, { solid: true });
  p.box('int', 1.25, 0.32, 1.25, 0.25, Y1 + 0.22, -0.85, ashMat);
  p.cyl('int', 0.24, 0.28, 0.28, 10, 0.25, Y1 + 0.48, -0.85, ironMat);
  p.cyl('int', 0.03, 0.03, 2.2, 6, 0.25, Y1 + 1.65, -0.85, ironMat);

  // 1F -> 2F First Flight of East U-Turn Staircase (X = 3.55, Z: +1.85 -> -1.75, Y1 -> Y2)
  p.stairRun('int', {
    x0: 3.55,
    z0: 1.85,
    x1: 3.55,
    z1: -1.75,
    y0: Y1 + 0.04,
    y1: Y2 + 0.04,
    width: 1.12,
    steps: 13,
    treadMat: warmPlank,
    stringerMat: timberBeam,
    railMat: timberBeam,
    railLeft: true,
    railRight: false,
    guardLeft: true,
    guardRight: false,
  });

  // =========================================================================
  // 3. 2F: BLUE MOSAIC BATH, BLUE-FLORAL TATAMI ROOM & WEST BAY WINDOW (Y=+3.35m)
  // =========================================================================
  const h2 = Y3 - Y2; // 2.90m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs with clean East stairwell cutout (X ∈ [2.85, 4.45], Z ∈ [-1.75, +1.95])
  p.box('int', 7.30, 0.16, 7.15, -0.78, Y2 - 0.06, 0, warmPlank);
  p.box('int', 1.62, 0.16, 1.82, 3.62, Y2 - 0.06, -2.66, warmPlank);
  p.box('int', 1.62, 0.16, 1.65, 3.62, Y2 - 0.06, 2.75, warmPlank);
  // Northwest Blue Mosaic Bath floor & Northeast Tatami floor
  p.box('int', 2.9, 0.04, 3.1, -2.9, Y2 + 0.03, -1.9, blueMosaic);
  p.box('int', 3.9, 0.04, 3.4, 0.6, Y2 + 0.03, -1.75, tatamiGreen);

  p.collider(-4.4, 2.85, Y2 - 0.16, Y2 + 0.02, -3.55, 3.55);
  p.collider(2.85, 4.4, Y2 - 0.16, Y2 + 0.02, -3.55, -1.80);
  p.collider(2.85, 4.4, Y2 - 0.16, Y2 + 0.02, 2.00, 3.55);

  p.floor(-4.35, 2.85, -3.45, 3.45, Y2 + 0.04);
  p.floor(2.85, 4.35, -3.45, -1.72, Y2 + 0.04);
  p.floor(2.85, 4.35, 1.95, 3.45, Y2 + 0.04);

  // Stairwell guard rail on 2F
  p.box('int', 0.08, 0.92, 3.72, 2.86, Y2 + 0.46, 0.10, timberBeam, { solid: true });
  p.box('int', 1.56, 0.92, 0.08, 3.62, Y2 + 0.46, 1.98, timberBeam, { solid: true });

  // 2F Exterior Walls (Washi Plaster Shinkabe + West Projecting Wooden Bay Window 出窓!)
  // Front 2F (+Z = +3.65)
  p.box('ext', 2.4, h2, 0.22, -3.4, mid2, 3.65, washiWall, { solid: true });
  p.box('ext', 3.6, 0.85, 0.22, -0.4, Y2 + 0.42, 3.65, washiWall, { solid: true });
  p.box('ext', 3.6, 0.65, 0.22, -0.4, Y2 + 2.57, 3.65, washiWall, { solid: true });
  p.box('ext', 3.56, 1.40, 0.06, -0.4, Y2 + 1.55, 3.65, glassMat, { uvScale: 0 });
  p.box('ext', 3.25, h2, 0.22, 3.02, mid2, 3.65, washiWall, { solid: true });
  // Back 2F (-Z = -3.65)
  p.box('ext', 9.25, h2, 0.22, 0, mid2, -3.65, washiWall, { solid: true });
  // East 2F (+X = +4.55)
  p.box('ext', 0.22, h2, 7.42, 4.55, mid2, 0, washiWall, { solid: true });
  // West 2F (-X = -4.55) with Projecting Bay Window (出窓) at Z ∈ [-0.4, +2.0]
  p.box('ext', 0.22, h2, 3.3, -4.55, mid2, -2.05, washiWall, { solid: true });
  p.box('ext', 0.22, 0.72, 2.45, -4.55, Y2 + 0.36, 0.80, washiWall, { solid: true });
  p.box('ext', 0.22, 0.62, 2.45, -4.55, Y2 + 2.59, 0.80, washiWall, { solid: true });
  p.box('ext', 0.22, h2, 1.72, -4.55, mid2, 2.88, washiWall, { solid: true });
  // Bay window projecting timber housing (X ∈ [-5.28, -4.55], Z ∈ [-0.4, +2.0])
  p.box('ext', 0.78, 0.16, 2.55, -4.92, Y2 + 0.66, 0.80, timberBeam);
  p.box('ext', 0.78, 0.16, 2.55, -4.92, Y2 + 2.30, 0.80, timberBeam);
  p.box('ext', 0.06, 1.52, 2.42, -5.26, Y2 + 1.48, 0.80, glassMat, { uvScale: 0 });
  p.box('ext', 0.74, 1.52, 0.12, -4.92, Y2 + 1.48, -0.42, timberBeam);
  p.box('ext', 0.74, 1.52, 0.12, -4.92, Y2 + 1.48, 2.02, timberBeam);

  // 2F Interior Partitions & Blue Mosaic Bath Room (X ∈ [-4.4, -1.4], Z ∈ [-3.5, -0.3])
  p.box('int', 0.14, h2, 3.25, -1.4, mid2, -1.92, blueMosaic, { solid: true });
  p.box('int', 1.45, h2, 0.14, -3.7, mid2, -0.30, blueMosaic, { solid: true });
  p.box('int', 1.60, 0.72, 0.14, -2.2, Y2 + 2.54, -0.30, blueMosaic, { solid: true });
  // Built-in Japanese Blue Mosaic Tile Bathtub (浴槽) in NW corner!
  p.box('int', 1.45, 0.65, 1.05, -3.55, Y2 + 0.34, -2.85, blueMosaic, { solid: true });
  // Blue-floral wallpaper accent wall & antique tansu in NE Tatami Room
  p.box('int', 3.8, h2 - 0.12, 0.05, 0.55, mid2, -3.48, blueFloral);
  p.box('int', 1.45, 1.38, 0.54, 0.45, Y2 + 0.72, -3.12, tansuMat, { solid: true, uvScale: 0 });
  // Tea table by West Bay Window
  p.box('int', 1.35, 0.44, 0.92, -2.55, Y2 + 0.24, 1.25, timberBeam, { solid: true });

  // 2F -> 3F Second Flight of U-Turn Staircase (X = 2.05, Z: -1.75 -> +1.85, Y2 -> Y3!)
  p.stairRun('int', {
    x0: 2.05,
    z0: -1.75,
    x1: 2.05,
    z1: 1.85,
    y0: Y2 + 0.04,
    y1: Y3 + 0.04,
    width: 1.12,
    steps: 13,
    treadMat: warmPlank,
    stringerMat: timberBeam,
    railMat: timberBeam,
    railLeft: true,
    railRight: false,
    guardLeft: true,
    guardRight: false,
  });

  // =========================================================================
  // 4. 3F: CHARRED CEDAR & CARVED LATTICE SHRINE ATTIC BEDROOM (Y=+6.25m)
  // =========================================================================
  const h3 = YTOP - Y3; // 2.70m
  const mid3 = Y3 + h3 * 0.5;

  // 3F Floor Slabs leaving clean cutout over 2F->3F stairwell (X ∈ [1.35, 2.75], Z ∈ [-1.75, +1.85])
  p.box('int', 5.85, 0.16, 7.15, -1.55, Y3 - 0.06, 0, tatamiGreen);
  p.box('int', 1.75, 0.16, 7.15, 3.60, Y3 - 0.06, 0, warmPlank);
  p.box('int', 1.45, 0.16, 1.82, 2.05, Y3 - 0.06, -2.66, warmPlank);
  p.box('int', 1.45, 0.16, 1.72, 2.05, Y3 - 0.06, 2.70, warmPlank);

  p.collider(-4.45, 1.35, Y3 - 0.16, Y3 + 0.02, -3.55, 3.55);
  p.collider(2.75, 4.45, Y3 - 0.16, Y3 + 0.02, -3.55, 3.55);
  p.collider(1.35, 2.75, Y3 - 0.16, Y3 + 0.02, -3.55, -1.80);
  p.collider(1.35, 2.75, Y3 - 0.16, Y3 + 0.02, 1.90, 3.55);

  p.floor(-4.35, 1.35, -3.45, 3.45, Y3 + 0.04);
  p.floor(2.75, 4.35, -3.45, 3.45, Y3 + 0.04);
  p.floor(1.35, 2.75, -3.45, -1.75, Y3 + 0.04);
  p.floor(1.35, 2.75, 1.85, 3.45, Y3 + 0.04);

  // 3F Stairwell guard railings (west, east, and north edges of 2F->3F hole)
  p.box('int', 0.08, 0.92, 3.65, 1.36, Y3 + 0.46, 0.05, timberBeam, { solid: true });
  p.box('int', 0.08, 0.92, 3.65, 2.74, Y3 + 0.46, 0.05, timberBeam, { solid: true });
  p.box('int', 1.42, 0.92, 0.08, 2.05, Y3 + 0.46, -1.78, timberBeam, { solid: true });

  // 3F Exterior Walls (Charred Cedar + Carved Wood Lattice Windows on all 4 sides!)
  for (const gz of [-3.65, 3.65]) {
    p.box('ext', 2.4, h3, 0.22, -3.4, mid3, gz, cedarDark, { solid: true });
    p.box('ext', 3.4, 0.78, 0.22, -0.5, Y3 + 0.39, gz, cedarDark, { solid: true });
    p.box('ext', 3.4, 0.58, 0.22, -0.5, Y3 + 2.41, gz, cedarDark, { solid: true });
    p.box('ext', 3.36, 1.34, 0.08, -0.5, Y3 + 1.45, gz, latticeMat, { uvScale: 0 });
    p.box('ext', 3.45, h3, 0.22, 2.92, mid3, gz, cedarDark, { solid: true });
  }
  for (const gx of [-4.55, 4.55]) {
    p.box('ext', 0.22, h3, 2.3, gx, mid3, -2.55, cedarDark, { solid: true });
    p.box('ext', 0.22, 0.78, 2.8, gx, Y3 + 0.39, 0.0, cedarDark, { solid: true });
    p.box('ext', 0.22, 0.58, 2.8, gx, Y3 + 2.41, 0.0, cedarDark, { solid: true });
    p.box('ext', 0.08, 1.34, 2.76, gx, Y3 + 1.45, 0.0, latticeMat, { uvScale: 0 });
    p.box('ext', 0.22, h3, 2.3, gx, mid3, 2.55, cedarDark, { solid: true });
  }

  // Coffered Timber Ceiling (格天井) on 3F
  p.box('int', 8.9, 0.12, 7.1, 0, YTOP - 0.04, 0, warmPlank);
  p.collider(-4.45, 4.45, YTOP - 0.12, YTOP + 0.1, -3.55, 3.55);
  for (const gx of [-2.4, -0.4, 1.6]) {
    p.box('int', 0.12, 0.14, 7.0, gx, YTOP - 0.14, 0, timberBeam);
  }
  for (const gz of [-1.8, 0.0, 1.8]) {
    p.box('int', 8.8, 0.14, 0.12, 0, YTOP - 0.14, gz, timberBeam);
  }

  // 3F Grand Shrine Altar, Bookcase & Sleeping Futon
  p.box('int', 1.65, 1.75, 0.62, -3.55, Y3 + 0.90, -2.85, shrineMat, { solid: true, uvScale: 0 });
  p.box('int', 1.55, 1.85, 0.50, -3.85, Y3 + 0.94, 0.65, bookcaseMat, { solid: true, uvScale: 0 });
  p.box('int', 1.55, 0.15, 2.05, -1.65, Y3 + 0.11, 0.35, futonMat, { uvScale: 0 });

  // =========================================================================
  // 5. MOSSY BLACK KAWARA HIPPED ROOF (苔むし黒瓦・四方寄棟屋根 + 腰瓦庇)
  // =========================================================================
  // 5A. Stone-Wall Top Belt Kawara Eave (1F/2F腰瓦庇 on front & west)
  p.kawaraSlope('ext', {
    bottomWidth: 9.8,
    run: 1.05,
    pitch: 0.36,
    ridgeX: 0,
    ridgeY: Y2 + 0.08,
    ridgeZ: 3.72,
    downslopeYaw: 0,
    tileMat: blackKawara,
    ribMat: blackRib,
    eaveMat: ridgeMat,
    rafterMat: timberBeam,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 3.2,
    run: 1.05,
    pitch: 0.38,
    ridgeX: -4.55,
    ridgeY: Y2 + 2.46,
    ridgeZ: 0.80,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: blackKawara,
    ribMat: blackRib,
    eaveMat: ridgeMat,
    rafterMat: timberBeam,
    ribSpacing: 0.36,
  });

  // 5B. Full 4-Sided Yosemune Hipped Mossy Black Kawara Crown (四方寄棟屋根!)
  // Top main ridge length = 3.2m (X ∈ [-1.6, +1.6]) at Z = 0; outer eaves span 11.4m x 9.6m!
  const hipPitch = 0.46;
  const nsRun = 4.80; // Z = 0 -> ±4.80m
  const ewRun = 4.10; // X = ±1.6 -> ±5.70m
  const yRidge = YTOP - 0.15 + nsRun * Math.tan(hipPitch); // ~11.18m

  // Front (+Z) & Moss-Draped Back (-Z) Trapezoidal Hip Slopes
  p.kawaraSlope('ext', {
    topWidth: 3.2,
    bottomWidth: 11.4,
    run: nsRun,
    pitch: hipPitch,
    ridgeX: 0,
    ridgeY: yRidge,
    ridgeZ: 0,
    downslopeYaw: 0,
    tileMat: blackKawara,
    ribMat: blackRib,
    eaveMat: ridgeMat,
    rafterMat: timberBeam,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 3.2,
    bottomWidth: 11.4,
    run: nsRun,
    pitch: hipPitch,
    ridgeX: 0,
    ridgeY: yRidge,
    ridgeZ: 0,
    downslopeYaw: Math.PI,
    tileMat: mossyKawara, // Heavy shaded hillside moss blanketing the north black kawara!
    ribMat: blackRib,
    eaveMat: ridgeMat,
    rafterMat: timberBeam,
    ribSpacing: 0.38,
  });
  // East (+X) & West (-X) Triangular Hip End Slopes (topWidth = 0.05 -> clean pyramid hip!)
  p.kawaraSlope('ext', {
    topWidth: 0.06,
    bottomWidth: 9.6,
    run: ewRun,
    pitch: Math.atan2(yRidge - (YTOP - 0.15), ewRun),
    ridgeX: 1.60,
    ridgeY: yRidge,
    ridgeZ: 0,
    downslopeYaw: Math.PI * 0.5,
    tileMat: blackKawara,
    ribMat: blackRib,
    eaveMat: ridgeMat,
    rafterMat: timberBeam,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 0.06,
    bottomWidth: 9.6,
    run: ewRun,
    pitch: Math.atan2(yRidge - (YTOP - 0.15), ewRun),
    ridgeX: -1.60,
    ridgeY: yRidge,
    ridgeZ: 0,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: mossyKawara,
    ribMat: blackRib,
    eaveMat: ridgeMat,
    rafterMat: timberBeam,
    ribSpacing: 0.38,
  });

  // Main Crest Ridge (大棟) + Four Diagonal Yosemune Hip Ridges (四隅棟) + 6 Horned Onigawara!
  p.kawaraRidge('ext', -1.65, yRidge + 0.05, 0, 1.65, yRidge + 0.05, 0, ridgeMat, oniMat, {
    scale: 1.15,
    oniStart: true,
    oniEnd: true,
    courses: 3,
  });
  const yEave = YTOP - 0.12;
  p.kawaraRidge('ext', -1.60, yRidge + 0.02, 0, -5.65, yEave, 4.75, ridgeMat, oniMat, { scale: 0.78, oniEnd: true, courses: 2 });
  p.kawaraRidge('ext', 1.60, yRidge + 0.02, 0, 5.65, yEave, 4.75, ridgeMat, oniMat, { scale: 0.78, oniEnd: true, courses: 2 });
  p.kawaraRidge('ext', -1.60, yRidge + 0.02, 0, -5.65, yEave, -4.75, ridgeMat, oniMat, { scale: 0.78, oniEnd: true, courses: 2 });
  p.kawaraRidge('ext', 1.60, yRidge + 0.02, 0, 5.65, yEave, -4.75, ridgeMat, oniMat, { scale: 0.78, oniEnd: true, courses: 2 });

  // Extra thick moss cushions hugging the stone eaves
  p.box('ext', 2.8, 0.26, 0.65, -2.5, YTOP - 0.04, -4.4, mossMat);

  return p.build({
    id: site.id,
    name: '岩崎家（石工の石壁三階民家）',
    subtitle: '明治7年築・1F野面積み石壁＆鉄鋲扉・苔むし黒瓦寄棟・青モザイク風呂・三階建',
    category: 'house',
    builtYear: 1874,
    abandonedYear: 1985,
    stories: 3,
    floorElevations: [Y1 + 0.04, Y2 + 0.04, Y3 + 0.04],
    entryLocal: [-0.2, 0.0, 5.9],
  });
}
