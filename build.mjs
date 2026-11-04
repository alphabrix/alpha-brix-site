// Builds the static site from src/ into dist/. No dependencies required.
import { mkdir, rm, writeFile, cp } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { layout } from './src/layout.js';
import { pages } from './src/pages.js';
import { company } from './src/data/site.js';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(join(root, 'src', 'assets'), join(dist, 'assets'), { recursive: true });

for (const page of pages) {
  const file = page.file || join(page.path.replace(/^\//, ''), 'index.html');
  const depth = page.absolute ? 0 : page.path.split('/').filter(Boolean).length;
  const out = join(dist, file);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, layout({ page, depth, body: page.body }), 'utf8');
  console.log('built', file);
}

const urls = pages.filter((p) => !p.file).map((p) => `  <url><loc>${company.url}${p.path}</loc></url>`).join('\n');
await writeFile(join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${company.url}/sitemap.xml\n`);
console.log('done ->', dist);
