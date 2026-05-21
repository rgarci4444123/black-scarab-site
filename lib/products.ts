export type ProductCategory =
  | "CPUs"
  | "GPUs & Accelerators"
  | "Edge Computers"
  | "Boards & Microcontrollers"
  | "Cameras & Vision"
  | "Sensors"
  | "Networking & Connectivity"
  | "Storage & Memory"
  | "Power & Enclosures"
  | "Drones"
  | "Robotics"
  | "AI Models"
  | "Software & Runtimes"
  | "Solution Kits";
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
export type ProductPriceStatus =
  | "Exact"
  | "Starts at"
  | "Distributor listing"
  | "Quote required"
  | "Research needed";

export type ProductData = {
  slug: string;
  name: string;
  vendor: string;
  category: ProductCategory;
  industries: ProductIndustry[];
  powerProfile: ProductPowerProfile;
  deploymentTypes: ProductDeploymentType[];
  price: string;
  priceStatus: ProductPriceStatus;
  priceNote?: string;
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
  sourceLabel?: string;
  affiliateUrl?: string;
};

export const products: ProductData[] = [
  {
    slug: "nvidia-jetson-orin-nx",
    name: "NVIDIA Jetson Orin NX",
    vendor: "NVIDIA / Seeed Studio",
    category: "Edge Computers",
    industries: ["Agriculture", "Manufacturing", "Retail"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Indoor", "Mobile", "Industrial"],
    price: "Price to verify",
    priceStatus: "Research needed",
    priceNote: "Current link points to a distributor listing; confirm live price before publishing as exact.",
    image: "/product-images/nvidia-jetson-orin-nx.jpg",
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
      "https://www.amazon.com/seeed-studio-reComputer-J4012-Edge-Pre-Installed/dp/B0C88V4CB7/ref=sr_1_2_sspa?crid=M6H4B3299BKG&dib=eyJ2IjoiMSJ9.9gCJw-kXE2J0rq1kTcqrwfYe3oQivJmNLtSFRVf-T5G4os2LtUtr05KSBAT2iGCBHM0Ygw1334KvtuLxVTXzzBSncLpigHcVs9Mu6ZaFKFlOtigBHli3XcXuWJobbw2u2Liyd7HsotjW_rpf0vI8nx-4RupX81B8Jqq_L7TytA1RUs8oMcI1YaiG-jS_xAFBnTftsO1bVXGuokn00jqtKihNqkCBAqe_xxbDe3CUb7Q.aIKnYOUQ4GGI7Qvg3dWBqw7Bfjc2Q_kSaYyynCxZEqg&dib_tag=se&keywords=nvidia%2Bjetson%2Borin&qid=1774900805&sprefix=nvidia%2Bjetson%2Borin%2Caps%2C145&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
    sourceLabel: "Distributor listing",
  },
  {
    slug: "nvidia-jetson-agx-orin",
    name: "NVIDIA Jetson AGX Orin",
    vendor: "NVIDIA",
    category: "Edge Computers",
    industries: ["Manufacturing", "Transportation & Logistics", "Healthcare"],
    powerProfile: "Medium (25–200W)",
    deploymentTypes: ["Indoor", "Industrial", "Mobile"],
    price: "Price to verify",
    priceStatus: "Research needed",
    priceNote: "Current link points to a distributor listing; confirm live price before publishing as exact.",
    image: "/product-images/nvidia-jetson-agx-orin-nx.jpg",
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
      "https://www.amazon.com/dp/B0BYGB3WV4?utm_source=nvidia&th=1",
    sourceLabel: "Distributor listing",
  },
  {
    slug: "dell-edge-gateway-5200",
    name: "Dell Edge Gateway 5200",
    vendor: "Dell",
    category: "Edge Computers",
    industries: ["Transportation & Logistics", "Manufacturing", "Retail"],
    powerProfile: "Medium (25–200W)",
    deploymentTypes: ["Indoor", "Industrial"],
    price: "Request quote",
    priceStatus: "Quote required",
    priceNote: "Industrial gateways are often quoted through Dell partners or resellers.",
    image: "/product-images/dell-edge-gateway-5200.jpg",
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
    officialUrl:
      "https://www.netsolutionworks.com/egw-5200.asp?utm_term=dell%20edge%20gateway%205200&utm_campaign=Dell+Networking+*123&utm_source=adwords&utm_medium=ppc&hsa_tgt=kwd-2268790644929&hsa_grp=159319808804&hsa_src=g&hsa_net=adwords&hsa_mt=e&hsa_ver=3&hsa_ad=687494048780&hsa_acc=9041622380&hsa_kw=dell%20edge%20gateway%205200&hsa_cam=361999621&gad_source=1&gad_campaignid=361999621&gbraid=0AAAAAD_vIyaTNW7Z7AnIp-zXb9o-h5H8p&gclid=CjwKCAjwvqjOBhAGEiwAngeQnW7H2Epf8n3KizG69kAdWcEMudGmTawqmwHJ9i87zikd0kwlQ5TlnBoCM4gQAvD_BwE",
    sourceLabel: "Partner listing",
  },
  {
    slug: "intel-realsense-d455",
    name: "Intel RealSense D455",
    vendor: "Intel RealSense",
    category: "Cameras & Vision",
    industries: ["Manufacturing", "Retail", "Healthcare"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Indoor", "Mobile", "Industrial"],
    price: "Price to verify",
    priceStatus: "Research needed",
    priceNote: "Current link points to a distributor listing; confirm live price before publishing as exact.",
    image: "/product-images/intel-realsense-d455.jpg",
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
    officialUrl:
      "https://www.amazon.com/Intel-RealSense-D455-Webcam-3-1-1280/dp/B08KJCRCGG",
    sourceLabel: "Distributor listing",
  },
  {
    slug: "basler-ace-camera",
    name: "Basler ace Camera",
    vendor: "Basler",
    category: "Cameras & Vision",
    industries: ["Manufacturing", "Healthcare", "Retail"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Indoor", "Industrial"],
    price: "Request quote",
    priceStatus: "Quote required",
    priceNote: "Exact configuration and lens/accessory choices affect total cost.",
    image: "/product-images/basler-aca1920-25uc.jpg",
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
    officialUrl: "https://www.baslerweb.com/en-us/shop/aca1920-25uc/",
    sourceLabel: "Official product page",
  },
  {
    slug: "flir-boson-thermal",
    name: "FLIR Boson Thermal",
    vendor: "Teledyne FLIR",
    category: "Cameras & Vision",
    industries: ["Agriculture", "Healthcare", "Transportation & Logistics"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Outdoor", "Mobile", "Industrial"],
    price: "Request quote",
    priceStatus: "Quote required",
    priceNote: "Thermal module pricing depends on configuration, resolution, and purchasing channel.",
    image: "/product-images/flir-boson-plus-320.jpg",
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
    officialUrl: "https://oem.flir.com/products/boson-plus/?vertical=lwir&segment=oem",
    sourceLabel: "Official product page",
  },
  {
    slug: "soil-sensor-network",
    name: "Soil Sensor Network",
    vendor: "Stevens Water",
    category: "Sensors",
    industries: ["Agriculture", "Other"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Outdoor"],
    price: "Request quote",
    priceStatus: "Quote required",
    priceNote: "Field sensor pricing can vary by probe, cable, telemetry, and installation requirements.",
    image: "/product-images/stevens-hydraprobe.jpg",
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
    officialUrl: "https://stevenswater.com/products/hydraprobe/",
    sourceLabel: "Official product page",
  },
  {
    slug: "bosch-environmental-sensor-suite",
    name: "Bosch Environmental Sensor Suite",
    vendor: "Bosch Sensortec",
    category: "Sensors",
    industries: ["Manufacturing", "Retail", "Healthcare"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Indoor", "Industrial"],
    price: "Price varies",
    priceStatus: "Research needed",
    priceNote: "Use distributor pricing once a specific Bosch sensor module is selected.",
    image: "/product-images/bosch-sensortec.jpg",
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
    officialUrl: "https://www.bosch-sensortec.com/en/products",
    sourceLabel: "Official product page",
  },
  {
    slug: "starlink-terminal",
    name: "Starlink Terminal",
    vendor: "Starlink",
    category: "Networking & Connectivity",
    industries: ["Agriculture", "Transportation & Logistics", "Other"],
    powerProfile: "Medium (25–200W)",
    deploymentTypes: ["Outdoor", "Mobile"],
    price: "Price to verify",
    priceStatus: "Research needed",
    priceNote: "Confirm current hardware and service pricing by region before publishing as exact.",
    image: "/product-images/starlink.jpg",
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
    officialUrl:
      "https://www.amazon.com/Starlink-Standard-Band-Wi-Fi-System/dp/B0D5SGXQCD/ref=sr_1_1?adgrpid=192200860051&dib=eyJ2IjoiMSJ9.KbReg8vEO1K4F2si491f0xZGJMANrZqG2S3-XhLZL7bgxg8rb1oH4iQfzcwarZGlx9uzKnf6KPwE0LyaMYx3MhaIVCMVfVLEJVRLu3UtO_1dnfN5Y0PuNGLp1-NocBBvAJIyNTPsl7Vo3v1o66mST9ySxvzhpX9_z8Tzr_vYlo171tNmI1tWWraU42p0DrdMUugBR5CADPVOaN5C4h26dMFlAnTfIqKgDDX6q0qzJ7k.Ng5RFsRrJ3v66CIS96VZpL2oNiziG22IIX64_mL9izQ&dib_tag=se&hvadid=779546295340&hvdev=c&hvexpln=0&hvlocphy=9011905&hvnetw=g&hvocijid=2528214540987618556--&hvqmt=e&hvrand=2528214540987618556&hvtargid=kwd-1146699698059&hydadcr=19107_13375052_8668&keywords=starlink+terminal&mcid=f22e165049a33f7c91d47d31821d7f99&qid=1774901888&sr=8-1",
    sourceLabel: "Distributor listing",
  },
  {
    slug: "cradlepoint-5g-router",
    name: "Cradlepoint 5G Router",
    vendor: "Ericsson Cradlepoint",
    category: "Networking & Connectivity",
    industries: ["Transportation & Logistics", "Retail", "Healthcare"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Indoor", "Mobile", "Industrial"],
    price: "Request quote",
    priceStatus: "Quote required",
    priceNote: "Enterprise networking pricing depends on hardware bundle, licensing, and channel.",
    image: "/product-images/ericsson-cradlepoint-e300.jpg",
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
    officialUrl: "https://cradlepoint.com/product/endpoints/e300/",
    sourceLabel: "Official product page",
  },
  {
    slug: "dji-mavic-3m",
    name: "DJI Mavic 3M",
    vendor: "DJI Agriculture",
    category: "Drones",
    industries: ["Agriculture", "Other"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Outdoor", "Mobile"],
    price: "Price to verify",
    priceStatus: "Research needed",
    priceNote: "Confirm current kit pricing through DJI or an authorized dealer.",
    image: "/product-images/dji-mavic-3m.jpg",
    imageAlt: "DJI Mavic 3M agricultural drone",
    summary:
      "A multispectral drone platform built for crop monitoring, field intelligence, and precision agriculture workflows.",
    whyItMatters:
      "It compresses aerial imaging, spectral analysis, and operational speed into a deployable field asset that can inform decisions faster than manual scouting.",
    specs: [
      { label: "Platform Type", value: "Multispectral agricultural drone" },
      { label: "Power Profile", value: "Battery-powered mobile aerial system" },
      { label: "Deployment", value: "Field-ready rapid launch platform" },
    ],
    bestFor: [
      "Crop health mapping",
      "Precision monitoring",
      "Fast aerial data collection",
    ],
    usedIn: [
      "Field scouting programs",
      "Irrigation and crop stress analysis",
      "Agricultural intelligence workflows",
    ],
    blackScarabPov:
      "This is strong when you need to shorten the loop between observation and action in the field. It becomes especially valuable when paired with edge compute and sensor data instead of operating as an isolated drone workflow.",
    officialUrl: "https://ag.dji.com/mavic-3-m",
    sourceLabel: "Official product page",
  },
  {
    slug: "dji-agras-t50",
    name: "DJI Agras T50",
    vendor: "DJI Agriculture",
    category: "Drones",
    industries: ["Agriculture", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Outdoor", "Mobile"],
    price: "Price to verify",
    priceStatus: "Research needed",
    priceNote: "Confirm current aircraft and accessory pricing through DJI or an authorized dealer.",
    image: "/product-images/dji-agras-t50.jpg",
    imageAlt: "DJI Agras T50 agricultural spraying drone",
    summary:
      "A heavy-duty agricultural drone built for spraying, spreading, and high-throughput field operations.",
    whyItMatters:
      "It shifts the aerial system from intelligence gathering into direct operational execution, making it relevant for large-scale agricultural deployment workflows.",
    specs: [
      { label: "Platform Type", value: "Heavy-lift agricultural drone" },
      { label: "Power Profile", value: "High-power battery system" },
      { label: "Deployment", value: "Large-scale outdoor field operations" },
    ],
    bestFor: [
      "Spraying and spreading operations",
      "Large field execution",
      "Aerial task automation",
    ],
    usedIn: [
      "Crop treatment operations",
      "Large-acreage deployment workflows",
      "Integrated precision agriculture stacks",
    ],
    blackScarabPov:
      "The value here is less about sensing alone and more about closing the loop between aerial intelligence and aerial execution. For the right grower, this turns insight into action at scale.",
    officialUrl: "https://ag.dji.com/t50?site=ag&from=nav",
    sourceLabel: "Official product page",
  },
];

export const productCategories: ProductCategory[] = [
  "CPUs",
  "GPUs & Accelerators",
  "Edge Computers",
  "Boards & Microcontrollers",
  "Cameras & Vision",
  "Sensors",
  "Networking & Connectivity",
  "Storage & Memory",
  "Power & Enclosures",
  "Drones",
  "Robotics",
  "AI Models",
  "Software & Runtimes",
  "Solution Kits",
];

export const productCategoryGuides: {
  category: ProductCategory;
  description: string;
  examples: string[];
  commercePath: string;
}[] = [
  {
    category: "CPUs",
    description:
      "Host processors for workstations, servers, industrial PCs, and local inference boxes.",
    examples: ["Ryzen", "Xeon", "EPYC"],
    commercePath: "Component sales and workstation BOMs",
  },
  {
    category: "GPUs & Accelerators",
    description:
      "Discrete GPUs, embedded accelerators, NPUs, TPUs, DPUs, and cards that move AI workloads.",
    examples: ["RTX", "Edge TPU", "BlueField"],
    commercePath: "High-ticket affiliate and integration margin",
  },
  {
    category: "Edge Computers",
    description:
      "Ready compute boxes, embedded modules, and gateways that sit near machines, cameras, and sensors.",
    examples: ["Jetson", "industrial gateways", "rugged PCs"],
    commercePath: "Core architecture component",
  },
  {
    category: "Boards & Microcontrollers",
    description:
      "Microcontrollers, single-board computers, and prototyping boards for small edge AI and control loops.",
    examples: ["Arduino", "Raspberry Pi", "ESP32"],
    commercePath: "Low-cost parts volume and starter kits",
  },
  {
    category: "Cameras & Vision",
    description:
      "RGB, depth, stereo, thermal, event, and industrial camera systems for physical-world perception.",
    examples: ["depth cameras", "machine vision cameras", "thermal modules"],
    commercePath: "Use-case specific sensing layer",
  },
  {
    category: "Sensors",
    description:
      "Environmental, soil, motion, vibration, LiDAR, and telemetry devices that make AI context-aware.",
    examples: ["soil probes", "LiDAR", "air-quality sensors"],
    commercePath: "Tiny parts, large solution leverage",
  },
  {
    category: "Networking & Connectivity",
    description:
      "Ethernet, 5G, satellite, Wi-Fi, InfiniBand, DPUs, switches, and backhaul infrastructure.",
    examples: ["5G routers", "InfiniBand", "Starlink"],
    commercePath: "Multi-category infrastructure layer",
  },
  {
    category: "Storage & Memory",
    description:
      "NVMe drives, NAS systems, ECC memory, and model storage components for local AI deployments.",
    examples: ["NVMe", "NAS", "ECC RAM"],
    commercePath: "Attachment sales for every compute build",
  },
  {
    category: "Power & Enclosures",
    description:
      "Power supplies, DIN rail hardware, cooling, cases, mounts, and environmental protection.",
    examples: ["PSUs", "fans", "rugged cases"],
    commercePath: "Small parts that complete real deployments",
  },
  {
    category: "Drones",
    description:
      "Aerial sensing and execution platforms for agriculture, inspection, logistics, and field operations.",
    examples: ["multispectral drones", "spraying drones", "inspection drones"],
    commercePath: "High-value vertical solution layer",
  },
  {
    category: "Robotics",
    description:
      "Autonomous mobile robots, robotic arms, quadrupeds, warehouse robots, and field robotics platforms.",
    examples: ["AMRs", "robot arms", "quadrupeds"],
    commercePath: "Future high-ticket comparison category",
  },
  {
    category: "AI Models",
    description:
      "Open-weight and commercial models that determine what the hardware stack must support.",
    examples: ["Llama", "Qwen", "DeepSeek"],
    commercePath: "Decision layer for hardware fit",
  },
  {
    category: "Software & Runtimes",
    description:
      "Runtimes, model serving layers, retrieval systems, orchestration tools, and deployment software.",
    examples: ["Ollama", "Open WebUI", "vLLM"],
    commercePath: "Implementation pathway and managed setup",
  },
  {
    category: "Solution Kits",
    description:
      "Use-case bundles that combine components into deployable bills of materials.",
    examples: ["inspection kit", "local AI kit", "retail vision kit"],
    commercePath: "Bundled margin and checkout path",
  },
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
