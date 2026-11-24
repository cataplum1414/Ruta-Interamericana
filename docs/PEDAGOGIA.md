# Aprendizaje activo en Atlas OEA

## Para qué sirve esta revisión

Atlas OEA explica primero qué es la OEA y cómo se organiza; dentro de ese marco, desarrolla el Sistema Interamericano de Derechos Humanos y separa el trabajo de la Comisión del de la Corte. La arquitectura toma de Atlas ONU sus páginas temáticas, navegación persistente, glosario conectado, mapa accesible, fuentes oficiales y práctica integrada. La aplicación debe enseñar cómo se razona en una secuencia, no presentar una pared de texto.

## Material docente revisado localmente

La agenda y los materiales de curso organizan una secuencia concentrada en: introducción y litigio ante la Corte; estructura y procedimiento de la Corte; competencia y admisibilidad; forma de la petición; obligaciones estatales; reparaciones; y ejercicios de fondo, reparaciones y audiencia. El caso académico de Arcadia permite aplicar esas reglas, mientras las lecturas y normas aportan jurisprudencia y reglas procesales.

Temas que deben reflejarse en el recorrido, con explicaciones propias y vínculos a normas y sentencias oficiales:

1. Mapa institucional de la OEA y lugar de la CIDH y la Corte.
2. Diferencia entre función promotora y cuasi jurisdiccional de la CIDH, y función jurisdiccional de la Corte.
3. Competencia por materia, persona, tiempo y territorio; reconocimiento de competencia contenciosa.
4. Petición, agotamiento y excepciones, plazo, duplicidad, admisibilidad y análisis de fondo.
5. Solución amistosa, informe de fondo, recomendaciones y sometimiento a la Corte.
6. Notificación, escrito de solicitudes, argumentos y pruebas (ESAP), contestación, excepciones, prueba, audiencia, sentencia e interpretación.
7. Obligaciones estatales, atribución, derechos alegados, daño, reparaciones y supervisión de cumplimiento.
8. Medidas cautelares de la CIDH y medidas provisionales de la Corte, con sus autoridades y umbrales diferenciados.

La agenda es una hoja de ruta docente, no una fuente jurídica. En caso de divergencia, la explicación debe enlazar la norma o decisión oficial y señalar límites, excepciones y cambios de reglamento. Los documentos académicos entregados sirven para ubicar debates y casos, no para reemplazar las fuentes primarias.

## Qué encontramos en la práctica actual

El recorrido ya contiene 18 estaciones con una pregunta por etapa, comparación de instituciones, plazos orientativos, estudio de un caso ficticio, preguntas de repaso, búsqueda, glosario, jurisprudencia, opiniones consultivas, mapa y fuentes. El simulador ya distinguía empezar ante la CIDH o entrar a la fase de la Corte, pero el estudiante podía avanzar después de cualquier respuesta y al finalizar no veía su historial ni qué conceptos convenía recuperar.

## Patrones educativos revisados en GitHub

| Repositorio | Patrón útil | Aplicación en Atlas OEA |
| --- | --- | --- |
| [H5P Branching Scenario](https://github.com/h5p/h5p-branching-scenario) | Las elecciones determinan el siguiente contenido de un escenario. | Separar rutas y explicar la consecuencia procesal de cada decisión. Mantener rutas CIDH y Corte como entradas diferentes. |
| [Learn Git Branching](https://github.com/pcottle/learnGitBranching) | El estudiante actúa, ve el estado cambiar y puede deshacer o reiniciar. | Mostrar el expediente como un recorrido modificable, guardar decisiones localmente y permitir corregir una respuesta sin perder el progreso. |
| [PhET Interactive Simulations](https://github.com/phetsims) | Manipular variables y observar resultados inmediatos en varias representaciones. | En futuras etapas: cambiar fechas, acto notificado u órgano y mostrar cómo cambia el cómputo o la etapa, siempre con la regla y los límites a la vista. |
| [Loopy](https://github.com/ncase/loopy) | Representar relaciones y efectos dentro de un sistema. | Construir un mapa causal sencillo para conectar hecho, obligación, atribución, violación, daño, reparación y cumplimiento. No sustituye el análisis judicial. |
| [Atlas ONU: documentación de diseño](https://github.com/sukima-labs/atlasonu) | Exploradores conectados, lectura clara, mapas y componentes consistentes. | Reutilizar la gramática editorial de Sukima, adaptar el contenido a la OEA y mantener Comisión y Corte como recorridos separados. |

Estos repositorios son referencias de interacción, no autoridades jurídicas. La propuesta es tomar mecánicas pequeñas, accesibles y sin dependencias externas pesadas, no copiar sus temas o interfaces.

## Mejora implementada

La simulación de caso ahora conserva un historial visual por sesión: cada respuesta queda marcada como correcta o pendiente de repaso; se puede regresar a una decisión contestada, leer otra vez su explicación y cambiarla; el cierre indica el resultado y enlaza cada error con el punto exacto que se puede revisar. La pantalla no bloquea el aprendizaje por fallar: invita a intentarlo de nuevo y deja visible la explicación jurídica.

El registro existe solo en memoria durante la sesión, no crea perfiles ni envía respuestas. La ruta conserva su orden procesal: la interacción ayuda a explorar, pero no altera la regla ni afirma que la elección del estudiante modifique el procedimiento real.

## Próximas piezas prioritarias

1. Mapa de relaciones entre OEA, órganos políticos, CIDH y Corte, con capas activables y una alternativa en lista.
2. Simulador de competencia/admisibilidad con una decisión por pantalla, causas de inadmisión y excepciones explícitas.
3. Línea de tiempo donde el usuario cambia una fecha de notificación y ve qué plazo se está calculando, cuál es su regla y qué datos faltan.
4. Grafo de razonamiento para alegaciones y reparaciones del caso hipotético; cada relación debe abrir su fuente.
5. Glosario transversal con enlaces bidireccionales desde órganos, etapas, jurisprudencia y preguntas.
6. Casos y opiniones consultivas completos, buscables por problema jurídico y derecho, con fecha, tipo de decisión, órgano y enlace oficial. Evitar presentar casos como si fueran frecuentes o intercambiables.
7. Modo de lectura por capas: explicación breve, explicación completa, regla aplicable y fuente primaria.

## Privacidad y alcance de las clases

No se incorpora al repositorio contenido de Plaud, nombres de participantes, atribuciones, audios ni transcripciones. Para ampliar el contenido se usan la agenda y los documentos que están en la carpeta local, convertidos en explicaciones generales y corroboradas con fuentes oficiales. Esta página pública describe el diseño pedagógico, no reproduce clases privadas.
