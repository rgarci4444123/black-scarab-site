import type {CareerGuideContent,Citation} from '@/lib/career-paths/types';
import {researchForRole} from '@/lib/career-paths/research';
import evidence from '@/public/research/robotics-controls-engineer-evidence-2026-11-09.json';
import compensation from '@/public/research/robotics-controls-engineer-compensation-2026-11-02.json';
import decisions from '@/research/seo/2026-11-09/decisions.json';

const role=researchForRole('robotics-controls-engineer',evidence.snapshotId);
if(!role||compensation.snapshotId!==evidence.snapshotId)throw new Error('Controls guide research mismatch');
const seo=decisions.guides.find(item=>item.occupationId==='robotics-controls-engineer');
if(!seo)throw new Error('Missing controls SEO decision');
const salary=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(compensation.estimate);
const evidencePath='/research/robotics-controls-engineer-evidence-2026-11-09.json';
const compensationPath='/research/robotics-controls-engineer-compensation-2026-11-02.json';
const pythonControl='https://python-control.readthedocs.io/';
const stepResponse='https://python-control.readthedocs.io/en/latest/generated/control.step_response.html';
const stepInfo='https://python-control.readthedocs.io/en/latest/generated/control.step_info.html';
const mit='https://underactuated.mit.edu/';
const source=(id:string,title:string,url:string,scope:string):Citation=>({id,title,url,scope,accessedAt:'2026-11-09'});
const posting=(id:string,recordId:string):Citation=>{
  const r=evidence.records.find(item=>item.id===recordId);
  if(!r)throw new Error(`Missing controls evidence: ${recordId}`);
  return source(id,`${r.employer}: ${r.title}`,r.url,'Employer advertisement collected November 2, 2026. Full-source contextual review, qualifications and original source hashes are preserved in the evidence export.');
};

export const roboticsControlsEngineerGuide:CareerGuideContent={
  id:'robotics-controls-engineer',occupationId:'robotics-controls-engineer',familyId:'intelligence-autonomy',slug:'robotics-controls-engineer',
  title:seo.h1,seoTitle:seo.seoTitle,description:seo.description,status:'published',publishedAt:'2026-11-09',reviewedAt:'2026-11-09',
  research:{snapshotId:evidence.snapshotId,roleId:'robotics-controls-engineer',evidencePath},
  deck:'Develop the algorithms that help robots move precisely, maintain balance and respond to changes in the physical world.',
  introduction:['Imagine a humanoid robot picking up a heavy box. As it lifts the weight, its balance shifts, placing additional demands on its motors and joints.'],
  illustration:{src:'/career-paths/robotics-controls-engineer-lab.webp',width:1672,height:941,alt:'Conceptual editorial illustration of a white and graphite quadruped robot balancing on a tilted laboratory platform, with restrained blue-violet accents.'},
  overview:[
    {label:'What you do',value:'Design algorithms that control robot movement, balance, speed and force',sourceIds:['pi','standard']},
    {label:'Core skills',value:'Control theory, robotics dynamics, C++, Python and hardware testing',sourceIds:['apptronik','kodiak','pi']},
    {label:'Education',value:'Typically mechanical engineering, electrical engineering, robotics or a related field',sourceIds:['apptronik','wholebody','motor']},
    {label:'Compensation',value:`${salary}/year`,detail:'Black Scarab estimate',sourceIds:['compensation']},
  ],
  sections:[
  {
    "id": "day-to-day",
    "heading": "What does a robotics controls engineer do?",
    "navLabel": "The work",
    "paragraphs": [],
    "sourceIds": [
      "apptronik",
      "wholebody",
      "standard",
      "motor",
      "kodiak",
      "path",
      "pi",
      "figure"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Imagine a humanoid robot picking up a heavy box. As it lifts the weight, its balance shifts, placing additional demands on its motors and joints."
      },
      {
        "type": "paragraph",
        "text": "Without the right control system, the robot might move too quickly, lose its balance or struggle to keep the box steady."
      },
      {
        "type": "paragraph",
        "text": "Robotics controls engineers develop the algorithms that help machines respond to these physical changes."
      },
      {
        "type": "paragraph",
        "text": "Their work determines how robots regulate movement, speed, force and balance. Whether a robotic arm is assembling a product or a humanoid is walking across an uneven floor, control systems help ensure that the machine moves as intended."
      },
      {
        "type": "paragraph",
        "text": "The central idea is called feedback control."
      },
      {
        "type": "paragraph",
        "text": "A robot receives a movement command, measures what actually happens and adjusts its motors to reduce the difference between the intended and actual movement."
      },
      {
        "type": "paragraph",
        "text": "This process repeats continuously as the robot operates."
      },
      {
        "type": "paragraph",
        "text": "The challenge is that the physical world is unpredictable. A robot might encounter a heavier object, an unexpected obstacle or a slippery surface. Its control system needs to respond without losing stability or exceeding the machine's physical limits."
      },
      {
        "type": "heading",
        "text": "Three areas of robotics controls engineering"
      },
      {
        "type": "table",
        "caption": "Robotics controls specializations",
        "columns": [
          "Specialization",
          "What engineers work on"
        ],
        "rows": [
          [
            "Motor and actuator control",
            "Regulating the position, speed and force of individual motors and joints"
          ],
          [
            "Whole-body control",
            "Coordinating multiple joints so robots can balance, walk and manipulate objects"
          ],
          [
            "Vehicle and mobile robot control",
            "Managing steering, acceleration and movement along a desired path"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These specializations share many of the same principles but address different engineering problems."
      },
      {
        "type": "paragraph",
        "text": "An engineer developing motor controllers may focus on the movement of a single joint."
      },
      {
        "type": "paragraph",
        "text": "A whole-body controls engineer might coordinate dozens of joints to keep a humanoid balanced while it moves its arms."
      },
      {
        "type": "paragraph",
        "text": "An autonomous vehicle controls engineer may develop software that regulates steering and braking so a vehicle follows its intended trajectory."
      },
      {
        "type": "paragraph",
        "text": "Companies such as Apptronik, Figure and Kodiak offer examples of these different applications."
      },
      {
        "type": "heading",
        "text": "What does a typical day look like?"
      },
      {
        "type": "paragraph",
        "text": "Robotics controls engineers divide their time between mathematics, programming, simulation and physical experiments."
      },
      {
        "type": "paragraph",
        "text": "An engineer might begin by reviewing data from a robotic arm that was tested the previous day."
      },
      {
        "type": "paragraph",
        "text": "The robot reached its target position, but its arm oscillated before settling. The engineer examines the measurements to understand why."
      },
      {
        "type": "paragraph",
        "text": "Perhaps the controller responds too aggressively, or the mathematical model does not accurately represent the weight being carried."
      },
      {
        "type": "paragraph",
        "text": "The engineer modifies the algorithm, tests the result in simulation and eventually runs another experiment on the robot."
      },
      {
        "type": "paragraph",
        "text": "If the new version performs better, they document the results and work with other engineering teams to integrate the change."
      },
      {
        "type": "paragraph",
        "text": "A typical development cycle involves:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Define the desired behavior. Determine how the robot should move and what physical limits must be respected.",
          "Model the system. Describe how motors, joints, forces and other physical components respond.",
          "Develop the controller. Design an algorithm that regulates the robot's movement.",
          "Test in simulation. Evaluate how the system behaves before running the algorithm on physical hardware.",
          "Experiment with the robot. Measure actual movement, stability and performance.",
          "Improve reliability. Test changing loads, disturbances, timing delays and other conditions."
        ]
      },
      {
        "type": "paragraph",
        "text": "Controls engineers work closely with mechanical, electrical and embedded software engineers because a robot's physical behavior depends on all these systems working together."
      },
      {
        "type": "heading",
        "text": "When a robotic arm starts shaking"
      },
      {
        "type": "paragraph",
        "text": "Consider an industrial robotic arm that moves an object from one location to another."
      },
      {
        "type": "paragraph",
        "text": "When the arm is empty, the movement is smooth. But after picking up a heavy component, the arm begins to vibrate as it approaches its target."
      },
      {
        "type": "paragraph",
        "text": "The controls engineer examines the difference between the desired movement and the actual movement."
      },
      {
        "type": "paragraph",
        "text": "The problem might come from controller settings that are too aggressive, an inaccurate model of the arm's mass or mechanical flexibility that becomes more noticeable under load."
      },
      {
        "type": "paragraph",
        "text": "The engineer tests possible solutions and compares the results."
      },
      {
        "type": "paragraph",
        "text": "A successful change should reduce unwanted movement while keeping the arm responsive and operating within its motor limits."
      },
      {
        "type": "paragraph",
        "text": "This illustrates an important distinction: a robot reaching the correct position does not necessarily mean it moved there correctly."
      },
      {
        "type": "paragraph",
        "text": "The speed, stability and effort required to complete the movement matter too."
      },
      {
        "type": "control-response",
        "id": "controls-step-response",
        "title": "Reaching the target is only part of the job",
        "durationSeconds": 3,
        "naturalFrequencyRadPerSec": 6,
        "curves": [
          {
            "label": "More overshoot",
            "dampingRatio": 0.3
          },
          {
            "label": "Less overshoot",
            "dampingRatio": 0.8
          }
        ],
        "note": "Illustrative second-order responses to the same target change."
      }
    ]
  },
  {
    "id": "controls-vs-other-roles",
    "heading": "How is controls engineering different from other robotics careers?",
    "navLabel": "Related careers",
    "paragraphs": [],
    "sourceIds": [
      "apptronik",
      "wholebody",
      "standard",
      "kodiak",
      "pi"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Controls engineering sits between the software that decides what a robot should do and the physical hardware that performs the movement."
      },
      {
        "type": "table",
        "caption": "Responsibilities compared",
        "columns": [
          "Career",
          "Main responsibility"
        ],
        "rows": [
          [
            "Motion Planning Engineer",
            "Determines a path or trajectory for the robot to follow"
          ],
          [
            "Robotics Controls Engineer",
            "Regulates how the robot physically follows that movement"
          ],
          [
            "Embedded Software Engineer",
            "Develops the low-level software and hardware interfaces that execute commands"
          ],
          [
            "Mechanical Engineer",
            "Designs the physical components, joints and mechanisms that make movement possible"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "For example, imagine a robotic arm moving a package across a table."
      },
      {
        "type": "paragraph",
        "text": "A motion planning engineer helps determine the arm's path around obstacles."
      },
      {
        "type": "paragraph",
        "text": "The controls engineer develops algorithms that help the motors follow the intended movement accurately."
      },
      {
        "type": "paragraph",
        "text": "The embedded software engineer ensures the commands and sensor measurements are processed reliably by the hardware."
      },
      {
        "type": "paragraph",
        "text": "The mechanical engineer designs the joints, actuators and structural components that perform the movement."
      },
      {
        "type": "paragraph",
        "text": "In practice, these responsibilities overlap. Some robotics engineers work across planning, controls and embedded software, particularly at smaller companies."
      }
    ]
  },
  {
    "id": "skills",
    "heading": "Which skills and tools do employers look for?",
    "navLabel": "Skills & tools",
    "paragraphs": [],
    "sourceIds": [
      "apptronik",
      "standard",
      "motor",
      "foundation",
      "pi",
      "figure",
      "path",
      "python-control",
      "step-response",
      "step-info",
      "mit"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Control theory and feedback systems"
      },
      {
        "type": "paragraph",
        "text": "Control theory is the mathematical foundation of the profession."
      },
      {
        "type": "paragraph",
        "text": "It describes how systems respond to commands and how their behavior can be adjusted using feedback."
      },
      {
        "type": "paragraph",
        "text": "One of the most widely taught approaches is PID control, short for proportional, integral and derivative control."
      },
      {
        "type": "paragraph",
        "text": "A PID controller uses the difference between a desired result and the measured result to determine how the system should respond."
      },
      {
        "type": "paragraph",
        "text": "For example, if a robotic joint is supposed to rotate to a specific angle, the controller measures its actual position and adjusts motor commands to reduce the error."
      },
      {
        "type": "paragraph",
        "text": "Three important concepts are:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Proportional control: Responds to how far the system is from its target.",
          "Integral control: Accounts for error that persists over time.",
          "Derivative control: Responds to how quickly the error is changing."
        ]
      },
      {
        "type": "paragraph",
        "text": "These elements can be combined to create responsive control systems, although not every application requires all three."
      },
      {
        "type": "heading",
        "text": "Stability, overshoot and settling time"
      },
      {
        "type": "paragraph",
        "text": "Controls engineers evaluate more than whether a robot reaches its destination."
      },
      {
        "type": "paragraph",
        "text": "They also measure how it gets there."
      },
      {
        "type": "table",
        "caption": "Control response measures",
        "columns": [
          "Concept",
          "What it means"
        ],
        "rows": [
          [
            "Tracking error",
            "The difference between the desired and actual movement"
          ],
          [
            "Overshoot",
            "How far the system moves beyond its target"
          ],
          [
            "Settling time",
            "How long the system takes to remain close to its target"
          ],
          [
            "Stability",
            "Whether the response remains controlled instead of developing growing oscillations"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Imagine two robotic arms moving to the same position."
      },
      {
        "type": "paragraph",
        "text": "The first reaches the target quickly but moves too far, then oscillates before settling."
      },
      {
        "type": "paragraph",
        "text": "The second approaches the target more smoothly with less overshoot."
      },
      {
        "type": "paragraph",
        "text": "Neither response is automatically better in every application. The appropriate behavior depends on the task, speed requirements and hardware limits."
      },
      {
        "type": "paragraph",
        "text": "A robotic arm handling delicate glassware may require different control behavior from a machine designed to move heavy industrial components quickly."
      },
      {
        "type": "heading",
        "text": "Robot dynamics and mathematical modeling"
      },
      {
        "type": "paragraph",
        "text": "A controls engineer needs to understand how physical forces affect movement."
      },
      {
        "type": "paragraph",
        "text": "Kinematics describes the relationship between a robot's joints and its position or movement."
      },
      {
        "type": "paragraph",
        "text": "Dynamics connects that movement to forces, motor torque, mass and inertia."
      },
      {
        "type": "paragraph",
        "text": "Torque is the turning effect produced by a motor. Inertia describes how strongly an object resists changes in its motion."
      },
      {
        "type": "paragraph",
        "text": "These concepts help engineers predict how robots will respond to commands."
      },
      {
        "type": "paragraph",
        "text": "For example, lifting a heavy object changes the forces acting on a robotic arm. A controller designed without considering that load may perform poorly."
      },
      {
        "type": "paragraph",
        "text": "Engineers use mathematical models to anticipate these changes and design more reliable behavior."
      },
      {
        "type": "heading",
        "text": "System identification"
      },
      {
        "type": "paragraph",
        "text": "Mathematical models are useful, but real machines do not always behave exactly as predicted."
      },
      {
        "type": "paragraph",
        "text": "Motors experience friction. Mechanical components may flex, and measurements can contain noise."
      },
      {
        "type": "paragraph",
        "text": "System identification involves collecting experimental data to estimate how a real machine behaves."
      },
      {
        "type": "paragraph",
        "text": "An engineer might apply known commands to a robotic joint, measure its response and use that information to improve the model."
      },
      {
        "type": "paragraph",
        "text": "Apptronik's actuation-related engineering work illustrates this combination of experimental measurement, mathematical modeling and controller tuning."
      },
      {
        "type": "heading",
        "text": "Programming and simulation"
      },
      {
        "type": "paragraph",
        "text": "Robotics controls engineers use programming to develop algorithms, analyze data and test their designs."
      },
      {
        "type": "paragraph",
        "text": "Common tools include:"
      },
      {
        "type": "table",
        "caption": "Development tools",
        "columns": [
          "Tool",
          "Typical use"
        ],
        "rows": [
          [
            "Python",
            "Simulations, data analysis, numerical experiments and visualization"
          ],
          [
            "C++",
            "Implementing control algorithms in production robotics software"
          ],
          [
            "MATLAB",
            "Mathematical modeling, control analysis and algorithm development"
          ],
          [
            "Simulink",
            "Simulating dynamic systems and control architectures"
          ],
          [
            "Git",
            "Managing and reviewing changes to code"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Python is particularly useful for learning because engineers can build models, simulate a system and plot the results without physical robotics hardware."
      },
      {
        "type": "paragraph",
        "text": "C++ becomes increasingly important when implementing algorithms in real-time robotics systems."
      },
      {
        "type": "heading",
        "text": "Sensors and state estimation"
      },
      {
        "type": "paragraph",
        "text": "A controller needs information about what the robot is doing."
      },
      {
        "type": "paragraph",
        "text": "Sensors may measure joint position, movement, acceleration, force or contact with the environment."
      },
      {
        "type": "paragraph",
        "text": "However, sensor measurements are not always perfect."
      },
      {
        "type": "paragraph",
        "text": "They can contain noise, arrive at different times or provide incomplete information about the system."
      },
      {
        "type": "paragraph",
        "text": "State estimation combines available measurements and models to estimate quantities the controller needs, such as position or velocity."
      },
      {
        "type": "paragraph",
        "text": "For a humanoid robot, estimating how the body is moving and where its feet contact the ground is important for maintaining balance."
      },
      {
        "type": "paragraph",
        "text": "Engineers must also understand how filtering measurements can reduce noise while potentially introducing delays."
      },
      {
        "type": "heading",
        "text": "Advanced control methods"
      },
      {
        "type": "paragraph",
        "text": "More complex robotics applications may require control strategies beyond basic PID."
      },
      {
        "type": "paragraph",
        "text": "Examples include:"
      },
      {
        "type": "paragraph",
        "text": "Model Predictive Control (MPC). Uses a mathematical model to evaluate possible future behavior and select control actions while accounting for constraints."
      },
      {
        "type": "paragraph",
        "text": "Linear Quadratic Regulation (LQR). Uses a mathematical model to balance control performance against the effort required to achieve it."
      },
      {
        "type": "paragraph",
        "text": "Impedance Control. Regulates the relationship between movement and applied force, allowing robots to respond more compliantly during physical contact."
      },
      {
        "type": "paragraph",
        "text": "Reinforcement Learning for Control. Trains control policies through repeated interaction with simulated or physical environments."
      },
      {
        "type": "paragraph",
        "text": "Figure's whole-body control work provides an example of reinforcement learning applied to robot movement."
      },
      {
        "type": "paragraph",
        "text": "These methods are valuable specializations, but beginners should first understand feedback, dynamics and stability."
      }
    ]
  },
  {
    "id": "education",
    "heading": "What education do you need?",
    "navLabel": "Education",
    "paragraphs": [],
    "sourceIds": [
      "apptronik",
      "wholebody",
      "motor",
      "standard",
      "kodiak",
      "pi"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Robotics controls engineering is a mathematically demanding profession."
      },
      {
        "type": "paragraph",
        "text": "Common degree pathways include mechanical engineering, electrical engineering, mechatronics, aerospace engineering and robotics."
      },
      {
        "type": "paragraph",
        "text": "These disciplines provide different starting points but share important foundations in mathematics, physical systems and engineering analysis."
      },
      {
        "type": "heading",
        "text": "What employers expect"
      },
      {
        "type": "table",
        "caption": "Qualifications in employer advertisements",
        "columns": [
          "Employer",
          "Representative qualifications"
        ],
        "rows": [
          [
            "Apptronik",
            "Relevant bachelor's degree plus four years, master's plus two years, or related PhD for an actuation controls role"
          ],
          [
            "1X",
            "Relevant bachelor's degree and at least three years of motor-control hardware experience"
          ],
          [
            "Standard Bots",
            "At least five years modeling, tuning and validating real control systems"
          ],
          [
            "Kodiak",
            "Experience developing production vehicle-controls software in C++"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These examples reflect experienced positions rather than universal entry-level requirements."
      },
      {
        "type": "heading",
        "text": "Do you need a master's degree or PhD?"
      },
      {
        "type": "paragraph",
        "text": "Not always."
      },
      {
        "type": "paragraph",
        "text": "A bachelor's degree with relevant professional experience can qualify someone for controls engineering positions."
      },
      {
        "type": "paragraph",
        "text": "However, graduate education may be particularly useful for advanced work involving robot dynamics, optimization, whole-body control or new control algorithms."
      },
      {
        "type": "paragraph",
        "text": "Research-focused roles may place greater emphasis on graduate study, while production engineering positions often value experience designing and validating control systems on real hardware."
      },
      {
        "type": "heading",
        "text": "What should you study?"
      },
      {
        "type": "paragraph",
        "text": "A useful academic foundation includes:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Calculus, linear algebra and differential equations.",
          "Mechanics, physics and engineering dynamics.",
          "Feedback control, stability and signals.",
          "Programming and numerical simulation.",
          "Robotics kinematics, dynamics and state estimation."
        ]
      },
      {
        "type": "paragraph",
        "text": "The most effective preparation combines theory with experiments."
      },
      {
        "type": "paragraph",
        "text": "A student who can explain why a controller failed and how they improved it may demonstrate more practical understanding than someone who has only studied the equations."
      },
      {
        "type": "heading",
        "text": "Can you enter without an engineering degree?"
      },
      {
        "type": "paragraph",
        "text": "It is possible to begin learning control theory independently, but professional robotics controls engineering requires substantial mathematical and technical knowledge."
      },
      {
        "type": "paragraph",
        "text": "Someone without an engineering background should start with programming, calculus and basic mechanics."
      },
      {
        "type": "paragraph",
        "text": "From there, they can explore feedback systems and develop simple simulations."
      },
      {
        "type": "paragraph",
        "text": "Formal engineering study or structured technical education can help build the depth needed for more advanced professional work."
      }
    ]
  },
  {
    "id": "salary",
    "heading": "How much do robotics controls engineers earn?",
    "navLabel": "Compensation",
    "paragraphs": [],
    "sourceIds": [
      "compensation",
      "standard",
      "motor",
      "figure"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Robotics controls engineering is a specialized discipline combining mathematics, software development and physical systems engineering."
      },
      {
        "type": "paragraph",
        "text": "Compensation varies by experience, location and the complexity of the systems being developed."
      },
      {
        "type": "paragraph",
        "text": "Black Scarab estimates annual compensation at $250,000 based on reviewed U.S. robotics employer advertisements, with an emphasis on experienced positions."
      },
      {
        "type": "compensation",
        "caption": "Selected U.S. salary advertisements",
        "note": "Annual advertised salary · collected November 2, 2026",
        "examples": evidence.roles['robotics-controls-engineer'].compensation
      },
      {
        "type": "heading",
        "text": "What influences compensation?"
      },
      {
        "type": "paragraph",
        "text": "Experience and technical responsibility. Compare the scope of ownership, from one actuator to complete control systems and major robotics subsystems."
      },
      {
        "type": "paragraph",
        "text": "Specialization. Advanced work in whole-body control, robot dynamics, optimization and learned control policies can involve particularly specialized expertise."
      },
      {
        "type": "paragraph",
        "text": "Production experience. Employers value engineers who have successfully deployed control algorithms onto real robots and resolved problems encountered during testing."
      },
      {
        "type": "paragraph",
        "text": "Location and employer. Compensation varies across geographic markets, established companies and robotics startups."
      },
      {
        "type": "heading",
        "text": "Career progression"
      },
      {
        "type": "paragraph",
        "text": "Early-career engineers often begin by developing simulations, analyzing test data and contributing to existing controllers."
      },
      {
        "type": "paragraph",
        "text": "As they gain experience, they take responsibility for individual actuators, motion-control systems or larger robotic subsystems."
      },
      {
        "type": "paragraph",
        "text": "Senior and staff engineers may lead control-system architecture, coordinate technical development across teams and make decisions affecting an entire robot platform."
      }
    ]
  },
  {
    "id": "employers",
    "heading": "Which companies hire robotics controls engineers?",
    "navLabel": "Employers & titles",
    "paragraphs": [],
    "sourceIds": [
      "apptronik",
      "wholebody",
      "motor",
      "standard",
      "path",
      "pi",
      "kodiak",
      "figure"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Controls engineers work across humanoid robotics, industrial automation, autonomous vehicles and other machines that require precise physical movement."
      },
      {
        "type": "heading",
        "text": "Humanoid robotics"
      },
      {
        "type": "paragraph",
        "text": "Apptronik, Figure and 1X develop humanoid platforms that require coordinated control of motors, joints and body movement."
      },
      {
        "type": "paragraph",
        "text": "These applications involve balancing, walking, manipulating objects and responding to physical contact."
      },
      {
        "type": "paragraph",
        "text": "Engineers may specialize in individual actuators or algorithms that coordinate the movement of an entire robot."
      },
      {
        "type": "heading",
        "text": "Industrial robotics and manipulation"
      },
      {
        "type": "paragraph",
        "text": "Standard Bots and Path Robotics provide examples of control-system work in industrial applications."
      },
      {
        "type": "paragraph",
        "text": "Robotic arms must follow precise movements while handling tools, materials and changing loads."
      },
      {
        "type": "paragraph",
        "text": "Controls engineering helps regulate joint movement, reduce errors and maintain reliable performance during repetitive tasks."
      },
      {
        "type": "paragraph",
        "text": "Physical Intelligence also works on robot behavior across different hardware platforms, including approaches involving feedback and learned control."
      },
      {
        "type": "heading",
        "text": "Autonomous vehicles"
      },
      {
        "type": "paragraph",
        "text": "Kodiak develops autonomous trucking technology that requires vehicle-control software."
      },
      {
        "type": "paragraph",
        "text": "Engineers work on how vehicles follow trajectories using steering, braking and acceleration."
      },
      {
        "type": "paragraph",
        "text": "Vehicle-control systems must account for the physical response of the vehicle and changing operating conditions."
      },
      {
        "type": "heading",
        "text": "Related job titles"
      },
      {
        "type": "paragraph",
        "text": "Useful searches include Robotics Controls Engineer, Control Systems Engineer, Motor Control Engineer, Whole-Body Controls Engineer, Manipulation and Control Engineer, and Software Engineer — Controls."
      },
      {
        "type": "paragraph",
        "text": "Be aware that Controls Engineer can also refer to industrial automation positions involving programmable logic controllers (PLCs) and factory equipment."
      },
      {
        "type": "paragraph",
        "text": "Those roles can be valuable, but they are not necessarily focused on robot motion control."
      },
      {
        "type": "paragraph",
        "text": "For robotics-specific positions, look for responsibilities involving dynamics, feedback algorithms, actuator control, state estimation or trajectory tracking."
      }
    ]
  },
  {
    "id": "transition",
    "heading": "How to transition into robotics controls engineering",
    "navLabel": "Career transitions",
    "paragraphs": [],
    "sourceIds": [
      "apptronik",
      "standard",
      "motor",
      "kodiak",
      "pi",
      "mit"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "The most practical route depends on your existing technical experience."
      },
      {
        "type": "table",
        "caption": "Routes into robotics controls",
        "columns": [
          "Your background",
          "Skills to prioritize",
          "Suggested project"
        ],
        "rows": [
          [
            "Mechanical engineering",
            "Feedback control, programming and numerical simulation",
            "Model and control a robotic joint"
          ],
          [
            "Electrical engineering",
            "Robot dynamics, kinematics and control algorithms",
            "Develop a simulated motor-position controller"
          ],
          [
            "Software or embedded engineering",
            "Dynamics, control theory and stability analysis",
            "Implement and test a feedback controller"
          ],
          [
            "Industrial automation",
            "Mathematical modeling, numerical methods and robot dynamics",
            "Simulate a physical system and tune its response"
          ],
          [
            "Complete beginner",
            "Python, calculus, mechanics and feedback fundamentals",
            "Build a simple simulated motion-control system"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "If you already work in mechanical engineering"
      },
      {
        "type": "paragraph",
        "text": "Your understanding of forces, motion and mechanical systems provides a strong foundation."
      },
      {
        "type": "paragraph",
        "text": "Develop programming skills and study feedback control."
      },
      {
        "type": "paragraph",
        "text": "A useful project is to model a robotic joint, predict how it will move and compare those predictions with simulated or measured results."
      },
      {
        "type": "heading",
        "text": "If you come from electrical engineering"
      },
      {
        "type": "paragraph",
        "text": "Your background in motors, signals and electronic systems can transfer directly into controls."
      },
      {
        "type": "paragraph",
        "text": "Focus on robotics dynamics, mathematical modeling and software implementation."
      },
      {
        "type": "paragraph",
        "text": "Develop a position or speed controller and demonstrate how its performance changes under different loads."
      },
      {
        "type": "heading",
        "text": "If you work in software or embedded engineering"
      },
      {
        "type": "paragraph",
        "text": "You may already understand programming, processors and real-time execution."
      },
      {
        "type": "paragraph",
        "text": "The main challenge is developing a deeper understanding of physical systems."
      },
      {
        "type": "paragraph",
        "text": "Study dynamics, feedback control and stability."
      },
      {
        "type": "paragraph",
        "text": "Build a project in which your software regulates a simulated physical system rather than simply processing information."
      },
      {
        "type": "heading",
        "text": "If you come from industrial automation"
      },
      {
        "type": "paragraph",
        "text": "Experience with motors, sensors and control equipment can be valuable."
      },
      {
        "type": "paragraph",
        "text": "However, robotic motion control may require more advanced mathematical modeling and algorithm development than conventional industrial automation tasks."
      },
      {
        "type": "paragraph",
        "text": "Focus on control theory, dynamics and numerical simulation."
      },
      {
        "type": "paragraph",
        "text": "Use your practical experience to understand why real equipment behaves differently from simplified models."
      },
      {
        "type": "heading",
        "text": "If you are starting from scratch"
      },
      {
        "type": "paragraph",
        "text": "Begin with Python, mathematics and introductory mechanics."
      },
      {
        "type": "paragraph",
        "text": "Learn how a simple physical system responds to an input before attempting to control a complex robot."
      },
      {
        "type": "paragraph",
        "text": "A simulated motor or rotating joint provides an accessible starting point."
      },
      {
        "type": "paragraph",
        "text": "As your understanding develops, move toward feedback algorithms, more complex dynamics and multi-joint systems."
      },
      {
        "type": "heading",
        "text": "What matters in an interview?"
      },
      {
        "type": "paragraph",
        "text": "Controls engineering interviews often test how well candidates understand the systems they have developed."
      },
      {
        "type": "paragraph",
        "text": "You may be asked to explain how a controller works, how you evaluated stability or what happens when a robot carries a heavier load."
      },
      {
        "type": "paragraph",
        "text": "Prepare one project in detail."
      },
      {
        "type": "paragraph",
        "text": "Explain the physical model, your controller design, the experiments you performed and how the results changed under different conditions."
      },
      {
        "type": "paragraph",
        "text": "Employers may be particularly interested in a problem that did not behave as expected and how you investigated it."
      },
      {
        "type": "paragraph",
        "text": "The ability to explain engineering trade-offs is more useful than simply naming advanced control algorithms."
      }
    ]
  },
  {
    "id": "portfolio",
    "heading": "Build your first robotics controls project",
    "navLabel": "Portfolio project",
    "paragraphs": [],
    "sourceIds": [
      "python-control",
      "step-response",
      "step-info",
      "apptronik",
      "standard",
      "motor"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Control a simulated robot joint"
      },
      {
        "type": "paragraph",
        "text": "A useful beginner project is to develop a controller for a single rotating robotic joint."
      },
      {
        "type": "paragraph",
        "text": "Imagine a robotic arm with one motor that moves its joint to a requested angle."
      },
      {
        "type": "paragraph",
        "text": "Your task is to create a mathematical model of the joint, develop an algorithm that controls its movement and evaluate how the system responds under changing conditions."
      },
      {
        "type": "paragraph",
        "text": "You can complete the entire project using Python without purchasing physical robotics hardware."
      },
      {
        "type": "heading",
        "text": "Step 1: Define the system"
      },
      {
        "type": "paragraph",
        "text": "Begin with a simplified rotating joint."
      },
      {
        "type": "paragraph",
        "text": "The model should account for three basic factors:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Inertia: How strongly the joint resists changes in motion.",
          "Friction: Resistance that opposes movement.",
          "Motor torque: The turning effort applied to move the joint."
        ]
      },
      {
        "type": "paragraph",
        "text": "Record the units and assumptions used in the model."
      },
      {
        "type": "paragraph",
        "text": "Start with a simple rigid joint before introducing additional complexity."
      },
      {
        "type": "heading",
        "text": "Step 2: Set a movement target"
      },
      {
        "type": "paragraph",
        "text": "Choose a starting position and a target angle."
      },
      {
        "type": "paragraph",
        "text": "For example, the joint might begin at zero degrees and move to 45 degrees."
      },
      {
        "type": "paragraph",
        "text": "Define what successful movement should look like."
      },
      {
        "type": "paragraph",
        "text": "Consider how accurately the joint must reach its target, how quickly it should respond and how much motor torque is available."
      },
      {
        "type": "heading",
        "text": "Step 3: Develop a feedback controller"
      },
      {
        "type": "paragraph",
        "text": "Use a proportional-derivative (PD) controller or a basic PID controller."
      },
      {
        "type": "paragraph",
        "text": "The controller compares the desired position with the joint's actual position and calculates a motor command."
      },
      {
        "type": "paragraph",
        "text": "Simulate the movement using fixed time steps."
      },
      {
        "type": "paragraph",
        "text": "At each step, update the joint's position and velocity based on the applied torque and the model's physical properties."
      },
      {
        "type": "heading",
        "text": "Step 4: Measure the response"
      },
      {
        "type": "paragraph",
        "text": "Plot the joint's desired and actual position over time."
      },
      {
        "type": "paragraph",
        "text": "Record several useful measurements:"
      },
      {
        "type": "table",
        "caption": "Response measurements",
        "columns": [
          "Measurement",
          "What it shows"
        ],
        "rows": [
          [
            "Position error",
            "How close the joint is to its target"
          ],
          [
            "Overshoot",
            "Whether the joint moves beyond the target"
          ],
          [
            "Settling time",
            "How long the movement takes to stabilize"
          ],
          [
            "Motor torque",
            "How much effort the controller requires"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Compare the results against the requirements you defined before testing."
      },
      {
        "type": "heading",
        "text": "Step 5: Change the physical conditions"
      },
      {
        "type": "paragraph",
        "text": "Increase the joint's inertia to simulate a heavier load."
      },
      {
        "type": "paragraph",
        "text": "Observe whether the same controller still performs well."
      },
      {
        "type": "paragraph",
        "text": "Then introduce additional friction, sensor noise or a measurement delay."
      },
      {
        "type": "paragraph",
        "text": "Keep the original test results so you can compare the system's behavior."
      },
      {
        "type": "paragraph",
        "text": "The goal is to understand how physical changes affect control performance."
      },
      {
        "type": "heading",
        "text": "Step 6: Investigate a failure"
      },
      {
        "type": "paragraph",
        "text": "Introduce a realistic constraint."
      },
      {
        "type": "paragraph",
        "text": "For example, limit the maximum torque the motor can produce."
      },
      {
        "type": "paragraph",
        "text": "The controller may request more torque than the motor can deliver, causing the joint to move more slowly or struggle to reach its target."
      },
      {
        "type": "paragraph",
        "text": "Investigate the behavior and adjust the controller or its design assumptions."
      },
      {
        "type": "paragraph",
        "text": "If you use integral control, you can also investigate integral windup, where accumulated error causes undesirable behavior when the actuator is constrained."
      },
      {
        "type": "paragraph",
        "text": "Explain what happened and why your changes improved the result."
      },
      {
        "type": "heading",
        "text": "Step 7: Document your results"
      },
      {
        "type": "paragraph",
        "text": "Prepare a short technical report describing your model, controller, experiments and findings."
      },
      {
        "type": "paragraph",
        "text": "Include graphs showing the target position, actual position, control effort and performance under changing conditions."
      },
      {
        "type": "paragraph",
        "text": "Explain what worked, what failed and what trade-offs remained."
      },
      {
        "type": "heading",
        "text": "What to include in your portfolio"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "The mathematical model and its assumptions.",
          "Python code and instructions to reproduce the simulation.",
          "Plots comparing desired and actual movement.",
          "Measurements of tracking error, overshoot and settling time.",
          "Results under different loads and disturbances.",
          "An explanation of one failure and how you investigated it.",
          "A brief summary of improvements you would make in a second version."
        ]
      },
      {
        "type": "heading",
        "text": "An optional advanced extension"
      },
      {
        "type": "paragraph",
        "text": "Extend the project to a simulated two-joint robotic arm."
      },
      {
        "type": "paragraph",
        "text": "Develop a controller that coordinates both joints to move the arm to a desired position."
      },
      {
        "type": "paragraph",
        "text": "Alternatively, experiment with a simulated balancing robot."
      },
      {
        "type": "paragraph",
        "text": "Compare two approaches under the same disturbances and actuator limits."
      },
      {
        "type": "paragraph",
        "text": "More advanced projects can introduce model-based control, state estimation or optimization."
      },
      {
        "type": "paragraph",
        "text": "The objective is not to demonstrate the most complicated algorithm. It is to show that you understand how and why a controller behaves as it does."
      }
    ]
  }
],
  nextSteps:{
  "id": "next-steps",
  "heading": "Where to go next",
  "paragraphs": [],
  "sourceIds": [
    "python-control",
    "step-info",
    "mit"
  ],
  "blocks": [
    {
      "type": "resources",
      "items": [
        {
          "title": "Python Control Systems Library",
          "href": "https://python-control.readthedocs.io/",
          "description": "Learn how to model, simulate and analyze feedback-control systems using Python."
        },
        {
          "title": "Control Systems — Step Response Analysis",
          "href": "https://python-control.readthedocs.io/en/latest/generated/control.step_info.html",
          "description": "Explore how rise time, overshoot and settling time are calculated when evaluating a controller's response."
        },
        {
          "title": "MIT — Underactuated Robotics",
          "href": "https://underactuated.mit.edu/",
          "description": "Study advanced robot dynamics and control, including balancing, walking, manipulation and optimization-based methods."
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Begin with one simple controlled system. Once you can predict its movement, measure its response and explain how it behaves under changing conditions, progress toward more complex robotic systems."
    }
  ]
},
  researchNotes:[
    `Black Scarab’s November 2, 2026 primary controls cohort contains ${role.postingCount} advertisements across ${role.employerCount} selected employers. Ten stored full sources were reviewed for this guide, including two direct controller-development roles originally classified under robot learning and embedded software. Original classifications remain unchanged. The broad cohort also contains factory automation, control-center applications, guidance and safety-assurance work. No raw cohort opening totals or skill-frequency claims are presented as profession-specific findings.`,
    `The compensation estimate is the median annual range midpoint from ${compensation.postingCount} reviewed U.S. advertisements across ${compensation.employerCount} employers, rounded to the nearest $1,000. The exact median is $${compensation.exactMedianMidpoint.toLocaleString('en-US')}. Three observations are from 1X; the sample emphasizes experienced California and New York roles. It includes motor-control firmware with direct loop ownership and learned whole-body control. This is not an entry-level estimate or representative market median. Structured salary fields do not consistently identify base pay. Bonus and equity are excluded.`,
    'The linked salary derivation preserves eligible records, source hashes, extraction methods and exclusions. Annual periods must be explicit in the source text or official ATS structure. Unverified periods, open-ended ranges, insufficient role descriptions, industrial automation, control-center applications, primarily guidance, actuation hardware qualification and safety-assurance roles are excluded. Distinct requisitions count separately.',
    'The response chart shows exact zero-state unit-step responses of G(s) = 36 / (s² + 12ζs + 36), with damping ratios 0.3 and 0.8. Both have natural frequency 6 rad/s, target 1 and zero initial state; position is shown as a percentage of the target over three seconds. Peak overshoot is approximately 37.2% and 1.5%. These are ideal analytical models, not measured robot results or recommended controller gains. The project adds separate load, noise, saturation and delay tests. Technical definitions follow the official Python Control Systems Library documentation.',
    'Employer examples refer to advertisements collected November 2, 2026, rather than a live vacancy inventory. Apptronik’s actuation advertisement was checked November 9. The opening scenario, daily-work sequence and project are educational examples. The hero is a conceptual editorial illustration. Editorial review: November 9, 2026.',
  ],
  citations:[
    source('study','Black Scarab: November 2 employer research','/research/physical-ai-careers-2026-11-02.json','Pinned selected-employer aggregate and taxonomy.'),
    source('evidence','Robotics controls: reviewed employer evidence',evidencePath,'Stored full-source contextual reviews, qualification spans and source hashes.'),
    source('compensation','Black Scarab: robotics controls compensation estimate',compensationPath,'Annual USD observations, median calculation, role-scope decisions and exclusions.'),
    posting('apptronik','apptronik:greenhouse:6188799004'),posting('wholebody','apptronik:greenhouse:6135714004'),
    posting('motor','one-x:ashby:7e9120d6-87d0-458b-b0ec-3b6ea5ea9dc7'),posting('foundation','one-x:ashby:a02d07dc-851d-4246-bc1d-1f50412015c0'),
    posting('standard','standard-bots:ashby:7a6d5b7f-9210-41c7-b7b5-c32bd7d95bc9'),posting('path','path-robotics:greenhouse:8633173002'),
    posting('pi','physical-intelligence:ashby:c8f9e9aa-8801-4916-9b1f-2c0bd5f072f9'),posting('kodiak','kodiak:greenhouse:4312761009'),
    posting('figure','figure:greenhouse:4671442006'),posting('motor-firmware','one-x:ashby:ea9614dd-94e8-4a3a-a714-645957a298d0'),
    source('python-control','Python Control Systems Library: Introduction',pythonControl,'Official overview of feedback analysis, modeling and simulation tools.'),
    source('step-response','Python Control Systems Library: step_response',stepResponse,'Official unit-step response documentation; the guide chart uses the equivalent analytical second-order solution.'),
    source('step-info','Python Control Systems Library: step_info',stepInfo,'Official response metrics, including overshoot and settling-time definitions.'),
    source('mit','MIT: Underactuated Robotics',mit,'Russ Tedrake’s university course notes on dynamics, optimization and control.'),
  ],
};
