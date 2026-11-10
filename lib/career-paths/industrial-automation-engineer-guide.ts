import type {CareerGuideContent,Citation} from '@/lib/career-paths/types';
import {researchForRole} from '@/lib/career-paths/research';
import evidence from '@/public/research/industrial-automation-engineer-evidence-2026-11-09.json';
import compensation from '@/public/research/industrial-automation-engineer-compensation-2026-11-02.json';
import decisions from '@/research/seo/2026-11-09/decisions.json';

const roleId='industrial-automation-engineer';
const role=researchForRole(roleId,evidence.snapshotId);
if(!role||compensation.snapshotId!==evidence.snapshotId)throw new Error('Industrial automation research mismatch');
const seo=decisions.guides.find(item=>item.occupationId===roleId);
if(!seo)throw new Error('Missing industrial automation SEO decision');
const salary=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(compensation.estimate);
const evidencePath='/research/industrial-automation-engineer-evidence-2026-11-09.json';
const compensationPath='/research/industrial-automation-engineer-compensation-2026-11-02.json';
const stateMachine='https://infosys.beckhoff.com/content/1033/tc3_plc_intro/7647315979.html';
const simulation='https://content.helpme-codesys.com/en/CODESYS%20Development%20System/_cds_testing_in_simulation_mode.html';
const ignition='https://www.docs.inductiveautomation.com/docs/8.3/getting-started/introducing-ignition';
const robotSafety='https://www.osha.gov/otm/section-4-safety-hazards/chapter-4';
const source=(id:string,title:string,url:string,scope:string):Citation=>({id,title,url,scope,accessedAt:'2026-11-09'});
const posting=(id:string,recordId:string):Citation=>{
  const r=evidence.records.find(item=>item.id===recordId);
  if(!r)throw new Error(`Missing industrial automation evidence: ${recordId}`);
  return source(id,`${r.employer}: ${r.title}`,r.url,'Advertisement collected November 2, 2026. Full-source contextual review, qualification spans and original source hashes are preserved in the evidence export.');
};

export const industrialAutomationEngineerGuide:CareerGuideContent={
  id:roleId,occupationId:roleId,familyId:'integration-operations',slug:roleId,
  title:seo.h1,seoTitle:seo.seoTitle,description:seo.description,status:'published',publishedAt:'2026-11-10',reviewedAt:'2026-11-10',
  research:{snapshotId:evidence.snapshotId,roleId,evidencePath},
  deck:'Design and program the systems that allow robots, conveyors, sensors and manufacturing equipment to work together.',
  introduction:['Imagine a factory where a robotic arm picks up a component, places it on a conveyor and sends it to the next assembly station.'],
  illustration:{src:'/career-paths/industrial-automation-engineer-lab.webp',width:1672,height:941,alt:'Conceptual editorial illustration viewed from above: a serpentine silver conveyor connects robotic production stations, with cyan workpiece carriers crossing a sunlit gray factory floor.'},
  overview:[
    {label:'What you do',value:'Develop control systems that coordinate robots and automated production equipment',sourceIds:['osaro','intrinsic','skydio']},
    {label:'Core skills',value:'PLC programming, industrial networks, HMI and SCADA, electrical troubleshooting and commissioning',sourceIds:['osaro','skydio','anduril-senior']},
    {label:'Education',value:'Typically electrical engineering, mechatronics, industrial automation or related technical training',sourceIds:['intrinsic','agile','skydio']},
    {label:'Compensation',value:`${salary}/year`,detail:'Black Scarab estimate',sourceIds:['compensation']},
  ],
  sections:[
  {
    "id": "day-to-day",
    "heading": "What does an industrial automation engineer do?",
    "navLabel": "The work",
    "paragraphs": [],
    "sourceIds": [
      "osaro",
      "intrinsic",
      "agile",
      "skydio",
      "anduril",
      "state-machine",
      "robot-safety"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Imagine a factory where a robotic arm picks up a component, places it on a conveyor and sends it to the next assembly station."
      },
      {
        "type": "paragraph",
        "text": "The robot can perform its task perfectly, but the production line will only work if the surrounding equipment knows what to do."
      },
      {
        "type": "paragraph",
        "text": "The conveyor must stop when the component reaches the correct position. A sensor must confirm that it has arrived. The robotic arm must know when it is ready to begin its next operation."
      },
      {
        "type": "paragraph",
        "text": "Industrial automation engineers develop the systems that coordinate all these activities."
      },
      {
        "type": "paragraph",
        "text": "Their work involves programming industrial controllers, connecting equipment and making sure manufacturing processes operate reliably."
      },
      {
        "type": "paragraph",
        "text": "Unlike engineers who develop the algorithms controlling a robot's individual movements, industrial automation engineers focus on the larger production system."
      },
      {
        "type": "paragraph",
        "text": "They make sure robots, conveyors, machines and sensors work together in the correct sequence."
      },
      {
        "type": "heading",
        "text": "What is a PLC?"
      },
      {
        "type": "paragraph",
        "text": "One of the most important technologies in industrial automation is the programmable logic controller (PLC)."
      },
      {
        "type": "paragraph",
        "text": "A PLC is a specialized industrial computer designed to control machinery and automated processes."
      },
      {
        "type": "paragraph",
        "text": "It receives information from sensors and equipment, processes that information using programmed logic and sends commands to other devices."
      },
      {
        "type": "paragraph",
        "text": "For example, a PLC controlling a robotic packaging station might follow this sequence:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "A sensor detects a package arriving on a conveyor.",
          "The PLC commands the conveyor to stop.",
          "The PLC confirms that the robot is ready.",
          "The PLC requests that the robot pick up the package.",
          "The robot reports that the operation is complete.",
          "The PLC allows the conveyor to move again."
        ]
      },
      {
        "type": "paragraph",
        "text": "The PLC helps coordinate the process, ensuring that equipment operates in the correct order."
      },
      {
        "type": "paragraph",
        "text": "If the robot never reports that it has completed its task, the controller should not simply assume that everything went according to plan."
      },
      {
        "type": "paragraph",
        "text": "Instead, it can detect the missing response, report a fault and prevent the normal production sequence from continuing until the issue is addressed."
      },
      {
        "type": "paragraph",
        "text": "This is the central idea behind industrial automation: using programmed logic to make physical equipment operate predictably."
      },
      {
        "type": "heading",
        "text": "Three areas of industrial automation engineering"
      },
      {
        "type": "table",
        "caption": "Industrial automation specializations",
        "columns": [
          "Specialization",
          "What engineers work on"
        ],
        "rows": [
          [
            "PLC and machine control",
            "Programming equipment sequences, sensors, motors and automated machinery"
          ],
          [
            "HMI and industrial monitoring",
            "Creating interfaces that let operators monitor equipment, view alarms and manage production"
          ],
          [
            "System integration and commissioning",
            "Connecting machines, industrial networks and control systems, then testing them in a working facility"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These responsibilities often overlap."
      },
      {
        "type": "paragraph",
        "text": "An engineer working at a factory might maintain the PLC programs that run production equipment."
      },
      {
        "type": "paragraph",
        "text": "Someone working for a robotics integrator may design the control system connecting a new robot to an existing manufacturing line."
      },
      {
        "type": "paragraph",
        "text": "Others specialize in operator interfaces, industrial communication or bringing new automation equipment into production."
      },
      {
        "type": "heading",
        "text": "What does a typical day look like?"
      },
      {
        "type": "paragraph",
        "text": "Industrial automation engineers divide their time between programming, troubleshooting and working with physical machinery."
      },
      {
        "type": "paragraph",
        "text": "An engineer might begin the morning investigating an assembly line that stopped unexpectedly during the night."
      },
      {
        "type": "paragraph",
        "text": "The operator reports that the robotic arm completed its movement, but the conveyor never restarted."
      },
      {
        "type": "paragraph",
        "text": "The engineer examines the PLC program, checks sensor signals and reviews the robot's status."
      },
      {
        "type": "paragraph",
        "text": "They discover that the controller missed a brief completion signal from the robot."
      },
      {
        "type": "paragraph",
        "text": "After investigating the communication sequence, the engineer modifies the logic and tests whether the production line now responds correctly."
      },
      {
        "type": "paragraph",
        "text": "Later, they might update an operator display, review electrical drawings or work with technicians installing a new automated station."
      },
      {
        "type": "paragraph",
        "text": "A typical development cycle involves:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Understand the process. Determine how machines, sensors and robots should operate together.",
          "Design the control sequence. Define the conditions that allow each operation to begin and finish.",
          "Program the controller. Write the PLC logic that coordinates the equipment.",
          "Connect the systems. Configure communication between sensors, drives, robots and other controllers.",
          "Test the operation. Verify that the system works under normal conditions and responds appropriately to faults.",
          "Commission the equipment. Bring the installed system into operation and validate its performance."
        ]
      },
      {
        "type": "paragraph",
        "text": "The work combines software engineering with hands-on experience in industrial environments."
      },
      {
        "type": "heading",
        "text": "When a robot finishes its task but the conveyor never moves"
      },
      {
        "type": "paragraph",
        "text": "Consider a factory where a robot transfers completed components onto a conveyor."
      },
      {
        "type": "paragraph",
        "text": "The robot places a component correctly and sends a completion signal to the PLC."
      },
      {
        "type": "paragraph",
        "text": "However, the conveyor remains stopped."
      },
      {
        "type": "paragraph",
        "text": "The automation engineer investigates several possible causes."
      },
      {
        "type": "paragraph",
        "text": "Perhaps the robot never transmitted the signal. The PLC may have missed a brief message, or another required condition may not have been satisfied."
      },
      {
        "type": "paragraph",
        "text": "The engineer reviews the robot's status, PLC logic and relevant signals to identify what happened."
      },
      {
        "type": "paragraph",
        "text": "One possible solution is to improve the communication handshake between the robot and PLC."
      },
      {
        "type": "paragraph",
        "text": "A handshake is a coordinated exchange of signals confirming that one piece of equipment has requested an operation, another has accepted it and the operation has been completed."
      },
      {
        "type": "paragraph",
        "text": "Rather than relying on a brief signal that could be missed, the system can maintain a completion status until the receiving controller acknowledges it, using an agreed communication sequence."
      },
      {
        "type": "paragraph",
        "text": "The engineer then tests different scenarios, including delayed responses, missing signals and repeated requests."
      },
      {
        "type": "state-sequence",
        "id": "automation-cell-sequence",
        "title": "A sequence needs an exit when things go wrong",
        "states": [
          {
            "id": "idle",
            "label": "Idle",
            "description": "Waiting for a cycle"
          },
          {
            "id": "ready",
            "label": "Ready",
            "description": "Conditions satisfied"
          },
          {
            "id": "running",
            "label": "Running",
            "description": "Robot operation active"
          },
          {
            "id": "complete",
            "label": "Complete",
            "description": "Operation confirmed"
          }
        ],
        "transitions": [
          {
            "from": "idle",
            "to": "ready",
            "condition": "Checks pass"
          },
          {
            "from": "ready",
            "to": "running",
            "condition": "Start request"
          },
          {
            "from": "running",
            "to": "complete",
            "condition": "Done received"
          },
          {
            "from": "complete",
            "to": "ready",
            "condition": "Next part ready"
          }
        ],
        "fault": {
          "from": "running",
          "trigger": "Completion timeout",
          "description": "Missing response. New cycles blocked.",
          "recovery": "Cause cleared + reset",
          "returnTo": "idle"
        },
        "explanation": "A production sequence needs a defined response when something goes wrong. If the robot fails to confirm completion, the controller enters a fault state and blocks new cycles. Once the issue is resolved, a separate reset returns the system to idle without automatically restarting the machine.",
        "note": "Illustrative production logic. Machine safety functions require separate validation."
      },
      {
        "type": "paragraph",
        "text": "The goal is not merely to restart the conveyor once. It is to make the production sequence reliable enough to operate repeatedly."
      }
    ]
  },
  {
    "id": "automation-vs-related-roles",
    "heading": "How is industrial automation different from other robotics careers?",
    "navLabel": "Related careers",
    "paragraphs": [],
    "sourceIds": [
      "intrinsic",
      "osaro",
      "saronic-automation",
      "skydio"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Industrial automation engineers frequently work alongside robotics engineers, but their responsibilities are different."
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
            "Industrial Automation Engineer",
            "Coordinates robots and production equipment through PLCs and industrial control systems"
          ],
          [
            "Robotics Controls Engineer",
            "Develops algorithms that regulate a robot's movement, balance and force"
          ],
          [
            "Robotics Integration Engineer",
            "Brings robots, tools and surrounding equipment together into a working application"
          ],
          [
            "Manufacturing Engineer",
            "Designs and improves production processes, assembly methods and manufacturing quality"
          ],
          [
            "Electrical Engineer",
            "Designs electrical systems, circuits, wiring and power distribution"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "For example, imagine an automotive factory installing a new robotic welding station."
      },
      {
        "type": "paragraph",
        "text": "A robotics controls engineer may develop algorithms that regulate the robot's movement."
      },
      {
        "type": "paragraph",
        "text": "A robotics integration engineer helps connect the robot, welding equipment and supporting systems."
      },
      {
        "type": "paragraph",
        "text": "The industrial automation engineer programs the PLC to coordinate the welding sequence, exchange status signals and communicate with the rest of the production line."
      },
      {
        "type": "paragraph",
        "text": "The manufacturing engineer focuses on whether the process delivers the required quality, throughput and repeatability."
      },
      {
        "type": "paragraph",
        "text": "At smaller companies, one engineer may perform several of these responsibilities."
      }
    ]
  },
  {
    "id": "skills",
    "heading": "Which skills and tools do employers look for?",
    "navLabel": "Skills & tools",
    "paragraphs": [],
    "sourceIds": [
      "osaro",
      "intrinsic",
      "nomagic",
      "skydio",
      "anduril-senior",
      "state-machine",
      "ignition",
      "robot-safety",
      "plcopen"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "PLC programming"
      },
      {
        "type": "paragraph",
        "text": "PLC programming is one of the most important skills in industrial automation."
      },
      {
        "type": "paragraph",
        "text": "Engineers develop software that determines how equipment responds to inputs, commands and operating conditions."
      },
      {
        "type": "paragraph",
        "text": "Unlike conventional software applications, PLC programs often interact directly with physical machinery."
      },
      {
        "type": "paragraph",
        "text": "A program might control when a conveyor starts, whether a robotic station is ready or what should happen when a sensor fails to detect a component."
      },
      {
        "type": "paragraph",
        "text": "Two widely used PLC programming languages are:"
      },
      {
        "type": "paragraph",
        "text": "Ladder Logic. A graphical programming language that resembles electrical relay diagrams. It is widely used in manufacturing and industrial control systems."
      },
      {
        "type": "paragraph",
        "text": "Structured Text. A text-based programming language useful for more complex logic, calculations and reusable software components."
      },
      {
        "type": "paragraph",
        "text": "Common industrial automation platforms include Siemens, Rockwell Automation/Allen-Bradley and Beckhoff."
      },
      {
        "type": "paragraph",
        "text": "Each platform has its own software environment, but the underlying concepts are transferable."
      },
      {
        "type": "paragraph",
        "text": "Beginners should focus on learning one environment well rather than attempting to master every manufacturer immediately."
      },
      {
        "type": "heading",
        "text": "HMI and SCADA systems"
      },
      {
        "type": "paragraph",
        "text": "Operators need a way to understand what automated equipment is doing."
      },
      {
        "type": "paragraph",
        "text": "A human-machine interface (HMI) provides a screen through which operators can view equipment status, interact with controls and respond to alarms."
      },
      {
        "type": "paragraph",
        "text": "For example, an HMI might show whether a robot is operating, waiting for a component or experiencing a fault."
      },
      {
        "type": "paragraph",
        "text": "Supervisory Control and Data Acquisition (SCADA) systems provide broader monitoring and supervisory capabilities."
      },
      {
        "type": "paragraph",
        "text": "They can collect information from multiple machines or production areas, display operating conditions and help teams identify problems across a facility."
      },
      {
        "type": "paragraph",
        "text": "An automation engineer may develop interfaces that show production counts, equipment status, alarms and other operating information."
      },
      {
        "type": "paragraph",
        "text": "A well-designed interface helps operators understand what is happening without requiring them to interpret PLC code."
      },
      {
        "type": "heading",
        "text": "Electrical systems and sensors"
      },
      {
        "type": "paragraph",
        "text": "Industrial automation engineers need a working understanding of electrical equipment."
      },
      {
        "type": "paragraph",
        "text": "PLC programs depend on real-world signals coming from sensors, switches, motors and other devices."
      },
      {
        "type": "paragraph",
        "text": "If a conveyor never starts, the problem might come from the PLC logic, a disconnected sensor or a malfunctioning drive."
      },
      {
        "type": "paragraph",
        "text": "Engineers should know how to read electrical drawings, interpret input and output signals and investigate problems systematically."
      },
      {
        "type": "paragraph",
        "text": "Useful foundations include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Voltage, current and basic electrical principles.",
          "Motors, sensors and industrial actuators.",
          "Wiring diagrams and electrical schematics.",
          "Digital and analog input/output signals.",
          "Electrical measurement and fault diagnosis."
        ]
      },
      {
        "type": "paragraph",
        "text": "The deeper electrical requirements depend on the position."
      },
      {
        "type": "paragraph",
        "text": "Some automation engineers design and review electrical control systems, while others primarily work on programming and commissioning."
      },
      {
        "type": "heading",
        "text": "Industrial communication networks"
      },
      {
        "type": "paragraph",
        "text": "Modern factories connect many controllers, robots and machines through industrial networks."
      },
      {
        "type": "paragraph",
        "text": "These networks allow equipment to exchange commands, measurements and operating status."
      },
      {
        "type": "paragraph",
        "text": "Common technologies include:"
      },
      {
        "type": "table",
        "caption": "Industrial communication technologies",
        "columns": [
          "Technology",
          "Typical application"
        ],
        "rows": [
          [
            "PROFINET",
            "Industrial communication between controllers and factory equipment"
          ],
          [
            "EtherNet/IP",
            "Connecting PLCs, drives and industrial automation devices"
          ],
          [
            "EtherCAT",
            "Fast communication with distributed devices and motion-control systems"
          ],
          [
            "OPC UA",
            "Exchanging structured industrial data between machines and software systems"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "An automation engineer does not need to master every protocol immediately."
      },
      {
        "type": "paragraph",
        "text": "The most important starting point is understanding how devices communicate, what information must be exchanged and how to investigate problems when communication fails."
      },
      {
        "type": "heading",
        "text": "Commissioning and equipment testing"
      },
      {
        "type": "paragraph",
        "text": "Commissioning is the process of bringing newly installed equipment into working operation."
      },
      {
        "type": "paragraph",
        "text": "An engineer might help install a robotic workcell at a customer's factory, connect its controllers and verify that all devices operate correctly."
      },
      {
        "type": "paragraph",
        "text": "The process often includes testing sensors, validating communication, checking software sequences and demonstrating that the system meets the project's requirements."
      },
      {
        "type": "paragraph",
        "text": "Two common testing stages are:"
      },
      {
        "type": "paragraph",
        "text": "Factory Acceptance Testing (FAT). Testing equipment before it is delivered or installed at its final location."
      },
      {
        "type": "paragraph",
        "text": "Site Acceptance Testing (SAT). Testing the equipment after installation to confirm that it operates correctly in its intended environment."
      },
      {
        "type": "paragraph",
        "text": "Commissioning engineers may travel to customer facilities, work with installation teams and troubleshoot problems that were not apparent during earlier development."
      },
      {
        "type": "heading",
        "text": "Fault handling and industrial safety"
      },
      {
        "type": "paragraph",
        "text": "Automated equipment must respond predictably when something goes wrong."
      },
      {
        "type": "paragraph",
        "text": "For example, if a robotic station never receives a completion signal, the PLC may report a timeout and prevent the normal sequence from continuing."
      },
      {
        "type": "paragraph",
        "text": "Automation engineers develop logic that detects these conditions and helps operators understand the problem."
      },
      {
        "type": "paragraph",
        "text": "However, normal operating logic is different from safety-related control functions."
      },
      {
        "type": "paragraph",
        "text": "Industrial machines may require dedicated safety systems, protective devices and validated procedures designed to reduce risks from unexpected movement or hazardous energy."
      },
      {
        "type": "paragraph",
        "text": "A standard PLC timeout or operator display is not a substitute for those safeguards."
      },
      {
        "type": "paragraph",
        "text": "Engineers working on industrial equipment must follow the applicable engineering requirements, manufacturer instructions and workplace safety procedures."
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
      "intrinsic",
      "skydio",
      "nomagic",
      "osaro",
      "anduril"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Electrical engineering, mechatronics, industrial automation and related technical fields provide common educational pathways."
      },
      {
        "type": "paragraph",
        "text": "These programs combine knowledge of electronics, programming, control systems and industrial equipment."
      },
      {
        "type": "paragraph",
        "text": "Unlike some research-oriented robotics careers, industrial automation can also offer opportunities for people with technical or vocational training."
      },
      {
        "type": "heading",
        "text": "Common educational pathways"
      },
      {
        "type": "table",
        "caption": "Educational pathways",
        "columns": [
          "Background",
          "How it prepares you"
        ],
        "rows": [
          [
            "Electrical engineering",
            "Circuits, electrical systems, automation and controls"
          ],
          [
            "Mechatronics engineering",
            "Mechanical systems, electronics, programming and automation"
          ],
          [
            "Automation engineering",
            "PLCs, industrial control systems and manufacturing processes"
          ],
          [
            "Engineering technology or associate degree",
            "Practical technical preparation for equipment and controls work"
          ],
          [
            "Industrial maintenance or technical trade",
            "Hands-on experience with machinery, troubleshooting and electrical systems"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "The appropriate qualification depends on the employer and the responsibilities of the role."
      },
      {
        "type": "heading",
        "text": "What employers expect"
      },
      {
        "type": "paragraph",
        "text": "Employers such as Intrinsic and Skydio have advertised automation positions requiring related engineering degrees."
      },
      {
        "type": "paragraph",
        "text": "Agile Robots has also considered relevant technical qualifications, while OSARO's reviewed PLC position emphasizes practical industrial controls experience."
      },
      {
        "type": "paragraph",
        "text": "Experienced automation engineers are generally expected to understand not only how to write PLC programs, but also how to test and troubleshoot systems operating in real facilities."
      },
      {
        "type": "heading",
        "text": "Do you need an engineering degree?"
      },
      {
        "type": "paragraph",
        "text": "Not for every industrial automation position."
      },
      {
        "type": "paragraph",
        "text": "Some employers consider technical qualifications or equivalent experience, particularly for roles focused on PLC programming, commissioning and equipment troubleshooting."
      },
      {
        "type": "paragraph",
        "text": "However, positions involving complex system design, electrical engineering or large automation projects may require more formal technical preparation."
      },
      {
        "type": "paragraph",
        "text": "Someone beginning in industrial maintenance or electrical work can build toward automation engineering by developing programming, control-system and commissioning experience."
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
        "ordered": false,
        "items": [
          "Basic electrical engineering and industrial equipment.",
          "PLC programming and control sequences.",
          "Sensors, motors and industrial input/output signals.",
          "HMI development and industrial communication.",
          "Electrical drawings and equipment troubleshooting.",
          "Commissioning, testing and technical documentation."
        ]
      },
      {
        "type": "paragraph",
        "text": "Vendor-specific training can also be valuable."
      },
      {
        "type": "paragraph",
        "text": "For example, learning Siemens or Rockwell PLC programming may help candidates qualify for positions working with those systems."
      },
      {
        "type": "paragraph",
        "text": "However, understanding the underlying control principles is more important than memorizing one software environment."
      }
    ]
  },
  {
    "id": "salary",
    "heading": "How much do industrial automation engineers earn?",
    "navLabel": "Compensation",
    "paragraphs": [],
    "sourceIds": [
      "compensation",
      "osaro",
      "skydio"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Industrial automation compensation varies by experience, location, technical responsibilities and the types of systems being developed."
      },
      {
        "type": "paragraph",
        "text": "Black Scarab estimates annual compensation at $159,000 based on reviewed U.S. employer advertisements for experienced roles."
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
        "text": "Experience and technical responsibility. Compare whether a position involves individual programming tasks or responsibility for complete production-control systems."
      },
      {
        "type": "paragraph",
        "text": "Specialization. Expertise in industrial networks, advanced PLC programming, motion systems and complex automation integration can be valuable."
      },
      {
        "type": "paragraph",
        "text": "Commissioning and travel. Some positions involve extensive on-site work, customer installations or production support outside normal business hours."
      },
      {
        "type": "paragraph",
        "text": "Location and employer. Compensation varies across geographic markets, industrial manufacturers and robotics companies."
      },
      {
        "type": "heading",
        "text": "Career progression"
      },
      {
        "type": "paragraph",
        "text": "Early-career professionals may begin in automation technician, junior controls or equipment-support positions."
      },
      {
        "type": "paragraph",
        "text": "With experience, they can take responsibility for PLC programs, machine-control systems and complete automation projects."
      },
      {
        "type": "paragraph",
        "text": "Senior engineers may design control architectures, lead commissioning projects and oversee automation across several production lines or facilities."
      },
      {
        "type": "paragraph",
        "text": "Some professionals move into technical management, systems integration or industrial automation consulting."
      }
    ]
  },
  {
    "id": "employers",
    "heading": "Which companies hire industrial automation engineers?",
    "navLabel": "Employers & titles",
    "paragraphs": [],
    "sourceIds": [
      "osaro",
      "intrinsic",
      "nomagic",
      "skydio",
      "agile",
      "saronic-automation",
      "saronic-controls"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Industrial automation engineers work both inside robotics companies and at organizations that install robotic systems for manufacturers."
      },
      {
        "type": "paragraph",
        "text": "Their responsibilities depend on whether the company develops robots, operates a factory or integrates automation equipment for customers."
      },
      {
        "type": "heading",
        "text": "Robotics and warehouse automation"
      },
      {
        "type": "paragraph",
        "text": "OSARO and Nomagic develop robotic systems for handling objects and automating material movement."
      },
      {
        "type": "paragraph",
        "text": "Automation engineers help connect these systems with conveyors, sensors and warehouse equipment."
      },
      {
        "type": "paragraph",
        "text": "Their work can involve PLC communication, equipment sequencing and integration with existing operations."
      },
      {
        "type": "heading",
        "text": "Robotics integration platforms"
      },
      {
        "type": "paragraph",
        "text": "Intrinsic develops technology for industrial robotics applications."
      },
      {
        "type": "paragraph",
        "text": "Automation and integration work can involve designing robotic workcells, coordinating equipment and helping manufacturers deploy automation."
      },
      {
        "type": "paragraph",
        "text": "These positions often require knowledge of both robotics and traditional industrial control systems."
      },
      {
        "type": "heading",
        "text": "Manufacturing automation"
      },
      {
        "type": "paragraph",
        "text": "Skydio and Saronic provide examples of companies developing automation capabilities for manufacturing operations."
      },
      {
        "type": "paragraph",
        "text": "Rather than programming the finished robot itself, automation engineers may work on equipment used to manufacture and assemble the company's products."
      },
      {
        "type": "paragraph",
        "text": "This can include automated assembly stations, testing equipment, industrial controls and production infrastructure."
      },
      {
        "type": "heading",
        "text": "Industrial robotics systems"
      },
      {
        "type": "paragraph",
        "text": "Agile Robots develops robotics and automation solutions involving industrial equipment and integrated systems."
      },
      {
        "type": "paragraph",
        "text": "Automation roles may include PLC development, operator interfaces, industrial communication and commissioning."
      },
      {
        "type": "heading",
        "text": "Related job titles"
      },
      {
        "type": "paragraph",
        "text": "Useful searches include Industrial Automation Engineer, Controls Engineer, PLC Engineer, Automation and Controls Engineer, Manufacturing Automation Engineer and Commissioning Engineer."
      },
      {
        "type": "paragraph",
        "text": "Be aware that job titles can overlap with other engineering disciplines."
      },
      {
        "type": "paragraph",
        "text": "A robotics controls engineer developing balance algorithms for a humanoid robot performs a different job from a controls engineer programming PLCs for a factory assembly line."
      },
      {
        "type": "paragraph",
        "text": "Read the responsibilities to understand the position."
      }
    ]
  },
  {
    "id": "transition",
    "heading": "How to transition into industrial automation engineering",
    "navLabel": "Career transitions",
    "paragraphs": [],
    "sourceIds": [
      "agile",
      "osaro",
      "formic",
      "anduril",
      "simulation"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Several technical backgrounds provide a practical route into industrial automation."
      },
      {
        "type": "table",
        "caption": "Routes into industrial automation",
        "columns": [
          "Your background",
          "Skills to prioritize",
          "Suggested project"
        ],
        "rows": [
          [
            "Industrial maintenance",
            "PLC programming, control sequences and system design",
            "Simulate an automated conveyor"
          ],
          [
            "Electrician or electrical technician",
            "PLC software, industrial communication and HMI development",
            "Program a sensor-controlled machine sequence"
          ],
          [
            "Electrical or mechatronics engineering",
            "Practical PLC programming and commissioning",
            "Develop a simulated robotic workcell"
          ],
          [
            "Software engineering",
            "Industrial hardware, PLC execution and physical I/O",
            "Build an equipment state machine"
          ],
          [
            "Complete beginner",
            "Basic electricity, programming and automation concepts",
            "Create a simulated conveyor-control system"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "If you work in industrial maintenance"
      },
      {
        "type": "paragraph",
        "text": "Your experience with motors, sensors, machinery and troubleshooting provides a useful foundation."
      },
      {
        "type": "paragraph",
        "text": "The next step is developing PLC programming and control-system design skills."
      },
      {
        "type": "paragraph",
        "text": "Learn how to translate equipment requirements into a documented control sequence."
      },
      {
        "type": "paragraph",
        "text": "Experience commissioning equipment or supporting automated production lines can also help you transition."
      },
      {
        "type": "heading",
        "text": "If you are an electrician or electrical technician"
      },
      {
        "type": "paragraph",
        "text": "Your understanding of wiring, electrical systems and industrial equipment can transfer directly."
      },
      {
        "type": "paragraph",
        "text": "Focus on learning PLC programming, communication protocols and operator interfaces."
      },
      {
        "type": "paragraph",
        "text": "Practice designing programs that react to input signals, coordinate outputs and handle faults."
      },
      {
        "type": "paragraph",
        "text": "A portfolio project that combines electrical understanding with controller software can demonstrate your ability to move beyond installation and maintenance work."
      },
      {
        "type": "heading",
        "text": "If you have an engineering background"
      },
      {
        "type": "paragraph",
        "text": "Electrical and mechatronics engineers may already understand sensors, motors and control principles."
      },
      {
        "type": "paragraph",
        "text": "The main gap may be practical experience with industrial PLC platforms and production equipment."
      },
      {
        "type": "paragraph",
        "text": "Develop projects involving machine sequencing, industrial communication and commissioning-style testing."
      },
      {
        "type": "heading",
        "text": "If you work in software engineering"
      },
      {
        "type": "paragraph",
        "text": "Your experience with programming, debugging and software design is valuable."
      },
      {
        "type": "paragraph",
        "text": "However, industrial automation introduces new constraints because software interacts with physical machinery."
      },
      {
        "type": "paragraph",
        "text": "Learn how PLCs execute programs, how input and output signals work and how industrial equipment communicates."
      },
      {
        "type": "paragraph",
        "text": "A simulated production cell is a practical starting point."
      },
      {
        "type": "heading",
        "text": "If you are starting from scratch"
      },
      {
        "type": "paragraph",
        "text": "Begin with basic electrical principles, introductory programming and industrial automation concepts."
      },
      {
        "type": "paragraph",
        "text": "Learn what a PLC does, how sensors provide information and how equipment sequences are programmed."
      },
      {
        "type": "paragraph",
        "text": "Then develop a small software simulation before working with physical machinery."
      },
      {
        "type": "paragraph",
        "text": "Technical programs in mechatronics, electrical technology or industrial automation can provide a structured route into the profession."
      },
      {
        "type": "heading",
        "text": "What matters in an interview?"
      },
      {
        "type": "paragraph",
        "text": "Employers often want to understand how candidates approach real equipment problems."
      },
      {
        "type": "paragraph",
        "text": "You may be asked to explain how a PLC sequence works, how you would diagnose a missing sensor signal or what happens when a robot fails to complete its operation."
      },
      {
        "type": "paragraph",
        "text": "Prepare one project where you can explain:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "The sequence you designed.",
          "The signals and devices involved.",
          "How the program handles unexpected conditions.",
          "How you tested and validated the results."
        ]
      },
      {
        "type": "paragraph",
        "text": "A clear explanation of how your system responds to faults can demonstrate more understanding than a list of PLC platforms you have used."
      }
    ]
  },
  {
    "id": "portfolio",
    "heading": "Build your first industrial automation project",
    "navLabel": "Portfolio project",
    "paragraphs": [],
    "sourceIds": [
      "simulation",
      "state-machine",
      "ignition",
      "plcopen"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Program a simulated robotic workcell"
      },
      {
        "type": "paragraph",
        "text": "A useful beginner project is to create a simulated production station that coordinates a conveyor, a sensor and a robotic arm."
      },
      {
        "type": "paragraph",
        "text": "You do not need to purchase industrial machinery."
      },
      {
        "type": "paragraph",
        "text": "PLC development environments such as CODESYS support simulation workflows that allow you to test control logic without connecting to physical equipment."
      },
      {
        "type": "paragraph",
        "text": "The objective is to demonstrate how an automation engineer designs and tests a reliable machine sequence."
      },
      {
        "type": "heading",
        "text": "Step 1: Define the production process"
      },
      {
        "type": "paragraph",
        "text": "Imagine a conveyor delivering products to a robotic station."
      },
      {
        "type": "paragraph",
        "text": "When a product reaches the correct position, the conveyor stops and requests that the robot perform a handling operation."
      },
      {
        "type": "paragraph",
        "text": "Once the robot reports completion, the conveyor can move the product to the next station."
      },
      {
        "type": "paragraph",
        "text": "Write down the sequence before developing the program."
      },
      {
        "type": "heading",
        "text": "Step 2: Define the machine states"
      },
      {
        "type": "paragraph",
        "text": "Divide the process into several operating states."
      },
      {
        "type": "table",
        "caption": "States in the simulated workcell",
        "columns": [
          "State",
          "Meaning"
        ],
        "rows": [
          [
            "Idle",
            "No production cycle is active"
          ],
          [
            "Ready",
            "Required conditions are satisfied"
          ],
          [
            "Running",
            "The robotic operation is in progress"
          ],
          [
            "Complete",
            "The operation has finished successfully"
          ],
          [
            "Fault",
            "A required condition failed or an expected response did not arrive"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Define which conditions allow the system to move from one state to another."
      },
      {
        "type": "paragraph",
        "text": "For example, the controller should not begin the robotic operation unless the required readiness conditions are satisfied."
      },
      {
        "type": "heading",
        "text": "Step 3: Write the PLC program"
      },
      {
        "type": "paragraph",
        "text": "Use a PLC development environment to implement the sequence."
      },
      {
        "type": "paragraph",
        "text": "Represent the conveyor, sensor and robot using simulated input and output signals."
      },
      {
        "type": "paragraph",
        "text": "Your program should detect a product, request the robotic operation and wait for a completion response."
      },
      {
        "type": "paragraph",
        "text": "Use clear variable names and organize the logic so another engineer can understand the sequence."
      },
      {
        "type": "heading",
        "text": "Step 4: Create an operator interface"
      },
      {
        "type": "paragraph",
        "text": "Build a simple HMI showing the current machine state."
      },
      {
        "type": "paragraph",
        "text": "Include information such as whether a product has been detected, whether the robot is ready and whether an operation is in progress."
      },
      {
        "type": "paragraph",
        "text": "Add a readable fault message when an expected signal is missing."
      },
      {
        "type": "paragraph",
        "text": "The interface does not need to be elaborate."
      },
      {
        "type": "paragraph",
        "text": "Its purpose is to help someone understand what the system is doing."
      },
      {
        "type": "heading",
        "text": "Step 5: Introduce faults"
      },
      {
        "type": "paragraph",
        "text": "Test what happens when the normal sequence is interrupted."
      },
      {
        "type": "paragraph",
        "text": "For example:"
      },
      {
        "type": "table",
        "caption": "Fault-injection tests",
        "columns": [
          "Test scenario",
          "Expected behavior"
        ],
        "rows": [
          [
            "Robot not ready",
            "The controller does not request a new operation"
          ],
          [
            "Completion signal delayed",
            "The controller continues waiting within the defined interval"
          ],
          [
            "Completion signal missing",
            "A timeout is recorded and the sequence enters a fault state"
          ],
          [
            "Repeated start request",
            "The controller does not unintentionally duplicate an active cycle"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Record the expected and observed behavior for each test."
      },
      {
        "type": "paragraph",
        "text": "This exercise demonstrates why reliable automation requires more than programming a successful production cycle."
      },
      {
        "type": "heading",
        "text": "Step 6: Test recovery"
      },
      {
        "type": "paragraph",
        "text": "Create a simulated fault and then correct the condition responsible for it."
      },
      {
        "type": "paragraph",
        "text": "Implement a separate reset action that returns the demonstration to its idle state after the fault condition has cleared."
      },
      {
        "type": "paragraph",
        "text": "The system should still require readiness checks and a new start request before beginning another cycle."
      },
      {
        "type": "paragraph",
        "text": "For this educational project, keep the focus on ordinary production sequencing. Real machine safety functions require separate engineering and validation."
      },
      {
        "type": "heading",
        "text": "Step 7: Document the project"
      },
      {
        "type": "paragraph",
        "text": "Prepare a short report explaining how your simulated workcell operates."
      },
      {
        "type": "paragraph",
        "text": "Include the control sequence, input/output signals, screenshots of the HMI and results from your test scenarios."
      },
      {
        "type": "paragraph",
        "text": "Explain one problem you encountered and how you corrected it."
      },
      {
        "type": "heading",
        "text": "What to include in your portfolio"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "A diagram of the automated workcell.",
          "The PLC program and instructions for running the simulation.",
          "A list of input and output signals.",
          "A state diagram explaining the operating sequence.",
          "Screenshots of the operator interface.",
          "Test results showing normal operation and fault handling.",
          "A short demonstration video.",
          "An explanation of one problem and its solution."
        ]
      },
      {
        "type": "heading",
        "text": "An optional advanced extension"
      },
      {
        "type": "paragraph",
        "text": "Expand the simulated workcell by adding a second robotic station or another conveyor."
      },
      {
        "type": "paragraph",
        "text": "Create communication signals that coordinate operations between the stations."
      },
      {
        "type": "paragraph",
        "text": "Test how the system responds when one station becomes unavailable or completes its task more slowly than expected."
      },
      {
        "type": "paragraph",
        "text": "This introduces more realistic production-system coordination without requiring physical equipment."
      }
    ]
  }
],
  nextSteps:{
  "id": "next-steps",
  "heading": "Where to go next",
  "paragraphs": [],
  "sourceIds": [
    "simulation",
    "state-machine",
    "codesys",
    "plcopen"
  ],
  "blocks": [
    {
      "type": "resources",
      "items": [
        {
          "title": "CODESYS: PLC Programming and Simulation",
          "href": "https://www.codesys.com/",
          "description": "Explore the development environment and learn how to build and test PLC applications in simulation."
        },
        {
          "title": "Beckhoff: Automation and PLC Documentation",
          "href": "https://infosys.beckhoff.com/content/1033/tc3_plc_intro/7647315979.html",
          "description": "Study PLC programming, state machines, timers and industrial control concepts."
        },
        {
          "title": "PLCopen: Industrial Control Programming",
          "href": "https://www.plcopen.org/",
          "description": "Learn about industrial control programming and commonly used PLC software standards."
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Start with one automated sequence. Make it work, deliberately introduce a failure and demonstrate how the system responds and recovers."
    },
    {
      "type": "paragraph",
      "text": "Once you can confidently explain that process, move toward more complex systems involving multiple machines, industrial networks and real equipment."
    }
  ]
},
  researchNotes:[
    'Employer advertisements were collected November 2, 2026 and reviewed in full on November 9. Ten selected sources cover PLC/HMI programming, industrial communication, commissioning, qualifications and production support. The underlying primary cohort contains ten advertisements from six selected employers; it is not an industry census or a count of current openings.',
    'This guide focuses on control of production equipment and robotic workcells. The Skydio manufacturing-controls advertisement is included after contextual review despite its original robot-controls classification. Formic is also reviewed as an adjacent role. Original classifications and archived records remain unchanged. Generic software test automation, robot motion algorithms, electrical design and deployment roles are not admitted solely for mentioning PLCs.',
    'Compensation is the median of one annual USD salary-range midpoint per eligible U.S. requisition, rounded to the nearest $1,000, with halves rounded upward. OSARO: $125,000–$145,000, midpoint $135,000. Skydio: $145,000–$219,000, midpoint $182,000. Their median is $158,500, yielding the $159,000 estimate. Bonus and equity are excluded; the structured OSARO field does not expressly establish base-pay treatment.',
    'The salary estimate is based on only two California advertisements for experienced and senior roles. It is neither an entry-level estimate nor a representative market median. Other reviewed amounts lacking a verified annual period are excluded, including Intrinsic, Formic and the Anduril manufacturing-controls ranges. No seniority ladder or salary-growth relationship is inferred.',
    'The state sequence is an editorial software example, not an employer implementation or a machine-safety design. The normal path is Idle → Ready → Running → Complete, with a return to Ready when another part is available. A completion timeout during Running enters Fault. Clearing the cause plus a separate reset returns to Idle, requiring readiness checks and a fresh start. The portfolio remains entirely simulated; simulation does not validate physical equipment or safety functions.',
    'The hero is a conceptual editorial illustration. Skills and qualifications are presented qualitatively after contextual review. A requested platform, degree or travel requirement in an individual advertisement is not treated as a universal industry requirement. Reproducible derivations, exclusion decisions, source hashes and qualification spans are available in the research exports.',
  ],
  citations:[
    source('study','Black Scarab: November 2 employer research','/research/physical-ai-careers-2026-11-02.json','Dated selected-employer dataset and original role definitions.'),
    source('evidence','Reviewed industrial automation evidence',evidencePath,'Ten contextual full-source reviews, qualification spans and original source hashes.'),
    source('compensation','Industrial automation compensation derivation',compensationPath,'Reviewed eligibility, two annual observations, excluded records and reproducible estimate.'),
    posting('agile','agile-robots:greenhouse:4964865101'),posting('anduril','anduril:greenhouse:5234512007'),posting('anduril-senior','anduril:greenhouse:5234563007'),
    posting('intrinsic','intrinsic:greenhouse:6223613004'),posting('nomagic','nomagic:lever:13cdf1ca-7e42-44b2-92dd-0f13598eeeaf'),posting('osaro','osaro:lever:c2137e2f-3e01-4eb4-b635-0c97fddc8c57'),
    posting('saronic-automation','saronic:ashby:9c3baa1f-ae9f-44b0-a74a-31440fa556a2'),posting('saronic-controls','saronic:ashby:a62ce18c-8048-4a80-b368-96f7e4585a9c'),posting('skydio','skydio:ashby:b36773da-5e82-4d16-b926-186ba78fafa3'),posting('formic','formic:greenhouse:4670196006'),
    source('state-machine','Beckhoff: first steps — state machine, timer, trigger',stateMachine,'Official PLC example using state transitions, timer monitoring and an edge trigger.'),
    source('simulation','CODESYS: testing in simulation mode',simulation,'Official documentation for testing and debugging an application without a physical target device.'),
    source('ignition','Inductive Automation: introducing Ignition',ignition,'Official description of supervisory control, data display and industrial application functions.'),
    source('codesys','CODESYS: PLC development environment','https://www.codesys.com/','Official industrial automation software, development environment and learning resources.'),
    source('plcopen','PLCopen: industrial control programming','https://www.plcopen.org/','Official vendor-independent industrial control programming standards and guidelines.'),
    source('robot-safety','OSHA Technical Manual: industrial robot systems',robotSafety,'Application-specific hazard assessment, safeguarding and control-system considerations.'),
  ],
};
