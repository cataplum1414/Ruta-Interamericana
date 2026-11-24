import {access, readFile} from 'node:fs/promises';

const html = await readFile('index.html', 'utf8');
const app = await readFile('assets/app.js', 'utf8');
const styles = await readFile('assets/styles.css', 'utf8');
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
const stationGuide = app.match(/const stationGuide=\[([\s\S]*?)\r?\n\];\r?\nconst stageChecks/)?.[1];
const stageChecks = app.match(/const stageChecks=\[([\s\S]*?)\r?\n\];\r?\nconst contrasts/)?.[1];
const questions = app.match(/const questions=\[([\s\S]*?)\r?\n\];\r?\nconst resources/)?.[1];
const countRows = block => (block?.match(/^\r?\[/gm) || []).length;
if (countRows(stages) !== 18 || countRows(stationGuide) !== 18) {
  throw new Error('The 18 procedural stations and their guides must remain paired.');
}
if ((stageChecks?.match(/\{prompt:/g) || []).length !== 18 || !app.includes('stage-check-feedback') || !styles.includes('.stage-challenge-options button.is-correct')) {
  throw new Error('Each procedural station needs an interactive decision with explanatory feedback.');
}
const simulationNodes = app.match(/const caseScenarioNodes=\{([\s\S]*?)\r?\n\};\r?\nconst caseScenarioPaths=/)?.[1];
const simulationNodeIds = [...(simulationNodes || '').matchAll(/^ ([A-Za-z]+):\{phase:/gm)].map(match => match[1]);
const simulationPaths = [...app.matchAll(/^ (cidh|court):\[(.*?)\],?$/gm)].map(match => ({name: match[1], nodes: [...match[2].matchAll(/'([A-Za-z]+)'/g)].map(item => item[1])}));
if (simulationNodeIds.length !== 18 || simulationNodeIds.some(id => (simulationNodes.match(new RegExp(`^ ${id}:\\{phase:`, 'gm')) || []).length !== 1)) {
  throw new Error(`The case simulator needs 18 uniquely identified decision nodes; found ${simulationNodeIds.length}.`);
}
if (simulationPaths.length !== 2 || simulationPaths.some(path => path.nodes.length !== (path.name === 'cidh' ? 18 : 9) || path.nodes.some(id => !simulationNodeIds.includes(id)))) {
  throw new Error('The case simulator needs complete CIDH and Court routes that only reference existing decision nodes.');
}
if (!html.includes('id="caseSimulationTitle"') || !app.includes('caseSimRetry') || !app.includes('Decisiones del procedimiento') || !styles.includes('.case-sim-options button.is-correct')) {
  throw new Error('The case simulator needs retry, explanatory feedback, search integration, and visible decision states.');
}
if (countRows(questions) !== 10) throw new Error('The expected 10 practice questions were not found.');
const opinionNumbers = [...opinions.matchAll(/^  \[(\d+),/gm)].map(match => Number(match[1]));
const opinionCount = opinionNumbers.length;
if (opinionCount !== 32 || opinionNumbers.some((number, index) => number !== index + 1)) {
  throw new Error(`Expected each issued advisory opinion from OC-1 to OC-32 exactly once; found ${opinionNumbers.join(', ')}.`);
}
const routeCount = (html.match(/data-route-page/g) || []).length;
if (routeCount < 15 || !html.includes('href="#oea"') || !html.includes('href="#comision"') || !html.includes('href="#corte"') || !html.includes('href="#sistema"') || !html.includes('href="#opiniones"') || !html.includes('href="#actualidad"')) {
  throw new Error('The 15 menu-driven pages, separate CIDH and Court pages, bridge page, cases, advisory opinions, and news pages must be present.');
}
const routeMap = html.match(/<div class="route-line">([\s\S]*?)<\/div>/)?.[1] || '';
const routeStops = [...routeMap.matchAll(/<span class="route-stop"><b>\d+<\/b><small>([\s\S]*?)<\/small><\/span>/g)];
if (routeStops.length !== 4 || !routeMap.includes('4 pilares') || !routeMap.includes('CIDH y<br>Corte')) {
  throw new Error('The Atlas OEA overview must connect its pillars to the two human-rights bodies.');
}
if (!styles.includes('.principle-strip .glossary-trigger{color:inherit;text-decoration-color:currentColor}')) {
  throw new Error('Glossary links in the cyan principle strip need an inheriting, contrasting text color.');
}
if (!styles.includes('.mobile-bar{position:fixed;z-index:60;right:0;bottom:0;left:0;') || !styles.includes('height:calc(68px + env(safe-area-inset-bottom))') || !styles.includes('body{padding-bottom:calc(68px + env(safe-area-inset-bottom))}') || !html.includes('viewport-fit=cover')) {
  throw new Error('The mobile navigation must stay fixed, keep its labels visible, and respect the device safe area.');
}
for (const id of ['oea', 'comision', 'corte', 'sistema']) {
  const page = html.match(new RegExp(`<section id=\"${id}\" data-route-page[\\s\\S]*?</section>`))?.[0];
  if (!page || !page.includes('section-index')) throw new Error(`The ${id} learning page is incomplete.`);
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

console.log(`Validated ${ids.length} unique page ids, ${routeCount} route pages, ${opinionCount} advisory opinions, 18 procedural stations with decision checks, 10 practice questions, and ${cachedFiles.length} offline assets.`);
