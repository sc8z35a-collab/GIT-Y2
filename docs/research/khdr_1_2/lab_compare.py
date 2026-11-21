"""K-Lab: compare two capture folders from scripts/khdr_lab_capture.cjs (e.g. KHDR 1.1 vs 1.2 hyper).
Prints per-view statistics of the displayed images and writes side-by-side sheets.
Usage: python3 -I docs/research/khdr_1_2/lab_compare.py <dirA> <dirB> <outDir> [labelA] [labelB]
"""
import os
import sys
import json
import numpy as np
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import colorlib as C  # noqa: E402

a_dir, b_dir, out_dir = sys.argv[1], sys.argv[2], sys.argv[3]
la = sys.argv[4] if len(sys.argv) > 4 else 'A'
lb = sys.argv[5] if len(sys.argv) > 5 else 'B'
os.makedirs(out_dir, exist_ok=True)


def stats(path):
    im = np.asarray(Image.open(path).convert('RGB'), dtype=np.float64) / 255.0
    lin = C.srgb_eotf(im)
    Y = C.luma709(lin)
    L, Cc, _ = C.oklch(lin.reshape(-1, 3))
    code = im.max(axis=-1)
    return {
        'meanY': float(Y.mean()),
        'p05Y': float(np.percentile(Y, 5)),
        'p95Y': float(np.percentile(Y, 95)),
        'clip%': float(100 * np.mean(code >= 254 / 255)),
        'crush%': float(100 * np.mean(im.max(axis=-1) <= 3 / 255)),
        'chroma': float(Cc.mean()),
        'dr_ev': float(np.log2(max(np.percentile(Y, 99), 1e-4) / max(np.percentile(Y, 1), 1e-4))),
    }


names = sorted(f[:-4] for f in os.listdir(a_dir) if f.endswith('.png') and os.path.exists(os.path.join(b_dir, f)))
rows = []
print(f'{"view":14s} | {la:^44s} | {lb:^44s}')
print(f'{"":14s} | {"meanY  p95Y  clip%  crush% chroma DR(EV)":44s} | {"meanY  p95Y  clip%  crush% chroma DR(EV)":44s}')
for n in names:
    sa = stats(os.path.join(a_dir, n + '.png'))
    sb = stats(os.path.join(b_dir, n + '.png'))
    rows.append({'view': n, la: sa, lb: sb})
    fmt = lambda s: f"{s['meanY']:.3f} {s['p95Y']:.3f} {s['clip%']:5.1f} {s['crush%']:6.1f} {s['chroma']:.3f} {s['dr_ev']:5.1f}"
    print(f'{n:14s} | {fmt(sa):44s} | {fmt(sb):44s}')
    ia = Image.open(os.path.join(a_dir, n + '.png')).convert('RGB')
    ib = Image.open(os.path.join(b_dir, n + '.png')).convert('RGB')
    w, h = ia.size
    sheet = Image.new('RGB', (w, h * 2 + 8), (20, 20, 20))
    sheet.paste(ia, (0, 0))
    sheet.paste(ib.resize((w, h)), (0, h + 8))
    d = ImageDraw.Draw(sheet)
    d.text((8, 6), la, fill=(255, 255, 0))
    d.text((8, h + 14), lb, fill=(255, 255, 0))
    sheet.save(os.path.join(out_dir, f'{n}_compare.webp'), quality=85)
with open(os.path.join(out_dir, 'compare.json'), 'w') as f:
    json.dump(rows, f, indent=2)
