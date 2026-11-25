# Auditoría visual y metodológica con CUA

## Método de esta ronda

La ronda inspecciona las dos páginas publicadas en el mismo navegador y escritorio mediante CUA Driver. Para cada par se revisan la entrada de menú, cabecera, jerarquía del título, explicación inicial, controles, resultado, estado vacío o ficha seleccionada, fuentes, interacción por teclado y presentación estrecha. Se registra una diferencia comprobable, se corrige Atlas OEA y se vuelve a validar antes de seguir. La auditoría anterior con Chromium sigue siendo útil para geometría y regresiones; no sustituye esta comparación visible con CUA.

## Ciclo 1: Panorama

**Vistas:** Atlas ONU `#inicio` y Atlas OEA `#inicio`, escritorio de 1351 × 599 CSS px, tema oscuro. Ambas muestran navegación lateral, contexto de proyecto, título de bienvenida, explicación breve, lectura fácil y búsqueda con ejemplos. Las búsquedas responden a dominios distintos; se mantienen los contenidos propios de cada atlas.

**Diferencia comprobada:** el menú lateral de ONU expone los idiomas disponibles como botones breves. OEA usaba un desplegable de escritorio, pese a tener solo español completo y una guía introductoria parcial en inglés. Esto hacía que el menú pareciera de otra familia y ocultaba la cobertura real del inglés.

**Cambio aplicado:** en escritorio, OEA muestra `ES` y `EN` como botones con estado accesible y sincronizados con la guía inglesa parcial; el botón EN identifica ese alcance. En móvil se conserva el selector desplegable, como en la cabecera móvil de ONU. No se anuncia una traducción integral.

| Destino del menú ONU | Ruta comparable OEA | Revisión CUA de esta ronda |
| --- | --- | --- |
| Panorama | `#inicio` | Revisado; control de idioma homologado. |
| Noticias del mundo | `#actualidad` | Revisado en CUA. OEA ya filtra por organismo, busca y conecta cada nota con contexto del Atlas; conservar su selección y no trasladar filtros ONU. |
| Cómo se nombra a los expertos | `#elecciones` | Revisado en CUA: ONU explica selección de expertos de procedimientos especiales; OEA, elecciones de integrantes de CIDH y Corte. Propósitos distintos; se mantienen reglas y fuentes propias. |
| Explorar mandatos | `#comision` y `#corte` | Revisado en CUA: ONU explora mandatos temáticos y OEA separa los dos órganos del SIDH. No son registros equivalentes; se mantienen destinos separados y guías por función. |
| Relatores y relatoras | `#relatorias` | Revisado en CUA: ONU es directorio de titulares; OEA presenta relatorías temáticas/especiales y monitoreo. Objeto de consulta distinto. |
| Países | `#estados` | Revisado en CUA: ONU cruza país con tratados, mecanismos y documentos en tabla; OEA ofrece lista/ficha regional. Hallazgo: OEA mostraba `35 Estados` como si fueran miembros. Se corrige a 34 miembros actuales y 1 ficha histórica de retiro, incluidos filtro y resultados. |
| Mapa del mundo | `#mapa` | Revisado en CUA: ONU ofrece capas globales, selector de país, zoom, animación y ficha; OEA ofrece búsqueda regional, selección por teclado, capas de membresía/casos/hitos, comparación de tratados, año, animación y ficha. Escala regional y variables no intercambiables. |
| Seguimiento de recomendaciones | `#seguimiento` | Revisado en CUA: ONU muestra seguimiento EPU; OEA diferencia recomendaciones CIDH y cumplimiento de sentencias Corte. Tarea afín, mecanismos no equivalentes. |
| Tratados y comités | `#competencia` y `#biblioteca` | Revisado en CUA: ONU conecta nueve tratados principales, comités, texto y ratificaciones; OEA ofrece un buscador de artículos del recorrido y un módulo separado sobre atribución de competencia. La Biblioteca debe leerse como selección aplicada, no como catálogo íntegro. |
| Tengo un caso | `#orientador` | Revisado en CUA: ONU orienta según país, aceptación estatal, plazo y requisitos de vías de tratados; OEA conduce desde la etapa procesal a la pregunta y destino siguiente. La elección OEA es pedagógica y no sustituye asesoría. |
| Otros mecanismos | `#sistema` y `#opiniones` | Revisado en CUA: ONU distingue órganos de tratados de procedimientos especiales; OEA explica la relación CIDH/Corte y conserva opiniones consultivas y protección como rutas separadas. No son mecanismos equivalentes. |
| Arqueología documental | `#jurisprudencia` | Revisado en CUA: ONU rastrea acto de creación, renovaciones, métodos e informes y separa referencia de fuente cotejada; OEA ofrece jurisprudencia selectiva por caso/tema con enlace a la fuente oficial. Son tareas distintas; hacer visible que el índice de casos no es un rastreador documental exhaustivo. |
| Cómo funciona la ONU | `#organos` y `#oea` | Revisado en CUA: ONU dispone de mapa de órganos, familia de agencias y orientador; OEA ofrece mapa de órganos y separación entre Organización y SIDH. Mantener entidades y dependencias propias, y hacer explícita la relación funcional CIDH/Corte. |
| Su historia | `#historia` | Revisado en CUA. Ambos tienen épocas, temas, año, búsqueda, selección y recorrido. OEA acota expresamente sus siete hitos a 1948–1988; ampliar la cobertura es una mejora editorial pendiente, no una corrección de estilo. |
| Simula una asamblea | `#laboratorio`, `#arcadia` | Revisado en CUA: ONU ofrece simulación de delegación para clase (datos de país, tratados, votaciones y EPU); OEA ofrece preguntas procesales y un expediente hipotético. No llamar a estos ejercicios el mismo tipo de simulación. |
| Siglas y códigos | `#diccionario` | Revisado en CUA: ambos tienen búsqueda y alfabeto. ONU expone filtros de tipo y 241 siglas/términos; OEA conecta fichas a ruta, norma y términos de la guía, con 113 entradas actuales. El tamaño por sí solo no mide calidad, pero la cobertura OEA sigue siendo una tarea editorial activa. |
| Recuperar documentos | `#inicio`, `#jurisprudencia` y `#biblioteca` | Revisado en CUA: ONU reconstruye documentos por símbolo/tipo y distingue original, informe y método; OEA permite buscar artículos del recorrido y consulta jurisprudencia oficial. No es herramienta de recuperación equivalente; preservar esa limitación y señalar clase de fuente. |
| Datos y calidad | `#datos` | Revisado en CUA: OEA publica cobertura, interpretación de enlaces, límites y exportación JSON. Declara “no registrada” la fecha de corte y “no realizada” la comprobación sistemática de enlaces. Esa transparencia es clara; conviene hacerla más visible junto a cada conjunto, como ONU hace en sus fichas. |
| Alertas de verificación | `#datos` | Revisado en CUA: ONU tiene destino separado de alertas; OEA no. OEA declara límites en la vista de calidad y advierte en fichas, pero no agrupa alertas concretas. No inventar alertas; decidir si se necesita un índice de alertas basado en verificaciones reales. |
| Qué falta y qué viene | Documentación de auditoría | Revisado en CUA: ONU muestra una hoja de ruta pública con estados y límites; OEA registra pendientes principalmente en documentación del repositorio. Falta decidir y publicar un resumen editorial de cobertura en `#datos`. |
| DIGNITYOS | Sin equivalente | No se traslada como contenido de OEA. |
| Descargas | `#datos` | Revisado en CUA: ambos ofrecen descargas; ONU separa licencia y versión por archivo; OEA descarga índices JSON de casos, opiniones y Estados. Documentar versión/fecha en el archivo OEA y explicar licencias de contenido de terceros. |
| Fuentes y alcance | `#biblioteca`, `#datos` y pie | Revisado en CUA: ONU tiene sección explícita de fuentes, autoría y límites; OEA distribuye fuentes normativas en Biblioteca y límites/licencia en Datos y repositorio. Conviene enlazar y agrupar esas piezas para que el lector no tenga que inferirlas. |

La revisión y mejora de las rutas OEA propias —procedimiento, escritos, plazos, opiniones, práctica y caso guiado— se añadirá al mismo ciclo aunque no tengan una pantalla ONU equivalente. La comparación visual no decide por sí sola la corrección jurídica; cada cambio metodológico debe sostenerse con fuente oficial y conservar los límites de datos declarados por el Atlas.

## Ciclo 5: países y rutas de consulta

La inspección CUA de 25 de noviembre comparó las pantallas de Países en los sitios publicados. La tabla ONU expone país, región, tratados, mandatos y atajos a la ficha; OEA ofrece búsqueda regional y un directorio de fichas. Su cabecera de contexto dice `34 Estados`, mientras el recuento de la lista decía `35 Estados`: mezcla membresía vigente y ficha histórica de retiro. Esa inconsistencia se corrige en la lista, filtros, conteo inicial y caché sin conexión.

La misma pasada inspeccionó en OEA la biblioteca/competencia, el Sistema, el orientador, el laboratorio, la jurisprudencia y la página de datos; y abrió las entradas correspondientes del menú ONU cuando existían. El contenido visible confirma que varias pantallas comparten tareas generales —orientar, buscar fuentes, practicar o consultar datos— pero usan instrumentos y coberturas distintas. Estas rutas requieren conservar sus límites de alcance y no cuentan como homologadas en contenido.

## Ciclo 6: procedimiento y páginas propias de OEA

La escalera muestra 18 estaciones y permite filtrar por fase. En la inspección CUA, la estación 9 se identifica como “Informe preliminar de fondo (art. 50)” y la 10 como “Remisión al Estado: tres meses y suspensión”. El texto de la segunda separa el plazo de tres meses desde la transmisión al Estado del mes para la posición del peticionario desde su notificación, y califica la suspensión como no automática y sujeta a condiciones. El reloj de plazos complementa esta secuencia; son vistas distintas que deben mantener vínculos bidireccionales. Deben probarse esos enlaces después de cada cambio a la secuencia.

La vista de Historia ofrece filtros de períodos y temas, búsqueda, control anual, hitos seleccionables y recorrido guiado. El mapa OEA tiene tres capas; su capa de hitos permite filtrar por año, animar y comparar hitos de ratificación/adhesión. También explica datos sin fecha verificada y ofrece una lista alternativa. La diferencia con el mapa ONU está en el alcance y las variables, no en la ausencia de dimensión temporal.

## Inventario de pantallas OEA

Se comprobaron mediante lectura semántica CUA las 24 pantallas públicas en español. El contenido de la ayuda, controles y rutas se revisó por pantalla; el inventario de 25 rutas del sitio incluye además una guía en inglés parcial, que no constituye una traducción de toda la plataforma.

| Grupo de menú | Rutas inspeccionadas | Revisión / hallazgo principal |
| --- | --- | --- |
| Inicio | `#inicio`, `#actualidad`, `#orientador` | Portada y búsqueda; noticias con filtro por órgano, búsqueda y enlace de origen; orientador por situación procesal. |
| Conocer la OEA | `#oea`, `#organos`, `#historia`, `#elecciones`, `#estados`, `#mapa` | Cuatro pilares; mapa institucional; cronología acotada; procesos electorales diferentes por órgano; ficha regional de Estados; mapa por capas y año. |
| Ruta interamericana | `#sistema`, `#competencia`, `#comision`, `#relatorias`, `#corte`, `#recorrido`, `#reloj`, `#seguimiento`, `#arcadia` | CIDH y Corte diferenciadas; competencia con siete apartados y laboratorio; etapas guiadas; plazos con eventos iniciales; seguimiento por órgano; expediente hipotético con hitos. |
| Casos y actualidad | `#jurisprudencia`, `#opiniones` | Índice selectivo de casos que remite a decisiones oficiales; 32 expedientes consultivos e identificación de la OC-12/91 como decisión de no responder. |
| Consulta | `#diccionario`, `#laboratorio`, `#biblioteca` | 113 fichas alfabéticas con búsqueda ampliada opcional; práctica procesal; selección de 37 artículos conectados a la ruta. |
| Sobre | `#datos` | Cobertura, clasificación de enlaces, límites de actualización, descargas JSON y licencias; no hay pantalla de alertas independiente ni fecha de corte global registrada. |

El marco de navegación comparte menú por grupos, estado activo, franja de contexto, jerarquía tipográfica, controles accesibles, colores, y ruta independiente por pantalla. Mantenerlo homogéneo no significa agregar idiomas, filtros, capas o datos que OEA no tiene. Las diferencias relevantes que quedan son de alcance y cobertura: cronología histórica OEA, número y alcance de fichas jurídicas, registro de alertas y cobertura de vocabulario. No se deben resolver con números o contenidos inventados.

## Verificación automatizada y trabajo restante

Se instaló Playwright en una carpeta temporal fuera del repositorio y se ejecutaron `scripts/browser-family.cjs` y `scripts/browser-methodology.cjs` con el Chromium ya instalado. Pasaron las 25 rutas en 360, 390 y 1440 px, en modo claro y oscuro, y los recorridos metodológicos en 390 y 1280 px. La prueba familiar comprobó marco común, desbordamiento, historia, mapa, diccionario, navegación móvil e idioma; la metodológica comprobó guías, niveles, ejercicios y exportación. No se añadió una dependencia al sitio.

Las pruebas comprueban rutas, mapa por año, búsqueda alfabética, enlace de jurisprudencia a su estación procesal, noticias, opiniones y descarga JSON. No equivalen a probar todas las combinaciones de filtros ni cada enlace externo.
- Determinar una política de fecha de corte por conjunto y un canal de corrección de enlaces; `#datos` hoy declara explícitamente que aún no se registran/no se hace esa verificación sistemática.
- Continuar ampliando el diccionario por cobertura de conceptos de las etapas y documentos, verificando cada ficha y alias contra la norma oficial.
- Completar revisión jurídica de cada ficha de caso, recomendación, opinión consultiva y plazo antes de describir el corpus como exhaustivamente cotejado.

El laboratorio OEA es práctica de preguntas procesales; Arcadia es un caso hipotético por hitos. Ninguno reproduce la simulación diplomática de ONU. “Competencia”, “recorrido”, “reloj”, “Comisión”, “Corte”, “seguimiento” y “caso guiado” son destinos propios OEA; su homogeneidad se evalúa por el marco visual compartido y la continuidad del procedimiento, no por buscarles una pantalla ONU artificial.

## Ciclo 2: Noticias

ONU organiza noticias internacionales con filtros temáticos y archivo. OEA muestra una selección editorial regional, filtros por OEA/CIDH/Corte, búsqueda, fecha de revisión, enlaces a comunicados oficiales y accesos a las explicaciones relacionadas. Son propósitos distintos; se conserva el modelo editorial OEA. Falta en esta ronda comprobar con teclado y en móvil cada filtro y el estado sin resultados en ambos sitios.

## Ciclo 3: Historia

CUA confirmó en ambas páginas una secuencia de épocas y temas, controles para buscar, mover el año, seleccionar un hito y recorrerlos. La arquitectura de interacción ya sigue el patrón de la familia Atlas. La cobertura no es comparable: ONU ofrece una historia de largo alcance; la línea fundacional OEA cubre siete hitos, 1948–1988, y declara que no es completa. Se mantiene esa advertencia; incorporar hitos adicionales exige fuente oficial y una definición de alcance antes de ampliar datos.

## Ciclo 4: Mapas

CUA confirmó que el mapa ONU tiene capas de tratados, tratados particulares, relatorías, conflicto y recomendaciones del EPU, además de selector, controles de escala, animación y ficha; OEA representa Estados americanos, situación regional y hitos del sistema. No se deben copiar las capas ONU. Queda por comparar el descubrimiento, la navegación por teclado, la ficha seleccionada y la capa temporal de OEA en el mismo estado y tamaño de pantalla.
