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
  const timeline = document.getElementById('mapTimeline');
  const timelineType = document.getElementById('mapTimelineType');
  const timelineYear = document.getElementById('mapTimelineYear');
  const timelineOutput = document.getElementById('mapTimelineOutput');
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
    VEN:{convention:2019,court:2019}
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
  let layer = 'membership';

  function setLegend() {
    if (layer === 'timeline') {
      const field = timelineType.value;
      const label = field === 'court' ? 'la competencia de la Corte' : 'la Convenci?n';
      legend.innerHTML = '<span><i class="legend-timeline"></i>Hito registrado hasta el a&ntilde;o elegido</span><span><i class="legend-other"></i>Sin fecha en esta tabla</span>';
      description.textContent = `Color: Estados con hito de ${label} hasta ${timelineYear.value}, seg?n el Informe Anual CIDH 2025.`;
      listTitle.textContent = `Hitos registrados hasta ${timelineYear.value}`;
      return;
    }
    if (layer === 'cases') {
      legend.innerHTML = '<span><i class="legend-cases"></i>País con decisiones citadas en esta guía</span><span><i class="legend-other"></i>Sin casos incorporados al índice</span>';
      description.textContent = 'Violeta: hay decisiones de ese país en el índice de esta guía. La selección no representa el total histórico de casos de la Corte.';
      listTitle.textContent = 'Países con casos citados en esta guía';
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
    count.textContent = layer === 'cases' ? `${rows.length} países` : `${rows.length} de ${members.length} Estados`;
    list.innerHTML = rows.length ? rows.map(state => `<button type="button" data-map-code="${state.code}"><span>${state.name}</span><small>${layer === 'cases' ? `${caseCounts.get(state.code)} ${caseCounts.get(state.code) === 1 ? 'caso citado' : 'casos citados'}` : layer === 'timeline' ? `Hito: ${treatyMilestones[state.code][timelineType.value]}` : state.region}</small></button>`).join('') : '<p class="oas-map-empty">No hay coincidencias en esta capa. Prueba con otro nombre.</p>';
  }

  function applyLayer() {
    const svg = canvas.querySelector('svg');
    if (svg) {
      if (svg.dataset.layer !== layer) svg.dataset.layer = layer;
      svg.dataset.timelineField = timelineType.value;
      svg.dataset.timelineYear = timelineYear.value;
      svg.querySelectorAll('[data-code]').forEach(shape => {
        const n = caseCounts.get(shape.dataset.code) || 0;
        shape.classList.toggle('has-atlas-cases', n > 0);
        if (shape.dataset.atlasCaseCount !== String(n)) shape.dataset.atlasCaseCount = String(n);
        const year = treatyMilestones[shape.dataset.code]?.[timelineType.value];
        shape.dataset.milestone = year && year <= Number(timelineYear.value) ? 'yes' : 'no';
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

  function renderConnections() {
    const selected = canvas.querySelector('svg [data-code].is-selected');
    const code = selected?.dataset.code;
    if (!code) {
      detail.querySelector('.map-country-connections')?.remove();
      delete detail.dataset.connectionCode;
      return;
    }
    if (detail.dataset.connectionCode === code && detail.querySelector('.map-country-connections')) return;
    detail.dataset.connectionCode = code;
    detail.querySelector('.map-country-connections')?.remove();
    const state = states.find(item => item.code === code);
    const name = state?.name || selected.dataset.name || code;
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
      matches.slice(0, 4).forEach(record => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = record.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = record.title;
        item.append(link);
        caseList.append(item);
      });
      panel.append(caseList);
      if (matches.length > 4) {
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
    detail.append(panel);
  }

  document.querySelectorAll('input[name="mapLayer"]').forEach(input => input.addEventListener('change', () => {
    layer = ['cases','timeline'].includes(input.value) ? input.value : 'membership';
    applyLayer();
  }));
  timelineType.addEventListener('change', applyLayer);
  timelineYear.addEventListener('input', () => {
    timelineOutput.value = timelineYear.value;
    timelineOutput.textContent = timelineYear.value;
    applyLayer();
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
  new MutationObserver(() => {
    applyLayer();
    renderConnections();
  }).observe(canvas, {childList:true,subtree:true,attributes:true,attributeFilter:['class']});
  new MutationObserver(renderConnections).observe(detail, {childList:true});
  applyLayer();
})();
