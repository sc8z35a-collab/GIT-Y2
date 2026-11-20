import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * PORT01: 旧黒磯秘境港（1892年開港・1985年廃港 — 北西天然入江の完全歩行＆入室＆灯台登頂対応旧港）
 * 険しい西尾根のけもの道（trail_hidden_port）を抜け切った先の北西三日月入江（標高2.8m・海面=ローカルY-2.80m）に
 * 静かに眠る黒磯島の裏玄関。ローカル -Z 方向が北西外洋！
 *  1. 石造荷揚げ岸壁＆東側船揚げスロープ (Y=+0.15m): 苔石垣・フジツボ岩潮間帯・鉄ボラード×6・濡れ玉石スロープ。
 *  2. 22m歩行可能・木造旧桟橋 (Z=-5.0→-27.2m): 沖へ22m突き出す桟橋・荷揚げ鉄デリック・係留木造漁船「黒磯丸(9.2m)」。
 *  3. 17.5m歩行可能・石造防波堤＆登れる「旧黒磯石灯台」: 防波壁付の西防波堤先端に建つ切石造2F灯台。
 *     アーチ入口から入室し、内部階段で海抜6.0mの360°ガラス灯籠展望室＆銅製フレネル灯器台へ登頂可能！
 *  4. 入室可能・二階建「旧黒磯海運倉庫・荷捌所」(X∈[-14.2,-3.8]): 1F大両開き荷捌口・貨物棚・給油配管・
 *     海運事務デスク、2F港長見張り宿直室（潮汐黒板・布団・外洋パノラマ大窓）＆潮風青黒本瓦切妻屋根！
 */
export function buildPort01HiddenPort(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Coastal Stone Quay, Barnacle Intertidal & Weathered Pier Materials ---
  const rubbleStone = catalog.getMaterial('ishigaki_rubble', { roughness: 0.94, bumpScale: 0.08 });
  const mossyStone = catalog.getMaterial('ishigaki_mossy', { roughness: 0.94, bumpScale: 0.08 });
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const barnacleRock = catalog.getMaterial('barnacle_rock', { roughness: 0.92, bumpScale: 0.08 });
  const wetPebbles = catalog.getMaterial('wet_coastal_pebbles', { roughness: 0.72, bumpScale: 0.07 });
  const seaweedShore = catalog.getMaterial('seaweed_shore', { roughness: 0.80, bumpScale: 0.07 });
  const concreteCurb = catalog.getMaterial('concrete_curb', { roughness: 0.90, bumpScale: 0.05 });
  const smoothConc = catalog.getMaterial('smooth_concrete_dark', { roughness: 0.88, bumpScale: 0.04 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });

  // --- Timber Pier, Fishing Boat, Warehouse & Lighthouse Materials ---
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.92, bumpScale: 0.06 });
  const weatheredGray = catalog.getMaterial('weathered_gray_planks', { roughness: 0.92, bumpScale: 0.06 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.86, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.84, bumpScale: 0.04 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.82, bumpScale: 0.03 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xebe8df });
  const corrGray = catalog.getMaterial('corrugated_gray', { roughness: 0.68, metalness: 0.36, bumpScale: 0.06 });
  const galvZinc = catalog.getMaterial('galvanized_zinc', { roughness: 0.62, metalness: 0.44, bumpScale: 0.05 });
  const rustBolts = catalog.getMaterial('rusted_plate_bolts', { roughness: 0.72, metalness: 0.50, bumpScale: 0.05 });
  const peelingSteel = catalog.getMaterial('peeling_paint_steel', { roughness: 0.74, metalness: 0.42, bumpScale: 0.05 });
  const ironBlack = catalog.getMaterial('matte_black_metal', { roughness: 0.56, metalness: 0.48 });
  const copperBeacon = catalog.getMaterial('glazed_brown_brick', { roughness: 0.38, metalness: 0.55, tint: 0xdca068 });
  const boatBlue = catalog.getMaterial('peeling_paint_steel', { roughness: 0.72, metalness: 0.20, tint: 0x5c8498 });

  // --- Warehouse Office, Cargo & Lighthouse Interior Props ---
  const clearGlass = catalog.getMaterial('window_frosted_wood', { roughness: 0.18, opacity: 0.22, transparent: true, tint: 0xe2f4fc });
  const glassMat = catalog.getMaterial('window_frosted_wood', { roughness: 0.32, opacity: 0.36, transparent: true });
  const rackMat = catalog.getMaterial('storage_rack', { roughness: 0.88, bumpScale: 0.04 });
  const coarseCanvas = catalog.getMaterial('coarse_canvas', { roughness: 0.95, bumpScale: 0.05, doubleSide: true });
  const valvePipes = catalog.getMaterial('mine_valve_pipes', { roughness: 0.62, metalness: 0.55, bumpScale: 0.06 });
  const officeCounter = catalog.getMaterial('office_counter', { roughness: 0.80, bumpScale: 0.03 });
  const fileCab = catalog.getMaterial('file_cabinet', { roughness: 0.66, metalness: 0.25 });
  const mapSign = catalog.getMaterial('island_map_sign', { roughness: 0.80, bumpScale: 0.02 });
  const noticeMat = catalog.getMaterial('notice_board', { roughness: 0.88, bumpScale: 0.02 });
  const darkGreenChalk = catalog.getMaterial('dark_green_chalk', { roughness: 0.88, bumpScale: 0.02 });
  const tatamiPlain = catalog.getMaterial('tatami_plain', { roughness: 0.92, bumpScale: 0.04 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.92, bumpScale: 0.03 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });

  // --- Salt-Weathered Maritime Blue-Charcoal Hon-gawara (潮風青黒本瓦) ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.70, metalness: 0.20, bumpScale: 0.06, tint: 0x6c7c88 });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.66, metalness: 0.24, bumpScale: 0.05, tint: 0x5a6a76 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.58, metalness: 0.32, tint: 0x4b5862 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.50, metalness: 0.42, tint: 0x3e4850 });

  const YQ = 0.15;     // Stone Quay, Breakwater & 22m Pier Deck (+2.95m above ocean surface Y = -2.80m!)
  const Y_WH1 = 0.45;  // Maritime Warehouse 1F
  const Y_WH2 = 3.55;  // Harbormaster 2F
  const Y_WHT = 6.45;  // Warehouse Eave Top
  const Y_LH1 = 0.20;  // Old Stone Beacon Lighthouse Ground
  const Y_LH2 = 3.20;  // Lighthouse 2F Lantern Gallery (+6.00m above sea!)
  const Y_LHT = 5.75;  // Lighthouse Lantern Roof Base

  // =========================================================================
  // 1. GRAND MOSSY STONE QUAY, BARNACLE WATERLINE & EAST BOAT SLIPWAY
  // =========================================================================
  // Main Stone Quay Apron (X ∈ [-16.2, +15.0], Z ∈ [-5.2, +3.6], plunged to seabed Y = -6.8m!)
  p.box('ext', 31.2, 6.95, 8.80, -0.60, YQ - 3.48, -0.80, mossyStone);
  p.box('ext', 31.3, 1.40, 8.90, -0.60, -2.55, -0.80, barnacleRock); // Barnacle-crusted tidal waterline!
  p.box('ext', 31.0, 0.10, 8.65, -0.60, YQ - 0.02, -0.80, smoothConc);
  p.floor(-16.10, 14.90, -5.18, 3.65, YQ + 0.04);
  // Smooth trailhead apron ramp welcoming hikers arriving from trail_hidden_port (+Z side!)
  p.box('ext', 17.5, 0.18, 2.20, 6.00, 0.04, 4.40, wetPebbles);
  p.floor(-2.80, 14.80, 3.50, 5.60, YQ + 0.02);

  // Seawall Coping Curbs & 6 Rusty Iron Mooring Bollards along quay edge (Z = -4.95)
  p.box('ext', 8.8, 0.24, 0.56, -7.00, YQ + 0.12, -4.95, concreteCurb);
  p.box('ext', 6.2, 0.24, 0.56, 5.50, YQ + 0.12, -4.95, concreteCurb);
  for (const bx of [-10.2, -4.2, 3.6, 7.6]) {
    p.cyl('ext', 0.17, 0.22, 0.56, 8, bx, YQ + 0.34, -4.85, ironBlack);
    p.cyl('ext', 0.23, 0.23, 0.08, 8, bx, YQ + 0.62, -4.85, rustBolts);
    p.collider(bx - 0.25, bx + 0.25, YQ, YQ + 0.72, -5.12, -4.58);
  }

  // East Boat Slipway Ramp descending cleanly toward the wet pebble & seaweed cove edge (X ∈ [+8.8, +13.6], Z: -5.2 -> -9.8!)
  p.stairRun('ext', {
    x0: 11.2, z0: -5.15, x1: 11.2, z1: -9.55, y0: YQ + 0.04, y1: -2.05,
    width: 4.40, steps: 10, treadMat: wetPebbles, stringerMat: mossyStone, railMat: mossyStone,
    railLeft: false, railRight: false, closedRisers: true,
  });
  p.box('ext', 5.4, 0.45, 2.4, 11.2, -2.25, -10.5, seaweedShore);

  // =========================================================================
  // 2. ★ 22-METER WALKABLE TIMBER PIER + MOORED 9.2m WOODEN FISHING BOAT「黒磯丸」!
  // =========================================================================
  // Continuous Walkable Pier Deck (X ∈ [-2.40, +2.40], Z ∈ [-27.20, -5.00], Y = +0.15m!)
  p.box('ext', 4.85, 0.22, 22.30, 0.0, YQ - 0.09, -16.10, agedTimber);
  p.collider(-2.42, 2.42, YQ - 0.26, YQ + 0.02, -27.25, -5.00);
  p.floor(-2.30, 2.30, -27.05, -5.00, YQ + 0.04);
  // Low timber side bull-rails along pier edges (leaving pier center wide open for ocean views!)
  p.box('ext', 0.22, 0.22, 22.20, -2.30, YQ + 0.13, -16.10, timberDark, { solid: true });
  p.box('ext', 0.22, 0.22, 22.20, 2.30, YQ + 0.13, -16.10, timberDark, { solid: true });
  // 8 Pairs of Barnacle-Crusted Cedar Pier Pilings plunged 12m to the cove seabed + Cross-Bents!
  for (let i = 0; i < 8; i++) {
    const pz = -6.8 - i * 2.85;
    for (const px of [-2.10, 2.10]) {
      p.cyl('ext', 0.18, 0.22, 12.6, 8, px, YQ - 6.20, pz, timberDark);
      p.cyl('ext', 0.23, 0.24, 1.50, 8, px, -2.65, pz, barnacleRock); // Intertidal barnacle sleeve!
      // Mooring bollard timber cap protruding above deck every 2nd bent!
      if (i % 2 === 1) {
        p.cyl('ext', 0.19, 0.20, 0.68, 8, px, YQ + 0.34, pz, weatheredGray);
        p.collider(px - 0.24, px + 0.24, YQ, YQ + 0.72, pz - 0.24, pz + 0.24);
      }
    }
    // Under-pier cross-girder & diagonal timber sway brace
    p.box('ext', 4.65, 0.26, 0.24, 0, YQ - 0.30, pz, timberDark);
    p.box('ext', 4.30, 0.14, 0.14, 0, YQ - 1.45, pz, agedTimber, { rz: 0.42 });
  }

  // Rusty Iron Pier-Head Cargo Davit Crane (Z = -25.8, West corner X = -1.75!)
  p.cyl('ext', 0.16, 0.20, 3.85, 8, -1.75, YQ + 1.92, -25.85, rustBolts);
  p.box('ext', 0.16, 0.18, 3.10, -0.85, YQ + 3.72, -25.85, rustBolts, { ry: Math.PI * 0.5, rx: -0.38 });
  p.cyl('ext', 0.03, 0.03, 2.80, 6, 0.45, YQ + 2.80, -25.85, ironBlack); // Hanging hoist cable!
  p.collider(-2.05, -1.45, YQ, YQ + 2.4, -26.15, -25.55);

  // ★ HAND-CRAFTED 9.4m WEATHERED WOODEN FISHING BOAT「黒磯丸」MOORED ALONGSIDE PIER (X=+5.45, Z=-18.5!)
  const bx = 5.45;
  const bz = -18.50;
  const by = -2.35; // Waterline sits right on ocean Y = -2.80m, giving classic high trawler freeboard!
  const boatRed = catalog.getMaterial('peeling_paint_steel', { roughness: 0.78, metalness: 0.16, bumpScale: 0.05, tint: 0x963a2c });
  // Hull bottom (anti-fouling red waterline), planked wooden sides, blue trawler band & flared bow!
  p.box('ext', 2.90, 0.72, 6.90, bx, by - 0.16, bz, boatRed);             // Red anti-fouling waterline hull!
  p.box('ext', 3.00, 0.76, 7.00, bx, by + 0.56, bz, agedTimber);          // Planks above waterline
  p.box('ext', 3.08, 0.30, 7.08, bx, by + 1.06, bz, boatBlue);            // Blue-slate coastal trawler trim band!
  p.box('ext', 2.24, 1.02, 2.40, bx, by + 0.52, bz - 4.12, agedTimber, { ry: Math.PI * 0.25 }); // Tapered wooden bow!
  p.box('ext', 2.30, 0.30, 2.46, bx, by + 1.12, bz - 4.16, boatBlue, { ry: Math.PI * 0.25 });   // Raised blue bow sheer!
  p.box('ext', 0.16, 1.38, 0.24, bx, by + 1.24, bz - 5.22, timberDark, { rx: 0.28 });           // Swept wooden stempost (舳先)!
  p.box('ext', 2.75, 0.12, 6.60, bx, by + 0.92, bz, warmFloor);           // Planked wooden boat deck
  p.box('ext', 0.16, 0.44, 6.95, bx - 1.44, by + 1.24, bz, weatheredGray); // Port gunwale
  p.box('ext', 0.16, 0.44, 6.95, bx + 1.44, by + 1.24, bz, weatheredGray); // Starboard gunwale
  p.box('ext', 3.00, 0.46, 0.16, bx, by + 1.24, bz + 3.42, weatheredGray); // Transom stern
  // Rubber fender bumpers hanging on port side facing the pier!
  for (const fz of [bz - 2.35, bz - 0.10, bz + 2.15]) {
    p.cyl('ext', 0.24, 0.24, 0.18, 8, bx - 1.56, by + 0.96, fz, ironBlack, { rz: Math.PI * 0.5 });
  }
  // Aft Wheelhouse Cabin (操舵室) with framed glass windows on ALL 4 sides + roof exhaust stack!
  p.box('ext', 2.12, 0.86, 2.40, bx, by + 1.42, bz + 1.45, whitePlaster);  // Lower cabin wainscot
  p.box('ext', 2.16, 0.10, 2.44, bx, by + 1.88, bz + 1.45, timberDark);    // Window sill band
  p.box('ext', 2.16, 0.14, 2.44, bx, by + 2.66, bz + 1.45, timberDark);    // Roof fascia band
  p.box('ext', 2.34, 0.12, 2.76, bx, by + 2.78, bz + 1.45, corrGray, { rx: 0.06 }); // Cabin roof
  // Four corner cabin mullions + wrap-around clear glass windows (visible from pier!)
  for (const [wx, wz] of [[bx - 1.02, bz + 0.28], [bx + 1.02, bz + 0.28], [bx - 1.02, bz + 2.62], [bx + 1.02, bz + 2.62]]) {
    p.box('ext', 0.12, 0.80, 0.12, wx, by + 2.27, wz, timberDark);
  }
  p.box('ext', 1.94, 0.72, 0.05, bx, by + 2.26, bz + 0.28, clearGlass, { uvScale: 0 }); // Fore bridge window
  p.box('ext', 1.94, 0.72, 0.05, bx, by + 2.26, bz + 2.62, clearGlass, { uvScale: 0 }); // Aft window
  p.box('ext', 0.05, 0.72, 2.22, bx - 1.02, by + 2.26, bz + 1.45, clearGlass, { uvScale: 0 }); // Port window (pier side!)
  p.box('ext', 0.05, 0.72, 2.22, bx + 1.02, by + 2.26, bz + 1.45, clearGlass, { uvScale: 0 }); // Starboard window
  p.box('ext', 0.10, 0.74, 0.08, bx - 1.02, by + 2.26, bz + 1.45, timberDark); // Port window center mullion
  p.box('ext', 0.10, 0.74, 0.08, bx + 1.02, by + 2.26, bz + 1.45, timberDark); // Starboard center mullion
  // Cabin dark interior steering helm & rusty diesel exhaust stack + coiled foredeck fishing net!
  p.box('ext', 1.65, 0.72, 0.55, bx, by + 1.80, bz + 0.82, timberDark);    // Wheelhouse console visible inside glass
  p.cyl('ext', 0.09, 0.10, 1.35, 8, bx + 0.58, by + 3.40, bz + 2.25, rustBolts); // Diesel exhaust pipe
  p.box('ext', 1.35, 0.42, 1.65, bx + 0.15, by + 1.18, bz - 2.35, coarseCanvas); // Folded trawl net bundle
  // Fishing Mast, Cross-Yardarm, Boom & Mooring Lines tying「黒磯丸」to the Pier Bollards!
  p.cyl('ext', 0.08, 0.12, 5.60, 8, bx, by + 3.72, bz - 1.15, timberDark);
  p.box('ext', 1.65, 0.08, 0.08, bx, by + 5.15, bz - 1.15, timberDark);    // Mast cross-yardarm
  p.cyl('ext', 0.06, 0.07, 3.60, 8, bx, by + 3.45, bz - 2.65, timberDark, { rx: 1.15 });
  p.box('ext', 0.05, 0.05, 4.40, bx - 1.95, YQ - 0.78, bz - 2.40, coarseCanvas, { ry: 0.72, rx: 0.44 });
  p.box('ext', 0.05, 0.05, 4.20, bx - 1.95, YQ - 0.78, bz + 2.20, coarseCanvas, { ry: -0.68, rx: -0.42 });

  // =========================================================================
  // 3. ★ 17.5m WALKABLE STONE BREAKWATER & CLIMBABLE 2F OLD STONE BEACON LIGHTHOUSE!
  // =========================================================================
  // Walkable Stone Breakwater Arm (X ∈ [-16.2, -11.4], Z ∈ [-18.3, -5.0], plunged to seabed Y = -7.2m!)
  p.box('ext', 4.85, 7.35, 13.40, -13.80, YQ - 3.68, -11.65, rubbleStone);
  p.box('ext', 4.95, 1.45, 13.50, -13.80, -2.55, -11.65, barnacleRock);
  p.box('ext', 3.85, 0.10, 13.30, -13.30, YQ - 0.02, -11.65, smoothConc);
  p.floor(-15.10, -11.45, -18.35, -5.00, YQ + 0.04);
  // Seaward Wave-Deflector Stone Parapet Wall along outer West edge (X ∈ [-16.2, -15.2])!
  p.box('ext', 0.96, 1.18, 13.40, -15.72, YQ + 0.59, -11.65, cutStone, { solid: true });
  p.kouranRailing('ext', -11.48, -18.20, -11.48, -5.10, YQ, 0.90, rustBolts, 1.15);

  // ★ CLIMBABLE 2-STORY OLD STONE BEACON LIGHTHOUSE (旧黒磯石灯台: X ∈ [-16.4, -11.2], Z ∈ [-23.4, -18.2]!)
  const lxC = -13.80;
  const lzC = -20.80;
  // Deep stone lighthouse foundation pedestal plunged down to cove seabed!
  p.box('ext', 5.80, 7.60, 5.80, lxC, Y_LH1 - 3.80, lzC, mossyStone);
  p.box('ext', 5.95, 1.50, 5.95, lxC, -2.55, lzC, barnacleRock);
  p.box('int', 5.10, 0.14, 5.10, lxC, Y_LH1 - 0.05, lzC, stepStone);
  p.floor(-16.25, -11.35, -23.25, -18.20, Y_LH1 + 0.04);

  // Lighthouse 1F Cut-Stone Walls (Y_LH1=+0.20 -> Y_LH2=+3.20, h = 3.00m) with South Arched Doorway X ∈ [-14.55, -13.05]!
  const hLh1 = Y_LH2 - Y_LH1;
  const midLh1 = Y_LH1 + hLh1 * 0.5;
  p.box('ext', 1.88, hLh1, 0.34, -15.46, midLh1, -18.20, cutStone, { solid: true });
  p.box('ext', 1.54, 0.72, 0.34, -13.80, Y_LH2 - 0.36, -18.20, cutStone, { solid: true });
  p.box('ext', 1.56, 0.10, 0.38, -13.80, Y_LH2 - 0.72, -18.20, timberDark);
  p.box('ext', 1.88, hLh1, 0.34, -12.14, midLh1, -18.20, cutStone, { solid: true });
  p.box('ext', 5.25, hLh1, 0.34, lxC, midLh1, -23.40, cutStone, { solid: true });
  p.box('ext', 0.34, hLh1, 5.25, -16.40, midLh1, lzC, cutStone, { solid: true });
  p.box('ext', 0.34, hLh1, 5.25, -11.20, midLh1, lzC, cutStone, { solid: true });
  p.box('int', 1.25, 0.90, 0.55, -15.45, Y_LH1 + 0.45, -21.85, rackMat, { solid: true, uvScale: 0 }); // Oil-wick supplies!

  // Interior Lighthouse Timber Staircase ascending from 1F (+0.20m) to 2F Glass Lantern Room (+3.20m)!
  p.stairRun('int', {
    x0: -12.35, z0: -19.05, x1: -12.35, z1: -22.25, y0: Y_LH1 + 0.04, y1: Y_LH2 + 0.04,
    width: 1.05, steps: 12, treadMat: warmFloor, stringerMat: timberDark, railMat: ironBlack,
    railLeft: true, railRight: false, closedRisers: false, guardLeft: true, guardRight: false,
  });

  // Lighthouse 2F Lantern Gallery Floor (cutout X ∈ [-13.00, -11.28], Z ∈ [-22.30, -18.98])!
  p.box('int', 3.44, 0.16, 5.20, -14.70, Y_LH2 - 0.06, lzC, warmFloor);       // West Beacon Room X∈[-16.40,-12.98]
  p.box('int', 1.82, 0.16, 1.15, -12.10, Y_LH2 - 0.06, -22.84, warmFloor);    // North Arrival Z∈[-23.40,-22.26]
  p.box('int', 1.82, 0.16, 0.84, -12.10, Y_LH2 - 0.06, -18.60, warmFloor);    // South Strip Z∈[-19.00,-18.18]
  p.collider(-16.40, -13.00, Y_LH2 - 0.16, Y_LH2 + 0.02, -23.40, -18.20);
  p.collider(-13.00, -11.20, Y_LH2 - 0.16, Y_LH2 + 0.02, -23.40, -22.30);
  p.collider(-13.00, -11.20, Y_LH2 - 0.16, Y_LH2 + 0.02, -18.98, -18.20);
  p.floor(-16.25, -12.96, -23.25, -18.35, Y_LH2 + 0.04);
  p.floor(-13.04, -11.35, -23.25, -22.24, Y_LH2 + 0.04);
  p.floor(-13.04, -11.35, -19.02, -18.35, Y_LH2 + 0.04);
  p.kouranRailing('int', -13.00, -22.28, -13.00, -18.98, Y_LH2, 0.94, ironBlack, 0.52);

  // 360° Iron-Framed Clear-Glass Lighthouse Lantern Room (Y_LH2=+3.20 -> Y_LHT=+5.75!)
  const hLh2 = Y_LHT - Y_LH2;
  for (const sz of [-23.40, -18.20]) {
    p.box('ext', 5.25, 0.88, 0.24, lxC, Y_LH2 + 0.44, sz, whitePlaster, { solid: true });
    p.box('ext', 5.28, 0.10, 0.28, lxC, Y_LH2 + 0.90, sz, ironBlack);
    p.box('ext', 5.28, 0.14, 0.28, lxC, Y_LHT - 0.08, sz, ironBlack);
    p.box('ext', 4.95, hLh2 - 1.00, 0.06, lxC, Y_LH2 + 1.72, sz, clearGlass, { uvScale: 0 });
    for (const mx of [-15.1, -13.8, -12.5]) p.box('ext', 0.09, hLh2 - 0.95, 0.14, mx, Y_LH2 + 1.72, sz, ironBlack);
  }
  for (const sx of [-16.40, -11.20]) {
    p.box('ext', 0.24, 0.88, 5.25, sx, Y_LH2 + 0.44, lzC, whitePlaster, { solid: true });
    p.box('ext', 0.28, 0.10, 5.28, sx, Y_LH2 + 0.90, lzC, ironBlack);
    p.box('ext', 0.28, 0.14, 5.28, sx, Y_LHT - 0.08, lzC, ironBlack);
    p.box('ext', 0.06, hLh2 - 1.00, 4.95, sx, Y_LH2 + 1.72, lzC, clearGlass, { uvScale: 0 });
    for (const mz of [-22.1, -20.8, -19.5]) p.box('ext', 0.14, hLh2 - 0.95, 0.09, sx, Y_LH2 + 1.72, mz, ironBlack);
  }
  for (const [cx, cz] of [[-16.4, -23.4], [-11.2, -23.4], [-16.4, -18.2], [-11.2, -18.2]]) {
    p.box('ext', 0.24, hLh2 + 0.08, 0.24, cx, Y_LH2 + hLh2 * 0.5, cz, ironBlack);
  }
  // ★ CENTRAL COPPER-AND-IRON FRESNEL BEACON PEDESTAL + PYRAMIDAL COPPER LANTERN CUPOLA SPIRE!
  p.cyl('int', 0.48, 0.58, 1.15, 10, -14.55, Y_LH2 + 0.58, lzC, ironBlack);
  p.cyl('int', 0.42, 0.42, 0.85, 10, -14.55, Y_LH2 + 1.56, lzC, copperBeacon); // Fresnel lens drum!
  p.collider(-15.10, -14.00, Y_LH2, Y_LH2 + 2.0, lzC - 0.55, lzC + 0.55);
  p.box('ext', 5.85, 0.22, 5.85, lxC, Y_LHT + 0.10, lzC, ironBlack);
  p.cyl('ext', 0.35, 2.85, 2.15, 4, lxC, Y_LHT + 1.25, lzC, copperBeacon, { ry: Math.PI * 0.25 }); // Pyramidal bronze cupola!
  p.cyl('ext', 0.05, 0.07, 1.35, 8, lxC, Y_LHT + 2.85, lzC, ironBlack); // Weathervane lightning finial!

  // =========================================================================
  // 4. ★ ENTERABLE 2-STORY MARITIME CARGO WAREHOUSE & HARBORMASTER'S OFFICE (X ∈ [-14.2, -3.8], Z ∈ [-3.0, +3.6])
  // =========================================================================
  const hWh1 = Y_WH2 - Y_WH1; // 3.10m
  const midWh1 = Y_WH1 + hWh1 * 0.5;
  const wxC = -9.00;
  const wzC = 0.30;

  // 1F Warehouse Slab & Wide Sea-Facing Cargo Steps (Z = -3.95 -> -3.00 into Wide 2.40m Portal X ∈ [-9.0, -6.6]!)
  p.box('int', 10.30, 0.14, 6.50, wxC, Y_WH1 - 0.05, wzC, smoothConc);
  p.floor(-14.08, -3.92, -3.12, 3.48, Y_WH1 + 0.04);
  p.stoneSteps('ext', -7.80, -3.95, -2.98, YQ, Y_WH1, 2.55, 2, stepStone);
  // Galvanized Metal Loading Canopy overhanging the sea-facing cargo bay!
  p.box('ext', 4.60, 0.12, 1.55, -7.80, Y_WH1 + 2.75, -3.72, galvZinc, { rx: -0.22 });

  // Warehouse 1F Exterior Walls (Seaward Front = -Z = -3.00 with 2.40m Open Double Cargo Doors X ∈ [-9.00, -6.60]!)
  p.box('ext', 5.24, hWh1, 0.24, -11.60, midWh1, -3.00, corrGray, { solid: true });
  p.box('ext', 2.44, 0.68, 0.24, -7.80, Y_WH2 - 0.34, -3.00, rustBolts, { solid: true });
  p.box('ext', 2.46, 0.09, 0.28, -7.80, Y_WH2 - 0.68, -3.00, timberDark);
  p.box('ext', 2.84, hWh1, 0.24, -5.20, midWh1, -3.00, corrGray, { solid: true });
  p.box('ext', 1.15, 0.86, 0.08, -5.20, Y_WH1 + 1.78, -3.16, noticeMat, { uvScale: 0 }); // Harbor shipping schedule!
  // Rear (+Z = +3.60), West (-X = -14.20), East (+X = -3.80 with window overlooking trail arrival!)
  p.box('ext', 10.45, hWh1, 0.24, wxC, midWh1, 3.60, agedTimber, { solid: true });
  p.box('ext', 0.24, hWh1, 6.64, -14.20, midWh1, wzC, corrGray, { solid: true });
  p.box('ext', 0.24, 0.95, 6.64, -3.80, Y_WH1 + 0.48, wzC, peelingSteel, { solid: true });
  p.box('ext', 0.24, hWh1 - 0.95, 1.95, -3.80, Y_WH1 + 2.02, -2.02, agedTimber, { solid: true });
  p.box('ext', 0.24, 0.56, 2.75, -3.80, Y_WH2 - 0.28, 0.30, agedTimber, { solid: true });
  p.box('ext', 0.28, 0.08, 2.78, -3.80, Y_WH1 + 0.96, 0.30, timberDark);
  p.box('ext', 0.28, 0.08, 2.78, -3.80, Y_WH2 - 0.56, 0.30, timberDark);
  p.box('ext', 0.06, 1.56, 2.70, -3.80, Y_WH1 + 1.76, 0.30, glassMat, { uvScale: 0 });
  p.box('ext', 0.24, hWh1 - 0.95, 1.95, -3.80, Y_WH1 + 2.02, 2.62, agedTimber, { solid: true });

  // Warehouse 1F Cargo & Shipping Office Furnishings
  p.box('int', 2.05, 0.86, 0.78, -5.55, Y_WH1 + 0.43, 0.95, officeCounter, { solid: true, uvScale: 0 });
  p.box('int', 2.14, 0.06, 0.84, -5.55, Y_WH1 + 0.88, 0.95, warmFloor, { solid: true }); // Shipping clerk desk top!
  p.box('int', 0.56, 1.50, 0.74, -4.32, Y_WH1 + 0.75, 2.85, fileCab, { solid: true, uvScale: 0 });
  p.box('int', 1.65, 1.15, 0.06, -6.45, Y_WH1 + 1.82, 3.42, mapSign, { uvScale: 0 });    // Kuroiso Island maritime chart!
  p.box('int', 0.60, 1.85, 2.15, -10.85, Y_WH1 + 0.92, 2.15, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 1.65, 0.85, 1.15, -10.25, Y_WH1 + 0.44, 0.25, coarseCanvas, { solid: true });
  p.box('int', 2.25, 1.95, 0.14, -10.65, Y_WH1 + 1.25, -2.80, valvePipes, { uvScale: 0 }); // Marine diesel valve rack!

  // 1F -> 2F Warehouse West Timber Staircase (X = -13.05, Z: -1.35 -> +2.25, Y_WH1 -> Y_WH2!)
  p.stairRun('int', {
    x0: -13.05, z0: -1.35, x1: -13.05, z1: 2.25, y0: Y_WH1 + 0.04, y1: Y_WH2 + 0.04,
    width: 1.10, steps: 14, treadMat: warmFloor, stringerMat: timberDark, railMat: timberDark,
    railLeft: true, railRight: false, closedRisers: false, guardLeft: true, guardRight: false,
  });

  // --- 2F HARBORMASTER'S WATCH & BUNK ROOM (Y_WH2 = +3.55m) ---
  const hWh2 = Y_WHT - Y_WH2; // 2.90m
  const midWh2 = Y_WH2 + hWh2 * 0.5;
  // 2F Floor Slabs (cutout X ∈ [-14.12, -12.35], Z ∈ [-1.42, +2.32])
  p.box('int', 8.58, 0.16, 6.60, -8.08, Y_WH2 - 0.06, wzC, oakFloor);         // Main East/Center X∈[-12.36,-3.80]
  p.box('int', 1.88, 0.16, 1.62, -13.28, Y_WH2 - 0.06, -2.20, oakFloor);      // NW Strip Z∈[-3.00,-1.40]
  p.box('int', 1.88, 0.16, 1.32, -13.28, Y_WH2 - 0.06, 2.94, oakFloor);       // SW Arrival Z∈[+2.30,+3.60]
  p.box('int', 4.60, 0.04, 4.80, -6.80, Y_WH2 + 0.03, 0.35, tatamiPlain);
  p.collider(-12.35, -3.80, Y_WH2 - 0.16, Y_WH2 + 0.02, -3.00, 3.60);
  p.collider(-14.20, -12.35, Y_WH2 - 0.16, Y_WH2 + 0.02, -3.00, -1.42);
  p.collider(-14.20, -12.35, Y_WH2 - 0.16, Y_WH2 + 0.02, 2.32, 3.60);
  p.floor(-12.32, -3.92, -2.88, 3.48, Y_WH2 + 0.04);
  p.floor(-14.08, -12.28, -2.88, -1.38, Y_WH2 + 0.04);
  p.floor(-14.08, -12.28, 2.26, 3.48, Y_WH2 + 0.04);

  p.kouranRailing('int', -12.35, -1.42, -12.35, 2.32, Y_WH2, 0.94, timberDark, 0.56);
  p.kouranRailing('int', -14.08, -1.42, -12.35, -1.42, Y_WH2, 0.94, timberDark, 0.48);

  // 2F Exterior Walls with HUGE Timber-Framed Seaward Panorama Windows (-Z = -3.00)!
  p.box('ext', 10.45, 0.86, 0.22, wxC, Y_WH2 + 0.43, -3.00, whitePlaster, { solid: true });
  p.box('ext', 2.25, hWh2 - 0.86, 0.22, -13.10, Y_WH2 + 1.88, -3.00, whitePlaster, { solid: true });
  p.box('ext', 5.95, 0.48, 0.22, -9.00, Y_WHT - 0.24, -3.00, whitePlaster, { solid: true });
  p.box('ext', 5.98, 0.08, 0.26, -9.00, Y_WH2 + 0.88, -3.00, timberDark);
  p.box('ext', 5.98, 0.09, 0.26, -9.00, Y_WHT - 0.48, -3.00, timberDark);
  for (const mx of [-10.50, -9.00, -7.50]) p.box('ext', 0.08, 1.54, 0.14, mx, Y_WH2 + 1.64, -3.00, timberDark);
  p.box('ext', 5.90, 1.52, 0.06, -9.00, Y_WH2 + 1.64, -3.00, clearGlass, { uvScale: 0 });
  p.box('ext', 2.25, hWh2 - 0.86, 0.22, -4.90, Y_WH2 + 1.88, -3.00, whitePlaster, { solid: true });

  p.box('ext', 10.45, hWh2, 0.22, wxC, midWh2, 3.60, whitePlaster, { solid: true });
  p.box('ext', 0.22, hWh2, 6.64, -14.20, midWh2, wzC, whitePlaster, { solid: true });
  p.box('ext', 0.22, hWh2, 6.64, -3.80, midWh2, wzC, whitePlaster, { solid: true });

  // 2F Harbormaster Furnishings (Tide Chalkboard, Futon, Tansu, Wooden Ceiling!)
  p.box('int', 2.35, 1.38, 0.05, -8.50, Y_WH2 + 1.68, 3.45, timberDark);
  p.box('int', 2.22, 1.26, 0.06, -8.50, Y_WH2 + 1.68, 3.41, darkGreenChalk, { uvScale: 0 }); // Tide & ferry chalkboard!
  p.box('int', 1.65, 0.20, 2.15, -5.65, Y_WH2 + 0.13, 1.65, futonMat, { solid: true, uvScale: 0 });
  p.box('int', 0.54, 1.45, 1.38, -4.25, Y_WH2 + 0.74, -1.25, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 10.25, 0.08, 6.45, wxC, Y_WHT - 0.05, wzC, agedTimber);

  // Maritime Salt-Weathered Blue-Charcoal Hon-gawara Kirizuma Roof over Warehouse!
  const whPitch = 0.44;
  const whRun = 4.35;
  const whRidgeY = Y_WHT + whRun * Math.tan(whPitch) - 0.34; // ~8.15m
  p.kawaraSlope('ext', {
    bottomWidth: 11.8, run: whRun, pitch: whPitch,
    ridgeX: wxC, ridgeY: whRidgeY, ridgeZ: wzC, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 11.8, run: whRun, pitch: whPitch,
    ridgeX: wxC, ridgeY: whRidgeY, ridgeZ: wzC, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  const whGableH = whRidgeY - Y_WHT - 0.06;
  p.gablePrism('ext', 6.60, whGableH, 0.22, -14.20, Y_WHT, wzC, whitePlaster, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 6.60, whGableH, 0.22, -3.80, Y_WHT, wzC, whitePlaster, { ry: Math.PI * 0.5 });
  p.kawaraRidge('ext', -14.80, whRidgeY + 0.04, wzC, -3.20, whRidgeY + 0.04, wzC, kawaraRidge, oniMat, {
    scale: 1.02, courses: 2, oniStart: true, oniEnd: true,
  });

  return p.build({
    id: 'PORT01',
    name: '旧黒磯秘境港（石灯台・22m木造桟橋・海運倉庫）',
    subtitle: '石造岸壁・22m歩行可能木造桟橋・木造漁船「黒磯丸」・17.5m防波堤＆登頂可能石灯台・2F海運倉庫',
    category: 'port',
    builtYear: 1892,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [YQ, Y_LH2],
    entryLocal: [3.50, 0.20, 4.20],
    entryLookLocalYaw: Math.PI * 0.15,
  });
}
