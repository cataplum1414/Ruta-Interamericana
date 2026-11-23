# Ruta Interamericana
## Del hecho a la sentencia

**Atlas visual e interactivo del procedimiento de petición individual ante la CIDH y del litigio contencioso ante la Corte IDH.**

**Sitio web:** https://cataplum1414.github.io/Ruta-Interamericana/  
**Repositorio público:** https://github.com/cataplum1414/Ruta-Interamericana

> Proyecto académico independiente. Es un recurso de aprendizaje: no sustituye la Convención, los reglamentos o asesoría jurídica para litigios reales.

## Propósito

Esta guía permite integrar dos clases complementarias del Máster en Protección Internacional de los Derechos Humanos de la Universidad de Alcalá:

- **Dante Negro:** Sistema Interamericano, artículos 44 a 51 CADH, petición, legitimación, competencia de la CIDH, admisibilidad, agotamiento, fondo y medidas.
- **Andrés González Serrano:** Corte IDH, artículos 61 y 62, sometimiento, víctimas del artículo 35 del Reglamento, ESAP, contestación, excepciones preliminares, control de legalidad, prueba, audiencia, sentencia, reparaciones y cumplimiento.

La pregunta que atraviesa todo el sitio es: **quién actúa, ante qué órgano, con qué escrito, dentro de qué plazo y por qué**.

## Ver el sitio

**https://cataplum1414.github.io/Ruta-Interamericana/**

La publicación se realiza mediante GitHub Pages, desde la rama main con el flujo de GitHub Actions incluido. Si el sitio aún no aparece, activa una sola vez en **Settings → Pages → Build and deployment → Source: GitHub Actions**. Revisa **Actions → Deploy GitHub Pages**.

## Trabajar en CLI

Clone: https://github.com/cataplum1414/Ruta-Interamericana.git

Comandos:
- git clone https://github.com/cataplum1414/Ruta-Interamericana.git
- cd Ruta-Interamericana
- python3 -m http.server 8000

Después abre http://localhost:8000. También es posible abrir directamente index.html. No requiere compilación, Node, bibliotecas ni base de datos.

## Contenido interactivo

1. **Dieciocho estaciones:** hechos nacionales, recursos internos, petición, CIDH, sometimiento, Corte, sentencia y supervisión.
2. **Dos docentes, un sistema:** correspondencia entre lo explicado por Dante y Andrés.
3. **Nueve distinciones:** Declaración vs. Convención, CIDH vs. Corte, peticionario vs. víctima, admisibilidad vs. fondo, informe vs. sentencia, entre otras.
4. **Reloj de plazos:** doce actuaciones, identificando el acto que activa cada término.
5. **Caso Emilio Acosta vs. Arcadia:** ocho hitos del expediente académico ficticio.
6. **Laboratorio jurídico:** diez preguntas con explicación del razonamiento.
7. **Biblioteca primaria:** normas y portales oficiales.

## Archivos

- index.html: composición editorial de la interfaz.
- assets/styles.css: diseño responsive, tipografía, identidad y animaciones.
- assets/app.js: recorrido, reglas pedagógicas, datos del caso, reloj y evaluación.
- .github/workflows/pages.yml: despliegue automático con GitHub Actions.
- .nojekyll: publicación estática sin procesamiento Jekyll.
- README.md: documentación.
- LICENSE: licencia MIT para el contenido original.

## Advertencia sobre los plazos

El reloj calcula fechas **orientativas** con meses calendario o días naturales. El vencimiento procesal real exige verificar notificaciones, reglas de cómputo, suspensiones, prórrogas y excepciones. La aplicación **no determina vencimientos judiciales**.

## Rigor y procedencia

El atlas se centra en las peticiones individuales **bajo la Convención Americana**. El procedimiento bajo la Declaración Americana para los Estados miembros de la OEA no partes en la CADH se diferencia, pero no se desarrolla aquí como una vía contenciosa ante Corte.

El caso Arcadia es hipotético. La cronología del supuesto distingue sometimiento en 2024 y notificación en 2025; también anuncia cuatro excepciones preliminares y enumera tres. No se añaden hechos no documentados para cubrir esas discrepancias.

La comparación docente refleja contenidos académicos trabajados y **no se presenta como transcripción literal** de intervenciones de los profesores. No se reproducen archivos docentes de terceros.

## Fuentes primarias

- Convención Americana: https://www.oas.org/dil/esp/tratados_b-32_convencion_americana_sobre_derechos_humanos.htm
- Reglamento de la Corte IDH: https://www.corteidh.or.cr/reglamento.cfm
- Reglamento CIDH: https://www.oas.org/es/cidh/mandato/Basicos/reglamentoCIDH.asp
- CIDH: https://www.oas.org/es/cidh/
- Corte IDH: https://www.corteidh.or.cr/

## Siguientes líneas de trabajo

El proyecto está listo para desarrollo en CLI: ampliar el árbol interactivo con decisiones y consecuencias, incorporar jurisprudencia por excepción preliminar, escenarios interactivos para víctimas y agentes estatales y pruebas de accesibilidad.

## Licencia

MIT para código y contenido original. No se reclaman derechos sobre materiales normativos o docentes externos.
