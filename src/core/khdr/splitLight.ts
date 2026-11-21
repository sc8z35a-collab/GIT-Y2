import * as THREE from 'three';

let installed = false;

/**
 * KHDR 1.2 hyper — K-SplitLight.
 *
 * Patches three.js `opaque_fragment` so every opaque lit material writes the *direct-light luminance fraction*
 *   f_d = Y(directDiffuse + directSpecular) / Y(outgoingLight)
 * into the (previously unused) alpha channel of the RGBA16F HDR buffer. The post pipeline can then apply
 * screen-space AO only to ambient light and screen-space contact shadows only to direct sunlight
 * (KHDR 1.1 multiplied both into the whole radiance, darkening sunlit creases by up to 4x too much).
 *
 * - Zero extra render targets or bandwidth: the alpha channel already exists.
 * - MSAA-safe: a single linear quantity, so the hardware box resolve averages it correctly.
 * - Unlit / transparent / custom ShaderMaterials keep their alpha (sky & ocean write 1.0 => "all direct").
 * - Harmless for KHDR OFF / KHDR 1.1 (the canvas has no alpha and 1.1 ignores the HDR alpha).
 */
export function installKhdrSplitLight(): void {
  if (installed) return;
  installed = true;
  const anchor = 'gl_FragColor = vec4( outgoingLight, diffuseColor.a );';
  const chunk = THREE.ShaderChunk.opaque_fragment;
  if (!chunk.includes(anchor)) return;
  THREE.ShaderChunk.opaque_fragment = chunk.replace(
    anchor,
    `${anchor}
#if defined( OPAQUE ) && defined( RE_Direct )
	{
		// KHDR 1.2 hyper K-SplitLight: alpha = direct-light luminance fraction
		float khdrDirectL = dot( reflectedLight.directDiffuse + reflectedLight.directSpecular, vec3( 0.2126, 0.7152, 0.0722 ) );
		float khdrTotalL = dot( outgoingLight, vec3( 0.2126, 0.7152, 0.0722 ) );
		gl_FragColor.a = clamp( khdrDirectL / max( khdrTotalL, 1e-6 ), 0.0, 1.0 );
	}
#endif`
  );
}
