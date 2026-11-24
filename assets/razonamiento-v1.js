(() => {
  const nodes = [
    {
      label: 'Hechos',
      title: 'Separa los hechos de las conclusiones',
      context: 'En Arcadia, el expediente trata actuaciones médicas y judiciales. Distingue qué sostiene cada parte, qué fechas constan y qué información está discutida.',
      prompt: '¿Qué conviene hacer antes de afirmar que hubo una violación?',
      answers: [
        'Armar una cronología y marcar qué hechos están documentados, controvertidos o pendientes de prueba.',
        'Empezar por la reparación económica y acomodar después los hechos.',
        'Tratar toda afirmación de una parte como un hecho ya establecido.'
      ],
      correct: 0,
      feedback: 'Una cronología ayuda a ubicar acciones, omisiones, personas y fechas. Mantén separadas las alegaciones y los hechos que la prueba permite sostener.',
      source: 'https://www.oas.org/es/cidh/mandato/documentos-basicos/convencion-americana-derechos-humanos.pdf',
      sourceLabel: 'Convención Americana'
    },
    {
      label: 'Obligación',
      title: 'Nombra la obligación que se alega',
      context: 'Una descripción de daño no reemplaza la norma aplicable. Identifica el derecho y explica cómo se relaciona con el deber estatal de respetar y garantizar derechos.',
      prompt: '¿Cómo presentas la regla jurídica relevante?',
      answers: [
        'Citas solo el deber general y omites el derecho concreto que se alega afectado.',
        'Identificas el derecho pertinente y explicas cómo se conecta con los deberes convencionales aplicables.',
        'Presumes que toda consecuencia adversa vulnera la Convención.'
      ],
      correct: 1,
      feedback: 'El argumento debe precisar qué norma se invoca y qué conducta exige en ese contexto. Los artículos 1.1 y 2 se leen junto con las disposiciones sustantivas pertinentes.',
      source: 'https://www.oas.org/es/cidh/mandato/documentos-basicos/convencion-americana-derechos-humanos.pdf',
      sourceLabel: 'Convención Americana, artículos 1.1 y 2'
    },
    {
      label: 'Conducta',
      title: 'Explica qué hizo o dejó de hacer el Estado',
      context: 'No atribuyas automáticamente al Estado cualquier acto de una persona particular. Describe la intervención estatal alegada y, cuando corresponda, qué deber de garantía debe examinarse.',
      prompt: '¿Qué conecta una conducta con una posible responsabilidad estatal?',
      answers: [
        'La identidad de la persona señalada, sin analizar qué obligación tenía el Estado.',
        'El resultado perjudicial, que por sí solo demuestra responsabilidad.',
        'La conducta concreta y la obligación estatal pertinente, con el fundamento para atribuirla o examinar el deber de garantía.'
      ],
      correct: 2,
      feedback: 'La responsabilidad exige analizar la obligación internacional y su relación con acciones u omisiones estatales. El estándar depende de los hechos y del derecho invocado.',
      source: 'https://corteidh.or.cr/docs/casos/articulos/seriec_04_esp.pdf',
      sourceLabel: 'Sentencia de fondo de Velásquez Rodríguez'
    },
    {
      label: 'Evidencia',
      title: 'Apoya cada enlace del argumento',
      context: 'Una prueba puede respaldar un hecho y no otro. Señala qué demuestra, a quién se refiere y qué límites tiene; contrasta también la evidencia de la otra parte.',
      prompt: '¿Cómo usas la prueba en el análisis?',
      answers: [
        'Relacionas cada elemento con el hecho, la persona, la fecha o la consecuencia que ayuda a acreditar.',
        'Enumeras documentos sin explicar qué cuestión apoya cada uno.',
        'Omites la prueba que no coincide con la versión inicial.'
      ],
      correct: 0,
      feedback: 'Explica la función de cada elemento y sus límites. El análisis debe responder a las pruebas y argumentos de ambas partes.',
      source: 'https://www.corteidh.or.cr/reglamento.cfm?lang=es',
      sourceLabel: 'Reglamento de la Corte Interamericana'
    },
    {
      label: 'Daño',
      title: 'Describe las consecuencias y a quién afectan',
      context: 'Distingue el hecho alegado de las consecuencias que se atribuyen a ese hecho. Identifica a cada persona afectada y qué información respalda esa relación.',
      prompt: '¿Qué debe explicar una alegación de daño?',
      answers: [
        'Solo una cifra total, sin explicar de dónde sale ni a quién corresponde.',
        'Qué consecuencia se alega, quién la sufrió y cómo se relaciona con la violación que se plantea.',
        'Que cualquier consecuencia permite presumir todas las demás.'
      ],
      correct: 1,
      feedback: 'La relación entre la violación, las consecuencias y las personas afectadas importa para analizar las reparaciones. No supongas daños que el expediente no documenta.',
      source: 'https://corteidh.or.cr/docs/casos/articulos/seriec_07_esp.pdf',
      sourceLabel: 'Sentencia de reparaciones de Velásquez Rodríguez'
    },
    {
      label: 'Reparación',
      title: 'Relaciona cada medida con la consecuencia',
      context: 'Si la Corte determina que hubo una violación, puede ordenar las medidas que correspondan bajo la Convención. La indemnización es una posibilidad; no es la única forma de reparación.',
      prompt: '¿Cómo justificas una medida de reparación?',
      answers: [
        'Pides la misma suma en todos los casos, aunque cambien los daños y las personas afectadas.',
        'Propones medidas sin explicar qué consecuencia buscan atender.',
        'Vinculas cada medida solicitada con la violación, el daño alegado y la forma en que puede repararlo.'
      ],
      correct: 2,
      feedback: 'El artículo 63.1 permite reparar las consecuencias de la violación y fijar una justa indemnización si procede. La medida concreta se decide según las circunstancias y la prueba del caso.',
      source: 'https://www.oas.org/es/cidh/mandato/documentos-basicos/convencion-americana-derechos-humanos.pdf',
      sourceLabel: 'Convención Americana, artículo 63.1'
    }
  ];

  const track = [...document.querySelectorAll('[data-reason-node]')];
  const focus = document.getElementById('reasoningFocus');
  const progress = document.getElementById('reasoningProgress');
  if (!track.length || !focus || !progress) return;

  const completed = new Set();
  const selections = new Map();
  let active = 0;

  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);

  function render() {
    const node = nodes[active];
    track.forEach((button, index) => {
      button.setAttribute('aria-pressed', String(index === active));
      button.toggleAttribute('data-complete', completed.has(index));
    });
    progress.textContent = completed.size === nodes.length
      ? '6 relaciones resueltas · Puedes volver a cualquiera para revisar su fundamento.'
      : 'Relación ' + (active + 1) + ' de ' + nodes.length + ' · ' + completed.size + ' resueltas';

    const selected = selections.get(active);
    focus.innerHTML = '<p class="reasoning-step-label">RELACIÓN ' + String(active + 1).padStart(2, '0') + '</p>' +
      '<h3>' + escapeHTML(node.title) + '</h3>' +
      '<p class="reasoning-context">' + escapeHTML(node.context) + '</p>' +
      '<fieldset class="reasoning-question"><legend>' + escapeHTML(node.prompt) + '</legend>' +
      '<div class="reasoning-answers">' + node.answers.map((answer, index) => {
        const state = selected === index ? (index === node.correct ? ' is-correct' : ' is-wrong') : '';
        return '<button type="button" class="reasoning-answer' + state + '" data-reason-answer="' + index + '" aria-pressed="' + String(selected === index) + '">' + escapeHTML(answer) + '</button>';
      }).join('') + '</div></fieldset>' +
      '<p class="reasoning-feedback" id="reasoningFeedback" aria-live="polite">' +
      (selected === undefined ? 'Elige una respuesta para ver la explicación.' :
        (selected === node.correct ? 'Relación identificada. ' : 'Revisa esta relación. ') + escapeHTML(node.feedback)) +
      '</p>' +
      '<p class="reasoning-source">Fuente: <a href="' + escapeHTML(node.source) + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(node.sourceLabel) + '</a></p>' +
      '<div class="reasoning-actions">' +
      (active > 0 ? '<button type="button" class="button secondary" data-reason-previous>Relación anterior</button>' : '') +
      (active < nodes.length - 1 ? '<button type="button" class="button primary" data-reason-next>Siguiente relación</button>' :
        '<a class="button secondary" href="#recorrido">Repasar las estaciones</a>') +
      '</div>';

    focus.querySelectorAll('[data-reason-answer]').forEach(button => button.addEventListener('click', () => {
      const answer = Number(button.dataset.reasonAnswer);
      selections.set(active, answer);
      if (answer === node.correct) completed.add(active);
      render();
      focus.querySelector('[data-reason-answer="' + answer + '"]')?.focus();
    }));
    focus.querySelector('[data-reason-next]')?.addEventListener('click', () => { active += 1; render(); track[active].focus(); });
    focus.querySelector('[data-reason-previous]')?.addEventListener('click', () => { active -= 1; render(); track[active].focus(); });
  }

  track.forEach(button => button.addEventListener('click', () => {
    active = Number(button.dataset.reasonNode);
    render();
  }));
  render();
})();
