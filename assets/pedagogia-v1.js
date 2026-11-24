'use strict';
// Stable ordering keeps feedback attached to its option when a learner reviews a decision.
window.RI_PEDAGOGIA={
  order(options,seed=0){const offset=(typeof seed==='number'?seed:[...seed].reduce((sum,c)=>sum+c.charCodeAt(0),0))%options.length;return options.map((_,i)=>options[(i+offset)%options.length]);},
  rubric:['Conclusión provisional y órgano','Instrumento y artículo que atribuyen competencia','Hechos y fechas necesarios','Límite o argumento contrario','Fuente y dato que aún falta comprobar']
};
