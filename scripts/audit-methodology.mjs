import {readFile, writeFile} from 'node:fs/promises';
import vm from 'node:vm';
const app=await readFile('assets/app-v41.js','utf8');
const html=await readFile('index.html','utf8');
const context={window:{}};
for(const file of ['glosario.js','jurisprudencia.js','opiniones.js','organos.js']) vm.runInNewContext(await readFile('assets/'+file,'utf8'),context);
function block(name,next){
  const start=app.indexOf('const '+name+'='), end=app.indexOf('\nconst '+next,start);
  if(start<0||end<0) throw new Error('Missing audit block: '+name);
  const scope={};vm.runInNewContext(app.slice(start,end)+'\nthis.result='+name,scope);return scope.result;
}
const checks=block('stageChecks','contrasts'), nodes=block('caseScenarioNodes','caseScenarioPaths');
const cases=context.window.RI_JURISPRUDENCIA;
const sourceGroups=new Map();
cases.forEach(item=>sourceGroups.set(item.url,[...(sourceGroups.get(item.url)||[]),item.title]));
const report={
  auditedCommit:'80aa623',auditDate:'2026-11-24',
  scope:'Inventario y diagnóstico del contenido activo; no certifica exhaustividad jurídica ni aprendizaje de usuarios.',
  routes:[...html.matchAll(/<section id="([^"]+)"(?: lang="[^"]+")? data-route-page/g)].map(x=>x[1]),
  counts:{glossary:context.window.RI_GLOSARIO.length,jurisprudenceReferences:cases.length,advisoryRecords:context.window.RI_OPINIONES.length,organs:context.window.RI_ORGANOS.length,stationChecks:checks.length,caseDecisions:Object.keys(nodes).length},
  assessment:{stationAnswerPositions:checks.map(x=>x.answer),caseAnswerPositions:Object.fromEntries(Object.entries(nodes).map(([id,x])=>[id,x.options.findIndex(o=>o.correct)])),caseFirstOptionCorrect:Object.values(nodes).filter(x=>x.options[0].correct).length},
  documentaryMetadata:{referencesWithoutDecisionDate:cases.filter(x=>!x.date&&!x.year).length,referencesWithoutParagraphField:cases.filter(x=>!x.paragraph&&!x.paragraphs).length,sharedUrls:[...sourceGroups].filter(([,titles])=>titles.length>1).map(([url,titles])=>({url,titles}))},
  glossarySourceMissing:context.window.RI_GLOSARIO.filter(x=>!x.source).map(x=>x.id)
};
await writeFile('docs/AUDITORIA-METODOLOGICA-INVENTARIO.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({routes:report.routes.length,...report.counts,caseFirstOptionCorrect:report.assessment.caseFirstOptionCorrect,...report.documentaryMetadata,sharedUrls:report.documentaryMetadata.sharedUrls.length},null,2));
