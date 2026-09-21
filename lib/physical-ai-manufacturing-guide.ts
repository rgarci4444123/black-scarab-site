import type { CaseStudyArticle } from "@/lib/case-studies";

const nistRoadmap =
  "https://www.nist.gov/publications/2026-roadmap-artificial-intelligence-and-machine-learning-smart-manufacturing";
const nistAiRmf =
  "https://www.nist.gov/itl/ai-risk-management-framework";
const nistIndustrialAi =
  "https://www.nist.gov/mep/manufacturing-reports/best-practices/artificial-intelligence-key-consideration-and-effective";
const nistAims =
  "https://www.nist.gov/programs-projects/augmented-intelligence-manufacturing-systems-aims";
const nistDigitalTwins = "https://www.nist.gov/digital-twins";
const isoDigitalTwin = "https://www.iso.org/standard/75066.html";
const isoRobotics = "https://www.iso.org/sectors/engineering/robotics";
const isoMobileRobots = "https://www.iso.org/standard/83545.html";
const opcUa = "https://reference.opcfoundation.org/specs/OPC-10000-1/4";
const nistCyber =
  "https://www.nist.gov/programs-projects/cybersecurity-smart-manufacturing-systems";
const genAiProfile =
  "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence";
const maintenanceReview = "https://doi.org/10.1016/j.jmsy.2025.07.006";
const lighthouseReport =
  "https://www.weforum.org/publications/lighthouse-operating-system-driving-responsible-transformation/";

export const physicalAiManufacturingGuide = (): CaseStudyArticle => ({
  slug: "physical-ai-manufacturing-robotics-machine-vision-digital-twins",
  title:
    "Physical AI in Manufacturing: Robotics, Machine Vision, Digital Twins, and Smart Factories",
  seoTitle: "Physical AI in Manufacturing: Robotics, Vision, and Digital Twins",
  summary:
    "A first principles guide to the factory applications, edge architecture, data, safety, validation, and economics that turn artificial intelligence into useful physical work.",
  publishedLabel: "Deep Dive · Published September 20, 2026",
  publishedDate: "2026-09-20",
  publishedAt: "2026-09-20T20:47:28-04:00",
  typeLabel: "Deep Dive",
  formatLabel: "Inside the Physical AI Factory · Part 7",
  series: {
    name: "Inside the Physical AI Factory",
    label: "Part 7 of 8",
    href: "/insights/how-modern-manufacturing-works-factories-physical-ai-guide",
    previous: {
      title: "Industrial Automation Explained",
      href: "/insights/industrial-automation-explained-plc-cnc-robots-factory-software",
    },
    next: {
      title: "How to Build a Manufacturing Plant",
      href: "/insights/how-to-build-a-manufacturing-plant-equipment-costs-installation",
    },
  },
  industry: "Manufacturing",
  image: "/article-images/physical-ai-manufacturing-adaptive-factory-cover.png",
  imageFit: "cover",
  imageAlt:
    "Editorial illustration of a vision guided robot, autonomous material cart, rover assembly fixture, inspection station, and supervising engineer",
  imageCaption:
    "Original Black Scarab editorial illustration of perception, adaptive work, autonomous material movement, verification, and human supervision in a rover factory. This is an editorial interpretation, not an official factory photograph.",
  seoDescription:
    "Learn how physical AI works in manufacturing across machine vision, adaptive robots, mobile robots, predictive maintenance, digital twins, edge computing, safety, and factory economics.",
  tags: [
    "physical AI manufacturing",
    "AI in manufacturing",
    "smart factory",
    "machine vision",
    "adaptive robotics",
    "digital twins",
    "predictive maintenance",
    "edge AI",
  ],
  author: {
    name: "Rodolfo Garcia Calderoni, CFA",
    href: "/about",
  },
  sections: [
    {
      paragraphs: [
        [
          "This is Part 7 of ",
          {
            text: "Inside the Physical AI Factory",
            href: "/insights/how-modern-manufacturing-works-factories-physical-ai-guide",
          },
          ". Part 1 mapped the plant. Part 2 opened the machines. Part 3 turned an autonomous inspection rover into a product and production route. Part 4 identified the companies behind the factory. Part 5 designed the building. Part 6 traced the control loops and software that make the equipment run. Now the factory begins to interpret variation.",
        ],
        "Conventional automation is powerful because it reduces uncertainty. A fixture constrains the part. A controller executes released logic. A safety system governs hazardous motion. Physical AI becomes useful when valuable work still contains variation that cannot be removed economically. A camera sees a connector at an unexpected angle. A mobile robot finds an aisle partially blocked. A maintenance model notices a vibration pattern that fixed limits missed. A scheduler recomputes the plan after a supplier delay.",
        "The difficult question is not whether artificial intelligence can produce an answer. It is whether the complete physical system can convert that answer into more accepted output without weakening safety, quality, security, traceability, or operating control. A convincing demonstration is not yet a production capability. A production capability must survive shifts, product changes, worn tools, dirty lenses, network faults, unusual parts, maintenance events, and the limits of its own training data.",
        "This report follows the same hypothetical rover factory used throughout the series. Every product detail, performance example, maturity rating, and economic number identified as illustrative is a teaching framework. It does not describe a real plant, validated safety system, supplier quotation, or guaranteed result.",
      ],
    },
    {
      heading: "The Short Answer",
      paragraphs: [
        "Physical AI combines perception, models, planning, and physical action inside an engineered operating boundary. It can help a factory inspect variable products, guide robots toward uncertain objects, move material through changing traffic, predict equipment degradation, test production scenarios, and support people with relevant information. The intelligence may recommend an action, choose among permitted actions, or adapt a task. It should not quietly inherit authority that the process has not validated.",
        "The practical architecture is layered. Sensors observe the machine, material, product, and environment. Local compute turns observations into estimates. A task layer selects a permitted response. Deterministic controllers execute motion and process commands. Independent safety functions manage risk. Verification determines whether useful work actually occurred. Production systems record the result. Monitoring looks for drift, uncertainty, and conditions outside the evaluated envelope.",
        "The best first applications have a costly and measurable problem, sufficient representative data, a bounded decision, a safe fallback, and an owner who can act on the result. The worst begin with a model in search of a problem or grant physical authority before the team has measured failure behavior.",
      ],
      tables: [
        {
          title: "Physical AI at a Glance",
          columns: ["Question", "Required Answer", "Failure Signal"],
          rows: [
            ["What varies?", "Part pose, appearance, equipment condition, demand, traffic, or another observable condition", "The system is trained on variation that does not match production"],
            ["What decision changes?", "A defined inspection, path, maintenance, scheduling, or assistance decision", "The project claims intelligence without changing a useful action"],
            ["Who has authority?", "The model, deterministic controller, operator, engineer, quality function, or safety system", "Responsibility becomes unclear when the model is uncertain"],
            ["How is success measured?", "Accepted output, intervention, false alarm cost, downtime, lead time, yield, or another operating result", "A model metric improves while the factory result does not"],
            ["What is the fallback?", "Stop, deterministic mode, manual work, inspection hold, alternate route, or previous released model", "A fault forces unsafe improvisation or extended downtime"],
          ],
        },
      ],
    },
    {
      heading: "The Continuum From Tools to Adaptive Work",
      paragraphs: [
        "Factories do not jump from manual work to autonomous intelligence in one purchase. Mechanization supplies power. Fixed automation repeats a designed motion. Programmable automation changes sequence or recipe. Perception based automation estimates a condition that rules cannot represent easily. Adaptive physical AI changes a decision or action using that estimate and evidence from the process.",
        "The distinction is about authority, not marketing language. A camera that reads a fixed barcode supports automation but may not require machine learning. A vision model that locates randomly oriented parts adds perception. A planner that chooses a collision free grasp adds adaptive decision making. The robot controller still executes motion, and the safety system still limits hazardous behavior.",
        "More intelligence is not automatically better. If a simple fixture removes the variation, the fixture may be cheaper to validate and maintain. Physical AI earns its place when the cost of variation is material and the adaptive system handles that variation more economically than redesigning the product, process, tooling, or workplace.",
      ],
      visual: {
        src: "/article-images/manufacturing-intelligence-continuum.svg",
        mobileSrc: "/article-images/manufacturing-intelligence-continuum-mobile.svg",
        alt: "Continuum from manual work through mechanization, fixed and programmable automation, perception, and adaptive physical AI",
        caption:
          "Physical AI extends the automation continuum by interpreting variation and choosing among permitted actions. Deterministic control and safety remain underneath the adaptive layer. Original Black Scarab diagram.",
      },
      tables: [
        {
          title: "Six Levels of Manufacturing Capability",
          columns: ["Level", "What Changes", "Rover Factory Example"],
          rows: [
            ["Manual work", "A person senses, decides, and acts", "An assembler selects and fits a camera module"],
            ["Mechanization", "A powered tool assists the person", "A torque tool applies the fastening profile"],
            ["Fixed automation", "Dedicated logic repeats one arrangement", "A fixture presents one enclosure in one pose"],
            ["Programmable automation", "Released programs handle defined products", "The cell selects a recipe by rover model"],
            ["Perception based automation", "A model estimates variable physical state", "Vision locates a connector or classifies a surface"],
            ["Adaptive physical AI", "The system chooses or modifies a permitted action", "A robot selects a grasp and verifies insertion under bounded variation"],
          ],
        },
      ],
    },
    {
      heading: "The Physical AI Decision Loop",
      paragraphs: [
        "A useful physical AI system closes a larger loop around the conventional control loop. It observes the current world, estimates relevant state, chooses an action, asks a deterministic system to execute it, and verifies the result. It then records evidence that can improve the application without allowing uncontrolled learning to rewrite production behavior during a shift.",
        [
          "The 2026 ",
          { text: "NIST roadmap for AI and machine learning in smart manufacturing", href: nistRoadmap },
          " identifies advanced sensing, autonomous systems, robotics, digital twins, industrial data, and trustworthy operation as connected priorities. That connection matters. A model is only one component inside sensing, communication, control, metrology, software, people, and process knowledge.",
        ],
        "For rover camera installation, an overhead sensor captures the work area. Perception estimates the module and connector pose. A task planner chooses a permitted approach. The robot controller executes the trajectory. Force, position, and visual checks determine whether insertion succeeded. A failed verification does not become a hidden retry loop. The cell follows a released recovery policy, records the event, and requests help when the condition lies outside the approved envelope.",
      ],
      visual: {
        src: "/article-images/physical-ai-decision-loop.svg",
        mobileSrc: "/article-images/physical-ai-decision-loop-mobile.svg",
        alt: "Physical AI loop from sensing through state estimation, task decision, deterministic execution, verification, and monitored learning",
        caption:
          "The adaptive loop proposes useful action while deterministic control executes it and safety remains independent. Verification connects model output to accepted physical work. Original Black Scarab diagram.",
      },
    },
    {
      heading: "Data Is a Production Material",
      paragraphs: [
        "A factory model learns from representations of the process, not from the process itself. Images, vibration traces, torque curves, alarms, maintenance records, recipes, timestamps, part identities, operator actions, and inspection results become its evidence. If those records are incomplete, misaligned, or detached from product context, the model may learn a clean pattern that production does not actually follow.",
        "The data design should begin with the decision. A defect classifier needs examples of accepted and rejected conditions, but also a clear defect definition, imaging conditions, part family, lot, process history, and the consequence of a wrong answer. A maintenance model needs equipment state, operating load, interventions, and confirmed failure history. A scheduler needs current capacity, material availability, process constraints, due dates, and the real rules that govern changeovers and priorities.",
        [
          "Industrial interoperability can reduce custom interpretation. The ",
          { text: "OPC UA architecture", href: opcUa },
          " defines information, message, communication, and conformance models that support exchange from devices through manufacturing and enterprise systems. A shared protocol does not guarantee useful semantics, clean history, synchronized time, or correct units, but it gives the integration team a stronger foundation than anonymous values in disconnected files.",
        ],
      ],
      tables: [
        {
          title: "The Minimum Useful Data Contract",
          columns: ["Element", "Question", "Rover Example"],
          rows: [
            ["Identity", "Which product, component, asset, tool, and model produced this record?", "Rover serial, camera lot, cell, fixture, and released model version"],
            ["Time", "Are clocks aligned and event order trustworthy?", "Image, robot state, torque curve, and inspection result share a traceable sequence"],
            ["Meaning", "What do the value, unit, state, and quality code mean?", "Motor current includes unit, sample rate, operating state, and sensor status"],
            ["Ground truth", "Who confirmed the outcome and by which method?", "A quality disposition distinguishes confirmed defect, rework, and false alarm"],
            ["Context", "Which conditions could change interpretation?", "Lighting, product variant, tool age, load, temperature, and maintenance state"],
            ["Retention", "How long must evidence remain available?", "The policy supports genealogy, investigation, retraining, and audit needs"],
          ],
        },
      ],
    },
    {
      heading: "Machine Vision Turns Images Into Decisions",
      paragraphs: [
        "Machine vision is one of the most practical entrances into physical AI because it can add information without immediately controlling hazardous motion. A system may classify a cosmetic defect, locate a component, measure geometry, verify assembly, read identity, or guide a robot. The application still depends on optics, lighting, exposure, focus, calibration, triggering, fixturing, and the definition of an acceptable product.",
        [
          "NIST lists automated visual inspection among common manufacturing automation applications and has published work on defect detection and process monitoring. Its ",
          { text: "industrial AI implementation guidance", href: nistIndustrialAi },
          " warns that a high accuracy number can hide a useless model when bad events are rare. Precision, recall, false alarms, missed defects, production prevalence, and the action that follows the prediction all matter.",
        ],
        "In the rover factory, a camera may inspect seal placement around the enclosure. A missed gap can allow later water intrusion. A false reject consumes review time and may stop the line. The acceptance study therefore needs real seals, incomplete seals, contamination, color variation, surface reflections, lens contamination, changed lighting, and multiple product revisions. A single polished image set does not represent production.",
        "A buyer should ask whether the output is advisory, a quality hold, or an automatic reject. Advisory systems can begin with lower authority while the team measures performance. Automatic disposition requires stronger evidence, controlled image formation, traceable model versions, and a defined method for resolving disagreement between the model and the quality function.",
      ],
    },
    {
      heading: "Adaptive Robots Need More Than a Better Camera",
      paragraphs: [
        "Variable picking and assembly combine perception with geometry, motion planning, gripping, contact, and process verification. Finding the part is not the same as grasping it. Grasping it is not the same as presenting it correctly. Moving to the nominal pose is not proof that the insertion, fastening, finishing, or test result passed.",
        "The hardware basket includes the robot, controller, cameras, lenses, lighting, compute, network, calibration targets, gripper or process tool, tool changer, sensing, fixture, guarding, and service access. Payload, reach, cable behavior, cycle time, environmental rating, and controller interface can eliminate a concept before model quality becomes the limiting factor.",
        [
          "Industrial robot applications remain subject to engineered safety requirements. ISO lists the ",
          { text: "2025 editions of ISO 10218 Parts 1 and 2", href: isoRobotics },
          " for industrial robots and robot applications. Physical AI does not replace the machinery risk assessment, protective measures, validation, training, or operating procedures required for the actual application.",
        ],
        "For rover component picking, the first deployment might allow a vision system to propose a grasp while the robot executes only from a reviewed library and the cell rejects uncertain scenes. A later release could expand permitted poses after test evidence accumulates. This staged authority is usually more defensible than asking a general model to improvise unrestricted motion on day one.",
      ],
    },
    {
      heading: "Autonomous Material Movement Is a System, Not a Vehicle",
      paragraphs: [
        "An autonomous mobile robot can move kits, components, tools, scrap, or finished goods without a fixed guide path. The vehicle localizes, plans a route, detects people and obstacles, and interacts with doors, chargers, conveyors, elevators, or stations. Fleet software assigns work and manages traffic. The production system must still decide what should move, when, in which container, with which identity, and what happens if delivery fails.",
        [
          "The operating zone is part of the safety design. ",
          { text: "ISO 3691 Part 4", href: isoMobileRobots },
          " covers safety requirements and verification for driverless industrial trucks and their systems, including vehicles commonly described as automated guided vehicles or autonomous mobile robots. Its scope highlights why aisle condition, load handling, modes, communication loss, and foreseeable misuse cannot be reduced to an obstacle avoidance demonstration.",
        ],
        "The rover plant should begin with one bounded flow, such as moving verified component kits from a supermarket to final assembly. Success is not miles traveled. It is correct, timely delivery with low intervention and no new congestion or safety burden. The fallback may be a manual tugger route, a fixed buffer, or a rule that the vehicle stops and requests recovery rather than searching indefinitely.",
      ],
    },
    {
      heading: "Predictive Maintenance Must Change Maintenance Work",
      paragraphs: [
        "Condition monitoring observes equipment health. Anomaly detection identifies behavior that differs from a learned baseline. Diagnosis estimates what is wrong. Prognosis estimates how condition may evolve. Predictive maintenance creates value only when those signals lead to a better maintenance decision, available labor, the right spare, and an intervention window that avoids greater production loss.",
        [
          "NIST's ",
          { text: "Augmented Intelligence for Manufacturing Systems project", href: nistAims },
          " combines measurement, physics based models, and AI for monitoring, diagnostics, and prognostics. That hybrid idea is important. A model can find patterns that simple limits miss, while measurement science and physical understanding help define whether the prediction is plausible and useful.",
        ],
        "In the rover plant, vibration and motor current from a conveyor gearbox may support an early warning. The evaluation must include changing load, speed, temperature, lubrication, sensor mounting, planned maintenance, and confirmed fault evidence. A warning that cannot distinguish a heavy batch from bearing damage will create work instead of preventing it.",
        [
          "A 2025 ",
          { text: "systematic review of AI enhanced digital twins in maintenance", href: maintenanceReview },
          " found that organizational barriers, data integration, scale, and workforce readiness remain major gaps between research and industrial practice. That finding supports a modest deployment rule: connect every alert to a named decision, owner, response time, and economic consequence before expanding the model estate.",
        ],
      ],
    },
    {
      heading: "A Digital Twin Must Stay Connected to Evidence",
      paragraphs: [
        "A digital model becomes operationally valuable when it remains meaningfully synchronized with a physical product, process, machine, cell, or factory and supports a defined decision. A three dimensional rendering with no governed data connection may be useful visualization, but it is not automatically a trustworthy digital twin.",
        [
          "The ",
          { text: "ISO 23247 framework", href: isoDigitalTwin },
          " provides general principles and requirements for manufacturing digital twins. NIST's ",
          { text: "digital twin program", href: nistDigitalTwins },
          " emphasizes implementation, testing, interoperability, verification, validation, and uncertainty quantification. These are the disciplines that prevent a model from becoming an attractive but stale representation.",
        ],
        "The rover factory can use several different twins. A product twin relates the released configuration to actual build history. A process twin models calibration or testing behavior. An asset twin represents a machine and its condition. A production twin tests line balance, buffers, and schedule scenarios. These models should not be forced into one giant object if separate scopes, update rates, owners, and validation methods make them more useful.",
        "Before trusting a result, ask which physical elements are represented, which data update them, how latency and missing values are handled, what uncertainty remains, how the model was validated, and which decision it is allowed to influence. A twin that predicts a queue is different from one that changes a machine setting. The second needs a much stronger authority and verification case.",
      ],
    },
    {
      heading: "Scheduling and Production Decisions",
      paragraphs: [
        "Production scheduling chooses how orders, machines, people, tools, material, and time fit together. Optimization has served factories for decades. Machine learning can estimate processing time, disruption probability, or hidden operating rules. Generative systems can help people explore scenarios. None of these tools can produce a feasible plan from missing inventory, impossible due dates, or incorrect capacity data.",
        "The useful distinction is recommendation versus commitment. A scheduling model may propose a new sequence after a calibration station fails. The manufacturing operations system checks material, tooling, labor, quality holds, and route constraints. A planner approves or rejects the change. Only then does released work reach the cells. Directly allowing a broad model to rewrite shop orders would bypass the controls that make the production record reliable.",
        "Measure schedule quality with operating results such as on time completion, queue time, changeover, overtime, work in process, expedites, and stability. A mathematically efficient schedule that changes every few minutes can make the factory harder to run. Human teams need enough stability to stage material, prepare tools, and understand priorities.",
      ],
    },
    {
      heading: "Generative AI Belongs Beside Engineering, Not Above Released Control",
      paragraphs: [
        "Generative AI can help draft work instructions, summarize alarms, search manuals, explain a program, propose robot code, compare design alternatives, prepare test cases, and retrieve lessons from previous faults. These tasks can reduce search and documentation effort. They can also produce confident errors, omit constraints, expose sensitive data, or return outdated instructions.",
        [
          "The ",
          { text: "NIST Generative AI Profile", href: genAiProfile },
          " extends the AI Risk Management Framework with risks and suggested actions for generative systems. In manufacturing, the most important practical control is to separate generated content from released authority. A suggested procedure is not an approved instruction. Suggested code is not a released machine program. A generated diagnosis is not a maintenance disposition.",
        ],
        "For the rover plant, an assistant may assemble troubleshooting context from an alarm, wiring diagram, maintenance history, and machine manual. The technician still needs source visibility, current document revision, clear uncertainty, and a safe diagnostic procedure. If the answer changes a safety function, process parameter, quality limit, or released program, the existing engineering and change controls remain in force.",
      ],
    },
    {
      heading: "Where the Compute Should Run",
      paragraphs: [
        "Physical AI divides work across the device, machine, cell, plant, and external services. Fast perception and response often belong near the machine. Plant systems can combine context across assets and lines. External compute can support model development, fleet analysis, or workloads that do not require immediate response. The correct split follows latency, availability, bandwidth, data rights, cybersecurity, thermal limits, serviceability, and cost.",
        "Edge inference is not automatically real time control. A model may run locally yet still take too long for a particular hazard or motion. A cloud service may be acceptable for drafting a maintenance summary but unsuitable for a closed loop process decision. The team should measure the full interval from sensor exposure through transfer, inference, decision, controller response, and physical effect.",
        "A production edge computer needs more than peak model speed. It needs sustained performance in the cabinet environment, health monitoring, storage management, replacement procedures, model rollback, cybersecurity maintenance, clock synchronization, and enough interface stability to survive changes elsewhere in the cell.",
      ],
      visual: {
        src: "/article-images/physical-ai-edge-architecture.svg",
        mobileSrc: "/article-images/physical-ai-edge-architecture-mobile.svg",
        alt: "Factory physical AI architecture across sensors, deterministic controls, edge compute, plant systems, engineering systems, and governed external services",
        caption:
          "Physical AI spans different timing and authority layers. Fast physical response stays near the process, while plant and external systems support coordination, analysis, and model lifecycle work. Original Black Scarab diagram.",
      },
    },
    {
      heading: "Safety, Cybersecurity, and AI Governance Are One Deployment Problem",
      paragraphs: [
        "A physical model can be wrong in a way that changes motion, rejects good product, accepts bad product, delays maintenance, or disrupts production. The risk depends on the application and authority. A recommendation that a planner reviews is not equivalent to an autonomous motion command. Governance should therefore begin with the physical consequence, not with a generic model category.",
        [
          "The ",
          { text: "NIST AI Risk Management Framework", href: nistAiRmf },
          " organizes voluntary risk management around govern, map, measure, and manage. Applied to a factory, those functions mean defining ownership and policy, mapping the process and affected people, measuring performance and failure, and controlling deployment, monitoring, incidents, and retirement.",
        ],
        [
          "Connectivity also expands the attack surface. NIST's ",
          { text: "smart manufacturing cybersecurity work", href: nistCyber },
          " addresses the need to protect connected manufacturing without ignoring performance, reliability, and safety. Model files, training data, remote access, update channels, credentials, logs, and interfaces between information technology and operational technology all belong in the security design.",
        ],
        "The operating package should identify the released model and configuration, intended use, excluded conditions, input checks, output authority, test evidence, approval owner, monitoring thresholds, fallback, rollback method, incident process, and retraining trigger. A model registry by itself is not governance. Governance is the collection of technical and organizational controls that keeps the application inside its approved purpose.",
      ],
    },
    {
      heading: "Ready to Buy, Controlled Pilot, or Watch",
      paragraphs: [
        "Readiness belongs to an application, not a technology label. Machine vision may be routine for one stable inspection and experimental for a rare defect under uncontrolled lighting. Mobile transport may be mature in a mapped warehouse and unsuitable beside suspended loads or changing outdoor terrain. A buyer should classify the complete use case, environment, integration, and acceptance method.",
        "Ready to buy means credible products and integrators exist, the task is bounded, standards and acceptance methods are understood, and the buyer can validate the actual installation. Controlled pilot means the value is plausible but data, variation, integration, or repeatability remain uncertain. Watch means the concept may become useful, but current evidence or operational fit does not justify giving it production responsibility.",
      ],
      tables: [
        {
          title: "Application Readiness for a Typical Small Factory",
          columns: ["Application", "Starting Classification", "What Moves It Forward"],
          rows: [
            ["Barcode, identity, and defined visual checks", "Ready to buy", "Representative parts, controlled imaging, clear acceptance, and traceable disposition"],
            ["Bounded robot guidance and variable picking", "Ready to buy or controlled pilot", "Known object families, grasp evidence, recovery, cycle time, and complete cell validation"],
            ["Autonomous kit movement on controlled indoor routes", "Ready to buy", "Safe operating zone, traffic rules, interfaces, intervention plan, and throughput evidence"],
            ["Condition monitoring with advisory maintenance alerts", "Ready to buy or controlled pilot", "Useful failure history, operating context, maintenance workflow, and measured avoided loss"],
            ["Digital twin for a defined asset or production decision", "Controlled pilot", "Governed synchronization, validated model, uncertainty, owner, and decision value"],
            ["AI assisted instructions and troubleshooting", "Controlled pilot", "Approved sources, retrieval controls, review, access limits, and no direct released authority"],
            ["Dynamic scheduling recommendations", "Controlled pilot", "Complete constraints, planner review, stable interfaces, and operating outcome measurement"],
            ["General agent with unrestricted machine authority", "Watch", "A much stronger safety, verification, security, accountability, and evidence case"],
          ],
          note: "Black Scarab assessment framework. Classification changes with task, environment, supplier evidence, integration, and risk.",
        },
      ],
    },
    {
      heading: "The Economics Begin With Accepted Output",
      paragraphs: [
        "The business case should compare the complete current process with the complete proposed process. Include hardware, software, engineering, data preparation, integration, guarding, networking, validation, training, support, compute replacement, maintenance, monitoring, retraining, cybersecurity, and expected disruption during commissioning. A software subscription may be a small part of installed cost.",
        "Benefits can include labor capacity, higher yield, less scrap, shorter inspection, reduced downtime, lower work in process, faster changeover, improved delivery, or avoided capital. Count only the portion that the application can plausibly change. If a robot moves faster but the next station remains the bottleneck, line output may not improve.",
        "Consider an illustrative rover seal inspection. The plant processes 1,000 units annually. Manual inspection and documentation consume 0.35 hour per unit at a burdened value of $42 per hour, or $14,700 annually. Rework and escape costs attributed to late seal discovery average an illustrative $18,000 annually. A vision system costing an illustrative $78,000 installed plus $12,000 annual support is estimated to remove 70 percent of inspection labor and half of the attributable rework and escape cost.",
        "The illustrative annual gross benefit is $10,290 of labor capacity plus $9,000 of quality cost, or $19,290. After support, annual net benefit is $7,290 and simple payback is about 10.7 years. If the same platform supports additional high value checks without proportional integration cost, the case can improve. If volume, defect prevalence, or captured labor value is lower, it becomes worse. None of these figures is a supplier price or performance claim. The example shows why a compelling demo can still fail an economic review.",
      ],
      tables: [
        {
          title: "Physical AI Economic Model",
          columns: ["Category", "Include", "Common Omission"],
          rows: [
            ["Installed cost", "Equipment, compute, tools, integration, guarding, data, validation, and launch", "Treating a license or robot price as the complete project"],
            ["Recurring cost", "Software, support, monitoring, storage, updates, model work, and replacement", "Assuming the first model runs unchanged forever"],
            ["Captured benefit", "Accepted labor capacity, yield, uptime, throughput, lead time, or avoided capital", "Counting theoretical time that cannot be redeployed"],
            ["Production risk", "Commissioning loss, false alarms, missed defects, intervention, and fallback operation", "Using only the successful automated cycle"],
            ["Scale effect", "Reuse across products, cells, and sites after repeated engineering is measured", "Assuming the second deployment costs almost nothing"],
          ],
        },
      ],
    },
    {
      heading: "A Practical Deployment Sequence",
      paragraphs: [
        "Step 1: define the operating problem in physical terms. Record the current process, variation, failure, consequence, owner, baseline, and simplest credible alternative.",
        "Step 2: define the decision and authority. State exactly what the system observes, recommends, changes, and is forbidden to change.",
        "Step 3: build the data contract. Establish identity, time, units, context, ground truth, rights, retention, and the method for correcting labels and records.",
        "Step 4: design the complete cell or workflow. Include sensors, optics, tools, controllers, compute, network, safety, cybersecurity, people, maintenance, and abnormal operation.",
        "Step 5: create a representative evaluation set before tuning to the answer. Include normal variation, rare but consequential cases, degraded inputs, faults, product changes, and conditions that should trigger fallback.",
        "Step 6: begin with limited authority. Use shadow mode, advisory output, quality review, speed limits, restricted object families, or a bounded operating zone where appropriate.",
        "Step 7: validate the physical outcome. Measure accepted work, false alarms, misses, interventions, cycle time, downtime, recovery, and the downstream result.",
        "Step 8: release through change control. Record the approved model, configuration, interfaces, data, test evidence, owner, monitor, rollback, and training.",
        "Step 9: monitor production drift. Look for changed product, tooling, lighting, loads, routes, behavior, data quality, model confidence, and outcome quality.",
        "Step 10: expand only after the second deployment becomes easier for a known reason. Reuse should come from stable interfaces, documented acceptance, shared data meaning, modular hardware, and operational learning rather than optimism.",
      ],
    },
    {
      heading: "Common Physical AI Mistakes",
      paragraphs: [
        "The first mistake is automating an unstable process before understanding why it varies. The second is using a model to compensate for poor lighting, weak fixturing, missing maintenance, or unclear product specifications that should be corrected directly. The third is optimizing accuracy instead of the cost of misses, false alarms, intervention, and downstream action.",
        "The fourth is testing only clean data and normal cycles. The fifth is treating a simulation, digital model, or model confidence score as physical evidence. The sixth is ignoring identity, time, units, and product context. The seventh is connecting the model to equipment before defining authority and fallback.",
        "The eighth is assuming local inference solves safety or cybersecurity. The ninth is allowing generated instructions or code to bypass release control. The tenth is buying a platform before selecting a valuable application. The eleventh is declaring a pilot successful without measuring accepted output across enough real variation. The twelfth is assuming that one successful cell proves inexpensive scale.",
      ],
    },
    {
      heading: "Your Physical AI Manufacturing Checkpoint",
      paragraphs: [
        "You should now be able to distinguish fixed, programmable, perception based, and adaptive automation. You should be able to trace a physical AI application from sensing through state estimation, task decision, deterministic execution, verification, production record, monitoring, and controlled model change.",
        "The central idea is that intelligence becomes industrial only when it fits the production system. Useful physical AI does not float above machines, people, data, and controls. It works through them. Its value is measured in accepted output and resilient operations. Its authority is earned through evidence, bounded by safety and governance, and withdrawn through a tested fallback when the evidence no longer holds.",
      ],
      tables: [
        {
          title: "Five Questions You Should Now Be Able to Answer",
          columns: ["Question", "What a Good Answer Contains"],
          rows: [
            ["When does physical AI add value?", "When economically important variation requires perception, prediction, planning, or adaptation that simpler methods cannot provide well"],
            ["What stays deterministic?", "Released motion and process control, interlocks, safety functions, identity, acceptance rules, and other functions that require predictable behavior"],
            ["What makes factory data useful?", "Identity, synchronized time, meaning, context, ground truth, quality, rights, and connection to an operating decision"],
            ["How should authority expand?", "From observation or recommendation into bounded action only after representative testing, physical verification, monitoring, fallback, and approval"],
            ["How is the business case proven?", "Complete installed and recurring cost compared with captured improvement in accepted output, quality, uptime, lead time, or capital"],
          ],
        },
      ],
    },
    {
      heading: "Next in the Series",
      paragraphs: [
        "Part 8 will assemble the complete factory project. The rover business will move from product, route, layout, automation, and selective physical AI into equipment purchasing, requests for quotation, factory and site acceptance testing, building work, installation, commissioning, staffing, insurance, working capital, and the first production run.",
        "The final comparison will show a prototype workshop, a minimum viable factory, a conventional small plant, and a selectively intelligent plant. The goal is to decide where capital should be committed now, which capabilities should remain flexible, and how a company can reach production without confusing an impressive factory concept with a factory that can actually ship accepted products.",
      ],
    },
    {
      heading: "Research Method",
      paragraphs: [
        "This report uses the 2026 NIST roadmap for AI and machine learning in smart manufacturing for the technology and adoption landscape. NIST industrial AI, robotics, augmented intelligence, digital twin, AI risk, generative AI, and smart manufacturing cybersecurity materials support the application, evaluation, governance, and integration framework.",
        "ISO 10218 materials support the industrial robot safety boundary. ISO 3691 Part 4 supports the driverless industrial truck context. ISO 23247 supports the manufacturing digital twin framework. OPC Foundation materials support industrial information exchange and semantic interoperability. A 2025 peer reviewed maintenance review provides independent context on research and industrial adoption gaps. World Economic Forum lighthouse materials provide examples of reported digital manufacturing transformation, but participating company results are not treated as universal outcomes.",
        "The maturity ladder, decision loop, readiness classifications, deployment sequence, rover applications, economics, and buyer tests are Black Scarab analysis. They do not describe a real deployment, legal requirement, certified safety architecture, guaranteed result, or recommended purchase. Physical AI deployments require qualified manufacturing, control, robotics, safety, quality, data, cybersecurity, maintenance, workforce, financial, and legal review for the actual process and jurisdiction.",
      ],
    },
  ],
  sources: [
    "NIST 2026 Roadmap on Artificial Intelligence and Machine Learning for Smart Manufacturing",
    "NIST Industrial Artificial Intelligence implementation guidance",
    "NIST AI Risk Management Framework and Generative AI Profile",
    "NIST augmented intelligence, digital twin, robotics, and smart manufacturing cybersecurity programs",
    "ISO 10218 industrial robot safety standards",
    "ISO 3691 Part 4 driverless industrial truck safety standard",
    "ISO 23247 digital twin framework for manufacturing",
    "OPC Foundation OPC UA architecture",
    "Peer reviewed review of AI enhanced digital twins in maintenance",
    "World Economic Forum Lighthouse Operating System",
  ],
  sourceLinks: [
    { label: "NIST 2026 Roadmap on AI and Machine Learning for Smart Manufacturing", url: nistRoadmap },
    { label: "NIST Industrial Artificial Intelligence implementation guidance", url: nistIndustrialAi },
    { label: "NIST AI Risk Management Framework", url: nistAiRmf },
    { label: "NIST Generative AI Profile", url: genAiProfile },
    { label: "NIST Augmented Intelligence for Manufacturing Systems", url: nistAims },
    { label: "NIST Digital Twins for Advanced Manufacturing", url: nistDigitalTwins },
    { label: "NIST Robotics and Manufacturing Automation", url: "https://www.nist.gov/mep/robotics-and-manufacturing-automation" },
    { label: "NIST Cybersecurity for Smart Manufacturing Systems", url: nistCyber },
    { label: "ISO robotics standards and ISO 10218", url: isoRobotics },
    { label: "ISO 3691 Part 4 driverless industrial trucks", url: isoMobileRobots },
    { label: "ISO 23247 digital twin framework for manufacturing", url: isoDigitalTwin },
    { label: "OPC UA overview and concepts", url: opcUa },
    { label: "AI enhanced digital twins in maintenance review", url: maintenanceReview },
    { label: "World Economic Forum Lighthouse Operating System", url: lighthouseReport },
  ],
});
