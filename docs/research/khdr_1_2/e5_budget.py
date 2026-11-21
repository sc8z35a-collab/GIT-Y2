"""E5/E9/E10: POCO F7 budget model (DRAM traffic of the KHDR post chain), depth precision, FP16 radiometric range."""
import numpy as np

RES = {
    'HD 1280x591': (1280, 591),
    'FHD 1920x887': (1920, 887),
    '1.5K 2560x1182': (2560, 1182),
    'native 2772x1280': (2772, 1280),
}

# bytes per pixel (full-res pixel of the respective resolution) -- first-order DRAM model
KHDR11 = {
    'scene MSAA resolve (RGBA16F+D24 store)': 12.0,
    'DepthFx (1/2 res, depth reads + RGBA8 write)': 7.0,
    'bloom prefilter 1/4 (reads full HDR)': 8.5,
    'bloom pyramid 1/8..1/32 down+up': 1.0,
    'composite (HDR+depth+fx+bloom reads, RGBA8 write)': 18.0,
}
# KHDR 1.2 hyper: internal-res stage (px_int) and output-res stage (px_out); TAA resolve fused with composite (MRT)
H12_INT = {
    'scene resolve (RGBA16F + depth, no MSAA w/ TAA)': 12.0,
    'K-SplitLight: ambient-fraction in alpha (free)': 0.0,
    'DepthFx 1/2 (GTAO+SSCS+shafts, RGBA8)': 7.0,
    'bloom 13-tap chain from 1/2 (1/2..1/64)': 13.0,
    'histogram (1/8 scatter) + adapt + bilateral grid': 1.0,
}
H12_OUT = {
    'TAAU resolve: history read+write RGBA16F': 16.0,
    'TAAU: current-frame (internal) samples + depth/MV': 6.0,
    'composite: read resolved HDR + small LUT/grid/bloom': 9.5,
    'final RGBA8 write to canvas': 4.0,
}

print('=== DRAM traffic of the post chain (first-order model, excludes geometry/texture/shadow passes) ===')
for name, (w, h) in RES.items():
    mp = w * h / 1e6
    b11 = sum(KHDR11.values()) * w * h
    print(f'KHDR 1.1  @ {name:18s} {sum(KHDR11.values()):5.1f} B/px  {b11/1e6:6.1f} MB/frame  60fps {b11*60/1e9:5.1f} GB/s  120fps {b11*120/1e9:5.1f} GB/s')
out_w, out_h = RES['native 2772x1280']
for scale_name, s in (('internal 0.67 (1857x857)', 0.67), ('internal 0.75 (2079x960)', 0.75), ('internal 1.0 (native)', 1.0)):
    iw, ih = int(out_w * s), int(out_h * s)
    b = sum(H12_INT.values()) * iw * ih + sum(H12_OUT.values()) * out_w * out_h
    print(f'KHDR 1.2h {scale_name:26s} -> 2772x1280: {b/1e6:6.1f} MB/frame  60fps {b*60/1e9:5.1f} GB/s  90fps {b*90/1e9:5.1f} GB/s  120fps {b*120/1e9:5.1f} GB/s')

print()
print('LPDDR5X peak (4x16-bit): 8533 MT/s -> %.1f GB/s ; 9600 MT/s -> %.1f GB/s' % (8533e6 * 8 / 1e9, 9600e6 * 8 / 1e9))
print('Energy rule of thumb: ~15 pJ/bit end-to-end -> 1 GB/s ~= %.2f W' % (8e9 * 15e-12))

print()
print('=== E9: 24-bit depth (near=0.25, far=22000, standard Z) vs reversed-Z float32 ===')
n, f = 0.25, 22000.0
for z in (1, 10, 50, 100, 500, 1000, 3000, 6000, 12000):
    # window depth d = (f/(f-n)) * (1 - n/z); dz/dd = z^2 (f-n)/(f n)
    dz24 = z * z * (f - n) / (f * n) / (2 ** 24)
    dzrev = z * 2.0 ** -23 * 1.0  # reversed-Z float: relative precision ~ 2^-23 (rough, uniform in log)
    print(f'  z={z:6d} m: 24-bit step {dz24*1000:12.3f} mm   reversed-Z F32 step ~{dzrev*1000:9.4f} mm')
print('  inner/outer ocean planes are 0.70 m apart -> 24-bit z-fight beyond ~%.0f m' % (np.sqrt(0.70 * (2 ** 24) * f * n / (f - n))))

print()
print('=== E10: FP16 coverage of physical luminance (scale: 1.0 = 100 cd/m^2, GT7 convention) ===')
cases = [('bare sun disc', 1.6e9), ('sunlit snow/cloud', 16000), ('sunlit white plaster (shikkui)', 22000),
         ('clear sky', 4000), ('shaded cedar forest floor', 200), ('tatami room daylit', 30),
         ('mine: lantern-lit wall', 5), ('mine: deep unlit rock (lamp spill)', 0.02), ('moonless night ground', 0.0005)]
for name, nits in cases:
    v = nits / 100.0
    status = 'OVERFLOW(>65504)' if v > 65504 else ('subnormal(<6.1e-5)' if v < 6.1e-5 else 'normal')
    print(f'  {name:34s} {nits:12.4g} nits -> {v:12.4g}  fp16 {status}')
print('  -> with pre-exposure (scale by current exposure on CPU, e.g. x2^-6 outdoors, x2^+6 in the mine) every')
print('     case except the bare sun lands in the fp16 normal range with 2^-11 relative precision.')
