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
      court: 'El artículo 19.6 limita la vía individual del Protocolo. Es distinta la protección de DESCA desarrollada bajo el artículo 26 CADH, entre otros en Lagos del Campo (2017). No debe deducirse de la restricción del Protocolo que todos los demás derechos sociales sean ajenos a la competencia de la Corte.',
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
      court: 'Campo Algodonero (2009), párrafo 80, reconoce competencia material de la Corte sobre el artículo 7 de Belém do Pará, no sobre sus artículos 8 y 9. Deben verificarse además el Estado, el período y los demás requisitos jurisdiccionales.',
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
      name: 'Convención sobre los Derechos del Niño',
      dates: 'Adoptada el 20 de noviembre de 1989. En vigor desde el 2 de septiembre de 1990.',
      matters: 'Derechos de niñas, niños y adolescentes reconocidos en la Convención. Su supervisión corresponde al Comité conforme a los artículos 43–45; el procedimiento individual deriva de un protocolo separado.',
      direct: 'La CDN puede servir de contexto interpretativo en el sistema interamericano. Eso no atribuye automáticamente jurisdicción contenciosa para declarar una violación autónoma de la CDN.',
      cidh: 'La pertinencia interpretativa de la CDN no reemplaza la identificación del instrumento que atribuye competencia a la CIDH.',
      court: 'La jurisdicción contenciosa de la Corte se define por los instrumentos interamericanos aplicables y la aceptación correspondiente, no por la sola referencia interpretativa a la CDN.',
      un: 'El Comité examina informes estatales conforme a la CDN. Para comunicaciones individuales, selecciona el Protocolo facultativo y verifica separadamente que el Estado sea parte.',
      citation: 'CDN, artículos 1–4 y 43–45; CADH, artículos 19, 29 y 62.',
      url: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-child'
    }
  };
  treaties.opic={name:'Protocolo facultativo de la CDN relativo a un procedimiento de comunicaciones',dates:'Adoptado el 19 de diciembre de 2011. En vigor desde el 14 de abril de 2014.',matters:'Comunicaciones sobre los derechos cubiertos por el Protocolo y los instrumentos aplicables al Estado, bajo sus condiciones.',direct:'La vía ante el Comité requiere que el Estado sea parte y que se cumplan los requisitos de los artículos 5–7; no es un procedimiento ante la Corte IDH.',cidh:'No atribuye una nueva vía a la CIDH. Analiza separadamente el instrumento interamericano pertinente.',court:'No atribuye competencia contenciosa autónoma sobre el Protocolo a la Corte IDH.',un:'El Comité de los Derechos del Niño recibe comunicaciones conforme al Protocolo, sujeto a sus requisitos.',citation:'Protocolo, artículos 1, 5–7 y 19.',url:'https://www.ohchr.org/en/instruments-mechanisms/instruments/optional-protocol-convention-rights-child-communications-procedure'};
  const sourceNotes={belem:['Campo Algodonero, párr. 80','https://corteidh.or.cr/docs/casos/articulos/seriec_205_esp.pdf'],san:['Lagos del Campo, sentencia de 31 de agosto de 2017','https://www.corteidh.or.cr/docs/casos/articulos/seriec_340_esp.pdf']};
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
      + '<p><a href="' + item.url + '" target="_blank" rel="noopener noreferrer">Consultar fuente oficial ↗</a></p>'+(sourceNotes[treatySelect.value]?'<p><a href="'+sourceNotes[treatySelect.value][1]+'" target="_blank" rel="noopener noreferrer">'+sourceNotes[treatySelect.value][0]+' ↗</a></p>':'');
  }
  treatySelect.addEventListener('change', renderTreaty);
  organSelect.addEventListener('change', renderTreaty);
  renderTreaty();

  const scenarios = {
    petitioner: {
      answer: 'cidh',
      support: 'El artículo 44 CADH permite que una persona, grupo o entidad no gubernamental reconocida en un Estado miembro presente una petición. Quien la presenta puede ser distinto de la presunta víctima.',
      limits: 'La regla de presentación no prueba por sí sola competencia sobre el Estado ni el cumplimiento de admisibilidad. Identifica presuntas víctimas, hechos, Estado y tratado aplicable.',
      source: 'Convención Americana, artículo 44.',
      sourceUrl: 'https://www.oas.org/es/cidh/mandato/basicos/convencion.asp'
    },
    courtAccess: {
      answer: 'cidh',
      support: 'La persona no somete directamente un caso contencioso a la Corte. La vía individual empieza ante la CIDH; el artículo 61 prevé que la Comisión o un Estado parte sometan casos a la Corte.',
      limits: 'Además, comprueba el reconocimiento de competencia contenciosa conforme al artículo 62 y los demás requisitos. Presentar una petición ante la CIDH no garantiza que el asunto llegue a la Corte.',
      source: 'Convención Americana, artículos 44, 61 y 62.',
      sourceUrl: 'https://www.oas.org/es/cidh/mandato/basicos/convencion.asp'
    },
    advisory: {
      answer: 'consultative',
      support: 'El artículo 64 permite a los Estados miembros de la OEA consultar a la Corte sobre la interpretación de la Convención u otros tratados de derechos humanos, y sobre compatibilidad de leyes internas.',
      limits: 'Una opinión consultiva interpreta normas; no resuelve una petición contenciosa ni declara la responsabilidad de un Estado en un caso individual. No la confundas con el reconocimiento contencioso del artículo 62.',
      source: 'Convención Americana, artículos 62 y 64.',
      sourceUrl: 'https://www.oas.org/es/cidh/mandato/basicos/convencion.asp'
    },
    locus: {
      answer: 'review',
      support: 'La OC-23/17 reconoce que el artículo 1.1 puede abarcar situaciones fuera del territorio cuando el Estado ejerce autoridad o control efectivo sobre las personas; para daño transfronterizo examina también el control de la actividad de origen.',
      limits: 'El efecto al otro lado de una frontera o la ubicación geográfica por sí solos no bastan. Se necesitan hechos sobre control, actividad, causalidad y personas afectadas; la opinión consultiva no determina automáticamente un caso hipotético.',
      source: 'Corte IDH, OC-23/17, párrafos 95–103.',
      sourceUrl: 'https://www.corteidh.or.cr/docs/opiniones/seriea_23_esp.pdf'
    },
    belemScope: {
      answer: 'review',
      support: 'El artículo 12 de Belém do Pará prevé peticiones ante la CIDH por presuntas violaciones del artículo 7. En Campo Algodonero, párrafo 80, la Corte reconoció competencia sobre el artículo 7, no sobre los artículos 8 y 9.',
      limits: 'Distingue qué disposición se alega, ante qué órgano y bajo qué instrumento. La conclusión sobre esos artículos no elimina posibles alegaciones independientes bajo la CADH ni sustituye el examen completo de competencia.',
      source: 'Belém do Pará, artículos 7 y 12; Corte IDH, Campo Algodonero, párrafo 80.',
      sourceUrl: 'https://corteidh.or.cr/docs/casos/articulos/seriec_205_esp.pdf'
    },
    blake: {
      answer: 'review',
      support: 'En Blake vs. Guatemala, la Corte consideró que la detención de 1985 precedía al reconocimiento de competencia de 1987 y no podía juzgar ese hecho como violación del artículo 7; sí examinó efectos y hechos posteriores dentro de los límites fijados.',
      limits: 'No generalices que todo efecto posterior convierte un hecho previo en competente. Delimita los actos y efectos posteriores y aplica la decisión concreta sobre la declaración estatal.',
      source: 'Corte IDH, Blake, excepciones preliminares y sentencia de fondo.',
      sourceUrl: 'https://www.corteidh.or.cr/docs/casos/fundamentos/jseriec27.pdf'
    },
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

  const tasks={
    petitioner:{facts:'Hipótesis ficticia: una organización no gubernamental reconocida presenta ante la CIDH una petición en nombre de varias personas. No se informa todavía qué Estado habría actuado ni qué derechos se alegan.',treaty:'cadh',ground:'cadh44',limit:'personal'},
    courtAccess:{facts:'Hipótesis ficticia: una presunta víctima envía directamente a la Corte una demanda contenciosa. El Estado es parte de la Convención, pero no se aporta información sobre su declaración del artículo 62 ni sobre una actuación previa de la CIDH.',treaty:'cadh',ground:'cadh61',limit:'personal'},
    advisory:{facts:'Hipótesis ficticia: un Estado miembro de la OEA pide a la Corte que interprete una norma interamericana para aclarar su alcance general. No plantea hechos de una víctima ni solicita declarar responsabilidad estatal.',treaty:'cadh',ground:'cadh64',limit:'function'},
    locus:{facts:'Hipótesis ficticia: una actividad autorizada y regulada por el Estado A causa contaminación que llega al Estado B. Se alega afectación de personas en B. Aún deben acreditarse control estatal, actividad, causalidad y demás requisitos.',treaty:'cadh',ground:'oc23',limit:'territorial'},
    belemScope:{facts:'Hipótesis ficticia: una petición invoca únicamente los artículos 8 y 9 de Belém do Pará. No se especifica si también se alegan derechos de la Convención Americana ni cuál órgano ha recibido el asunto.',treaty:'belem',ground:'belem12',limit:'material'},
    blake:{facts:'Caso histórico: en Blake vs. Guatemala, la detención ocurrió en 1985 y Guatemala reconoció la competencia de la Corte en 1987. La Corte separó la detención de los hechos y efectos posteriores vinculados al esclarecimiento.',treaty:'cadh',ground:'cadh62',limit:'temporal'},
    women:{facts:'Hipótesis ficticia: Estado parte de Belém do Pará desde 2000; hechos de 2024 bajo su jurisdicción. Se alega incumplimiento del artículo 7. Se consulta inicialmente la vía ante la CIDH, sin dar por cumplida la admisibilidad.',treaty:'belem',ground:'belem12',limit:'material'},
    education:{facts:'Hipótesis ficticia: Estado parte del Protocolo desde 2001; hechos de 2024. Se alega afectación del artículo 13 por actuación estatal. Se pregunta por la vía inicial ante la CIDH; agotamiento y demás requisitos deben analizarse por separado.',treaty:'san',ground:'san196',limit:'material'},
    child:{facts:'Solo se sabe que se alega violación de la CDN. No constan Estado, fechas, aceptación del Protocolo de comunicaciones ni derecho interamericano invocado. Debes identificar qué falta antes de concluir.',treaty:'crc',ground:'missing',limit:'personal'},
    time:{facts:'Se afirma que unos hechos precedieron a la aceptación de competencia. Faltan las fechas exactas, la declaración, el derecho aplicable y si se alega una violación continuada o solo efectos posteriores.',treaty:'cadh',ground:'cadh62',limit:'temporal'}
  };
  function levelChanged(){const level=byId('competenceLevel').selectedIndex;byId('competenceAnalysis').hidden=level<1;byId('competenceAdvanced').hidden=level<2;byId('competenceFeedback').replaceChildren();}
  function scenarioChanged(){for(const field of ['Treaty','Ground','Limit'])byId('competenceTask'+field).value='';for(const field of ['For','Against','Evidence'])byId('competenceArgument'+field).value='';byId('competenceCaseFacts').textContent=tasks[byId('competenceScenario').value].facts;byId('competenceFeedback').replaceChildren();document.querySelectorAll('[name="competenceAnswer"]').forEach(input=>{input.checked=false;});}
  byId('competenceScenario').addEventListener('change',scenarioChanged);
  byId('competenceLevel').addEventListener('change',levelChanged);
  byId('competenceCheck').addEventListener('click',()=>{
    const choice=document.querySelector('[name="competenceAnswer"]:checked'), feedback=byId('competenceFeedback'), key=byId('competenceScenario').value, task=tasks[key], scenario=scenarios[key], level=byId('competenceLevel').selectedIndex;
    if(!choice){feedback.textContent='Elige una conclusión inicial para contrastarla.';return;}
    const selections=level>0?['Treaty','Ground','Limit'].map(field=>byId('competenceTask'+field).value):[];
    if(level>0&&selections.some(value=>!value)){feedback.textContent='Selecciona instrumento, fundamento y limitación. El ejercicio necesita los tres elementos del análisis.';return;}
    if(level>1&&['For','Against','Evidence'].some(field=>!byId('competenceArgument'+field).value.trim())){feedback.textContent='Formula un argumento a favor, uno en contra y el dato o documento pendiente. Después podrás contrastarlos con la rúbrica.';return;}
    const matched=choice.value===scenario.answer;
    const checks=level>0?'<p><strong>Contraste de selecciones:</strong> instrumento '+(selections[0]===task.treaty?'compatible':'a revisar')+'; fundamento '+(selections[1]===task.ground?'compatible':'a revisar')+'; límite '+(selections[2]===task.limit?'compatible':'a revisar')+'. Las dimensiones pueden concurrir: aquí se identifica el problema destacado en el supuesto.</p>':'';
    feedback.innerHTML='<strong>'+(matched?'Conclusión inicial compatible con los supuestos.':'Revisa tu conclusión inicial.')+'</strong><p><strong>Argumento a favor:</strong> '+scenario.support+'</p><p><strong>Límite o contraargumento:</strong> '+scenario.limits+'</p>'+checks+'<p><strong>Fundamento:</strong> '+scenario.source+'</p><a href="'+treaties[task.treaty].url+'" target="_blank" rel="noopener noreferrer">Abrir instrumento oficial ↗</a>'+(scenario.sourceUrl?'<a href="'+scenario.sourceUrl+'" target="_blank" rel="noopener noreferrer">Abrir fuente del ejemplo ↗</a>':'')+(level>1?'<h4>Autoevaluación de la argumentación</h4><p>El Atlas contrasta las selecciones anteriores; no califica automáticamente la calidad jurídica del texto que escribiste. Comprueba:</p><ol>'+window.RI_PEDAGOGIA.rubric.map(item=>'<li>'+item+'</li>').join('')+'</ol><p>Explica qué hecho apoya cada argumento y qué cambiaría si el dato pendiente resultara distinto.</p>':'');
  });
  scenarioChanged();levelChanged();
})();
