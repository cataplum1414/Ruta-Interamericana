# Auditoría comparativa de Atlas ONU y Atlas OEA

Referencia: [Atlas ONU](https://sukimalabs.com/atlasonu/). Sitio evaluado: [Atlas OEA](https://cataplum1414.github.io/Ruta-Interamericana/).

Se recorrieron por teclado las 22 vistas internas del menú de Atlas ONU y las 18 entradas en español de Atlas OEA en Chromium, a 320 × 740 y 1.200 × 740 px. DIGNITYOS es una salida externa. La guía en inglés de Atlas OEA tiene su propia entrada fuera del menú principal. Al abrir cada vista se comprobó su encabezado y el ancho del documento. Las oportunidades de la tabla son una evaluación de la arquitectura y del propósito de cada pantalla, no resultados de pruebas con usuarios.

| Entrada de Atlas ONU | Equivalente en Atlas OEA | Patrón que conviene trasladar |
| --- | --- | --- |
| Panorama | [Panorama](https://cataplum1414.github.io/Ruta-Interamericana/#inicio) | La cabecera, la lectura fácil y el buscador ya comparten la estructura. Afinar qué noticia y qué práctica aparecen primero según la tarea del lector. |
| Noticias del mundo | [Noticias](https://cataplum1414.github.io/Ruta-Interamericana/#actualidad) | OEA tiene filtros por institución. Añadir fecha de revisión y conexiones explícitas de cada noticia con el órgano, documento o etapa. |
| Cómo se nombra a los expertos | [Órganos](https://cataplum1414.github.io/Ruta-Interamericana/#organos) | Usar una secuencia corta para explicar cómo se eligen integrantes de la CIDH y jueces de la Corte, con enlaces oficiales para cada proceso. |
| Explorar mandatos | [Comisión](https://cataplum1414.github.io/Ruta-Interamericana/#comision) y [Corte](https://cataplum1414.github.io/Ruta-Interamericana/#corte) | Los recorridos ya están separados. Comparar actuaciones por etapa, actor y documento con el mismo patrón de exploración. |
| Relatores y relatoras | [Comisión](https://cataplum1414.github.io/Ruta-Interamericana/#comision) | Vincular relatorías de la CIDH y su función con la página de la Comisión, si hay fuente primaria para cada ficha. |
| Países | [Estados](https://cataplum1414.github.io/Ruta-Interamericana/#estados) | Ya hay búsqueda, fichas compartibles y retorno al mapa. Añadir comparaciones que distingan datos históricos, vigencia y fuente. |
| Mapa del mundo | [Mapa de las Américas](https://cataplum1414.github.io/Ruta-Interamericana/#mapa) | Ya tiene controles arriba, ficha debajo, capas y cronología. Revisar la selección en móvil y probar que el lector entienda qué representa cada color. |
| Seguimiento de recomendaciones | [Seguimiento y cumplimiento](https://cataplum1414.github.io/Ruta-Interamericana/#seguimiento) | Primera adaptación: contrastar un informe en seguimiento ante la CIDH y una resolución de supervisión de la Corte, con práctica de lectura documental. Queda pendiente comparar varios expedientes por país y medida. |
| Tratados y comités | [Normas y fuentes](https://cataplum1414.github.io/Ruta-Interamericana/#biblioteca) | Mejorar la recuperación por instrumento, artículo, órgano y etapa. |
| Tengo un caso: ¿adónde acudo? | [Orientador](https://cataplum1414.github.io/Ruta-Interamericana/#orientador) | Primera adaptación: permite elegir una situación y después el documento o la actuación concreta. Explica la recomendación y enlaza a su estación. |
| Otros mecanismos | [Sistema Interamericano](https://cataplum1414.github.io/Ruta-Interamericana/#sistema) y [Opiniones consultivas](https://cataplum1414.github.io/Ruta-Interamericana/#opiniones) | Distinguir peticiones, medidas urgentes y función consultiva mediante entradas con objetivos y documentos propios. |
| Arqueología documental | [Casos y jurisprudencia](https://cataplum1414.github.io/Ruta-Interamericana/#jurisprudencia) | Ya enlaza de la referencia a la etapa. Hacer visible el documento consultado, su tipo y una pregunta jurídica que ayude a leerlo. |
| Cómo funciona la ONU | [Qué es la OEA](https://cataplum1414.github.io/Ruta-Interamericana/#oea) y [Órganos](https://cataplum1414.github.io/Ruta-Interamericana/#organos) | Convertir la introducción y el explorador de órganos en un recorrido continuo, con explicaciones breves y navegación cruzada. |
| Su historia | Sin vista propia | Si se abre una cronología, partir de hitos del sistema interamericano y enlazarlos con sus instrumentos. |
| Simula una asamblea | [Caso guiado](https://cataplum1414.github.io/Ruta-Interamericana/#arcadia) y [Practicar](https://cataplum1414.github.io/Ruta-Interamericana/#laboratorio) | Adoptar la entrada por objetivos y roles de la simulación. Priorizar una secuencia de decisiones antes, durante y después de la audiencia. |
| Siglas y códigos | [Siglas y diccionario](https://cataplum1414.github.io/Ruta-Interamericana/#diccionario) | Ya hay enlaces contextuales. Mejorar la agrupación por órgano, actuación y documento. |
| Recuperar documentos | [Buscador](https://cataplum1414.github.io/Ruta-Interamericana/#inicio) y [Casos y jurisprudencia](https://cataplum1414.github.io/Ruta-Interamericana/#jurisprudencia) | Primera adaptación: abrir la ficha con una cita de Serie C o una OC con su año. Sigue pendiente ampliar el inventario de identificadores y ofrecer filtros por año e instrumento. |
| Datos y calidad | Sin vista propia | Publicar alcance de los índices, fechas de corte y criterios de verificación. Separar esto de la explicación jurídica. |
| Alertas de verificación | Sin vista propia | Mostrar enlaces que requieren revisión y datos con reservas junto al índice correspondiente. |
| Qué falta y qué viene | Esta auditoría y documentación del repositorio | Registrar el estado de cada adaptación y usar comprobaciones reproducibles como evidencia. |
| DIGNITYOS | Enlace externo | Mantenerlo fuera de la comparación de pantallas. |
| Descargas | Sin vista propia | Evaluar exportar el índice público con su procedencia y fecha de corte. |
| Fuentes y alcance | [Normas y fuentes](https://cataplum1414.github.io/Ruta-Interamericana/#biblioteca) | Conservar autoría y alcance. Diferenciar documento oficial, selección editorial y material de práctica. |

## Correcciones derivadas de la revisión

- A 320 px, Procedimiento ocupaba 344 px por el encabezado y el contador de estaciones. Plazos ocupaba 391 px porque algunos rótulos no podían saltar de línea. Se ajustó el flujo de ambos componentes.
- El catálogo de Opiniones separa el expediente OC-33 y distingue textos completos y resúmenes oficiales en inglés. La Corte limitó las descargas directas durante la comprobación, por lo que el inventario de 32 entradas en español no equivale a verificar 32 archivos descargables.
- El orden de trabajo pedagógico es Orientador, Procedimiento, Caso guiado y Practicar. Luego conviene conectar los documentos y los casos con la etapa que ilustran. La comparación se repite en móvil y escritorio y debe probar el recorrido, además de la apariencia.
- Las 18 estaciones ya permiten abrir una decisión de Arcadia, revisar la respuesta y volver a la regla. La práctica de una estación tiene su propio enlace y conserva el avance del simulador completo.
