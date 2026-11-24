(() => {
  const treaties = {
    cadh: {
      name: 'Convención Americana sobre Derechos Humanos',
      dates: 'Adoptada el 22 de noviembre de 1969. En vigor desde el 18 de julio de 1978.',
      matters: 'Derechos y obligaciones previstos por la Convención Americana.',
      direct: 'Puede ser aplicada dentro de la competencia atribuida a cada órgano y de los requisitos jurisdiccionales pertinentes.',
      cidh: 'La CIDH tramita peticiones conforme a los artículos 44–51.',
      court: 'Los artículos 61–64 regulan el acceso, la competencia contenciosa y la función consultiva. Solo los Estados parte y la Comisión pueden someter casos. La competencia contenciosa requiere reconocimiento conforme al artículo 62.',
      un: 'El Comité de los Derechos del Niño no supervisa este tratado.',
      citation: 'Convención Americana, artículos 44–51 y 61–64.',
      url: 'https://www.oas.org/es/cidh/mandato/basicos/convencion.asp'
    },
    san: {
      name: 'Protocolo de San Salvador',
      dates: 'Adoptado el 17 de noviembre de 1988. En vigor desde el 16 de noviembre de 1999.',
      matters: 'Derechos económicos, sociales y culturales.',
      direct: 'El artículo 19.6 prevé peticiones individuales únicamente para los derechos sindicales del artículo 8.a y el derecho a la educación del artículo 13.',
      cidh: 'El artículo 19.6 limita las peticiones individuales a los artículos 8.a y 13, con arreglo a los procedimientos aplicables.',
      court: 'No se debe inferir una jurisdicción contenciosa autónoma sobre todo el Protocolo. Analiza el artículo 19.6 y las disposiciones de jurisdicción aceptadas.',
      un: 'El Comité de los Derechos del Niño no supervisa este tratado.',
      citation: 'Protocolo de San Salvador, artículo 19.6.',
      url: 'https://www.oas.org/es/cidh/mandato/Basicos/sansalvador.asp'
    },
    belem: {
      name: 'Convención de Belém do Pará',
      dates: 'Adoptada el 9 de junio de 1994. En vigor desde el 5 de marzo de 1995.',
      matters: 'Prevención, sanción y erradicación de la violencia contra la mujer.',
      direct: 'El artículo 12 limita las peticiones individuales ante la CIDH a presuntas violaciones del artículo 7 por un Estado parte.',
      cidh: 'El artículo 12 abre peticiones ante la Comisión respecto del artículo 7.',
      court: 'El artículo 11 permite solicitudes de opinión consultiva. El artículo 12 prevé peticiones ante la CIDH, no una atribución contenciosa autónoma a la Corte.',
      un: 'El Comité de los Derechos del Niño no supervisa este tratado.',
      citation: 'Convención de Belém do Pará, artículos 11–12.',
      url: 'https://www.oas.org/es/cidh/mandato/basicos/belemdopara.asp'
    },
    disappear: {
      name: 'Convención Interamericana sobre Desaparición Forzada de Personas',
      dates: 'Adoptada el 9 de junio de 1994. En vigor desde el 28 de marzo de 1996.',
      matters: 'Prevención, sanción y erradicación de la desaparición forzada.',
      direct: 'El artículo XIII remite el trámite de peticiones al marco de la Convención Americana y a los estatutos y reglamentos interamericanos.',
      cidh: 'Las peticiones se tramitan conforme a la Convención Americana, el Estatuto y el Reglamento de la CIDH, de acuerdo con el artículo XIII.',
      court: 'El artículo XIII incluye las reglas de la Corte en la remisión procedimental. Los requisitos de jurisdicción de la Corte siguen siendo pertinentes.',
      un: 'El Comité de los Derechos del Niño no supervisa este tratado.',
      citation: 'Convención Interamericana sobre Desaparición Forzada, artículo XIII.',
      url: 'https://www.oas.org/es/cidh/mandato/Basicos/desaparicion.asp'
    },
    crc: {
      name: 'Convención sobre los Derechos del Niño y Protocolo facultativo de comunicaciones',
      dates: 'Convención adoptada el 20 de noviembre de 1989. El Protocolo facultativo de comunicaciones entró en vigor el 14 de abril de 2014.',
      matters: 'El Protocolo facultativo crea un procedimiento separado de comunicaciones ante el Comité de los Derechos del Niño, sujeto a que el Estado sea parte del Protocolo y a sus requisitos.',
      direct: 'La CDN puede servir de contexto interpretativo en el sistema interamericano. Eso no atribuye automáticamente jurisdicción contenciosa para declarar una violación autónoma de la CDN.',
      cidh: 'La pertinencia interpretativa de la CDN no reemplaza la identificación del instrumento que atribuye competencia a la CIDH.',
      court: 'La jurisdicción contenciosa de la Corte se define por los instrumentos interamericanos aplicables y la aceptación correspondiente, no por la sola referencia interpretativa a la CDN.',
      un: 'El Comité puede recibir comunicaciones conforme al Protocolo facultativo, en relación con Estados partes y derechos comprendidos en él.',
      citation: 'Protocolo facultativo de comunicaciones, artículos 5–7.',
      url: 'https://www.ohchr.org/sites/default/files/Documents/HRBodies/CRC/ModelCommunicationForm_en.pdf'
    }
  };
  const byId = id => document.getElementById(id);
  const treatySelect = byId('competenceTreaty');
  const organSelect = byId('competenceOrgan');
  const detail = byId('competenceDetail');

  function renderTreaty() {
    const item = treaties[treatySelect.value];
    detail.innerHTML = '<h4>' + item.name + '</h4><dl>'
      + '<div><dt>Adopción y entrada en vigor</dt><dd>' + item.dates + '</dd></div>'
      + '<div><dt>Órgano: ' + organSelect.options[organSelect.selectedIndex].text + '</dt><dd>' + item[organSelect.value] + '</dd></div>'
      + '<div><dt>Materia supervisada</dt><dd>' + item.matters + '</dd></div>'
      + '<div><dt>Aplicación o uso interpretativo</dt><dd>' + item.direct + '</dd></div>'
      + '<div><dt>Fundamento normativo</dt><dd>' + item.citation + '</dd></div></dl>'
      + '<p><a href="' + item.url + '" target="_blank" rel="noopener noreferrer">Consultar fuente oficial ↗</a></p>';
  }
  treatySelect.addEventListener('change', renderTreaty);
  organSelect.addEventListener('change', renderTreaty);
  renderTreaty();

  const scenarios = {
    women: {
      answer: 'cidh',
      support: 'El artículo 12 de Belém do Pará prevé peticiones ante la CIDH por presuntas violaciones del artículo 7. Si los hechos alegados encajan en ese derecho y el Estado es parte, existe una base material expresa.',
      limits: 'La competencia no se presume para otros artículos de Belém do Pará. Hay que comprobar responsabilidad estatal, jurisdicción territorial o extraterritorial y vigencia para el Estado. La fase ante la Corte tiene requisitos propios.',
      source: 'Convención de Belém do Pará, artículos 7 y 12.'
    },
    education: {
      answer: 'cidh',
      support: 'El artículo 19.6 del Protocolo de San Salvador menciona expresamente el artículo 13. Una alegación sobre educación puede entrar en la vía individual prevista.',
      limits: 'Debe verificarse que el Estado sea parte, que la alegación corresponda al alcance del artículo 13 y que se cumplan los demás requisitos. El mecanismo no se extiende por ello a todos los derechos del Protocolo.',
      source: 'Protocolo de San Salvador, artículos 13 y 19.6.'
    },
    child: {
      answer: 'review',
      support: 'La CDN puede orientar la interpretación interamericana de derechos de niñas y niños. Si el Estado ratificó el Protocolo facultativo de comunicaciones, puede existir además una vía separada ante el Comité.',
      limits: 'La pertinencia interpretativa de la CDN no atribuye por sí sola jurisdicción contenciosa a la Corte para declarar una violación autónoma de ese tratado. La vía ante el Comité exige verificar aceptación del Protocolo y sus requisitos.',
      source: 'Convención Americana, artículos 61–64; Protocolo facultativo de la CDN sobre comunicaciones.'
    },
    time: {
      answer: 'review',
      support: 'Los hechos posteriores a la entrada en vigor del instrumento y de la aceptación de jurisdicción pueden aportar una base temporal para examinar la competencia.',
      limits: 'Los hechos anteriores no quedan automáticamente cubiertos. En hechos continuados separa actos y efectos, identifica cuándo ocurrieron y verifica las condiciones de aceptación estatal. Sin Estado, fechas e instrumento no cabe concluir.',
      source: 'Convención Americana, artículos 62 y 62.2; ficha oficial de ratificaciones y declaraciones de la CIDH.'
    }
  };

  byId('competenceScenario').addEventListener('change', () => {
    byId('competenceFeedback').textContent = '';
    document.querySelectorAll('[name="competenceAnswer"]').forEach(input => { input.checked = false; });
  });
  byId('competenceCheck').addEventListener('click', () => {
    const choice = document.querySelector('[name="competenceAnswer"]:checked');
    const feedback = byId('competenceFeedback');
    if (!choice) {
      feedback.textContent = 'Selecciona una conclusión para revisar el razonamiento.';
      return;
    }
    const scenario = scenarios[byId('competenceScenario').value];
    const level = byId('competenceLevel').value;
    feedback.innerHTML = '<strong>' + (choice.value === scenario.answer ? 'La respuesta es compatible con el escenario.' : 'Revisa el alcance antes de concluir.')
      + ' Nivel: ' + level + '.</strong><p><strong>Argumento a favor</strong> ' + scenario.support + '</p><p><strong>Límite o contraargumento</strong> ' + scenario.limits + '</p><p><strong>Fundamento para verificar</strong> ' + scenario.source + '</p>';
  });
})();
