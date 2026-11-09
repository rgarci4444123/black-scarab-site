import type { CareerGuideContent, Citation } from '@/lib/career-paths/types';
import { researchForRole } from '@/lib/career-paths/research';
import evidence from '@/public/research/electrical-engineer-evidence-2026-11-09.json';
import compensation from '@/public/research/electrical-engineer-compensation-2026-11-02.json';
import decisions from '@/research/seo/2026-11-09/decisions.json';

const role = researchForRole('electrical-engineer', evidence.snapshotId);
if (!role || compensation.snapshotId !== evidence.snapshotId) throw new Error('Electrical guide research mismatch');
const seo = decisions.guides.find(item => item.occupationId === role.id);
if (!seo) throw new Error('Electrical guide SEO decision missing');
const evidencePath = '/research/electrical-engineer-evidence-2026-11-09.json';
const compensationPath = '/research/electrical-engineer-compensation-2026-11-02.json';
const salary = new Intl.NumberFormat('en-US', {style:'currency',currency:'USD',maximumFractionDigits:0}).format(compensation.estimate);
const kicad = 'https://docs.kicad.org/10.0/en/getting_started_in_kicad/getting_started_in_kicad.html';
const i2c = 'https://learn.adafruit.com/working-with-i2c-devices';
const pullups = i2c+'/pull-up-resistors';
const kicadLearning = 'https://www.kicad.org/help/learning-resources/';
const source = (id:string,title:string,url:string,scope:string):Citation => ({id,title,url,scope,accessedAt:'2026-11-09'});
const posting = (id:string,recordId:string):Citation => {
  const record = evidence.records.find(item => item.id === recordId);
  if (!record) throw new Error(`Missing electrical source: ${recordId}`);
  return source(id,`${record.employer}: ${record.title}`,record.url,'Stored employer advertisement collected November 2, 2026. Full-source review and qualification spans are preserved in the evidence record.');
};

export const electricalEngineerGuide: CareerGuideContent = {
  id:'electrical-engineer',occupationId:'electrical-engineer',familyId:'hardware-manufacturing',slug:'electrical-engineer',
  title:seo.h1,seoTitle:seo.seoTitle,description:seo.description,
  status:'published',publishedAt:'2026-11-09',reviewedAt:'2026-11-09',
  research:{snapshotId:evidence.snapshotId,roleId:'electrical-engineer',evidencePath},
  deck:"Design the circuits, power systems and electronics that allow robots to sense, move and operate reliably.",
  illustration:{src:'/career-paths/electrical-engineer-lab.webp',width:1672,height:941,alt:'Illustration of an electrical engineer testing a robot circuit board with an oscilloscope at an electronics workbench.'},
  introduction:["When a robot moves, its motors, cameras, sensors and computers all depend on electrical systems working together. Electrical engineers design the circuits, power systems and connections that make this possible."],
  overview:[
  {
    "label": "What you do",
    "value": "Design, build and test the electrical systems inside robots",
    "sourceIds": [
      "figure",
      "standard",
      "apptronik"
    ]
  },
  {
    "label": "Core skills",
    "value": "Circuit design, PCB layout, power electronics and hardware debugging",
    "sourceIds": [
      "figure",
      "standard",
      "agility"
    ]
  },
  {
    "label": "Education",
    "value": "Typically a bachelor's degree in electrical engineering or a related field",
    "sourceIds": [
      "bls",
      "figure",
      "shield"
    ]
  },
  {
    "label": "Compensation",
    "value": `${salary}/year`,
    "detail": "Black Scarab estimate",
    "sourceIds": [
      "compensation"
    ]
  }
],
  sections:[
  {
    "id": "day-to-day",
    "heading": "What does an electrical engineer do in robotics?",
    "navLabel": "The work",
    "paragraphs": [],
    "sourceIds": [
      "figure",
      "standard",
      "apptronik",
      "agility",
      "skydio"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "When a robot moves, its motors, cameras, sensors and computers all depend on electrical systems working together. Electrical engineers design the circuits, power systems and connections that make this possible."
      },
      {
        "type": "paragraph",
        "text": "Their work goes beyond drawing circuits. They build prototypes, test components and investigate failures. If a robot's computer suddenly restarts when its motors accelerate, an electrical engineer helps identify whether the problem comes from the power supply, wiring or electronics."
      },
      {
        "type": "paragraph",
        "text": "The job combines design, experimentation and troubleshooting. Some engineers specialize in sensors and circuit boards, while others focus on batteries, motor power or the electrical architecture of an entire robot."
      },
      {
        "type": "figure",
        "src": "/career-paths/robot-electrical-architecture-v2.webp",
        "alt": "Illustrated mobile robot electrical architecture: a battery supplies power distribution and conversion, which powers the onboard computer, motor controllers and sensors. Red arrows show power delivery and blue arrows show data communication.",
        "caption": "View full-size diagram",
        "width": 1536,
        "height": 1024,
        "fullSizeHref": "/career-paths/robot-electrical-architecture-v2.webp"
      },
      {
        "type": "paragraph",
        "text": "A simplified view of how electrical systems work together on a robot. The battery provides power, which is distributed and converted for the onboard computer, sensors and motor controllers. These components also exchange data through communication interfaces such as I2C, SPI, CAN or Ethernet."
      },
      {
        "type": "table",
        "caption": "Four areas of robotics electrical engineering",
        "columns": [
          "Specialization",
          "What engineers work on"
        ],
        "rows": [
          [
            "Electronics and sensors",
            "Circuit boards connecting cameras, sensors, processors and communication devices"
          ],
          [
            "Power and batteries",
            "Electrical power delivery, voltage conversion, battery connections and motor power systems"
          ],
          [
            "Electrical integration",
            "Wiring harnesses, connectors and electrical interfaces between robot components"
          ],
          [
            "Testing and reliability",
            "Hardware validation, failure analysis and improvements needed for reliable production"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These specializations overlap. An engineer designing a robot's motor controller may work on both circuit boards and power electronics. A systems engineer may focus on how several subsystems operate together."
      },
      {
        "type": "heading",
        "text": "From an idea to working hardware"
      },
      {
        "type": "paragraph",
        "text": "A typical development cycle involves:"
      },
      {
        "type": "list",
        "items": [
          "Define requirements. Determine how much power components need, how they communicate and what physical constraints the design must satisfy.",
          "Design the electronics. Select components, draw electrical schematics and develop printed circuit boards (PCBs).",
          "Build and test prototypes. Assemble hardware, apply power and verify that the circuits behave as intended.",
          "Investigate problems. Measure electrical signals, trace failures and revise the design.",
          "Prepare for manufacturing. Finalize documentation, component lists and testing procedures so the hardware can be produced consistently."
        ],
        "ordered": true
      },
      {
        "type": "paragraph",
        "text": "A PCB is a board that connects electronic components through conductive paths. Once those components are assembled onto it, the result is called a printed circuit board assembly, or PCBA."
      },
      {
        "type": "heading",
        "text": "When a robot's motors cause its computer to restart"
      },
      {
        "type": "paragraph",
        "text": "Imagine a warehouse robot moving down an aisle. Everything works until it accelerates. Its motors draw more current, and the onboard computer unexpectedly restarts."
      },
      {
        "type": "paragraph",
        "text": "An electrical engineer investigates the problem by measuring voltage at the computer, checking the power distribution system and examining the wiring."
      },
      {
        "type": "paragraph",
        "text": "The cause might be a temporary voltage drop during acceleration. Depending on the measurements, the solution could involve a better power converter, improved wiring or changes to the circuit design."
      },
      {
        "type": "paragraph",
        "text": "This is a typical hardware engineering problem: identify what failed, explain why it happened and prove that the fix works."
      }
    ]
  },
  {
    "id": "skills",
    "heading": "What skills and tools do employers look for?",
    "navLabel": "Skills & tools",
    "paragraphs": [],
    "sourceIds": [
      "figure",
      "standard",
      "apptronik",
      "agility",
      "skydio",
      "shield",
      "i2c"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Circuit design and electronics"
      },
      {
        "type": "paragraph",
        "text": "Start with voltage, current, resistance, transistors, amplifiers and digital logic."
      },
      {
        "type": "paragraph",
        "text": "Engineers need to understand how electronic components behave and how to combine them into a functioning system. Reading component datasheets, calculating power requirements and selecting appropriate parts are fundamental skills."
      },
      {
        "type": "heading",
        "text": "PCB design"
      },
      {
        "type": "paragraph",
        "text": "PCB design turns an electrical schematic into a physical board that can be manufactured."
      },
      {
        "type": "paragraph",
        "text": "Engineers work with component placement, conductive traces, grounding, connectors and manufacturing constraints. More advanced designs may involve high-speed signals or densely packed electronics."
      },
      {
        "type": "paragraph",
        "text": "Common design tools include Altium Designer and KiCad. Altium appears in several reviewed robotics engineering positions, while KiCad provides an accessible route for students and independent projects."
      },
      {
        "type": "heading",
        "text": "Power electronics"
      },
      {
        "type": "paragraph",
        "text": "Robots need electricity at different voltages and current levels. A camera, onboard computer and drive motor may have very different power requirements."
      },
      {
        "type": "paragraph",
        "text": "Power electronics engineers design systems that convert, distribute and protect electrical power. Common responsibilities include voltage regulation, current sensing, power sequencing and motor-drive electronics."
      },
      {
        "type": "paragraph",
        "text": "Battery systems and high-power motor controllers are deeper specializations that require additional training and safety expertise."
      },
      {
        "type": "heading",
        "text": "Hardware testing and debugging"
      },
      {
        "type": "paragraph",
        "text": "Electrical engineers spend considerable time proving that their designs work."
      },
      {
        "type": "paragraph",
        "text": "Important laboratory tools include:"
      },
      {
        "type": "table",
        "caption": "Laboratory tools",
        "columns": [
          "Tool",
          "What it does"
        ],
        "rows": [
          [
            "Multimeter",
            "Measures voltage, current and resistance"
          ],
          [
            "Oscilloscope",
            "Displays how electrical signals change over time"
          ],
          [
            "Logic analyzer",
            "Captures digital communications between components"
          ],
          [
            "Bench power supply",
            "Provides controlled electrical power during testing"
          ],
          [
            "Electronic load",
            "Tests how a power supply behaves under different loads"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Knowing how to use these instruments is only part of the job. Engineers must also know what to measure, what results to expect and how to investigate unexpected behavior."
      },
      {
        "type": "heading",
        "text": "Communication interfaces"
      },
      {
        "type": "paragraph",
        "text": "Robot components need ways to exchange information."
      },
      {
        "type": "paragraph",
        "text": "SPI and I2C commonly connect electronic devices over short distances, while CAN is often used for robust communication between controllers and subsystems. Camera and computing systems may use higher-speed interfaces."
      },
      {
        "type": "paragraph",
        "text": "Engineers do not need to master every interface immediately. They should understand the requirements of the systems they design."
      },
      {
        "type": "heading",
        "text": "Programming and automation"
      },
      {
        "type": "paragraph",
        "text": "Electrical engineering is primarily a hardware discipline, but programming is increasingly useful."
      },
      {
        "type": "paragraph",
        "text": "Python can automate measurements, collect test results and analyze hardware performance. Familiarity with C or C++ also helps when working with microcontrollers and firmware engineers."
      },
      {
        "type": "paragraph",
        "text": "A strong engineer can work across the hardware-software boundary without necessarily owning both disciplines."
      }
    ]
  },
  {
    "id": "education",
    "heading": "What education do you need?",
    "navLabel": "Education",
    "paragraphs": [],
    "sourceIds": [
      "bls",
      "figure",
      "standard",
      "shield"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "A bachelor's degree in electrical engineering, electronics engineering or a closely related field is the most common route."
      },
      {
        "type": "paragraph",
        "text": "The most useful preparation includes circuit analysis, analog and digital electronics, mathematics, embedded systems and hands-on laboratory work."
      },
      {
        "type": "paragraph",
        "text": "A robotics-specific degree is not necessary. Employers often recruit electrical engineers who developed their skills in other hardware industries."
      },
      {
        "type": "table",
        "caption": "What employers expect at different levels",
        "columns": [
          "Employer",
          "Position",
          "Representative qualifications"
        ],
        "rows": [
          [
            "Shield AI",
            "Electrical Engineer I — New Grad",
            "Engineering degree or equivalent, strong fundamentals and practical project experience"
          ],
          [
            "Figure",
            "Electrical Engineer, Torso",
            "Related engineering degree, 2+ years of experience and hands-on PCBA design and testing"
          ],
          [
            "Standard Bots",
            "Senior Electrical Engineer",
            "Related engineering degree, 5+ years of electronics design experience and hardware taken through production"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These requirements illustrate how responsibilities change with experience."
      },
      {
        "type": "paragraph",
        "text": "An early-career engineer may work on individual circuits, testing and design tasks under supervision. Experienced engineers are expected to make more independent design decisions and take hardware from concept into production."
      },
      {
        "type": "paragraph",
        "text": "At the senior and staff levels, responsibilities may extend to electrical architecture, complex failure investigations and technical decisions affecting several teams."
      },
      {
        "type": "heading",
        "text": "Can you enter without an engineering degree?"
      },
      {
        "type": "paragraph",
        "text": "It is possible to enter electronics through technician roles, apprenticeships, vocational training or substantial practical experience."
      },
      {
        "type": "paragraph",
        "text": "However, electronics technicians and electrical design engineers are different occupations. Technicians often assemble, test, maintain or repair equipment, while design engineers typically make decisions about circuit architecture, component selection and hardware performance."
      },
      {
        "type": "paragraph",
        "text": "Someone without a technical background can begin by learning circuit fundamentals and gaining supervised laboratory experience. Moving into an electrical design position generally requires more advanced engineering knowledge and evidence of practical design ability."
      },
      {
        "type": "paragraph",
        "text": "Some employers accept equivalent experience, but that should not be interpreted as meaning a short training course can replace the underlying engineering foundations."
      }
    ]
  },
  {
    "id": "salary",
    "heading": "How much do electrical engineers in robotics earn?",
    "navLabel": "Compensation",
    "paragraphs": [],
    "sourceIds": [
      "compensation",
      "evidence",
      "shield",
      "figure",
      "standard",
      "skydio-all"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Electrical engineering compensation varies considerably by location, experience and technical responsibility."
      },
      {
        "type": "paragraph",
        "text": "An engineer designing individual circuits may earn substantially less than a senior specialist responsible for the electrical architecture of an entire robotic platform."
      },
      {
        "type": "compensation",
        "caption": "Selected U.S. salary advertisements — November 2026",
        "examples": evidence.roles['electrical-engineer'].compensation,
        "note": ""
      },
      {
        "type": "paragraph",
        "text": "These are advertised salary ranges, not guaranteed offers or estimates of what all robotics electrical engineers earn. Some positions offer additional bonuses or equity compensation."
      },
      {
        "type": "paragraph",
        "text": "The examples also cover different career levels. An entry-level position should not be compared directly with a senior engineering role without accounting for experience and responsibilities."
      },
      {
        "type": "heading",
        "text": "What determines compensation?"
      },
      {
        "type": "paragraph",
        "text": "Experience and ownership. Engineers responsible for entire subsystems, production releases or technically complex designs generally command higher compensation than engineers working under close supervision."
      },
      {
        "type": "paragraph",
        "text": "Specialization. Skills in high-speed electronics, motor drives, power conversion and complex embedded systems can be particularly valuable when they match an employer's needs."
      },
      {
        "type": "paragraph",
        "text": "Location and employer. Compensation differs across geographic markets, company sizes and industries."
      },
      {
        "type": "paragraph",
        "text": "Equity and bonuses. Startup compensation may include stock options, while larger employers may offer additional cash or equity incentives. These arrangements should be evaluated separately from base salary."
      },
      {
        "type": "paragraph",
        "text": "The $181,000 Black Scarab estimate shown above is a separate research figure and is not calculated from the four illustrative advertisements in this table."
      }
    ]
  },
  {
    "id": "employers",
    "heading": "Which companies hire robotics electrical engineers?",
    "navLabel": "Hiring employers",
    "paragraphs": [],
    "sourceIds": [
      "figure",
      "agility",
      "apptronik",
      "standard",
      "skydio",
      "shield"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Electrical engineers work across humanoid robotics, industrial automation, autonomous vehicles and drones."
      },
      {
        "type": "paragraph",
        "text": "The most relevant employers depend on which electrical systems an engineer wants to design."
      },
      {
        "type": "table",
        "caption": "Employer examples",
        "columns": [
          "Employer",
          "Robotics application",
          "Electrical engineering focus"
        ],
        "rows": [
          [
            "Figure",
            "Humanoid robots",
            "Embedded electronics, sensing, compute and compact circuit boards"
          ],
          [
            "Agility Robotics",
            "Humanoid robots",
            "Robot electronics, integration and hardware reliability"
          ],
          [
            "Apptronik",
            "Humanoid robots",
            "Power distribution, battery systems and electrical architecture"
          ],
          [
            "Standard Bots",
            "Industrial robots",
            "Motor controllers, power electronics, cameras and sensing"
          ],
          [
            "Skydio",
            "Autonomous drones",
            "Embedded computing, cameras, communications and power systems"
          ],
          [
            "Shield AI",
            "Autonomous aircraft",
            "Avionics, electrical design, hardware testing and reliability"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "A company does not need to manufacture humanoids to offer valuable robotics electrical engineering experience."
      },
      {
        "type": "paragraph",
        "text": "Industrial robots, drones and autonomous mobile systems face many of the same underlying challenges: delivering power, connecting sensors, controlling actuators and maintaining reliability in demanding environments."
      },
      {
        "type": "heading",
        "text": "What job titles should you search for?"
      },
      {
        "type": "paragraph",
        "text": "Useful search terms include Electrical Engineer, Electronics Engineer, Hardware Design Engineer, Power Electronics Engineer and Electrical Systems Engineer."
      },
      {
        "type": "paragraph",
        "text": "Read the actual responsibilities. An electrical engineering position might involve PCB design, system integration, manufacturing equipment, building infrastructure or test engineering. The title alone rarely explains the work."
      }
    ]
  },
  {
    "id": "transition",
    "heading": "How to transition into robotics electrical engineering",
    "navLabel": "Career transitions",
    "paragraphs": [],
    "sourceIds": [
      "standard",
      "skydio",
      "shield",
      "figure",
      "bls"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "The most practical route depends on the technical experience you already have."
      },
      {
        "type": "table",
        "caption": "Routes into robotics electronics",
        "columns": [
          "Your background",
          "Skills to develop",
          "A useful first project"
        ],
        "rows": [
          [
            "Automotive or aerospace electronics",
            "Robotics hardware requirements and system integration",
            "Adapt an existing sensor or controller design to a robotic subsystem"
          ],
          [
            "Consumer electronics",
            "Motor-control and robotics power requirements",
            "Design an electronics interface for a small mobile robot"
          ],
          [
            "Embedded software",
            "Circuit theory, PCB design and laboratory measurement",
            "Design and test a PCB connected to a microcontroller"
          ],
          [
            "Electronics technician",
            "Circuit analysis, design decisions and engineering documentation",
            "Redesign and validate a low-voltage interface board"
          ],
          [
            "Student or career changer",
            "Mathematics, electronics and laboratory fundamentals",
            "Build and document a sensor-board project"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "If you already work in electrical engineering"
      },
      {
        "type": "paragraph",
        "text": "You may not need to start over."
      },
      {
        "type": "paragraph",
        "text": "Experience with power converters, embedded processors, sensing circuits or electrical testing can transfer directly into robotics."
      },
      {
        "type": "paragraph",
        "text": "Select a specialization that matches your background, identify the additional robotics requirements and build a project demonstrating that connection."
      },
      {
        "type": "paragraph",
        "text": "For example, an automotive electronics engineer familiar with CAN communication and motor controllers may already possess skills relevant to mobile robots and industrial automation."
      },
      {
        "type": "heading",
        "text": "If you work in software"
      },
      {
        "type": "paragraph",
        "text": "Understanding embedded programming is useful, but electrical engineering requires more than writing code for hardware."
      },
      {
        "type": "paragraph",
        "text": "Learn circuit analysis, schematic design and laboratory measurement. Then build a small electronic system in which you own the hardware design rather than only the firmware."
      },
      {
        "type": "heading",
        "text": "If you are starting from scratch"
      },
      {
        "type": "paragraph",
        "text": "Begin with mathematics and fundamental electronics before attempting complex robotics projects."
      },
      {
        "type": "paragraph",
        "text": "A practical sequence is to learn basic circuits, understand common components, use a multimeter, build simple low-voltage circuits and then progress to schematic and PCB design."
      },
      {
        "type": "paragraph",
        "text": "An electronics course or personal project can help establish interest and practical aptitude. For a long-term electrical design engineering career, evaluate the education and experience requirements of the employers you want to join."
      },
      {
        "type": "heading",
        "text": "What matters in an interview?"
      },
      {
        "type": "paragraph",
        "text": "Be prepared to explain a real hardware problem in detail."
      },
      {
        "type": "paragraph",
        "text": "Employers may ask why you selected a component, how you checked a circuit, what failed during testing or how you diagnosed an unexpected measurement."
      },
      {
        "type": "paragraph",
        "text": "A convincing answer explains the original requirement, the decision you made, the measurements you collected and the result."
      }
    ]
  },
  {
    "id": "portfolio",
    "heading": "Build your first robotics electronics project",
    "navLabel": "Portfolio project",
    "paragraphs": [],
    "sourceIds": [
      "kicad",
      "i2c",
      "i2c-pullups"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Design a distance-sensor board for a mobile robot"
      },
      {
        "type": "paragraph",
        "text": "A mobile robot needs sensors to detect obstacles. This project focuses on building a small electronic board that connects a distance sensor to a microcontroller."
      },
      {
        "type": "paragraph",
        "text": "You do not need to construct an entire robot."
      },
      {
        "type": "paragraph",
        "text": "The objective is to demonstrate skills employers care about: defining requirements, drawing schematics, creating a PCB, testing electrical signals and investigating a hardware fault."
      },
      {
        "type": "paragraph",
        "text": "Use a low-voltage, 3.3V design with a compatible I2C distance-sensor module and a microcontroller development board."
      },
      {
        "type": "heading",
        "text": "Step 1: Define what the board needs to do"
      },
      {
        "type": "paragraph",
        "text": "The board should provide appropriate power to the sensor and connect its communication signals to the microcontroller."
      },
      {
        "type": "paragraph",
        "text": "Document the operating voltage, connector pins, expected sensor behavior and measurement requirements."
      },
      {
        "type": "paragraph",
        "text": "Check the sensor module's datasheet before selecting components."
      },
      {
        "type": "heading",
        "text": "Step 2: Draw the circuit"
      },
      {
        "type": "paragraph",
        "text": "Use KiCad to create an electrical schematic."
      },
      {
        "type": "paragraph",
        "text": "Include the sensor connection, power and ground, relevant decoupling capacitors, accessible test points and any necessary I2C pull-up resistors."
      },
      {
        "type": "paragraph",
        "text": "Some modules already contain pull-up resistors. Check the complete circuit before adding more."
      },
      {
        "type": "heading",
        "text": "Step 3: Design the PCB"
      },
      {
        "type": "paragraph",
        "text": "Convert the schematic into a board layout."
      },
      {
        "type": "paragraph",
        "text": "Place components, route conductive traces and label important connections. Run KiCad's electrical and design-rule checks."
      },
      {
        "type": "paragraph",
        "text": "Prepare the manufacturing files and bill of materials."
      },
      {
        "type": "heading",
        "text": "Step 4: Assemble and test"
      },
      {
        "type": "paragraph",
        "text": "Assemble the board and inspect it for obvious errors."
      },
      {
        "type": "paragraph",
        "text": "Apply power using a suitable current-limited bench supply. Verify the supply voltage and check that the sensor communicates with the microcontroller."
      },
      {
        "type": "paragraph",
        "text": "Keep the project within low-voltage electronics. Avoid mains power, large battery packs and high-power motor circuits."
      },
      {
        "type": "heading",
        "text": "Step 5: Investigate a hardware problem"
      },
      {
        "type": "paragraph",
        "text": "Introduce a controlled, non-destructive test condition."
      },
      {
        "type": "paragraph",
        "text": "For example, on a test setup where no other I2C pull-ups are present, compare communication behavior with the required pull-up resistors connected and disconnected."
      },
      {
        "type": "paragraph",
        "text": "Use an oscilloscope or logic analyzer to examine the signals. Record the failure, restore the correct circuit and verify communication again."
      },
      {
        "type": "paragraph",
        "text": "This demonstrates a valuable engineering skill: connecting an observed failure to a measurable electrical cause."
      },
      {
        "type": "heading",
        "text": "Step 6: Document the results"
      },
      {
        "type": "paragraph",
        "text": "Create a short technical report explaining what you designed, why you selected the components, how you tested the board and what you learned."
      },
      {
        "type": "paragraph",
        "text": "Include measurements rather than relying only on a video showing the sensor working."
      },
      {
        "type": "heading",
        "text": "What to include in your portfolio"
      },
      {
        "type": "list",
        "items": [
          "Electrical requirements and a simple system diagram.",
          "Schematics, PCB design files and bill of materials.",
          "Photos of the assembled board.",
          "Measurements showing power and communication behavior.",
          "A documented hardware fault, diagnosis and correction.",
          "A short video demonstrating distance measurements.",
          "A brief explanation of improvements for a second board revision."
        ],
        "ordered": false
      },
      {
        "type": "paragraph",
        "text": "If you do not have laboratory access, begin with schematic design, simulation and PCB layout. Clearly distinguish simulated results from measurements performed on physical hardware."
      },
      {
        "type": "paragraph",
        "text": "A small board that has been designed, tested, debugged and documented can demonstrate more engineering ability than an ambitious robot project with little evidence of how its electronics were developed."
      }
    ]
  }
],
  nextSteps:{
  "id": "next-steps",
  "heading": "Where to go next",
  "paragraphs": [],
  "sourceIds": [
    "kicad",
    "i2c",
    "kicad-learning"
  ],
  "blocks": [
    {
      "type": "resources",
      "items": [
        {
          "title": "KiCad — Getting Started",
          "href": "https://docs.kicad.org/10.0/en/getting_started_in_kicad/getting_started_in_kicad.html",
          "description": "Learn schematic capture, PCB layout, design checks and preparation of manufacturing files using the official tutorial."
        },
        {
          "title": "Adafruit — Working with I2C Devices",
          "href": "https://learn.adafruit.com/working-with-i2c-devices",
          "description": "Understand how sensors communicate with microcontrollers, including wiring, logic levels, device addresses and pull-up resistors."
        },
        {
          "title": "KiCad — Learning Resources",
          "href": "https://www.kicad.org/help/learning-resources/",
          "description": "Find additional PCB design tutorials and practical exercises to develop hardware-design skills."
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Start with one working circuit. Once you can explain its design decisions and diagnose its failures, move toward more complex projects involving power distribution, multiple sensors or motor-control electronics."
    }
  ]
},
  researchNotes:[
    `The guide uses Black Scarab’s November 2, 2026 snapshot (${role.postingCount} electrical-cohort advertisements across ${role.employerCount} selected employers). The broad cohort includes adjacent test, manufacturing, infrastructure and thermal work. Selected full-source reviews support the guide’s electronics-design examples; original classifications and review flags are unchanged. No robotics-only skill prevalence or live-opening count is inferred.`,
    `The compensation estimate uses ${compensation.postingCount} U.S. advertisements across ${compensation.employerCount} employers. It is the median of their annual salary-range midpoints ($${compensation.exactMedianMidpoint.toLocaleString('en-US')}), rounded to the nearest $1,000. The sample spans early-career through staff individual contributors. Structured annual USD ranges and selected explicit annual base-salary clauses are included; structured salary fields do not always identify base pay. Bonus and equity are excluded. The linked derivation preserves every observation, exclusion and source hash.`,
    'Dedicated test-equipment, manufacturing, thermal, sustainment, diagnostics and people-management roles are excluded from the estimate. Conflicting structured/textual pay and unverified annual periods are also excluded. Similar but distinct requisitions count separately. The estimate describes this selected posting sample, not a representative industry salary or a new-graduate offer.',
    'Employer responsibilities and qualifications were checked against stored full sources, with current employer-page checks where available. The motor-start scenario, transition advice and sensor-board project are Black Scarab educational examples. They are not reported employer case studies or an implemented hardware design. Editorial review: November 9, 2026.',
  ],
  citations:[
    source('study','Black Scarab: November 2 employer research','/research/physical-ai-careers-2026-11-02.json','Dated selected-employer aggregate and career taxonomy.'),
    source('evidence','Electrical engineering: reviewed employer evidence',evidencePath,'Selected full-source review, qualifications, original collection dates and source hashes.'),
    source('compensation','Black Scarab: electrical engineering compensation estimate',compensationPath,'Annual USD observations, midpoint calculation, eligibility decisions and source provenance.'),
    posting('figure','figure:greenhouse:4313470006'),posting('apptronik','apptronik:greenhouse:6150041004'),
    posting('agility','agility:greenhouse:6103178004'),posting('shield','shield-ai:lever:1b229cdc-9a0b-4704-b39b-b3b4c6e3fa89'),
    posting('standard','standard-bots:ashby:05715409-54f5-4e14-ba35-67f47b30d845'),posting('skydio','skydio:ashby:9cb4555e-4fd1-410b-921b-cc17d56ba5df'),posting('skydio-all','skydio:ashby:f0c26a3c-d999-4dc2-8812-b3835f633ded'),
    source('bls','U.S. Bureau of Labor Statistics: Electrical and Electronics Engineers','https://www.bls.gov/ooh/architecture-and-engineering/electrical-and-electronics-engineers.htm','Broad occupation-level education and practical-experience pathways; not the source of the robotics compensation estimate.'),
    source('kicad','KiCad 10: Getting Started',kicad,'Official schematic, layout, rules-check and fabrication tutorial.'),
    source('i2c','Adafruit: Working with I2C Devices',i2c,'Official guide to device addresses, wiring, interfaces and communication behavior.'),
    source('i2c-pullups','Adafruit: I2C pull-up resistors',pullups,'Explains logic-level pull-ups, existing resistors and disconnected-bus behavior.'),
    source('kicad-learning','KiCad: Learning Resources',kicadLearning,'Official collection of PCB-design tutorials and exercises.'),
  ],
};
