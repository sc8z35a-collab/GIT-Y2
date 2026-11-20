"""E2: Tone mapper comparison for KHDR 1.2 (hue drift in perceptual & RGB space, mid-gray, contrast, saturation).
Usage: python3 -I docs/research/khdr_1_2/e2_tonemappers.py
"""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
REPO = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
import numpy as np
import colorlib as C

np.set_printoptions(suppress=True, linewidth=160)

colors = {
    'cedar_green #5e8452': C.hex709('#5e8452'),
    'broadleaf #4f7a3a': C.hex709('#4f7a3a'),
    'sky_zenith #437ec2': C.hex709('#437ec2'),
    'ocean_deep #0b2640': C.hex709('#0b2640'),
    'shallow #1f6470': C.hex709('#1f6470'),
    'kawara #5a5f66': C.hex709('#5a5f66'),
    'shikkui #e8e4da': C.hex709('#e8e4da'),
    'lamp_amber #ffb35c': C.hex709('#ffb35c'),
    'koban_red #ff2a1a': C.hex709('#ff2a1a'),
    'sunset #ff8a3c': C.hex709('#ff8a3c'),
    'sat_blue #2050ff': C.hex709('#2050ff'),
}
EVs = np.arange(-3.0, 6.01, 0.25)


def rgb_hue(c):
    r, g, b = c[..., 0], c[..., 1], c[..., 2]
    return np.degrees(np.arctan2(np.sqrt(3.0) * (g - b), 2 * r - g - b))


def wrap(d):
    return (d + 180.0) % 360.0 - 180.0


print('=== Mid-gray / white mapping (scene-linear exposed input -> display) ===')
for name, tm in C.TONEMAPPERS.items():
    g = np.array([[v, v, v] for v in (0.18, 0.18 * 2 ** 0.1)])
    o = tm(g)
    slope = (np.log2(C.luma709(o[1:2])) - np.log2(C.luma709(o[0:1]))) / 0.1
    clip_ev = None
    for ev in np.arange(0, 12, 0.05):
        v = 0.18 * 2 ** ev
        if C.luma709(tm(np.array([[v, v, v]])))[0] >= 0.995:
            clip_ev = ev
            break
    print(f'{name:18s} 0.18 -> lin {C.luma709(o[0:1])[0]:.4f} (sRGB {C.srgb_oetf(C.luma709(o[0:1]))[0]*255:6.1f})'
          f'  midtone log-contrast slope {slope[0]:.3f}  white(0.995) reached at {clip_ev:.2f} EV above 0.18')

print()
print('=== Hue drift over exposure sweep -3..+6 EV (only where output Oklab chroma > 0.02) ===')
print(f'{"color":22s} ' + ' '.join(f'{n:>18s}' for n in C.TONEMAPPERS))
summary = {n: [] for n in C.TONEMAPPERS}
for cname, alb in colors.items():
    x = alb[None, :] * (2.0 ** EVs)[:, None]
    _, _, hin = C.oklch(alb[None, :])
    row_ok, row_rgb = [], []
    for tname, tm in C.TONEMAPPERS.items():
        o = tm(x)
        _, Co, ho = C.oklch(o)
        m = Co > 0.02
        dok = np.abs(wrap(ho - hin[0]))[m]
        drgb = np.abs(wrap(rgb_hue(o) - rgb_hue(alb[None, :])[0]))[m]
        mo = float(dok.max()) if dok.size else float('nan')
        mr = float(drgb.max()) if drgb.size else float('nan')
        summary[tname].append(mo)
        row_ok.append(f'{mo:7.2f}°/{mr:6.2f}°rgb')
    print(f'{cname:22s} ' + ' '.join(f'{s:>18s}' for s in row_ok))
print('max Oklab-hue drift over all colors:')
for t, v in summary.items():
    print(f'   {t:18s} max {np.nanmax(v):6.2f}°  mean {np.nanmean(v):6.2f}°')

print()
print('=== Foliage saturation retention: Oklab chroma of output at +0/+1/+2/+3 EV (cedar green, sunlit) ===')
alb = colors['cedar_green #5e8452']
for tname, tm in C.TONEMAPPERS.items():
    vals = []
    for ev in (0, 1, 2, 3):
        o = tm(alb[None, :] * 2 ** ev)
        L, Cc, h = C.oklch(o)
        vals.append(f'L{L[0]:.2f}/C{Cc[0]:.3f}')
    print(f'{tname:18s} ' + '  '.join(vals))

print()
print('=== Bright saturated lights (+4 EV): output sRGB codes ===')
for cname in ('lamp_amber #ffb35c', 'koban_red #ff2a1a', 'sat_blue #2050ff', 'sky_zenith #437ec2'):
    alb = colors[cname]
    line = []
    for tname, tm in C.TONEMAPPERS.items():
        o = tm(alb[None, :] * 2 ** 4)
        line.append(f'{tname}:{np.round(C.srgb_oetf(o[0])*255).astype(int)}')
    print(cname, ' | '.join(line))
