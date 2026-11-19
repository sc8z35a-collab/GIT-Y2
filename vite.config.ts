import fs from 'node:fs';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';

/**
 * Keeps `npm run dev` (dev.html), `vite preview` (dist/index.html), and
 * GitHub Pages serving from `main /` (root index.html + dist/assets/* + public/textures/tiles/*)
 * 100% synchronized automatically on every build without duplicating the 212 WebP tiles!
 */
function kuroisoPagesSyncPlugin(): Plugin {
  return {
    name: 'kuroiso-pages-sync',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === '/' || req.url === '/index.html' || req.url?.startsWith('/?')) {
          req.url = req.url.replace(/^\/(index\.html)?/, '/dev.html');
        }
        next();
      });
    },
    closeBundle() {
      const rootDir = process.cwd();
      const distDir = path.join(rootDir, 'dist');
      const builtDevHtml = path.join(distDir, 'dev.html');
      const distIndexHtml = path.join(distDir, 'index.html');
      if (!fs.existsSync(builtDevHtml)) return;

      const html = fs.readFileSync(builtDevHtml, 'utf-8');
      // 1. Write dist/index.html for `vite preview` and standalone dist/ serving
      fs.writeFileSync(distIndexHtml, html, 'utf-8');
      fs.unlinkSync(builtDevHtml);

      // 2. Write root index.html for GitHub Pages (`main /`) pointing to ./dist/assets/* & ./public/textures/tiles
      const rootPagesHtml = html
        .replace(/src="\.\/assets\//g, 'src="./dist/assets/')
        .replace(/href="\.\/assets\//g, 'href="./dist/assets/')
        .replace(
          /<script type="module"/,
          '<script>window.__KUROISO_TEXTURE_BASE__ = \'./public/textures/tiles\';</script>\n    <script type="module"'
        );
      fs.writeFileSync(path.join(rootDir, 'index.html'), rootPagesHtml, 'utf-8');
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [kuroisoPagesSyncPlugin()],
  build: {
    target: 'es2022',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      input: path.resolve(process.cwd(), 'dev.html'),
    },
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
  },
});
