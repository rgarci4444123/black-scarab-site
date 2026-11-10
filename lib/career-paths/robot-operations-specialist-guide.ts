import type {CareerGuideContent,Citation} from '@/lib/career-paths/types';
import {researchForRole} from '@/lib/career-paths/research';
import evidence from '@/public/research/robot-operations-specialist-evidence-2026-11-10.json';
import model from '@/public/research/robot-operations-mission-outcomes-2026-11-10.json';
import compensation from '@/public/research/robot-operations-specialist-compensation-2026-11-02.json';
import decisions from '@/research/seo/2026-11-10/decisions.json';
const roleId='robot-operations-specialist';
const role=researchForRole(roleId,evidence.snapshotId);
if(!role||compensation.snapshotId!==evidence.snapshotId)throw new Error('Robot Operations guide research mismatch');
const seo=decisions.guides.find(item=>item.occupationId===roleId);
if(!seo)throw new Error('Missing Robot Operations SEO decision');
const money=(n:number)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
const evidencePath='/research/robot-operations-specialist-evidence-2026-11-10.json';
const source=(id:string,title:string,url:string,scope:string):Citation=>({id,title,url,scope,accessedAt:'2026-11-10'});
const posting=(id:string,index:number):Citation=>{const r=evidence.records[index];return source(id,`${r.employer}: ${r.title}`,r.url,'Employer advertisement collected November 2, 2026.');};
export const robotOperationsSpecialistGuide:CareerGuideContent={
 id:roleId,occupationId:roleId,familyId:'integration-operations',slug:roleId,
 title:seo.h1,seoTitle:seo.seoTitle,description:seo.description,status:'published',publishedAt:'2026-11-10',reviewedAt:'2026-11-10',
 research:{snapshotId:evidence.snapshotId,roleId,evidencePath},
 deck:'Operate robots, monitor missions, support AI training and help autonomous machines perform reliably in the real world.',
 introduction:['Imagine a company operating hundreds of autonomous delivery robots across a city.'],
 illustration:{src:'/career-paths/robot-operations-specialist-terminal.webp',width:1672,height:941,alt:'Conceptual editorial illustration of two helmeted operators handing over a radio at a futuristic robot dispatch terminal, with white delivery robots and restrained orange workwear accents.'},
 overview:[
  {label:'What you do',value:'Operate robotic systems, monitor performance, handle exceptions and document issues',sourceIds:['dyna-safety','figure','serve']},
  {label:'Core skills',value:'Situational awareness, troubleshooting, technical communication and following operating procedures',sourceIds:['dyna-safety','pickle','skild']},
  {label:'Education',value:'Often employer training or relevant practical experience; some positions require technical qualifications',sourceIds:['dyna-safety','dyna-data','pickle','skild']},
  {label:'Compensation',value:`${money(compensation.estimate)}/year`,detail:'Black Scarab estimate',sourceIds:['compensation']},
 ],
 sections:[
  {
    "id": "day-to-day",
    "heading": "What does a robot operations specialist do?",
    "navLabel": "The work",
    "paragraphs": [],
    "sourceIds": [
      "ambi",
      "dyna-safety",
      "figure",
      "physical-intelligence",
      "pickle",
      "serve"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Imagine a company operating hundreds of autonomous delivery robots across a city."
      },
      {
        "type": "paragraph",
        "text": "Most of the time, the robots navigate sidewalks, avoid obstacles and deliver orders without direct human intervention."
      },
      {
        "type": "paragraph",
        "text": "But occasionally, a robot encounters a situation it cannot resolve independently."
      },
      {
        "type": "paragraph",
        "text": "A sidewalk might be blocked, a delivery location might be inaccessible or the robot could experience an unexpected technical problem."
      },
      {
        "type": "paragraph",
        "text": "Robot operations specialists help manage these situations and keep robotic systems operating effectively."
      },
      {
        "type": "paragraph",
        "text": "Their responsibilities include preparing equipment, monitoring robot activity, responding to issues and documenting what happens during daily operations."
      },
      {
        "type": "paragraph",
        "text": "Some operators work with autonomous robots already performing commercial tasks. Others manually control robots to collect training data or help engineering teams test new capabilities."
      },
      {
        "type": "paragraph",
        "text": "Unlike engineers who design robotic hardware or develop AI algorithms, operations specialists focus primarily on using the systems and supporting their performance in practical environments."
      },
      {
        "type": "paragraph",
        "text": "Their work provides an important connection between robots operating in the physical world and the engineering teams developing them."
      },
      {
        "type": "heading",
        "text": "Three areas of robot operations"
      },
      {
        "type": "table",
        "caption": "Areas of robot operations",
        "columns": [
          "Specialization",
          "What operators do"
        ],
        "rows": [
          [
            "Fleet and site operations",
            "Monitor deployed robots, manage daily missions, respond to exceptions and coordinate equipment availability"
          ],
          [
            "Teleoperation and data collection",
            "Control robots using remote interfaces and record demonstrations used for AI training"
          ],
          [
            "Robot testing operations",
            "Execute defined tests, observe behavior and document problems for engineering teams"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These responsibilities sometimes overlap."
      },
      {
        "type": "paragraph",
        "text": "A company operating delivery robots may employ specialists who manage fleets throughout the day."
      },
      {
        "type": "paragraph",
        "text": "A humanoid robotics company may employ operators who guide robots through repetitive tasks to generate training data."
      },
      {
        "type": "paragraph",
        "text": "Other companies hire test operators who help engineers evaluate new robotics software or hardware."
      },
      {
        "type": "heading",
        "text": "What does a typical shift look like?"
      },
      {
        "type": "paragraph",
        "text": "Robot operations specialists frequently work in structured shifts, particularly when supporting commercial deployments, robot testing or data collection."
      },
      {
        "type": "paragraph",
        "text": "Imagine an operator beginning a shift at a warehouse using autonomous mobile robots."
      },
      {
        "type": "paragraph",
        "text": "Before starting, they review information from the previous team."
      },
      {
        "type": "paragraph",
        "text": "Several robots are available, one is undergoing maintenance and another experienced repeated navigation problems near a loading station."
      },
      {
        "type": "paragraph",
        "text": "The operator checks the status of the equipment, reviews assigned missions and begins monitoring operations."
      },
      {
        "type": "paragraph",
        "text": "During the shift, a robot stops unexpectedly."
      },
      {
        "type": "paragraph",
        "text": "The operator examines its status, follows the company's approved procedures and determines whether the issue can be addressed within their responsibilities or requires assistance from another team."
      },
      {
        "type": "paragraph",
        "text": "They record the incident, including the robot involved, when it happened and what they observed."
      },
      {
        "type": "paragraph",
        "text": "At the end of the shift, they prepare a handoff so the next operator understands which robots are available and which problems remain unresolved."
      },
      {
        "type": "paragraph",
        "text": "A typical shift involves:"
      },
      {
        "type": "list",
        "items": [
          "Prepare equipment. Review previous incidents, inspect assigned robots and complete required checks.",
          "Operate systems. Start approved missions, testing scenarios or data collection tasks.",
          "Monitor performance. Observe robot status, task completion and unusual behavior.",
          "Respond to exceptions. Follow procedures when a robot pauses, fails or requires intervention.",
          "Document events. Record incidents, actions taken and relevant observations.",
          "Hand over operations. Communicate unresolved issues and prepare equipment for the next shift."
        ],
        "ordered": true
      },
      {
        "type": "paragraph",
        "text": "The objective is to maintain organized, reliable operations while making problems visible to the people responsible for resolving them."
      },
      {
        "type": "heading",
        "text": "When a delivery robot gets stuck"
      },
      {
        "type": "paragraph",
        "text": "Consider a delivery robot traveling along a sidewalk."
      },
      {
        "type": "paragraph",
        "text": "The robot encounters construction equipment blocking its usual route and stops."
      },
      {
        "type": "paragraph",
        "text": "The operations specialist receives a notification that the robot needs attention."
      },
      {
        "type": "paragraph",
        "text": "Depending on the company's operating system and approved procedures, the operator may be able to review camera information, examine the robot's status or provide an authorized intervention."
      },
      {
        "type": "paragraph",
        "text": "If the issue cannot be resolved within the operator's responsibilities, they escalate it to the appropriate team."
      },
      {
        "type": "paragraph",
        "text": "The operator records what happened, where it happened and which actions were taken."
      },
      {
        "type": "paragraph",
        "text": "This information can help engineers understand whether the problem resulted from an unusual environment, a recurring navigation limitation or another issue requiring investigation."
      },
      {
        "type": "paragraph",
        "text": "An operations specialist does not necessarily need to determine why the robot's navigation algorithm failed."
      },
      {
        "type": "paragraph",
        "text": "Their responsibility is to recognize the problem, respond appropriately and preserve useful information about what occurred."
      }
    ]
  },
  {
    "id": "teleoperation",
    "heading": "What is robot teleoperation?",
    "navLabel": "Teleoperation",
    "paragraphs": [],
    "sourceIds": [
      "physical-intelligence",
      "skild",
      "dyna-data",
      "figure",
      "lerobot-dataset"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Teleoperation is the practice of controlling a robot through an interface rather than directly manipulating the machine by hand."
      },
      {
        "type": "paragraph",
        "text": "An operator might use a joystick, controller, specialized input device or another interface to guide the robot through a task."
      },
      {
        "type": "paragraph",
        "text": "For example, a robotics company developing a household robot may employ operators who repeatedly demonstrate how to pick up objects, open drawers or organize items."
      },
      {
        "type": "paragraph",
        "text": "The robot's movements and sensor measurements can be recorded and used by researchers developing machine learning systems."
      },
      {
        "type": "heading",
        "text": "How teleoperation supports robot learning"
      },
      {
        "type": "paragraph",
        "text": "Modern robot learning systems often rely on examples of successful task execution."
      },
      {
        "type": "paragraph",
        "text": "Imagine a company developing an AI model that teaches a robot to place dishes into a dishwasher."
      },
      {
        "type": "paragraph",
        "text": "Human operators may demonstrate the task many times under different conditions."
      },
      {
        "type": "paragraph",
        "text": "They might vary the positions of dishes, introduce different objects or repeat the task using different starting configurations."
      },
      {
        "type": "paragraph",
        "text": "The recorded demonstrations can contain camera images, robot movements, joint information and other relevant measurements."
      },
      {
        "type": "paragraph",
        "text": "Machine learning engineers then use these datasets to help develop and evaluate robotic behavior."
      },
      {
        "type": "paragraph",
        "text": "The operator's contribution is important because poorly executed or inconsistently recorded demonstrations can reduce the usefulness of the training data."
      },
      {
        "type": "paragraph",
        "text": "Accuracy, consistency and attention to instructions matter as much as the number of demonstrations completed."
      },
      {
        "type": "paragraph",
        "text": "Companies such as Physical Intelligence and Skild have advertised positions involving robotic teleoperation and data collection."
      },
      {
        "type": "heading",
        "text": "Does teleoperation mean working from home?"
      },
      {
        "type": "paragraph",
        "text": "Not necessarily."
      },
      {
        "type": "paragraph",
        "text": "The word remote describes how the robot is controlled, not automatically where the operator is located."
      },
      {
        "type": "paragraph",
        "text": "Some teleoperation positions require employees to work onsite in robotics laboratories or testing facilities."
      },
      {
        "type": "paragraph",
        "text": "Operators may need to handle equipment, position objects, adjust experimental setups and interact directly with engineering teams."
      },
      {
        "type": "paragraph",
        "text": "Physical Intelligence and Figure provide examples of roles involving onsite robot operation."
      },
      {
        "type": "paragraph",
        "text": "Always check the actual location and schedule requirements rather than assuming a teleoperation position is a work-from-home job."
      }
    ]
  },
  {
    "id": "operations-vs-related-roles",
    "heading": "How is robot operations different from other robotics careers?",
    "navLabel": "Related careers",
    "paragraphs": [],
    "sourceIds": [
      "figure",
      "pickle",
      "serve",
      "dyna-data"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Robot operations specialists work closely with engineers and technicians, but their responsibilities are different."
      },
      {
        "type": "table",
        "caption": "Robotics responsibilities compared",
        "columns": [
          "Career",
          "Main responsibility"
        ],
        "rows": [
          [
            "Robot Operations Specialist",
            "Operates robots, monitors missions and documents operational issues"
          ],
          [
            "Field Service Engineer",
            "Diagnoses equipment failures, performs maintenance and repairs robots"
          ],
          [
            "Robotics Integration Engineer",
            "Connects robots with other equipment and configures complete applications"
          ],
          [
            "Robotics Data Engineer",
            "Develops systems that organize, process and manage robot datasets"
          ],
          [
            "Robot Learning Engineer",
            "Develops machine learning models that help robots acquire new behaviors"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "For example, imagine a warehouse robot that repeatedly fails to complete a particular task."
      },
      {
        "type": "paragraph",
        "text": "An operations specialist observes the problem and records the circumstances."
      },
      {
        "type": "paragraph",
        "text": "A field service engineer may investigate whether the equipment has a mechanical, electrical or configuration fault."
      },
      {
        "type": "paragraph",
        "text": "If the problem involves the robot's software, specialized engineers may investigate the logs and develop a correction."
      },
      {
        "type": "paragraph",
        "text": "The operations specialist then helps evaluate how the robot performs during subsequent operations, within their assigned responsibilities."
      },
      {
        "type": "paragraph",
        "text": "At smaller companies, one person may perform portions of several roles."
      }
    ]
  },
  {
    "id": "skills",
    "heading": "Which skills and tools do employers look for?",
    "navLabel": "Skills & tools",
    "paragraphs": [],
    "sourceIds": [
      "dyna-safety",
      "dyna-data",
      "figure",
      "physical-intelligence",
      "pickle",
      "serve",
      "skild",
      "outcomes"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Situational awareness and attention to detail"
      },
      {
        "type": "paragraph",
        "text": "Operating robots requires the ability to notice changes and recognize when something isn't behaving as expected."
      },
      {
        "type": "paragraph",
        "text": "An operator may monitor several robots, follow a testing procedure or repeat a task many times."
      },
      {
        "type": "paragraph",
        "text": "Important observations might include:"
      },
      {
        "type": "list",
        "items": [
          "A robot stopping unexpectedly.",
          "A task taking longer than usual.",
          "An obstacle appearing in the environment.",
          "Equipment reporting an unusual status.",
          "A teleoperated demonstration failing to meet the required instructions."
        ]
      },
      {
        "type": "paragraph",
        "text": "The ability to recognize these events and respond appropriately is a core skill."
      },
      {
        "type": "paragraph",
        "text": "Operators do not need to solve every problem independently."
      },
      {
        "type": "paragraph",
        "text": "They need to understand when to continue, when to pause and when to escalate."
      },
      {
        "type": "heading",
        "text": "Technical familiarity"
      },
      {
        "type": "paragraph",
        "text": "Robot operators should understand the basic components and systems they work with."
      },
      {
        "type": "paragraph",
        "text": "Useful knowledge includes:"
      },
      {
        "type": "table",
        "caption": "Robot components",
        "columns": [
          "Component",
          "Why operators should understand it"
        ],
        "rows": [
          [
            "Sensors and cameras",
            "Help robots observe their environment"
          ],
          [
            "Motors and actuators",
            "Produce the physical movement of the robot"
          ],
          [
            "Battery and power systems",
            "Supply energy for operation"
          ],
          [
            "Onboard computer",
            "Runs software supporting robot behavior"
          ],
          [
            "Operator interface",
            "Displays status and supports authorized commands"
          ],
          [
            "Communication systems",
            "Connect robots with other systems and operators"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "An operator typically does not need to design these components."
      },
      {
        "type": "paragraph",
        "text": "However, understanding their basic purpose makes it easier to recognize problems and communicate with technical teams."
      },
      {
        "type": "paragraph",
        "text": "Some positions also value familiarity with Linux, basic computer networking or diagnostic software."
      },
      {
        "type": "heading",
        "text": "Following procedures consistently"
      },
      {
        "type": "paragraph",
        "text": "Many robot operations tasks depend on repeatability."
      },
      {
        "type": "paragraph",
        "text": "A teleoperation role might require an operator to demonstrate the same task under carefully defined conditions."
      },
      {
        "type": "paragraph",
        "text": "A testing role may involve executing an identical scenario across several software versions."
      },
      {
        "type": "paragraph",
        "text": "A fleet operations role may require standardized checks before robots are deployed."
      },
      {
        "type": "paragraph",
        "text": "Operators must follow instructions carefully and record deviations."
      },
      {
        "type": "paragraph",
        "text": "This helps ensure that results are meaningful and that other teams can understand what happened."
      },
      {
        "type": "heading",
        "text": "Troubleshooting and escalation"
      },
      {
        "type": "paragraph",
        "text": "Operations specialists regularly encounter unexpected behavior."
      },
      {
        "type": "paragraph",
        "text": "They should learn to distinguish between an observation and an assumption about its cause."
      },
      {
        "type": "paragraph",
        "text": "For example:"
      },
      {
        "type": "paragraph",
        "text": "Weak report: \"The robot's sensor is broken.\""
      },
      {
        "type": "paragraph",
        "text": "Better report: \"Robot 12 stopped near loading station C at 10:42 a.m. during a transfer task. The operator interface displayed a navigation error.\""
      },
      {
        "type": "paragraph",
        "text": "The second report provides specific information without assuming the cause."
      },
      {
        "type": "paragraph",
        "text": "Engineers can use the robot identifier, timestamp and task information to investigate relevant logs."
      },
      {
        "type": "paragraph",
        "text": "Good operational troubleshooting often begins with accurate observation rather than advanced technical knowledge."
      },
      {
        "type": "heading",
        "text": "Documentation and communication"
      },
      {
        "type": "paragraph",
        "text": "Robot operations teams rely on clear records."
      },
      {
        "type": "paragraph",
        "text": "A useful incident report generally includes:"
      },
      {
        "type": "list",
        "items": [
          "Robot or equipment identifier.",
          "Date and time.",
          "Task being performed.",
          "Observed behavior.",
          "Relevant status messages.",
          "Actions taken.",
          "Whether the issue was resolved or escalated."
        ]
      },
      {
        "type": "paragraph",
        "text": "Common workplace tools may include spreadsheets, task-management platforms, messaging applications and specialized robot operations software."
      },
      {
        "type": "paragraph",
        "text": "Tools such as Jira and Slack appear in some robotics job descriptions."
      },
      {
        "type": "paragraph",
        "text": "The exact software varies, but the underlying skill is the same: communicate information clearly enough that another person can act on it."
      },
      {
        "type": "heading",
        "text": "Understanding operational performance"
      },
      {
        "type": "paragraph",
        "text": "A robot completing its assigned task doesn't always tell the full story."
      },
      {
        "type": "paragraph",
        "text": "Some tasks may be completed entirely autonomously, while others require human assistance."
      },
      {
        "type": "paragraph",
        "text": "Operations specialists help teams understand these differences."
      },
      {
        "type": "paragraph",
        "text": "Consider two robot fleets, each attempting 100 delivery missions."
      },
      {
        "type": "mission-outcomes",
        "id": "robot-mission-outcomes",
        "title": "Why mission completion alone isn't enough",
        "total": model.totalPerRun,
        "runs": model.runs
      },
      {
        "type": "paragraph",
        "text": "Both fleets achieve a 90% mission completion rate."
      },
      {
        "type": "paragraph",
        "text": "However, Fleet A requires human assistance for only five completed missions, while Fleet B requires assistance for 30."
      },
      {
        "type": "paragraph",
        "text": "Although both fleets complete the same number of missions, their operational performance is meaningfully different."
      },
      {
        "type": "paragraph",
        "text": "Fleet B depends much more heavily on human intervention."
      },
      {
        "type": "paragraph",
        "text": "Recording intervention frequency and duration helps teams assess staffing requirements, operating costs and the ability to scale."
      },
      {
        "type": "paragraph",
        "text": "Operations specialists help make this information visible by recording interventions, outcomes and recurring problems."
      },
      {
        "type": "paragraph",
        "text": "For teleoperation and data collection, similar principles apply. A company may care not only about the number of demonstrations collected but also about how many satisfy its quality requirements."
      }
    ]
  },
  {
    "id": "education",
    "heading": "Do you need an engineering degree?",
    "navLabel": "Education",
    "paragraphs": [],
    "sourceIds": [
      "dyna-safety",
      "dyna-data",
      "pickle",
      "skild",
      "figure",
      "nuro"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "An engineering degree is not a universal requirement for robot operations positions."
      },
      {
        "type": "paragraph",
        "text": "Reviewed operator advertisements emphasize reliability, technical familiarity, attention to detail and the ability to follow procedures."
      },
      {
        "type": "paragraph",
        "text": "Some roles provide equipment-specific training."
      },
      {
        "type": "paragraph",
        "text": "Others prefer candidates with relevant technical education or experience operating machinery."
      },
      {
        "type": "heading",
        "text": "What employers look for"
      },
      {
        "type": "table",
        "caption": "Representative employer qualifications",
        "columns": [
          "Employer",
          "Representative qualifications"
        ],
        "rows": [
          [
            "Skild",
            "Technical literacy, attention to detail and ability to follow operating instructions"
          ],
          [
            "Pickle Robot",
            "Relevant mechanical or technical experience for robot testing"
          ],
          [
            "Dyna",
            "Associate degree, bachelor's degree or equivalent practical experience"
          ],
          [
            "Figure",
            "Practical ability to operate robots, perform assigned tasks and report issues"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Requirements vary by role."
      },
      {
        "type": "paragraph",
        "text": "A robot test operator may need more technical familiarity than a position focused on routine data collection."
      },
      {
        "type": "paragraph",
        "text": "Autonomous vehicle and drone operations can also involve additional driving, aviation or other role-specific qualifications."
      },
      {
        "type": "heading",
        "text": "Can you enter without a technical background?"
      },
      {
        "type": "paragraph",
        "text": "Yes. Robot operations can provide an entry point into robotics for people from a variety of industries."
      },
      {
        "type": "paragraph",
        "text": "Experience with manufacturing, logistics, customer service, equipment operation or other structured work can be useful."
      },
      {
        "type": "paragraph",
        "text": "Employers may value people who demonstrate reliability, careful execution and clear communication."
      },
      {
        "type": "paragraph",
        "text": "However, the job still requires learning unfamiliar technology and following equipment-specific procedures."
      },
      {
        "type": "heading",
        "text": "What should you learn first?"
      },
      {
        "type": "paragraph",
        "text": "A useful foundation includes:"
      },
      {
        "type": "list",
        "items": [
          "Basic robotics components and terminology.",
          "Using computer interfaces and status dashboards.",
          "Following technical instructions.",
          "Writing clear incident reports.",
          "Recording and analyzing basic operational data.",
          "Basic troubleshooting and escalation procedures."
        ]
      },
      {
        "type": "paragraph",
        "text": "Introductory Linux and spreadsheet skills can also be helpful."
      },
      {
        "type": "paragraph",
        "text": "For data collection roles, practice following detailed task instructions and recording results consistently."
      },
      {
        "type": "paragraph",
        "text": "For fleet operations, focus on understanding mission status, equipment availability and incident management."
      }
    ]
  },
  {
    "id": "salary",
    "heading": "How much do robot operations specialists earn?",
    "navLabel": "Compensation",
    "paragraphs": [],
    "sourceIds": [
      "compensation",
      "figure-site",
      "physical-intelligence",
      "pickle",
      "serve",
      "nuro"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Robot operations positions are often paid hourly rather than through fixed annual salaries."
      },
      {
        "type": "paragraph",
        "text": "Compensation varies by location, job responsibilities, shift schedule and employment arrangements."
      },
      {
        "type": "paragraph",
        "text": "Black Scarab estimates annualized compensation at $57,000, based on reviewed U.S. robot operations job advertisements."
      },
      {
        "type": "paragraph",
        "text": "This represents an approximate full-time-equivalent figure rather than guaranteed annual earnings."
      },
      {
        "type": "table",
        "caption": "Selected U.S. hourly advertisements, November 2026",
        "columns": [
          "Employer and position",
          "Advertised hourly pay"
        ],
        "rows": evidence.roles[roleId].hourlyCompensation.map(p=>[`${p.employer}\n${p.title.replace(', Commercial Site Team','').replace('  (Doral, Miami)','')}`,p.minimum===p.maximum?money(p.minimum):`${money(p.minimum)} to ${money(p.maximum)}`]),
        "variant": "hourly-pay"
      },
      {
        "type": "paragraph",
        "text": "Selected advertised hourly rates. Figure's reviewed role was contract-to-hire, while Serve's was part-time."
      },
      {
        "type": "heading",
        "text": "How does hourly compensation translate into annual pay?"
      },
      {
        "type": "paragraph",
        "text": "For illustration, an employee earning $27.50 per hour and working 40 hours per week for 52 weeks would earn approximately $57,200 annually before taxes."
      },
      {
        "type": "paragraph",
        "text": "Actual earnings depend on hours worked, unpaid time, overtime and employment terms."
      },
      {
        "type": "heading",
        "text": "What influences compensation?"
      },
      {
        "type": "paragraph",
        "text": "Technical responsibilities. Compare the scope of robot operation, testing and troubleshooting expected in each position."
      },
      {
        "type": "paragraph",
        "text": "Shift requirements. Overnight, weekend and other specialized schedules can affect total compensation."
      },
      {
        "type": "paragraph",
        "text": "Employment arrangements. Some robotics operators work full-time, while others are employed on part-time, temporary or contract-to-hire terms."
      },
      {
        "type": "paragraph",
        "text": "Location and employer. Pay varies across geographic markets and robotics companies."
      },
      {
        "type": "paragraph",
        "text": "Candidates should compare hourly rates alongside expected hours, benefits, training, shift requirements and employment stability."
      },
      {
        "type": "heading",
        "text": "Career progression"
      },
      {
        "type": "paragraph",
        "text": "Robot operations can provide practical exposure to robotics technology and professional opportunities in adjacent fields."
      },
      {
        "type": "paragraph",
        "text": "Someone may begin by operating equipment or recording demonstrations, then develop additional responsibilities in testing, technical support or coordinating operations."
      },
      {
        "type": "paragraph",
        "text": "Potential progression includes:"
      },
      {
        "type": "list",
        "items": [
          "Senior Robot Operator or Team Lead.",
          "Robotics Operations Coordinator or Supervisor.",
          "Robotics Test Technician.",
          "Field Service Technician or Engineer, with appropriate technical training.",
          "Robotics Data or Engineering Support roles, with additional specialized skills."
        ]
      },
      {
        "type": "paragraph",
        "text": "These transitions are not automatic."
      },
      {
        "type": "paragraph",
        "text": "For example, moving from robot operation into engineering typically requires substantial additional technical education or experience."
      },
      {
        "type": "paragraph",
        "text": "However, practical exposure to deployed robots can help operators understand which specialization they want to pursue."
      }
    ]
  },
  {
    "id": "employers",
    "heading": "Which companies hire robot operations specialists?",
    "navLabel": "Employers",
    "paragraphs": [],
    "sourceIds": [
      "ambi",
      "dyna-safety",
      "dyna-data",
      "figure",
      "figure-site",
      "nuro",
      "physical-intelligence",
      "pickle",
      "serve",
      "skild"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Robot operations opportunities exist across humanoid robotics, robot learning, warehouse automation, delivery robots and autonomous vehicles."
      },
      {
        "type": "heading",
        "text": "Humanoid robotics and AI training"
      },
      {
        "type": "paragraph",
        "text": "Figure, Physical Intelligence, Skild and Dyna provide examples of companies hiring people to operate robots or collect demonstrations."
      },
      {
        "type": "paragraph",
        "text": "These positions may involve teleoperation, preparing equipment, executing assigned tasks and recording results."
      },
      {
        "type": "paragraph",
        "text": "For companies developing general-purpose robots, demonstrations can help produce training data for models that learn physical behaviors."
      },
      {
        "type": "heading",
        "text": "Warehouse robotics"
      },
      {
        "type": "paragraph",
        "text": "Pickle Robot and Ambi Robotics offer examples of robotic systems used in logistics environments."
      },
      {
        "type": "paragraph",
        "text": "Operations-related roles may involve monitoring equipment, executing tests, responding to issues and helping maintain reliable operations."
      },
      {
        "type": "paragraph",
        "text": "The responsibilities vary depending on whether the position supports a customer deployment, a testing facility or ongoing technical operations."
      },
      {
        "type": "heading",
        "text": "Delivery robots"
      },
      {
        "type": "paragraph",
        "text": "Serve Robotics operates delivery robots and has advertised field operations positions."
      },
      {
        "type": "paragraph",
        "text": "These roles may involve deploying equipment, monitoring operations, responding to exceptions and coordinating robot availability."
      },
      {
        "type": "paragraph",
        "text": "Some positions require working directly in the areas where robots operate."
      },
      {
        "type": "heading",
        "text": "Autonomous vehicles"
      },
      {
        "type": "paragraph",
        "text": "Nuro has advertised operator positions involving autonomous vehicles, driving and data collection."
      },
      {
        "type": "paragraph",
        "text": "These roles can involve different qualification requirements from conventional robot operations, including driving-related responsibilities."
      },
      {
        "type": "heading",
        "text": "Related job titles"
      },
      {
        "type": "paragraph",
        "text": "Useful searches include Robot Operator, Robotics Operations Associate, Teleoperation Operator, Data Collection Operator, Robot Test Operator and Robot Safety Operator."
      },
      {
        "type": "paragraph",
        "text": "Robot Operations Specialist is a broad career category rather than a single standardized job title."
      },
      {
        "type": "paragraph",
        "text": "Read the responsibilities carefully."
      },
      {
        "type": "paragraph",
        "text": "An operations manager responsible for business strategy may perform a completely different job from an operator monitoring and assisting physical robots."
      }
    ]
  },
  {
    "id": "transition",
    "heading": "How to transition into robot operations",
    "navLabel": "Your starting point",
    "paragraphs": [],
    "sourceIds": [
      "pickle",
      "serve",
      "dyna-safety",
      "skild",
      "physical-intelligence"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Robot operations offers several routes for people without conventional robotics backgrounds."
      },
      {
        "type": "table",
        "caption": "Routes into robot operations",
        "columns": [
          "Your background",
          "Transferable experience",
          "Skills to develop"
        ],
        "rows": [
          [
            "Warehouse or logistics",
            "Equipment operation, shift work and task management",
            "Robot interfaces, incident reporting and technical terminology"
          ],
          [
            "Manufacturing or maintenance",
            "Machinery, procedures and troubleshooting",
            "Robotics software, robot monitoring and operating workflows"
          ],
          [
            "Customer service",
            "Communication, escalation and problem resolution",
            "Technical observations and equipment familiarity"
          ],
          [
            "IT or technical support",
            "Software interfaces, logs and troubleshooting",
            "Physical robot behavior and operational procedures"
          ],
          [
            "Complete beginner",
            "Attention to detail and willingness to learn",
            "Basic robotics, documentation and structured task execution"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "If you work in warehouses or logistics"
      },
      {
        "type": "paragraph",
        "text": "Your experience with production schedules, equipment and operational procedures can transfer into robotics."
      },
      {
        "type": "paragraph",
        "text": "Learn the basic components of autonomous mobile robots and how operators monitor their activity."
      },
      {
        "type": "paragraph",
        "text": "Demonstrate that you can follow procedures, recognize problems and communicate clearly during a shift."
      },
      {
        "type": "heading",
        "text": "If you work in manufacturing or equipment maintenance"
      },
      {
        "type": "paragraph",
        "text": "Your familiarity with physical machinery can be valuable."
      },
      {
        "type": "paragraph",
        "text": "Focus on learning robot interfaces, autonomous operations and software-based issue reporting."
      },
      {
        "type": "paragraph",
        "text": "You may already have experience identifying abnormal equipment behavior, following maintenance procedures and documenting incidents."
      },
      {
        "type": "heading",
        "text": "If you come from customer service"
      },
      {
        "type": "paragraph",
        "text": "Customer service experience can develop useful skills in communication, handling unexpected situations and escalating problems."
      },
      {
        "type": "paragraph",
        "text": "The main gap is technical familiarity."
      },
      {
        "type": "paragraph",
        "text": "Learn how basic robotic systems operate and practice describing equipment behavior objectively."
      },
      {
        "type": "paragraph",
        "text": "A structured simulation project can help demonstrate these skills."
      },
      {
        "type": "heading",
        "text": "If you work in IT or technical support"
      },
      {
        "type": "paragraph",
        "text": "Your experience with software tools, troubleshooting and incident management provides a useful foundation."
      },
      {
        "type": "paragraph",
        "text": "Develop an understanding of sensors, motors and the physical environments where robots operate."
      },
      {
        "type": "paragraph",
        "text": "Some operations positions may provide opportunities to use Linux, logs or other technical interfaces."
      },
      {
        "type": "heading",
        "text": "If you are starting from scratch"
      },
      {
        "type": "paragraph",
        "text": "Begin by learning basic robotics terminology."
      },
      {
        "type": "paragraph",
        "text": "Understand what sensors, actuators, batteries and onboard computers do."
      },
      {
        "type": "paragraph",
        "text": "Practice following written procedures, maintaining records and reporting unexpected events."
      },
      {
        "type": "paragraph",
        "text": "Then look for training-oriented robot operator or data collection positions."
      },
      {
        "type": "paragraph",
        "text": "You do not necessarily need to build a robot or become a programmer before applying to suitable entry-level opportunities."
      },
      {
        "type": "heading",
        "text": "What matters in an interview?"
      },
      {
        "type": "paragraph",
        "text": "Be ready to discuss reliability, judgment and your ability to follow procedures in an interview."
      },
      {
        "type": "paragraph",
        "text": "Employers may ask how you would respond if a robot stopped unexpectedly, how you would maintain accuracy during repetitive tasks or what you would do if you encountered a situation not covered by your instructions."
      },
      {
        "type": "paragraph",
        "text": "Prepare an example of a problem you observed and how you handled it."
      },
      {
        "type": "paragraph",
        "text": "Explain what happened, which information you collected, what actions you took and when you involved someone else."
      },
      {
        "type": "paragraph",
        "text": "For data collection roles, employers may also evaluate your ability to follow detailed instructions and perform tasks consistently."
      },
      {
        "type": "paragraph",
        "text": "Questions worth asking include how training works, which interventions operators are authorized to perform, how shifts are scheduled and how performance is measured."
      }
    ]
  },
  {
    "id": "portfolio",
    "heading": "Build your first robot operations project",
    "navLabel": "Portfolio",
    "paragraphs": [],
    "sourceIds": [
      "outcomes",
      "dyna-safety",
      "pickle",
      "serve"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Simulate a delivery robot operations shift"
      },
      {
        "type": "paragraph",
        "text": "A useful beginner project is to create a simple robot fleet operations system using a spreadsheet or Python."
      },
      {
        "type": "paragraph",
        "text": "You do not need to purchase a physical robot."
      },
      {
        "type": "paragraph",
        "text": "The goal is to demonstrate how an operations specialist monitors tasks, records incidents and prepares useful information for other teams."
      },
      {
        "type": "paragraph",
        "text": "Imagine a small company operating three delivery robots across a fictional campus."
      },
      {
        "type": "paragraph",
        "text": "Each robot receives delivery assignments and reports whether its missions were completed."
      },
      {
        "type": "paragraph",
        "text": "Your responsibility is to organize the shift, record the results and respond to simulated problems."
      },
      {
        "type": "heading",
        "text": "Step 1: Define the operation"
      },
      {
        "type": "paragraph",
        "text": "Create three fictional robots:"
      },
      {
        "type": "list",
        "items": [
          "Robot A",
          "Robot B",
          "Robot C"
        ]
      },
      {
        "type": "paragraph",
        "text": "Assign each robot several delivery missions."
      },
      {
        "type": "paragraph",
        "text": "Define a few locations, such as a warehouse, office building and receiving station."
      },
      {
        "type": "paragraph",
        "text": "Create simple operating rules for your fictional scenario and identify which team receives escalated issues."
      },
      {
        "type": "heading",
        "text": "Step 2: Build a pre-shift checklist"
      },
      {
        "type": "paragraph",
        "text": "Before beginning the simulated shift, record the status of each robot."
      },
      {
        "type": "paragraph",
        "text": "Your checklist might include:"
      },
      {
        "type": "table",
        "caption": "Pre-shift checklist",
        "columns": [
          "Check",
          "What to record"
        ],
        "rows": [
          [
            "Robot availability",
            "Ready, unavailable or under maintenance"
          ],
          [
            "Battery status",
            "Whether sufficient charge is reported for the assigned task"
          ],
          [
            "Outstanding issues",
            "Problems reported by the previous shift"
          ],
          [
            "Assigned missions",
            "Tasks planned for the robot"
          ],
          [
            "Operator status",
            "Whether the required pre-shift checks were completed"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "The checklist should be clear enough that someone else could use it."
      },
      {
        "type": "heading",
        "text": "Step 3: Create a mission log"
      },
      {
        "type": "paragraph",
        "text": "Build a spreadsheet that records every delivery attempt."
      },
      {
        "type": "paragraph",
        "text": "Include fields such as:"
      },
      {
        "type": "list",
        "items": [
          "Mission ID.",
          "Robot ID.",
          "Starting location and destination.",
          "Start and completion time.",
          "Mission outcome.",
          "Whether human assistance was needed.",
          "Incident or escalation reference."
        ]
      },
      {
        "type": "paragraph",
        "text": "Use a consistent set of outcome categories."
      },
      {
        "type": "paragraph",
        "text": "For example, distinguish missions completed independently, completed with assistance and not completed."
      },
      {
        "type": "heading",
        "text": "Step 4: Introduce operational problems"
      },
      {
        "type": "paragraph",
        "text": "Create several fictional incidents during the shift."
      },
      {
        "type": "paragraph",
        "text": "Examples might include:"
      },
      {
        "type": "paragraph",
        "text": "Blocked destination: A robot cannot reach its assigned delivery location."
      },
      {
        "type": "paragraph",
        "text": "Missing status update: A robot's expected progress message does not arrive."
      },
      {
        "type": "paragraph",
        "text": "Low battery: A robot reports insufficient charge for another assignment."
      },
      {
        "type": "paragraph",
        "text": "For each incident, define the expected response within your simulated operating rules."
      },
      {
        "type": "paragraph",
        "text": "Keep these rules explicitly fictional rather than presenting them as procedures for operating real robots."
      },
      {
        "type": "heading",
        "text": "Step 5: Write incident reports"
      },
      {
        "type": "paragraph",
        "text": "For every exception, record what happened."
      },
      {
        "type": "paragraph",
        "text": "Include the robot identifier, mission, timestamp, observations and actions taken."
      },
      {
        "type": "paragraph",
        "text": "Avoid making unsupported assumptions about the cause."
      },
      {
        "type": "paragraph",
        "text": "For example, report that a robot stopped and displayed a navigation error rather than claiming that a particular sensor failed without evidence."
      },
      {
        "type": "heading",
        "text": "Step 6: Summarize operational results"
      },
      {
        "type": "paragraph",
        "text": "At the end of the shift, calculate:"
      },
      {
        "type": "table",
        "caption": "End-of-shift metrics",
        "columns": [
          "Metric",
          "What it tells you"
        ],
        "rows": [
          [
            "Missions attempted",
            "Total tasks assigned and started"
          ],
          [
            "Missions completed",
            "Tasks completed successfully"
          ],
          [
            "Independent completions",
            "Tasks completed without human assistance"
          ],
          [
            "Assisted completions",
            "Tasks completed with intervention"
          ],
          [
            "Unfinished missions",
            "Tasks not completed"
          ],
          [
            "Incident categories",
            "Types of problems encountered"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Check that your totals are consistent."
      },
      {
        "type": "paragraph",
        "text": "For example, independently completed, assisted-completed and unfinished missions should account for all attempted missions."
      },
      {
        "type": "paragraph",
        "text": "This creates a basic operations dashboard."
      },
      {
        "type": "heading",
        "text": "Step 7: Investigate a recurring problem"
      },
      {
        "type": "paragraph",
        "text": "Introduce several incidents affecting the same fictional delivery station."
      },
      {
        "type": "paragraph",
        "text": "Perhaps multiple robots pause near station C."
      },
      {
        "type": "paragraph",
        "text": "Review the incident reports and identify what the events have in common."
      },
      {
        "type": "paragraph",
        "text": "Prepare a short summary that an engineering team could use to investigate."
      },
      {
        "type": "paragraph",
        "text": "Include the relevant mission IDs, timestamps, locations and observations."
      },
      {
        "type": "paragraph",
        "text": "Distinguish facts from possible explanations."
      },
      {
        "type": "heading",
        "text": "Step 8: Prepare an end-of-shift handoff"
      },
      {
        "type": "paragraph",
        "text": "Create a concise handoff report for the next operator."
      },
      {
        "type": "paragraph",
        "text": "It should identify:"
      },
      {
        "type": "list",
        "items": [
          "Which robots are available.",
          "Which robots are unavailable.",
          "Outstanding incidents.",
          "Unfinished missions.",
          "Issues requiring engineering or maintenance attention.",
          "The next action assigned to each unresolved issue."
        ]
      },
      {
        "type": "paragraph",
        "text": "Ask someone else to review the handoff and explain the current state of operations using only your documentation."
      },
      {
        "type": "paragraph",
        "text": "If they cannot understand what happened, improve the report."
      },
      {
        "type": "heading",
        "text": "What to include in your portfolio"
      },
      {
        "type": "list",
        "items": [
          "A pre-shift checklist.",
          "A spreadsheet containing mission records.",
          "A simple operations summary or dashboard.",
          "Sample incident reports.",
          "An investigation of a recurring simulated issue.",
          "An end-of-shift handoff report.",
          "A short explanation of the operational decisions you made."
        ]
      },
      {
        "type": "heading",
        "text": "An optional advanced extension"
      },
      {
        "type": "paragraph",
        "text": "Use an educational robotics simulator to generate simple navigation missions."
      },
      {
        "type": "paragraph",
        "text": "Record robot movements, task outcomes and simulated incidents."
      },
      {
        "type": "paragraph",
        "text": "Integrate those results into your operations spreadsheet."
      },
      {
        "type": "paragraph",
        "text": "This can demonstrate how operational reporting connects to actual robotics software, while keeping the project accessible to beginners."
      }
    ]
  }
],
 nextSteps:{
  "id": "next-steps",
  "heading": "Where to go next",
  "paragraphs": [],
  "sourceIds": [
    "ubuntu",
    "service-guide",
    "data-guide"
  ],
  "blocks": [
    {
      "type": "resources",
      "items": [
        {
          "title": "Ubuntu: The Linux Command Line for Beginners",
          "href": "https://ubuntu.com/desktop/docs/en/latest/tutorial/the-linux-command-line-for-beginners/",
          "description": "Learn basic terminal commands and file navigation skills that can be useful when working with technical robotics systems."
        },
        {
          "title": "Field Service Engineer in Robotics",
          "href": "/career-paths/integration-operations/field-service-engineer",
          "description": "Explore how to move toward diagnosing, maintaining and repairing robotic equipment."
        },
        {
          "title": "Robotics Data Engineer",
          "href": "/career-paths/platforms-simulation/robotics-data-engineer",
          "description": "Learn about the infrastructure used to organize and process the robot recordings that support AI development."
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Start by understanding one type of robot operation and the responsibilities employers expect."
    },
    {
      "type": "paragraph",
      "text": "Then practice the skills needed for that position, whether they involve monitoring a fleet, controlling a robot or following data collection procedures."
    },
    {
      "type": "paragraph",
      "text": "Robot operations can offer direct exposure to Physical AI and provide a foundation for developing more specialized technical skills over time."
    }
  ]
},
 researchNotes:[
  "This guide draws on publicly available robotics employer advertisements and technical learning resources. Employers referenced include Figure, Physical Intelligence, Pickle Robot, Serve Robotics, Skild, Dyna, Ambi Robotics and Nuro.",
  'Employer advertisements were collected November 2, 2026. Twelve complete stored sources were reviewed November 10, with five additional boundary reviews. The original primary cohort contains 64 advertisements and mixes robot operators, flights, business operations, leads and technicians. The guide uses contextual comparisons, not current vacancy totals or skill-frequency statistics. Original source classifications remain unchanged.',
  'The compensation estimate uses eleven verified hourly observations across seven U.S. employers. One representative is retained per reviewed employer/function/pay band; repeated city/shift advertisements at the same rate do not independently contribute. Distinct Dyna, Figure and Nuro geography or function pay bands remain. Six observations use official structured hourly fields and five use explicit body text. Nuro contributes standard AM/PM rates rather than headline maxima including differentials. Skild amounts without a verified pay period are excluded.',
  'The exact median hourly midpoint is $27.50. Multiplying by 2,080 hours (40 hours × 52 weeks) gives $57,200, rounded to $57,000. This is a full-time-equivalent estimate, not an observed annual salary or representative market median. The sample includes part-time, temporary and contract-to-hire work. Annualization does not establish guaranteed hours, annual earnings, permanent employment or benefits. Shift/weekend differentials, overtime, bonuses and equity are excluded. Complete observations, source clauses, hashes and exclusions are downloadable.',
  'The guide focuses on hands-on operation, teleoperation, checks, approved intervention, reporting and handoffs. Flight specialists, business/strategy roles, lead roles and primary repair or hardware-test work are excluded from the estimate. Nuro vehicle operation is retained as a distinct hands-on operating application; it has driving requirements that do not generalize to other operators. Qualifications described are source-specific, not universal credential requirements.',
  'The mission graphic is an invented comparison. Each run attempts 100 missions; Fleet A has 85 independent completions, five assisted completions and ten unfinished missions. Fleet B has 60, 30 and ten respectively. Assisted completion is not a count of interventions. The graphic does not model duration, staffing ratios, task difficulty or assistance on unfinished missions, and cannot establish total labor productivity. Its purpose is to separate completed output from the need for help on completed tasks.',
  'The cover and shift project are conceptual illustrations. The project demonstrates recordkeeping and operational reasoning, not qualification to operate real equipment. The employer review uses the November 2 archive. The linked Ubuntu tutorial and LeRobot dataset reference were checked November 10.',
 ],
 citations:[
  source('study','Black Scarab: November employer research','/research/physical-ai-careers-2026-11-02.json','Dated aggregate and original role definitions.'),
  source('evidence','Reviewed Robot Operations evidence',evidencePath,'Twelve contextual source reviews, qualification context and original provenance.'),
  source('compensation','Robot Operations compensation derivation','/research/robot-operations-specialist-compensation-2026-11-02.json','Eleven hourly observations, annualization assumptions and exclusions.'),
  source('outcomes','Illustrative mission outcomes','/research/robot-operations-mission-outcomes-2026-11-10.json','Exact counts and assumptions for the editorial comparison.'),
  posting('ambi',0),posting('dyna-safety',1),posting('dyna-data',2),posting('dyna-nyc',3),posting('figure',4),posting('figure-site',5),posting('nuro-la',6),posting('nuro',7),posting('physical-intelligence',8),posting('pickle',9),posting('serve',10),posting('skild',11),
  source('lerobot-dataset','Hugging Face: LeRobotDataset v3.0','https://huggingface.co/docs/lerobot/lerobot-dataset-v3','Official robot-learning dataset reference describing synchronized camera video, states, actions and timestamps.'),
  source('ubuntu','Ubuntu: the Linux command line for beginners','https://ubuntu.com/desktop/docs/en/latest/tutorial/the-linux-command-line-for-beginners/','Official beginner tutorial for terminal navigation and file operations.'),
  source('service-guide','Black Scarab: Field Service Engineer','/career-paths/integration-operations/field-service-engineer','Published guide to equipment diagnosis, maintenance and repair.'),
  source('data-guide','Black Scarab: Robotics Data Engineer','/career-paths/platforms-simulation/robotics-data-engineer','Published guide to robot data pipelines and infrastructure.'),
 ],
};
