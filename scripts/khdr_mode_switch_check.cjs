/*
 * K-Lab: KHDR mode-switch regression check (dev tool, not shipped with the game).
 *
 * Usage (a dev or preview server must be running):
 *   KHDR_URL=http://127.0.0.1:4173/ node scripts/khdr_mode_switch_check.cjs <outDir>
 *
 * Starts in KHDR 1.2 hyper (canvas without MSAA), switches hyper -> OFF -> 1.1 -> hyper through the debug API
 * and checks the renderer state after each switch (OFF must use ACES, 1.1 / hyper NoToneMapping). It also loads
 * a page that starts in OFF (canvas MSAA) for comparison with the OFF image reached at runtime, which goes through
 * the MSAA HDR target + copy pass. Writes PNGs and <outDir>/mode_switch.json; exits 1 on a failed check.
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const outDir = process.argv[2] || 'khdr-mode-switch-out';
const base = process.env.KHDR_URL || 'http://127.0.0.1:5173/';
const TONE = { 0: 'None', 4: 'ACESFilmic' };

async function open(browser, khdr, logs) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 591 }, deviceScaleFactor: 1 });
  page.on('console', (m) => logs.push(`[${m.type()}] ${m.text()}`));
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
  await page.goto(`${base}?skipIntro=1&hideHud=1&res=HD&tier=mobile&shadow=flash&khdr=${khdr}&tp=beach`);
  await page.waitForFunction(() => window.__KUROISO_READY__ === true, null, { timeout: 300000 });
  await page.evaluate(() => window.__KUROISO_DEBUG__.setPaused(true));
  return page;
}

async function settle(page, frames) {
  for (let i = 0; i < frames; i++) {
    await page.evaluate(() => window.__KUROISO_DEBUG__.renderFrame());
    await page.waitForTimeout(40);
  }
}

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({
    args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
  });
  const logs = [];
  const steps = [];
  const failures = [];
  const page = await open(browser, 'hyper', logs);
  const expect = { hyper: 0, off: 4, '1.1': 0 };
  for (const mode of ['hyper', 'off', '1.1', 'hyper']) {
    if (steps.length) await page.evaluate((m) => window.__KUROISO_DEBUG__.setGraphics({ khdr: m }), mode);
    await settle(page, mode === 'hyper' ? 8 : 4);
    const file = path.join(outDir, `${String(steps.length).padStart(2, '0')}_${mode}.png`);
    await page.locator('#webgl-canvas').screenshot({ path: file });
    const k = await page.evaluate(() => window.__KUROISO_DEBUG__.getKhdr());
    const step = { mode, file, active: k.mode, toneMapping: TONE[k.toneMapping] ?? k.toneMapping, exposure: k.toneMappingExposure, canvasMsaa: k.canvasMsaa, shaderErrors: k.shaderErrors };
    steps.push(step);
    if (k.mode !== mode) failures.push(`${mode}: active mode is ${k.mode}`);
    if (k.toneMapping !== expect[mode]) failures.push(`${mode}: renderer tone mapping ${step.toneMapping}`);
    process.stdout.write(`${JSON.stringify(step)}\n`);
  }
  await page.close();

  // Reference: OFF from the start (canvas created with MSAA, direct forward rendering)
  const ref = await open(browser, '0', logs);
  await settle(ref, 4);
  const refFile = path.join(outDir, 'ref_off_native.png');
  await ref.locator('#webgl-canvas').screenshot({ path: refFile });
  const rk = await ref.evaluate(() => window.__KUROISO_DEBUG__.getKhdr());
  steps.push({ mode: 'off (native)', file: refFile, active: rk.mode, toneMapping: TONE[rk.toneMapping] ?? rk.toneMapping, canvasMsaa: rk.canvasMsaa });
  await browser.close();

  const errors = logs.filter((l) => /error|THREE\.WebGLProgram|pageerror/i.test(l));
  if (errors.length) failures.push(`${errors.length} error log lines`);
  fs.writeFileSync(path.join(outDir, 'mode_switch.json'), JSON.stringify({ steps, failures, errors, logs }, null, 2));
  process.stdout.write(failures.length ? `FAILED:\n${failures.join('\n')}\n` : 'all mode-switch checks passed\n');
  process.exit(failures.length ? 1 : 0);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
