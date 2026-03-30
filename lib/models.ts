export type ModelType = "Language" | "Vision" | "Speech" | "Multimodal";
export type ModelLicensing = "Open Source" | "Commercial API";
export type ModelDeployment = "Edge-ready" | "Cloud-first" | "Hybrid";

export type ModelData = {
  slug: string;
  name: string;
  modelType: ModelType;
  licensing: ModelLicensing;
  deployment: ModelDeployment;
  summary: string;
  bestFor: string[];
  industries: string[];
  edgeFit: string;
  blackScarabPov: string;
  officialUrl: string;
};

export const models: ModelData[] = [
  {
    slug: "llama-3-1-8b",
    name: "Llama 3.1 8B",
    modelType: "Language",
    licensing: "Open Source",
    deployment: "Edge-ready",
    summary:
      "A compact general-purpose language model that can support local assistants, summarization, and workflow copilots on edge-capable hardware.",
    bestFor: [
      "On-premise assistants",
      "Private text processing",
      "Workflow guidance and summarization",
    ],
    industries: ["Manufacturing", "Healthcare", "Retail"],
    edgeFit:
      "A strong fit for local inference when privacy, offline resilience, or latency matter more than frontier-scale reasoning.",
    blackScarabPov:
      "This is one of the most practical starting points for organizations that want useful language capabilities without making the whole system dependent on external APIs.",
    officialUrl: "https://www.llama.com/",
  },
  {
    slug: "gemma-3-4b",
    name: "Gemma 3 4B",
    modelType: "Language",
    licensing: "Open Source",
    deployment: "Edge-ready",
    summary:
      "A lightweight language model suitable for constrained edge systems, compact copilots, and local automation flows.",
    bestFor: [
      "Small-footprint text applications",
      "Embedded assistants",
      "Fast local inference",
    ],
    industries: ["Retail", "Transportation & Logistics", "Other"],
    edgeFit:
      "Good when hardware budgets are modest and the main goal is reliable local language capability rather than maximum model depth.",
    blackScarabPov:
      "This kind of model matters when the hardware constraint is real. It can unlock usable AI on devices where larger models are impractical.",
    officialUrl: "https://ai.google.dev/gemma",
  },
  {
    slug: "qwen-2-5-7b-instruct",
    name: "Qwen 2.5 7B Instruct",
    modelType: "Language",
    licensing: "Open Source",
    deployment: "Edge-ready",
    summary:
      "A versatile instruction-tuned model for multilingual workflows, operations copilots, and structured reasoning tasks.",
    bestFor: [
      "Multilingual operations",
      "Instruction-following workflows",
      "Structured enterprise assistants",
    ],
    industries: ["Manufacturing", "Transportation & Logistics", "Retail"],
    edgeFit:
      "Well suited when teams need broad utility and multilingual support without relying entirely on cloud-hosted APIs.",
    blackScarabPov:
      "This is attractive for LatAm-facing deployments because it helps bridge language flexibility with practical local deployment options.",
    officialUrl: "https://qwenlm.github.io/",
  },
  {
    slug: "whisper",
    name: "Whisper",
    modelType: "Speech",
    licensing: "Open Source",
    deployment: "Hybrid",
    summary:
      "A speech recognition model for transcription, voice interfaces, and operational audio workflows.",
    bestFor: [
      "Speech-to-text pipelines",
      "Voice notes and field reporting",
      "Call or interview transcription",
    ],
    industries: ["Healthcare", "Transportation & Logistics", "Retail"],
    edgeFit:
      "Useful in hybrid setups where some speech processing can happen locally and heavier batch jobs can move to stronger infrastructure when needed.",
    blackScarabPov:
      "Speech is often underestimated in operational systems. Whisper becomes especially valuable when paired with field workflows that generate voice notes or operator reports.",
    officialUrl: "https://github.com/openai/whisper",
  },
  {
    slug: "yolov8",
    name: "YOLOv8",
    modelType: "Vision",
    licensing: "Open Source",
    deployment: "Edge-ready",
    summary:
      "A real-time computer vision model family used for detection, tracking, and scene awareness in operational environments.",
    bestFor: [
      "Object detection",
      "Real-time video analytics",
      "Monitoring and event detection",
    ],
    industries: ["Agriculture", "Manufacturing", "Retail"],
    edgeFit:
      "A natural fit for Jetson-class and industrial vision deployments where local video inference is central to the business case.",
    blackScarabPov:
      "This is one of the clearest examples of a model family that becomes more valuable when paired with the right camera, compute, and deployment discipline.",
    officialUrl: "https://www.ultralytics.com/yolov8",
  },
  {
    slug: "rt-detr",
    name: "RT-DETR",
    modelType: "Vision",
    licensing: "Open Source",
    deployment: "Hybrid",
    summary:
      "A modern detection architecture built for high-quality vision tasks where precision and strong object understanding matter.",
    bestFor: [
      "Higher-precision detection",
      "Structured visual monitoring",
      "Modern vision pipelines",
    ],
    industries: ["Manufacturing", "Healthcare", "Retail"],
    edgeFit:
      "Often better suited to stronger edge hardware or hybrid deployments where visual quality matters enough to justify extra compute.",
    blackScarabPov:
      "This is useful when the business problem needs better perception quality than lightweight real-time models alone can provide.",
    officialUrl: "https://github.com/lyuwenyu/RT-DETR",
  },
  {
    slug: "gpt-4o-mini",
    name: "GPT-4o mini",
    modelType: "Multimodal",
    licensing: "Commercial API",
    deployment: "Cloud-first",
    summary:
      "A compact hosted multimodal model for text, image understanding, and workflow automation through an API-based architecture.",
    bestFor: [
      "Cloud copilots",
      "Multimodal workflow orchestration",
      "Fast API-driven integrations",
    ],
    industries: ["Healthcare", "Retail", "Other"],
    edgeFit:
      "Best treated as a cloud layer rather than a local one. It works well when the deployment can tolerate external API dependence.",
    blackScarabPov:
      "A good fit when the business needs quick iteration and broad model capability, but we would not treat it as the primary brain for low-connectivity field systems.",
    officialUrl: "https://openai.com/",
  },
  {
    slug: "claude-3-5-haiku",
    name: "Claude 3.5 Haiku",
    modelType: "Language",
    licensing: "Commercial API",
    deployment: "Cloud-first",
    summary:
      "A hosted fast-response model for structured writing, summarization, customer workflows, and operational copilots.",
    bestFor: [
      "Fast text processing",
      "Operational copilots",
      "Customer and support workflows",
    ],
    industries: ["Retail", "Healthcare", "Other"],
    edgeFit:
      "Best for cloud-connected systems where speed and API simplicity matter more than offline resilience.",
    blackScarabPov:
      "This works well as a layer above operational systems, but it should complement edge infrastructure rather than replace it in field-critical environments.",
    officialUrl: "https://www.anthropic.com/",
  },
];

export const modelTypes: ModelType[] = [
  "Language",
  "Vision",
  "Speech",
  "Multimodal",
];

export const modelLicensing: ModelLicensing[] = [
  "Open Source",
  "Commercial API",
];

export const modelDeployments: ModelDeployment[] = [
  "Edge-ready",
  "Cloud-first",
  "Hybrid",
];
