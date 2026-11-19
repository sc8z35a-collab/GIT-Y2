import * as THREE from 'three';
import { TextureCatalog } from '../core/textureCatalog';
import {
  PLANNED_SITES,
  BUILT_HOUSE_IDS,
  GRADED_PATHS,
  SPAWN_POINT,
  SUMMIT_POINT,
  LOOKOUT_POINT,
  PARK_POINT,
  SECRET_BASE_POINT,
  MINE_PORTAL_POINT,
  HIDDEN_PORT_POINT,
  getTerrainHeight,
  getStreamCenterX,
} from './terrainMath';

/**
 * Builds the 2km x 5km hillside road infrastructure, site preparation (石垣 retaining walls
 * & weathered boundary stakes for unbuilt planned plots), wooden utility poles & sagging wires,
 * guardrails, Lookout Bend mossy graveyard/Jizo lanterns, 865m summit triangulation marker,
 * Kuroiso Gorge stream, and Driftwood Cove beach remnants.
 */
export function buildVillageInfrastructure(catalog: TextureCatalog): THREE.Group {
  const group = new THREE.Group();
  group.name = 'KuroisoInfrastructureAndSites';

  const ishigakiMat = catalog.getMaterial('ishigaki_mossy', { repeatX: 3, repeatY: 1, roughness: 0.94, bumpScale: 0.08 });
  const rubbleWallMat = catalog.getMaterial('ishigaki_rubble', { repeatX: 3, repeatY: 1, roughness: 0.95, bumpScale: 0.08 });
  const poleMat = catalog.getMaterial('charred_cedar', { repeatX: 1, repeatY: 3, roughness: 0.92, bumpScale: 0.05 });
  const woodStakeMat = catalog.getMaterial('aged_timber_planks', { repeatX: 1, repeatY: 1, roughness: 0.92 });
  const rustSteelMat = catalog.getMaterial('dark_iron_plate', { repeatX: 1, repeatY: 1, roughness: 0.75, metalness: 0.55 });
  const guardrailMat = catalog.getMaterial('peeling_paint_steel', { repeatX: 2, repeatY: 1, roughness: 0.78, metalness: 0.35 });
  const concreteMat = catalog.getMaterial('mossy_aged_concrete', { repeatX: 2, repeatY: 1, roughness: 0.94, bumpScale: 0.05 });
  const driftwoodMat = catalog.getMaterial('driftwood', { repeatX: 2, repeatY: 1, roughness: 0.94, bumpScale: 0.07 });
  const seaweedMat = catalog.getMaterial('seaweed_shore', { repeatX: 2, repeatY: 2, roughness: 0.72, bumpScale: 0.05 });
  const barnacleMat = catalog.getMaterial('barnacle_rock', { repeatX: 2, repeatY: 2, roughness: 0.9, bumpScale: 0.08 });
  const mossRockMat = catalog.getMaterial('moss_rock_heavy', { repeatX: 2, repeatY: 2, roughness: 0.92, bumpScale: 0.08 });
  const coalRockMat = catalog.getMaterial('coal_seam_rock', { repeatX: 2, repeatY: 2, roughness: 0.88, bumpScale: 0.08 });
  const wireMat = new THREE.LineBasicMaterial({ color: 0x1a1c20, transparent: true, opacity: 0.72 });

  // =========================================================================
  // 1. STONE RETAINING WALLS (石垣) & SUBTLE SITE BOUNDARY STAKES FOR UNBUILT PLOTS
  // =========================================================================
  const stakeGeo = new THREE.BoxGeometry(0.14, 1.15, 0.14);
  const cornerStoneGeo = new THREE.BoxGeometry(0.45, 0.36, 0.45);
  const signCapColors: Record<string, number> = {
    house: 0x8b6e52,
    shop: 0xb85b3f,
    koban: 0x3b6ca8,
    park: 0x4b874b,
    secret_base: 0x7c8e42,
    mine: 0x3f434a,
    port: 0x3a7d8c,
  };

  for (let i = 0; i < PLANNED_SITES.length; i++) {
    const s = PLANNED_SITES[i];
    const isBuilt = BUILT_HOUSE_IDS.has(s.id);
    const siteGrp = new THREE.Group();
    siteGrp.position.set(s.x, s.y, s.z);
    siteGrp.rotation.y = s.yaw;

    // Hillside stone retaining embankment (石垣) holding up each terraced plot
    const bespokeFoundationIds = new Set(['H07', 'H08', 'H09', 'H13', 'H14', 'H15', 'H16', 'H19', 'H20', 'H21', 'H22', 'H23', 'H24']);
    if (s.category !== 'secret_base' && s.category !== 'port' && !bespokeFoundationIds.has(s.id)) {
      const wallH = s.category === 'park' ? 3.2 : 4.2;
      const wall = new THREE.Mesh(
        new THREE.BoxGeometry(s.radiusX * 1.96, wallH, s.radiusZ * 1.96),
        i % 2 === 0 ? ishigakiMat : rubbleWallMat
      );
      wall.position.y = -wallH * 0.5 - 0.06;
      wall.receiveShadow = true;
      wall.castShadow = true;
      siteGrp.add(wall);
    }

    // Only place temporary corner boundary stones & survey stake on unbuilt planned plots
    if (!isBuilt) {
      const hx = s.radiusX * 0.82;
      const hz = s.radiusZ * 0.82;
      for (const [cx, cz] of [[-hx, -hz], [hx, -hz], [-hx, hz], [hx, hz]]) {
        const stone = new THREE.Mesh(cornerStoneGeo, concreteMat);
        stone.position.set(cx, 0.14, cz);
        stone.receiveShadow = true;
        siteGrp.add(stone);
      }

      const stake = new THREE.Mesh(stakeGeo, woodStakeMat);
      stake.position.set(0, 0.55, hz + 0.25);
      stake.castShadow = true;
      const cap = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 0.16, 0.22),
        new THREE.MeshStandardMaterial({ color: signCapColors[s.category] ?? 0x8b6e52, roughness: 0.85 })
      );
      cap.position.set(0, 1.16, hz + 0.25);
      siteGrp.add(stake, cap);
    }

    group.add(siteGrp);
  }

  // =========================================================================
  // 2. VILLAGE PARK TERRACE DETAILS (P01 見晴らし村営公園)
  // =========================================================================
  {
    const parkGrp = new THREE.Group();
    parkGrp.position.set(PARK_POINT.x, PARK_POINT.y, PARK_POINT.z);
    parkGrp.rotation.y = 0.2;
    // Low mossy stone park wall on 3 sides (leaving road entrance open)
    const wallN = new THREE.Mesh(new THREE.BoxGeometry(28.0, 0.72, 0.55), ishigakiMat);
    wallN.position.set(0, 0.36, -11.2);
    const wallW = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.72, 22.4), ishigakiMat);
    wallW.position.set(-14.0, 0.36, 0);
    const wallS = new THREE.Mesh(new THREE.BoxGeometry(28.0, 0.72, 0.55), ishigakiMat);
    wallS.position.set(0, 0.36, 11.2);
    // Two weathered wooden park benches overlooking the mountain bowl
    for (const bz of [-4.5, 4.5]) {
      const seat = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.12, 0.55), woodStakeMat);
      seat.position.set(-7.5, 0.48, bz);
      const back = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.42, 0.1), woodStakeMat);
      back.position.set(-7.5, 0.78, bz - 0.24);
      const legL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.48, 0.48), concreteMat);
      legL.position.set(-8.35, 0.24, bz);
      const legR = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.48, 0.48), concreteMat);
      legR.position.set(-6.65, 0.24, bz);
      parkGrp.add(seat, back, legL, legR);
    }
    // Mossy stone drinking fountain pedestal in center
    const fountain = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 0.85, 8), concreteMat);
    fountain.position.set(4.5, 0.42, 0);
    parkGrp.add(wallN, wallW, wallS, fountain);
    group.add(parkGrp);
  }

  // =========================================================================
  // 3. KIDS' DEEP-MOUNTAIN SECRET BASE GLADE (B01 子供たちの山奥の秘密基地)
  // =========================================================================
  {
    const baseGrp = new THREE.Group();
    baseGrp.position.set(SECRET_BASE_POINT.x, SECRET_BASE_POINT.y, SECRET_BASE_POINT.z);
    // Ring of mossy sheltering boulders & weathered log seats around an old stone campfire ring
    const ringPts: Array<[number, number, number]> = [
      [-5.2, -3.5, 2.2], [-2.5, -5.8, 2.6], [2.4, -5.4, 2.1],
      [5.5, -2.0, 2.4], [4.8, 3.6, 1.9], [-5.4, 2.8, 2.0],
    ];
    for (const [bx, bz, bs] of ringPts) {
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(bs, 1), mossRockMat);
      rock.scale.set(1.2, 0.85, 1.0);
      rock.position.set(bx, bs * 0.45, bz);
      rock.castShadow = true;
      rock.receiveShadow = true;
      baseGrp.add(rock);
    }
    // Campfire stone circle & fallen log benches
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      const st = new THREE.Mesh(new THREE.DodecahedronGeometry(0.24, 0), mossRockMat);
      st.position.set(Math.cos(a) * 0.85, 0.14, Math.sin(a) * 0.85);
      baseGrp.add(st);
    }
    for (const [lx, lz, ry] of [[-2.0, 0.8, 0.3], [1.8, -1.2, -0.7], [0.4, 2.3, 1.45]]) {
      const log = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.25, 2.6, 7), driftwoodMat);
      log.position.set(lx, 0.22, lz);
      log.rotation.set(Math.PI / 2, ry, 0);
      log.castShadow = true;
      baseGrp.add(log);
    }
    group.add(baseGrp);
  }

  // =========================================================================
  // 4. 1890 COAL MINE GORGE CLIFF ROCKS & PLANNED PORTAL MARKER (M01)
  // =========================================================================
  {
    const mineGrp = new THREE.Group();
    mineGrp.position.set(MINE_PORTAL_POINT.x, MINE_PORTAL_POINT.y, MINE_PORTAL_POINT.z);
    // Dark coal-seam rock mounds & weathered timber shoring beams staged at the 1890 portal cliff
    for (const [mx, mz, ms] of [[-7.5, -5.5, 3.2], [7.2, -5.0, 3.5], [0, -8.5, 4.2], [-9.2, 2.5, 2.1]]) {
      const rk = new THREE.Mesh(new THREE.DodecahedronGeometry(ms, 1), coalRockMat);
      rk.scale.set(1.25, 0.9, 1.0);
      rk.position.set(mx, ms * 0.45, mz);
      rk.castShadow = true;
      rk.receiveShadow = true;
      mineGrp.add(rk);
    }
    // Historic stone portal arch frame marking the 1890 opening site
    const pierL = new THREE.Mesh(new THREE.BoxGeometry(1.4, 4.2, 2.2), ishigakiMat);
    pierL.position.set(-2.6, 2.1, -6.2);
    const pierR = new THREE.Mesh(new THREE.BoxGeometry(1.4, 4.2, 2.2), ishigakiMat);
    pierR.position.set(2.6, 2.1, -6.2);
    const lintel = new THREE.Mesh(new THREE.BoxGeometry(6.8, 1.3, 2.4), ishigakiMat);
    lintel.position.set(0, 4.45, -6.2);
    const darkMouth = new THREE.Mesh(
      new THREE.BoxGeometry(3.8, 3.8, 1.2),
      new THREE.MeshStandardMaterial({ color: 0x07080a, roughness: 1.0 })
    );
    darkMouth.position.set(0, 1.9, -6.8);
    mineGrp.add(pierL, pierR, lintel, darkMouth);
    group.add(mineGrp);
  }

  // =========================================================================
  // 5. 865.0m SUMMIT PANORAMA MARKER (黒磯岳主峰 標高865m 一等三角点 & ケルン)
  // =========================================================================
  {
    const sy = getTerrainHeight(SUMMIT_POINT.x, SUMMIT_POINT.z);
    const sumGrp = new THREE.Group();
    sumGrp.position.set(SUMMIT_POINT.x, sy, SUMMIT_POINT.z);
    // Granite triangulation stone pillar (一等三角点) deeply bedded into summit rock
    const trigBase = new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.80, 0.98), concreteMat);
    trigBase.position.y = -0.10;
    trigBase.castShadow = true;
    trigBase.receiveShadow = true;
    const trigPillar = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.90, 0.32), concreteMat);
    trigPillar.position.y = 0.72;
    trigPillar.castShadow = true;
    // Wooden summit signboard post ("黒磯岳 865m") rooted solidly into local slope elevation
    const signLocalY = getTerrainHeight(SUMMIT_POINT.x + 2.2, SUMMIT_POINT.z - 1.2) - sy;
    const signPost = new THREE.Mesh(new THREE.BoxGeometry(0.16, 3.0, 0.16), woodStakeMat);
    signPost.position.set(2.2, signLocalY + 0.95, -1.2);
    signPost.castShadow = true;
    const signPlank = new THREE.Mesh(new THREE.BoxGeometry(0.34, 1.15, 0.08), woodStakeMat);
    signPlank.position.set(2.2, signLocalY + 1.85, -1.12);
    signPlank.castShadow = true;
    // Stacked hiker's stone cairn (ケルン) tightly seated onto local slope with overlapping stone contact
    const cairnLocalY = getTerrainHeight(SUMMIT_POINT.x - 2.6, SUMMIT_POINT.z + 1.4) - sy;
    const cairnLayers: Array<[number, number]> = [
      [0.74, 0.14],
      [0.58, 0.50],
      [0.44, 0.80],
      [0.30, 1.04],
    ];
    for (const [r, ly] of cairnLayers) {
      const st = new THREE.Mesh(new THREE.DodecahedronGeometry(r, 0), mossRockMat);
      st.scale.set(1.22, 0.56, 1.12);
      st.position.set(-2.6, cairnLocalY + ly, 1.4);
      st.castShadow = true;
      st.receiveShadow = true;
      sumGrp.add(st);
    }
    sumGrp.add(trigBase, trigPillar, signPost, signPlank);
    group.add(sumGrp);
  }

  // =========================================================================
  // 6. HIDDEN PORT BEYOND ANIMAL TRAIL (PORT01 秘境の旧港建設案・北西天然入江防波堤基礎)
  // =========================================================================
  {
    const portGrp = new THREE.Group();
    portGrp.position.set(HIDDEN_PORT_POINT.x, HIDDEN_PORT_POINT.y, HIDDEN_PORT_POINT.z);
    // Rotate +45deg so local -Z points directly NORTHWEST (-X, -Z) out into the open harbor cove!
    portGrp.rotation.y = Math.PI * 0.25;

    // Mossy stone quay apron flush with Y=2.8m terrace, dropping cleanly into cove water
    const quay = new THREE.Mesh(new THREE.BoxGeometry(28.0, 4.2, 10.0), rubbleWallMat);
    quay.position.set(0, -1.95, 0);
    quay.receiveShadow = true;
    quay.castShadow = true;

    // Stone coping curbs & weathered iron mooring bollards along the seawall edge
    const coping = new THREE.Mesh(new THREE.BoxGeometry(28.2, 0.28, 0.75), concreteMat);
    coping.position.set(0, 0.24, -4.65);
    coping.receiveShadow = true;
    for (const bx of [-10, -3.5, 3.5, 10]) {
      const bollard = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.55, 8), rustSteelMat);
      bollard.position.set(bx, 0.58, -4.55);
      bollard.castShadow = true;
      portGrp.add(bollard);
    }

    // Old mossy stone breakwater arm curving out on the southwest (-X) side to shelter the bay
    const breakwater = new THREE.Mesh(new THREE.BoxGeometry(38.0, 5.2, 4.8), ishigakiMat);
    breakwater.position.set(-22.0, -2.0, -18.0);
    breakwater.rotation.y = 0.55;
    breakwater.castShadow = true;
    breakwater.receiveShadow = true;

    // Decayed timber pier stringers & pilings jutting out into the calm turquoise water (-Z)
    for (let p = 0; p < 6; p++) {
      const pz = -7.5 - p * 3.2;
      for (const px of [-2.2, 2.2]) {
        const pil = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.20, 8.6, 7), poleMat);
        pil.position.set(px, -3.6, pz);
        pil.castShadow = true;
        portGrp.add(pil);
      }
      if (p < 4) {
        // Surviving weathered pier deck planks near shore
        const deck = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.16, 2.8), woodStakeMat);
        deck.position.set(0, -0.08, pz);
        deck.rotation.z = (p % 2 === 0 ? 1 : -1) * 0.02;
        deck.receiveShadow = true;
        portGrp.add(deck);
      }
    }

    portGrp.add(quay, coping, breakwater);
    group.add(portGrp);
  }

  // =========================================================================
  // 7. SHOWA WOODEN UTILITY POLES (木製電柱) & SAGGING WIRES ALONG HILLSIDE ROADS
  // =========================================================================
  const poleGeo = new THREE.CylinderGeometry(0.11, 0.17, 8.8, 6);
  poleGeo.translate(0, 4.4, 0);
  const armGeo = new THREE.BoxGeometry(1.75, 0.11, 0.11);

  const wireRoadIds = new Set(['road_village_mid', 'road_village_low', 'road_village_high']);
  for (const path of GRADED_PATHS) {
    if (!wireRoadIds.has(path.id)) continue;
    const anchorsA: THREE.Vector3[] = [];
    const anchorsB: THREE.Vector3[] = [];
    for (let i = 0; i < path.points.length; i++) {
      const [rx, rz] = path.points[i];
      const next = path.points[Math.min(i + 1, path.points.length - 1)];
      const prev = path.points[Math.max(i - 1, 0)];
      const dx = next[0] - prev[0];
      const dz = next[1] - prev[1];
      const len = Math.hypot(dx, dz) || 1;
      const sideX = (-dz / len) * 3.4;
      const sideZ = (dx / len) * 3.4;
      const px = rx + sideX;
      const pz = rz + sideZ;
      const py = getTerrainHeight(px, pz) - 0.35;
      const yaw = Math.atan2(dx, dz);

      const pGrp = new THREE.Group();
      pGrp.position.set(px, py, pz);
      pGrp.rotation.y = yaw;
      pGrp.rotation.z = ((i % 3) - 1) * 0.03;

      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.castShadow = true;
      const arm1 = new THREE.Mesh(armGeo, rustSteelMat);
      arm1.position.y = 8.0;
      const arm2 = new THREE.Mesh(armGeo, rustSteelMat);
      arm2.position.y = 7.3;
      pGrp.add(pole, arm1, arm2);
      group.add(pGrp);

      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      anchorsA.push(new THREE.Vector3(px - 0.72 * cosY, py + 8.05, pz + 0.72 * sinY));
      anchorsB.push(new THREE.Vector3(px + 0.72 * cosY, py + 8.05, pz - 0.72 * sinY));
    }

    for (const anchors of [anchorsA, anchorsB]) {
      for (let i = 0; i < anchors.length - 1; i++) {
        const a = anchors[i];
        const b = anchors[i + 1];
        const dist = a.distanceTo(b);
        if (dist > 220) continue;
        const sag = Math.min(3.5, dist * 0.028);
        const pts: THREE.Vector3[] = [];
        for (let s = 0; s <= 8; s++) {
          const t = s / 8;
          const p = new THREE.Vector3().lerpVectors(a, b, t);
          p.y -= 4 * t * (1 - t) * sag;
          pts.push(p);
        }
        group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), wireMat));
      }
    }
  }

  // =========================================================================
  // 8. LOOKOUT BEND LANDMARKS (見晴らし坂 — image.png homage!)
  //    Mossy gravestones, stone lantern & weathered hillside guardrails
  // =========================================================================
  const gx = LOOKOUT_POINT.x + 8.5;
  const gz = LOOKOUT_POINT.z + 10.0;
  const gy = getTerrainHeight(gx, gz);
  const graveWall = new THREE.Mesh(new THREE.BoxGeometry(7.6, 1.4, 0.72), ishigakiMat);
  graveWall.position.set(gx, gy + 0.35, gz);
  graveWall.rotation.y = -0.35;
  group.add(graveWall);

  for (const [ox, oz, w, h] of [[-2.0, -1.2, 0.52, 1.48], [-0.7, -1.7, 0.42, 1.18], [0.6, -2.2, 0.48, 1.34]]) {
    const tx = gx + ox;
    const tz = gz + oz;
    const ty = getTerrainHeight(tx, tz);
    const stele = new THREE.Mesh(new THREE.BoxGeometry(w, h, w * 0.72), ishigakiMat);
    stele.position.set(tx, ty + h * 0.5, tz);
    stele.rotation.y = -0.35;
    stele.castShadow = true;
    group.add(stele);
  }
  // Stone lantern (石灯籠)
  const lx = gx + 2.4;
  const lz = gz - 2.9;
  const ly = getTerrainHeight(lx, lz);
  const lanPed = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.34, 0.85, 6), ishigakiMat);
  lanPed.position.set(lx, ly + 0.42, lz);
  const lanBox = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.42, 0.46), ishigakiMat);
  lanBox.position.set(lx, ly + 1.05, lz);
  const lanRoof = new THREE.Mesh(new THREE.ConeGeometry(0.58, 0.36, 4), ishigakiMat);
  lanRoof.position.set(lx, ly + 1.42, lz);
  lanRoof.rotation.y = Math.PI / 4;
  group.add(lanPed, lanBox, lanRoof);

  // Rusted roadside guardrails along steep drops of Middle Main Hillside Road
  const midRoad = GRADED_PATHS.find((p) => p.id === 'road_village_mid');
  if (midRoad) {
    for (let i = 1; i < midRoad.points.length - 2; i += 2) {
      const [ax, az] = midRoad.points[i];
      const [bx, bz] = midRoad.points[i + 1];
      const dx = bx - ax;
      const dz = bz - az;
      const len = Math.hypot(dx, dz) || 1;
      // Place guardrail on downhill (-X) roadside edge
      const offX = -2.8;
      const steps = Math.max(3, Math.floor(len / 8));
      for (let s = 0; s < steps; s++) {
        const t0 = s / steps;
        const t1 = (s + 1) / steps;
        const x0 = ax + dx * t0 + offX;
        const z0 = az + dz * t0;
        const x1 = ax + dx * t1 + offX;
        const z1 = az + dz * t1;
        const y0 = getTerrainHeight(x0, z0);
        const y1 = getTerrainHeight(x1, z1);
        const segLen = Math.hypot(x1 - x0, z1 - z0);
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.95, 5), rustSteelMat);
        post.position.set(x0, y0 + 0.45, z0);
        const beam = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.28, segLen + 0.08), guardrailMat);
        beam.position.set((x0 + x1) * 0.5, (y0 + y1) * 0.5 + 0.72, (z0 + z1) * 0.5);
        beam.rotation.y = Math.atan2(x1 - x0, z1 - z0);
        beam.rotation.x = -Math.atan2(y1 - y0, segLen);
        group.add(post, beam);
      }
    }
  }

  // =========================================================================
  // 9. KUROISO GORGE MOUNTAIN STREAM WATER RIBBON
  // =========================================================================
  const sVerts: number[] = [];
  const sIdx: number[] = [];
  let sCount = 0;
  for (let z = -760; z <= 2140; z += 18) {
    const cx = getStreamCenterX(z);
    const halfW = 3.8 + (z > 1400 ? (z - 1400) * 0.006 : 0);
    const y = getTerrainHeight(cx, z) + 0.55;
    sVerts.push(cx - halfW, y, z, cx + halfW, y, z);
    if (sCount > 0) {
      const b = (sCount - 1) * 2;
      sIdx.push(b, b + 2, b + 1, b + 1, b + 2, b + 3);
    }
    sCount++;
  }
  const streamGeo = new THREE.BufferGeometry();
  streamGeo.setAttribute('position', new THREE.Float32BufferAttribute(sVerts, 3));
  streamGeo.setIndex(sIdx);
  streamGeo.computeVertexNormals();
  const streamMesh = new THREE.Mesh(
    streamGeo,
    new THREE.MeshStandardMaterial({ color: 0x3b6e78, roughness: 0.14, metalness: 0.22, transparent: true, opacity: 0.78 })
  );
  group.add(streamMesh);

  // =========================================================================
  // 10. DRIFTWOOD COVE (漂着浜) — Protagonist Wake-up Beach Details
  // =========================================================================
  const driftLogs: Array<[number, number, number, number, number]> = [
    [SPAWN_POINT.x - 8, SPAWN_POINT.z - 5, 4.4, 0.26, 0.42],
    [SPAWN_POINT.x + 9, SPAWN_POINT.z - 3, 5.1, 0.30, -0.68],
    [SPAWN_POINT.x - 16, SPAWN_POINT.z - 11, 5.6, 0.32, 1.12],
    [SPAWN_POINT.x + 18, SPAWN_POINT.z - 9, 3.8, 0.22, 2.05],
    [SPAWN_POINT.x + 2, SPAWN_POINT.z + 7, 3.2, 0.18, -1.25],
    [SPAWN_POINT.x - 24, SPAWN_POINT.z + 2, 4.5, 0.28, -0.32],
  ];
  for (const [dx, dz, len, rad, rot] of driftLogs) {
    const dy = getTerrainHeight(dx, dz);
    const log = new THREE.Mesh(new THREE.CylinderGeometry(rad * 0.74, rad, len, 7), driftwoodMat);
    log.position.set(dx, dy + rad * 0.55, dz);
    log.rotation.set(Math.PI / 2 - 0.05, rot, 0.06);
    log.castShadow = true;
    log.receiveShadow = true;
    group.add(log);
  }
  // Natural half-buried wet tide boulders & weathered driftwood boards along the surf line
  for (let i = 0; i < 14; i++) {
    const sx = SPAWN_POINT.x - 36 + i * 5.6;
    const sz = SPAWN_POINT.z + 9 + Math.sin(i * 1.9) * 4.5;
    const sy = getTerrainHeight(sx, sz);
    if (sy < 0.25 || sy > 3.2) continue;
    if (i % 3 === 0) {
      // Half-buried weathered wooden boat plank washed ashore
      const plank = new THREE.Mesh(new THREE.BoxGeometry(2.1 + (i % 2) * 0.7, 0.09, 0.32), driftwoodMat);
      plank.position.set(sx, sy + 0.02, sz);
      plank.rotation.set(0.05, i * 0.85, -0.04);
      plank.castShadow = true;
      plank.receiveShadow = true;
      group.add(plank);
    } else {
      // Half-buried rounded seaweed/barnacle tide stone
      const r = 0.55 + (i % 4) * 0.22;
      const rock = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), i % 2 === 0 ? seaweedMat : barnacleMat);
      rock.scale.set(1.4, 0.42, 1.15);
      rock.position.set(sx, sy - r * 0.14, sz);
      rock.rotation.set(0.12 * i, i * 1.1, 0.08);
      rock.receiveShadow = true;
      group.add(rock);
    }
  }
  for (const [rx, rz, rs] of [
    [SPAWN_POINT.x - 56, SPAWN_POINT.z + 16, 4.8],
    [SPAWN_POINT.x - 72, SPAWN_POINT.z + 28, 6.8],
    [SPAWN_POINT.x + 62, SPAWN_POINT.z + 14, 5.2],
    [SPAWN_POINT.x + 78, SPAWN_POINT.z + 28, 7.2],
  ]) {
    const ry = getTerrainHeight(rx, rz);
    const rk = new THREE.Mesh(new THREE.DodecahedronGeometry(rs, 1), barnacleMat);
    rk.scale.set(1.25, 0.72, 1.05);
    rk.position.set(rx, ry + rs * 0.22, rz);
    rk.castShadow = true;
    rk.receiveShadow = true;
    group.add(rk);
  }

  return group;
}
