import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const context={window:{}};
vm.runInNewContext(await readFile('assets/pedagogia-v1.js','utf8'),context);
const order=context.window.RI_PEDAGOGIA.order;
const options=[{id:'a',correct:true,feedback:'A'},{id:'b',correct:false,feedback:'B'},{id:'c',correct:false,feedback:'C'}];
for(let seed=0;seed<21;seed++){
 const result=order(options,seed);
 assert.equal(result.length,3);assert.equal(new Set(result.map(x=>x.id)).size,3);
 assert.equal(result.filter(x=>x.correct).length,1);
 assert.equal(result.find(x=>x.correct).feedback,'A');
 assert.deepEqual(result.map(x=>x.id),order(options,seed).map(x=>x.id));
}
const app=await readFile('assets/app-v41.js','utf8');
const guide=app.match(/const stationGuide=\[([\s\S]*?)\r?\n\];/)?.[1];
assert.ok(guide.includes('no suspenden el fondo'));
assert.ok(guide.includes('inadmisibilidad'));
assert.ok(!guide.includes('Resueltas las cuestiones procesales pertinentes'));
const glossaryContext={window:{}};vm.runInNewContext(await readFile('assets/glosario.js','utf8'),glossaryContext);
const recusal=glossaryContext.window.RI_GLOSARIO.find(x=>x.id==='recusacion');
assert.match(recusal.definition,/recusación de peritos/);assert.match(recusal.use,/48.2/);
const html=await readFile('index.html','utf8');
assert.ok(html.indexOf('assets/pedagogia-v1.js')<html.indexOf('assets/app-v41.js'));
const methods=await readFile('assets/guia-metodologica-v1.js','utf8');
const routes=[...html.matchAll(/<section id="([^"]+)"(?: lang="[^"]+")? data-route-page/g)].map(x=>x[1]);
assert.equal(routes.length,25);routes.forEach(id=>assert.ok(new RegExp('\\b'+id+':\\[').test(methods),id));
console.log('Methodology: stable option identity, 25 purpose guides, recusal and non-suspensive objections passed.');
