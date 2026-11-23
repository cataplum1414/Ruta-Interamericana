import {access, readFile} from 'node:fs/promises';

const html = await readFile('index.html', 'utf8');
const app = await readFile('assets/app.js', 'utf8');
const opinions = await readFile('assets/opiniones.js', 'utf8');
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
const opinionNumbers = [...opinions.matchAll(/^  \[(\d+),/gm)].map(match => Number(match[1]));
const opinionCount = opinionNumbers.length;
if (opinionCount !== 32 || opinionNumbers.some((number, index) => number !== index + 1)) {
  throw new Error(`Expected each issued advisory opinion from OC-1 to OC-32 exactly once; found ${opinionNumbers.join(', ')}.`);
}
const routeCount = (html.match(/data-route-page/g) || []).length;
if (routeCount < 12 || !html.includes('href="#opiniones"') || !html.includes('href="#actualidad"')) {
  throw new Error('Menu-driven route pages or the cases, advisory opinions, and news pages are incomplete.');
}
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

console.log(`Validated ${ids.length} unique page ids, ${routeCount} route pages, ${opinionCount} advisory opinions, 18 stations, 10 practice questions, and ${cachedFiles.length} offline assets.`);
