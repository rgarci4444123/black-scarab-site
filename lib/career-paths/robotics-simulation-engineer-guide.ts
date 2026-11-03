import type { CareerGuideContent } from '@/lib/career-paths/types';
import compensation from '@/public/research/robotics-simulation-compensation-2026-11-02.json';
import { pinnedGuideResearch } from '@/lib/career-paths/research';
import { paragraph as p, heading as h, list, comparison, guideSeo, citation, postingSource, studySource, evidenceSource } from '@/lib/career-paths/guide-editorial';

const research = pinnedGuideResearch('simulation-engineer', 'physical-ai-2026-11-02-6b48026839dc');
if (compensation.snapshotId !== research.reference.snapshotId) throw new Error('Simulation compensation snapshot mismatch');
const mujoco = 'https://mujoco.readthedocs.io/en/stable/modeling.html';
const python = 'https://mujoco.readthedocs.io/en/stable/python.html';
const sensors = 'https://gazebosim.org/docs/harmonic/sensors/';
const identification = 'https://docs.isaacsim.omniverse.nvidia.com/latest/robot_setup_tutorials/tutorial_franka_system_identification.html';
const isaacLearning = 'https://docs.nvidia.com/learning/physical-ai/getting-started-with-isaac-sim/latest/building-your-first-robot-in-isaac-sim/01-building-a-simple-robot.html';
const salaryEstimate = new Intl.NumberFormat('en-US',{style:'currency',currency:compensation.currency,maximumFractionDigits:0}).format(compensation.estimate);

export const roboticsSimulationEngineerGuide: CareerGuideContent = {
  id:'robotics-simulation-engineer', occupationId:'simulation-engineer', familyId:'platforms-simulation', slug:'robotics-simulation-engineer',
  ...guideSeo('simulation-engineer'),status:'published',publishedAt:'2026-11-03',reviewedAt:'2026-11-03',research:research.reference,
  deck:"Build virtual robots and environments to develop, train and test robotic systems.",
  illustration:{"src":"/career-paths/robotics-simulation-engineer-lab.webp","width":1672,"height":941,"alt":"Illustration of an engineer exploring a virtual robot workcell with physics and control tools."},
  introduction:[
    'Robotics teams use simulation to develop software, try new movements and investigate failures before running them on physical machines. Simulation engineers build the virtual robots and environments that make this work possible.',
    'The job combines software development, physics and robotics. Some engineers model robot movement and physical interactions; others build platforms for testing autonomy software, training robot learning models and evaluating robotic systems.',
  ],
  overview:[
    {label:'What you do',value:'Build virtual robots and environments for development and testing',sourceIds:['one-x','shield','dyna']},
    {label:'Core skills',value:'Python, C++, robot dynamics and simulation tools',sourceIds:['one-x','shield']},
    {label:'Education',value:'Computer science, robotics, engineering or physics',sourceIds:['shield','dyna','applied']},
    {label:'Compensation',value:`${salaryEstimate} / year`,detail:'Black Scarab estimate',sourceIds:['compensation-estimate']},
  ],
  sections:[
    {id:'day-to-day',heading:'What does a robotics simulation engineer do?',navLabel:'The work',paragraphs:[],sourceIds:['one-x','shield','dyna'],blocks:[
      h('Physics and robot modeling'),
      p('Build virtual representations of robot bodies, joints, actuators and contacts. The model describes how a robot moves and interacts with objects, from a mobile base crossing a surface to a gripper holding a package.'),
      h('Virtual environments and sensors'),
      p('Create scenes with obstacles, objects, cameras, lidar and other simulated sensors. Teams use these environments to develop perception, navigation and manipulation across different conditions.'),
      h('Simulation software and infrastructure'),
      p('Connect simulation engines with robotics applications through APIs, plugins and software interfaces. Build automated test runs, improve performance and maintain the tools other engineers use to develop robot software.'),
      h('One assignment: investigate a slipping grasp'),
      p('Objects occasionally slip from a gripper during testing. A simulation engineer recreates the grasp, examines friction, contact forces and actuator behavior, and improves the model to help the team find the cause.'),
    ]},
    {id:'skills',heading:'What skills and tools do employers look for?',navLabel:'Skills & tools',paragraphs:[],sourceIds:['one-x','shield','dyna','mujoco','gazebo','isaac-randomization'],blocks:[
      h('Programming'),
      p('Use Python for simulation experiments, analysis and automation. C++ is important for simulator infrastructure, performance-sensitive software and robotics interfaces. Git, debugging and automated tests help keep shared simulation tools dependable.'),
      h('Robotics and physics'),
      p('Kinematics describes how joints determine robot motion; dynamics describes how forces and torques affect it. Learn coordinate frames, rigid-body models, contact mechanics and numerical methods. These foundations help explain why a robot’s behavior changes when its mass, friction or controller changes.'),
      h('Simulation platforms'),
      comparison('Tools and their applications',['Tool','Common applications'],[
        ['MuJoCo','Robot dynamics, control experiments and physical interactions.'],
        ['Gazebo','Robot and sensor simulation, often integrated with ROS.'],
        ['NVIDIA Isaac Sim','Robotics environments, sensor simulation and synthetic-data workflows.'],
      ]),
      p('Choose a platform for the assignment. Physics modeling, sensor simulation and shared software infrastructure call for different capabilities.'),
      h('What the employer postings ask for'),
      p('1X asks for experience with robotics simulators and sensor models, accepting MuJoCo, PyBullet, Isaac Sim or an equivalent platform. Shield AI’s Engineer I role asks for foundational C++ and Python; exposure to tools such as Gazebo and ROS 2 is preferred.'),
    ]},
    {id:'education',heading:'What education do you need?',navLabel:'Education',paragraphs:[],sourceIds:['shield','one-x','dyna','applied'],blocks:[
      p('Robotics simulation engineers come from computer science, robotics, mechanical engineering, physics and related technical fields. Software-focused roles emphasize programming and numerical computing; physics-modeling roles require more depth in mechanics and mathematics.'),
      comparison('Selected employer expectations',['Employer','Role','Education and experience'],[
        ['Shield AI','Engineer I, Simulation Framework','Technical bachelor’s; equivalent practical experience may be considered. Coursework, projects or internships can demonstrate programming foundations.'],
        ['1X','Simulation Engineer, Physics Modeling','5+ years of relevant industry experience, or an advanced degree plus hands-on experience.'],
        ['Dyna Robotics','Research Scientist, Simulation','Relevant MS/PhD in CS, robotics or graphics, or equivalent hands-on experience.'],
        ['Applied Intuition','Software Engineer, Simulation','Bachelor’s in CS or a similar field and 3+ years of professional engineering experience.'],
      ]),
      p('The Shield AI and Applied Intuition defense assignments also require US citizenship and security-clearance eligibility.'),
    ]},
    {id:'salary',heading:'How much do robotics simulation engineers earn?',navLabel:'Compensation',paragraphs:[],sourceIds:['study','evidence','shield','one-x'],blocks:[
      {type:'compensation',caption:'Selected US salary advertisements · November 2, 2026',examples:research.evidence.compensation,
        note:'The roles span Engineer I and experienced physics modeling; bonuses or equity may be additional.'},
      p('Early-career engineers may implement models, adapters and test tools. With experience, they can own complex simulation systems, shared infrastructure or a specialty such as contact physics, sensor modeling or performance engineering.'),
    ]},
    {id:'employers',heading:'Which companies hire robotics simulation engineers?',navLabel:'Hiring employers',paragraphs:[],sourceIds:['one-x','shield','dyna','nvidia'],blocks:[
      comparison('Representative employers in the November 2 research',['Employer','Application','Simulation work'],[
        ['1X','Humanoid robotics','Physics, actuators, contacts and hardware modeling.'],
        ['Shield AI','Autonomous systems','Simulation frameworks, APIs and testing.'],
        ['Dyna Robotics','Mobile manipulation','Virtual environments and simulated robot tasks.'],
        ['NVIDIA','Robotics development infrastructure','Simulation platforms, evaluation and research tools.'],
      ]),
    ]},
    {id:'transition',heading:'How to transition into robotics simulation',navLabel:'Career transitions',paragraphs:[],sourceIds:['shield','one-x','dyna','mujoco'],blocks:[
      comparison('Build on your current background',['Your background','Skills to develop','A useful first project'],[
        ['Software engineering','Robot dynamics and simulation tools.','Build a simulated robot and test its controller.'],
        ['Mechanical engineering','Python, simulator APIs and software testing.','Turn a mechanical model into an automated simulation.'],
        ['Graphics or game development','Robot physics, sensors and interfaces.','Build a robot environment with physical interactions.'],
        ['Test or validation engineering','Simulation modeling and numerical methods.','Create automated tests for a simulated robot.'],
        ['Student or career changer','Programming, mechanics and mathematics.','Build a simple robot simulation and document its behavior.'],
      ]),
    ]},
    {id:'portfolio',heading:'Build your first robotics simulation project',navLabel:'Portfolio project',paragraphs:[],sourceIds:['mujoco','mujoco-python','mujoco-joint','mujoco-actuators'],blocks:[
      h('Build and test a simulated robotic arm'),
      p('Use MuJoCo to model a small arm and control its movement. Begin with a fixed base and one actuated joint; add a second link and joint once you can run and measure the first stage.'),
      list([
        'Create the robot model. Define link geometry, mass, a hinge joint, motion limits and damping. Save the model in MuJoCo’s MJCF format.',
        'Add a controller. Use a position actuator to move toward a target joint angle, with bounded commands and actuator force or torque.',
        'Run a defined movement. Choose a short sequence of joint-angle targets and repeat it from the same starting configuration.',
        'Measure the response. Log commanded and actual joint angles, velocity and tracking error. For the two-joint extension, compare the tool position with the position predicted from the target joint angles.',
        'Change one physical parameter. Adjust link mass or joint damping, repeat the same commands and compare positioning error and settling behavior.',
        'Document the results. Plot the movement, show a short demonstration and explain what changed between configurations.',
      ],true),
      h('What to include in your portfolio'),
      list([
        'A working robot model and controller.',
        'Source code, dependency versions and setup instructions.',
        'A short demonstration video.',
        'Results comparing robot behavior under different physical conditions.',
        'An explanation of the main modeling and control decisions.',
      ]),
    ]},
  ],
  nextSteps:{id:'next-steps',heading:'Where to go next',paragraphs:[],sourceIds:['mujoco','gazebo','isaac-learning'],blocks:[{type:'resources',items:[
    {title:'MuJoCo: modeling',href:mujoco,description:'Learn to define robot bodies, joints, actuators and physical properties.'},
    {title:'Gazebo: robots and sensors',href:sensors,description:'Add simulated sensors and connect their outputs to robot software.'},
    {title:'NVIDIA Isaac Sim: build a simple robot',href:isaacLearning,description:'Learn robot construction, joints and drive setup through an official hands-on module.'},
  ]}]},
  researchNotes:[
    `The November 2, 2026 snapshot contains ${research.role.postingCount} advertisements across ${research.role.employerCount} selected employers in a broad simulation cohort; ${research.role.reviewedCount} original role assignments were analyst reviewed. The cohort includes adjacent circuit, CPU, hardware-analysis and V&V work.`,
    `The compensation estimate is the median advertised salary-range midpoint across ${compensation.postingCount} US simulation engineering advertisements from ${compensation.employerCount} employers, rounded to the nearest $1,000. Sales, presales, management and standalone V&V roles are excluded. Individual observations and source hashes are linked below.`,
    'Employer and geographic coverage is uneven, and the salary sample spans experience levels. The estimate excludes equity and bonuses; source fields do not consistently identify base pay. Qualification examples use full-source reviews, with captured records retained in the research archive.',
  ],
  citations:[studySource,evidenceSource,
    citation('compensation-estimate','Black Scarab: Robotics Simulation compensation estimate','/research/robotics-simulation-compensation-2026-11-02.json','Derived from the November 2 snapshot. Eligibility, exclusions, exact calculation, salary observations and source hashes.'),
    postingSource('one-x','one-x:ashby:bd7452e9-1f5a-4e49-b468-2ad98c20e2c3'),postingSource('shield','shield-ai:lever:71a4617f-c917-4536-bbf1-8d11d04d8cba'),postingSource('dyna','dyna:ashby:942cd530-b2b7-4141-8aaa-d844175e26ac'),postingSource('applied','applied-intuition:ashby:47432b51-af09-4435-993d-f0e692c0f6e8'),postingSource('nvidia','nvidia:workday:JR2023397'),
    citation('mujoco','MuJoCo: modeling',mujoco,'Primary model and physics documentation.'),
    citation('mujoco-actuators','MuJoCo: position actuators','https://mujoco.readthedocs.io/en/stable/XMLreference.html#actuator-position','Primary reference for position servos, control limits and actuator force limits.'),
    citation('isaac-learning','NVIDIA: Building a Simple Robot',isaacLearning,'Official learning module covering robot bodies, joints and drives.'),
    citation('mujoco-python','MuJoCo: Python API',python,'Native model/data/stepping API. Follow the installed version.'),
    citation('mujoco-joint','MuJoCo: joint parameters','https://mujoco.readthedocs.io/en/stable/XMLreference.html#body-joint','Primary hinge-joint and damping parameter reference.'),
    citation('gazebo','Gazebo Harmonic: sensors',sensors,'Primary release-specific sensor setup tutorial.'),
    citation('isaac-randomization','Isaac Sim: scene randomization','https://docs.isaacsim.omniverse.nvidia.com/latest/replicator_tutorials/tutorial_replicator_isaac_randomizers.html','Primary synthetic-data and randomization documentation. APIs and compute requirements are release-specific.'),
    citation('identification','Isaac Sim: system identification',identification,'Primary tutorial for measured telemetry, fitting and held-out replay. Beta API with specific prerequisites.'),
    citation('nist','NIST: Credibility Consideration for Digital Twins in Manufacturing','https://www.nist.gov/publications/credibility-consideration-digital-twins-manufacturing','2022 research abstract on purpose-specific credibility and uncertainty.'),
  ],
};
