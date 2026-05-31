const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '.next');
const pages = [
  'index.html',
  'nosotros.html',
  'soluciones.html',
  'casos-de-exito.html',
  'contacto.html',
  'sectores/municipios.html',
  'sectores/obras-sociales.html',
  'sectores/aseguradoras.html',
  'sectores/empresas.html',
];

function inlinePage(htmlPath) {
  let html = fs.readFileSync(path.join(distDir, 'server/app', htmlPath), 'utf-8');

  // Find and inline CSS
  html = html.replace(/<link rel="stylesheet" href="([^"]+)"[^>]*\/?>/g, (match, href) => {
    const cssPath = path.join(distDir, href.replace('/_next/', ''));
    if (fs.existsSync(cssPath)) {
      const css = fs.readFileSync(cssPath, 'utf-8');
      return `<style>${css}</style>`;
    }
    return match;
  });

  // Remove script tags (not needed for Figma)
  html = html.replace(/<script[^>]*>.*?<\/script>/g, '');
  html = html.replace(/<script[^>]*\/>/g, '');

  // Remove link preloads for fonts
  html = html.replace(/<link rel="preload"[^>]*\/?>/g, '');

  // Remove next-specific meta
  html = html.replace(/<meta name="next-size-adjust"[^>]*\/?>/g, '');

  return html;
}

const outputDir = path.join(__dirname, 'figma-export');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

for (const page of pages) {
  const outName = page.replace('.html', '') === 'index' ? 'index' : page.replace('.html', '');
  const outPath = path.join(outputDir, outName === 'index' ? 'index.html' : `${outName}.html`);

  const dir = path.dirname(path.join(outputDir, outName === 'index' ? 'index.html' : `${outName}.html`));
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const inlined = inlinePage(page);
  fs.writeFileSync(outPath, inlined, 'utf-8');
  console.log(`✓ ${outPath}`);
}

console.log('\nDone! HTML files for Figma in: figma-export/');
