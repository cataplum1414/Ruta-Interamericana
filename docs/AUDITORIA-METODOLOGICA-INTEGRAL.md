# Auditoría integral de metodología y contenido de Atlas OEA

Fecha: 24-11-2026. Versión examinada: `80aa623`. Objeto: contenido, secuencia, razonamiento, evaluación y trazabilidad. El diseño visual queda fuera del alcance.

> Diagnóstico histórico. El [seguimiento posterior](SEGUIMIENTO-AUDITORIA-2026-11-24.md) registra correcciones y rectifica MET-20: la selección de ruta ya se excluía de la puntuación.

## Dictamen

**La plataforma contiene una base explicativa aprovechable, pero no reúne todavía las condiciones para presentarse como herramienta jurídica integral validada.** Hay contradicciones entre módulos, simplificaciones que pueden producir conclusiones jurídicas equivocadas y ejercicios que comprueban reconocimiento de una frase más que capacidad de analizar un expediente. La ampliación de 48 a 107 términos mejoró cobertura; no certificó por sí misma las definiciones nuevas. Esta auditoría identifica errores también en esas incorporaciones.

Se revisaron las 25 rutas activas (24 del menú y la guía inglesa), los datos y motores compartidos: 18 estaciones con sus preguntas y pistas, 21 decisiones base de Arcadia y sus variantes, 12 preguntas generales, siete nodos del laboratorio de admisibilidad, tres decisiones de protección urgente, cinco decisiones de audiencia, seis relaciones del mapa de razonamiento, cuatro escenarios de competencia, cinco registros de instrumentos, 107 fichas del diccionario, 125 referencias jurisprudenciales, 32 registros consultivos, diez fichas de órganos, los directorios de Estados y relatorías, las noticias y la descarga de datos. El inventario reproducible está en `AUDITORIA-METODOLOGICA-INVENTARIO.json`; es la instantánea histórica original. `node scripts/audit-methodology.mjs` genera ahora `AUDITORIA-METODOLOGICA-ESTADO.json` con el árbol local y la ordenación en ejecución.

La revisión combina lectura del contenido y código, contraste entre módulos, comprobaciones de datos y consulta selectiva de fuentes primarias para los hallazgos jurídicos. **No equivale a cotejar íntegramente las 125 decisiones y los 32 expedientes consultivos ni a una certificación profesional del derecho vigente.** Las restricciones de acceso de algunos portales impiden dar por verificado cada PDF. No se utilizó contenido privado de Plaud. Los problemas descritos aquí se conservan como pendientes; esta entrega de auditoría no los declara corregidos.

## Criterios y clasificación

- **E — Error confirmado:** contradice otra explicación del Atlas o una disposición/decisión identificada.
- **O — Omisión relevante:** falta una condición o ruta necesaria para comprender el alcance de lo explicado.
- **M — Debilidad metodológica:** la actividad no demuestra el aprendizaje que aparenta evaluar.
- **V — Verificación insuficiente:** la evidencia disponible no permite una conclusión segura.
- **P1:** puede enseñar una regla o decisión incorrecta; corregir antes de ampliar contenido.
- **P2:** limita la comprensión o la utilidad documental; corregir en la siguiente revisión.
- **P3:** profundidad y mantenimiento; desarrollar después de estabilizar lo anterior.

La existencia de una URL, una ficha o una prueba automatizada aprobada no se usa como prueba de exactitud jurídica. No se asigna una nota numérica: faltan pruebas de aprendizaje con personas y una rúbrica validada para justificarla.

## Hallazgos jurídicos y de secuencia

### MET-01 · P1 · E — Recusación definida exclusivamente respecto de jueces

Ubicación: `assets/glosario.js`, ficha `recusacion`; contraste con el segundo paso de `assets/audiencia-lab-v1.js`.

La ficha dice que se solicita apartar a una persona juzgadora y que no es lo mismo que objetar un testigo o perito. El taller distingue correctamente objeción a testigos y **recusación de peritos**. El artículo 48 del Reglamento de la Corte regula expresamente esta última. Al tocar el mismo término se aprende una definición incompatible con el taller.

Corrección: definir la categoría general, separar impedimentos/excusas de jueces y recusación de peritos, y mostrar para estos últimos causales, recepción de lista definitiva y plazo de diez días. Aceptación: diccionario, escalera, reloj y taller deben explicar la misma actuación, con artículo y órgano.

Fuente: [Reglamento de la Corte, arts. 21 y 46–48](https://www.oas.org/es/cidh/mandato/documentos-basicos/reglamento-corte-interamerica-derechos-humanos.pdf).

### MET-02 · P1 · E — Las excepciones aparecen como una barrera que debe resolverse antes del resto

Ubicación: `assets/app-v41.js`, `stationGuide[14]`: «Resueltas las cuestiones procesales pertinentes, se organiza la prueba y la audiencia»; devolución de `caseScenarioNodes.objections`.

Esta secuencia permite entender que el fondo y la prueba esperan la decisión sobre excepciones. El artículo 42.3 establece que presentarlas no suspende el procedimiento de fondo ni sus términos. El 42.6 permite resolver excepciones, fondo, reparaciones y costas en una sola sentencia.

Corrección: enseñar actuaciones que pueden desarrollarse en paralelo y distinguir el orden lógico del análisis del orden temporal de decisiones. Aceptación: una pregunta debe permitir reconocer que el Estado debe atender los demás plazos aunque haya presentado una excepción.

Fuente: [Reglamento de la Corte, art. 42.3 y 42.6](https://www.oas.org/es/cidh/mandato/Basicos/reglamentoCorte.asp).

### MET-03 · P1 · E — Se confunde pedir reparaciones con resolverlas

Ubicación: `assets/app-v41.js`, opción incorrecta y devolución de `caseScenarioNodes.reparations` («Primero se establece la responsabilidad… luego se determinan medidas»).

Es correcto que el tribunal fundamente las reparaciones en violaciones establecidas. Es incorrecto usar esa idea para rechazar sin matiz la **solicitud** de reparaciones antes de la sentencia: el ESAP debe incluir pretensiones de reparaciones y costas. La contestación responde a ellas antes de la decisión de responsabilidad.

Corrección: diferenciar formular pretensiones, probarlas, controvertirlas y decidirlas. Aceptación: el ejercicio no debe marcar como errónea una solicitud oportuna en el ESAP por el mero hecho de preceder a la sentencia.

Fuente: [Reglamento de la Corte, arts. 40.2.d, 41.1.d y 66](https://www.oas.org/es/cidh/mandato/Basicos/reglamentoCorte.asp).

### MET-04 · P1 · O — Belém do Pará explicada sin su interpretación jurisprudencial decisiva

Ubicación: `assets/competencia-v1.js`, `treaties.belem.court`; ficha `belem-do-para` del diccionario.

Se insiste en que el artículo 12 no atribuye por sí solo una competencia contenciosa autónoma a la Corte, pero no se explica que **Campo Algodonero** reconoció competencia material para alegaciones relativas al artículo 7 y la descartó para los artículos 8 y 9. La advertencia abstracta puede hacer creer que el tratado solo sirve ante la CIDH. No basta remitir a «requisitos propios».

Corrección: presentar la disposición junto con la interpretación de la Corte y sus límites, sin deducir competencia para todo el tratado. Aceptación: el explorador debe permitir distinguir «no cubre todos los artículos» de «la Corte no puede examinar el artículo 7».

Fuente: [Campo Algodonero, ficha oficial y apartados de competencia](https://corteidh.or.cr/ver_ficha_tecnica.cfm?lang=es&nId_Ficha=347), especialmente la conclusión del párr. 80.

### MET-05 · P1 · O — San Salvador sin contraste con el artículo 26 CADH

Ubicación: `assets/competencia-v1.js`, `treaties.san`; apartado C y comparación D en `#competencia`; ficha `protocolo-san-salvador`.

El alcance restringido de peticiones por el artículo 19.6 está identificado, pero falta distinguirlo de la jurisprudencia de la Corte sobre derechos económicos, sociales, culturales y ambientales bajo el artículo 26 de la Convención. Dejar solo la restricción del Protocolo invita a concluir que otros derechos sociales nunca son justiciables en el sistema.

Corrección: explicar dos fundamentos diferentes y el debate jurídico correspondiente. Aceptación: un supuesto sobre salud o trabajo debe llevar a identificar la posible vía bajo la CADH, sin extender ficticiamente el artículo 19.6 del Protocolo.

Fuentes: [Lagos del Campo, resumen oficial de sentencia](https://www.corteidh.or.cr/docs/casos/articulos/resumen_340_esp.pdf); [repositorio jurisprudencial oficial, artículo 26](https://themisia.corteidh.or.cr/26?detalle=texto).

### MET-06 · P1 · E — Se describe la interpretación jurídica como un solo uso posible

Ubicación: `index.html`, `#competenciaFunciones`: «Interpretar: Usar una norma como contexto para precisar el alcance de un derecho».

Eso describe el uso interpretativo de otra norma, no la interpretación jurídica en general. Se interpreta también el propio tratado que se aplica directamente. Las tres acciones de la comparación no son compartimentos excluyentes: una declaración de responsabilidad presupone interpretar y aplicar normas.

Corrección: definir interpretar como determinar sentido y alcance; después explicar el uso contextual de otros tratados y el requisito distinto de competencia para declarar una violación autónoma. Aceptación: un ejemplo debe mostrar la relación entre las tres operaciones.

### MET-07 · P1 · O — Prórrogas ordinarias todavía sin explicar

Ubicación: `deadlines[1..3]`, estaciones 4 y 8, fichas `prorroga-y-suspension` y `plazo-procesal`.

Se dice «hay reglas de prórroga» y se desarrolla la suspensión del artículo 51.1, pero faltan las reglas de los artículos 30.3 y 37.2: solicitud fundada y límite total desde la primera solicitud de información u observaciones. El estudiante no aprende a distinguir el plazo ordinario, su ampliación y el máximo global.

Corrección: explicar el límite de cuatro meses para la respuesta inicial y de seis meses para las observaciones sobre fondo, con sus actos iniciales; no sumarlos como meses adicionales. Aceptación: ejercicio con una solicitud de prórroga y cálculo del límite total, separado de la suspensión del artículo 46.

Fuente: [Reglamento CIDH, arts. 30.3 y 37.2](https://www.oas.org/es/cidh/jsForm/?File=%2Fes%2Fcidh%2Fmandato%2Fbasicos%2Freglamentocidh.asp).

### MET-08 · P1 · O — Ruta CIDH presentada como secuencia única

Ubicación: estaciones 5–8, `stationGuide`, ficha `peticion-vs-caso`, guía inglesa.

La distinción admisibilidad/fondo es útil, pero se omite la posibilidad excepcional de diferir el examen de admisibilidad al debate y decisión sobre fondo. «Primero siempre un informe separado de admisibilidad» no debe convertirse en regla universal.

Corrección: mantener el recorrido ordinario e introducir una excepción identificada y motivada, sin confundir análisis diferenciados con documentos necesariamente separados.

Fuente: [Reglamento CIDH, arts. 30.7 y 36.4](https://www.oas.org/es/cidh/jsForm/?File=%2Fes%2Fcidh%2Fmandato%2Fbasicos%2Freglamentocidh.asp).

### MET-09 · P1 · O — Falta una conclusión de fondo sin violación

Ubicación: ficha `formas-de-terminacion-cidh`, estación 9 y puente `#sistema`.

El recorrido privilegia informe con recomendaciones, eventual sometimiento o informe definitivo, pero no desarrolla el informe de fondo que concluye que no hubo violación. Además, incluir un informe preliminar dentro de «formas de cierre» confunde un documento intermedio con terminación.

Corrección: distinguir decisión de no violación, informe preliminar no público con recomendaciones, solución amistosa, inadmisibilidad, archivo y actos posteriores de publicación o sometimiento.

Fuente: [Reglamento CIDH, arts. 36, 40, 42 y 44–48](https://www.oas.org/es/cidh/jsForm/?File=%2Fes%2Fcidh%2Fmandato%2Fbasicos%2Freglamentocidh.asp).

### MET-10 · P1 · E — Inadmisibilidad y archivo no son alternativas equivalentes

Ubicación: `stationGuide[5]`: resultado «Informe de admisibilidad o decisión de archivo».

La inadmisibilidad es un resultado relevante del examen de requisitos y tiene su regulación propia. Archivo corresponde a supuestos diferentes. El texto actual omite el primero y hace ocupar su lugar al segundo.

Corrección: nombrar admisibilidad/inadmisibilidad y explicar el archivo por separado. Aceptación: el alumno debe elegir el tipo de decisión a partir del fundamento, no solo saber que el expediente dejó de avanzar.

Fuente: [Reglamento CIDH, arts. 36 y 42](https://www.oas.org/es/cidh/jsForm/?File=%2Fes%2Fcidh%2Fmandato%2Fbasicos%2Freglamentocidh.asp).

### MET-11 · P1 · E/O — La cronología de Venezuela pierde los hitos iniciales

Ubicación: `assets/map-connections-v6.js`, `treatyMilestones.VEN={convention:2019,court:2019}`.

El registro único hace desaparecer los antecedentes de 1977 y 1981 al recorrer años anteriores a 2019. La advertencia de que el mapa no expresa vigencia no remedia la ausencia de acontecimientos históricos. La nueva ratificación de 2019 tampoco acredita por sí misma que ese sea el año inicial del reconocimiento de la Corte.

Corrección: usar una lista de eventos por Estado (ratificación, depósito, reconocimiento, denuncia, efecto y actos posteriores), cada uno con fuente. No emitir una conclusión sobre vigencia actual a partir de un solo año.

Fuentes: [registro oficial B-32](https://www.oas.org/dil/esp/tratados_B-32_Convencion_Americana_sobre_Derechos_Humanos_firmas.htm); [nota oficial de remisión de caso venezolano de 2026](https://www.oas.org/es/cidh/decisiones/Corte/2026/VE_14.775_NdeREs.PDF).

### MET-12 · P1 · E — «Las 32 respuestas» incluye un expediente que no respondió la consulta

Ubicación: `#opiniones`, `renderOpinions` y registro OC-12/91.

La OC-12/91 recoge una decisión de no responder. El rótulo «32 respuestas» y su tratamiento uniforme como explicación de garantías judiciales ocultan ese resultado. Un catálogo numérico no permite deducir que todas las entradas contienen un pronunciamiento sustantivo.

Corrección: registrar naturaleza, decisión y alcance de cada expediente; para OC-12/91, explicar la abstención. El total vigente y el estado de OC-33 necesitan fecha de corte y cotejo propio, no se certifican por contar registros.

Fuente: [OC-12/91, párr. 31](https://corteidh.or.cr/docs/opiniones/seriea_12_esp.pdf).

### MET-13 · P2 · O — Recomendaciones: falta explicar alcance y cumplimiento de buena fe

Ubicación: fichas `recomendaciones` y `recomendaciones-vs-reparaciones`, y `#seguimiento`.

La distinción entre informe y sentencia es correcta; repetir que las recomendaciones son medidas «propuestas» puede sugerir que carecen de relevancia jurídica. Falta exponer con precisión la jurisprudencia sobre buena fe y cumplimiento, sin afirmar que todas producen efectos idénticos a una sentencia.

Corrección: lectura guiada de **Loayza Tamayo**, con su contexto y párrafos, diferenciando deber convencional, recomendación, ejecución interna y supervisión.

Fuente: [resumen oficial de Loayza Tamayo, párrs. 78–81](https://www.corteidh.or.cr/docs/resumen/loayza_tamayo.pdf).

### MET-14 · P2 · O — Defensa estatal reducida a mencionar excepciones

Ubicación: estaciones 14–15, escenario `objections`, pendiente 7 de `PEDAGOGIA.md`.

Falta un ejercicio que haga identificar una actuación concreta, una oportunidad de contradicción, el perjuicio procesal alegado, su prueba y el remedio solicitado. «Control excepcional» no proporciona ese razonamiento ni permite distinguir un defecto relevante de una discrepancia con la CIDH.

Corrección: actividad de defensa del Estado con argumentos de ambas partes y decisión razonada, sin equiparar al Estado con el titular individual de todos los derechos de la Convención ni afirmar que cualquier irregularidad anula el procedimiento.

Fuente: [OC-19/05, fuente oficial](https://www.corteidh.or.cr/docs/opiniones/seriea_19_esp1.pdf).

## Hallazgos de enseñanza y evaluación

### MET-15 · P1 · M — Responder por posición permite superar Arcadia

De 21 nodos base, **20 tienen la respuesta correcta en la primera opción**. Las cinco decisiones de audiencia y las tres de protección urgente también colocan la correcta primero. Las 18 preguntas de estación usan solo las posiciones 0 y 1. Esto no prueba que una persona haga trampa; demuestra que la posición es una pista ajena al contenido.

Corrección: variar o barajar opciones conservando identidad estable y correspondencia de retroalimentación. Aceptación: comprobar distribución e integridad de respuestas después de cualquier reordenamiento.

### MET-16 · P1 · M — Los tres niveles de competencia son nominales

`competenceLevel` solo se incorpora como texto al resultado. No cambia escenario, ayudas, pregunta, fundamento ni dificultad. No hay progresión observable entre «Desde cero», «Análisis jurídico» y «Litigio avanzado».

Corrección: nivel inicial identifica órgano/instrumento; nivel jurídico justifica disposición y límite; avanzado contrasta argumentos, incertidumbre, jurisprudencia y datos faltantes. Aceptación: tres productos y rúbricas diferentes, no solo tres extensiones de texto.

### MET-17 · P1 · M — El laboratorio de competencia no exige el análisis anunciado

Solo pregunta una conclusión entre tres radios. No exige seleccionar tratado, fundamento de competencia, dimensión afectada o argumentos a favor/en contra. Los dos primeros supuestos permiten elegir CIDH sin que se hayan suministrado fechas ni Estado concreto; la devolución hace las salvedades después.

Corrección: declarar todos los supuestos jurídicos del hipotético y pedir un análisis por elementos. Cuando falten datos, permitir identificarlos como resultado válido. No confundir «podría ser una vía si…» con «tiene competencia demostrada».

### MET-18 · P2 · M — Arcadia contiene poca aplicación de sus propios hechos

Aunque se muestra un caso médico/judicial y una cronología, la mayoría de sus decisiones formula preguntas generales que se responderían igual sin leerlo. El motor sigue listas fijas; las respuestas no crean desenlaces alternativos y las variantes solo modifican la pregunta de recursos internos. El nombre «caso» no demuestra aprendizaje situado.

Corrección: vincular cada ejercicio a un documento o dato ficticio visible; pedir identificar un hecho controvertido, una prueba, el acto inicial o el argumento de la contraparte. Describir honestamente la práctica como recorrido guiado cuando no hay ramificación por consecuencia.

### MET-19 · P2 · M — Las alternativas incorrectas suelen ser demasiado obvias

Ejemplos: víctima «en cualquier post de Internet», control pedido por «cualquier estudiante», indemnización «igual para todo caso». Sirven para una introducción, pero no justifican inferencias de dominio jurídico avanzado. La opción más larga y matizada es frecuentemente la correcta.

Corrección: conservar ejercicios de entrada, incorporar errores plausibles y una segunda tarea de justificación. Aceptación: que el estudiante deba distinguir actos cercanos, no una regla frente a una afirmación absurda.

### MET-20 · P2 · M — Se cuenta una elección de ruta como acierto

En el nodo `remedies` del laboratorio de admisibilidad las tres opciones son correctas porque seleccionan escenarios, y luego se incluyen en el total de decisiones «bien razonadas». Elegir qué supuesto practicar no prueba conocimiento. Tampoco el resultado final constituye una decisión real de admisibilidad.

Corrección: separar selección de ruta, evaluación y registro de aprendizaje; no puntuar la navegación. Aceptación: el denominador solo incluye preguntas con criterio de evaluación.

### MET-21 · P2 · M — No se ejercita de forma suficiente producir argumentos

La plataforma pide principalmente elegir respuestas. No exige redactar una hipótesis de competencia, construir una cronología, relacionar prueba y hecho, formular una objeción ni proponer una reparación razonada. El mapa de seis relaciones explica esas tareas, pero también las evalúa mediante selección.

Corrección: añadir productos breves de elaboración propia con rúbricas y ejemplos de contraste. No usar una única respuesta cerrada para problemas que admiten argumentos jurídicos alternativos.

### MET-22 · P2 · M — La calificación no distingue primer intento, revisión y dominio

Arcadia permite borrar y rehacer una respuesta; el resultado final refleja el estado actual. El taller de audiencia sí registra primer intento. El avance de estaciones se marca voluntariamente y significa estudio declarado, no competencia demostrada.

Corrección: mantener el repaso libre, pero distinguir «revisado», «resuelto con ayuda», «primer intento» y «pendiente de justificar». No inferir aprendizaje a partir de vistas, clics o respuestas corregidas.

### MET-23 · P2 · O — La regla del reloj no está aplicada íntegramente por el cálculo

El reloj suma días o meses de calendario y explica que no determina vencimientos reales; esas advertencias son correctas. No aplica hora de Washington, feriados ni suspensiones. El lector debe saber qué parte está ensayando: reconocer el acto inicial y una duración, no certificar la fecha jurídica. No se declara un error de cómputo real sin reconstruir el expediente y la regla específica.

Corrección: ejercicio de lectura de comunicación y selección de regla antes de calcular; mostrar explícitamente los supuestos que el motor utiliza. Verificación jurídica específica de la Resolución 4/26 y de su ámbito antes de cambiar algoritmos.

### MET-24 · P2 · O — Garantía de no repetición y otras reparaciones sin suficiente contraste

Se mencionan formas de reparación, pero casi no se practica su fundamento, beneficiarios, causalidad, proporcionalidad, evidencia o seguimiento por medida. «No supongas daños» requiere matizarse con las reglas de prueba y presunciones jurisprudenciales pertinentes: no todo daño exige el mismo soporte documental.

Corrección: comparar pretensiones, prueba, objeciones estatales y medida ordenada en decisiones concretas; evitar un esquema universal de prueba para todos los daños.

## Hallazgos documentales y transversales

### MET-25 · P1 · V — El índice jurisprudencial no es todavía una colección de criterios comprobados

Los 125 registros no tienen campos de fecha de decisión ni de párrafo; 96 referencias de Corte carecen de Serie C. Hay fichas de expediente y PDF de decisiones mezclados. La ficha puede ser correcta como acceso, pero no identifica necesariamente qué resolución sostiene el punto enseñado.

Corrección: unidad «decisión» con caso, tipo, fecha, serie/identificador, párrafo, proposición jurídica y fuente. Una ficha de caso puede agrupar varias decisiones; no sustituir esa unidad con un nombre y un tema.

### MET-26 · P2 · E/V — Se cuentan referencias como si fueran casos únicos

Hay dos grupos interamericanos con la misma URL: Hilaire / Hilaire, Constantine y Benjamin; y Valle Jaramillo / Valle Jaramillo y otros. Una fuente compartida no demuestra por sí sola duplicación indebida, especialmente cuando hubo decisiones separadas; sin identificación de decisión, tampoco permite contarlos como casos distintos. La capa geográfica cuenta filas del índice.

Corrección: separar `caseId`, `decisionId` y variantes de nombre. La leyenda debe contar referencias si ese es el dato disponible. Aceptación: casos acumulados y decisiones separadas se muestran con su relación, sin inflar totales.

### MET-27 · P2 · O — Derecho comparado sin conexión jurídica suficiente

Siete referencias externas, incluidas seis con enlace a la portada de HUDOC y una al buscador de jurisprudencia OHCHR. Se distingue la jurisdicción, lo cual es correcto; falta el documento concreto y la razón por la que ayuda a interpretar el problema interamericano. No son precedentes interamericanos.

Corrección: identificar decisión/comunicación exacta, localizar criterio y explicar semejanzas, diferencias y límites de traslado. No deducir ausencia de un caso porque el mapa no lo recoge.

### MET-28 · P2 · O — Biblioteca normativa no acompaña todas las reglas enseñadas

`normRecords` tiene 26 artículos de tres instrumentos. No incluye los artículos 46–47 del Reglamento CIDH que son centrales para suspensión e informe definitivo, ni el 49 CADH sobre solución amistosa. La biblioteca se presenta como selección, por lo que no hay promesa de exhaustividad; existe, sin embargo, una discontinuidad pedagógica con la ruta y el reloj.

Corrección: matriz de cada regla del recorrido y su fuente navegable; incluir los artículos centrales antes de añadir normas accesorias.

### MET-29 · P2 · E — Hay conexiones de aprendizaje que llevan a otra estación

`featuredCases` presenta Cantos y Hilaire como ejemplos de excepciones, pero usa `stage:15`, índice de «Pruebas y declarantes». Cayara se rotula «Decisión de someter» con índice 9, que corresponde a remisión al Estado. El problema es semántico: el enlace existe, pero enseña una relación diferente de la anunciada.

Corrección: revisar todas las correspondencias por concepto y producto, no solo que el destino exista. Aceptación: contrastar rótulo, estación y proposición jurídica de cada enlace.

### MET-30 · P2 · V — Los estados de verificación carecen de granularidad

`#datos` reconoce que no hay fecha de corte por conjunto ni revisión sistemática de enlaces. En `#competencia` el estado estatal se marca como no verificado, pero faltan estados por dato (fecha, artículo, reserva, declaración, alcance jurisprudencial). El JSON descargado no incluye fecha de generación ni de cotejo.

Corrección: distinguir norma localizada, documento abierto, pasaje cotejado y estado estatal comprobado; registrar fecha, evidencia y responsable editorial. No etiquetar como «verificado» un dato porque la URL responde.

### MET-31 · P2 · O — CDN y protocolo de comunicaciones comparten una ficha

El selector dice Convención sobre los Derechos del Niño, mientras el registro mezcla la Convención y su Protocolo de comunicaciones. Faltan la entrada en vigor de la Convención y la adopción del Protocolo. La fuente es un formulario modelo, no el texto completo de los instrumentos.

Corrección: dos registros con metadatos, fuentes primarias y mecanismos propios. El Comité no debe aparecer como supervisor del tratado interamericano al cambiar de órgano; explicar la comparación entre sistemas, sin sugerir competencias intercambiables.

### MET-32 · P2 · O/V — Noticias y cronologías necesitan preguntas de lectura y fecha de corte

La fecha editorial de noticias está indicada y los enlaces distinguen comunicado de sentencia: conservarlo. No se cotejó en esta auditoría el contenido íntegro de las diez noticias. La historia selecciona siete hitos y termina en 1988, aunque el Atlas explica desarrollos posteriores; falta declarar ese recorte como introducción, no historia completa.

Corrección: para cada noticia, identificar acto, alcance y siguiente documento; para historia, declarar criterio de selección e incorporar desarrollos posteriores directamente conectados al temario. Verificar novedades consultivas con fecha de corte propia.

### MET-33 · P2 · O — El contenido OEA se reduce pronto al camino contencioso

La descripción de cuatro pilares y órganos es útil. La Comisión se presenta principalmente por peticiones y casi no se ejercitan monitoreo, informes temáticos o de país, audiencias generales ni relatorías de país. Tampoco hay una ruta equivalente para Estados no parte en CADH, pese a que se introduce la Declaración Americana.

Corrección: declarar el alcance de la ruta convencional y ofrecer comparaciones breves con otros mecanismos. La persona debe aprender por qué un asunto puede quedarse ante la CIDH y qué instrumento rige, sin asumir que todo termina en Corte.

### MET-34 · P2 · O — Guía inglesa enseña una versión menos precisa de la transición

La estación inglesa 10 se limita a «Assess possible referral» y no desarrolla los actos iniciales, los dos plazos y la suspensión que sí aparecen en la versión española. El alcance parcial en inglés está declarado, pero falta correspondencia de contenido esencial entre los enlaces que se presentan como la misma estación.

Corrección: fijar un conjunto mínimo de ideas obligatorio por estación en cualquier idioma y señalar qué nivel adicional solo está disponible en español.

### MET-35 · P2 · O — Competencia general y competencia interamericana necesitan límites más explícitos

Cláusula compromisoria, compromiso especial, consentimiento tácito y facultades implícitas aparecen definidos en general, pero sin ejemplos primarios suficientemente desarrollados ni un ejercicio que los distinga. La fuente CADH no fundamenta por sí sola toda la teoría general. «Competencia plena» tampoco se define, aunque se utiliza como categoría.

Corrección: separar doctrina general de las vías específicamente habilitadas por la CADH; no sugerir que consentimiento tácito y poderes implícitos son vías intercambiables para ampliar jurisdicción contenciosa.

### MET-36 · P3 · M/V — Las pruebas actuales acreditan estructura, no corrección metodológica

`validate-site.mjs` comprueba mayoritariamente cadenas, recuentos, destinos y archivos. Las pruebas del diccionario y reloj comprueban operaciones concretas y son útiles; no evalúan decisiones jurídicas, coherencia entre módulos ni capacidad de argumentar. Pasarlas no refuta MET-01 a MET-35.

Corrección: mantener validaciones técnicas y añadir revisión editorial por proposición, escenarios con condiciones explícitas, comprobación de vínculos semánticos y rúbricas. Una aprobación jurídica debe registrar quién revisó qué versión y fuentes.

## Cobertura de cada ruta activa

| Ruta | Resultado metodológico de la revisión | Hallazgos |
| --- | --- | --- |
| Inicio | Introducción clara a la vía individual; falta declarar desde el arranque su carácter seleccionado y condicionado. | 08, 33 |
| English | Conserva la separación Comisión/Corte; transición menos completa que en español. | 34 |
| OEA | Cuatro pilares y diferencia organización/sistema aprovechables; profundidad del resto de pilares declarada como general. | 33, 35 |
| Órganos | Diferencia autonomía de la Corte; «Carta Americana» en la explicación inicial es una denominación ambigua que debe sustituirse por el instrumento preciso. | 33 |
| Estados | Membresía y aceptación de la Corte diferenciadas; un solo año no representa la historia ni vigencia estatal. | 11, 30 |
| Mapa | Distingue capas y selección del Atlas; conteos por filas y cronología estatal requieren revisión semántica. | 11, 26 |
| Orientador | Útil para reconocer el momento; insuficiente para una decisión de admisibilidad o elección de vía por Estado. | 08, 33 |
| Comisión | Admisibilidad y fondo diferenciados; faltan resultados negativos, archivo/inadmisibilidad y vías no convencionales. | 08–10, 13, 33 |
| Corte | Actuaciones principales presentes; explicar paralelismo y reclamación temprana de reparaciones. | 02–03, 14 |
| Sistema | Informes, mes y tres meses diferenciados; completar resultados de fondo y alcance de recomendaciones. | 09, 13 |
| Recorrido | Buen andamiaje de actor/documento/plazo; linealidad y algunas salidas introducen errores. | 01–03, 07–10 |
| Seguimiento | Separa CIDH/Corte y evita llamar vigente al ejemplo histórico; falta trabajar medida por medida y eficacia jurídica. | 13, 24 |
| Reloj | Distingue actos iniciales y fija límites de uso; no enseña todavía prórrogas ordinarias completas. | 07, 23 |
| Arcadia | Caso ficticio claramente declarado; preguntas mayormente generales y posiciones predecibles. | 03, 15, 18–24 |
| Jurisprudencia | Índice útil para localizar; no equivale a fichas de criterios cotejados. | 25–27, 29 |
| Opiniones | Número/tema no bastan para explicar la decisión; OC-12 exige tratamiento diferente y corte actualizado. | 12, 30, 32 |
| Actualidad | Distingue fuente de noticia y decisión; falta cotejo completo individual y producto de lectura. | 32 |
| Diccionario | Cobertura amplia; una definición nueva contradice el taller y otras requieren mayor precisión jurídica. | 01, 04–06, 08–09, 13, 24, 35 |
| Laboratorio | Contiene retroalimentación y ramas de admisibilidad útiles; respuestas predecibles y puntuación mezclada con selección de supuesto. | 15, 19–22 |
| Biblioteca | Selección expresamente declarada; omite artículos centrales de la ruta recientemente ampliada. | 28 |
| Relatorías | Correcta separación de monitoreo y petición; solo selección temática/especial, no cobertura de país. | 33 |
| Historia | Siete hitos comprensibles, recorte inicial no cubre la evolución del contenido actual. | 32 |
| Elecciones | Diferencia voto de Estados miembros/parte y mandato personal; ampliar nominación, restricciones y vacantes solo si se promete explicar el procedimiento completo. | Profundización P3; sin error nuclear confirmado |
| Datos | Declara honestamente límites de revisión; metadatos insuficientes para reproducir cotejo jurídico. | 25–26, 30, 36 |
| Competencia | Dimensiones y advertencia de no verificación son útiles; requiere revisión prioritaria de doctrina, tratados y evaluación. | 04–06, 16–17, 31, 35 |

## Qué conservar

- Separación entre Comisión y Corte, petición y sometimiento, admisibilidad y responsabilidad.
- Diferenciación del informe preliminar, transmisión al Estado, mes del peticionario, período del artículo 51.1 y eventual informe definitivo.
- Consentimiento para solución amistosa, audiencia no universal y distinción entre cautelares y provisionales.
- Caso ficticio identificado, posibilidad de revisar respuestas y advertencias sobre el cálculo orientativo.
- Declaración de índices selectivos y de datos que aún no están verificados.

Conservar estas piezas no supone aprobar todas sus frases ni cerrar el cotejo de cada fuente.

## Orden de corrección y condiciones de cierre

1. **Coherencia jurídica inmediata:** MET-01 a MET-12. Primero actualizar la proposición jurídica y después todas sus apariciones en diccionario, estación, reloj, ejemplo, ejercicio y guía inglesa. Cada cambio requiere artículo o decisión y pasaje de contraste.
2. **Validez de la evaluación:** MET-15 a MET-22. Corregir patrones de respuesta, hacer reales los niveles, separar navegación de evaluación y formular supuestos completos.
3. **Trazabilidad:** MET-25 a MET-31. Normalizar decisiones, fechas, párrafos, relaciones entre casos y control de cambios. Corregir enlaces semánticos, no solo enlaces inexistentes.
4. **Profundidad aplicada:** defensa estatal, reclamación y prueba de reparaciones, rutas no convencionales y lectura de comunicaciones de prórroga.
5. **Validación de aprendizaje:** recorridos con personas de distintos niveles que produzcan una conclusión razonada, indiquen la fuente, expliquen condiciones y reconozcan cuándo faltan datos. No sustituir esta fase por un contador de respuestas correctas.

La auditoría se entrega como diagnóstico integral del contenido activo. **No se declara cerrada la revisión jurídica individual del corpus ni corregidos los 36 hallazgos.** Cada incidencia deberá tener estado, evidencia de corrección y comprobación transversal antes de retirarse del registro.
