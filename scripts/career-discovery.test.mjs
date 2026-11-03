import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createContentLoader} from './content-source-loader.mjs';
const load=createContentLoader();
const {assessmentQuestions}=load('lib/career-paths/assessment-questions.ts');
const {assessCareers,toggleSelection,validSelection}=load('lib/career-paths/assessment-engine.ts');
const {roleSignals,fieldOrder}=load('lib/career-paths/discovery.ts');
const {occupations}=load('lib/career-paths/occupations.ts');
const {careerResources}=load('lib/career-paths/resources.ts');
const {publishedCareerGuides}=load('lib/career-paths/guides.ts');
const neutral=()=>({background:['new'],skills:['new'],interests:['open'],'work-style':['mix'],physical:['open'],digital:['open'],foundations:['learning'],learning:['deciding'],environment:['mix'],goal:['open']});
const profiles={
 hardware:{...neutral(),interests:['physical'],'work-style':['prototype'],physical:['mechanism'],environment:['lab'],goal:['machine']},
 learning:{...neutral(),interests:['behavior'],'work-style':['experiment'],digital:['learn'],environment:['computer'],goal:['behavior']},
 platform:{...neutral(),background:['working'],skills:['code','data','test'],interests:['tools'],'work-style':['system'],digital:['dataset'],foundations:['code'],environment:['computer'],goal:['team']},
 operations:{...neutral(),background:['working'],skills:['mechanical','test','operations'],interests:['deployment'],'work-style':['diagnose'],physical:['service'],environment:['site'],goal:['operation']},
 novice:{...neutral(),skills:['operations'],interests:['deployment'],'work-style':['mix'],environment:['operations'],goal:['operation']},
};
test('questions, role signals and resources have complete references and publication gates',()=>{
 assert.equal(assessmentQuestions.length,10);assert.equal(new Set(assessmentQuestions.map(q=>q.id)).size,10);
 const roleIds=new Set(occupations.map(role=>role.id));assert.equal(roleIds.size,20);assert.equal(roleSignals.length,20);
 for(const q of assessmentQuestions){assert.equal(new Set(q.options.map(o=>o.id)).size,q.options.length);for(const o of q.options){for(const id of Object.keys(o.fields||{}))assert.ok(fieldOrder.includes(id));for(const id of Object.keys(o.roles||{}))assert.ok(roleIds.has(id),id);}}
 for(const resource of careerResources){assert.ok(resource.relevance.length>50);assert.ok(resource.reviewedAt);assert.ok(resource.href.startsWith('/insights/')||resource.href.startsWith('https://'));assert.ok(resource.status==='published');}
 assert.deepEqual(publishedCareerGuides.map(guide=>guide.occupationId),['mechanical-engineer','robot-learning-engineer','simulation-engineer','systems-integration-engineer']);
});
test('distinct interests give distinguishable fields and role-level starting points',()=>{
 const expected={hardware:['hardware-manufacturing','mechanical-engineer'],learning:['intelligence-autonomy','robot-learning-engineer'],platform:['platforms-simulation','robotics-platform-engineer'],operations:['integration-operations','field-service-engineer'],novice:['integration-operations','robot-operations-specialist']};
 for(const [name,answers] of Object.entries(profiles)){const result=assessCareers(answers);const primary=result.recommendations[0];assert.equal(primary.id,expected[name][0],name);assert.equal(primary.roleIds[0],expected[name][1],name);assert.ok(result.recommendations.length===2);for(const recommendation of result.recommendations){for(const reason of recommendation.reasons){const question=assessmentQuestions.find(q=>q.title===reason.question);assert.ok(question.options.some(o=>o.label===reason.answer&&answers[question.id].includes(o.id)));}for(const id of recommendation.roleIds)assert.equal(roleSignals.find(r=>r.id===id).familyId,recommendation.id);}}
});
test('a trade background preserves practical experience without inventing engineering qualifications',()=>{
 const result=assessCareers(profiles.operations);assert.equal(result.recommendations[0].id,'integration-operations');assert.equal(result.recommendations[0].roleIds[0],'field-service-engineer');assert.ok(result.declaredSkills.includes('mechanical'));assert.ok(result.declaredSkills.includes('testing'));assert.ok(!result.declaredSkills.includes('automation'));assert.ok(!result.declaredSkills.includes('programming'));
});
test('beginning without technical skills does not disqualify an interest or invent current strengths',()=>{
 const result=assessCareers(profiles.learning);assert.equal(result.recommendations[0].id,'intelligence-autonomy');assert.deepEqual(result.recommendations[0].strengths,[]);assert.ok(result.recommendations[0].explore.includes('programming'));
 const mechanicalSoftware={...profiles.hardware,background:['working'],skills:['code'],foundations:['code']};assert.equal(assessCareers(mechanicalSoftware).recommendations[0].id,'hardware-manufacturing');
});
test('starting situation does not steer fields or assign technical experience',()=>{
 const baseline=assessCareers(profiles.learning);for(const option of assessmentQuestions.find(q=>q.id==='background').options){const result=assessCareers({...profiles.learning,background:[option.id]});assert.deepEqual(result.recommendations,baseline.recommendations);assert.deepEqual(result.declaredSkills,[]);}
 const creative=assessCareers({...profiles.hardware,skills:['visual','communication']});assert.ok(creative.recommendations[0].strengths.includes('visual'));assert.ok(creative.recommendations[0].strengths.includes('communication'));assert.ok(!creative.declaredSkills.includes('mechanical'));assert.ok(!creative.declaredSkills.includes('programming'));
});
test('learning commitment does not change rankings; undecided answers remain honestly undecided',()=>{
 const a=assessCareers(profiles.learning);for(const option of assessmentQuestions.find(q=>q.id==='learning').options){const b=assessCareers({...profiles.learning,learning:[option.id]});assert.deepEqual(b.recommendations,a.recommendations);}
 const result=assessCareers(neutral());assert.equal(result.unclear,true);assert.deepEqual(result.recommendations,[]);
});
test('multi-select choices are bounded, exclusive options clear other selections, and malformed answers fail',()=>{
 const skills=assessmentQuestions.find(q=>q.id==='skills');assert.deepEqual(toggleSelection(skills,['code','data'],'new'),['new']);assert.deepEqual(toggleSelection(skills,['new'],'code'),['code']);assert.deepEqual(toggleSelection(skills,['code','data','test'],'electronics'),['code','data','test']);assert.equal(validSelection(skills,['code','new']),false);assert.equal(validSelection(skills,['code','code']),false);
 assert.throws(()=>assessCareers({...neutral(),skills:['unknown']}),/skills/);assert.throws(()=>assessCareers({...neutral(),background:[]}),/background/);assert.throws(()=>assessCareers({...neutral(),interests:['physical','behavior','tools']}),/interests/);
});
test('skill denominators and curated compensation remain tied to the dated source cohort',()=>{
 const snapshot=JSON.parse(fs.readFileSync('public/research/physical-ai-careers-2026-11-02.json','utf8'));assert.equal(snapshot.postingCount,1029);assert.equal(snapshot.roles.reduce((n,r)=>n+r.postingCount,0),1029);
 for(const role of snapshot.roles){for(const skill of role.skills){assert.ok(skill.count<=role.postingCount);assert.equal(skill.required+skill.preferred+skill.contextual,skill.count);}for(const pay of role.salaryExamples){assert.equal(pay.currency,'USD');assert.equal(pay.period,'year');assert.ok(pay.minimum<=pay.maximum);assert.ok(pay.url.startsWith('https://'));assert.match(pay.sourceTextSha256,/^[a-f0-9]{64}$/);}}
});
test('assessment code has no response persistence, network submission or career-fit percentages',()=>{
 const code=fs.readFileSync('components/career-assessment.tsx','utf8')+fs.readFileSync('lib/career-paths/assessment-engine.ts','utf8');assert.doesNotMatch(code,/localStorage|sessionStorage|fetch\(|sendBeacon|track\(/);assert.doesNotMatch(code,/Math\.random|fitPercent|fitScore/);
});


test('equal interest scores retain the existing deterministic field order',()=>{
 const answers={...neutral(),interests:['creative']};
 const fields=()=>assessCareers(answers).recommendations.map(item=>item.id);
 assert.deepEqual(fields(),['hardware-manufacturing','platforms-simulation']);
 assert.deepEqual(fields(),fields());
 assert.equal(assessCareers(answers).close,true);
});
