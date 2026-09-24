import type { CaseStudyArticle } from "@/lib/case-studies";

const nvidiaDefinition =
  "https://www.nvidia.com/en-gb/glossary/generative-physical-ai/";
const ifrDefinition = "https://ifr.org/industrial-robots";
const ifrMarket = "https://ifr.org/worldrobotics/report-2025";
const geminiRobotics =
  "https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/";
const geminiSafety =
  "https://deepmind.google/models/gemini-robotics/responsibly-advancing-ai-and-robotics/";
const rt2 =
  "https://deepmind.google/blog/rt-2-new-model-translates-vision-and-language-into-action/";
const openX = "https://robotics-transformer-x.github.io/";
const leRobot = "https://huggingface.co/docs/lerobot/main/index";
const embodiedSurvey = "https://arxiv.org/abs/2407.06886";
const isoRobot = "https://www.iso.org/standard/73933.html";
const nistRisk = "https://www.nist.gov/itl/ai-risk-management-framework";
const nistTesting =
  "https://www.nist.gov/programs-projects/performance-assessment-framework-robotic-systems";
const nhtsaAutomation =
  "https://www.nhtsa.gov/vehicle-safety/automated-vehicle-safety";
const waymoSafety = "https://waymo.com/safety/impact/";
const johnDeere =
  "https://www.deere.com/en-us/our-company/technology-and-innovation/sense-and-act";

export const whatIsPhysicalAiDeepDive = (): CaseStudyArticle => ({
  slug: "what-is-physical-ai-complete-guide",
  title: "What Is Physical AI? The Complete Guide to Intelligence That Acts in the Real World",
  seoTitle: "What Is Physical AI? Definition, Examples, Technology and Risks",
  summary:
    "A practical definition of physical AI, how it differs from robotics and automation, how the complete technology stack works, where it creates value, how it fails, and what buyers should demand before deployment.",
  publishedLabel: "Deep Dive · Published September 24, 2026",
  publishedDate: "2026-09-24",
  publishedAt: "2026-09-24T12:30:58-04:00",
  typeLabel: "Deep Dive",
  formatLabel: "Definition, architecture, applications, economics, and risk",
  industry: "Physical AI",
  image: "/article-images/what-is-physical-ai-guide.png",
  imageAlt:
    "Editorial paper construction showing a sensing eye, spatial model, decision mechanism, and robotic gripper connected in a physical action loop",
  imageCaption:
    "Original AI generated editorial illustration. The paper construction represents sensing, spatial understanding, decision making, physical action, and feedback. It is not a commercial product or technical schematic.",
  seoDescription:
    "What is physical AI? Learn the definition, system architecture, hardware, robot learning methods, applications, costs, safety risks, buyer tests, and commercial outlook.",
  tags: [
    "physical AI",
    "embodied AI",
    "robotics",
    "autonomous systems",
    "vision language action models",
    "edge AI",
    "world models",
    "robot safety",
  ],
  author: { name: "Rodolfo Garcia Calderoni, CFA", href: "/about" },
  sections: [
    {
      paragraphs: [
        "Artificial intelligence becomes physical when its output can change the world around it. A language model can recommend where a box should go. A physical AI system can identify the box, choose a safe grasp, move it, notice that it slipped, and try a permitted recovery. The difference is not a metal body. It is a closed loop between observation, decision, action, and consequence.",
        [
          "The phrase has become an umbrella for robots, autonomous vehicles, drones, intelligent machines, and smart spaces. NVIDIA defines physical AI as systems that perceive, understand, reason, and perform or orchestrate actions in the physical world. That is useful, but it is broad. The company includes cameras and smart spaces alongside machines that move. The ",
          { text: "NVIDIA definition", href: nvidiaDefinition },
          " therefore describes a market category more than a settled scientific standard.",
        ],
        "Black Scarab uses a stricter operational test. Physical AI observes the current physical state, uses a learned model to choose or adapt an action, causes or coordinates a change in a machine or process, and measures what happened next. The strength of the claim rises with the system's authority. A camera that recommends an inspection is near the boundary. A vehicle that steers and brakes is clearly inside it.",
        "This distinction matters because physical errors are not just incorrect answers. They can become damaged products, blocked aisles, wasted material, lost production, or human injury. The most valuable physical AI companies will not merely build capable models. They will build complete systems that know where they may act, detect when reality has moved outside that boundary, and recover without turning every exception into a service call.",
      ],
    },
    {
      heading: "A Working Definition",
      paragraphs: [
        "Physical AI is an intelligent system that observes the physical world, chooses under physical constraints, and causes or coordinates an action whose result can be measured in the world.",
        "Four verbs carry most of the definition: observe, choose, act, and verify. Observation grounds the system in current conditions. Choice separates learned adaptation from a fixed sequence. Action gives the system consequence. Verification closes the loop so the next decision can respond to the actual result rather than an assumed one.",
        "This definition does not require a humanoid. The body can be an industrial arm, a vehicle, a drone, a farm machine, a surgical instrument, a building control system, or a network of cameras that changes how a site operates. It also does not require a single giant model. Several narrow models, conventional control software, and a carefully designed safety system can form a more useful physical AI product than one impressive general model.",
      ],
      visual: {
        src: "/article-images/physical-ai-boundary-test.svg",
        mobileSrc: "/article-images/physical-ai-boundary-test-mobile.svg",
        alt: "Four question boundary test for physical AI covering observation, learned choice, physical action, and result verification",
        caption:
          "Black Scarab operational framework. The boundary is defined by the loop and its authority, not by the appearance of the machine.",
      },
    },
    {
      heading: "What Counts and What Does Not",
      paragraphs: [
        "The category becomes easier to understand through edge cases. These examples are classifications under the Black Scarab definition, not claims that every industry uses the term in exactly the same way.",
      ],
      callouts: [
        {
          label: "Not physical AI",
          title: "A chatbot that writes maintenance instructions",
          body: "The model may understand the equipment and produce useful advice, but it receives no live physical state and has no authority over the machine. It remains digital AI unless a person or governed system connects its output to the operation.",
        },
        {
          label: "Robot, but not necessarily physical AI",
          title: "A robot arm repeating one taught path",
          body: "The machine acts in the world, yet the motion may be conventional automation with no learned interpretation or adaptation. A robot body is not proof that artificial intelligence is making the decision.",
        },
        {
          label: "At the boundary",
          title: "A vision system that flags a defective part",
          body: "It observes the physical world and uses AI, but it may only produce information. If a governed control removes the part or adjusts the process and then verifies the result, the complete system crosses more clearly into physical AI.",
        },
        {
          label: "Physical AI",
          title: "An autonomous mobile robot rerouting around people and pallets",
          body: "The system senses a changing environment, selects motion, controls a physical platform, and updates its plan from new observations. Its operating area and recovery behavior still determine how autonomous it really is.",
        },
        {
          label: "Enabling technology",
          title: "A digital twin of a factory",
          body: "A digital twin can train, test, or coordinate physical AI, but a model of a facility is not automatically an acting system. It becomes part of physical AI when information from the twin influences governed operation and the real result returns to the loop.",
        },
        {
          label: "Physical AI when authority is real",
          title: "An intelligent building that changes ventilation and access",
          body: "If models use current occupancy and environmental data to alter equipment or orchestrate site operations, the system fits the broad physical AI category. If it only displays a dashboard, it is analytics about the physical world.",
        },
      ],
    },
    {
      heading: "Physical AI, Robotics, Automation, and Embodied AI",
      paragraphs: [
        [
          "Robotics describes machines with sensing, computation, and actuation. The International Federation of Robotics follows the ISO vocabulary, which defines a robot as a programmed actuated mechanism with a degree of autonomy for locomotion, manipulation, or positioning. The ",
          { text: "robot definition", href: ifrDefinition },
          " permits many forms of control. Some robots use learned models. Others use fixed programs. Physical AI is therefore a possible intelligence layer for robotics, not a replacement name for every robot.",
        ],
        "Automation is the broader practice of making processes operate with less direct human work. A conveyor, programmable logic controller, and fixed robot cell can produce enormous value without machine learning. Physical AI extends automation where conditions vary enough that rules, fixtures, and fixed paths become too costly or too brittle. That does not make conventional automation obsolete. It changes the economic frontier of what can be automated.",
        [
          "Embodied AI is a research tradition concerned with intelligent agents that perceive and act through a body in an environment. Recent surveys organize the field around embodied perception, interaction, agents, simulation, and adaptation from simulation to reality. The ",
          { text: "embodied AI literature", href: embodiedSurvey },
          " often includes virtual agents as well as physical robots. Physical AI is more commercially oriented and usually points toward real machines, infrastructure, and deployment.",
        ],
        "Edge AI answers a different question: where does computation run? A physical AI system may process perception and control on the machine, send fleet data to a plant server, and use cloud infrastructure for training. Edge computing can improve response time and resilience, but local placement alone does not make a system physical AI.",
        "Agentic AI concerns systems that plan and use tools toward a goal. Many agents live entirely in software. A physical AI system may include an agent for task planning, but motor control and safety require a far more constrained interface than a digital agent calling an application programming interface. A planning model should not acquire production authority merely because it can produce a plausible sequence of steps.",
        "Spatial AI emphasizes three dimensional understanding, object relationships, motion, and place. Those capabilities are important to physical AI because a machine must know where things are and how actions could change them. Spatial understanding still does not guarantee competent action. The system also needs an embodiment, control interfaces, timing, safety, and a measurable task.",
      ],
    },
    {
      heading: "The Physical AI Decision Loop",
      paragraphs: [
        "A useful physical AI system is a stack of cooperating layers. Sensors measure the environment and machine state. Perception converts raw measurements into objects, geometry, motion, or process conditions. State estimation combines incomplete observations into a working account of what is happening now. A task policy or planner chooses a permitted action. Conventional controllers translate that request into stable motion. Actuators apply force. Verification determines whether the work succeeded.",
        "Artificial intelligence may occupy one layer or several. A learned vision model can identify a part while a conventional planner and robot controller execute the motion. A vision language action model can map images and instructions more directly to robot actions. A world model can predict possible future states before the system commits. None of these designs removes the need for mechanical control, calibration, interlocks, or process engineering.",
        "The loop also operates at several time scales. Motor current control needs fast and predictable response. Perception and local planning can tolerate more computation. Task reasoning can be slower still. Treating every decision as a request to one remote model creates avoidable delay and a large failure surface. Good architecture places each responsibility where its timing and authority make sense.",
      ],
      visual: {
        src: "/article-images/physical-ai-decision-loop.svg",
        mobileSrc: "/article-images/physical-ai-decision-loop-mobile.svg",
        alt: "Physical AI decision loop from sensing and estimation through decision, execution, action, and verification with an independent safety boundary",
        caption:
          "Black Scarab functional model. Independent safety does not assume that the AI model will always interpret the scene correctly.",
      },
    },
    {
      heading: "The Model Is Not the Whole Machine",
      paragraphs: [
        "A foundation model can make the system more flexible, but the complete product still depends on ordinary engineering. A camera needs a clear view. A gripper must hold the object. A battery must last through the mission. A controller must deliver stable motion. A network must fail in a defined way. A technician must be able to diagnose a fault.",
        "This is why a model benchmark and a production result are different forms of evidence. A model can score well on object recognition while a reflective surface defeats the installed camera. A policy can succeed in a laboratory while cable drag changes the real motion. A robot can complete a demonstration while the surrounding workflow makes it slower than the manual process.",
        "The most important product boundary is often the interface between learned behavior and deterministic control. The AI system may request a grasp, route, target pose, or task plan. A lower layer checks limits, resolves motion, and applies a permitted command. The exact boundary changes by application, but it should be explicit, testable, and versioned.",
      ],
    },
    {
      heading: "How Machines Learn Physical Skills",
      paragraphs: [
        "Physical AI cannot learn only from text. Internet scale images and language can provide useful concepts, but action requires data that connects an observation to a movement and an outcome. That data may come from human demonstrations, teleoperation, existing robot logs, autonomous trial and error, simulation, or a mixture of all five.",
        [
          "Google DeepMind's RT 2 work showed how a vision and language model could be trained to emit robot action tokens and use knowledge from web data in manipulation tasks. The ",
          { text: "RT 2 research", href: rt2 },
          " was important because it joined semantic understanding with closed loop control. It did not eliminate the need for robot data. It combined web knowledge with demonstrations collected from physical systems.",
        ],
        [
          "The Open X Embodiment collaboration pooled more than one million real robot trajectories from 22 robot embodiments and reported positive transfer across machines. The ",
          { text: "Open X Embodiment dataset", href: openX },
          " illustrates both the opportunity and the difficulty. Robot datasets must reconcile different cameras, coordinate systems, action spaces, grippers, tasks, and data quality before one policy can learn across them.",
        ],
        [
          "Open tools are lowering the barrier. Hugging Face ",
          { text: "LeRobot", href: leRobot },
          " provides common interfaces for robots, synchronized sensor and action datasets, training policies, and deployment. Standardization can make experimentation easier, but a portable data format does not make every learned skill portable to every body. Payload, reach, sensing, and control interfaces still define what the machine can do.",
        ],
        "Simulation supplies experiences that are expensive, rare, or dangerous to collect in the world. Developers can vary lighting, friction, object position, sensor noise, and failures at scale. The risk is a gap between the simulated world and the installed one. Training succeeds when variation teaches the policy something useful. It fails when the simulator hides the very condition that breaks the deployment.",
        "Real deployment data completes the cycle. Operators reveal unusual objects, partial failures, and workarounds that a laboratory did not anticipate. The data flywheel is valuable only if events are synchronized, outcomes are labeled, privacy and ownership are clear, and the team can reproduce the software and hardware state that generated the record.",
      ],
    },
    {
      heading: "Where the Computation Runs",
      paragraphs: [
        "Physical AI is usually a hybrid system. Fast perception, local planning, and machine health belong near the equipment when delay or connectivity loss could interrupt work. Plant or site systems coordinate fleets, production orders, identity, quality, and maintenance. Engineering systems prepare datasets, train models, compare versions, and approve releases. External services can support larger analysis, remote assistance, and fleet learning.",
        "The word edge is sometimes treated as a guarantee of speed and privacy. It is neither. The buyer must measure the full interval from sensor capture through model inference, command release, and physical response. Local data can still leave the site through logs or support tools. A compact computer can still overheat or run out of storage. Architecture claims need an observed test under the actual workload.",
        "Cloud services remain useful because training and fleet analysis may need far more compute than one machine can carry. The operational question is what the system can still do when the external connection is slow or unavailable. Safe stop, reduced capability, and continued local operation are different answers. The contract and acceptance test should say which one applies.",
      ],
      visual: {
        src: "/article-images/physical-ai-edge-architecture.svg",
        mobileSrc: "/article-images/physical-ai-edge-architecture-mobile.svg",
        alt: "Physical AI architecture across physical controls, machine edge, plant systems, model engineering, and governed external services",
        caption:
          "Black Scarab architecture view. Compute placement follows timing, authority, availability, security, and data rights.",
      },
    },
    {
      heading: "The Hardware Behind Physical AI",
      paragraphs: [
        [
          "Sensors give the system its evidence. Cameras provide color and texture. Depth cameras and lidar estimate geometry and distance. Radar can observe motion in difficult weather. Inertial sensors measure orientation and acceleration. Encoders report joint position. Force, torque, pressure, acoustic, and thermal sensors reveal contact and process state. Black Scarab has separate guides to ",
          { text: "Ouster lidar", href: "/insights/ouster-lidar-spatial-perception-physical-ai-guide" },
          ", ",
          { text: "Stereolabs spatial vision", href: "/insights/stereolabs-zed-spatial-perception-robotics-guide" },
          ", and ",
          { text: "Luxonis spatial cameras", href: "/insights/luxonis-oak-spatial-ai-cameras-physical-ai-guide" },
          ".",
        ],
        [
          "Compute turns observations into state and action. A central processor handles orchestration. Graphics processors, neural accelerators, and specialized vision devices run learned models. Memory capacity, data movement, power draw, thermal behavior, and software support can matter more than a headline throughput number. The ",
          { text: "NVIDIA physical AI stack", href: "/insights/nvidia-physical-ai-cosmos-isaac-jetson-omniverse-guide" },
          ", ",
          { text: "Qualcomm Robotics RB5", href: "/insights/qualcomm-robotics-rb5-guide" },
          ", and ",
          { text: "Hailo edge acceleration", href: "/insights/hailo-edge-ai-acceleration-physical-ai-guide" },
          " show different approaches to this layer.",
        ],
        [
          "Actuators turn electrical or hydraulic power into motion. Motors, drives, gear systems, bearings, brakes, joints, and transmissions determine force, speed, precision, efficiency, and service life. The ",
          { text: "robot actuator guide", href: "/insights/what-are-robot-actuators-motors-gears-costs-companies" },
          " explains why an intelligent policy cannot compensate for inadequate torque, excessive backlash, or poor thermal design.",
        ],
        "The end effector performs the actual work. A gripper, welding torch, spray nozzle, surgical instrument, wheel, propeller, or cutting head converts movement into value. Tooling often decides the application before the model does. A clever grasp policy is useless when the fingers cannot retain an oily part or the selected material cannot survive the environment.",
        "Power, networking, enclosures, connectors, cooling, and safety equipment complete the machine. These parts rarely dominate a demonstration video, but they dominate maintenance. Physical AI is a systems market because every layer must remain compatible through installation, software updates, cleaning, repair, and years of operation.",
      ],
    },
    {
      heading: "Where Physical AI Is Already Useful",
      paragraphs: [
        [
          "The market is not starting from zero. The International Federation of Robotics reported 542,000 industrial robot installations during 2024 and almost 200,000 professional service robot sales in its sample for the same year. Those figures describe robots, not a clean subset called physical AI. They establish the large installed base into which better perception and adaptive software can be introduced. The ",
          { text: "World Robotics 2025 report", href: ifrMarket },
          " also shows that logistics remains the largest professional service robot application in its supplier sample.",
        ],
      ],
      callouts: [
        {
          label: "Manufacturing",
          title: "Variation is the opportunity",
          body: "Traditional automation remains best for stable, high volume work. Physical AI earns its place when parts arrive in changing positions, product mix changes often, inspection depends on context, or programming effort prevents an otherwise valuable process from being automated.",
        },
        {
          label: "Warehouses and logistics",
          title: "Navigation has crossed into commercial operation",
          body: "Autonomous mobile robots already route around people and obstacles inside bounded facilities. The next frontier is combining navigation with more general picking, trailer handling, yard operation, and coordination across mixed fleets.",
        },
        {
          label: "Transportation",
          title: "The operating domain matters more than the label",
          body: "An autonomous vehicle can be highly capable inside mapped service areas and unsuitable elsewhere. Weather, road type, local rules, remote assistance, and fallback behavior define the real product. Universal driving remains a different claim from a bounded commercial service.",
        },
        {
          label: "Agriculture",
          title: "Sense and act can reduce inputs",
          body: "Machine vision can distinguish crops from weeds and trigger targeted spraying while the equipment moves. The value is not the classification alone. It is the timely connection between camera, model, nozzle, and a field operation that can be measured in treated area and input use.",
        },
        {
          label: "Construction, energy, and utilities",
          title: "Inspection can precede manipulation",
          body: "Mobile machines can map sites, read instruments, detect anomalies, and build current spatial records. The system may create value before it can repair anything, especially where frequent observation reduces human exposure or catches a problem earlier.",
        },
        {
          label: "Healthcare",
          title: "Intelligence enters through narrow, governed functions",
          body: "Surgical systems, rehabilitation devices, diagnostics, and hospital logistics can contain physical AI capabilities. Clinical evidence, human oversight, cybersecurity, and medical regulation make the path to autonomy more constrained than a warehouse demonstration.",
        },
        {
          label: "Humanoids",
          title: "A promising body with an early evidence base",
          body: "The human form can reach tools and spaces designed for people, but it adds balance, power, dexterity, fall, and maintenance problems. Buyers should evaluate one useful task and a complete service model before assigning value to general purpose claims.",
        },
      ],
    },
    {
      heading: "Evidence from Autonomous Driving",
      paragraphs: [
        [
          "Autonomous driving offers one of the clearest examples of physical AI as a complete system. Vehicles combine cameras, lidar or radar, localization, prediction, planning, control, braking, steering, fleet operations, maps, remote support, and safety assurance. The levels of driving automation published by ",
          { text: "NHTSA", href: nhtsaAutomation },
          " also demonstrate why authority matters. Driver assistance and a system responsible for the entire driving task are not the same product.",
        ],
        [
          "Waymo reports hundreds of millions of rider only miles and publishes comparisons between its crash rates and human benchmarks. Its ",
          { text: "safety impact dashboard", href: waymoSafety },
          " includes methodology, confidence intervals, operating locations, and several crash severity measures. The figures remain company reported and apply to the places and conditions represented in the data. Their value for this article is methodological: mature physical AI evidence connects performance to exposure, domain, and consequences rather than showing only a successful route.",
        ],
        "The same discipline belongs in factories and fields. A manipulation system should report accepted parts, task attempts, operating hours, interventions, recovery time, damage, and the conditions under which it was tested. A ninety percent success rate may be excellent research progress and terrible production economics if the remaining ten percent stops the line.",
      ],
    },
    {
      heading: "Evidence from Agriculture",
      paragraphs: [
        [
          "John Deere describes its Sense and Act architecture through cameras, edge computing, and machine learning. In See and Spray, machine vision distinguishes weeds from crops and the sprayer applies material selectively. The ",
          { text: "John Deere technology overview", href: johnDeere },
          " shows a compact physical AI loop: observe plants, classify them locally, command a nozzle at the correct position, and record what the machine encountered.",
        ],
        "Agriculture also exposes the conditions that generic AI discussions often ignore. Dust coats lenses. Sunlight changes. Plants overlap. Fields lack reliable connectivity. Equipment vibrates and must cover large areas during short seasonal windows. A useful system combines model accuracy with cleaning, calibration, ruggedization, local compute, service, and an operator workflow.",
        "This is why physical AI should be evaluated through the job rather than the novelty of the model. A better classifier creates value only when the complete machine applies the right treatment at the right place, covers enough acreage, and does so with acceptable misses, maintenance, and cost.",
      ],
    },
    {
      heading: "How Physical AI Is Sold",
      paragraphs: [
        "There is no meaningful public price for physical AI as a category. A compact inspection camera, an adaptive robot cell, a fleet of mobile machines, and an autonomous vehicle service are different products. Quoting one market price would hide more than it explains.",
        "Capital purchase remains common for factory equipment. The buyer owns the robot, sensors, compute, tooling, controls, and installation, then pays for service and software over time. This model fits equipment with a long operating life and a customer that can support it.",
        "Robot as a Service shifts some initial cost into a recurring payment. The supplier may include the machine, software, maintenance, and replacements. The customer still needs to understand minimum term, utilization assumptions, site changes, connectivity, service response, and what happens when the system cannot perform the agreed work.",
        "Software suppliers may license an autonomy layer per machine, site, feature, or period. That price is only one part of the installed system. Cameras, controller options, local compute, tooling, engineering, validation, travel, training, spares, support, and continuing supervision can exceed the apparent software cost.",
        "Outcome based contracts charge for completed moves, inspected assets, treated acres, or another unit of work. They align payment with output but require an agreed definition of completion and clear responsibility for site conditions. A supplier cannot guarantee throughput if the customer does not provide parts, access, or a safe environment.",
        "The buyer should compare total cost per accepted unit of work. That denominator forces the proposal to include utilization, quality, recovery, and residual human effort. A low monthly fee can be expensive when the system sits idle. A large capital project can be attractive when it reliably releases a valuable bottleneck.",
      ],
    },
    {
      heading: "A Practical Buyer Example",
      paragraphs: [
        "Consider Meridian Components, a fictional manufacturer receiving mixed metal castings in bins. Operators identify each part, orient it, load a machining fixture, and remove occasional debris. Management is considering a camera guided robot with a learned grasp policy. This is a buyer exercise, not a vendor deployment or quotation.",
        "The first comparison should not be AI versus people. The team should evaluate the simplest credible alternatives: better packaging from the supplier, a mechanical feeder, dedicated trays, a conventional vision system, a fixed robot program, or a redesigned fixture. Physical AI is justified only if handling the remaining variation creates more value than removing it another way.",
        "The baseline records accepted loads per hour, time spent on orientation, damaged parts, machine waiting time, changeovers, labor involvement, and the cost of downstream errors. The pilot then uses representative production bins, including shapes and surface conditions that were not used to tune the system. Every assist, reset, dropped part, bad load, and pause belongs in the record.",
        "The technical acceptance test measures recognition, grasp success, placement accuracy, cycle time, recovery, and behavior when the camera is obscured or the bin contains an unknown object. The operational test measures full shift output, operator attention, cleaning, maintenance, restart time, and whether the next shift can use the system without the development team standing nearby.",
        "Annual value comes from additional accepted production, avoided rework, reduced waiting, reclaimed labor capacity, and lower exposure to undesirable work. Annual cost includes software, service, spares, energy, operator attention, maintenance, lost production during faults, and the cost of future changes. Labor hours should count as savings only when they reduce cost or enable valuable work elsewhere.",
        "The second installation is the commercial test. If the supplier must repeat months of custom engineering for another machine or part family, the product may still be a valuable integration project, but it is not yet a scalable platform. Reuse should appear in the data model, tooling, calibration, deployment process, and support practice.",
      ],
    },
    {
      heading: "How Physical AI Fails",
      paragraphs: [
        "Physical AI usually fails as a system before it fails as an idea. A strong model can be attached to the wrong process. A capable robot can be starved of work. A clear demonstration can hide a recovery burden that destroys utilization. The failure review should cover the complete operating loop.",
      ],
      callouts: [
        {
          label: "Objective failure",
          title: "The system optimizes the proxy instead of the job",
          body: "A model may maximize picks, route speed, or detection confidence while the business needs accepted output, low damage, safe interaction, or reliable completion. Metrics must describe the result the buyer values.",
        },
        {
          label: "Perception failure",
          title: "Reality moves outside the training distribution",
          body: "Lighting, dirt, weather, reflections, new packaging, sensor movement, occlusion, and wear can change what the model sees. The system needs drift monitoring, known limits, and a safe response to low confidence.",
        },
        {
          label: "Reasoning failure",
          title: "A plausible plan is physically wrong",
          body: "Language fluency does not establish geometry, force, reach, stability, or process knowledge. Plans should be grounded in current state and checked against machine constraints before execution.",
        },
        {
          label: "Control failure",
          title: "The action arrives late or cannot be executed",
          body: "Inference delay, network loss, stale observations, controller limits, and poor calibration can break the path from model output to motion. End to end response matters more than model inference alone.",
        },
        {
          label: "Mechanical failure",
          title: "The body cannot deliver the promised skill",
          body: "Payload, traction, battery life, thermal limits, cable routing, backlash, contamination, and tool wear create hard constraints. Software can adapt within a capable mechanism, but it cannot negotiate away physics.",
        },
        {
          label: "Recovery failure",
          title: "Every exception becomes human work",
          body: "A system can look autonomous during successful cycles while requiring frequent resets, remote calls, and manual cleanup. Residual supervision and time to recovery belong in the productivity calculation.",
        },
        {
          label: "Governance failure",
          title: "A change cannot be explained or reversed",
          body: "Model, data, firmware, sensor, and tool changes can alter behavior. Production systems need versioned configurations, regression tests, approvals, logging, and a rollback path.",
        },
        {
          label: "Economic failure",
          title: "The automation works but does not pay",
          body: "Low utilization, weak demand, expensive integration, consumables, maintenance, and retained labor can overwhelm the technical benefit. A successful task is not automatically a successful investment.",
        },
      ],
    },
    {
      heading: "Safety Is a Separate Engineering Obligation",
      paragraphs: [
        [
          "Physical AI expands the set of conditions a machine can interpret, but it should not turn model confidence into a safety rating. ISO 10218 Part 1 covers safety requirements for industrial robots, while Part 2 addresses their integration into applications and cells. The ",
          { text: "2025 robot safety standard", href: isoRobot },
          " makes the separation between a robot and its complete application especially important.",
        ],
        [
          "Google DeepMind describes semantic, physical, and operational safeguards for its robotics work. Its ",
          { text: "layered safety framework", href: geminiSafety },
          " is useful because it does not assume that one model check can block every hazard. Semantic judgment, lower level physical limits, and operating procedures address different failure paths.",
        ],
        [
          "The NIST ",
          { text: "AI Risk Management Framework", href: nistRisk },
          " adds a broader governance structure for mapping, measuring, managing, and governing risk. It is voluntary and technology neutral. A deployment still needs the standards, regulations, risk assessment, and professional judgment that apply to its machine, workplace, vehicle, medical use, or public setting.",
        ],
        "A practical design keeps protective functions independent of the model wherever the hazard requires it. Emergency stops, safe torque off, protective separation, speed limits, force limits, access control, and mechanical guarding should continue to work when the AI is confused, unavailable, or compromised. The permitted operating envelope should be narrower than the machine's theoretical capability.",
        "Cybersecurity becomes physical safety when a network message can move equipment. Identity, signed software, least privilege, network segmentation, update controls, logging, and incident recovery belong in the machine design. A remote support path that bypasses normal authority can become the most consequential interface in the system.",
      ],
    },
    {
      heading: "How to Evaluate a Physical AI Product",
      paragraphs: [
        [
          "Start with the operating design domain. NIST develops robot performance methods around defined tasks, environments, and measurable capabilities. Its ",
          { text: "robotic systems assessment work", href: nistTesting },
          " reinforces a principle that buyers can apply immediately: test the machine against the work it must perform, not against a generic claim of intelligence.",
        ],
        "Define the task, accepted result, materials, people, environment, shift pattern, interfaces, and conditions that are outside scope. Record a baseline before the pilot. If the current process is unstable or unmeasured, the team will not know whether the new system improved it.",
        "Use representative cases that were withheld from tuning. Include ordinary variation and carefully selected faults. Move an object. Change the lighting. Interrupt the network. Present an unknown part. Block a route. Restart after a power loss. The goal is not to surprise the supplier. It is to learn how the system detects and communicates its boundary.",
        "Measure the whole workflow: accepted output, task attempts, intervention time, recovery time, damage, false actions, uptime, changeover effort, energy, consumables, operator attention, and maintenance. Average performance can hide rare events that dominate cost or safety.",
        "Review evidence by source. A company demonstration establishes that the company produced a demonstration. A customer reference may establish use at one site. A controlled test can establish performance under defined conditions. A production record across time and sites provides stronger evidence of repeatability. None should be silently upgraded into a broader claim.",
      ],
      callouts: [
        {
          label: "Procurement question",
          title: "What exactly is autonomous?",
          body: "List every step still performed by an operator, remote supervisor, integrator, or site system. Include setup, loading, exception recovery, inspection, charging, and maintenance.",
        },
        {
          label: "Procurement question",
          title: "What is the operating boundary?",
          body: "Request supported objects, environments, speeds, loads, lighting, weather, floor conditions, network assumptions, and explicit exclusions for the offered configuration.",
        },
        {
          label: "Procurement question",
          title: "What happens when confidence is low?",
          body: "The answer should identify detection, safe behavior, operator communication, logging, and recovery. A generic statement that the AI will ask for help is not an acceptance procedure.",
        },
        {
          label: "Procurement question",
          title: "Who owns the complete fault?",
          body: "Clarify responsibility across the model, robot, tool, sensor, controller, network, and integration. Buyers need one escalation path even when several suppliers participate.",
        },
        {
          label: "Procurement question",
          title: "What changes after an update?",
          body: "Require release notes, regression evidence, compatibility, scheduled downtime, approval roles, and rollback. A model update is an operational change when it can alter physical behavior.",
        },
      ],
    },
    {
      heading: "The Real Benefits",
      paragraphs: [
        "The first benefit is automation under bounded variation. A system that can tolerate different part positions, routes, objects, or environments may reduce fixtures, programming, and changeover work. The important word is bounded. Useful flexibility does not require universal intelligence. It requires reliable performance across the variation that matters to the job.",
        "The second benefit is reach. Physical AI can bring machines into spaces where fixed automation was difficult to justify, including changing construction sites, large industrial assets, farms, roads, and facilities designed around people. Mobility and perception can move automation to the work instead of forcing every task into a dedicated cell.",
        "The third benefit is safer allocation of human attention. Robots can take repeated measurements, enter undesirable areas, move heavy loads, or perform tiring motions while people handle judgment, maintenance, quality, and exceptions. Safety improves only when the machine reduces exposure without introducing a larger recovery or interaction risk.",
        "The fourth benefit is a richer operating record. A machine that senses while it works can create data about objects, routes, quality, and failures. That record can improve maintenance and process design even before the policy becomes more autonomous. The value depends on data quality, context, and whether the organization can turn observations into decisions.",
        "The fifth benefit is faster reuse. Foundation models, shared datasets, and common software may allow one platform to learn a new task with less data and engineering than a separate system built from the beginning. This is the central promise of the current physical AI cycle. Commercial proof will appear as lower effort and better results on the second, tenth, and hundredth deployment.",
      ],
    },
    {
      heading: "The Alternatives Often Win",
      paragraphs: [
        "Physical AI should compete against process design, not only against other AI products. Standard containers, better fixtures, improved lighting, a conveyor, a mechanical guide, a barcode, or a change in supplier packaging can remove variation more cheaply than teaching a machine to interpret it.",
        "Conventional automation remains the preferred answer when the task is stable and volume is high. Fixed logic is easier to validate, troubleshoot, and maintain. A learned system should enter only where its flexibility offsets the additional data, testing, governance, and support burden.",
        "Decision support can create most of the value when human action is inexpensive or legally required. A camera may rank inspections for a technician without controlling the equipment. That design sacrifices autonomy but can reduce risk and accelerate adoption.",
        "Teleoperation is another legitimate product, not an admission of failure. Remote people can handle rare cases while autonomy covers routine motion. The business question is whether one operator can support enough machines and whether assistance arrives before the process loses value.",
        "The strongest systems are often hybrid. They use rules for known safety and process constraints, learned perception for variation, optimization for planning, conventional control for motion, and people for ambiguous exceptions. Physical AI does not have to replace every existing layer to change the economics of the task.",
      ],
    },
    {
      heading: "What the Market Commonly Gets Wrong",
      paragraphs: [
        "Human shape is not a measure of intelligence. A machine with wheels and one well chosen tool can outperform a humanoid on a valuable task. The embodiment should follow the work, access, payload, terrain, and installed environment.",
        "Generality is not the same as reliability. A model that attempts many tasks may be commercially weaker than a narrow system that completes one task with high utilization and simple recovery. Buyers pay for dependable work, not the width of a demonstration reel.",
        "A model that can reason is not automatically allowed to control. Authority must be granted through interfaces, limits, and validation. Natural language can make a system easier to instruct, but it should not make production change control casual.",
        "Autonomy is not binary. A system may navigate autonomously, request help for manipulation, require manual loading, and depend on technicians for recovery. The useful measure is residual human work per accepted result.",
        "Simulation is not reality, but it is not fake either. It is an engineering environment for generating data, testing conditions, and comparing designs. Its value depends on what it represents accurately, how uncertainty is introduced, and whether results are checked on the real machine.",
        "The latest model is not always the best production model. A smaller local policy may provide predictable response, lower power, simpler validation, and continued operation without a network. Model selection belongs inside the complete system requirement.",
      ],
    },
    {
      heading: "Where the Technology Is Going",
      paragraphs: [
        [
          "Vision language action models are joining visual understanding, instructions, and motor output. Google DeepMind describes Gemini Robotics as adding physical actions to a multimodal model, while its embodied reasoning model supports spatial understanding and planning. The ",
          { text: "Gemini Robotics announcement", href: geminiRobotics },
          " is evidence of the direction of research and product development, not proof that one model can safely operate every robot in every environment.",
        ],
        "Cross embodiment learning aims to transfer useful representations across arms, mobile bases, humanoids, and other machines. A general model may understand a task while an embodiment adapter maps that understanding to a particular body. The hard problem is preserving what transfers while respecting the geometry, action space, sensors, and limits that do not.",
        "World models aim to predict how scenes and objects could change. They can support synthetic data, planning, and evaluation before a machine acts. The commercial value will depend on physical consistency and decision quality rather than visual realism alone.",
        "On device models are improving, which can move more reasoning and policy execution closer to the machine. This will help response time, privacy, and resilience in some applications. Fleet and cloud systems will remain important for training, monitoring, and shared learning, so the architecture is likely to become more distributed rather than purely local.",
        "Standards and testing will become more visible as capability moves from laboratories into shared workplaces and public environments. Physical AI needs vocabulary for operating domains, interventions, recovery, autonomy, and performance that buyers can compare. The winning metric is not how intelligent the demo looks. It is how much useful work the system delivers within a defined risk boundary.",
      ],
    },
    {
      heading: "Black Scarab Verdict",
      paragraphs: [
        "Physical AI is best understood as the point where artificial intelligence acquires physical consequence. It observes a changing world, chooses within constraints, acts through a machine or governed operation, and learns from what actually happened. Robots are its most visible embodiment, but the category also includes vehicles, drones, intelligent equipment, and responsive infrastructure.",
        "The current wave is important because foundation models, larger robot datasets, simulation, cheaper sensors, and stronger edge compute are reducing the cost of teaching machines new behavior. The opportunity is not unlimited autonomy. It is dependable adaptation in tasks where conventional rules and fixtures become too expensive.",
        "The limiting factor will not be intelligence alone. Safety, mechanical capability, integration, data quality, recovery, service, and economics will decide which systems remain demonstrations and which become infrastructure. A physical AI company earns trust when it defines the operating boundary as clearly as it describes the capability.",
        "For buyers, begin with the job. Measure the current process, remove avoidable variation, test the complete system on representative cases, count every human intervention, and insist on a safe failure path. If the technology produces more accepted work with less total burden, the label matters less. The machine is useful.",
      ],
    },
    {
      heading: "Research Method",
      paragraphs: [
        "Prepared September 24, 2026 from robotics standards, government risk and testing frameworks, current vendor documentation, academic research, open robot data projects, and public deployment evidence. Definitions from NVIDIA, Google DeepMind, and other suppliers are presented as company framing. The operational definition, boundary test, buying framework, and commercial analysis are Black Scarab analysis.",
        "This report does not claim an independent robot test, access to private customer data, or a universal industry definition. Market statistics describe broader robot categories and should not be read as a precise physical AI market size. The cover is an original AI generated editorial illustration, not a photograph of a product or deployment.",
      ],
    },
  ],
  sources: [
    "Robotics standards and definitions",
    "Government risk and performance frameworks",
    "Robot learning research and open datasets",
    "Primary product and deployment documentation",
    "Black Scarab systems and buyer analysis",
  ],
  sourceLinks: [
    { label: "NVIDIA physical AI definition", url: nvidiaDefinition },
    { label: "International Federation of Robotics definition", url: ifrDefinition },
    { label: "International Federation of Robotics 2025 market report", url: ifrMarket },
    { label: "Google DeepMind Gemini Robotics", url: geminiRobotics },
    { label: "Google DeepMind robotics safety framework", url: geminiSafety },
    { label: "Google DeepMind RT 2 research", url: rt2 },
    { label: "Open X Embodiment project and dataset", url: openX },
    { label: "Hugging Face LeRobot documentation", url: leRobot },
    { label: "Embodied AI survey", url: embodiedSurvey },
    { label: "ISO 10218 Part 1 robot safety standard", url: isoRobot },
    { label: "NIST AI Risk Management Framework", url: nistRisk },
    { label: "NIST robotic systems performance assessment", url: nistTesting },
    { label: "NHTSA levels of driving automation", url: nhtsaAutomation },
    { label: "Waymo safety impact dashboard", url: waymoSafety },
    { label: "John Deere Sense and Act technology", url: johnDeere },
  ],
});
