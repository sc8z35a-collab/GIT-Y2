"""E2b: hue drift split into 'normal exposure' (-3..+2 EV) and 'highlight' (+2..+6 EV) ranges,
measured in two perceptual spaces (Oklab and ICtCp), plus the K-Filmic v3 prototype."""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
REPO = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
import numpy as np
import colorlib as C
from kfilmic3 import kfilmic_v3

colors = {
    'cedar_green': C.hex709('#5e8452'), 'broadleaf': C.hex709('#4f7a3a'),
    'sky_zenith': C.hex709('#437ec2'), 'ocean_deep': C.hex709('#0b2640'),
    'shallow': C.hex709('#1f6470'), 'lamp_amber': C.hex709('#ffb35c'),
    'koban_red': C.hex709('#ff2a1a'), 'sunset': C.hex709('#ff8a3c'), 'sat_blue': C.hex709('#2050ff'),
}


def oklab_any(c709):
    lms = C.apply_mat(C._OK_M1, c709)
    return C.apply_mat(C._OK_M2, np.cbrt(lms))


def hue_ok(c709):
    lab = oklab_any(c709)
    return np.degrees(np.arctan2(lab[..., 2], lab[..., 1])), np.hypot(lab[..., 1], lab[..., 2])


def hue_itp(c709, nits=100.0):
    itp = C.ictcp_from_2020_nits(C.apply_mat(C.M709_TO_2020, np.clip(c709, 0, None)) * nits)
    return np.degrees(np.arctan2(itp[..., 2], itp[..., 1])), np.hypot(itp[..., 1], itp[..., 2])


def wrap(d):
    return (d + 180.0) % 360.0 - 180.0


TMS = dict(C.TONEMAPPERS)
TMS['KFilmic_v3(709)'] = lambda x: kfilmic_v3(x, gamut='709')
TMS['KFilmic_v3(P3)'] = lambda x: C.apply_mat(C.MP3_TO_709, kfilmic_v3(x, gamut='P3'))  # back to 709 coords for hue

ranges = {'normal -3..+2EV': np.arange(-3, 2.01, 0.25), 'highlight +2..+6EV': np.arange(2, 6.01, 0.25)}
for rname, EVs in ranges.items():
    print(f'=== {rname}: max |hue drift| (Oklab° / ICtCp°), chroma>0.02 ===')
    print(f'{"color":12s} ' + ' '.join(f'{n:>17s}' for n in TMS))
    agg = {n: [] for n in TMS}
    for cname, alb in colors.items():
        x = alb[None, :] * (2.0 ** EVs)[:, None]
        h0, _ = hue_ok(alb[None, :])
        hi0, _ = hue_itp(alb[None, :] * 0.18 / max(C.luma709(alb[None, :])[0], 1e-6))
        cells = []
        for tname, tm in TMS.items():
            o = tm(x)
            ho, co = hue_ok(o)
            hi, ci = hue_itp(o)
            m = co > 0.02
            # ICtCp hue reference: tone-mapped output at the lowest EV with chroma (relative), compare drift along sweep
            d_ok = np.abs(wrap(ho - h0[0]))[m]
            d_itp = np.abs(wrap(hi - hi[m][0]))[m] if m.any() else np.array([])
            a = d_ok.max() if d_ok.size else np.nan
            b = d_itp.max() if d_itp.size else np.nan
            agg[tname].append(a)
            cells.append(f'{a:6.2f}/{b:6.2f}')
        print(f'{cname:12s} ' + ' '.join(f'{c:>17s}' for c in cells))
    print('   mean Oklab drift: ' + '  '.join(f'{n}={np.nanmean(v):.2f}' for n, v in agg.items()))
    print()

# Mid-gray and highlight behaviour for v3
for name in ('KFilmic_v3(709)',):
    tm = TMS[name]
    for v in (0.05, 0.18, 0.5, 1.0, 2.0, 4.0, 8.0):
        o = tm(np.array([[v, v, v]]))
        print(f'{name} gray {v:5.2f} -> {o[0,0]:.4f} (sRGB {C.srgb_oetf(o[0,0])*255:6.1f})')

# Gamut usage: how much more chroma P3 output can show for saturated lights (Oklab chroma of result)
print()
for cname in ('koban_red', 'lamp_amber', 'sunset', 'sat_blue', 'cedar_green', 'shallow'):
    alb = colors[cname]
    for ev in (0, 1, 2):
        x = alb[None, :] * 2 ** ev
        o709 = kfilmic_v3(x, gamut='709')
        oP3 = C.apply_mat(C.MP3_TO_709, kfilmic_v3(x, gamut='P3'))
        _, c709 = hue_ok(o709)
        _, cp3 = hue_ok(oP3)
        print(f'{cname:12s} +{ev}EV  chroma 709={c709[0]:.3f}  P3={cp3[0]:.3f}  gain={cp3[0]/max(c709[0],1e-6):.2f}x')
