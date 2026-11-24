'use strict';

(() => {
  const catalogue = document.getElementById('dataCatalogue');
  const sourceList = document.getElementById('dataCaseSources');
  const download = document.getElementById('downloadAtlasData');
  const status = document.getElementById('dataDownloadStatus');

  function caseSourceKind(url) {
    const {hostname, pathname} = new URL(url);
    if (!/(^|\.)corteidh\.or\.cr$/i.test(hostname)) return 'other';
    if (/\/ver_ficha_tecnica\.cfm$/i.test(pathname)) return 'sheet';
    if (/\/docs\/casos\/articulos\/seriec_.*\.pdf$/i.test(pathname)) return 'judgment';
    return 'other';
  }

  const cases = (window.RI_JURISPRUDENCIA || []).map(({title, jurisdiction, series, topic, url}) =>
    ({title, jurisdiction, series, topic, url, sourceKind:caseSourceKind(url)}));
  const opinions = (window.RI_OPINIONES || []).map(({number, year, title, topic, url, english}) =>
    ({number, year, title, topic, url, ...(english && {english:{kind:english.kind, url:english.url}})}));
  const states = [...(window.RI_ESTADOS_OEA || []), ...(window.RI_ESTADOS_RETIRO || [])].map(({code, name, region, status, date}) =>
    ({code, name, region, status, ...(date && {date})}));
  const datasets = [
    ['Referencias de jurisprudencia', cases, '#jurisprudencia'],
    ['Opiniones consultivas', opinions, '#opiniones'],
    ['Fichas de Estados', states, '#estados']
  ];

  for (const [label, records, href] of datasets) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    const count = document.createElement('strong');
    link.href = href;
    link.textContent = label;
    count.textContent = records.length.toLocaleString('es');
    item.append(link, count);
    catalogue.append(item);
  }

  for (const [kind, label] of [
    ['sheet', 'Ficha técnica de la Corte IDH'],
    ['judgment', 'Sentencia en PDF de la Serie C'],
    ['other', 'Otra fuente documental']
  ]) {
    const term = document.createElement('dt');
    const count = document.createElement('dd');
    term.textContent = label;
    count.textContent = cases.filter(record => record.sourceKind === kind).length.toLocaleString('es');
    sourceList.append(term, count);
  }

  download.addEventListener('click', () => {
    const index = {schemaVersion:1, project:'Atlas OEA', cases, opinions, states};
    const blob = new Blob([JSON.stringify(index, null, 2) + '\n'], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'atlas-oea-indices.json';
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    status.textContent = 'Se solicitó la descarga de atlas-oea-indices.json.';
  });
})();
