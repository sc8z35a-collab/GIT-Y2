import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H19: 小川家（1884年築・急斜面 清水式懸造り高脚＆木橋玄関の三階茶亭邸）— 3階建
 * 上段山腹道南端・見晴らし坂上方（標高273m）の玄武岩斜面に建つ、島唯一の「高床懸造り木橋アプローチ三階茶亭」。
 *  - 地上床下懸造り架構 (Y=0.0m〜+1.85m): 玄武岩（basalt_cliff）＆地衣類岩（lichen_rock）の自然石基礎の上へ、
 *    極太杉柱脚20本と筋交い・貫木を縦横に組み上げた清水寺式の開放懸造り舞台！
 *  - 正面木造アプローチ橋 (Z=+8.9m→+4.3m): 欄干付き幅2.3mの懸造り木橋階段を渡って地上からY=+1.85mの1Fへ入場。
 *  - 1F (Y=+1.85m): 囲炉裏茶の間・茶事水屋・西側へ1.6m張り出した「崖上懸造り見晴らし舞台」。
 *  - 2F (Y=+4.95m): 藍染桜反物を掛けた茶人・織物サロン＋南西L字回り込み絶景高欄縁。
 *  - 3F (Y=+7.95m): 四方木枠ガラス窓の「月見三階茶室」＋赤銅錆（あかがねさび）色本瓦入母屋大屋根（鬼瓦×6基）！
 */
export function buildHouse19Ogawa(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Kakezukuri Cliffside Tea Pavilion Materials ---
  const basaltRock = catalog.getMaterial('basalt_cliff', { roughness: 0.94, bumpScale: 0.08 });
  const lichenRock = catalog.getMaterial('lichen_rock', { roughness: 0.94, bumpScale: 0.08 });
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const slabAbutment = catalog.getMaterial('sidewalk_slab', { roughness: 0.90, bumpScale: 0.05 });
  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.90, bumpScale: 0.05 });
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.91, bumpScale: 0.05 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xf7f2e8 });
  const washiWall = catalog.getMaterial('washi_plaster', { roughness: 0.91, bumpScale: 0.03 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.82, bumpScale: 0.04 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.80, bumpScale: 0.03 });
  const ajiroCeil = catalog.getMaterial('woven_screen_brown', { roughness: 0.90, bumpScale: 0.05 });
  const latticeMat = catalog.getMaterial('carved_wood_lattice', { roughness: 0.86, bumpScale: 0.05 });
  const slatScreen = catalog.getMaterial('wood_slat_screen', { roughness: 0.85, bumpScale: 0.05 });

  // --- Tea-Master & Weaver Interior Materials ---
  const tatamiBord = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const tatamiGreen = catalog.getMaterial('tatami_green_border', { roughness: 0.92, bumpScale: 0.04 });
  const sakuraFabric = catalog.getMaterial('indigo_sakura_fabric', { roughness: 0.92, bumpScale: 0.02, doubleSide: true });
  const shojiMat = catalog.getMaterial('shoji_sliding_door', { roughness: 0.88, opacity: 0.88, transparent: true });
  const clearGlass = catalog.getMaterial('window_frosted_wood', { roughness: 0.22, opacity: 0.22, transparent: true, tint: 0xe2eef5 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.78, bumpScale: 0.03 });
  const cabMat = catalog.getMaterial('kitchen_cabinet', { roughness: 0.82, bumpScale: 0.03 });
  const dresserMat = catalog.getMaterial('wooden_dresser', { roughness: 0.82, bumpScale: 0.03 });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });

  // --- Aged Copper-Bronze Patina Hon-gawara (赤銅錆茶本瓦 — unique antique reddish-bronze!) ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.68, metalness: 0.24, bumpScale: 0.06, tint: 0xa87660 });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.64, metalness: 0.28, bumpScale: 0.05, tint: 0x92624e });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.58, metalness: 0.34, tint: 0x7c5040 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.50, metalness: 0.42, tint: 0x623e32 });

  // ★ DRAMATIC ELEVATED KAKEZUKURI FLOOR ELEVATIONS (1.85m open cedar trestle under 1F!)
  const Y1 = 1.85;
  const Y2 = 4.95;
  const Y3 = 7.95;
  const YTOP = 10.75;

  // =========================================================================
  // 1. KIYOMIZU-STYLE KAKEZUKURI STILT TRESTLE, BASALT ROCKS & 4.5m CEDAR BRIDGE!
  // =========================================================================
  // Rear hillside basalt retaining anchor + natural boulder plinths under the open stilt forest
  p.box('ext', 12.2, 4.4, 3.6, 0, Y1 - 2.35, -3.10, basaltRock);
  p.box('ext', 14.0, 0.36, 9.2, -0.5, Y1 - 0.22, 0, timberDark); // Massive cantilevered floor girder deck!
  // Open Kakezukuri Cedar Stilt Columns (5 rows x 4 cols) rising from lichen boulder footings!
  for (const sx of [-7.10, -5.50, -2.75, 0.0, 2.75, 5.50]) {
    for (const sz of [-3.90, -1.25, 1.45, 4.10]) {
      if (sx < -6.2 && Math.abs(sz) > 3.6) continue;
      p.box('ext', 0.62, 0.72, 0.62, sx, -0.18, sz, lichenRock); // Natural boulder pier footing
      p.box('ext', 0.30, Y1 + 1.80, 0.30, sx, Y1 * 0.5 - 0.90, sz, timberDark);
    }
  }
  // Horizontal penetrating tie-beams (貫) & dramatic X-bracing across the open front & west Kakezukuri bays!
  for (const ty of [0.55, 1.30]) {
    p.box('ext', 13.0, 0.18, 0.18, -0.65, ty, 4.10, timberDark);
    p.box('ext', 13.0, 0.18, 0.18, -0.65, ty, 1.45, timberDark);
    p.box('ext', 0.18, 0.18, 8.20, -5.50, ty, 0.10, timberDark);
    p.box('ext', 0.18, 0.18, 8.20, 5.50, ty, 0.10, timberDark);
  }
  for (const bx of [-4.12, -1.38, 1.38, 4.12]) {
    p.box('ext', 2.85, 0.16, 0.16, bx, 0.92, 4.10, timberDark, { rz: 0.44 });
    p.box('ext', 2.85, 0.16, 0.16, bx, 0.92, 4.10, timberDark, { rz: -0.44 });
  }
  for (const bz of [-2.55, 0.10, 2.78]) {
    p.box('ext', 0.16, 0.16, 2.75, -5.50, 0.92, bz, timberDark, { rx: 0.44 });
    p.box('ext', 0.16, 0.16, 2.75, 5.50, 0.92, bz, timberDark, { rx: -0.44 });
  }

  // ★ SIGNATURE 4.5m ELEVATED CEDAR APPROACH BRIDGE-STAIR (Ground Z=+9.0 -> 1F Entry Z=+4.35, Y=0 -> +1.85m!)
  p.box('ext', 3.10, 0.45, 1.35, 0.20, -0.18, 9.45, cutStone);
  p.box('ext', 2.95, 0.10, 1.25, 0.20, 0.04, 9.45, slabAbutment);
  p.floor(-1.25, 1.65, 8.75, 10.10, 0.08);
  // Cedar support bents holding up the elevated entry bridge
  for (const bz of [6.55, 8.65]) {
    const bh = bz < 7.5 ? 1.05 : 0.30;
    p.box('ext', 0.24, bh + 0.8, 0.24, -0.95, bh * 0.5 - 0.4, bz, timberDark);
    p.box('ext', 0.24, bh + 0.8, 0.24, 1.35, bh * 0.5 - 0.4, bz, timberDark);
    p.box('ext', 2.60, 0.18, 0.18, 0.20, bh, bz, timberDark);
  }
  p.stairRun('ext', {
    x0: 0.20, z0: 8.85, x1: 0.20, z1: 4.38, y0: 0.02, y1: Y1 + 0.04,
    width: 2.30, steps: 11, treadMat: warmFloor, stringerMat: timberDark, railMat: timberDark,
    railLeft: true, railRight: true, closedRisers: false, guardLeft: true, guardRight: true,
  });

  // =========================================================================
  // 2. 1F: CANTILEVERED CLIFFSIDE HALL, HEARTH LOUNGE & WEST VIEWING STAGE (Y1 = +1.85m)
  // =========================================================================
  const h1 = Y2 - Y1; // 3.10m
  const mid1 = Y1 + h1 * 0.5;

  // 1F Interior Floor + 1.6m Cantilevered West Cliff Stage (X ∈ [-7.40, -5.80], Z ∈ [-3.80, +3.80])
  p.box('int', 11.65, 0.14, 8.65, 0, Y1 - 0.05, 0, oakFloor);
  p.box('int', 4.65, 0.04, 5.45, -1.55, Y1 + 0.03, -1.05, tatamiBord);
  p.box('int', 1.25, 0.03, 0.72, 0.20, Y1 + 0.04, 3.85, coirMat, { uvScale: 0 });
  p.floor(-5.70, 5.70, -4.18, 4.45, Y1 + 0.04);

  p.box('ext', 1.68, 0.16, 7.68, -6.62, Y1 - 0.04, 0, warmFloor); // West cantilevered cliff deck!
  p.kouranRailing('ext', -7.42, -3.80, -7.42, 3.80, Y1, 0.96, timberDark, 0.56);
  p.kouranRailing('ext', -7.42, -3.80, -5.80, -3.80, Y1, 0.96, timberDark, 0.50);
  p.kouranRailing('ext', -7.42, 3.80, -5.80, 3.80, Y1, 0.96, timberDark, 0.50);
  p.floor(-7.34, -5.72, -3.72, 3.72, Y1 + 0.04);

  // 1F Exterior Walls (Charred Cedar Waist + Aged Timber & White Plaster + Timber-Framed Windows!)
  // Front 1F (+Z = +4.30): Bridge Entrance Portal X ∈ [-0.95, +1.35] (2.30m wide!)
  p.box('ext', 4.90, 1.08, 0.24, -3.38, Y1 + 0.54, 4.30, cedarDark, { solid: true });
  p.box('ext', 1.20, h1 - 1.08, 0.24, -5.22, Y1 + 2.08, 4.30, agedTimber, { solid: true });
  p.box('ext', 2.45, 0.52, 0.24, -3.38, Y2 - 0.26, 4.30, agedTimber, { solid: true });
  p.box('ext', 2.48, 0.08, 0.28, -3.38, Y1 + 1.10, 4.30, timberDark);
  p.box('ext', 2.48, 0.08, 0.28, -3.38, Y2 - 0.52, 4.30, timberDark);
  p.box('ext', 2.40, 1.48, 0.06, -3.38, Y1 + 1.84, 4.30, latticeMat, { uvScale: 0 });
  p.box('ext', 1.25, h1 - 1.08, 0.24, -1.55, Y1 + 2.08, 4.30, agedTimber, { solid: true });

  p.box('ext', 2.34, 0.70, 0.24, 0.20, Y2 - 0.35, 4.30, agedTimber, { solid: true });
  p.box('ext', 2.36, 0.09, 0.28, 0.20, Y2 - 0.70, 4.30, timberDark);

  p.box('ext', 4.50, 1.08, 0.24, 3.58, Y1 + 0.54, 4.30, cedarDark, { solid: true });
  p.box('ext', 1.20, h1 - 1.08, 0.24, 1.92, Y1 + 2.08, 4.30, agedTimber, { solid: true });
  p.box('ext', 2.15, 0.52, 0.24, 3.60, Y2 - 0.26, 4.30, agedTimber, { solid: true });
  p.box('ext', 2.18, 0.08, 0.28, 3.60, Y1 + 1.10, 4.30, timberDark);
  p.box('ext', 2.18, 0.08, 0.28, 3.60, Y2 - 0.52, 4.30, timberDark);
  p.box('ext', 2.10, 1.48, 0.06, 3.60, Y1 + 1.84, 4.30, slatScreen, { uvScale: 0 });
  p.box('ext', 1.18, h1 - 1.08, 0.24, 5.24, Y1 + 2.08, 4.30, agedTimber, { solid: true });

  // West 1F (-X = -5.80) with Wide 1.80m Open Doorway Z ∈ [-0.90, +0.90] onto West Cliff Stage!
  p.box('ext', 0.24, h1, 3.45, -5.80, mid1, -2.60, agedTimber, { solid: true });
  p.box('ext', 0.24, 0.70, 1.84, -5.80, Y2 - 0.35, 0.0, agedTimber, { solid: true });
  p.box('ext', 0.28, 0.09, 1.86, -5.80, Y2 - 0.70, 0.0, timberDark);
  p.box('ext', 0.24, h1, 3.45, -5.80, mid1, 2.60, agedTimber, { solid: true });

  // Back 1F (-Z = -4.30) & East 1F (+X = +5.80)
  p.box('ext', 11.65, 1.15, 0.24, 0, Y1 + 0.58, -4.30, cedarDark, { solid: true });
  p.box('ext', 11.65, h1 - 1.15, 0.24, 0, Y1 + 2.12, -4.30, whitePlaster, { solid: true });
  p.box('ext', 0.24, 1.15, 8.65, 5.80, Y1 + 0.58, 0, cedarDark, { solid: true });
  p.box('ext', 0.24, h1 - 1.15, 8.65, 5.80, Y1 + 2.12, 0, agedTimber, { solid: true });

  // 1F Tea Hearth Lounge & Mizuya Preparation Kitchen Furnishings
  p.box('int', 1.45, 0.20, 1.45, -1.55, Y1 + 0.12, -1.05, cutStone, { solid: true }); // Sunken stone tea hearth!
  p.box('int', 0.62, 0.07, 0.62, -1.55, Y1 + 0.07, -2.25, zabutonMat, { uvScale: 0 });
  p.box('int', 0.62, 0.07, 0.62, -1.55, Y1 + 0.07, 0.15, zabutonMat, { uvScale: 0 });
  p.box('int', 1.95, 0.92, 0.64, 1.45, Y1 + 0.46, -3.86, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 1.35, 1.80, 0.54, -4.25, Y1 + 0.90, -3.86, cabMat, { solid: true, uvScale: 0 });
  p.box('int', 0.54, 1.48, 1.45, -5.28, Y1 + 0.74, 2.55, tansuMat, { solid: true, uvScale: 0 });

  // 1F -> 2F Staircase (inside 2F NE-shifted footprint X ∈ [-4.6, +5.4], Z ∈ [-4.2, +3.6]!)
  p.stairRun('int', {
    x0: 4.25, z0: 2.35, x1: 4.25, z1: -1.95, y0: Y1 + 0.04, y1: Y2 + 0.04,
    width: 1.12, steps: 14, treadMat: timberDark, stringerMat: timberDark, railMat: warmFloor,
    railLeft: true, railRight: false, closedRisers: false, guardLeft: true, guardRight: false,
  });

  // =========================================================================
  // 3. 2F: ASYMMETRIC TEA-MASTER & WEAVER SALON + L-SHAPED CLIFFSIDE BALCONY (Y2 = +4.95m)
  // =========================================================================
  const h2 = Y3 - Y2; // 3.00m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs (X ∈ [-4.60, +5.40], Z ∈ [-4.20, +3.60]; cutout X ∈ [+3.58, +5.34], Z ∈ [-2.02, +2.44])
  p.box('int', 8.20, 0.16, 7.80, -0.50, Y2 - 0.06, -0.30, oakFloor);       // Main X∈[-4.60,+3.60]
  p.box('int', 1.84, 0.16, 2.22, 4.48, Y2 - 0.06, -3.11, oakFloor);        // NE Arrival Z∈[-4.20,-2.00]
  p.box('int', 1.84, 0.16, 1.18, 4.48, Y2 - 0.06, 3.02, oakFloor);         // SE Strip Z∈[+2.42,+3.60]
  p.box('int', 5.40, 0.04, 5.80, 0.35, Y2 + 0.03, -0.55, tatamiGreen);
  p.collider(-4.60, 3.58, Y2 - 0.16, Y2 + 0.02, -4.20, 3.60);
  p.collider(3.58, 5.40, Y2 - 0.16, Y2 + 0.02, -4.20, -2.02);
  p.collider(3.58, 5.40, Y2 - 0.16, Y2 + 0.02, 2.44, 3.60);
  p.floor(-4.52, 3.54, -4.08, 3.68, Y2 + 0.04);
  p.floor(3.50, 5.28, -4.08, -1.96, Y2 + 0.04);
  p.floor(3.50, 5.28, 2.40, 3.52, Y2 + 0.04);

  p.kouranRailing('int', 3.58, -2.02, 3.58, 2.44, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('int', 3.58, 2.44, 5.32, 2.44, Y2, 0.94, timberDark, 0.48);

  // ★ 2F L-SHAPED OPEN CLIFFSIDE KOURAN BALCONY (South + West seamless wrap-around!)
  p.box('ext', 11.25, 0.16, 1.16, -0.18, Y2 - 0.04, 4.18, warmFloor);      // South Deck X∈[-5.80,+5.45], Z∈[+3.6,+4.76]
  p.box('ext', 1.24, 0.16, 7.82, -5.20, Y2 - 0.04, -0.30, warmFloor);      // West Deck X∈[-5.82,-4.58], Z∈[-4.2,+3.6]
  p.kouranRailing('ext', -5.78, 4.74, 5.42, 4.74, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('ext', -5.78, -4.20, -5.78, 4.74, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('ext', -5.78, -4.20, -4.60, -4.20, Y2, 0.94, timberDark, 0.48);
  p.kouranRailing('ext', 5.42, 3.60, 5.42, 4.74, Y2, 0.94, timberDark, 0.48);
  p.floor(-5.70, 5.34, 3.52, 4.66, Y2 + 0.04);
  p.floor(-5.70, -4.52, -4.12, 3.68, Y2 + 0.04);

  // 2F Exterior Walls (White Plaster Shinkabe + Exposed Timber Columns + L-Balcony Walk-Out Door!)
  // South 2F (+Z = +3.60): Open Balcony Door X ∈ [-1.15, +0.65] (1.80m wide!)
  p.box('ext', 3.48, h2, 0.22, -2.88, mid2, 3.60, whitePlaster, { solid: true });
  p.box('ext', 1.84, 0.68, 0.22, -0.25, Y3 - 0.34, 3.60, whitePlaster, { solid: true });
  p.box('ext', 1.86, 0.09, 0.26, -0.25, Y3 - 0.68, 3.60, timberDark);
  p.box('ext', 4.78, 0.88, 0.22, 3.04, Y2 + 0.44, 3.60, whitePlaster, { solid: true });
  p.box('ext', 1.10, h2 - 0.88, 0.22, 1.18, Y2 + 1.94, 3.60, whitePlaster, { solid: true });
  p.box('ext', 2.40, 0.52, 0.22, 2.92, Y3 - 0.26, 3.60, whitePlaster, { solid: true });
  p.box('ext', 2.44, 0.08, 0.26, 2.92, Y2 + 0.90, 3.60, timberDark);
  p.box('ext', 2.44, 0.08, 0.26, 2.92, Y3 - 0.52, 3.60, timberDark);
  p.box('ext', 2.36, 1.56, 0.06, 2.92, Y2 + 1.68, 3.60, shojiMat, { uvScale: 0 });
  p.box('ext', 1.32, h2 - 0.88, 0.22, 4.76, Y2 + 1.94, 3.60, whitePlaster, { solid: true });

  // West 2F (-X = -4.60), North 2F (-Z = -4.20), East 2F (+X = +5.40)
  p.box('ext', 0.22, 0.88, 7.84, -4.60, Y2 + 0.44, -0.30, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2 - 0.88, 2.25, -4.60, Y2 + 1.94, -3.10, whitePlaster, { solid: true });
  p.box('ext', 0.22, 0.52, 3.35, -4.60, Y3 - 0.26, -0.30, whitePlaster, { solid: true });
  p.box('ext', 0.26, 0.08, 3.38, -4.60, Y2 + 0.90, -0.30, timberDark);
  p.box('ext', 0.26, 0.08, 3.38, -4.60, Y3 - 0.52, -0.30, timberDark);
  p.box('ext', 0.06, 1.56, 3.30, -4.60, Y2 + 1.68, -0.30, clearGlass, { uvScale: 0 });
  p.box('ext', 0.22, h2 - 0.88, 2.25, -4.60, Y2 + 1.94, 2.50, whitePlaster, { solid: true });

  p.box('ext', 10.05, h2, 0.22, 0.40, mid2, -4.20, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 7.84, 5.40, mid2, -0.30, whitePlaster, { solid: true });

  // 2F Indigo-Weaver Hanging Textiles & Tea Salon Props!
  p.box('int', 1.85, 2.15, 0.05, 0.85, Y2 + 1.68, -4.00, sakuraFabric, { uvScale: 0 }); // Hanging dyed sakura tapestry!
  p.box('int', 0.10, 0.10, 2.40, 2.45, Y2 + 2.35, -2.80, timberDark);                   // Drying rail
  p.box('int', 0.05, 1.55, 1.85, 2.45, Y2 + 1.58, -2.80, sakuraFabric, { uvScale: 0 }); // Draped indigo cloth!
  p.box('int', 1.40, 0.36, 0.86, 0.35, Y2 + 0.20, -0.55, timberDark, { solid: true });
  p.box('int', 0.60, 0.07, 0.60, 0.35, Y2 + 0.07, -1.35, zabutonMat, { uvScale: 0 });
  p.box('int', 1.32, 1.12, 0.52, -3.55, Y2 + 0.56, -3.72, dresserMat, { solid: true, uvScale: 0 });

  // 2F -> 3F Staircase (ENTIRELY inside 3F Tea Pavilion X ∈ [-3.2, +3.2], Z ∈ [-3.0, +3.0]!)
  p.stairRun('int', {
    x0: -2.10, z0: 1.85, x1: -2.10, z1: -1.75, y0: Y2 + 0.04, y1: Y3 + 0.04,
    width: 1.06, steps: 14, treadMat: timberDark, stringerMat: timberDark, railMat: warmFloor,
    railLeft: false, railRight: true, closedRisers: false, guardLeft: false, guardRight: true,
  });

  // =========================================================================
  // 4. ★ 3F: MOON-VIEWING TEA PAVILION (月見三階茶室 — 6.4m x 6.0m, Y3 = +7.95m)
  // =========================================================================
  const h3 = YTOP - Y3; // 2.80m
  const mid3 = Y3 + h3 * 0.5;

  // 3F Floor Slabs (cutout X ∈ [-3.12, -1.45], Z ∈ [-1.82, +1.92])
  p.box('int', 4.68, 0.16, 6.00, 0.88, Y3 - 0.06, 0, oakFloor);            // Main East/Center X∈[-1.46,+3.20]
  p.box('int', 1.78, 0.16, 1.22, -2.32, Y3 - 0.06, -2.40, oakFloor);       // NW Arrival Z∈[-3.00,-1.80]
  p.box('int', 1.78, 0.16, 1.12, -2.32, Y3 - 0.06, 2.45, oakFloor);        // SW Strip Z∈[+1.90,+3.00]
  p.box('int', 3.60, 0.04, 4.40, 1.05, Y3 + 0.03, 0.0, tatamiBord);        // Moon-viewing tatami mat
  p.box('int', 6.32, 0.08, 5.92, 0, YTOP - 0.05, 0, ajiroCeil);            // Woven ajiro ceiling!
  p.collider(-1.45, 3.20, Y3 - 0.16, Y3 + 0.02, -3.00, 3.00);
  p.collider(-3.20, -1.45, Y3 - 0.16, Y3 + 0.02, -3.00, -1.82);
  p.collider(-3.20, -1.45, Y3 - 0.16, Y3 + 0.02, 1.92, 3.00);
  p.floor(-1.42, 3.08, -2.88, 2.88, Y3 + 0.04);
  p.floor(-3.08, -1.40, -2.88, -1.78, Y3 + 0.04);
  p.floor(-3.08, -1.40, 1.88, 2.88, Y3 + 0.04);

  p.kouranRailing('int', -1.45, -1.82, -1.45, 1.92, Y3, 0.92, timberDark, 0.54);
  p.kouranRailing('int', -3.08, 1.92, -1.45, 1.92, Y3, 0.92, timberDark, 0.48);

  // 3F Timber-Framed 360° Panoramic Tea Pavilion Walls (zero olive underside — full dark timber trim!)
  for (const sz of [-3.00, 3.00]) {
    p.box('ext', 6.45, 0.80, 0.20, 0, Y3 + 0.40, sz, whitePlaster, { solid: true });
    p.box('ext', 0.98, h3 - 0.80, 0.20, -2.72, Y3 + 1.80, sz, whitePlaster, { solid: true });
    p.box('ext', 0.98, h3 - 0.80, 0.20, 2.72, Y3 + 1.80, sz, whitePlaster, { solid: true });
    p.box('ext', 4.50, 0.44, 0.20, 0, YTOP - 0.22, sz, whitePlaster, { solid: true });
    p.box('ext', 4.52, 0.08, 0.26, 0, Y3 + 0.82, sz, timberDark);
    p.box('ext', 4.52, 0.09, 0.26, 0, YTOP - 0.44, sz, timberDark);
    for (const mx of [-1.10, 0.0, 1.10]) p.box('ext', 0.08, 1.54, 0.14, mx, Y3 + 1.58, sz, timberDark);
    p.box('ext', 4.44, 1.52, 0.06, 0, Y3 + 1.58, sz, clearGlass, { uvScale: 0 });
  }
  for (const sx of [-3.20, 3.20]) {
    p.box('ext', 0.20, 0.80, 6.04, sx, Y3 + 0.40, 0, whitePlaster, { solid: true });
    p.box('ext', 0.20, h3 - 0.80, 0.98, sx, Y3 + 1.80, -2.52, whitePlaster, { solid: true });
    p.box('ext', 0.20, h3 - 0.80, 0.98, sx, Y3 + 1.80, 2.52, whitePlaster, { solid: true });
    p.box('ext', 0.20, 0.44, 4.10, sx, YTOP - 0.22, 0, whitePlaster, { solid: true });
    p.box('ext', 0.26, 0.08, 4.12, sx, Y3 + 0.82, 0, timberDark);
    p.box('ext', 0.26, 0.09, 4.12, sx, YTOP - 0.44, 0, timberDark);
    for (const mz of [-1.00, 0.0, 1.00]) p.box('ext', 0.14, 1.54, 0.08, sx, Y3 + 1.58, mz, timberDark);
    p.box('ext', 0.06, 1.52, 4.04, sx, Y3 + 1.58, 0, clearGlass, { uvScale: 0 });
  }
  for (const [px, pz] of [[-3.22, -3.02], [3.22, -3.02], [-3.22, 3.02], [3.22, 3.02]]) {
    p.box('ext', 0.20, h3 + 0.06, 0.20, px, mid3, pz, timberDark);
  }
  // 3F Tea Pavilion Props (Low Tea Table, Zabuton, Antique Tansu)
  p.box('int', 1.18, 0.34, 0.84, 1.05, Y3 + 0.19, 0.0, timberDark, { solid: true });
  p.box('int', 0.58, 0.07, 0.58, 1.05, Y3 + 0.07, -0.78, zabutonMat, { uvScale: 0 });
  p.box('int', 0.58, 0.07, 0.58, 1.05, Y3 + 0.07, 0.78, zabutonMat, { uvScale: 0 });
  p.box('int', 1.25, 1.28, 0.50, 1.05, Y3 + 0.65, -2.55, tansuMat, { solid: true, uvScale: 0 });

  // =========================================================================
  // 5. AGED COPPER-BRONZE PATINA THREE-TIER HON-GAWARA ROOFS (赤銅錆本瓦・鬼瓦×6基!)
  // =========================================================================
  // A. 1F Front & West Cliff Stage Kawara Eaves
  p.kawaraSlope('ext', {
    bottomWidth: 12.6, run: 1.28, pitch: 0.36,
    ridgeX: 0, ridgeY: Y2 + 0.10, ridgeZ: 4.26, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 9.2, run: 2.15, pitch: 0.36,
    ridgeX: -5.72, ridgeY: Y2 + 0.14, ridgeZ: 0, downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });

  // B. 2F Staggered Skirt Kawara Eaves framing 3F Tea Pavilion (all 4 sides!)
  const sk2Pitch = 0.40;
  p.kawaraSlope('ext', {
    topWidth: 6.6, bottomWidth: 12.2, run: 2.35, pitch: sk2Pitch,
    ridgeX: 0.20, ridgeY: Y3 + 0.48, ridgeZ: 2.98, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 6.6, bottomWidth: 11.4, run: 2.10, pitch: sk2Pitch,
    ridgeX: 0.40, ridgeY: Y3 + 0.44, ridgeZ: -2.98, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 6.2, bottomWidth: 9.8, run: 2.85, pitch: sk2Pitch,
    ridgeX: 3.18, ridgeY: Y3 + 0.52, ridgeZ: -0.25, downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 6.2, bottomWidth: 10.2, run: 3.15, pitch: sk2Pitch,
    ridgeX: -3.18, ridgeY: Y3 + 0.56, ridgeZ: 0.15, downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });

  // ★ C. 3F GRAND COPPER-BRONZE HON-GAWARA IRIMOYA TEA PAVILION ROOF (鬼瓦×6基!)
  const topPitch = 0.50;
  const topRun = 4.25;
  const topRidgeY = YTOP + topRun * Math.tan(topPitch) - 0.16; // ~12.91m
  const topRidgeHalfX = 1.85;
  const topBotW = 8.95;
  const gableH = 1.02;
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
  p.gablePrism('ext', 3.40, gableH - 0.08, 0.18, topRidgeHalfX, sideStartY, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 3.40, gableH - 0.08, 0.18, -topRidgeHalfX, sideStartY, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.kawaraSlope('ext', {
    topWidth: 3.60, bottomWidth: topBotW - 0.30, run: topRun - topRidgeHalfX + 0.18, pitch: 0.46,
    ridgeX: topRidgeHalfX, ridgeY: sideStartY, ridgeZ: 0, downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.34,
  });
  p.kawaraSlope('ext', {
    topWidth: 3.60, bottomWidth: topBotW - 0.30, run: topRun - topRidgeHalfX + 0.18, pitch: 0.46,
    ridgeX: -topRidgeHalfX, ridgeY: sideStartY, ridgeZ: 0, downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.34,
  });

  // Grand 3-course main ridge + 4 diagonal hip ridges with 6 sculpted horned Onigawara!
  p.kawaraRidge('ext', -topRidgeHalfX, topRidgeY + 0.04, 0, topRidgeHalfX, topRidgeY + 0.04, 0, kawaraRidge, oniMat, {
    scale: 1.08, courses: 3, oniStart: true, oniEnd: true,
  });
  const eaveY = topRidgeY - topRun * Math.tan(topPitch);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      p.kawaraRidge(
        'ext',
        sx * topRidgeHalfX, sideStartY + 0.04, sz * 1.72,
        sx * (topRun - 0.08), eaveY + 0.05, sz * (topRun - 0.08),
        kawaraRidge, oniMat,
        { scale: 0.70, courses: 1, oniStart: false, oniEnd: true }
      );
    }
  }

  return p.build({
    id: 'H19',
    name: '小川家（懸造り高脚＆木橋玄関の三階茶亭邸）',
    subtitle: '清水式懸造り杉柱脚・4.5m木橋玄関・西崖舞台・2F L字高欄縁・3F月見茶室＆赤銅錆本瓦',
    category: 'house',
    builtYear: 1884,
    abandonedYear: 1985,
    stories: 3,
    floorElevations: [Y1, Y2, Y3],
    entryLocal: [0.20, 0.0, 11.2],
    entryLookLocalYaw: 0,
  });
}
