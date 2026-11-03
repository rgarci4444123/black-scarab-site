import type { CareerGuideContent } from '@/lib/career-paths/types';
import compensation from '@/public/research/robot-learning-compensation-2026-11-02.json';
import { pinnedGuideResearch } from '@/lib/career-paths/research';
import { paragraph as p, heading as h, list, comparison, guideSeo, citation, postingSource, studySource, evidenceSource } from '@/lib/career-paths/guide-editorial';

const research = pinnedGuideResearch('robot-learning-engineer', 'physical-ai-2026-11-02-6b48026839dc');
if (compensation.snapshotId !== research.reference.snapshotId) throw new Error('Robot Learning compensation snapshot mismatch');
const salaries = [...research.evidence.compensation].sort((a,b)=>a.minimum-b.minimum);
const salaryEstimate = new Intl.NumberFormat('en-US',{style:'currency',currency:compensation.currency,maximumFractionDigits:0}).format(compensation.estimate);
const reacher = 'https://gymnasium.farama.org/environments/mujoco/reacher/';
const evaluation = 'https://stable-baselines3.readthedocs.io/en/master/guide/rl_tips.html';
const imitation = 'https://huggingface.co/docs/lerobot/main/en/il_sim';

export const robotLearningEngineerGuide: CareerGuideContent = {
  id:'robot-learning-engineer', occupationId:'robot-learning-engineer', familyId:'intelligence-autonomy', slug:'robot-learning-engineer',
  ...guideSeo('robot-learning-engineer'), status:'published',publishedAt:'2026-11-03', reviewedAt:'2026-11-03', research:research.reference,
  deck:"Develop machine learning systems that teach robots to perform physical tasks.",
  illustration:{"src":"/career-paths/robot-learning-engineer-lab.webp","width":1671,"height":941,"alt":"Illustration of a robot learning engineer linking perception, a learned policy and quadruped robot actions."},
  introduction:[
    'A robot can identify an object without knowing how to pick it up. It needs to decide where to grip, how to move and how to recover when something goes wrong.',
    'Robot learning engineers develop machine learning systems that help robots acquire these behaviors through demonstrations and experimentation. Their work combines AI, software engineering and robotics to turn trained models into reliable physical actions.',
  ],
  overview:[
    {label:'What you do',value:'Train robots to perform physical tasks using machine learning',sourceIds:['applied-manipulation','figure']},
    {label:'Core skills',value:'Python, PyTorch, reinforcement learning and robotics',sourceIds:['study','agile']},
    {label:'Education',value:'Computer science or engineering',detail:'Research roles often seek graduate education.',sourceIds:['applied-manipulation','applied-grad','dyna','fieldai']},
    {label:'Compensation',value:`${salaryEstimate} / year`,detail:'Black Scarab estimate',sourceIds:['compensation-estimate']},
  ],
  sections:[
    {id:'day-to-day',heading:'What does a robot learning engineer do?',navLabel:'The work',paragraphs:[],sourceIds:['applied-manipulation','figure','agile','rl-intro'],blocks:[
      p('An engineer developing a robotic picking system might train a robot to grasp unfamiliar objects and place them into containers. The model, called a policy, translates observations of the robot and its surroundings into actions.'),
      p('The work follows a learning loop:'),
      list([
        'Define the task. Specify what the robot must accomplish and how success will be measured, such as successful picks, cycle time and operator interventions.',
        'Collect data. Gather demonstrations, simulation experience or physical robot observations.',
        'Train a policy. Develop or fine-tune a model that selects actions for the task.',
        'Evaluate performance. Test unfamiliar objects, changing conditions and common failure scenarios.',
        'Improve deployment. Diagnose failures, refine the data or training process and test again on the intended robot.',
      ],true),
      p('Much of the job involves experimentation and troubleshooting: a missed grasp can originate in the data, camera calibration, policy or control timing.'),
      h('How do robots learn?'),
      comparison('Two ways to learn a robot behavior',['Approach','How it works','Example'],[
        ['Imitation learning','Learns behavior from demonstrations.','A grasping policy trained on operator-guided demonstrations.'],
        ['Reinforcement learning','Learns through interaction and rewards.','A simulated arm learns to reach a target through repeated attempts.'],
      ]),
      p('Some systems combine both approaches, beginning with demonstrations and improving through reinforcement learning. Vision-language-action models use visual and language inputs to help generate robot actions.'),
      p('The focus is behavior: perception estimates what and where things are; a policy selects an action; control software executes it. A policy might output a target joint position or tool movement for a controller to translate into motor commands.'),
    ]},
    {id:'skills',heading:'What skills do employers look for?',navLabel:'Technical skills',paragraphs:[],sourceIds:['study','agile','applied-manipulation','figure','domain-randomization'],blocks:[
      {type:'skill-mentions',title:`Most frequently mentioned skills · ${research.role.postingCount} advertisements`,denominator:research.role.postingCount,
        rows:research.role.skills.map(({label,count,required,preferred,contextual})=>({label,count,required,preferred,contextual})),
        note:'Black Scarab employer research · November 2026 · Automatically coded mentions.',
        detailNote:'Each skill is counted once per advertisement using its strongest detected wording: required (including alternatives), preferred or contextual.'},
      h('Programming and machine learning'),
      p('Engineers use Python and PyTorch to prepare datasets, train models, run experiments and evaluate results. C++ is relevant to robot software, runtime interfaces and deployment.'),
      h('Robotics fundamentals'),
      p('Kinematics connects joint positions to tool movement; dynamics describes motion under forces and torques. Coordinate frames, sensing, calibration and control timing connect a policy’s predictions to the physical robot.'),
      h('Learning methods and evaluation'),
      p('Learn reinforcement learning, imitation learning and multimodal policy approaches alongside experiment design. Compare against a baseline, test unfamiliar conditions and investigate why a policy fails.'),
      p('Simulation provides repeatable trials before hardware tests. Domain randomization varies conditions such as friction or sensing during training; physical trials show how well the learned behavior transfers.'),
    ]},
    {id:'education',heading:'What education do you need?',navLabel:'Education',paragraphs:[],sourceIds:['applied-grad','applied-manipulation','dyna','fieldai'],blocks:[
      p('Engineering roles can accept a bachelor’s degree with relevant experience. Research-intensive positions put more weight on graduate education, publications and research experience.'),
      comparison('Qualifications in selected employer advertisements',['Employer','Role','Education and experience'],[
        ['Applied Intuition','Robot Learning Engineer, Manipulation','Bachelor’s in CS, software engineering or equivalent; 1+ professional year and deployed robot-learning experience.'],
        ['Applied Intuition','Research Engineer, New Grad (2027)','Relevant master’s or PhD; 1+ year of experience or equivalent education and experience.'],
        ['Dyna Robotics','Research Scientist','PhD preferred, or a CS/robotics master’s with a significant publication record; 5+ years of AI/robotics research, including physical deployment.'],
        ['FieldAI','Senior Research Engineer','Related bachelor’s, master’s or PhD; 2+ years of manipulation or robot-learning experience in academia or industry.'],
      ]),
      h('Do you need a PhD?'),
      p('Applied Intuition’s manipulation role accepts a bachelor’s or equivalent preparation. Its graduate research role asks for a master’s or PhD. Choose the engineering or research route by the work you want to do, then compare the requirements of specific roles.'),
      p('For students, prioritize computer science, linear algebra, probability, machine learning and robotics. Laboratory work and projects should show that you can build an experiment, measure results and explain your decisions.'),
    ]},
    {id:'salary',heading:'How much do robot learning engineers earn?',navLabel:'Compensation',paragraphs:[],sourceIds:['study','evidence','applied-grad','dyna','fieldai'],blocks:[
      {type:'compensation',caption:'Selected US salary advertisements · November 2, 2026',examples:salaries,
        note:'Equity and bonuses may be additional.'},
      p('Engineers can progress from developing training or evaluation components to owning complete robot-learning systems, leading research projects or building infrastructure used across multiple robotic applications.'),
    ]},
    {id:'employers',heading:'Which companies hire robot learning engineers?',navLabel:'Hiring employers',paragraphs:[],sourceIds:['study','applied-manipulation','figure','anybotics','agile'],blocks:[
      comparison('Representative employers in the November 2 research',['Company','Robotics focus','Example engineering work'],[
        ['Applied Intuition','Industrial manipulation','Demonstration data, policy training, evaluation and deployment.'],
        ['Figure','Humanoid robotics','Whole-body control and reinforcement learning.'],
        ['ANYbotics','Legged inspection robots','Motion policies and field robustness.'],
        ['Agile Robots','Robotic manipulation','Multimodal learning and robotic action generation.'],
      ]),
      p('Similar work appears under titles such as Robot Learning Engineer, Machine Learning Engineer for Robotics, Manipulation Engineer and Reinforcement Learning Engineer.'),
    ]},
    {id:'transition',heading:'How to transition into robot learning',navLabel:'Career transitions',paragraphs:[],sourceIds:['applied-manipulation','applied-grad','figure','agile'],blocks:[
      comparison('Build on your current background',['Your background','What to develop','A useful first project'],[
        ['Software engineering','ML training and robotics fundamentals.','Train and evaluate a simulated robot policy.'],
        ['Machine learning','Robot control, kinematics and physical constraints.','Test a learned policy in a robotics environment.'],
        ['Controls or robotics','Deep learning and training pipelines.','Compare learned and conventional control methods.'],
        ['Engineering student','Practical research and experimentation.','Reproduce and evaluate a small robot-learning experiment.'],
        ['Other fields','Programming, mathematics and ML foundations.','Build a basic simulation and evaluation pipeline.'],
      ]),
      p('A strong transition project defines a robotics problem, develops a working approach, measures the result and explains what failed.'),
    ]},
    {id:'portfolio',heading:'Build your first robot learning project',navLabel:'Portfolio project',paragraphs:[],sourceIds:['reacher','evaluation','rl-intro'],blocks:[
      p('Train a simulated robotic arm to reach a target using Gymnasium’s Reacher-v5, a two-joint arm with continuous torque actions. Compare the learned policy with a random-action baseline.'),
      h('What you’ll do'),
      list([
        'Set up Reacher-v5 and understand its observations, actions and rewards. Record your package versions.',
        'Run a random-action policy to establish baseline performance.',
        'Train a policy using an established implementation of SAC or PPO.',
        'Evaluate on held-out seeds in a separate test environment. Compare return and target distance with the baseline across repeated runs.',
        'Identify one failure, make a targeted improvement and repeat the same evaluation.',
      ],true),
      h('What to include in your portfolio'),
      list([
        'Working code, dependency versions and setup instructions.',
        'Training and evaluation results, including a baseline comparison.',
        'Short videos or visualizations of the robot.',
        'An explanation of what worked, what failed and what you changed.',
      ]),
      p('The project exercises training, experimentation, evaluation and debugging: core parts of robot learning engineering.'),
    ]},
  ],
  nextSteps:{id:'next-steps',heading:'Where to go next',paragraphs:[],sourceIds:['rl-intro','evaluation','lerobot'],blocks:[{type:'resources',items:[
    {title:'OpenAI Spinning Up: reinforcement learning concepts',href:'https://spinningup.openai.com/en/latest/spinningup/rl_intro.html',description:'An introduction to policies, rewards and learning objectives.'},
    {title:'Stable Baselines3: experiments and evaluation',href:evaluation,description:'Practical guidance on training, separate test environments and repeated evaluation.'},
    {title:'Hugging Face LeRobot: imitation learning in simulation',href:imitation,description:'A tutorial on recording demonstrations, training a policy and evaluating it with a simulated robot arm.'},
  ]}]},
  researchNotes:[
    `The November 2, 2026 snapshot contains ${research.role.postingCount} advertisements from ${research.role.employerCount} selected employers in a normalized robot-learning cohort spanning research and deployment roles. Employer and geographic coverage is uneven.`,
    'Role assignments and skill mentions were machine-coded; two original role assignments were analyst reviewed. Each skill is counted once per advertisement using its strongest detected wording. The chart includes required, preferred and contextual mentions.',
    `Black Scarab’s compensation estimate is the median advertised salary-range midpoint across ${compensation.postingCount} US policy-learning advertisements from ${compensation.employerCount} employers, rounded to the nearest $1,000. It covers mixed experience levels in California and Boston and excludes equity and bonuses. The calculation and source records are linked below.`,
  ],
  citations:[studySource,evidenceSource,
    citation('compensation-estimate','Black Scarab: Robot Learning compensation estimate','/research/robot-learning-compensation-2026-11-02.json','Derived from the November 2 snapshot. Eligibility, exclusions, exact calculation, individual salary observations and source hashes.'),
    postingSource('applied-manipulation','applied-intuition:ashby:ef7fb9ed-e254-4b90-aef2-efa9c30e7cd8'),postingSource('applied-grad','applied-intuition:ashby:45fc41cd-8280-4010-ba1f-def6114b3e39'),postingSource('dyna','dyna:ashby:357b1b23-0712-489e-b336-1462f186cba7'),postingSource('fieldai','fieldai:lever:f53cce40-b227-4a0d-94c5-ef038f2c6341'),postingSource('figure','figure:greenhouse:4671442006'),postingSource('anybotics','anybotics:lever:63f0c6db-0a1f-4a4a-87dd-9a43c9c2bdd2'),postingSource('agile','agile-robots:greenhouse:4964863101'),
    citation('rl-intro','OpenAI Spinning Up: key concepts','https://spinningup.openai.com/en/latest/spinningup/rl_intro.html','Primary educational reference for policies, rewards and RL concepts.'),
    citation('domain-randomization','Tobin et al.: Domain Randomization for Transferring Deep Neural Networks from Simulation to the Real World','https://arxiv.org/abs/1703.06907','Original 2017 research on domain randomization; not evidence that every randomization strategy transfers.'),
    citation('reacher','Gymnasium: Reacher',reacher,'Primary environment specification, continuous actions and reward. Proposed project has not been run or benchmarked here.'),
    citation('evaluation','Stable Baselines3: reinforcement-learning tips',evaluation,'Primary evaluation and reproducibility guidance.'),
    citation('lerobot','Hugging Face LeRobot: imitation learning in simulation',imitation,'Main-version primary tutorial; package installation and compute requirements should be checked before use.'),
  ],
};
