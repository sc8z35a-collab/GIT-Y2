import * as THREE from 'three';

export interface MaterialOptions {
  repeatX?: number;
  repeatY?: number;
  roughness?: number;
  metalness?: number;
  bumpScale?: number;
  doubleSide?: boolean;
  tint?: number;
  opacity?: number;
  transparent?: boolean;
  flatShading?: boolean;
}

/**
 * Loads and caches the 212 WebP texture tiles extracted from assets/textures/.
 * Every surface in the island terrain, 25 houses, 2 commercial facilities, and
 * 1890 coal mine draws from this shared texture/material store.
 */
export class TextureCatalog {
  private loader = new THREE.TextureLoader();
  private baseTextures = new Map<string, THREE.Texture>();
  private variantTextures = new Map<string, THREE.Texture>();
  private materials = new Map<string, THREE.MeshStandardMaterial>();
  private maxAnisotropy = 4;

  constructor(renderer?: THREE.WebGLRenderer) {
    if (renderer) {
      this.maxAnisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    }
  }

  public setAnisotropy(maxAnisotropy: number): void {
    this.maxAnisotropy = Math.min(8, maxAnisotropy);
  }

  public getTexture(tileName: string, repeatX = 1, repeatY = 1): THREE.Texture {
    const rx = Math.round(repeatX * 100) / 100;
    const ry = Math.round(repeatY * 100) / 100;
    const key = `${tileName}|${rx}|${ry}`;
    const existing = this.variantTextures.get(key);
    if (existing) return existing;

    let base = this.baseTextures.get(tileName);
    if (!base) {
      const baseDir =
        (typeof window !== 'undefined' &&
          (window as unknown as { __KUROISO_TEXTURE_BASE__?: string }).__KUROISO_TEXTURE_BASE__) ||
        './textures/tiles';
      base = this.loader.load(`${baseDir}/${tileName}.webp`);
      base.colorSpace = THREE.SRGBColorSpace;
      base.wrapS = THREE.RepeatWrapping;
      base.wrapT = THREE.RepeatWrapping;
      base.anisotropy = this.maxAnisotropy;
      base.generateMipmaps = true;
      base.minFilter = THREE.LinearMipmapLinearFilter;
      base.magFilter = THREE.LinearFilter;
      this.baseTextures.set(tileName, base);
    }

    if (rx === 1 && ry === 1) {
      this.variantTextures.set(key, base);
      return base;
    }

    const cloned = base.clone();
    cloned.needsUpdate = true;
    cloned.wrapS = THREE.RepeatWrapping;
    cloned.wrapT = THREE.RepeatWrapping;
    cloned.repeat.set(rx, ry);
    cloned.anisotropy = this.maxAnisotropy;
    cloned.colorSpace = THREE.SRGBColorSpace;
    this.variantTextures.set(key, cloned);
    return cloned;
  }

  public getMaterial(tileName: string, opts: MaterialOptions = {}): THREE.MeshStandardMaterial {
    const rx = opts.repeatX ?? 1;
    const ry = opts.repeatY ?? 1;
    const roughness = opts.roughness ?? 0.88;
    const metalness = opts.metalness ?? 0.04;
    const bumpScale = opts.bumpScale ?? 0.035;
    const doubleSide = opts.doubleSide ?? false;
    const tint = opts.tint ?? 0xffffff;
    const opacity = opts.opacity ?? 1.0;
    const transparent = opts.transparent ?? opacity < 0.99;
    const flatShading = opts.flatShading ?? false;

    const key = `${tileName}|${rx}|${ry}|${roughness}|${metalness}|${bumpScale}|${doubleSide ? 1 : 0}|${tint}|${opacity}|${flatShading ? 1 : 0}`;
    const cached = this.materials.get(key);
    if (cached) return cached;

    const tex = this.getTexture(tileName, rx, ry);
    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      bumpMap: bumpScale > 0 ? tex : null,
      bumpScale,
      roughness,
      metalness,
      color: tint,
      side: doubleSide ? THREE.DoubleSide : THREE.FrontSide,
      opacity,
      transparent,
      flatShading,
    });

    this.materials.set(key, mat);
    return mat;
  }
}
