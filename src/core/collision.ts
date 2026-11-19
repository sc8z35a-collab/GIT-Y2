import * as THREE from 'three';
import { BuiltStructure, LocalBoxCollider, LocalWalkSurface } from './types';
import { getTerrainHeight, TERRAIN_EXTENT_X, TERRAIN_EXTENT_Z } from '../world/terrainMath';

export interface PlayerMoveResult {
  position: THREE.Vector3;
  grounded: boolean;
  insideStructure: BuiltStructure | null;
}

const PLAYER_RADIUS = 0.36;
const PLAYER_HEIGHT = 1.72;
const MAX_STEP_UP = 0.58;

function evaluateWalkSurfaceY(s: LocalWalkSurface, lx: number, lz: number): number {
  if (!s.slopeAxis || s.slopeAxis === 'none' || s.yMin === s.yMax) {
    return s.yMax;
  }
  if (s.slopeAxis === 'x') {
    const span = Math.max(0.001, s.maxX - s.minX);
    const t = Math.max(0, Math.min(1, (lx - s.minX) / span));
    return s.slopeDir === -1 ? s.yMax - (s.yMax - s.yMin) * t : s.yMin + (s.yMax - s.yMin) * t;
  }
  const span = Math.max(0.001, s.maxZ - s.minZ);
  const t = Math.max(0, Math.min(1, (lz - s.minZ) / span));
  return s.slopeDir === -1 ? s.yMax - (s.yMax - s.yMin) * t : s.yMin + (s.yMax - s.yMin) * t;
}

/**
 * Spatial collision & multi-story walkable surface solver supporting:
 * - Exact continuous 1km x 3km terrain height
 * - Rotated local-space OBB wall sliding inside all 25 houses & 2 commercial shops
 * - Smooth stairs, raised engawas, 2nd floors, and sunken stone cellars
 * - Underground cave floor override inside the 1890 Coal Mine
 */
export class WorldCollision {
  private structures: BuiltStructure[] = [];

  public registerStructures(list: BuiltStructure[]): void {
    this.structures = list;
  }

  public getStructures(): BuiltStructure[] {
    return this.structures;
  }

  /** Transform world point into structure's local space (exact inverse of Three.js rotation.y = s.yaw) */
  private worldToLocal(s: BuiltStructure, wx: number, wy: number, wz: number): [number, number, number] {
    const dx = wx - s.position.x;
    const dy = wy - s.position.y;
    const dz = wz - s.position.z;
    const c = Math.cos(s.yaw);
    const sn = Math.sin(s.yaw);
    return [dx * c - dz * sn, dy, dx * sn + dz * c];
  }

  /** Transform local horizontal push delta back to world XZ (matches Three.js rotation.y = s.yaw) */
  private localDeltaToWorld(s: BuiltStructure, dlx: number, dlz: number): [number, number] {
    const c = Math.cos(s.yaw);
    const sn = Math.sin(s.yaw);
    return [dlx * c + dlz * sn, -dlx * sn + dlz * c];
  }

  private isInsideLocalBox(b: LocalBoxCollider, lx: number, ly: number, lz: number): boolean {
    return (
      lx >= b.minX && lx <= b.maxX &&
      ly >= b.minY && ly <= b.maxY &&
      lz >= b.minZ && lz <= b.maxZ
    );
  }

  /**
   * Resolves horizontal sliding collisions against nearby structures, then computes
   * exact supporting floor height (terrain OR structure floor/stairs OR coal mine floor).
   */
  public resolveMove(
    currentFeet: THREE.Vector3,
    targetFeet: THREE.Vector3,
    velocityY: number,
    dt: number,
    playerHeight = PLAYER_HEIGHT
  ): PlayerMoveResult {
    let wx = Math.max(-TERRAIN_EXTENT_X + 12, Math.min(TERRAIN_EXTENT_X - 12, targetFeet.x));
    let wz = Math.max(-TERRAIN_EXTENT_Z + 12, Math.min(TERRAIN_EXTENT_Z - 12, targetFeet.z));
    let wy = currentFeet.y + velocityY * dt;

    // Collect structures whose world bounding box is near player
    const nearby: BuiltStructure[] = [];
    for (let i = 0; i < this.structures.length; i++) {
      const s = this.structures[i];
      const b = s.worldBounds;
      if (
        wx >= b.min.x - 2.0 && wx <= b.max.x + 2.0 &&
        wz >= b.min.z - 2.0 && wz <= b.max.z + 2.0
      ) {
        nearby.push(s);
      }
    }

    // 1. Horizontal circle-vs-OBB wall sliding (2 iterations for clean corner sliding)
    for (let iter = 0; iter < 2; iter++) {
      for (let i = 0; i < nearby.length; i++) {
        const s = nearby[i];
        const [lx, ly, lz] = this.worldToLocal(s, wx, currentFeet.y, wz);
        const footCheckMinY = ly + MAX_STEP_UP;
        const headCheckMaxY = ly + playerHeight - 0.12;

        for (let c = 0; c < s.colliders.length; c++) {
          const box = s.colliders[c];
          if (box.maxY <= footCheckMinY || box.minY >= headCheckMaxY) continue;

          // Closest point in XZ on box
          const cx = Math.max(box.minX, Math.min(box.maxX, lx));
          const cz = Math.max(box.minZ, Math.min(box.maxZ, lz));
          const dx = lx - cx;
          const dz = lz - cz;
          const distSq = dx * dx + dz * dz;

          if (distSq < PLAYER_RADIUS * PLAYER_RADIUS) {
            let pushX = 0;
            let pushZ = 0;
            if (distSq > 1e-8) {
              const dist = Math.sqrt(distSq);
              const pen = PLAYER_RADIUS - dist;
              pushX = (dx / dist) * pen;
              pushZ = (dz / dist) * pen;
            } else {
              // Inside box center — push out along shallowest axis
              const penLeft = lx - box.minX + PLAYER_RADIUS;
              const penRight = box.maxX - lx + PLAYER_RADIUS;
              const penBack = lz - box.minZ + PLAYER_RADIUS;
              const penFront = box.maxZ - lz + PLAYER_RADIUS;
              const minPen = Math.min(penLeft, penRight, penBack, penFront);
              if (minPen === penLeft) pushX = -penLeft;
              else if (minPen === penRight) pushX = penRight;
              else if (minPen === penBack) pushZ = -penBack;
              else pushZ = penFront;
            }
            const [dwx, dwz] = this.localDeltaToWorld(s, pushX, pushZ);
            wx += dwx;
            wz += dwz;
          }
        }
      }
    }

    // 2. Determine if player is inside an underground cave override volume (e.g. 1890 Coal Mine)
    let suppressTerrain = false;
    let insideStructure: BuiltStructure | null = null;
    for (let i = 0; i < nearby.length; i++) {
      const s = nearby[i];
      const [lx, ly, lz] = this.worldToLocal(s, wx, currentFeet.y, wz);
      if (s.caveOverrides) {
        for (let k = 0; k < s.caveOverrides.length; k++) {
          if (this.isInsideLocalBox(s.caveOverrides[k], lx, ly + 0.8, lz)) {
            suppressTerrain = true;
            insideStructure = s;
            break;
          }
        }
      }
    }

    // 3. Evaluate supporting floor height (terrain + walkable structure floors/stairs)
    let supportY = suppressTerrain ? -999 : Math.max(0.25, getTerrainHeight(wx, wz));
    let ceilingY = Infinity;

    for (let i = 0; i < nearby.length; i++) {
      const s = nearby[i];
      const [lx, ly, lz] = this.worldToLocal(s, wx, currentFeet.y, wz);

      // Track if player is within this building's footprint
      if (
        !insideStructure &&
        wx >= s.worldBounds.min.x && wx <= s.worldBounds.max.x &&
        wz >= s.worldBounds.min.z && wz <= s.worldBounds.max.z &&
        currentFeet.y >= s.worldBounds.min.y - 0.5 && currentFeet.y <= s.worldBounds.max.y + 1.0
      ) {
        insideStructure = s;
      }

      // Check walkable slabs & stairs
      for (let w = 0; w < s.walkSurfaces.length; w++) {
        const surf = s.walkSurfaces[w];
        if (lx >= surf.minX - 0.12 && lx <= surf.maxX + 0.12 && lz >= surf.minZ - 0.12 && lz <= surf.maxZ + 0.12) {
          const localSurfY = evaluateWalkSurfaceY(surf, lx, lz);
          const worldSurfY = s.position.y + localSurfY;
          // Only step onto floors within step-up reach (prevents snapping to 2F from 1F!)
          if (worldSurfY <= currentFeet.y + MAX_STEP_UP && worldSurfY > supportY) {
            supportY = worldSurfY;
          }
        }
      }

      // Ceiling collision so player doesn't jump through floors/cave roofs
      for (let c = 0; c < s.colliders.length; c++) {
        const box = s.colliders[c];
        if (lx >= box.minX - 0.1 && lx <= box.maxX + 0.1 && lz >= box.minZ - 0.1 && lz <= box.maxZ + 0.1) {
          const worldMinY = s.position.y + box.minY;
          if (worldMinY >= currentFeet.y + playerHeight * 0.65 && worldMinY < ceilingY) {
            ceilingY = worldMinY;
          }
        }
      }
    }

    if (suppressTerrain && supportY < -500) {
      // Fallback safety floor inside cave
      supportY = currentFeet.y;
    }

    // Clamp ceiling head bump
    if (wy + playerHeight > ceilingY) {
      wy = ceilingY - playerHeight;
    }

    let grounded = false;
    if (wy <= supportY) {
      wy = supportY;
      grounded = true;
    } else if (velocityY <= 0 && wy - supportY < 0.28 && currentFeet.y - supportY < 0.55) {
      // Smoothly stick to downhill slopes & descending staircases
      wy = supportY;
      grounded = true;
    }

    return {
      position: new THREE.Vector3(wx, wy, wz),
      grounded,
      insideStructure,
    };
  }
}
