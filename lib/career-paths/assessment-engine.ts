import { assessmentQuestions, type AssessmentQuestion } from '@/lib/career-paths/assessment-questions';
import { fieldOrder, fieldPlans, roleSignals, type SkillId } from '@/lib/career-paths/discovery';
import type { FamilyId } from './types';
export type AssessmentAnswers = Record<string,string[]>;
export interface FieldRecommendation {id:FamilyId;reasons:{question:string;answer:string}[];roleIds:string[];strengths:SkillId[];explore:SkillId[]}
export interface AssessmentResult {recommendations:FieldRecommendation[];unclear:boolean;close:boolean;declaredSkills:SkillId[];learning:string;background:string}
export function validSelection(question:AssessmentQuestion, values:unknown):values is string[] {
 if(!Array.isArray(values)||!values.length||new Set(values).size!==values.length||values.some(value=>typeof value!=='string'||!question.options.some(option=>option.id===value)))return false;
 if(question.mode==='single'&&values.length!==1)return false;
 if(question.mode==='multi'&&values.length>(question.max||question.options.length))return false;
 return values.length===1||!values.some(value=>question.options.find(option=>option.id===value)?.exclusive);
}
export function toggleSelection(question:AssessmentQuestion, selected:string[], id:string):string[] {
 const option=question.options.find(option=>option.id===id);if(!option)return selected;
 if(question.mode==='single')return [id];
 if(selected.includes(id))return selected.filter(value=>value!==id);
 if(option.exclusive)return [id];
 const next=selected.filter(value=>!question.options.find(option=>option.id===value)?.exclusive);
 return next.length<(question.max||question.options.length)?[...next,id]:next;
}
export function assessCareers(answers:AssessmentAnswers):AssessmentResult {
 for(const question of assessmentQuestions)if(!validSelection(question,answers[question.id]))throw new Error(`Answer required: ${question.id}`);
 const fieldScores=Object.fromEntries(fieldOrder.map(id=>[id,0])) as Record<FamilyId,number>;
 const roleScores=Object.fromEntries(roleSignals.map(role=>[role.id,0]));
 const contributions:Record<FamilyId,{question:string;answer:string;weight:number}[]>=Object.fromEntries(fieldOrder.map(id=>[id,[] as {question:string;answer:string;weight:number}[]])) as Record<FamilyId,{question:string;answer:string;weight:number}[]>;
 const skills=new Set<SkillId>();let interestSignals=0;
 for(const question of assessmentQuestions){
  const selected=question.options.filter(option=>answers[question.id].includes(option.id));
  for(const option of selected)for(const skill of option.skills||[])skills.add(skill);
  for(const field of fieldOrder){
   // Each question contributes at most four points to a field. Multi-selects cannot dominate by answer count.
   const total=selected.reduce((sum,option)=>sum+(option.fields?.[field]||0),0);
   fieldScores[field]+=Math.min(4,total);
   if(question.dimension==='interest')for(const option of selected)if((option.fields?.[field]||0)>0)contributions[field].push({question:question.title,answer:option.label,weight:option.fields?.[field]||0});
  }
  for(const role of roleSignals)roleScores[role.id]+=Math.min(4,selected.reduce((sum,option)=>sum+(option.roles?.[role.id]||0),0));
  if(question.dimension==='interest'&&selected.some(option=>Object.values(option.fields||{}).some(weight=>weight>0)))interestSignals++;
 }
 const ranked=[...fieldOrder].sort((a,b)=>fieldScores[b]-fieldScores[a]);
 const unclear=interestSignals===0;
 const recommendations=(unclear?[]:ranked.slice(0,2)).map(id=>{
  const roles=roleSignals.filter(role=>role.familyId===id).map(role=>({...role,score:roleScores[role.id]+role.skills.filter(skill=>skills.has(skill)).length})).sort((a,b)=>b.score-a.score);
  const chosen=roles.filter(role=>role.score>0).slice(0,2);
  const roleIds=chosen.map(role=>role.id);
  const relevant=[...new Set(chosen.length?chosen.flatMap(role=>role.skills):fieldPlans[id].foundation)];
  // Keep explanations tied to distinct, genuinely selected questions.
  const reasons=contributions[id].sort((a,b)=>b.weight-a.weight).filter((reason,index,all)=>all.findIndex(item=>item.question===reason.question)===index).slice(0,3).map(({question,answer})=>({question,answer}));
  return {id,reasons,roleIds,strengths:[...new Set([...relevant.filter(skill=>skills.has(skill)),...([...skills].filter(skill=>skill==='visual'||skill==='communication'))])],explore:relevant.filter(skill=>!skills.has(skill)).slice(0,4)};
 });
 return {recommendations,unclear,close:!unclear&&fieldScores[ranked[0]]-fieldScores[ranked[1]]<=1,declaredSkills:[...skills],learning:answers.learning[0],background:answers.background[0]};
}
