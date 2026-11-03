import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createContentLoader} from './content-source-loader.mjs';
const load=createContentLoader();
const {publishedCareerGuides,isPublishedCareerGuide,guidePath,guideForOccupation}=load('lib/career-paths/guides.ts');
const {occupations}=load('lib/career-paths/occupations.ts');
const snapshot=JSON.parse(fs.readFileSync('public/research/physical-ai-careers-2026-11-02.json','utf8'));
const guide=publishedCareerGuides[0];

test('four complete guides are navigable, with no draft or empty entries',()=>{
 assert.equal(publishedCareerGuides.length,4);
 assert.equal(guidePath(guide),'/career-paths/hardware-manufacturing/mechanical-engineer');
 for(const role of occupations)assert.equal(Boolean(guideForOccupation(role.id)),['mechanical-engineer','robot-learning-engineer','simulation-engineer','systems-integration-engineer'].includes(role.id));
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
 const mechanical=snapshot.roles.find(role=>['mechanical-engineer','robot-learning-engineer','simulation-engineer','systems-integration-engineer'].includes(role.id));
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

test('all four guides retain unique researched metadata, complete sources and explicit snapshot pins',()=>{
 const decisions=JSON.parse(fs.readFileSync('research/seo/2026-11-03/decisions.json','utf8'));
 const evidence=JSON.parse(fs.readFileSync('public/research/career-guide-evidence-2026-11-02.json','utf8'));
 assert.equal(decisions.completedBeforeNewGuideDrafting,true);
 for(const key of ['title','seoTitle','description'])assert.equal(new Set(publishedCareerGuides.map(item=>item[key])).size,4);
 for(const item of publishedCareerGuides){
  const decision=decisions.guides.find(row=>row.occupationId===item.occupationId);
  assert.equal(guidePath(item),decision.path);assert.equal(item.title,decision.h1);assert.equal(item.seoTitle,decision.seoTitle);assert.equal(item.description,decision.description);
  assert.equal(item.research.snapshotId,snapshot.snapshotId);assert.equal(item.publishedAt,'2026-11-03');
  assert.equal(item.sections.length,7);assert.ok(item.introduction.length);assert.ok(item.nextSteps.blocks.length);
  const ids=new Set(item.citations.map(source=>source.id));assert.equal(ids.size,item.citations.length);
  const sections=[...item.sections,item.nextSteps];assert.equal(new Set(sections.map(section=>section.id)).size,sections.length);
  for(const section of sections){
   for(const id of section.sourceIds||[])assert.ok(ids.has(id),`${item.id}: ${id}`);
   for(const block of section.blocks||[]){
    if(block.type==='resources')for(const resource of block.items)assert.ok(item.citations.some(source=>source.url===resource.href));
    if(block.type==='table')for(const row of block.rows)assert.equal(row.length,block.columns.length);
    if(block.type==='compensation')for(const pay of block.examples)assert.ok(evidence.roles[item.research.roleId].compensation.some(row=>row.minimum===pay.minimum&&row.maximum===pay.maximum&&row.title===pay.title&&row.period===pay.period&&row.location===pay.location));
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
 assert.equal(Object.keys(assessmentGuideLinks).length,4);
 for(const item of publishedCareerGuides)assert.equal(assessmentGuideLinks[item.occupationId],guidePath(item));
 assert.equal(assessmentGuideLinks['electrical-engineer'],undefined);
 const engine=fs.readFileSync('lib/career-paths/assessment-engine.ts','utf8');
 assert.doesNotMatch(engine,/publishedCareerGuides|guideForOccupation|assessmentGuideLinks|career-paths\/guides/);
 const component=fs.readFileSync('components/career-assessment.tsx','utf8');
 assert.doesNotMatch(component,/from ['"].*(guides|research)['"]/);
});
