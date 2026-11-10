import type {CareerGuideContent,Citation} from '@/lib/career-paths/types';
import {researchForRole} from '@/lib/career-paths/research';
import evidence from '@/public/research/systems-safety-engineer-evidence-2026-11-10.json';
import compensation from '@/public/research/systems-safety-engineer-compensation-2026-11-02.json';
import model from '@/public/research/safety-common-cause-example-2026-11-10.json';
import decisions from '@/research/seo/2026-11-10/decisions.json';
const roleId='systems-safety-engineer';
const role=researchForRole(roleId,evidence.snapshotId);
if(!role||compensation.snapshotId!==evidence.snapshotId)throw new Error('Systems Safety research mismatch');
const seo=decisions.guides.find(item=>item.occupationId===roleId);
if(!seo)throw new Error('Missing Systems Safety SEO decision');
const salary=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(compensation.estimate);
const source=(id:string,title:string,url:string,scope:string):Citation=>({id,title,url,scope,accessedAt:'2026-11-10'});
const posting=(id:string,index:number):Citation=>{const r=evidence.records[index];return source(id,`${r.employer}: ${r.title}`,r.url,'Employer advertisement collected November 2, 2026.');};
export const systemsSafetyEngineerGuide:CareerGuideContent={
 id:roleId,occupationId:roleId,familyId:'integration-operations',slug:roleId,
 title:seo.h1,seoTitle:seo.seoTitle,description:seo.description,status:'published',publishedAt:'2026-11-10',reviewedAt:'2026-11-10',
 research:{snapshotId:evidence.snapshotId,roleId,evidencePath:'/research/systems-safety-engineer-evidence-2026-11-10.json'},
 deck:'Identify risks, develop safety requirements and help ensure robotic systems can operate safely around people and equipment.',
 introduction:["Imagine a warehouse where autonomous mobile robots transport heavy materials between workstations."],
 illustration:{src:'/career-paths/systems-safety-engineer-visor.webp',width:1672,height:941,alt:'Conceptual editorial portrait of a helmeted engineer with a robotic test environment reflected in a dark visor, rendered in graphite and silver with restrained lime accents.'},
 overview:[
 {label:'What you do',value:'Identify potential hazards, evaluate risks and develop safety requirements for robotic systems',sourceIds:['agile','boston','rhoda']},
 {label:'Core skills',value:'Hazard analysis, systems engineering, functional safety, risk assessment and safety documentation',sourceIds:['agile','apptronik','zoox']},
 {label:'Education',value:'Typically electrical, mechanical, robotics, systems engineering or a related technical discipline',sourceIds:['agile','apptronik','bedrock']},
 {label:'Compensation',value:`${salary}/year`,detail:'Black Scarab estimate',sourceIds:['compensation']},
 ],
 sections:[
  {
    "id": "day-to-day",
    "heading": "What does a systems safety engineer do?",
    "navLabel": "The work",
    "paragraphs": [],
    "sourceIds": [
      "agile",
      "applied-industrial",
      "apptronik",
      "boston",
      "rhoda",
      "niosh",
      "iso12100"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Imagine a warehouse where autonomous mobile robots transport heavy materials between workstations."
      },
      {
        "type": "paragraph",
        "text": "One robot approaches an intersection just as a worker steps into its path."
      },
      {
        "type": "paragraph",
        "text": "Under normal conditions, the robot's sensors detect the person and its control system responds appropriately."
      },
      {
        "type": "paragraph",
        "text": "But what happens if a sensor stops working? What if communication between the sensor and computer fails? Or what if the robot is carrying a load that makes it harder to stop?"
      },
      {
        "type": "paragraph",
        "text": "Systems safety engineers investigate these possibilities and help develop robotic systems that reduce the risk of harm to people, equipment and their surroundings."
      },
      {
        "type": "paragraph",
        "text": "Their work involves identifying hazards, evaluating how failures or unexpected conditions could create dangerous situations, and developing requirements that address those risks."
      },
      {
        "type": "paragraph",
        "text": "Unlike engineers focused primarily on making a robot perform a task, systems safety engineers examine what could go wrong while the robot performs that task."
      },
      {
        "type": "paragraph",
        "text": "They work across mechanical systems, electronics, software, sensors, controls and human interaction."
      },
      {
        "type": "paragraph",
        "text": "Their responsibility is not simply to make a robot stop when something fails. They help determine which conditions present risks, what safeguards are necessary and what evidence is required to support the safety of the overall system."
      },
      {
        "type": "heading",
        "text": "What is a hazard?"
      },
      {
        "type": "paragraph",
        "text": "A hazard is a potential source of harm."
      },
      {
        "type": "paragraph",
        "text": "For example, a moving robotic arm creates a potential collision or crushing hazard when a person can enter its operating area."
      },
      {
        "type": "paragraph",
        "text": "The hazard can exist even when the robot is functioning exactly as designed."
      },
      {
        "type": "paragraph",
        "text": "A risk considers the potential harm associated with a hazardous situation, including its severity and likelihood."
      },
      {
        "type": "paragraph",
        "text": "Systems safety engineers examine both."
      },
      {
        "type": "paragraph",
        "text": "Consider a robotic arm working inside a guarded industrial cell."
      },
      {
        "type": "paragraph",
        "text": "The arm's movement creates a potential hazard, but protective measures may reduce the likelihood that a person is exposed to it."
      },
      {
        "type": "paragraph",
        "text": "If the operating environment changes and workers must enter the cell more frequently, the safety assessment may need to be revisited."
      },
      {
        "type": "paragraph",
        "text": "The objective is to identify hazardous situations and implement appropriate measures to reduce the associated risks."
      },
      {
        "type": "heading",
        "text": "Three areas of systems safety engineering"
      },
      {
        "type": "table",
        "caption": "Three areas of systems safety engineering",
        "columns": [
          "Specialization",
          "What engineers work on"
        ],
        "rows": [
          [
            "System and product safety",
            "Identifying hazards, assessing risks and developing safety requirements across the robot's design and operation"
          ],
          [
            "Functional safety",
            "Developing and evaluating safety-related control functions that respond dependably to defined conditions and failures"
          ],
          [
            "Software and autonomy assurance",
            "Evaluating software behavior, sensing limitations and evidence supporting autonomous operation"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These specializations often overlap."
      },
      {
        "type": "paragraph",
        "text": "A systems safety engineer working on humanoid robots may evaluate how a robot behaves when carrying objects near people."
      },
      {
        "type": "paragraph",
        "text": "An engineer working on industrial automation might focus on safety-related control systems that prevent hazardous machine movements."
      },
      {
        "type": "paragraph",
        "text": "Someone working on autonomous vehicles may examine how perception, planning and other software capabilities contribute to the overall safety of the system."
      },
      {
        "type": "paragraph",
        "text": "The common goal is to understand how the entire machine can create hazardous situations and how those risks are addressed."
      },
      {
        "type": "heading",
        "text": "What does a typical day look like?"
      },
      {
        "type": "paragraph",
        "text": "Systems safety engineers spend much of their time reviewing designs, investigating potential failures and collaborating with other engineering teams."
      },
      {
        "type": "paragraph",
        "text": "Imagine a humanoid robotics company developing a new version of its robot."
      },
      {
        "type": "paragraph",
        "text": "The updated design can carry heavier objects than the previous model."
      },
      {
        "type": "paragraph",
        "text": "This improvement creates new engineering questions."
      },
      {
        "type": "paragraph",
        "text": "Does the additional weight affect the robot's balance? Can it stop within the required limits? What happens if it loses power while holding an object?"
      },
      {
        "type": "paragraph",
        "text": "The systems safety engineer works with mechanical, electrical, software and controls teams to understand these changes."
      },
      {
        "type": "paragraph",
        "text": "They review the existing hazard analysis and determine whether new hazards or operating conditions need to be evaluated."
      },
      {
        "type": "paragraph",
        "text": "They may also identify safety requirements that need to be updated and determine which previous test results remain applicable to the revised design."
      },
      {
        "type": "paragraph",
        "text": "Later, they might review a sensor-failure scenario, assess a proposed software change or prepare documentation connecting safety requirements with supporting test evidence."
      },
      {
        "type": "paragraph",
        "text": "A typical process involves:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Understand the system. Define what the robot does, where it operates and how people interact with it.",
          "Identify hazards. Examine situations that could cause injury or damage.",
          "Assess risks. Evaluate the potential consequences and circumstances associated with those hazards.",
          "Develop safety measures. Work with engineering teams to reduce risks through design, protective systems and other appropriate measures.",
          "Define requirements. Translate safety decisions into specific engineering requirements.",
          "Evaluate evidence. Review analyses, inspections and tests that support the safety requirements.",
          "Maintain the safety assessment. Revisit assumptions and evidence when the robot or its operating environment changes."
        ]
      },
      {
        "type": "paragraph",
        "text": "The work combines technical engineering knowledge with structured analysis and careful documentation."
      },
      {
        "type": "heading",
        "text": "When a warehouse robot loses a sensor"
      },
      {
        "type": "paragraph",
        "text": "Consider an autonomous mobile robot carrying materials through a warehouse."
      },
      {
        "type": "paragraph",
        "text": "The robot uses sensors to detect people and obstacles."
      },
      {
        "type": "paragraph",
        "text": "One of its sensors suddenly stops providing information."
      },
      {
        "type": "paragraph",
        "text": "A systems safety engineer needs to understand what happens next."
      },
      {
        "type": "paragraph",
        "text": "Does the robot recognize that information is unavailable? Can another sensor provide the necessary coverage? Is continued movement permissible under the system's defined operating conditions?"
      },
      {
        "type": "paragraph",
        "text": "The engineer also needs to consider the robot's physical behavior."
      },
      {
        "type": "paragraph",
        "text": "A heavily loaded robot may have different stopping characteristics from an unloaded one."
      },
      {
        "type": "paragraph",
        "text": "The appropriate response depends on the robot's design, operating environment and identified hazards."
      },
      {
        "type": "paragraph",
        "text": "The engineer works with other teams to define requirements for detecting the fault, responding appropriately and demonstrating that the relevant safety measures perform as intended."
      },
      {
        "type": "paragraph",
        "text": "This illustrates a central idea in systems safety engineering: a robot must be evaluated not only when its components work, but also when they fail or operate under unexpected conditions."
      }
    ]
  },
  {
    "id": "safety-vs-other-roles",
    "heading": "How is systems safety different from other robotics careers?",
    "navLabel": "Related roles",
    "paragraphs": [],
    "sourceIds": [
      "boston",
      "apptronik",
      "applied-industrial"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Many engineering disciplines contribute to robot safety."
      },
      {
        "type": "paragraph",
        "text": "The distinction is the part of the problem each profession owns."
      },
      {
        "type": "table",
        "caption": "Where the responsibilities meet",
        "columns": [
          "Career",
          "Main responsibility"
        ],
        "rows": [
          [
            "Systems Safety Engineer",
            "Identifies hazards, evaluates risks and develops the safety requirements and supporting evidence"
          ],
          [
            "Verification & Validation Engineer",
            "Designs and performs evaluations to determine whether systems meet requirements and intended needs"
          ],
          [
            "Robotics Controls Engineer",
            "Develops algorithms that regulate movement, force, speed and balance"
          ],
          [
            "Industrial Automation Engineer",
            "Programs and integrates automated equipment and industrial control systems"
          ],
          [
            "Field Service Engineer",
            "Diagnoses and repairs equipment after deployment"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "For example, imagine a robot that must respond to a hazardous situation by bringing its motion to a controlled stop."
      },
      {
        "type": "paragraph",
        "text": "The systems safety engineer helps determine the relevant hazards, response requirements and evidence needed to support the safety decision."
      },
      {
        "type": "paragraph",
        "text": "A controls engineer develops or implements the movement-control behavior."
      },
      {
        "type": "paragraph",
        "text": "A verification engineer designs tests to measure whether the system meets the specified stopping requirements."
      },
      {
        "type": "paragraph",
        "text": "A field service engineer may later investigate a hardware failure affecting a deployed robot."
      },
      {
        "type": "paragraph",
        "text": "These roles collaborate closely, particularly when the system involves several interacting technologies."
      },
      {
        "type": "heading",
        "text": "Is this the same as workplace health and safety?"
      },
      {
        "type": "paragraph",
        "text": "Not exactly."
      },
      {
        "type": "paragraph",
        "text": "Workplace health and safety professionals often focus on organizational safety programs, employee training, workplace procedures and compliance."
      },
      {
        "type": "paragraph",
        "text": "Systems safety engineers focus more directly on the technical design and assurance of products and complex engineering systems."
      },
      {
        "type": "paragraph",
        "text": "For example, a workplace safety professional might help develop procedures for employees working around robots."
      },
      {
        "type": "paragraph",
        "text": "A systems safety engineer may evaluate the robot's safety-related control architecture and the technical requirements intended to reduce hazardous movement."
      },
      {
        "type": "paragraph",
        "text": "The responsibilities can overlap, but they involve different areas of specialization."
      }
    ]
  },
  {
    "id": "skills",
    "heading": "Which skills and tools do employers look for?",
    "navLabel": "Skills",
    "paragraphs": [],
    "sourceIds": [
      "agile",
      "applied-industrial",
      "applied-trucking",
      "apptronik",
      "bedrock",
      "rhoda",
      "zoox",
      "nasa",
      "iso12100",
      "iso13849",
      "iec",
      "ul",
      "stpa"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Systems engineering and robot architecture"
      },
      {
        "type": "paragraph",
        "text": "Systems safety engineers need to understand how different parts of a robot interact."
      },
      {
        "type": "paragraph",
        "text": "A robot may contain sensors, processors, motor controllers, power systems, communication networks and mechanical components."
      },
      {
        "type": "paragraph",
        "text": "A failure in one subsystem can affect another."
      },
      {
        "type": "paragraph",
        "text": "For example, a power distribution problem might disable multiple sensors simultaneously."
      },
      {
        "type": "paragraph",
        "text": "A communication delay could prevent a control system from receiving information when it expects it."
      },
      {
        "type": "paragraph",
        "text": "Engineers must understand these dependencies rather than evaluating each component in isolation."
      },
      {
        "type": "paragraph",
        "text": "Systems engineering provides methods for organizing complex requirements, interfaces and technical relationships."
      },
      {
        "type": "paragraph",
        "text": "This knowledge helps safety engineers understand how a complete robotic system behaves."
      },
      {
        "type": "heading",
        "text": "Hazard analysis and risk assessment"
      },
      {
        "type": "paragraph",
        "text": "Hazard analysis is one of the central responsibilities of systems safety engineering."
      },
      {
        "type": "paragraph",
        "text": "Engineers examine how a system could cause harm and which conditions could lead to hazardous situations."
      },
      {
        "type": "paragraph",
        "text": "Several established methods can support this work."
      },
      {
        "type": "table",
        "caption": "Methods of safety analysis",
        "columns": [
          "Method",
          "What it helps analyze"
        ],
        "rows": [
          [
            "Hazard analysis",
            "Identifies potential sources of harm and hazardous scenarios"
          ],
          [
            "Failure Mode and Effects Analysis (FMEA)",
            "Examines how individual components or processes can fail and the effects of those failures"
          ],
          [
            "Fault Tree Analysis (FTA)",
            "Works backward from an unwanted event to identify combinations of failures that could cause it"
          ],
          [
            "Systems-Theoretic Process Analysis (STPA)",
            "Examines how inadequate control actions and system interactions can create hazardous conditions"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Each method provides a different perspective."
      },
      {
        "type": "paragraph",
        "text": "FMEA is useful for systematically examining possible component or process failures."
      },
      {
        "type": "paragraph",
        "text": "Fault tree analysis helps identify how individual failures or combinations of failures can produce a particular unwanted event."
      },
      {
        "type": "paragraph",
        "text": "STPA can help investigate hazardous interactions that do not necessarily require a component to break."
      },
      {
        "type": "paragraph",
        "text": "Engineers select methods based on the system, applicable requirements and the questions they need to answer."
      },
      {
        "type": "paragraph",
        "text": "Imagine a robot equipped with two monitoring devices. If one monitor fails, the second may remain available. But both receive electricity from the same power supply."
      },
      {
        "type": "fault-tree",
        "id": "safety-common-cause",
        "title": "Two monitors can share one point of failure",
        "model": model
      },
      {
        "type": "paragraph",
        "text": "Adding a second monitor does not eliminate the shared dependency. Systems safety engineers examine these relationships when evaluating redundancy and failure tolerance."
      },
      {
        "type": "paragraph",
        "text": "The robot's response to unavailable monitoring must be addressed through its safety requirements, architecture and supporting evidence."
      },
      {
        "type": "heading",
        "text": "Functional safety"
      },
      {
        "type": "paragraph",
        "text": "Functional safety concerns safety that depends on a system performing its required functions correctly."
      },
      {
        "type": "paragraph",
        "text": "For example, an industrial robot may use a safety-related control function to bring hazardous motion to an appropriate stop when a specified condition occurs."
      },
      {
        "type": "paragraph",
        "text": "The engineering challenge is ensuring that the function responds as required, including under relevant fault conditions."
      },
      {
        "type": "paragraph",
        "text": "Functional safety work can involve:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Fault detection.",
          "Safety-related sensors and controllers.",
          "Redundant architectures.",
          "Diagnostic coverage.",
          "Defined failure responses.",
          "Safety-related software.",
          "Testing and validation of safety functions."
        ]
      },
      {
        "type": "paragraph",
        "text": "Not every fault should necessarily produce the same response."
      },
      {
        "type": "paragraph",
        "text": "Depending on the design, the system may need to stop, enter a restricted operating mode or perform another defined action."
      },
      {
        "type": "paragraph",
        "text": "The required behavior must be determined through the applicable risk assessment and engineering requirements."
      },
      {
        "type": "heading",
        "text": "Safety requirements and traceability"
      },
      {
        "type": "paragraph",
        "text": "A broad statement such as \"The robot must be safe\" is not a useful engineering requirement on its own."
      },
      {
        "type": "paragraph",
        "text": "It does not explain what the machine must do or how its behavior should be evaluated."
      },
      {
        "type": "paragraph",
        "text": "Systems safety engineers help develop requirements that are specific and testable."
      },
      {
        "type": "paragraph",
        "text": "For example, a safety-related requirement might specify that a defined fault must be detected within a particular interval and that the system must initiate a specified response."
      },
      {
        "type": "paragraph",
        "text": "The actual response time and acceptance criteria depend on the relevant hazard analysis and system design."
      },
      {
        "type": "paragraph",
        "text": "Traceability connects hazards and risk-reduction decisions to engineering requirements and supporting evidence."
      },
      {
        "type": "paragraph",
        "text": "For example:"
      },
      {
        "type": "table",
        "caption": "From hazard to evidence",
        "columns": [
          "Element",
          "Example"
        ],
        "rows": [
          [
            "Hazard",
            "Potential collision with a person"
          ],
          [
            "Risk-reduction measure",
            "Safety-related detection and response function"
          ],
          [
            "Requirement",
            "Define how the system must respond to a specified loss of monitoring"
          ],
          [
            "Evidence",
            "Analysis and test results evaluating the implemented response"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "This structure helps teams understand why a requirement exists and which evidence supports it."
      },
      {
        "type": "paragraph",
        "text": "It also makes gaps visible."
      },
      {
        "type": "paragraph",
        "text": "If a safety-related requirement lacks supporting evidence, the engineering team may need additional analysis or testing before relying on that requirement in its safety argument."
      },
      {
        "type": "heading",
        "text": "Safety architecture and redundancy"
      },
      {
        "type": "paragraph",
        "text": "Systems safety engineers evaluate how safety-related functions are organized."
      },
      {
        "type": "paragraph",
        "text": "This includes understanding dependencies between sensors, processors, software, communication and power systems."
      },
      {
        "type": "paragraph",
        "text": "They may investigate whether a design uses appropriate redundancy, fault detection or separation between components."
      },
      {
        "type": "paragraph",
        "text": "However, redundancy alone does not guarantee safety."
      },
      {
        "type": "paragraph",
        "text": "Two components may fail for the same reason, share critical resources or depend on the same information."
      },
      {
        "type": "paragraph",
        "text": "Engineers therefore examine how failures propagate through the system and whether the architecture satisfies the defined safety requirements."
      },
      {
        "type": "heading",
        "text": "Software safety and autonomous behavior"
      },
      {
        "type": "paragraph",
        "text": "Modern robots increasingly rely on complex software and machine learning."
      },
      {
        "type": "paragraph",
        "text": "These systems introduce challenges because their behavior may depend on sensor inputs, operating conditions and decisions made by autonomy software."
      },
      {
        "type": "paragraph",
        "text": "For example, a perception system may fail to recognize an object in poor lighting."
      },
      {
        "type": "paragraph",
        "text": "A planning system may encounter a situation it was not designed to handle."
      },
      {
        "type": "paragraph",
        "text": "A software update may change how the robot responds to a particular condition."
      },
      {
        "type": "paragraph",
        "text": "Systems safety engineers work with software teams to understand these limitations and determine how they affect the overall safety assessment."
      },
      {
        "type": "paragraph",
        "text": "They may review software architecture, fault handling, interface assumptions and evaluation results."
      },
      {
        "type": "paragraph",
        "text": "The objective is to connect software behavior with the hazards and requirements of the complete machine."
      },
      {
        "type": "heading",
        "text": "Safety cases and engineering evidence"
      },
      {
        "type": "paragraph",
        "text": "A safety case is a structured argument supported by evidence explaining why a system is considered acceptably safe for a defined use."
      },
      {
        "type": "paragraph",
        "text": "It connects safety claims to the analyses, design measures and test results supporting them."
      },
      {
        "type": "paragraph",
        "text": "Imagine a company developing an autonomous robot for a warehouse."
      },
      {
        "type": "paragraph",
        "text": "The safety case might address the robot's intended operating environment, identified hazards, risk-reduction measures and supporting evaluations."
      },
      {
        "type": "paragraph",
        "text": "A well-developed safety case also identifies important assumptions and limitations."
      },
      {
        "type": "paragraph",
        "text": "For example, evidence collected for a robot carrying a particular payload may not establish the same behavior for a substantially heavier payload."
      },
      {
        "type": "paragraph",
        "text": "Likewise, a test performed in one environment may not adequately represent every other environment where the robot could operate."
      },
      {
        "type": "paragraph",
        "text": "The engineer must understand which claims the evidence supports and where further evaluation is necessary."
      },
      {
        "type": "paragraph",
        "text": "A safety case is not simply a collection of passing test reports."
      },
      {
        "type": "paragraph",
        "text": "It is a reasoned argument connecting risks, engineering decisions and evidence."
      },
      {
        "type": "heading",
        "text": "Robotics safety standards"
      },
      {
        "type": "paragraph",
        "text": "Systems safety engineers often work with technical standards that provide frameworks for safety-related engineering."
      },
      {
        "type": "paragraph",
        "text": "Several relevant examples include:"
      },
      {
        "type": "table",
        "caption": "Robotics safety standards",
        "columns": [
          "Standard",
          "General focus"
        ],
        "rows": [
          [
            "ISO 12100",
            "Machinery risk assessment and risk reduction"
          ],
          [
            "ISO 13849-1",
            "Safety-related parts of machinery control systems"
          ],
          [
            "IEC 61508",
            "Functional safety of electrical, electronic and programmable electronic safety-related systems"
          ],
          [
            "UL 4600",
            "Safety evaluation of autonomous products using a safety-case approach"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Different robotic applications may require different standards and engineering approaches."
      },
      {
        "type": "paragraph",
        "text": "An industrial robot operating inside a manufacturing cell is not necessarily subject to the same requirements as an autonomous vehicle or mobile delivery robot."
      },
      {
        "type": "paragraph",
        "text": "Engineers need to understand which standards apply to the product and how those requirements affect its design, testing and documentation."
      },
      {
        "type": "paragraph",
        "text": "Knowing the names of standards is useful, but professional competence requires understanding how to apply them to a specific system."
      },
      {
        "type": "heading",
        "text": "Programming and technical analysis"
      },
      {
        "type": "paragraph",
        "text": "Systems safety engineering is not always primarily a programming role."
      },
      {
        "type": "paragraph",
        "text": "However, programming and data analysis can be valuable."
      },
      {
        "type": "paragraph",
        "text": "Engineers may use Python, C++, MATLAB or other tools to examine system behavior, analyze test results or automate portions of their work."
      },
      {
        "type": "paragraph",
        "text": "For example, a safety engineer might write a small Python program that evaluates combinations of component failures."
      },
      {
        "type": "paragraph",
        "text": "They could also analyze logs from a simulated robot to determine whether a fault-response requirement was met."
      },
      {
        "type": "paragraph",
        "text": "The appropriate tools depend on the position."
      },
      {
        "type": "paragraph",
        "text": "Some roles emphasize software assurance, while others focus more on mechanical hazards, electrical architecture or systems engineering."
      }
    ]
  },
  {
    "id": "education",
    "heading": "What education do you need?",
    "navLabel": "Education",
    "paragraphs": [],
    "sourceIds": [
      "agile",
      "apptronik",
      "bedrock",
      "dexterity",
      "humanoid",
      "nuro",
      "zoox"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Systems safety engineers commonly come from electrical engineering, mechanical engineering, computer engineering, robotics and systems engineering."
      },
      {
        "type": "paragraph",
        "text": "Computer science can also provide a relevant foundation for software-focused safety positions."
      },
      {
        "type": "paragraph",
        "text": "The most useful preparation combines technical engineering knowledge with an understanding of risk, system behavior and structured analysis."
      },
      {
        "type": "heading",
        "text": "What employers expect"
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
            "Apptronik",
            "Substantial embedded-software and assurance experience for software systems safety"
          ],
          [
            "Humanoid",
            "Experience developing safety-critical engineering systems"
          ],
          [
            "Dexterity",
            "Functional safety engineering experience for robotic manipulation"
          ],
          [
            "Zoox",
            "Systems safety knowledge related to sensing and autonomous behavior"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These examples reflect experienced positions."
      },
      {
        "type": "paragraph",
        "text": "Many systems safety roles require engineers who can independently evaluate complex technical decisions and work across multiple disciplines."
      },
      {
        "type": "heading",
        "text": "Do you need a master's degree or PhD?"
      },
      {
        "type": "paragraph",
        "text": "Not necessarily."
      },
      {
        "type": "paragraph",
        "text": "A bachelor's degree in a relevant engineering discipline, combined with professional experience, can provide a route into systems safety engineering."
      },
      {
        "type": "paragraph",
        "text": "Graduate education can be valuable for specialized technical work involving systems engineering, reliability, autonomy or advanced safety analysis."
      },
      {
        "type": "paragraph",
        "text": "However, practical experience developing, testing or evaluating complex systems is important for many roles."
      },
      {
        "type": "heading",
        "text": "What should you study?"
      },
      {
        "type": "paragraph",
        "text": "Useful foundations include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Systems engineering and engineering architecture.",
          "Electrical, mechanical or software fundamentals.",
          "Hazard identification and risk assessment.",
          "Functional safety.",
          "Reliability and failure analysis.",
          "Requirements engineering and traceability.",
          "Verification and validation.",
          "Technical documentation and safety cases."
        ]
      },
      {
        "type": "paragraph",
        "text": "The best approach is to develop depth in one engineering discipline while learning how that discipline connects to system-level safety."
      },
      {
        "type": "paragraph",
        "text": "For example, an electrical engineer might begin by studying power-system faults and diagnostics."
      },
      {
        "type": "paragraph",
        "text": "A software engineer might focus on fault handling, system interfaces and software assurance."
      },
      {
        "type": "paragraph",
        "text": "A mechanical engineer may begin with loads, stability and physical hazards."
      },
      {
        "type": "paragraph",
        "text": "From there, each can develop broader systems safety knowledge."
      },
      {
        "type": "heading",
        "text": "Are functional safety certifications useful?"
      },
      {
        "type": "paragraph",
        "text": "Professional training and certifications can be useful for some positions, particularly those involving specific functional safety standards or industrial applications."
      },
      {
        "type": "paragraph",
        "text": "However, certifications should complement technical experience rather than replace it."
      },
      {
        "type": "paragraph",
        "text": "Employers need engineers who can apply safety principles to actual systems, evaluate evidence and explain their engineering decisions."
      }
    ]
  },
  {
    "id": "salary",
    "heading": "How much do systems safety engineers in robotics earn?",
    "navLabel": "Compensation",
    "paragraphs": [],
    "sourceIds": [
      "compensation",
      "apptronik",
      "dexterity",
      "zoox"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Systems safety engineering combines specialized technical expertise with responsibility for complex engineering decisions."
      },
      {
        "type": "paragraph",
        "text": "Compensation varies by experience, specialization, location and employer."
      },
      {
        "type": "paragraph",
        "text": "Black Scarab estimates annual compensation at $214,000 based on reviewed U.S. systems safety and functional safety engineering positions."
      },
      {
        "type": "compensation",
        "caption": "Selected U.S. salary advertisements",
        "note": "Employer advertisements collected November 2, 2026. Bonuses and equity may be additional.",
        "examples": evidence.roles[roleId].compensation
      },
      {
        "type": "heading",
        "text": "What influences compensation?"
      },
      {
        "type": "paragraph",
        "text": "Experience and responsibility. Engineers responsible for major safety programs or complex system architectures may command higher compensation."
      },
      {
        "type": "paragraph",
        "text": "Technical specialization. Expertise in functional safety, autonomous systems, software assurance and safety-related engineering can be valuable."
      },
      {
        "type": "paragraph",
        "text": "Product complexity. A machine combining sensors, software, mechanical systems and autonomous behavior presents different safety challenges from simpler equipment."
      },
      {
        "type": "paragraph",
        "text": "Location and employer. Compensation varies across geographic markets, robotics companies and established technology businesses."
      },
      {
        "type": "heading",
        "text": "Career progression"
      },
      {
        "type": "paragraph",
        "text": "Early-career engineers may begin by supporting hazard analyses, reviewing requirements and organizing safety evidence."
      },
      {
        "type": "paragraph",
        "text": "With experience, they can take responsibility for specific safety functions, subsystems or engineering programs."
      },
      {
        "type": "paragraph",
        "text": "Senior and lead engineers may define safety strategies, evaluate complex architectures and coordinate risk-reduction work across several engineering teams."
      },
      {
        "type": "paragraph",
        "text": "Related career paths include functional safety leadership, product safety, systems engineering and autonomous systems assurance."
      }
    ]
  },
  {
    "id": "employers",
    "heading": "Which companies hire systems safety engineers?",
    "navLabel": "Employers",
    "paragraphs": [],
    "sourceIds": [
      "apptronik",
      "boston",
      "dexterity",
      "bedrock",
      "applied-industrial",
      "zoox"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Systems safety engineers work across humanoid robotics, industrial automation, autonomous vehicles and heavy equipment."
      },
      {
        "type": "paragraph",
        "text": "Their responsibilities depend on the type of machine and the environment in which it operates."
      },
      {
        "type": "heading",
        "text": "Humanoid and legged robotics"
      },
      {
        "type": "paragraph",
        "text": "Apptronik and Boston Dynamics provide examples of companies developing robots that require extensive system-level safety engineering."
      },
      {
        "type": "paragraph",
        "text": "Humanoid robots combine many moving joints, sensors, power systems and software components."
      },
      {
        "type": "paragraph",
        "text": "Systems safety responsibilities can include evaluating hazards associated with physical movement, human interaction and unexpected system behavior."
      },
      {
        "type": "heading",
        "text": "Industrial robotics and manipulation"
      },
      {
        "type": "paragraph",
        "text": "Dexterity develops robotic systems used in industrial and logistics environments."
      },
      {
        "type": "paragraph",
        "text": "Functional safety engineering can involve safety-related control architecture, risk assessment and testing of robotic manipulation systems."
      },
      {
        "type": "paragraph",
        "text": "These applications often operate near workers, equipment and other machinery."
      },
      {
        "type": "heading",
        "text": "Autonomous construction equipment"
      },
      {
        "type": "paragraph",
        "text": "Bedrock Robotics develops autonomous technology for construction machinery."
      },
      {
        "type": "paragraph",
        "text": "Heavy equipment introduces significant physical hazards because of its mass, movement and working environment."
      },
      {
        "type": "paragraph",
        "text": "Systems safety engineers may evaluate hardware architectures, faults and safety-related requirements associated with autonomous operation."
      },
      {
        "type": "heading",
        "text": "Autonomous vehicles"
      },
      {
        "type": "paragraph",
        "text": "Zoox and Applied Intuition provide examples of organizations developing safety-related technology for autonomous systems."
      },
      {
        "type": "paragraph",
        "text": "Relevant work may include evaluating sensing and perception limitations, defining safety requirements and supporting assurance activities."
      },
      {
        "type": "paragraph",
        "text": "These applications involve complicated interactions between software, hardware and changing environments."
      },
      {
        "type": "heading",
        "text": "Related job titles"
      },
      {
        "type": "paragraph",
        "text": "Useful searches include Systems Safety Engineer, Functional Safety Engineer, Product Safety Engineer, Software Safety Engineer, Autonomous Systems Safety Engineer and Safety Assurance Engineer."
      },
      {
        "type": "paragraph",
        "text": "Titles overlap considerably."
      },
      {
        "type": "paragraph",
        "text": "Read the responsibilities to determine whether a position involves technical hazard analysis, safety architecture and engineering evidence."
      },
      {
        "type": "paragraph",
        "text": "A position focused primarily on general workplace safety or administrative compliance may involve a different career path."
      }
    ]
  },
  {
    "id": "transition",
    "heading": "How to transition into systems safety engineering",
    "navLabel": "Getting started",
    "paragraphs": [],
    "sourceIds": [
      "agile",
      "apptronik",
      "boston",
      "bedrock",
      "rhoda"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Systems safety engineering often builds on experience in another technical discipline."
      },
      {
        "type": "paragraph",
        "text": "The most practical route is to begin with a system you already understand, then develop the ability to analyze its hazards and safety requirements."
      },
      {
        "type": "table",
        "caption": "Build from your experience",
        "columns": [
          "Your background",
          "Skills to prioritize",
          "Suggested project"
        ],
        "rows": [
          [
            "Electrical engineering",
            "Functional safety, fault analysis and safety architecture",
            "Analyze a shared power-system failure"
          ],
          [
            "Embedded software engineering",
            "Software assurance, fault handling and safety requirements",
            "Evaluate the response to a simulated sensor fault"
          ],
          [
            "Mechanical engineering",
            "Hazard analysis, risk assessment and safety-related design",
            "Analyze potential hazards in a robotic mechanism"
          ],
          [
            "Robotics controls engineering",
            "Safety requirements, fault response and system-level risk",
            "Evaluate controlled stopping behavior in simulation"
          ],
          [
            "Verification & Validation engineering",
            "Hazard analysis, requirement adequacy and safety cases",
            "Connect a test suite to a fictional robot safety argument"
          ],
          [
            "Complete beginner",
            "Engineering fundamentals, basic systems thinking and risk analysis",
            "Develop a simple hazard assessment for a fictional robot"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "If you already work in electrical engineering"
      },
      {
        "type": "paragraph",
        "text": "Your understanding of circuits, power systems and electronic components can transfer directly."
      },
      {
        "type": "paragraph",
        "text": "Develop knowledge of functional safety and systematic failure analysis."
      },
      {
        "type": "paragraph",
        "text": "A useful project is to investigate how a shared power supply could affect multiple safety-related devices."
      },
      {
        "type": "paragraph",
        "text": "Focus on how failures propagate and how the system should respond."
      },
      {
        "type": "heading",
        "text": "If you come from embedded software"
      },
      {
        "type": "paragraph",
        "text": "Your understanding of processors, device interfaces and software behavior provides a useful foundation."
      },
      {
        "type": "paragraph",
        "text": "Develop stronger knowledge of safety requirements, hazard analysis and software assurance."
      },
      {
        "type": "paragraph",
        "text": "A project involving fault detection and system response can demonstrate how your software experience connects to safety engineering."
      },
      {
        "type": "heading",
        "text": "If you are a mechanical engineer"
      },
      {
        "type": "paragraph",
        "text": "Your knowledge of forces, movement and physical systems is valuable."
      },
      {
        "type": "paragraph",
        "text": "Focus on identifying hazardous situations and understanding how design decisions affect risk."
      },
      {
        "type": "paragraph",
        "text": "A useful project might evaluate a robotic arm's movement, operating limits and potential interaction with nearby workers."
      },
      {
        "type": "heading",
        "text": "If you work in robotics controls"
      },
      {
        "type": "paragraph",
        "text": "You may already understand how robots regulate movement, balance and force."
      },
      {
        "type": "paragraph",
        "text": "Systems safety adds a broader perspective."
      },
      {
        "type": "paragraph",
        "text": "Instead of focusing only on whether a controller performs as expected, evaluate how its behavior relates to hazards and the requirements intended to reduce them."
      },
      {
        "type": "paragraph",
        "text": "Use simulation to investigate defined fault conditions and stopping responses."
      },
      {
        "type": "heading",
        "text": "If you work in Verification & Validation"
      },
      {
        "type": "paragraph",
        "text": "Your experience developing tests and evaluating requirements is highly relevant."
      },
      {
        "type": "paragraph",
        "text": "The next step is learning how to assess whether the requirements themselves adequately address identified hazards."
      },
      {
        "type": "paragraph",
        "text": "A useful project is to build a small safety argument connecting hazards, requirements, testing and evidence."
      },
      {
        "type": "heading",
        "text": "If you are starting from scratch"
      },
      {
        "type": "paragraph",
        "text": "Begin by developing a technical foundation in engineering or software systems."
      },
      {
        "type": "paragraph",
        "text": "Learn how basic robotic components interact, including sensors, motors, controllers and power systems."
      },
      {
        "type": "paragraph",
        "text": "Then study hazard analysis, risk assessment and requirements engineering."
      },
      {
        "type": "paragraph",
        "text": "A small fictional system can provide an introduction to structured safety analysis."
      },
      {
        "type": "paragraph",
        "text": "However, independent professional judgment about safety-critical systems requires substantial technical knowledge and practical experience."
      },
      {
        "type": "heading",
        "text": "What matters in an interview?"
      },
      {
        "type": "paragraph",
        "text": "Systems safety interviews often focus on how candidates reason about complex systems and potential failures."
      },
      {
        "type": "paragraph",
        "text": "You may be asked to identify hazards associated with a robotic application, explain a fault tree or discuss how to evaluate a safety-related requirement."
      },
      {
        "type": "paragraph",
        "text": "Employers may also ask about applicable standards, system architecture and technical evidence."
      },
      {
        "type": "paragraph",
        "text": "Prepare one project where you can explain:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "The system and its intended use.",
          "Which hazards you identified.",
          "How you evaluated the risks.",
          "Which safety measures you proposed.",
          "How you translated those measures into requirements.",
          "What evidence would support the requirements.",
          "Which assumptions or unanswered questions remain."
        ]
      },
      {
        "type": "paragraph",
        "text": "A strong answer demonstrates structured engineering judgment rather than simply naming safety standards or analysis methods."
      }
    ]
  },
  {
    "id": "portfolio",
    "heading": "Build your first systems safety engineering project",
    "navLabel": "Portfolio",
    "paragraphs": [],
    "sourceIds": [
      "nasa",
      "iso12100",
      "ul",
      "rhoda"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Develop a safety case for a fictional warehouse robot"
      },
      {
        "type": "paragraph",
        "text": "A useful beginner project is to create a simplified safety analysis for a fictional autonomous mobile robot."
      },
      {
        "type": "paragraph",
        "text": "The robot transports materials through a simulated warehouse."
      },
      {
        "type": "paragraph",
        "text": "Your objective is to identify hazards, develop safety requirements and organize the evidence supporting your proposed safety measures."
      },
      {
        "type": "paragraph",
        "text": "You do not need physical robotics hardware."
      },
      {
        "type": "paragraph",
        "text": "Keep the project explicitly educational: it does not establish the safety of a real machine."
      },
      {
        "type": "heading",
        "text": "Step 1: Define the robot and its environment"
      },
      {
        "type": "paragraph",
        "text": "Describe the fictional robot's purpose."
      },
      {
        "type": "paragraph",
        "text": "For example, it transports small packages between warehouse workstations."
      },
      {
        "type": "paragraph",
        "text": "Define its operating environment, the presence of people and its basic equipment."
      },
      {
        "type": "paragraph",
        "text": "Assume the robot has:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "A drive system.",
          "Two fictional monitoring devices.",
          "An onboard computer.",
          "A shared power supply.",
          "A communication system."
        ]
      },
      {
        "type": "paragraph",
        "text": "Specify the boundaries of your analysis and the operating conditions you intend to consider."
      },
      {
        "type": "heading",
        "text": "Step 2: Identify potential hazards"
      },
      {
        "type": "paragraph",
        "text": "Create a hazard log listing several situations that could cause harm."
      },
      {
        "type": "paragraph",
        "text": "For example:"
      },
      {
        "type": "table",
        "caption": "Fictional hazard-log examples",
        "columns": [
          "Hazardous situation",
          "Potential consequence"
        ],
        "rows": [
          [
            "Robot moves into an occupied area",
            "Collision with a person"
          ],
          [
            "Robot loses stability while carrying a load",
            "Falling or shifting material"
          ],
          [
            "Monitoring becomes unavailable",
            "Loss of information needed for a defined protective function"
          ],
          [
            "Unexpected movement during servicing",
            "Injury to personnel near the machine"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These are examples for a fictional design, not a complete hazard analysis."
      },
      {
        "type": "paragraph",
        "text": "Document the assumptions and conditions associated with each scenario."
      },
      {
        "type": "heading",
        "text": "Step 3: Propose risk-reduction measures"
      },
      {
        "type": "paragraph",
        "text": "For each hazardous situation, identify possible design measures that could reduce the risk."
      },
      {
        "type": "paragraph",
        "text": "These might include physical safeguards, operating limitations, fault detection or safety-related control functions."
      },
      {
        "type": "paragraph",
        "text": "Explain what each proposed measure is intended to accomplish."
      },
      {
        "type": "paragraph",
        "text": "Avoid assuming that a single sensor, software check or stopping command automatically makes the system safe."
      },
      {
        "type": "heading",
        "text": "Step 4: Write safety requirements"
      },
      {
        "type": "paragraph",
        "text": "Translate selected risk-reduction measures into testable engineering requirements."
      },
      {
        "type": "paragraph",
        "text": "Give each requirement an identifier."
      },
      {
        "type": "paragraph",
        "text": "For example, a fictional software requirement could specify that the controller must detect loss of a monitoring signal within a defined interval and enter a specified test state."
      },
      {
        "type": "paragraph",
        "text": "Choose illustrative timing criteria for the simulation and label them as assumptions rather than real-world safety limits."
      },
      {
        "type": "paragraph",
        "text": "The requirement should identify the triggering condition, expected response and acceptance criteria."
      },
      {
        "type": "heading",
        "text": "Step 5: Analyze the shared power supply"
      },
      {
        "type": "paragraph",
        "text": "Return to the two-monitor example."
      },
      {
        "type": "paragraph",
        "text": "Both monitoring devices depend on one shared power supply."
      },
      {
        "type": "paragraph",
        "text": "Develop a simple fault tree for the event:"
      },
      {
        "type": "paragraph",
        "text": "\"Both monitors unavailable.\""
      },
      {
        "type": "paragraph",
        "text": "Include three basic failure inputs:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Shared power supply failure.",
          "Monitor A local failure.",
          "Monitor B local failure."
        ]
      },
      {
        "type": "paragraph",
        "text": "Your fault logic should represent the top event occurring when the shared supply fails or when both local monitors fail."
      },
      {
        "type": "paragraph",
        "text": "Create a small program or spreadsheet that evaluates the eight possible combinations of these three binary fault inputs."
      },
      {
        "type": "paragraph",
        "text": "Check the results against your fault-tree logic."
      },
      {
        "type": "paragraph",
        "text": "This exercise demonstrates how a shared dependency can undermine an otherwise redundant design."
      },
      {
        "type": "heading",
        "text": "Step 6: Model the response"
      },
      {
        "type": "paragraph",
        "text": "Create a simple simulation describing how the fictional robot's control software responds when monitoring is available or unavailable."
      },
      {
        "type": "paragraph",
        "text": "Define the behavior you expect for each relevant scenario."
      },
      {
        "type": "paragraph",
        "text": "Run the simulation and compare the results with the requirements you wrote."
      },
      {
        "type": "paragraph",
        "text": "Keep the scope limited to software logic and the fictional assumptions."
      },
      {
        "type": "paragraph",
        "text": "Do not interpret a successful simulation as evidence that a physical robot would stop safely."
      },
      {
        "type": "heading",
        "text": "Step 7: Build a simplified safety case"
      },
      {
        "type": "paragraph",
        "text": "Create a short document connecting your analysis."
      },
      {
        "type": "paragraph",
        "text": "Organize it around three questions:"
      },
      {
        "type": "paragraph",
        "text": "What are you claiming?"
      },
      {
        "type": "paragraph",
        "text": "For example, that the fictional system's monitoring-fault response meets the requirements defined for the simulation."
      },
      {
        "type": "paragraph",
        "text": "What supports the claim?"
      },
      {
        "type": "paragraph",
        "text": "Your requirements, fault tree, simulation results and recorded checks."
      },
      {
        "type": "paragraph",
        "text": "What remains uncertain?"
      },
      {
        "type": "paragraph",
        "text": "The absence of physical testing, unmodeled failures, sensor behavior, stopping performance and other limitations."
      },
      {
        "type": "paragraph",
        "text": "A good safety case identifies both the supporting evidence and its boundaries."
      },
      {
        "type": "heading",
        "text": "Step 8: Introduce an engineering change"
      },
      {
        "type": "paragraph",
        "text": "Modify one assumption about the fictional robot."
      },
      {
        "type": "paragraph",
        "text": "For example, increase the payload it carries or introduce a new operating mode."
      },
      {
        "type": "paragraph",
        "text": "Determine whether the change affects any hazards, requirements or previous evaluation results."
      },
      {
        "type": "paragraph",
        "text": "Document which parts of the analysis need to be revisited."
      },
      {
        "type": "paragraph",
        "text": "This demonstrates why systems safety engineering continues throughout product development rather than ending after an initial review."
      },
      {
        "type": "heading",
        "text": "What to include in your portfolio"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "A description of the fictional robot and its intended use.",
          "A hazard log.",
          "Proposed risk-reduction measures.",
          "Numbered safety requirements.",
          "A fault tree showing the shared power dependency.",
          "A spreadsheet or Python program evaluating failure combinations.",
          "Simulated test cases and results.",
          "A simplified safety case connecting claims with evidence.",
          "An example showing how a design change affects the analysis.",
          "A summary of limitations and unresolved questions."
        ]
      },
      {
        "type": "heading",
        "text": "An optional advanced extension"
      },
      {
        "type": "paragraph",
        "text": "Expand the fictional architecture to include separate power supplies for the monitoring devices."
      },
      {
        "type": "paragraph",
        "text": "Compare the original and revised fault trees."
      },
      {
        "type": "paragraph",
        "text": "Identify which shared dependencies have been reduced and which remain."
      },
      {
        "type": "paragraph",
        "text": "For example, the monitors might still rely on the same processor, communication channel or software component."
      },
      {
        "type": "paragraph",
        "text": "This illustrates an important lesson: introducing redundancy into one part of a system does not necessarily eliminate all common-cause failures."
      },
      {
        "type": "paragraph",
        "text": "The objective is to demonstrate systematic reasoning rather than claim that either fictional design is certified or safe for deployment."
      }
    ]
  }
],
 nextSteps:{
  "id": "next-steps",
  "heading": "Where to go next",
  "paragraphs": [],
  "sourceIds": [
    "iso12100",
    "nasa",
    "ul",
    "niosh"
  ],
  "blocks": [
    {
      "type": "resources",
      "items": [
        {
          "title": "ISO 12100 — Machinery Risk Assessment",
          "href": "https://www.iso.org/standard/51528.html",
          "description": "Explore the framework for identifying machinery hazards, assessing risks and developing risk-reduction measures."
        },
        {
          "title": "NASA — Fault Tree Handbook",
          "href": "https://s3vi.ndc.nasa.gov/ssri-kb/static/resources/Fault%20Tree%20Handbook_NASA.pdf",
          "description": "Learn how fault-tree analysis can represent combinations of failures and dependencies in complex engineering systems."
        },
        {
          "title": "UL 4600 — Standard for Safety Evaluation of Autonomous Products",
          "href": "https://www.ul.com/news/ul-4600-edition-3-updates-incorporate-autonomous-trucking",
          "description": "Explore the safety-case approach used to evaluate autonomous products."
        },
        {
          "title": "NIOSH — Robotics and Worker Safety",
          "href": "https://www.cdc.gov/niosh/robotics/about/",
          "description": "Explore occupational safety research concerning robotics and the interaction between automated machinery and workers."
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Begin with a small system you understand."
    },
    {
      "type": "paragraph",
      "text": "Learn how to identify its hazards, develop meaningful requirements and connect engineering decisions to supporting evidence."
    },
    {
      "type": "paragraph",
      "text": "As your experience grows, progress toward more complex robotic architectures and professionally supervised safety engineering work."
    }
  ]
},
 researchNotes:[
  "This guide draws on publicly available robotics employer advertisements, engineering standards and technical safety resources.",
  "Employer advertisements were collected November 2, 2026. Eleven full stored sources across ten employers were reviewed November 10, plus one boundary role. The original primary cohort contains 29 advertisements across 16 employers. This is a selected dated sample, not a live vacancy count or skill-frequency study.",
  "The guide covers technical system, product and functional safety for robotics, autonomous vehicles and industrial autonomy. A robot-stability role focused primarily on controls implementation is excluded despite safety reporting. The source archive and original classifications are unchanged.",
  "The $214,000 estimate is the median of six explicitly annual U.S. salary-range midpoints from five employers, rounded to the nearest $1,000. The exact median is $213,750. Two Applied Intuition requisitions cover distinct industrial and trucking applications. The sample emphasizes experienced technical roles; it is not an entry-level rate or representative market median. Bonus and equity are excluded. Structured salary fields do not consistently establish base-pay status. Complete observations, clauses and exclusions are downloadable.",
  "The fault tree is an invented qualitative availability example: supply loss OR both local monitor faults makes both monitors unavailable. Supply loss disables both; with supply available, each local fault affects only its own monitor. All eight persistent Boolean states are evaluated. No probabilities, time ordering, recovery, other faults, robot stopping behavior or complete safety-function design are represented. No PL/SIL or compliance conclusion is made.",
  "Standards are linked for their published scope. Application-specific requirements and editions must be selected for the actual product and operating context; the project is a fictional simulation, not a certification or assessment of real equipment."
],
 citations:[
  source('evidence','Systems Safety: reviewed employer evidence','/research/systems-safety-engineer-evidence-2026-11-10.json','Selected sources, qualification spans and immutable source hashes.'),
  source('compensation','Black Scarab: Systems Safety compensation','/research/systems-safety-engineer-compensation-2026-11-02.json','Six annual observations, source clause, scope and exclusions.'),
  source('fault-model','Illustrative shared-dependency model','/research/safety-common-cause-example-2026-11-10.json','Boolean model, minimal failure combinations and assumptions.'),
  posting('agile',0),
  posting('applied-industrial',1),
  posting('applied-trucking',2),
  posting('apptronik',3),
  posting('bedrock',4),
  posting('boston',5),
  posting('dexterity',6),
  posting('humanoid',7),
  posting('nuro',8),
  posting('rhoda',9),
  posting('zoox',10),
  source("iso12100","ISO 12100:2010","https://www.iso.org/standard/51528.html","Machinery risk assessment and risk reduction scope."),
  source("iso13849","ISO 13849-1:2023","https://www.iso.org/standard/73481.html","Safety-related control systems scope; does not itself select application safety functions or required performance levels."),
  source("iec","IEC 61508-1:2010","https://webstore.iec.ch/en/publication/5515","Scope of electrical, electronic and programmable electronic safety-related systems."),
  source("ul","UL 4600: safety-case approach","https://www.ul.com/news/ul-4600-edition-3-updates-incorporate-autonomous-trucking","Official explanation of autonomous-product safety cases."),
  source("niosh","NIOSH: Robotics and worker safety","https://www.cdc.gov/niosh/robotics/about/","Worker interaction and robotics hazards overview."),
  source('stpa','MIT PSAS: STPA Handbook','https://psas.scripts.mit.edu/home/books-and-handbooks/','Primary reference for control structures, unsafe control actions and system interactions.'),
  source("nasa","NASA Fault Tree Handbook with Aerospace Applications","https://s3vi.ndc.nasa.gov/ssri-kb/static/resources/Fault%20Tree%20Handbook_NASA.pdf","Chapter 4 AND/OR gate logic and Chapter 11.4 shared-cause analysis; conceptual visual is original."),
 ],
};
