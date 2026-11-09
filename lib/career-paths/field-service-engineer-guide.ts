import type { CareerGuideContent, Citation } from '@/lib/career-paths/types';
import { researchForRole } from '@/lib/career-paths/research';
import evidence from '@/public/research/field-service-engineer-evidence-2026-11-09.json';
import compensation from '@/public/research/field-service-engineer-compensation-2026-11-02.json';
import decisions from '@/research/seo/2026-11-09/decisions.json';

const role=researchForRole('field-service-engineer',evidence.snapshotId);
if(!role||compensation.snapshotId!==evidence.snapshotId)throw new Error('Field service guide research mismatch');
const seo=decisions.guides.find(item=>item.occupationId==='field-service-engineer');
if(!seo)throw new Error('Missing field service SEO decision');
const salary=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(compensation.estimate);
const evidencePath='/research/field-service-engineer-evidence-2026-11-09.json';
const compensationPath='/research/field-service-engineer-compensation-2026-11-02.json';
const linux='https://documentation.ubuntu.com/desktop/en/latest/tutorial/the-linux-command-line-for-beginners/';
const logging='https://docs.python.org/3/howto/logging.html';
const wireshark='https://www.wireshark.org/docs/wsug_html_chunked/';
const safety='https://www.osha.gov/control-hazardous-energy';
const source=(id:string,title:string,url:string,scope:string):Citation=>({id,title,url,scope,accessedAt:'2026-11-09'});
const posting=(id:string,recordId:string):Citation=>{
  const record=evidence.records.find(item=>item.id===recordId);
  if(!record)throw new Error(`Missing field service evidence: ${recordId}`);
  return source(id,`${record.employer}: ${record.title}`,record.url,'Employer advertisement collected November 2, 2026; contextual review, qualifications and original source hashes are preserved in the evidence export.');
};

export const fieldServiceEngineerGuide:CareerGuideContent={
  id:'field-service-engineer',occupationId:'field-service-engineer',familyId:'integration-operations',slug:'field-service-engineer',
  title:seo.h1,seoTitle:seo.seoTitle,description:seo.description,status:'published',publishedAt:'2026-11-09',reviewedAt:'2026-11-09',
  research:{snapshotId:evidence.snapshotId,roleId:'field-service-engineer',evidencePath},
  deck:"Keep robots running in the real world by diagnosing problems, repairing equipment and maintaining reliable operations.",
  introduction:["Imagine a warehouse where dozens of robots move packages throughout the day. Suddenly, one stops operating. The warehouse manager needs it running again, but the robot's error message doesn't explain exactly what went wrong."],
  illustration:{src:'/career-paths/field-service-engineer-lab.webp',width:1672,height:941,alt:'Conceptual illustration of a helmeted technician inspecting an open service module on a parked autonomous logistics robot in a futuristic warehouse, with charcoal, white and amber details.'},
  overview:[
    {label:'What you do',value:'Troubleshoot, maintain and repair robots at customer facilities',sourceIds:['dexterity','formic','boston']},
    {label:'Core skills',value:'Mechanical and electrical troubleshooting, software diagnostics, networking and communication',sourceIds:['dexterity','formic','skydio']},
    {label:'Education',value:'Technical training, an associate degree, engineering degree or equivalent practical experience',sourceIds:['dexterity','agile','path']},
    {label:'Compensation',value:`${salary}/year`,detail:'Black Scarab estimate',sourceIds:['compensation']},
  ],
  sections:[
  {
    "id": "day-to-day",
    "heading": "What does a field service engineer do in robotics?",
    "navLabel": "The work",
    "paragraphs": [],
    "sourceIds": [
      "dexterity",
      "formic",
      "boston",
      "nimble",
      "serve",
      "skydio",
      "safety"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Imagine a warehouse where dozens of robots move packages throughout the day. Suddenly, one stops operating. The warehouse manager needs it running again, but the robot's error message doesn't explain exactly what went wrong."
      },
      {
        "type": "paragraph",
        "text": "That is where a robotics field service engineer comes in."
      },
      {
        "type": "paragraph",
        "text": "Field service engineers diagnose, maintain and repair robotic systems after they have been deployed to customers. Their responsibility is to keep machines operating reliably and restore service when something breaks."
      },
      {
        "type": "paragraph",
        "text": "Unlike engineers developing new robots in a laboratory, field service engineers work with machines already performing real jobs in warehouses, factories, hospitals and other facilities."
      },
      {
        "type": "paragraph",
        "text": "Their work combines mechanical engineering, electronics, software troubleshooting and customer support. One problem might involve a damaged motor, while another comes from a faulty sensor, a software configuration or a network connection."
      },
      {
        "type": "paragraph",
        "text": "The challenge is determining what went wrong and finding a reliable solution without unnecessary disruption to the customer's operations."
      },
      {
        "type": "heading",
        "text": "What does a typical day look like?"
      },
      {
        "type": "paragraph",
        "text": "No two days are exactly the same."
      },
      {
        "type": "paragraph",
        "text": "An engineer might begin the morning reviewing service tickets from a warehouse where several robots experienced errors overnight."
      },
      {
        "type": "paragraph",
        "text": "At the facility, they speak with the operators, inspect the affected equipment and review diagnostic logs. After identifying the problem, they might replace an approved component, correct a configuration or work with the manufacturer's engineering team on a more complex issue."
      },
      {
        "type": "paragraph",
        "text": "Once the repair is complete, they test the robot to confirm that it operates correctly and document what was done."
      },
      {
        "type": "paragraph",
        "text": "Other days may involve preventive maintenance, software upgrades, equipment installations or training employees on how to operate and maintain their robots."
      },
      {
        "type": "paragraph",
        "text": "Common responsibilities include:"
      },
      {
        "type": "list",
        "items": [
          "Diagnosing failures. Investigating mechanical, electrical, software and communication problems.",
          "Repairing equipment. Replacing damaged components, correcting faults and restoring functionality.",
          "Preventive maintenance. Inspecting and servicing robots to reduce unexpected breakdowns.",
          "Supporting installations. Helping deploy new robots, perform upgrades and verify system operation.",
          "Working with customers. Explaining problems, communicating repair progress and training operators.",
          "Documenting incidents. Recording failures and solutions so recurring problems can be identified."
        ],
        "ordered": true
      },
      {
        "type": "heading",
        "text": "When a warehouse robot suddenly stops"
      },
      {
        "type": "paragraph",
        "text": "Consider an autonomous mobile robot transporting materials across a warehouse."
      },
      {
        "type": "paragraph",
        "text": "The robot stops midway through a task. Its control system reports a motion error, but that message alone does not reveal the cause."
      },
      {
        "type": "paragraph",
        "text": "The field service engineer begins by reviewing the robot's logs, checking its service history and asking the operator what happened before the failure."
      },
      {
        "type": "paragraph",
        "text": "Several explanations are possible:"
      },
      {
        "type": "diagnostic-map",
        "id": "field-diagnostic-map",
        "title": "One symptom, several possible causes",
        "symptom": "The robot stops during a task",
        "branches": [
          {
            "system": "Mechanical",
            "evidence": "",
            "investigation": "A damaged wheel, obstruction or malfunctioning drive assembly"
          },
          {
            "system": "Electrical",
            "evidence": "",
            "investigation": "Loose wiring, damaged connectors or a motor-controller problem"
          },
          {
            "system": "Software",
            "evidence": "",
            "investigation": "Incorrect configuration, failed updates or unexpected system behavior"
          },
          {
            "system": "Network",
            "evidence": "",
            "investigation": "Lost communication between the robot and its control system"
          }
        ],
        "conclusion": "Use the evidence to narrow the cause, then validate the repair."
      },
      {
        "type": "paragraph",
        "text": "Suppose the logs show that the robot stopped responding to motion commands. That could indicate a motor-controller issue, but it might also mean that the commands never reached the robot."
      },
      {
        "type": "paragraph",
        "text": "The engineer compares the available evidence, checks the relevant systems and narrows down the possibilities."
      },
      {
        "type": "paragraph",
        "text": "Once the problem is identified, they follow the appropriate repair procedure and test the robot before returning it to service."
      },
      {
        "type": "paragraph",
        "text": "This process of gathering evidence, identifying the cause and verifying the solution is central to field service engineering."
      },
      {
        "type": "heading",
        "text": "What is the working environment like?"
      },
      {
        "type": "paragraph",
        "text": "Field service engineering is a hands-on occupation that frequently takes place at customer facilities."
      },
      {
        "type": "paragraph",
        "text": "Depending on the employer, engineers may support a single warehouse, several regional customers or robots deployed across the country."
      },
      {
        "type": "paragraph",
        "text": "Travel can be a major part of the job. Boston Dynamics has advertised field service positions requiring up to 80% travel, while other employers operate site-based teams or require weekend and on-call coverage."
      },
      {
        "type": "paragraph",
        "text": "Before accepting a position, candidates should understand how much travel is expected, whether emergency support is required and how the company handles overtime and weekend work."
      },
      {
        "type": "paragraph",
        "text": "The environment can also be physically demanding. Engineers may work around industrial equipment, handle tools and replacement components, or spend time diagnosing systems on a factory floor."
      },
      {
        "type": "paragraph",
        "text": "Because robotic systems can contain moving machinery, electrical equipment and stored energy, technicians must follow their employer's equipment-specific safety and servicing procedures."
      }
    ]
  },
  {
    "id": "skills",
    "heading": "Which skills and tools do employers look for?",
    "navLabel": "Skills & tools",
    "paragraphs": [],
    "sourceIds": [
      "dexterity",
      "formic",
      "nimble",
      "skydio",
      "figure",
      "serve"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Mechanical and electrical troubleshooting"
      },
      {
        "type": "paragraph",
        "text": "Robots combine motors, gears, sensors, wiring and circuit boards."
      },
      {
        "type": "paragraph",
        "text": "Field service engineers need to understand how these parts work together and how to recognize when something is malfunctioning."
      },
      {
        "type": "paragraph",
        "text": "Important skills include reading wiring diagrams, interpreting mechanical drawings, understanding electrical measurements and using appropriate diagnostic tools."
      },
      {
        "type": "paragraph",
        "text": "For example, Dexterity's field service positions involve mechanical assemblies, pneumatics and electrical control systems."
      },
      {
        "type": "paragraph",
        "text": "Engineers do not need to design every component they service, but they must understand enough about its operation to diagnose problems and perform approved repairs."
      },
      {
        "type": "heading",
        "text": "Software diagnostics and Linux"
      },
      {
        "type": "paragraph",
        "text": "Modern robots are controlled by software, which means a mechanical-looking problem may actually originate in the control system."
      },
      {
        "type": "paragraph",
        "text": "Field service engineers often review diagnostic logs, error messages and system configurations to determine why a robot behaved unexpectedly."
      },
      {
        "type": "paragraph",
        "text": "Linux command-line skills are useful because many robotics platforms run software in Linux environments."
      },
      {
        "type": "paragraph",
        "text": "An engineer might use system logs to determine when an error occurred, whether a process stopped running or whether the robot lost communication with another device."
      },
      {
        "type": "paragraph",
        "text": "Basic Python or SQL knowledge can also be useful for analyzing diagnostic data, depending on the employer."
      },
      {
        "type": "paragraph",
        "text": "Nimble Robotics, for example, has sought field engineers with experience using technical logs and SQL to investigate production issues."
      },
      {
        "type": "heading",
        "text": "Networking and connectivity"
      },
      {
        "type": "paragraph",
        "text": "Robots frequently communicate with other machines, servers and fleet-management systems."
      },
      {
        "type": "paragraph",
        "text": "A robot that appears unresponsive may be experiencing a communication problem rather than a mechanical failure."
      },
      {
        "type": "paragraph",
        "text": "Useful networking knowledge includes IP addresses, local networks, wireless connectivity and basic diagnostic commands."
      },
      {
        "type": "paragraph",
        "text": "Skydio's field-support positions illustrate this type of work, with responsibilities involving connected devices, firmware and cloud networking."
      },
      {
        "type": "heading",
        "text": "Structured troubleshooting"
      },
      {
        "type": "paragraph",
        "text": "One of the most valuable skills in field service is knowing how to investigate a problem systematically."
      },
      {
        "type": "paragraph",
        "text": "A good engineer does not immediately replace components because they suspect something is broken."
      },
      {
        "type": "paragraph",
        "text": "They begin with the symptoms, gather evidence and test possible explanations."
      },
      {
        "type": "paragraph",
        "text": "For example, if a robot repeatedly stops at the same location, the engineer might compare its behavior with other robots, review sensor readings and examine the environment before concluding that a component has failed."
      },
      {
        "type": "paragraph",
        "text": "A structured approach makes repairs more reliable and helps prevent the same problem from returning."
      },
      {
        "type": "heading",
        "text": "Customer communication"
      },
      {
        "type": "paragraph",
        "text": "Field service engineers frequently work with warehouse managers, factory supervisors and equipment operators."
      },
      {
        "type": "paragraph",
        "text": "These customers may not have a technical background. They need to understand what is wrong, how operations are affected and what happens next."
      },
      {
        "type": "paragraph",
        "text": "An engineer should be able to explain a complicated problem without overwhelming the customer with technical terminology."
      },
      {
        "type": "paragraph",
        "text": "Good communication also matters when an issue cannot be resolved immediately."
      },
      {
        "type": "paragraph",
        "text": "The engineer may need to escalate the problem to a specialized software or hardware team, providing enough evidence for that team to continue the investigation."
      },
      {
        "type": "heading",
        "text": "Service documentation"
      },
      {
        "type": "paragraph",
        "text": "A completed repair should leave a clear record of what happened."
      },
      {
        "type": "paragraph",
        "text": "Useful service reports include the equipment involved, reported symptoms, diagnostic evidence, corrective actions and test results."
      },
      {
        "type": "paragraph",
        "text": "Companies such as Serve Robotics emphasize technical notes and supporting evidence in their repair processes."
      },
      {
        "type": "paragraph",
        "text": "Documentation helps identify recurring failures, improve future repairs and provide feedback to the engineering teams developing the robots."
      }
    ]
  },
  {
    "id": "education",
    "heading": "What education and experience do you need?",
    "navLabel": "Education",
    "paragraphs": [],
    "sourceIds": [
      "dexterity",
      "agile",
      "path",
      "figure",
      "formic",
      "boston",
      "serve"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Field service engineering offers several routes into robotics."
      },
      {
        "type": "paragraph",
        "text": "Unlike some robotics research positions, these jobs do not always require a four-year engineering degree."
      },
      {
        "type": "paragraph",
        "text": "Employers frequently value hands-on experience in industrial maintenance, mechatronics, electronics, automation and other technical fields."
      },
      {
        "type": "heading",
        "text": "Common educational pathways"
      },
      {
        "type": "table",
        "caption": "Common educational pathways",
        "columns": [
          "Background",
          "How it can prepare you"
        ],
        "rows": [
          [
            "Mechatronics or robotics",
            "Combines mechanical systems, electronics and automation"
          ],
          [
            "Electrical or mechanical engineering",
            "Provides a strong foundation for understanding complex equipment"
          ],
          [
            "Technical or trade school",
            "Develops practical skills in maintenance, electronics and troubleshooting"
          ],
          [
            "Associate degree",
            "Can provide focused preparation in engineering technology or industrial automation"
          ],
          [
            "Relevant work experience",
            "Demonstrates the ability to service and diagnose real equipment"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "What employers accept"
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
            "Dexterity",
            "Bachelor's degree, associate degree or equivalent practical field-service experience"
          ],
          [
            "Agile Robots",
            "Relevant degree or vocational training"
          ],
          [
            "Path Robotics",
            "Technical training, trade certification, associate degree or equivalent experience"
          ],
          [
            "Figure",
            "Several years working with complex systems, including diagnostic and assembly experience"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Requirements vary by role."
      },
      {
        "type": "paragraph",
        "text": "An entry-level service technician may focus on maintenance and component replacement, while an experienced field service engineer may be responsible for complex troubleshooting, installations and escalations involving multiple systems."
      },
      {
        "type": "heading",
        "text": "Can you enter robotics from another industry?"
      },
      {
        "type": "paragraph",
        "text": "Field service can provide a route into robotics for people with practical technical experience."
      },
      {
        "type": "paragraph",
        "text": "Someone who maintains industrial machinery, repairs automobiles or services electrical equipment may already possess useful skills."
      },
      {
        "type": "paragraph",
        "text": "The main challenge is learning how those skills apply to robotics hardware, sensors, software and communication systems."
      },
      {
        "type": "paragraph",
        "text": "Companies such as Boston Dynamics and Serve Robotics have recognized relevant experience from other technical industries."
      },
      {
        "type": "heading",
        "text": "What should you learn first?"
      },
      {
        "type": "paragraph",
        "text": "Start with the foundations most commonly used in robotics troubleshooting:"
      },
      {
        "type": "list",
        "items": [
          "Mechanical components, motors, sensors and basic electrical systems.",
          "Reading schematics, wiring diagrams and maintenance instructions.",
          "Using diagnostic tools and interpreting equipment errors.",
          "Linux, system logs and basic networking.",
          "Documenting problems and explaining technical issues clearly."
        ],
        "ordered": false
      },
      {
        "type": "paragraph",
        "text": "As you gain experience, develop deeper knowledge of the particular robots and automation systems you want to service."
      },
      {
        "type": "paragraph",
        "text": "Manufacturer training is especially important because different robotic platforms have different maintenance procedures, diagnostic tools and safety requirements."
      }
    ]
  },
  {
    "id": "salary",
    "heading": "How much do robotics field service engineers earn?",
    "navLabel": "Compensation",
    "paragraphs": [],
    "sourceIds": [
      "compensation",
      "dexterity",
      "boston",
      "nimble",
      "formic"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Robotics field service compensation depends on experience, technical responsibilities, location and travel requirements."
      },
      {
        "type": "paragraph",
        "text": "Black Scarab estimates annual compensation at $113,000 based on reviewed U.S. robotics job advertisements."
      },
      {
        "type": "compensation",
        "caption": "Selected U.S. salary advertisements",
        "note": "Annual advertised salary · collected November 2, 2026",
        "examples": evidence.roles['field-service-engineer'].compensation
      },
      {
        "type": "heading",
        "text": "What influences compensation?"
      },
      {
        "type": "paragraph",
        "text": "Experience and technical responsibility. Compare the level of independent diagnosis, repair and escalation expected in each role."
      },
      {
        "type": "paragraph",
        "text": "Travel and on-call requirements. Some positions involve extensive customer-site travel, emergency support or work outside normal business hours."
      },
      {
        "type": "paragraph",
        "text": "Equipment complexity. Supporting advanced autonomous systems may require deeper software, networking and systems knowledge."
      },
      {
        "type": "paragraph",
        "text": "Location and employer. Pay differs between geographic regions and robotics companies."
      },
      {
        "type": "paragraph",
        "text": "Some employers also pay field service personnel hourly. Formic, for example, has advertised robotics field service positions paying $29–$44 per hour, with overtime opportunities."
      },
      {
        "type": "paragraph",
        "text": "Candidates should compare total compensation, expected working hours and travel requirements rather than looking at base salary alone."
      }
    ]
  },
  {
    "id": "employers",
    "heading": "Which companies hire robotics field service engineers?",
    "navLabel": "Employers & titles",
    "paragraphs": [],
    "sourceIds": [
      "dexterity",
      "boston",
      "nimble",
      "formic",
      "path",
      "figure",
      "serve",
      "skydio"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Field service roles exist wherever companies deploy robots that need ongoing maintenance and technical support."
      },
      {
        "type": "heading",
        "text": "Warehouses and logistics"
      },
      {
        "type": "paragraph",
        "text": "Boston Dynamics, Dexterity and Nimble Robotics operate in environments where reliable automation is important to daily operations."
      },
      {
        "type": "paragraph",
        "text": "Field service engineers help maintain robots, diagnose failures and minimize equipment downtime."
      },
      {
        "type": "paragraph",
        "text": "These facilities often operate on demanding schedules, making troubleshooting and operational reliability particularly important."
      },
      {
        "type": "heading",
        "text": "Industrial automation and manufacturing"
      },
      {
        "type": "paragraph",
        "text": "Formic and Path Robotics support robotic systems used in manufacturing."
      },
      {
        "type": "paragraph",
        "text": "Field service work may involve industrial robot arms, welding equipment, sensors, electrical systems and other automation components."
      },
      {
        "type": "paragraph",
        "text": "Engineers in these environments benefit from experience with industrial machinery, control systems and maintenance procedures."
      },
      {
        "type": "heading",
        "text": "Humanoid and delivery robots"
      },
      {
        "type": "paragraph",
        "text": "Figure and Serve Robotics provide examples of field roles involving newer robotic platforms."
      },
      {
        "type": "paragraph",
        "text": "Figure's commercial-site teams support humanoid robots and related equipment, while Serve Robotics maintains and repairs delivery robots operating in real environments."
      },
      {
        "type": "paragraph",
        "text": "These roles can involve diagnosing unfamiliar or evolving systems, making careful documentation and communication with the product engineering team especially valuable."
      },
      {
        "type": "heading",
        "text": "Drones and connected autonomous systems"
      },
      {
        "type": "paragraph",
        "text": "Skydio employs field-support personnel who troubleshoot drones, docking equipment, firmware and connectivity issues."
      },
      {
        "type": "paragraph",
        "text": "Unlike traditional mechanical maintenance, these roles can place greater emphasis on software, communication systems and remote diagnostics."
      },
      {
        "type": "heading",
        "text": "Related job titles"
      },
      {
        "type": "paragraph",
        "text": "Relevant searches include Robotics Field Service Engineer, Robotics Field Engineer, Field Service Technician, Robot Service Engineer and Field Support Engineer."
      },
      {
        "type": "paragraph",
        "text": "Job titles vary between companies. Some positions emphasize physical maintenance and repairs, while others focus on software troubleshooting, installations or customer support."
      },
      {
        "type": "paragraph",
        "text": "Review the actual responsibilities before applying."
      }
    ]
  },
  {
    "id": "field-service-vs-integration",
    "heading": "How is field service different from robotics integration and operations?",
    "navLabel": "Service, integration & operations",
    "paragraphs": [],
    "sourceIds": [
      "dexterity",
      "formic",
      "boston"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "These careers often work closely together, but their primary responsibilities are different."
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
            "Field Service Engineer",
            "Diagnoses faults, repairs equipment and maintains reliable operation"
          ],
          [
            "Robotics Integration Engineer",
            "Connects robots with other equipment and makes complete systems work together"
          ],
          [
            "Robot Operations Specialist",
            "Monitors and operates robots during daily activities"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "For example, an integration engineer might help install a robotic picking system in a warehouse."
      },
      {
        "type": "paragraph",
        "text": "An operations specialist oversees the system during normal shifts."
      },
      {
        "type": "paragraph",
        "text": "If a robot develops a fault, the field service engineer investigates and helps restore operation."
      },
      {
        "type": "paragraph",
        "text": "At smaller robotics companies, these responsibilities may overlap."
      }
    ]
  },
  {
    "id": "transition",
    "heading": "How to transition into robotics field service",
    "navLabel": "Career transitions",
    "paragraphs": [],
    "sourceIds": [
      "dexterity",
      "formic",
      "boston",
      "serve",
      "agile",
      "nimble"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "The best route depends on the practical experience you already have."
      },
      {
        "type": "table",
        "caption": "Routes into robotics field service",
        "columns": [
          "Your background",
          "Skills to develop",
          "Suggested first step"
        ],
        "rows": [
          [
            "Industrial maintenance",
            "Robotics sensors, software logs and networking",
            "Learn diagnostics for a robotic or automated system"
          ],
          [
            "Automotive technician",
            "Industrial controls, automation and Linux",
            "Study robot actuators, sensors and control systems"
          ],
          [
            "IT or technical support",
            "Mechanical systems, electrical fundamentals and hands-on servicing",
            "Complete a basic mechatronics project"
          ],
          [
            "Mechanical or electrical engineering",
            "Field diagnostics, service procedures and customer support",
            "Document a complete equipment troubleshooting exercise"
          ],
          [
            "Complete beginner",
            "Technical fundamentals, tools and structured troubleshooting",
            "Pursue introductory mechatronics training and a practical project"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "If you work in industrial maintenance or a technical trade"
      },
      {
        "type": "paragraph",
        "text": "Your experience diagnosing equipment failures can transfer directly into robotics."
      },
      {
        "type": "paragraph",
        "text": "You may already understand motors, electrical systems, mechanical assemblies and preventive maintenance."
      },
      {
        "type": "paragraph",
        "text": "Focus on learning the software side of robotics, particularly system logs, sensors, Linux and communication networks."
      },
      {
        "type": "paragraph",
        "text": "Experience with industrial automation or programmable logic controllers can also be useful."
      },
      {
        "type": "heading",
        "text": "If you are an automotive technician"
      },
      {
        "type": "paragraph",
        "text": "Modern vehicles contain mechanical systems, electrical components, sensors and onboard computers."
      },
      {
        "type": "paragraph",
        "text": "Many of the troubleshooting principles used in automotive service apply to robots."
      },
      {
        "type": "paragraph",
        "text": "The additional preparation may involve industrial automation, robotic actuators and software-controlled systems."
      },
      {
        "type": "paragraph",
        "text": "A practical project demonstrating electrical and software diagnostics can help show how your experience transfers."
      },
      {
        "type": "heading",
        "text": "If you come from IT or technical support"
      },
      {
        "type": "paragraph",
        "text": "Your experience with networks, logs, troubleshooting and customer communication provides a useful starting point."
      },
      {
        "type": "paragraph",
        "text": "However, robotics field service also requires mechanical and electrical knowledge."
      },
      {
        "type": "paragraph",
        "text": "Develop that foundation through technical coursework and supervised practical work with equipment."
      },
      {
        "type": "heading",
        "text": "If you already have an engineering background"
      },
      {
        "type": "paragraph",
        "text": "An engineering degree provides useful technical preparation, but field service requires a particular approach to problem-solving."
      },
      {
        "type": "paragraph",
        "text": "Rather than designing a new system, you are often diagnosing an existing one with limited information and operational constraints."
      },
      {
        "type": "paragraph",
        "text": "Develop skills in service documentation, repair validation, customer communication and systematic fault isolation."
      },
      {
        "type": "heading",
        "text": "If you are starting from scratch"
      },
      {
        "type": "paragraph",
        "text": "Begin with basic electrical and mechanical principles, then develop practical troubleshooting skills."
      },
      {
        "type": "paragraph",
        "text": "An introductory mechatronics or industrial maintenance program can provide a structured foundation."
      },
      {
        "type": "paragraph",
        "text": "Entry-level service technician and maintenance positions may offer a path toward more specialized robotics field service roles."
      },
      {
        "type": "heading",
        "text": "What matters in an interview?"
      },
      {
        "type": "paragraph",
        "text": "Employers want to know how you approach problems, especially when the cause is not obvious."
      },
      {
        "type": "paragraph",
        "text": "Prepare an example of a technical issue you investigated."
      },
      {
        "type": "paragraph",
        "text": "Explain what the symptoms were, which evidence you collected, what alternative explanations you considered and how you confirmed that the problem was resolved."
      },
      {
        "type": "paragraph",
        "text": "You may also be asked how you would handle an urgent customer issue or what you would do if a repair required assistance from another engineering team."
      },
      {
        "type": "paragraph",
        "text": "A clear troubleshooting process can be more persuasive than simply listing the equipment you know how to use."
      }
    ]
  },
  {
    "id": "portfolio",
    "heading": "Build your first robotics service project",
    "navLabel": "Portfolio project",
    "paragraphs": [],
    "sourceIds": [
      "logging",
      "linux",
      "wireshark",
      "safety"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Diagnose a simulated warehouse robot failure"
      },
      {
        "type": "paragraph",
        "text": "A useful beginner project is to investigate a fictional robot that stops responding during a warehouse task."
      },
      {
        "type": "paragraph",
        "text": "You do not need to buy an expensive robot or work with industrial machinery."
      },
      {
        "type": "paragraph",
        "text": "Instead, create a small simulation that produces diagnostic logs for a mobile robot performing a simple assignment."
      },
      {
        "type": "paragraph",
        "text": "The goal is to demonstrate how a field service engineer interprets symptoms, investigates possible causes and confirms that a problem has been corrected."
      },
      {
        "type": "heading",
        "text": "Step 1: Define normal operation"
      },
      {
        "type": "paragraph",
        "text": "Imagine a robot that receives a task, travels to a location and reports when it has completed the assignment."
      },
      {
        "type": "paragraph",
        "text": "Create a simple sequence of expected events:"
      },
      {
        "type": "list",
        "items": [
          "The control system sends a task.",
          "The robot accepts the command.",
          "The robot reports movement and position updates.",
          "The robot reaches its destination.",
          "The robot reports task completion."
        ],
        "ordered": true
      },
      {
        "type": "paragraph",
        "text": "Document what successful operation should look like."
      },
      {
        "type": "heading",
        "text": "Step 2: Create diagnostic logs"
      },
      {
        "type": "paragraph",
        "text": "Use Python or a simple text file to create a simulated event log."
      },
      {
        "type": "paragraph",
        "text": "Record timestamps, command messages, acknowledgements and task status updates."
      },
      {
        "type": "paragraph",
        "text": "Start with a normal sequence in which the robot completes its assignment successfully."
      },
      {
        "type": "paragraph",
        "text": "Then create a second scenario in which something goes wrong."
      },
      {
        "type": "paragraph",
        "text": "Clearly label the records as simulated."
      },
      {
        "type": "heading",
        "text": "Step 3: Introduce a communication failure"
      },
      {
        "type": "paragraph",
        "text": "Imagine that the connection between the robot and its control system is interrupted."
      },
      {
        "type": "paragraph",
        "text": "The control system sends a movement command, but the robot never receives it."
      },
      {
        "type": "paragraph",
        "text": "The warehouse operator sees that the robot has stopped responding."
      },
      {
        "type": "paragraph",
        "text": "Your task is to determine what happened using the available logs."
      },
      {
        "type": "heading",
        "text": "Step 4: Investigate possible causes"
      },
      {
        "type": "paragraph",
        "text": "Compare several explanations:"
      },
      {
        "type": "table",
        "caption": "Evidence in the simulated incident",
        "columns": [
          "Possible problem",
          "Evidence to investigate"
        ],
        "rows": [
          [
            "Command was never sent",
            "No corresponding outbound command in the control-system log"
          ],
          [
            "Network communication failed",
            "Command was sent but no delivery or acknowledgement was recorded"
          ],
          [
            "Robot accepted but did not complete the task",
            "Acknowledgement exists, but completion events are missing"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Identify which evidence supports your diagnosis and which possibilities can be ruled out."
      },
      {
        "type": "heading",
        "text": "Step 5: Apply a simulated correction"
      },
      {
        "type": "paragraph",
        "text": "Restore the communication connection in your test scenario."
      },
      {
        "type": "paragraph",
        "text": "Run the same task again and verify that the command is received, the robot accepts it and the expected completion events appear."
      },
      {
        "type": "paragraph",
        "text": "Compare the normal, faulty and corrected logs."
      },
      {
        "type": "heading",
        "text": "Step 6: Write a service report"
      },
      {
        "type": "paragraph",
        "text": "Prepare a short incident report containing:"
      },
      {
        "type": "list",
        "items": [
          "The original symptoms and customer impact.",
          "The evidence collected during troubleshooting.",
          "The suspected or confirmed root cause.",
          "The corrective action.",
          "The test results confirming restored operation.",
          "One recommendation for improving future diagnostics."
        ],
        "ordered": false
      },
      {
        "type": "paragraph",
        "text": "Keep the report concise enough that another engineer could understand the incident without repeating the entire investigation."
      },
      {
        "type": "heading",
        "text": "What to include in your portfolio"
      },
      {
        "type": "list",
        "items": [
          "A simple system diagram showing the robot and control system.",
          "Normal and faulty diagnostic logs.",
          "A completed service ticket.",
          "An explanation of how you identified the problem.",
          "Before-and-after test results.",
          "A short troubleshooting guide another person could follow."
        ],
        "ordered": false
      },
      {
        "type": "heading",
        "text": "An optional hands-on extension"
      },
      {
        "type": "paragraph",
        "text": "To demonstrate mechanical and electrical troubleshooting, add a simple low-voltage mechatronics project using an educational motor-and-sensor kit."
      },
      {
        "type": "paragraph",
        "text": "Document a simulated sensor or communication fault, the diagnostic measurements and the steps used to verify normal operation after correcting it."
      },
      {
        "type": "paragraph",
        "text": "This adds physical troubleshooting experience to the software-based exercise."
      },
      {
        "type": "paragraph",
        "text": "Keep the equipment low-voltage and follow the kit manufacturer's instructions."
      }
    ]
  }
],
  nextSteps:{
  "id": "next-steps",
  "heading": "Where to go next",
  "paragraphs": [],
  "sourceIds": [
    "linux",
    "logging",
    "wireshark"
  ],
  "blocks": [
    {
      "type": "resources",
      "items": [
        {
          "title": "Ubuntu — The Linux Command Line for Beginners",
          "href": "https://documentation.ubuntu.com/desktop/en/latest/tutorial/the-linux-command-line-for-beginners/",
          "description": "Learn how to navigate files, inspect information and use terminal commands commonly encountered in Linux-based robotics systems."
        },
        {
          "title": "Python — Logging HOWTO",
          "href": "https://docs.python.org/3/howto/logging.html",
          "description": "Learn how software records events and how diagnostic logs can help investigate failures."
        },
        {
          "title": "Wireshark — User’s Guide",
          "href": "https://www.wireshark.org/docs/wsug_html_chunked/",
          "description": "Explore how network communication can be examined and how packet analysis supports troubleshooting in test environments."
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "A strong starting point is learning to diagnose one problem methodically. Once you can explain the symptoms, evidence, cause and corrective action, you can build toward more complex robotics service work."
    }
  ]
},
  researchNotes:[
    `Black Scarab’s November 2, 2026 broad cohort contains ${role.postingCount} advertisements across ${role.employerCount} selected employers. Ten stored full sources were reviewed for this guide. The cohort mixes engineers, service and repair technicians, lab roles, operators and support leaders. Skills and qualifications are contextual examples, not clean profession-specific frequencies or live-opening totals. Original classifications remain unchanged.`,
    `The Black Scarab estimate is the median annual salary-range midpoint from ${compensation.postingCount} eligible U.S. advertisements across ${compensation.employerCount} employers, rounded to the nearest $1,000. The exact median midpoint is $${compensation.exactMedianMidpoint.toLocaleString('en-US')}. This small selected sample includes warehouse robotics and drone field support with mixed experience levels; it is not an entry-level estimate or a representative industry median. Distinct location requisitions count separately.`,
    'Hourly wages, short-term hourly contracts, overtime-based annualized employer earnings and primarily software-only sustainment are excluded from the estimate. Hourly pay is not converted to an assumed annual salary. Advertised annual salary does not always explicitly mean base pay; overtime, bonus and equity are excluded. The linked derivation preserves salary clauses, inclusion decisions, geography review and source hashes.',
    'Boston Dynamics R2895 explicitly places the role in Indianapolis, Indiana. The original country detector also returned India; the guide’s derived compensation layer records a reviewed U.S. geography correction while preserving the original archive. Employer examples describe the November 2 advertisements, not necessarily current vacancies. Formic’s live role was checked November 9; Dexterity’s live page returned HTTP 403, so its pinned full source is used.',
    'The stopped-robot diagnostic map is an illustrative set of hypotheses, not a fault-code decoder or a maintenance procedure. Symptoms can have multiple causes. The portfolio incident and hero are conceptual examples. Equipment service requires the applicable training and procedures. The core portfolio project is software-only; the optional physical extension uses an educational low-voltage kit and its manufacturer’s instructions. Editorial review: November 9, 2026.',
  ],
  citations:[
    source('study','Black Scarab: November 2 employer research','/research/physical-ai-careers-2026-11-02.json','Pinned selected-employer aggregate and role taxonomy.'),
    source('evidence','Field service engineering: reviewed employer evidence',evidencePath,'Full-source contextual reviews, qualifications and source provenance.'),
    source('compensation','Black Scarab: robotics field service compensation estimate',compensationPath,'Explicit annual USD salary observations, median, exclusions and reviewed geography correction.'),
    posting('dexterity','dexterity:lever:0630d2f1-586c-4819-a111-a6188462af3b'),posting('formic','formic:greenhouse:4702865006'),
    posting('boston','boston-dynamics:workday:R3291'),posting('boston-indiana','boston-dynamics:workday:R2895'),
    posting('nimble','nimble:greenhouse:4204567009'),posting('skydio','skydio:ashby:53bd205b-24a7-4a54-a196-6694a57b7983'),
    posting('agile','agile-robots:greenhouse:5013112101'),posting('path','path-robotics:greenhouse:8470564002'),
    posting('figure','figure:greenhouse:4683847006'),posting('serve','serve:ashby:946fe8ed-7c4a-462c-97ca-6d7843a45fa3'),
    source('safety','OSHA: Control of Hazardous Energy',safety,'Official overview of hazardous-energy control and employer training responsibilities; no servicing procedure is prescribed here.'),
    source('linux','Ubuntu: The Linux Command Line for Beginners',linux,'Official introductory terminal and file-navigation tutorial.'),
    source('logging','Python: Logging HOWTO',logging,'Official documentation for event logging and severity levels. The fictional service incident is an editorial exercise.'),
    source('wireshark','Wireshark: User’s Guide',wireshark,'Official packet-analysis documentation for further study in a test environment.'),
  ],
};
