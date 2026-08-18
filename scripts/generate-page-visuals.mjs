import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

const ROOT = path.resolve(process.cwd());
const OUT = path.join(ROOT, 'public', 'visuals', 'pages');
fs.mkdirSync(OUT, { recursive: true });

const HUBS = ['transform', 'technology', 'solutions', 'products', 'industries', 'insights', 'about'];

function loadSlugs() {
  const slugs = new Set();
  for (const hub of HUBS) {
    const file = path.join(ROOT, 'content', `${hub}.ts`);
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file, 'utf8');
    for (const m of src.matchAll(/slug: '([^']+)'/g)) slugs.add(`${hub}/${m[1]}`);
  }
  for (const hub of HUBS) slugs.add(hub);
  const insightCategories = ['articles', 'case-studies', 'whitepapers', 'videos', 'podcasts', 'webinars', 'research'];
  for (const c of insightCategories) slugs.add(`insights/${c}`);
  const caseStudiesFile = path.join(ROOT, 'content', 'insights.ts');
  if (fs.existsSync(caseStudiesFile)) {
    const src = fs.readFileSync(caseStudiesFile, 'utf8');
    for (const m of src.matchAll(/caseStudies: \[([\s\S]*?)\n  \]/g)) {
      for (const sm of m[1].matchAll(/slug: '([^']+)'/g)) slugs.add(`insights/case-studies/${sm[1]}`);
    }
  }
  slugs.add('careers');
  slugs.add('contact');
  return [...slugs].sort();
}

const PALETTES = [
  ['#0066F5', '#00C2A8'],
  ['#0055CC', '#7C3AED'],
  ['#00C2A8', '#F59E0B'],
  ['#7C3AED', '#0066F5'],
  ['#E11D48', '#7C3AED'],
  ['#0EA5E9', '#10B981'],
  ['#F59E0B', '#E11D48'],
  ['#6366F1', '#0EA5E9'],
  ['#14B8A6', '#6366F1'],
  ['#F97316', '#E11D48'],
];

const GLYPHS = [
  ['M12 2 2 7l10 5 10-5-10-5Z', 'M2 17l10 5 10-5'],
  ['M3 21V8l9-5 9 5v13', 'M3 21h18', 'M12 8v13'],
  ['M3 12h4l3-8 4 16 3-8h4'],
  ['M4 21v-7m0 0V4M4 14h16m0 0v7M20 14V7m0 0V4M20 7H8'],
  ['M9 3v18M15 3v18M3 9h18M3 15h18'],
  ['M5 3v18M19 3v18M3 5h18M3 19h18'],
  ['M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1M7.7 16.3l-2.1 2.1'],
  ['M13 2 3 14h7l-1 8 10-12h-7l1-8Z'],
  ['M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0', 'M12 12 5 5', 'M12 12l7 7'],
  ['M4 4h16v16H4zM4 10h16M4 16h16M10 4v16M16 4v16'],
  ['M4 17l4-7 3 4 3-6 4 9H4Z'],
  ['M6 4h12M6 8h12M6 12h12M6 16h8'],
];

function hashOf(str) {
  return createHash('sha256').update(str).digest('hex');
}

function pick(arr, h) {
  return arr[parseInt(h.slice(0, 4), 16) % arr.length];
}

function hash01(h, i, j) {
  return parseInt(h.slice((i * 4 + j) % 56, (i * 4 + j) % 56 + 4), 16) / 65535;
}

function buildSvg(key) {
  const h = hashOf(key);
  const [c1, c2] = pick(PALETTES, h);
  const glyph = pick(GLYPHS, h.slice(8));
  const angle = 120 + Math.round(hash01(h, 1, 1) * 120);
  const cx = 380 + Math.round(hash01(h, 2, 1) * 200);
  const cy = 300 + Math.round(hash01(h, 2, 2) * 160);
  const cell = 48 + Math.round(hash01(h, 3, 1) * 56);

  let grid = '';
  for (let gx = 0; gx <= 1024; gx += cell) {
    grid += `<line x1="${gx}" y1="0" x2="${gx}" y2="640" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>`;
  }
  for (let gy = 0; gy <= 640; gy += cell) {
    grid += `<line x1="0" y1="${gy}" x2="1024" y2="${gy}" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>`;
  }

  const glyphPath = `<g transform="translate(512 320) scale(14) translate(-12 -12)" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round">${glyph
    .map((d) => `<path d="${d}"/>`)
    .join('')}</g>`;

  const glow = `<circle cx="${cx}" cy="${cy}" r="${80 + Math.round(hash01(h, 4, 1) * 90)}" fill="${c2}" opacity="0.35" filter="url(#blur)"/>`;
  const glow2 = `<circle cx="${1024 - cx * 0.4}" cy="${cy * 0.5}" r="${60 + Math.round(hash01(h, 5, 1) * 80)}" fill="${c1}" opacity="0.4" filter="url(#blur)"/>`;

  const nodes = [];
  let nodeSvg = '';
  const nCount = 7 + Math.round(hash01(h, 6, 1) * 6);
  for (let i = 0; i < nCount; i++) {
    const nx = Math.round(hash01(h, i, 1) * 1024);
    const ny = Math.round(hash01(h, i, 2) * 640);
    const nr = 3 + Math.round(hash01(h, i, 3) * 4);
    nodes.push([nx, ny]);
    nodeSvg += `<circle cx="${nx}" cy="${ny}" r="${nr}" fill="rgba(255,255,255,0.5)"/>`;
  }
  let links = '';
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (hash01(h, i + j, 1) > 0.62) {
        const [a, b] = [nodes[i], nodes[j]];
        links += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>`;
      }
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="640" viewBox="0 0 1024 640">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="0.5" stop-color="${c1}" stop-opacity="0.75"/>
      <stop offset="1" stop-color="${c2}" stop-opacity="0.9"/>
    </linearGradient>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0.03"/>
    </linearGradient>
    <filter id="blur" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="40"/>
    </filter>
  </defs>
  <rect width="1024" height="640" fill="url(#bg)"/>
  <rect width="1024" height="640" fill="#0B1220" opacity="${0.25 + hash01(h, 7, 1) * 0.3}"/>
  ${links}
  ${grid}
  <rect width="1024" height="640" fill="url(#g)"/>
  ${glow}
  ${glow2}
  ${glyphPath}
  <rect x="0" y="0" width="1024" height="640" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
  ${nodeSvg}
</svg>`;
}

let count = 0;
for (const key of loadSlugs()) {
  const svg = buildSvg(key);
  const safe = key.replace('/', '-');
  await sharp(Buffer.from(svg), { density: 144 })
    .resize(1024, 640)
    .webp({ quality: 78 })
    .toFile(path.join(OUT, `${safe}.webp`));
  count++;
}

console.log(`Generated ${count} page visuals into public/visuals/pages/`);
