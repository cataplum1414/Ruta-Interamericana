# Atlas OEA

## Organizaci&oacute;n de los Estados Americanos

Atlas educativo de la Organizaci&oacute;n de los Estados Americanos (OEA). Presenta sus cuatro pilares, &oacute;rganos y estructura; desarrolla con detalle el Sistema Interamericano de Derechos Humanos y la ruta ante la CIDH y la Corte IDH.

**Sitio:** https://cataplum1414.github.io/Ruta-Interamericana/
**Repositorio:** https://github.com/cataplum1414/Ruta-Interamericana

Atlas OEA es un proyecto educativo independiente, editado por Sukima Labs. No es una publicación oficial ni está afiliado a la CIDH, la Corte IDH, la OEA, ONU Mujeres o la Universidad de Alcalá. No sustituye la Convención Americana, los reglamentos ni la asesoría jurídica para casos reales.

## Cómo usar la guía

1. Sigue las 18 estaciones para entender qué ocurre desde los hechos y los recursos internos hasta la supervisión de cumplimiento.
2. En cada estación revisa el objetivo, el documento o resultado esperado y el paso que sigue.
3. Explora el mapa de &oacute;rganos para ver qu&eacute; hace cada uno y distinguir la CIDH de la Corte IDH.
4. Usa el mapa geogr&aacute;fico para localizar los Estados, revisar su membres&iacute;a y abrir la ficha de pa&iacute;s.
5. Usa el reloj de plazos como orientación y verifica cada término en la norma aplicable.
6. Explora el caso ficticio de Emilio Acosta vs. Arcadia y practica con preguntas explicadas.
7. Busca en la biblioteca de jurisprudencia por nombre, país o tema; filtra además por tema jurídico o entidad y abre la fuente oficial disponible.
8. Busca siglas y conceptos en el diccionario; también puedes tocar los términos subrayados para abrir su explicación y seguir los enlaces relacionados.
9. Marca las estaciones que ya estudiaste. La guía recuerda tu última estación y tu avance en este navegador, sin crear una cuenta.
10. En un navegador compatible, abre el menú para instalar la guía. Tras la primera carga, el contenido y los ejercicios disponibles se pueden consultar sin conexión; las fuentes oficiales externas requieren internet.

## Contenido

- Módulo «Competencia y jurisdicción internacional» bajo el Sistema Interamericano, con fundamentos, cuatro dimensiones, aceptación y atribución, alcance de tratados, explorador jurídico y laboratorio de escenarios.
- El explorador distingue la CIDH, la Corte IDH y el Comité de los Derechos del Niño; señala los alcances individuales limitados de Belém do Pará y San Salvador y enlaza fuentes oficiales.
- El laboratorio ofrece niveles progresivos y retroalimentación normativa razonada. Las ratificaciones, reservas y declaraciones por Estado se marcan como información no verificada en ese módulo.
- Mapa institucional interactivo para explorar los &oacute;rganos de la OEA y distinguir la CIDH de la Corte aut&oacute;noma.
- Desde el mapa, enlaces de la CIDH y la Corte a sus p&aacute;ginas y a las estaciones correspondientes del procedimiento.
- Mapa geogr&aacute;fico con capas de Estados OEA y jurisprudencia citada en esta gu&iacute;a, b&uacute;squeda, zoom, lista accesible y conexiones desde cada pa&iacute;s a la OEA, la CIDH, la Corte y decisiones oficiales. La capa de casos describe solo el &iacute;ndice de este Atlas, no el total hist&oacute;rico.

- Vistas independientes por tema, navegables desde el men&uacute; y con accesos directos a Inicio, OEA, Ruta, Mapa y Men&uacute; en m&oacute;vil.
- Búsqueda global de etapas, preguntas procesales, decisiones, plazos, fuentes, ejercicios, siglas y conceptos, con ejemplos listos para abrir.
- Diccionario buscable con 113 siglas y conceptos, conectado con explicaciones, órganos, etapas, normas y fuentes oficiales; distingue, entre otros, los informes de los artículos 50 y 51, la oportunidad del peticionario, las recomendaciones y las reparaciones.
- Orientador «¿En qué momento está el caso?» con rutas hacia los pasos relevantes.
- Recorrido guiado por el procedimiento interamericano con 18 decisiones interactivas y explicaciones inmediatas, filtros por fase y un patrón común: qué pasa, quién actúa, documento, plazo y siguiente paso.
- La escalera explica el informe del artículo 50, las recomendaciones, su transmisión al Estado y el período de tres meses del artículo 51.1; distingue este período del mes de la posición del peticionario e indica cuándo la CIDH puede considerar suspenderlo bajo el artículo 46 de su Reglamento.
- El diccionario enlaza el informe preliminar, las recomendaciones, el período del artículo 51, su posible suspensión y el informe definitivo con sus fuentes oficiales y las etapas relacionadas.
- Páginas independientes para la CIDH y la Corte IDH, además de una página puente que explica cómo puede pasar un asunto de un órgano al otro.
- Reloj de plazos orientativos.
- El reloj incluye expresamente el informe preliminar, el plazo estatal para informar cumplimiento, el mes del peticionario, el período del artículo 51.1, su suspensión y el informe definitivo. Los plazos fijados por la CIDH se muestran sin inventar fechas; se remite a la comunicación o decisión correspondiente.
- Caso académico ficticio con hitos procesales.
- Selección didáctica de casos clave junto con el índice de referencias del proyecto, sin presentarlo como catálogo exhaustivo.
- Práctica encadenada de admisibilidad: competencia, recursos internos o excepciones, plazo según la ruta, duplicación internacional y caracterización inicial, con fuentes y repaso por etapa.
- Preguntas de práctica y un escenario sobre excepciones preliminares con consecuencias explicadas.
- Continuidad de lectura privada en el dispositivo y versión instalable con caché sin conexión.
- Fuentes normativas oficiales.

La cronología del caso Arcadia identifica sus discrepancias internas y no inventa hechos para resolverlas. Las referencias de la biblioteca son una ayuda de estudio; comprueba el texto, fecha y alcance de cada decisión en la fuente oficial antes de citarla.

## Ejecutar localmente

No requiere compilaci&oacute;n ni dependencias. Para cargar el mapa interactivo y habilitar el modo sin conexi&oacute;n, sirve la gu&iacute;a por HTTP:

```sh
python3 -m http.server 8000
```

Después visita http://localhost:8000.

El modo sin conexión y la instalación requieren servir la guía por `localhost` o HTTPS; abrir el archivo directamente no activa el service worker.

## Archivos principales

- `index.html`: estructura y contenido de la guía.
- `assets/styles-v26.css`: identidad visual, navegación adaptable, vistas móviles y estados accesibles.
- `assets/app-v41.js`: recorrido, caso, reloj, práctica, búsquedas, contador independiente y enlaces contextuales del diccionario.
- `assets/map-connections-v6.js`: capas del mapa geográfico y enlaces entre Estados, procedimiento y jurisprudencia.
- `assets/glosario.js`: siglas y conceptos con explicaciones claras, relaciones internas y fuentes oficiales.
- `assets/jurisprudencia.js`: referencias jurisprudenciales estructuradas.
- `assets/opiniones.js`: índice seleccionado de expedientes consultivos, incluida una decisión de no responder con enlaces a las Series A oficiales.
- `manifest.webmanifest` y `sw.js`: instalación y caché local para lectura sin conexión.
- `scripts/validate-site.mjs`: verifica rutas internas, número de estaciones, preguntas y archivos de la caché.
- `.github/workflows/pages.yml`: publicación en GitHub Pages.

Los documentos fuente locales no forman parte de la publicación. No añadirlos al repositorio.

## Arquitectura didáctica y referencias

La arquitectura editorial de [Atlas ONU, de Sukima Labs](https://github.com/sukima-labs/atlasonu) inspira este atlas hermano: misma familia DejaVu Sans distribuida por el manual de marca, escala tipográfica compacta, franja de contexto, portada alineada arriba, lectura fácil, búsqueda con ejemplos y navegación inferior móvil. La ruta mantiene su propio mapa de Comisión, Corte, escritos y plazos. El patrón de siglas y glosario de Atlas también se adapta: las primeras apariciones por bloque se pueden activar, abren una explicación breve y enlazan con la ficha del diccionario, el tema de la guía y la fuente oficial.

Para la práctica se estudiaron patrones públicos de [Learn Git Branching](https://github.com/pcottle/learnGitBranching) (acción con respuesta visual), [WiseCases](https://github.com/ihkarise/wisecases) (caso por etapas y pistas) y [Choices](https://github.com/drhycheung/Choices) (decisiones con consecuencias y explicación). Se adaptan las ideas pedagógicas, no se copia código ni contenido de esos proyectos.

## Fuentes primarias

- [Convención Americana sobre Derechos Humanos](https://www.oas.org/dil/esp/tratados_B-32_convencion_americana_sobre_derechos_humanos.htm)
- [Reglamento de la Corte IDH](https://www.corteidh.or.cr/reglamento.cfm)
- [Reglamento de la CIDH](https://www.oas.org/es/cidh/jsForm/?File=%2Fes%2Fcidh%2Fmandato%2Fbasicos%2Freglamentocidh.asp)
- [Buscador de casos y sentencias de la Corte IDH](https://www.corteidh.or.cr/casos_sentencias.cfm)
- [Catálogo oficial de opiniones consultivas de la Corte IDH](https://www.corteidh.or.cr/opiniones_consultivas.cfm?lang=es)

## Licencia

MIT para el código y el contenido original del proyecto. No cubre normas, sentencias ni materiales de terceros. Los archivos de identidad en `assets/brand/` se rigen por las reglas de marca de Sukima Labs; la licencia incluida allí se aplica a las fuentes DejaVu Sans.

## Identidad visual Sukima Labs

La interfaz aplica las reglas digitales pertinentes de la [entrega de marca v1.1](https://github.com/sukima-labs/sukima-labs.github.io/tree/main/marca): DejaVu Sans alojada en este repositorio, paleta oficial grafito `#10131C`, cian `#14C6D4`, violeta `#7148F5` y marfil `#F5F4F0`, e isotipos oficiales sin alterar. El tema claro usa violeta para texto, enlaces, acciones y foco; reserva el cian para detalles decorativos. El tema oscuro usa cian con texto grafito para esos estados. Se conserva espacio libre alrededor del isotipo y su tamaño no baja de 32 px.

La escala de espaciado, radios y componentes no está definida por el manual de marca; se establece para esta guía y se comprueba en sus estados interactivos. La tipografía y los isotipos se sirven desde `assets/brand/`; la licencia de DejaVu Sans acompaña los archivos.


## Navegación y contenidos nuevos

La aplicación muestra una vista temática a la vez: Panorama, OEA, Orientador, Sistema, Procedimiento, Plazos, Caso guiado, Casos clave, Opiniones consultivas, Noticias, Diccionario, Practicar y Fuentes. La barra lateral conserva el menú completo y la barra móvil prioriza las rutas que se usan con más frecuencia.

Las opiniones emitidas están separadas de las solicitudes en curso. Las noticias enlazan al comunicado original y explican su relevancia procesal. La selección de casos es para estudiar; el buscador oficial sigue siendo el catálogo completo de sentencias.

### Guía de patrones didácticos

La [auditoría metodológica integral](docs/AUDITORIA-METODOLOGICA-INTEGRAL.md) registra errores, omisiones y tareas de corrección en las 25 rutas. Incluye un [inventario reproducible](docs/AUDITORIA-METODOLOGICA-INVENTARIO.json); la revisión no certifica el cotejo íntegro de todos los documentos jurídicos externos.

`docs/PEDAGOGIA.md` resume qué mecánicas educativas públicas se revisaron, cómo se adaptan a las rutas CIDH y Corte, qué se añadió al simulador y qué módulos conviene construir después. No contiene notas, nombres ni transcripciones de clase.

## Seguimiento de la auditoría del 24-11-2026

El [registro de correcciones y pendientes](docs/SEGUIMIENTO-AUDITORIA-2026-11-24.md) distingue lo corregido, lo parcial y lo que requiere cotejo jurídico documental. La [auditoría original](docs/AUDITORIA-METODOLOGICA-INTEGRAL.md) se conserva como diagnóstico histórico; no describe por sí sola el estado publicado actual.

Esta revisión incorpora guías de propósito, uso, tarea y alcance en las 25 pantallas; corrige reglas de excepciones, recusación, reparaciones, prórrogas y resultados CIDH; diferencia los tres niveles de competencia y añade escritura argumentativa con pautas de autoevaluación. Se documentan los patrones adaptados de Atlas ONU y sus límites. No se ha cotejado íntegramente cada una de las 125 referencias jurisprudenciales.

Archivos nuevos: `assets/pedagogia-v1.js` (orden de opciones conservando identidad) y `assets/guia-metodologica-v1.js` (guías por ruta, mecanismos y talleres). Los niveles avanzados no califican automáticamente la calidad del argumento escrito.

Verificación reproducible:

```sh
node scripts/validate-site.mjs
node scripts/test-deadline-clock.mjs
node scripts/test-glossary-search.mjs
node scripts/test-methodology.mjs
```

Con un servidor HTTP activo, Playwright y Chromium disponibles externamente, `node scripts/browser-methodology.cjs` prueba navegación de las 25 vistas, contexto del explorador, niveles, ejercicios y exportación en 390 y 1280 px. Configuración opcional: `ATLAS_PLAYWRIGHT_MODULE`, `ATLAS_CHROMIUM_PATH` y `ATLAS_TEST_URL`. No se añaden dependencias al sitio estático.
