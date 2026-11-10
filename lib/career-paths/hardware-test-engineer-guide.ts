import type {CareerGuideContent,Citation} from '@/lib/career-paths/types';
import {researchForRole} from '@/lib/career-paths/research';
import evidence from '@/public/research/hardware-test-engineer-evidence-2026-11-10.json';
import compensation from '@/public/research/hardware-test-engineer-compensation-2026-11-02.json';
import model from '@/public/research/hardware-test-measurement-example-2026-11-10.json';
import decisions from '@/research/seo/2026-11-10/decisions.json';
const roleId='hardware-test-engineer';
const role=researchForRole(roleId,evidence.snapshotId);
if(!role||compensation.snapshotId!==evidence.snapshotId)throw new Error('Hardware Test guide research mismatch');
const seo=decisions.guides.find(item=>item.occupationId===roleId);
if(!seo)throw new Error('Missing Hardware Test SEO decision');
const salary=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(compensation.estimate);
const evidencePath='/research/hardware-test-engineer-evidence-2026-11-10.json';
const source=(id:string,title:string,url:string,scope:string):Citation=>({id,title,url,scope,accessedAt:'2026-11-10'});
const posting=(id:string,index:number):Citation=>{const r=evidence.records[index];return source(id,`${r.employer}: ${r.title}`,r.url,'Employer advertisement collected November 2, 2026.');};
export const hardwareTestEngineerGuide:CareerGuideContent={
 id:roleId,occupationId:roleId,familyId:'hardware-manufacturing',slug:roleId,
 title:seo.h1,seoTitle:seo.seoTitle,description:seo.description,status:'published',publishedAt:'2026-11-10',reviewedAt:'2026-11-10',
 research:{snapshotId:evidence.snapshotId,roleId,evidencePath},
 deck:'Design experiments, build testing equipment and investigate failures to make robotic hardware more reliable.',
 introduction:['Imagine a robotics company developing a humanoid hand designed to pick up objects.'],
 illustration:{src:'/career-paths/hardware-test-engineer-lab.webp',width:1672,height:941,alt:'Conceptual technical cutaway of an invented robotic wrist mounted in a laboratory test fixture, with exposed gears and bearings, machined metal surfaces and restrained violet cables.'},
 overview:[
  {label:'What you do',value:'Develop tests that measure the performance, durability and reliability of robotic components',sourceIds:['apptronik-dexterity','zipline-electrical','zoox']},
  {label:'Core skills',value:'Instrumentation, Python, fixture design, data analysis and hardware troubleshooting',sourceIds:['apptronik-dexterity','skild','zipline-motors']},
  {label:'Education',value:'Typically mechanical, electrical, mechatronics or related engineering; some positions accept equivalent experience',sourceIds:['apptronik-dexterity','boston-electrical','zoox']},
  {label:'Compensation',value:`${salary}/year`,detail:'Black Scarab estimate',sourceIds:['compensation']},
 ],
 sections:[
  {
    "id": "day-to-day",
    "heading": "What does a hardware test engineer do?",
    "navLabel": "The work",
    "paragraphs": [],
    "sourceIds": [
      "apptronik-dexterity",
      "apptronik-components",
      "gatik",
      "skild",
      "zipline-motors",
      "zipline-electrical",
      "figure"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Imagine a robotics company developing a humanoid hand designed to pick up objects."
      },
      {
        "type": "paragraph",
        "text": "During its first demonstration, the hand successfully grasps a bottle, lifts it and places it on a table."
      },
      {
        "type": "paragraph",
        "text": "The engineers are pleased with the result. But a successful demonstration raises an important question: Will the hand still work after performing the same movement 100,000 times?"
      },
      {
        "type": "paragraph",
        "text": "Perhaps the motors become too hot, the joints gradually wear down or the sensors begin producing inaccurate measurements."
      },
      {
        "type": "paragraph",
        "text": "Hardware test engineers develop the experiments that help answer these questions."
      },
      {
        "type": "paragraph",
        "text": "They design testing equipment, measure how components perform and investigate why hardware fails."
      },
      {
        "type": "paragraph",
        "text": "Their work involves the physical systems inside robots, including motors, actuators, gears, sensors, circuit boards, batteries and mechanical assemblies."
      },
      {
        "type": "paragraph",
        "text": "The objective is not simply to determine whether a component works. It is to understand how well it works, under which conditions it performs reliably and what causes it to fail."
      },
      {
        "type": "heading",
        "text": "Three areas of hardware test engineering"
      },
      {
        "type": "table",
        "caption": "Areas of hardware test engineering",
        "columns": [
          "Specialization",
          "What engineers work on"
        ],
        "rows": [
          [
            "Performance testing",
            "Measuring how well components perform, including force, speed, temperature, accuracy and electrical behavior"
          ],
          [
            "Reliability and durability testing",
            "Investigating how hardware performs after repeated use or exposure to specified environmental conditions"
          ],
          [
            "Manufacturing test engineering",
            "Developing testing equipment that checks components and assemblies during production"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These specializations frequently overlap."
      },
      {
        "type": "paragraph",
        "text": "An engineer might measure the force produced by a robot's gripper, then develop an automated test that repeats the same movement thousands of times."
      },
      {
        "type": "paragraph",
        "text": "Another might design a testing station that checks whether every motor controller leaving a factory meets its electrical requirements."
      },
      {
        "type": "paragraph",
        "text": "Companies such as Apptronik, Figure, Boston Dynamics and Skydio employ engineers working across different aspects of hardware testing."
      },
      {
        "type": "heading",
        "text": "What does a typical day look like?"
      },
      {
        "type": "paragraph",
        "text": "Hardware test engineers spend much of their time in laboratories, working with instruments, physical components and testing equipment."
      },
      {
        "type": "paragraph",
        "text": "Imagine an engineer arriving at a robotics laboratory to review the results of a motor endurance test that ran overnight."
      },
      {
        "type": "paragraph",
        "text": "The test was designed to operate a motor repeatedly under a controlled load."
      },
      {
        "type": "paragraph",
        "text": "Most samples performed as expected, but one stopped working earlier than anticipated."
      },
      {
        "type": "paragraph",
        "text": "The engineer reviews the recorded measurements, including motor temperature, electrical current and operating conditions."
      },
      {
        "type": "paragraph",
        "text": "Before concluding that the motor is defective, they inspect the test fixture, wiring and measurement equipment."
      },
      {
        "type": "paragraph",
        "text": "Perhaps the motor genuinely overheated. Alternatively, a loose connection or a problem with the test setup may have caused the unexpected result."
      },
      {
        "type": "paragraph",
        "text": "The engineer investigates the possibilities, repeats relevant measurements and works with other teams to determine the next step."
      },
      {
        "type": "paragraph",
        "text": "Later, they might design a new test fixture, automate data collection using Python or prepare a report comparing several hardware designs."
      },
      {
        "type": "paragraph",
        "text": "A typical testing process involves:"
      },
      {
        "type": "list",
        "items": [
          "Define the question. Determine which property or behavior needs to be evaluated.",
          "Design the experiment. Specify the conditions, equipment, measurements and acceptance criteria.",
          "Build the test setup. Assemble fixtures, sensors and instrumentation.",
          "Run the test. Collect measurements while the hardware operates under defined conditions.",
          "Investigate the results. Identify unexpected behavior and possible causes.",
          "Recommend improvements. Work with engineering teams to address problems.",
          "Repeat the evaluation. Test revised hardware to determine whether performance improved."
        ],
        "ordered": true
      },
      {
        "type": "paragraph",
        "text": "Hardware testing combines engineering knowledge with experimentation and practical problem-solving."
      },
      {
        "type": "heading",
        "text": "When a robot joint begins overheating"
      },
      {
        "type": "paragraph",
        "text": "Consider a robotic arm designed to move components on an assembly line."
      },
      {
        "type": "paragraph",
        "text": "During development, the joint performs well in short tests."
      },
      {
        "type": "paragraph",
        "text": "However, after several hours of continuous operation, its temperature increases significantly."
      },
      {
        "type": "paragraph",
        "text": "The hardware test engineer needs to determine why."
      },
      {
        "type": "paragraph",
        "text": "Perhaps the motor is drawing more current than expected. Friction inside the mechanism might be increasing, or the joint could be operating under a load that produces excessive heat."
      },
      {
        "type": "paragraph",
        "text": "The engineer develops an experiment that measures temperature, current and mechanical loading over time."
      },
      {
        "type": "paragraph",
        "text": "They compare the results across different operating conditions."
      },
      {
        "type": "paragraph",
        "text": "If the joint heats up more quickly under heavier loads, that information may help the design team understand the relationship between load, power consumption and temperature."
      },
      {
        "type": "paragraph",
        "text": "The engineer might then evaluate a revised motor, different mechanical components or an updated operating configuration."
      },
      {
        "type": "paragraph",
        "text": "The important contribution is turning an observed problem into measurements that help engineers make better design decisions."
      }
    ]
  },
  {
    "id": "hardware-test-vs-related-roles",
    "heading": "How is hardware testing different from other robotics careers?",
    "navLabel": "Related careers",
    "paragraphs": [],
    "sourceIds": [
      "apptronik-dexterity",
      "figure",
      "boston-electrical",
      "zipline-electrical",
      "zoox"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Hardware test engineers work closely with the teams designing and manufacturing robotic systems."
      },
      {
        "type": "paragraph",
        "text": "However, their primary responsibility is evaluating the physical hardware and developing the equipment used to test it."
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
            "Hardware Test Engineer",
            "Measures component performance, develops test equipment and investigates physical failures"
          ],
          [
            "Mechanical Engineer",
            "Designs the robot's mechanical components, joints and structures"
          ],
          [
            "Electrical Engineer",
            "Designs circuits, electronics and electrical systems"
          ],
          [
            "Manufacturing Engineer",
            "Develops processes for building robotic hardware consistently"
          ],
          [
            "Verification & Validation Engineer",
            "Evaluates whether systems meet requirements and perform as intended"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "For example, imagine a company developing a new robotic wrist."
      },
      {
        "type": "paragraph",
        "text": "A mechanical engineer designs the gears, bearings and other components."
      },
      {
        "type": "paragraph",
        "text": "An electrical engineer develops the electronics used to power and control the system."
      },
      {
        "type": "paragraph",
        "text": "A hardware test engineer builds a test setup that measures torque, temperature and performance under repeated movement."
      },
      {
        "type": "paragraph",
        "text": "A manufacturing engineer develops the process used to assemble the wrist consistently."
      },
      {
        "type": "paragraph",
        "text": "A verification and validation engineer may then evaluate whether the complete robot meets defined requirements when using that wrist."
      },
      {
        "type": "paragraph",
        "text": "These responsibilities can overlap, particularly at smaller robotics companies."
      },
      {
        "type": "heading",
        "text": "What about manufacturing test engineering?"
      },
      {
        "type": "paragraph",
        "text": "Some hardware test engineers specialize in testing components during production."
      },
      {
        "type": "paragraph",
        "text": "For example, a robotics manufacturer might need to test every motor controller before installing it in a robot."
      },
      {
        "type": "paragraph",
        "text": "A manufacturing test engineer could design an automated station that connects to each controller, applies defined electrical tests and records the results."
      },
      {
        "type": "paragraph",
        "text": "The purpose is to identify faulty components efficiently and consistently."
      },
      {
        "type": "paragraph",
        "text": "This differs from manufacturing engineering focused on assembly processes, production efficiency and factory operations."
      },
      {
        "type": "paragraph",
        "text": "The distinction is the engineering responsibility: developing the test equipment and measurement methods versus developing the broader manufacturing process."
      }
    ]
  },
  {
    "id": "skills",
    "heading": "Which skills and tools do employers look for?",
    "navLabel": "Skills & tools",
    "paragraphs": [],
    "sourceIds": [
      "apptronik-dexterity",
      "apptronik-components",
      "boston-electrical",
      "skild",
      "skydio-senior",
      "zipline-electrical",
      "zipline-power",
      "ni-measurements",
      "ni-daq",
      "nist-bias",
      "nist-terms",
      "nist-uncertainty",
      "measurement-model"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Instrumentation and measurement"
      },
      {
        "type": "paragraph",
        "text": "Hardware testing requires engineers to measure physical and electrical behavior accurately."
      },
      {
        "type": "paragraph",
        "text": "Different instruments are used depending on what needs to be evaluated."
      },
      {
        "type": "table",
        "caption": "Test instruments",
        "columns": [
          "Instrument",
          "What it measures"
        ],
        "rows": [
          [
            "Multimeter",
            "Voltage, current and resistance"
          ],
          [
            "Oscilloscope",
            "Electrical signals changing over time"
          ],
          [
            "Data acquisition system (DAQ)",
            "Records measurements from multiple sensors and instruments"
          ],
          [
            "Force sensor or load cell",
            "Measures forces applied by or to a mechanism"
          ],
          [
            "Temperature sensor",
            "Monitors thermal behavior"
          ],
          [
            "Torque sensor",
            "Measures the turning moment produced by a motor or joint"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "The ability to select and use instruments is fundamental."
      },
      {
        "type": "paragraph",
        "text": "However, knowing how to operate an instrument is only part of the job."
      },
      {
        "type": "paragraph",
        "text": "Engineers also need to understand whether the measurement itself can be trusted."
      },
      {
        "type": "heading",
        "text": "Measurement accuracy and repeatability"
      },
      {
        "type": "paragraph",
        "text": "Imagine an engineer testing a sensor that should report 5.00 volts."
      },
      {
        "type": "paragraph",
        "text": "They perform the same measurement five times using two different setups."
      },
      {
        "type": "paragraph",
        "text": "Setup A produces readings that are tightly grouped around 5.20 volts."
      },
      {
        "type": "paragraph",
        "text": "Setup B produces readings that vary more but have an average of 5.00 volts."
      },
      {
        "type": "paragraph",
        "text": "Which setup is better?"
      },
      {
        "type": "paragraph",
        "text": "The answer depends on what matters for the test."
      },
      {
        "type": "paragraph",
        "text": "Setup A is more repeatable because its measurements are closely grouped. However, its readings are consistently higher than the reference."
      },
      {
        "type": "paragraph",
        "text": "Setup B has more variation, but its average is closer to the reference value."
      },
      {
        "type": "measurement-comparison",
        "id": "hardware-measurement-quality",
        "title": "Repeatable does not always mean accurate",
        "model": model
      },
      {
        "type": "paragraph",
        "text": "This introduces two important concepts:"
      },
      {
        "type": "paragraph",
        "text": "Repeatability describes how closely measurements agree when taken under the same conditions."
      },
      {
        "type": "paragraph",
        "text": "Accuracy concerns how closely a measurement agrees with the value being measured, assuming a trustworthy reference."
      },
      {
        "type": "paragraph",
        "text": "A system can produce highly consistent measurements while still being systematically wrong."
      },
      {
        "type": "paragraph",
        "text": "Hardware test engineers investigate these differences before using measurements to judge whether a component meets its requirements."
      },
      {
        "type": "heading",
        "text": "Calibration and measurement uncertainty"
      },
      {
        "type": "paragraph",
        "text": "Instruments are not perfect."
      },
      {
        "type": "paragraph",
        "text": "A temperature sensor might have an offset, a force sensor might be mounted incorrectly or electrical noise could interfere with a measurement."
      },
      {
        "type": "paragraph",
        "text": "Engineers need to understand calibration and measurement uncertainty."
      },
      {
        "type": "paragraph",
        "text": "Calibration compares an instrument's readings with an appropriate reference under defined conditions."
      },
      {
        "type": "paragraph",
        "text": "Measurement uncertainty quantifies how well a reported value is known."
      },
      {
        "type": "paragraph",
        "text": "For example, if a robotic joint must meet a narrow force requirement, the engineer needs equipment capable of distinguishing acceptable performance from unacceptable performance."
      },
      {
        "type": "paragraph",
        "text": "Poor measurement methods can lead a team to reject good hardware or accept components that do not meet the intended requirements."
      },
      {
        "type": "heading",
        "text": "Test fixture design"
      },
      {
        "type": "paragraph",
        "text": "A test fixture is a device that holds, positions or supports hardware during an experiment."
      },
      {
        "type": "paragraph",
        "text": "Imagine a company testing the torque produced by a robotic wrist."
      },
      {
        "type": "paragraph",
        "text": "The engineer needs to hold the assembly securely, apply an appropriate load and measure its response."
      },
      {
        "type": "paragraph",
        "text": "A custom fixture may be necessary to position the wrist and connect it to the measurement equipment."
      },
      {
        "type": "paragraph",
        "text": "Good fixtures help make tests repeatable."
      },
      {
        "type": "paragraph",
        "text": "They also make it easier to access sensors, inspect hardware and perform the same experiment across multiple samples."
      },
      {
        "type": "paragraph",
        "text": "Hardware test engineers may use CAD software to design fixtures and create engineering drawings."
      },
      {
        "type": "paragraph",
        "text": "Depending on the position, relevant skills can include mechanical design, machining, electrical connections and measurement-system integration."
      },
      {
        "type": "heading",
        "text": "Python and test automation"
      },
      {
        "type": "paragraph",
        "text": "Many hardware tests involve collecting large quantities of data or repeating the same procedure."
      },
      {
        "type": "paragraph",
        "text": "Python is widely used to automate these tasks."
      },
      {
        "type": "paragraph",
        "text": "An engineer might write a program that:"
      },
      {
        "type": "list",
        "items": [
          "Configures a measurement instrument.",
          "Starts a test sequence.",
          "Records sensor data.",
          "Detects missing or invalid readings.",
          "Calculates performance metrics.",
          "Generates a summary report."
        ]
      },
      {
        "type": "paragraph",
        "text": "Automating a test can reduce manual work and make the procedure easier to repeat."
      },
      {
        "type": "paragraph",
        "text": "However, test software must also be reliable."
      },
      {
        "type": "paragraph",
        "text": "An engineer needs to consider what happens if a sensor stops reporting data, an instrument disconnects or the test ends unexpectedly."
      },
      {
        "type": "paragraph",
        "text": "Other tools used in hardware testing may include LabVIEW, TestStand, MATLAB and C++."
      },
      {
        "type": "paragraph",
        "text": "The specific software depends on the equipment and employer."
      },
      {
        "type": "heading",
        "text": "Reliability and durability testing"
      },
      {
        "type": "paragraph",
        "text": "Robots contain components that experience repeated movement, vibration, temperature changes and mechanical loading."
      },
      {
        "type": "paragraph",
        "text": "Reliability testing investigates how hardware behaves under these conditions."
      },
      {
        "type": "paragraph",
        "text": "For example, a robotic gripper may be required to perform thousands of opening and closing cycles."
      },
      {
        "type": "paragraph",
        "text": "A durability test can repeat that movement while monitoring force, position, temperature and other measurements."
      },
      {
        "type": "paragraph",
        "text": "Engineers may examine whether performance changes over time or whether components begin to show signs of wear."
      },
      {
        "type": "paragraph",
        "text": "Other tests may involve:"
      },
      {
        "type": "list",
        "items": [
          "Repeated mechanical loading.",
          "Temperature cycling.",
          "Vibration.",
          "Electrical operating limits.",
          "Environmental exposure under specified conditions.",
          "Extended operation."
        ]
      },
      {
        "type": "paragraph",
        "text": "The appropriate test conditions depend on the component and its intended use."
      },
      {
        "type": "paragraph",
        "text": "Specialized environmental chambers, battery equipment and high-power test systems require suitable facilities, training and safety procedures."
      },
      {
        "type": "heading",
        "text": "Failure analysis and root-cause investigation"
      },
      {
        "type": "paragraph",
        "text": "When a test produces an unexpected result, engineers need to determine what caused it."
      },
      {
        "type": "paragraph",
        "text": "The failure might come from the component itself, but it could also come from the fixture, wiring, measurement equipment or test software."
      },
      {
        "type": "paragraph",
        "text": "Consider a motor that stops during a durability test."
      },
      {
        "type": "paragraph",
        "text": "The engineer might investigate whether the motor overheated, the power supply became unstable or a connector lost contact."
      },
      {
        "type": "paragraph",
        "text": "A systematic investigation involves reviewing evidence, comparing test conditions and eliminating possible explanations."
      },
      {
        "type": "paragraph",
        "text": "The engineer should distinguish between a suspected cause and a confirmed cause."
      },
      {
        "type": "paragraph",
        "text": "Once a correction is made, testing helps determine whether the problem has been resolved."
      },
      {
        "type": "heading",
        "text": "Reporting and technical communication"
      },
      {
        "type": "paragraph",
        "text": "Hardware test engineers work closely with product designers, manufacturing teams and other specialists."
      },
      {
        "type": "paragraph",
        "text": "They need to explain test results clearly enough that those teams can make engineering decisions."
      },
      {
        "type": "paragraph",
        "text": "A useful test report includes:"
      },
      {
        "type": "table",
        "caption": "What to include in a test report",
        "columns": [
          "Information",
          "Why it matters"
        ],
        "rows": [
          [
            "Test objective",
            "Explains what the experiment was intended to establish"
          ],
          [
            "Hardware configuration",
            "Identifies which components and revisions were evaluated"
          ],
          [
            "Test conditions",
            "Records the operating environment and applied inputs"
          ],
          [
            "Measurements",
            "Preserves the evidence collected"
          ],
          [
            "Results",
            "Explains whether the hardware met the stated criteria"
          ],
          [
            "Findings and limitations",
            "Identifies suspected causes, remaining questions and recommended actions"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "A strong report goes beyond presenting graphs."
      },
      {
        "type": "paragraph",
        "text": "It explains what the measurements mean and what the engineering team should investigate or change next."
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
      "apptronik-dexterity",
      "apptronik-components",
      "boston-electrical",
      "figure",
      "skild",
      "zipline-power",
      "zoox"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Hardware test engineers commonly come from mechanical engineering, electrical engineering, mechatronics or robotics."
      },
      {
        "type": "paragraph",
        "text": "The most relevant educational background depends on which components the engineer will evaluate."
      },
      {
        "type": "paragraph",
        "text": "Mechanical engineering provides useful preparation for testing structures, mechanisms and actuators."
      },
      {
        "type": "paragraph",
        "text": "Electrical engineering is particularly relevant for evaluating circuits, sensors, motors and electronic systems."
      },
      {
        "type": "paragraph",
        "text": "Mechatronics combines mechanical, electrical and software knowledge, making it useful for testing integrated robotic components."
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
            "Relevant engineering degree and experience, with consideration of equivalent hands-on backgrounds"
          ],
          [
            "Figure",
            "Substantial technical industry experience; a related degree may be preferred for certain test positions"
          ],
          [
            "Boston Dynamics",
            "Advanced electrical testing and test-system engineering experience for senior positions"
          ],
          [
            "Skydio",
            "Manufacturing test development, automation and hardware-testing experience"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These examples cover different levels of responsibility."
      },
      {
        "type": "paragraph",
        "text": "Entry-level engineers may support established test procedures and develop basic test equipment."
      },
      {
        "type": "paragraph",
        "text": "Experienced engineers may design complete testing systems, lead investigations and establish test strategies for major hardware programs."
      },
      {
        "type": "heading",
        "text": "Do you need an engineering degree?"
      },
      {
        "type": "paragraph",
        "text": "Many hardware test engineering positions require technical education or equivalent experience."
      },
      {
        "type": "paragraph",
        "text": "However, practical experience working with instruments, mechanical equipment or electronics can provide a useful foundation."
      },
      {
        "type": "paragraph",
        "text": "Some employers consider candidates with substantial hands-on experience."
      },
      {
        "type": "paragraph",
        "text": "The important distinction is between performing a test and developing the engineering method behind it."
      },
      {
        "type": "paragraph",
        "text": "A test technician may assemble equipment, run procedures and record measurements."
      },
      {
        "type": "paragraph",
        "text": "A hardware test engineer is often responsible for defining what should be measured, designing the setup and interpreting the evidence."
      },
      {
        "type": "paragraph",
        "text": "These responsibilities can overlap, and technician experience can be a valuable route toward more advanced testing work."
      },
      {
        "type": "heading",
        "text": "What should you study?"
      },
      {
        "type": "paragraph",
        "text": "Useful technical foundations include:"
      },
      {
        "type": "list",
        "items": [
          "Mechanical or electrical engineering fundamentals.",
          "Sensors and measurement instruments.",
          "Python programming and data analysis.",
          "CAD and fixture design.",
          "Statistics and experimental methods.",
          "Reliability testing and failure analysis.",
          "Test automation and technical documentation."
        ]
      },
      {
        "type": "paragraph",
        "text": "Laboratory experience is particularly valuable."
      },
      {
        "type": "paragraph",
        "text": "Student engineering teams, technical laboratories, internships and supervised manufacturing work can provide opportunities to design experiments and collect real measurements."
      },
      {
        "type": "heading",
        "text": "Can you enter from another technical background?"
      },
      {
        "type": "paragraph",
        "text": "Yes."
      },
      {
        "type": "paragraph",
        "text": "People working in electronics, manufacturing, industrial maintenance or technical testing may already possess transferable skills."
      },
      {
        "type": "paragraph",
        "text": "The next step is developing experience with engineering analysis, fixture design and measurement methods."
      },
      {
        "type": "paragraph",
        "text": "For example, an experienced electronics technician may understand how to troubleshoot circuit boards but need additional preparation in designing automated tests and analyzing measurement uncertainty."
      },
      {
        "type": "paragraph",
        "text": "A manufacturing technician may already understand recurring defects and production equipment but need stronger programming and experimental-design skills."
      }
    ]
  },
  {
    "id": "salary",
    "heading": "How much do hardware test engineers earn?",
    "navLabel": "Compensation",
    "paragraphs": [],
    "sourceIds": [
      "compensation",
      "boston-electrical",
      "figure",
      "skydio-senior"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Hardware test engineering compensation depends on technical specialization, experience, location and the complexity of the systems being evaluated."
      },
      {
        "type": "paragraph",
        "text": "Black Scarab estimates annual compensation at $183,000 based on reviewed U.S. robotics hardware and manufacturing test positions."
      },
      {
        "type": "paragraph",
        "text": "The reviewed examples emphasize experienced electrical and production-test engineering roles."
      },
      {
        "type": "compensation",
        "caption": "Selected U.S. salary advertisements, November 2026",
        "note": "Annual advertised salary",
        "examples": evidence.roles[roleId].compensation
      },
      {
        "type": "paragraph",
        "text": "Bonuses and equity may be additional."
      },
      {
        "type": "heading",
        "text": "What influences compensation?"
      },
      {
        "type": "paragraph",
        "text": "Experience and responsibility. Compare whether a position supports established procedures, owns a complete test system or leads complex investigations."
      },
      {
        "type": "paragraph",
        "text": "Technical specialization. Expertise in electrical testing, reliability engineering, automation or complex electromechanical systems can be valuable."
      },
      {
        "type": "paragraph",
        "text": "Production requirements. Manufacturing test positions may involve responsibility for equipment used to evaluate large numbers of components."
      },
      {
        "type": "paragraph",
        "text": "Location and employer. Compensation varies across geographic markets, established technology companies and robotics startups."
      },
      {
        "type": "heading",
        "text": "Career progression"
      },
      {
        "type": "paragraph",
        "text": "Early-career engineers may begin by supporting test procedures, collecting measurements and developing simple test fixtures."
      },
      {
        "type": "paragraph",
        "text": "With experience, they can take responsibility for complete testing systems, automated test equipment and hardware investigations."
      },
      {
        "type": "paragraph",
        "text": "Senior and staff engineers may develop testing strategies, lead qualification programs and make technical decisions affecting several products or engineering teams."
      },
      {
        "type": "paragraph",
        "text": "Related career paths include reliability engineering, manufacturing test engineering, hardware validation and technical leadership."
      }
    ]
  },
  {
    "id": "employers",
    "heading": "Which companies hire hardware test engineers?",
    "navLabel": "Employers",
    "paragraphs": [],
    "sourceIds": [
      "agile",
      "apptronik-dexterity",
      "apptronik-components",
      "boston-manufacturing",
      "boston-electrical",
      "figure",
      "gatik",
      "skild",
      "skydio-staff",
      "skydio-senior",
      "zipline-motors",
      "zipline-electrical",
      "zipline-power",
      "zoox"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Hardware test engineers work across humanoid robotics, autonomous vehicles, drones and industrial robotic systems."
      },
      {
        "type": "paragraph",
        "text": "Their work may focus on prototype development, component qualification or production testing."
      },
      {
        "type": "heading",
        "text": "Humanoid robotics"
      },
      {
        "type": "paragraph",
        "text": "Apptronik, Figure and Boston Dynamics develop complex electromechanical systems that require extensive hardware testing."
      },
      {
        "type": "paragraph",
        "text": "Their testing work can involve actuators, robotic joints, electronics, motors and complete assemblies."
      },
      {
        "type": "paragraph",
        "text": "For humanoid robots, hardware reliability is particularly important because many mechanical and electronic components operate together during movement."
      },
      {
        "type": "heading",
        "text": "Robotics hardware and electronics"
      },
      {
        "type": "paragraph",
        "text": "Skild AI provides an example of hardware validation work involving robotics electronics."
      },
      {
        "type": "paragraph",
        "text": "Test engineers in these environments may evaluate circuits, sensors, communication interfaces and other hardware components."
      },
      {
        "type": "heading",
        "text": "Autonomous vehicles and drones"
      },
      {
        "type": "paragraph",
        "text": "Gatik, Zoox and Skydio offer examples of testing roles involving autonomous systems."
      },
      {
        "type": "paragraph",
        "text": "Responsibilities may include electronic component testing, environmental evaluation, manufacturing diagnostics and automated test equipment."
      },
      {
        "type": "paragraph",
        "text": "Zipline also develops autonomous aircraft systems requiring motor, electrical and power-system testing."
      },
      {
        "type": "heading",
        "text": "Specialized testing"
      },
      {
        "type": "paragraph",
        "text": "Agile Robots provides an example of positions involving product safety and electromagnetic compatibility testing."
      },
      {
        "type": "paragraph",
        "text": "These specialties may require additional knowledge of particular testing methods, equipment and engineering requirements."
      },
      {
        "type": "heading",
        "text": "Related job titles"
      },
      {
        "type": "paragraph",
        "text": "Useful searches include Hardware Test Engineer, Electrical Test Engineer, Mechanical Test Engineer, Hardware Validation Engineer, Reliability Test Engineer and Manufacturing Test Engineer."
      },
      {
        "type": "paragraph",
        "text": "Some employers also use titles such as Test Development Engineer or Systems Integration and Test Engineer."
      },
      {
        "type": "paragraph",
        "text": "Read the responsibilities carefully."
      },
      {
        "type": "paragraph",
        "text": "A role focused on software-only testing may require different skills from one centered on physical instruments and test fixtures."
      }
    ]
  },
  {
    "id": "transition",
    "heading": "How to transition into robotics hardware testing",
    "navLabel": "Your starting point",
    "paragraphs": [],
    "sourceIds": [
      "apptronik-dexterity",
      "boston-electrical",
      "figure",
      "skild",
      "skydio-senior",
      "zipline-electrical",
      "zoox"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Several technical backgrounds provide useful starting points."
      },
      {
        "type": "table",
        "caption": "Routes into hardware testing",
        "columns": [
          "Your background",
          "Skills to prioritize",
          "Suggested project"
        ],
        "rows": [
          [
            "Mechanical engineering",
            "Instrumentation, fixture design and test automation",
            "Measure the behavior of a mechanical assembly"
          ],
          [
            "Electrical engineering",
            "Automated testing, measurement analysis and reliability",
            "Develop a sensor or circuit testing workflow"
          ],
          [
            "Manufacturing or technical trades",
            "Test planning, data analysis and engineering documentation",
            "Investigate a repeatable equipment or component issue"
          ],
          [
            "Software testing",
            "Physical measurement, electronics and instrumentation",
            "Automate a simulated measurement system"
          ],
          [
            "Complete beginner",
            "Python, basic physics, electronics and statistics",
            "Build a virtual sensor test bench"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "If you already work in mechanical engineering"
      },
      {
        "type": "paragraph",
        "text": "Your understanding of forces, motion and mechanical components provides a strong foundation."
      },
      {
        "type": "paragraph",
        "text": "Develop experience with sensors, data acquisition and experimental methods."
      },
      {
        "type": "paragraph",
        "text": "A useful project is to measure how a component responds to changing loads and explain the results."
      },
      {
        "type": "heading",
        "text": "If you come from electrical engineering"
      },
      {
        "type": "paragraph",
        "text": "Your knowledge of circuits, sensors and electrical signals can transfer directly."
      },
      {
        "type": "paragraph",
        "text": "Focus on test automation, instrumentation and analysis."
      },
      {
        "type": "paragraph",
        "text": "Develop a testing workflow that collects measurements, identifies abnormal behavior and produces repeatable reports."
      },
      {
        "type": "heading",
        "text": "If you work in manufacturing or technical maintenance"
      },
      {
        "type": "paragraph",
        "text": "Your experience with equipment, recurring problems and troubleshooting is valuable."
      },
      {
        "type": "paragraph",
        "text": "Develop stronger skills in test design, fixture development and data analysis."
      },
      {
        "type": "paragraph",
        "text": "A project that demonstrates how you identified and investigated a recurring hardware problem can provide useful evidence of your abilities."
      },
      {
        "type": "heading",
        "text": "If you come from software testing"
      },
      {
        "type": "paragraph",
        "text": "Your experience with automated tests, debugging and repeatable procedures provides a useful foundation."
      },
      {
        "type": "paragraph",
        "text": "The main gap is understanding physical measurements and the hardware being evaluated."
      },
      {
        "type": "paragraph",
        "text": "Begin with simulated sensor data, then develop hands-on experience with instruments through appropriate technical training or supervised laboratory work."
      },
      {
        "type": "heading",
        "text": "If you are starting from scratch"
      },
      {
        "type": "paragraph",
        "text": "Begin with basic physics, electrical concepts and Python."
      },
      {
        "type": "paragraph",
        "text": "Learn how to collect, organize and analyze measurements."
      },
      {
        "type": "paragraph",
        "text": "Then create a simple experiment that compares readings against a known reference."
      },
      {
        "type": "paragraph",
        "text": "As your skills develop, move toward physical sensors, fixtures and automated testing equipment."
      },
      {
        "type": "heading",
        "text": "What matters in an interview?"
      },
      {
        "type": "paragraph",
        "text": "Be ready to discuss experimental design and troubleshooting in a hardware test engineering interview."
      },
      {
        "type": "paragraph",
        "text": "Employers may ask how you would evaluate a motor, investigate an unusual measurement or determine whether a failed test reflects a product defect."
      },
      {
        "type": "paragraph",
        "text": "Prepare one experiment you can explain from beginning to end."
      },
      {
        "type": "paragraph",
        "text": "Describe:"
      },
      {
        "type": "list",
        "items": [
          "What you wanted to measure.",
          "How you designed the test.",
          "Which equipment or software you used.",
          "What the results showed.",
          "Which problems you encountered.",
          "How you verified your conclusions."
        ]
      },
      {
        "type": "paragraph",
        "text": "A particularly strong example involves a test that initially produced misleading results and how you discovered the problem."
      },
      {
        "type": "paragraph",
        "text": "This demonstrates an important engineering skill: recognizing that the measurement process itself can fail."
      }
    ]
  },
  {
    "id": "portfolio",
    "heading": "Build your first hardware testing project",
    "navLabel": "Portfolio",
    "paragraphs": [],
    "sourceIds": [
      "measurement-model",
      "nist-bias",
      "nist-terms",
      "nist-uncertainty",
      "python",
      "ni-measurements"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Create a sensor testing and calibration experiment"
      },
      {
        "type": "paragraph",
        "text": "A useful beginner project is to evaluate how accurately a simulated voltage sensor measures known inputs."
      },
      {
        "type": "paragraph",
        "text": "The project introduces test planning, measurement repeatability, data analysis and the investigation of systematic errors."
      },
      {
        "type": "paragraph",
        "text": "You can complete the first version using Python or a spreadsheet."
      },
      {
        "type": "paragraph",
        "text": "Later, you can extend the project to a physical low-voltage sensor in a suitable laboratory environment."
      },
      {
        "type": "heading",
        "text": "Step 1: Define the engineering question"
      },
      {
        "type": "paragraph",
        "text": "Imagine a sensor designed to measure voltages between 1 and 5 volts."
      },
      {
        "type": "paragraph",
        "text": "You want to determine how closely its readings agree with known reference values and how much variation appears when measurements are repeated."
      },
      {
        "type": "paragraph",
        "text": "For the simulation, choose five reference values:"
      },
      {
        "type": "paragraph",
        "text": "1 V, 2 V, 3 V, 4 V and 5 V."
      },
      {
        "type": "paragraph",
        "text": "These are numerical inputs in the software model, not instructions for connecting electrical equipment."
      },
      {
        "type": "heading",
        "text": "Step 2: Design the test plan"
      },
      {
        "type": "paragraph",
        "text": "Decide how many measurements to collect for each reference."
      },
      {
        "type": "paragraph",
        "text": "For example, you might generate 20 simulated readings at every reference value."
      },
      {
        "type": "paragraph",
        "text": "Record the reference, sensor reading, simulated setup and trial number."
      },
      {
        "type": "paragraph",
        "text": "Define how you will calculate average error and measurement variation."
      },
      {
        "type": "paragraph",
        "text": "Write the test plan before generating results."
      },
      {
        "type": "heading",
        "text": "Step 3: Simulate two measurement systems"
      },
      {
        "type": "paragraph",
        "text": "Create two simulated sensors."
      },
      {
        "type": "paragraph",
        "text": "Sensor A: Produces highly consistent measurements but has a constant offset of approximately +0.20 volts."
      },
      {
        "type": "paragraph",
        "text": "Sensor B: Produces readings with greater variation but is centered around the correct reference."
      },
      {
        "type": "paragraph",
        "text": "Add a small amount of simulated measurement noise to each."
      },
      {
        "type": "paragraph",
        "text": "Preserve the rules used to generate the readings so the experiment can be reproduced."
      },
      {
        "type": "heading",
        "text": "Step 4: Analyze the results"
      },
      {
        "type": "paragraph",
        "text": "Use Python or a spreadsheet to calculate:"
      },
      {
        "type": "table",
        "caption": "Measurements to summarize",
        "columns": [
          "Measurement",
          "What it tells you"
        ],
        "rows": [
          [
            "Mean reading",
            "Average of repeated measurements"
          ],
          [
            "Mean error",
            "Difference between the average reading and reference"
          ],
          [
            "Standard deviation",
            "How much repeated measurements vary"
          ],
          [
            "Maximum observed error",
            "Largest absolute difference from the reference in the sample"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Create plots showing the readings for both simulated sensors at each reference value."
      },
      {
        "type": "paragraph",
        "text": "Compare whether one sensor is more repeatable and whether the measurements are centered around the reference."
      },
      {
        "type": "heading",
        "text": "Step 5: Investigate the errors"
      },
      {
        "type": "paragraph",
        "text": "Examine why Sensor A produces consistent but offset measurements."
      },
      {
        "type": "paragraph",
        "text": "Then modify the simulation so its error increases with the reference voltage instead of remaining constant."
      },
      {
        "type": "paragraph",
        "text": "Compare the two behaviors."
      },
      {
        "type": "paragraph",
        "text": "A constant offset may be addressed differently from an error that changes across the measurement range."
      },
      {
        "type": "paragraph",
        "text": "This demonstrates why testing at a single reference value may not fully characterize a measurement system."
      },
      {
        "type": "heading",
        "text": "Step 6: Evaluate a correction"
      },
      {
        "type": "paragraph",
        "text": "Develop a simple correction for the constant-offset sensor."
      },
      {
        "type": "paragraph",
        "text": "Use part of your simulated data to estimate the offset."
      },
      {
        "type": "paragraph",
        "text": "Then evaluate the correction on separate readings or reference conditions."
      },
      {
        "type": "paragraph",
        "text": "Compare the results before and after the correction."
      },
      {
        "type": "paragraph",
        "text": "Document whether the average error improved and what variation remained."
      },
      {
        "type": "heading",
        "text": "Step 7: Document the experiment"
      },
      {
        "type": "paragraph",
        "text": "Prepare a short technical report containing:"
      },
      {
        "type": "list",
        "items": [
          "The test objective.",
          "Sensor assumptions.",
          "Test conditions.",
          "Reference values.",
          "Measurement results.",
          "Graphs comparing the two sensors.",
          "The correction you evaluated.",
          "Limitations of the simulated experiment."
        ]
      },
      {
        "type": "paragraph",
        "text": "Explain which results came from simulation and what additional evidence would be required for physical hardware."
      },
      {
        "type": "heading",
        "text": "Step 8: Extend to real equipment"
      },
      {
        "type": "paragraph",
        "text": "For an optional hands-on extension, repeat a suitable part of the workflow using a low-voltage educational sensor and laboratory measurement equipment."
      },
      {
        "type": "paragraph",
        "text": "Follow the equipment manufacturer's instructions and use an appropriately supervised environment."
      },
      {
        "type": "paragraph",
        "text": "Record the instrument settings, hardware configuration and test conditions."
      },
      {
        "type": "paragraph",
        "text": "Compare the physical measurements with what you observed in simulation."
      },
      {
        "type": "paragraph",
        "text": "This extension helps demonstrate how real-world measurements introduce challenges that simplified models may not capture."
      },
      {
        "type": "heading",
        "text": "What to include in your portfolio"
      },
      {
        "type": "list",
        "items": [
          "A written test plan.",
          "Python source code or spreadsheet formulas.",
          "The simulated measurement dataset.",
          "Plots comparing measured and reference values.",
          "Calculations of error and variation.",
          "A before-and-after evaluation of the correction.",
          "A short technical report explaining the findings.",
          "Physical measurements and test setup photographs, if you complete the hardware extension."
        ]
      },
      {
        "type": "heading",
        "text": "An optional advanced extension"
      },
      {
        "type": "paragraph",
        "text": "Expand the project into an automated test bench."
      },
      {
        "type": "paragraph",
        "text": "Create a Python program that runs several simulated test conditions, identifies readings outside defined limits and generates a report."
      },
      {
        "type": "paragraph",
        "text": "Introduce occasional missing measurements or simulated instrument failures."
      },
      {
        "type": "paragraph",
        "text": "Demonstrate that the software can distinguish an invalid test from a component that failed its measurement criteria."
      },
      {
        "type": "paragraph",
        "text": "This introduces an important aspect of production hardware testing: reliable test equipment must identify problems in its own measurement process, not simply report whether the product passed or failed."
      }
    ]
  }
],
 nextSteps:{
  "id": "next-steps",
  "heading": "Where to go next",
  "paragraphs": [],
  "sourceIds": [
    "ni-measurements",
    "nist-handbook",
    "python"
  ],
  "blocks": [
    {
      "type": "resources",
      "items": [
        {
          "title": "National Instruments: Technical Resources",
          "href": "https://www.ni.com/en/shop/data-acquisition/measurement-fundamentals.html",
          "description": "Explore instrumentation, data acquisition and automated test engineering concepts."
        },
        {
          "title": "NIST: Measurement Science",
          "href": "https://www.itl.nist.gov/div898/handbook/mpc/mpc_d.htm",
          "description": "Learn about measurement accuracy, calibration, uncertainty and the principles behind reliable engineering measurements."
        },
        {
          "title": "Python: Official Tutorial",
          "href": "https://docs.python.org/3/tutorial/",
          "description": "Build programming skills that can be applied to test automation, data processing and technical reporting."
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Start with one measurable engineering question."
    },
    {
      "type": "paragraph",
      "text": "Once you can design a repeatable test, collect reliable evidence and explain what the results mean, move toward more advanced projects involving mechanical components, electronic circuits and robotic systems."
    }
  ]
},
 researchNotes:[
  'Employer advertisements were collected November 2, 2026. Fourteen complete stored sources across nine employers were contextually reviewed November 10, with one additional boundary review. The original primary cohort contains 27 advertisements across fourteen employers. It is a dated selected sample, not a current vacancy count or skill-frequency study. Source archives and classifications remain unchanged.',
  'The guide covers mechanical/electrical component validation, characterization, reliability tests, measurement quality, fixtures and physical production-test engineering. Manufacturing-test roles are included when test equipment, automation and physical fault isolation are central. Pure manufacturing software orchestration and primary autonomy-behavior V&V remain distinct. Zoox’s Systems Integration title belongs to its Manufacturing Test and Diagnostics team. The Physical Intelligence Production Test Lead is excluded as primarily software-platform architecture.',
  'The compensation estimate is the median of six eligible annual USD salary-range midpoints across four employers, rounded to the nearest $1,000 with halves upward. Five ranges have an explicit annual period in body text; Zoox uses an official structured annual field. The exact median is $182,750 and the estimate is $183,000. Two Boston Dynamics and two Skydio requisitions are distinct technical scopes or experience levels, alongside Figure and Zoox. Bonus and equity are excluded; observations are labeled annual advertised salary because source fields do not uniformly establish base-pay treatment.',
  'The purposive pay sample concentrates on experienced electrical/manufacturing-test roles, with California and Massachusetts locations. It is not an entry-level rate or representative market median. Mechanical and prototype positions without verified annual pay do not contribute. Gatik, Skild and Zipline ranges lack an explicitly verified annual salary period; annual-bonus wording is not evidence of salary frequency. Complete eligible observations and exclusions are downloadable.',
  'The measurement graphic is invented. Each setup has five readings of an exact simulated 5.00 V reference. Setup A has mean 5.20 V and sample range 0.04 V; Setup B has mean 5.00 V and sample range 0.08 V. Vertical staggering only separates points visually. No confidence interval, full uncertainty budget, real instrument performance or calibration certificate is implied. Real references have uncertainty and practical measurements depend on range, time, environment, setup and other conditions. A sample mean at one reference does not establish unbiasedness or overall fitness for use.',
  'The portfolio is a software model with known generation rules; its correction exercise is not an instrument calibration procedure. The cover is a conceptual cutaway of invented hardware. NIST and NI supply the technical measurement references; employer comparisons describe the dated advertisements. Official Apptronik and Figure pages and learning resources were checked November 10.',
 ],
 citations:[
  source('study','Black Scarab: November employer research','/research/physical-ai-careers-2026-11-02.json','Dated aggregate and original role definitions.'),
  source('evidence','Reviewed Hardware Test engineering evidence',evidencePath,'Fourteen contextual source reviews, qualification context and original provenance.'),
  source('compensation','Hardware Test Engineer compensation derivation','/research/hardware-test-engineer-compensation-2026-11-02.json','Six annual observations, source clauses and exclusions.'),
  source('measurement-model','Illustrative measurement comparison','/research/hardware-test-measurement-example-2026-11-10.json','Exact reference, repeated readings and model assumptions.'),
  posting('agile',0),posting('apptronik-dexterity',1),posting('apptronik-components',2),posting('boston-manufacturing',3),posting('boston-electrical',4),posting('figure',5),posting('gatik',6),posting('skild',7),posting('skydio-staff',8),posting('skydio-senior',9),posting('zipline-motors',10),posting('zipline-electrical',11),posting('zipline-power',12),posting('zoox',13),
  source('nist-uncertainty','NIST TN 1297: Components of measurement uncertainty','https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-2-classification-components-uncertainty','Official reference on quantitative measurement uncertainty and its distinction from measurement error.'),
  source('nist-bias','NIST: Analysis of bias','https://www.itl.nist.gov/div898/handbook/mpc/section4/mpc45.htm','Reference standards, measurement bias and effects of working conditions.'),
  source('nist-terms','NIST TN 1297: Measurement terminology','https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-d1-terminology','Definitions of repeatability, reproducibility and measurement accuracy.'),
  source('nist-handbook','NIST: Measurement Process Characterization','https://www.itl.nist.gov/div898/handbook/mpc/mpc_d.htm','Engineering statistics reference on measurement processes and calibration.'),
  source('ni-measurements','NI: Measurement Fundamentals','https://www.ni.com/en/shop/data-acquisition/measurement-fundamentals.html','Official instrument, sensor, signal and measurement tutorials.'),
  source('ni-daq','NI: DAQ and Sensor I/O','https://www.ni.com/en/shop/hardware-portfolio/daq-sensor-io.html','Data acquisition, signal types and instrument selection considerations.'),
  source('python','Python: The Python Tutorial','https://docs.python.org/3/tutorial/','Official introduction for readers with basic programming experience.'),
 ],
};
