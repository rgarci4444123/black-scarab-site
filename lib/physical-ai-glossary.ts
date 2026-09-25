export const glossaryCategories = [
  "Foundations",
  "Models and Learning",
  "Compute and Memory",
  "Sensors and Perception",
  "Navigation and Control",
  "Robotics and Actuation",
  "Simulation and Data",
  "Software and Connectivity",
  "Industry and Safety",
] as const;

export type GlossaryCategory = (typeof glossaryCategories)[number];

export type GlossaryTerm = {
  id: string;
  term: string;
  acronym?: string;
  category: GlossaryCategory;
  definition: string;
  aliases?: string[];
  anchor?: string;
};

export function getGlossaryAnchor(item: GlossaryTerm) {
  return (item.anchor ?? item.acronym ?? item.id)
    .toLocaleLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const originalGlossaryTerms: GlossaryTerm[] = [
  {
    id: "physical-ai",
    term: "Physical AI",
    category: "Foundations",
    definition:
      "Physical AI describes intelligent systems that sense the real world, make a decision, and cause or coordinate a physical action. A warehouse robot that sees a blocked aisle, chooses another route, and checks its progress is using physical AI.",
  },
  {
    id: "embodied-ai",
    term: "Embodied AI",
    category: "Foundations",
    definition:
      "Embodied AI is artificial intelligence that learns or operates through a body, such as a robot, vehicle, or smart machine. Its intelligence is shaped by what the body can sense, how it can move, and the environment around it.",
  },
  {
    id: "artificial-intelligence",
    term: "Artificial Intelligence",
    acronym: "AI",
    category: "Foundations",
    definition:
      "AI is the broad field of building computer systems that can perform tasks associated with human intelligence, including recognizing patterns, understanding language, making predictions, and choosing actions. Not every AI system learns, and not every AI system controls a machine.",
  },
  {
    id: "machine-learning",
    term: "Machine Learning",
    acronym: "ML",
    category: "Foundations",
    definition:
      "Machine learning is a way of building software by learning patterns from data instead of writing a rule for every situation. A quality inspection model can learn what defects look like from examples of acceptable and defective parts.",
  },
  {
    id: "deep-learning",
    term: "Deep Learning",
    acronym: "DL",
    category: "Foundations",
    definition:
      "Deep learning is a form of machine learning that uses neural networks with many layers. It is especially useful for complex data such as images, speech, video, and sensor readings, where useful patterns are difficult to describe with fixed rules.",
  },
  {
    id: "robot",
    term: "Robot",
    category: "Foundations",
    definition:
      "A robot is a programmed machine that senses, moves, or manipulates objects with some degree of independence. A robot can use advanced AI, simple automation, or both. Having a mechanical body does not automatically make a machine intelligent.",
  },
  {
    id: "robotics",
    term: "Robotics",
    category: "Foundations",
    definition:
      "Robotics is the field concerned with designing, building, programming, and operating robots. It brings together mechanical engineering, electronics, software, sensing, control, and increasingly machine learning.",
  },
  {
    id: "autonomous-system",
    term: "Autonomous System",
    category: "Foundations",
    definition:
      "An autonomous system can carry out a defined task with limited direct human control. Its independence always has boundaries. A delivery robot may navigate sidewalks on its own but still need a remote operator for unusual situations.",
  },
  {
    id: "autonomy",
    term: "Autonomy",
    category: "Foundations",
    definition:
      "Autonomy is the ability of a system to make and execute decisions within a defined task and environment. It is not an all or nothing property. A machine may be autonomous during normal operation and require help during exceptions.",
  },
  {
    id: "ai-agent",
    term: "AI Agent",
    category: "Foundations",
    definition:
      "An AI agent observes information, pursues a goal, chooses actions, and responds to results. In physical AI, those actions may become robot commands, work orders, route changes, or other decisions that affect the real world.",
  },
  {
    id: "perception",
    term: "Perception",
    category: "Foundations",
    definition:
      "Perception is the process of turning sensor data into an understanding of what is happening. For a robot, this might mean finding a box in a camera image, measuring its distance, and tracking whether it moves.",
  },
  {
    id: "cognition",
    term: "Cognition",
    category: "Foundations",
    definition:
      "Cognition refers to the processes used to understand information, form an internal view of a situation, and decide what to do. In robotics, the word often covers reasoning, memory, planning, and learning rather than raw sensing or motor control.",
  },
  {
    id: "reasoning",
    term: "Reasoning",
    category: "Foundations",
    definition:
      "Reasoning is the process of connecting information to reach a conclusion or choose a course of action. A robot may reason that a glass is fragile, so it should reduce grip force and move more slowly.",
  },
  {
    id: "planning",
    term: "Planning",
    category: "Foundations",
    definition:
      "Planning means choosing a sequence of steps that can move a system from its current state toward a goal. A mobile robot may plan which aisle to use, while a robot arm plans how to approach and grasp an object.",
  },
  {
    id: "control",
    term: "Control",
    category: "Foundations",
    definition:
      "Control is the process of directing a machine so its actual behavior matches the desired behavior. A controller might adjust motor power many times per second to keep a robot balanced or hold an arm at the correct position.",
  },
  {
    id: "feedback-loop",
    term: "Feedback Loop",
    category: "Foundations",
    definition:
      "A feedback loop measures what happened after an action and uses that result to guide the next action. A robot arm can keep checking its joint position and correcting the motor command until it reaches the target.",
  },
  {
    id: "cyber-physical-system",
    term: "Cyber Physical System",
    acronym: "CPS",
    category: "Foundations",
    definition:
      "A cyber physical system tightly connects software, networks, sensors, and physical equipment. A smart factory line is one example because digital control decisions continuously affect machines, materials, and production in the real world.",
  },
  {
    id: "human-robot-interaction",
    term: "Human Robot Interaction",
    acronym: "HRI",
    category: "Foundations",
    definition:
      "Human robot interaction studies how people and robots communicate, share space, divide work, and build trust. Good interaction design helps a person understand what a robot is doing, what it needs, and when intervention is required.",
  },
  {
    id: "multimodal-ai",
    term: "Multimodal AI",
    category: "Models and Learning",
    definition:
      "Multimodal AI can work with more than one kind of information, such as images, text, audio, video, or sensor data. A service robot may combine a spoken request with camera input to understand which object a person means.",
  },
  {
    id: "neural-network",
    term: "Neural Network",
    category: "Models and Learning",
    definition:
      "A neural network is a machine learning model built from connected layers of mathematical units. During training, those connections are adjusted so the model becomes better at tasks such as recognizing objects, predicting motion, or interpreting speech.",
  },
  {
    id: "foundation-model",
    term: "Foundation Model",
    category: "Models and Learning",
    definition:
      "A foundation model is trained on a broad collection of data and can later be adapted to many tasks. Instead of building every robot skill from the beginning, developers can start with a general model and specialize it for a machine or workplace.",
  },
  {
    id: "large-language-model",
    term: "Large Language Model",
    acronym: "LLM",
    category: "Models and Learning",
    definition:
      "An LLM is trained on large amounts of text to understand and generate language. In robotics, an LLM can help interpret instructions or plan tasks, but it usually needs perception, control, and safety systems before its output can affect a machine.",
  },
  {
    id: "vision-language-model",
    term: "Vision Language Model",
    acronym: "VLM",
    category: "Models and Learning",
    definition:
      "A VLM works with images and language together. It can describe a scene, answer questions about an image, or connect a written instruction to something visible. By itself, a VLM usually explains what it sees rather than controlling a robot.",
  },
  {
    id: "vision-language-action-model",
    term: "Vision Language Action Model",
    acronym: "VLA",
    category: "Models and Learning",
    definition:
      "A VLA model connects what a robot sees, what a person asks, and the actions needed to complete the task. A request such as place the red cup in the sink can become a sequence of robot movements.",
  },
  {
    id: "world-foundation-model",
    term: "World Foundation Model",
    acronym: "WFM",
    category: "Models and Learning",
    definition:
      "A world foundation model learns patterns about how physical scenes and events change over time. It can help generate simulations, predict possible future states, or provide useful knowledge for robots and autonomous vehicles.",
  },
  {
    id: "world-action-model",
    term: "World Action Model",
    acronym: "WAM",
    category: "Models and Learning",
    definition:
      "A world action model connects possible actions with how the world may change afterward. Rather than only predicting the next image, it can help a robot consider which action is most likely to produce the desired result.",
  },
  {
    id: "transformer",
    term: "Transformer",
    category: "Models and Learning",
    definition:
      "A transformer is a neural network architecture that learns which parts of its input deserve attention. It became important in language models and is now widely used for vision, video, robotics, and models that combine several kinds of data.",
  },
  {
    id: "diffusion-model",
    term: "Diffusion Model",
    category: "Models and Learning",
    definition:
      "A diffusion model learns to create useful outputs by gradually removing noise. Beyond image generation, diffusion methods can propose robot movements by refining a rough set of possible actions into a smoother and more useful plan.",
  },
  {
    id: "policy",
    term: "Policy",
    category: "Models and Learning",
    definition:
      "A policy is the decision rule a robot uses to choose an action from its current situation. It may be hand programmed, learned from examples, or improved through reinforcement learning. The policy is the part that answers what should I do next.",
  },
  {
    id: "training",
    term: "Training",
    category: "Models and Learning",
    definition:
      "Training is the process through which a model learns from examples or experience. The model makes predictions, measures its mistakes, and adjusts its internal parameters. Most training happens before a model is installed on a machine.",
  },
  {
    id: "pretraining",
    term: "Pretraining",
    category: "Models and Learning",
    definition:
      "Pretraining gives a model broad abilities before it is adapted to a specific job. A robot model might first learn from large image, video, language, and motion datasets, then receive additional training for warehouse picking.",
  },
  {
    id: "fine-tuning",
    term: "Fine Tuning",
    category: "Models and Learning",
    definition:
      "Fine tuning continues training an existing model on a smaller, more focused dataset. A general vision model can be fine tuned on images from one factory so it becomes better at recognizing that factory's parts and defects.",
  },
  {
    id: "post-training",
    term: "Post Training",
    category: "Models and Learning",
    definition:
      "Post training is the work done after a model's main training phase to improve its behavior, efficiency, or usefulness. It can include instruction tuning, safety tuning, quantization, or learning from human and robot feedback.",
  },
  {
    id: "inference",
    term: "Inference",
    category: "Models and Learning",
    definition:
      "Inference happens when a trained model uses what it learned to produce an answer, prediction, or action. When a warehouse robot identifies a box or predicts where a person is moving, it is performing inference.",
  },
  {
    id: "supervised-learning",
    term: "Supervised Learning",
    category: "Models and Learning",
    definition:
      "Supervised learning trains a model with examples that include the correct answer. A defect detector might learn from images labeled acceptable, scratched, cracked, or missing a component.",
  },
  {
    id: "unsupervised-learning",
    term: "Unsupervised Learning",
    category: "Models and Learning",
    definition:
      "Unsupervised learning looks for patterns in data without being given a correct label for every example. It can help group similar machine behaviors, discover unusual operating conditions, or organize large sensor datasets.",
  },
  {
    id: "self-supervised-learning",
    term: "Self Supervised Learning",
    category: "Models and Learning",
    definition:
      "Self supervised learning creates learning tasks from the data itself. A model might hide part of an image or video and learn to predict what is missing, allowing it to learn useful structure without extensive human labeling.",
  },
  {
    id: "reinforcement-learning",
    term: "Reinforcement Learning",
    acronym: "RL",
    category: "Models and Learning",
    definition:
      "Reinforcement learning teaches a system through rewards and penalties. A robot tries actions, observes the result, and gradually favors behavior that earns better outcomes. Simulation is often used because real robot trial and error can be slow or unsafe.",
  },
  {
    id: "imitation-learning",
    term: "Imitation Learning",
    category: "Models and Learning",
    definition:
      "Imitation learning teaches a machine from demonstrations of the desired behavior. A person might guide a robot arm through a task while the system records the observations and actions needed to reproduce it.",
  },
  {
    id: "behavior-cloning",
    term: "Behavior Cloning",
    acronym: "BC",
    category: "Models and Learning",
    definition:
      "Behavior cloning is a direct form of imitation learning. A model studies demonstrations and learns to predict the action a skilled operator took in each situation. It is simple and useful, but it may struggle when the robot enters unfamiliar conditions.",
  },
  {
    id: "transfer-learning",
    term: "Transfer Learning",
    category: "Models and Learning",
    definition:
      "Transfer learning reuses knowledge learned for one task or dataset in another. A model trained to recognize everyday objects may provide a stronger starting point for industrial inspection than a model trained from nothing.",
  },
  {
    id: "sim-to-real",
    term: "Sim to Real",
    category: "Models and Learning",
    definition:
      "Sim to real is the process of taking a model or robot skill developed in simulation and making it work on real equipment. The challenge is closing the gap between the clean simulated world and messy physical reality.",
  },
  {
    id: "domain-adaptation",
    term: "Domain Adaptation",
    category: "Models and Learning",
    definition:
      "Domain adaptation helps a model work when its operating data differs from its training data. A vision system trained in a bright laboratory may need adaptation before it performs reliably in a dim warehouse.",
  },
  {
    id: "quantization",
    term: "Quantization",
    category: "Models and Learning",
    definition:
      "Quantization represents a model's numbers with fewer bits. This can reduce memory use, power use, and inference time, which helps models fit on edge devices. The tradeoff is that too much compression can reduce accuracy.",
  },
  {
    id: "knowledge-distillation",
    term: "Knowledge Distillation",
    category: "Models and Learning",
    definition:
      "Knowledge distillation trains a smaller model to imitate a larger one. The smaller model may not match every capability, but it can be faster and easier to run inside a robot, camera, vehicle, or other power limited device.",
  },
  {
    id: "central-processing-unit",
    term: "Central Processing Unit",
    acronym: "CPU",
    category: "Compute and Memory",
    definition:
      "The CPU is the general purpose processor inside a computer. It runs applications and coordinates other components. In a robot, the CPU may manage navigation software, communications, and routine decisions while specialized chips handle demanding AI calculations.",
  },
  {
    id: "graphics-processing-unit",
    term: "Graphics Processing Unit",
    acronym: "GPU",
    category: "Compute and Memory",
    definition:
      "A GPU performs many similar calculations at the same time. It was designed for graphics, but that parallel structure also suits AI. Robots use GPUs to process camera feeds, run large models, and train systems from data.",
  },
  {
    id: "tensor-processing-unit",
    term: "Tensor Processing Unit",
    acronym: "TPU",
    category: "Compute and Memory",
    definition:
      "A TPU is a processor designed by Google for machine learning calculations. It is built to handle the matrix operations used by neural networks efficiently and appears in Google cloud infrastructure and selected edge devices.",
  },
  {
    id: "neural-processing-unit",
    term: "Neural Processing Unit",
    acronym: "NPU",
    category: "Compute and Memory",
    definition:
      "An NPU is a processor specialized for neural network workloads. It can run common AI tasks with less power than a general purpose processor, which makes it useful in phones, cameras, laptops, vehicles, and compact robots.",
  },
  {
    id: "data-processing-unit",
    term: "Data Processing Unit",
    acronym: "DPU",
    category: "Compute and Memory",
    definition:
      "A DPU handles data movement, networking, storage, and security work that would otherwise occupy a CPU. In an AI server, it can keep information flowing while the CPU and accelerators focus on models and applications.",
  },
  {
    id: "vision-processing-unit",
    term: "Vision Processing Unit",
    acronym: "VPU",
    category: "Compute and Memory",
    definition:
      "A VPU is a low power processor designed for computer vision. It can run tasks such as object detection or depth processing inside a camera or edge device without depending on a large GPU.",
  },
  {
    id: "microcontroller-unit",
    term: "Microcontroller Unit",
    acronym: "MCU",
    category: "Compute and Memory",
    definition:
      "An MCU is a small computer on a single chip that controls a focused device or function. A robot may use several microcontrollers to read sensors, drive motors, monitor batteries, and perform reliable low level tasks.",
  },
  {
    id: "digital-signal-processor",
    term: "Digital Signal Processor",
    acronym: "DSP",
    category: "Compute and Memory",
    definition:
      "A DSP is a processor optimized for fast, repeated mathematical operations on signals. It is commonly used for audio, radar, motor control, communications, and sensor processing where data arrives continuously and must be handled quickly.",
  },
  {
    id: "field-programmable-gate-array",
    term: "Field Programmable Gate Array",
    acronym: "FPGA",
    category: "Compute and Memory",
    definition:
      "An FPGA is a chip whose internal logic can be reconfigured after manufacturing. It offers more hardware flexibility than an ASIC and can provide very fast, predictable processing for cameras, communications, control, and specialized AI workloads.",
  },
  {
    id: "application-specific-integrated-circuit",
    term: "Application Specific Integrated Circuit",
    acronym: "ASIC",
    category: "Compute and Memory",
    definition:
      "An ASIC is a chip designed for a narrow purpose. Because its hardware is built around a specific job, it can be faster and more efficient than a general processor, but it is expensive to design and difficult to change.",
  },
  {
    id: "system-on-chip",
    term: "System on Chip",
    acronym: "SoC",
    category: "Compute and Memory",
    definition:
      "An SoC combines several computer functions on one chip, often including CPU cores, graphics, AI acceleration, memory controllers, and communications. This saves space and power in robots, drones, vehicles, and smart cameras.",
  },
  {
    id: "system-in-package",
    term: "System in Package",
    acronym: "SiP",
    category: "Compute and Memory",
    definition:
      "A SiP places several separate chips inside one package so they work as a compact system. It can combine processors, memory, radios, and other components without manufacturing them as one piece of silicon.",
  },
  {
    id: "ai-accelerator",
    term: "AI Accelerator",
    category: "Compute and Memory",
    definition:
      "An AI accelerator is hardware designed to run machine learning calculations faster or more efficiently than a general purpose processor. GPUs, NPUs, TPUs, FPGAs, and specialized ASICs can all serve as AI accelerators.",
  },
  {
    id: "heterogeneous-computing",
    term: "Heterogeneous Computing",
    category: "Compute and Memory",
    definition:
      "Heterogeneous computing uses different kinds of processors in one system, with each handling the work it does best. A robot might use a CPU for coordination, a GPU for vision, and a microcontroller for motor control.",
  },
  {
    id: "parallel-computing",
    term: "Parallel Computing",
    category: "Compute and Memory",
    definition:
      "Parallel computing divides work so many calculations can happen at once. This is useful for AI because training and inference repeatedly apply similar math across large groups of numbers, images, or sensor readings.",
  },
  {
    id: "edge-processor",
    term: "Edge Processor",
    category: "Compute and Memory",
    definition:
      "An edge processor runs computing tasks near the machine or sensor that creates the data. It is usually chosen for a balance of speed, power use, size, cost, and the models it can support.",
  },
  {
    id: "tensor-core",
    term: "Tensor Core",
    category: "Compute and Memory",
    definition:
      "A tensor core is a specialized calculation unit inside some accelerators. It performs the matrix math used by neural networks very quickly, helping speed up model training and inference.",
  },
  {
    id: "compute-unit",
    term: "Compute Unit",
    acronym: "CU",
    category: "Compute and Memory",
    definition:
      "A compute unit is a group of processing resources inside a chip that executes work. The exact design varies by manufacturer, so counts are most useful when comparing products built on the same architecture.",
  },
  {
    id: "chiplet",
    term: "Chiplet",
    category: "Compute and Memory",
    definition:
      "A chiplet is a smaller piece of silicon designed to be combined with other chiplets in one package. This lets manufacturers mix compute, memory, and communication functions without building one enormous chip.",
  },
  {
    id: "semiconductor-process-node",
    term: "Semiconductor Process Node",
    category: "Compute and Memory",
    definition:
      "A process node names a generation of chip manufacturing technology, often with a number such as 5 nanometer or 3 nanometer. A smaller number does not guarantee a better product, but newer nodes can improve density, speed, or efficiency.",
  },
  {
    id: "high-bandwidth-memory",
    term: "High Bandwidth Memory",
    acronym: "HBM",
    category: "Compute and Memory",
    definition:
      "HBM stacks memory close to a processor so large amounts of data can move quickly. This matters because a powerful AI chip can waste time waiting for information. HBM helps keep the processor supplied with model data.",
  },
  {
    id: "dynamic-random-access-memory",
    term: "Dynamic Random Access Memory",
    acronym: "DRAM",
    category: "Compute and Memory",
    definition:
      "DRAM is the common working memory used by computers and many embedded systems. It holds data while the machine is running, offers more capacity than on chip memory, and loses its contents when power is removed.",
  },
  {
    id: "static-random-access-memory",
    term: "Static Random Access Memory",
    acronym: "SRAM",
    category: "Compute and Memory",
    definition:
      "SRAM is fast memory that does not need the constant refreshing used by DRAM. It is more expensive and takes more chip area, so it is commonly used for small, fast caches and buffers close to processing units.",
  },
  {
    id: "video-random-access-memory",
    term: "Video Random Access Memory",
    acronym: "VRAM",
    category: "Compute and Memory",
    definition:
      "VRAM is the memory available to a graphics processor. For AI, VRAM determines how large a model or batch of data can stay close to the GPU without repeatedly moving information from slower system memory.",
  },
  {
    id: "flash-memory",
    term: "Flash Memory",
    category: "Compute and Memory",
    definition:
      "Flash memory stores data even when power is off. Robots and edge devices use it for operating systems, model files, logs, and application software. It is persistent but usually slower than working memory such as DRAM.",
  },
  {
    id: "cache",
    term: "Cache",
    category: "Compute and Memory",
    definition:
      "A cache is a small, fast memory that keeps frequently needed data close to a processor. Good caching reduces trips to slower memory and can improve the speed and energy efficiency of AI and control workloads.",
  },
  {
    id: "unified-memory",
    term: "Unified Memory",
    category: "Compute and Memory",
    definition:
      "Unified memory lets different processors access a shared pool of memory instead of maintaining completely separate copies. This can simplify programming and reduce unnecessary data movement between the CPU and an accelerator.",
  },
  {
    id: "memory-capacity",
    term: "Memory Capacity",
    category: "Compute and Memory",
    definition:
      "Memory capacity is the amount of data a memory system can hold at one time. For AI hardware, capacity often determines whether a model fits on the device at all. It is different from how quickly the data can move.",
  },
  {
    id: "memory-bandwidth",
    term: "Memory Bandwidth",
    category: "Compute and Memory",
    definition:
      "Memory bandwidth measures how much data can move between memory and a processor in a given time. High bandwidth helps data heavy AI workloads keep processing units busy instead of waiting for model weights or sensor data.",
  },
  {
    id: "memory-hierarchy",
    term: "Memory Hierarchy",
    category: "Compute and Memory",
    definition:
      "A memory hierarchy organizes storage by speed, size, and cost. Tiny caches sit closest to the processor, working memory sits farther away, and larger storage is slower. Software performs best when frequently used data stays near the compute.",
  },
  {
    id: "interconnect",
    term: "Interconnect",
    category: "Compute and Memory",
    definition:
      "An interconnect is the pathway that moves data between chips, memory, sensors, or computers. Its speed and design can limit the performance of a system even when the individual processors are very powerful.",
  },
  {
    id: "peripheral-component-interconnect-express",
    term: "Peripheral Component Interconnect Express",
    acronym: "PCIe",
    category: "Compute and Memory",
    definition:
      "PCIe is a common high speed connection used to attach GPUs, accelerators, storage, and networking hardware to a computer. Newer generations move more data, but both connected devices must support the same capabilities to benefit.",
  },
  {
    id: "compute-express-link",
    term: "Compute Express Link",
    acronym: "CXL",
    category: "Compute and Memory",
    definition:
      "CXL is a connection standard that lets processors, accelerators, and memory share data more efficiently over PCIe hardware. In large AI systems, it can make memory easier to pool and access across different devices.",
  },
  {
    id: "floating-point-operations-per-second",
    term: "Floating Point Operations per Second",
    acronym: "FLOPS",
    category: "Compute and Memory",
    definition:
      "FLOPS measures how many floating point calculations a processor can perform each second. It is useful for comparing certain workloads, but real performance also depends on memory, software, precision, cooling, and how well the task uses the hardware.",
  },
  {
    id: "trillions-of-operations-per-second",
    term: "Trillions of Operations per Second",
    acronym: "TOPS",
    category: "Compute and Memory",
    definition:
      "TOPS is a common peak performance measure for AI accelerators. It counts trillions of operations per second, often at a specific number format. A higher TOPS number does not automatically mean an application will run faster.",
  },
  {
    id: "latency",
    term: "Latency",
    category: "Compute and Memory",
    definition:
      "Latency is the delay between an input and the system's response. In physical AI, even a highly accurate model can be unusable if the robot sees a hazard but reacts too late.",
  },
  {
    id: "throughput",
    term: "Throughput",
    category: "Compute and Memory",
    definition:
      "Throughput measures how much work a system completes over time. A vision server may have high throughput because it processes many camera frames, even if each individual frame takes longer than it would on a low latency edge device.",
  },
  {
    id: "jitter",
    term: "Jitter",
    category: "Compute and Memory",
    definition:
      "Jitter is variation in timing. If a control message normally arrives every millisecond but occasionally arrives much later, that variation is jitter. Too much jitter can make robot motion less smooth or predictable.",
  },
  {
    id: "power-efficiency",
    term: "Power Efficiency",
    category: "Compute and Memory",
    definition:
      "Power efficiency describes how much useful work a system performs for the energy it consumes. It matters in battery powered robots and drones, but also in factories and data centers where heat, cooling, and electricity affect operating cost.",
  },
  {
    id: "thermal-design-power",
    term: "Thermal Design Power",
    acronym: "TDP",
    category: "Compute and Memory",
    definition:
      "TDP is a planning value used to size cooling for a processor or chip. It is not always the same as actual electrical use, but it helps engineers judge whether a device can operate safely inside a compact enclosure.",
  },
  {
    id: "sensor",
    term: "Sensor",
    category: "Sensors and Perception",
    definition:
      "A sensor measures something about a machine or its environment and turns it into data. Cameras measure light, encoders measure motion, and temperature sensors measure heat. Sensors give physical AI its connection to current reality.",
  },
  {
    id: "sensor-fusion",
    term: "Sensor Fusion",
    category: "Sensors and Perception",
    definition:
      "Sensor fusion combines information from several sensors to create a more reliable view of the world. A mobile robot may combine cameras, LiDAR, wheel encoders, and an IMU because no single sensor works perfectly everywhere.",
  },
  {
    id: "camera",
    term: "Camera",
    category: "Sensors and Perception",
    definition:
      "A camera captures light as images or video. In physical AI, cameras can support inspection, navigation, object recognition, tracking, and human interaction. Their usefulness depends on lighting, placement, lenses, resolution, and processing software.",
  },
  {
    id: "rgb-camera",
    term: "Red Green Blue Camera",
    acronym: "RGB Camera",
    category: "Sensors and Perception",
    definition:
      "An RGB camera records ordinary color images using red, green, and blue channels. It provides rich visual detail at relatively low cost, but a single RGB image does not directly measure distance.",
  },
  {
    id: "depth-camera",
    term: "Depth Camera",
    category: "Sensors and Perception",
    definition:
      "A depth camera estimates the distance from the camera to points in a scene. This helps a robot understand shape, size, and free space rather than seeing only a flat image.",
  },
  {
    id: "stereo-vision",
    term: "Stereo Vision",
    category: "Sensors and Perception",
    definition:
      "Stereo vision uses two cameras with slightly different viewpoints to estimate depth, much like human eyes. The system matches the same features in both images and uses their difference to calculate distance.",
  },
  {
    id: "event-camera",
    term: "Event Camera",
    category: "Sensors and Perception",
    definition:
      "An event camera reports changes in brightness at individual pixels instead of capturing full images at fixed intervals. It can react quickly to motion and use less data in scenes where most of the view is not changing.",
  },
  {
    id: "thermal-camera",
    term: "Thermal Camera",
    category: "Sensors and Perception",
    definition:
      "A thermal camera detects infrared energy related to temperature rather than visible color. It can find overheating equipment, inspect buildings, see through some low light conditions, and identify temperature differences invisible to ordinary cameras.",
  },
  {
    id: "machine-vision",
    term: "Machine Vision",
    category: "Sensors and Perception",
    definition:
      "Machine vision uses cameras, lighting, optics, and software to inspect or guide industrial processes. It is usually engineered for a specific task, such as checking labels or aligning parts, and it may use traditional algorithms, AI, or both.",
  },
  {
    id: "lidar",
    term: "Light Detection and Ranging",
    acronym: "LiDAR",
    category: "Sensors and Perception",
    definition:
      "LiDAR sends laser light into the environment and measures how long reflections take to return. It can create accurate distance measurements and three dimensional maps for robots, vehicles, surveying, and industrial inspection.",
  },
  {
    id: "radar",
    term: "Radio Detection and Ranging",
    acronym: "Radar",
    category: "Sensors and Perception",
    definition:
      "Radar uses radio waves to detect distance, direction, and often speed. It can work in darkness and difficult weather, making it useful for vehicles, drones, safety systems, and measuring motion around industrial equipment.",
  },
  {
    id: "ultrasonic-sensor",
    term: "Ultrasonic Sensor",
    category: "Sensors and Perception",
    definition:
      "An ultrasonic sensor sends out high frequency sound and measures the returning echo. It provides simple distance or presence information at low cost, though soft materials, angles, and environmental noise can affect readings.",
  },
  {
    id: "proximity-sensor",
    term: "Proximity Sensor",
    category: "Sensors and Perception",
    definition:
      "A proximity sensor detects whether an object is nearby without requiring physical contact. Different designs use light, magnetic fields, sound, or electrical properties to detect particular materials and distances.",
  },
  {
    id: "tactile-sensor",
    term: "Tactile Sensor",
    category: "Sensors and Perception",
    definition:
      "A tactile sensor measures contact, pressure, or texture. Placed on a robot hand or gripper, it can help detect whether an object is slipping, how firmly it is held, or where contact occurs.",
  },
  {
    id: "force-torque-sensor",
    term: "Force Torque Sensor",
    acronym: "FT Sensor",
    category: "Sensors and Perception",
    definition:
      "A force torque sensor measures pushes, pulls, and twisting forces. It is often mounted near a robot wrist so the machine can control contact during assembly, polishing, testing, or delicate manipulation.",
  },
  {
    id: "inertial-measurement-unit",
    term: "Inertial Measurement Unit",
    acronym: "IMU",
    category: "Sensors and Perception",
    definition:
      "An IMU combines motion sensors, usually accelerometers and gyroscopes, to estimate how a device is moving and rotating. Robots, drones, vehicles, and wearable devices use IMUs when external position signals are limited or delayed.",
  },
  {
    id: "accelerometer",
    term: "Accelerometer",
    category: "Sensors and Perception",
    definition:
      "An accelerometer measures changes in motion along one or more directions. It can detect vibration, impacts, tilt related to gravity, and movement, making it useful for navigation and equipment monitoring.",
  },
  {
    id: "gyroscope",
    term: "Gyroscope",
    category: "Sensors and Perception",
    definition:
      "A gyroscope measures how quickly a device rotates. Combined with other sensors, it helps a drone stay level, a mobile robot track turns, or a humanoid estimate the motion of its body.",
  },
  {
    id: "magnetometer",
    term: "Magnetometer",
    category: "Sensors and Perception",
    definition:
      "A magnetometer measures magnetic fields and can act like a digital compass. It can help estimate heading, but nearby motors, steel structures, and electrical equipment may disturb its readings.",
  },
  {
    id: "encoder",
    term: "Encoder",
    category: "Sensors and Perception",
    definition:
      "An encoder measures the position or movement of a rotating or linear part. Robots use encoders to know how far a wheel turned, where a joint is, or how quickly a motor is moving.",
  },
  {
    id: "absolute-encoder",
    term: "Absolute Encoder",
    category: "Sensors and Perception",
    definition:
      "An absolute encoder reports a unique position value, including after a restart. A robot joint can therefore know its position without first moving to a reference point, depending on the encoder design.",
  },
  {
    id: "incremental-encoder",
    term: "Incremental Encoder",
    category: "Sensors and Perception",
    definition:
      "An incremental encoder reports movement as a series of pulses. The controller counts those pulses to track distance and direction, but it may need a known reference position after losing power.",
  },
  {
    id: "proprioception",
    term: "Proprioception",
    category: "Sensors and Perception",
    definition:
      "Proprioception is a machine's sense of its own body. Joint encoders, motor currents, and force sensors can tell a robot where its limbs are, how they are moving, and what loads they are experiencing.",
  },
  {
    id: "exteroception",
    term: "Exteroception",
    category: "Sensors and Perception",
    definition:
      "Exteroception is sensing the world outside the machine. Cameras, LiDAR, radar, microphones, and proximity sensors provide external information about objects, people, terrain, and other conditions.",
  },
  {
    id: "computer-vision",
    term: "Computer Vision",
    acronym: "CV",
    category: "Sensors and Perception",
    definition:
      "Computer vision is the field of extracting useful information from images and video. It lets machines identify objects, measure positions, inspect products, read text, track motion, and understand scenes.",
  },
  {
    id: "object-detection",
    term: "Object Detection",
    category: "Sensors and Perception",
    definition:
      "Object detection identifies which objects appear in an image and where they are located, usually with labeled boxes. A warehouse robot might detect people, pallets, forklifts, and open pathways in the same camera frame.",
  },
  {
    id: "image-classification",
    term: "Image Classification",
    category: "Sensors and Perception",
    definition:
      "Image classification assigns a label to an entire image or selected crop. It can answer questions such as whether a part is acceptable or defective, but it does not necessarily show where the defect is located.",
  },
  {
    id: "semantic-segmentation",
    term: "Semantic Segmentation",
    category: "Sensors and Perception",
    definition:
      "Semantic segmentation assigns a category to each pixel in an image. This gives a machine a detailed map of areas such as floor, wall, person, vehicle, vegetation, or defect.",
  },
  {
    id: "depth-estimation",
    term: "Depth Estimation",
    category: "Sensors and Perception",
    definition:
      "Depth estimation calculates how far parts of a scene are from a camera. It can use stereo cameras, active depth sensors, or AI models, and it helps robots judge shape, distance, and free space.",
  },
  {
    id: "point-cloud",
    term: "Point Cloud",
    category: "Sensors and Perception",
    definition:
      "A point cloud is a collection of points that represent the shape of a three dimensional scene or object. LiDAR and depth cameras commonly produce point clouds that robots use for mapping, measurement, and obstacle detection.",
  },
  {
    id: "localization",
    term: "Localization",
    category: "Navigation and Control",
    definition:
      "Localization is the process of estimating where a robot or vehicle is located. It can combine maps, cameras, LiDAR, GPS, wheel movement, and inertial sensors because no single source is reliable in every environment.",
  },
  {
    id: "mapping",
    term: "Mapping",
    category: "Navigation and Control",
    definition:
      "Mapping creates a useful representation of an environment. A map may show walls and obstacles, road features, shelf locations, or three dimensional surfaces, depending on what the machine needs to do.",
  },
  {
    id: "simultaneous-localization-and-mapping",
    term: "Simultaneous Localization and Mapping",
    acronym: "SLAM",
    category: "Navigation and Control",
    definition:
      "SLAM lets a machine build a map while also estimating its position inside that map. It is useful when a robot enters an unfamiliar area or cannot rely on a strong external positioning signal.",
  },
  {
    id: "visual-odometry",
    term: "Visual Odometry",
    acronym: "VO",
    category: "Navigation and Control",
    definition:
      "Visual odometry estimates movement by comparing features across a sequence of camera images. It can help a robot or vehicle track how far it moved and how its direction changed between frames.",
  },
  {
    id: "global-navigation-satellite-system",
    term: "Global Navigation Satellite System",
    acronym: "GNSS",
    category: "Navigation and Control",
    definition:
      "GNSS is the general name for satellite positioning systems such as GPS, Galileo, and others. Robots, drones, farm equipment, and vehicles use it outdoors, but buildings, trees, and reflections can reduce accuracy.",
  },
  {
    id: "real-time-kinematic-positioning",
    term: "Real Time Kinematic Positioning",
    acronym: "RTK",
    category: "Navigation and Control",
    definition:
      "RTK improves satellite positioning by using correction data from a known reference. Under good conditions, it can provide centimeter level accuracy for surveying, agricultural machines, drones, and autonomous vehicles.",
  },
  {
    id: "pose",
    term: "Pose",
    category: "Navigation and Control",
    definition:
      "Pose describes an object's position and orientation. Knowing that a part is on a table is not enough for grasping. A robot also needs to know which way the part is facing.",
  },
  {
    id: "coordinate-frame",
    term: "Coordinate Frame",
    category: "Navigation and Control",
    definition:
      "A coordinate frame is a reference system used to describe position and direction. A robot may track separate frames for the room, its base, its camera, its arm, and the object it wants to pick up.",
  },
  {
    id: "occupancy-grid",
    term: "Occupancy Grid",
    category: "Navigation and Control",
    definition:
      "An occupancy grid divides an area into small cells and estimates whether each cell is free, blocked, or unknown. Mobile robots use these grids to represent navigable space and plan routes around obstacles.",
  },
  {
    id: "state-estimation",
    term: "State Estimation",
    category: "Navigation and Control",
    definition:
      "State estimation combines measurements and a model to estimate important conditions that cannot be observed perfectly. It might track a robot's position, speed, orientation, battery condition, or the motion of nearby objects.",
  },
  {
    id: "path-planning",
    term: "Path Planning",
    category: "Navigation and Control",
    definition:
      "Path planning finds a route from a starting point to a goal while avoiding blocked or unsafe areas. It usually describes where to go, not the exact motor commands or timing needed to get there.",
  },
  {
    id: "motion-planning",
    term: "Motion Planning",
    category: "Navigation and Control",
    definition:
      "Motion planning finds a feasible way for a robot to move while respecting its shape, joints, obstacles, and limits. For an arm, it helps ensure the elbow and links avoid collisions, not just the gripper.",
  },
  {
    id: "trajectory-planning",
    term: "Trajectory Planning",
    category: "Navigation and Control",
    definition:
      "Trajectory planning adds timing to a planned movement. It defines where a robot should be, how fast it should move, and how its speed should change throughout the motion.",
  },
  {
    id: "obstacle-avoidance",
    term: "Obstacle Avoidance",
    category: "Navigation and Control",
    definition:
      "Obstacle avoidance detects hazards and adjusts motion to prevent a collision. It often works locally and quickly, while a broader planning system decides the overall route or task.",
  },
  {
    id: "open-loop-control",
    term: "Open Loop Control",
    category: "Navigation and Control",
    definition:
      "Open loop control sends a command without measuring whether the desired result occurred. It is simple and useful when conditions are predictable, but it cannot automatically correct for changing loads, wear, or disturbances.",
  },
  {
    id: "closed-loop-control",
    term: "Closed Loop Control",
    category: "Navigation and Control",
    definition:
      "Closed loop control measures the result of an action and adjusts the command to reduce error. A motor controller may continuously compare actual speed with requested speed and increase or decrease power.",
  },
  {
    id: "proportional-integral-derivative-controller",
    term: "Proportional Integral Derivative Controller",
    acronym: "PID Controller",
    category: "Navigation and Control",
    definition:
      "A PID controller corrects error using its current size, its history, and how quickly it is changing. It is widely used because a well tuned PID can control speed, temperature, position, and many other physical processes.",
  },
  {
    id: "model-predictive-control",
    term: "Model Predictive Control",
    acronym: "MPC",
    category: "Navigation and Control",
    definition:
      "MPC uses a model of the system to predict several possible futures and choose a useful control action while respecting limits. It can coordinate complex machines, but it requires enough computing power to solve the problem quickly.",
  },
  {
    id: "real-time-computing",
    term: "Real Time Computing",
    category: "Navigation and Control",
    definition:
      "Real time computing means producing a result within a required time limit, not simply computing as fast as possible. A safety signal that arrives after the deadline is a failure even if the calculation was correct.",
  },
  {
    id: "real-time-operating-system",
    term: "Real Time Operating System",
    acronym: "RTOS",
    category: "Navigation and Control",
    definition:
      "An RTOS is an operating system designed to run important tasks with predictable timing. It is common in motor controllers, drones, vehicles, medical devices, and industrial equipment where missed deadlines can affect performance or safety.",
  },
  {
    id: "actuator",
    term: "Actuator",
    category: "Robotics and Actuation",
    definition:
      "An actuator converts energy into physical movement. It is the part that lets a machine turn a wheel, move a joint, close a gripper, or raise an arm. Electric motors, hydraulic cylinders, and pneumatic systems are common actuators.",
  },
  {
    id: "electric-actuator",
    term: "Electric Actuator",
    category: "Robotics and Actuation",
    definition:
      "An electric actuator uses electrical energy to create movement, usually through a motor and mechanical transmission. It is common in robots because it is relatively easy to control, power, and integrate with electronics.",
  },
  {
    id: "hydraulic-actuator",
    term: "Hydraulic Actuator",
    category: "Robotics and Actuation",
    definition:
      "A hydraulic actuator uses pressurized liquid to produce movement and high force. It is common in heavy machinery, but pumps, valves, fluid lines, leaks, noise, and maintenance add complexity.",
  },
  {
    id: "pneumatic-actuator",
    term: "Pneumatic Actuator",
    category: "Robotics and Actuation",
    definition:
      "A pneumatic actuator uses compressed air to create movement. It can be simple, fast, and inexpensive for factory tasks, although air compression and precise control can be less efficient than electric alternatives.",
  },
  {
    id: "linear-actuator",
    term: "Linear Actuator",
    category: "Robotics and Actuation",
    definition:
      "A linear actuator creates movement along a straight line. It can push, pull, raise, or position a load using an electric screw, hydraulic cylinder, pneumatic cylinder, or another mechanism.",
  },
  {
    id: "rotary-actuator",
    term: "Rotary Actuator",
    category: "Robotics and Actuation",
    definition:
      "A rotary actuator creates turning motion. Motors are the most familiar example, but hydraulic and pneumatic rotary actuators are also used where a machine needs to rotate a joint, shaft, valve, or tool.",
  },
  {
    id: "servo-motor",
    term: "Servo Motor",
    category: "Robotics and Actuation",
    definition:
      "A servo motor works with feedback so a controller can command position, speed, or torque precisely. Industrial robots rely on servo systems to move joints accurately and respond to changing loads.",
  },
  {
    id: "stepper-motor",
    term: "Stepper Motor",
    category: "Robotics and Actuation",
    definition:
      "A stepper motor moves in controlled increments called steps. It is useful for positioning at modest cost, though it can lose position if the load exceeds its ability unless feedback is added.",
  },
  {
    id: "brushless-direct-current-motor",
    term: "Brushless Direct Current Motor",
    acronym: "BLDC Motor",
    category: "Robotics and Actuation",
    definition:
      "A BLDC motor uses electronic switching instead of mechanical brushes. It can provide efficient, reliable motion with good power for its size, which makes it common in drones, mobile robots, tools, and joint actuators.",
  },
  {
    id: "motor-controller",
    term: "Motor Controller",
    category: "Robotics and Actuation",
    definition:
      "A motor controller decides how a motor should be driven based on commands and sensor feedback. It may regulate position, speed, torque, current, and protective limits.",
  },
  {
    id: "motor-driver",
    term: "Motor Driver",
    category: "Robotics and Actuation",
    definition:
      "A motor driver is the power electronics that deliver controlled electrical current to a motor. The controller decides what should happen, while the driver converts that decision into the voltage and current the motor needs.",
  },
  {
    id: "robot-joint",
    term: "Robot Joint",
    category: "Robotics and Actuation",
    definition:
      "A robot joint connects links and allows a particular kind of movement, such as rotation or sliding. Its actuator, transmission, bearings, sensors, wiring, and controls often form one integrated module.",
  },
  {
    id: "manipulator",
    term: "Manipulator",
    category: "Robotics and Actuation",
    definition:
      "A manipulator is a robot mechanism designed to position and move objects or tools. A typical industrial robot arm is a manipulator made from linked joints with an end effector attached at the end.",
  },
  {
    id: "end-effector",
    term: "End of Arm Tooling",
    acronym: "EOAT",
    aliases: ["End effector"],
    category: "Robotics and Actuation",
    definition:
      "An end effector is the tool attached to the working end of a robot arm. It may be a gripper, welder, suction cup, camera, screwdriver, spray nozzle, or another device chosen for the task.",
  },
  {
    id: "gripper",
    term: "Gripper",
    category: "Robotics and Actuation",
    definition:
      "A gripper is an end effector that holds or moves objects. Designs may use fingers, suction, magnets, soft materials, or specialized fixtures depending on the object's shape, weight, surface, and fragility.",
  },
  {
    id: "degrees-of-freedom",
    term: "Degrees of Freedom",
    acronym: "DOF",
    category: "Robotics and Actuation",
    definition:
      "Degrees of freedom count the independent ways a mechanism can move. A simple sliding axis has one. A six axis robot arm can position and orient its tool through six controlled movements.",
  },
  {
    id: "kinematics",
    term: "Kinematics",
    category: "Robotics and Actuation",
    definition:
      "Kinematics describes motion using position, speed, and geometry without focusing on the forces that create it. It connects robot joint movements to the location and orientation of the tool.",
  },
  {
    id: "forward-kinematics",
    term: "Forward Kinematics",
    acronym: "FK",
    category: "Robotics and Actuation",
    definition:
      "Forward kinematics calculates where a robot's tool will be when its joint positions are known. It answers the question: given these joint angles, where is the end effector?",
  },
  {
    id: "inverse-kinematics",
    term: "Inverse Kinematics",
    acronym: "IK",
    category: "Robotics and Actuation",
    definition:
      "Inverse kinematics calculates which joint positions can place a robot's tool at a desired pose. There may be several answers, one answer, or no possible answer because of reach and joint limits.",
  },
  {
    id: "dynamics",
    term: "Dynamics",
    category: "Robotics and Actuation",
    definition:
      "Dynamics studies how forces, mass, and motion affect one another. Robot control uses dynamics to estimate how much torque is needed to accelerate a joint, carry a payload, or resist gravity.",
  },
  {
    id: "torque",
    term: "Torque",
    category: "Robotics and Actuation",
    definition:
      "Torque is a turning force. More torque can help a joint lift a heavier load or accelerate faster, but the useful result also depends on speed, gearing, arm length, heat, and control.",
  },
  {
    id: "payload",
    term: "Payload",
    category: "Robotics and Actuation",
    definition:
      "Payload is the weight or load a robot is designed to carry, often including the end effector. The rated maximum may only apply under certain positions, speeds, and distances from the robot's wrist.",
  },
  {
    id: "reach",
    term: "Reach",
    category: "Robotics and Actuation",
    definition:
      "Reach describes how far a robot can extend its working point from its base or body. Maximum reach does not mean every pose, payload, or orientation is possible throughout that entire space.",
  },
  {
    id: "gear-ratio",
    term: "Gear Ratio",
    category: "Robotics and Actuation",
    definition:
      "Gear ratio compares the rotation of a motor with the rotation of its output. Gearing can trade speed for greater torque, but it also affects efficiency, precision, noise, and how easily outside forces can move the joint.",
  },
  {
    id: "gearbox",
    term: "Gearbox",
    category: "Robotics and Actuation",
    definition:
      "A gearbox uses gears to change speed, torque, or direction between a motor and a load. Robot gearboxes must often provide high precision and stiffness in a small, durable package.",
  },
  {
    id: "harmonic-drive",
    term: "Harmonic Drive",
    category: "Robotics and Actuation",
    definition:
      "A harmonic drive is a compact precision gearbox that uses a flexible gear element to produce a large reduction ratio. It is common in robot joints because it offers low backlash, though it can be costly and mechanically delicate.",
  },
  {
    id: "cycloidal-drive",
    term: "Cycloidal Drive",
    category: "Robotics and Actuation",
    definition:
      "A cycloidal drive is a gearbox that uses an offset rolling motion to create high reduction in a compact form. It can handle shock loads well and is used in industrial robots and heavy motion systems.",
  },
  {
    id: "direct-drive",
    term: "Direct Drive",
    category: "Robotics and Actuation",
    definition:
      "Direct drive connects a motor to the load without a reduction gearbox. This can reduce backlash and friction, but the motor must provide enough torque directly and may be larger or more expensive.",
  },
  {
    id: "compliance",
    term: "Compliance",
    category: "Robotics and Actuation",
    definition:
      "Compliance is the ability of a mechanism or controller to yield when force is applied. A compliant robot can make contact more gently, tolerate small alignment errors, and interact more safely with uncertain objects.",
  },
  {
    id: "backdrivability",
    term: "Backdrivability",
    category: "Robotics and Actuation",
    definition:
      "Backdrivability describes how easily an outside force can move an actuator or joint backward through its transmission. A backdrivable arm can feel more natural to guide by hand, but it may need power to hold a load in place.",
  },
  {
    id: "simulation",
    term: "Simulation",
    category: "Simulation and Data",
    definition:
      "Simulation creates a virtual environment where machines, sensors, and physical events can be tested. It can reduce cost and risk, but results are only as trustworthy as the models, assumptions, and validation behind them.",
  },
  {
    id: "digital-twin",
    term: "Digital Twin",
    category: "Simulation and Data",
    definition:
      "A digital twin is a digital representation of a real asset, process, or facility that stays connected to relevant real data. Its value comes from supporting decisions, testing changes, monitoring condition, or predicting outcomes.",
  },
  {
    id: "synthetic-data",
    term: "Synthetic Data",
    category: "Simulation and Data",
    definition:
      "Synthetic data is created by software instead of collected directly from the real world. It can produce rare, dangerous, or expensive training examples, but the model still needs testing on real operating conditions.",
  },
  {
    id: "physics-engine",
    term: "Physics Engine",
    category: "Simulation and Data",
    definition:
      "A physics engine calculates how virtual objects move, collide, fall, bend, or respond to forces. Robotics simulators use it to test motion and contact before running the same behavior on physical hardware.",
  },
  {
    id: "domain-randomization",
    term: "Domain Randomization",
    category: "Simulation and Data",
    definition:
      "Domain randomization changes lighting, textures, object positions, friction, mass, and other simulated conditions during training. The goal is to prevent a model from depending too heavily on one perfect virtual environment.",
  },
  {
    id: "teleoperation",
    term: "Teleoperation",
    category: "Simulation and Data",
    definition:
      "Teleoperation means controlling a machine from a distance. It can handle tasks that are too dangerous or uncertain for full autonomy and can also collect demonstrations for training robot policies.",
  },
  {
    id: "robot-demonstration",
    term: "Robot Demonstration",
    category: "Simulation and Data",
    definition:
      "A robot demonstration is a recorded example of how a task should be performed. It may come from direct operation, remote control, motion capture, or a human physically guiding the robot.",
  },
  {
    id: "dataset",
    term: "Dataset",
    category: "Simulation and Data",
    definition:
      "A dataset is an organized collection of examples used to train, test, or study a system. For physical AI, it may contain images, video, sensor readings, actions, outcomes, failures, and information about the environment.",
  },
  {
    id: "data-annotation",
    term: "Data Annotation",
    category: "Simulation and Data",
    definition:
      "Data annotation adds useful labels to raw data. People or software might mark objects in images, identify robot actions, describe events, or flag failures so a model has clearer examples to learn from.",
  },
  {
    id: "data-pipeline",
    term: "Data Pipeline",
    category: "Simulation and Data",
    definition:
      "A data pipeline moves information through collection, storage, cleaning, labeling, training, evaluation, and deployment. Physical AI teams need reliable pipelines because field data is large, messy, and closely tied to model improvement.",
  },
  {
    id: "robot-operating-system",
    term: "Robot Operating System",
    acronym: "ROS",
    category: "Software and Connectivity",
    definition:
      "ROS is an open source collection of software tools and communication patterns for building robots. Despite the name, it is usually middleware running on an operating system rather than the operating system itself.",
  },
  {
    id: "middleware",
    term: "Middleware",
    category: "Software and Connectivity",
    definition:
      "Middleware is software that helps different programs, devices, or services communicate. In a robot, it can move camera data, motor commands, maps, and status messages between components built by different teams.",
  },
  {
    id: "ros-node",
    term: "ROS Node",
    category: "Software and Connectivity",
    definition:
      "A ROS node is a program that performs one logical job inside a ROS system. One node may read a camera, another may detect objects, and another may send movement commands.",
  },
  {
    id: "ros-topic",
    term: "ROS Topic",
    category: "Software and Connectivity",
    definition:
      "A ROS topic is a named channel for continuous streams of messages. A camera node can publish images to a topic, and any authorized node that needs those images can subscribe.",
  },
  {
    id: "application-programming-interface",
    term: "Application Programming Interface",
    acronym: "API",
    category: "Software and Connectivity",
    definition:
      "An API is a defined way for software systems to request data or functions from one another. A fleet application might use an API to assign missions, read robot status, or connect with warehouse software.",
  },
  {
    id: "edge-computing",
    term: "Edge Computing",
    category: "Software and Connectivity",
    definition:
      "Edge computing processes data near the machine, sensor, or location where it is created. This can reduce network delays and cloud traffic while allowing important functions to continue when connectivity is limited.",
  },
  {
    id: "edge-ai",
    term: "Edge AI",
    category: "Software and Connectivity",
    definition:
      "Edge AI means running AI near the source of the data, such as inside a robot, vehicle, camera, or factory computer. It can improve response time, privacy, reliability, and control over operating costs.",
  },
  {
    id: "cloud-computing",
    term: "Cloud Computing",
    category: "Software and Connectivity",
    definition:
      "Cloud computing provides shared computing, storage, and software through remote data centers. Physical AI systems often use the cloud for training, fleet analysis, updates, and heavy processing that does not need an immediate local response.",
  },
  {
    id: "on-device-ai",
    term: "On Device AI",
    category: "Software and Connectivity",
    definition:
      "On device AI runs directly on the product rather than depending on a remote server. A smart camera can detect an event locally and send only the result instead of streaming every video frame to the cloud.",
  },
  {
    id: "controller-area-network",
    term: "Controller Area Network",
    acronym: "CAN",
    aliases: ["CAN bus"],
    category: "Software and Connectivity",
    definition:
      "CAN is a durable communication network originally developed for vehicles. It lets controllers and devices exchange short messages without a central computer and is widely used in cars, robots, mobile equipment, and industrial machines.",
  },
  {
    id: "ethercat",
    term: "Ethernet for Control Automation Technology",
    acronym: "EtherCAT",
    category: "Software and Connectivity",
    definition:
      "EtherCAT is an industrial Ethernet system designed for fast, predictable communication with motors, sensors, and controllers. It is common in machines that need many devices to update with tight timing.",
  },
  {
    id: "time-sensitive-networking",
    term: "Time Sensitive Networking",
    acronym: "TSN",
    category: "Software and Connectivity",
    definition:
      "TSN is a group of Ethernet standards that make delivery timing more predictable. It helps ordinary network technology support industrial control, synchronized machines, and other applications where important data cannot arrive whenever it happens to arrive.",
  },
  {
    id: "fifth-generation-mobile-network",
    term: "Fifth Generation Mobile Network",
    acronym: "5G",
    category: "Software and Connectivity",
    definition:
      "5G is a generation of cellular networking designed for higher capacity, lower delay, and support for many connected devices. Private 5G networks can connect robots and industrial equipment across facilities where cables or WiFi are impractical.",
  },
  {
    id: "programmable-logic-controller",
    term: "Programmable Logic Controller",
    acronym: "PLC",
    category: "Industry and Safety",
    definition:
      "A PLC is a rugged industrial computer that controls machines and processes. It reads inputs, runs reliable control logic, and switches outputs. Physical AI often works alongside PLCs rather than replacing them.",
  },
  {
    id: "human-machine-interface",
    term: "Human Machine Interface",
    acronym: "HMI",
    category: "Industry and Safety",
    definition:
      "An HMI is the screen or control panel through which a person monitors and operates a machine. A good HMI shows status, alarms, settings, and actions clearly enough for an operator to respond correctly.",
  },
  {
    id: "supervisory-control-and-data-acquisition",
    term: "Supervisory Control and Data Acquisition",
    acronym: "SCADA",
    category: "Industry and Safety",
    definition:
      "SCADA software monitors and supervises equipment spread across a plant, utility, or large site. It gathers data, displays conditions, records history, and lets authorized operators send higher level commands.",
  },
  {
    id: "manufacturing-execution-system",
    term: "Manufacturing Execution System",
    acronym: "MES",
    category: "Industry and Safety",
    definition:
      "An MES tracks and coordinates production work on the factory floor. It connects schedules, materials, machines, quality records, and operators so a company can see what was made, how, and when.",
  },
  {
    id: "collaborative-robot",
    term: "Collaborative Robot",
    acronym: "Cobot",
    category: "Industry and Safety",
    definition:
      "A cobot is a robot designed for applications where people and robots may share a workspace under defined safety measures. The label does not make every task automatically safe. The complete application still requires a risk assessment.",
  },
  {
    id: "functional-safety",
    term: "Functional Safety",
    category: "Industry and Safety",
    definition:
      "Functional safety is the part of safety that depends on a control system responding correctly to dangerous conditions or failures. Examples include safely stopping motion when a guard opens or when a safety sensor detects a person.",
  },
  {
    id: "fail-safe-system",
    term: "Fail Safe System",
    category: "Industry and Safety",
    definition:
      "A fail safe system moves toward a safer condition when a fault occurs. That might mean removing motor power, applying a brake, closing a valve, or handing control to a person. The safest response depends on the machine.",
  },
  {
    id: "operational-design-domain",
    term: "Operational Design Domain",
    acronym: "ODD",
    category: "Industry and Safety",
    definition:
      "An ODD defines the conditions in which an automated system is designed to operate. It can include location, weather, lighting, speed, road type, floor condition, and the people or objects expected nearby.",
  },
  {
    id: "geofencing",
    term: "Geofencing",
    category: "Industry and Safety",
    definition:
      "Geofencing creates a virtual boundary around a real place. A drone, vehicle, or mobile robot can use that boundary to restrict where it may travel, change its behavior, or alert an operator.",
  },
  {
    id: "redundancy",
    term: "Redundancy",
    category: "Industry and Safety",
    definition:
      "Redundancy adds another component, signal, or method so one failure does not immediately remove an important function. Safety systems may compare independent sensors or controllers, but extra parts only help when failures are truly separated and detected.",
  },
  {
    id: "over-the-air-update",
    term: "Over the Air Update",
    acronym: "OTA",
    category: "Industry and Safety",
    definition:
      "An OTA update delivers software or model changes through a network instead of a physical service visit. Secure updates can improve a fleet quickly, but teams need testing, staged rollout, authentication, and a recovery plan if an update fails.",
  },
  {
    id: "telemetry",
    term: "Telemetry",
    category: "Industry and Safety",
    definition:
      "Telemetry is data sent from a machine so its condition and behavior can be monitored elsewhere. It may include location, battery level, temperatures, errors, task progress, sensor health, and performance trends.",
  },
];

const expandedGlossaryTerms: GlossaryTerm[] = [
  {
    id: "human-in-the-loop",
    term: "Human in the Loop",
    acronym: "HITL",
    category: "Foundations",
    definition:
      "Human in the loop means a person actively contributes to a system's decisions, training, or operation. A worker may approve a robot's unusual action before it proceeds.",
  },
  {
    id: "human-on-the-loop",
    term: "Human on the Loop",
    acronym: "HOTL",
    category: "Foundations",
    definition:
      "Human on the loop means the system operates by itself while a person supervises and can intervene. The human is not approving every action but remains responsible for defined exceptions.",
  },
  {
    id: "level-of-autonomy",
    term: "Level of Autonomy",
    category: "Foundations",
    definition:
      "A level of autonomy describes how much of a particular task a machine can perform without help. The level only makes sense when the task, environment, and required human role are clearly defined.",
  },
  {
    id: "automation",
    term: "Automation",
    category: "Foundations",
    definition:
      "Automation uses machines or software to perform work with less direct human effort. It may rely on fixed rules, AI, or both. A highly automated machine is not necessarily autonomous.",
  },
  {
    id: "industrial-automation",
    term: "Industrial Automation",
    category: "Foundations",
    definition:
      "Industrial automation applies control systems, machines, and software to production and industrial processes. It includes everything from fixed conveyor logic to adaptive robot cells and intelligent inspection.",
  },
  {
    id: "intelligent-machine",
    term: "Intelligent Machine",
    category: "Foundations",
    definition:
      "An intelligent machine uses sensing and computation to adapt its behavior rather than following only one fixed sequence. The term is broad and does not specify how capable or autonomous the machine is.",
  },
  {
    id: "physical-intelligence",
    term: "Physical Intelligence",
    category: "Foundations",
    definition:
      "Physical intelligence is the ability to understand and act within the constraints of the real world. It includes ideas such as balance, contact, motion, object behavior, and the consequences of an action.",
  },
  {
    id: "spatial-intelligence",
    term: "Spatial Intelligence",
    category: "Foundations",
    definition:
      "Spatial intelligence is the ability to understand positions, shapes, distances, directions, and relationships in space. Robots need it to navigate rooms, reach objects, and reason about where things can fit.",
  },
  {
    id: "situated-intelligence",
    term: "Situated Intelligence",
    category: "Foundations",
    definition:
      "Situated intelligence means intelligence shaped by the current environment, body, and task. The same action can be useful in one situation and unsafe or ineffective in another.",
  },
  {
    id: "generalization",
    term: "Generalization",
    category: "Foundations",
    definition:
      "Generalization is a system's ability to perform well on situations it did not see exactly during training. A picking model generalizes when it can handle new objects without being retrained for each one.",
  },
  {
    id: "adaptation",
    term: "Adaptation",
    category: "Foundations",
    definition:
      "Adaptation is the process of changing behavior when conditions, tasks, or equipment change. It can happen through learning, parameter adjustment, planning, or a person updating the system.",
  },
  {
    id: "emergent-behavior",
    term: "Emergent Behavior",
    category: "Foundations",
    definition:
      "Emergent behavior is an ability or pattern that appears from interactions inside a complex system without being programmed as one explicit rule. It can be useful, surprising, or difficult to predict.",
  },
  {
    id: "model-parameter",
    term: "Model Parameter",
    category: "Models and Learning",
    definition:
      "A model parameter is a number adjusted during training. Together, millions or billions of parameters store the patterns a model uses to produce predictions and actions.",
  },
  {
    id: "model-weights",
    term: "Model Weights",
    category: "Models and Learning",
    definition:
      "Model weights are the learned parameter values inside a neural network. Saving the weights preserves what the model learned so it can later run inference or continue training.",
  },
  {
    id: "token",
    term: "Token",
    category: "Models and Learning",
    definition:
      "A token is a small unit of information processed by a model. In language it may represent part of a word. In robotics, tokens can also represent images, sensor states, or actions.",
  },
  {
    id: "action-token",
    term: "Action Token",
    category: "Models and Learning",
    definition:
      "An action token is a model output that represents part of a physical command. A sequence of tokens might describe gripper state, joint movement, direction, or when a task should stop.",
  },
  {
    id: "context-window",
    term: "Context Window",
    category: "Models and Learning",
    definition:
      "A context window is the amount of information a model can consider at one time. For a robot, that context may include instructions, recent observations, previous actions, and task history.",
  },
  {
    id: "embedding",
    term: "Embedding",
    category: "Models and Learning",
    definition:
      "An embedding represents information as a list of numbers that captures useful relationships. Similar objects, words, images, or actions often receive embeddings that are close together.",
  },
  {
    id: "encoder-model",
    term: "Encoder",
    category: "Models and Learning",
    definition:
      "An encoder turns raw input into a more useful internal representation. A vision encoder may convert camera pixels into features describing objects, shapes, and spatial relationships.",
  },
  {
    id: "decoder-model",
    term: "Decoder",
    category: "Models and Learning",
    definition:
      "A decoder turns an internal model representation into an output such as text, an image, a prediction, or a sequence of robot actions.",
  },
  {
    id: "latent-space",
    term: "Latent Space",
    category: "Models and Learning",
    definition:
      "Latent space is the model's compressed internal representation of patterns in data. Nearby points may represent similar objects, scenes, motions, or concepts even when the original inputs look different.",
  },
  {
    id: "loss-function",
    term: "Loss Function",
    category: "Models and Learning",
    definition:
      "A loss function measures how far a model's output is from the desired result during training. The training process adjusts the model to reduce this value.",
  },
  {
    id: "reward-model",
    term: "Reward Model",
    category: "Models and Learning",
    definition:
      "A reward model estimates how desirable an AI output or action is. It can help guide training when quality is easier to judge than to describe with a simple formula.",
  },
  {
    id: "reinforcement-learning-from-human-feedback",
    term: "Reinforcement Learning from Human Feedback",
    acronym: "RLHF",
    category: "Models and Learning",
    definition:
      "RLHF improves a model using human preferences or evaluations. People compare outputs, and that feedback helps train the model toward behavior judged more useful or appropriate.",
  },
  {
    id: "q-learning",
    term: "Q Learning",
    category: "Models and Learning",
    definition:
      "Q learning estimates how valuable an action is in a particular state. The system learns which choices are most likely to produce a strong long term reward.",
  },
  {
    id: "actor-critic",
    term: "Actor Critic",
    category: "Models and Learning",
    definition:
      "Actor critic methods use one model to choose actions and another to judge how useful those actions are. The critic's feedback helps the actor improve its policy.",
  },
  {
    id: "model-based-reinforcement-learning",
    term: "Model Based Reinforcement Learning",
    category: "Models and Learning",
    definition:
      "Model based reinforcement learning uses an internal model to predict what may happen after an action. The agent can consider possible futures before acting in the real environment.",
  },
  {
    id: "model-free-reinforcement-learning",
    term: "Model Free Reinforcement Learning",
    category: "Models and Learning",
    definition:
      "Model free reinforcement learning learns useful behavior directly from experience without first learning an explicit model of how the environment changes.",
  },
  {
    id: "online-learning",
    term: "Online Learning",
    category: "Models and Learning",
    definition:
      "Online learning updates a model as new data arrives rather than waiting for one large training cycle. In physical systems, updates require careful controls so field data does not create unsafe behavior.",
  },
  {
    id: "continual-learning",
    term: "Continual Learning",
    category: "Models and Learning",
    definition:
      "Continual learning helps a model acquire new skills or knowledge over time while trying not to forget what it previously learned.",
  },
  {
    id: "curriculum-learning",
    term: "Curriculum Learning",
    category: "Models and Learning",
    definition:
      "Curriculum learning presents training tasks in a purposeful order, often moving from easier situations to harder ones. This can help a robot learn complex behavior more reliably.",
  },
  {
    id: "active-learning",
    term: "Active Learning",
    category: "Models and Learning",
    definition:
      "Active learning lets a model identify the examples from which it would learn the most. Human labeling effort can then focus on uncertain, rare, or especially valuable cases.",
  },
  {
    id: "federated-learning",
    term: "Federated Learning",
    category: "Models and Learning",
    definition:
      "Federated learning trains across many devices without collecting all raw data in one place. Devices share model updates, which can improve privacy but adds coordination and security challenges.",
  },
  {
    id: "model-pruning",
    term: "Pruning",
    category: "Models and Learning",
    definition:
      "Pruning removes model connections or values that contribute little to the result. A well pruned model can use less memory and computing while keeping most of its accuracy.",
  },
  {
    id: "sparsity",
    term: "Sparsity",
    category: "Models and Learning",
    definition:
      "Sparsity means many values in a model or dataset are zero or unused. Hardware and software designed for sparse work can skip unnecessary calculations and save energy.",
  },
  {
    id: "model-compression",
    term: "Model Compression",
    category: "Models and Learning",
    definition:
      "Model compression reduces the storage, memory, or compute needed by a model. Techniques include quantization, pruning, and distillation, often with some tradeoff in accuracy or flexibility.",
  },
  {
    id: "model-checkpoint",
    term: "Model Checkpoint",
    category: "Models and Learning",
    definition:
      "A model checkpoint is a saved copy of a model's learned state at a particular point in training. Teams use checkpoints to resume work, compare versions, or deploy a chosen model.",
  },
  {
    id: "training-batch",
    term: "Batch",
    category: "Models and Learning",
    definition:
      "A batch is a group of examples processed together during training or inference. Larger batches can improve hardware use but require more memory and may change learning behavior.",
  },
  {
    id: "training-epoch",
    term: "Epoch",
    category: "Models and Learning",
    definition:
      "An epoch is one complete pass through a training dataset. Models usually train for several epochs, but too many can cause them to memorize the training examples.",
  },
  {
    id: "learning-rate",
    term: "Learning Rate",
    category: "Models and Learning",
    definition:
      "The learning rate controls how much a model changes after each training step. Too high can make learning unstable, while too low can make progress painfully slow.",
  },
  {
    id: "arithmetic-logic-unit",
    term: "Arithmetic Logic Unit",
    acronym: "ALU",
    category: "Compute and Memory",
    definition:
      "An ALU is the part of a processor that performs basic arithmetic and logical operations. Large chips contain many ALUs working together on different pieces of a calculation.",
  },
  {
    id: "multiply-accumulate",
    term: "Multiply Accumulate",
    acronym: "MAC",
    category: "Compute and Memory",
    definition:
      "A MAC operation multiplies two numbers and adds the result to a running total. Neural networks perform enormous numbers of these operations, so AI chips are designed to execute them efficiently.",
  },
  {
    id: "matrix-multiplication",
    term: "Matrix Multiplication",
    category: "Compute and Memory",
    definition:
      "Matrix multiplication combines grids of numbers according to a defined rule. It is one of the main calculations behind neural networks, graphics, simulation, and many robotics algorithms.",
  },
  {
    id: "mixed-precision",
    term: "Mixed Precision",
    category: "Compute and Memory",
    definition:
      "Mixed precision uses different number formats within the same workload. Less precise formats can run faster and use less memory, while higher precision is kept where accuracy or stability needs it.",
  },
  {
    id: "int8",
    term: "Eight Bit Integer",
    acronym: "INT8",
    category: "Compute and Memory",
    definition:
      "INT8 stores numbers as eight bit integers. Many inference accelerators process INT8 quickly and efficiently, though a model must be converted and checked to make sure accuracy remains acceptable.",
  },
  {
    id: "fp16",
    term: "Sixteen Bit Floating Point",
    acronym: "FP16",
    category: "Compute and Memory",
    definition:
      "FP16 represents decimal values with sixteen bits. It uses half the storage of standard FP32 and is widely used to accelerate neural network training and inference.",
  },
  {
    id: "fp8",
    term: "Eight Bit Floating Point",
    acronym: "FP8",
    category: "Compute and Memory",
    definition:
      "FP8 is a compact floating point format used by newer AI accelerators. It can increase speed and reduce memory use, but models need careful scaling to preserve useful accuracy.",
  },
  {
    id: "compute-unified-device-architecture",
    term: "Compute Unified Device Architecture",
    acronym: "CUDA",
    category: "Compute and Memory",
    definition:
      "CUDA is NVIDIA's software platform for programming its GPUs. Many AI and robotics tools use CUDA libraries to run demanding calculations on NVIDIA hardware.",
  },
  {
    id: "radeon-open-compute",
    term: "Radeon Open Compute",
    acronym: "ROCm",
    category: "Compute and Memory",
    definition:
      "ROCm is AMD's open software platform for GPU computing. It provides tools and libraries for AI, scientific computing, and other workloads on supported AMD hardware.",
  },
  {
    id: "open-computing-language",
    term: "Open Computing Language",
    acronym: "OpenCL",
    category: "Compute and Memory",
    definition:
      "OpenCL is a standard for writing programs that can run across different processors, including CPUs, GPUs, and FPGAs. It offers portability, though support and performance vary by device.",
  },
  {
    id: "inference-engine",
    term: "Inference Engine",
    category: "Compute and Memory",
    definition:
      "An inference engine is software that loads a trained model, prepares inputs, runs the calculations, and returns outputs. It often optimizes the model for a particular processor.",
  },
  {
    id: "compiler",
    term: "Compiler",
    category: "Compute and Memory",
    definition:
      "A compiler translates code or a model into instructions a target processor can execute. AI compilers may reorganize operations so the model runs faster on a chosen accelerator.",
  },
  {
    id: "runtime",
    term: "Runtime",
    category: "Compute and Memory",
    definition:
      "A runtime is the software environment that manages a program while it is executing. It can handle memory, device communication, scheduling, and access to processor specific functions.",
  },
  {
    id: "memory-controller",
    term: "Memory Controller",
    category: "Compute and Memory",
    definition:
      "A memory controller manages how a processor reads from and writes to memory. Its design affects usable bandwidth, delay, reliability, and how several processing units share data.",
  },
  {
    id: "direct-memory-access",
    term: "Direct Memory Access",
    acronym: "DMA",
    category: "Compute and Memory",
    definition:
      "DMA lets hardware move data to or from memory without making the CPU handle every step. This frees the CPU and helps cameras, networks, and accelerators transfer data efficiently.",
  },
  {
    id: "nvlink",
    term: "NVLink",
    category: "Compute and Memory",
    definition:
      "NVLink is NVIDIA's high speed connection for moving data between supported GPUs, CPUs, and systems. It can provide more direct bandwidth than standard peripheral connections for large AI workloads.",
  },
  {
    id: "infiniband",
    term: "InfiniBand",
    category: "Compute and Memory",
    definition:
      "InfiniBand is a high speed network used in supercomputers and large AI clusters. It is designed to move data between servers with high bandwidth and low delay.",
  },
  {
    id: "thermal-throttling",
    term: "Thermal Throttling",
    category: "Compute and Memory",
    definition:
      "Thermal throttling reduces processor speed when temperature becomes too high. It protects hardware but can cause a robot or edge system to perform more slowly during sustained workloads.",
  },
  {
    id: "heat-sink",
    term: "Heat Sink",
    category: "Compute and Memory",
    definition:
      "A heat sink draws heat away from a chip and spreads it over a larger surface. Air or liquid then carries that heat away so the processor can operate safely.",
  },
  {
    id: "silicon-interposer",
    term: "Silicon Interposer",
    category: "Compute and Memory",
    definition:
      "A silicon interposer is a thin layer that provides dense electrical connections between chips in one package. It is commonly used to place HBM close to a GPU or accelerator.",
  },
  {
    id: "monocular-camera",
    term: "Monocular Camera",
    category: "Sensors and Perception",
    definition:
      "A monocular camera is a single camera viewing a scene from one position. It captures appearance well, while distance must be inferred from motion, known size, AI, or another sensor.",
  },
  {
    id: "time-of-flight-sensor",
    term: "Time of Flight Sensor",
    acronym: "ToF Sensor",
    category: "Sensors and Perception",
    definition:
      "A time of flight sensor measures distance by timing how long emitted light or sound takes to return. Many depth cameras use infrared light for this measurement.",
  },
  {
    id: "structured-light",
    term: "Structured Light",
    category: "Sensors and Perception",
    definition:
      "Structured light projects a known pattern onto a scene and measures how the pattern bends across surfaces. That distortion can be converted into a three dimensional shape.",
  },
  {
    id: "rgbd-camera",
    term: "Red Green Blue Depth Camera",
    acronym: "RGBD Camera",
    category: "Sensors and Perception",
    definition:
      "An RGBD camera provides color images and depth measurements together. Robots use the combined data to recognize an object and estimate where its surfaces are in space.",
  },
  {
    id: "fisheye-camera",
    term: "Fisheye Camera",
    category: "Sensors and Perception",
    definition:
      "A fisheye camera uses a very wide angle lens to capture more of the surroundings. The image appears curved, so software must account for distortion when measuring geometry.",
  },
  {
    id: "global-shutter",
    term: "Global Shutter",
    category: "Sensors and Perception",
    definition:
      "A global shutter exposes all image pixels at the same time. It helps preserve the shape of fast moving objects and is useful for robotics, inspection, and machine vision.",
  },
  {
    id: "rolling-shutter",
    term: "Rolling Shutter",
    category: "Sensors and Perception",
    definition:
      "A rolling shutter records different image rows at slightly different times. It can reduce camera cost, but rapid motion may make straight objects appear bent or stretched.",
  },
  {
    id: "frame-rate",
    term: "Frame Rate",
    acronym: "FPS",
    category: "Sensors and Perception",
    definition:
      "Frame rate measures how many images a camera captures each second. More frames can track fast motion better, but they also create more data to move and process.",
  },
  {
    id: "image-resolution",
    term: "Image Resolution",
    category: "Sensors and Perception",
    definition:
      "Image resolution describes the number of pixels in an image. Higher resolution can reveal smaller details, but it increases storage, bandwidth, and processing demands.",
  },
  {
    id: "field-of-view",
    term: "Field of View",
    acronym: "FOV",
    category: "Sensors and Perception",
    definition:
      "Field of view is the area a sensor can observe, usually expressed as an angle. A wide view sees more surroundings while a narrow view can provide more detail at distance.",
  },
  {
    id: "dynamic-range",
    term: "Dynamic Range",
    category: "Sensors and Perception",
    definition:
      "Dynamic range is the span between the darkest and brightest signals a sensor can capture usefully. High dynamic range helps a camera see detail in shadows and bright areas together.",
  },
  {
    id: "sensor-calibration",
    term: "Sensor Calibration",
    category: "Sensors and Perception",
    definition:
      "Sensor calibration measures and corrects how a sensor differs from the real value or expected geometry. Poor calibration can make accurate hardware produce misleading results.",
  },
  {
    id: "intrinsic-parameters",
    term: "Intrinsic Parameters",
    category: "Sensors and Perception",
    definition:
      "Intrinsic parameters describe a camera's internal geometry, including focal length, image center, and lens distortion. They are needed to turn pixels into useful measurements.",
  },
  {
    id: "extrinsic-parameters",
    term: "Extrinsic Parameters",
    category: "Sensors and Perception",
    definition:
      "Extrinsic parameters describe a sensor's position and orientation relative to another sensor or coordinate frame. They let a robot combine measurements from different viewpoints.",
  },
  {
    id: "sensor-noise",
    term: "Sensor Noise",
    category: "Sensors and Perception",
    definition:
      "Sensor noise is unwanted variation in a measurement. It can come from electronics, heat, vibration, lighting, interference, or the limits of the sensing method.",
  },
  {
    id: "microphone",
    term: "Microphone",
    category: "Sensors and Perception",
    definition:
      "A microphone converts sound into an electrical signal. Robots can use microphones for speech, alarms, equipment monitoring, impact detection, and awareness of nearby activity.",
  },
  {
    id: "microphone-array",
    term: "Microphone Array",
    category: "Sensors and Perception",
    definition:
      "A microphone array combines several microphones to estimate where sound comes from, focus on a speaker, or reduce unwanted noise.",
  },
  {
    id: "acoustic-sensing",
    term: "Acoustic Sensing",
    category: "Sensors and Perception",
    definition:
      "Acoustic sensing uses sound to detect events, condition, distance, or location. Changes in a machine's sound can reveal wear before a visible failure appears.",
  },
  {
    id: "wheel-odometry",
    term: "Wheel Odometry",
    category: "Sensors and Perception",
    definition:
      "Wheel odometry estimates movement from wheel rotation. It is simple and useful, but errors grow when wheels slip, skid, or travel over uneven surfaces.",
  },
  {
    id: "hall-effect-sensor",
    term: "Hall Effect Sensor",
    category: "Sensors and Perception",
    definition:
      "A Hall effect sensor detects magnetic fields. It can measure motor position, wheel speed, electrical current, or whether a magnet attached to a moving part is nearby.",
  },
  {
    id: "current-sensor",
    term: "Current Sensor",
    category: "Sensors and Perception",
    definition:
      "A current sensor measures the electrical current flowing through a circuit. Motor current can help estimate load, detect jams, and monitor energy use.",
  },
  {
    id: "temperature-sensor",
    term: "Temperature Sensor",
    category: "Sensors and Perception",
    definition:
      "A temperature sensor measures heat in a component or environment. Robots use these readings to protect motors, batteries, processors, and power electronics.",
  },
  {
    id: "pressure-sensor",
    term: "Pressure Sensor",
    category: "Sensors and Perception",
    definition:
      "A pressure sensor measures force spread over an area. It is used in pneumatic and hydraulic systems, process equipment, tactile surfaces, and fluid handling.",
  },
  {
    id: "strain-gauge",
    term: "Strain Gauge",
    category: "Sensors and Perception",
    definition:
      "A strain gauge measures tiny changes in a material as it stretches or compresses. Load cells and force sensors often use strain gauges to measure applied force.",
  },
  {
    id: "photodiode",
    term: "Photodiode",
    category: "Sensors and Perception",
    definition:
      "A photodiode converts light into electrical current. It is a basic sensing element inside cameras, optical encoders, safety scanners, and many distance sensors.",
  },
  {
    id: "kalman-filter",
    term: "Kalman Filter",
    category: "Navigation and Control",
    definition:
      "A Kalman filter combines noisy measurements with a model to estimate a changing state. It is widely used to track position, speed, and orientation from several sensors.",
  },
  {
    id: "extended-kalman-filter",
    term: "Extended Kalman Filter",
    acronym: "EKF",
    category: "Navigation and Control",
    definition:
      "An EKF adapts the Kalman filter for systems whose motion or measurements are not purely linear. Robots commonly use it to combine odometry, IMU, and positioning data.",
  },
  {
    id: "particle-filter",
    term: "Particle Filter",
    category: "Navigation and Control",
    definition:
      "A particle filter tracks many possible estimates of a system's state and gives more weight to those that match new measurements. It is useful when uncertainty has several possible answers.",
  },
  {
    id: "dead-reckoning",
    term: "Dead Reckoning",
    category: "Navigation and Control",
    definition:
      "Dead reckoning estimates a new position from a known starting point and measured movement. Small errors accumulate over time, so another reference is usually needed for correction.",
  },
  {
    id: "waypoint",
    term: "Waypoint",
    category: "Navigation and Control",
    definition:
      "A waypoint is a location a robot, drone, or vehicle is instructed to reach. A mission may connect several waypoints while local control handles the exact movement.",
  },
  {
    id: "route-planning",
    term: "Route Planning",
    category: "Navigation and Control",
    definition:
      "Route planning chooses a broader path through a road network, facility, or delivery area. It may consider distance, traffic, restrictions, energy, and task priority.",
  },
  {
    id: "global-planner",
    term: "Global Planner",
    category: "Navigation and Control",
    definition:
      "A global planner chooses an overall route using a map and a distant goal. It usually works with a local planner that reacts to nearby changes.",
  },
  {
    id: "local-planner",
    term: "Local Planner",
    category: "Navigation and Control",
    definition:
      "A local planner selects short term motion using current sensor data. It avoids people and new obstacles while trying to stay aligned with the global route.",
  },
  {
    id: "costmap",
    term: "Costmap",
    category: "Navigation and Control",
    definition:
      "A costmap assigns a travel cost to areas around a robot. Obstacles receive very high cost, while narrow, uncertain, or undesirable areas can receive smaller penalties.",
  },
  {
    id: "navigation-stack",
    term: "Navigation Stack",
    category: "Navigation and Control",
    definition:
      "A navigation stack is the collection of software that handles localization, maps, planning, obstacle avoidance, and motion commands for a mobile machine.",
  },
  {
    id: "loop-closure",
    term: "Loop Closure",
    category: "Navigation and Control",
    definition:
      "Loop closure happens when a mapping system recognizes a place it visited before. That recognition helps correct accumulated position error and align the map.",
  },
  {
    id: "map-matching",
    term: "Map Matching",
    category: "Navigation and Control",
    definition:
      "Map matching aligns an estimated position or observed features with a known map. It can keep a vehicle on the correct road or a robot aligned with a facility layout.",
  },
  {
    id: "geolocation",
    term: "Geolocation",
    category: "Navigation and Control",
    definition:
      "Geolocation determines where a device or observation is located on Earth or within a known area. It can use satellites, networks, maps, visual landmarks, or several methods together.",
  },
  {
    id: "sensor-registration",
    term: "Sensor Registration",
    category: "Navigation and Control",
    definition:
      "Sensor registration aligns data from different sensors into the same space and time. Without it, a camera object and a LiDAR point may appear to be in different places.",
  },
  {
    id: "force-control",
    term: "Force Control",
    category: "Navigation and Control",
    definition:
      "Force control regulates how strongly a robot pushes or pulls instead of controlling only position. It is important for polishing, assembly, testing, and delicate handling.",
  },
  {
    id: "position-control",
    term: "Position Control",
    category: "Navigation and Control",
    definition:
      "Position control commands a mechanism to reach and hold a target location or angle. Feedback measures the actual position so the controller can correct error.",
  },
  {
    id: "velocity-control",
    term: "Velocity Control",
    category: "Navigation and Control",
    definition:
      "Velocity control regulates how fast a motor, wheel, or joint moves. It is commonly used inside larger systems that plan position and motion.",
  },
  {
    id: "torque-control",
    term: "Torque Control",
    category: "Navigation and Control",
    definition:
      "Torque control regulates the turning force produced by a motor. It allows more natural contact behavior and precise force management in robot joints.",
  },
  {
    id: "impedance-control",
    term: "Impedance Control",
    category: "Navigation and Control",
    definition:
      "Impedance control makes a robot behave like a chosen combination of spring, mass, and damping. It controls how the machine responds when the environment pushes back.",
  },
  {
    id: "admittance-control",
    term: "Admittance Control",
    category: "Navigation and Control",
    definition:
      "Admittance control measures an outside force and commands motion in response. A person can push on the robot, and the controller moves it according to the chosen behavior.",
  },
  {
    id: "feedforward-control",
    term: "Feedforward Control",
    category: "Navigation and Control",
    definition:
      "Feedforward control predicts the command needed before an error appears. It often works with feedback control, which then corrects anything the prediction missed.",
  },
  {
    id: "control-loop-frequency",
    term: "Control Loop Frequency",
    category: "Navigation and Control",
    definition:
      "Control loop frequency is how often a controller reads feedback and updates its command. Faster loops can respond sooner but require dependable sensors, communication, and computing.",
  },
  {
    id: "setpoint",
    term: "Setpoint",
    category: "Navigation and Control",
    definition:
      "A setpoint is the desired value a controller tries to maintain, such as a speed, position, temperature, pressure, or force.",
  },
  {
    id: "error-signal",
    term: "Error Signal",
    category: "Navigation and Control",
    definition:
      "An error signal is the difference between the desired value and the measured value. Controllers use that difference to decide how strongly to correct the system.",
  },
  {
    id: "control-gain",
    term: "Control Gain",
    category: "Navigation and Control",
    definition:
      "A control gain determines how strongly a controller responds to an input or error. Poor gain settings can make a system slow, unstable, noisy, or prone to overshoot.",
  },
  {
    id: "stability",
    term: "Stability",
    category: "Navigation and Control",
    definition:
      "Stability means a controlled system remains bounded and returns toward expected behavior after a disturbance. An unstable controller can make motion grow into dangerous oscillation.",
  },
  {
    id: "damping",
    term: "Damping",
    category: "Navigation and Control",
    definition:
      "Damping reduces oscillation and motion over time. Physical materials, mechanical components, and control software can all add damping to a robot.",
  },
  {
    id: "overshoot",
    term: "Overshoot",
    category: "Navigation and Control",
    definition:
      "Overshoot occurs when a system moves past its target before settling. Too much overshoot can reduce precision, spill material, or create unsafe contact.",
  },
  {
    id: "settling-time",
    term: "Settling Time",
    category: "Navigation and Control",
    definition:
      "Settling time is how long a system takes to reach and remain near its target after a command or disturbance.",
  },
  {
    id: "deterministic-computing",
    term: "Deterministic Computing",
    category: "Navigation and Control",
    definition:
      "Deterministic computing produces results within predictable timing limits. In control systems, dependable timing can matter more than the fastest average performance.",
  },
  {
    id: "mobile-robot",
    term: "Mobile Robot",
    category: "Robotics and Actuation",
    definition:
      "A mobile robot moves through an environment instead of remaining fixed in one place. It may use wheels, tracks, legs, flight, or another form of locomotion.",
  },
  {
    id: "autonomous-mobile-robot",
    term: "Autonomous Mobile Robot",
    acronym: "AMR",
    category: "Robotics and Actuation",
    definition:
      "An AMR uses sensors, maps, and planning to navigate with limited human control. Unlike a machine following one fixed path, it can usually reroute around changes.",
  },
  {
    id: "automated-guided-vehicle",
    term: "Automated Guided Vehicle",
    acronym: "AGV",
    category: "Robotics and Actuation",
    definition:
      "An AGV transports material along defined routes using markers, wires, reflectors, or mapped paths. It is often highly reliable in structured facilities but less flexible than an AMR.",
  },
  {
    id: "humanoid-robot",
    term: "Humanoid Robot",
    category: "Robotics and Actuation",
    definition:
      "A humanoid robot has a body arranged around humanlike features such as a torso, arms, hands, or legs. The form can help it use spaces and tools designed for people.",
  },
  {
    id: "uncrewed-aerial-vehicle",
    term: "Uncrewed Aerial Vehicle",
    acronym: "UAV",
    aliases: ["Drone"],
    category: "Robotics and Actuation",
    definition:
      "A UAV is an aircraft operated without a pilot onboard. It may be remotely controlled, partly autonomous, or highly autonomous depending on the mission and regulations.",
  },
  {
    id: "uncrewed-ground-vehicle",
    term: "Uncrewed Ground Vehicle",
    acronym: "UGV",
    category: "Robotics and Actuation",
    definition:
      "A UGV is a ground machine operated without a person onboard. Examples include inspection rovers, defense vehicles, farm machines, and robots used in dangerous sites.",
  },
  {
    id: "robot-arm",
    term: "Robot Arm",
    category: "Robotics and Actuation",
    definition:
      "A robot arm is a linked mechanism that positions a tool or object. Its joints, reach, payload, accuracy, and end effector determine which tasks it can perform.",
  },
  {
    id: "cartesian-robot",
    term: "Cartesian Robot",
    category: "Robotics and Actuation",
    definition:
      "A Cartesian robot moves along straight axes, usually arranged as X, Y, and Z. It is simple to program and common in gantries, printers, and material handling.",
  },
  {
    id: "selective-compliance-assembly-robot-arm",
    term: "Selective Compliance Assembly Robot Arm",
    acronym: "SCARA",
    category: "Robotics and Actuation",
    definition:
      "A SCARA robot moves quickly in a horizontal plane while remaining stiff vertically. It is widely used for assembly, insertion, packaging, and moving small parts.",
  },
  {
    id: "delta-robot",
    term: "Delta Robot",
    category: "Robotics and Actuation",
    definition:
      "A delta robot uses several lightweight arms connected to one platform. Its low moving mass supports very fast picking and packaging of light products.",
  },
  {
    id: "gantry-robot",
    term: "Gantry Robot",
    category: "Robotics and Actuation",
    definition:
      "A gantry robot moves a tool along rails mounted over or beside a work area. It can cover a large rectangular workspace and carry loads with strong support.",
  },
  {
    id: "legged-robot",
    term: "Legged Robot",
    category: "Robotics and Actuation",
    definition:
      "A legged robot walks using two or more legs. Legs can cross stairs and rough ground but require complex balance, control, power, and mechanical design.",
  },
  {
    id: "quadruped-robot",
    term: "Quadruped Robot",
    category: "Robotics and Actuation",
    definition:
      "A quadruped robot walks on four legs. The form provides a useful balance between stability and mobility for inspection, research, public safety, and rough terrain.",
  },
  {
    id: "wheeled-robot",
    term: "Wheeled Robot",
    category: "Robotics and Actuation",
    definition:
      "A wheeled robot moves efficiently on suitable surfaces. Wheels simplify mechanics and energy use, but stairs, gaps, loose terrain, and large obstacles can limit access.",
  },
  {
    id: "omnidirectional-drive",
    term: "Omnidirectional Drive",
    category: "Robotics and Actuation",
    definition:
      "An omnidirectional drive lets a mobile robot move sideways as well as forward, backward, and around. Special wheel arrangements make this possible on relatively smooth floors.",
  },
  {
    id: "differential-drive",
    term: "Differential Drive",
    category: "Robotics and Actuation",
    definition:
      "Differential drive uses separately controlled wheels on opposite sides. Changing their relative speeds lets the robot move straight, curve, or rotate in place.",
  },
  {
    id: "mobile-manipulator",
    term: "Mobile Manipulator",
    category: "Robotics and Actuation",
    definition:
      "A mobile manipulator combines a moving base with a robot arm. It can travel between work areas and physically interact with objects at each location.",
  },
  {
    id: "soft-robotics",
    term: "Soft Robotics",
    category: "Robotics and Actuation",
    definition:
      "Soft robotics uses flexible materials and compliant structures rather than only rigid links. Soft systems can conform to delicate or irregular objects but may be harder to model precisely.",
  },
  {
    id: "continuum-robot",
    term: "Continuum Robot",
    category: "Robotics and Actuation",
    definition:
      "A continuum robot bends smoothly along its body instead of moving through a few rigid joints. It can reach through narrow or curved spaces in medicine and inspection.",
  },
  {
    id: "series-elastic-actuator",
    term: "Series Elastic Actuator",
    acronym: "SEA",
    category: "Robotics and Actuation",
    definition:
      "A series elastic actuator places a spring between the motor and the load. The spring helps measure force, absorb impacts, and create safer contact behavior.",
  },
  {
    id: "quasi-direct-drive",
    term: "Quasi Direct Drive",
    acronym: "QDD",
    category: "Robotics and Actuation",
    definition:
      "A quasi direct drive actuator combines a high torque motor with modest gearing. It aims for strong output while keeping friction, backlash, and resistance to outside motion relatively low.",
  },
  {
    id: "linear-motor",
    term: "Linear Motor",
    category: "Robotics and Actuation",
    definition:
      "A linear motor produces straight motion directly from electromagnetic force. It can move quickly and precisely without a screw or belt converting rotary motion.",
  },
  {
    id: "solenoid",
    term: "Solenoid",
    category: "Robotics and Actuation",
    definition:
      "A solenoid uses an electromagnetic coil to create short linear movement. It is common in locks, latches, valves, and simple switching mechanisms.",
  },
  {
    id: "control-valve",
    term: "Valve",
    category: "Robotics and Actuation",
    definition:
      "A valve controls the direction, pressure, or flow of air or liquid. Hydraulic and pneumatic machines use valves to command actuators and manage force.",
  },
  {
    id: "bearing",
    term: "Bearing",
    category: "Robotics and Actuation",
    definition:
      "A bearing supports a moving shaft or joint while reducing friction. Its size, load rating, precision, and sealing affect the life and accuracy of a robot.",
  },
  {
    id: "backlash",
    term: "Backlash",
    category: "Robotics and Actuation",
    definition:
      "Backlash is unwanted free movement between mechanical parts when direction changes. In a robot gearbox, backlash can reduce positioning accuracy and create vibration.",
  },
  {
    id: "mechanical-stiffness",
    term: "Stiffness",
    category: "Robotics and Actuation",
    definition:
      "Stiffness describes how strongly a structure resists deformation under load. A stiff robot holds position well, while deliberate flexibility may improve safe contact.",
  },
  {
    id: "repeatability",
    term: "Repeatability",
    category: "Robotics and Actuation",
    definition:
      "Repeatability measures how consistently a robot returns to the same position under the same conditions. A robot can be highly repeatable even if that position is slightly offset from the commanded one.",
  },
  {
    id: "robot-accuracy",
    term: "Accuracy",
    category: "Robotics and Actuation",
    definition:
      "Accuracy measures how close a robot reaches the commanded position. It is different from repeatability, which measures how consistently it reaches the same position.",
  },
  {
    id: "robot-workspace",
    term: "Workspace",
    category: "Robotics and Actuation",
    definition:
      "A robot's workspace is the full region its tool can reach. Joint limits, collisions, tool orientation, payload, and the surrounding equipment reduce the practically usable area.",
  },
  {
    id: "robotics-simulator",
    term: "Robotics Simulator",
    category: "Simulation and Data",
    definition:
      "A robotics simulator provides a virtual place to develop and test robot software, sensors, motion, and environments before using physical equipment.",
  },
  {
    id: "hardware-in-the-loop",
    term: "Hardware in the Loop",
    acronym: "HIL",
    category: "Simulation and Data",
    definition:
      "Hardware in the loop testing connects real controllers or components to a simulated machine or environment. It tests actual hardware without requiring the complete physical system.",
  },
  {
    id: "software-in-the-loop",
    term: "Software in the Loop",
    acronym: "SIL",
    category: "Simulation and Data",
    definition:
      "Software in the loop testing runs production software against simulated hardware and environments. It helps find logic problems early and supports repeatable automated tests.",
  },
  {
    id: "virtual-commissioning",
    term: "Virtual Commissioning",
    category: "Simulation and Data",
    definition:
      "Virtual commissioning tests machine controls and production logic against a digital model before installation. It can reduce startup time and reveal integration problems earlier.",
  },
  {
    id: "system-identification",
    term: "System Identification",
    category: "Simulation and Data",
    definition:
      "System identification builds a mathematical model from measured input and output data. Engineers use it when a physical system is too complex or uncertain to model from theory alone.",
  },
  {
    id: "data-augmentation",
    term: "Data Augmentation",
    category: "Simulation and Data",
    definition:
      "Data augmentation creates varied training examples by changing existing data. Images may be cropped, brightened, rotated, or blurred so a model becomes less sensitive to small differences.",
  },
  {
    id: "data-generation",
    term: "Data Generation",
    category: "Simulation and Data",
    definition:
      "Data generation is the process of creating or collecting examples for development and testing. Sources can include real machines, simulation, people, automated tools, and controlled experiments.",
  },
  {
    id: "ground-truth",
    term: "Ground Truth",
    category: "Simulation and Data",
    definition:
      "Ground truth is the best available reference for what actually happened or what the correct label should be. It is used to train and evaluate models.",
  },
  {
    id: "training-set",
    term: "Training Set",
    category: "Simulation and Data",
    definition:
      "A training set is the portion of a dataset used to adjust a model's parameters. It should represent the situations the model needs to learn.",
  },
  {
    id: "validation-set",
    term: "Validation Set",
    category: "Simulation and Data",
    definition:
      "A validation set is separate data used during development to compare models and choose settings without judging them on the final test set.",
  },
  {
    id: "test-set",
    term: "Test Set",
    category: "Simulation and Data",
    definition:
      "A test set is held back until evaluation so it can provide a fairer measure of performance on unseen examples.",
  },
  {
    id: "data-split",
    term: "Data Split",
    category: "Simulation and Data",
    definition:
      "A data split divides examples into training, validation, and test groups. Poor splitting can accidentally place nearly identical examples in several groups and exaggerate performance.",
  },
  {
    id: "data-quality",
    term: "Data Quality",
    category: "Simulation and Data",
    definition:
      "Data quality describes whether data is accurate, complete, consistent, timely, and useful for its purpose. More data does not help when the measurements or labels are unreliable.",
  },
  {
    id: "data-provenance",
    term: "Data Provenance",
    category: "Simulation and Data",
    definition:
      "Data provenance records where data came from, how it was collected, and what changed along the way. It supports debugging, trust, licensing, and repeatable model development.",
  },
  {
    id: "data-governance",
    term: "Data Governance",
    category: "Simulation and Data",
    definition:
      "Data governance defines who may collect, access, change, retain, and use data. Physical AI programs need it because machines can capture sensitive operational and human information.",
  },
  {
    id: "time-series-data",
    term: "Time Series Data",
    category: "Simulation and Data",
    definition:
      "Time series data is a sequence of measurements ordered by time. Motor current, vibration, temperature, position, and production rate are common industrial examples.",
  },
  {
    id: "telemetry-log",
    term: "Telemetry Log",
    category: "Simulation and Data",
    definition:
      "A telemetry log is a recorded history of machine status and events. Teams use logs to reproduce failures, compare performance, and understand what happened before an incident.",
  },
  {
    id: "data-lake",
    term: "Data Lake",
    category: "Simulation and Data",
    definition:
      "A data lake stores large amounts of raw or lightly processed data for later use. Robot fleets may send sensor recordings, events, and logs into a shared lake.",
  },
  {
    id: "data-warehouse",
    term: "Data Warehouse",
    category: "Simulation and Data",
    definition:
      "A data warehouse organizes cleaned business and operational data for reporting and analysis. It is usually more structured than a data lake.",
  },
  {
    id: "edge-data",
    term: "Edge Data",
    category: "Simulation and Data",
    definition:
      "Edge data is information created or stored near machines and sensors. Teams must decide what to process locally, what to retain, and what is valuable enough to send elsewhere.",
  },
  {
    id: "digital-thread",
    term: "Digital Thread",
    category: "Simulation and Data",
    definition:
      "A digital thread connects information across the life of a product or asset, from design and manufacturing through operation, service, and retirement.",
  },
  {
    id: "simulation-scenario",
    term: "Scenario",
    category: "Simulation and Data",
    definition:
      "A scenario is a defined situation used to train or test a system. It specifies relevant actors, conditions, events, and expected outcomes.",
  },
  {
    id: "scenario-generation",
    term: "Scenario Generation",
    category: "Simulation and Data",
    definition:
      "Scenario generation creates varied situations for simulation or testing. Good generators include normal work, rare events, difficult combinations, and realistic failure conditions.",
  },
  {
    id: "synthetic-environment",
    term: "Synthetic Environment",
    category: "Simulation and Data",
    definition:
      "A synthetic environment is a digitally created world used for training, testing, or visualization. It may represent a factory, road, warehouse, home, or outdoor site.",
  },
  {
    id: "photorealistic-rendering",
    term: "Photorealistic Rendering",
    category: "Simulation and Data",
    definition:
      "Photorealistic rendering creates images intended to resemble real camera output. Realistic appearance can help vision training, but visual realism alone does not guarantee accurate physics.",
  },
  {
    id: "ray-tracing",
    term: "Ray Tracing",
    category: "Simulation and Data",
    definition:
      "Ray tracing simulates how light travels and interacts with surfaces. It can produce realistic images and model sensors whose behavior depends on reflection and visibility.",
  },
  {
    id: "collision-detection",
    term: "Collision Detection",
    category: "Simulation and Data",
    definition:
      "Collision detection determines whether virtual or physical shapes touch or intersect. Planners and simulators use it to prevent or model contact.",
  },
  {
    id: "rigid-body-simulation",
    term: "Rigid Body Simulation",
    category: "Simulation and Data",
    definition:
      "Rigid body simulation models objects that move and collide without changing shape. It works well for many robot links, tools, boxes, and machine parts.",
  },
  {
    id: "soft-body-simulation",
    term: "Soft Body Simulation",
    category: "Simulation and Data",
    definition:
      "Soft body simulation models objects that bend, stretch, or deform. It is useful for cloth, cables, food, soft grippers, and flexible materials.",
  },
  {
    id: "contact-model",
    term: "Contact Model",
    category: "Simulation and Data",
    definition:
      "A contact model describes what happens when simulated objects touch, including friction, impact, sliding, and deformation. Small modeling errors can strongly affect manipulation results.",
  },
  {
    id: "ros-2",
    term: "Robot Operating System 2",
    acronym: "ROS 2",
    category: "Software and Connectivity",
    definition:
      "ROS 2 is the newer generation of ROS designed for modern robotics, distributed systems, security options, and more dependable communication across different computers.",
  },
  {
    id: "ros-service",
    term: "ROS Service",
    category: "Software and Connectivity",
    definition:
      "A ROS service handles a short request and response. One node asks for a calculation or state, and another returns the result.",
  },
  {
    id: "ros-action",
    term: "ROS Action",
    category: "Software and Connectivity",
    definition:
      "A ROS action manages a longer task that provides progress and can be canceled. Driving to a waypoint is a typical action because it takes time and may need interruption.",
  },
  {
    id: "ros-bag",
    term: "ROS Bag",
    category: "Software and Connectivity",
    definition:
      "A ROS bag records messages from a ROS system for later playback and analysis. It helps reproduce field conditions without needing the robot present.",
  },
  {
    id: "data-distribution-service",
    term: "Data Distribution Service",
    acronym: "DDS",
    category: "Software and Connectivity",
    definition:
      "DDS is a communication standard for distributing data between programs and devices. ROS 2 commonly uses DDS implementations beneath its messaging layer.",
  },
  {
    id: "message-queuing-telemetry-transport",
    term: "Message Queuing Telemetry Transport",
    acronym: "MQTT",
    category: "Software and Connectivity",
    definition:
      "MQTT is a lightweight messaging protocol built around publishers, subscribers, and a broker. It is widely used to move device and sensor data across unreliable or limited networks.",
  },
  {
    id: "open-platform-communications-unified-architecture",
    term: "Open Platform Communications Unified Architecture",
    acronym: "OPC UA",
    category: "Software and Connectivity",
    definition:
      "OPC UA is an industrial communication standard for sharing structured machine data securely across vendors and systems. It helps connect equipment, control software, and business applications.",
  },
  {
    id: "modbus",
    term: "Modbus",
    category: "Software and Connectivity",
    definition:
      "Modbus is a long established industrial protocol for reading and writing device data. It is simple and common, though modern security usually must be added around it.",
  },
  {
    id: "profinet",
    term: "PROFINET",
    category: "Software and Connectivity",
    definition:
      "PROFINET is an industrial Ethernet system used to connect controllers, drives, sensors, and other automation equipment with different timing requirements.",
  },
  {
    id: "ethernet-ip",
    term: "EtherNet IP",
    category: "Software and Connectivity",
    definition:
      "EtherNet IP is an industrial network that carries the Common Industrial Protocol over standard Ethernet technology. It connects controllers, machines, drives, and safety devices.",
  },
  {
    id: "wifi",
    term: "Wireless Fidelity",
    acronym: "WiFi",
    category: "Software and Connectivity",
    definition:
      "WiFi connects devices over local wireless networks. It is convenient for robots and sensors, but coverage, interference, roaming, congestion, and security affect industrial reliability.",
  },
  {
    id: "bluetooth-low-energy",
    term: "Bluetooth Low Energy",
    acronym: "BLE",
    category: "Software and Connectivity",
    definition:
      "BLE is a short range wireless technology designed for low power devices. It is common in beacons, wearables, sensors, setup tools, and nearby device communication.",
  },
  {
    id: "private-5g",
    term: "Private 5G",
    category: "Software and Connectivity",
    definition:
      "Private 5G is a cellular network dedicated to one organization or site. It can provide managed coverage and device control for factories, ports, campuses, and mobile machines.",
  },
  {
    id: "network-topology",
    term: "Network Topology",
    category: "Software and Connectivity",
    definition:
      "Network topology describes how devices and connections are arranged. The structure affects performance, resilience, troubleshooting, and what happens when a link fails.",
  },
  {
    id: "communication-protocol",
    term: "Protocol",
    category: "Software and Connectivity",
    definition:
      "A protocol is a shared set of rules for formatting and exchanging information. Devices can only communicate successfully when they agree on the relevant protocol.",
  },
  {
    id: "network-bandwidth",
    term: "Network Bandwidth",
    category: "Software and Connectivity",
    definition:
      "Network bandwidth is the amount of data a connection can carry over time. Video and point clouds need far more bandwidth than simple status messages.",
  },
  {
    id: "packet-loss",
    term: "Packet Loss",
    category: "Software and Connectivity",
    definition:
      "Packet loss occurs when transmitted pieces of data never reach their destination. A system may recover, reduce quality, delay action, or fail depending on the application.",
  },
  {
    id: "quality-of-service",
    term: "Quality of Service",
    acronym: "QoS",
    category: "Software and Connectivity",
    definition:
      "Quality of service settings control how communication handles priority, reliability, delay, history, and delivery. They help a system treat safety data differently from optional telemetry.",
  },
  {
    id: "publish-subscribe",
    term: "Publish Subscribe",
    acronym: "Pub Sub",
    category: "Software and Connectivity",
    definition:
      "Publish subscribe communication lets senders publish messages to a named channel while interested receivers subscribe. The participants do not need direct knowledge of one another.",
  },
  {
    id: "message-broker",
    term: "Message Broker",
    category: "Software and Connectivity",
    definition:
      "A message broker receives, routes, and sometimes stores messages between applications or devices. It helps separate data producers from the systems that consume their data.",
  },
  {
    id: "edge-gateway",
    term: "Edge Gateway",
    category: "Software and Connectivity",
    definition:
      "An edge gateway connects local machines and sensors with wider networks or cloud systems. It may translate protocols, filter data, run applications, and enforce security.",
  },
  {
    id: "fleet-management-system",
    term: "Fleet Management System",
    acronym: "FMS",
    category: "Software and Connectivity",
    definition:
      "A fleet management system coordinates many robots or vehicles. It assigns work, tracks status, manages traffic, monitors health, and connects the fleet with business operations.",
  },
  {
    id: "device-management",
    term: "Device Management",
    category: "Software and Connectivity",
    definition:
      "Device management tracks, configures, secures, and updates connected machines. It becomes essential when an organization operates hundreds or thousands of edge devices.",
  },
  {
    id: "containerization",
    term: "Containerization",
    category: "Software and Connectivity",
    definition:
      "Containerization packages an application with the software it needs so it runs more consistently across computers. Edge deployments use containers to separate services and simplify updates.",
  },
  {
    id: "software-development-kit",
    term: "Software Development Kit",
    acronym: "SDK",
    category: "Software and Connectivity",
    definition:
      "An SDK is a collection of code, tools, examples, and documentation for building applications on a platform, device, or service.",
  },
  {
    id: "firmware",
    term: "Firmware",
    category: "Software and Connectivity",
    definition:
      "Firmware is low level software stored on a device that controls its basic hardware behavior. Motors, sensors, batteries, cameras, and controllers often have their own firmware.",
  },
  {
    id: "interoperability",
    term: "Interoperability",
    category: "Software and Connectivity",
    definition:
      "Interoperability is the ability of different products and systems to exchange information and work together. Shared standards help, but useful integration still depends on compatible meanings and behavior.",
  },
  {
    id: "machine-tending",
    term: "Machine Tending",
    category: "Industry and Safety",
    definition:
      "Machine tending uses a robot to load, unload, or support equipment such as machine tools, presses, and test stations. The complete task includes doors, fixtures, parts, and process signals.",
  },
  {
    id: "pick-and-place",
    term: "Pick and Place",
    category: "Industry and Safety",
    definition:
      "Pick and place means taking an item from one location and placing it in another. Success depends on perception, grasping, motion, cycle time, and handling mistakes.",
  },
  {
    id: "palletizing",
    term: "Palletizing",
    category: "Industry and Safety",
    definition:
      "Palletizing stacks cases, bags, or products onto a pallet according to a planned pattern. Robots can reduce repetitive lifting and adapt patterns when product data is available.",
  },
  {
    id: "depalletizing",
    term: "Depalletizing",
    category: "Industry and Safety",
    definition:
      "Depalletizing removes items from a pallet. Mixed loads, damaged packaging, uncertain positions, and hidden objects make it harder than stacking a known pattern.",
  },
  {
    id: "assembly-automation",
    term: "Assembly Automation",
    category: "Industry and Safety",
    definition:
      "Assembly automation joins parts using machines, robots, fixtures, tools, and controls. AI can help when part position, appearance, or process conditions vary.",
  },
  {
    id: "quality-inspection",
    term: "Quality Inspection",
    category: "Industry and Safety",
    definition:
      "Quality inspection checks whether a product or process meets defined requirements. Sensors and AI can find patterns, but acceptance rules and measurement evidence still need clear engineering ownership.",
  },
  {
    id: "predictive-maintenance",
    term: "Predictive Maintenance",
    category: "Industry and Safety",
    definition:
      "Predictive maintenance uses condition data to estimate when equipment may need service. The goal is to act before failure without replacing healthy parts too early.",
  },
  {
    id: "condition-monitoring",
    term: "Condition Monitoring",
    category: "Industry and Safety",
    definition:
      "Condition monitoring tracks signals such as vibration, heat, current, pressure, and sound to understand equipment health and identify meaningful changes.",
  },
  {
    id: "overall-equipment-effectiveness",
    term: "Overall Equipment Effectiveness",
    acronym: "OEE",
    category: "Industry and Safety",
    definition:
      "OEE combines availability, performance, and quality into one manufacturing measure. It helps identify whether losses come from downtime, slower operation, or defective output.",
  },
  {
    id: "cycle-time",
    term: "Cycle Time",
    category: "Industry and Safety",
    definition:
      "Cycle time is the time required to complete one unit, operation, or repeated sequence. A faster robot does not improve total cycle time if another process remains the bottleneck.",
  },
  {
    id: "takt-time",
    term: "Takt Time",
    category: "Industry and Safety",
    definition:
      "Takt time is the production pace needed to meet customer demand with the available working time. It provides a target rhythm for balancing work.",
  },
  {
    id: "downtime",
    term: "Downtime",
    category: "Industry and Safety",
    definition:
      "Downtime is time when equipment or a process is unavailable for expected production. Planned maintenance and unexpected failures should be tracked separately.",
  },
  {
    id: "changeover",
    term: "Changeover",
    category: "Industry and Safety",
    definition:
      "Changeover is the work needed to switch a process from one product, format, tool, or recipe to another. Flexible automation aims to reduce this time and effort.",
  },
  {
    id: "brownfield-deployment",
    term: "Brownfield Deployment",
    category: "Industry and Safety",
    definition:
      "A brownfield deployment adds technology to an existing facility or process. The new system must work with installed equipment, limited space, old interfaces, and ongoing production.",
  },
  {
    id: "greenfield-deployment",
    term: "Greenfield Deployment",
    category: "Industry and Safety",
    definition:
      "A greenfield deployment begins with a new facility or system. Designers have more freedom, but they must make important assumptions before real operating data exists.",
  },
  {
    id: "systems-integrator",
    term: "Systems Integrator",
    category: "Industry and Safety",
    definition:
      "A systems integrator combines equipment, software, controls, safety, and workflows into a working solution. Integration quality often determines whether promising technology delivers useful production.",
  },
  {
    id: "commissioning",
    term: "Commissioning",
    category: "Industry and Safety",
    definition:
      "Commissioning is the process of testing, adjusting, and proving that an installed system works as intended. It includes equipment, software, safety, operators, and real production conditions.",
  },
  {
    id: "system-validation",
    term: "Validation",
    category: "Industry and Safety",
    definition:
      "Validation confirms that a system satisfies the real user need and intended use. Verification asks whether it was built to specification. Validation asks whether the right system was built.",
  },
  {
    id: "acceptance-testing",
    term: "Acceptance Testing",
    category: "Industry and Safety",
    definition:
      "Acceptance testing checks a delivered system against agreed requirements before the customer formally accepts it. Clear tests reduce arguments about what success means.",
  },
  {
    id: "factory-acceptance-test",
    term: "Factory Acceptance Test",
    acronym: "FAT",
    category: "Industry and Safety",
    definition:
      "A FAT tests equipment at the supplier's facility before shipment. It can confirm major functions early, but it cannot reproduce every condition at the final site.",
  },
  {
    id: "site-acceptance-test",
    term: "Site Acceptance Test",
    acronym: "SAT",
    category: "Industry and Safety",
    definition:
      "A SAT tests equipment after installation at the operating site. It confirms connections, utilities, safety, interfaces, and performance in the real environment.",
  },
  {
    id: "risk-assessment",
    term: "Risk Assessment",
    category: "Industry and Safety",
    definition:
      "A risk assessment identifies hazards, estimates likelihood and severity, and chooses measures to reduce risk. It must consider the complete application, not only the robot.",
  },
  {
    id: "hazard",
    term: "Hazard",
    category: "Industry and Safety",
    definition:
      "A hazard is a source or situation with the potential to cause harm. Motion, heat, electricity, pressure, sharp tools, falling loads, and incorrect decisions can all be hazards.",
  },
  {
    id: "hazard-analysis",
    term: "Hazard Analysis",
    category: "Industry and Safety",
    definition:
      "Hazard analysis systematically examines how harm could occur. It looks at normal work, faults, maintenance, foreseeable misuse, unusual environments, and interactions between components.",
  },
  {
    id: "safety-integrity-level",
    term: "Safety Integrity Level",
    acronym: "SIL",
    anchor: "safety-integrity-level",
    category: "Industry and Safety",
    definition:
      "SIL is a functional safety measure describing the required risk reduction and reliability of a safety function under specific standards. A higher level requires stronger evidence and engineering controls.",
  },
  {
    id: "performance-level",
    term: "Performance Level",
    acronym: "PL",
    category: "Industry and Safety",
    definition:
      "Performance Level expresses the ability of a safety related control function to reduce risk. Categories run from lower to higher reliability and depend on architecture, diagnostics, and component reliability.",
  },
  {
    id: "safety-plc",
    term: "Safety Programmable Logic Controller",
    acronym: "Safety PLC",
    category: "Industry and Safety",
    definition:
      "A safety PLC is designed and certified to perform safety functions with monitored, fault tolerant behavior. It may manage emergency stops, guards, scanners, and safe motion.",
  },
  {
    id: "safety-scanner",
    term: "Safety Laser Scanner",
    category: "Industry and Safety",
    definition:
      "A safety laser scanner monitors a defined area and triggers a protective response when a person or object enters. Its placement and configured zones are part of the safety design.",
  },
  {
    id: "light-curtain",
    term: "Light Curtain",
    category: "Industry and Safety",
    definition:
      "A light curtain creates an invisible field of beams across an opening. Breaking the field can command machinery to stop or prevent hazardous motion from starting.",
  },
  {
    id: "emergency-stop",
    term: "Emergency Stop",
    acronym: "E Stop",
    category: "Industry and Safety",
    definition:
      "An emergency stop is a manually operated control intended to stop a hazardous situation quickly. It supports other safeguards and is not a substitute for proper guarding.",
  },
  {
    id: "safe-torque-off",
    term: "Safe Torque Off",
    acronym: "STO",
    category: "Industry and Safety",
    definition:
      "Safe torque off prevents a motor drive from producing torque through a safety rated function. Stored energy, gravity, and other hazards may still require additional measures.",
  },
  {
    id: "speed-and-separation-monitoring",
    term: "Speed and Separation Monitoring",
    acronym: "SSM",
    category: "Industry and Safety",
    definition:
      "SSM adjusts or stops robot motion based on the measured distance between people and the hazardous system. Safe sensing and stopping performance are essential.",
  },
  {
    id: "power-and-force-limiting",
    term: "Power and Force Limiting",
    acronym: "PFL",
    category: "Industry and Safety",
    definition:
      "PFL limits robot power, force, pressure, and motion so contact remains within defined safety limits. The complete tool, payload, speed, and body region must be evaluated.",
  },
  {
    id: "safety-rated-monitored-stop",
    term: "Safety Rated Monitored Stop",
    acronym: "SRMS",
    category: "Industry and Safety",
    definition:
      "A safety rated monitored stop brings robot motion to a stop and monitors that condition while a person is in the shared workspace.",
  },
  {
    id: "fault-tolerance",
    term: "Fault Tolerance",
    category: "Industry and Safety",
    definition:
      "Fault tolerance is the ability to continue an important function when part of a system fails. The allowed behavior and duration must be clearly defined.",
  },
  {
    id: "fault-detection",
    term: "Fault Detection",
    category: "Industry and Safety",
    definition:
      "Fault detection identifies when equipment, software, or a sensor is no longer behaving as expected. Early detection supports safe response and faster repair.",
  },
  {
    id: "diagnostics",
    term: "Diagnostics",
    category: "Industry and Safety",
    definition:
      "Diagnostics are the tests and information used to identify the cause of a problem. Good diagnostics turn a vague robot failure into an actionable repair.",
  },
  {
    id: "cybersecurity",
    term: "Cybersecurity",
    category: "Industry and Safety",
    definition:
      "Cybersecurity protects systems, networks, software, and data from unauthorized access or harmful change. In physical AI, a digital attack can create physical consequences.",
  },
  {
    id: "zero-trust",
    term: "Zero Trust",
    category: "Industry and Safety",
    definition:
      "Zero trust is a security approach that does not automatically trust a user or device because of its location. Access is verified, limited, monitored, and reviewed continuously.",
  },
  {
    id: "return-on-investment",
    term: "Return on Investment",
    acronym: "ROI",
    category: "Industry and Safety",
    definition:
      "ROI compares the financial benefit of an investment with its cost. A physical AI calculation should include integration, downtime, service, labor changes, risk, and actual utilization.",
  },
  {
    id: "total-cost-of-ownership",
    term: "Total Cost of Ownership",
    acronym: "TCO",
    category: "Industry and Safety",
    definition:
      "TCO includes purchase price plus integration, infrastructure, software, energy, maintenance, support, training, downtime, and disposal over the useful life of a system.",
  },
  {
    id: "payback-period",
    term: "Payback Period",
    category: "Industry and Safety",
    definition:
      "Payback period estimates how long it takes for accumulated savings or profit to recover the initial investment. It is simple but does not capture every risk or later benefit.",
  },
];

export const glossaryTerms: GlossaryTerm[] = [
  ...originalGlossaryTerms,
  ...expandedGlossaryTerms,
];

export const glossaryLastReviewed = "September 25, 2026";
