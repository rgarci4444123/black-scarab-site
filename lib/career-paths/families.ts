import { occupations } from './occupations';
import type { CareerFamily, FamilyId, Citation } from './types';
const citation = (id: string, title: string, url: string, scope?: string): Citation => ({ id, title, url, accessedAt: '2026-10-30', scope });
const shared = { compensation: [], employment: [], learningResources: [], lastReviewed: null, status: 'foundation' as const };
const roleIds = (id: FamilyId) => occupations.filter(role => role.primaryFamilyId === id).map(role => role.id);
export const families: CareerFamily[] = [
  {
    ...shared, id: 'hardware-manufacturing', slug: 'hardware-manufacturing', number: '01', name: 'Hardware & Manufacturing',
    shortDescription: 'Design, engineer, and manufacture the physical systems that make intelligent machines possible.',
    introduction: ['Every intelligent machine has a physical design: structures that carry loads, electronics that deliver power, and mechanisms that turn commands into movement. This family develops those systems and the processes used to build them.', 'The work spans engineering, fabrication, assembly, and hands-on testing. A design is only useful if its components fit together, withstand real conditions, and can be manufactured consistently.'],
    primaryResponsibility: 'Developing and producing the machine’s physical and embedded systems.',
    boundaries: 'Motor-controller firmware belongs here. Designing the feedback algorithm that determines the robot’s motion belongs in Intelligence & Autonomy.',
    specialties: ['Mechanical design', 'Electronics', 'Mechatronics', 'Embedded systems', 'Actuators', 'Production engineering'],
    occupationIds: roleIds('hardware-manufacturing'),
    work: { heading: 'What the work involves', paragraphs: ['Translate performance requirements into component designs, prototypes, and test plans. The practical decisions include materials, dimensions, heat, power, wiring, tolerances, and how the finished system will be assembled and inspected.'] },
    example: { title: 'Building a robot hand', description: 'Mechanical engineers design the fingers and transmission. Electrical and firmware engineers connect sensing and motor control. Technicians assemble prototypes, while manufacturing engineers work out how to build and inspect the hand repeatedly.' },
    skills: { technical: ['CAD and engineering drawings', 'Mechanics and materials', 'Circuits and instrumentation', 'Embedded C/C++', 'Assembly and test methods'], professional: ['Documenting design decisions', 'Working across engineering disciplines', 'Investigating failures'], qualifications: 'Degree pathways are common for engineering roles; technician pathways can include an associate degree or postsecondary certificate. The relevant preparation depends on whether the work centers on design, embedded development, assembly, or testing.', sourceIds: ['bls-mechanical', 'bls-mechatronics'] },
    gettingStarted: { heading: 'How to get started', paragraphs: ['Choose a small electromechanical assembly and document its design, parts, wiring, and test results. Students can use coursework or a supervised lab project; technicians and career changers can build on experience in electronics, machining, assembly, or equipment testing.'] },
    relatedArticles: [{ title: 'What are robot actuators?', path: '/insights/what-are-robot-actuators-motors-gears-costs-companies' }],
    citations: [citation('bls-mechanical', 'BLS · Mechanical engineers', 'https://www.bls.gov/ooh/architecture-and-engineering/mechanical-engineers.htm', 'U.S. education and training context'), citation('bls-mechatronics', 'BLS · Mechatronics technologists and technicians', 'https://www.bls.gov/ooh/architecture-and-engineering/electro-mechanical-technicians.htm', 'U.S. education and training context')],
  },
  {
    ...shared, id: 'intelligence-autonomy', slug: 'intelligence-autonomy', number: '02', name: 'Intelligence & Autonomy',
    shortDescription: 'Develop the models and algorithms that allow machines to perceive, learn, plan, and act.',
    introduction: ['A robot needs to interpret its surroundings, decide what to do, and turn that decision into controlled motion. This family develops the models and algorithms behind those capabilities.', 'The work connects learning and perception with geometry, planning, and feedback. A system must be evaluated against the task it performs, including the conditions in which its decisions fail.'],
    primaryResponsibility: 'Developing machine perception, learning, decision-making, and control methods.',
    boundaries: 'Training a robot policy in simulation belongs here. Building the simulation environment itself belongs in Platforms & Simulation.',
    specialties: ['Robot learning', 'Computer vision', 'Sensor fusion', 'Motion planning', 'Feedback control', 'Localization and mapping'],
    occupationIds: roleIds('intelligence-autonomy'),
    work: { heading: 'What the work involves', paragraphs: ['Develop representations of the environment, train or implement decision methods, and measure behavior across test conditions. Engineers and researchers examine data quality, uncertainty, task success, timing, and the gap between a controlled test and physical deployment.'] },
    example: { title: 'Teaching a robot to pick up an object', description: 'Perception estimates where the object is. A learned policy or planner selects an approach, and a controller executes the movement. The team tests changes in lighting, object position, and contact to understand where the behavior breaks down.' },
    skills: { technical: ['Python and C++', 'Linear algebra and probability', 'Machine learning', 'Geometry and state estimation', 'Planning and control', 'Experimental evaluation'], professional: ['Designing reproducible experiments', 'Interpreting failure cases', 'Communicating model limitations'], qualifications: 'Preparation varies between software implementation, controls engineering, and research. Mathematics and programming are useful foundations; research scientist pathways often include graduate study. A single degree requirement would not describe this whole family.', sourceIds: ['bls-research', 'moveit'] },
    gettingStarted: { heading: 'How to get started', paragraphs: ['Implement one bounded task, such as planning a collision-free arm movement in a simulated scene. Record the setup, success criteria, and failure cases. A software engineer can build on programming experience; a controls engineer can start with dynamics and state estimation.'], sourceIds: ['moveit'] },
    relatedArticles: [{ title: 'Robot policies: how machines learn to work', path: '/insights/robot-policies-how-machines-learn-to-work' }],
    citations: [citation('moveit', 'MoveIt · Planning, perception, and control', 'https://moveit.picknik.ai/main/index.html'), citation('bls-research', 'BLS · Computer and information research scientists', 'https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm', 'U.S. research education context')],
  },
  {
    ...shared, id: 'platforms-simulation', slug: 'platforms-simulation', number: '03', name: 'Platforms & Simulation',
    shortDescription: 'Build the digital infrastructure, simulation environments, and software tools that power robotics development.',
    introduction: ['Robotics teams need a way to test changes, move data, connect software, and run compute-intensive workloads. This family builds the tools and infrastructure that make that development possible.', 'Its outputs include simulation environments, robot middleware, data pipelines, training infrastructure, and automated tests. The central responsibility is making development and evaluation repeatable.'],
    primaryResponsibility: 'Building the digital systems used to develop, test, and support robotics software.',
    boundaries: 'Developing a simulation platform belongs here. Using that platform to create a robot-learning algorithm belongs in Intelligence & Autonomy.',
    specialties: ['Simulation', 'Digital twins', 'Robotics middleware', 'Data infrastructure', 'AI compute', 'Test automation'],
    occupationIds: roleIds('platforms-simulation'),
    work: { heading: 'What the work involves', paragraphs: ['Build virtual scenes and sensor models, manage robot recordings, connect services, and create repeatable evaluation pipelines. Teams investigate whether a test represents the real system, whether a result can be reproduced, and whether developers can trace an error to its source.'] },
    example: { title: 'Building a virtual warehouse', description: 'A simulation engineer models the workspace, robot, and sensors. Data and infrastructure engineers make scenarios reproducible, and test engineers run software changes against them. A digital twin adds a connection to the physical operation’s data.' },
    skills: { technical: ['Python and C++', 'Linux and software architecture', 'Physics and sensor simulation', 'Data pipelines and versioning', 'GPU computing', 'Continuous integration and testing'], professional: ['Designing usable developer tools', 'Tracing system failures', 'Maintaining reproducible environments'], qualifications: 'Software, computer engineering, and applied mathematics study can support this work. Simulation also draws on physical modeling, while infrastructure roles draw on systems engineering. Select preparation for the role’s actual responsibilities and technical prerequisites.', sourceIds: ['isaac'] },
    gettingStarted: { heading: 'How to get started', paragraphs: ['Build a reproducible simulation or data-processing pipeline with a documented setup and an automated test. Software professionals can connect existing infrastructure skills to robot data; students can begin with one scene, one sensor, and a clearly defined validation task.'], sourceIds: ['isaac'] },
    relatedArticles: [{ title: 'What are digital twins?', path: '/insights/what-are-digital-twins-complete-guide' }],
    citations: [citation('isaac', 'NVIDIA · Isaac Sim documentation', 'https://docs.isaacsim.omniverse.nvidia.com/latest/index.html')],
  },
  {
    ...shared, id: 'integration-operations', slug: 'integration-operations', number: '04', name: 'Integration & Operations',
    shortDescription: 'Bring intelligent machines into real-world environments and keep them operating safely and reliably.',
    introduction: ['A capable robot still has to work inside a real operation. This family connects the machine to its task, its surrounding equipment, and the people responsible for running and maintaining it.', 'The work continues after installation: commissioning, troubleshooting, fleet monitoring, maintenance, and safety-related verification all shape whether a deployed system remains useful.'],
    primaryResponsibility: 'Integrating, commissioning, operating, and maintaining deployed systems.',
    boundaries: 'Configuring a robot cell at a customer facility belongs here. Designing the robot’s original hardware belongs in Hardware & Manufacturing.',
    specialties: ['Industrial automation', 'Systems integration', 'Commissioning', 'Functional safety', 'Fleet operations', 'Field service'],
    occupationIds: roleIds('integration-operations'),
    work: { heading: 'What the work involves', paragraphs: ['Connect robot controllers, tooling, sensors, and production systems; verify the installation against the application’s requirements; and investigate faults in service. Work can include control logic, acceptance testing, maintenance planning, and operational incident analysis.'] },
    example: { title: 'Commissioning a factory robot cell', description: 'An integrator connects the robot, end effector, conveyor, and controls. Commissioning engineers test operating sequences and acceptance criteria. Safety specialists verify safety-related functions, and maintenance teams prepare inspection and repair procedures.' },
    skills: { technical: ['PLC programming and industrial controls', 'Electrical and network diagnostics', 'Robot configuration', 'Commissioning and acceptance testing', 'Safety-related systems', 'Maintenance and fault analysis'], professional: ['Working with site teams', 'Clear handover documentation', 'Diagnosing problems under operating constraints'], qualifications: 'Engineering roles and maintenance roles have different preparation routes. Technical education, apprenticeships, and on-the-job training can be relevant to equipment maintenance. Safety-related responsibilities need preparation matched to the system, sector, and jurisdiction.', sourceIds: ['bls-maintenance'] },
    gettingStarted: { heading: 'How to get started', paragraphs: ['Map a small automated process: its inputs, outputs, operating sequence, and fault responses. Students can practice in a supervised training environment; technicians and experienced engineers can use a documented commissioning or fault-analysis exercise to show how they approach system reliability.'] },
    relatedArticles: [{ title: 'Industrial automation explained', path: '/insights/industrial-automation-explained-plc-cnc-robots-factory-software' }],
    citations: [citation('bls-maintenance', 'BLS · Industrial machinery maintenance occupations', 'https://www.bls.gov/ooh/installation-maintenance-and-repair/industrial-machinery-mechanics-and-maintenance-workers-and-millwrights.htm', 'U.S. maintenance education and training context')],
  },
];
export const publishedFamilies = families.filter(f => f.status === 'foundation' || f.status === 'published');
export const getFamily = (slug: string) => publishedFamilies.find(f => f.slug === slug);
export const siteUrl = 'https://www.blackscarab.ai';
