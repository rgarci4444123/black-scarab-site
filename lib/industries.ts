export type IndustryCard = {
  title: string;
  description: string;
  price: string;
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
};

export const industries: IndustryData[] = [
  {
    key: "agriculture",
    slug: "agriculture",
    label: "Agriculture",
    eyebrow: "Featured Industry",
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
        title: "X-AGRO DRONE",
        description: "Aerial crop monitoring and mapping",
        price: "$2,500",
      },
      {
        title: "JETSON MODULE",
        description: "Edge AI processing power",
        price: "$799",
      },
      {
        title: "SOIL SENSORS",
        description: "Climate and soil data sensors",
        price: "$299",
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
        title: "Precision Harvest Pilot",
        summary:
          "A regional grower deployed edge vision and environmental sensing to create faster crop visibility across multiple plots.",
        impact: "Shorter response times and better operational awareness during critical growth windows.",
      },
    ],
    relatedInsightTitle:
      "The Precision Harvest: Edge AI Compute - Agriculture in LatAm",
    relatedInsightHref:
      "https://www.linkedin.com/pulse/precision-harvest-edge-ai-compute-agriculture-latam-black-scarab-y8m8c/?trackingId=80skTvOUFJOjo5yxFXHHfw%3D%3D",
  },
  {
    key: "logistics",
    slug: "transportation-logistics",
    label: "Transportation & Logistics",
    eyebrow: "Featured Industry",
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
        title: "FLEET EDGE NODE",
        description: "Vehicle-side compute for real-time decisions",
        price: "$1,250",
      },
      {
        title: "SMART VISION CAMERA",
        description: "On-route monitoring and event detection",
        price: "$480",
      },
      {
        title: "OPERATIONS DASHBOARD",
        description: "Centralized fleet intelligence and alerts",
        price: "$899",
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
        title: "Reflexive Fleet Rollout",
        summary:
          "A logistics operator deployed edge nodes and vision systems to improve visibility across a high-volume route network.",
        impact: "Faster awareness of route disruptions and stronger operations response.",
      },
    ],
    relatedInsightTitle:
      "The Reflexive Fleet: Edge AI Compute - Transportation & Logistics in LatAm",
    relatedInsightHref:
      "https://www.linkedin.com/pulse/reflexive-fleet-edge-ai-compute-transportation-logistics-xcbze/?trackingId=DFssRfEFEY1RF3lkp2kHag%3D%3D",
  },
  {
    key: "manufacturing",
    slug: "manufacturing",
    label: "Manufacturing",
    eyebrow: "Featured Industry",
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
        title: "VISION INSPECTION UNIT",
        description: "Real-time quality control at the edge",
        price: "$1,499",
      },
      {
        title: "INDUSTRIAL AI NODE",
        description: "Localized inference for robotics and sensors",
        price: "$1,099",
      },
      {
        title: "LINE ANALYTICS SUITE",
        description: "Production visibility and operational alerts",
        price: "$950",
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
        title: "Autonomous Factory Assessment",
        summary:
          "A manufacturing group evaluated machine vision and edge compute to improve inspection reliability during expansion.",
        impact: "Better readiness for scalable quality monitoring and faster diagnostics.",
      },
    ],
    relatedInsightTitle:
      "The Autonomous Factory: Edge AI and the Nearshoring Gold Rush",
    relatedInsightHref:
      "https://www.linkedin.com/pulse/autonomous-factory-edge-ai-nearshoring-gold-rush-black-scarab-ria9e/?trackingId=y%2FyXzdJtuCc%2FgZasfy%2FU4w%3D%3D",
  },
  {
    key: "healthcare",
    slug: "healthcare",
    label: "Healthcare",
    eyebrow: "Featured Industry",
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
        title: "PORTABLE AI DEVICE",
        description: "On-device inference for remote diagnostics",
        price: "$1,350",
      },
      {
        title: "SMART HEALTH SENSOR",
        description: "Continuous vital monitoring at the edge",
        price: "$420",
      },
      {
        title: "CARE RESPONSE PORTAL",
        description: "Clinical insights and distributed coordination",
        price: "$780",
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
    eyebrow: "Featured Industry",
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
        title: "STORE VISION NODE",
        description: "Foot traffic and in-store movement awareness",
        price: "$1,150",
      },
      {
        title: "SMART SENSOR GRID",
        description: "Localized monitoring for real-time operations",
        price: "$520",
      },
      {
        title: "RETAIL INTELLIGENCE HUB",
        description: "Actionable insights across storefronts",
        price: "$890",
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
        title: "Responsive Storefront Pilot",
        summary:
          "A multi-site retailer explored edge intelligence to improve visibility into store traffic and operational responsiveness.",
        impact: "Higher confidence in staffing and in-store monitoring decisions.",
      },
    ],
    relatedInsightTitle:
      "The Responsive Storefront: Edge AI & The Future of Retail in LatAm",
    relatedInsightHref:
      "https://www.linkedin.com/pulse/responsive-storefront-edge-ai-future-retail-latam-black-scarab-bzaae/",
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
