"""E3b: realistic-content LUT accuracy (code values and Delta E ITP) + soft-knee gamut compression check."""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
REPO = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
import numpy as np
import colorlib as C
from kfilmic3 import kfilmic_v3, kfilmic_v3_soft
rng = np.random.default_rng(11)
# realistic content: Oklab chroma <= 0.18 at mid L, luminance -8..+5 EV
n = 60000
L = rng.uniform(0.25, 0.85, n); Cc = rng.uniform(0, 0.18, n); h = rng.uniform(-np.pi, np.pi, n)
M2inv = np.linalg.inv(C._OK_M2); M1inv = np.linalg.inv(C._OK_M1)
lab = np.stack([L, Cc*np.cos(h), Cc*np.sin(h)], -1)
rgb = C.apply_mat(M1inv, C.apply_mat(M2inv, lab) ** 3)
ok = np.all(rgb > 0, -1); rgb = rgb[ok]
rgb = rgb / C.luma709(rgb)[:, None] * (2.0 ** rng.uniform(-8, 5, len(rgb)))[:, None]
def make_shaper(lo=-12.0, hi=8.0):
    enc = lambda x: np.clip((np.log2(np.maximum(x, 2.0 ** lo)) - lo) / (hi - lo), 0, 1)
    dec = lambda u: 2.0 ** (lo + u * (hi - lo))
    return enc, dec
def bake(N, dec, tm):
    g = np.linspace(0, 1, N); R, G, B = np.meshgrid(g, g, g, indexing='ij')
    pts = np.stack([dec(R), dec(G), dec(B)], -1).reshape(-1, 3)
    return C.srgb_oetf(tm(pts)).reshape(N, N, N, 3).astype(np.float16).astype(np.float64)
def trilinear(lut, u, wbits=8):
    N = lut.shape[0]; p = u * (N - 1); i0 = np.clip(np.floor(p).astype(int), 0, N - 2); f = p - i0
    f = np.round(f * (1 << wbits)) / (1 << wbits); out = 0
    for dx in (0, 1):
        wx = f[:, 0] if dx else 1 - f[:, 0]
        for dy in (0, 1):
            wy = f[:, 1] if dy else 1 - f[:, 1]
            for dz in (0, 1):
                wz = f[:, 2] if dz else 1 - f[:, 2]
                out = out + (wx*wy*wz)[:, None] * lut[i0[:, 0]+dx, i0[:, 1]+dy, i0[:, 2]+dz]
    return out
ramp_t = np.linspace(0, 1, 4096)
horizon, zenith = np.array([0.48, 0.63, 0.78]), np.array([0.056, 0.21, 0.54])
sky = (horizon[None, :]*(1-ramp_t[:, None]) + zenith[None, :]*ramp_t[:, None]) * 1.4
enc, dec = make_shaper()
for name, tm in (('v3_hardclip', kfilmic_v3), ('v3_softknee', kfilmic_v3_soft)):
    ref = C.srgb_oetf(tm(rgb)) * 255; refs = C.srgb_oetf(tm(sky)) * 255
    for N in (33, 48, 65):
        lut = bake(N, dec, tm)
        e = np.abs(trilinear(lut, enc(rgb))*255 - ref).max(1)
        es = np.abs(trilinear(lut, enc(sky))*255 - refs).max()
        print(f'{name:12s} N={N:2d} realistic-content: max {e.max():6.2f}  p99.9 {np.percentile(e,99.9):5.2f}  p99 {np.percentile(e,99):5.2f}  mean {e.mean():.3f} | sky ramp max {es:5.2f}')
# hue drift check of soft variant
for nm, hx in (('cedar','#5e8452'),('koban','#ff2a1a'),('sky','#437ec2'),('blue','#2050ff')):
    a = C.hex709(hx); ev = np.arange(-3, 6.01, 0.25); o = kfilmic_v3_soft(a[None,:]*(2**ev)[:,None])
    lab = C.oklab(o); hh = np.degrees(np.arctan2(lab[:,2], lab[:,1])); c = np.hypot(lab[:,1], lab[:,2])
    h0 = np.degrees(np.arctan2(C.oklab(a[None,:])[0,2], C.oklab(a[None,:])[0,1]))
    d = np.abs((hh - h0 + 180) % 360 - 180)[c > 0.02]
    print(f'soft-knee hue drift {nm}: max {d.max() if d.size else 0:.2f} deg')
print('--- perceptual error (Delta E ITP, display white = 400 nits) ---')
for name, tm in (('v3_softknee', kfilmic_v3_soft),):
    ref_lin = tm(rgb)
    for N in (33, 48, 65):
        lut = bake(N, dec, tm)
        approx_lin = C.srgb_eotf(np.clip(trilinear(lut, enc(rgb)), 0, 1))
        d = C.delta_e_itp(ref_lin * 400.0, approx_lin * 400.0)
        print(f'{name} N={N}: dE_ITP mean {d.mean():.3f}  p99 {np.percentile(d,99):.3f}  p99.9 {np.percentile(d,99.9):.3f}  max {d.max():.3f}  frac>1JND {np.mean(d>1.0)*100:.2f}%')
