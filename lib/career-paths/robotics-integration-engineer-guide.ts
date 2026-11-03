import type { CareerGuideContent } from '@/lib/career-paths/types';
import compensation from '@/public/research/robotics-integration-compensation-2026-11-02.json';
import { pinnedGuideResearch } from '@/lib/career-paths/research';
import { paragraph as p, heading as h, list, comparison, guideSeo, citation, postingSource, studySource, evidenceSource } from '@/lib/career-paths/guide-editorial';

const research = pinnedGuideResearch('systems-integration-engineer', 'physical-ai-2026-11-02-6b48026839dc');
if (compensation.snapshotId !== research.reference.snapshotId) throw new Error('Integration compensation snapshot mismatch');
const salaryEstimate = new Intl.NumberFormat('en-US',{style:'currency',currency:compensation.currency,maximumFractionDigits:0}).format(compensation.estimate);
const modbus = 'https://www.modbus.org/modbus-specifications';
const simulator = 'https://pymodbus.readthedocs.io/en/v3.11.4/source/library/simulator/config.html';
const testing = 'https://raw.githubusercontent.com/ros2/ros2_documentation/jazzy/source/Tutorials/Intermediate/Testing/Integration.rst';
const qos = 'https://raw.githubusercontent.com/ros2/ros2_documentation/jazzy/source/Concepts/Intermediate/About-Quality-of-Service-Settings.rst';
const rosLearning = 'https://github.com/ros2/ros2_documentation/blob/jazzy/source/Tutorials/Intermediate/Testing/Integration.rst';

export const roboticsIntegrationEngineerGuide: CareerGuideContent = {
  id:'robotics-integration-engineer',occupationId:'systems-integration-engineer',familyId:'integration-operations',slug:'robotics-integration-engineer',
  ...guideSeo('systems-integration-engineer'),status:'published',publishedAt:'2026-11-03',reviewedAt:'2026-11-03',research:research.reference,
  deck:"Connect robots, software and equipment into working systems in factories, warehouses and the field.",
  illustration:{"src":"/career-paths/robotics-integration-engineer-lab.webp","width":1672,"height":941,"alt":"Illustration of an engineer connecting a robotic arm with vision, PLC controls and production systems."},
  introduction:[
    'A robot can work in a laboratory and still fail when introduced into a factory or warehouse. Robotics integration engineers connect robots with software, sensors and surrounding equipment so the complete system works in its operating environment.',
    'The work ranges from configuring industrial robot cells and programming controls to deploying robotics applications powered by AI. It combines engineering, programming and hands-on troubleshooting.',
  ],
  overview:[
    {label:'What you do',value:'Connect, configure, test and deploy robotic systems',sourceIds:['standard','intrinsic','nimble']},
    {label:'Core skills',value:'Robot programming, PLCs, systems integration and troubleshooting',sourceIds:['standard','agile','skild']},
    {label:'Education',value:'Engineering, mechatronics or relevant practical experience',sourceIds:['standard','intrinsic','agile']},
    {label:'Compensation',value:`${salaryEstimate} / year`,detail:'Black Scarab estimate',sourceIds:['compensation-estimate']},
  ],
  sections:[
    {id:'day-to-day',heading:'What does a robotics integration engineer do?',navLabel:'The work',paragraphs:[],sourceIds:['standard','intrinsic','agile','nimble','skild'],blocks:[
      p('Integration engineers make robots function within larger systems. On a production line, the robot must coordinate with sensors, conveyors, controllers and software. The engineer configures those connections and diagnoses problems across them.'),
      list([
        'System configuration: connect robots, sensors, tooling and production equipment.',
        'Programming and interfaces: configure robot behavior and communication between components.',
        'Commissioning: bring a system into operation and test it against the application’s requirements.',
        'Troubleshooting: investigate mechanical, electrical, network and software faults.',
        'Deployment and support: document configurations, train operators and improve reliability.',
      ],true),
      h('Industrial robotics integration'),
      p('In factories and automated warehouses, the work often involves robot controllers, PLCs, conveyors, grippers and sensors. The goal is to make the equipment perform a repeatable production task.'),
      h('Advanced robotics and AI deployment'),
      p('Software-oriented roles connect robotic hardware with perception, autonomy software and learned behaviors. Python, C++, Linux and ROS 2 can be part of the stack. Agile Robots and Skild AI illustrate this model-to-robot deployment work.'),
      h('Example: deploying a robotic picking system'),
      p('For an arm picking products from a conveyor, an integration engineer might configure the camera and robot, connect the conveyor’s control signals and coordinate the picking sequence. Testing includes what happens when a product is missed or the conveyor stops.'),
    ]},
    {id:'skills',heading:'What skills do employers look for?',navLabel:'Skills & tools',paragraphs:[],sourceIds:['standard','intrinsic','agile','nimble','skild'],blocks:[
      h('Industrial automation and controls'),
      p('Learn PLC programming, robot controllers, electrical interfaces, wiring and sensor integration. A PLC coordinates equipment: it can wait for a part-detection signal before allowing a picking sequence to begin. Industrial communication protocols carry commands and status between devices.'),
      h('Software and robotics systems'),
      p('Python or C++, Linux, robot programming, APIs and network troubleshooting help connect and debug robotic applications. ROS 2 is useful in stacks built around communicating robotics software. Choose tools around the systems you want to deploy.'),
      h('Practical engineering'),
      p('Understand calibration, coordinate frames, tooling and equipment behavior well enough to investigate failures. A missed grasp could come from camera alignment, a mechanical problem or a delayed command; logs and measurements help isolate the cause.'),
      h('What our employer research shows'),
      list([
        'Standard Bots emphasizes PLCs, robot programming, wiring, Python and hands-on commissioning.',
        'Agile Robots requires C++, Python and Linux; industrial protocols and PLC familiarity are beneficial skills.',
        'Nimble Robotics focuses on hardware and software bottlenecks, picking throughput and warehouse reliability.',
        'Skild AI connects foundation models with deployed robots; Python, C++ and ROS/ROS2 appear among its preferred qualifications.',
      ]),
    ]},
    {id:'education',heading:'What education do you need?',navLabel:'Education',paragraphs:[],sourceIds:['standard','intrinsic','agile','nimble'],blocks:[
      p('Common degree backgrounds include mechanical, electrical, mechatronics, robotics and computer engineering or science. Standard Bots, Intrinsic and Agile Robots also accept relevant practical experience.'),
      comparison('Selected employer qualifications',['Employer and role','Education and experience'],[
        ['Standard Bots · Senior Applications Engineer','Relevant engineering bachelor’s or equivalent hands-on experience; 6+ years in industrial automation.'],
        ['Intrinsic · Senior Robotics Application Engineer','Relevant technical bachelor’s or equivalent experience; a record of delivering production automation.'],
        ['Agile Robots · Forward Deployed Engineer','Relevant master’s or equivalent practical experience; 4+ years in robotics, AI, automation or software engineering.'],
        ['Nimble · Senior Systems Integration Engineer','Related BS or MS; 5+ years in robotics integration, hardware validation or mechatronics.'],
      ]),
      p('These are experienced-role examples; entry-level positions have different expectations.'),
      h('Can you enter without an engineering degree?'),
      p('Automation technician, robotics technician, maintenance and industrial controls work can provide a practical starting point. Moving into engineering responsibilities may require additional programming, networking, system design and technical qualifications. Equivalent-experience routes exist, but you still need evidence that you can integrate and troubleshoot a complete system.'),
    ]},
    {id:'salary',heading:'How much do robotics integration engineers earn?',navLabel:'Compensation',paragraphs:[],sourceIds:['evidence','standard','nimble'],blocks:[
      {type:'compensation',caption:'Selected senior U.S. advertisements · November 2026',examples:research.evidence.compensation,note:'Standard Bots lists salary; Nimble lists starting cash compensation. Both are senior roles, with equity additional.'},
      h('Career progression'),
      p('Junior engineers and technicians support configuration, programming and testing. Experienced engineers take responsibility for complete deployments and complex troubleshooting. Senior technical roles can lead integration projects, system architecture, commissioning teams or deployments across multiple sites.'),
    ]},
    {id:'employers',heading:'Which companies hire robotics integration engineers?',navLabel:'Hiring employers',paragraphs:[],sourceIds:['standard','intrinsic','nimble','agile','skild'],blocks:[
      comparison('Employer examples',['Company','Robotics application','Integration work'],[
        ['Standard Bots','Industrial robotic cells','Robot programming, PLCs, commissioning and customer training.'],
        ['Intrinsic','Industrial automation software','Robotic applications and production deployment.'],
        ['Nimble Robotics','Warehouse automation','Reliability, troubleshooting and picking throughput.'],
        ['Agile Robots','Workcells and mobile manipulation','Software and model integration, deployment and field troubleshooting.'],
        ['Skild AI','AI-powered robotics','Connecting learned behaviors, robot software and hardware.'],
      ]),
      p('Related titles include Robotics Applications Engineer, Systems Integration Engineer and Forward Deployed Engineer for Robotics. Customer-site travel is common in deployment roles: Standard Bots specifies up to 50% domestic travel, while Agile Robots specifies up to 40% travel.'),
    ]},
    {id:'transition',heading:'How to transition into robotics integration',navLabel:'Career transitions',paragraphs:[],sourceIds:['standard','intrinsic','agile','nimble','skild'],blocks:[
      comparison('Routes into integration',['Background','Skills to develop','Practical project'],[
        ['Industrial automation','Robot programming, motion and robotics software','Coordinate a robot with a simulated conveyor.'],
        ['Technician or maintenance','Programming, networking and system design','Build and troubleshoot a simulated robotic cell.'],
        ['Software engineering','PLCs, physical interfaces and calibration','Connect robot and equipment simulators.'],
        ['Mechanical or electrical engineering','Robot configuration and control interfaces','Integrate sensors and actuators in a virtual workcell.'],
        ['Student or career changer','Programming and robotics fundamentals','Build a small automated pick-and-place sequence.'],
      ]),
      p('Show how you diagnosed a failure across components, used measurements to identify its cause and documented the fix. That evidence makes practical experience easier for an employer to assess.'),
    ]},
    {id:'portfolio',heading:'Build your first robotics integration project',navLabel:'Portfolio project',paragraphs:[],sourceIds:['modbus','pymodbus','ros-learning','osha'],blocks:[
      h('Build a simulated robotic pick-and-place workcell'),
      p('Create a small virtual station with a robot emulator, an incoming part queue or conveyor, a part-detection sensor and a controller. A visual simulation or a logic-based program can demonstrate the coordination; physical equipment is optional.'),
      h('What you’ll build'),
      list([
        'Create a virtual robot station and conveyor or part queue. A robot emulator can report ready, busy and completed states.',
        'Simulate a sensor detecting an incoming part.',
        'Have the controller start the robot’s pick-and-place sequence when the station is ready.',
        'Coordinate the robot and surrounding equipment through defined command and status signals. Complete one cycle before accepting the next part.',
        'Introduce a missing part or a failed completion signal.',
        'Detect the fault, report its cause and pause the sequence until an explicit recovery action.',
        'Record a normal cycle, the fault and the successful recovery.',
      ],true),
      p('Modbus TCP with PyModbus or a ROS 2 application can provide the communication layer. Start with one robot process and one equipment process exchanging a few signals.'),
      h('What to include in your portfolio'),
      list([
        'A working demonstration with source code and setup instructions.',
        'A simple diagram showing the components and their connections.',
        'A short video or visual record of normal operation.',
        'One troubleshooting example with the failure, diagnosis and fix.',
        'A brief explanation of the sequence and recovery behavior.',
      ]),
      p('This simulated exercise demonstrates integration logic. Physical commissioning also requires application-specific safety assessment and validation.'),
    ]},
  ],
  nextSteps:{id:'next-steps',heading:'Where to go next',paragraphs:[],sourceIds:['modbus','pymodbus','ros-learning'],blocks:[{type:'resources',items:[
    {title:'Modbus Specifications',href:modbus,description:'Official references for a common industrial communication protocol.'},
    {title:'PyModbus',href:simulator,description:'Tools and configuration examples for experimenting with simulated industrial communication.'},
    {title:'ROS 2 Documentation',href:rosLearning,description:'An official tutorial on testing interactions between communicating robotics applications.'},
  ]}]},
  researchNotes:[
    `The November 2, 2026 dataset contains ${research.role.postingCount} advertisements across ${research.role.employerCount} selected employers in a normalized Systems Integration cohort; ${research.role.reviewedCount} original role assignments were marked reviewed. The cohort includes industrial applications, autonomous-vehicle deployment, internal bring-up, pre-sales and an unrelated training-product role. Employer comparisons use selected full-source reviews; no industrial-only skill prevalence or opening count is inferred.`,
    `The Black Scarab compensation estimate is the median salary-range midpoint from ${compensation.postingCount} U.S. advertisements across ${compensation.employerCount} employers, rounded to the nearest $1,000. It covers robot-application integration and autonomy deployment from early-career through staff roles. It uses structured annual USD ranges plus Nimble’s previously verified annual starting-cash range. Account strategy, program management, unrelated data infrastructure, internal integration/test and primarily sustainment roles are excluded. Source IDs, hashes and exclusions are in the linked estimate record; bonuses and equity are excluded.`,
    'Coverage spans several countries and is uneven. The two annual compensation examples are senior U.S. advertisements collected on the snapshot date. Standard Bots lists salary; Nimble explicitly lists starting cash compensation per year. Skild AI’s source gives a salary range without an explicit period, so it is omitted from the annual comparison. These examples are not a market average or a live vacancy count.',
    'Exact qualification wording, source IDs and source hashes remain in the linked evidence export and original archive. Equivalent experience is an explicit alternative at Standard Bots, Intrinsic and Agile Robots; Skild’s degree, experience and software criteria are preferred qualifications. The proposed workcell is an introductory project outline, not an implemented or safety-validated physical system. Editorial review: November 3, 2026.',
  ],
  citations:[studySource,evidenceSource,
    citation('compensation-estimate','Black Scarab: robotics integration compensation estimate','/research/robotics-integration-compensation-2026-11-02.json','Derived November 3 from the pinned November 2 dataset. Eligible observations, annual compensation fields, source IDs, hashes and exclusions are preserved.'),
    postingSource('standard','standard-bots:ashby:0f10edc9-c87b-4c9e-b0ab-f6cc5be6af91'),postingSource('intrinsic','intrinsic:greenhouse:6015988004'),postingSource('nimble','nimble:greenhouse:4398427009'),postingSource('agile','agile-robots:greenhouse:4964789101'),postingSource('skild','skild:greenhouse:5228768008'),
    citation('ros-learning','ROS 2 Jazzy: integration testing tutorial',rosLearning,'Official documentation on GitHub for testing interactions between nodes.'),
    citation('modbus','Modbus Organization: specifications',modbus,'Primary protocol and TCP/IP implementation references.'),
    citation('pymodbus','PyModbus 3.11.4: simulator configuration',simulator,'Primary versioned simulator documentation. The proposed bench has not been implemented or validated here.'),
    citation('qos','ROS 2 Jazzy: quality of service',qos,'Official documentation source. The rendered docs site was blocked; the official source was accessed instead.'),
    citation('testing','ROS 2 Jazzy: integration testing',testing,'Official documentation source for launch_testing; rendered-site access was blocked.'),
    citation('bags','ROS 2 Jazzy: recording and playback','https://raw.githubusercontent.com/ros2/ros2_documentation/jazzy/source/Tutorials/Beginner-CLI-Tools/Recording-And-Playing-Back-Data/Recording-And-Playing-Back-Data.rst','Official documentation source for topic data recording/replay.'),
    citation('osha','OSHA Technical Manual: industrial robot systems','https://www.osha.gov/otm/section-4-safety-hazards/chapter-4','US technical guidance for assessment and validation responsibility. It references older standards editions; this guide does not establish current worldwide legal or certification requirements.'),
  ],
};
