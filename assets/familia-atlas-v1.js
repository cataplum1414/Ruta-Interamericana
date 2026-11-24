'use strict';
// Comportamientos comunes de la familia Atlas, con idiomas realmente disponibles.
(() => {
  const selectors=[...document.querySelectorAll('[data-atlas-language]')];
  function sync(){const english=location.hash.split('?')[0]==='#english';selectors.forEach(select=>{select.value=english?'en':'es';});}
  selectors.forEach(select=>select.addEventListener('change',()=>{if(select.value==='en')location.hash='english';else if(location.hash.split('?')[0]==='#english')location.hash='inicio';sync();}));
  window.addEventListener('hashchange',sync);sync();
  const clear=document.getElementById('glossaryClear'),input=document.getElementById('glossarySearch');
  const reflect=()=>{clear.hidden=!input.value.trim();};input.addEventListener('input',reflect);clear.addEventListener('click',reflect);window.addEventListener('hashchange',reflect);reflect();
})();
