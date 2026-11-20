import * as THREE from 'three';
import type { ShadowFlameMode } from './types';

let shaderPatched = false;

/**
 * Installs the proprietary Shadow Flame 1.0 GLSL kernels globally into Three.js's
 * ShaderChunk before materials compile, powering BOTH:
 * - Shadow Flame 1.0 Flash (NUM_DIR_LIGHT_SHADOWS == 1):
 *     Ultra-fast 6-tap IGN Blue-Noise Rotated Vogel Disk PCF (33% fewer taps than
 *     vanilla PCFSoft, zero boxy stair-stepping, smooth frustum fade & sky-bounce tint)
 * - Shadow Flame 1.0 Pro (NUM_DIR_LIGHT_SHADOWS >= 2):
 *     Dual-Cascade Hybrid Shadow Maps (Cascade 0: ±50m 4.8cm/texel + Cascade 1: ±245m),
 *     True SF-PCSS Physical Contact-Hardening Penumbra (8-tap IGN Blocker Search +
 *     early-out sunlit bypass + 16-tap Variable-Radius Vogel Disk PCF),
 *     SF-MicroContact Screen-Space Directional Self-Shadowing,
 *     SF-Horizon 3km×6km Mountain Relief Occlusion, and SF-Dual-Bounce Chromatic Shadows!
 */
export function installShadowFlameShaders(): void {
  if (shaderPatched) return;
  shaderPatched = true;

  // 1. Inject Shadow Flame 1.0 Flash & Pro sampling kernels into shadowmap_pars_fragment
  const origShadowPars = THREE.ShaderChunk.shadowmap_pars_fragment;
  const sfKernelLib = `
\t// =========================================================================
\t// SHADOW FLAME 1.0 — PROPRIETARY BLUE-NOISE VOGEL & PCSS DUAL-CASCADE KERNEL
\t// =========================================================================
\tfloat sfIGN( vec2 p ) {
\t\treturn fract( 52.9829189 * fract( dot( p, vec2( 0.06711056, 0.00583715 ) ) ) );
\t}

\tvec2 sfVogelDisk( int idx, int count, float phi ) {
\t\tfloat r = sqrt( ( float( idx ) + 0.5 ) / float( count ) );
\t\tfloat theta = float( idx ) * 2.39996323 + phi;
\t\treturn vec2( cos( theta ), sin( theta ) ) * r;
\t}

\t// Shadow Flame 1.0 Flash: Ultra-light 6-tap IGN-rotated Vogel Disk + smooth edge fade
\tfloat sfSampleFlash( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
\t\tvec3 sc = shadowCoord.xyz / shadowCoord.w;
\t\tsc.z += shadowBias;
\t\tbool inFrustum = sc.x >= 0.0 && sc.x <= 1.0 && sc.y >= 0.0 && sc.y <= 1.0 && sc.z <= 1.0;
\t\tif ( !inFrustum ) return 1.0;

\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;
\t\tfloat phi = sfIGN( gl_FragCoord.xy ) * 6.2831853;
\t\tvec2 diskScale = texelSize * max( shadowRadius, 1.35 );

\t\tfloat sum = 0.0;
\t\tfor ( int k = 0; k < 6; k ++ ) {
\t\t\tvec2 off = sfVogelDisk( k, 6, phi ) * diskScale;
\t\t\tsum += texture2DCompare( shadowMap, sc.xy + off, sc.z );
\t\t}
\t\tfloat sh = sum * ( 1.0 / 6.0 );
\t\tfloat edge = max( abs( sc.x - 0.5 ), abs( sc.y - 0.5 ) ) * 2.0;
\t\tsh = mix( sh, 1.0, smoothstep( 0.84, 1.0, edge ) );
\t\treturn mix( 1.0, sh, shadowIntensity );
\t}

\t// Shadow Flame 1.0 Pro — Cascade 1 (Far ±245m Landscape): 8-tap IGN-rotated Vogel Disk
\tfloat sfSampleFarCascade( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
\t\tvec3 sc = shadowCoord.xyz / shadowCoord.w;
\t\tsc.z += shadowBias;
\t\tbool inFrustum = sc.x >= 0.0 && sc.x <= 1.0 && sc.y >= 0.0 && sc.y <= 1.0 && sc.z <= 1.0;
\t\tif ( !inFrustum ) return 1.0;

\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;
\t\tfloat phi = sfIGN( gl_FragCoord.xy + vec2( 17.0, 31.0 ) ) * 6.2831853;
\t\tvec2 diskScale = texelSize * max( shadowRadius, 1.85 );

\t\tfloat sum = 0.0;
\t\tfor ( int k = 0; k < 8; k ++ ) {
\t\t\tvec2 off = sfVogelDisk( k, 8, phi ) * diskScale;
\t\t\tsum += texture2DCompare( shadowMap, sc.xy + off, sc.z );
\t\t}
\t\tfloat sh = sum * ( 1.0 / 8.0 );
\t\tfloat edge = max( abs( sc.x - 0.5 ), abs( sc.y - 0.5 ) ) * 2.0;
\t\tsh = mix( sh, 1.0, smoothstep( 0.82, 1.0, edge ) );
\t\treturn mix( 1.0, sh, shadowIntensity );
\t}

\t// Shadow Flame 1.0 Pro — Cascade 0 (Near ±50m Ultra-Sharp): True SF-PCSS Contact-Hardening Penumbra
\tfloat sfSampleProPCSS( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, vec4 shadowCoord ) {
\t\tvec3 sc = shadowCoord.xyz / shadowCoord.w;
\t\tsc.z += shadowBias;
\t\tbool inFrustum = sc.x >= 0.0 && sc.x <= 1.0 && sc.y >= 0.0 && sc.y <= 1.0 && sc.z <= 1.0;
\t\tif ( !inFrustum ) return 1.0;

\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;
\t\tfloat phi = sfIGN( gl_FragCoord.xy ) * 6.2831853;

\t\t// Stage A: 8-Tap IGN-Rotated Blocker Search (~0.45m physical light disk)
\t\tfloat blockerSum = 0.0;
\t\tfloat blockerCount = 0.0;
\t\tvec2 searchScale = texelSize * 9.5;
\t\tfor ( int k = 0; k < 8; k ++ ) {
\t\t\tvec2 off = sfVogelDisk( k, 8, phi ) * searchScale;
\t\t\tfloat d = unpackRGBAToDepth( texture2D( shadowMap, sc.xy + off ) );
\t\t\tif ( d < sc.z ) {
\t\t\t\tblockerSum += d;
\t\t\t\tblockerCount += 1.0;
\t\t\t}
\t\t}

\t\t// Early-out GPU acceleration: zero blockers means pixel is 100% sunlit!
\t\tif ( blockerCount < 0.5 ) return 1.0;

\t\t// Stage B: Exact physical contact-hardening penumbra radius (sharp at contact, soft from tall canopies!)
\t\tfloat avgBlocker = blockerSum / blockerCount;
\t\tfloat receiverDist = max( 0.0, sc.z - avgBlocker );
\t\tfloat penumbraTexels = clamp( 0.85 + receiverDist * 540.0, 0.85, 10.5 );

\t\t// Stage C: 16-Tap Golden-Angle Vogel Spiral Variable-Radius PCF
\t\tvec2 filterScale = texelSize * penumbraTexels;
\t\tfloat sum = 0.0;
\t\tfloat phi2 = phi + 1.17;
\t\tfor ( int k = 0; k < 16; k ++ ) {
\t\t\tvec2 off = sfVogelDisk( k, 16, phi2 ) * filterScale;
\t\t\tsum += texture2DCompare( shadowMap, sc.xy + off, sc.z );
\t\t}
\t\tfloat sh = sum * ( 1.0 / 16.0 );
\t\treturn mix( 1.0, sh, shadowIntensity );
\t}

\t// Shadow Flame 1.0 Pro — Seamless IGN-Dithered Dual-Cascade Cross-Fade (Cascade 0 ±50m <-> Cascade 1 ±245m)
\tfloat sfGetDualCascadeShadow(
\t\tsampler2D map0, vec2 size0, float inten0, float bias0, vec4 coord0,
\t\tsampler2D map1, vec2 size1, float inten1, float bias1, float rad1, vec4 coord1
\t) {
\t\tvec3 sc0 = coord0.xyz / coord0.w;
\t\tfloat edge0 = max( abs( sc0.x - 0.5 ), abs( sc0.y - 0.5 ) ) * 2.0;
\t\tbool inC0 = edge0 < 0.96 && sc0.z <= 1.0;

\t\tif ( !inC0 ) {
\t\t\treturn sfSampleFarCascade( map1, size1, inten1, bias1, rad1, coord1 );
\t\t}
\t\tfloat sh0 = sfSampleProPCSS( map0, size0, inten0, bias0, coord0 );
\t\tif ( edge0 < 0.78 ) {
\t\t\treturn sh0;
\t\t}
\t\tfloat sh1 = sfSampleFarCascade( map1, size1, inten1, bias1, rad1, coord1 );
\t\tfloat blendT = smoothstep( 0.78, 0.96, edge0 );
\t\treturn mix( sh0, sh1, blendT );
\t}
`;

  const getShadowAnchor = 'float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {';
  const pcfSoftAnchor = '#elif defined( SHADOWMAP_TYPE_PCF_SOFT )';
  const vsmAnchor = '#elif defined( SHADOWMAP_TYPE_VSM )';

  const idxGetShadow = origShadowPars.indexOf(getShadowAnchor);
  const idxPcfSoft = origShadowPars.indexOf(pcfSoftAnchor);
  const idxVsm = origShadowPars.indexOf(vsmAnchor);

  if (idxGetShadow !== -1 && idxPcfSoft !== -1 && idxVsm !== -1) {
    const beforeGetShadow = origShadowPars.slice(0, idxGetShadow);
    const getShadowHeadToPcfSoft = origShadowPars.slice(idxGetShadow, idxPcfSoft);
    const afterVsm = origShadowPars.slice(idxVsm);

    THREE.ShaderChunk.shadowmap_pars_fragment =
      beforeGetShadow +
      sfKernelLib +
      '\n\t' +
      getShadowHeadToPcfSoft +
      `#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
\t\t\treturn sfSampleFlash( shadowMap, shadowMapSize, shadowIntensity, shadowBias, shadowRadius, shadowCoord );
\t\t` +
      afterVsm;
  }

  // 2. Inject Shadow Flame 1.0 Flash/Pro Dual-Cascade + MicroContact + Horizon Relief + Chromatic Bounce into lights_fragment_begin
  const origLightsBegin = THREE.ShaderChunk.lights_fragment_begin;
  const dirLoopStart = '#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )';
  const dirLoopEnd = '#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )';
  const iStart = origLightsBegin.indexOf(dirLoopStart);
  const iEnd = origLightsBegin.indexOf(dirLoopEnd);

  if (iStart !== -1 && iEnd !== -1) {
    const sfDirLightsBlock = `#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
\tDirectionalLight directionalLight;
\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
\tDirectionalLightShadow directionalLightShadow;
\t#endif
\t#pragma unroll_loop_start
\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
\t\tdirectionalLight = directionalLights[ i ];
\t\tgetDirectionalLightInfo( directionalLight, directLight );
\t\t#if defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS >= 2 )
\t\t\t#if ( UNROLLED_LOOP_INDEX == 0 )
\t\t\t\t// ★ SHADOW FLAME 1.0 PRO: Dual-Cascade PCSS + MicroContact + Horizon Relief + Dual-Bounce Chromatic Shadows
\t\t\t\tfloat sfSunLum = dot( directLight.color, vec3( 0.299, 0.587, 0.114 ) );
\t\t\t\tfloat sfVis = 1.0;
\t\t\t\tif ( directLight.visible && receiveShadow ) {
\t\t\t\t\tsfVis = sfGetDualCascadeShadow(
\t\t\t\t\t\tdirectionalShadowMap[ 0 ], directionalLightShadows[ 0 ].shadowMapSize, directionalLightShadows[ 0 ].shadowIntensity, directionalLightShadows[ 0 ].shadowBias, vDirectionalShadowCoord[ 0 ],
\t\t\t\t\t\tdirectionalShadowMap[ 1 ], directionalLightShadows[ 1 ].shadowMapSize, directionalLightShadows[ 1 ].shadowIntensity, directionalLightShadows[ 1 ].shadowBias, directionalLightShadows[ 1 ].shadowRadius, vDirectionalShadowCoord[ 1 ]
\t\t\t\t\t);

\t\t\t\t\t// SF-MicroContact: Screen-space directional micro-relief self-shadowing (<= 55m)
\t\t\t\t\t#if defined( GL_OES_standard_derivatives ) || __VERSION__ >= 300
\t\t\t\t\t{
\t\t\t\t\t\tfloat sfCamD = length( vViewPosition );
\t\t\t\t\t\tfloat sfMicroFade = 1.0 - smoothstep( 12.0, 58.0, sfCamD );
\t\t\t\t\t\tif ( sfMicroFade > 0.01 ) {
\t\t\t\t\t\t\tfloat sfAlbLum = dot( diffuseColor.rgb, vec3( 0.299, 0.587, 0.114 ) );
\t\t\t\t\t\t\tvec2 sfGrad = vec2( dFdx( sfAlbLum ), dFdy( sfAlbLum ) );
\t\t\t\t\t\t\tvec2 sfLight2D = normalize( directLight.direction.xy + vec2( 1e-4 ) );
\t\t\t\t\t\t\tfloat sfCrevice = clamp( -dot( sfGrad, sfLight2D ) * 7.4, 0.0, 0.28 );
\t\t\t\t\t\t\tsfVis *= ( 1.0 - sfCrevice * sfMicroFade );
\t\t\t\t\t\t}
\t\t\t\t\t\t// SF-Horizon: Sculptural 3km x 6km mountain valley terminator relief beyond Cascade 1 (> 180m)
\t\t\t\t\t\tfloat sfFarMask = smoothstep( 170.0, 340.0, sfCamD );
\t\t\t\t\t\tif ( sfFarMask > 0.01 ) {
\t\t\t\t\t\t\tfloat sfNdL = dot( geometryNormal, directLight.direction );
\t\t\t\t\t\t\tfloat sfRidgeTerm = smoothstep( -0.04, 0.26, sfNdL );
\t\t\t\t\t\t\tsfVis *= mix( 1.0, 0.78 + 0.22 * sfRidgeTerm, sfFarMask );
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t\t#endif
\t\t\t\t}
\t\t\t\tdirectLight.color *= sfVis;

\t\t\t\t// SF-Dual-Bounce: Luminous azure sky bounce on upward shadow faces + warm forest-earth bounce under eaves
\t\t\t\t// Scales automatically with sfSunLum -> 0.0 inside dark underground 1890 Coal Mine!
\t\t\t\tvec3 sfUpV = normalize( viewMatrix[ 1 ].xyz );
\t\t\t\tfloat sfUpFacing = clamp( dot( geometryNormal, sfUpV ) * 0.5 + 0.5, 0.0, 1.0 );
\t\t\t\tvec3 sfBounceTint = mix( vec3( 0.030, 0.028, 0.020 ), vec3( 0.048, 0.088, 0.140 ), sfUpFacing );
\t\t\t\treflectedLight.indirectDiffuse += diffuseColor.rgb * RECIPROCAL_PI * sfBounceTint * ( 1.0 - sfVis ) * min( sfSunLum, 2.5 );

\t\t\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
\t\t\t#else
\t\t\t\t// Cascade 1 shadow-carrier light (sunLightFar): skip duplicate BRDF shading completely!
\t\t\t#endif
\t\t#else
\t\t\t// ★ SHADOW FLAME 1.0 FLASH: Ultra-fast 6-Tap IGN Vogel Disk + Sky-Bounce Chromatic Fill
\t\t\tfloat sfFlashVis = 1.0;
\t\t\tfloat sfSunLumF = dot( directLight.color, vec3( 0.299, 0.587, 0.114 ) );
\t\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
\t\t\t\tdirectionalLightShadow = directionalLightShadows[ i ];
\t\t\t\tsfFlashVis = ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
\t\t\t\tdirectLight.color *= sfFlashVis;
\t\t\t\tvec3 sfUpF = normalize( viewMatrix[ 1 ].xyz );
\t\t\t\tfloat sfSkyAmt = clamp( dot( geometryNormal, sfUpF ) * 0.5 + 0.5, 0.0, 1.0 );
\t\t\t\treflectedLight.indirectDiffuse += diffuseColor.rgb * RECIPROCAL_PI * vec3( 0.036, 0.064, 0.102 ) * sfSkyAmt * ( 1.0 - sfFlashVis ) * min( sfSunLumF, 2.5 );
\t\t\t#endif
\t\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
\t\t#endif
\t}
\t#pragma unroll_loop_end
#endif
`;
    THREE.ShaderChunk.lights_fragment_begin =
      origLightsBegin.slice(0, iStart) + sfDirLightsBlock + origLightsBegin.slice(iEnd);
  }
}

export interface ShadowFlameStats {
  mode: ShadowFlameMode;
  cascades: number;
  nearMapSize: number;
  farMapSize: number;
  nearUpdates: number;
  farUpdates: number;
}

/**
 * Manages the Shadow Flame 1.0 Directional Shadow Light Rig (Flash single-cascade vs
 * Pro dual-cascade) with texel-snapped temporal shadow-map caching so stationary or
 * slow frames pay ZERO shadow rasterization cost!
 */
export class ShadowFlameSystem {
  public readonly sunLight: THREE.DirectionalLight;
  public readonly sunLightFar: THREE.DirectionalLight;
  private readonly sunDir: THREE.Vector3;

  private mode: ShadowFlameMode;
  private lastNearX = Number.NaN;
  private lastNearY = Number.NaN;
  private lastNearZ = Number.NaN;
  private lastFarX = Number.NaN;
  private lastFarY = Number.NaN;
  private lastFarZ = Number.NaN;
  private lastStreamSig = '';
  private nearUpdates = 0;
  private farUpdates = 0;

  constructor(
    scene: THREE.Scene,
    sunDirection: THREE.Vector3,
    initialMode: ShadowFlameMode = 'flash'
  ) {
    this.sunDir = sunDirection.clone().normalize();
    this.mode = initialMode;

    // Primary Sun & Cascade 0 (Flash: 1536² ±116m | Pro: 2048² ±50m razor-sharp 4.8cm/texel!)
    this.sunLight = new THREE.DirectionalLight(0xfff5e2, 2.32);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.autoUpdate = false;
    this.sunLight.shadow.needsUpdate = true;
    scene.add(this.sunLight);
    scene.add(this.sunLight.target);

    // Secondary Landscape Cascade 1 (Pro-only pure depth-map carrier: 2048² ±245m = 490m × 490m!)
    // BRDF shading is completely bypassed in shader when NUM_DIR_LIGHT_SHADOWS >= 2!
    this.sunLightFar = new THREE.DirectionalLight(0xfff5e2, 0.0001);
    this.sunLightFar.castShadow = false;
    this.sunLightFar.visible = false;
    this.sunLightFar.shadow.mapSize.set(2048, 2048);
    this.sunLightFar.shadow.camera.near = 20;
    this.sunLightFar.shadow.camera.far = 780;
    const farHalf = 245;
    this.sunLightFar.shadow.camera.left = -farHalf;
    this.sunLightFar.shadow.camera.right = farHalf;
    this.sunLightFar.shadow.camera.top = farHalf;
    this.sunLightFar.shadow.camera.bottom = -farHalf;
    this.sunLightFar.shadow.bias = -0.00065;
    this.sunLightFar.shadow.normalBias = 0.14;
    this.sunLightFar.shadow.radius = 2.1;
    this.sunLightFar.shadow.autoUpdate = false;
    this.sunLightFar.shadow.needsUpdate = true;
    scene.add(this.sunLightFar);
    scene.add(this.sunLightFar.target);

    this.applyMode(initialMode);
  }

  public getMode(): ShadowFlameMode {
    return this.mode;
  }

  /** Instantly switches between Shadow Flame 1.0 Flash and Shadow Flame 1.0 Pro at runtime! */
  public setMode(next: ShadowFlameMode): void {
    if (this.mode === next) return;
    this.applyMode(next);
  }

  private applyMode(next: ShadowFlameMode): void {
    this.mode = next;

    // Dispose old shadow map cleanly when changing resolution so WebGLShadowMap reallocates exact size
    const targetRes = next === 'pro' ? 2048 : 1536;
    if (this.sunLight.shadow.mapSize.x !== targetRes) {
      if (this.sunLight.shadow.map) {
        this.sunLight.shadow.map.dispose();
        this.sunLight.shadow.map = null;
      }
      this.sunLight.shadow.mapSize.set(targetRes, targetRes);
    }

    if (next === 'pro') {
      // Shadow Flame 1.0 Pro — Cascade 0 (±50m, 4.88cm/texel!) + Cascade 1 (±245m, 490m landscape!)
      const nearHalf = 50;
      this.sunLight.shadow.camera.near = 15;
      this.sunLight.shadow.camera.far = 420;
      this.sunLight.shadow.camera.left = -nearHalf;
      this.sunLight.shadow.camera.right = nearHalf;
      this.sunLight.shadow.camera.top = nearHalf;
      this.sunLight.shadow.camera.bottom = -nearHalf;
      this.sunLight.shadow.bias = -0.00022;
      this.sunLight.shadow.normalBias = 0.030;
      this.sunLight.shadow.radius = 1.0;
      this.sunLight.shadow.camera.updateProjectionMatrix();

      this.sunLightFar.visible = true;
      this.sunLightFar.castShadow = true;
      this.sunLightFar.shadow.camera.updateProjectionMatrix();
    } else {
      // Shadow Flame 1.0 Flash — Ultra-light single 1536² cascade (±116m, 6-tap IGN Vogel Disk!)
      const flashHalf = 116;
      this.sunLight.shadow.camera.near = 20;
      this.sunLight.shadow.camera.far = 540;
      this.sunLight.shadow.camera.left = -flashHalf;
      this.sunLight.shadow.camera.right = flashHalf;
      this.sunLight.shadow.camera.top = flashHalf;
      this.sunLight.shadow.camera.bottom = -flashHalf;
      this.sunLight.shadow.bias = -0.00042;
      this.sunLight.shadow.normalBias = 0.055;
      this.sunLight.shadow.radius = 1.95;
      this.sunLight.shadow.camera.updateProjectionMatrix();

      this.sunLightFar.castShadow = false;
      this.sunLightFar.visible = false;
    }

    this.invalidate();
  }

  /** Forces immediate shadow cascade refresh (e.g., on teleport or mode switch). */
  public invalidate(): void {
    this.lastNearX = Number.NaN;
    this.lastFarX = Number.NaN;
    this.sunLight.shadow.needsUpdate = true;
    if (this.mode === 'pro') {
      this.sunLightFar.shadow.needsUpdate = true;
    }
  }

  /**
   * Updates texel-snapped cascade positions with Temporal Shadow Caching:
   * - Flash: refreshes Cascade 0 when moved > 1.5m or when streamed geometry changes
   * - Pro: refreshes Cascade 0 when moved > 0.6m and Cascade 1 only when moved > 6.0m!
   */
  public update(playerPos: THREE.Vector3, streamSig: string, force = false): void {
    const streamChanged = streamSig !== this.lastStreamSig;
    if (streamChanged) {
      this.lastStreamSig = streamSig;
    }

    const nearStep = this.mode === 'pro' ? 0.5 : 2.0;
    const nearThresh = this.mode === 'pro' ? 0.55 : 1.5;
    const nearDist = this.mode === 'pro' ? 190 : 250;

    const snapNX = Math.round(playerPos.x / nearStep) * nearStep;
    const snapNY = Math.round(playerPos.y / nearStep) * nearStep;
    const snapNZ = Math.round(playerPos.z / nearStep) * nearStep;

    const nearMoved =
      Number.isNaN(this.lastNearX) ||
      Math.hypot(snapNX - this.lastNearX, snapNY - this.lastNearY, snapNZ - this.lastNearZ) >= nearThresh;

    if (force || nearMoved || streamChanged) {
      this.lastNearX = snapNX;
      this.lastNearY = snapNY;
      this.lastNearZ = snapNZ;
      this.sunLight.target.position.set(snapNX, snapNY, snapNZ);
      this.sunLight.position.set(
        snapNX + this.sunDir.x * nearDist,
        snapNY + this.sunDir.y * nearDist,
        snapNZ + this.sunDir.z * nearDist
      );
      this.sunLight.target.updateMatrixWorld();
      this.sunLight.shadow.needsUpdate = true;
      this.nearUpdates++;
    }

    if (this.mode === 'pro') {
      const farStep = 4.0;
      const snapFX = Math.round(playerPos.x / farStep) * farStep;
      const snapFY = Math.round(playerPos.y / farStep) * farStep;
      const snapFZ = Math.round(playerPos.z / farStep) * farStep;
      const farMoved =
        Number.isNaN(this.lastFarX) ||
        Math.hypot(snapFX - this.lastFarX, snapFY - this.lastFarY, snapFZ - this.lastFarZ) >= 6.0;

      if (force || farMoved || streamChanged) {
        this.lastFarX = snapFX;
        this.lastFarY = snapFY;
        this.lastFarZ = snapFZ;
        this.sunLightFar.target.position.set(snapFX, snapFY, snapFZ);
        this.sunLightFar.position.set(
          snapFX + this.sunDir.x * 380,
          snapFY + this.sunDir.y * 380,
          snapFZ + this.sunDir.z * 380
        );
        this.sunLightFar.target.updateMatrixWorld();
        this.sunLightFar.shadow.needsUpdate = true;
        this.farUpdates++;
      }
    }
  }

  public getStats(): ShadowFlameStats {
    return {
      mode: this.mode,
      cascades: this.mode === 'pro' ? 2 : 1,
      nearMapSize: this.sunLight.shadow.mapSize.x,
      farMapSize: this.mode === 'pro' ? this.sunLightFar.shadow.mapSize.x : 0,
      nearUpdates: this.nearUpdates,
      farUpdates: this.farUpdates,
    };
  }
}
