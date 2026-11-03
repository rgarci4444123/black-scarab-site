import type { FamilyId } from './types';
import type { SkillId } from './discovery';

export interface AssessmentOption {
  id: string; label: string; detail?: string;
  fields?: Partial<Record<FamilyId, number>>;
  roles?: Record<string, number>; skills?: SkillId[]; exclusive?: boolean;
}
export interface AssessmentQuestion {
  id: string; title: string; hint: string; mode: 'single' | 'multi'; max?: number;
  dimension: 'background' | 'skills' | 'interest' | 'learning';
  options: AssessmentOption[];
}
const F = {h:'hardware-manufacturing',a:'intelligence-autonomy',p:'platforms-simulation',o:'integration-operations'} as const;
const weights = (values:Partial<Record<keyof typeof F,number>>) => Object.fromEntries(Object.entries(values).map(([key,value])=>[F[key as keyof typeof F],value])) as Partial<Record<FamilyId,number>>;
const choice = (id:string,label:string,fields:Partial<Record<keyof typeof F,number>>={},roles:Record<string,number>={},extra:Partial<AssessmentOption>={}):AssessmentOption => ({id,label,fields:weights(fields),roles,...extra});

// Everyday activities carry interest signals. Only explicit experience answers
// report current skills; liking an activity never establishes a qualification.
export const assessmentQuestions: AssessmentQuestion[] = [
  {id:'background',title:'Where are you starting from?',hint:'Choose the closest description.',mode:'single',dimension:'background',options:[
    choice('student','I’m in school, college or university'),
    choice('working','I’m working and exploring a career change'),
    choice('returning','I’m returning to work after a break'),
    choice('first','I’m looking for my first career'),
    choice('industry','I already work in robotics and want to explore further'),
    choice('new','I’m exploring, or my situation is different'),
  ]},
  {id:'skills',title:'What have you had some practice doing?',hint:'Choose up to three. Experience at school, at home or at work all counts.',mode:'multi',max:3,dimension:'skills',options:[
    choice('mechanical','Building, assembling or repairing physical things',{h:1},{},{skills:['mechanical']}),
    choice('test','Working out why something isn’t working',{o:1,h:1},{},{skills:['testing']}),
    choice('operations','Organizing work or helping people use something',{o:1},{},{skills:['operations']}),
    choice('data','Working with spreadsheets, numbers or other information',{p:1},{},{skills:['data']}),
    choice('visual','Creating designs, drawings or visual explanations',{},{},{skills:['visual']}),
    choice('communication','Explaining ideas, writing or presenting information',{},{},{skills:['communication']}),
    choice('code','Writing or changing computer code',{p:1,a:1},{},{skills:['programming']}),
    choice('electronics','Working with wiring or electronics',{h:1,o:1},{},{skills:['electronics']}),
    choice('new','I haven’t had much practice with these yet',{},{},{exclusive:true}),
  ]},
  {id:'interests',title:'Which activities tend to draw you in?',hint:'Choose up to two. Think about what you enjoy, even outside work or school.',mode:'multi',max:2,dimension:'interest',options:[
    choice('physical','Making or fixing something with my hands',{h:4,o:1},{'mechanical-engineer':2,'field-service-engineer':1}),
    choice('behavior','Solving a puzzle or finding a hidden pattern',{a:3,p:1},{'perception-engineer':1,'robotics-data-engineer':1}),
    choice('creative','Imagining a design and bringing it to life',{h:2,p:2},{'mechanical-engineer':1,'simulation-engineer':1}),
    choice('tools','Finding a better way to do a complicated task',{p:3,o:1},{'robotics-platform-engineer':2}),
    choice('deployment','Helping someone get something working in practice',{o:4},{'systems-integration-engineer':1,'field-service-engineer':1}),
    choice('open','I’m still discovering what I enjoy',{},{},{exclusive:true}),
  ]},
  {id:'work-style',title:'When a problem is unfamiliar, what do you usually try first?',hint:'Choose the approach that feels most natural.',mode:'single',dimension:'interest',options:[
    choice('prototype','Try something practical and see what happens',{h:3,o:1},{'mechanical-engineer':1,'hardware-test-engineer':1}),
    choice('experiment','Look for patterns and test a possible explanation',{a:3,p:1},{'robot-learning-engineer':1,'perception-engineer':1}),
    choice('system','Break it into smaller steps and work through them',{p:3,a:1},{'robotics-platform-engineer':1,'motion-planning-engineer':1}),
    choice('diagnose','Ask questions and trace where things went wrong',{o:3,h:1},{'field-service-engineer':2,'hardware-test-engineer':1}),
    choice('mix','It depends on the problem'),
  ]},
  {id:'physical',title:'If an everyday object stopped working, which part would interest you?',hint:'Imagine a bicycle, a household appliance or a tool. You don’t need to know how to repair it.',mode:'single',dimension:'interest',options:[
    choice('mechanism','Seeing how its parts fit together and move',{h:3},{'mechanical-engineer':3}),
    choice('circuits','Following how power gets from one part to another',{h:3},{'electrical-engineer':3}),
    choice('service','Following the clues until I find the fault',{o:3,h:1},{'field-service-engineer':3,'hardware-test-engineer':2}),
    choice('production','Changing the design so the problem happens less often',{h:2,p:1},{'manufacturing-engineer':2,'verification-and-validation-engineer':1}),
    choice('elsewhere','I’d be more interested in a different kind of problem'),
    choice('open','I’m not sure yet'),
  ]},
  {id:'digital',title:'What would make a computer-based project interesting to you?',hint:'Choose what you’d like to try, even if you haven’t done it before.',mode:'single',dimension:'interest',options:[
    choice('world','Creating a virtual place and seeing how things behave in it',{p:3},{'simulation-engineer':3}),
    choice('learn','Exploring how a computer could learn from examples',{a:3},{'robot-learning-engineer':3,'perception-engineer':1}),
    choice('runtime','Making a repetitive or frustrating task easier',{p:3,o:1},{'robotics-platform-engineer':3}),
    choice('dataset','Turning a collection of information into something useful',{p:3,a:1},{'robotics-data-engineer':3}),
    choice('physical','I’d prefer a project involving physical things or people',{h:1,o:1}),
    choice('open','I’m not sure yet'),
  ]},
  {id:'foundations',title:'How do you feel about learning with numbers or computers?',hint:'This helps us suggest where to begin.',mode:'single',dimension:'skills',options:[
    choice('learning','I’d like to start with the basics'),
    choice('math','I’m comfortable with math, but new to coding',{},{},{skills:['mathematics']}),
    choice('code','I’ve written code, but would want to build my math skills',{},{},{skills:['programming']}),
    choice('both','I’m comfortable with both math and coding',{},{},{skills:['programming','mathematics']}),
    choice('unsure','I’m not sure yet'),
  ]},
  {id:'learning',title:'How would you like to learn something new?',hint:'Choose what sounds most appealing right now.',mode:'single',dimension:'learning',options:[
    choice('project','Try a small project and learn as I go'),
    choice('course','Follow a course with clear steps and exercises'),
    choice('study','Explore a longer program or qualification'),
    choice('deciding','Try a few things before deciding'),
  ]},
  {id:'environment',title:'What mix of work would suit you?',hint:'Choose up to two.',mode:'multi',max:2,dimension:'interest',options:[
    choice('lab','Moving around, using tools and working with physical things',{h:3,o:1}),
    choice('computer','Having quiet time at a computer to think and create',{p:2,a:2}),
    choice('site','Visiting different places and solving problems on the spot',{o:3},{'field-service-engineer':2,'systems-integration-engineer':1}),
    choice('operations','Working alongside a team to keep the day running smoothly',{o:3},{'robot-operations-specialist':2}),
    choice('mix','I’d like a mix, or don’t know yet',{},{},{exclusive:true}),
  ]},
  {id:'goal',title:'At the end of a project, what would feel most rewarding?',hint:'Choose the part you’d be most proud of.',mode:'single',dimension:'interest',options:[
    choice('machine','I made something tangible that works well',{h:4}),
    choice('behavior','I figured out a difficult problem and proved my idea',{a:3,p:1}),
    choice('team','I created something that makes other people’s work easier',{p:3,o:1}),
    choice('operation','I helped make something dependable in everyday use',{o:4}),
    choice('open','I want to try a few projects before choosing'),
  ]},
];
