import * as THREE from 'three';
import { WorldCollision } from '../core/collision';
import type { BuiltStructure } from '../core/types';
import { SPAWN_POINT, getTerrainHeight } from '../world/terrainMath';

export interface ControllerState {
  position: THREE.Vector3;
  yaw: number;
  pitch: number;
  grounded: boolean;
  sprinting: boolean;
  crouching: boolean;
  inIntro: boolean;
  insideStructure: BuiltStructure | null;
}

const EYE_STAND = 1.68;
const EYE_CROUCH = 1.06;
const WALK_SPEED = 5.8;
const SPRINT_SPEED = 14.5;
const CROUCH_SPEED = 3.1;
const JUMP_SPEED = 8.4;
const GRAVITY = 22.0;

/**
 * First-person exploration controller tailored for both:
 * - Mobile landscape fullscreen dual-touch (virtual thumbstick + auto-sprint ring + right-side look drag + jump/crouch)
 * - Desktop WASD + Mouse PointerLock (or drag-look fallback) + Shift sprint + Space jump + C crouch
 * Includes the Driftwood Cove beach wake-up sequence looking out at the isolated ocean & cliffs.
 */
export class FirstPersonController {
  public readonly position = new THREE.Vector3();
  public yaw = SPAWN_POINT.yaw;
  public pitch = -0.05;
  public grounded = true;
  public sprinting = false;
  public crouching = false;
  public inIntro = true;
  public insideStructure: BuiltStructure | null = null;

  private readonly camera: THREE.PerspectiveCamera;
  private readonly domElement: HTMLElement;
  private readonly collision: WorldCollision;

  private velocityY = 0;
  private eyeOffset = EYE_STAND;
  private bobPhase = 0;
  private bobAmount = 0;
  private introProgress = 0;
  private introRising = false;
  private inputLocked = false;

  // Keyboard state
  private readonly keys = new Set<string>();
  private pointerLocked = false;
  private mouseDragging = false;
  private lastMouseX = 0;
  private lastMouseY = 0;

  // Mobile virtual input state (updated externally by HUD touch controls)
  private touchMoveX = 0;
  private touchMoveY = 0;
  private touchSprint = false;
  private touchJumpQueued = false;

  private readonly onKeyDownBound: (e: KeyboardEvent) => void;
  private readonly onKeyUpBound: (e: KeyboardEvent) => void;
  private readonly onMouseMoveBound: (e: MouseEvent) => void;
  private readonly onMouseDownBound: (e: MouseEvent) => void;
  private readonly onMouseUpBound: () => void;
  private readonly onPointerLockChangeBound: () => void;

  constructor(
    camera: THREE.PerspectiveCamera,
    domElement: HTMLElement,
    collision: WorldCollision,
    skipIntro = false
  ) {
    this.camera = camera;
    this.domElement = domElement;
    this.collision = collision;

    const spawnY = Math.max(0.35, getTerrainHeight(SPAWN_POINT.x, SPAWN_POINT.z));
    this.position.set(SPAWN_POINT.x, spawnY, SPAWN_POINT.z);
    this.yaw = SPAWN_POINT.yaw;
    this.pitch = 0.04;

    if (skipIntro) {
      this.inIntro = false;
      this.introProgress = 1;
      this.eyeOffset = EYE_STAND;
    } else {
      this.inIntro = true;
      this.introProgress = 0;
      this.eyeOffset = 0.34;
    }

    this.onKeyDownBound = (e) => {
      if (e.code === 'Space' && this.grounded && !this.inIntro && !this.inputLocked) {
        this.velocityY = JUMP_SPEED;
        this.grounded = false;
      }
      if (e.code === 'KeyC') {
        this.crouching = !this.crouching;
      }
      this.keys.add(e.code);
    };
    this.onKeyUpBound = (e) => {
      this.keys.delete(e.code);
    };
    this.onMouseMoveBound = (e) => {
      if (this.inIntro || this.inputLocked) return;
      if (this.pointerLocked) {
        this.applyLookDelta(e.movementX, e.movementY, 0.0021);
      } else if (this.mouseDragging) {
        const dx = e.clientX - this.lastMouseX;
        const dy = e.clientY - this.lastMouseY;
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
        this.applyLookDelta(dx, dy, 0.0032);
      }
    };
    this.onMouseDownBound = (e) => {
      if (this.inIntro || this.inputLocked) return;
      if (e.button === 0) {
        this.mouseDragging = true;
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
        if (!this.pointerLocked && document.pointerLockElement !== this.domElement) {
          try {
            this.domElement.requestPointerLock?.();
          } catch {
            // Drag-look fallback handles environments without Pointer Lock
          }
        }
      }
    };
    this.onMouseUpBound = () => {
      this.mouseDragging = false;
    };
    this.onPointerLockChangeBound = () => {
      this.pointerLocked = document.pointerLockElement === this.domElement;
    };

    window.addEventListener('keydown', this.onKeyDownBound);
    window.addEventListener('keyup', this.onKeyUpBound);
    window.addEventListener('mousemove', this.onMouseMoveBound);
    this.domElement.addEventListener('mousedown', this.onMouseDownBound);
    window.addEventListener('mouseup', this.onMouseUpBound);
    document.addEventListener('pointerlockchange', this.onPointerLockChangeBound);

    this.syncCamera(0);
  }

  public setModalOpen(open: boolean): void {
    this.inputLocked = open;
    if (open && document.pointerLockElement === this.domElement) {
      document.exitPointerLock?.();
    }
    if (open) {
      this.keys.clear();
      this.touchMoveX = 0;
      this.touchMoveY = 0;
      this.touchSprint = false;
    }
  }

  public beginWakeUp(): void {
    if (!this.inIntro) return;
    this.introRising = true;
  }

  public skipIntroImmediately(): void {
    this.inIntro = false;
    this.introRising = false;
    this.introProgress = 1;
    this.eyeOffset = EYE_STAND;
    this.syncCamera(0);
  }

  public setTouchMove(nx: number, ny: number, sprint: boolean): void {
    this.touchMoveX = nx;
    this.touchMoveY = ny;
    this.touchSprint = sprint;
  }

  public triggerTouchJump(): void {
    if (!this.inIntro && !this.inputLocked) {
      this.touchJumpQueued = true;
    }
  }

  public toggleCrouch(): boolean {
    this.crouching = !this.crouching;
    return this.crouching;
  }

  public applyLookDelta(dx: number, dy: number, sensitivity = 0.0036): void {
    if (this.inIntro || this.inputLocked) return;
    this.yaw -= dx * sensitivity;
    this.pitch = Math.max(-1.42, Math.min(1.42, this.pitch - dy * sensitivity));
  }

  public teleport(x: number, z: number, yaw?: number, pitch = -0.06, yOverride?: number): void {
    const h = yOverride !== undefined ? yOverride : Math.max(0.35, getTerrainHeight(x, z));
    this.position.set(x, h, z);
    this.velocityY = 0;
    this.grounded = true;
    this.inIntro = false;
    this.introProgress = 1;
    this.eyeOffset = this.crouching ? EYE_CROUCH : EYE_STAND;
    if (yaw !== undefined) this.yaw = yaw;
    this.pitch = pitch;
    this.syncCamera(0);
  }

  public update(dt: number): ControllerState {
    const stepDt = Math.min(dt, 0.05);

    // 1. Driftwood Cove wake-up animation
    if (this.inIntro) {
      if (this.introRising) {
        this.introProgress = Math.min(1, this.introProgress + stepDt / 2.2);
        const ease = this.introProgress * this.introProgress * (3 - 2 * this.introProgress);
        this.eyeOffset = 0.34 + (EYE_STAND - 0.34) * ease;
        // Gently turn from endless sea south-east toward the island mountains north
        this.yaw = SPAWN_POINT.yaw + (1 - ease) * 2.15;
        this.pitch = -0.02 + Math.sin(ease * Math.PI) * 0.14;
        if (this.introProgress >= 1) {
          this.inIntro = false;
          this.eyeOffset = EYE_STAND;
          this.yaw = SPAWN_POINT.yaw;
          this.pitch = 0.04;
        }
      } else {
        // Gentle breathing sway lying on Driftwood Cove sand looking out at sea
        const t = performance.now() * 0.001;
        this.eyeOffset = 0.34 + Math.sin(t * 1.4) * 0.015;
        this.yaw = SPAWN_POINT.yaw + 2.15 + Math.sin(t * 0.4) * 0.06;
        this.pitch = 0.08 + Math.cos(t * 0.55) * 0.02;
      }
      this.syncCamera(this.inIntro && !this.introRising ? 0.16 : 0);
      return this.getState();
    }

    // 2. Gather movement intent (keyboard + mobile touch)
    let moveForward = 0;
    let moveRight = 0;

    if (!this.inputLocked) {
      if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) moveForward += 1;
      if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) moveForward -= 1;
      if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) moveRight += 1;
      if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) moveRight -= 1;

      moveForward += -this.touchMoveY;
      moveRight += this.touchMoveX;
    }

    const inputLen = Math.hypot(moveForward, moveRight);
    if (inputLen > 1) {
      moveForward /= inputLen;
      moveRight /= inputLen;
    }

    if (this.touchJumpQueued) {
      this.touchJumpQueued = false;
      if (this.grounded) {
        this.velocityY = JUMP_SPEED;
        this.grounded = false;
      }
    }

    const wantSprint =
      !this.crouching &&
      inputLen > 0.15 &&
      (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') || this.touchSprint);
    this.sprinting = wantSprint;

    const moveSpeed = this.crouching ? CROUCH_SPEED : wantSprint ? SPRINT_SPEED : WALK_SPEED;

    // Three.js camera forward vector for yaw: (-sin(yaw), 0, -cos(yaw))
    const sinY = Math.sin(this.yaw);
    const cosY = Math.cos(this.yaw);
    const fwdX = -sinY;
    const fwdZ = -cosY;
    const rightX = cosY;
    const rightZ = -sinY;

    const dx = (fwdX * moveForward + rightX * moveRight) * moveSpeed * stepDt;
    const dz = (fwdZ * moveForward + rightZ * moveRight) * moveSpeed * stepDt;

    const targetX = this.position.x + dx;
    const targetZ = this.position.z + dz;

    // Gentle shallow-water coastal boundary: allow ankle-deep wading on beaches & port, block deep ocean
    const nextTerrainY = getTerrainHeight(targetX, targetZ);
    let safeX = targetX;
    let safeZ = targetZ;
    if (nextTerrainY < -0.35) {
      // Slide along coastline if stepping into deep ocean
      if (getTerrainHeight(targetX, this.position.z) >= -0.35) {
        safeZ = this.position.z;
      } else if (getTerrainHeight(this.position.x, targetZ) >= -0.35) {
        safeX = this.position.x;
      } else {
        safeX = this.position.x;
        safeZ = this.position.z;
      }
    }

    // Apply gravity
    this.velocityY -= GRAVITY * stepDt;

    // Resolve against terrain + any registered structures
    const res = this.collision.resolveMove(
      this.position,
      new THREE.Vector3(safeX, this.position.y, safeZ),
      this.velocityY,
      stepDt,
      this.crouching ? 1.25 : 1.72
    );

    this.position.copy(res.position);
    this.grounded = res.grounded;
    this.insideStructure = res.insideStructure;
    if (this.grounded && this.velocityY < 0) {
      this.velocityY = 0;
    }

    // Smooth crouch height & natural walking head-bob
    const targetEye = this.crouching ? EYE_CROUCH : EYE_STAND;
    this.eyeOffset += (targetEye - this.eyeOffset) * Math.min(1, stepDt * 12);

    const horizSpeed = Math.hypot(dx, dz) / Math.max(stepDt, 0.001);
    if (this.grounded && horizSpeed > 0.4) {
      const freq = wantSprint ? 11.5 : 7.6;
      this.bobPhase += stepDt * freq;
      const targetBob = wantSprint ? 0.052 : 0.032;
      this.bobAmount += (targetBob - this.bobAmount) * Math.min(1, stepDt * 10);
    } else {
      this.bobAmount *= Math.max(0, 1 - stepDt * 10);
    }

    this.syncCamera(0);
    return this.getState();
  }

  private syncCamera(rollRad: number): void {
    const bobY = Math.sin(this.bobPhase) * this.bobAmount;
    const bobX = Math.cos(this.bobPhase * 0.5) * this.bobAmount * 0.45;
    this.camera.position.set(
      this.position.x + Math.cos(this.yaw) * bobX,
      this.position.y + this.eyeOffset + bobY,
      this.position.z - Math.sin(this.yaw) * bobX
    );
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;
    this.camera.rotation.z = rollRad;
  }

  private getState(): ControllerState {
    return {
      position: this.position,
      yaw: this.yaw,
      pitch: this.pitch,
      grounded: this.grounded,
      sprinting: this.sprinting,
      crouching: this.crouching,
      inIntro: this.inIntro,
      insideStructure: this.insideStructure,
    };
  }

  public dispose(): void {
    window.removeEventListener('keydown', this.onKeyDownBound);
    window.removeEventListener('keyup', this.onKeyUpBound);
    window.removeEventListener('mousemove', this.onMouseMoveBound);
    this.domElement.removeEventListener('mousedown', this.onMouseDownBound);
    window.removeEventListener('mouseup', this.onMouseUpBound);
    document.removeEventListener('pointerlockchange', this.onPointerLockChangeBound);
  }
}
