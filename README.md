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
7. Busca en la biblioteca de jurisprudencia por nombre, país o tema y abre la fuente oficial disponible.
8. Busca siglas y conceptos en el diccionario; también puedes tocar los términos subrayados para abrir su explicación y seguir los enlaces relacionados.
9. Marca las estaciones que ya estudiaste. La guía recuerda tu última estación y tu avance en este navegador, sin crear una cuenta.
10. En un navegador compatible, abre el menú para instalar la guía. Tras la primera carga, el contenido y los ejercicios disponibles se pueden consultar sin conexión; las fuentes oficiales externas requieren internet.

## Contenido

- Mapa institucional interactivo para explorar los &oacute;rganos de la OEA y distinguir la CIDH de la Corte aut&oacute;noma.
- Mapa geogr&aacute;fico con b&uacute;squeda, zoom, lista accesible, 34 Estados miembros actuales y Nicaragua como antiguo Estado parte desde el 19 de noviembre de 2023.

- Vistas independientes por tema, navegables desde el men&uacute; y con accesos directos a Inicio, OEA, Ruta, Mapa y Men&uacute; en m&oacute;vil.
- Búsqueda global de etapas, preguntas procesales, decisiones, plazos, fuentes, ejercicios, siglas y conceptos, con ejemplos listos para abrir.
- Diccionario buscable de siglas y conceptos conectado con las explicaciones, las etapas y las fuentes oficiales.
- Orientador «¿En qué momento está el caso?» con rutas hacia los pasos relevantes.
- Recorrido guiado por el procedimiento interamericano con 18 decisiones interactivas y explicaciones inmediatas, filtros por fase y un patrón común: qué pasa, quién actúa, documento, plazo y siguiente paso.
- Páginas independientes para la CIDH y la Corte IDH, además de una página puente que explica cómo puede pasar un asunto de un órgano al otro.
- Reloj de plazos orientativos.
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
- `assets/styles-v20.css`: identidad visual, navegación adaptable, vistas móviles y estados accesibles.
- `assets/app-v33.js`: recorrido, caso, reloj, práctica, búsquedas, contador independiente y enlaces contextuales del diccionario.
- `assets/glosario.js`: siglas y conceptos con explicaciones claras, relaciones internas y fuentes oficiales.
- `assets/jurisprudencia.js`: referencias jurisprudenciales estructuradas.
- `assets/opiniones.js`: catálogo de opiniones consultivas emitidas con enlaces a las Series A oficiales.
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

`docs/PEDAGOGIA.md` resume qué mecánicas educativas públicas se revisaron, cómo se adaptan a las rutas CIDH y Corte, qué se añadió al simulador y qué módulos conviene construir después. No contiene notas, nombres ni transcripciones de clase.
