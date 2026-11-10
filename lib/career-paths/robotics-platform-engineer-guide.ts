import type {CareerGuideContent,Citation} from '@/lib/career-paths/types';
import {researchForRole} from '@/lib/career-paths/research';
import evidence from '@/public/research/robotics-platform-engineer-evidence-2026-11-10.json';
import compensation from '@/public/research/robotics-platform-engineer-compensation-2026-11-02.json';
import model from '@/public/research/platform-message-history-example-2026-11-10.json';
import decisions from '@/research/seo/2026-11-10/decisions.json';
const roleId='robotics-platform-engineer';
const role=researchForRole(roleId,evidence.snapshotId);
if(!role||compensation.snapshotId!==evidence.snapshotId)throw new Error('Robotics Platform guide research mismatch');
const seo=decisions.guides.find(item=>item.occupationId===roleId);
if(!seo)throw new Error('Missing Robotics Platform SEO decision');
const salary=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(compensation.estimate);
const source=(id:string,title:string,url:string,scope:string):Citation=>({id,title,url,scope,accessedAt:'2026-11-10'});
const posting=(id:string,index:number):Citation=>{const r=evidence.records[index];return source(id,`${r.employer}: ${r.title}`,r.url,'Employer advertisement collected November 2, 2026.');};
export const roboticsPlatformEngineerGuide:CareerGuideContent={
 id:roleId,occupationId:roleId,familyId:'platforms-simulation',slug:roleId,
 title:seo.h1,seoTitle:seo.seoTitle,description:seo.description,status:'published',publishedAt:'2026-11-10',reviewedAt:'2026-11-10',
 research:{snapshotId:evidence.snapshotId,roleId,evidencePath:'/research/robotics-platform-engineer-evidence-2026-11-10.json'},
 deck:'Build the software infrastructure that connects robot components, supports reliable operation and helps engineering teams develop and deploy robotic systems.',
 introduction:['Imagine a company developing a humanoid robot.'],
 illustration:{src:'/career-paths/robotics-platform-engineer-studio.webp',width:1672,height:941,alt:'Conceptual editorial illustration of an industrial arm, wheeled robot and humanoid in adjacent integration bays, with silver and graphite machinery and restrained crimson cable trays.'},
 overview:[
  {label:'What you do',value:'Develop shared software, communication systems and tools that allow robotic components to work together',sourceIds:['field','figure','zoox']},
  {label:'Core skills',value:'C++, Python, Linux, middleware, networking, software architecture and performance debugging',sourceIds:['applied','field','figure','zoox']},
  {label:'Education',value:'Typically computer science, computer engineering, robotics or related technical experience',sourceIds:['field','nimble','zoox']},
  {label:'Compensation',value:`${salary}/year`,detail:'Black Scarab estimate',sourceIds:['compensation']},
 ],
 sections:[
  {
    "id": "day-to-day",
    "heading": "What does a robotics platform engineer do?",
    "navLabel": "The work",
    "paragraphs": [],
    "sourceIds": [
      "field",
      "figure",
      "zoox",
      "applied"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Imagine a company developing a humanoid robot."
      },
      {
        "type": "paragraph",
        "text": "One engineering team develops software that recognizes objects through the robot's cameras. Another creates algorithms that plan movements, while a third develops the control systems that coordinate its motors."
      },
      {
        "type": "paragraph",
        "text": "Each system might work perfectly when tested independently."
      },
      {
        "type": "paragraph",
        "text": "But what happens when all these systems need to operate together?"
      },
      {
        "type": "paragraph",
        "text": "The cameras produce enormous amounts of data. The perception software needs to process that information, the planning system needs to make decisions, and the robot's controllers must execute movements at the appropriate time."
      },
      {
        "type": "paragraph",
        "text": "If messages arrive too late, software components crash or the onboard computer becomes overloaded, the robot may stop working correctly even though its individual algorithms are functioning as designed."
      },
      {
        "type": "paragraph",
        "text": "Robotics platform engineers build the shared software systems that allow these components to communicate and operate reliably together."
      },
      {
        "type": "paragraph",
        "text": "Their work includes communication frameworks, operating-system services, software interfaces, debugging tools and systems used to deploy software onto robots."
      },
      {
        "type": "paragraph",
        "text": "Unlike engineers developing specific robot behaviors, platform engineers focus on the software infrastructure that supports many parts of the robot."
      },
      {
        "type": "paragraph",
        "text": "Their customers are often other engineers within the same company."
      },
      {
        "type": "paragraph",
        "text": "A good robotics platform allows perception, planning, controls and other teams to develop their systems without repeatedly solving the same infrastructure problems."
      },
      {
        "type": "table",
        "caption": "Areas of platform engineering",
        "columns": [
          "Specialization",
          "What engineers work on"
        ],
        "rows": [
          [
            "Middleware and runtime systems",
            "Software that allows robot components to exchange information and operate together"
          ],
          [
            "Robot operating systems and deployment",
            "Linux platforms, software builds, updates, hardware integration and release management"
          ],
          [
            "Developer tools and robot infrastructure",
            "Debugging systems, monitoring, telemetry and shared tools used by robotics engineers"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These specialties overlap."
      },
      {
        "type": "paragraph",
        "text": "An engineer working on middleware may also develop tools that measure communication delays."
      },
      {
        "type": "paragraph",
        "text": "Another engineer might maintain the Linux software environment used across a company's robots."
      },
      {
        "type": "paragraph",
        "text": "Someone focused on developer infrastructure may build systems that make it easier for engineers to test, update and investigate robots in the field."
      },
      {
        "type": "heading",
        "text": "What does a typical day look like?"
      },
      {
        "type": "paragraph",
        "text": "Robotics platform engineers spend much of their time developing software, debugging complex problems and helping other engineering teams."
      },
      {
        "type": "paragraph",
        "text": "Imagine an engineer arriving at work and learning that a mobile robot becomes noticeably slower whenever several cameras are enabled."
      },
      {
        "type": "paragraph",
        "text": "The perception algorithms appear to operate correctly when tested individually."
      },
      {
        "type": "paragraph",
        "text": "However, when all cameras are active, the robot sometimes responds to obstacles later than expected."
      },
      {
        "type": "paragraph",
        "text": "The platform engineer investigates how information travels between the cameras, perception software and other parts of the system."
      },
      {
        "type": "paragraph",
        "text": "They discover that large camera images are being copied repeatedly between processes, consuming processing resources and creating delays."
      },
      {
        "type": "paragraph",
        "text": "The engineer evaluates a more efficient communication approach, measures whether it reduces the delays and checks that the change doesn't introduce new problems elsewhere."
      },
      {
        "type": "paragraph",
        "text": "Later, they might improve a software deployment tool, review a communication interface or help another team reproduce a difficult bug."
      },
      {
        "type": "paragraph",
        "text": "A typical development cycle includes:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Identify a shared problem. Find issues affecting multiple software components or engineering teams.",
          "Understand the system. Examine software interfaces, communication patterns, hardware resources and operating requirements.",
          "Design a solution. Develop reusable software, infrastructure or tools that address the problem.",
          "Implement and test. Write code and verify that it behaves correctly under normal and unexpected conditions.",
          "Measure performance. Evaluate timing, memory usage, communication and reliability.",
          "Integrate the improvement. Help other teams adopt the solution.",
          "Document the system. Explain how the software works, how to troubleshoot it and how to recover from failures."
        ]
      },
      {
        "type": "paragraph",
        "text": "The work often involves solving problems that exist between otherwise functional components."
      },
      {
        "type": "heading",
        "text": "When a robot becomes slow even though its algorithms are fast"
      },
      {
        "type": "paragraph",
        "text": "Consider an autonomous warehouse robot equipped with several cameras."
      },
      {
        "type": "paragraph",
        "text": "Each camera continuously captures images of the surrounding environment."
      },
      {
        "type": "paragraph",
        "text": "The perception software processes those images to identify obstacles and other objects."
      },
      {
        "type": "paragraph",
        "text": "When engineers test the perception algorithm on recorded images, it performs quickly."
      },
      {
        "type": "paragraph",
        "text": "But when the software runs on the robot, the system becomes sluggish."
      },
      {
        "type": "paragraph",
        "text": "The platform engineer investigates."
      },
      {
        "type": "paragraph",
        "text": "Perhaps the camera images are waiting in communication queues. Maybe the images are being copied between programs unnecessarily, or several processes are competing for the same computing resources."
      },
      {
        "type": "paragraph",
        "text": "The engineer measures how long information takes to travel through each stage of the system."
      },
      {
        "type": "paragraph",
        "text": "They may discover that the algorithm itself processes an image in 15 milliseconds, but the image spends another 80 milliseconds waiting to be processed."
      },
      {
        "type": "paragraph",
        "text": "The problem isn't necessarily the perception algorithm."
      },
      {
        "type": "paragraph",
        "text": "It's the infrastructure connecting the components."
      },
      {
        "type": "paragraph",
        "text": "The engineer improves how the software exchanges information and measures whether the robot receives the data it needs more promptly."
      },
      {
        "type": "paragraph",
        "text": "This illustrates an important principle: a robot's performance depends on how well its software components work together, not only on how well each component works independently."
      }
    ]
  },
  {
    "id": "platform-vs-other-roles",
    "heading": "How is platform engineering different from other robotics careers?",
    "navLabel": "Related roles",
    "paragraphs": [],
    "sourceIds": [
      "field",
      "figure",
      "humanoid",
      "nimble",
      "waymo"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Robotics platform engineering overlaps with several software disciplines."
      },
      {
        "type": "paragraph",
        "text": "The main distinction is that platform engineers develop reusable foundations used by multiple applications or engineering teams."
      },
      {
        "type": "table",
        "caption": "Robotics software roles",
        "columns": [
          "Career",
          "Main responsibility"
        ],
        "rows": [
          [
            "Robotics Platform Engineer",
            "Develops shared robot software, communication systems, runtime infrastructure and developer tools"
          ],
          [
            "Embedded Software Engineer",
            "Writes low-level software that operates close to processors, sensors, motors and other electronics"
          ],
          [
            "Machine Learning Infrastructure Engineer",
            "Builds systems used to train, evaluate and deploy machine learning models"
          ],
          [
            "Robotics Data Engineer",
            "Develops systems that collect, organize and process robot datasets"
          ],
          [
            "Robotics Integration Engineer",
            "Connects hardware and software components into complete robotic applications"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Imagine a robotics company developing a new camera-based navigation system."
      },
      {
        "type": "paragraph",
        "text": "An embedded software engineer might develop a driver that allows the onboard computer to communicate with the camera."
      },
      {
        "type": "paragraph",
        "text": "A perception engineer develops software that interprets the camera images."
      },
      {
        "type": "paragraph",
        "text": "A robotics platform engineer builds the communication infrastructure that delivers those images to the appropriate software components."
      },
      {
        "type": "paragraph",
        "text": "An integration engineer helps ensure the complete system works within the intended robot or customer application."
      },
      {
        "type": "paragraph",
        "text": "These responsibilities can overlap, particularly at smaller companies."
      },
      {
        "type": "heading",
        "text": "Is this the same as backend software engineering?"
      },
      {
        "type": "paragraph",
        "text": "There are important similarities."
      },
      {
        "type": "paragraph",
        "text": "Backend software engineers develop services, APIs, communication systems and infrastructure used by software applications."
      },
      {
        "type": "paragraph",
        "text": "Robotics platform engineers use many of the same skills."
      },
      {
        "type": "paragraph",
        "text": "However, robots introduce additional constraints."
      },
      {
        "type": "paragraph",
        "text": "A conventional web application may tolerate a brief delay before displaying information."
      },
      {
        "type": "paragraph",
        "text": "A moving robot may need fresh sensor measurements within a much tighter time window."
      },
      {
        "type": "paragraph",
        "text": "Robots also operate with limited onboard computing resources, changing network connectivity and software that directly influences physical movement."
      },
      {
        "type": "paragraph",
        "text": "The underlying software engineering principles remain relevant, but the operating environment is different."
      },
      {
        "type": "heading",
        "text": "Is this the same as ML infrastructure engineering?"
      },
      {
        "type": "paragraph",
        "text": "Not exactly."
      },
      {
        "type": "paragraph",
        "text": "ML infrastructure engineers primarily support the development and operation of machine learning models."
      },
      {
        "type": "paragraph",
        "text": "Their work often involves GPU training, experiment management, model evaluation and inference infrastructure."
      },
      {
        "type": "paragraph",
        "text": "Robotics platform engineers focus more broadly on the software systems that run on robots and connect their components."
      },
      {
        "type": "paragraph",
        "text": "For example, an ML infrastructure engineer may optimize how a robot learning model trains across multiple GPUs."
      },
      {
        "type": "paragraph",
        "text": "A robotics platform engineer may develop the software that delivers sensor data to the trained model while it operates on a robot."
      },
      {
        "type": "paragraph",
        "text": "Some companies combine these responsibilities, especially when machine learning models are closely integrated into the robot's onboard software."
      }
    ]
  },
  {
    "id": "skills",
    "heading": "Which skills and tools do employers look for?",
    "navLabel": "Skills",
    "paragraphs": [],
    "sourceIds": [
      "field",
      "figure",
      "applied",
      "skild",
      "humanoid",
      "zoox",
      "qos",
      "middleware",
      "tracing",
      "otel"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "C++ and systems programming"
      },
      {
        "type": "paragraph",
        "text": "C++ is one of the most important programming languages in robotics platform engineering."
      },
      {
        "type": "paragraph",
        "text": "Robotic software often needs to process large amounts of data efficiently while managing memory and computation carefully."
      },
      {
        "type": "paragraph",
        "text": "C++ allows engineers to build high-performance applications, communication frameworks and shared software libraries."
      },
      {
        "type": "paragraph",
        "text": "Useful concepts include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Memory management.",
          "Data structures and algorithms.",
          "Multithreading and concurrency.",
          "Software interfaces and APIs.",
          "Performance optimization.",
          "Testing and debugging."
        ]
      },
      {
        "type": "paragraph",
        "text": "Python is also useful, particularly for automation, diagnostics, testing and developer tools."
      },
      {
        "type": "paragraph",
        "text": "The goal is not simply writing software that produces the correct result."
      },
      {
        "type": "paragraph",
        "text": "Engineers must also consider how it behaves when several components run simultaneously and compete for limited resources."
      },
      {
        "type": "heading",
        "text": "Linux and operating systems"
      },
      {
        "type": "paragraph",
        "text": "Many robots use Linux-based operating systems on their onboard computers."
      },
      {
        "type": "paragraph",
        "text": "Platform engineers need to understand how software interacts with the operating system."
      },
      {
        "type": "paragraph",
        "text": "Important topics include processes, threads, memory, filesystems, scheduling and device interfaces."
      },
      {
        "type": "paragraph",
        "text": "For example, a robot might run separate programs for cameras, localization, planning and monitoring."
      },
      {
        "type": "paragraph",
        "text": "The operating system determines how these programs share computing resources."
      },
      {
        "type": "paragraph",
        "text": "If one program consumes too much memory or processor time, other components may be affected."
      },
      {
        "type": "paragraph",
        "text": "Platform engineers investigate these interactions and develop systems that operate reliably under the robot's resource constraints."
      },
      {
        "type": "paragraph",
        "text": "Some positions involve deeper Linux platform work, including software images, startup configuration, updates and hardware support."
      },
      {
        "type": "heading",
        "text": "Middleware and robot communication"
      },
      {
        "type": "paragraph",
        "text": "One of the most important concepts in robotics platform engineering is middleware."
      },
      {
        "type": "paragraph",
        "text": "Middleware is software that helps different programs communicate and exchange information."
      },
      {
        "type": "paragraph",
        "text": "Imagine a robot with a camera, perception software and a motion planning system."
      },
      {
        "type": "paragraph",
        "text": "The camera produces images."
      },
      {
        "type": "paragraph",
        "text": "The perception system processes those images to identify nearby obstacles."
      },
      {
        "type": "paragraph",
        "text": "The motion planner uses that information to help determine where the robot should move."
      },
      {
        "type": "paragraph",
        "text": "Middleware provides mechanisms for transferring information between these components."
      },
      {
        "type": "heading",
        "text": "How publish-subscribe communication works"
      },
      {
        "type": "paragraph",
        "text": "A common communication pattern is called publish-subscribe."
      },
      {
        "type": "paragraph",
        "text": "One software component publishes information, while other components subscribe to receive it."
      },
      {
        "type": "paragraph",
        "text": "For example:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "A camera component publishes an image.",
          "A perception component subscribes to the camera data.",
          "The perception component publishes detected obstacles.",
          "A planning component subscribes to the obstacle information.",
          "The planning system generates movement instructions for other components."
        ]
      },
      {
        "type": "paragraph",
        "text": "This approach allows software systems to communicate without every component needing a custom direct connection to every other component."
      },
      {
        "type": "paragraph",
        "text": "ROS 2, or Robot Operating System 2, is a widely used robotics software ecosystem that supports communication between components."
      },
      {
        "type": "paragraph",
        "text": "Other technologies used in robotics platforms include DDS, gRPC and custom communication frameworks."
      },
      {
        "type": "paragraph",
        "text": "The important skill is understanding how information moves between programs and what happens when communication becomes delayed, interrupted or overloaded."
      },
      {
        "type": "message-history",
        "id": "platform-message-history",
        "title": "A longer queue can mean older information",
        "model": model
      },
      {
        "type": "paragraph",
        "text": "For a system displaying a robot's current surroundings, receiving fresher information may be more important than processing every intermediate reading."
      },
      {
        "type": "paragraph",
        "text": "A recording system may need to preserve every measurement. A command system may require explicit acknowledgement, ordering and reliable delivery. Platform engineers decide which communication behavior is appropriate for each application."
      },
      {
        "type": "paragraph",
        "text": "Queue depth is only one factor; processing schedules, transport delays and delivery policies also influence what information an application receives."
      },
      {
        "type": "heading",
        "text": "ROS 2 and communication settings"
      },
      {
        "type": "paragraph",
        "text": "ROS 2 provides configurable communication behavior through settings known as Quality of Service (QoS)."
      },
      {
        "type": "paragraph",
        "text": "These settings influence how messages are stored, delivered and handled."
      },
      {
        "type": "paragraph",
        "text": "For example, an application may prefer to retain a small number of recent sensor measurements rather than a long backlog."
      },
      {
        "type": "paragraph",
        "text": "Another application may require stronger message-delivery guarantees."
      },
      {
        "type": "paragraph",
        "text": "Platform engineers need to understand these trade-offs because communication choices can affect robot performance and reliability."
      },
      {
        "type": "paragraph",
        "text": "Learning ROS 2 is valuable, but the underlying concepts also apply to other robotics communication systems."
      },
      {
        "type": "heading",
        "text": "Networking and distributed systems"
      },
      {
        "type": "paragraph",
        "text": "Robots often contain several computers and communication interfaces."
      },
      {
        "type": "paragraph",
        "text": "Some processing happens onboard, while other services may run on remote servers or connect through a fleet-management system."
      },
      {
        "type": "paragraph",
        "text": "Platform engineers need to understand how these systems communicate."
      },
      {
        "type": "paragraph",
        "text": "Useful networking concepts include:"
      },
      {
        "type": "table",
        "caption": "Networking concepts",
        "columns": [
          "Concept",
          "Why it matters"
        ],
        "rows": [
          [
            "TCP/IP",
            "Foundation for many networked software services"
          ],
          [
            "Ethernet",
            "Connects onboard computers and devices"
          ],
          [
            "Wireless networking",
            "Supports communication with remote systems and fleet infrastructure"
          ],
          [
            "Latency",
            "Measures delays in transferring or processing information"
          ],
          [
            "Bandwidth",
            "Describes how much information a connection can carry"
          ],
          [
            "Connection recovery",
            "Determines how systems behave when communication is interrupted"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "For example, a robot may lose its connection to a cloud service while continuing to operate locally."
      },
      {
        "type": "paragraph",
        "text": "The platform must define which functionality can continue, what information should be preserved and how communication resumes when the connection returns."
      },
      {
        "type": "paragraph",
        "text": "The correct design depends on the robot's operating requirements."
      },
      {
        "type": "heading",
        "text": "Concurrency and performance debugging"
      },
      {
        "type": "paragraph",
        "text": "Robotic systems frequently run many software processes simultaneously."
      },
      {
        "type": "paragraph",
        "text": "These processes may share processor cores, memory, communication channels or other resources."
      },
      {
        "type": "paragraph",
        "text": "A problem called resource contention occurs when multiple components compete for a limited resource."
      },
      {
        "type": "paragraph",
        "text": "For example, several programs might attempt to access a shared data structure at the same time."
      },
      {
        "type": "paragraph",
        "text": "Another program might delay the processing of sensor messages because it is performing a computationally expensive task."
      },
      {
        "type": "paragraph",
        "text": "Engineers use profiling and tracing tools to investigate these problems."
      },
      {
        "type": "paragraph",
        "text": "They examine where software spends time, how threads interact and whether communication queues are introducing delays."
      },
      {
        "type": "paragraph",
        "text": "Understanding concurrency is particularly important when developing software that must operate predictably under load."
      },
      {
        "type": "heading",
        "text": "Observability: understanding what happens inside a robot"
      },
      {
        "type": "paragraph",
        "text": "Robots can experience failures that are difficult to reproduce."
      },
      {
        "type": "paragraph",
        "text": "A robot might operate normally for hours and then briefly stop responding."
      },
      {
        "type": "paragraph",
        "text": "Without appropriate diagnostic information, engineers may struggle to determine what happened."
      },
      {
        "type": "paragraph",
        "text": "Platform engineers develop observability systems that make software behavior easier to understand."
      },
      {
        "type": "paragraph",
        "text": "Three common tools are:"
      },
      {
        "type": "table",
        "caption": "Diagnostic tools",
        "columns": [
          "Tool",
          "What it provides"
        ],
        "rows": [
          [
            "Logs",
            "Records of events and errors"
          ],
          [
            "Metrics",
            "Measurements such as processor usage, latency and memory consumption"
          ],
          [
            "Traces",
            "Information showing how an operation moves through different software components"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Imagine a camera image taking longer than expected to reach the motion planner."
      },
      {
        "type": "paragraph",
        "text": "A trace might reveal how much time the image spent being captured, transmitted, queued and processed."
      },
      {
        "type": "paragraph",
        "text": "The engineer can then identify where the delay occurred."
      },
      {
        "type": "paragraph",
        "text": "However, recording too much information can create its own performance problems."
      },
      {
        "type": "paragraph",
        "text": "Robots have limited computing, storage and network resources."
      },
      {
        "type": "paragraph",
        "text": "Platform engineers need to collect enough information to diagnose problems without overwhelming the system."
      },
      {
        "type": "heading",
        "text": "Software interfaces and API design"
      },
      {
        "type": "paragraph",
        "text": "Robotics platform engineers frequently develop interfaces that other software teams depend on."
      },
      {
        "type": "paragraph",
        "text": "An application programming interface (API) defines how software components interact."
      },
      {
        "type": "paragraph",
        "text": "For example, a platform team might create a common interface for accessing robot sensor measurements."
      },
      {
        "type": "paragraph",
        "text": "Instead of each engineering team building a separate connection to the sensor, applications use the shared interface."
      },
      {
        "type": "paragraph",
        "text": "A good interface needs to define more than function names."
      },
      {
        "type": "paragraph",
        "text": "It should specify information such as:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Which measurements or commands are available.",
          "The units used for values.",
          "Coordinate systems and timestamps.",
          "Expected responses.",
          "How errors are reported.",
          "What happens when data is unavailable."
        ]
      },
      {
        "type": "paragraph",
        "text": "Shared interfaces also need to remain usable as software evolves."
      },
      {
        "type": "paragraph",
        "text": "Changing an interface without considering its users can break several robot applications at once."
      },
      {
        "type": "paragraph",
        "text": "Platform engineers therefore spend time on documentation, compatibility and collaboration across teams."
      },
      {
        "type": "heading",
        "text": "Software deployment and updates"
      },
      {
        "type": "paragraph",
        "text": "Robotics companies frequently update their software."
      },
      {
        "type": "paragraph",
        "text": "An improvement to perception, navigation or another subsystem may need to be installed on many robots."
      },
      {
        "type": "paragraph",
        "text": "Platform engineers can develop systems that build, test and deploy these updates."
      },
      {
        "type": "paragraph",
        "text": "Depending on the organization, they may work with software images, automated testing, version management and recovery procedures."
      },
      {
        "type": "paragraph",
        "text": "An update process must also consider what happens if installation is interrupted or a new software version behaves unexpectedly."
      },
      {
        "type": "paragraph",
        "text": "A reliable release workflow helps engineering teams deliver improvements without repeatedly introducing avoidable operational problems."
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
      "field",
      "figure",
      "nimble",
      "zoox"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Robotics platform engineers commonly come from computer science, computer engineering, electrical engineering or robotics."
      },
      {
        "type": "paragraph",
        "text": "The profession requires strong software engineering knowledge, particularly in operating systems, networking and high-performance programming."
      },
      {
        "type": "paragraph",
        "text": "A robotics-specific degree can be useful, but it is not always required."
      },
      {
        "type": "paragraph",
        "text": "Many of the skills are transferable from conventional software engineering."
      },
      {
        "type": "table",
        "caption": "Employer qualification examples",
        "columns": [
          "Employer",
          "Representative qualifications"
        ],
        "rows": [
          [
            "Applied Intuition",
            "Relevant bachelor's degree and production software engineering experience"
          ],
          [
            "FieldAI",
            "Related degree or equivalent practical experience developing shared software"
          ],
          [
            "Figure",
            "Strong modern C++, Linux and timing-sensitive systems experience"
          ],
          [
            "Nimble Robotics",
            "Relevant software engineering experience, including equivalent practical backgrounds"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "The reviewed positions emphasize engineers who have developed reliable production software."
      },
      {
        "type": "paragraph",
        "text": "Some roles focus on middleware and communication, while others require deeper operating-system or infrastructure knowledge."
      },
      {
        "type": "heading",
        "text": "Do you need a master's degree or PhD?"
      },
      {
        "type": "paragraph",
        "text": "Not generally."
      },
      {
        "type": "paragraph",
        "text": "Many platform engineering roles are primarily software engineering positions."
      },
      {
        "type": "paragraph",
        "text": "A bachelor's degree combined with strong professional experience can provide suitable preparation."
      },
      {
        "type": "paragraph",
        "text": "Advanced education may be useful for specialized research or systems work, but employers frequently value demonstrated experience building and maintaining complex software."
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
        "ordered": false,
        "items": [
          "C++ programming and software architecture.",
          "Python for automation and diagnostics.",
          "Linux and operating systems.",
          "Networking and distributed systems.",
          "Concurrency, threading and performance optimization.",
          "APIs, middleware and communication protocols.",
          "Automated testing and debugging.",
          "Robotics software frameworks such as ROS 2."
        ]
      },
      {
        "type": "paragraph",
        "text": "A good starting point is developing strong general software engineering skills."
      },
      {
        "type": "paragraph",
        "text": "Then learn how those skills apply to robots operating with limited computing resources, real-time requirements and unreliable communication."
      },
      {
        "type": "heading",
        "text": "Can you enter without a robotics degree?"
      },
      {
        "type": "paragraph",
        "text": "Yes."
      },
      {
        "type": "paragraph",
        "text": "Experienced backend engineers, systems programmers and infrastructure engineers can transition into robotics platform development."
      },
      {
        "type": "paragraph",
        "text": "However, they need to understand the particular constraints of robotic software."
      },
      {
        "type": "paragraph",
        "text": "Someone without a technical background should begin with programming, Linux and computer systems before attempting more advanced robotics frameworks."
      },
      {
        "type": "paragraph",
        "text": "A small software project involving communication between several simulated components can provide useful preparation."
      }
    ]
  },
  {
    "id": "salary",
    "heading": "How much do robotics platform engineers earn?",
    "navLabel": "Compensation",
    "paragraphs": [],
    "sourceIds": [
      "compensation",
      "field",
      "figure",
      "nimble"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Robotics platform engineering combines advanced software development with the requirements of physical autonomous systems."
      },
      {
        "type": "paragraph",
        "text": "Compensation varies by experience, technical responsibility, location and employer."
      },
      {
        "type": "paragraph",
        "text": "Black Scarab estimates annual compensation at $215,000 based on reviewed U.S. robotics platform engineering positions, emphasizing experienced software roles."
      },
      {
        "type": "compensation",
        "caption": "Selected U.S. salary advertisements, November 2026",
        "note": "Annual advertised salary, USD.",
        "examples": evidence.roles[roleId].compensation
      },
      {
        "type": "heading",
        "text": "What influences compensation?"
      },
      {
        "type": "paragraph",
        "text": "Experience and technical responsibility. Engineers responsible for shared infrastructure used across several robot systems generally command higher compensation."
      },
      {
        "type": "paragraph",
        "text": "Specialization. Expertise in C++, Linux, middleware, distributed systems and performance optimization can be valuable."
      },
      {
        "type": "paragraph",
        "text": "Production experience. Employers value engineers who have shipped reliable software and investigated complex problems on physical robots."
      },
      {
        "type": "paragraph",
        "text": "Scale and complexity. Supporting several applications on one robot presents different challenges from maintaining a platform used across an entire fleet."
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
        "text": "Early-career engineers may begin by developing software utilities, improving tests and contributing to existing platform components."
      },
      {
        "type": "paragraph",
        "text": "With experience, they can take ownership of communication frameworks, runtime services or developer infrastructure."
      },
      {
        "type": "paragraph",
        "text": "Senior and staff engineers may define platform architecture, develop technical standards and make decisions affecting multiple engineering teams."
      },
      {
        "type": "paragraph",
        "text": "Other career paths include systems software leadership, robotics architecture and specialized infrastructure engineering."
      }
    ]
  },
  {
    "id": "employers",
    "heading": "Which companies hire robotics platform engineers?",
    "navLabel": "Employers",
    "paragraphs": [],
    "sourceIds": [
      "field",
      "figure",
      "humanoid",
      "nimble",
      "skild",
      "waymo",
      "zoox",
      "applied"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Robotics platform engineers work across humanoid robotics, warehouse automation, autonomous vehicles and other intelligent machines."
      },
      {
        "type": "paragraph",
        "text": "The exact job titles vary because companies organize their software teams differently."
      },
      {
        "type": "heading",
        "text": "Humanoid robotics"
      },
      {
        "type": "paragraph",
        "text": "Figure and Humanoid provide examples of organizations developing software infrastructure for humanoid robots."
      },
      {
        "type": "paragraph",
        "text": "Platform-related responsibilities can include Linux systems, communication frameworks, hardware integration and tools supporting other engineering teams."
      },
      {
        "type": "paragraph",
        "text": "Humanoid robots can be particularly demanding because many sensors, actuators and software components must operate together."
      },
      {
        "type": "heading",
        "text": "Autonomous field robotics"
      },
      {
        "type": "paragraph",
        "text": "FieldAI develops autonomy systems for robots operating in complex environments."
      },
      {
        "type": "paragraph",
        "text": "Platform engineers may work on shared software interfaces, robot runtime systems and middleware supporting different robotic platforms."
      },
      {
        "type": "paragraph",
        "text": "Building reusable infrastructure is valuable when a company needs to support multiple types of machines."
      },
      {
        "type": "heading",
        "text": "Warehouse robotics"
      },
      {
        "type": "paragraph",
        "text": "Nimble Robotics develops robotic systems used in warehouse environments."
      },
      {
        "type": "paragraph",
        "text": "Platform-related roles can involve robot-facing services, APIs and software used to coordinate operational systems."
      },
      {
        "type": "paragraph",
        "text": "Warehouse deployments also introduce challenges involving reliability, monitoring and maintaining software across deployed equipment."
      },
      {
        "type": "heading",
        "text": "Robot learning and fleet infrastructure"
      },
      {
        "type": "paragraph",
        "text": "Skild AI provides an example of platform work involving onboard software, fleet connectivity, updates and observability."
      },
      {
        "type": "paragraph",
        "text": "These systems help connect robot software with the broader infrastructure used to manage and improve robotic capabilities."
      },
      {
        "type": "heading",
        "text": "Autonomous vehicles"
      },
      {
        "type": "paragraph",
        "text": "Zoox, Applied Intuition and Waymo develop software for autonomous systems that require extensive onboard infrastructure."
      },
      {
        "type": "paragraph",
        "text": "Platform engineers may work on operating-system environments, middleware, software deployment and developer tools."
      },
      {
        "type": "paragraph",
        "text": "Autonomous vehicles require reliable communication between perception, planning, controls and other software systems."
      },
      {
        "type": "heading",
        "text": "Related job titles"
      },
      {
        "type": "paragraph",
        "text": "Useful searches include Robotics Platform Engineer, Robotics Software Infrastructure Engineer, Middleware Engineer, Robotics Systems Software Engineer, Robot Runtime Engineer and Onboard Developer Platform Engineer."
      },
      {
        "type": "paragraph",
        "text": "Some companies use the title Platform Engineer for general cloud or web infrastructure."
      },
      {
        "type": "paragraph",
        "text": "Read the responsibilities carefully."
      },
      {
        "type": "paragraph",
        "text": "Look for ownership of shared software used by robotic applications, onboard systems, middleware, communication or developer tools."
      }
    ]
  },
  {
    "id": "transition",
    "heading": "How to transition into robotics platform engineering",
    "navLabel": "Getting started",
    "paragraphs": [],
    "sourceIds": [
      "field",
      "nimble",
      "humanoid",
      "skild",
      "zoox"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Several technical backgrounds provide useful routes into this profession."
      },
      {
        "type": "table",
        "caption": "Routes into platform engineering",
        "columns": [
          "Your background",
          "Skills to prioritize",
          "Suggested project"
        ],
        "rows": [
          [
            "Backend software engineering",
            "ROS 2, sensor data and robotics communication",
            "Build a simulated robot messaging system"
          ],
          [
            "Distributed systems engineering",
            "Onboard computing, latency and robot-specific constraints",
            "Develop services that handle intermittent connectivity"
          ],
          [
            "Embedded software engineering",
            "Shared Linux services, middleware and software architecture",
            "Create a reusable interface for simulated robot devices"
          ],
          [
            "DevOps or site reliability engineering",
            "Robot monitoring, updates and edge-device limitations",
            "Build a simulated robot deployment and diagnostics workflow"
          ],
          [
            "Robotics software engineering",
            "Reusable APIs, communication frameworks and platform architecture",
            "Turn a repeated integration problem into a shared library"
          ],
          [
            "Complete beginner",
            "Python, Linux and software fundamentals",
            "Build a simple producer-consumer messaging application"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "If you already work in backend software engineering"
      },
      {
        "type": "paragraph",
        "text": "Your experience with APIs, software architecture, networking and services is highly relevant."
      },
      {
        "type": "paragraph",
        "text": "Focus on understanding the additional constraints of robotic systems."
      },
      {
        "type": "paragraph",
        "text": "Learn ROS 2, sensor communication and the importance of message timing."
      },
      {
        "type": "paragraph",
        "text": "A practical project is to build a system where several simulated robotics components exchange information."
      },
      {
        "type": "paragraph",
        "text": "Demonstrate that the system handles delayed messages, overloaded consumers and communication interruptions."
      },
      {
        "type": "heading",
        "text": "If you come from distributed systems"
      },
      {
        "type": "paragraph",
        "text": "Your experience with message delivery, network failures and system reliability can transfer directly."
      },
      {
        "type": "paragraph",
        "text": "Develop a stronger understanding of onboard computing and real-time robotics software."
      },
      {
        "type": "paragraph",
        "text": "Learn how limited hardware resources and changing connectivity affect system design."
      },
      {
        "type": "paragraph",
        "text": "A project involving simulated robot services and intermittent networking can demonstrate this transition."
      },
      {
        "type": "heading",
        "text": "If you work in embedded software"
      },
      {
        "type": "paragraph",
        "text": "You may already understand processors, Linux, device drivers and hardware communication."
      },
      {
        "type": "paragraph",
        "text": "Focus on developing shared services and reusable software interfaces that support multiple applications."
      },
      {
        "type": "paragraph",
        "text": "Build a small platform component used by two or more simulated robotics programs."
      },
      {
        "type": "paragraph",
        "text": "Document how the interface works, how it handles failures and how other developers can use it."
      },
      {
        "type": "heading",
        "text": "If you work in DevOps or site reliability engineering"
      },
      {
        "type": "paragraph",
        "text": "Your experience with monitoring, deployment, automation and incident response is valuable."
      },
      {
        "type": "paragraph",
        "text": "However, robotics platforms introduce physical devices operating with limited resources and potentially unreliable connectivity."
      },
      {
        "type": "paragraph",
        "text": "Focus on robot observability, onboard software updates and edge-device infrastructure."
      },
      {
        "type": "paragraph",
        "text": "Build a small simulated deployment workflow that demonstrates how updates are tested and how failures are detected."
      },
      {
        "type": "heading",
        "text": "If you already develop robotics software"
      },
      {
        "type": "paragraph",
        "text": "You may already be familiar with ROS 2, sensors and robotic applications."
      },
      {
        "type": "paragraph",
        "text": "The next step is developing a platform engineering mindset."
      },
      {
        "type": "paragraph",
        "text": "Instead of solving a problem for one robot component, consider whether the solution can be made reusable across several systems."
      },
      {
        "type": "paragraph",
        "text": "For example, if multiple teams need similar diagnostic tools, create a shared library or service that addresses the common requirement."
      },
      {
        "type": "heading",
        "text": "If you are starting from scratch"
      },
      {
        "type": "paragraph",
        "text": "Begin with Python and basic Linux."
      },
      {
        "type": "paragraph",
        "text": "Learn how software processes communicate and how information moves between applications."
      },
      {
        "type": "paragraph",
        "text": "Then develop a simple program that generates measurements and sends them to another program."
      },
      {
        "type": "paragraph",
        "text": "Once that works, introduce message queues, delays and error handling."
      },
      {
        "type": "paragraph",
        "text": "Progress toward ROS 2 and more advanced C++ systems programming as your skills develop."
      },
      {
        "type": "heading",
        "text": "What matters in an interview?"
      },
      {
        "type": "paragraph",
        "text": "Robotics platform engineering interviews often focus on systems design, performance and debugging."
      },
      {
        "type": "paragraph",
        "text": "Employers may ask how you would connect several software components, investigate delayed messages or prevent one process from affecting the rest of the robot."
      },
      {
        "type": "paragraph",
        "text": "You may also be asked about memory, threads, networking and Linux."
      },
      {
        "type": "paragraph",
        "text": "Prepare one system you developed or improved."
      },
      {
        "type": "paragraph",
        "text": "Explain:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "What problem the system was intended to solve.",
          "Which software components depended on it.",
          "How information moved between components.",
          "What went wrong during testing.",
          "How you identified the cause.",
          "What trade-offs you considered.",
          "How you measured whether the improvement worked."
        ]
      },
      {
        "type": "paragraph",
        "text": "A strong explanation of a system failure and its correction can be more valuable than a long list of robotics frameworks."
      }
    ]
  },
  {
    "id": "portfolio",
    "heading": "Build your first robotics platform project",
    "navLabel": "Portfolio",
    "paragraphs": [],
    "sourceIds": [
      "qos",
      "tracing",
      "otel"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Create a robot messaging system"
      },
      {
        "type": "paragraph",
        "text": "A useful beginner project is to build a small software platform that simulates communication between a robot sensor and two applications."
      },
      {
        "type": "paragraph",
        "text": "One application uses the latest sensor measurement to represent the robot's current state."
      },
      {
        "type": "paragraph",
        "text": "The other records measurements for later analysis."
      },
      {
        "type": "paragraph",
        "text": "The project introduces middleware, message queues, timestamps and performance debugging."
      },
      {
        "type": "paragraph",
        "text": "You can complete the first version using Python without physical robotics hardware."
      },
      {
        "type": "heading",
        "text": "Step 1: Define the system"
      },
      {
        "type": "paragraph",
        "text": "Create three software components:"
      },
      {
        "type": "paragraph",
        "text": "Sensor publisher: Generates simulated measurements at regular intervals."
      },
      {
        "type": "paragraph",
        "text": "Live-state consumer: Uses sensor measurements to display or process the robot's most recent state."
      },
      {
        "type": "paragraph",
        "text": "Recording consumer: Preserves the measurements for later analysis."
      },
      {
        "type": "paragraph",
        "text": "For example, the sensor might publish a simulated distance measurement every 20 milliseconds."
      },
      {
        "type": "paragraph",
        "text": "Each message should contain a sequence number, timestamp and measurement value."
      },
      {
        "type": "paragraph",
        "text": "Document the measurement units and timing assumptions."
      },
      {
        "type": "heading",
        "text": "Step 2: Establish normal operation"
      },
      {
        "type": "paragraph",
        "text": "Begin with a publisher generating measurements at a fixed rate."
      },
      {
        "type": "paragraph",
        "text": "Configure both consumers to process the incoming messages without delays."
      },
      {
        "type": "paragraph",
        "text": "Record when each message was created, received and processed."
      },
      {
        "type": "paragraph",
        "text": "Verify that the live-state consumer receives reasonably fresh information and that the recording consumer preserves the expected sequence."
      },
      {
        "type": "paragraph",
        "text": "This provides a baseline for later comparisons."
      },
      {
        "type": "heading",
        "text": "Step 3: Introduce a slow consumer"
      },
      {
        "type": "paragraph",
        "text": "Modify the live-state consumer so that it occasionally takes longer to process a measurement."
      },
      {
        "type": "paragraph",
        "text": "For example, introduce a controlled processing delay."
      },
      {
        "type": "paragraph",
        "text": "Observe what happens when the publisher produces new measurements faster than the consumer can handle them."
      },
      {
        "type": "paragraph",
        "text": "Depending on your implementation, messages may accumulate, be replaced or cause the publisher to wait."
      },
      {
        "type": "paragraph",
        "text": "Record the observed behavior."
      },
      {
        "type": "heading",
        "text": "Step 4: Compare message-queue strategies"
      },
      {
        "type": "paragraph",
        "text": "Experiment with different queue policies."
      },
      {
        "type": "paragraph",
        "text": "Strategy A: Retain several measurements"
      },
      {
        "type": "paragraph",
        "text": "Allow the consumer to process a queue containing several older measurements."
      },
      {
        "type": "paragraph",
        "text": "Strategy B: Retain only the newest measurement"
      },
      {
        "type": "paragraph",
        "text": "Replace waiting measurements with newer data so the consumer can use a fresher reading."
      },
      {
        "type": "paragraph",
        "text": "Compare the two approaches using the same simulated input."
      },
      {
        "type": "paragraph",
        "text": "Measure:"
      },
      {
        "type": "table",
        "caption": "Message-queue metrics",
        "columns": [
          "Metric",
          "What it tells you"
        ],
        "rows": [
          [
            "Message age",
            "How old a reading is when the consumer uses it"
          ],
          [
            "Queue length",
            "How many messages are waiting"
          ],
          [
            "Messages processed",
            "How many readings the consumer handles"
          ],
          [
            "Messages replaced or dropped",
            "How many readings are not consumed"
          ],
          [
            "Processing delay",
            "How long the consumer takes to handle a message"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "The objective is to understand the trade-off between preserving every measurement and providing the freshest available information."
      },
      {
        "type": "heading",
        "text": "Step 5: Introduce a failure"
      },
      {
        "type": "paragraph",
        "text": "Simulate a communication interruption or consumer restart."
      },
      {
        "type": "paragraph",
        "text": "Observe whether messages are lost, delayed or processed after recovery."
      },
      {
        "type": "paragraph",
        "text": "Define what successful recovery should mean for each application."
      },
      {
        "type": "paragraph",
        "text": "For example, the live-state consumer may need to resume using fresh measurements, while the recording consumer may need to identify a gap in its history."
      },
      {
        "type": "paragraph",
        "text": "A restarted process is not necessarily a fully recovered system."
      },
      {
        "type": "paragraph",
        "text": "The application should return to the behavior required by its purpose."
      },
      {
        "type": "heading",
        "text": "Step 6: Add diagnostic information"
      },
      {
        "type": "paragraph",
        "text": "Create logs showing when messages are generated, received and processed."
      },
      {
        "type": "paragraph",
        "text": "Track queue length, message age and sequence numbers."
      },
      {
        "type": "paragraph",
        "text": "Use this information to identify where delays or losses occur."
      },
      {
        "type": "paragraph",
        "text": "For example, you might determine that sensor generation remains consistent while the live-state consumer falls behind."
      },
      {
        "type": "paragraph",
        "text": "This demonstrates how platform engineers use observability to diagnose performance problems."
      },
      {
        "type": "heading",
        "text": "Step 7: Improve the architecture"
      },
      {
        "type": "paragraph",
        "text": "Separate the message definitions, queue behavior and application logic into reusable components."
      },
      {
        "type": "paragraph",
        "text": "Add automated tests that verify message ordering, queue limits and recovery behavior."
      },
      {
        "type": "paragraph",
        "text": "Document how another developer could use your messaging interface."
      },
      {
        "type": "paragraph",
        "text": "The objective is to turn a small experiment into a reusable software component."
      },
      {
        "type": "heading",
        "text": "Step 8: Document your findings"
      },
      {
        "type": "paragraph",
        "text": "Prepare a short technical report explaining the architecture and results."
      },
      {
        "type": "paragraph",
        "text": "Compare the queue strategies and show how they affect message freshness and completeness."
      },
      {
        "type": "paragraph",
        "text": "Explain which approach is more suitable for a live robot-state application and what a recording system would need to preserve complete data."
      },
      {
        "type": "heading",
        "text": "What to include in your portfolio"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Python source code and installation instructions.",
          "A diagram showing the publisher and two consumers.",
          "A documented message format.",
          "Normal and delayed-consumer test scenarios.",
          "Plots or tables comparing message age and queue behavior.",
          "Logs showing a simulated failure and recovery.",
          "Automated tests for message ordering and queue handling.",
          "A README explaining the architecture and engineering trade-offs."
        ]
      },
      {
        "type": "heading",
        "text": "An optional advanced extension"
      },
      {
        "type": "paragraph",
        "text": "Move the project into ROS 2."
      },
      {
        "type": "paragraph",
        "text": "Use ROS 2 publishers and subscribers to exchange simulated sensor information."
      },
      {
        "type": "paragraph",
        "text": "Experiment with supported Quality of Service settings and observe how they affect communication under different conditions."
      },
      {
        "type": "paragraph",
        "text": "Use available tracing tools to investigate callback timing and message processing."
      },
      {
        "type": "paragraph",
        "text": "Compare the results with your original Python implementation."
      },
      {
        "type": "paragraph",
        "text": "This introduces a real robotics middleware environment while preserving the same engineering principles."
      }
    ]
  }
],
 nextSteps:{
  "id": "next-steps",
  "heading": "Where to go next",
  "paragraphs": [],
  "sourceIds": [
    "ros2",
    "qos-web",
    "tracing",
    "otel"
  ],
  "blocks": [
    {
      "type": "resources",
      "items": [
        {
          "title": "ROS 2 — Official Documentation",
          "href": "https://docs.ros.org/",
          "description": "Learn how ROS 2 connects robotic software components through publishers, subscribers, services and other communication mechanisms."
        },
        {
          "title": "ROS 2 — Quality of Service Settings",
          "href": "https://docs.ros.org/en/rolling/Concepts/Intermediate/About-Quality-of-Service-Settings.html",
          "description": "Explore how ROS 2 handles message history, reliability and communication requirements."
        },
        {
          "title": "ROS 2 Tracing",
          "href": "https://github.com/ros2/ros2_tracing",
          "description": "Learn how to inspect timing and software execution in robotics systems using tracing tools."
        },
        {
          "title": "OpenTelemetry — Distributed Tracing",
          "href": "https://opentelemetry.io/docs/concepts/signals/traces/",
          "description": "Study how software operations can be traced across multiple services to identify delays and failures."
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Start with a simple communication system you can explain completely."
    },
    {
      "type": "paragraph",
      "text": "Once you understand how messages move between components, how delays arise and how failures affect the applications, progress toward more complex robotics software involving middleware, distributed processes and physical robots."
    }
  ]
},
 researchNotes:[
  'Employer advertisements were collected November 2, 2026. Nine full stored sources across eight employers were contextually reviewed November 10, plus one boundary case. The original primary cohort contains eleven advertisements across eight employers. It is a dated selected sample, not a current vacancy count or skill-frequency study.',
  'The guide covers shared robot and autonomous-vehicle middleware, runtime, Linux/OS platform, deployment tooling, developer infrastructure and robot-facing services. Primary collection-data tooling is excluded. Some roles overlap embedded systems, simulation or cloud infrastructure; responsibilities determine inclusion. Source archives and original classifications remain unchanged.',
  'The $215,000 estimate is the median of seven explicitly annual U.S. salary-range midpoints from six employers, rounded to the nearest $1,000. Two distinct Zoox requisitions at different seniority levels contribute. The sample emphasizes experienced engineering positions and is not an entry-level rate or representative market median. Bonus and equity are excluded. Structured salary fields do not consistently establish base-pay status. The complete derivation preserves observations, source clauses and exclusions.',
  'The message-history visual uses invented arrivals at 0, 20 and 40 ms and one FIFO dequeue at 50 ms. The modeled subscriber retains the newest three or one samples. All messages have already arrived; no consumption occurs beforehand. The next sample ages are 50 and 10 ms respectively. Transport, retransmission, callback execution and scheduling are omitted. This illustrates a retained-history tradeoff, not a real middleware benchmark or delivery guarantee.',
 ],
 citations:[
  source('evidence','Robotics Platform: reviewed employer evidence','/research/robotics-platform-engineer-evidence-2026-11-10.json','Selected sources, qualification spans and immutable source hashes.'),
  source('compensation','Black Scarab: Robotics Platform compensation','/research/robotics-platform-engineer-compensation-2026-11-02.json','Seven annual observations, source clauses, scope and exclusions.'),
  source('history-model','Illustrative message-history model','/research/platform-message-history-example-2026-11-10.json','Exact arrival times, queue depths, dequeue time and assumptions.'),
  posting('applied',0),posting('field',1),posting('figure',2),posting('humanoid',3),posting('nimble',4),posting('skild',5),posting('waymo',6),posting('zoox',7),posting('zoox-senior',8),
  source('ros2','ROS 2: Official Documentation','https://docs.ros.org/','Official robotics software communication, services and development documentation.'),
  source('qos-web','ROS 2: Quality of Service Settings','https://docs.ros.org/en/rolling/Concepts/Intermediate/About-Quality-of-Service-Settings.html','Official rendered QoS documentation; source reference is also preserved below.'),
  source('middleware','ROS 2: Middleware interface design','https://design.ros2.org/articles/ros_middleware_interface.html','Official architecture rationale for shared communication interfaces and middleware abstraction.'),
  source('qos','ROS 2: Quality of Service settings','https://github.com/ros2/ros2_documentation/blob/rolling/source/ROS-Framework/interfaces/topics/About-Quality-of-Service-Settings.rst','Official retained history, queue depth, reliability and compatibility concepts.'),
  source('tracing','ROS 2 Tracing','https://github.com/ros2/ros2_tracing','Maintainer documentation for ROS 2 tracing and timing investigation.'),
  source('otel','OpenTelemetry: Traces','https://opentelemetry.io/docs/concepts/signals/traces/','Official reference for connected spans and operation tracing.'),
 ],
};
