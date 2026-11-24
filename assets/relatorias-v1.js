'use strict';

(() => {
  const directory = document.getElementById('rapporteurDirectory');
  const search = document.getElementById('rapporteurSearch');
  const count = document.getElementById('rapporteurCount');
  const filters = [...document.querySelectorAll('[data-rapporteur-filter]')];
  const folderUrl = folder => 'https://www.oas.org/es/cidh/jsForm/?File=' +
    encodeURIComponent('/es/cidh/r/' + folder + '/default.asp');
  const thematic = [
    ['Pueblos indígenas', 'Territorios, consulta y derechos de los pueblos indígenas.', 'dpi'],
    ['Derechos de las mujeres', 'Discriminación, violencia y acceso a la justicia.', 'DMUJERES'],
    ['Niñas, niños y adolescentes', 'Protección de la niñez y condiciones para ejercer sus derechos.', 'dn'],
    ['Personas privadas de libertad', 'Condiciones de detención, garantías y derechos de las personas detenidas.', 'dppl'],
    ['Movilidad humana', 'Migración, refugio, desplazamiento y otras formas de movilidad.', 'dm'],
    ['Personas afrodescendientes', 'Igualdad y respuesta a la discriminación racial.', 'DPAD'],
    ['Personas LGBTI', 'Igualdad y derechos relacionados con orientación sexual, identidad y expresión de género y diversidad corporal.', 'dlgbti'],
    ['Personas defensoras y operadoras de justicia', 'Condiciones para defender derechos y ejercer funciones de justicia.', 'DDDH'],
    ['Personas mayores', 'Igualdad, autonomía y protección de las personas mayores.', 'PM'],
    ['Personas con discapacidad', 'Accesibilidad, igualdad y participación de las personas con discapacidad.', 'dpd']
  ].map(([title, description, folder]) => ({title, description, url:folderUrl(folder), kind:'thematic'}));
  const special = [
    {title:'Libertad de expresión', description:'Periodismo, acceso a la información y libertad de expresión.', url:'https://www.oas.org/es/cidh/expresion/index.asp', kind:'special'},
    {title:'Derechos económicos, sociales, culturales y ambientales (REDESCA)', description:'Derechos como salud, educación, trabajo y ambiente sano.', url:folderUrl('DESCA'), kind:'special'}
  ];
  const records = [...thematic, ...special];
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  let active = 'all';

  function render() {
    const words = normalize(search.value).split(/\s+/).filter(Boolean);
    const matches = records.filter(item => (active === 'all' || item.kind === active) &&
      words.every(word => normalize(item.title + ' ' + item.description).includes(word)));
    count.textContent = matches.length + (matches.length === 1 ? ' relatoría' : ' relatorías');
    directory.replaceChildren(...matches.map(item => {
      const details = document.createElement('details');
      const title = document.createElement('summary');
      const purpose = document.createElement('p');
      const link = document.createElement('a');
      title.textContent = item.title;
      purpose.textContent = (item.kind === 'special' ? 'Relatoría especial. ' : 'Relatoría temática. ') + item.description;
      link.href = item.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Consultar ficha oficial ↗';
      details.append(title, purpose, link);
      return details;
    }));
  }
  filters.forEach(button => button.addEventListener('click', () => {
    active = button.dataset.rapporteurFilter;
    filters.forEach(option => option.setAttribute('aria-pressed', String(option === button)));
    render();
  }));
  search.addEventListener('input', render);
  render();
})();
