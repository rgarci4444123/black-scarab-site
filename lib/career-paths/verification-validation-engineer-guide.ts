import type {CareerGuideContent,Citation} from '@/lib/career-paths/types';
import {researchForRole} from '@/lib/career-paths/research';
import evidence from '@/public/research/verification-validation-engineer-evidence-2026-11-10.json';
import compensation from '@/public/research/verification-validation-engineer-compensation-2026-11-02.json';
import model from '@/public/research/verification-validation-traceability-example-2026-11-10.json';
import decisions from '@/research/seo/2026-11-10/decisions.json';
const roleId='verification-validation-engineer';
const occupationId='verification-and-validation-engineer';
const role=researchForRole(occupationId,evidence.snapshotId);
if(!role||compensation.snapshotId!==evidence.snapshotId)throw new Error('V&V guide research mismatch');
const seo=decisions.guides.find(item=>item.occupationId===occupationId);
if(!seo)throw new Error('Missing V&V SEO decision');
const salary=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(compensation.estimate);
const evidencePath='/research/verification-validation-engineer-evidence-2026-11-10.json';
const source=(id:string,title:string,url:string,scope:string):Citation=>({id,title,url,scope,accessedAt:'2026-11-10'});
const posting=(id:string,index:number):Citation=>{const r=evidence.records[index];return source(id,`${r.employer}: ${r.title}`,r.url,'Advertisement collected November 2, 2026. Contextual source review and original provenance in the evidence export.');};
export const verificationValidationEngineerGuide:CareerGuideContent={
 id:occupationId,occupationId,familyId:'platforms-simulation',slug:occupationId,
 title:seo.h1,seoTitle:seo.seoTitle,description:seo.description,status:'published',publishedAt:'2026-11-10',reviewedAt:'2026-11-10',
 research:{snapshotId:evidence.snapshotId,roleId,evidencePath},
 deck:'Design the tests that show whether robots meet their requirements, perform reliably and work as intended in real-world environments.',
 introduction:['Imagine a robotics company developing an autonomous warehouse robot.'],
 illustration:{src:'/career-paths/verification-validation-engineer-lab.webp',width:1672,height:941,alt:'Conceptual editorial illustration viewed through a circular observation window: a white and graphite humanoid crosses uneven wet terrain under controlled rain, with restrained cyan chamber lights.'},
 overview:[
 {label:'What you do',value:'Develop tests and evaluate whether robotic systems meet performance and operational requirements',sourceIds:['fieldai','zoox','nasa-verification']},
 {label:'Core skills',value:'Python, C++, test automation, simulation, data analysis and systems troubleshooting',sourceIds:['fieldai','anduril','nimble']},
 {label:'Education',value:'Typically robotics, computer science, systems engineering or a related field',sourceIds:['applied','fieldai','nimble']},
 {label:'Compensation',value:`${salary}/year`,detail:'Black Scarab estimate',sourceIds:['compensation']},
 ],
sections:[
  {
    "id": "day-to-day",
    "heading": "What does a verification and validation engineer do?",
    "navLabel": "The work",
    "paragraphs": [],
    "sourceIds": [
      "fieldai",
      "applied",
      "zoox",
      "nasa-verification",
      "nasa-validation"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Imagine a robotics company developing an autonomous warehouse robot."
      },
      {
        "type": "paragraph",
        "text": "During a demonstration, the robot successfully navigates a warehouse, avoids obstacles and delivers a package to its destination."
      },
      {
        "type": "paragraph",
        "text": "Everything appears to work perfectly."
      },
      {
        "type": "paragraph",
        "text": "But what happens when a sensor stops reporting information? What if a software update introduces an unexpected error? Or what if the robot encounters an obstacle that wasn't present during earlier testing?"
      },
      {
        "type": "paragraph",
        "text": "A successful demonstration doesn't necessarily mean the robot will perform reliably under every condition it is expected to handle."
      },
      {
        "type": "paragraph",
        "text": "Verification and Validation (V&V) engineers develop the tests and evaluation processes that determine whether robotic systems meet their requirements and perform as intended."
      },
      {
        "type": "paragraph",
        "text": "Their work involves designing test scenarios, writing automated tests, analyzing robot behavior and investigating failures."
      },
      {
        "type": "paragraph",
        "text": "They help engineering teams understand not only whether a robot works, but under which conditions it works, what happens when something fails and whether there is sufficient evidence to support its intended use."
      },
      {
        "type": "paragraph",
        "text": "The profession combines software engineering, robotics, testing and systems analysis."
      },
      {
        "type": "heading",
        "text": "What's the difference between verification and validation?"
      },
      {
        "type": "paragraph",
        "text": "Although the terms are often used together, they answer different questions."
      },
      {
        "type": "table",
        "caption": "Verification and validation",
        "columns": [
          "Discipline",
          "Main question"
        ],
        "rows": [
          [
            "Verification",
            "Does the system meet its specified requirements?"
          ],
          [
            "Validation",
            "Does the system meet the needs of its intended users in its intended environment?"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Consider a warehouse robot designed to transport materials between workstations."
      },
      {
        "type": "paragraph",
        "text": "A verification test might check whether the robot's software detects when a sensor measurement is too old and responds according to a defined requirement."
      },
      {
        "type": "paragraph",
        "text": "A validation activity might evaluate whether the complete robot can reliably perform useful deliveries in a realistic warehouse environment."
      },
      {
        "type": "paragraph",
        "text": "A robot could pass a collection of software tests and still struggle with the actual job it was designed to perform."
      },
      {
        "type": "paragraph",
        "text": "Verification and validation help teams evaluate both."
      },
      {
        "type": "heading",
        "text": "Three areas of robotics V&V engineering"
      },
      {
        "type": "table",
        "caption": "Areas of robotics V&V",
        "columns": [
          "Specialization",
          "What engineers work on"
        ],
        "rows": [
          [
            "System and behavior testing",
            "Evaluating robot navigation, manipulation, autonomy and other system capabilities"
          ],
          [
            "Test automation and simulation",
            "Developing repeatable tests using simulation, software tools and physical hardware"
          ],
          [
            "Requirements and release evaluation",
            "Connecting requirements to test results and determining what the evidence supports"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These areas frequently overlap."
      },
      {
        "type": "paragraph",
        "text": "An engineer might develop automated tests for autonomous navigation, investigate why a robot failed a scenario and prepare evidence for an upcoming software release."
      },
      {
        "type": "paragraph",
        "text": "Others specialize in hardware-software integration, simulation-based evaluation or testing complete robots in operational environments."
      },
      {
        "type": "heading",
        "text": "What does a typical day look like?"
      },
      {
        "type": "paragraph",
        "text": "Verification and validation engineers spend much of their time designing experiments, analyzing results and investigating unexpected behavior."
      },
      {
        "type": "paragraph",
        "text": "An engineer might begin the morning reviewing automated tests that ran overnight."
      },
      {
        "type": "paragraph",
        "text": "Most tests passed, but one navigation scenario failed after a simulated sensor message arrived later than expected."
      },
      {
        "type": "paragraph",
        "text": "The engineer examines the test configuration, software version and diagnostic logs."
      },
      {
        "type": "paragraph",
        "text": "They attempt to reproduce the failure and determine whether the problem came from the robot's software, an incorrect test setup or an unclear requirement."
      },
      {
        "type": "paragraph",
        "text": "After identifying the cause, they work with the relevant engineering team to correct the issue."
      },
      {
        "type": "paragraph",
        "text": "Once a fix is available, they repeat the original test and run additional checks to ensure that the change hasn't introduced new problems."
      },
      {
        "type": "paragraph",
        "text": "A typical development cycle involves:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Understand the requirements. Determine what the robot is expected to do and under which conditions.",
          "Design tests. Create scenarios and measurable criteria for evaluating the behavior.",
          "Prepare the environment. Configure simulations, testing equipment or physical robots.",
          "Execute and collect evidence. Run the tests and record observations, measurements and system configurations.",
          "Investigate failures. Determine why results differ from expectations.",
          "Evaluate changes. Repeat tests after corrections and check for new problems.",
          "Report results. Explain what was tested, which requirements were evaluated and what remains unresolved."
        ]
      },
      {
        "type": "paragraph",
        "text": "The most valuable output is not simply a report showing that tests passed."
      },
      {
        "type": "paragraph",
        "text": "It is a clear explanation of what was tested, what the results demonstrate and which questions remain unanswered."
      },
      {
        "type": "heading",
        "text": "When a robot receives outdated sensor information"
      },
      {
        "type": "paragraph",
        "text": "Consider an autonomous warehouse robot navigating around obstacles."
      },
      {
        "type": "paragraph",
        "text": "Its sensors continually provide information about the surrounding environment."
      },
      {
        "type": "paragraph",
        "text": "Normally, the robot receives fresh measurements and uses them to make navigation decisions."
      },
      {
        "type": "paragraph",
        "text": "But imagine that a communication delay prevents a sensor update from arriving on time."
      },
      {
        "type": "paragraph",
        "text": "The robot could receive information describing where an obstacle was moments earlier rather than where it is now."
      },
      {
        "type": "paragraph",
        "text": "A V&V engineer needs to determine whether the robot responds according to its requirements when this happens."
      },
      {
        "type": "paragraph",
        "text": "They might create a test that deliberately delays sensor messages, then examine how the software handles them."
      },
      {
        "type": "paragraph",
        "text": "The test could evaluate whether the system identifies the outdated information, rejects it and reports the appropriate status."
      },
      {
        "type": "paragraph",
        "text": "If the software continues treating stale information as current, the engineer documents the failure and works with the development team to investigate it."
      },
      {
        "type": "paragraph",
        "text": "After a correction, the same scenario is tested again."
      },
      {
        "type": "paragraph",
        "text": "This illustrates an important part of the profession: testing how robots behave when conditions are imperfect, not only when everything works normally."
      }
    ]
  },
  {
    "id": "vv-vs-related-roles",
    "heading": "How is V&V different from other robotics careers?",
    "navLabel": "Related careers",
    "paragraphs": [],
    "sourceIds": [
      "fieldai",
      "rhoda",
      "gatik-sil",
      "zoox"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Most engineers test the systems they develop."
      },
      {
        "type": "paragraph",
        "text": "What distinguishes verification and validation engineering is that evaluating requirements, investigating behavior and producing reliable evidence are central responsibilities."
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
            "Verification & Validation Engineer",
            "Evaluates whether a robotic system meets defined requirements and intended operational needs"
          ],
          [
            "Hardware Test Engineer",
            "Develops tests for the performance, durability and reliability of physical components"
          ],
          [
            "Robotics Simulation Engineer",
            "Builds simulated environments and models used to develop and test robots"
          ],
          [
            "Robotics Integration Engineer",
            "Connects hardware and software components into a working robotic application"
          ],
          [
            "Systems Safety Engineer",
            "Identifies hazards, evaluates risks and develops safety requirements and supporting evidence"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "For example, imagine a robotics company developing a new autonomous mobile robot."
      },
      {
        "type": "paragraph",
        "text": "A hardware test engineer might measure how accurately one of its sensors operates."
      },
      {
        "type": "paragraph",
        "text": "A simulation engineer develops a virtual environment that reproduces relevant sensor behavior."
      },
      {
        "type": "paragraph",
        "text": "A V&V engineer designs tests to evaluate whether the complete robot responds correctly when sensor information is delayed or becomes unreliable."
      },
      {
        "type": "paragraph",
        "text": "A systems safety engineer evaluates hazards and safety-related requirements associated with the intended operation."
      },
      {
        "type": "paragraph",
        "text": "These responsibilities often overlap, particularly at smaller companies."
      },
      {
        "type": "heading",
        "text": "Is V&V the same as software quality assurance?"
      },
      {
        "type": "paragraph",
        "text": "Software quality assurance, or QA, shares many skills with robotics V&V."
      },
      {
        "type": "paragraph",
        "text": "Both involve test automation, identifying defects and verifying that software behaves according to expectations."
      },
      {
        "type": "paragraph",
        "text": "However, robotics introduces additional challenges because software interacts with physical machines."
      },
      {
        "type": "paragraph",
        "text": "A web application might be tested to confirm that a button produces the expected result."
      },
      {
        "type": "paragraph",
        "text": "A robotics system may need to be evaluated for how its software responds to sensor measurements, moving equipment, physical obstacles and communication delays."
      },
      {
        "type": "paragraph",
        "text": "Robot-level testing may require simulation, specialized equipment or physical experiments."
      },
      {
        "type": "paragraph",
        "text": "Software QA experience is therefore a useful foundation, but robotics V&V requires additional understanding of physical systems and how they behave."
      }
    ]
  },
  {
    "id": "skills",
    "heading": "Which skills and tools do employers look for?",
    "navLabel": "Skills & tools",
    "paragraphs": [],
    "sourceIds": [
      "fieldai",
      "applied",
      "anduril",
      "nimble",
      "rhoda",
      "gatik-hil",
      "gatik-sil",
      "zoox-test",
      "nasa-verification",
      "pytest"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Requirements and test design"
      },
      {
        "type": "paragraph",
        "text": "One of the most important V&V skills is turning broad expectations into measurable requirements."
      },
      {
        "type": "paragraph",
        "text": "Consider the statement:"
      },
      {
        "type": "paragraph",
        "text": "\"The robot should handle communication failures.\""
      },
      {
        "type": "paragraph",
        "text": "That sounds reasonable, but it is difficult to test without additional detail."
      },
      {
        "type": "paragraph",
        "text": "An engineer needs to define which communication failure is being considered, how it will be introduced and what response is expected."
      },
      {
        "type": "paragraph",
        "text": "For example, a software requirement might specify that the system must detect sensor information older than a defined threshold and stop using that information as current."
      },
      {
        "type": "paragraph",
        "text": "A test can then provide sensor measurements just below and above the threshold and verify the software's response."
      },
      {
        "type": "paragraph",
        "text": "Good requirements and tests describe observable behavior."
      },
      {
        "type": "paragraph",
        "text": "Engineers must also distinguish between what the available evidence establishes and what it does not."
      },
      {
        "type": "paragraph",
        "text": "For example, a log showing that software sent a stop command does not, by itself, prove how far a physical robot traveled before stopping."
      },
      {
        "type": "heading",
        "text": "Python and test automation"
      },
      {
        "type": "paragraph",
        "text": "Python is widely used in robotics testing because it supports automation, data analysis and interaction with software systems."
      },
      {
        "type": "paragraph",
        "text": "V&V engineers may write programs that:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Launch test scenarios automatically.",
          "Generate different input conditions.",
          "Collect diagnostic logs and measurements.",
          "Compare actual behavior with expected results.",
          "Produce reports identifying failures.",
          "Repeat tests after software changes."
        ]
      },
      {
        "type": "paragraph",
        "text": "pytest is one example of a Python testing framework that helps engineers organize and automate repeatable tests."
      },
      {
        "type": "paragraph",
        "text": "C++ is also valuable, particularly when working with production robotics software or testing performance-sensitive interfaces."
      },
      {
        "type": "paragraph",
        "text": "Engineers should understand software fundamentals such as debugging, version control, Linux and automated testing."
      },
      {
        "type": "heading",
        "text": "Requirements traceability"
      },
      {
        "type": "paragraph",
        "text": "An important concept in verification and validation is traceability."
      },
      {
        "type": "paragraph",
        "text": "Traceability connects a requirement to the test or evaluation method used to assess it and the evidence produced."
      },
      {
        "type": "paragraph",
        "text": "This helps engineering teams understand which requirements have been evaluated and which remain untested."
      },
      {
        "type": "paragraph",
        "text": "Imagine a robotics company defines three requirements for a navigation system:"
      },
      {
        "type": "paragraph",
        "text": "The V&V team develops three tests."
      },
      {
        "type": "paragraph",
        "text": "Two evaluate different conditions involving stop commands, while the third checks how the robot handles a blocked destination."
      },
      {
        "type": "paragraph",
        "text": "All three tests pass."
      },
      {
        "type": "requirements-matrix",
        "id": "vv-requirements-evidence",
        "title": "Why passing every test isn't enough",
        "model": model
      },
      {
        "type": "paragraph",
        "text": "Even though the test pass rate is 100%, no test evaluates whether the robot rejects stale sensor information."
      },
      {
        "type": "paragraph",
        "text": "The missing test is important because the original requirement remains unverified."
      },
      {
        "type": "paragraph",
        "text": "A traceability matrix helps make these gaps visible."
      },
      {
        "type": "paragraph",
        "text": "The next step is to create an appropriate evaluation for R3."
      },
      {
        "type": "paragraph",
        "text": "This demonstrates a central lesson in V&V: a high test pass rate does not necessarily mean that all requirements have been evaluated."
      },
      {
        "type": "paragraph",
        "text": "Even when a test is mapped to a requirement, engineers must still confirm that the test conditions and acceptance criteria actually address it."
      },
      {
        "type": "heading",
        "text": "Software-in-the-loop and hardware-in-the-loop testing"
      },
      {
        "type": "paragraph",
        "text": "Robotics companies use different testing environments depending on what they need to evaluate."
      },
      {
        "type": "paragraph",
        "text": "Two important approaches are Software-in-the-Loop (SIL) and Hardware-in-the-Loop (HIL)."
      },
      {
        "type": "table",
        "caption": "Robotics testing environments",
        "columns": [
          "Testing method",
          "How it works"
        ],
        "rows": [
          [
            "Software-in-the-Loop (SIL)",
            "Evaluates software using simulated inputs, systems or environments"
          ],
          [
            "Hardware-in-the-Loop (HIL)",
            "Connects real hardware to simulated signals or systems"
          ],
          [
            "Physical robot testing",
            "Evaluates robot behavior using actual equipment and relevant environments"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "For example, a software-in-the-loop test could simulate a mobile robot navigating around obstacles."
      },
      {
        "type": "paragraph",
        "text": "A hardware-in-the-loop test might use a real robot controller connected to simulated sensor inputs."
      },
      {
        "type": "paragraph",
        "text": "Physical robot testing evaluates behavior involving real sensors, actuators and environmental conditions."
      },
      {
        "type": "paragraph",
        "text": "Each method has advantages."
      },
      {
        "type": "paragraph",
        "text": "Simulation allows engineers to repeat scenarios and introduce unusual failures in controlled conditions."
      },
      {
        "type": "paragraph",
        "text": "Hardware-in-the-loop testing can reveal problems involving actual processors, communication interfaces and timing."
      },
      {
        "type": "paragraph",
        "text": "Physical testing can identify behavior that simplified models or simulations do not accurately reproduce."
      },
      {
        "type": "paragraph",
        "text": "Companies such as Gatik advertise dedicated SIL and HIL verification positions."
      },
      {
        "type": "heading",
        "text": "Simulation and scenario testing"
      },
      {
        "type": "paragraph",
        "text": "A robot cannot be evaluated only under ideal conditions."
      },
      {
        "type": "paragraph",
        "text": "V&V engineers design scenarios that explore how systems behave when operating conditions change."
      },
      {
        "type": "paragraph",
        "text": "For an autonomous mobile robot, these might include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "An obstacle appearing along the planned route.",
          "A destination becoming unreachable.",
          "A delayed sensor measurement.",
          "A temporary communication interruption.",
          "A change in the robot's starting position.",
          "A software component failing to produce an expected response."
        ]
      },
      {
        "type": "paragraph",
        "text": "Simulation makes it possible to repeat many scenarios without requiring a physical robot for every test."
      },
      {
        "type": "paragraph",
        "text": "However, engineers need to understand the limitations of the simulation."
      },
      {
        "type": "paragraph",
        "text": "A successful simulated result does not automatically prove that the physical robot will behave identically."
      },
      {
        "type": "heading",
        "text": "Data analysis and experimental design"
      },
      {
        "type": "paragraph",
        "text": "V&V engineers use data to evaluate how systems perform."
      },
      {
        "type": "paragraph",
        "text": "They may analyze timestamps, sensor measurements, software logs, test outcomes and other diagnostic information."
      },
      {
        "type": "paragraph",
        "text": "Python and SQL can be useful for processing larger collections of results."
      },
      {
        "type": "paragraph",
        "text": "Important measures include:"
      },
      {
        "type": "table",
        "caption": "Evaluation metrics",
        "columns": [
          "Metric",
          "What it measures"
        ],
        "rows": [
          [
            "Test pass rate",
            "Percentage of executed tests that passed"
          ],
          [
            "Requirements coverage",
            "Share of requirements connected to an appropriate evaluation"
          ],
          [
            "Mission success rate",
            "Percentage of attempted missions completed according to defined criteria"
          ],
          [
            "Failure frequency",
            "How often a particular problem occurs within a defined population"
          ],
          [
            "Response time",
            "How long a system takes to produce a specified response"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These metrics answer different questions."
      },
      {
        "type": "paragraph",
        "text": "For example, a robot may complete most delivery missions while consistently failing an important test involving an uncommon communication condition."
      },
      {
        "type": "paragraph",
        "text": "Engineers must evaluate the results in the context of the system's intended use and requirements."
      },
      {
        "type": "heading",
        "text": "Failure investigation and debugging"
      },
      {
        "type": "paragraph",
        "text": "When a test fails, the next task is understanding why."
      },
      {
        "type": "paragraph",
        "text": "A failure might be caused by the robot's software, the hardware, the test environment or the way the test was written."
      },
      {
        "type": "paragraph",
        "text": "Engineers investigate the available evidence rather than assuming that every failed test indicates a product defect."
      },
      {
        "type": "paragraph",
        "text": "A useful defect report includes:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "The expected behavior.",
          "The actual behavior.",
          "The software and system configuration.",
          "Steps needed to reproduce the problem.",
          "Relevant logs and measurements.",
          "The conditions under which the failure occurred."
        ]
      },
      {
        "type": "paragraph",
        "text": "Once the development team makes a correction, the V&V engineer repeats the relevant test."
      },
      {
        "type": "paragraph",
        "text": "They may also run regression tests, which check whether previously working behavior continues to function after a change."
      },
      {
        "type": "heading",
        "text": "Technical communication"
      },
      {
        "type": "paragraph",
        "text": "V&V engineers frequently work across software, hardware, systems and product teams."
      },
      {
        "type": "paragraph",
        "text": "They must explain failures clearly, communicate evaluation results and distinguish confirmed findings from unresolved questions."
      },
      {
        "type": "paragraph",
        "text": "For example, an engineer might need to explain that a new software version passed every executed navigation test but still lacks evidence for certain operating conditions."
      },
      {
        "type": "paragraph",
        "text": "This type of communication helps teams make informed decisions about what additional testing is required."
      }
    ]
  },
  {
    "id": "education",
    "heading": "What education do you need?",
    "navLabel": "Education",
    "paragraphs": [],
    "sourceIds": [
      "applied",
      "applied-marine",
      "fieldai",
      "nimble",
      "rhoda",
      "zoox"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Verification and validation engineers commonly come from robotics, computer science, systems engineering, electrical engineering and mechanical engineering."
      },
      {
        "type": "paragraph",
        "text": "The appropriate background depends on the systems being evaluated."
      },
      {
        "type": "paragraph",
        "text": "Software-heavy V&V positions may emphasize programming, automation and simulation."
      },
      {
        "type": "paragraph",
        "text": "Hardware-oriented positions may require stronger knowledge of electronics, instrumentation and physical testing."
      },
      {
        "type": "paragraph",
        "text": "Systems-level roles often combine requirements analysis, engineering knowledge and experimental design."
      },
      {
        "type": "heading",
        "text": "What employers expect"
      },
      {
        "type": "table",
        "caption": "Qualifications in reviewed employer advertisements",
        "columns": [
          "Employer",
          "Representative qualifications"
        ],
        "rows": [
          [
            "Applied Intuition",
            "Relevant bachelor's or master's degree and autonomy experience"
          ],
          [
            "FieldAI",
            "Related technical degree or equivalent practical experience"
          ],
          [
            "Nimble Robotics",
            "Relevant bachelor's or master's degree, programming and robotics or test automation experience"
          ],
          [
            "Rhoda AI",
            "Relevant engineering or testing experience, Python/C++ and multidisciplinary debugging"
          ],
          [
            "Zoox",
            "Related engineering degree and systems-engineering experience"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These examples cover different types of robotics verification and validation positions."
      },
      {
        "type": "paragraph",
        "text": "Some employers accept equivalent professional experience, while others require formal engineering qualifications."
      },
      {
        "type": "heading",
        "text": "Do you need a master's degree?"
      },
      {
        "type": "paragraph",
        "text": "Not necessarily."
      },
      {
        "type": "paragraph",
        "text": "A bachelor's degree in a relevant technical field can provide the foundation for many V&V positions."
      },
      {
        "type": "paragraph",
        "text": "Graduate education may be useful for specialized roles involving advanced autonomy systems, systems engineering or complex experimental methods."
      },
      {
        "type": "paragraph",
        "text": "However, employers also value practical experience in automated testing, software development, simulation and investigating technical failures."
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
          "Python and C++ programming.",
          "Software testing and automation.",
          "Probability, statistics and experimental design.",
          "Robotics sensing, planning and controls.",
          "Systems engineering and requirements management.",
          "Simulation and diagnostic data analysis.",
          "Technical writing and troubleshooting."
        ]
      },
      {
        "type": "paragraph",
        "text": "You do not need to become an expert in every robotics subsystem."
      },
      {
        "type": "paragraph",
        "text": "However, understanding how the major components interact helps you design meaningful tests and collaborate with specialized engineering teams."
      },
      {
        "type": "heading",
        "text": "Can you enter without an engineering degree?"
      },
      {
        "type": "paragraph",
        "text": "Some V&V positions consider candidates with equivalent technical experience."
      },
      {
        "type": "paragraph",
        "text": "Software testers, QA engineers and technical professionals with strong automation skills may have relevant foundations."
      },
      {
        "type": "paragraph",
        "text": "However, moving into robotics V&V requires additional knowledge of sensors, physical systems, robotics software and testing environments."
      },
      {
        "type": "paragraph",
        "text": "Someone starting without a technical background should begin with Python, basic software testing and introductory robotics concepts."
      },
      {
        "type": "paragraph",
        "text": "A small simulation-based testing project can provide a practical starting point."
      }
    ]
  },
  {
    "id": "salary",
    "heading": "How much do robotics V&V engineers earn?",
    "navLabel": "Compensation",
    "paragraphs": [],
    "sourceIds": [
      "compensation",
      "applied",
      "skydio",
      "zoox"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Verification and validation compensation depends on technical specialization, experience, location and the complexity of the systems being evaluated."
      },
      {
        "type": "paragraph",
        "text": "Black Scarab estimates annual compensation at $175,000 based on reviewed U.S. robotics and autonomous-systems positions."
      },
      {
        "type": "compensation",
        "caption": "Selected U.S. salary advertisements",
        "note": "Annual advertised salary · November 2026",
        "examples": evidence.roles[roleId].compensation
      },
      {
        "type": "heading",
        "text": "What influences compensation?"
      },
      {
        "type": "paragraph",
        "text": "Experience and technical responsibility. Compare whether a position owns individual tests, complete system evaluations or a larger validation campaign."
      },
      {
        "type": "paragraph",
        "text": "Specialization. Expertise in autonomous systems, simulation, HIL testing and requirements-based verification can be valuable for specialized positions."
      },
      {
        "type": "paragraph",
        "text": "Production and field experience. Employers value engineers who have evaluated real systems and investigated failures outside controlled development environments."
      },
      {
        "type": "paragraph",
        "text": "Location and employer. Compensation varies across geographic markets, robotics startups and larger technology companies."
      },
      {
        "type": "heading",
        "text": "Career progression"
      },
      {
        "type": "paragraph",
        "text": "Early-career engineers may begin by developing automated tests, analyzing results and investigating individual defects."
      },
      {
        "type": "paragraph",
        "text": "With experience, they can take ownership of larger validation campaigns, testing infrastructure or system-level evaluation programs."
      },
      {
        "type": "paragraph",
        "text": "Senior and staff engineers may define verification strategies, coordinate testing across multiple teams and establish the evidence needed to support major product capabilities."
      },
      {
        "type": "paragraph",
        "text": "Related career paths include systems engineering, autonomy evaluation, test architecture and reliability engineering."
      }
    ]
  },
  {
    "id": "employers",
    "heading": "Which companies hire robotics V&V engineers?",
    "navLabel": "Employers",
    "paragraphs": [],
    "sourceIds": [
      "fieldai",
      "rhoda",
      "nimble",
      "applied",
      "applied-marine",
      "zoox",
      "skydio",
      "anduril",
      "gatik-sil",
      "gatik-hil"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Verification and validation roles appear across robotics companies developing autonomous vehicles, humanoids, drones, warehouse systems and other intelligent machines."
      },
      {
        "type": "heading",
        "text": "Robotics platforms and warehouse systems"
      },
      {
        "type": "paragraph",
        "text": "FieldAI, Rhoda AI and Nimble Robotics provide examples of companies developing robotics systems that require extensive testing and evaluation."
      },
      {
        "type": "paragraph",
        "text": "V&V work can involve automated regression testing, robot-level experiments, simulated failures and investigating interactions between software and hardware."
      },
      {
        "type": "paragraph",
        "text": "These applications often require engineers to understand complete robotic systems rather than individual software components."
      },
      {
        "type": "heading",
        "text": "Autonomous vehicles"
      },
      {
        "type": "paragraph",
        "text": "Zoox and Gatik develop autonomous vehicle technology that requires extensive evaluation of planning, perception and overall system behavior."
      },
      {
        "type": "paragraph",
        "text": "V&V engineers may develop simulated driving scenarios, test software responses to faults and evaluate whether autonomy systems meet defined requirements."
      },
      {
        "type": "paragraph",
        "text": "These positions can involve large collections of automated tests as well as testing integrated systems."
      },
      {
        "type": "heading",
        "text": "Autonomous maritime systems"
      },
      {
        "type": "paragraph",
        "text": "Applied Intuition has advertised verification and validation work involving autonomous systems, including maritime applications."
      },
      {
        "type": "paragraph",
        "text": "These roles can combine software-based evaluation with testing physical equipment in operational environments."
      },
      {
        "type": "paragraph",
        "text": "Some positions involve significant travel or field testing."
      },
      {
        "type": "heading",
        "text": "Drones and autonomous flight"
      },
      {
        "type": "paragraph",
        "text": "Skydio and Anduril provide examples of organizations developing autonomous systems that require software, hardware and system-level testing."
      },
      {
        "type": "paragraph",
        "text": "V&V responsibilities may include flight telemetry analysis, simulation, hardware-in-the-loop environments and investigating failures across several subsystems."
      },
      {
        "type": "paragraph",
        "text": "Testing physical autonomous systems can require coordination between software engineers, hardware engineers, operators and specialized test teams."
      },
      {
        "type": "heading",
        "text": "Related job titles"
      },
      {
        "type": "paragraph",
        "text": "Useful searches include Verification and Validation Engineer, Robotics Validation Engineer, Autonomy Verification Engineer, Systems Test Engineer, Robotics Software Engineer in Test, and Systems Integration and Test Engineer."
      },
      {
        "type": "paragraph",
        "text": "Some employers use titles such as Test Automation Engineer or Autonomy Evaluation Engineer for overlapping work."
      },
      {
        "type": "paragraph",
        "text": "Read the responsibilities carefully."
      },
      {
        "type": "paragraph",
        "text": "A position focused on testing a website or a single electronic component may differ substantially from a role responsible for evaluating the behavior of an entire robot."
      }
    ]
  },
  {
    "id": "transition",
    "heading": "How to transition into robotics V&V engineering",
    "navLabel": "Your starting point",
    "paragraphs": [],
    "sourceIds": [
      "fieldai",
      "applied-marine",
      "nimble",
      "rhoda",
      "anduril"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Several technical backgrounds provide useful entry points into the profession."
      },
      {
        "type": "table",
        "caption": "Routes into robotics V&V",
        "columns": [
          "Your background",
          "Skills to prioritize",
          "Suggested project"
        ],
        "rows": [
          [
            "Software testing or QA",
            "Robotics fundamentals, simulation and physical-system behavior",
            "Build an automated test suite for a simulated robot"
          ],
          [
            "Robotics or embedded software",
            "Requirements, test design and evaluation methods",
            "Create requirements-based tests for an existing subsystem"
          ],
          [
            "Mechanical or electrical engineering",
            "Python, test automation and diagnostic data analysis",
            "Automate experiments and evaluate sensor or system behavior"
          ],
          [
            "Data science or machine learning",
            "Robotics systems, scenario design and requirements testing",
            "Analyze robot test results and investigate failures"
          ],
          [
            "Complete beginner",
            "Python, software testing and introductory robotics",
            "Test a simple simulated mobile robot"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "If you already work in software testing or QA"
      },
      {
        "type": "paragraph",
        "text": "Your experience with automated testing, defect reports and regression testing can transfer directly."
      },
      {
        "type": "paragraph",
        "text": "Focus on understanding how robotics software interacts with physical systems."
      },
      {
        "type": "paragraph",
        "text": "Learn basic robotics concepts, simulation tools and the importance of sensor timing and hardware interfaces."
      },
      {
        "type": "paragraph",
        "text": "A useful project is to create automated tests for a simulated robot performing navigation tasks."
      },
      {
        "type": "heading",
        "text": "If you come from robotics or embedded software"
      },
      {
        "type": "paragraph",
        "text": "Your knowledge of robotics systems provides a strong foundation."
      },
      {
        "type": "paragraph",
        "text": "Develop deeper skills in test planning, requirements analysis and evaluation methods."
      },
      {
        "type": "paragraph",
        "text": "Practice translating broad engineering requirements into measurable acceptance criteria."
      },
      {
        "type": "paragraph",
        "text": "Demonstrate that you can design tests that reveal problems rather than simply confirm expected operation."
      },
      {
        "type": "heading",
        "text": "If you are a mechanical or electrical engineer"
      },
      {
        "type": "paragraph",
        "text": "Your experience with physical systems, measurements and engineering analysis is valuable."
      },
      {
        "type": "paragraph",
        "text": "Focus on Python, software automation and working with diagnostic logs."
      },
      {
        "type": "paragraph",
        "text": "A project involving repeated sensor measurements, automated test execution or system-level fault investigation can demonstrate relevant skills."
      },
      {
        "type": "heading",
        "text": "If you come from data science or machine learning"
      },
      {
        "type": "paragraph",
        "text": "Your experience with statistics, datasets and evaluating model performance can transfer into robotics V&V."
      },
      {
        "type": "paragraph",
        "text": "Learn more about robotics architecture, system requirements and the behavior of physical machines."
      },
      {
        "type": "paragraph",
        "text": "Develop projects that connect measured outcomes to explicit acceptance criteria rather than relying only on aggregate performance metrics."
      },
      {
        "type": "heading",
        "text": "If you are starting from scratch"
      },
      {
        "type": "paragraph",
        "text": "Begin with Python and the fundamentals of software testing."
      },
      {
        "type": "paragraph",
        "text": "Learn how to define an expected result, run a repeatable test and investigate when the actual result differs."
      },
      {
        "type": "paragraph",
        "text": "Then study basic robotics concepts such as sensors, navigation and robot control."
      },
      {
        "type": "paragraph",
        "text": "A small simulation-based project can help you develop practical experience before moving into more advanced systems."
      },
      {
        "type": "heading",
        "text": "What matters in an interview?"
      },
      {
        "type": "paragraph",
        "text": "V&V interviews frequently focus on how candidates approach testing and failure investigation."
      },
      {
        "type": "paragraph",
        "text": "You may be asked how to verify a requirement, how to test a robot's response to a missing sensor measurement or how to determine why an automated test failed."
      },
      {
        "type": "paragraph",
        "text": "Prepare one project where you can explain:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "What the system was expected to do.",
          "How you translated that expectation into a test.",
          "Which conditions you evaluated.",
          "What evidence you collected.",
          "How you investigated an unexpected result.",
          "How you verified that a correction worked."
        ]
      },
      {
        "type": "paragraph",
        "text": "Employers may also ask about tests that passed for the wrong reason."
      },
      {
        "type": "paragraph",
        "text": "For example, a test might report success because it checked the wrong log field or never created the failure condition it was supposed to evaluate."
      },
      {
        "type": "paragraph",
        "text": "Recognizing these problems is an important part of verification and validation engineering."
      }
    ]
  },
  {
    "id": "portfolio",
    "heading": "Build your first robotics V&V project",
    "navLabel": "Portfolio",
    "paragraphs": [],
    "sourceIds": [
      "fieldai",
      "nimble",
      "nasa-verification",
      "nasa-validation",
      "pytest"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Test a simulated warehouse robot"
      },
      {
        "type": "paragraph",
        "text": "A useful beginner project is to develop an automated testing system for a simulated mobile robot."
      },
      {
        "type": "paragraph",
        "text": "You do not need to purchase a physical robot."
      },
      {
        "type": "paragraph",
        "text": "The goal is to demonstrate how V&V engineers define requirements, create test scenarios, investigate failures and document the evidence."
      },
      {
        "type": "paragraph",
        "text": "You can use a simple Python simulation or an existing educational robotics environment."
      },
      {
        "type": "heading",
        "text": "Step 1: Define the robot's task"
      },
      {
        "type": "paragraph",
        "text": "Imagine a mobile robot that travels between locations in a warehouse."
      },
      {
        "type": "paragraph",
        "text": "The robot should be able to navigate toward a reachable destination, report when a goal is blocked and respond appropriately when sensor information becomes outdated."
      },
      {
        "type": "paragraph",
        "text": "Begin by describing what the system is intended to accomplish."
      },
      {
        "type": "paragraph",
        "text": "Keep the environment simple enough that you can understand how the software works."
      },
      {
        "type": "heading",
        "text": "Step 2: Write measurable requirements"
      },
      {
        "type": "paragraph",
        "text": "Create a small list of requirements."
      },
      {
        "type": "paragraph",
        "text": "For example:"
      },
      {
        "type": "table",
        "caption": "Example software requirements",
        "columns": [
          "ID",
          "Requirement"
        ],
        "rows": [
          [
            "R1",
            "The simulated robot must respond to a stop command according to a defined software response criterion"
          ],
          [
            "R2",
            "The navigation software must report when a destination is unreachable"
          ],
          [
            "R3",
            "The system must reject sensor measurements older than a specified threshold"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Define the acceptance criteria for each requirement."
      },
      {
        "type": "paragraph",
        "text": "For R3, you might set an illustrative threshold of 200 milliseconds."
      },
      {
        "type": "paragraph",
        "text": "The test should confirm that a measurement older than 200 milliseconds is recognized as stale and not treated as current information."
      },
      {
        "type": "paragraph",
        "text": "This is a software-testing example, not a physical safety specification."
      },
      {
        "type": "heading",
        "text": "Step 3: Design the test scenarios"
      },
      {
        "type": "paragraph",
        "text": "Create several scenarios that evaluate the requirements."
      },
      {
        "type": "paragraph",
        "text": "For example:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Normal navigation toward a reachable destination.",
          "A destination blocked by obstacles.",
          "A stop command during simulated movement.",
          "A sensor measurement arriving within the allowed age.",
          "A sensor measurement arriving after the allowed age.",
          "Input values immediately below and above a defined threshold."
        ]
      },
      {
        "type": "paragraph",
        "text": "Record the expected outcome before executing each test."
      },
      {
        "type": "paragraph",
        "text": "This helps prevent the acceptance criteria from changing simply because a test produces an unexpected result."
      },
      {
        "type": "heading",
        "text": "Step 4: Automate the tests"
      },
      {
        "type": "paragraph",
        "text": "Use Python and a framework such as pytest to execute the scenarios."
      },
      {
        "type": "paragraph",
        "text": "Create automated checks that compare the observed behavior with the expected result."
      },
      {
        "type": "paragraph",
        "text": "Keep the scenario inputs separate from the test's acceptance checks."
      },
      {
        "type": "paragraph",
        "text": "A failed test should produce a clear explanation of what was expected and what actually happened."
      },
      {
        "type": "paragraph",
        "text": "Also distinguish between a system failure and a test that could not run because the simulation or required evidence was unavailable."
      },
      {
        "type": "heading",
        "text": "Step 5: Record the evidence"
      },
      {
        "type": "paragraph",
        "text": "Save the important details of each test execution."
      },
      {
        "type": "paragraph",
        "text": "These may include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Test identifier.",
          "Requirement being evaluated.",
          "Software version.",
          "Simulation configuration.",
          "Input values and timestamps.",
          "Expected result.",
          "Actual result.",
          "Pass, fail or unavailable status."
        ]
      },
      {
        "type": "paragraph",
        "text": "The records should allow someone else to understand and reproduce the evaluation."
      },
      {
        "type": "heading",
        "text": "Step 6: Introduce a software defect"
      },
      {
        "type": "paragraph",
        "text": "Deliberately modify the simulated robot so that it ignores the timestamp associated with a sensor measurement."
      },
      {
        "type": "paragraph",
        "text": "The software now treats old information as though it were current."
      },
      {
        "type": "paragraph",
        "text": "Run the existing tests."
      },
      {
        "type": "paragraph",
        "text": "The stale-data test should identify the defect."
      },
      {
        "type": "paragraph",
        "text": "If it doesn't, investigate whether the test was designed correctly."
      },
      {
        "type": "paragraph",
        "text": "This exercise demonstrates why good testing requires more than executing a program and checking whether it crashes."
      },
      {
        "type": "heading",
        "text": "Step 7: Correct the defect"
      },
      {
        "type": "paragraph",
        "text": "Restore the timestamp check in the simulated software."
      },
      {
        "type": "paragraph",
        "text": "Run the original failing test again."
      },
      {
        "type": "paragraph",
        "text": "Verify that the software now rejects stale measurements according to the requirement."
      },
      {
        "type": "paragraph",
        "text": "Then execute the relevant regression tests to confirm that other previously working behavior remains correct."
      },
      {
        "type": "paragraph",
        "text": "Keep the original acceptance criterion unchanged."
      },
      {
        "type": "heading",
        "text": "Step 8: Create a traceability matrix"
      },
      {
        "type": "paragraph",
        "text": "Connect each requirement to its corresponding tests and results."
      },
      {
        "type": "paragraph",
        "text": "Use a table showing which requirements have been evaluated and which still lack evidence."
      },
      {
        "type": "paragraph",
        "text": "Initially, leave one requirement without an associated test."
      },
      {
        "type": "paragraph",
        "text": "Then design an appropriate evaluation and update the matrix."
      },
      {
        "type": "paragraph",
        "text": "This demonstrates how V&V engineers identify coverage gaps."
      },
      {
        "type": "heading",
        "text": "Step 9: Prepare a validation summary"
      },
      {
        "type": "paragraph",
        "text": "Verification checks whether the software meets its defined requirements."
      },
      {
        "type": "paragraph",
        "text": "For validation, consider whether the simulated system can still accomplish its intended navigation task under the tested conditions."
      },
      {
        "type": "paragraph",
        "text": "Report the scenarios evaluated, the observed mission outcomes and any remaining limitations."
      },
      {
        "type": "paragraph",
        "text": "Clearly identify what has not been tested."
      },
      {
        "type": "paragraph",
        "text": "A simulation-based project does not establish that a physical robot would behave identically."
      },
      {
        "type": "heading",
        "text": "What to include in your portfolio"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "A short description of the robot's intended use.",
          "A numbered list of measurable requirements.",
          "Python source code and automated tests.",
          "Test scenarios and acceptance criteria.",
          "A requirements traceability matrix.",
          "Diagnostic logs and evaluation results.",
          "One defect investigation with before-and-after evidence.",
          "A summary of passed, failed and unavailable tests.",
          "A short video demonstrating the testing workflow."
        ]
      },
      {
        "type": "heading",
        "text": "An optional advanced extension"
      },
      {
        "type": "paragraph",
        "text": "Expand the project into a ROS 2 simulation or a supervised robotics laboratory environment."
      },
      {
        "type": "paragraph",
        "text": "Add more realistic robot interfaces, sensor behavior or operating conditions."
      },
      {
        "type": "paragraph",
        "text": "Compare how testing changes when you move from a simple software model to a more complete robotics environment."
      },
      {
        "type": "paragraph",
        "text": "Document which additional behaviors can now be evaluated and which limitations remain."
      },
      {
        "type": "paragraph",
        "text": "The goal is to show a disciplined testing process, not simply a large number of automated tests."
      }
    ]
  }
],
nextSteps:{
  "id": "next-steps",
  "heading": "Where to go next",
  "paragraphs": [],
  "sourceIds": [
    "nasa-handbook",
    "pytest-home",
    "ros-docs"
  ],
  "blocks": [
    {
      "type": "resources",
      "items": [
        {
          "title": "NASA — Systems Engineering Handbook",
          "href": "https://www.nasa.gov/reference/systems-engineering-handbook/",
          "description": "Study the principles of verification, validation, requirements and systems engineering used in complex technical projects."
        },
        {
          "title": "pytest — Official Documentation",
          "href": "https://docs.pytest.org/",
          "description": "Learn how to develop automated tests, organize test cases and evaluate software across different input conditions."
        },
        {
          "title": "ROS 2 — Official Documentation",
          "href": "https://docs.ros.org/",
          "description": "Explore robotics software systems, simulation workflows and the interfaces used to connect robotic components."
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Begin with one small system and develop a reliable way to test it."
    },
    {
      "type": "paragraph",
      "text": "Once you can define requirements, create repeatable tests, investigate failures and explain what the evidence demonstrates, progress toward more complex robotics systems and real-world testing environments."
    }
  ]
},
researchNotes:[
  "Employer advertisements were collected November 2, 2026; thirteen complete stored sources were reviewed November 10, with three additional boundary reviews. The original primary cohort contains 64 advertisements, including adjacent component/firmware/silicon, browser QA, manufacturing-test, infrastructure and technician work. It is a selected dated sample, not a current vacancy count or industry census. Original source classifications remain unchanged.",
  "The guide centers on system requirements, robot/autonomy behavior, scenario design, traceability, end-to-end regression and readiness evidence. Cross-domain integration/verification roles are included where requirements and complete-system evidence are central. Pure component characterization, browser/API product QA and isolated firmware/silicon verification remain adjacent. Qualifications and skills are contextual descriptions, not prevalence statistics. Skydio and Rhoda describe experience-based preparation without an express degree requirement in the reviewed text.",
  "The compensation estimate is the median of ten eligible annual USD range midpoints across six employers, rounded to the nearest $1,000 with halves upward. Four annual ranges are explicit in stored text and six use official structured annual fields. The exact median is $174,750; the estimate is $175,000. Each distinct eligible requisition contributes once, including three Zoox, two Skydio and two Applied Intuition requisitions. Bonus and equity are excluded. The structured fields do not consistently establish base-pay treatment, so the guide labels observations annual advertised salary.",
  "The purposive U.S. sample spans general, senior and staff technical positions, with California concentration. It is not an entry-level rate or representative market median. The 1X Validation Test Technician source has structured USD 30–48/year but body USD 30–48/hour; it is excluded for role and period conflict, with no annualization. The cloud/UI-focused Zoox System Test advertisement is distinct from its same-title physical autonomy requisition and is excluded. Gatik and Anduril salary amounts lack an explicitly verified annual period and are excluded. Complete observations and exclusions are downloadable.",
  "The traceability graphic is an invented software-test example, not employer data. All three tests are marked passed: T1 and T2 map to R1, T3 maps to R2, and R3 has no mapped test. A passing executed-test count therefore leaves one requirement without linked test evidence. A test-to-requirement mapping does not by itself establish sufficient coverage, validity, confidence, safety or release readiness. Actual engineering evaluation also examines acceptance criteria, configurations, conditions and evidence quality. The example concerns toy software responses, not physical robot stopping performance.",
  "The introductory failure scenario and portfolio are educational examples. The portfolio evaluates a small simulated system and does not qualify a real robot or establish compliance with a safety standard. NASA references explain general engineering concepts; no NASA-specific process or legal standard is asserted as universally required for these careers. The cover is a conceptual editorial illustration. Official technical resources and the Zoox employer job index were checked November 10; direct retrieval of the individual Zoox advertisement returned 403, so no current-opening claim is made."
],
citations:[
 source('study','Black Scarab: November 2 employer research','/research/physical-ai-careers-2026-11-02.json','Dated aggregate and original role definitions.'),
 source('evidence','Reviewed V&V engineering evidence',evidencePath,'Thirteen contextual full-source reviews, qualification context and original source hashes.'),
 source('compensation','V&V Engineer compensation derivation','/research/verification-validation-engineer-compensation-2026-11-02.json','Ten eligible annual observations, source conflicts and reproducible estimate.'),
 source('traceability','Illustrative V&V traceability model','/research/verification-validation-traceability-example-2026-11-10.json','Exact test outcomes and requirement mappings for the editorial graphic.'),
 posting('anduril',0),posting('applied',1),posting('applied-marine',2),posting('fieldai',3),posting('gatik-hil',4),posting('gatik-sil',5),posting('nimble',6),posting('rhoda',7),posting('skydio',8),posting('skydio-senior',9),posting('zoox',10),posting('zoox-test',11),posting('zoox-faults',12),
 source('nasa-handbook','NASA Systems Engineering Handbook','https://www.nasa.gov/reference/systems-engineering-handbook/','Official systems-engineering reference, including requirements, verification and validation.'),
 source('pytest-home','pytest: official documentation','https://docs.pytest.org/','Official testing framework, tutorials and reference documentation.'),
 source('ros-docs','ROS: official documentation','https://docs.ros.org/','Official robotics middleware documentation portal.'),
 source('nasa-verification','NASA Systems Engineering Handbook: product verification','https://www.nasa.gov/reference/5-3-product-verification/','Official reference on requirements, verification methods, traceability and evidence.'),
 source('nasa-validation','NASA Systems Engineering Handbook: product validation','https://www.nasa.gov/reference/5-4-product-validation/','Official reference on intended use, stakeholder expectations and validation.'),
 source('pytest','pytest: parameterized tests','https://docs.pytest.org/en/stable/how-to/parametrize.html','Official test-framework documentation on repeatable input combinations.'),
 ],
};
