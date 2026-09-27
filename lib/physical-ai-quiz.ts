export type QuizOption = {
  label: string;
};

export type PhysicalAiQuizQuestion = {
  id: string;
  category: string;
  prompt: string;
  options: QuizOption[];
  correctIndex: number;
  explanation: string;
  glossaryHref: string;
  glossaryLabel: string;
};

export const physicalAiQuizQuestions: PhysicalAiQuizQuestion[] = [
  {
    id: "slam",
    category: "Navigation and control",
    prompt:
      "The GPS signal is gone. A warehouse robot is mapping an unfamiliar floor while figuring out where it is on that map. What is doing the heavy lifting?",
    options: [
      { label: "Visual odometry" },
      { label: "SLAM" },
      { label: "Teleoperation" },
      { label: "Inverse kinematics" },
    ],
    correctIndex: 1,
    explanation:
      "SLAM lets the robot build a map and estimate its position inside that map at the same time.",
    glossaryHref: "/resources/physical-ai-glossary#slam",
    glossaryLabel: "SLAM",
  },
  {
    id: "actuator",
    category: "Robotics and actuation",
    prompt:
      "The controller has made its decision. Which component turns that command into the movement of a wheel, joint, gripper, or arm?",
    options: [
      { label: "Encoder" },
      { label: "Controller" },
      { label: "Actuator" },
      { label: "Transceiver" },
    ],
    correctIndex: 2,
    explanation:
      "An actuator converts electrical, hydraulic, or pneumatic energy into physical movement.",
    glossaryHref: "/resources/physical-ai-glossary#actuator",
    glossaryLabel: "Actuator",
  },
  {
    id: "edge-ai",
    category: "Software and connectivity",
    prompt:
      "The connection drops, but a safety camera still has to react in milliseconds. Where should the model run?",
    options: [
      { label: "In a distant training cluster" },
      { label: "At the edge, near the camera" },
      { label: "Inside a digital twin" },
      { label: "Only in a fleet dashboard" },
    ],
    correctIndex: 1,
    explanation:
      "Edge AI runs near the source of the data, which can improve response time and keep important functions available when connectivity is limited.",
    glossaryHref: "/resources/physical-ai-glossary#edge-ai",
    glossaryLabel: "Edge AI",
  },
  {
    id: "force-torque-sensor",
    category: "Sensors and perception",
    prompt:
      "A robot arm is polishing a surface. It needs to feel the push, pull, and twist at its wrist. Which sensor belongs there?",
    options: [
      { label: "Inertial measurement unit" },
      { label: "Time of flight sensor" },
      { label: "Force torque sensor" },
      { label: "Proximity sensor" },
    ],
    correctIndex: 2,
    explanation:
      "A force torque sensor measures linear forces and twisting forces, often close to the robot wrist.",
    glossaryHref: "/resources/physical-ai-glossary#ft-sensor",
    glossaryLabel: "Force Torque Sensor",
  },
  {
    id: "hbm",
    category: "Compute and memory",
    prompt:
      "The AI accelerator is fast enough. The bottleneck is getting model data to it. Which memory architecture helps?",
    options: [
      { label: "High Bandwidth Memory" },
      { label: "Read only memory" },
      { label: "A motor encoder" },
      { label: "A safety relay" },
    ],
    correctIndex: 0,
    explanation:
      "High Bandwidth Memory moves large amounts of model data quickly so the processor spends less time waiting for information.",
    glossaryHref: "/resources/physical-ai-glossary#hbm",
    glossaryLabel: "High Bandwidth Memory",
  },
  {
    id: "vla",
    category: "Models and learning",
    prompt:
      "A model sees the cup and understands the instruction. What changes when it is a VLA rather than a VLM?",
    options: [
      { label: "It only processes audio" },
      { label: "It no longer needs sensors" },
      { label: "It connects perception and language to action" },
      { label: "It becomes a digital twin" },
    ],
    correctIndex: 2,
    explanation:
      "A Vision Language Action model connects what the robot sees and what a person asks with the actions needed to complete the task.",
    glossaryHref: "/resources/physical-ai-glossary#vla",
    glossaryLabel: "Vision Language Action Model",
  },
  {
    id: "digital-twin",
    category: "Simulation and data",
    prompt:
      "A beautiful 3D model of a factory is not automatically a digital twin. What is missing?",
    options: [
      { label: "Photorealistic lighting" },
      { label: "A connection to relevant real data" },
      { label: "A cloud subscription" },
      { label: "A humanoid robot" },
    ],
    correctIndex: 1,
    explanation:
      "A useful digital twin stays connected to relevant data from the real asset, process, or facility and helps people monitor, test, or decide.",
    glossaryHref: "/resources/physical-ai-glossary#digital-twin",
    glossaryLabel: "Digital Twin",
  },
  {
    id: "cobot",
    category: "Industry and safety",
    prompt:
      "A supplier calls its arm a cobot. What still has to happen before people safely share the workspace with it?",
    options: [
      { label: "Nothing. The label settles it" },
      { label: "A risk assessment of the complete application" },
      { label: "A switch to cloud control" },
      { label: "A permanent low speed setting" },
    ],
    correctIndex: 1,
    explanation:
      "The cobot label does not make every application safe. The complete task, tooling, environment, and interaction still need a risk assessment.",
    glossaryHref: "/resources/physical-ai-glossary#cobot",
    glossaryLabel: "Collaborative Robot",
  },
  {
    id: "functional-safety",
    category: "Industry and safety",
    prompt:
      "A guard door opens while a robot is moving. Which discipline is responsible for bringing the machine to a safe state?",
    options: [
      { label: "Cybersecurity" },
      { label: "Functional safety" },
      { label: "Predictive maintenance" },
      { label: "Data compression" },
    ],
    correctIndex: 1,
    explanation:
      "Functional safety covers safety that depends on a control system responding correctly to dangerous conditions or failures.",
    glossaryHref: "/resources/physical-ai-glossary#functional-safety",
    glossaryLabel: "Functional Safety",
  },
  {
    id: "ros-action",
    category: "Software and connectivity",
    prompt:
      "A ROS 2 navigation task needs progress updates, a final result, and a cancel button. Which communication pattern fits?",
    options: [
      { label: "Topic" },
      { label: "Service" },
      { label: "Action" },
      { label: "Parameter" },
    ],
    correctIndex: 2,
    explanation:
      "A ROS action fits longer tasks that need progress feedback, a final result, and cancellation.",
    glossaryHref: "/resources/physical-ai-glossary#ros-action",
    glossaryLabel: "ROS Action",
  },
];

export type QuizOutcome = {
  name: string;
  slug: string;
  summary: string;
};

export function getPhysicalAiQuizOutcome(score: number): QuizOutcome {
  if (score === physicalAiQuizQuestions.length) {
    return {
      name: "Closed Loop",
      slug: "closed-loop",
      summary:
        "You connected perception, compute, motion, and safety without losing the signal.",
    };
  }

  if (score >= 8) {
    return {
      name: "Stack Navigator",
      slug: "stack-navigator",
      summary: "You can follow intelligence from the sensor to the machine.",
    };
  }

  if (score >= 5) {
    return {
      name: "Signal Scout",
      slug: "signal-scout",
      summary: "You found the important signals. A few layers still blur together.",
    };
  }

  return {
    name: "Boot Sequence",
    slug: "boot-sequence",
    summary: "The machine is awake. Now the stack starts to make sense.",
  };
}
