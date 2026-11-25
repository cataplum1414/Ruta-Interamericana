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
| Cómo se nombra a los expertos | `#elecciones` | Pendiente |
| Explorar mandatos | `#comision` y `#corte` | Pendiente |
| Relatores y relatoras | `#relatorias` | Pendiente |
| Países | `#estados` | Pendiente |
| Mapa del mundo | `#mapa` | Revisado en CUA. ONU ofrece capas globales, selector de país, zoom, animación y ficha; OEA ofrece búsqueda regional, selección en mapa y capas propias. Revisar si los controles equivalentes quedan igual de descubribles y si la capa temporal expone todo el rango. |
| Seguimiento de recomendaciones | `#seguimiento` | Pendiente |
| Tratados y comités | `#competencia` y `#biblioteca` | Pendiente |
| Tengo un caso | `#orientador` | Pendiente |
| Otros mecanismos | `#sistema` y `#opiniones` | Pendiente |
| Arqueología documental | `#jurisprudencia` | Pendiente |
| Cómo funciona la ONU | `#organos` | Pendiente |
| Su historia | `#historia` | Revisado en CUA. Ambos tienen épocas, temas, año, búsqueda, selección y recorrido. OEA acota expresamente sus siete hitos a 1948–1988; ampliar la cobertura es una mejora editorial pendiente, no una corrección de estilo. |
| Simula una asamblea | `#laboratorio` | Pendiente |
| Siglas y códigos | `#diccionario` | Pendiente |
| Recuperar documentos | `#biblioteca` | Pendiente |
| Datos y calidad | `#datos` | Pendiente |
| Alertas de verificación | `#datos` | Pendiente |
| Qué falta y qué viene | `#datos` | Pendiente |
| DIGNITYOS | Sin equivalente | No se traslada como contenido de OEA. |
| Descargas | `#datos` | Pendiente |
| Fuentes y alcance | `#biblioteca` | Pendiente |

La revisión y mejora de las rutas OEA propias —procedimiento, escritos, plazos, opiniones, práctica y caso guiado— se añadirá al mismo ciclo aunque no tengan una pantalla ONU equivalente. La comparación visual no decide por sí sola la corrección jurídica; cada cambio metodológico debe sostenerse con fuente oficial y conservar los límites de datos declarados por el Atlas.

## Ciclo 2: Noticias

ONU organiza noticias internacionales con filtros temáticos y archivo. OEA muestra una selección editorial regional, filtros por OEA/CIDH/Corte, búsqueda, fecha de revisión, enlaces a comunicados oficiales y accesos a las explicaciones relacionadas. Son propósitos distintos; se conserva el modelo editorial OEA. Falta en esta ronda comprobar con teclado y en móvil cada filtro y el estado sin resultados en ambos sitios.

## Ciclo 3: Historia

CUA confirmó en ambas páginas una secuencia de épocas y temas, controles para buscar, mover el año, seleccionar un hito y recorrerlos. La arquitectura de interacción ya sigue el patrón de la familia Atlas. La cobertura no es comparable: ONU ofrece una historia de largo alcance; la línea fundacional OEA cubre siete hitos, 1948–1988, y declara que no es completa. Se mantiene esa advertencia; incorporar hitos adicionales exige fuente oficial y una definición de alcance antes de ampliar datos.

## Ciclo 4: Mapas

CUA confirmó que el mapa ONU tiene capas de tratados, tratados particulares, relatorías, conflicto y recomendaciones del EPU, además de selector, controles de escala, animación y ficha; OEA representa Estados americanos, situación regional y hitos del sistema. No se deben copiar las capas ONU. Queda por comparar el descubrimiento, la navegación por teclado, la ficha seleccionada y la capa temporal de OEA en el mismo estado y tamaño de pantalla.
