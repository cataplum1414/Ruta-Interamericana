import {access, readFile} from 'node:fs/promises';

const html = await readFile('index.html', 'utf8');
const app = await readFile('assets/app-v40.js', 'utf8');
const deadlineCompare = await readFile('assets/plazos-comparador-v1.js', 'utf8');
const reasoning = await readFile('assets/razonamiento-v1.js', 'utf8');
const glossary = await readFile('assets/glosario.js', 'utf8');
const styles = await readFile('assets/styles-v26.css', 'utf8');
const atlasShell = await readFile('assets/arquitectura-atlas.css', 'utf8');
const orgMapStyles = await readFile('assets/organizacion-mapa.css', 'utf8');
const opinions = await readFile('assets/opiniones.js', 'utf8');
const manifest = JSON.parse(await readFile('manifest.webmanifest', 'utf8'));
const serviceWorker = await readFile('sw.js', 'utf8');
const organData = await readFile('assets/organos.js', 'utf8');
const stateData = await readFile('assets/estados-oea.js', 'utf8');
const regionalMap = await readFile('assets/mapa-americas.svg', 'utf8');
const mapConnections = await readFile('assets/map-connections-v6.js', 'utf8');
const hearingLab = await readFile('assets/audiencia-lab-v1.js', 'utf8');

if (!html.includes('<meta name="color-scheme" content="light dark">') || !app.includes('target=hash?document.getElementById(hash):null')) {
  throw new Error('The theme initializer needs its color-scheme metadata, and route handling must safely open the page without a hash.');
}

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
const progressiveHints = [...(stageChecks || '').matchAll(/hints:\['([^']+)',\s*'([^']+)'\]/g)];
if (progressiveHints.length !== 18 || progressiveHints.some(([, first, second]) => !first.trim() || !second.trim()) || !app.includes('data-stage-hint-text') || !app.includes("hintLevel<check.hints.length?'Ver otra pista':'Ocultar pistas'") || !styles.includes('.stage-hint-button:focus-visible')) {
  throw new Error('Each procedural station needs two progressive, accessible hints before its explanatory feedback.');
}
const simulationNodes = app.match(/const caseScenarioNodes=\{([\s\S]*?)\r?\n\};\r?\nconst caseScenarioPaths=/)?.[1];
const simulationNodeIds = [...(simulationNodes || '').matchAll(/^ ([A-Za-z]+):\{phase:/gm)].map(match => match[1]);
const simulationPaths = [...app.matchAll(/^ (cidh|court):\[(.*?)\],?$/gm)].map(match => ({name: match[1], nodes: [...match[2].matchAll(/'([A-Za-z]+)'/g)].map(item => item[1])}));
if (simulationNodeIds.length !== 19 || simulationNodeIds.some(id => (simulationNodes.match(new RegExp(`^ ${id}:\\{phase:`, 'gm')) || []).length !== 1)) {
  throw new Error(`The case simulator needs 19 uniquely identified decision nodes; found ${simulationNodeIds.length}.`);
}
if (simulationPaths.length !== 2 || simulationPaths.some(path => path.nodes.length !== (path.name === 'cidh' ? 19 : 10) || path.nodes.some(id => !simulationNodeIds.includes(id)))) {
  throw new Error('The case simulator needs complete CIDH and Court routes that only reference existing decision nodes.');
}
const startCounts = Object.fromEntries([...app.matchAll(/data-sim-path="(cidh|court)">[\s\S]*?<span>(\d+) decisiones/g)].map(match => [match[1], Number(match[2])]));
if (simulationPaths.some(path => startCounts[path.name] !== path.nodes.length)) {
  throw new Error('The case simulator start buttons must show the same number of decisions as their routes.');
}
if (!html.includes('id="caseSimulationTitle"') || !html.includes('id="caseSimTrail"') || !app.includes('caseSimRetry') || !app.includes('drawCaseTrail') || !app.includes('data-review-step') || !app.includes('Decisiones del procedimiento') || !styles.includes('.case-sim-options button.is-correct') || !styles.includes('.case-sim-trail button.current')) {
  throw new Error('The case simulator needs retry, explanatory feedback, a reviewable decision trail, search integration, and visible decision states.');
}
if ((html.match(/class="process-overview-number"/g) || []).length !== 4 || !html.includes('<details class="process-overview" id="processOverview">') || !html.includes('class="process-overview-summary"') || !html.includes('Petici&oacute;n &rarr; an&aacute;lisis CIDH &rarr; eventual caso ante la Corte') || html.includes('<details class="process-overview" id="processOverview" open') || !html.includes('puede someter el caso a la Corte cuando se cumplen las reglas') || !html.includes('reglamentocidh.asp') || !html.includes('reglamento.cfm?lang=es')) {
  throw new Error('The route needs a four-moment procedure overview with official Commission and Court sources.');
}
if (!html.includes('class="oea-competence-note"') || !html.includes('Carta le confiere expresamente') || !html.includes('no ampl&iacute;a por s&iacute; sola las competencias de la OEA') || !html.includes('https://api.icj-cij.org/sites/default/files/case-related/4/004-19490411-ADV-01-00-EN.pdf') || !styles.includes('.oea-competence-note')) {
  throw new Error('OEA competence must distinguish the OAS Charter limit from the ICJ doctrine applied to the United Nations.');
}
if ((html.match(/class="process-overview-link"/g) || []).length !== 4 || !app.includes("#processOverview [data-open-step]") || !app.includes("el('stepDetail').scrollIntoView")) {
  throw new Error('Each overview moment must open the matching interactive station.');
}
if (!glossary.includes("id:'comunicacion-interestatal'") || !glossary.includes('convencion-americana-derechos-humanos.pdf') || !app.includes('Petición individual y comunicación interestatal') || !app.includes('artículo 45') || !glossary.includes("id:'denuncia-convencion'") || !app.includes('Denuncia de la Convención y petición individual') || !app.includes('artículo 78 CADH')) {
  throw new Error('The glossary and practice must explain interstate communications and treaty denunciation with official legal sources.');
}
const protectionExercise = app.match(/const protectionSteps=\[([\s\S]*?)\r?\n\];/)?.[1];
if ((protectionExercise?.match(/\{prompt:/g)||[]).length !== 3 || (protectionExercise?.match(/source:'https:\/\//g)||[]).length !== 3) throw new Error('The urgent-protection practice needs three sourced procedural decisions.');
if (!html.includes('id="protectionMeasuresLab"') || !app.includes('protectionSteps') || !app.includes('art\\u00edculo 25') || !app.includes('27.3') || !app.includes('dataset.result') || !serviceWorker.includes('./assets/styles-v26.css') || !serviceWorker.includes('./assets/arquitectura-atlas.css')) throw new Error('The optional urgent-protection practice must compare CIDH and Court routes with official rules and a cached stylesheet.');

if (!html.includes('id="petitionerNoticeDate"') || !html.includes('id="reportTransmissionDate"') || !html.includes('id="petitionerNoticeResult"') || !html.includes('id="reportTransmissionResult"') || !deadlineCompare.includes('months: 1') || !deadlineCompare.includes('months: 3') || !deadlineCompare.includes('addCalendarMonths') || !serviceWorker.includes('./assets/plazos-comparador-v1.js')) throw new Error('The two distinct Article 44.3 and 51.1 trigger dates must have separate calendar controls, calculations, and an offline-cached script.');
if (!app.includes("courtCompetence:{phase:'CORTE IDH'") || !app.includes("stage:14,source:'https://www.oas.org/es/cidh/mandato/basicos/convencion.asp'") || !app.includes("court:['courtCompetence','courtNotification'")) throw new Error('Missing the interactive Court jurisdiction decision.');
if (!html.includes('assets/styles-v26.css') || !html.includes('assets/arquitectura-atlas.css?v=14') || !html.includes('assets/organizacion-mapa.css?v=atlas-oea-7') || !html.includes('assets/glosario.js?v=editorial-7') || !html.includes('assets/app-v40.js') || !html.includes('assets/audiencia-lab-v1.js') || !serviceWorker.includes('atlas-oea-shell-v87') || !serviceWorker.includes('./assets/styles-v26.css') || !serviceWorker.includes('./assets/arquitectura-atlas.css?v=14') || !serviceWorker.includes('./assets/organizacion-mapa.css?v=atlas-oea-7') || !serviceWorker.includes('./assets/app-v40.js') || !serviceWorker.includes('./assets/audiencia-lab-v1.js') || !serviceWorker.includes('./assets/razonamiento-v1.js') || !serviceWorker.includes('./assets/map-connections-v6.js') || !styles.includes('.process-overview-summary')) {
  throw new Error('The current route overview must be available in the installed offline shell.');
}
if (!organData.includes("item.id==='cidh').atlasLinks") || !organData.includes("item.id==='corte').atlasLinks") || !organData.includes("step:2") || !organData.includes("step:10") || !app.includes('item.atlasLinks?.length') || !app.includes("el('organDetail').addEventListener('click'") || !app.includes('openProceduralStep(link.dataset.openStep)') || !orgMapStyles.includes('.org-detail-guide') || !html.includes('assets/organizacion-mapa.css?v=atlas-oea-7')) {
  throw new Error('Selecting the CIDH or Court in the institutional map must lead to the matching Atlas page and procedural station.');
}
if (!atlasShell.includes('.menu-toggle span{display:inline') || !atlasShell.includes('opacity:0;cursor:pointer;appearance:none') || !html.includes('class="theme-compact"') || !html.includes('class="appbrand"')) {
  throw new Error('The mobile header must show the outlined Atlas menu and brand while keeping the color selector accessible behind its icon control.');
}
if (!app.includes('function relatedJurisprudenceLinks(entry)') || !app.includes("add('#recorrido','Competencia y excepciones',14)") || !app.includes("add('#recorrido','Reparaciones y cumplimiento',17)") || !app.includes("add('#recorrido','Examinar el fondo',7)") || !app.includes("jurisGrid.querySelectorAll('[data-open-step]')") || !atlasShell.includes('.juris-connection') || !html.includes('id="jurisGrid"')) {
  throw new Error('Jurisprudence cards must connect their topic labels to the matching procedural station, with an accessible route link in both desktop and mobile layouts.');
}
if (!app.includes('function openProceduralStep(stepIndex)') || !app.includes("activeStepPhase='Todas';document.querySelectorAll('[data-phase]')") || !app.includes("location.hash='recorrido'") || !app.includes("window.addEventListener('hashchange',go,{once:true})") || !app.includes("event.preventDefault();openProceduralStep(link.dataset.openStep)") || (app.match(/openProceduralStep\(/g)||[]).length < 10) {
  throw new Error('Every contextual link to a procedural station must open the Route page before scrolling to the selected step.');
}
const requiredHearingArticles=['artículo 46','artículos 46–48','artículo 50.1','artículos 51–52','artículo 56'];
if (!html.includes('id="hearingLab"') || !html.includes('id="hearingLabCard"') || !html.includes('id="hearingLabProgress"') || !html.includes('Abrir Reglamento oficial') || requiredHearingArticles.some(article=>!hearingLab.includes(article)) || !hearingLab.includes('aria-live="polite"') || !atlasShell.includes('.hearing-lab-option:focus-visible') || !serviceWorker.includes('./assets/audiencia-lab-v1.js')) {
  throw new Error('The Corte hearing practice must guide the declarant list, objections, presidency order, oral procedure, and closing briefs with accessible feedback and an offline-cached official-source link.');
}
if (!html.includes('id="mapLayerSelect"') || !html.includes('value="membership"') || !html.includes('value="cases"') || !html.includes('Lectura f&aacute;cil: c&oacute;mo se conecta un pa&iacute;s con el sistema') || !html.includes('data-pan-x=') || !html.includes('aria-label="Mapa seleccionable') || !mapConnections.includes('const casesFor') || !mapConnections.includes('Sigue la relaci') || !mapConnections.includes('La membres\u00eda en la OEA no determina por s\u00ed sola') || !mapConnections.includes("'#comision'") || !mapConnections.includes("'#corte'") || !mapConnections.includes('La selecci\u00f3n no representa el total hist\u00f3rico') || !mapConnections.includes('https://www.oas.org/es/cidh/mandato/Basicos/convratif.asp') || !mapConnections.includes('ArrowLeft') || !html.includes('id="mapTimelineYear"') || !mapConnections.includes('treatyMilestones') || !mapConnections.includes('timeline') || !mapConnections.includes('Pausar la cronolog') || !html.includes('<details class="oas-map-directory">') || !html.includes('assets/arquitectura-atlas.css') || !html.includes('<section class="nav-group" data-nav-group>')) {
  throw new Error('The regional map must offer accessible OEA/case layers and connect each selected country to OEA, CIDH, Court, procedure, and official case references.');
}
if (!html.includes('data-phase="PASO A LA CORTE"') || html.includes('data-phase="TRANSICIÓN"') || !app.includes("phase:'PASO A LA CORTE'") || app.includes('TRANSICI\\u00d3N')) {
  throw new Error('The inter-organ phase should be named directly as the step to the Court.');
}
if (!html.includes('id="jurisTopicFilter"') || !app.includes('const jurisTopics=') || !app.includes("jurisTopicFilter.addEventListener('change',renderJurisprudencia)")) {
  throw new Error('The 125 jurisprudence references must be filterable by their legal topics.');
}
const featuredProceduralCases = app.match(/const featuredCases=\[([\s\S]*?)\];/)?.[1] || '';
if ((featuredProceduralCases.match(/\{title:/g) || []).length !== 4 || !featuredProceduralCases.includes('Cayara vs. Perú') || !featuredProceduralCases.includes('stage:9') || !featuredProceduralCases.includes('stage:15') || !featuredProceduralCases.includes('stage:17') || !app.includes("el('featuredCases').querySelectorAll('[data-open-step]')")) {
  throw new Error('The four featured procedural cases must link to the relevant route stations.');
}
if (!app.includes('class="stage-facts"') || !app.includes('class="stage-next-arrow"') || !app.includes('Un matiz para recordar') || !styles.includes('.stage-facts') || !styles.includes('.stage-next-arrow')) {
  throw new Error('Each procedure station must show compact rule facts, the next step, and an optional nuance.');
}
if (!app.includes('La CIDH recibe solicitudes de audiencias públicas para el 198.º período de sesiones') || !app.includes("dateValue:'2026-11-02'") || !app.includes('sCodigo=C-118%2F26') || !app.includes("relatedId:'laboratorio'") || !app.includes('news-context-link')) {
  throw new Error('Panorama news must use corrected official dates and connect urgent protection news to its interactive practice.');
}
if (!html.includes('id="atlasVisitCount" data-counter-state="pending"') || !html.includes('id="atlasVisitLabel"') || !app.includes("https://counterapi.com/api/cataplum1414.github.io/view/atlas-oea-home-v2") || !app.includes("referrerPolicy:'no-referrer'") || !app.includes('12*60*60*1000') || !app.includes('new URLSearchParams(location.search).has(\'sinvisita\')') || !app.includes('readOnly=true') || !app.includes("output.dataset.counterState='loading'") || !app.includes("output.dataset.counterState='ready'") || !app.includes("output.dataset.counterState='unavailable'") || !app.includes("value===1?'visita':'visitas'")) {
  throw new Error('The Atlas OEA view counter must use a separate aggregate key, suppress referrers, and avoid repeat increments for 12 hours.');
}
if (!app.includes('16 de diciembre de 2026') || !app.includes('%2F2026%2F254.asp')) {
  throw new Error('The news panorama must show the current official deadline for the CIDH public-hearing request.');
}
if (!html.includes('<strong>34</strong> Estados') || !html.includes('CIDH + Corte IDH') || !styles.includes('.hero.page-section{padding-top:22px}') || !styles.includes('.hero-overview{width:100%;justify-content:center;gap:5px;padding:6px 8px;overflow:visible;font-size:11px;white-space:normal;flex-wrap:wrap}')) {
  throw new Error('The mobile overview must keep its institutional context visible without blank space or clipped labels.');
}
if (!stageChecks.includes('art\\u00edculo 44.3') || !stageChecks.includes('pretensiones de reparaci\\u00f3n y costas') || !stageChecks.includes('la CIDH decide el sometimiento')) throw new Error('The referral station must teach the petitioner position and the CIDH decision under article 44.3.');
if (countRows(questions) !== 12) throw new Error('The expected 12 practice questions were not found.');
if (!questions.includes('Art\\u00edculo 44.3 del Reglamento de la CIDH') || !questions.includes('posici\\u00f3n sobre el posible sometimiento dentro de un mes') || !app.includes('tres meses desde la transmisi\\u00f3n del informe como regla del art. 51.1 CADH') || !app.includes('dos \\u00f3rganos')) throw new Error('The petitioner opportunity under article 44.3 and its distinction from the article 51.1 period must be explained.');
if (!(app.match(/const questionStages=\[([^\]]+)\]/)?.[1] === '2,9,9,5,14,12,12,14,16,12,17,4')) throw new Error('Practice review links must lead to the matching petition, referral, jurisdiction, ESAP, objections, hearing, judgment, and competence stations.');
if (countRows(questions) !== (app.match(/const questionStages=\[([^\]]+)\]/)?.[1].split(',').length || 0)) {
  throw new Error('Every practice question must link to its corresponding procedural station.');
}
const opinionNumbers = [...opinions.matchAll(/^  \[(\d+),/gm)].map(match => Number(match[1]));
const opinionCount = opinionNumbers.length;
if (opinionCount !== 32 || opinionNumbers.some((number, index) => number !== index + 1)) {
  throw new Error(`Expected each issued advisory opinion from OC-1 to OC-32 exactly once; found ${opinionNumbers.join(', ')}.`);
}
if (!html.includes('<section id="estados" data-route-page') || !html.includes('id="stateDirectory"') || !mapConnections.includes('function renderStateProfile') || !mapConnections.includes('function selectLinkedMapState')) {
  throw new Error('States need a searchable directory, linkable profiles and a return to the selected country on the map.');
}
const routeCount = (html.match(/data-route-page/g) || []).length;
if (routeCount < 18 || !html.includes('href="#oea"') || !html.includes('href="#organos"') || !html.includes('href="#mapa"') || !html.includes('href="#comision"') || !html.includes('href="#corte"') || !html.includes('href="#sistema"') || !html.includes('href="#opiniones"') || !html.includes('href="#actualidad"')) {
  throw new Error('The 18 menu-driven pages, separate CIDH and Court pages, OEA organ and member maps, bridge page, cases, advisory opinions, and news pages must be present.');
}
if (!html.includes('id="menuToggle"') || !html.includes('class="theme-icon theme-icon-auto"') || !html.includes('class="theme-icon theme-icon-light"') || !html.includes('class="theme-icon theme-icon-dark"') || !html.includes('Autom&aacute;tico</option>') || !atlasShell.includes('.menu-toggle{flex:0 0 auto;width:auto;min-width:86px') || !atlasShell.includes('html[data-theme-choice="dark"] .theme-icon-dark') || !atlasShell.includes('.theme-compact select{position:absolute;inset:-1px')) {
  throw new Error('The mobile bar must use Atlas ONU-style outlined menu and icon-only accessible theme control with all three theme choices.');
}
const reasoningLabels = ['Hechos', 'Obligaci&oacute;n', 'Conducta', 'Evidencia', 'Da&ntilde;o', 'Reparaci&oacute;n'];
if (!html.includes('id="reasoningMap"') || reasoningLabels.some(label => !html.includes('>' + label + '</strong>')) || (reasoning.match(/correct:\s*\d/g) || []).length !== 6 || !reasoning.includes('artículo 63.1') || !reasoning.includes('aria-live="polite"') || !reasoning.includes('Velásquez Rodríguez')) {
  throw new Error('The Arcadia reasoning map must connect six accessible, interactive questions to official legal sources and repair doctrine.');
}

const jurisprudencia = await readFile('assets/jurisprudencia.js', 'utf8');
const jurisprudenciaRows = JSON.parse(jurisprudencia.replace(/^window\.RI_JURISPRUDENCIA=/, '').replace(/;\s*$/, ''));
const featuredSheets = [
  ['Acevedo Jaramillo y otros vs. Perú', 323],
  ['Alfonso Martín del Campo Dodd vs. Estados Unidos Mexicanos', 232],
  ['Almonacid Arellano y otros vs. Chile', 335],
  ['Aloeboetoe y otros vs. Suriname', 211],
  ['Baena Ricardo y otros vs. Panamá', 222],
  ['Baldeón García vs. Perú', 383],
  ['Barreto Leiva vs. Venezuela', 357],
  ['Benavides Cevallos vs. Ecuador', 326],
  ['Caballero Delgado y Santana vs. Colombia', 259],
  ['Bulacio vs. Argentina', 285],
  ['Caesar vs. Trinidad y Tobago', 254],
  ['Cantoral Benavides vs. Perú', 328],
  ['Chitay Nech y otros vs. Guatemala', 362],
  ['Claude Reyes y otros vs. Chile', 332],
  ['Comunidad Indígena Yakye Axa vs. Paraguay', 258],
  ['Hilaire, Constantine y Benjamin y otros vs. Trinidad y Tobago', 269],
  ['19 Comerciantes vs. Colombia', 274],
  ['Atala Riffo y niñas vs. Chile', 196],
  ['Barrios Altos vs. Perú', 267],
  ['González y otras (“Campo Algodonero”) vs. México', 347],
  ['Velásquez Rodríguez vs. Honduras', 189],
  ['Vélez Loor vs. Panamá', 341]
];
for (const [title, ficha] of featuredSheets) {
  const row = jurisprudenciaRows.find(item => item.title === title);
  if (!row?.url.includes(`nId_Ficha=${ficha}`)) {
    throw new Error(`The selected case index needs the verified official technical sheet ${ficha} for ${title}.`);
  }
}
const additionalSheets = [
  ['Blake', 317],
  ['Cantos', 272],
  ['Caracazo', 228],
  ['Cayara', 230],
  ['Chaparro Álvarez', 275],
  ['Dacosta Cadogan', 283],
  ['Las Palmeras', 242],
  ['Castillo Petruzzi', 367],
  ['Comunidad Mayagna', 240],
  ['Mapirip', 252],
  ['Pueblo Bello', 320],
  ['Moiwana', 255],
  ['Villagr', 321],
  ['De la Cruz Flores', 241],
  ['La Rochela', 217],
  ['Dos Erres', 361],
  ['Paniagua Morales', 297],
  ['Gelman', 345],
  ['La Cantuta', 214],
  ['Suárez Rosero', 315],
  ['Tibi', 239],
  ['Herrera Ulloa', 209],
  ['Yean y Bosico', 289],
  ['Gomes Lund', 342],
  ['Myrna Mack Chang', 287],
  ['Nadege Dorzema', 226],
  ['Escher y Otros', 277],
  ['Radilla Pacheco', 360],
  ['Tiu Tojín', 245],
  ['Tristán Donoso', 253],
  ['Bámaca Velásquez', 244],
  ['Gómez Paquiyauri', 215],
  ['Godínez Cruz', 194],
  ['Goiburú y otros', 387],
  ['Gutiérrez Soler', 306],
  ['Loayza Tamayo', 311],
  ['Heliodoro Portugal', 307],
  ['Ibsen Cárdenas', 340],
  ['Pueblo Saramaka', 288],
  ['Durand y Ugarte', 198],
  ['Escué Zapata', 227],
  ['García Prieto', 260],
  ['Garibaldi', 282],
  ['García y Familiares', 236],
  ['Diario Militar', 231],
  ['Masacre de Santo Domingo', 237],
  ['Neira', 219],
  ['Yatama', 268],
  ['Ximenes Lopes', 319],
  ['Palamara Iribarne', 313],
  ['Cacarica', 377],
  ['Masacres de Ituango', 330],
  ['Hermanas Serrano Cruz', 247],
  ['Rosendo Cantú', 339],
  ['Río Negro', 224],
  ['Olmedo Bustos', 263],
  ['Palomino', 314],
  ['Hilaire', 269],
  ['Cepeda Vargas', 334],
  ['Mozote', 229],
  ['Mendoza y otros', 388],
  ['Desaparecidos del Palacio', 461],
  ['Torres Millacura', 351],
  ['Vera Vera', 348],
  ['Yarce', 431],
  ['Vargas Areco', 384],
  ['Usón Ramírez', 358],
  ['Duque', 444],
  ['Juan Humberto', 284],
  ['Maqueda', 261],
  ['Nogueira de Carvalho', 208],
  ['Perozo', 262],
  ['Trujillo Oroza', 238],
  ['Valle Jaramillo', 251],
  ['Vélez Restrepo', 216]
];
for (const [title, ficha] of additionalSheets) {
  const row = jurisprudenciaRows.find(item => item.title.includes(title));
  if (!row?.url.includes(`nId_Ficha=${ficha}`) || row.sourceLabel !== 'Abrir ficha oficial del caso') {
    throw new Error(`The case index needs the verified official technical sheet ${ficha} for ${title}.`);
  }
}
const benjaminCase = jurisprudenciaRows.find(item => item.title === 'Benjamin y otros vs. Trinidad y Tobago');
if (benjaminCase?.series !== '81' || !benjaminCase.url.endsWith('/Seriec_81_esp.pdf')) {
  throw new Error('The Benjamin preliminary-exceptions judgment must link directly to its official Serie C 81 PDF.');
}
const directJudgments = [
  ['Extrabajadores del Organismo Judicial', '445'],
  ['Guachalá Chimbo', '423'],
  ['Ramírez Escobar', '351']
];
for (const [title, series] of directJudgments) {
  const row = jurisprudenciaRows.find(item => item.title.includes(title));
  if (row?.series !== series || !row.url.endsWith(`/seriec_${series}_esp.pdf`) || row.sourceLabel !== 'Abrir sentencia oficial') {
    throw new Error(`The case index needs the verified official Serie C ${series} judgment for ${title}.`);
  }
}
for (const [title, ficha] of [['Fábrica de Fuegos', '333'], ['Liakat Ali Alibux', '435']]) {
  const row = jurisprudenciaRows.find(item => item.title.includes(title));
  if (!row?.url.includes(`nId_Ficha=${ficha}`) || row.sourceLabel !== 'Abrir ficha oficial del caso') {
    throw new Error(`The case index needs the official technical sheet ${ficha} cited in the course materials for ${title}.`);
  }
}
const sourceCounts = jurisprudenciaRows.reduce((counts, row) => {
  const url = row.url.toLowerCase();
  if (url.includes('ver_ficha_tecnica')) counts.officialSheets++;
  else if (url.includes('/docs/casos/articulos/seriec_')) counts.serieCPdfs++;
  else if (url.includes('casos_sentencias.cfm')) counts.generalCatalog++;
  else counts.otherSources++;
  return counts;
}, {officialSheets: 0, serieCPdfs: 0, generalCatalog: 0, otherSources: 0});
if (jurisprudenciaRows.length !== 125 || sourceCounts.officialSheets !== 100 || sourceCounts.serieCPdfs !== 18 || sourceCounts.generalCatalog !== 0 || sourceCounts.otherSources !== 7) {
  throw new Error(`Unexpected jurisprudence source audit: ${JSON.stringify(sourceCounts)} across ${jurisprudenciaRows.length} records.`);
}
if (!styles.includes('.nav-group a[aria-current="page"]') || !styles.includes('.mobile-bar a[aria-current="page"]')) {
  throw new Error('Navigation needs a visible active-page state for current-page links.');
}
const currentStates = [...stateData.matchAll(/\['([A-Z]{3})','([^']+)','([^']+)'\]/g)];
const organIds = [...organData.matchAll(/\{id:'([a-z]+)'/g)].map(match => match[1]);
const mapCodes = new Set([...regionalMap.matchAll(/data-code="([A-Z]{3})"/g)].map(match => match[1]));
if (currentStates.length !== 34 || new Set(currentStates.map(row => row[1])).size !== 34 || currentStates.some(row => !mapCodes.has(row[1])) || !stateData.includes("code:'NIC'") || !mapCodes.has('NIC') || organIds.length !== 10 || !organIds.includes('cidh') || !organIds.includes('corte')) {
  throw new Error(`Expected 34 current OAS member states, Nicaragua's withdrawal record, and 10 distinct institutional profiles; found ${currentStates.length} states and ${organIds.length} organs.`);
}
if (!html.includes('id="organDetail"') || !html.includes('id="oasMapCanvas"') || !html.includes('id="mapMemberList"') || !html.includes('id="mapSearchResults"') || !html.includes('id="mapZoomIn"') || !regionalMap.includes('data-status="member"') || !serviceWorker.includes("'./assets/mapa-americas.svg'")) {
  throw new Error('The interactive organization explorer and offline Americas member map must be present.');
}
if (!html.includes('34 Estados miembros') || !html.includes('Nicaragua dej&oacute; de ser Estado parte') || !html.includes('data-mobile-section="mapa"')) {
  throw new Error('The Atlas must explain current membership, Nicaragua’s 2023 withdrawal, and provide a fixed mobile map shortcut.');
}
const home = html.match(/<section id="inicio" data-route-page[\s\S]*?<\/section>/)?.[0] || '';
if (!home.includes('Entiende el camino') || !home.includes('del hecho a la sentencia') || !home.includes('href="#recorrido">Seguir la ruta</a>') || ['#comision', '#corte', '#sistema'].some(href => !home.includes('href="' + href + '"')) || home.includes('class="procedure-overview"') || home.includes('class="hero-oas-link"') || home.includes('class="route-art"') || home.includes('class="hero-bottom"')) {
  throw new Error('The Atlas OEA overview should foreground the Commission-to-Court procedure in a simple editorial layout.');
}
const systemPage = html.match(/<section id="sistema"[\s\S]*?<\/section>/)?.[0] || '';
if (html.includes('class="principle-strip"') || !systemPage.includes('id="contrasts"') || !app.includes("['Admisibilidad y fondo'") || !app.includes("['Informe y sentencia'")) {
  throw new Error('Las distinciones Comisi?n/Corte deben permanecer en la p?gina del Sistema al simplificar el Panorama.');
}
if (!styles.includes('.mobile-bar{position:fixed;z-index:60;right:0;bottom:0;left:0;') || !styles.includes('height:calc(68px + env(safe-area-inset-bottom))') || !styles.includes('body{padding-bottom:calc(68px + env(safe-area-inset-bottom))}') || !html.includes('viewport-fit=cover')) {
  throw new Error('The mobile navigation must stay fixed, keep its labels visible, and respect the device safe area.');
}
if (!html.includes('id="homeNews"') || !html.includes('href="#actualidad">Ver todas las noticias</a>') || !html.includes('href="https://www.corteidh.or.cr/187POS-Brasilia/caso-1.html"') || !app.includes("dateValue:'2026-11-23'") || !app.includes("org:'OEA'") || !app.includes("'Todas','OEA','CIDH','Corte IDH'") || !app.includes("dateValue:'2026-03-20'") || !app.includes('215 observaciones escritas') || !app.includes('https://www.corteidh.or.cr/187POS-Brasilia/caso-1.html') || !app.includes("const featured=[recentNews.find(x=>x.org==='CIDH'),recentNews.find(x=>x.org==='Corte IDH'),recentNews.find(x=>x.org==='OEA')]") || app.includes("x.dateValue!=='2026-11-23'") || !app.includes('function renderHomeNews()')) {
  throw new Error('The overview must surface recent CIDH, Court and OAS news and filter the full list by institution.');
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
const admissionIds = [...(app.match(/const admissibilitySteps=\[([\s\S]*?)\n\];/)?.[1] || '').matchAll(/id:'([^']+)'/g)].map(match => match[1]);
const requiredAdmissionIds = ['competence', 'remedies', 'sixMonths', 'reasonableTime', 'risk', 'duplication', 'characterization'];
if (!html.includes('id="admissibilityLab"') || !html.includes('id="admissibilityChoices"') || !html.includes('id="admissibilityNext"') || requiredAdmissionIds.some(id => !admissionIds.includes(id)) || !app.includes("admissibilityState.route==='exception'?'reasonableTime'") || !app.includes("admissibilityState.route==='exhausted'?'sixMonths'") || !app.includes('data-open-clock') || !app.includes("el('clockStart').value='2024-01-15'")) {
  throw new Error('The CIDH admissibility practice must include both deadline routes, explicit steps, and a working next-step control.');
}
if (!app.includes("id!=='remedies'") || !app.includes("caseSim.internalVariant==='blocked'") || !app.includes("caseSim.internalVariant==='delay'") || !app.includes('46.2.b') || !app.includes('46.2.c') || !app.includes('46.1.b') || !app.includes('No pudo acceder al recurso') || !app.includes('Hay una demora prolongada') || !app.includes('no modifican la cronolog\u00eda base de Arcadia') || !app.includes('aria-pressed=') || !atlasShell.includes('.case-sim-variant button[aria-pressed="true"]')) {
  throw new Error('The Arcadia simulator must offer accessible, focused variants for internal-resource access and unjustified delay without altering its base chronology.');
}
if (!glossary.includes("id:'caracterizacion'") || !glossary.includes('Caracterización de una posible violación') || !glossary.includes('caracterización de los hechos') || !app.includes('caracterización de los hechos')) {
  throw new Error('The admissibility practice must connect initial characterization to a searchable glossary entry.');
}
if (!manifest.start_url || !manifest.scope || !serviceWorker.includes("'./index.html'")) {
  throw new Error('PWA start page or offline shell is incomplete.');
}
for (const icon of manifest.icons) await access(icon.src.replace(/^\.\//, ''));
const cachedFiles = [...serviceWorker.matchAll(/'\.(\/[^']+)'/g)]
  .map(match => match[1])
  .filter(path => path !== '/');
for (const file of cachedFiles) await access(file.split('?')[0].slice(1));

console.log(`Validated ${ids.length} unique page ids, ${routeCount} route pages, 34 OAS member states, 10 interactive organ profiles, the Americas map, ${opinionCount} advisory opinions, 18 procedural stations, 12 practice questions, and ${cachedFiles.length} offline assets.`);
