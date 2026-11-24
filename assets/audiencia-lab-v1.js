/* Taller anónimo de procedimiento oral basado en el Reglamento oficial de la Corte IDH. */
(()=>{
  const steps=[
    {title:'La Corte pide la lista definitiva',context:'En los escritos iniciales ya se ofrecieron declaraciones de presuntas víctimas, testigos y peritos. La Corte solicita confirmar quiénes mantienen ese ofrecimiento.',question:'¿Qué deben precisar las partes en su lista definitiva?',source:'Reglamento de la Corte IDH, artículo 46',options:[
      {text:'Confirmar o retirar cada ofrecimiento e indicar quién debería declarar en audiencia y quién podría hacerlo por affidávit.',correct:true,feedback:'La lista confirma o desiste de ofrecimientos previos y propone cuáles declaraciones conviene recibir en audiencia o ante fedatario. La Corte decide después cómo recibirlas.'},
      {text:'Añadir cualquier declarante nuevo, sin explicar su relación con los escritos anteriores.',correct:false,hint:'La lista definitiva trabaja sobre declaraciones ofrecidas oportunamente.'},
      {text:'Elegir de manera vinculante quién será citado y fijar el orden de la audiencia.',correct:false,hint:'Las partes indican su posición; la decisión sobre comparecencia y formato corresponde a la Corte o su Presidencia.'}
    ]},
    {title:'La contraparte recibe la lista',context:'La lista confirmada se transmite a la otra parte. Una declaración testimonial y un dictamen pericial tienen mecanismos de objeción relacionados, pero no idénticos.',question:'¿Qué plazo y distinción debes revisar?',source:'Reglamento de la Corte IDH, artículos 46–48',options:[
      {text:'La objeción al testigo y la recusación del perito se plantean dentro de los diez días siguientes a recibir la lista definitiva que confirma el ofrecimiento; para el perito debe existir una causal reglamentaria.',correct:true,feedback:'El artículo 47 prevé diez días para objetar testigos y el artículo 48 prevé diez días para recusar peritos, con causales específicas. No son una objeción genérica idéntica.'},
      {text:'Toda observación puede reservarse hasta después de la audiencia, pues no hay plazo reglamentario.',correct:false,hint:'Revisa qué plazo corre al recibirse la lista definitiva.'},
      {text:'El mismo plazo se cuenta siempre desde la presentación del ESAP, aunque la lista llegue después.',correct:false,hint:'La regla toma como referencia la recepción de la lista definitiva que confirma el ofrecimiento.'}
    ]},
    {title:'La Presidencia organiza las declaraciones',context:'Se presentaron observaciones, objeciones o recusaciones. La audiencia no es automática ni la lista decide por sí sola el formato de cada declaración.',question:'¿Qué puede determinar la resolución de la Corte o su Presidencia?',source:'Reglamento de la Corte IDH, artículo 50.1',options:[
      {text:'Resolver esos planteamientos, definir el objeto de cada declaración, requerir affidávits pertinentes y convocar a audiencia si lo estima necesario.',correct:true,feedback:'La resolución organiza qué se recibirá y cómo. Las declaraciones deben mantenerse dentro del objeto fijado, salvo modificación excepcional y fundada conforme a la regla.'},
      {text:'Aceptar automáticamente todos los declarantes y todos los temas propuestos por las partes.',correct:false,hint:'La Corte define el objeto de las declaraciones y puede decidir si convoca a quienes participarán en audiencia.'},
      {text:'Reemplazar las pruebas por una lista de temas que ya resuelve el fondo.',correct:false,hint:'Esta decisión organiza la recepción de declaraciones; no determina por sí misma la responsabilidad.'}
    ]},
    {title:'Comienza la audiencia',context:'La Presidencia convocó a quienes deben comparecer. La audiencia oral complementa el expediente y se desarrolla bajo dirección judicial.',question:'¿Quién inicia el interrogatorio de una persona declarante?',source:'Reglamento de la Corte IDH, artículos 51–52',options:[
      {text:'Quien propuso esa declaración; las preguntas se realizan bajo moderación de la Presidencia y los jueces pueden preguntar.',correct:true,feedback:'El Reglamento prevé que comience quien propuso al declarante. La Presidencia modera y los jueces pueden formular las preguntas pertinentes.'},
      {text:'Siempre la Comisión, incluso si no propuso a la persona.',correct:false,hint:'La Comisión tiene una facultad específica respecto de ciertos peritajes; no inicia siempre el interrogatorio.'},
      {text:'La persona declarante, con una exposición libre sobre cualquier tema del caso.',correct:false,hint:'La declaración tiene un objeto fijado por la Corte y las preguntas se conducen bajo moderación de la Presidencia.'}
    ]},
    {title:'Termina la fase oral',context:'Después de la audiencia, las partes pueden cerrar su argumentación por escrito. El calendario depende de la decisión procesal del caso.',question:'¿Cómo se determina el plazo de los alegatos finales escritos?',source:'Reglamento de la Corte IDH, artículo 56',options:[
      {text:'Lo determina la Presidencia; la Comisión puede presentar observaciones finales escritas dentro de ese plazo si lo estima conveniente.',correct:true,feedback:'El artículo 56 no establece un número universal de días. La Presidencia fija el plazo para los escritos finales de las partes y, si la Comisión lo considera conveniente, sus observaciones.'},
      {text:'Siempre son diez días desde la última pregunta de los jueces.',correct:false,hint:'No confundas el plazo para objetar declarantes con el término de alegatos finales.'},
      {text:'La audiencia reemplaza los alegatos finales y nunca pueden presentarse por escrito.',correct:false,hint:'El Reglamento contempla una fase final escrita posterior a la audiencia.'}
    ]}
  ];
  const byId=id=>document.getElementById(id);
  const card=byId('hearingLabCard'),progress=byId('hearingLabProgress'),bar=byId('hearingLabProgressBar');
  if(!card||!progress||!bar)return;
  let index=0,firstTryCorrect=0,answered=false,attemptedWrong=false;
  const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function render(){
    if(index>=steps.length){
      progress.textContent='Práctica completada · '+firstTryCorrect+' de '+steps.length+' correctas al primer intento';bar.style.width='100%';
      card.innerHTML='<div class="hearing-lab-finish"><p class="section-tag">SECUENCIA COMPLETA</p><h4>De la lista a los alegatos finales</h4><p>La ruta pasó por cinco decisiones distintas: confirmar declarantes, permitir observaciones, definir objeto y formato, conducir la audiencia y fijar el cierre escrito.</p><a href="#recorrido">Volver a las estaciones de la Corte →</a></div>';return;
    }
    const step=steps[index];answered=false;attemptedWrong=false;
    progress.textContent='Decisión '+(index+1)+' de '+steps.length+' · '+firstTryCorrect+' correctas al primer intento';bar.style.width=(index/steps.length*100)+'%';
    card.innerHTML='<div class="hearing-lab-step"><p class="hearing-lab-kicker">MOMENTO '+String(index+1).padStart(2,'0')+'</p><h4>'+esc(step.title)+'</h4><p class="hearing-lab-context">'+esc(step.context)+'</p><fieldset class="hearing-lab-options"><legend>'+esc(step.question)+'</legend>'+step.options.map((o,i)=>'<button class="hearing-lab-option" type="button" data-hearing-choice="'+i+'">'+esc(o.text)+'</button>').join('')+'</fieldset><div class="hearing-lab-feedback" id="hearingLabFeedback" aria-live="polite" hidden></div><div class="hearing-lab-step-actions"><a href="https://www.corteidh.or.cr/reglamento.cfm?lang=es" target="_blank" rel="noopener noreferrer">'+esc(step.source)+' ↗</a><button class="button primary" type="button" id="hearingLabNext" disabled>'+(index===steps.length-1?'Ver síntesis':'Siguiente decisión')+' →</button></div></div>';
    card.querySelectorAll('[data-hearing-choice]').forEach(button=>button.addEventListener('click',()=>choose(Number(button.dataset.hearingChoice))));
    byId('hearingLabNext').addEventListener('click',()=>{if(!answered)return;index++;render();});
  }
  function choose(choice){
    const step=steps[index],option=step.options[choice],feedback=byId('hearingLabFeedback');
    card.querySelectorAll('[data-hearing-choice]').forEach(button=>{button.disabled=option.correct;button.setAttribute('aria-pressed',String(Number(button.dataset.hearingChoice)===choice));});
    feedback.hidden=false;
    if(option.correct){if(!answered&&!attemptedWrong)firstTryCorrect++;answered=true;feedback.className='hearing-lab-feedback is-correct';feedback.innerHTML='<strong>Correcto.</strong> '+esc(option.feedback)+'<span>'+esc(step.source)+'.</span>';byId('hearingLabNext').disabled=false;}
    else{attemptedWrong=true;feedback.className='hearing-lab-feedback is-review';feedback.innerHTML='<strong>Vuelve a intentarlo.</strong> '+esc(option.hint)+'<span>Revisa el artículo enlazado antes de elegir otra vez.</span>';}
  }
  byId('hearingLabRestart')?.addEventListener('click',()=>{index=0;firstTryCorrect=0;render();card.scrollIntoView({block:'nearest',behavior:'smooth'});});
  render();
})();
