'use strict';
// Comportamientos comunes de la familia Atlas, con idiomas realmente disponibles.
(() => {
  const selectors=[...document.querySelectorAll('[data-atlas-language]')];
  const languageButtons=[...document.querySelectorAll('[data-atlas-language-choice]')];
  function setLanguage(language){if(language==='en')location.hash='english';else if(location.hash.split('?')[0]==='#english')location.hash='inicio';sync();}
  function sync(){const language=location.hash.split('?')[0]==='#english'?'en':'es';selectors.forEach(select=>{select.value=language;});languageButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.atlasLanguageChoice===language)));}
  selectors.forEach(select=>select.addEventListener('change',()=>setLanguage(select.value)));
  languageButtons.forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.atlasLanguageChoice)));
  window.addEventListener('hashchange',sync);sync();
  const clear=document.getElementById('glossaryClear'),input=document.getElementById('glossarySearch');
  const reflect=()=>{clear.hidden=!input.value.trim();};input.addEventListener('input',reflect);clear.addEventListener('click',reflect);window.addEventListener('hashchange',reflect);reflect();
})();
