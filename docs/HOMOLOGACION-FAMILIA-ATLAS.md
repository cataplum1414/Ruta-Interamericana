# Homologación de la familia Atlas

Revisión del 24-11-2026 posterior al seguimiento metodológico. Referencia: [Atlas ONU](https://sukimalabs.com/atlasonu/) y su menú de 23 destinos; destino: las 25 rutas de Atlas OEA. Se inspeccionaron el código de referencia y las vistas públicas, y se tomaron medidas de las pantallas comparables en 390 y 1440 px. La portada, noticias, historia, mapa, países, diccionario, tratados, órganos, orientador, seguimiento, práctica y jurisprudencia se contrastaron también mediante capturas.

La revisión no declara identidad visual ni equivalencia de instituciones. Adapta patrones que resuelven tareas parecidas; las normas, datos y ejercicios siguen siendo interamericanos. No se incorporó código fuente de Atlas ONU al sitio.

## Ampliación de Panorama

La portada ahora incluye diez accesos editoriales a las secciones OEA, actualidad, una efeméride del Sistema Interamericano enlazada con su año en la línea de tiempo, búsqueda guiada por situación y Estado, orientación para instalar la PWA y procedencia del proyecto. Las cifras corresponden a la edición OEA: 34 Estados miembros actuales, cuatro pilares, 18 estaciones y 32 opiniones consultivas catalogadas. No se incorporan etiquetas ni funciones propias de ONU o DIGNITYOS.

## Criterio común

- **Identidad:** DejaVu Sans local, grafito `#10131C`, marfil `#F5F4F0`, cian `#14C6D4` y violeta `#7148F5`. Acción principal violeta con texto blanco; contraste de acentos ajustado por tema.
- **Marco:** menú lateral de 288 px en escritorio; cabecera y navegación inferior fija en móvil; franja de contexto compartida y un único ancho de lectura por pantalla.
- **Jerarquía:** título, introducción, ayuda breve, controles y resultado. Títulos de sección de 35 px en escritorio y 28 px en móvil; portada conserva su escala propia.
- **Densidad:** la ayuda cerrada no ocupa un panel grande; un panel de lectura acompaña una selección en Historia. Noticias se leen como una lista editorial filtrable, sin una cuadrícula de cajas idénticas.
- **Interacción:** controles nativos, foco visible en elementos interactivos, teclado en la línea del tiempo, sin avance automático impuesto ni animación necesaria para comprender.

## Defectos encontrados y corregidos

1. El pie de página estaba antes de Relatorías, Historia y otras páginas añadidas después. Al navegar se veía como contenido anterior al título. Ahora sigue a todas las rutas dentro del marco principal.
2. La portada tenía espacios distintos de las demás vistas. El contexto, los márgenes y la alineación se aplican al conjunto, no solo al Inicio.
3. Los títulos contenían saltos forzados y controles de diccionario con frases largas que rompían el renglón. Se eliminaron saltos decorativos y las frases largas siguen enlazadas en el cuerpo; los encabezados mantienen solo activadores cortos.
4. El cambio de ruta mostraba un rectángulo de foco de navegador alrededor del título. Se conserva el foco semántico para lectores de pantalla y se evita ese marco de control alrededor de la cabecera; los controles interactivos conservan su foco visible.
5. Historia era únicamente una lista vertical. Ahora ofrece búsqueda, temas, períodos, año, pista horizontal seleccionable, detalle y recorrido manual; conserva los siete hitos y sus fuentes.
6. La letra Ñ del control alfabético se había convertido en `?`, aunque la función de búsqueda admitía Ñ. Se corrige el control visible y se añade comprobación real en navegador.
7. Noticias carecía de búsqueda por texto. Se añade búsqueda combinada con órgano, contador y mensaje de resultados vacíos; la selección editorial no se presenta como un feed automático.

## Revisión de cada destino del menú ONU

| Referencia ONU | Aplicación en OEA | Traslado o límite |
| --- | --- | --- |
| Panorama | Inicio | Marco, escala editorial, lectura fácil, buscador con ejemplos y noticias en panel de lectura. El titular explica el procedimiento propio. |
| Noticias del mundo | Noticias | Lista editorial, búsqueda, filtro por órgano, fechas y documentos originales. No se importa el feed de noticias ONU. |
| Cómo se nombra a los expertos | Elecciones | Marco común y contraste CIDH/Corte existente. Reglas electorales propias. |
| Explorar mandatos | Comisión y Corte | Dos destinos independientes con cabeceras, guías y controles comunes; no se copian los mandatos ONU. |
| Relatores y relatoras | Relatorías | Directorio buscable y desplegables existentes dentro del marco común. No se inventa un directorio equivalente de titulares. |
| Países | Estados | Búsqueda, directorio y ficha de selección existentes; mismas alineaciones y jerarquía editorial. |
| Mapa del mundo | Mapa de las Américas | Marco, ayudas breves, campos alineados, capas, selección y controles. Se conserva cartografía regional y significado de cada capa. |
| Seguimiento de recomendaciones | Seguimiento | Marco común, lectura de documentos y contraste CIDH/Corte; no se traslada la lógica del EPU. |
| Tratados y comités | Biblioteca y Competencia | Búsqueda por instrumento y exploración existente con el marco compartido. Mantiene distinciones de competencia. |
| Tengo un caso | Orientador | Entrada por tarea desde Panorama y orientación existente por situación/documento. |
| Otros mecanismos | Sistema y Opiniones | Cabeceras y ayudas comunes; vías consultiva, cautelar y contenciosa separadas. |
| Arqueología documental | Jurisprudencia | Consulta existente con tipo de fuente y estado de cotejo; marco compartido. No se convierte en rastreador integral de documentos. |
| Cómo funciona la ONU | OEA y Órganos | Organización institucional propia dentro del mismo marco; se conserva exploración de relaciones. |
| Su historia | Historia | Nuevo explorador con filtros, búsqueda, rango anual, detalle, teclado y recorrido. Son siete hitos fundacionales, no una cronología completa. |
| Simula una asamblea | Practicar y Arcadia | Marco común y prácticas procesales existentes, sin copiar una simulación diplomática. |
| Siglas y códigos | Diccionario | Buscador, alfabeto y ficha conectada; ayuda y controles más compactos, Ñ visible corregida. |
| Recuperar documentos | Biblioteca y búsqueda | Controles de consulta y referencias existentes; no se promete el repertorio documental ONU. |
| Datos y calidad | Datos | Misma jerarquía de cabecera; conserva exportación y estados documentales explícitos. |
| Alertas de verificación | Datos | Alertas existentes y su lectura dentro del marco compartido. |
| Qué falta y qué viene | Datos y seguimiento de auditoría | Límites de cobertura y pendientes documentados; no se etiquetan como completos. |
| DIGNITYOS | Sin equivalente | Revisado como iniciativa distinta; no se importa al contenido jurídico de Atlas OEA. |
| Descargas | Datos | Descarga de datos públicos existente; no incluye materiales privados. |
| Fuentes y alcance | Biblioteca y guías por ruta | Normas y límites de uso del Atlas, con ayuda cerrada breve y explicación al abrir. |

Plazos, la escalera de 18 estaciones, el puente CIDH/Corte y los laboratorios de competencia tienen necesidades propias: reciben el mismo marco sin reemplazar sus secuencias jurídicas por una pantalla ONU que no corresponda.

## Pruebas y alcance

`scripts/browser-family.cjs` recorre las 25 rutas en 360, 390 y 1440 px, en claro y oscuro. Comprueba una sola ruta visible, franja de contexto antes del título, alineación, ausencia de desbordamiento de página y pie posterior a cada ruta. Ejercita filtros, búsqueda, teclado, año, recorrido de Historia, capa temporal del mapa, búsqueda de noticias combinada con órgano, Ñ, limpieza del diccionario, selector de idioma y barra móvil fija al desplazarse.

`scripts/browser-methodology.cjs` mantiene la comprobación de los ejercicios y exportación de la entrega anterior. Las pruebas automáticas de reglas del reloj, diccionario y metodología siguen siendo necesarias.

Las capturas y pruebas de geometría no equivalen a un estudio de usabilidad con personas, una traducción integral o una revisión jurídica de todo el corpus. El selector ofrece español y una guía inglesa parcial; no anuncia otros idiomas sin traducción disponible.

Archivos de implementación: `index.html`, `assets/arquitectura-atlas-v25.css`, `assets/familia-atlas-v1.js`, `assets/historia-v1.js`, ajustes en `app-v41.js` y `guia-metodologica-v1.js`. La caché `v114` incluye los módulos nuevos.

## Ajuste de componentes posterior

Se verificó en Chromium la fuente realmente renderizada mediante `CSS.getPlatformFontsForNode`: ambos atlas utilizan DejaVuSans y DejaVuSans-Bold. Las diferencias observadas del menú estaban en el peso declarado (750 frente a 600), margen entre destinos y espaciado, no en una fuente ausente. Se ajustan esos valores, el orden idioma/tema, las superficies oscuras, los márgenes del buscador y la posición de la ayuda de Panorama después de las noticias. La caché de esta corrección es `v115`.
