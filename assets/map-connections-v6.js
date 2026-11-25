'use strict';
/* Atlas OEA: capas temáticas y conexiones de lectura para el mapa regional. */
(() => {
  const canvas = document.getElementById('oasMapCanvas');
  const detail = document.getElementById('mapDetail');
  const search = document.getElementById('mapSearch');
  const list = document.getElementById('mapMemberList');
  const count = document.getElementById('mapMemberCount');
  const listTitle = document.getElementById('mapDirectoryTitle');
  const legend = document.getElementById('oasMapLegend');
  const description = document.getElementById('mapLayerDescription');
  const layerSelect = document.getElementById('mapLayerSelect');
  const timeline = document.getElementById('mapTimeline');
  const timelineType = document.getElementById('mapTimelineType');
  const timelineYear = document.getElementById('mapTimelineYear');
  const timelineOutput = document.getElementById('mapTimelineOutput');
  const timelinePlay = document.getElementById('mapTimelinePlay');
  if (!canvas || !detail || !search || !list) return;

  const members = window.RI_ESTADOS_OEA || [];
  const former = window.RI_ESTADOS_RETIRO || [];
  const states = [...members, ...former];
  const records = window.RI_JURISPRUDENCIA || [];
  // Milestones from the 2025 CIDH annual report; the year of the act alone does not encode later denunciations.
  const treatyMilestones = {
    ARG:{convention:1984,court:1984},BRB:{convention:1981,court:2000},BOL:{convention:1979,court:1993},BRA:{convention:1992,court:1998},
    CHL:{convention:1990,court:1990},COL:{convention:1973,court:1985},CRI:{convention:1970,court:1980},DMA:{convention:1993},
    ECU:{convention:1977,court:1984},SLV:{convention:1978,court:1995},GRD:{convention:1978},GTM:{convention:1978,court:1987},
    HTI:{convention:1977,court:1998},HND:{convention:1977,court:1981},JAM:{convention:1978},MEX:{convention:1981,court:1998},
    NIC:{convention:1979,court:1991},PAN:{convention:1978,court:1990},PRY:{convention:1989,court:1993},PER:{convention:1978,court:1981},
    DOM:{convention:1978,court:1999},SUR:{convention:1987,court:1987},TTO:{convention:1991,court:1991},URY:{convention:1985,court:1985},
    VEN:{convention:1977,court:1981}
  };
  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const aliases = {
    ARG:['argentina'], ATG:['antigua y barbuda'], BHS:['bahamas'], BRB:['barbados'], BLZ:['belice','belize'],
    BOL:['bolivia'], BRA:['brasil','brazil'], CAN:['canada'], CHL:['chile'], COL:['colombia'], CRI:['costa rica'],
    CUB:['cuba'], DMA:['dominica'], DOM:['republica dominicana','dominican republic'], ECU:['ecuador'], SLV:['el salvador'],
    GRD:['granada','grenada'], GTM:['guatemala'], GUY:['guyana'], HTI:['haiti'], HND:['honduras'], JAM:['jamaica'],
    MEX:['mexico','estados unidos mexicanos'], NIC:['nicaragua'], PAN:['panama'], PRY:['paraguay'], PER:['peru'],
    KNA:['san cristobal y nieves','saint kitts and nevis','st. kitts and nevis'], LCA:['santa lucia','saint lucia','st. lucia'],
    VCT:['san vicente y las granadinas','saint vincent and the grenadines'], SUR:['suriname'], TTO:['trinidad y tobago','trinidad and tobago'],
    URY:['uruguay'], USA:['estados unidos','united states'], VEN:['venezuela']
  };
  const casesFor = code => {
    const terms = (aliases[code] || []).map(normalize);
    return records.filter(record => {
      const title = normalize(record.title);
      const vs = title.indexOf(' vs');
      if (vs < 0) return false;
      const defendant = title.slice(vs + 3);
      return terms.some(term => defendant.includes(term));
    });
  };
  const caseCounts = new Map(states.map(state => [state.code, casesFor(state.code).length]));
  let layer = layerSelect.value || 'membership';
  let timelineTimer = null;
  function stopTimeline() {
    if (timelineTimer) clearInterval(timelineTimer);
    timelineTimer = null;
    timelinePlay.setAttribute('aria-pressed','false');
    timelinePlay.textContent = '▶ Animar la cronología';
  }

  function setLegend() {
    if (layer === 'timeline') {
      const field = timelineType.value;
      const label = field === 'court' ? 'la competencia de la Corte' : 'la Convención';
      legend.innerHTML = [
        ['timeline-early', 'Antes de 1980'],
        ['timeline-80s', '1980–1989'],
        ['timeline-90s', '1990–1999'],
        ['timeline-recent', '2000 en adelante'],
        ['timeline-after', 'Después del año elegido'],
        ['timeline-unknown', 'Sin fecha verificada en esta tabla']
      ].map(([className, legendLabel]) => `<span><i class="${className}"></i>${legendLabel}</span>`).join('');
      listTitle.textContent = `Hitos registrados hasta ${timelineYear.value}`;
      description.textContent = `Color: década del primer hito registrado de ${label}. El año filtra el mapa; «sin fecha» indica un dato no verificado.`;
      return;
    }
    if (layer === 'cases') {
      legend.innerHTML = [
        ['1', '1'], ['2', '2&ndash;4'], ['3', '5&ndash;9'], ['4', '10 o m&aacute;s'], ['0', 'Sin casos indexados']
      ].map(([band, label]) => '<span><i class="legend-case-band" data-case-band="' + band + '"></i>' + label + '</span>').join('');
      description.textContent = 'El color distingue cuántas referencias de cada país aparecen en esta guía. La selección no representa el total histórico de casos de la Corte. Varias referencias pueden corresponder a un mismo expediente.';
      listTitle.textContent = 'Países con referencias citadas en esta guía';
      return;
    }
    legend.innerHTML = '<span><i class="legend-member"></i>Estado miembro</span><span><i class="legend-former"></i>Retiro efectivo en 2023</span><span><i class="legend-other"></i>Otro pa&iacute;s o territorio</span>';
    description.textContent = 'Cian: miembro actual. Violeta: retiro efectivo de Nicaragua en 2023. Gris: otro país o territorio.';
    listTitle.textContent = 'Lista de miembros actuales';
  }

  function renderDirectory() {
    const query = normalize(search.value.trim());
    const source = layer === 'cases' ? states.filter(state => caseCounts.get(state.code) > 0) : layer === 'timeline' ? states.filter(state => (treatyMilestones[state.code]?.[timelineType.value] || 9999) <= Number(timelineYear.value)) : members;
    const rows = source.filter(state => !query || normalize(`${state.name} ${state.region}`).includes(query));
    count.textContent = layer !== 'membership' ? `${rows.length} Estados` : `${rows.length} de ${members.length} Estados`;
    list.innerHTML = rows.length ? rows.map(state => `<button type="button" data-map-code="${state.code}"><span>${state.name}</span><small>${layer === 'cases' ? `${caseCounts.get(state.code)} ${caseCounts.get(state.code) === 1 ? 'referencia citada' : 'referencias citadas'}` : layer === 'timeline' ? `Hito: ${treatyMilestones[state.code][timelineType.value]}` : state.region}</small></button>`).join('') : '<p class="oas-map-empty">No hay coincidencias en esta capa. Prueba con otro nombre.</p>';
  }

  function applyLayer() {
    const svg = canvas.querySelector('svg');
    if (svg) {
      if (svg.dataset.layer !== layer) svg.dataset.layer = layer;
      svg.dataset.timelineField = timelineType.value;
      svg.dataset.timelineYear = timelineYear.value;
      svg.querySelectorAll('[data-code]').forEach(shape => {
        const n = caseCounts.get(shape.dataset.code) || 0;
        shape.dataset.caseBand = n === 0 ? '0' : n === 1 ? '1' : n < 5 ? '2' : n < 10 ? '3' : '4';
        shape.classList.toggle('has-atlas-cases', n > 0);
        if (shape.dataset.atlasCaseCount !== String(n)) shape.dataset.atlasCaseCount = String(n);
        const year = treatyMilestones[shape.dataset.code]?.[timelineType.value];
        shape.dataset.milestone = year && year <= Number(timelineYear.value) ? 'yes' : 'no';
        shape.dataset.milestoneBand = !year ? 'unknown' : year > Number(timelineYear.value) ? 'after' : year < 1980 ? 'early' : year < 1990 ? '80s' : year < 2000 ? '90s' : 'recent';
      });
    }
    setLegend();
    timeline.hidden = layer !== 'timeline';
    renderDirectory();
  }

  function addLink(parent, href, label, className = '') {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = label;
    if (className) link.className = className;
    parent.append(link);
    return link;
  }

  const stateProfile = document.getElementById('stateProfile');
  const stateSearch = document.getElementById('stateSearch');
  const stateDirectory = document.getElementById('stateDirectory');
  const stateResultsCount = document.getElementById('stateResultsCount');
  const stateIndex = new Map(states.map(state => [state.code, state]));
  const profileHref = code => `#estados?estado=${code}`;
  const hashState = () => new URLSearchParams(location.hash.split('?')[1]).get('estado');

  function renderStateDirectory() {
    const query = normalize(stateSearch.value.trim());
    const selected = hashState();
    const rows = states
      .filter(state => normalize(`${state.name} ${state.region} ${state.code}`).includes(query))
      .sort((a, b) => a.name.localeCompare(b.name, 'es'));
    const retired = rows.filter(state => state.status === 'former').length;
    const current = rows.length - retired;
    stateResultsCount.textContent = query
      ? `${rows.length} ${rows.length === 1 ? 'perfil' : 'perfiles'} · ${current} ${current === 1 ? 'miembro actual' : 'miembros actuales'}${retired ? ` · ${retired} ficha de retiro` : ''}`
      : `${members.length} Estados miembros actuales${former.length ? ` · ${former.length} ficha histórica de retiro` : ''}`;
    const items = rows.map(state => {
      const item = document.createElement('li');
      const link = addLink(item, profileHref(state.code), state.name);
      if (state.code === selected) link.setAttribute('aria-current', 'page');
      const region = document.createElement('small');
      region.textContent = state.status === 'former' ? 'Retiro de la OEA' : state.region;
      item.append(region);
      return item;
    });
    stateDirectory.replaceChildren(...items);
  }

  function renderStateProfile(moveFocus = false) {
    const state = stateIndex.get(hashState());
    const heading = document.createElement('h3');
    heading.id = 'stateProfileHeading';
    heading.tabIndex = -1;
    heading.textContent = state?.name || 'Elige un Estado';
    stateProfile.replaceChildren(heading);
    if (!state) {
      const hint = document.createElement('p');
      hint.textContent = hashState() ? 'Ese Estado no está en el directorio. Elige uno de la lista.' : 'Busca un Estado para ver sus hitos y casos.';
      stateProfile.append(hint);
      return;
    }
    const facts = document.createElement('dl');
    facts.className = 'state-facts';
    const dates = treatyMilestones[state.code] || {};
    if(state.code==='VEN'){const history=document.createElement('p');history.textContent='Venezuela: depósito inicial en 1977; reconocimiento de la Corte en 1981; denuncia de la Convención notificada en 2012, efectiva en 2013; nuevo depósito de ratificación registrado en 2019. Estos eventos no resuelven por sí solos la competencia sobre un período concreto: consulta el registro B-32 y las declaraciones.';stateProfile.append(history);}
    [
      ['Relación con la OEA', state.status === 'former' ? `Retiro efectivo el ${state.date}` : `Estado miembro · ${state.region}`],
      ['Convención Americana', dates.convention ? `Hito registrado en ${dates.convention}` : 'Sin fecha en la tabla de hitos'],
      ['Competencia contenciosa de la Corte', dates.court ? `Hito registrado en ${dates.court}` : 'Sin fecha en la tabla de hitos']
    ].forEach(([label, value]) => {
      const item = document.createElement('div');
      const term = document.createElement('dt');
      const description = document.createElement('dd');
      term.textContent = label;
      description.textContent = value;
      item.append(term, description);
      facts.append(item);
    });
    const note = document.createElement('p');
    note.textContent = 'Los años son hitos históricos de la tabla del Atlas. Para conocer el alcance vigente, consulta también las reservas, declaraciones y retiros en las fuentes oficiales.';
    stateProfile.append(facts, note);
    const charter = addLink(stateProfile, 'https://www.oas.org/es/sla/ddi/tratados_multilaterales_interamericanos_A-41_carta_OEA_firmas.asp', 'Consultar la Carta de la OEA y su registro', 'map-route-link');
    charter.target = '_blank';
    charter.rel = 'noopener noreferrer';
    addLink(stateProfile, `#mapa?estado=${state.code}`, 'Ver este Estado en el mapa', 'map-route-link');
    stateProfile.append(buildConnections(state.code, state.name, true));
    if (moveFocus) requestAnimationFrame(() => {
      if (!heading.isConnected || stateProfile.closest('[hidden]')) return;
      heading.scrollIntoView({block:'start'});
      heading.focus({preventScroll:true});
    });
  }

  function renderConnections() {
    const selected = canvas.querySelector('svg [data-code].is-selected');
    const code = selected?.dataset.code;
    if (!code) {
      detail.querySelector('.map-country-connections')?.remove();
      detail.querySelector('.map-country-profile-link')?.remove();
      delete detail.dataset.connectionCode;
      return;
    }
    if (detail.dataset.connectionCode === code && detail.querySelector('.map-country-connections')) return;
    detail.dataset.connectionCode = code;
    detail.querySelector('.map-country-connections')?.remove();
    detail.querySelector('.map-country-profile-link')?.remove();
    const state = states.find(item => item.code === code);
    const name = state?.name || selected.dataset.name || code;
    if (state) addLink(detail, profileHref(code), 'Abrir ficha completa del Estado', 'map-country-profile-link');
    detail.append(buildConnections(code, name));
  }

  function buildConnections(code, name, fullProfile = false) {
    const panel = document.createElement('section');
    panel.className = 'map-country-connections';
    const heading = document.createElement('h4');
    heading.textContent = `Sigue la relación de ${name}`;
    panel.append(heading);
    const explanation = document.createElement('p');
    explanation.textContent = 'La membresía en la OEA no determina por sí sola la ratificación de la Convención Americana ni la competencia contenciosa de la Corte.';
    panel.append(explanation);
    const path = document.createElement('ol');
    path.className = 'map-relation-path';
    [
      ['OEA', 'Organización y Carta', '#oea'],
      ['CIDH', 'Comisión: peticiones y trámite', '#comision'],
      ['Corte', 'Jurisdicción y procedimiento', '#corte']
    ].forEach(([name, label, href]) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = href;
      const strong = document.createElement('strong');
      strong.textContent = name;
      const span = document.createElement('span');
      span.textContent = label;
      link.append(strong, span);
      item.append(link);
      path.append(item);
    });
    panel.append(path);
    addLink(panel, '#recorrido', 'Ver las 18 estaciones del procedimiento', 'map-route-link');
    const treatyStatus = addLink(panel, 'https://www.oas.org/es/cidh/mandato/Basicos/convratif.asp', 'Comprobar ratificación de la Convención y aceptación de la Corte en la OEA', 'map-route-link');
    treatyStatus.target = '_blank';
    treatyStatus.rel = 'noopener noreferrer';

    const matches = casesFor(code);
    const casesHeading = document.createElement('h4');
    casesHeading.textContent = `Jurisprudencia de ${name} en esta guía`;
    panel.append(casesHeading);
    if (matches.length) {
      const caseList = document.createElement('ul');
      caseList.className = 'map-country-cases';
      (fullProfile ? matches : matches.slice(0, 4)).forEach(record => {
        const item = document.createElement('li');
        addLink(item, '#jurisprudencia?caso=' + encodeURIComponent(record.title), record.title);
        const official = addLink(item, record.url, record.sourceLabel || 'Fuente oficial', 'map-case-source');
        official.target = '_blank';
        official.rel = 'noopener noreferrer';
        caseList.append(item);
      });
      panel.append(caseList);
      if (!fullProfile && matches.length > 4) {
        const note = document.createElement('p');
        note.textContent = `Se muestran 4 de ${matches.length} referencias del Atlas; el catálogo es una selección de estudio.`;
        panel.append(note);
      }
    } else {
      const note = document.createElement('p');
      note.textContent = 'El índice actual no incluye casos de este país. Esto no significa que no existan decisiones relacionadas.';
      panel.append(note);
    }
    addLink(panel, '#jurisprudencia', 'Abrir biblioteca de jurisprudencia', 'map-route-link');
    return panel;
  }

  layerSelect.addEventListener('change', () => {
    layer = ['cases','timeline'].includes(layerSelect.value) ? layerSelect.value : 'membership';
    if (layer !== 'timeline') stopTimeline();
    applyLayer();
  });
  timelineType.addEventListener('change', applyLayer);
  timelineYear.addEventListener('input', () => {
    if (timelineTimer) stopTimeline();
    timelineOutput.value = timelineYear.value;
    timelineOutput.textContent = timelineYear.value;
    applyLayer();
  });
  timelinePlay.addEventListener('click', () => {
    if (timelineTimer) { stopTimeline(); return; }
    layerSelect.value = 'timeline';
    layer = 'timeline';
    if (Number(timelineYear.value) >= Number(timelineYear.max)) timelineYear.value = timelineYear.min;
    timelineOutput.value = timelineYear.value;
    timelineOutput.textContent = timelineYear.value;
    timelinePlay.setAttribute('aria-pressed','true');
    timelinePlay.textContent = '⏸ Pausar la cronología';
    applyLayer();
    timelineTimer = setInterval(() => {
      const next = Number(timelineYear.value) + 1;
      if (next > Number(timelineYear.max)) { stopTimeline(); return; }
      timelineYear.value = String(next);
      timelineOutput.value = String(next);
      timelineOutput.textContent = String(next);
      applyLayer();
    }, 700);
  });
  document.querySelectorAll('.map-pan button').forEach(button => button.addEventListener('click', () => {
    const svg = canvas.querySelector('svg');
    if (!svg) return;
    const [x, y, width, height] = svg.getAttribute('viewBox').split(/[ ,]+/).map(Number);
    setMapView(x + Number(button.dataset.panX || 0) * width * .22, y + Number(button.dataset.panY || 0) * height * .22, width);
    canvas.focus({preventScroll:true});
  }));
  canvas.addEventListener('keydown', event => {
    const moves = {ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]};
    const move = moves[event.key];
    const svg = canvas.querySelector('svg');
    if (!move || !svg) return;
    event.preventDefault();
    const [x, y, width, height] = svg.getAttribute('viewBox').split(/[ ,]+/).map(Number);
    setMapView(x + move[0] * width * .14, y + move[1] * height * .14, width);
  });
  search.addEventListener('input', renderDirectory);
  list.addEventListener('click', event => {
    const button = event.target.closest('[data-map-code]');
    if (button && typeof window.selectMapCountry === 'function') window.selectMapCountry(button.dataset.mapCode);
  });
  let pendingMapCode = null;
  function selectLinkedMapState() {
    const svg = canvas.querySelector('svg');
    if (!pendingMapCode || !svg) return;
    const code = pendingMapCode;
    pendingMapCode = null;
    window.selectMapCountry(code);
  }
  function followStateRoute(moveFocus = false) {
    const route = location.hash.split('?')[0];
    pendingMapCode = route === '#mapa' && stateIndex.has(hashState()) ? hashState() : null;
    selectLinkedMapState();
    if (route === '#estados') {
      renderStateDirectory();
      renderStateProfile(moveFocus);
    }
  }
  stateSearch.addEventListener('input', renderStateDirectory);
  window.addEventListener('hashchange', () => followStateRoute(true));
  followStateRoute();
  new MutationObserver(() => {
    selectLinkedMapState();
    applyLayer();
    renderConnections();
  }).observe(canvas, {childList:true,subtree:true,attributes:true,attributeFilter:['class']});
  new MutationObserver(renderConnections).observe(detail, {childList:true});
  applyLayer();
})();
