/*
 * K-Lab: headless capture harness for KHDR verification (dev tool, not shipped with the game).
 *
 * Usage (dev server must be running: `npm run dev`):
 *   node scripts/khdr_lab_capture.cjs <outDir> [khdrMode=hyper] [shadow=flash] [res=HD]
 *   (env KHDR_URL=<base url> to target `vite preview`, KHDR_VIEWS=village,mine_drift to capture a subset)
 *
 * Captures fixed views through the game's own debug API (window.__KUROISO_DEBUG__), writes PNGs,
 * the KHDR telemetry and every console / page error to <outDir>/report.json.
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const outDir = process.argv[2] || 'khdr-lab-out';
const khdrMode = process.argv[3] || 'hyper';
const shadow = process.argv[4] || 'flash';
const res = process.argv[5] || 'HD';
const base = process.env.KHDR_URL || 'http://127.0.0.1:5173/';

const VIEWS = [
  { name: 'beach', preset: 'beach' },
  { name: 'village', preset: 'village' },
  { name: 'summit', preset: 'summit' },
  { name: 'caldera', preset: 'caldera' },
  { name: 'h01_to_door', house: ['H01', 0.3, 0.45, -2.6, Math.PI, -0.05] },
  { name: 'h01_to_back', house: ['H01', 0.3, 0.45, 1.2, 0.0, -0.08] },
  { name: 'mine_drift', house: ['M01', 0.0, 0.04, -58.0, 0.0, -0.02] },
  { name: 'mine_exit', house: ['M01', 0.0, 0.04, -27.0, Math.PI, 0.02] },
];

const only = (process.env.KHDR_VIEWS || '').split(',').filter(Boolean);
const views = only.length ? VIEWS.filter((v) => only.includes(v.name)) : VIEWS;

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({
    args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 591 }, deviceScaleFactor: 1 });
  const logs = [];
  page.on('console', (m) => logs.push(`[${m.type()}] ${m.text()}`));
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));

  const url = `${base}?skipIntro=1&hideHud=1&res=${res}&tier=mobile&shadow=${shadow}&khdr=${khdrMode}&tp=beach`;
  const t0 = Date.now();
  await page.goto(url);
  await page.waitForFunction(() => window.__KUROISO_READY__ === true, null, { timeout: 300000 });
  await page.evaluate(() => window.__KUROISO_DEBUG__.setPaused(true));
  const report = { url, loadMs: Date.now() - t0, views: [], logs };

  for (const v of views) {
    await page.evaluate((view) => {
      const d = window.__KUROISO_DEBUG__;
      if (view.preset) d.teleportPreset(view.preset);
      else d.teleportHouse(...view.house);
    }, v);
    // Let streaming, shadow cascades and (for hyper) the asynchronous histogram/adaptation settle.
    for (let i = 0; i < 10; i++) {
      await page.evaluate(() => window.__KUROISO_DEBUG__.renderFrame());
      await page.waitForTimeout(40);
    }
    const file = path.join(outDir, `${v.name}.png`);
    await page.locator('#webgl-canvas').screenshot({ path: file });
    const stats = await page.evaluate(() => {
      const d = window.__KUROISO_DEBUG__;
      return { stats: d.getStats(), khdr: d.getKhdr ? d.getKhdr() : null };
    });
    report.views.push({ name: v.name, file, ...stats });
    process.stdout.write(`captured ${v.name}\n`);
  }

  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));
  await browser.close();
  const errors = logs.filter((l) => /error|THREE\.WebGLProgram|pageerror/i.test(l));
  process.stdout.write(`load ${report.loadMs} ms, ${logs.length} log lines, ${errors.length} error lines\n`);
  if (errors.length) process.stdout.write(errors.slice(0, 20).join('\n') + '\n');
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
