const assert=require('node:assert/strict');
const {chromium}=require(process.env.ATLAS_PLAYWRIGHT_MODULE||'playwright');
const url=process.env.ATLAS_TEST_URL||'http://127.0.0.1:8769/';
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.ATLAS_CHROMIUM_PATH?{executablePath:process.env.ATLAS_CHROMIUM_PATH}:{})});
 try{for(const width of [390,1280]){
  const page=await browser.newPage({viewport:{width,height:844},serviceWorkers:'block'}),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.goto(url+'?sinvisita=1#inicio');await page.waitForSelector('[data-method-guide="inicio"]');
  const routes=await page.locator('[data-route-page]').evaluateAll(nodes=>nodes.map(node=>node.id));
  assert.equal(routes.length,25);
  for(const route of routes){await page.evaluate(id=>{location.hash=id;},route);await page.waitForFunction(id=>!document.getElementById(id).hidden,route);assert.equal(await page.locator('#'+route+' [data-method-guide="'+route+'"]').count(),1);}
  await page.evaluate(()=>{location.hash='competencia';});await page.waitForSelector('#competenceScenario');
  await page.locator('#competenceTreaty').selectOption('belem');await page.locator('#competenceOrgan').selectOption('court');assert.match(await page.locator('#competenceDetail').textContent(),/Campo Algodonero/);
  await page.locator('#competenceTreaty').selectOption('opic');assert.match(await page.locator('#competenceDetail').textContent(),/2011/);assert.equal(await page.locator('#competenceOrgan').inputValue(),'court');
  await page.locator('#competenceLevel').selectOption({index:1});assert.ok(await page.locator('#competenceAnalysis').isVisible());assert.equal(await page.locator('#competenceAdvanced').isVisible(),false);
  await page.locator('[name="competenceAnswer"][value="cidh"]').check();await page.locator('#competenceCheck').click();assert.match(await page.locator('#competenceFeedback').textContent(),/Selecciona instrumento/);
  await page.locator('#competenceTaskTreaty').selectOption('belem');await page.locator('#competenceTaskGround').selectOption('belem12');await page.locator('#competenceTaskLimit').selectOption('material');await page.locator('#competenceCheck').click();assert.match(await page.locator('#competenceFeedback').textContent(),/Contraste de selecciones/);
  await page.locator('#competenceLevel').selectOption({index:2});await page.locator('#competenceCheck').click();assert.match(await page.locator('#competenceFeedback').textContent(),/Formula un argumento/);
  for(const field of ['For','Against','Evidence'])await page.locator('#competenceArgument'+field).fill('Argumento de práctica: revisar norma, hechos y documento.');
  await page.locator('#competenceCheck').click();assert.match(await page.locator('#competenceFeedback').textContent(),/Autoevaluación/);
  const positions=await page.evaluate(()=>Object.values(caseScenarioNodes).map(node=>node.options.findIndex(option=>option.correct)));
  assert.ok(new Set(positions).size===3);assert.ok(positions.filter(position=>position===0).length<12);
  await page.evaluate(()=>{location.hash='laboratorio';});await page.waitForSelector('#argumentReview');await page.locator('#argumentReview').click();assert.match(await page.locator('#argumentRubric').textContent(),/perjuicio/);
  await page.locator('#argumentTask').selectOption('plazo');await page.locator('#argumentReview').click();assert.match(await page.locator('#argumentRubric').textContent(),/cuatro meses/);
  await page.locator('#admissibilityReset').click();
  for(let i=0;i<5;i++){
   const text=await page.evaluate(()=>activeAdmissibilityStep().choices.find(choice=>choice.correct).text);
   await page.getByRole('button',{name:text,exact:true}).click();await page.locator('#admissibilityNext').click();
  }
  assert.match(await page.locator('#admissibilityProgress').textContent(),/4 de 4/);
  await page.evaluate(()=>{location.hash='opiniones';});await page.waitForSelector('#opinionSearch');await page.locator('#opinionSearch').fill('OC-12');assert.match(await page.locator('#opinionGrid').textContent(),/no responder/);
  await page.evaluate(()=>{location.hash='recorrido?paso=15';});await page.waitForFunction(()=>document.getElementById('stepCount').textContent==='15');assert.match(await page.locator('#stepDetail').textContent(),/no suspenden/);
  await page.evaluate(()=>{location.hash='datos';});await page.waitForSelector('#downloadAtlasData');
  const downloadPromise=page.waitForEvent('download');await page.locator('#downloadAtlasData').click();const download=await downloadPromise;
  const data=JSON.parse(require('node:fs').readFileSync(await download.path(),'utf8'));
  assert.equal(data.schemaVersion,2);assert.ok(data.generatedAt);assert.ok(data.cases.every(record=>record.verification&&record.caseKey));
  assert.deepEqual(errors,[]);console.log('PASS '+width+'px: 25 guides/routes, treaty context, three real learning levels, answer ordering, written practice, OC-12 and parallel procedure.');await page.close();
 }}finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
