"""E8: Albedo plausibility audit of all 212 WebP tiles (mean linear luminance, p5/p95, saturation)."""
import os, sys, glob
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
REPO = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
import numpy as np
from PIL import Image
import colorlib as C
tiles = sorted(glob.glob(os.path.join(REPO, 'public', 'textures', 'tiles', '*.webp')))
rows = []
for f in tiles:
    a = np.asarray(Image.open(f).convert('RGB'), dtype=np.float64) / 255.0
    lin = C.srgb_eotf(a)
    Y = C.luma709(lin)
    L, Cc, h = C.oklch(lin.reshape(-1, 3))
    rows.append((os.path.basename(f)[:-5], Y.mean(), np.percentile(Y, 5), np.percentile(Y, 95), Cc.mean(),
                 np.log2(np.percentile(Y, 95) / max(np.percentile(Y, 5), 1e-4))))
rows.sort(key=lambda r: r[1])
Ym = np.array([r[1] for r in rows])
print(f'tiles={len(rows)}  mean-albedo(Y) median {np.median(Ym):.3f}  min {Ym.min():.3f}  max {Ym.max():.3f}')
print('histogram of mean Y:', np.histogram(Ym, bins=[0,0.02,0.04,0.08,0.15,0.25,0.4,0.6,0.8,1.0])[0].tolist(), 'bins [0,.02,.04,.08,.15,.25,.4,.6,.8,1]')
print('darkest 12:'); [print(f'   {r[0]:26s} Y={r[1]:.3f} p5={r[2]:.3f} p95={r[3]:.3f} C={r[4]:.3f} intra-DR={r[5]:.1f}EV') for r in rows[:12]]
print('brightest 12:'); [print(f'   {r[0]:26s} Y={r[1]:.3f} p5={r[2]:.3f} p95={r[3]:.3f} C={r[4]:.3f} intra-DR={r[5]:.1f}EV') for r in rows[-12:]]
names = {r[0]: r for r in rows}
print('key terrain / landmark tiles:')
for k in ('sand_coarse','basalt_cliff','striated_rock','lush_grass','dry_grass','deep_moss','gravel_road','root_earth','stream_pebbles','coal_seam_rock','lichen_rock','tree_bark','foliage_green','shrub_foliage','tall_grass','ivory_plaster','cream_plaster','washi_plaster','tatami_plain','slate_roof_dark','charred_cedar','dark_hardwood','shell_sand','black_volcanic_gravel'):
    if k in names:
        r = names[k]; print(f'   {k:24s} Y={r[1]:.3f}  p5={r[2]:.3f} p95={r[3]:.3f}  chroma={r[4]:.3f}  intra-DR={r[5]:.1f}EV')
hi_dr = [r for r in rows if r[5] > 4.5]
print(f'tiles with intra-tile p95/p5 > 4.5 EV (likely baked lighting/shadows): {len(hi_dr)} ->', ', '.join(r[0] for r in hi_dr[:20]))
