export type IndustryCard = {
  title: string;
  description: string;
  detail: string;
  href: string;
};

export type IndustryDevice = {
  name: string;
  description: string;
  deploymentRole: string;
};

export type IndustryScenario = {
  title: string;
  description: string;
};

export type IndustryCaseStudy = {
  title: string;
  summary: string;
  impact: string;
  href?: string;
};

export type IndustryData = {
  key: string;
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  solutionTitle: string;
  solutionDescription: string;
  cta: string;
  cards: IndustryCard[];
  overview: string;
  challenges: string[];
  devices: IndustryDevice[];
  scenarios: IndustryScenario[];
  caseStudies: IndustryCaseStudy[];
  relatedInsightTitle: string;
  relatedInsightHref: string;
  relatedInsightCtaLabel?: string;
};

export const industries: IndustryData[] = [
  {
    key: "agriculture",
    slug: "agriculture",
    label: "Agriculture",
    eyebrow: "Featured System",
    title: "Agriculture Technology",
    subtitle: "Optimize your farming operations with modular AI infrastructure.",
    image: "/agriculture-hero.jpg",
    imageAlt: "Agriculture technology system",
    solutionTitle: "Precision Farming System",
    solutionDescription:
      "Advanced drone, AI computer, and smart sensors for crop monitoring, environmental analysis, and intelligent field operations.",
    cta: "Design My System",
    cards: [
      {
        title: "DJI Mavic 3M",
        description: "Multispectral aerial intelligence for crop monitoring and field analysis.",
        detail: "Aerial",
        href: "/catalog/dji-mavic-3m",
      },
      {
        title: "NVIDIA Jetson Orin NX",
        description: "Compact edge compute for on-site inference in agricultural deployments.",
        detail: "Compute",
        href: "/catalog/nvidia-jetson-orin-nx",
      },
      {
        title: "Soil Sensor Network",
        description: "Continuous soil and environmental telemetry for precision agriculture.",
        detail: "Sensors",
        href: "/catalog/soil-sensor-network",
      },
    ],
    overview:
      "Black Scarab designs edge AI agriculture systems that connect drones, sensors, and on-site compute into a single decision-ready platform for modern field operations.",
    challenges: [
      "Limited connectivity across remote fields can break cloud-dependent workflows.",
      "Manual crop monitoring creates slow feedback loops and inconsistent field visibility.",
      "Environmental data often exists in silos, making intervention timing harder.",
    ],
    devices: [
      {
        name: "Field Vision Drone",
        description: "Autonomous aerial monitoring for crop health, irrigation, and mapping.",
        deploymentRole: "Mobile data capture at the edge",
      },
      {
        name: "Edge Compute Core",
        description: "On-site inference node for image analysis and sensor fusion.",
        deploymentRole: "Local processing without cloud dependency",
      },
      {
        name: "Environmental Sensor Network",
        description: "Distributed sensors for soil, climate, and operational signals.",
        deploymentRole: "Continuous field telemetry",
      },
    ],
    scenarios: [
      {
        title: "Crop Stress Detection",
        description:
          "Analyze field imagery locally to identify anomalies before they become large-scale yield issues.",
      },
      {
        title: "Irrigation Intelligence",
        description:
          "Combine moisture and environmental signals to support more targeted watering decisions.",
      },
    ],
    caseStudies: [
      {
        title:
          "Case Study #1 — The $20-per-Acre Advantage: How Edge AI Solved Agriculture's Chemical Waste Problem",
        summary:
          "A real-world look at how John Deere's See & Spray platform used onboard edge AI to cut herbicide use nearly in half in connectivity-limited farm environments.",
        impact:
          "Per-acre savings, lower chemical waste, and a strong proof point for offline-first agriculture systems.",
        href: "/insights/case-study-agriculture-chemical-waste",
      },
    ],
    relatedInsightTitle:
      "Case Study #1 — The $20-per-Acre Advantage: How Edge AI Solved Agriculture's Chemical Waste Problem",
    relatedInsightHref: "/insights/case-study-agriculture-chemical-waste",
    relatedInsightCtaLabel: "Read Case Study",
  },
  {
    key: "logistics",
    slug: "transportation-logistics",
    label: "Transportation & Logistics",
    eyebrow: "Featured System",
    title: "Transportation & Logistics",
    subtitle:
      "Improve fleet responsiveness with localized intelligence at the edge.",
    image: "/logistics-hero.jpg",
    imageAlt: "Transportation and logistics edge AI illustration",
    solutionTitle: "Reflexive Fleet System",
    solutionDescription:
      "Edge AI systems for routing visibility, fleet monitoring, and real-time decision support across logistics networks.",
    cta: "Design My Logistics Stack",
    cards: [
      {
        title: "Dell Edge Gateway 5200",
        description: "Industrial edge gateway for telemetry, device integration, and local processing.",
        detail: "Compute",
        href: "/catalog/dell-edge-gateway-5200",
      },
      {
        title: "Starlink Terminal",
        description: "Satellite backhaul for remote routes and distributed logistics sites.",
        detail: "Connectivity",
        href: "/catalog/starlink-terminal",
      },
      {
        title: "Cradlepoint 5G Router",
        description: "Resilient WAN connectivity for mobile and branch logistics systems.",
        detail: "Connectivity",
        href: "/catalog/cradlepoint-5g-router",
      },
    ],
    overview:
      "Black Scarab builds transportation systems that bring intelligence directly into vehicles, depots, and logistics corridors, reducing reliance on delayed central processing.",
    challenges: [
      "Distributed operations create blind spots across vehicles, yards, and handoff points.",
      "Cloud-only analytics can be too slow for route, safety, and response decisions.",
      "Operational teams need a clearer live picture of what is happening across the network.",
    ],
    devices: [
      {
        name: "Vehicle Edge Processor",
        description: "Local compute for route intelligence, safety alerts, and event analysis.",
        deploymentRole: "In-vehicle inference and telemetry",
      },
      {
        name: "Logistics Vision Sensor",
        description: "Roadside or depot camera systems for movement and anomaly detection.",
        deploymentRole: "Operational visibility",
      },
      {
        name: "Fleet Intelligence Hub",
        description: "Aggregates local insights into a single operational view.",
        deploymentRole: "Cross-network coordination",
      },
    ],
    scenarios: [
      {
        title: "Depot Throughput Monitoring",
        description:
          "Track congestion, idle time, and handoff bottlenecks across logistics facilities.",
      },
      {
        title: "Route Event Detection",
        description:
          "Analyze on-vehicle signals to surface incidents and improve dispatch decisions faster.",
      },
    ],
    caseStudies: [
      {
        title:
          "Case Study #5: FedEx's Smart Sorting Hubs – Edge AI for High-Velocity Logistics",
        summary:
          "A real-world look at how FedEx used edge AI, robotics, and high-speed scanning to increase throughput and reduce latency on the sorting floor.",
        impact:
          "Higher throughput, fewer bottlenecks, and stronger real-time decision-making across large logistics hubs.",
        href: "/insights/case-study-logistics-smart-sorting-hubs",
      },
    ],
    relatedInsightTitle:
      "Case Study #5: FedEx's Smart Sorting Hubs – Edge AI for High-Velocity Logistics",
    relatedInsightHref: "/insights/case-study-logistics-smart-sorting-hubs",
    relatedInsightCtaLabel: "Read Case Study",
  },
  {
    key: "manufacturing",
    slug: "manufacturing",
    label: "Manufacturing",
    eyebrow: "Featured System",
    title: "Manufacturing Intelligence",
    subtitle:
      "Bring edge AI directly onto the factory floor for faster operational insight.",
    image: "/manufacturing-hero.jpg",
    imageAlt: "Manufacturing edge AI system",
    solutionTitle: "Autonomous Factory Stack",
    solutionDescription:
      "Machine vision, edge compute, and industrial monitoring systems built for nearshoring-era factories across LatAm.",
    cta: "Design My Factory Stack",
    cards: [
      {
        title: "Basler ace Camera",
        description: "Industrial machine vision for quality inspection and production monitoring.",
        detail: "Vision",
        href: "/catalog/basler-ace-camera",
      },
      {
        title: "NVIDIA Jetson AGX Orin",
        description: "High-throughput embedded AI compute for demanding factory workloads.",
        detail: "Compute",
        href: "/catalog/nvidia-jetson-agx-orin",
      },
      {
        title: "Intel RealSense D455",
        description: "Depth sensing for spatial analytics, robotics, and workstation awareness.",
        detail: "Vision",
        href: "/catalog/intel-realsense-d455",
      },
    ],
    overview:
      "Black Scarab helps manufacturers deploy AI where operations actually happen: on production lines, inspection stations, and factory networks with real-time constraints.",
    challenges: [
      "Factories need sub-second visibility, not delayed cloud reporting.",
      "Quality control and throughput issues can compound quickly without local analytics.",
      "Nearshoring increases pressure to modernize without interrupting line operations.",
    ],
    devices: [
      {
        name: "Machine Vision Unit",
        description: "Camera-based inspection for defects, counts, and process anomalies.",
        deploymentRole: "Local quality control",
      },
      {
        name: "Industrial AI Node",
        description: "Compute infrastructure integrated near the line.",
        deploymentRole: "Factory-floor inference",
      },
      {
        name: "Production Analytics Layer",
        description: "Operational insights for supervisors and plant managers.",
        deploymentRole: "Actionable production visibility",
      },
    ],
    scenarios: [
      {
        title: "Visual Quality Assurance",
        description:
          "Run model-based inspections on the line to catch defects before packaging or shipment.",
      },
      {
        title: "Line Utilization Monitoring",
        description:
          "Track stoppages, throughput, and idle intervals to expose hidden production losses.",
      },
    ],
    caseStudies: [
      {
        title:
          "Case Study #2 — The Zero-Defect Advantage: How Edge AI Revolutionized Automotive Quality Control",
        summary:
          "A real-world look at how Audi's automated weld spot inspection used localized edge compute to achieve 100% quality transparency.",
        impact:
          "100% inspection coverage, a 95% reduction in manual ultrasound testing, and stronger control over rework costs.",
        href: "/insights/case-study-manufacturing-zero-defect-advantage",
      },
    ],
    relatedInsightTitle:
      "Case Study #2 — The Zero-Defect Advantage: How Edge AI Revolutionized Automotive Quality Control",
    relatedInsightHref: "/insights/case-study-manufacturing-zero-defect-advantage",
    relatedInsightCtaLabel: "Read Case Study",
  },
  {
    key: "healthcare",
    slug: "healthcare",
    label: "Healthcare",
    eyebrow: "Featured System",
    title: "Decentralized Healthcare Systems",
    subtitle:
      "Push intelligence closer to care with portable, edge-powered medical systems.",
    image: "/healthcare-hero.jpg",
    imageAlt: "Healthcare edge AI system",
    solutionTitle: "Mobile Diagnostics Platform",
    solutionDescription:
      "Edge AI for handheld diagnostics, rural monitoring, and decentralized care delivery where connectivity is limited.",
    cta: "Design My Healthcare System",
    cards: [
      {
        title: "NVIDIA Jetson AGX Orin",
        description: "Embedded AI platform for portable diagnostics and advanced local inference.",
        detail: "Compute",
        href: "/catalog/nvidia-jetson-agx-orin",
      },
      {
        title: "Bosch Environmental Sensor Suite",
        description: "Low-power sensor context for room conditions and distributed monitoring.",
        detail: "Sensors",
        href: "/catalog/bosch-environmental-sensor-suite",
      },
      {
        title: "FLIR Boson Thermal",
        description: "Specialized thermal sensing for safety, screening, and low-visibility environments.",
        detail: "Vision",
        href: "/catalog/flir-boson-thermal",
      },
    ],
    overview:
      "Black Scarab supports healthcare teams with edge systems designed for mobility, local processing, and care environments where bandwidth and infrastructure can vary widely.",
    challenges: [
      "Rural and decentralized care settings often cannot rely on always-on connectivity.",
      "Medical devices generate valuable signals that are underused when analytics stay centralized.",
      "Speed of insight matters when care happens away from large hospitals.",
    ],
    devices: [
      {
        name: "Portable Diagnostic Node",
        description: "Compact inference device for field and clinic diagnostics.",
        deploymentRole: "Care-close analysis",
      },
      {
        name: "Remote Monitoring Sensors",
        description: "Continuous local data capture for patient signals.",
        deploymentRole: "Edge patient monitoring",
      },
      {
        name: "Clinical Coordination Console",
        description: "Aggregates distributed care insights for follow-up and triage.",
        deploymentRole: "Operational care visibility",
      },
    ],
    scenarios: [
      {
        title: "Rural Diagnostic Support",
        description:
          "Bring model-assisted diagnostics closer to remote care environments without depending on fast internet.",
      },
      {
        title: "Distributed Patient Monitoring",
        description:
          "Collect and interpret continuous signals locally before escalating important changes.",
      },
    ],
    caseStudies: [
      {
        title: "Life-Saving Reflex Concept Deployment",
        summary:
          "A healthcare operator explored decentralized edge diagnostics to reduce the distance between medical expertise and point-of-care decisions.",
        impact: "Stronger potential access to care in lower-connectivity environments.",
      },
    ],
    relatedInsightTitle:
      "The Life-Saving Reflex: Edge AI & Decentralized Healthcare in LatAm",
    relatedInsightHref:
      "https://www.linkedin.com/pulse/life-saving-reflex-edge-ai-decentralized-healthcare-latam-5ggce/?trackingId=y%2BRddqMXGj2DCeZSlxT5bg%3D%3D",
  },
  {
    key: "retail",
    slug: "retail",
    label: "Retail",
    eyebrow: "Featured System",
    title: "Responsive Retail Infrastructure",
    subtitle:
      "Make physical storefronts smarter with localized intelligence and faster operational feedback.",
    image: "/retail-hero.jpg",
    imageAlt: "Retail edge AI system",
    solutionTitle: "Responsive Storefront Platform",
    solutionDescription:
      "Edge AI for occupancy awareness, storefront intelligence, and real-time retail operations across distributed locations.",
    cta: "Design My Retail Stack",
    cards: [
      {
        title: "Intel RealSense D455",
        description: "Depth-aware vision for occupancy, movement, and in-store analytics.",
        detail: "Vision",
        href: "/catalog/intel-realsense-d455",
      },
      {
        title: "Bosch Environmental Sensor Suite",
        description: "Sensor context for climate, motion, and store operating conditions.",
        detail: "Sensors",
        href: "/catalog/bosch-environmental-sensor-suite",
      },
      {
        title: "Cradlepoint 5G Router",
        description: "Reliable connectivity for distributed storefront systems and branch deployments.",
        detail: "Connectivity",
        href: "/catalog/cradlepoint-5g-router",
      },
    ],
    overview:
      "Black Scarab helps retailers instrument physical spaces with local AI systems that improve awareness, speed decision-making, and modernize in-store operations.",
    challenges: [
      "Retail teams need faster visibility into what is happening at store level.",
      "Storefront analytics lose value when data is delayed or disconnected from operations.",
      "Multi-location retailers need consistency without building fragile custom systems for every site.",
    ],
    devices: [
      {
        name: "Storefront Vision System",
        description: "Computer vision for occupancy, flow, and in-store event awareness.",
        deploymentRole: "Local storefront intelligence",
      },
      {
        name: "Retail Sensor Grid",
        description: "Distributed sensor layer for operational and environmental context.",
        deploymentRole: "Continuous store telemetry",
      },
      {
        name: "Multi-Site Ops Console",
        description: "Rolls local insights into a centralized operations view.",
        deploymentRole: "Cross-store coordination",
      },
    ],
    scenarios: [
      {
        title: "Store Traffic Awareness",
        description:
          "Measure occupancy patterns and customer flow with local analytics that support staffing and layout decisions.",
      },
      {
        title: "Distributed Retail Monitoring",
        description:
          "Track what is happening across multiple sites without waiting on delayed central reporting.",
      },
    ],
    caseStudies: [
      {
        title:
          "Case Study #4: Walmart's Intelligent Retail Lab – Edge AI for Real-Time Inventory",
        summary:
          "A real-world look at how Walmart used store-edge AI to detect stockouts, improve forecast accuracy, and accelerate in-store response.",
        impact:
          "Improved forecast accuracy, fewer stockouts, and faster associate action inside the store.",
        href: "/insights/case-study-retail-real-time-inventory",
      },
    ],
    relatedInsightTitle:
      "Case Study #4: Walmart's Intelligent Retail Lab – Edge AI for Real-Time Inventory",
    relatedInsightHref: "/insights/case-study-retail-real-time-inventory",
    relatedInsightCtaLabel: "Read Case Study",
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
