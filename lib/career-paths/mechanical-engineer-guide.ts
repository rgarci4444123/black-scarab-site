import type { CareerGuideBlock, CareerGuideContent, Citation } from './types';
import { pinnedGuideResearch } from '@/lib/career-paths/research';
import { guideSeo } from '@/lib/career-paths/guide-editorial';

const pinned = pinnedGuideResearch('mechanical-engineer', 'physical-ai-2026-11-02-6b48026839dc');
const research = pinned.role;
const p = (text: string): CareerGuideBlock => ({ type: 'paragraph', text });
const h = (text: string): CareerGuideBlock => ({ type: 'heading', text });
const list = (items: string[], ordered = false): CareerGuideBlock => ({ type: 'list', items, ordered });
const source = (id: string, title: string, url: string, scope: string): Citation => ({ id, title, url, scope, accessedAt: '2026-11-03' });
const pay = (employer: string) => research.salaryExamples.find(example => example.employer === employer)!;

export const mechanicalEngineerGuide: CareerGuideContent = {
  id: 'mechanical-engineer-robotics', occupationId: 'mechanical-engineer',
  familyId: 'hardware-manufacturing', slug: 'mechanical-engineer',
  ...guideSeo('mechanical-engineer'),
  status: 'published', publishedAt: '2026-11-03', reviewedAt: '2026-11-03', research:pinned.reference,
  deck:"Design the structures, mechanisms and moving parts that make robots work.",
  illustration:{"src":"/career-paths/mechanical-engineer-lab.webp","width":1672,"height":941,"alt":"Illustration of a mechanical engineer assembling a robotic joint beside a digital design."},
  introduction: [
    'A robot’s mechanical design determines what it can carry, how precisely it can move and how well it survives repeated use. Mechanical engineers turn those requirements into parts, mechanisms and working assemblies, backed by calculations, drawings and test results.',
  ],
  overview: [
    { label: 'What you do', value: 'Design and test robot structures, mechanisms and assemblies', sourceIds: ['apptronik', 'one-x', 'ambi'] },
    { label: 'Core skills', value: 'CAD, tolerancing, mechanics and fabrication', sourceIds: ['study', 'apptronik'] },
    { label: 'Education', value: 'Mechanical or related engineering degree', sourceIds: ['applied', 'one-x', 'ambi'] },
    { label: 'Compensation', value: '$125K–$150K / year', detail: 'Ambi Robotics · Senior mechanical role', sourceIds: ['ambi'] },
  ],
  sections: [
    {
      id: 'day-to-day', heading: 'What does the work actually involve?', navLabel: 'Work & responsibilities', paragraphs: [], sourceIds: ['apptronik', 'grip-selection'],
      blocks: [
        p('The work can center on the links and joints of an arm, a mobile robot’s chassis and suspension, a gripper, an actuator transmission, or the structure around sensors and electronics. An end effector is the tool at the end of a robot arm; an actuator turns energy into movement.'),
        p('The fundamentals are familiar from other engineering industries. Robotics puts particular pressure on how mechanics, sensing and control interact: a flexible joint changes positioning, transmission backlash affects reversals, and cable routing limits movement.'),
        p('A working day might move from inspecting a failed prototype to changing a CAD assembly, discussing tolerances with a supplier and reviewing measurements with a controls engineer. The useful question throughout is: does this design meet the requirement, and what evidence shows it?'),
        { type: 'summary-list', items: [
          { title: 'Design ownership', text: 'Mechanical engineers usually own product geometry, mechanical performance and design release.' },
          { title: 'Working across teams', text: 'Manufacturing engineers concentrate on building the design repeatedly; test engineers develop repeatable measurements. Small teams may combine parts of these responsibilities.' },
        ] },
        h('Inside one assignment: a robotic gripper'),
        list([
          'Define the task. Establish object size, mass, surface and allowable contact pressure. Specify jaw travel, mounting space and approach. A delicate carton and a rigid metal part need different gripping strategies.',
          'Calculate loads and motion. Draw forces on the object and fingers. Check gravity, acceleration, offset loads and finger bending. Work out mechanical advantage before choosing an actuator or transmission.',
          'Choose material and process. Compare stiffness, mass, wear and contact surfaces. A printed prototype can reveal geometry problems, but production strength and durability still need validation.',
          'Build the CAD assembly. Model fingers, guides, fasteners and interfaces. Check the full opening range, tool access, sensor placement and cable clearance.',
          'Control variation. Define locating surfaces and calculate how dimensional variation affects alignment and clearance. Specify tolerances that the process can produce and inspection can verify.',
          'Test and revise. Measure slip, alignment, deflection and repeatability. Investigate a missed target, change the design and retest. Complete drawings and a bill of materials for release.',
        ], true),
        { type: 'figure', src: '/career-paths/gripper-forces.svg', width: 680, height: 290,
          alt: 'Two gripper jaws apply inward normal forces F. Upward static friction forces f at both contacts balance the object’s downward weight mg.',
          caption: 'For a stationary, symmetrically held object, 2f = mg. Each contact can supply static friction up to μF, so the available grip must satisfy 2μF ≥ mg.' },
        { type: 'calculation', title: 'A first force check', formula: 'F ≥ S × m × g ÷ (2μ)',
          example: '4 × 0.25 kg × 9.81 m/s² ÷ (2 × 0.2) ≈ 24.5 N per jaw',
          note: 'F is normal force per jaw; S is a chosen margin. This example assumes a stationary 0.25 kg object, friction coefficient μ = 0.2 and S = 4. Friction must be checked for the actual surfaces. Acceleration, impacts and finger length also affect real component selection.' },
      ],
    },
    {
      id: 'skills', heading: 'Technical skills employers look for', navLabel: 'Technical skills', paragraphs: [], sourceIds: ['study', 'apptronik', 'one-x'],
      blocks: [
        p('Employers look for the ability to take a mechanical design from a model into hardware.'),
        { type: 'skill-mentions', title: `Skills mentioned in ${research.postingCount} sampled advertisements`, denominator: research.postingCount,
          rows: research.skills.map(skill => ({ label: skill.label, count: skill.count, required: skill.required, preferred: skill.preferred, contextual: skill.contextual })),
          note: 'Automatically coded mentions include required, preferred and contextual wording.',
          detailNote: 'The strongest detected wording is counted once per advertisement and skill. Required or option includes alternatives such as one of several CAD packages. Preferred and contextual mentions are kept separately. These automated classifications are indicative; they have not all been manually validated.',
        },
        h('CAD and drawings: make the design buildable'),
        p('Computer-aided design (CAD) defines geometry, fit and assembly relationships. Drawings communicate dimensions and inspection requirements. Learn constrained sketches, assemblies and drawing revision in one package; the design reasoning should transfer between tools. NX and SolidWorks are software examples within the broader CAD category, so their bars overlap.'),
        h('Tolerancing and manufacturing: control the interfaces'),
        p('Geometric dimensioning and tolerancing (GD&T) controls features relative to functional references called datums. A tolerance stack combines dimensional variations to predict clearance or interference. For a gripper, that means checking whether the guides remain aligned when real parts vary.'),
        p('Materials and process knowledge connect those decisions to fabrication. Explain why a part should be machined, formed or printed, which surfaces need close control, and how it will be inspected. You need to understand the process even when someone else operates the machine.'),
        h('Analysis and testing: show why it works'),
        p('Start with free-body diagrams, loads and stiffness calculations. Finite element analysis estimates a model’s response, but depends on its materials, loads, constraints, contacts and mesh. Compare the result with a hand calculation and a physical measurement where possible.'),
        p('Validation closes the loop: define acceptance criteria, record the setup and investigate failures. Apptronik’s sampled senior role brings analysis, design for manufacture, testing and production support together in subsystem ownership.'),
        h('Specialization comes after the foundations'),
        p('Actuator and drivetrain work adds motor and gearbox sizing, bearings, backlash, duty cycle and heat. Other roles focus on lightweight structures, thermal packaging or environmental durability. The sampled 1X hand-thermal role illustrates the specialist route: thermal analysis and experiments alongside mechanical design.'),
      ],
    },
    {
      id: 'education', heading: 'Education and qualifications', navLabel: 'Education', paragraphs: [], sourceIds: ['bls', 'applied', 'apptronik', 'one-x', 'ambi', 'asme'],
      blocks: [
        p('A mechanical engineering bachelor’s degree is a common route. Look for mechanics, materials, dynamics, thermal systems, design and laboratory work. Related engineering programs can also fit, provided their mechanical depth matches the role.'),
        { type: 'table', caption: 'Selected employer qualifications', columns: ['Sampled role', 'Education wording'], rows: [
          ['Applied Intuition · new graduate', 'Bachelor’s or master’s in mechanical engineering or an equivalent program.'],
          ['1X · hand thermal systems', 'Bachelor’s in mechanical engineering, mechatronics, robotics or a related engineering discipline.'],
          ['Ambi Robotics · mechanical systems', 'Mechanical engineering background or equivalent experience.'],
        ] },
        h('Is a master’s necessary?'),
        p('It is not universal. Applied Intuition accepts either degree level, while Apptronik’s sampled senior role specifies a bachelor’s degree and relevant experience. Graduate study can deepen a specialty such as dynamics, optimization, advanced materials or thermal engineering. Compare the program’s laboratories and projects with the work you want to do.'),
        h('Build evidence alongside qualifications'),
        { type: 'summary-list', items: [
          { title: 'Practical experience', text: 'Internships, build teams, research projects and supervised workshop work can show design judgment. Applied Intuition’s graduate posting values hands-on build-team and project experience. Show decisions, measurements and revisions in your portfolio.' },
          { title: 'Targeted credentials', text: 'ASME’s GDTP certification assesses dimensioning and tolerancing knowledge. A CAD certificate supports tool familiarity. Choose either for a specific skill gap; neither replaces mechanics, design work and test evidence.' },
        ] },

      ],
    },
    {
      id: 'salary', heading: 'Compensation and career progression', navLabel: 'Compensation', paragraphs: [], sourceIds: ['study', 'bls', 'applied', 'ambi', 'one-x', 'apptronik'],
      blocks: [
        p('US mechanical engineers earned a median annual wage of $104,110 across all industries in May 2025, according to BLS.'),
        { type: 'compensation', caption: 'Selected California advertisements · November 2, 2026',
          examples: ['Applied Intuition', 'Ambi Robotics', '1X'].map(employer => pay(employer)),
          note: 'Equity and benefits are separate.',
        },
        p('Compare offers by role, location, bonus, equity, benefits and working arrangements.'),
        h('Progress by the responsibility you can own'),
        list([
          'Early responsibility: complete a defined part, drawing or test with review, sound calculations and clear documentation.',
          'Independent ownership: manage a subsystem’s requirements, interfaces, suppliers, analysis and verification through release. Apptronik’s senior posting illustrates this scope.',
          'Broader technical work: make architecture trade-offs, establish design practices and help resolve failures across subsystems. Staff and principal titles vary by company.',
          'Management: take responsibility for people, resourcing and delivery. Compare the actual work with the technical path before choosing.',
        ]),
      ],
    },
    {
      id: 'employers', heading: 'Who is hiring?', navLabel: 'Hiring employers', paragraphs: [], sourceIds: ['study', 'apptronik', 'one-x', 'applied', 'ambi'],
      blocks: [
        p(`Most represented in the November 2 sample: ${research.topEmployers.map(employer => `${employer.name} (${employer.count} advertisements)`).join(', ')}.`),
        {type:'table',caption:'Representative assignments in the November 2 research',columns:['Employer','Robotics application','Mechanical focus'],rows:[
          ['Apptronik','Apollo humanoid','Subsystem design through production and sustaining, including analysis and testing.'],
          ['1X','Humanoid hand','Specialist thermal packaging, analysis and experiments.'],
          ['Applied Intuition','Autonomous vehicles','Sensor/compute packaging, structures, thermal work, fixtures and validation.'],
          ['Ambi Robotics','Logistics automation','System layouts, drawings, vendors and installation-ready mechanical systems.'],
        ]},
        p('Choose by the subsystem and responsibilities you want to own. The same company may need mechanism design, packaging, production support and site engineering; “robotics” alone does not distinguish them.'),
      ],
    },
    {
      id: 'transition', heading: 'How to enter or transition into this career', navLabel: 'Career transitions', paragraphs: [], sourceIds: ['applied', 'apptronik', 'ambi'],
      blocks: [
        { type: 'summary-list', items: [
          { title: 'Engineering students', text: 'Use a course, build team or internship to own a small mechanism from requirements to test. Pair CAD with a tolerance calculation and a measured result. Ask for feedback on the drawing and test plan early.' },
          { title: 'Mechanical engineers in another industry', text: 'Bring your structures, materials or product-development evidence. Add movement limits, sensors, cabling, transmission behavior and control interfaces. Rework a familiar subsystem under a mass, stiffness or repeated-motion constraint.' },
          { title: 'Manufacturing engineers', text: 'Process capability, fixtures, inspection and supplier work transfer well. Build evidence in product load cases and functional design: derive requirements, compare concepts and calculate performance as well as explain production.' },
          { title: 'Technicians and hands-on professionals', text: 'Document practical failure modes from assembly, machining, maintenance or diagnosis. Add drawings, CAD, mathematics and mechanics in a structured way. A technician, prototyping or test role can provide a bridge while you build engineering preparation.' },
          { title: 'Software, design, finance or another field', text: 'Test your interest in physical design and measurement first. Coding, visual communication and analytical work can help, but mechanical design ownership needs mechanics, materials and manufacturing knowledge. Investigate formal engineering study and target-role degree requirements alongside a small project.' },
        ] },
      ],
    },
    {
      id: 'portfolio', heading: 'Build a relevant portfolio', navLabel: 'Portfolio project', paragraphs: [], sourceIds: ['grip-selection', 'freecad', 'mit'],
      blocks: [
        p('Design a small, hand-actuated parallel-jaw gripper for a light, rigid object. A screw or linkage can provide motion; motors and a robot arm are optional extensions. The project should connect a design choice to a measured result.'),
        h('Keep the brief small and testable'),
        p('An example target is a 20 to 60 mm jaw opening and an object no heavier than 250 g, held for ten seconds without visible slip over twenty trials. Define its surface and orientation. These are chosen project targets, not industry standards.'),
        list([
          'Design: compare two concepts using sketches, a spreadsheet and one CAD package. Estimate grip force, finger bending, input force or torque, and one clearance stack using explicit assumptions.',
          'Build: prepare a dimensioned drawing and fabricate a hand-operated prototype with the tools available to you. Record the actual material and dimensions.',
          'Test and revise: hold the object just above a padded tray, keeping fingers clear. Log mass, opening, contact material, hold time and slip; measure input force or deflection if possible. Change one weak feature and repeat the same test.',
        ], true),
        h('Show the evidence'),
        list([
          'A one-page brief, concept comparison and acceptance criteria.',
          'Force and clearance calculations, CAD, one readable drawing and a bill of materials.',
          'Photos or a short demonstration, a results sheet and a before-and-after comparison.',
          'What you did not validate, such as fatigue life or powered operation.',
        ]),
        p('If fabrication is not yet available, finish the brief, calculations and CAD as a clearly labeled design study. Leave performance claims unverified. The value lies in the design, test and communication trail.'),
      ],
    },
  ],
  nextSteps: {
    id: 'next-steps', heading: 'Where to go next', paragraphs: [], sourceIds: ['freecad', 'mit'], blocks: [
      p('Start with one missing foundation and the gripper brief. These two resources support the modeling and design reasoning you will need.'),
      { type: 'resources', items: [
        { title: 'FreeCAD: getting started', href: 'https://github.com/FreeCAD/FreeCAD-documentation/blob/main/wiki/Getting_started.md', description: 'An official introduction to constrained sketches, features and parametric parts. This documentation mirror is archived; interfaces may differ by version.' },
        { title: 'MIT OpenCourseWare: Design and Manufacturing I', href: 'https://ocw.mit.edu/courses/2-007-design-and-manufacturing-i-spring-2009/', description: 'Undergraduate design notes, exercises and project examples from the open Spring 2009 course.' },
      ] },
      p('Then compare three relevant job descriptions in your target location. Mark responsibilities, degree wording and the evidence requested. Use that comparison to choose your next course, project or application.'),
    ],
  },
  researchNotes: [
    'The November 2, 2026 mechanical-family cohort contains 132 advertisements from 34 employers. It includes robot hardware, autonomous aircraft, marine systems and some supporting infrastructure work. Employer-board coverage is selected and uneven, so it is not a representative robotics labor-market survey or a live vacancy count.',
    'Four role assignments in this cohort were analyst reviewed. Skill mentions are automatically coded, using the strongest detected state once per advertisement and skill. The detailed breakdown is available beneath the skills chart. A missing mention does not establish that a skill is unnecessary.',
    'Employer requirements and salaries describe the captured advertisements, not universal qualifications or a market pay ladder. National BLS wages cover a different population. Public references were checked on November 3, 2026; the study retains captured records and source hashes as job pages change.',
  ],
  citations: [
    source('study', 'Black Scarab hiring study, November 2, 2026', '/research/physical-ai-careers-2026-11-02.json', 'Role and skill counts, employer representation, captured salary fields and study methodology. Selected boards; machine-coded skills and mixed seniority. Mechanical-family scope includes adjacent autonomous-system and infrastructure work.'),
    source('applied', 'Applied Intuition: Mechanical Engineer, New Grad', pay('Applied Intuition').url, 'Captured salary, Sunnyvale location, BS/MS wording, hands-on preparation and autonomous-vehicle responsibilities.'),
    source('apptronik', 'Apptronik: Senior Mechanical Engineer', 'https://job-boards.greenhouse.io/apptronik/jobs/5766164004', 'Apollo subsystem responsibilities, bachelor’s degree, relevant experience and senior ownership expectations.'),
    source('one-x', '1X: Mechanical Design Engineer, Hands Thermal Systems', pay('1X').url, 'Captured salary, San Carlos location, related engineering degrees and specialist thermal work.'),
    source('ambi', 'Ambi Robotics: Senior Project Engineer, Mechanical Systems', pay('Ambi Robotics').url, 'Advertised annual salary, Berkeley location, equivalent-experience wording and deployment-oriented mechanical work.'),
    source('bls', 'US Bureau of Labor Statistics: Mechanical Engineers', 'https://www.bls.gov/ooh/architecture-and-engineering/mechanical-engineers.htm', 'US national occupational wage benchmark for May 2025 and typical educational entry route. Covers industries and levels beyond robotics.'),
    source('asme', 'ASME: Geometric Dimensioning and Tolerancing Professional certification', 'https://www.asme.org/certification-accreditation/personnel-certification/gdtp-(y14-5)-geometric-dimensioning-and-tolerancing-professional-certification', 'The drawing-interpretation and tolerancing knowledge assessed by GDTP certification.'),
    source('grip-selection', 'SMC: MHF2 gripper model selection and gripping-force calculation', 'https://ca01.smcworld.com/catalog/BEST-5-4-en/4-p0489-0516-mhf2_en/spdfdata/4-p0489-0516-mhf2_en_5sp.htm', 'Two-finger friction model, force convention and the need to account for operating conditions. The portfolio example uses explicitly chosen assumptions.'),
    source('freecad', 'FreeCAD: Getting started, official archived documentation', 'https://github.com/FreeCAD/FreeCAD-documentation/blob/main/wiki/Getting_started.md', 'Parametric modeling, sketches and features in the official archived documentation.'),
    source('mit', 'MIT OpenCourseWare: Design and Manufacturing I, Spring 2009', 'https://ocw.mit.edu/courses/2-007-design-and-manufacturing-i-spring-2009/', 'Open undergraduate design course with notes, exercises and projects.'),
  ],
};
