import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const svgPath = join(root, 'public', 'icons', 'icon-source.svg');
const svgStr = readFileSync(svgPath, 'utf-8');

function render(svg, size) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: size },
  });
  return resvg.render().asPng();
}

// Standard icon 192
writeFileSync(join(root, 'public', 'icons', 'icon-192.png'), render(svgStr, 192));
console.log('icon-192.png ✓');

// Standard icon 512
writeFileSync(join(root, 'public', 'icons', 'icon-512.png'), render(svgStr, 512));
console.log('icon-512.png ✓');

// Maskable 512 — same design, full bleed is fine since our bg fills the whole square
writeFileSync(join(root, 'public', 'icons', 'icon-512-maskable.png'), render(svgStr, 512));
console.log('icon-512-maskable.png ✓');

// Apple touch icon 180×180
writeFileSync(join(root, 'public', 'icons', 'apple-touch-icon.png'), render(svgStr, 180));
console.log('apple-touch-icon.png ✓');

// Favicon 32×32
writeFileSync(join(root, 'public', 'favicon-32.png'), render(svgStr, 32));
console.log('favicon-32.png ✓');

// Favicon 16×16
writeFileSync(join(root, 'public', 'favicon-16.png'), render(svgStr, 16));
console.log('favicon-16.png ✓');

console.log('All icons generated.');
