# Auditoría: correcciones, traslado de patrones y límites

Fecha: 24-11-2026. Sigue al diagnóstico `4e4d28a` y a las mejoras del diccionario `a7b9e92`. Este registro describe la implementación posterior; no sustituye la revisión jurídica profesional ni una prueba de aprendizaje con personas.

## Qué se ha trasladado de Atlas ONU

Referencia contrastada: `sukima-labs/atlasonu`, `index.html`, blob `94258716c27c03297758737258add9ca2d900634`. Se observaron en la fuente 21 desplegables «Para qué sirve esta pantalla», instrucciones de uso y procedencia de datos. El código y los textos añadidos aquí son originales: se adapta ese patrón a las 25 rutas OEA, no se importa código AGPL ni se copian explicaciones institucionales ONU.

La familia visual, fuentes locales, navegación por páginas, menú lateral, barra móvil fija, búsqueda y lectura fácil ya estaban incorporados antes de esta revisión. Esta entrega refuerza su metodología; no afirma haber reproducido literalmente todas las pantallas ni realizado una comparación visual píxel a píxel.

| Pantalla/patrón ONU | Destino OEA | Estado y diferencia jurídica |
| --- | --- | --- |
| Panorama | Inicio | Guía de entrada por tarea y alcance; búsqueda pondera título/exactitud antes de menciones incidentales. |
| Noticias del mundo | Actualidad | Guía de lectura: acto, órgano, fuente y alcance. Selección editorial, sin importar el feed ONU ni prometer actualización automática. |
| Nombramiento de expertos | Elecciones | Se conserva comparación propia CIDH/Corte y se añade objetivo verificable de nominación/voto/mandato. |
| Explorar mandatos | Comisión y Corte | Dos órganos separados; se añaden resultados CIDH y sus vías no convencionales. No se copian mandatos de expertos ONU. |
| Relatores y relatoras | Relatorías | Directorio temático existente con guía que separa monitoreo y petición. No equivale al directorio de titulares ONU. |
| Países | Estados | Guía para separar membresía, tratado y reconocimiento. Los estados jurídicos individuales requieren registro oficial. |
| Mapa del mundo | Mapa de las Américas | Se conservan capas, selección/lista, controles y cronología existentes. Se corrigen hitos iniciales de Venezuela y unidades «referencias». No se importa el indicador de nueve tratados ONU. |
| Seguimiento de recomendaciones | Seguimiento | Guía de lectura de medidas y fuentes. CIDH y Corte conservan consecuencias diferentes. |
| Tratados y comités | Biblioteca y Competencia | Más artículos enlazados; se separan CDN y Protocolo de comunicaciones; tres niveles de análisis con productos diferentes. |
| Tengo un caso | Orientador | Se conserva entrada por situación/documento y se explicita su alcance educativo. |
| Otros mecanismos | Sistema y Opiniones | Guías y enlaces para distinguir petición, protección, consulta y monitoreo. No se incorpora EPU como vía interamericana. |
| Arqueología documental | Jurisprudencia | Estados de cotejo por referencia y lectura focal con párrafo; todavía no es un catálogo integral de decisiones verificadas. |
| Cómo funciona la ONU | OEA y Órganos | Guías por función, norma y relación institucional, manteniendo autonomía de Corte. |
| Historia | Historia | Criterio de selección y límite de la cronología fundacional explícitos. Ampliar hitos posteriores queda pendiente. |
| Simula una asamblea | Arcadia y Laboratorio | Se adaptan práctica y devolución a procedimiento. Se varían posiciones de opciones y se añade escritura con pautas; no se simula una asamblea ONU. |
| Siglas y códigos | Diccionario | 113 fichas, letras y búsqueda por nombre/sinónimo ya publicadas; se corrigen definiciones jurídicas y enlaces. No es todavía un vocabulario exhaustivo. |
| Recuperar documentos | Búsqueda, Biblioteca y Jurisprudencia | Se conserva reconocimiento de códigos y artículos; mejora de prioridad y diversidad de resultados globales. |
| Datos y calidad | Datos | JSON versión 2 con fecha de generación, cobertura y estados de cotejo. |
| Alertas de verificación | Datos y cada referencia | Nuevo desplegable de alertas: registros pendientes, lectura focal y grupos que comparten ficha. |
| Qué falta y qué viene | Este registro y Datos | Pendientes públicos diferenciados de las funciones implementadas. |
| DIGNITYOS | Fuera del módulo | No se traslada una iniciativa ajena al objeto jurídico. |
| Descargas | Datos | Exportación de metadatos públicos con fecha y límites, probada como descarga real. |
| Fuentes y alcance | Todas las rutas y Biblioteca | Propósito, uso, tarea, alcance y referencia primaria en las 25 pantallas. |

## Estado de los 36 hallazgos

«Corregido» se refiere al defecto concreto descrito, no a validación integral del módulo. «Parcial» conserva trabajo exigible. Las pruebas automáticas acreditan comportamiento y regresiones, no exactitud de toda afirmación jurídica.

| ID | Estado | Cambio o trabajo que resta |
| --- | --- | --- |
| MET-01 | Corregido | Recusación general; peritos art. 48.2 y diez días; diferencia con testigos y jueces. |
| MET-02 | Corregido | Excepciones no suspenden fondo ni términos, art. 42.3; decisión conjunta posible, art. 42.6. |
| MET-03 | Corregido | Pedir reparaciones en ESAP no equivale a decidirlas tras establecer responsabilidad. |
| MET-04 | Corregido | Campo Algodonero, párr. 80: art. 7 Belém, sin extender a 8 y 9, en explorador y diccionario. |
| MET-05 | Parcial | Vías diferenciadas art. 19.6 Protocolo y art. 26 CADH, con Lagos del Campo. Falta un ejercicio específico de trabajo/salud y mayor desarrollo del debate. |
| MET-06 | Corregido | Interpretar significa determinar sentido/alcance; las tres operaciones no son excluyentes. |
| MET-07 | Corregido | Límites totales de cuatro/seis meses, actos iniciales y práctica de solicitud de prórroga. |
| MET-08 | Corregido | Se muestra diferimiento excepcional, arts. 30.7/36.4, distinto del itinerario ordinario. |
| MET-09 | Corregido | Informe sin violación y diferencia entre informe preliminar y terminación. |
| MET-10 | Corregido | Admisibilidad/inadmisibilidad y archivo separados, arts. 36/42. |
| MET-11 | Parcial | Restituidos hitos Venezuela 1977/1981; explicados 2012/2013/2019. Falta migrar todos los Estados a un modelo completo de eventos con cotejo individual. |
| MET-12 | Parcial | OC-12 se identifica como decisión de no responder; índice no se llama «32 respuestas». Falta cotejar todo el catálogo y su actualidad. |
| MET-13 | Parcial | Diccionario incorpora buena fe y Loayza Tamayo, párrs. 79–81. Falta lectura documental guiada más extensa en Seguimiento. |
| MET-14 | Implementado | Taller de defensa estatal: actuación, contradicción, perjuicio, evidencia, remedio y respuesta contraria; pauta y fuente OC-19. Requiere evaluación humana del argumento. |
| MET-15 | Corregido | Ordenación cíclica determinista conserva identidad, corrección y devolución; Arcadia usa las tres posiciones. No se presenta como aleatoriedad. |
| MET-16 | Corregido | Desde cero identifica órgano; análisis selecciona instrumento/fundamento/dimensión; avanzado produce tres argumentos con pauta. |
| MET-17 | Corregido | Hechos y supuestos expresos; datos ausentes se reconocen, selecciones requeridas y contraste razonado. |
| MET-18 | Parcial | Guías explicitan alcance y nuevo taller conecta hechos con prueba. Arcadia sigue siendo recorrido guiado; falta convertir cada nodo en análisis documental situado. |
| MET-19 | Parcial | Sustituidas dos alternativas absurdas por errores procesales próximos y añadida escritura. No se han rediseñado todos los distractores ni calibrado su dificultad. |
| MET-20 | Retirado | Falso positivo del diagnóstico: el código ya excluía la elección `remedies` del registro de aciertos mediante `else`. Prueba de recorrido confirma cuatro preguntas evaluadas, resultado 4/4. |
| MET-21 | Implementado | Cuatro productos escritos con pautas: defensa, prórroga, reparaciones y hecho/prueba; además argumentos de competencia avanzada. No hay calificación automática de textos. |
| MET-22 | Parcial | Arcadia identifica respuestas actuales tras revisión; marca de estudio declara ser lectura personal. Falta historial separado de primer intento/ayudas en todos los motores. |
| MET-23 | Pendiente | Reloj continúa siendo orientativo; no se certifican feriados, hora de Washington o suspensiones reales. No se cambió el algoritmo sin verificar el ámbito de la Resolución 4/26. |
| MET-24 | Parcial | Se contrasta petición, contradicción y decisión sobre reparación. Falta comparación completa por medida y desarrollo de reglas probatorias/presunciones con decisiones concretas. |
| MET-25 | Parcial | Metadatos explícitos sin inventar fechas/párrafos y una lectura focal Campo Algodonero. Falta cotejo individual de las 125 referencias y normalización de unidades decisión/caso. |
| MET-26 | Parcial | Leyendas cuentan referencias; `caseKey` agrupa fichas compartidas. Falta identificar cada decisión y acumulación para contar casos únicos con rigor. |
| MET-27 | Pendiente | Fuentes comparadas no se presentan como precedentes interamericanos. Falta sustituir siete accesos generales por decisiones/pasajes concretos y justificar cada comparación. |
| MET-28 | Implementado | Se añaden artículos centrales CADH y Reglamentos CIDH/Corte, incluidos 46–47 CIDH y 49 CADH; no se promete biblioteca exhaustiva. |
| MET-29 | Corregido | Cantos/Hilaire enlazan a excepciones y Cayara a decisión de someter, con índices semánticos corregidos. |
| MET-30 | Parcial | Exportación con fecha de generación, estado por referencia, campos no cotejados nulos y lectura focal fechada. Falta revisión fechada por cada dato estatal/documento. |
| MET-31 | Corregido | CDN y protocolo de comunicaciones son registros distintos, con fechas y mecanismos diferenciados. |
| MET-32 | Parcial | Guías noticias/historia explicitan acto, alcance y selección. Falta lectura individual de diez noticias, actualizar hitos posteriores y cotejar novedades consultivas. |
| MET-33 | Parcial | Se añade comparación de ruta no CADH, monitoreo, visitas, informes y audiencias generales. Falta una práctica completa de vías no convencionales. |
| MET-34 | Implementado | Guía inglesa distingue período del art. 51, posición del peticionario, suspensión, informe preliminar y reparaciones en ESAP. Sigue siendo traducción parcial. |
| MET-35 | Pendiente | Las categorías generales siguen separadas y no amplían por sí mismas la CADH. Faltan ejemplos primarios desarrollados, definición más precisa de «plena» y un ejercicio específico de cláusulas. |
| MET-36 | Parcial | Pruebas de identidad de opciones, regresiones y flujos de navegador. No hay aún validación jurídica externa ni estudio de aprendizaje con personas. |

## Evidencia de verificación

- `validate-site.mjs`, `test-deadline-clock.mjs`, `test-glossary-search.mjs` y `test-methodology.mjs`: estructura, reglas de cómputo implementadas, consulta del diccionario e integridad de prácticas.
- `browser-methodology.cjs`: Chromium sin interfaz visible, 390 y 1280 px; navega 25 rutas; comprueba contexto órgano/tratado, requisitos de tres niveles, escritura y pautas, OC-12, excepciones no suspensivas, puntuación sin navegación y descarga JSON real. No equivale a inspección visual de cada página.
- Código fuente de ONU leído como referencia; no se operó el navegador personal ni se usaron grabaciones privadas.

## Fuentes jurídicas del bloque corregido

- [Reglamento CIDH](https://www.oas.org/es/cidh/jsForm/?File=%2Fes%2Fcidh%2Fmandato%2Fbasicos%2Freglamentocidh.asp): arts. 30.3, 30.7, 36, 37.2, 40, 42 y 44–48.
- [Reglamento Corte](https://www.oas.org/es/cidh/mandato/Basicos/reglamentoCorte.asp): arts. 40.2.d, 41.1.d, 42.3, 42.6 y 47–48.
- [Campo Algodonero, sentencia de 16-11-2009](https://corteidh.or.cr/docs/casos/articulos/seriec_205_esp.pdf), párr. 80.
- [Lagos del Campo](https://www.corteidh.or.cr/docs/casos/articulos/seriec_340_esp.pdf): alcance del art. 26 CADH; no modifica por sí solo el texto del art. 19.6 del Protocolo.
- [OC-12/91](https://corteidh.or.cr/docs/opiniones/seriea_12_esp.pdf), párr. 31, decisión de no responder.
- [OC-19/05](https://www.corteidh.or.cr/docs/opiniones/seriea_19_esp1.pdf), control de legalidad de actuaciones CIDH.
- [Loayza Tamayo, resumen oficial](https://www.corteidh.or.cr/docs/resumen/loayza_tamayo.pdf), párrs. 79–81, recomendaciones y buena fe.
- [Registro B-32](https://www.oas.org/dil/esp/tratados_B-32_Convencion_Americana_sobre_Derechos_Humanos_firmas.htm), actos estatales; la descripción del mapa no sustituye su lectura por período.

No se certifica que las demás fuentes del índice hayan sido abiertas y cotejadas íntegramente. Las citas verificadas focalmente no convierten en verificado todo un expediente.
