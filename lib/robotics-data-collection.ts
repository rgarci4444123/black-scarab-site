import type { CaseStudyArticle } from "@/lib/case-studies";

const droid = "https://droid-dataset.github.io/";
const agibot = "https://agibot-world.com/blog/agibot_go1.pdf";
const mobileAloha = "https://mobile-aloha.github.io/";
const umi = "https://umi-gripper.github.io/";
const openX = "https://deepmind.google/blog/scaling-up-learning-across-many-different-robot-types";
const isaacSim = "https://developer.nvidia.com/isaac/sim/";
const cosmos3 = "https://research.nvidia.com/labs/cosmos-lab/cosmos3/";
const cosmosPolicy = "https://developer.nvidia.com/blog/beyond-vlas-how-world-action-models-reshape-robot-manipulation/";
const figureHelix = "https://www.figure.ai/news/helix";
const figureHelix02 = "https://www.figure.ai/news/helix-02";
const teslaOperator = "https://www.tesla.com/careers/search/job/data-collection-operator-optimus-253975";
const ego4d = "https://ego4d-data.org/";
const aria = "https://facebookresearch.github.io/projectaria_tools/gen2/";
const rt2 = "https://deepmind.google/blog/rt-2-new-model-translates-vision-and-language-into-action/";
const spectrum = "https://spectrum.ieee.org/boston-dynamics-atlas-scott-kuindersma";
const ap = "https://apnews.com/article/9e15c1fc1b9d5d8fb8195144059f0b5a";
const coreMatter = "https://read.corematter.com/p/physical-ai-value-stack-framework";

export const roboticsDataCollectionDeepDive = (): CaseStudyArticle => ({
  slug: "robotics-data-collection-robot-training-data-guide",
  taxonomy: {
    primaryIndustry: "cross-industry",
    relevantIndustries: [],
    technologies: [
      "robot-training-data",
      "teleoperation",
      "simulation"
    ],
    applications: [
      "robot-training"
    ]
  },
  title: "Robotics Data Collection: 7 Ways Robots Get Training Data",
  seoTitle: "Robotics Data Collection: 7 Robot Training Data Sources",
  summary:
    "A practical guide to robot training data from teleoperation, portable capture, deployed fleets, simulation, world models, first person video, and internet video, including what happens after collection.",
  publishedLabel: "Deep Dive · Published September 27, 2026",
  publishedDate: "2026-09-27",
  publishedAt: "2026-09-27T19:14:47-04:00",
  typeLabel: "Deep Dive",
  formatLabel: "Data sources, economics, and training pipeline analysis",
  industry: "Robotics AI",
  image: "/article-images/robotics-data-collection-cover.png",
  imageAlt:
    "Editorial illustration of seven colorful physical data streams converging on a compact articulated robot mechanism",
  imageCaption:
    "Editorial illustration of the mixed data streams used to train robots. Created for Black Scarab.",
  seoDescription:
    "Learn how robotics data collection works across teleoperation, simulation, robot fleets, world models, first person video, and internet video.",
  tags: [
    "robotics data collection",
    "robot training data",
    "robot learning",
    "teleoperation",
    "simulation",
    "world models",
    "egocentric video",
    "vision language action models",
  ],
  author: { name: "Rodolfo Garcia Calderoni, CFA", href: "/about" },
  sections: [
    {
      paragraphs: [
        "The scarce input in frontier robotics is not always another model or another cluster of graphics processors. It is experience that connects what a robot sensed, what action it took, and what happened next.",
        "Language models could learn from text that people had already written. Robot policies need synchronized camera views, joint positions, gripper states, force readings, task instructions, outcomes, and recovery behavior. Most of that record does not exist until a person operates hardware, a robot performs work, or a synthetic system creates an approximation.",
        "That makes robotics data collection a production problem. Every useful episode requires an environment, an embodiment, a clock, a task, and a quality decision. The industry is responding with seven main sources that trade action fidelity against cost, scale, and transfer risk.",
        "This deep dive explains those seven sources, the role of cross embodiment pooling, what a robot episode actually contains, and why collection is only the first stage of a much longer data engine.",
      ],
    },
    {
      heading: "Executive View",
      paragraphs: [
        "The strongest robot data is usually generated on the target machine in the target environment. It captures the correct cameras, kinematics, latency, contacts, and control interface. It is also the hardest data to scale because each episode consumes hardware time, operator time, resets, maintenance, and review.",
        "The most abundant data sits at the opposite end. Internet video and first person human video contain objects, tasks, and physical common sense at enormous variety, but they do not directly say which motor command a robot should execute. Simulation and world models occupy the middle. They can generate controlled variation and action aligned examples, but their value depends on whether their physics and visual dynamics survive contact with reality.",
        "No single source wins. A practical stack uses broad video for representation and task knowledge, synthetic environments for coverage and stress testing, robot native demonstrations for control, and deployment data for the failures that matter in the field.",
      ],
      callouts: [
        {
          label: "Black Scarab thesis",
          title: "The real moat is the learning loop",
          body: "Owning raw episodes is useful. Owning a repeatable loop that finds failure, collects the right correction, validates improvement, and returns a safer policy to the fleet is much harder to copy.",
        },
      ],
    },
    {
      heading: "What Counts as Robot Training Data",
      paragraphs: [
        "A useful manipulation episode is not just a video. It is a time aligned bundle. Camera frames show the scene. Proprioception records joint position, velocity, and sometimes torque. The action stream records desired poses, joint commands, gripper states, or other controls. Force and tactile sensors may describe contact. Metadata identifies the robot, tool, task, environment, calibration, and operator. An outcome label says whether the attempt succeeded, failed, or required intervention.",
        "The alignment is part of the label. If an image arrives late relative to the action, the dataset can teach the model that a command caused the wrong state transition. Every file can look healthy while the supervision is false.",
        "This is why episode count alone is a weak metric. A million narrow repetitions may teach less than a smaller collection with varied objects, lighting, layouts, operators, failure modes, and recoveries. The relevant unit is useful coverage of the situations the deployed robot will encounter.",
      ],
    },
    {
      heading: "A Map of the Data Tradeoff",
      paragraphs: [
        "The map below separates scale from the directness of the action signal. It is an analytical framework, not a measured league table. A source can move substantially depending on the task. Simulation transfers more easily for locomotion on stable terrain than for deformable objects, tight insertion, or uncertain friction.",
        "Cross embodiment pooling is shown differently because it is not an eighth source. It is a transformation layer that combines records from different robots after collection. The concept is adapted from a Core Matter chart shared for this article, with Black Scarab changes to the categories, axes, and placements.",
      ],
      visual: {
        src: "/article-images/robot-training-data-map.svg",
        mobileSrc: "/article-images/robot-training-data-map-mobile.svg",
        alt: "Map of seven robot training data sources by scale and direct action signal",
        caption:
          "Illustrative Black Scarab analysis. Concept adapted from Core Matter. Cross embodiment pooling is a transformation layer rather than a collection source.",
      },
    },
    {
      heading: "1. Real Teleoperation",
      paragraphs: [
        "Real teleoperation records a human controlling the robot that will later act autonomously. The data can align onboard images, robot state, and executable commands in the same embodiment. That makes it the cleanest route to imitation learning for a defined platform.",
        [
          "The scale is still meaningful. The ",
          { text: "DROID dataset", href: droid },
          " contains 76,000 demonstration trajectories and 350 hours of interaction collected across 564 scenes and 84 tasks by 50 collectors. ",
          { text: "AgiBot World", href: agibot },
          " reports 1,001,552 trajectories and 2,976.4 hours across 217 tasks, 87 skills, and 106 scenes, collected with more than 100 homogeneous robots.",
        ],
        "Those numbers also reveal the economics. Even a million episodes can represent only a few thousand hours of physical interaction. Operators must prepare objects, reset scenes, recover the machine, replace worn parts, and inspect quality. Scaling remains close to linear with productive operator and robot time unless autonomy begins to assist collection.",
        "Teleoperation quality is not automatic. The interface can limit dexterity, create unnatural motion, hide latency, or encourage shortcuts. Successful demonstrations alone can also produce brittle policies because the model never sees the warning signs that precede failure. Recovery episodes and carefully labeled imperfect attempts can be more valuable than another clean repetition.",
      ],
    },
    {
      heading: "2. Portable and Lower Cost Real Capture",
      paragraphs: [
        "Portable capture moves the human demonstration away from an expensive robot. A person carries a sensorized tool, operates a compact leader device, or performs motion that can later be translated into a robot action space. The scene and contact remain real, while the scarce robot is free for training or evaluation.",
        [
          { text: "Universal Manipulation Interface", href: umi },
          " uses a handheld parallel jaw gripper with a wrist camera. Its relative trajectory representation is designed to transfer demonstrations across compatible robot arms. On the published cup arrangement comparison, the team reported 111 demonstrations per hour with UMI versus 35 per hour through a SpaceMouse interface. That result belongs to one task and setup, but it shows the throughput advantage of collecting without moving a full robot for every example.",
        ],
        [
          { text: "Mobile ALOHA", href: mobileAloha },
          " takes a different path. It is a lower cost whole body teleoperation system with a mobile base and two arms. The researchers reported that co training with static ALOHA data improved success rates by as much as 90 percent on their tested mobile manipulation tasks with 50 demonstrations per task. The result illustrates how prior data can multiply the value of a small task specific set.",
        ],
        "The hidden cost is embodiment mapping. Human wrists, hands, and tools do not share the same joints, reach, speed, compliance, or gripper geometry as the target robot. A portable system must infer a feasible robot trajectory and reject demonstrations the machine cannot execute. Real physics is preserved, but robot native control is not.",
      ],
    },
    {
      heading: "3. Fleet and Deployment Data",
      paragraphs: [
        "Deployment data is generated after robots begin doing useful work. It includes autonomous successes, failures, human interventions, unusual objects, changing layouts, wear, occlusion, and every edge case that a laboratory did not anticipate. The action and sensor streams are robot native, and the distribution is commercially relevant.",
        [
          "Figure disclosed that the first Helix model used about ",
          { text: "500 hours of teleoperated behavior", href: figureHelix },
          ". Its later ",
          { text: "Helix 02 system", href: figureHelix02 },
          " combined more than 1,000 hours of human motion with simulation across more than 200,000 parallel environments for its whole body controller. These disclosures show that even a company building a fleet blends collection methods rather than waiting for deployment alone.",
        ],
        [
          "Tesla is hiring people to collect Optimus manipulation and walking data in facilities and public environments, according to an ",
          { text: "official data collection operator listing", href: teslaOperator },
          ". Tesla has deep automotive fleet infrastructure, but vehicle data does not automatically become humanoid manipulation supervision. The transferable advantage is the organizational machinery for logging, triage, labeling, simulation, training, and release management. The action spaces remain different.",
        ],
        "Fleet data has a cold start problem. A company needs robots that are safe, useful, and numerous before the stream becomes large. It also has a selection problem. Routine success can dominate storage while rare interventions matter more. A strong fleet pipeline samples by uncertainty, failure severity, novelty, and expected learning value instead of uploading everything equally.",
      ],
    },
    {
      heading: "4. Physics Simulation",
      paragraphs: [
        "Simulation can generate exact virtual actions, state, rewards, contacts, and labels at a rate that physical hardware cannot match. It can vary lighting, object position, mass, friction, sensor noise, and scene layout. It can also expose a policy to unsafe or rare events without risking a worker or a machine.",
        [
          { text: "NVIDIA Isaac Sim", href: isaacSim },
          " provides physically based virtual environments for robotics simulation, testing, and synthetic data generation. Isaac Lab adds a robot learning layer for reinforcement learning, imitation learning, and parallel training. Other engines, including MuJoCo and Genesis, offer different performance, modeling, and workflow choices.",
        ],
        "The limitation is not that simulation is fake in a general sense. It is that every simulated result depends on which parts of reality were modeled well enough. Contact rich work is especially sensitive to friction, compliance, backlash, deformable material behavior, wear, and sensor latency. Small errors can compound during insertion, twisting, wiping, folding, or handling objects that slip.",
        "Simulation is strongest when teams define its job precisely. It can pretrain locomotion, explore a broad state space, produce perception labels, test safety boundaries, and rehearse integration. Real robot data then calibrates the parameters, fine tunes the policy, and measures the remaining gap.",
      ],
    },
    {
      heading: "5. World Model Synthetic Data",
      paragraphs: [
        "A world model learns how an observed scene may change. A world action model adds the ability to predict or generate actions alongside future visual states. This creates a new synthetic path: start with real observations, propose an action trajectory, imagine the outcome, and use the paired result for training or planning.",
        [
          { text: "NVIDIA Cosmos 3", href: cosmos3 },
          " unifies language, image, video, audio, and action in one architecture. Its technical report defines compact action representations for robot effectors, grasp state, vehicle motion, and egocentric motion. The ",
          { text: "Cosmos 3 policy variants for DROID", href: cosmosPolicy },
          " are post trained to generate robot action trajectories and future camera views together.",
        ],
        "That is more specific than generating attractive robot video. A useful synthetic episode needs a trajectory in a representation that can be mapped to a controller, a predicted future consistent with that action, and evidence that the pair improves performance on a real machine.",
        "The promise is substantial. A model could create variations around a small seed set, fill gaps between demonstrations, or let a policy compare possible futures before acting. The evidence threshold should remain high. Visual plausibility does not prove correct force, contact, causality, or safety. World model data should be filtered against real trajectories and evaluated on held out hardware tasks before it replaces manual collection.",
      ],
    },
    {
      heading: "6. First Person Human Video",
      paragraphs: [
        "First person video follows a human view of the task. It captures hand object interaction, task order, object state, and environmental variety from a viewpoint closer to many robot cameras than ordinary third person footage.",
        [
          { text: "Ego4D", href: ego4d },
          " offers more than 3,600 hours of first person activity video across homes, workplaces, outdoor settings, and leisure. ",
          { text: "Project Aria", href: aria },
          " adds wearable cameras, inertial sensing, eye gaze, audio, and machine perception tools for egocentric research.",
        ],
        "This data can teach representation, task structure, object affordances, and what tends to happen next. It can also support hand pose or pseudo action estimation. It does not contain the target robot command, joint limits, motor torque, or gripper state unless those signals are reconstructed or paired with another collection system.",
        "The embodiment gap is therefore central. A human hand can conform around an object, feel slip, and use joints a robot does not have. The model must translate human intent into an action feasible for a different body. First person video is best treated as broad prior knowledge that reduces the amount of robot native data required, not as a complete substitute for it.",
      ],
    },
    {
      heading: "7. Internet Video",
      paragraphs: [
        "Internet video offers the widest coverage of objects, tools, tasks, cultures, environments, and failure situations. Its marginal capture cost to a research team can be low because the footage already exists. Its total training cost is not zero. Teams still face discovery, licensing, privacy, filtering, deduplication, caption quality, and substantial compute for processing.",
        [
          { text: "Google DeepMind RT 2", href: rt2 },
          " demonstrated why web scale visual and language knowledge can help a robot recognize concepts and reason about instructions that were not present in the robot data. That does not mean web video supplies direct motor supervision. It enriches perception and semantics, while robot episodes still anchor control.",
        ],
        "Most web footage uses a third person camera, hides forces and depth, contains edits, and shows only selected outcomes. It rarely includes calibration, timing, robot state, or an explicit action vector. An inverse dynamics model may infer latent actions from visual change, but those are estimates rather than sensor logged commands.",
        "The best use is broad pretraining, retrieval of task examples, visual representation learning, and generation of candidate task structure. The final miles of execution still require data aligned to the target machine and its environment.",
      ],
    },
    {
      heading: "Cross Embodiment Pooling Is a Multiplier",
      paragraphs: [
        "Robot datasets are fragmented across arms, grippers, hands, cameras, control frequencies, coordinate systems, and action definitions. Cross embodiment pooling standardizes these records so one model can learn shared structure before adapting to a target robot.",
        [
          { text: "Open X Embodiment", href: openX },
          " pooled data from 22 robot embodiments across 33 academic laboratories. Google DeepMind reported more than one million episodes, more than 500 skills, and 150,000 tasks. The project established that diverse robot records can be brought into a common training effort even when the bodies differ.",
        ],
        "Pooling can increase diversity and reuse, but it can also mix incompatible action semantics or inconsistent quality. A normalized end effector pose is not the same as identical dynamics. The target machine may have a different camera placement, reach, payload, latency, compliance, or hand. Successful pooling needs explicit embodiment metadata, careful action conversion, balanced sampling, and target robot fine tuning.",
      ],
    },
    {
      heading: "Collection Is Only Step One",
      paragraphs: [
        "A camera file and a joint log are not yet a training set. The production pipeline begins by verifying clocks, dropped frames, calibration, sensor health, and episode boundaries. It then reconstructs task context, normalizes action representations, labels outcomes, detects interventions, and decides what to retain.",
        "Curation follows. Teams remove corrupt or unsafe examples, preserve informative failures, balance objects and environments, and prevent near duplicates from overwhelming the mix. They separate training, validation, and hardware evaluation so a model is not tested on the same scene patterns it memorized.",
        "The model then creates the next collection plan. Evaluation reveals where success drops, which failures are dangerous, and which conditions are underrepresented. Operators or fleets collect targeted examples. Simulation expands nearby variations. Real hardware verifies whether the improvement survived reality. The cycle repeats.",
      ],
      callouts: [
        {
          label: "The conversion pipeline",
          title: "Record, synchronize, qualify, represent, curate, train, evaluate, recollect",
          body: "Each stage can destroy value. A large collection with weak synchronization, vague outcomes, or contaminated evaluation may be less useful than a smaller set with trusted provenance and targeted coverage.",
        },
      ],
    },
    {
      heading: "What Makes a Robotics Data Strategy Credible",
      paragraphs: [
        "A credible program begins with task relevance. Which objects, contacts, lighting conditions, layouts, operators, and failures are represented? What portion was collected on the target body? Which signals are measured and which are inferred? A robotics team should be able to trace a deployed behavior back to the data and evaluation that support it.",
        "Throughput should be measured as accepted episodes per operator hour, not raw recordings alone. Reset time, failed collection time, hardware downtime, review burden, and the percentage of episodes that survive quality checks all belong in the calculation.",
        "The strongest evidence is a closed learning loop. Evaluation identifies a weakness. New collection targets it. A retrained policy passes regression tests and repeated hardware trials. Deployment then shows a measurable decline in intervention rate or cost per successful task.",
      ],
      callouts: [
        {
          label: "Proof standard",
          title: "Show the signal, the checks, the hardware test, and the measured change",
          body: "A credible claim connects a synchronized episode to documented quality controls, a held out physical task, and a measurable improvement after retraining. Everything else is supporting detail.",
        },
      ],
    },
    {
      heading: "Limitations and Open Questions",
      paragraphs: [
        "Robotics still lacks a universal token. One camera frame can be shared broadly, but one action vector may be meaningful only for a particular arm, hand, controller, and time step. Research on unified representations is improving reuse, yet embodiment remains a physical constraint rather than a formatting problem.",
        "Data abundance can also hide missing experience. Successful demonstrations may underrepresent uncertainty and recovery. Fleet logs may reflect only customers and environments already willing to deploy. Internet video may reproduce social, geographic, and task bias. Wearable collection introduces privacy and consent obligations. Synthetic generation can amplify the assumptions of its simulator or model.",
        [
          "Independent observers make the same caution in different language. ",
          { text: "IEEE Spectrum", href: spectrum },
          " describes teleoperation as the highest quality and hardest to obtain layer in a robotics data pyramid, while emphasizing that evidence for broad generalization is still developing. ",
          { text: "Associated Press reporting", href: ap },
          " notes that physical robot training material is scarce because real actions are slower, more expensive, and harder to record than digital data.",
        ],
      ],
    },
    {
      heading: "Black Scarab Verdict",
      paragraphs: [
        "Robotics data collection is a central bottleneck, but the winning strategy will not be the company with the largest undifferentiated archive. It will be the company that produces relevant action aligned experience at an improving cost, understands where synthetic data is trustworthy, and converts real failures into measurable gains without breaking safety or privacy.",
        "Real teleoperation remains the anchor for precise control. Portable capture expands the human teaching surface. Fleet data supplies commercially relevant edge cases. Simulation offers controllable coverage. World models may compress the need for physical demonstrations if their generated actions and futures hold up on hardware. First person and internet video provide the scale needed for broad perception and task understanding.",
        "The frontier is not simply more data. It is robot native action data at video scale, with enough provenance and evaluation to know what the model actually learned. Until that exists, every useful trajectory still has to be manufactured, translated, or earned in deployment.",
      ],
    },
    {
      heading: "Sourcing and Verification",
      paragraphs: [
        [
          "This analysis relies on primary project pages, technical reports, official product documentation, and company disclosures, with independent context from IEEE Spectrum and the Associated Press. The comparison graphic is an original Black Scarab recreation inspired by a ",
          { text: "Core Matter", href: coreMatter },
          " chart supplied for reference. Its positions are illustrative and should not be read as measured cost or quality scores.",
        ],
      ],
    },
  ],
  sources: [
    "DROID dataset",
    "AgiBot World technical report",
    "Mobile ALOHA",
    "Universal Manipulation Interface",
    "Open X Embodiment",
    "NVIDIA Isaac Sim and Cosmos 3",
    "Figure Helix",
    "Ego4D and Project Aria",
    "Google DeepMind RT 2",
  ],
  sourceLinks: [
    { label: "DROID dataset", url: droid },
    { label: "AgiBot World technical report", url: agibot },
    { label: "Mobile ALOHA", url: mobileAloha },
    { label: "Universal Manipulation Interface", url: umi },
    { label: "Open X Embodiment", url: openX },
    { label: "NVIDIA Isaac Sim", url: isaacSim },
    { label: "NVIDIA Cosmos 3", url: cosmos3 },
    { label: "Figure Helix", url: figureHelix },
    { label: "Ego4D", url: ego4d },
    { label: "Project Aria", url: aria },
    { label: "Google DeepMind RT 2", url: rt2 },
    { label: "IEEE Spectrum data pyramid interview", url: spectrum },
    { label: "Associated Press robotics data report", url: ap },
    { label: "Core Matter physical AI value stack", url: coreMatter },
  ],
});
