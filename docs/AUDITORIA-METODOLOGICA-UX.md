# Auditoría metodológica y de usabilidad — 24-11-2026

## Alcance y evidencia

Atlas OEA debe ayudar a una persona sin formación previa a reconocer el órgano, el momento procesal, el documento, la regla y la siguiente actuación. La consulta jurídica avanzada necesita conservar esa secuencia y permitir comprobar las fuentes. Se revisaron el código activo, los datos, la navegación y los hallazgos comparativos de `AUDITORIA-ATLAS.md`. La referencia pública es https://sukimalabs.com/atlasonu/ . Esta pasada no incluye observación de usuarios ni validación visual nueva en un navegador: los resultados automatizados no acreditan por sí solos la usabilidad de toda la plataforma.

## Hallazgos priorizados

| ID | Hallazgo comprobado | Impacto y confianza | Estado |
| --- | --- | --- | --- |
| UX-01 | El diccionario filtraba por cualquier mención en definición y uso, sin graduar coincidencias. | Conductual, alto; confirmado en `renderGlossary`. | Corregido: nombre/sinónimos por defecto, coincidencia exacta primero; búsqueda en explicaciones opcional. |
| UX-02 | Las fichas seguían el orden del archivo; no había filtro alfabético. | Conductual, alto; confirmado en HTML y JS. | Corregido: orden A–Z, filtro por inicial, letras sin fichas deshabilitadas, restablecimiento completo. |
| UX-03 | Veinte categorías se convertían en veinte botones antes de las fichas. | Carga cognitiva; confianza alta en cantidad, efecto móvil pendiente de observación. | Corregido: selector de tema junto a letras y búsqueda; contador de resultados conserva anuncio accesible. |
| UX-04 | Los tres niveles de competencia solo cambiaban el nombre del nivel en la devolución; el razonamiento era idéntico. | Metodológico, alto; confirmado en `competencia-v1.js`. | Pendiente: tareas y retroalimentación graduadas, no solo cambio de rótulo. |
| UX-05 | La búsqueda global usa coincidencias parciales y tolerancia de errores en todo el texto; el límite global de 18 resultados puede ocultar tipos de resultado. | Conductual, alto; confirmado en `findAtlasResults` y `tokenMatches`. | Pendiente: relevancia por campo, cupos por tipo y ampliación explícita. El cambio del diccionario no se presenta como corrección de toda la búsqueda global. |
| UX-06 | El explorador de competencia mezcla metadatos del tratado y un protocolo; varias fichas no desglosan todas las fechas y mecanismos. | Jurídico y metodológico; confirmado en datos de `competencia-v1.js`. | Pendiente: separar instrumentos y verificar fechas, disposiciones y jurisprudencia primaria individualmente. |
| UX-07 | Las fichas nuevas amplían cobertura, pero algunas fuentes son portales generales y no todas las afirmaciones tienen artículo o párrafo individual. | Trazabilidad jurídica; confianza alta. | Pendiente: referencia normativa por ficha, párrafo jurisprudencial y fecha de cotejo. Una URL HTTPS valida formato, no la afirmación jurídica. |
| UX-08 | La mayoría de fichas remite a la página de recorrido, sin identificar una estación concreta. | Continuidad pedagógica; confianza alta. | Pendiente: enlaces a `#recorrido?paso=N` y regreso al concepto o ejercicio desde cada estación. |
| UX-09 | Atlas ONU explicita propósito, uso y origen de datos de forma reiterada; OEA lo hace de forma desigual entre rutas. | Metodológico; confianza media, requiere lectura con usuarios. | Pendiente: instrucciones breves por vista sin aumentar la longitud de Panorama. |

### Fundamento UX y contraste crítico

La base local consultada incluye UX-505, «Faceted Search — Show Filters and Results Simultaneously», que recomienda mostrar filtros, resultado y recuento durante la exploración; y UX-508, «Global Search with Federated Results», que recomienda agrupación por entidad y relevancia dentro de cada grupo. Son apoyos de diseño, no resultados de pruebas de Atlas OEA. Para UX-03, un selector reduce espacio pero hace menos visibles las opciones: se conserva el filtro alfabético visible y queda pendiente comprobar su descubrimiento en móvil. La ausencia de búsqueda por letra es un hecho verificable; no demuestra por sí misma una tasa concreta de fracaso.

## Método común para las pantallas

1. Identificar la tarea: comprender una institución, localizar una regla, seguir una actuación o practicar un argumento.
2. Explicar órgano, actor y documento antes de introducir su consecuencia jurídica.
3. Mostrar condiciones, límites y fuentes junto a la conclusión; no convertir situaciones hipotéticas en instrucciones para un caso real.
4. Proponer una decisión breve con explicación de cada opción y regreso a la regla.
5. Permitir continuar al siguiente paso y volver sin perder los filtros o el contexto.

La matriz de todas las rutas y sus equivalentes ONU está en `AUDITORIA-ATLAS.md`. Los ejercicios, mejoras de audiencia, actualidad documental y garantías procesales de defensa del Estado siguen en `PEDAGOGIA.md`. Las grabaciones privadas no son fuente publicable del contenido y esta revisión no acredita que hayan podido escucharse.

## Comprobaciones de esta entrega

- Motor de diccionario: coincidencia exacta, siglas y sinónimos, acentos, letra inicial, orden alfabético, combinación de filtros, búsqueda ampliada voluntaria y resultado vacío.
- Integridad de datos: 107 identificadores únicos, relaciones existentes y destinos internos válidos.
- Validación general del sitio y prueba del reloj procesal.
- Pendiente: recorrido real por teclado, lector de pantalla y comparación visual en móvil/escritorio de los controles nuevos. No se declara cerrada la auditoría completa ni la revisión jurídica.
