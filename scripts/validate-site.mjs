import {access, readFile} from 'node:fs/promises';

const html = await readFile('index.html', 'utf8');
const app = await readFile('assets/app.js', 'utf8');
const manifest = JSON.parse(await readFile('manifest.webmanifest', 'utf8'));
const serviceWorker = await readFile('sw.js', 'utf8');

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
const idSet = new Set(ids);
if (ids.length !== idSet.size) throw new Error('Duplicate HTML id found.');
const missingTargets = [...html.matchAll(/href="#([^"]+)"/g)]
  .map(match => match[1])
  .filter(id => !idSet.has(id));
if (missingTargets.length) {
  throw new Error(`Missing in-page targets: ${[...new Set(missingTargets)].join(', ')}`);
}

const stages = app.match(/const stages=\[([\s\S]*?)\r?\n\];\r?\nconst stationGuide/)?.[1];
const stationGuide = app.match(/const stationGuide=\[([\s\S]*?)\r?\n\];\r?\nconst contrasts/)?.[1];
const questions = app.match(/const questions=\[([\s\S]*?)\r?\n\];\r?\nconst resources/)?.[1];
const countRows = block => (block?.match(/^\r?\[/gm) || []).length;
if (countRows(stages) !== 18 || countRows(stationGuide) !== 18) {
  throw new Error('The 18 procedural stations and their guides must remain paired.');
}
if (countRows(questions) !== 10) throw new Error('The expected 10 practice questions were not found.');
for (const name of ['questionStages', 'caseStations']) {
  const values = app.match(new RegExp(`const ${name}=\\[([^\\]]+)\\]`))?.[1]
    .split(',').map(Number);
  if (!values?.length || values.some(step => !Number.isInteger(step) || step < 0 || step >= 18)) {
    throw new Error(`${name} contains a link outside the 18 procedural stations.`);
  }
}
if (!manifest.start_url || !manifest.scope || !serviceWorker.includes("'./index.html'")) {
  throw new Error('PWA start page or offline shell is incomplete.');
}
for (const icon of manifest.icons) await access(icon.src.replace(/^\.\//, ''));
const cachedFiles = [...serviceWorker.matchAll(/'\.(\/[^']+)'/g)]
  .map(match => match[1])
  .filter(path => path !== '/');
for (const file of cachedFiles) await access(file.slice(1));

console.log(`Validated ${ids.length} unique page ids, 18 stations, 10 practice questions, and ${cachedFiles.length} offline assets.`);
