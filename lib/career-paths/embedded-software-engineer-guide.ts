import type { CareerGuideContent, Citation } from '@/lib/career-paths/types';
import { researchForRole } from '@/lib/career-paths/research';
import evidence from '@/public/research/embedded-software-engineer-evidence-2026-11-09.json';
import compensation from '@/public/research/embedded-software-engineer-compensation-2026-11-02.json';
import decisions from '@/research/seo/2026-11-09/decisions.json';

const role=researchForRole('embedded-software-engineer',evidence.snapshotId);
if(!role||compensation.snapshotId!==evidence.snapshotId)throw new Error('Embedded guide research mismatch');
const seo=decisions.guides.find(item=>item.occupationId==='embedded-software-engineer');
if(!seo)throw new Error('Missing embedded software SEO decision');
const salary=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(compensation.estimate);
const evidencePath='/research/embedded-software-engineer-evidence-2026-11-09.json';
const compensationPath='/research/embedded-software-engineer-compensation-2026-11-02.json';
const zephyr='https://docs.zephyrproject.org/latest/develop/getting_started/index.html';
const scheduling='https://docs.zephyrproject.org/latest/kernel/services/scheduling/index.html';
const pico='https://www.raspberrypi.com/documentation/microcontrollers/c_sdk.html';
const freertos='https://docs.aws.amazon.com/freertos/latest/userguide/dev-guide-freertos-kernel.html';
const source=(id:string,title:string,url:string,scope:string):Citation=>({id,title,url,scope,accessedAt:'2026-11-09'});
const posting=(id:string,recordId:string):Citation=>{
  const record=evidence.records.find(item=>item.id===recordId);
  if(!record)throw new Error(`Missing embedded evidence: ${recordId}`);
  return source(id,`${record.employer}: ${record.title}`,record.url,'Employer advertisement collected November 2, 2026; contextual review, qualifications and original source hashes are preserved in the evidence export.');
};

export const embeddedSoftwareEngineerGuide:CareerGuideContent={
  id:'embedded-software-engineer',occupationId:'embedded-software-engineer',familyId:'hardware-manufacturing',slug:'embedded-software-engineer',
  title:seo.h1,seoTitle:seo.seoTitle,description:seo.description,status:'published',publishedAt:'2026-11-09',reviewedAt:'2026-11-09',
  research:{snapshotId:evidence.snapshotId,roleId:'embedded-software-engineer',evidencePath},
  deck:"Write the software that connects a robot's hardware to its intelligence, controlling how sensors, motors and onboard computers operate.",
  introduction:["Imagine a humanoid robot reaching for a glass. Its sensors measure the position of its fingers, its motor controllers adjust the movement, and its onboard computer coordinates the action."],
  illustration:{src:'/career-paths/embedded-software-engineer-lab.webp',width:1672,height:941,alt:'Conceptual illustration of an opened robotic forearm showing a microcontroller board, debug connection and sensor wiring, with white and graphite hardware and lime-green accents.'},
  overview:[
    {label:'What you do',value:'Develop the low-level software that controls robotic hardware and connects devices',sourceIds:['gram','skydio','apptronik']},
    {label:'Core skills',value:'C, C++, real-time systems, device drivers and hardware debugging',sourceIds:['gram','apptronik','boston']},
    {label:'Education',value:'Typically computer science, computer engineering, electrical engineering or equivalent experience',sourceIds:['gram','sunday','zoox']},
    {label:'Compensation',value:`${salary}/year`,detail:'Black Scarab estimate',sourceIds:['compensation']},
  ],
  sections:[
  {
    "id": "day-to-day",
    "heading": "What does an embedded software engineer do in robotics?",
    "navLabel": "The work",
    "paragraphs": [],
    "sourceIds": [
      "gram",
      "apptronik",
      "apptronik-linux",
      "fieldai",
      "skydio",
      "boston",
      "sunday",
      "scheduling"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Imagine a humanoid robot reaching for a glass. Its sensors measure the position of its fingers, its motor controllers adjust the movement, and its onboard computer coordinates the action."
      },
      {
        "type": "paragraph",
        "text": "For that process to work, dozens of electronic components must exchange information quickly and reliably."
      },
      {
        "type": "paragraph",
        "text": "Embedded software engineers write the code that makes those interactions possible."
      },
      {
        "type": "paragraph",
        "text": "Unlike traditional software engineers who might develop websites or mobile applications, embedded engineers work on software that runs directly on electronic devices and interacts with physical hardware."
      },
      {
        "type": "paragraph",
        "text": "Their work includes reading sensors, controlling motors, managing communication between components and making sure a robot responds correctly when something goes wrong."
      },
      {
        "type": "paragraph",
        "text": "A small software error can have physical consequences. If a motor receives incorrect commands or a sensor stops reporting its position, the robot may move incorrectly or be forced to stop."
      },
      {
        "type": "heading",
        "text": "Two areas of embedded software engineering"
      },
      {
        "type": "table",
        "caption": "Embedded specializations",
        "columns": [
          "Specialization",
          "What engineers work on"
        ],
        "rows": [
          [
            "Microcontroller firmware",
            "Software running on small processors that communicate with sensors, motors and other electronics"
          ],
          [
            "Embedded Linux and onboard computing",
            "Operating systems, hardware drivers and software that support a robot's larger onboard computers"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These areas overlap, but they involve different responsibilities."
      },
      {
        "type": "paragraph",
        "text": "An engineer developing motor-control firmware may focus on precise timing and communication with actuators."
      },
      {
        "type": "paragraph",
        "text": "Another engineer might work on the onboard computer, ensuring that cameras, sensors and communication interfaces operate correctly under Linux."
      },
      {
        "type": "paragraph",
        "text": "Companies such as Apptronik advertise roles across both specialties, while GRAM's embedded software work spans microcontrollers and onboard robotics systems."
      },
      {
        "type": "heading",
        "text": "What does a typical day look like?"
      },
      {
        "type": "paragraph",
        "text": "Embedded software engineering combines programming with hands-on hardware work."
      },
      {
        "type": "paragraph",
        "text": "An engineer might begin the morning developing software that reads measurements from a new sensor."
      },
      {
        "type": "paragraph",
        "text": "After writing the code, they connect the sensor to a development board and test whether the readings arrive correctly."
      },
      {
        "type": "paragraph",
        "text": "If the sensor stops responding, they may use debugging equipment to determine whether the problem comes from the hardware, communication interface or software."
      },
      {
        "type": "paragraph",
        "text": "Later, they might review another engineer's code, run automated tests or investigate why a robot occasionally misses a timing requirement."
      },
      {
        "type": "paragraph",
        "text": "Some days involve bringing new hardware to life for the first time, a process known as hardware bring-up."
      },
      {
        "type": "paragraph",
        "text": "This can involve configuring processors, testing connections and working closely with electrical engineers to identify problems."
      },
      {
        "type": "paragraph",
        "text": "A typical development cycle includes:"
      },
      {
        "type": "list",
        "items": [
          "Understand the hardware. Read technical documentation and determine how a device should operate.",
          "Write the software. Develop firmware, drivers or other low-level code.",
          "Test communication. Confirm that processors, sensors and controllers exchange information correctly.",
          "Investigate failures. Use software debuggers and electrical instruments to identify problems.",
          "Improve reliability. Test timing, unexpected inputs and recovery from faults.",
          "Prepare for deployment. Integrate the software into a robot and verify that it operates on the intended hardware."
        ],
        "ordered": true
      },
      {
        "type": "paragraph",
        "text": "Embedded engineers often spend as much time investigating why something fails as they do writing new code."
      },
      {
        "type": "heading",
        "text": "When a robot responds too slowly"
      },
      {
        "type": "paragraph",
        "text": "Consider a robotic arm that must respond to a sensor measurement within 10 milliseconds."
      },
      {
        "type": "paragraph",
        "text": "Most of the time, its software processes the measurement and sends the appropriate command in six milliseconds."
      },
      {
        "type": "paragraph",
        "text": "But occasionally, the response takes 13 milliseconds."
      },
      {
        "type": "paragraph",
        "text": "The software produces the correct result, but it arrives too late."
      },
      {
        "type": "timing-budget",
        "id": "embedded-timing-budget",
        "title": "A correct response can still arrive late",
        "deadlineMs": 10,
        "scaleMs": 13,
        "rows": [
          {
            "label": "On time",
            "segments": [
              {
                "label": "Read",
                "kind": "read",
                "durationMs": 2
              },
              {
                "label": "Process",
                "kind": "process",
                "durationMs": 3
              },
              {
                "label": "Send",
                "kind": "send",
                "durationMs": 1
              }
            ]
          },
          {
            "label": "Delayed response",
            "segments": [
              {
                "label": "Read",
                "kind": "read",
                "durationMs": 2
              },
              {
                "label": "Wait",
                "kind": "wait",
                "durationMs": 7
              },
              {
                "label": "Process",
                "kind": "process",
                "durationMs": 3
              },
              {
                "label": "Send",
                "kind": "send",
                "durationMs": 1
              }
            ]
          }
        ],
        "note": "Illustrative response timeline. Segment values are milliseconds."
      },
      {
        "type": "paragraph",
        "text": "Both responses produce the correct result. But a 7 ms delay pushes the second response past its 10 ms deadline. In robotics, timing can matter as much as accuracy."
      }
    ]
  },
  {
    "id": "embedded-software-vs-other-roles",
    "heading": "How is embedded software different from other robotics careers?",
    "navLabel": "Related careers",
    "paragraphs": [],
    "sourceIds": [
      "gram",
      "apptronik",
      "apptronik-linux",
      "fieldai"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Embedded software sits between a robot's physical electronics and the higher-level software responsible for its behavior."
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
            "Electrical Engineer",
            "Designs circuits, circuit boards and electrical systems"
          ],
          [
            "Embedded Software Engineer",
            "Writes software that runs on and communicates with electronic hardware"
          ],
          [
            "Controls Engineer",
            "Develops algorithms that regulate movement and other physical behavior"
          ],
          [
            "Robotics Software Engineer",
            "Develops broader software systems that support robot operation"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "For example, an electrical engineer might design the circuit board that controls a robot's motor."
      },
      {
        "type": "paragraph",
        "text": "A controls engineer develops an algorithm that determines how much force the motor should produce."
      },
      {
        "type": "paragraph",
        "text": "The embedded engineer implements the low-level software that communicates with the controller, manages timing and handles hardware faults."
      },
      {
        "type": "paragraph",
        "text": "These responsibilities can overlap. Smaller robotics companies may expect engineers to work across several disciplines."
      }
    ]
  },
  {
    "id": "skills",
    "heading": "Which skills and tools do employers look for?",
    "navLabel": "Skills & tools",
    "paragraphs": [],
    "sourceIds": [
      "gram",
      "apptronik",
      "apptronik-linux",
      "fieldai",
      "skydio",
      "sunday",
      "boston",
      "rhoda",
      "scheduling",
      "freertos"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "C and C++ programming"
      },
      {
        "type": "paragraph",
        "text": "C and C++ are among the most important programming languages in embedded systems."
      },
      {
        "type": "paragraph",
        "text": "They allow engineers to work closely with hardware, manage memory and build software that operates efficiently on processors with limited resources."
      },
      {
        "type": "paragraph",
        "text": "Important concepts include pointers, memory management, data structures and concurrency."
      },
      {
        "type": "paragraph",
        "text": "Unlike many higher-level programming environments, embedded systems frequently require engineers to think carefully about how much memory their software uses and what happens when several operations occur at once."
      },
      {
        "type": "paragraph",
        "text": "Python is also useful, particularly for test automation, diagnostic tools and data analysis."
      },
      {
        "type": "heading",
        "text": "Real-time systems"
      },
      {
        "type": "paragraph",
        "text": "Robots operate in the physical world, where timing matters."
      },
      {
        "type": "paragraph",
        "text": "A sensor reading that arrives too late may no longer describe the robot's current position. A delayed motor command may affect how smoothly the machine moves."
      },
      {
        "type": "paragraph",
        "text": "Real-time software is designed to satisfy specific timing requirements."
      },
      {
        "type": "paragraph",
        "text": "Engineers need to understand how processors schedule tasks, respond to interrupts and manage competing operations."
      },
      {
        "type": "paragraph",
        "text": "An interrupt allows hardware to notify a processor that something needs attention, such as a sensor producing a new measurement."
      },
      {
        "type": "paragraph",
        "text": "A real-time operating system (RTOS) helps coordinate software tasks that have timing requirements."
      },
      {
        "type": "paragraph",
        "text": "Common examples include FreeRTOS and Zephyr."
      },
      {
        "type": "paragraph",
        "text": "Not every embedded application requires an RTOS, but understanding real-time behavior is particularly useful in robotics."
      },
      {
        "type": "heading",
        "text": "Device drivers and communication interfaces"
      },
      {
        "type": "paragraph",
        "text": "A device driver is software that allows a processor or operating system to communicate with a hardware component."
      },
      {
        "type": "paragraph",
        "text": "For example, a robot might have a sensor that measures the position of a joint."
      },
      {
        "type": "paragraph",
        "text": "An embedded engineer develops or integrates the software that reads the measurement and makes it available to other parts of the robot."
      },
      {
        "type": "paragraph",
        "text": "Different components use different communication interfaces."
      },
      {
        "type": "table",
        "caption": "Communication interfaces",
        "columns": [
          "Interface",
          "Common application"
        ],
        "rows": [
          [
            "I2C",
            "Connecting sensors and small electronic devices"
          ],
          [
            "SPI",
            "High-speed communication between nearby electronic components"
          ],
          [
            "UART",
            "Serial communication between processors and devices"
          ],
          [
            "CAN",
            "Reliable communication between controllers and robotic subsystems"
          ],
          [
            "EtherCAT",
            "Industrial automation and coordinated motion-control systems"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Engineers do not need to master every protocol immediately."
      },
      {
        "type": "paragraph",
        "text": "A stronger starting point is understanding one interface thoroughly, including how it works, how to diagnose failures and how to recover when communication is interrupted."
      },
      {
        "type": "heading",
        "text": "Hardware debugging"
      },
      {
        "type": "paragraph",
        "text": "Embedded software engineers frequently investigate problems that cannot be solved by reading code alone."
      },
      {
        "type": "paragraph",
        "text": "A sensor may be connected incorrectly, an electrical signal may contain unexpected noise, or a processor may not be configured properly."
      },
      {
        "type": "paragraph",
        "text": "Engineers use several tools to examine what is happening."
      },
      {
        "type": "table",
        "caption": "Development and diagnostic tools",
        "columns": [
          "Tool",
          "What it helps diagnose"
        ],
        "rows": [
          [
            "Software debugger",
            "Code execution, processor state and memory"
          ],
          [
            "Logic analyzer",
            "Digital communication between electronic components"
          ],
          [
            "Oscilloscope",
            "Electrical signals and timing behavior"
          ],
          [
            "Multimeter",
            "Voltage, resistance and basic electrical measurements"
          ],
          [
            "Development board",
            "Testing software on physical processors"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Reading electrical schematics is also valuable, even when the engineer is not responsible for designing the circuit."
      },
      {
        "type": "paragraph",
        "text": "Companies such as Apptronik and GRAM emphasize the connection between firmware development, hardware bring-up and practical debugging."
      },
      {
        "type": "heading",
        "text": "Embedded Linux"
      },
      {
        "type": "paragraph",
        "text": "Many advanced robots use onboard computers running Linux."
      },
      {
        "type": "paragraph",
        "text": "These systems support cameras, communication networks, sensors and other software that requires more computing power than a small microcontroller can provide."
      },
      {
        "type": "paragraph",
        "text": "Embedded Linux engineers work on the operating system and its relationship with the hardware."
      },
      {
        "type": "paragraph",
        "text": "Their responsibilities may include configuring the boot process, developing device drivers, maintaining board support packages and preparing software images for production."
      },
      {
        "type": "paragraph",
        "text": "A board support package (BSP) contains software and configuration needed to run an operating system on a particular hardware platform."
      },
      {
        "type": "paragraph",
        "text": "Embedded Linux work requires stronger operating-system knowledge than a typical introductory microcontroller project."
      },
      {
        "type": "heading",
        "text": "Testing and fault recovery"
      },
      {
        "type": "paragraph",
        "text": "Robots must continue operating safely and predictably when hardware or software behaves unexpectedly."
      },
      {
        "type": "paragraph",
        "text": "Embedded engineers test scenarios such as:"
      },
      {
        "type": "list",
        "items": [
          "A sensor stops sending measurements.",
          "Communication between two processors is interrupted.",
          "A software task takes longer than expected.",
          "A processor runs out of available memory.",
          "A firmware update fails before completion."
        ],
        "ordered": false
      },
      {
        "type": "paragraph",
        "text": "Systems may use watchdog timers, error handling, fallback behavior and recovery procedures to detect or respond to faults."
      },
      {
        "type": "paragraph",
        "text": "Engineers also perform hardware-in-the-loop testing, which connects software tests to physical electronics."
      },
      {
        "type": "paragraph",
        "text": "This helps identify problems that might not appear when the software runs only on a computer."
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
      "gram",
      "apptronik",
      "sunday",
      "zoox",
      "skydio"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Computer engineering, electrical engineering and computer science are common degree pathways."
      },
      {
        "type": "paragraph",
        "text": "Computer engineering is particularly relevant because it combines programming, computer architecture and electronics."
      },
      {
        "type": "paragraph",
        "text": "Electrical engineering provides a strong foundation in circuits and hardware, while computer science emphasizes programming, algorithms and operating systems."
      },
      {
        "type": "paragraph",
        "text": "Employers may also accept equivalent practical experience."
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
            "Applied Intuition",
            "Relevant technical degree, C/C++ programming and low-level debugging for a new-graduate role"
          ],
          [
            "GRAM",
            "Relevant bachelor's degree or equivalent experience developing embedded software"
          ],
          [
            "Sunday Robotics",
            "Relevant degree or equivalent experience with embedded Linux development"
          ],
          [
            "Zoox",
            "Relevant technical education or equivalent experience, including hands-on embedded work"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "The qualifications vary depending on the position."
      },
      {
        "type": "paragraph",
        "text": "An engineer developing a Linux platform may need deeper operating-system experience, while a motor-control firmware position may emphasize real-time systems and processor-level programming."
      },
      {
        "type": "heading",
        "text": "What should you study?"
      },
      {
        "type": "paragraph",
        "text": "A useful technical foundation includes:"
      },
      {
        "type": "list",
        "items": [
          "C and C++ programming, including pointers and memory management.",
          "Computer architecture, processors and digital electronics.",
          "Operating systems, concurrency and real-time scheduling.",
          "Sensors, communication protocols and device drivers.",
          "Software testing and hardware debugging."
        ],
        "ordered": false
      },
      {
        "type": "paragraph",
        "text": "Practical experience matters because embedded programming involves interactions that are difficult to understand through software exercises alone."
      },
      {
        "type": "paragraph",
        "text": "Building a small working system and investigating its failures can provide valuable experience before applying for a professional position."
      },
      {
        "type": "heading",
        "text": "Can you enter without an engineering degree?"
      },
      {
        "type": "paragraph",
        "text": "Some employers consider candidates with equivalent technical experience."
      },
      {
        "type": "paragraph",
        "text": "However, embedded software development requires a strong understanding of programming and computer systems."
      },
      {
        "type": "paragraph",
        "text": "Someone entering from another profession should begin with programming fundamentals, then study digital electronics and microcontrollers."
      },
      {
        "type": "paragraph",
        "text": "From there, they can develop increasingly complex projects involving sensors, communication and real-time behavior."
      },
      {
        "type": "paragraph",
        "text": "A short course may introduce the field, but professional embedded development usually requires deeper technical preparation."
      }
    ]
  },
  {
    "id": "salary",
    "heading": "How much do embedded software engineers in robotics earn?",
    "navLabel": "Compensation",
    "paragraphs": [],
    "sourceIds": [
      "compensation",
      "applied",
      "gram",
      "sunday"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Embedded software engineering combines specialized programming with an understanding of electronics and robotic systems."
      },
      {
        "type": "paragraph",
        "text": "Compensation depends on experience, technical responsibilities and the complexity of the hardware being developed."
      },
      {
        "type": "paragraph",
        "text": "Black Scarab estimates annual compensation at $205,000 based on reviewed U.S. robotics employer advertisements."
      },
      {
        "type": "compensation",
        "caption": "Selected U.S. salary advertisements",
        "note": "Annual advertised salary · collected November 2, 2026",
        "examples": evidence.roles['embedded-software-engineer'].compensation
      },
      {
        "type": "heading",
        "text": "What influences compensation?"
      },
      {
        "type": "paragraph",
        "text": "Experience and technical ownership. Compare each role’s responsibility for complete embedded systems, production firmware and complex hardware platforms."
      },
      {
        "type": "paragraph",
        "text": "Specialization. Expertise in real-time systems, embedded Linux, device drivers and motor-control firmware can be valuable for specialized robotics positions."
      },
      {
        "type": "paragraph",
        "text": "Production experience. Employers value engineers who have shipped software on physical hardware and resolved problems encountered during testing or deployment."
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
        "text": "Early-career engineers often begin by developing device drivers, testing components and contributing to existing firmware projects."
      },
      {
        "type": "paragraph",
        "text": "With experience, they take ownership of complete subsystems, including their software design, testing and integration."
      },
      {
        "type": "paragraph",
        "text": "Senior and staff engineers may define embedded software architecture, make decisions affecting multiple processors and lead technically complex hardware-software development projects."
      }
    ]
  },
  {
    "id": "employers",
    "heading": "Which companies hire embedded software engineers?",
    "navLabel": "Employers & titles",
    "paragraphs": [],
    "sourceIds": [
      "apptronik",
      "apptronik-linux",
      "boston",
      "sunday",
      "fieldai",
      "skydio",
      "zoox",
      "applied",
      "gram"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Embedded software engineers work across humanoid robotics, autonomous vehicles, drones and other intelligent machines."
      },
      {
        "type": "paragraph",
        "text": "The underlying skills are transferable, although the hardware and software requirements differ between applications."
      },
      {
        "type": "heading",
        "text": "Humanoid and home robotics"
      },
      {
        "type": "paragraph",
        "text": "Apptronik, Boston Dynamics and Sunday Robotics develop robotic systems that require embedded software for actuators, sensors and onboard computing."
      },
      {
        "type": "paragraph",
        "text": "Engineers may work on motor-control firmware, device communication, operating-system configuration and fault handling."
      },
      {
        "type": "paragraph",
        "text": "Humanoid robots introduce demanding requirements because many joints and sensors must operate together within limited space and power budgets."
      },
      {
        "type": "heading",
        "text": "Autonomous vehicles and drones"
      },
      {
        "type": "paragraph",
        "text": "Zoox, Applied Intuition and Skydio provide examples of organizations developing embedded systems for autonomous machines."
      },
      {
        "type": "paragraph",
        "text": "Their work can include microcontrollers, vehicle electronics, sensor interfaces and onboard computing platforms."
      },
      {
        "type": "paragraph",
        "text": "Reliability, communication and predictable behavior are particularly important when software directly supports physical movement."
      },
      {
        "type": "heading",
        "text": "Robotic computing and distributed systems"
      },
      {
        "type": "paragraph",
        "text": "FieldAI and GRAM develop systems involving embedded computing, sensors, actuators and robotics software infrastructure."
      },
      {
        "type": "paragraph",
        "text": "These positions may involve connecting multiple processors and electronic subsystems into a reliable platform."
      },
      {
        "type": "heading",
        "text": "Related job titles"
      },
      {
        "type": "paragraph",
        "text": "Relevant searches include Embedded Software Engineer, Firmware Engineer, Robotics Firmware Engineer, Embedded Linux Engineer and Board Support Package Engineer."
      },
      {
        "type": "paragraph",
        "text": "Some positions focus on motor-control firmware, while others emphasize sensors, operating systems or communication interfaces."
      },
      {
        "type": "paragraph",
        "text": "Read the responsibilities carefully. A general embedded software title can describe several different specialties."
      }
    ]
  },
  {
    "id": "transition",
    "heading": "How to transition into robotics embedded software",
    "navLabel": "Career transitions",
    "paragraphs": [],
    "sourceIds": [
      "gram",
      "fieldai",
      "apptronik",
      "skydio",
      "zoox"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "The most practical route depends on your existing technical background."
      },
      {
        "type": "table",
        "caption": "Routes into robotics embedded software",
        "columns": [
          "Your background",
          "Skills to prioritize",
          "Suggested project"
        ],
        "rows": [
          [
            "Software engineering",
            "C/C++, hardware interfaces and real-time systems",
            "Build a microcontroller-based sensor application"
          ],
          [
            "Electrical engineering",
            "Software architecture, C/C++ and automated testing",
            "Develop firmware for an electronic circuit"
          ],
          [
            "Robotics or controls engineering",
            "Device drivers, interrupts and timing",
            "Implement and test a control-related interface"
          ],
          [
            "IT or systems engineering",
            "Computer architecture, embedded Linux and hardware interfaces",
            "Configure Linux on a supported embedded board"
          ],
          [
            "Complete beginner",
            "Programming, digital electronics and microcontrollers",
            "Build a simple sensor-reading application"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "If you already work in software engineering"
      },
      {
        "type": "paragraph",
        "text": "Your programming experience provides a useful foundation."
      },
      {
        "type": "paragraph",
        "text": "Focus on the differences between application software and embedded development, particularly memory management, hardware communication and timing."
      },
      {
        "type": "paragraph",
        "text": "Start with a small microcontroller project that interacts with a physical sensor."
      },
      {
        "type": "paragraph",
        "text": "Demonstrate that you can write reliable code, handle unexpected inputs and debug problems on actual hardware."
      },
      {
        "type": "heading",
        "text": "If you come from electrical engineering"
      },
      {
        "type": "paragraph",
        "text": "Your understanding of circuits, signals and electronic components is directly relevant."
      },
      {
        "type": "paragraph",
        "text": "Develop stronger programming skills, particularly in C and C++, along with software testing and architecture."
      },
      {
        "type": "paragraph",
        "text": "A project involving a sensor or motor controller can demonstrate how your hardware knowledge translates into firmware development."
      },
      {
        "type": "heading",
        "text": "If you work in robotics or controls"
      },
      {
        "type": "paragraph",
        "text": "You may already understand how robots use sensors, actuators and feedback algorithms."
      },
      {
        "type": "paragraph",
        "text": "Focus on the implementation layer that connects these algorithms to physical devices."
      },
      {
        "type": "paragraph",
        "text": "Learn how interrupts, communication interfaces and software scheduling affect the behavior of a real system."
      },
      {
        "type": "heading",
        "text": "If you are starting from scratch"
      },
      {
        "type": "paragraph",
        "text": "Begin with C programming and introductory digital electronics."
      },
      {
        "type": "paragraph",
        "text": "Learn how processors execute instructions, interact with memory and communicate with external devices."
      },
      {
        "type": "paragraph",
        "text": "Then move to a development board and simple projects involving sensors, buttons or LEDs."
      },
      {
        "type": "paragraph",
        "text": "Build complexity gradually. A well-tested sensor application is a better starting point than attempting to develop firmware for an entire robot."
      },
      {
        "type": "heading",
        "text": "What matters in an interview?"
      },
      {
        "type": "paragraph",
        "text": "Embedded software interviews often combine programming questions with hardware and systems concepts."
      },
      {
        "type": "paragraph",
        "text": "You may be asked how memory works, how to investigate an unresponsive device, or what happens when two tasks access the same data."
      },
      {
        "type": "paragraph",
        "text": "Employers may also ask about interrupts, timing requirements and communication failures."
      },
      {
        "type": "paragraph",
        "text": "Prepare one example of a problem you investigated."
      },
      {
        "type": "paragraph",
        "text": "Explain the original symptoms, what you measured, how you identified the cause and what testing confirmed the solution."
      },
      {
        "type": "paragraph",
        "text": "The ability to explain an engineering decision clearly is often as valuable as demonstrating familiarity with a particular processor or development board."
      }
    ]
  },
  {
    "id": "portfolio",
    "heading": "Build your first embedded software project",
    "navLabel": "Portfolio project",
    "paragraphs": [],
    "sourceIds": [
      "pico",
      "zephyr",
      "scheduling",
      "freertos"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Create a reliable sensor interface"
      },
      {
        "type": "paragraph",
        "text": "A useful beginner project is to build a small program that reads sensor measurements, checks whether they are valid and detects when information stops arriving."
      },
      {
        "type": "paragraph",
        "text": "This represents a real problem in robotics."
      },
      {
        "type": "paragraph",
        "text": "A robot needs to know whether a sensor measurement is current and trustworthy. Using an outdated or incorrect reading could cause the system to make a poor decision."
      },
      {
        "type": "paragraph",
        "text": "You can begin with simulated sensor measurements on a computer, then extend the project to a physical microcontroller."
      },
      {
        "type": "heading",
        "text": "Step 1: Define the interface"
      },
      {
        "type": "paragraph",
        "text": "Imagine a position sensor that reports a measurement at regular intervals."
      },
      {
        "type": "paragraph",
        "text": "Your software should receive:"
      },
      {
        "type": "list",
        "items": [
          "The sensor measurement.",
          "The measurement's timestamp.",
          "An indication of whether the reading is valid."
        ],
        "ordered": false
      },
      {
        "type": "paragraph",
        "text": "Define how frequently new readings should arrive and how old a measurement can become before it is considered stale."
      },
      {
        "type": "paragraph",
        "text": "For example, you might expect a new reading every 20 milliseconds and flag a fault when no fresh measurement has arrived within a specified timeout."
      },
      {
        "type": "heading",
        "text": "Step 2: Write the program"
      },
      {
        "type": "paragraph",
        "text": "Use C or C++ to process a sequence of measurements."
      },
      {
        "type": "paragraph",
        "text": "The program should recognize valid readings and report the latest accepted value."
      },
      {
        "type": "paragraph",
        "text": "Begin with a predictable set of simulated inputs so you know what the correct output should be."
      },
      {
        "type": "heading",
        "text": "Step 3: Introduce faults"
      },
      {
        "type": "paragraph",
        "text": "Create several scenarios:"
      },
      {
        "type": "table",
        "caption": "Sensor fault scenarios",
        "columns": [
          "Fault",
          "Expected behavior"
        ],
        "rows": [
          [
            "Missing measurement",
            "Report that new data has not arrived"
          ],
          [
            "Invalid value",
            "Reject the reading and identify the problem"
          ],
          [
            "Delayed measurement",
            "Detect when the information becomes stale"
          ],
          [
            "Communication recovery",
            "Recognize when valid measurements resume"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "The goal is to avoid silently treating incorrect or outdated information as reliable."
      },
      {
        "type": "heading",
        "text": "Step 4: Test the behavior"
      },
      {
        "type": "paragraph",
        "text": "Write automated tests for normal operation and each fault condition."
      },
      {
        "type": "paragraph",
        "text": "Use simulated timestamps so you can test timeout boundaries without relying on the timing of your computer."
      },
      {
        "type": "paragraph",
        "text": "Verify that the software reports the expected status in each scenario."
      },
      {
        "type": "heading",
        "text": "Step 5: Add a physical sensor"
      },
      {
        "type": "paragraph",
        "text": "For a more advanced version, use a Raspberry Pi Pico or another supported microcontroller development board."
      },
      {
        "type": "paragraph",
        "text": "Connect a compatible low-voltage sensor using a documented interface such as I2C."
      },
      {
        "type": "paragraph",
        "text": "Read its measurements and apply the validation logic developed in the earlier steps."
      },
      {
        "type": "paragraph",
        "text": "Use the manufacturer's wiring and electrical specifications."
      },
      {
        "type": "heading",
        "text": "Step 6: Measure performance"
      },
      {
        "type": "paragraph",
        "text": "Determine how long the system takes to receive and process a measurement."
      },
      {
        "type": "paragraph",
        "text": "If you have suitable debugging equipment, record the timing on the physical board."
      },
      {
        "type": "paragraph",
        "text": "Compare actual hardware measurements with your original expectations."
      },
      {
        "type": "paragraph",
        "text": "Simulated timing tests can verify program logic, but they do not establish how quickly code executes on physical hardware."
      },
      {
        "type": "heading",
        "text": "Step 7: Document your results"
      },
      {
        "type": "paragraph",
        "text": "Prepare a short technical report describing the interface, testing process and observed behavior."
      },
      {
        "type": "paragraph",
        "text": "Explain how the system responds when measurements are missing, invalid or delayed."
      },
      {
        "type": "paragraph",
        "text": "Include one example of a problem you encountered and how you resolved it."
      },
      {
        "type": "heading",
        "text": "What to include in your portfolio"
      },
      {
        "type": "list",
        "items": [
          "C or C++ source code and build instructions.",
          "A description of the sensor interface.",
          "Automated tests for valid and faulty measurements.",
          "A state diagram showing normal operation and recovery.",
          "Diagnostic logs from the test scenarios.",
          "Hardware measurements if you complete the physical extension.",
          "A short explanation of one failure and its correction."
        ],
        "ordered": false
      },
      {
        "type": "heading",
        "text": "An optional advanced extension"
      },
      {
        "type": "paragraph",
        "text": "Separate sensor acquisition from logging or data processing using an RTOS."
      },
      {
        "type": "paragraph",
        "text": "Introduce additional processing work and observe whether it affects the system's response time."
      },
      {
        "type": "paragraph",
        "text": "Measure missed deadlines, delayed readings or dropped data."
      },
      {
        "type": "paragraph",
        "text": "This demonstrates an important embedded engineering concept: software that operates correctly under light workloads may behave differently when several tasks compete for processor time."
      }
    ]
  }
],
  nextSteps:{
  "id": "next-steps",
  "heading": "Where to go next",
  "paragraphs": [],
  "sourceIds": [
    "pico",
    "zephyr",
    "freertos-book"
  ],
  "blocks": [
    {
      "type": "resources",
      "items": [
        {
          "title": "Raspberry Pi — Pico C/C++ SDK",
          "href": "https://www.raspberrypi.com/documentation/microcontrollers/c_sdk.html",
          "description": "Learn how to develop and run C or C++ applications on a supported microcontroller board."
        },
        {
          "title": "Zephyr — Getting Started",
          "href": "https://docs.zephyrproject.org/latest/develop/getting_started/index.html",
          "description": "Explore embedded development using a real-time operating system and learn how applications are built for supported hardware."
        },
        {
          "title": "FreeRTOS — Official Documentation",
          "href": "https://www.freertos.org/Documentation/02-Kernel/07-Books-and-manual/01-RTOS_book",
          "description": "Study real-time scheduling, task management and the fundamentals of RTOS-based software development."
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Start with one device interface that works reliably. Once you can explain how it communicates, how it handles failures and how its timing behaves, move toward more advanced robotics firmware involving multiple sensors, actuators or embedded Linux systems."
    }
  ]
},
  researchNotes:[
    `Black Scarab’s November 2, 2026 broad cohort contains ${role.postingCount} advertisements across ${role.employerCount} selected employers. Ten stored full sources were reviewed for this guide. The cohort also includes systems integration, infotainment and firmware-testing work. Skills and qualifications are contextual examples rather than clean profession-specific frequencies or live-opening totals. Original classifications remain unchanged.`,
    `The Black Scarab estimate is the median annual salary-range midpoint from ${compensation.postingCount} eligible U.S. advertisements across ${compensation.employerCount} employers, rounded to the nearest $1,000. The exact median midpoint is $${compensation.exactMedianMidpoint.toLocaleString('en-US')}. The sample mixes experience levels, including a new-graduate advertisement and senior/staff roles. It is not an entry-level estimate or representative industry median.`,
    'Primarily systems-integration, infotainment and firmware-test roles, mixed or unverified geography, and salaries without a verified annual period are excluded. Annual-bonus wording does not establish the period of a salary range. Structured advertised salary fields do not consistently identify base pay; bonus and equity are excluded. Distinct requisitions count separately. The linked derivation preserves observations, clauses, source hashes and exclusions.',
    'Employer examples describe advertisements collected November 2, 2026, not necessarily current vacancies. The live GRAM role was checked November 9. FieldAI’s reviewed position combines embedded software with compute-hardware integration; Skydio spans firmware and embedded Linux. The guide does not imply that every role requires every listed technology.',
    'The timing graphic uses illustrative elapsed-time arithmetic: 2 + 3 + 1 = 6 ms; inserting a 7 ms wait gives 13 ms against a 10 ms deadline. It is not an employer benchmark, measured latency or CPU-utilization chart. The gripper scenario, sensor project and hero are conceptual examples. Host-based simulated tests do not verify physical real-time behavior. Editorial review: November 9, 2026.',
  ],
  citations:[
    source('study','Black Scarab: November 2 employer research','/research/physical-ai-careers-2026-11-02.json','Pinned selected-employer aggregate and taxonomy.'),
    source('evidence','Embedded software engineering: reviewed employer evidence',evidencePath,'Full-source contextual reviews, qualifications and original source hashes.'),
    source('compensation','Black Scarab: robotics embedded software compensation estimate',compensationPath,'Eligible annual USD observations, median calculation and exclusions.'),
    posting('applied','applied-intuition:ashby:6971d533-1536-448b-96b8-544ad5383f44'),posting('apptronik','apptronik:greenhouse:6107174004'),
    posting('apptronik-linux','apptronik:greenhouse:6216214004'),posting('gram','gram:greenhouse:4364454009'),
    posting('fieldai','fieldai:lever:7a0d12c7-957b-42f6-a9c9-9605fab6d2a4'),posting('zoox','zoox:lever:46c23963-2be1-4037-8f1a-ce87bdccde6d'),
    posting('sunday','sunday:ashby:788d2c63-f5b7-447e-9d4d-7ab1a92e10f1'),posting('skydio','skydio:ashby:d415cf2b-616c-459e-9c5f-58a1b2c4a1bb'),
    posting('boston','boston-dynamics:workday:R2655'),posting('rhoda','rhoda:ashby:9372a5ff-6b6d-4e02-900a-939beb901110'),
    source('pico','Raspberry Pi: Pico C/C++ SDK',pico,'Official microcontroller SDK and development examples.'),
    source('zephyr','Zephyr: Getting Started Guide',zephyr,'Official environment, build and sample-application guide.'),
    source('scheduling','Zephyr: Scheduling',scheduling,'Official scheduler concepts. The timing diagram is illustrative editorial arithmetic.'),
    source('freertos','FreeRTOS: Kernel Fundamentals',freertos,'Official kernel overview covering scheduling, coordination and memory allocation.'),
    source('freertos-book','FreeRTOS: Books and Manuals',"https://www.freertos.org/Documentation/02-Kernel/07-Books-and-manual/01-RTOS_book",'Official learning resource for RTOS scheduling and task management.'),
  ],
};
