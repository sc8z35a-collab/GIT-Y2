"""R4: Fit K-Glare (bloom pyramid level weights) to the CIE 2002 general disability glare spread function
(Vos & van den Berg, CIE 135/1999 & CIE 146:2002) for a young observer viewing the POCO F7 screen.
Output: per-level weights for a 6-level pyramid (1/2..1/64) and the total veiling fraction k.
Usage: python3 -I docs/research/khdr_1_2/r4_cie_glare_fit.py
"""
import numpy as np


def cie_gsf(theta_deg, age=20.0, p=0.5):
    """CIE 2002 general glare spread function L_eq/E_gl [sr^-1], theta in degrees (0.1..100 deg)."""
    t = np.asarray(theta_deg, dtype=np.float64)
    a = (age / 70.0) ** 4
    term1 = (1 - 0.08 * a) * (9.2e6 / (1 + (t / 0.0046) ** 2) ** 1.5 + 1.5e5 / (1 + (t / 0.045) ** 2) ** 1.5)
    term2 = (1 + 1.6 * a) * ((400.0 / (1 + (t / 0.1) ** 2) + 3e-8 * t ** 2)
                             + p * (1300.0 / (1 + (t / 0.1) ** 2) ** 1.5 + 0.8 / (1 + (t / 0.1) ** 2) ** 0.5))
    return term1 + term2 + 2.5e-3 * p


# angular sampling (degrees) and solid-angle weights for radial integration
th = np.logspace(-3, np.log10(60.0), 20000)
dth = np.gradient(th)
ring = 2 * np.pi * np.sin(np.radians(th)) * np.radians(dth)          # sr per ring
psf = cie_gsf(th)
total = np.sum(psf * ring)
print(f'CIE GSF (age 20, p 0.5): integral over 0.001..60 deg = {total:.4f} (should be ~1)')
for lim in (0.05, 0.1, 0.5, 1.0, 2.0, 5.0, 10.0, 30.0):
    frac = np.sum((psf * ring)[th > lim]) / total
    print(f'  energy outside {lim:5.2f} deg: {frac*100:6.2f}%')

# screen geometry: vertical FOV 62 deg (main.ts camera), rows per resolution
for name, rows in (('FHD 887 rows', 887), ('1.5K 1182 rows', 1182)):
    deg_per_px = 62.0 / rows
    print(f'{name}: {deg_per_px:.4f} deg/px; 1 px = {deg_per_px*60:.2f} arcmin')

# Model: final glare = sum_i w_i * G(sigma_i) with sigma_i = s0 * 2^i full-res px (levels 1/2..1/64).
rows = 1182
deg_per_px = 62.0 / rows
s0 = 1.25                     # effective Gaussian sigma (full-res px) of the 1/2 level after the 13-tap + tent chain
sig_px = s0 * 2.0 ** np.arange(1, 7)        # 1/2 .. 1/64 levels
sig_deg = sig_px * deg_per_px
# target: the scattered (non-core) part of the PSF beyond ~1.5 px (core is rendered sharp by the image itself)
core = 1.5 * deg_per_px
mask = th > core
target = np.where(mask, psf, 0.0)
target_energy = np.sum(target * ring)


def gauss2d(theta, s):
    # normalized 2D gaussian (per sr) for small angles, theta & s in deg
    sr = np.radians(s)
    return np.exp(-0.5 * (theta / s) ** 2) / (2 * np.pi * sr * sr)


A = np.stack([gauss2d(th, s) for s in sig_deg], axis=1)
# weighted least squares in log-ish sense: weight rings by solid angle (energy) and by 1/target for shape
wts = ring * mask
Aw = A * wts[:, None]
bw = target * wts
w, *_ = np.linalg.lstsq(Aw, bw, rcond=None)
w = np.clip(w, 0, None)
fit = A @ w
print('\nlevel sigma(px) sigma(deg)  weight   share')
for i, (sp, sd, wi) in enumerate(zip(sig_px, sig_deg, w)):
    print(f'  1/{2**(i+1):<3d} {sp:7.1f} {sd:9.3f}  {wi:.5f}  {wi/max(w.sum(),1e-12)*100:5.1f}%')
print(f'veiling fraction k (energy of scattered part, beyond {core*60:.1f} arcmin) = {target_energy:.4f}')
print(f'fitted pyramid energy = {w.sum():.4f}')
for lim in (0.2, 0.5, 1.0, 2.0, 5.0):
    m = th > lim
    print(f'  energy beyond {lim:4.1f} deg: CIE {np.sum((psf*ring)[m]):.4f}  fit {np.sum((fit*ring)[m]):.4f}')


# ---- refit: non-negative least squares (Lawson-Hanson) in a log-weighted sense + uniform far veil ----
def nnls(A, b, iters=200):
    m, n = A.shape
    P = np.zeros(n, bool)
    x = np.zeros(n)
    for _ in range(iters):
        wgrad = A.T @ (b - A @ x)
        if P.all() or np.max(np.where(~P, wgrad, -np.inf)) <= 1e-12:
            break
        j = int(np.argmax(np.where(~P, wgrad, -np.inf)))
        P[j] = True
        while True:
            z = np.zeros(n)
            z[P] = np.linalg.lstsq(A[:, P], b, rcond=None)[0]
            if np.all(z[P] > 0):
                x = z
                break
            neg = P & (z <= 0)
            alpha = np.min(x[neg] / (x[neg] - z[neg]))
            x = x + alpha * (z - x)
            P = P & (x > 1e-15)
    return x


far = 5.0                                   # beyond this angle use a uniform veil (screen-average excess)
mask2 = (th > core) & (th <= far)
wts2 = ring * mask2 / np.maximum(target, 1e-12) ** 0.5   # emphasise the tail shape (sqrt-relative weighting)
A2 = A * wts2[:, None]
b2 = target * wts2
w2 = nnls(A2, b2)
fit2 = A @ w2
far_energy = np.sum((psf * ring)[th > far])
print('\nNNLS refit (levels 1/2..1/64) + uniform veil for > 5 deg:')
for i, (sp, sd, wi) in enumerate(zip(sig_px, sig_deg, w2)):
    print(f'  1/{2**(i+1):<3d} sigma {sp:6.1f}px {sd:7.3f}deg  weight {wi:.5f}')
print(f'  uniform far veil (energy beyond {far} deg) = {far_energy:.4f}')
for lim in (0.2, 0.5, 1.0, 2.0, 4.0):
    m = (th > lim) & (th <= far)
    print(f'  energy in ({lim:3.1f}, {far}] deg: CIE {np.sum((psf*ring)[m]):.4f}  fit {np.sum((fit2*ring)[m]):.4f}')
print(f'  total added glare energy per unit excess: pyramid {w2.sum():.4f} + veil {far_energy:.4f} = {w2.sum()+far_energy:.4f}')
