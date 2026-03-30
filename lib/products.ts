export type ProductCategory = "Compute" | "Vision" | "Sensors" | "Connectivity";
export type ProductIndustry =
  | "Agriculture"
  | "Manufacturing"
  | "Transportation & Logistics"
  | "Healthcare"
  | "Retail"
  | "Other";
export type ProductPowerProfile =
  | "Low (<25W)"
  | "Medium (25–200W)"
  | "High (200W+)";
export type ProductDeploymentType =
  | "Indoor"
  | "Outdoor"
  | "Mobile"
  | "Industrial";

export type ProductData = {
  slug: string;
  name: string;
  category: ProductCategory;
  industries: ProductIndustry[];
  powerProfile: ProductPowerProfile;
  deploymentTypes: ProductDeploymentType[];
  image: string;
  imageAlt: string;
  summary: string;
  whyItMatters: string;
  specs: {
    label: string;
    value: string;
  }[];
  bestFor: string[];
  usedIn: string[];
  blackScarabPov: string;
  officialUrl: string;
  affiliateUrl?: string;
};

export const products: ProductData[] = [
  {
    slug: "nvidia-jetson-orin-nx",
    name: "NVIDIA Jetson Orin NX",
    category: "Compute",
    industries: ["Agriculture", "Manufacturing", "Retail"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Indoor", "Mobile", "Industrial"],
    image: "/article-images/jetson-latam.png",
    imageAlt: "Edge computing visualization for NVIDIA Jetson Orin NX",
    summary:
      "A compact edge AI module for high-performance inference in constrained environments where latency and power draw matter.",
    whyItMatters:
      "It brings strong AI acceleration into field systems, kiosks, robots, and smart inspection deployments without requiring full server infrastructure.",
    specs: [
      { label: "AI Compute", value: "Up to 100 TOPS class performance" },
      { label: "Power Range", value: "10W–25W" },
      { label: "Form Factor", value: "Compact embedded module" },
    ],
    bestFor: [
      "Real-time inference at the edge",
      "Low-latency environments",
      "Compact embedded deployments",
    ],
    usedIn: [
      "Smart retail analytics",
      "Machine vision on factory lines",
      "Precision agriculture monitoring",
    ],
    blackScarabPov:
      "Ideal for mid-scale deployments where cloud latency is unacceptable and space or power constraints limit larger edge servers. A strong fit when video inference must happen on site.",
    officialUrl:
      "https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/",
  },
  {
    slug: "nvidia-jetson-agx-orin",
    name: "NVIDIA Jetson AGX Orin",
    category: "Compute",
    industries: ["Manufacturing", "Transportation & Logistics", "Healthcare"],
    powerProfile: "Medium (25–200W)",
    deploymentTypes: ["Indoor", "Industrial", "Mobile"],
    image: "/manufacturing-hero.jpg",
    imageAlt: "Manufacturing environment representing Jetson AGX Orin deployments",
    summary:
      "A higher-performance Jetson platform for advanced edge workloads, robotics, and sensor-heavy deployments that need significant local AI throughput.",
    whyItMatters:
      "It supports more demanding models and multi-stream workloads when smaller edge modules are not enough.",
    specs: [
      { label: "AI Compute", value: "High-performance embedded AI platform" },
      { label: "Power Range", value: "15W–60W+" },
      { label: "Form Factor", value: "Embedded developer kit / module platform" },
    ],
    bestFor: [
      "Multi-camera inference",
      "Robotics and autonomous systems",
      "Advanced industrial computer vision",
    ],
    usedIn: [
      "Autonomous factory inspection",
      "Fleet intelligence hubs",
      "Portable diagnostics systems",
    ],
    blackScarabPov:
      "Best when the deployment needs embedded flexibility but the workload starts looking like a small GPU server. We like it for advanced proofs of concept that may later become hardened products.",
    officialUrl:
      "https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/",
  },
  {
    slug: "dell-edge-gateway-5200",
    name: "Dell Edge Gateway 5200",
    category: "Compute",
    industries: ["Transportation & Logistics", "Manufacturing", "Retail"],
    powerProfile: "Medium (25–200W)",
    deploymentTypes: ["Indoor", "Industrial"],
    image: "/logistics-hero.jpg",
    imageAlt: "Logistics environment representing Dell Edge Gateway deployments",
    summary:
      "An industrial gateway-style platform for bringing local analytics, device integration, and edge processing into operational environments.",
    whyItMatters:
      "It offers a practical bridge between enterprise infrastructure and field-level device networks where reliability matters more than minimal size.",
    specs: [
      { label: "Compute Style", value: "Industrial edge gateway" },
      { label: "Power Profile", value: "Moderate operational footprint" },
      { label: "Form Factor", value: "Facility or cabinet-mounted gateway" },
    ],
    bestFor: [
      "Industrial networking environments",
      "Telemetry aggregation",
      "Distributed facility intelligence",
    ],
    usedIn: [
      "Warehouse monitoring",
      "Retail back-of-house systems",
      "Factory network edge aggregation",
    ],
    blackScarabPov:
      "A practical choice when the problem is not just AI inference, but also secure device integration and operational reliability across multiple sites.",
    officialUrl: "https://www.dell.com/en-us/dt/edge-computing/index.htm",
  },
  {
    slug: "intel-realsense-d455",
    name: "Intel RealSense D455",
    category: "Vision",
    industries: ["Manufacturing", "Retail", "Healthcare"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Indoor", "Mobile", "Industrial"],
    image: "/article-images/manufacturing-latam.png",
    imageAlt: "Machine vision scene representing Intel RealSense D455",
    summary:
      "A depth camera suited for perception, measurement, and spatial understanding in edge AI systems.",
    whyItMatters:
      "It enables depth-aware applications that standard RGB cameras cannot handle cleanly, especially where object distance and geometry matter.",
    specs: [
      { label: "Sensor Type", value: "Depth camera" },
      { label: "Power Profile", value: "Low-power vision peripheral" },
      { label: "Form Factor", value: "Compact USB-connected device" },
    ],
    bestFor: [
      "Spatial analytics",
      "Robotics perception",
      "Occupancy and measurement workflows",
    ],
    usedIn: [
      "Retail space intelligence",
      "Factory workstation analytics",
      "Portable medical device integrations",
    ],
    blackScarabPov:
      "Useful when the decision system needs geometry, not just classification. It adds real value in constrained indoor environments where spatial context is part of the workflow.",
    officialUrl: "https://www.intelrealsense.com/depth-camera-d455/",
  },
  {
    slug: "basler-ace-camera",
    name: "Basler ace Camera",
    category: "Vision",
    industries: ["Manufacturing", "Healthcare", "Retail"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Indoor", "Industrial"],
    image: "/article-images/manufacturing-latam.png",
    imageAlt: "Industrial camera deployment representing Basler ace",
    summary:
      "An industrial-grade machine vision camera family built for consistent image quality in production and inspection environments.",
    whyItMatters:
      "When image reliability drives the business outcome, industrial cameras outperform commodity devices and simplify long-term scaling.",
    specs: [
      { label: "Camera Type", value: "Industrial machine vision" },
      { label: "Power Profile", value: "Low-power camera system" },
      { label: "Deployment", value: "Fixed production or inspection mounting" },
    ],
    bestFor: [
      "Quality inspection",
      "High-consistency image capture",
      "Factory automation workflows",
    ],
    usedIn: [
      "Production line QA",
      "Device inspection systems",
      "Structured retail vision nodes",
    ],
    blackScarabPov:
      "A strong option when reliability and repeatability matter more than consumer-grade affordability. We’d favor this for production environments that must stay stable over time.",
    officialUrl: "https://www.baslerweb.com/en/products/cameras/area-scan-cameras/ace/",
  },
  {
    slug: "flir-boson-thermal",
    name: "FLIR Boson Thermal",
    category: "Vision",
    industries: ["Agriculture", "Healthcare", "Transportation & Logistics"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Outdoor", "Mobile", "Industrial"],
    image: "/healthcare-hero.jpg",
    imageAlt: "Thermal sensing scene representing FLIR Boson thermal camera",
    summary:
      "A thermal camera module for deployments where heat signatures and environmental conditions matter as much as visible imagery.",
    whyItMatters:
      "Thermal sensing expands visibility beyond standard cameras and improves detection in difficult lighting or environmental conditions.",
    specs: [
      { label: "Sensor Type", value: "Thermal imaging module" },
      { label: "Power Profile", value: "Low-power specialized vision" },
      { label: "Form Factor", value: "Embedded thermal module" },
    ],
    bestFor: [
      "Condition monitoring",
      "Night or low-visibility environments",
      "Environmental and safety use cases",
    ],
    usedIn: [
      "Livestock and field monitoring",
      "Portable medical screening concepts",
      "Fleet and yard visibility systems",
    ],
    blackScarabPov:
      "Thermal should be used selectively, but when the environment is harsh or visibility is limited, it creates a clear edge over RGB-only systems.",
    officialUrl: "https://www.flir.com/products/boson/",
  },
  {
    slug: "soil-sensor-network",
    name: "Soil Sensor Network",
    category: "Sensors",
    industries: ["Agriculture", "Other"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Outdoor"],
    image: "/agriculture-hero.jpg",
    imageAlt: "Agriculture field sensor deployment",
    summary:
      "A distributed sensor layer for moisture, climate, and soil telemetry in precision agriculture environments.",
    whyItMatters:
      "Sensor networks turn periodic field checks into continuous operational awareness and provide the data backbone for edge intelligence.",
    specs: [
      { label: "Sensor Class", value: "Soil and environmental telemetry" },
      { label: "Power Profile", value: "Ultra-low field deployment" },
      { label: "Form Factor", value: "Distributed outdoor sensor nodes" },
    ],
    bestFor: [
      "Continuous field telemetry",
      "Irrigation support",
      "Environmental signal capture",
    ],
    usedIn: [
      "Precision irrigation systems",
      "Crop stress monitoring",
      "Multi-zone agricultural deployments",
    ],
    blackScarabPov:
      "On their own, sensors rarely solve the business problem. Their real value comes when combined with edge compute and vision into one operational loop.",
    officialUrl: "https://www.metergroup.com/",
  },
  {
    slug: "bosch-environmental-sensor-suite",
    name: "Bosch Environmental Sensor Suite",
    category: "Sensors",
    industries: ["Manufacturing", "Retail", "Healthcare"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Indoor", "Industrial"],
    image: "/healthcare-hero.jpg",
    imageAlt: "Environmental sensing concept for Bosch sensor suite",
    summary:
      "A class of compact sensors that capture temperature, humidity, air quality, and motion signals for local monitoring systems.",
    whyItMatters:
      "Environmental signals often provide the context needed to turn camera or operational data into a more useful decision layer.",
    specs: [
      { label: "Signal Types", value: "Climate, motion, environmental context" },
      { label: "Power Profile", value: "Low-power IoT sensing" },
      { label: "Integration", value: "Embedded sensor module workflows" },
    ],
    bestFor: [
      "Environmental monitoring",
      "Context-aware analytics",
      "Indoor operating condition tracking",
    ],
    usedIn: [
      "Factory environmental context",
      "Retail space monitoring",
      "Healthcare room-condition intelligence",
    ],
    blackScarabPov:
      "These sensors become much more strategic when they’re not treated as standalone gadgets but as supporting context for edge AI workflows.",
    officialUrl: "https://www.bosch-sensortec.com/",
  },
  {
    slug: "starlink-terminal",
    name: "Starlink Terminal",
    category: "Connectivity",
    industries: ["Agriculture", "Transportation & Logistics", "Other"],
    powerProfile: "Medium (25–200W)",
    deploymentTypes: ["Outdoor", "Mobile"],
    image: "/logistics-hero.jpg",
    imageAlt: "Remote connectivity environment representing Starlink terminal",
    summary:
      "A satellite connectivity option for remote operations where terrestrial networks are limited or unreliable.",
    whyItMatters:
      "Edge AI works best when local inference reduces dependence on connectivity, but reliable backhaul still matters for updates, oversight, and sync.",
    specs: [
      { label: "Connectivity Type", value: "Satellite internet" },
      { label: "Power Profile", value: "Moderate field connectivity draw" },
      { label: "Deployment", value: "Fixed or mobile remote installation" },
    ],
    bestFor: [
      "Remote operations",
      "Low-infrastructure environments",
      "Resilient backhaul connectivity",
    ],
    usedIn: [
      "Remote farm deployments",
      "Field logistics operations",
      "Distributed industrial sites",
    ],
    blackScarabPov:
      "We see this less as the brain of the system and more as the reliability layer that keeps remote infrastructure usable when terrestrial connectivity falls short.",
    officialUrl: "https://www.starlink.com/",
  },
  {
    slug: "cradlepoint-5g-router",
    name: "Cradlepoint 5G Router",
    category: "Connectivity",
    industries: ["Transportation & Logistics", "Retail", "Healthcare"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Indoor", "Mobile", "Industrial"],
    image: "/retail-hero.jpg",
    imageAlt: "Retail and mobile connectivity scene representing Cradlepoint router",
    summary:
      "A cellular connectivity layer for mobile and distributed edge systems that need resilient WAN access.",
    whyItMatters:
      "When systems are spread across stores, clinics, vehicles, or temporary sites, connectivity becomes part of the product architecture, not just an IT concern.",
    specs: [
      { label: "Connectivity Type", value: "5G / LTE router" },
      { label: "Power Profile", value: "Low operational footprint" },
      { label: "Deployment", value: "Branch, mobile, and distributed site networking" },
    ],
    bestFor: [
      "Distributed sites",
      "Mobile operations",
      "Resilient edge networking",
    ],
    usedIn: [
      "Fleet connectivity",
      "Retail branch edge systems",
      "Portable healthcare deployments",
    ],
    blackScarabPov:
      "A strong fit when uptime matters across multiple sites and the network layer has to be treated as part of the deployment strategy from day one.",
    officialUrl: "https://cradlepoint.com/",
  },
];

export const productCategories: ProductCategory[] = [
  "Compute",
  "Vision",
  "Sensors",
  "Connectivity",
];

export const productIndustries: ProductIndustry[] = [
  "Agriculture",
  "Manufacturing",
  "Transportation & Logistics",
  "Healthcare",
  "Retail",
  "Other",
];

export const productDeploymentTypes: ProductDeploymentType[] = [
  "Indoor",
  "Outdoor",
  "Mobile",
  "Industrial",
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductOutboundUrl(product: ProductData) {
  return product.affiliateUrl ?? product.officialUrl;
}
