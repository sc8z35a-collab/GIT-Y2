import * as THREE from 'three';

/**
 * Axis-aligned collider defined in a structure's LOCAL coordinate space.
 * The collision solver transforms player coordinates into the structure's
 * local space (inverse translation + inverse Y rotation), allowing rotated
 * doorways, narrow corridors, and multi-story interiors to collide cleanly.
 */
export interface LocalBoxCollider {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  minZ: number;
  maxZ: number;
}

/**
 * Walkable floor deck or stair/ramp surface in a structure's LOCAL space.
 * - For flat floors: yMin === yMax.
 * - For stairs/ramps along X: slopeDir = 1 means y rises from minX(yMin) -> maxX(yMax);
 *   slopeDir = -1 means y rises from maxX(yMin) -> minX(yMax).
 * - For stairs/ramps along Z: slopeDir = 1 means y rises from minZ(yMin) -> maxZ(yMax);
 *   slopeDir = -1 means y rises from maxZ(yMin) -> minZ(yMax).
 */
export interface LocalWalkSurface {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  yMin: number;
  yMax: number;
  slopeAxis?: 'none' | 'x' | 'z';
  slopeDir?: 1 | -1;
}

export interface BuiltStructure {
  id: string;
  name: string;
  subtitle: string;
  category: 'house' | 'commercial' | 'port' | 'mine';
  builtYear: number;
  abandonedYear: number;
  position: THREE.Vector3;
  yaw: number;
  group: THREE.Group;
  interiorGroup?: THREE.Group;
  colliders: LocalBoxCollider[];
  walkSurfaces: LocalWalkSurface[];
  /** Local volumes where the terrain heightfield is bypassed (e.g., underground coal mine). */
  caveOverrides?: LocalBoxCollider[];
  /** Number of stories (2–4) and local Y elevations of each floor for accurate HUD floor readouts. */
  stories?: number;
  floorElevations?: number[];
  /** World-space vantage point just outside the primary entrance (used for map navigation). */
  entryPoint: { x: number; y: number; z: number; lookYaw?: number };
  worldBounds: THREE.Box3;
}

export type ResolutionPreset = 'HD' | 'FHD' | '1.5K';
export type FpsLimitMode = '120' | 'unlimited';

export interface GraphicsSettings {
  resolution: ResolutionPreset;
  fpsLimit: FpsLimitMode;
}

export interface TerraceSpec {
  id: string;
  name: string;
  x: number;
  z: number;
  y: number;
  radiusX: number;
  radiusZ: number;
  yaw: number;
  blendMargin: number;
}
