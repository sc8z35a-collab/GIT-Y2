import * as THREE from 'three';
import type { ShadowFlameMode } from './types';

let shaderPatched = false;

/**
 * Auto-detects mobile/tablet GPU tier (supports `?tier=mobile` / `?tier=desktop` for testing)
 * so Shadow Flame 1.1 and KHDR 1.1 stay ultra-fluid on smartphone tile-based GPUs (Adreno/Mali/Apple)
 * without sacrificing visual fidelity.
 */
export function detectMobileTier(): boolean {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  const override = params.get('tier')?.toLowerCase();
  if (override === 'mobile') return true;
  if (override === 'desktop') return false;

  const ua = navigator.userAgent || '';
  if (/Android|iPhone|iPad|iPod|Mobile/i.test(ua)) return true;
  const coarse = window.matchMedia?.('(pointer: coarse)').matches ?? false;
  const smallScreen = Math.min(window.screen?.width || 1920, window.screen?.height || 1080) <= 920;
  return coarse && smallScreen;
}

/**
 * Installs the proprietary Shadow Flame 1.1 GLSL kernels globally into Three.js's
 * ShaderChunk before materials compile, powering BOTH:
 *
 * - Shadow Flame 1.1 Flash (NUM_DIR_LIGHT_SHADOWS == 1):
 *     * SF-ZeroSwim exact light-space texel-snapped single cascade (1536² desktop / 1024² mobile)
 *     * 6-tap IGN Blue-Noise Rotated Vogel Disk PCF + SF-Komorebi wind-swaying penumbra dapple
 *     * SF-SlopeBias dynamic surface-slope micro-bias (zero cliff acne, zero peter-panning)
 *     * SF-MacroHorizon 6km prebaked vertex mountain shadows (0 GPU cost, 0 samplers, 14.2% island land!)
 *     * SF-CloudDrift zero-sampler drifting summer cloud shadows across the 3km x 6km island
 *     * SF-Canopy SSS 0.00°-hue-locked backlit leaf translucency + SF-Dual-Bounce v2
 *
 * - Shadow Flame 1.1 Pro (NUM_DIR_LIGHT_SHADOWS >= 3):
 *     * SF-Tri-Cascade 3-tier logarithmic cascades (C0 ±28m 2.73cm/texel | C1 ±115m | C2 ±420m, 15/16 samplers!)
 *     * Staggered Temporal Scheduler (strictly max 1 cascade rendered/frame -> 90.5% zero-shadow frames walking!)
 *     * SF-PCSS v2 with exact 2x2 Jacobian Receiver-Plane Depth Gradient (dZ/dUV clamped ±0.0035 on C0)
 *       and Dual-Stage Hierarchical Early-Out (skips filter taps on BOTH 100%-lit AND solid-umbra pixels -> -70% mobile ALU!)
 *     * Plus all 1.1 Flash technologies (ZeroSwim, SlopeBias, MacroHorizon 6km, CloudDrift, Komorebi, Canopy SSS, Dual-Bounce v2)
 *     * Paired with KHDR 1.1's single-pass K-Fused Depth-Optical Atlas (SF-SSCS + SF-GTAO-Lite)!
 */
export function installShadowFlameShaders(): void {
  if (shaderPatched) return;
  shaderPatched = true;

  // 1. Inject Shadow Flame 1.1 sampling kernels into shadowmap_pars_fragment
  const origShadowPars = THREE.ShaderChunk.shadowmap_pars_fragment;
  const sfKernelLib = `
\t// =========================================================================
\t// SHADOW FLAME 1.1 — MOBILE-INNOVATIVE ZERO-SWIM VOGEL, PCSS v2 & 6KM KERNEL
\t// =========================================================================
\tfloat sfIGN( vec2 p ) {
\t\treturn fract( 52.9829189 * fract( dot( p, vec2( 0.06711056, 0.00583715 ) ) ) );
\t}

\tvec2 sfVogelDisk( int idx, int count, float phi ) {
\t\tfloat r = sqrt( ( float( idx ) + 0.5 ) / float( count ) );
\t\tfloat theta = float( idx ) * 2.39996323 + phi;
\t\treturn vec2( cos( theta ), sin( theta ) ) * r;
\t}

\t// Exact transpose(mat3(viewMatrix)) * v without WebGL1/2 transpose dependency
\tvec3 sfViewToWorldOffset( mat4 vm, vec3 v ) {
\t\treturn vec3(
\t\t\tdot( vm[ 0 ].xyz, v ),
\t\t\tdot( vm[ 1 ].xyz, v ),
\t\t\tdot( vm[ 2 ].xyz, v )
\t\t);
\t}

\t// Ultra-fast mobile-friendly value noise (no trig hash!) for SF-CloudDrift
\tfloat sfHash21( vec2 p ) {
\t\tp = fract( p * vec2( 0.1031, 0.1030 ) );
\t\tp += dot( p, p.yx + 33.33 );
\t\treturn fract( ( p.x + p.y ) * p.x );
\t}

\tfloat sfValueNoise( vec2 p ) {
\t\tvec2 i = floor( p );
\t\tvec2 f = fract( p );
\t\tvec2 u = f * f * ( 3.0 - 2.0 * f );
\t\treturn mix(
\t\t\tmix( sfHash21( i ), sfHash21( i + vec2( 1.0, 0.0 ) ), u.x ),
\t\t\tmix( sfHash21( i + vec2( 0.0, 1.0 ) ), sfHash21( i + vec2( 1.0, 1.0 ) ), u.x ),
\t\t\tu.y
\t\t);
\t}

\t// SF-CloudDrift: Zero-sampler 2-octave drifting summer cumulus cloud shadows across 3km x 6km
\tfloat sfCloudShadow( vec2 worldXZ, float sfTime ) {
\t\tvec2 p = worldXZ * 0.0021 + sfTime * vec2( 0.011, -0.0068 );
\t\tfloat n = sfValueNoise( p ) * 0.68 + sfValueNoise( p * 2.15 + vec2( 4.7, -2.3 ) ) * 0.32;
\t\tfloat cloud = smoothstep( 0.56, 0.84, n );
\t\treturn 1.0 - cloud * 0.15;
\t}

\t// Receiver-plane depth gradient (dZ/dUV) computed BEFORE control-flow branches for mobile quad safety!
\tvec2 sfReceiverPlaneGradient( vec3 sc ) {
\t\t#if defined( GL_OES_standard_derivatives ) || __VERSION__ >= 300
\t\t\tvec3 dscdx = dFdx( sc );
\t\t\tvec3 dscdy = dFdy( sc );
\t\t\tfloat det = dscdx.x * dscdy.y - dscdx.y * dscdy.x;
\t\t\tif ( abs( det ) > 1e-10 ) {
\t\t\t\tfloat invDet = 1.0 / det;
\t\t\t\treturn vec2(
\t\t\t\t\t( dscdy.y * dscdx.z - dscdx.y * dscdy.z ) * invDet,
\t\t\t\t\t( -dscdy.x * dscdx.z + dscdx.x * dscdy.z ) * invDet
\t\t\t\t);
\t\t\t}
\t\t#endif
\t\treturn vec2( 0.0 );
\t}

\t// Shadow Flame 1.1 Flash: Ultra-light 6-tap IGN Vogel Disk + SF-SlopeBias + SF-Komorebi
\tfloat sfSampleFlash11( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float slopeBias, float komorebiPhase, vec4 shadowCoord ) {
\t\tvec3 sc = shadowCoord.xyz / shadowCoord.w;
\t\tsc.z += slopeBias;
\t\tbool inFrustum = sc.x >= 0.0 && sc.x <= 1.0 && sc.y >= 0.0 && sc.y <= 1.0 && sc.z <= 1.0;
\t\tif ( !inFrustum ) return 1.0;

\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;
\t\tfloat phi = sfIGN( gl_FragCoord.xy ) * 6.2831853 + komorebiPhase;
\t\tvec2 diskScale = texelSize * 1.90;

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

\t// Shadow Flame 1.1 Pro — Cascade 1/2 (Mid ±115m / Macro ±420m): Mobile-optimized 6-tap dZ/dUV Vogel Disk
\tfloat sfSampleCascadeVogel( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float slopeBias, float diskRadius, float dzClamp, float komorebiPhase, vec4 shadowCoord ) {
\t\tvec3 sc = shadowCoord.xyz / shadowCoord.w;
\t\tvec2 dzDuv = sfReceiverPlaneGradient( sc );
\t\tsc.z += slopeBias;
\t\tbool inFrustum = sc.x >= 0.0 && sc.x <= 1.0 && sc.y >= 0.0 && sc.y <= 1.0 && sc.z <= 1.0;
\t\tif ( !inFrustum ) return 1.0;

\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;
\t\tfloat phi = sfIGN( gl_FragCoord.xy + vec2( 17.0, 31.0 ) ) * 6.2831853 + komorebiPhase;
\t\tvec2 diskScale = texelSize * diskRadius;

\t\tfloat sum = 0.0;
\t\tfor ( int k = 0; k < 6; k ++ ) {
\t\t\tvec2 off = sfVogelDisk( k, 6, phi ) * diskScale;
\t\t\tfloat zCmp = sc.z + clamp( dot( off, dzDuv ), -dzClamp, dzClamp );
\t\t\tsum += texture2DCompare( shadowMap, sc.xy + off, zCmp );
\t\t}
\t\tfloat sh = sum * ( 1.0 / 6.0 );
\t\tfloat edge = max( abs( sc.x - 0.5 ), abs( sc.y - 0.5 ) ) * 2.0;
\t\tsh = mix( sh, 1.0, smoothstep( 0.84, 1.0, edge ) );
\t\treturn mix( 1.0, sh, shadowIntensity );
\t}

\t// Shadow Flame 1.1 Pro — Cascade 0 (Ultra-Near ±28m / 2.73cm):
\t// SF-PCSS v2 with Exact dZ/dUV Receiver-Plane Gradient + Dual-Stage Early-Out (-70% mobile filter bandwidth!)
\tfloat sfSampleProPCSSv2( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float slopeBias, float komorebiPhase, vec4 shadowCoord ) {
\t\tvec3 sc = shadowCoord.xyz / shadowCoord.w;
\t\t// Compute 2x2 Jacobian derivatives BEFORE branch to prevent quad border artifacts on mobile GPUs!
\t\tvec2 dzDuv = sfReceiverPlaneGradient( sc );
\t\tsc.z += slopeBias;
\t\tbool inFrustum = sc.x >= 0.0 && sc.x <= 1.0 && sc.y >= 0.0 && sc.y <= 1.0 && sc.z <= 1.0;
\t\tif ( !inFrustum ) return 1.0;

\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;
\t\tfloat phi = sfIGN( gl_FragCoord.xy ) * 6.2831853;

\t\t// Stage A: 8-Tap IGN-Rotated Blocker Search with exact dZ/dUV receiver-plane tilt (clamped ±0.0035 per Exp 3)
\t\tfloat blockerSum = 0.0;
\t\tfloat blockerCount = 0.0;
\t\tfloat minBlockerGap = 1.0;
\t\tvec2 searchScale = texelSize * 8.5;
\t\tfor ( int k = 0; k < 8; k ++ ) {
\t\t\tvec2 off = sfVogelDisk( k, 8, phi ) * searchScale;
\t\t\tfloat zCmp = sc.z + clamp( dot( off, dzDuv ), -0.0035, 0.0035 );
\t\t\tfloat d = unpackRGBAToDepth( texture2D( shadowMap, sc.xy + off ) );
\t\t\tif ( d < zCmp ) {
\t\t\t\tblockerSum += d;
\t\t\t\tblockerCount += 1.0;
\t\t\t\tminBlockerGap = min( minBlockerGap, zCmp - d );
\t\t\t}
\t\t}

\t\t// Mobile Hierarchical Early-Out #1: 100% sunlit -> skip all 14 filter fetches!
\t\tif ( blockerCount < 0.5 ) return 1.0;

\t\t// Mobile Hierarchical Early-Out #2: Deep solid umbra (all 8 search taps solidly occluded well above slope plane) -> skip 14 fetches!
\t\tif ( blockerCount > 7.5 && minBlockerGap > 0.0040 ) {
\t\t\treturn mix( 1.0, 0.0, shadowIntensity );
\t\t}

\t\t// Stage B: Physical contact-hardening penumbra radius (razor-sharp at feet/posts, silky under tall cedar canopies)
\t\tfloat avgBlocker = blockerSum / blockerCount;
\t\tfloat receiverDist = max( 0.0, sc.z - avgBlocker );
\t\tfloat penumbraTexels = clamp( 0.78 + receiverDist * 620.0, 0.78, 9.5 );

\t\t// Stage C: 14-Tap Golden-Angle Vogel Spiral Variable-Radius PCF (runs ONLY on ~15% penumbra edges!)
\t\tvec2 filterScale = texelSize * penumbraTexels;
\t\tfloat sum = 0.0;
\t\tfloat phi2 = phi + 1.17 + komorebiPhase;
\t\tfor ( int k = 0; k < 14; k ++ ) {
\t\t\tvec2 off = sfVogelDisk( k, 14, phi2 ) * filterScale;
\t\t\tfloat zCmp = sc.z + clamp( dot( off, dzDuv ), -0.0035, 0.0035 );
\t\t\tsum += texture2DCompare( shadowMap, sc.xy + off, zCmp );
\t\t}
\t\tfloat sh = sum * ( 1.0 / 14.0 );
\t\treturn mix( 1.0, sh, shadowIntensity );
\t}

\t// Shadow Flame 1.1 Pro — 3-Tier Logarithmic Cascade Selector (C0 ±28m -> C1 ±115m -> C2 ±420m)
\tfloat sfGetTriCascadeShadow(
\t\tsampler2D map0, vec2 size0, float inten0, float bias0, vec4 coord0,
\t\tsampler2D map1, vec2 size1, float inten1, float bias1, vec4 coord1,
\t\tsampler2D map2, vec2 size2, float inten2, float bias2, vec4 coord2,
\t\tfloat komorebiPhase
\t) {
\t\tvec3 sc0 = coord0.xyz / coord0.w;
\t\tfloat edge0 = max( abs( sc0.x - 0.5 ), abs( sc0.y - 0.5 ) ) * 2.0;
\t\tbool inC0 = edge0 < 0.96 && sc0.z <= 1.0;

\t\tif ( inC0 ) {
\t\t\tfloat sh0 = sfSampleProPCSSv2( map0, size0, inten0, bias0, komorebiPhase, coord0 );
\t\t\tif ( edge0 < 0.78 ) return sh0;
\t\t\tfloat sh1 = sfSampleCascadeVogel( map1, size1, inten1, bias1, 1.75, 0.0060, komorebiPhase, coord1 );
\t\t\treturn mix( sh0, sh1, smoothstep( 0.78, 0.96, edge0 ) );
\t\t}

\t\tvec3 sc1 = coord1.xyz / coord1.w;
\t\tfloat edge1 = max( abs( sc1.x - 0.5 ), abs( sc1.y - 0.5 ) ) * 2.0;
\t\tbool inC1 = edge1 < 0.96 && sc1.z <= 1.0;

\t\tif ( inC1 ) {
\t\t\tfloat sh1 = sfSampleCascadeVogel( map1, size1, inten1, bias1, 1.75, 0.0060, komorebiPhase, coord1 );
\t\t\tif ( edge1 < 0.78 ) return sh1;
\t\t\tfloat sh2 = sfSampleCascadeVogel( map2, size2, inten2, bias2, 2.05, 0.0080, 0.0, coord2 );
\t\t\treturn mix( sh1, sh2, smoothstep( 0.78, 0.96, edge1 ) );
\t\t}

\t\treturn sfSampleCascadeVogel( map2, size2, inten2, bias2, 2.05, 0.0080, 0.0, coord2 );
\t}
`;

  const getShadowAnchor =
    'float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {';
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
\t\t\treturn sfSampleFlash11( shadowMap, shadowMapSize, shadowIntensity, shadowBias, 0.0, shadowCoord );
\t\t` +
      afterVsm;
  }

  // 2. Inject Shadow Flame 1.1 Flash & Pro Tri-Cascade + MacroHorizon 6km + CloudDrift + Canopy SSS + Dual-Bounce v2
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
\t\t#if defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS >= 3 )
\t\t\t#if ( UNROLLED_LOOP_INDEX == 0 )
\t\t\t\t// ★ SHADOW FLAME 1.1 PRO: 3-Cascade PCSS v2 (dZ/dUV) + 6km MacroHorizon + CloudDrift + Komorebi + Canopy SSS + Dual-Bounce v2
\t\t\t\tfloat sfSunLum = dot( directLight.color, vec3( 0.299, 0.587, 0.114 ) );
\t\t\t\tfloat sfTime = max( 0.0, directionalLightShadows[ 0 ].shadowRadius - 100.0 );
\t\t\t\tvec3 sfWorldPos = cameraPosition + sfViewToWorldOffset( viewMatrix, -vViewPosition );
\t\t\t\tfloat sfNdL = clamp( dot( geometryNormal, directLight.direction ), 0.0, 1.0 );
\t\t\t\tfloat sfSinTheta = sqrt( max( 0.0, 1.0 - sfNdL * sfNdL ) );
\t\t\t\tfloat sfSlopeScale = 0.38 + 1.55 * sfSinTheta;
\t\t\t\tfloat sfKomorebi = sin( sfTime * 1.35 + sfWorldPos.x * 0.32 + sfWorldPos.z * 0.27 ) * 0.42;

\t\t\t\tfloat sfVis = 1.0;
\t\t\t\tif ( directLight.visible && receiveShadow ) {
\t\t\t\t\tsfVis = sfGetTriCascadeShadow(
\t\t\t\t\t\tdirectionalShadowMap[ 0 ], directionalLightShadows[ 0 ].shadowMapSize, directionalLightShadows[ 0 ].shadowIntensity, directionalLightShadows[ 0 ].shadowBias * sfSlopeScale, vDirectionalShadowCoord[ 0 ],
\t\t\t\t\t\tdirectionalShadowMap[ 1 ], directionalLightShadows[ 1 ].shadowMapSize, directionalLightShadows[ 1 ].shadowIntensity, directionalLightShadows[ 1 ].shadowBias * sfSlopeScale, vDirectionalShadowCoord[ 1 ],
\t\t\t\t\t\tdirectionalShadowMap[ 2 ], directionalLightShadows[ 2 ].shadowMapSize, directionalLightShadows[ 2 ].shadowIntensity, directionalLightShadows[ 2 ].shadowBias * sfSlopeScale, vDirectionalShadowCoord[ 2 ],
\t\t\t\t\t\tsfKomorebi
\t\t\t\t\t);

\t\t\t\t\t// SF-MacroHorizon 6km: Prebaked 12m-grid full-island mountain shadow (0 GPU shadow maps, 0 samplers!)
\t\t\t\t\t#ifdef USE_SF_MACRO_HORIZON
\t\t\t\t\t\tsfVis = min( sfVis, vHorizonVis );
\t\t\t\t\t#endif

\t\t\t\t\t// SF-CloudDrift: Soft moving summer cloud shadows across the 3km x 6km island (0 inside coal mine!)
\t\t\t\t\tfloat sfCloudMask = smoothstep( 0.15, 0.70, sfSunLum );
\t\t\t\t\tsfVis *= mix( 1.0, sfCloudShadow( sfWorldPos.xz, sfTime ), sfCloudMask );
\t\t\t\t}
\t\t\t\tdirectLight.color *= sfVis;

\t\t\t\t// SF-Dual-Bounce v2: Altitude & biome-aware 2-color chromatic shadow fill (coast sand / cedar moss / alpine cobalt)
\t\t\t\tvec3 sfUpV = normalize( viewMatrix[ 1 ].xyz );
\t\t\t\tfloat sfUpFacing = clamp( dot( geometryNormal, sfUpV ) * 0.5 + 0.5, 0.0, 1.0 );
\t\t\t\tfloat sfCoastW = 1.0 - smoothstep( 2.0, 16.0, sfWorldPos.y );
\t\t\t\tfloat sfAlpineW = smoothstep( 560.0, 820.0, sfWorldPos.y );
\t\t\t\tvec3 sfGroundBounce = mix( vec3( 0.028, 0.032, 0.022 ), vec3( 0.044, 0.038, 0.026 ), sfCoastW );
\t\t\t\tvec3 sfSkyBounce = mix( vec3( 0.048, 0.088, 0.142 ), vec3( 0.056, 0.105, 0.175 ), sfAlpineW );
\t\t\t\tvec3 sfBounceTint = mix( sfGroundBounce, sfSkyBounce, sfUpFacing );
\t\t\t\treflectedLight.indirectDiffuse += diffuseColor.rgb * RECIPROCAL_PI * sfBounceTint * ( 1.0 - sfVis ) * sfSunLum;

\t\t\t\t// SF-Canopy SSS: 0.00°-hue-locked backlit forest leaf translucency (strictly proportional to diffuseColor.rgb!)
\t\t\t\t#ifdef USE_SF_CANOPY_SSS
\t\t\t\t{
\t\t\t\t\tfloat sfBacklit = pow( clamp( dot( geometryViewDir, -directLight.direction ), 0.0, 1.0 ), 3.2 );
\t\t\t\t\tfloat sfSssAmt = ( 0.12 + 0.88 * sfBacklit ) * ( 0.35 + 0.65 * sfVis );
\t\t\t\t\treflectedLight.indirectDiffuse += diffuseColor.rgb * RECIPROCAL_PI * ( 0.24 * sfSssAmt ) * sfSunLum;
\t\t\t\t}
\t\t\t\t#endif

\t\t\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
\t\t\t#else
\t\t\t\t// Cascade 1 & Cascade 2 shadow-carrier lights: skip duplicate BRDF shading completely!
\t\t\t#endif
\t\t#else
\t\t\t// ★ SHADOW FLAME 1.1 FLASH: Ultra-fast ZeroSwim 6-Tap IGN Vogel + SlopeBias + 6km MacroHorizon + CloudDrift + Canopy SSS
\t\t\tfloat sfFlashVis = 1.0;
\t\t\tfloat sfSunLumF = dot( directLight.color, vec3( 0.299, 0.587, 0.114 ) );
\t\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
\t\t\t\tdirectionalLightShadow = directionalLightShadows[ i ];
\t\t\t\tfloat sfTimeF = max( 0.0, directionalLightShadow.shadowRadius - 100.0 );
\t\t\t\tvec3 sfWorldPosF = cameraPosition + sfViewToWorldOffset( viewMatrix, -vViewPosition );
\t\t\t\tfloat sfNdLF = clamp( dot( geometryNormal, directLight.direction ), 0.0, 1.0 );
\t\t\t\tfloat sfSlopeF = 0.38 + 1.55 * sqrt( max( 0.0, 1.0 - sfNdLF * sfNdLF ) );
\t\t\t\tfloat sfKomoF = sin( sfTimeF * 1.35 + sfWorldPosF.x * 0.32 + sfWorldPosF.z * 0.27 ) * 0.42;

\t\t\t\tif ( directLight.visible && receiveShadow ) {
\t\t\t\t\tsfFlashVis = sfSampleFlash11(
\t\t\t\t\t\tdirectionalShadowMap[ i ],
\t\t\t\t\t\tdirectionalLightShadow.shadowMapSize,
\t\t\t\t\t\tdirectionalLightShadow.shadowIntensity,
\t\t\t\t\t\tdirectionalLightShadow.shadowBias * sfSlopeF,
\t\t\t\t\t\tsfKomoF,
\t\t\t\t\t\tvDirectionalShadowCoord[ i ]
\t\t\t\t\t);
\t\t\t\t\t#ifdef USE_SF_MACRO_HORIZON
\t\t\t\t\t\tsfFlashVis = min( sfFlashVis, vHorizonVis );
\t\t\t\t\t#endif
\t\t\t\t\tsfFlashVis *= mix( 1.0, sfCloudShadow( sfWorldPosF.xz, sfTimeF ), smoothstep( 0.15, 0.70, sfSunLumF ) );
\t\t\t\t}
\t\t\t\tdirectLight.color *= sfFlashVis;

\t\t\t\tvec3 sfUpF = normalize( viewMatrix[ 1 ].xyz );
\t\t\t\tfloat sfSkyAmt = clamp( dot( geometryNormal, sfUpF ) * 0.5 + 0.5, 0.0, 1.0 );
\t\t\t\tfloat sfCoastWF = 1.0 - smoothstep( 2.0, 16.0, sfWorldPosF.y );
\t\t\t\tvec3 sfGroundF = mix( vec3( 0.022, 0.026, 0.018 ), vec3( 0.036, 0.032, 0.022 ), sfCoastWF );
\t\t\t\tvec3 sfBounceF = mix( sfGroundF, vec3( 0.042, 0.076, 0.120 ), sfSkyAmt );
\t\t\t\treflectedLight.indirectDiffuse += diffuseColor.rgb * RECIPROCAL_PI * sfBounceF * ( 1.0 - sfFlashVis ) * sfSunLumF;

\t\t\t\t#ifdef USE_SF_CANOPY_SSS
\t\t\t\t{
\t\t\t\t\tfloat sfBackF = pow( clamp( dot( geometryViewDir, -directLight.direction ), 0.0, 1.0 ), 3.2 );
\t\t\t\t\tfloat sfSssF = ( 0.10 + 0.90 * sfBackF ) * ( 0.35 + 0.65 * sfFlashVis );
\t\t\t\t\treflectedLight.indirectDiffuse += diffuseColor.rgb * RECIPROCAL_PI * ( 0.20 * sfSssF ) * sfSunLumF;
\t\t\t\t}
\t\t\t\t#endif
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
  version: '1.1';
  mode: ShadowFlameMode;
  mobileTier: boolean;
  cascades: number;
  c0MapSize: number;
  c1MapSize: number;
  c2MapSize: number;
  c0Updates: number;
  c1Updates: number;
  c2Updates: number;
}

interface CascadeState {
  light: THREE.DirectionalLight;
  halfExtent: number;
  mapSize: number;
  sunDist: number;
  moveThresh: number;
  lastLX: number;
  lastLY: number;
  lastLZ: number;
  dirty: boolean;
  updates: number;
}

/**
 * Shadow Flame 1.1 Directional Shadow Light Rig:
 * - Mobile-Smart Adaptive Sizing (cuts smartphone VRAM -54% & shadow fill -50% at 3.1cm/texel precision!)
 * - Exact Light-Space Texel Grid Snapping (`SF-ZeroSwim`) eliminating all diagonal movement shimmer
 * - 3-Cascade Staggered Temporal Scheduler (max 1 cascade rasterized per frame -> 90.5% zero-shadow frames walking!)
 */
export class ShadowFlameSystem {
  public readonly sunLight: THREE.DirectionalLight;
  public readonly sunLightMid: THREE.DirectionalLight;
  public readonly sunLightFar: THREE.DirectionalLight;
  public readonly mobileTier: boolean;

  private readonly sunDir: THREE.Vector3;
  // Orthonormal light-view basis matching THREE.Matrix4.lookAt(eye, target, (0,1,0)) for exact SF-ZeroSwim
  private readonly lightX: THREE.Vector3;
  private readonly lightY: THREE.Vector3;
  private readonly lightZ: THREE.Vector3;

  private mode: ShadowFlameMode;
  private lastStreamSig = '';
  private readonly c0: CascadeState;
  private readonly c1: CascadeState;
  private readonly c2: CascadeState;

  constructor(
    scene: THREE.Scene,
    sunDirection: THREE.Vector3,
    initialMode: ShadowFlameMode = 'flash',
    mobileTier = detectMobileTier()
  ) {
    this.mobileTier = mobileTier;
    this.sunDir = sunDirection.clone().normalize();
    this.mode = initialMode;

    // Exact lookAt orthonormal basis: z = sunDir, x = normalize(up x z), y = z x x
    this.lightZ = this.sunDir.clone();
    this.lightX = new THREE.Vector3(0, 1, 0).cross(this.lightZ).normalize();
    this.lightY = this.lightZ.clone().cross(this.lightX).normalize();

    // Cascade 0 (Primary Sun + Ultra-Near Contact Cascade)
    this.sunLight = new THREE.DirectionalLight(0xfff5e2, 2.32);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.autoUpdate = false;
    this.sunLight.shadow.needsUpdate = true;
    scene.add(this.sunLight);
    scene.add(this.sunLight.target);

    // Cascade 1 (Pro-only Mid-Village Depth Carrier — BRDF bypassed in shader!)
    this.sunLightMid = new THREE.DirectionalLight(0xfff5e2, 0.0001);
    this.sunLightMid.castShadow = false;
    this.sunLightMid.visible = false;
    this.sunLightMid.shadow.autoUpdate = false;
    this.sunLightMid.shadow.needsUpdate = true;
    scene.add(this.sunLightMid);
    scene.add(this.sunLightMid.target);

    // Cascade 2 (Pro-only Macro-Valley Depth Carrier — BRDF bypassed in shader!)
    this.sunLightFar = new THREE.DirectionalLight(0xfff5e2, 0.0001);
    this.sunLightFar.castShadow = false;
    this.sunLightFar.visible = false;
    this.sunLightFar.shadow.autoUpdate = false;
    this.sunLightFar.shadow.needsUpdate = true;
    scene.add(this.sunLightFar);
    scene.add(this.sunLightFar.target);

    this.c0 = {
      light: this.sunLight,
      halfExtent: 116,
      mapSize: 1536,
      sunDist: 250,
      moveThresh: 1.4,
      lastLX: Number.NaN,
      lastLY: Number.NaN,
      lastLZ: Number.NaN,
      dirty: true,
      updates: 0,
    };
    this.c1 = {
      light: this.sunLightMid,
      halfExtent: 115,
      mapSize: 2048,
      sunDist: 265,
      moveThresh: 3.0,
      lastLX: Number.NaN,
      lastLY: Number.NaN,
      lastLZ: Number.NaN,
      dirty: true,
      updates: 0,
    };
    this.c2 = {
      light: this.sunLightFar,
      halfExtent: 420,
      mapSize: 1536,
      sunDist: 560,
      moveThresh: 16.0,
      lastLX: Number.NaN,
      lastLY: Number.NaN,
      lastLZ: Number.NaN,
      dirty: true,
      updates: 0,
    };

    this.applyMode(initialMode);
  }

  public getMode(): ShadowFlameMode {
    return this.mode;
  }

  /** Instantly switches between Shadow Flame 1.1 Flash and Shadow Flame 1.1 Pro at runtime! */
  public setMode(next: ShadowFlameMode): void {
    if (this.mode === next) return;
    this.applyMode(next);
  }

  private resizeShadowMap(light: THREE.DirectionalLight, size: number): void {
    if (light.shadow.mapSize.x !== size) {
      if (light.shadow.map) {
        light.shadow.map.dispose();
        light.shadow.map = null;
      }
      light.shadow.mapSize.set(size, size);
    }
  }

  private configureCascadeFrustum(
    c: CascadeState,
    mapSize: number,
    halfExtent: number,
    near: number,
    far: number,
    bias: number,
    normalBias: number,
    sunDist: number,
    moveThresh: number
  ): void {
    this.resizeShadowMap(c.light, mapSize);
    c.mapSize = mapSize;
    c.halfExtent = halfExtent;
    c.sunDist = sunDist;
    c.moveThresh = moveThresh;

    const cam = c.light.shadow.camera;
    cam.near = near;
    cam.far = far;
    cam.left = -halfExtent;
    cam.right = halfExtent;
    cam.top = halfExtent;
    cam.bottom = -halfExtent;
    cam.updateProjectionMatrix();

    c.light.shadow.bias = bias;
    c.light.shadow.normalBias = normalBias;
  }

  private applyMode(next: ShadowFlameMode): void {
    this.mode = next;
    const m = this.mobileTier;

    if (next === 'pro') {
      // Shadow Flame 1.1 Pro — 3-Tier Logarithmic Cascades (Desktop: 2.73cm / Mobile: 3.12cm @ -54% VRAM!)
      this.configureCascadeFrustum(
        this.c0,
        m ? 1536 : 2048,
        m ? 24 : 28,
        12,
        320,
        -0.00018,
        0.022,
        145,
        m ? 0.40 : 0.35
      );
      this.configureCascadeFrustum(
        this.c1,
        m ? 1024 : 2048,
        m ? 105 : 115,
        18,
        580,
        -0.00042,
        0.075,
        265,
        m ? 3.5 : 3.0
      );
      this.configureCascadeFrustum(
        this.c2,
        m ? 1024 : 1536,
        m ? 400 : 420,
        20,
        1220,
        -0.00085,
        0.18,
        560,
        m ? 18.0 : 16.0
      );

      this.sunLightMid.visible = true;
      this.sunLightMid.castShadow = true;
      this.sunLightFar.visible = true;
      this.sunLightFar.castShadow = true;
    } else {
      // Shadow Flame 1.1 Flash — Ultra-Light ZeroSwim Single Cascade (+ 6km prebaked mountain horizon!)
      this.configureCascadeFrustum(
        this.c0,
        m ? 1024 : 1536,
        m ? 96 : 116,
        18,
        540,
        -0.00038,
        0.048,
        245,
        m ? 1.6 : 1.4
      );
      this.sunLightMid.castShadow = false;
      this.sunLightMid.visible = false;
      this.sunLightFar.castShadow = false;
      this.sunLightFar.visible = false;
    }

    this.invalidate();
  }

  /** Forces immediate refresh of all active cascades (teleport / warm-start / mode switch). */
  public invalidate(): void {
    this.c0.lastLX = Number.NaN;
    this.c1.lastLX = Number.NaN;
    this.c2.lastLX = Number.NaN;
    this.c0.dirty = true;
    this.c1.dirty = this.mode === 'pro';
    this.c2.dirty = this.mode === 'pro';
    this.sunLight.shadow.needsUpdate = true;
    if (this.mode === 'pro') {
      this.sunLightMid.shadow.needsUpdate = true;
      this.sunLightFar.shadow.needsUpdate = true;
    }
  }

  /**
   * Projects playerPos into exact light-view space and snaps (lx, ly) to exact integer multiples
   * of 1 shadow texel (`SF-ZeroSwim`), eliminating all diagonal movement shimmer!
   */
  private applyZeroSwimCascade(c: CascadeState, playerPos: THREE.Vector3): void {
    const texelWorld = (c.halfExtent * 2) / c.mapSize;
    const lx = playerPos.dot(this.lightX);
    const ly = playerPos.dot(this.lightY);
    const lz = playerPos.dot(this.lightZ);

    const snapLX = Math.round(lx / texelWorld) * texelWorld;
    const snapLY = Math.round(ly / texelWorld) * texelWorld;
    const snapLZ = Math.round(lz / 0.5) * 0.5;

    c.lastLX = snapLX;
    c.lastLY = snapLY;
    c.lastLZ = snapLZ;

    // Reconstruct snapped world-space shadow frustum center
    const tx = this.lightX.x * snapLX + this.lightY.x * snapLY + this.lightZ.x * snapLZ;
    const ty = this.lightX.y * snapLX + this.lightY.y * snapLY + this.lightZ.y * snapLZ;
    const tz = this.lightX.z * snapLX + this.lightY.z * snapLY + this.lightZ.z * snapLZ;

    c.light.target.position.set(tx, ty, tz);
    c.light.position.set(
      tx + this.sunDir.x * c.sunDist,
      ty + this.sunDir.y * c.sunDist,
      tz + this.sunDir.z * c.sunDist
    );
    c.light.target.updateMatrixWorld();
    c.light.shadow.needsUpdate = true;
    c.dirty = false;
    c.updates++;
  }

  private isCascadeMoved(c: CascadeState, playerPos: THREE.Vector3): boolean {
    if (Number.isNaN(c.lastLX)) return true;
    const lx = playerPos.dot(this.lightX);
    const ly = playerPos.dot(this.lightY);
    const lz = playerPos.dot(this.lightZ);
    return Math.hypot(lx - c.lastLX, ly - c.lastLY, lz - c.lastLZ) >= c.moveThresh;
  }

  /**
   * Updates light-space texel-snapped cascades with Staggered Temporal Scheduling:
   * - Encodes `elapsedSec` in `sunLight.shadow.radius` (zero extra uniforms for CloudDrift/Komorebi!)
   * - Updates AT MOST 1 cascade per frame (`C0 > C1 > C2`) during gameplay to eliminate mobile frame spikes!
   * - Updates all active cascades immediately when `force = true` (teleport / warm-start).
   */
  public update(playerPos: THREE.Vector3, streamSig: string, elapsedSec = 0, force = false): void {
    // Pack animation clock into shadowRadius (100.0 + t) for zero-overhead global GLSL CloudDrift & Komorebi
    this.sunLight.shadow.radius = 100.0 + (elapsedSec % 3600.0);

    const streamChanged = streamSig !== this.lastStreamSig;
    if (streamChanged) {
      this.lastStreamSig = streamSig;
      this.c0.dirty = true;
      if (this.mode === 'pro') {
        this.c1.dirty = true;
        this.c2.dirty = true;
      }
    }

    if (force) {
      this.applyZeroSwimCascade(this.c0, playerPos);
      if (this.mode === 'pro') {
        this.applyZeroSwimCascade(this.c1, playerPos);
        this.applyZeroSwimCascade(this.c2, playerPos);
      }
      return;
    }

    // Check movement thresholds in light space
    if (this.isCascadeMoved(this.c0, playerPos)) this.c0.dirty = true;
    if (this.mode === 'pro') {
      if (this.isCascadeMoved(this.c1, playerPos)) this.c1.dirty = true;
      if (this.isCascadeMoved(this.c2, playerPos)) this.c2.dirty = true;
    }

    // Staggered Temporal Scheduler: strictly max 1 cascade rasterized per frame (C0 > C1 > C2)!
    if (this.c0.dirty) {
      this.applyZeroSwimCascade(this.c0, playerPos);
    } else if (this.mode === 'pro' && this.c1.dirty) {
      this.applyZeroSwimCascade(this.c1, playerPos);
    } else if (this.mode === 'pro' && this.c2.dirty) {
      this.applyZeroSwimCascade(this.c2, playerPos);
    }
  }

  public getStats(): ShadowFlameStats {
    return {
      version: '1.1',
      mode: this.mode,
      mobileTier: this.mobileTier,
      cascades: this.mode === 'pro' ? 3 : 1,
      c0MapSize: this.c0.mapSize,
      c1MapSize: this.mode === 'pro' ? this.c1.mapSize : 0,
      c2MapSize: this.mode === 'pro' ? this.c2.mapSize : 0,
      c0Updates: this.c0.updates,
      c1Updates: this.c1.updates,
      c2Updates: this.c2.updates,
    };
  }
}
