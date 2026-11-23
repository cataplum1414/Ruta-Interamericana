# Ruta Interamericana

## Del hecho a la sentencia

Guía visual e interactiva para aprender el procedimiento de petición individual ante la Comisión Interamericana de Derechos Humanos (CIDH) y el trámite contencioso ante la Corte Interamericana de Derechos Humanos.

**Sitio:** https://cataplum1414.github.io/Ruta-Interamericana/
**Repositorio:** https://github.com/cataplum1414/Ruta-Interamericana

Proyecto educativo independiente, editado por Sukima Labs. No es una publicación oficial ni está afiliado a la CIDH, la Corte IDH, la OEA, ONU Mujeres o la Universidad de Alcalá. No sustituye la Convención Americana, los reglamentos ni la asesoría jurídica para casos reales.

## Cómo usar la guía

1. Sigue las 18 estaciones para entender qué ocurre desde los hechos y los recursos internos hasta la supervisión de cumplimiento.
2. En cada estación revisa el objetivo, el documento o resultado esperado y el paso que sigue.
3. Consulta el mapa para distinguir las funciones de la CIDH y la Corte IDH.
4. Usa el reloj de plazos como orientación y verifica cada término en la norma aplicable.
5. Explora el caso ficticio de Emilio Acosta vs. Arcadia y practica con preguntas explicadas.
6. Busca en la biblioteca de jurisprudencia por nombre, país o tema y abre la fuente oficial disponible.

## Contenido

- Página extensa con menú persistente agrupado por orientación, procedimiento y práctica; navegación compacta en móvil.
- Búsqueda global de etapas, preguntas procesales y decisiones.
- Orientador «¿En qué momento está el caso?» con rutas hacia los pasos relevantes.
- Recorrido guiado por el procedimiento interamericano con filtros por fase y un patrón común: qué pasa, quién actúa, documento, plazo y siguiente paso.
- Mapa de funciones y etapas ante la CIDH y la Corte IDH.
- Reloj de plazos orientativos.
- Caso académico ficticio con hitos procesales.
- Biblioteca de decisiones identificadas en los materiales de estudio disponibles para este proyecto. Los enlaces conducen al buscador oficial de la Corte cuando no se ha verificado un enlace directo a la sentencia.
- Preguntas de práctica y un escenario de decisión con consecuencias explicadas.
- Fuentes normativas oficiales.

La cronología del caso Arcadia identifica sus discrepancias internas y no inventa hechos para resolverlas. Las referencias de la biblioteca son una ayuda de estudio; comprueba el texto, fecha y alcance de cada decisión en la fuente oficial antes de citarla.

## Ejecutar localmente

No requiere compilación ni dependencias. Abre `index.html` o ejecuta:

```sh
python3 -m http.server 8000
```

Después visita http://localhost:8000.

## Archivos principales

- `index.html`: estructura y contenido de la guía.
- `assets/styles.css`: identidad visual, diseño adaptable y estados accesibles.
- `assets/app.js`: recorrido, caso, reloj, práctica y búsqueda jurisprudencial.
- `assets/jurisprudencia.js`: referencias jurisprudenciales estructuradas.
- `.github/workflows/pages.yml`: publicación en GitHub Pages.

Los documentos fuente locales no forman parte de la publicación. No añadirlos al repositorio.

## Arquitectura didáctica y referencias

La navegación por áreas y la identidad editorial toman como referencia la arquitectura de [Atlas ONU, de Sukima Labs](https://github.com/sukima-labs/atlasonu), adaptada como recorrido largo con anclas para que cada fase permanezca visible y enlazable. La página usa lectura fácil, explicación progresiva y fuentes a la vista.

Para la práctica se estudiaron patrones públicos de [Learn Git Branching](https://github.com/pcottle/learnGitBranching) (acción con respuesta visual), [WiseCases](https://github.com/ihkarise/wisecases) (caso por etapas y pistas) y [Choices](https://github.com/drhycheung/Choices) (decisiones con consecuencias y explicación). Se adaptan las ideas pedagógicas, no se copia código ni contenido de esos proyectos.

## Fuentes primarias

- [Convención Americana sobre Derechos Humanos](https://www.oas.org/dil/esp/tratados_B-32_convencion_americana_sobre_derechos_humanos.htm)
- [Reglamento de la Corte IDH](https://www.corteidh.or.cr/reglamento.cfm)
- [Reglamento de la CIDH](https://www.oas.org/es/cidh/jsForm/?File=%2Fes%2Fcidh%2Fmandato%2Fbasicos%2Freglamentocidh.asp)
- [Buscador de casos y sentencias de la Corte IDH](https://www.corteidh.or.cr/casos_sentencias.cfm)

## Licencia

MIT para el código y el contenido original del proyecto. Esta licencia no cubre normas, sentencias ni materiales de terceros.
