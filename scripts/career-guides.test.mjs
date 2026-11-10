import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createContentLoader} from './content-source-loader.mjs';
const load=createContentLoader();
const {publishedCareerGuides,isPublishedCareerGuide,guidePath,guideForOccupation}=load('lib/career-paths/guides.ts');
const {occupations}=load('lib/career-paths/occupations.ts');
const snapshot=JSON.parse(fs.readFileSync('public/research/physical-ai-careers-2026-11-02.json','utf8'));
const guide=publishedCareerGuides[0];

test('complete guides are navigable, with no draft or empty entries',()=>{
 assert.equal(publishedCareerGuides.length,14);
 assert.equal(guidePath(guide),'/career-paths/hardware-manufacturing/mechanical-engineer');
 for(const role of occupations)assert.equal(Boolean(guideForOccupation(role.id)),['mechanical-engineer','robot-learning-engineer','simulation-engineer','systems-integration-engineer','electrical-engineer','perception-engineer','robotics-data-engineer','field-service-engineer','embedded-software-engineer','robotics-controls-engineer','machine-learning-infrastructure-engineer','industrial-automation-engineer','manufacturing-engineer','motion-planning-engineer'].includes(role.id));
 assert.equal(isPublishedCareerGuide({...guide,status:'draft'}),false);
 assert.equal(isPublishedCareerGuide({...guide,sections:[]}),false);
 assert.equal(isPublishedCareerGuide({...guide,sections:[{id:'empty',heading:'Empty',paragraphs:[]}]}),false);
 assert.equal(isPublishedCareerGuide({...guide,citations:[]}),false);
});
test('guide sections, research tables, citations and learning resources are internally consistent',()=>{
 assert.equal(guide.sections.length,7);
 const allSections=[...guide.sections,guide.nextSteps];
 assert.equal(new Set(['the-role',...allSections.map(section=>section.id)]).size,9);
 const sources=new Set(guide.citations.map(source=>source.id));assert.equal(sources.size,guide.citations.length);
 for(const section of allSections){for(const id of section.sourceIds||[])assert.ok(sources.has(id),id);for(const block of section.blocks||[]){if(block.type==='figure')assert.ok(fs.existsSync('public'+block.src));if(block.type==='table'){for(const row of block.rows)assert.equal(row.length,block.columns.length);}if(block.type==='resources'){for(const item of block.items)assert.ok(guide.citations.some(source=>source.url===item.href));}}}
 const mechanical=snapshot.roles.find(role=>['mechanical-engineer','robot-learning-engineer','simulation-engineer','systems-integration-engineer','electrical-engineer','perception-engineer','robotics-data-engineer','field-service-engineer','embedded-software-engineer','robotics-controls-engineer','machine-learning-infrastructure-engineer','industrial-automation-engineer','manufacturing-engineer','motion-planning-engineer'].includes(role.id));
 const skills=guide.sections.find(section=>section.id==='skills').blocks.find(block=>block.type==='skill-mentions');
 assert.equal(skills.denominator,mechanical.postingCount);
 assert.deepEqual(skills.rows,mechanical.skills.map(({label,count,required,preferred,contextual})=>({label,count,required,preferred,contextual})));
 for(const row of skills.rows){assert.ok(row.count<=skills.denominator);assert.equal(row.required+row.preferred+row.contextual,row.count);}
 const salary=guide.sections.find(section=>section.id==='salary').blocks.find(block=>block.type==='compensation');
 assert.equal(salary.examples.length,3);for(const example of mechanical.salaryExamples){assert.deepEqual(salary.examples.find(row=>row.employer===example.employer),example);}
 for(const item of guide.overview)for(const id of item.sourceIds)assert.ok(sources.has(id));
 const original=JSON.parse(fs.readFileSync('research/career-guides/mechanical-engineer/before-editorial-refinement.json','utf8'));
 assert.deepEqual(guide.citations,original.citations);
 const seo=JSON.parse(fs.readFileSync('research/seo/2026-11-03/decisions.json','utf8')).guides.find(item=>item.occupationId===guide.occupationId);assert.equal(guide.seoTitle,seo.seoTitle);assert.equal(guide.description,seo.description);
 assert.ok(guide.citations.every(source=>source.accessedAt&&source.scope));
 assert.ok(!guide.citations.some(source=>source.url.startsWith('/insights/')||source.url.startsWith('/news/')));
});
test('gripper example uses per-jaw force, balanced static friction and the stated units',()=>{
 const calculation=guide.sections.find(section=>section.id==='day-to-day').blocks.find(block=>block.type==='calculation');
 const force=4*0.25*9.81/(2*0.2);assert.equal(force.toFixed(1),'24.5');assert.ok(calculation.example.includes('24.5 N per jaw'));assert.ok(calculation.example.includes('m/s²'));
 const svg=fs.readFileSync('public/career-paths/gripper-forces.svg','utf8');assert.ok(svg.includes('>f</text>'));assert.equal((svg.match(/marker-end=/g)||[]).length,5);
 const figure=guide.sections[0].blocks.find(block=>block.type==='figure');assert.ok(figure.caption.includes('2f = mg'));assert.ok(figure.caption.includes('2μF ≥ mg'));
});

test('all guides retain unique metadata, complete sources and explicit snapshot pins',()=>{
 const decisions=JSON.parse(fs.readFileSync('research/seo/2026-11-03/decisions.json','utf8'));
 assert.equal(decisions.completedBeforeNewGuideDrafting,true);
 for(const key of ['title','seoTitle','description'])assert.equal(new Set(publishedCareerGuides.map(item=>item[key])).size,publishedCareerGuides.length);
 for(const item of publishedCareerGuides){
  const decision=[...decisions.guides,...JSON.parse(fs.readFileSync('research/seo/2026-11-09/decisions.json','utf8')).guides,...JSON.parse(fs.readFileSync('research/seo/2026-11-10/decisions.json','utf8')).guides].find(row=>row.occupationId===item.occupationId);
  const itemEvidence=JSON.parse(fs.readFileSync('public'+item.research.evidencePath,'utf8'));
  assert.equal(guidePath(item),decision.path);assert.equal(item.title,decision.h1);assert.equal(item.seoTitle,decision.seoTitle);assert.equal(item.description,decision.description);
  assert.equal(item.research.snapshotId,snapshot.snapshotId);
  if(item.occupationId==='electrical-engineer'){assert.equal(item.publishedAt,'2026-11-09');assert.equal(item.reviewedAt,'2026-11-09');}
  else if(item.occupationId==='perception-engineer')assert.equal(item.publishedAt,'2026-11-09');
  else if(item.occupationId==='robotics-data-engineer')assert.equal(item.publishedAt,'2026-11-09');
  else if(item.occupationId==='field-service-engineer')assert.equal(item.publishedAt,'2026-11-09');
  else if(item.occupationId==='embedded-software-engineer')assert.equal(item.publishedAt,'2026-11-09');
  else if(item.occupationId==='robotics-controls-engineer')assert.equal(item.publishedAt,'2026-11-09');
  else if(item.occupationId==='machine-learning-infrastructure-engineer')assert.equal(item.publishedAt,'2026-11-09');
  else if(item.occupationId==='industrial-automation-engineer')assert.equal(item.publishedAt,'2026-11-10');
  else if(item.occupationId==='motion-planning-engineer')assert.equal(item.publishedAt,'2026-11-10');
  else if(item.occupationId==='manufacturing-engineer')assert.equal(item.publishedAt,'2026-11-10');
  else assert.equal(item.publishedAt,'2026-11-03');
  assert.equal(item.sections.length,item.occupationId==='manufacturing-engineer'?9:['perception-engineer','field-service-engineer','embedded-software-engineer','robotics-controls-engineer','machine-learning-infrastructure-engineer','industrial-automation-engineer','motion-planning-engineer'].includes(item.occupationId)?8:7);assert.ok(item.introduction.length);assert.ok(item.nextSteps.blocks.length);
  const ids=new Set(item.citations.map(source=>source.id));assert.equal(ids.size,item.citations.length);
  const sections=[...item.sections,item.nextSteps];assert.equal(new Set(sections.map(section=>section.id)).size,sections.length);
  for(const section of sections){
   for(const id of section.sourceIds||[])assert.ok(ids.has(id),`${item.id}: ${id}`);
   for(const block of section.blocks||[]){
    if(block.type==='resources')for(const resource of block.items)assert.ok(item.citations.some(source=>source.url===resource.href));
    if(block.type==='table')for(const row of block.rows)assert.equal(row.length,block.columns.length);
    if(block.type==='compensation')for(const pay of block.examples)assert.ok(itemEvidence.roles[item.research.roleId].compensation.some(row=>row.minimum===pay.minimum&&row.maximum===pay.maximum&&row.title===pay.title&&row.period===pay.period&&row.location===pay.location));
    if(block.type==='skill-mentions')for(const row of block.rows){assert.equal(row.count,row.required+row.preferred+row.contextual);assert.ok(row.count<=block.denominator);}
   }
  }
  assert.ok(item.citations.every(source=>source.accessedAt&&source.scope));
  assert.ok(!item.citations.some(source=>/^\/(insights|news)\//.test(source.url)));
 }
});

test('scope flags prevent contaminated cohorts from becoming frequency charts or salary ladders',()=>{
 const {assessmentEvidence,pinnedGuideResearch}=load('lib/career-paths/research.ts');
 assert.throws(()=>pinnedGuideResearch('simulation-engineer','unregistered'),/Unregistered/);
 for(const roleId of ['simulation-engineer','systems-integration-engineer']){
  const item=guideForOccupation(roleId);
  assert.ok(!item.sections.flatMap(section=>section.blocks||[]).some(block=>block.type==='skill-mentions'));
  assert.ok(item.researchNotes.some(note=>/cohort/.test(note)));
  assert.equal(assessmentEvidence[roleId].skill,undefined);
 }
 const integration=guideForOccupation('systems-integration-engineer');
 const pay=integration.sections.flatMap(section=>section.blocks||[]).find(block=>block.type==='compensation');
 assert.deepEqual(pay.examples.map(row=>row.employer),['Standard Bots','Nimble Robotics']);
 assert.ok(!pay.examples.some(row=>row.employer==='Skild AI'));
});

test('assessment guide links cover completed professions without entering the matching engine',()=>{
 const {assessmentGuideLinks}=load('lib/career-paths/guides.ts');
 assert.equal(Object.keys(assessmentGuideLinks).length,14);
 for(const item of publishedCareerGuides)assert.equal(assessmentGuideLinks[item.occupationId],guidePath(item));
 assert.equal(assessmentGuideLinks['electrical-engineer'],'/career-paths/hardware-manufacturing/electrical-engineer');
 assert.equal(assessmentGuideLinks['perception-engineer'],'/career-paths/intelligence-autonomy/perception-engineer');
 assert.equal(assessmentGuideLinks['robotics-data-engineer'],'/career-paths/platforms-simulation/robotics-data-engineer');
 assert.equal(assessmentGuideLinks['field-service-engineer'],'/career-paths/integration-operations/field-service-engineer');
 assert.equal(assessmentGuideLinks['embedded-software-engineer'],'/career-paths/hardware-manufacturing/embedded-software-engineer');
 assert.equal(assessmentGuideLinks['robotics-controls-engineer'],'/career-paths/intelligence-autonomy/robotics-controls-engineer');
 assert.equal(assessmentGuideLinks['machine-learning-infrastructure-engineer'],'/career-paths/platforms-simulation/machine-learning-infrastructure-engineer');
 assert.equal(assessmentGuideLinks['industrial-automation-engineer'],'/career-paths/integration-operations/industrial-automation-engineer');
 assert.equal(assessmentGuideLinks['manufacturing-engineer'],'/career-paths/hardware-manufacturing/manufacturing-engineer');
 assert.equal(assessmentGuideLinks['motion-planning-engineer'],'/career-paths/intelligence-autonomy/motion-planning-engineer');
 assert.equal(assessmentGuideLinks['verification-validation-engineer'],undefined);
 const engine=fs.readFileSync('lib/career-paths/assessment-engine.ts','utf8');
 assert.doesNotMatch(engine,/publishedCareerGuides|guideForOccupation|assessmentGuideLinks|career-paths\/guides/);
 const component=fs.readFileSync('components/career-assessment.tsx','utf8');
 assert.doesNotMatch(component,/from ['"].*(guides|research)['"]/);
});

test('electrical compensation is reproducible and separate from the broad cohort',()=>{
 const item=guideForOccupation('electrical-engineer');
 const pay=JSON.parse(fs.readFileSync('public/research/electrical-engineer-compensation-2026-11-02.json','utf8'));
 const values=pay.observations.map(row=>{
  assert.equal(row.currency,'USD');assert.equal(row.period,'year');
  assert.deepEqual(row.countries,['United States']);
  assert.ok(row.minimum>0&&row.maximum>=row.minimum);
  assert.match(row.sourceTextSha256,/^[a-f0-9]{64}$/);
  assert.match(row.rawSourceFileSha256,/^[a-f0-9]{64}$/);
  assert.equal(row.midpoint,(row.minimum+row.maximum)/2);
  return row.midpoint;
 }).sort((a,b)=>a-b);
 const midpoint=values.length%2?values[(values.length-1)/2]:(values[values.length/2-1]+values[values.length/2])/2;
 assert.equal(pay.exactMedianMidpoint,midpoint);assert.equal(pay.estimate,Math.round(midpoint/1000)*1000);
 assert.equal(pay.postingCount,new Set(pay.observations.map(row=>row.id)).size);
 assert.equal(pay.employerCount,new Set(pay.observations.map(row=>row.employerId)).size);
 assert.equal(pay.postingCount,28);assert.equal(pay.employerCount,11);
 assert.equal(pay.estimate,181000);
 assert.ok(pay.excludedObservations.some(row=>row.id==='one-x:ashby:14a3f92c-24ec-4722-8754-d0d1366c9ed7'&&/conflicts/.test(row.reason)));
 assert.ok(pay.observations.every(row=>!pay.excludedObservations.some(other=>row.id===other.id)));
 assert.deepEqual(item.overview.map(row=>row.label),['What you do','Core skills','Education','Compensation']);
 assert.equal(item.overview[3].value,'$181,000/year');
 assert.equal(item.overview[3].detail,'Black Scarab estimate');
 assert.equal(item.publishedAt,'2026-11-09');
 assert.ok(!item.sections.flatMap(section=>section.blocks||[]).some(block=>block.type==='skill-mentions'));
 const evidence=JSON.parse(fs.readFileSync('public'+item.research.evidencePath,'utf8'));
 for(const example of evidence.roles['electrical-engineer'].compensation)assert.ok(pay.observations.some(row=>row.id===example.recordId&&row.minimum===example.minimum&&row.maximum===example.maximum));
});

test('perception compensation uses reviewed annual observations and the approved publication date',()=>{
 const item=guideForOccupation('perception-engineer');
 const pay=JSON.parse(fs.readFileSync('public/research/perception-engineer-compensation-2026-11-02.json','utf8'));
 const values=pay.observations.map(row=>{
  assert.equal(row.period,'year');assert.equal(row.currency,'USD');assert.deepEqual(row.countries,['United States']);
  assert.equal(row.midpoint,(row.minimum+row.maximum)/2);assert.ok(row.minimum>0&&row.maximum>=row.minimum);
  return row.midpoint;
 }).sort((a,b)=>a-b);
 const mid=values.length%2?values[(values.length-1)/2]:(values[values.length/2-1]+values[values.length/2])/2;
 assert.equal(pay.exactMedianMidpoint,mid);assert.equal(pay.estimate,Math.round(mid/1000)*1000);
 assert.equal(pay.postingCount,new Set(pay.observations.map(row=>row.id)).size);
 assert.equal(pay.employerCount,new Set(pay.observations.map(row=>row.employerId)).size);
 assert.equal(item.overview[3].value,'$224,000/year');assert.equal(item.publishedAt,'2026-11-09');
 assert.equal(pay.postingCount,27);assert.equal(pay.employerCount,13);
 assert.ok(pay.excludedObservations.some(row=>row.id==='fieldai:lever:bb127cde-930c-446f-908d-52e2c6f24cc9'));
 assert.ok(!item.sections.flatMap(section=>section.blocks||[]).some(block=>block.type==='skill-mentions'));
 assert.ok(fs.existsSync('public'+item.illustration.src));
 for(const row of pay.observations)assert.ok(!pay.excludedObservations.some(other=>other.id===row.id));
});

test('robotics data compensation uses eligible annual data-supply roles',()=>{
 const item=guideForOccupation('robotics-data-engineer');
 const pay=JSON.parse(fs.readFileSync('public/research/robotics-data-engineer-compensation-2026-11-02.json','utf8'));
 const values=pay.observations.map(row=>{
  assert.equal(row.period,'year');assert.equal(row.currency,'USD');assert.deepEqual(row.countries,['United States']);
  assert.equal(row.midpoint,(row.minimum+row.maximum)/2);assert.ok(row.minimum>0&&row.maximum>=row.minimum);
  assert.match(row.sourceTextSha256,/^[a-f0-9]{64}$/);assert.match(row.rawSourceFileSha256,/^[a-f0-9]{64}$/);
  return row.midpoint;
 }).sort((a,b)=>a-b);
 const mid=values.length%2?values[(values.length-1)/2]:(values[values.length/2-1]+values[values.length/2])/2;
 assert.equal(pay.exactMedianMidpoint,mid);assert.equal(pay.estimate,Math.round(mid/1000)*1000);
 assert.equal(pay.postingCount,new Set(pay.observations.map(row=>row.id)).size);
 assert.equal(pay.employerCount,new Set(pay.observations.map(row=>row.employerId)).size);
 assert.equal(pay.postingCount,9);assert.equal(pay.employerCount,7);assert.equal(pay.estimate,215000);
 assert.equal(item.overview[3].value,'$215,000/year');assert.equal(item.publishedAt,'2026-11-09');
 assert.ok(pay.excludedObservations.some(row=>row.id==='boston-dynamics:workday:R3241'));
 assert.ok(!item.sections.flatMap(section=>section.blocks||[]).some(block=>block.type==='skill-mentions'));
 for(const row of pay.observations)assert.ok(!pay.excludedObservations.some(other=>other.id===row.id));
 const reviewed=JSON.parse(fs.readFileSync('public'+item.research.evidencePath,'utf8'));
 for(const example of reviewed.roles['robotics-data-engineer'].compensation)assert.ok(pay.observations.some(row=>row.id===example.recordId&&row.minimum===example.minimum&&row.maximum===example.maximum));
});

test('field service compensation keeps annual salaries separate from hourly overtime',()=>{
 const item=guideForOccupation('field-service-engineer');
 const pay=JSON.parse(fs.readFileSync('public/research/field-service-engineer-compensation-2026-11-02.json','utf8'));
 const values=pay.observations.map(row=>{
  assert.equal(row.period,'year');assert.equal(row.currency,'USD');assert.deepEqual(row.countries,['United States']);
  assert.equal(row.midpoint,(row.minimum+row.maximum)/2);assert.ok(row.minimum>0&&row.maximum>=row.minimum);
  return row.midpoint;
 }).sort((a,b)=>a-b);
 const mid=(values[values.length/2-1]+values[values.length/2])/2;
 assert.equal(pay.exactMedianMidpoint,mid);assert.equal(pay.estimate,Math.round(mid/1000)*1000);
 assert.equal(pay.postingCount,new Set(pay.observations.map(row=>row.id)).size);
 assert.equal(pay.employerCount,new Set(pay.observations.map(row=>row.employerId)).size);
 assert.equal(pay.postingCount,8);assert.equal(pay.employerCount,4);assert.equal(pay.estimate,113000);
 assert.equal(item.overview[3].value,'$113,000/year');assert.equal(item.publishedAt,'2026-11-09');
 const indiana=pay.observations.find(row=>row.id==='boston-dynamics:workday:R2895');
 assert.deepEqual(indiana.originalCountries,['India','United States']);assert.match(indiana.geographyReview.sourceClause,/Indianapolis, Indiana/);
 assert.ok(pay.excludedObservations.some(row=>row.id==='formic:greenhouse:4702865006'&&/overtime/.test(row.reason)));
 assert.ok(pay.excludedObservations.some(row=>row.id==='shield-ai:lever:ee614940-c594-41da-8432-8a677e21520d'));
 for(const row of pay.observations)assert.ok(!pay.excludedObservations.some(other=>other.id===row.id));
 assert.ok(!item.sections.flatMap(section=>section.blocks||[]).some(block=>block.type==='skill-mentions'));
});

test('embedded salary and illustrative timing remain mathematically consistent',()=>{
 const item=guideForOccupation('embedded-software-engineer');
 const pay=JSON.parse(fs.readFileSync('public/research/embedded-software-engineer-compensation-2026-11-02.json','utf8'));
 const values=pay.observations.map(row=>{assert.equal(row.period,'year');assert.equal(row.currency,'USD');assert.deepEqual(row.countries,['United States']);assert.equal(row.midpoint,(row.minimum+row.maximum)/2);return row.midpoint;}).sort((a,b)=>a-b);
 const midpoint=values.length%2?values[(values.length-1)/2]:(values[values.length/2-1]+values[values.length/2])/2;
 assert.equal(pay.exactMedianMidpoint,midpoint);assert.equal(pay.estimate,Math.round(midpoint/1000)*1000);
 assert.equal(pay.postingCount,new Set(pay.observations.map(row=>row.id)).size);assert.equal(pay.employerCount,new Set(pay.observations.map(row=>row.employerId)).size);
 assert.equal(pay.postingCount,26);assert.equal(pay.employerCount,11);assert.equal(item.overview[3].value,'$205,000/year');assert.equal(item.publishedAt,'2026-11-09');
 assert.ok(pay.excludedObservations.some(row=>row.id==='one-x:ashby:4cb3ef10-8755-4050-b5f1-309591626d1c'&&/test/.test(row.reason)));
 assert.ok(pay.excludedObservations.some(row=>row.id==='applied-intuition:ashby:b352b349-8300-4f41-817d-952d044fb38a'&&/infotainment/.test(row.reason)));
 for(const row of pay.observations)assert.ok(!pay.excludedObservations.some(other=>other.id===row.id));
 const chart=item.sections.flatMap(section=>section.blocks||[]).find(block=>block.type==='timing-budget');
 const totals=chart.rows.map(row=>row.segments.reduce((sum,s)=>{assert.ok(s.durationMs>0);return sum+s.durationMs;},0));
 assert.ok(chart.deadlineMs>0&&chart.deadlineMs<=chart.scaleMs);assert.ok(totals.every(total=>total<=chart.scaleMs));
 assert.ok(totals[0]<chart.deadlineMs&&totals[1]>chart.deadlineMs);assert.equal(totals[1]-totals[0],chart.rows[1].segments.find(s=>s.kind==='wait').durationMs);
});

test('controls salary is reproducible and the response curves obey their analytical model',()=>{
 const item=guideForOccupation('robotics-controls-engineer');
 const pay=JSON.parse(fs.readFileSync('public/research/robotics-controls-engineer-compensation-2026-11-02.json','utf8'));
 const values=pay.observations.map(row=>{
  assert.deepEqual(row.countries,['United States']);assert.equal(row.period,'year');assert.equal(row.currency,'USD');
  assert.ok(row.minimum>0&&row.maximum>=row.minimum);assert.equal(row.midpoint,(row.minimum+row.maximum)/2);
  return row.midpoint;
 }).sort((a,b)=>a-b);
 assert.equal(pay.exactMedianMidpoint,values[(values.length-1)/2]);assert.equal(pay.estimate,Math.round(pay.exactMedianMidpoint/1000)*1000);
 assert.equal(pay.postingCount,new Set(pay.observations.map(row=>row.id)).size);assert.equal(pay.employerCount,new Set(pay.observations.map(row=>row.employerId)).size);
 assert.equal(pay.postingCount,5);assert.equal(pay.employerCount,3);assert.equal(item.overview[3].value,'$250,000/year');assert.equal(item.publishedAt,'2026-11-09');
 for(const id of ['applied-intuition:ashby:f55422c0-c807-4f35-935e-4ce089d926d7','generalist:ashby:ebace75d-6896-45f5-a12c-3c0699c9d7a6','gram:greenhouse:4396994009'])assert.ok(pay.excludedObservations.some(row=>row.id===id));
 for(const row of pay.observations)assert.ok(!pay.excludedObservations.some(other=>other.id===row.id));
 const {secondOrderStepResponse}=load('lib/career-paths/control-response.ts');
 const chart=item.sections.flatMap(section=>section.blocks||[]).find(block=>block.type==='control-response');
 for(const curve of chart.curves){
  const z=curve.dampingRatio,wn=chart.naturalFrequencyRadPerSec;
  assert.ok(z>0&&z<1&&wn>0);
  assert.equal(secondOrderStepResponse(0,z,wn),0);
  const peakTime=Math.PI/(wn*Math.sqrt(1-z*z));
  const expectedPeak=1+Math.exp(-z*Math.PI/Math.sqrt(1-z*z));
  assert.ok(Math.abs(secondOrderStepResponse(peakTime,z,wn)-expectedPeak)<1e-12);
  assert.ok(peakTime<chart.durationSeconds&&expectedPeak<1.5);
  assert.ok(Math.abs(secondOrderStepResponse(100,z,wn)-1)<1e-12);
 }
 const reviewed=JSON.parse(fs.readFileSync('public'+item.research.evidencePath,'utf8'));
 for(const example of reviewed.roles[item.id].compensation)assert.ok(pay.observations.some(row=>row.id===example.recordId&&row.minimum===example.minimum&&row.maximum===example.maximum));
});

test('ML infrastructure salary and allocated-compute comparison preserve their scope and units',()=>{
 const item=guideForOccupation('machine-learning-infrastructure-engineer');
 const pay=JSON.parse(fs.readFileSync('public/research/ml-infrastructure-engineer-compensation-2026-11-02.json','utf8'));
 const values=pay.observations.map(row=>{
  assert.equal(row.currency,'USD');assert.equal(row.period,'year');assert.deepEqual(row.countries,['United States']);
  assert.ok(row.minimum>0&&row.maximum>=row.minimum);assert.equal(row.midpoint,(row.minimum+row.maximum)/2);
  return row.midpoint;
 }).sort((a,b)=>a-b);
 const median=(values[values.length/2-1]+values[values.length/2])/2;
 assert.equal(pay.exactMedianMidpoint,median);assert.equal(pay.estimate,Math.round(median/1000)*1000);
 assert.equal(pay.postingCount,new Set(pay.observations.map(row=>row.id)).size);assert.equal(pay.employerCount,new Set(pay.observations.map(row=>row.employerId)).size);
 assert.equal(pay.postingCount,8);assert.equal(pay.employerCount,5);assert.equal(item.overview[3].value,'$253,000/year');assert.equal(item.publishedAt,'2026-11-09');
 assert.ok(pay.excludedObservations.some(row=>row.id==='physical-intelligence:ashby:14586c10-d913-43c5-8f7c-c77b5c438e4c'&&/API Product/.test(row.reason)));
 for(const row of pay.observations)assert.ok(!pay.excludedObservations.some(other=>row.id===other.id));
 const example=JSON.parse(fs.readFileSync('public/research/ml-infrastructure-scaling-example-2026-11-09.json','utf8'));
 assert.equal(example.kind,'illustrative-model');assert.ok(example.nonParallelFraction>0&&example.nonParallelFraction<1);
 for(const row of example.rows){
  assert.ok(Number.isInteger(row.gpus)&&row.gpus>0);
  assert.ok(Math.abs(row.elapsedMinutes-example.baselineMinutes*(example.nonParallelFraction+(1-example.nonParallelFraction)/row.gpus))<1e-9);
  assert.equal(row.allocatedGpuMinutes,row.gpus*row.elapsedMinutes);
  assert.ok(row.elapsedMinutes>=example.baselineMinutes*example.nonParallelFraction);
 }
 const one=example.rows.find(row=>row.gpus===1),eight=example.rows.find(row=>row.gpus===8);
 assert.equal(one.elapsedMinutes,60);assert.equal(one.allocatedGpuMinutes,60);assert.equal(eight.elapsedMinutes,12.75);assert.equal(eight.allocatedGpuMinutes,102);
 const table=item.sections.flatMap(section=>section.blocks||[]).find(block=>block.type==='table'&&block.caption==='Training speed and allocated compute');
 assert.deepEqual(table.rows,example.rows.map(row=>[String(row.gpus),String(row.elapsedMinutes),String(row.allocatedGpuMinutes)]));
 const reviewed=JSON.parse(fs.readFileSync('public'+item.research.evidencePath,'utf8'));
 for(const example of reviewed.roles[item.id].compensation)assert.ok(pay.observations.some(row=>row.id===example.recordId&&row.minimum===example.minimum&&row.maximum===example.maximum));
});


test('industrial automation estimate uses annual factory-controls roles and preserves separate restart logic',()=>{
 const item=guideForOccupation('industrial-automation-engineer');
 const pay=JSON.parse(fs.readFileSync('public/research/industrial-automation-engineer-compensation-2026-11-02.json','utf8'));
 const values=pay.observations.map(row=>{
  assert.equal(row.period,'year');assert.equal(row.currency,'USD');assert.deepEqual(row.countries,['United States']);
  assert.equal(row.midpoint,(row.minimum+row.maximum)/2);
  assert.match(row.sourceTextSha256,/^[a-f0-9]{64}$/);assert.match(row.rawSourceFileSha256,/^[a-f0-9]{64}$/);
  return row.midpoint;
 }).sort((a,b)=>a-b);
 const mid=(values[0]+values[1])/2;
 assert.equal(pay.postingCount,2);assert.equal(pay.employerCount,2);
 assert.equal(pay.exactMedianMidpoint,mid);assert.equal(pay.estimate,Math.round(mid/1000)*1000);
 assert.equal(item.overview[3].value,'$159,000/year');assert.equal(item.publishedAt,'2026-11-10');
 assert.ok(pay.screening.adjacentScopeAdditions.includes('skydio:ashby:b36773da-5e82-4d16-b926-186ba78fafa3'));
 assert.ok(pay.excludedObservations.some(row=>row.employerId==='intrinsic'&&/annual/.test(row.reason)));
 for(const row of pay.observations)assert.ok(!pay.excludedObservations.some(other=>other.id===row.id));
 const sequence=item.sections.flatMap(section=>section.blocks||[]).find(block=>block.type==='state-sequence');
 const ids=new Set(sequence.states.map(state=>state.id));
 assert.equal(ids.size,sequence.states.length);
 for(const edge of sequence.transitions){assert.ok(ids.has(edge.from));assert.ok(ids.has(edge.to));}
 assert.ok(ids.has(sequence.fault.from));assert.ok(ids.has(sequence.fault.returnTo));
 assert.notEqual(sequence.fault.returnTo,'running');
 const intoRunning=sequence.transitions.filter(edge=>edge.to==='running');
 assert.equal(intoRunning.length,1);assert.match(intoRunning[0].condition,/start request/i);
 assert.match(sequence.fault.recovery,/cause cleared.*reset/i);
 assert.match(sequence.explanation,/separate reset.*idle without automatically restarting/);
 assert.ok(fs.existsSync('public'+item.illustration.src));
});


test('manufacturing salary excludes conflicting ranges and the yield graphic conserves a single batch',()=>{
 const item=guideForOccupation('manufacturing-engineer');
 const pay=JSON.parse(fs.readFileSync('public/research/manufacturing-engineer-compensation-2026-11-02.json','utf8'));
 const values=pay.observations.map(row=>{
  assert.equal(row.currency,'USD');assert.equal(row.period,'year');assert.deepEqual(row.countries,['United States']);
  assert.equal(row.midpoint,(row.minimum+row.maximum)/2);assert.ok(row.minimum>0&&row.maximum>=row.minimum);
  return row.midpoint;
 }).sort((a,b)=>a-b);
 const midpoint=values[(values.length-1)/2];
 assert.equal(pay.postingCount,7);assert.equal(pay.employerCount,6);assert.equal(pay.exactMedianMidpoint,midpoint);assert.equal(pay.estimate,Math.round(midpoint/1000)*1000);
 assert.equal(item.overview[3].value,'$182,000/year');assert.equal(item.publishedAt,'2026-11-10');
 for(const id of ['one-x:ashby:873f836f-a4b6-4ef8-9500-b960cb1198f9','one-x:ashby:e83e6f5b-0c56-4b50-ad2a-5d51a5f3219a'])assert.ok(pay.excludedObservations.some(row=>row.id===id&&/conflicting/i.test(row.reason)));
 for(const row of pay.observations)assert.ok(!pay.excludedObservations.some(other=>other.id===row.id));
 const graphic=item.sections.flatMap(s=>s.blocks||[]).find(b=>b.type==='yield-comparison');
 const batch=JSON.parse(fs.readFileSync('public/research/manufacturing-yield-example-2026-11-10.json','utf8'));
 assert.ok([graphic.total,graphic.firstPass,graphic.reworkedPass,graphic.scrapped].every(n=>Number.isInteger(n)&&n>=0));
 assert.ok(graphic.total>0);assert.equal(graphic.firstPass+graphic.reworkedPass+graphic.scrapped,graphic.total);
 assert.equal(graphic.firstPass/graphic.total*100,batch.firstPassYieldPercent);
 assert.equal((graphic.firstPass+graphic.reworkedPass)/graphic.total*100,batch.finalYieldPercent);
 assert.ok(batch.finalYieldPercent>=batch.firstPassYieldPercent&&batch.finalYieldPercent<=100);
 assert.equal(batch.kind,'illustrative-batch');assert.ok(fs.existsSync('public'+item.illustration.src));
});


test('motion-planning pay excludes mission routing and the geometric detour respects the full robot footprint',()=>{
 const item=guideForOccupation('motion-planning-engineer');
 const pay=JSON.parse(fs.readFileSync('public/research/motion-planning-engineer-compensation-2026-11-02.json','utf8'));
 const mids=pay.observations.map(o=>{assert.equal(o.period,'year');assert.equal(o.currency,'USD');assert.deepEqual(o.countries,['United States']);assert.equal(o.midpoint,(o.minimum+o.maximum)/2);return o.midpoint;}).sort((a,b)=>a-b);
 assert.equal(mids.length,7);assert.equal(pay.employerCount,5);assert.equal(mids[3],217500);assert.equal(pay.estimate,218000);assert.equal(item.overview[3].value,'$218,000/year');assert.equal(item.publishedAt,'2026-11-10');
 for(const id of ['shield-ai:lever:041e8344-bf6c-4199-8568-4ccfbf5423ba','zoox:lever:6efb15a8-ebe0-4ffc-bcc6-1d8f8375dbee']){assert.ok(pay.excludedObservations.some(o=>o.id===id));assert.ok(!pay.observations.some(o=>o.id===id));}
 const graphic=item.sections.flatMap(s=>s.blocks||[]).find(b=>b.type==='planning-clearance');const m=graphic.model;
 const distance=(point,o)=>Math.hypot(Math.max(o.x-point[0],0,point[0]-o.x-o.width),Math.max(o.y-point[1],0,point[1]-o.y-o.height));
 const samples=route=>route.slice(1).flatMap((p,i)=>Array.from({length:101},(_,n)=>route[i].map((v,k)=>v+(p[k]-v)*n/100)));
 const direct=samples(m.directRoute);const detour=samples(m.detourRoute);const pad=m.robotRadius+m.clearance;
 assert.ok(direct.every(p=>m.obstacles.every(o=>distance(p,o)>0)),'Point centerline clears the solid obstacles');
 assert.ok(direct.some(p=>m.obstacles.some(o=>distance(p,o)<m.robotRadius)),'The actual robot cannot fit');
 for(const p of detour){assert.ok(p[0]>=pad&&p[0]<=m.width-pad&&p[1]>=pad&&p[1]<=m.height-pad);assert.ok(m.obstacles.every(o=>distance(p,o)>=pad-1e-9),'Full path clears every obstacle');}
 assert.deepEqual(m.detourRoute[0],m.start);assert.deepEqual(m.detourRoute.at(-1),m.goal);assert.ok(Math.abs(m.obstacles[1].y-m.obstacles[0].y-m.obstacles[0].height-m.gap)<1e-9);assert.equal(m.requiredGap,2*pad);assert.ok(m.gap<2*m.robotRadius);assert.ok(fs.existsSync('public'+item.illustration.src));
});
