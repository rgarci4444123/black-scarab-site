export type ProductCategory =
  | "CPUs"
  | "GPUs & Accelerators"
  | "Edge Computers"
  | "Boards, SBCs & Microcontrollers"
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
    slug: "amd-ryzen-9-9950x",
    name: "AMD Ryzen 9 9950X",
    vendor: "AMD",
    category: "CPUs",
    industries: ["Manufacturing", "Retail", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor"],
    price: "Price to verify",
    priceStatus: "Research needed",
    priceNote:
      "AMD lists retailer and AMD.com purchase paths, but current pricing should be verified from the selected checkout source before publishing as exact.",
    image: "/product-images/amd-ryzen-9-9950x.jpg",
    imageAlt: "AMD Ryzen 9 9950X processor retail box",
    summary:
      "A 16-core Zen 5 desktop processor for local AI workstations, creator PCs, and high-performance CPU-heavy edge development systems.",
    whyItMatters:
      "Local AI builds often need strong host compute around the GPU or accelerator layer. The Ryzen 9 9950X gives builders a high-end AM5 CPU foundation for data prep, orchestration, multitasking, and workstation-class experimentation.",
    specs: [
      { label: "CPU Cores / Threads", value: "16 cores / 32 threads" },
      { label: "Boost / Base Clock", value: "Up to 5.7 GHz / 4.3 GHz" },
      { label: "Platform", value: "AM5, DDR5, PCIe 5.0, 170W TDP" },
    ],
    bestFor: [
      "Local AI workstation builds",
      "CPU-heavy data preparation",
      "High-performance AM5 desktop systems",
    ],
    usedIn: [
      "Private AI lab workstations",
      "Creator and engineering desktops",
      "GPU-backed local inference setups",
    ],
    blackScarabPov:
      "This is not the AI accelerator by itself, but it is a strong host CPU for serious local AI boxes. Pair it with enough DDR5 memory, fast NVMe storage, a capable GPU, and cooling that can handle sustained workstation loads.",
    officialUrl:
      "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-9-9950x.html",
    sourceLabel: "Official product page",
  },
  {
    slug: "intel-core-ultra-9-285k",
    name: "Intel Core Ultra 9 285K",
    vendor: "Intel",
    category: "CPUs",
    industries: ["Manufacturing", "Retail", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor"],
    price: "$589.00-$599.00",
    priceStatus: "Starts at",
    priceNote:
      "Intel recommended customer price range from the official specifications page. Retail checkout pricing can vary by seller, region, and promotion.",
    image: "/product-images/intel-core-ultra-9-285k.png",
    imageAlt: "Intel Core Ultra 9 product badge",
    summary:
      "A flagship Intel desktop processor with CPU, GPU, and NPU AI acceleration for high-performance local AI PCs, workstations, and development systems.",
    whyItMatters:
      "The Core Ultra 9 285K is useful for local AI builds where the CPU, integrated graphics, and NPU can share lightweight AI, media, and development tasks while a discrete GPU handles larger inference workloads.",
    specs: [
      { label: "CPU Cores / Threads", value: "24 cores / 24 threads" },
      { label: "AI / Max Turbo", value: "36 platform TOPS / up to 5.7 GHz" },
      { label: "Platform", value: "FCLGA1851, DDR5-6400, 125W base / 250W turbo" },
    ],
    bestFor: [
      "Local AI desktop builds",
      "OpenVINO development workflows",
      "High-performance creator and workstation PCs",
    ],
    usedIn: [
      "AI-enabled desktop workstations",
      "Edge prototype development PCs",
      "Media and computer vision development systems",
    ],
    blackScarabPov:
      "This is a strong desktop host option when Intel platform features, OpenVINO, and onboard NPU acceleration matter. For heavier local inference, it still wants to sit beside a serious discrete GPU or accelerator.",
    officialUrl:
      "https://www.intel.com/content/www/us/en/products/sku/241060/intel-core-ultra-9-processor-285k-36m-cache-up-to-5-70-ghz/specifications.html",
    sourceLabel: "Official product page",
  },
  {
    slug: "intel-xeon-w9-3595x",
    name: "Intel Xeon W9-3595X",
    vendor: "Intel",
    category: "CPUs",
    industries: ["Manufacturing", "Healthcare", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor", "Industrial"],
    price: "$6,478",
    priceStatus: "Exact",
    priceNote:
      "Intel recommended customer price from the official specifications page. Final workstation pricing depends on reseller, motherboard, memory, cooling, and system integration.",
    image: "/product-images/intel-xeon-w9-3595x.png",
    imageAlt: "Intel Xeon W9 product badge",
    summary:
      "A 60-core Intel Xeon W workstation processor for professional AI development, simulation, rendering, and high-memory desktop infrastructure.",
    whyItMatters:
      "The Xeon W9-3595X gives workstation builders a high-core Intel platform with ECC memory support, wide PCIe capacity, AVX-512, AMX, and DL Boost for CPU-side AI and professional compute workloads.",
    specs: [
      { label: "CPU Cores / Threads", value: "60 cores / 120 threads" },
      { label: "Max Turbo / Cache", value: "Up to 4.8 GHz / 112.5MB cache" },
      { label: "Platform", value: "FCLGA4677, 8-channel DDR5, 112 PCIe 5.0 lanes" },
    ],
    bestFor: [
      "Professional AI workstations",
      "High-memory workstation builds",
      "Simulation, rendering, and engineering workloads",
    ],
    usedIn: [
      "Enterprise workstation deployments",
      "CPU-heavy AI development environments",
      "Multi-GPU professional desktops",
    ],
    blackScarabPov:
      "This sits in the serious workstation tier. It is most compelling when the buyer needs Intel platform manageability, ECC memory capacity, AMX/AVX-512 support, and enough PCIe lanes for accelerator-heavy builds.",
    officialUrl:
      "https://www.intel.com/content/www/us/en/products/sku/240482/intel-xeon-w93595x-processor-112-5m-cache-2-00-ghz/specifications.html",
    sourceLabel: "Official product page",
  },
  {
    slug: "amd-threadripper-pro-7995wx",
    name: "AMD Threadripper PRO 7995WX",
    vendor: "AMD",
    category: "CPUs",
    industries: ["Manufacturing", "Healthcare", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor"],
    price: "$8,787.99",
    priceStatus: "Distributor listing",
    priceNote:
      "Amazon listing price from the provided product page. Workstation CPU pricing can move quickly, so verify before using in a final basket.",
    image: "/product-images/amd-threadripper-pro-7995wx.png",
    imageAlt: "AMD Threadripper PRO processor close-up",
    summary:
      "A 96-core workstation processor for extreme multithreaded workloads, high-end local AI workstations, simulation, rendering, and data-heavy development systems.",
    whyItMatters:
      "Some AI infrastructure builds are limited by more than GPU throughput. The Threadripper PRO 7995WX gives workstation builders a massive CPU platform for data preparation, parallel processing, multi-GPU host duties, and professional workloads that need huge I/O capacity.",
    specs: [
      { label: "CPU Cores / Threads", value: "96 cores / 192 threads" },
      { label: "Max Boost / Cache", value: "Up to 5.1 GHz / 320MB cache" },
      { label: "Platform", value: "WRX90, eight-channel DDR5 RDIMM, 350W TDP" },
    ],
    bestFor: [
      "Extreme local AI workstations",
      "CPU-heavy simulation and rendering",
      "Multi-GPU professional desktop builds",
    ],
    usedIn: [
      "Research and engineering workstations",
      "High-end private AI labs",
      "Professional content and simulation pipelines",
    ],
    blackScarabPov:
      "This is a specialist part, not a default local AI CPU. It belongs in serious workstation baskets where CPU parallelism, memory capacity, and PCIe bandwidth justify the platform cost.",
    officialUrl:
      "https://www.amazon.com/AMD-RyzenTM-ThreadripperTM-PRO-7995WX/dp/B0CK2ZQJZ6",
    sourceLabel: "Distributor listing",
  },
  {
    slug: "amd-epyc-9654",
    name: "AMD EPYC 9654",
    vendor: "AMD",
    category: "CPUs",
    industries: ["Manufacturing", "Healthcare", "Transportation & Logistics"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor", "Industrial"],
    price: "$8,452",
    priceStatus: "Exact",
    priceNote:
      "AMD official 1kU pricing from the EPYC 9654 product page. Actual server build pricing depends on channel, motherboard, memory, chassis, and support contract.",
    image: "/product-images/amd-epyc-9654.png",
    imageAlt: "AMD EPYC logo on a dark background",
    summary:
      "A 96-core EPYC 9004 Series server processor for dense infrastructure, private AI servers, virtualization, and data-heavy enterprise workloads.",
    whyItMatters:
      "AI infrastructure does not stop at GPUs. EPYC 9654 gives server builders high CPU parallelism, large memory bandwidth, and PCIe capacity for systems that host accelerators, storage, networking, and many simultaneous workloads.",
    specs: [
      { label: "CPU Cores / Threads", value: "96 cores / 192 threads" },
      { label: "Boost / Cache", value: "Up to 3.7 GHz / 384MB L3 cache" },
      { label: "Platform", value: "SP5, PCIe 5.0 x128, 12-channel DDR5, 360W TDP" },
    ],
    bestFor: [
      "Private AI server infrastructure",
      "Virtualization and multi-tenant workloads",
      "Data-heavy enterprise compute nodes",
    ],
    usedIn: [
      "On-prem AI infrastructure",
      "Enterprise data processing clusters",
      "GPU server host platforms",
    ],
    blackScarabPov:
      "This is a server foundation piece for serious infrastructure baskets. It makes sense when the build needs memory bandwidth, PCIe lanes, and reliability around accelerators rather than a desktop-style local AI box.",
    officialUrl:
      "https://www.amd.com/en/products/processors/server/epyc/4th-generation-9004-and-8004-series/amd-epyc-9654.html",
    sourceLabel: "Official product page",
  },
  {
    slug: "ampere-altra-max-m128-30",
    name: "Ampere Altra Max M128-30",
    vendor: "Ampere",
    category: "CPUs",
    industries: ["Manufacturing", "Transportation & Logistics", "Other"],
    powerProfile: "Medium (25–200W)",
    deploymentTypes: ["Indoor", "Industrial"],
    price: "Request quote",
    priceStatus: "Quote required",
    priceNote:
      "Ampere routes purchasing through sales and platform partners. Pricing depends on processor channel, server platform, memory, storage, and integration path.",
    image: "/product-images/ampere-altra-max-m128-30.png",
    imageAlt: "Ampere Altra Max processor package",
    summary:
      "A 128-core Arm server processor built for cloud-native, power-efficient infrastructure, edge compute installations, and dense multi-tenant workloads.",
    whyItMatters:
      "The Altra Max M128-30 gives infrastructure builders a high-core-count Arm option for predictable single-threaded cores, strong performance per watt, and dense server deployments where power and rack efficiency matter.",
    specs: [
      { label: "CPU Cores / Frequency", value: "128 cores / sustained 3.0 GHz" },
      { label: "Power / ISA", value: "183W usage power / Armv8.2+" },
      { label: "Platform", value: "8-channel DDR4-3200 ECC, up to 4TB, 128 PCIe Gen4 lanes" },
    ],
    bestFor: [
      "Cloud-native infrastructure",
      "Power-efficient server clusters",
      "Arm-based edge compute platforms",
    ],
    usedIn: [
      "Dense private infrastructure",
      "Edge data center nodes",
      "Scale-out cloud-native services",
    ],
    blackScarabPov:
      "This is a useful counterweight to x86 server CPUs in the catalog. It belongs in baskets where Arm compatibility, predictable cores, and performance per watt matter more than maximum single-socket x86 ecosystem familiarity.",
    officialUrl:
      "https://amperecomputing.com/briefs/ampere-altra-family-product-brief",
    sourceLabel: "Official product brief",
  },
  {
    slug: "nvidia-l40s",
    name: "NVIDIA L40S",
    vendor: "NVIDIA",
    category: "GPUs & Accelerators",
    industries: ["Manufacturing", "Healthcare", "Transportation & Logistics", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor", "Industrial"],
    price: "Request quote",
    priceStatus: "Quote required",
    priceNote:
      "NVIDIA positions L40S as a data-center GPU sold through server OEMs, integrators, and channel partners. Final pricing depends on server platform, quantity, support, and deployment configuration.",
    image: "/product-images/nvidia-l40s.png",
    imageAlt: "NVIDIA L40S passive data center GPU",
    summary:
      "A 48GB Ada Lovelace data-center GPU for generative AI inference and training, 3D graphics, rendering, video, and virtual workstation infrastructure.",
    whyItMatters:
      "The L40S is built for 24/7 enterprise data-center operation rather than a desktop tower. It gives private AI infrastructure buyers 48GB of ECC memory, strong Tensor Core throughput, media acceleration, and a passive thermal design meant for server chassis airflow.",
    specs: [
      { label: "GPU Memory", value: "48GB GDDR6 with ECC" },
      { label: "CUDA / Tensor Performance", value: "18,176 CUDA cores / 733-1,466 FP8 TFLOPS" },
      { label: "Server Profile", value: "864 GB/s bandwidth / 350W max power / passive cooling" },
    ],
    bestFor: [
      "Private AI inference servers",
      "Generative AI and visual computing infrastructure",
      "Virtual workstation and rendering clusters",
    ],
    usedIn: [
      "Enterprise AI server builds",
      "GPU-backed VDI and visualization platforms",
      "On-prem rendering and media acceleration systems",
    ],
    blackScarabPov:
      "This is not a drop-in desktop GPU. It belongs in server baskets where chassis airflow, power delivery, support, and uptime matter. For Black Scarab, it is a useful bridge between workstation GPUs and heavier data-center accelerators.",
    officialUrl: "https://www.nvidia.com/en-us/data-center/l40s/",
    sourceLabel: "Official product page",
  },
  {
    slug: "nvidia-h100-nvl",
    name: "NVIDIA H100 NVL",
    vendor: "NVIDIA",
    category: "GPUs & Accelerators",
    industries: ["Manufacturing", "Healthcare", "Transportation & Logistics", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor", "Industrial"],
    price: "Request quote",
    priceStatus: "Quote required",
    priceNote:
      "NVIDIA positions H100 NVL for partner and NVIDIA-Certified PCIe server systems. Pricing depends on server vendor, GPU count, support, software subscription, and deployment configuration.",
    image: "/product-images/nvidia-h100-nvl.png",
    imageAlt: "NVIDIA H100 NVL PCIe data center accelerator",
    summary:
      "A PCIe-based H100 NVL data-center accelerator for large language model inference, enterprise AI servers, and multi-GPU private AI infrastructure.",
    whyItMatters:
      "H100 NVL is the PCIe H100 variant built around large-model inference. It pairs 94GB of HBM3 memory per GPU with NVLink bridging and NVIDIA AI Enterprise, giving server builders a powerful path for LLM workloads without moving to SXM/HGX-only platforms.",
    specs: [
      { label: "GPU Memory", value: "94GB HBM3 per GPU / 188GB with NVLink pair" },
      { label: "AI / HPC Performance", value: "3,341 FP8 TFLOPS / 835 TF32 Tensor TFLOPS" },
      { label: "PCIe Server Profile", value: "3.9 TB/s bandwidth / 350-400W TDP / dual-slot air-cooled" },
    ],
    bestFor: [
      "Large language model inference",
      "PCIe-based enterprise AI servers",
      "Multi-GPU private AI infrastructure",
    ],
    usedIn: [
      "NVIDIA-Certified AI servers",
      "Private LLM inference clusters",
      "Enterprise generative AI deployments",
    ],
    blackScarabPov:
      "This is the H100 to list first because the NVL/PCIe form factor is easier to explain as a component than H100 SXM. It still belongs in certified server baskets with serious airflow, power, software, and support planning, not in a normal desktop workstation.",
    officialUrl: "https://www.nvidia.com/en-us/data-center/h100/",
    sourceLabel: "Official product page",
  },
  {
    slug: "nvidia-h200-sxm",
    name: "NVIDIA H200 SXM",
    vendor: "NVIDIA",
    category: "GPUs & Accelerators",
    industries: ["Manufacturing", "Healthcare", "Transportation & Logistics", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor", "Industrial"],
    price: "Request quote",
    priceStatus: "Quote required",
    priceNote:
      "NVIDIA positions H200 SXM through HGX H200 and partner server platforms rather than standalone retail cards. Pricing depends on 4-GPU or 8-GPU platform, server vendor, networking, support, and deployment scale.",
    image: "/product-images/nvidia-h200-sxm.png",
    imageAlt: "NVIDIA HGX H200 SXM server platform with eight GPUs",
    summary:
      "An SXM-based H200 data-center accelerator platform for generative AI, large language model inference, high-performance computing, and multi-GPU AI servers.",
    whyItMatters:
      "H200 SXM upgrades the Hopper platform with 141GB of HBM3e memory and 4.8TB/s of bandwidth per GPU, giving HGX-class servers more room for large model inference, HPC datasets, and memory-intensive AI workloads.",
    specs: [
      { label: "GPU Memory", value: "141GB HBM3e per GPU" },
      { label: "AI / HPC Performance", value: "3,958 FP8 TFLOPS / 989 TF32 Tensor TFLOPS" },
      { label: "SXM Platform Profile", value: "4.8 TB/s bandwidth / up to 700W TDP / HGX 4-GPU or 8-GPU systems" },
    ],
    bestFor: [
      "Large language model inference at scale",
      "HGX-class AI and HPC servers",
      "Memory-intensive enterprise AI workloads",
    ],
    usedIn: [
      "HGX H200 server platforms",
      "Enterprise AI factories",
      "HPC and scientific computing clusters",
    ],
    blackScarabPov:
      "This is not a PCIe card and should not be presented like one. H200 SXM belongs in full HGX server baskets where the GPU, baseboard, NVLink fabric, cooling, power, networking, and support are purchased as an integrated platform.",
    officialUrl: "https://www.nvidia.com/en-us/data-center/h200/",
    sourceLabel: "Official product page",
  },
  {
    slug: "nvidia-rtx-pro-6000-blackwell-server-edition",
    name: "NVIDIA RTX PRO 6000 Blackwell Server Edition",
    vendor: "NVIDIA",
    category: "GPUs & Accelerators",
    industries: ["Manufacturing", "Healthcare", "Transportation & Logistics", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor", "Industrial"],
    price: "Request quote",
    priceStatus: "Quote required",
    priceNote:
      "NVIDIA routes this data center GPU through partners and marketplace channels. Final pricing depends on server platform, cooling, support, and system configuration.",
    image: "/product-images/nvidia-rtx-pro-6000-blackwell-server-edition.png",
    imageAlt: "NVIDIA RTX PRO 6000 Blackwell Server Edition passive GPU",
    summary:
      "A 96GB Blackwell data center GPU for enterprise AI servers, multi-GPU inference, industrial AI, rendering, simulation, and virtual workstation infrastructure.",
    whyItMatters:
      "The RTX PRO 6000 Blackwell Server Edition bridges professional graphics and enterprise AI infrastructure with 96GB of ECC GDDR7 memory, high AI throughput, MIG partitioning, and server-ready thermal options.",
    specs: [
      { label: "GPU Memory", value: "96GB GDDR7 with ECC" },
      { label: "AI / CUDA Performance", value: "24,064 CUDA cores / 2 PFLOPS FP8" },
      { label: "Server Profile", value: "Up to 600W configurable power / MIG up to 4 instances" },
    ],
    bestFor: [
      "Enterprise AI inference servers",
      "Multi-GPU private AI infrastructure",
      "Industrial simulation and visual computing",
    ],
    usedIn: [
      "Private AI server builds",
      "Virtual workstation infrastructure",
      "Enterprise rendering and simulation clusters",
    ],
    blackScarabPov:
      "This is a serious infrastructure GPU for baskets that need enterprise memory capacity, server thermals, and workload partitioning. It belongs closer to private AI server design than hobbyist local AI.",
    officialUrl:
      "https://www.nvidia.com/en-us/data-center/rtx-pro-6000-blackwell-server-edition/",
    sourceLabel: "Official product page",
  },
  {
    slug: "nvidia-rtx-pro-6000-blackwell-workstation-edition",
    name: "NVIDIA RTX PRO 6000 Blackwell Workstation Edition",
    vendor: "NVIDIA",
    category: "GPUs & Accelerators",
    industries: ["Manufacturing", "Healthcare", "Retail", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor"],
    price: "Request quote",
    priceStatus: "Quote required",
    priceNote:
      "NVIDIA routes workstation-class RTX PRO purchasing through partners and marketplace channels. Final pricing depends on channel, workstation vendor, support, and configuration.",
    image: "/product-images/nvidia-rtx-pro-6000-blackwell-workstation-edition.png",
    imageAlt: "NVIDIA RTX PRO 6000 Blackwell Workstation Edition GPU",
    summary:
      "A 96GB Blackwell professional desktop GPU for premium AI workstations, data science, rendering, simulation, and local model development.",
    whyItMatters:
      "The RTX PRO 6000 Blackwell Workstation Edition brings large-memory professional AI performance to the desktop, giving advanced users 96GB of ECC GDDR7 and Blackwell Tensor Core acceleration without moving every workload to a data center.",
    specs: [
      { label: "GPU Memory", value: "96GB GDDR7 with ECC" },
      { label: "AI / FP32 Performance", value: "4000 AI TOPS / 125 TFLOPS FP32" },
      { label: "Workstation Profile", value: "1792 GB/s bandwidth / 600W max power" },
    ],
    bestFor: [
      "Premium AI workstations",
      "Large local model development",
      "Professional rendering and simulation",
    ],
    usedIn: [
      "High-end desktop AI systems",
      "Data science and visualization workstations",
      "Engineering simulation and rendering pipelines",
    ],
    blackScarabPov:
      "This is the workstation sibling to the server edition. It should anchor premium desktop baskets where 96GB of VRAM, professional drivers, and workstation integration matter more than consumer GPU pricing.",
    officialUrl:
      "https://www.nvidia.com/en-us/products/workstations/professional-desktop-gpus/rtx-pro-6000/",
    sourceLabel: "Official product page",
  },
  {
    slug: "nvidia-rtx-pro-6000-blackwell-max-q-workstation-edition",
    name: "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition",
    vendor: "NVIDIA",
    category: "GPUs & Accelerators",
    industries: ["Manufacturing", "Healthcare", "Retail", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor"],
    price: "Request quote",
    priceStatus: "Quote required",
    priceNote:
      "NVIDIA routes RTX PRO Max-Q workstation purchasing through partners and marketplace channels. Final pricing depends on workstation vendor, GPU count, support, and system configuration.",
    image: "/product-images/nvidia-rtx-pro-6000-blackwell-max-q-workstation-edition.png",
    imageAlt: "NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition GPU",
    summary:
      "A density-optimized 96GB Blackwell professional GPU for scalable multi-GPU workstations, AI development, data science, simulation, and rendering.",
    whyItMatters:
      "The Max-Q Workstation Edition trades maximum single-card power for density and efficiency, enabling up to four RTX PRO 6000 GPUs in one workstation for large local datasets, multi-GPU AI, and demanding creative pipelines.",
    specs: [
      { label: "GPU Memory", value: "96GB GDDR7 with ECC" },
      { label: "AI / FP32 Performance", value: "3511 AI TOPS / 110 TFLOPS FP32" },
      { label: "Dense Workstation Profile", value: "1792 GB/s bandwidth / 300W max power" },
    ],
    bestFor: [
      "Dense multi-GPU workstations",
      "Large local AI development",
      "Scalable data science and rendering",
    ],
    usedIn: [
      "Four-GPU workstation builds",
      "High-memory AI development systems",
      "Professional simulation and creative pipelines",
    ],
    blackScarabPov:
      "This is the efficient scaling member of the RTX PRO 6000 family. It matters when a buyer wants workstation-local GPU density and 96GB-per-card memory without jumping straight to rack server infrastructure.",
    officialUrl:
      "https://www.nvidia.com/en-us/products/workstations/professional-desktop-gpus/rtx-pro-6000-max-q/",
    sourceLabel: "Official product page",
  },
  {
    slug: "amd-radeon-pro-w7900",
    name: "AMD Radeon PRO W7900",
    vendor: "AMD",
    category: "GPUs & Accelerators",
    industries: ["Manufacturing", "Healthcare", "Retail", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor"],
    price: "Price to verify",
    priceStatus: "Research needed",
    priceNote:
      "AMD provides official specifications and workstation positioning, but current channel pricing should be verified through authorized retailers, workstation vendors, or distributors before using in a basket.",
    image: "/product-images/amd-radeon-pro-w7900.png",
    imageAlt: "AMD Radeon PRO W7900 professional workstation graphics card",
    summary:
      "A 48GB RDNA 3 professional workstation GPU for visualization, rendering, media, simulation, CAD, and AMD-based pro workstation builds.",
    whyItMatters:
      "The Radeon PRO W7900 gives workstation buyers a large 48GB ECC memory option outside the NVIDIA ecosystem. It is especially relevant for visualization, media, CAD, and OpenCL/ROCm-aware workflows, while CUDA-heavy local AI stacks may still favor NVIDIA cards.",
    specs: [
      { label: "GPU Memory", value: "48GB GDDR6 with ECC" },
      { label: "Compute / AI Hardware", value: "96 compute units / 192 AI accelerators" },
      { label: "Workstation Profile", value: "61.3 TFLOPS FP32 / 864 GB/s bandwidth / 295W TBP" },
    ],
    bestFor: [
      "Professional visualization workstations",
      "Large-memory AMD GPU workflows",
      "CAD, rendering, media, and simulation systems",
    ],
    usedIn: [
      "Engineering and design workstations",
      "Media production and rendering systems",
      "AMD-based professional desktop builds",
    ],
    blackScarabPov:
      "This is a strong non-NVIDIA pro workstation option when memory size, display capability, AMD drivers, and visualization workloads matter. For AI baskets, it should be matched carefully against the user's software stack because many popular local AI tools still assume CUDA first.",
    officialUrl:
      "https://www.amd.com/en/products/graphics/workstations/radeon-pro/w7900.html",
    sourceLabel: "Official product page",
  },
  {
    slug: "amd-radeon-ai-pro-r9700",
    name: "AMD Radeon AI PRO R9700",
    vendor: "AMD",
    category: "GPUs & Accelerators",
    industries: ["Manufacturing", "Healthcare", "Retail", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor"],
    price: "Not yet available",
    priceStatus: "Research needed",
    priceNote:
      "AMD notes the current product image is an artist render and the card is not available for purchase yet. Recheck official availability, partner designs, and channel pricing before adding it to purchasable baskets.",
    image: "/product-images/amd-radeon-ai-pro-r9700.png",
    imageAlt: "AMD Radeon AI PRO R9700 professional AI graphics card render",
    summary:
      "A 32GB RDNA 4 professional AI GPU for local AI inference, development, memory-intensive desktop workloads, and ROCm-oriented AMD workstations.",
    whyItMatters:
      "The Radeon AI PRO R9700 is AMD's more explicitly AI-branded workstation card, pairing 32GB of GDDR6 memory with RDNA 4 AI acceleration and PCIe 5.0 for developers who want an AMD path for local inference and AI experimentation.",
    specs: [
      { label: "GPU Memory", value: "32GB GDDR6 / ECC on Linux" },
      { label: "Compute / AI Hardware", value: "64 compute units / 128 AI accelerators" },
      { label: "AI Workstation Profile", value: "383 FP8 TFLOPS / 640 GB/s bandwidth / 300W TBP" },
    ],
    bestFor: [
      "AMD local AI development",
      "ROCm-oriented inference experiments",
      "32GB professional desktop workloads",
    ],
    usedIn: [
      "AI developer workstations",
      "Memory-intensive AMD desktop builds",
      "Visualization and inference prototype systems",
    ],
    blackScarabPov:
      "This should be tracked as AMD's AI-focused pro desktop alternative, but it needs an availability check before buyers rely on it. It could become compelling for ROCm-aware local AI stacks, while CUDA-first software still points many users toward NVIDIA.",
    officialUrl:
      "https://www.amd.com/en/products/graphics/workstations/radeon-ai-pro/ai-9000-series/amd-radeon-ai-pro-r9700.html",
    sourceLabel: "Official product page",
  },
  {
    slug: "intel-arc-pro-b60-24gb",
    name: "Intel Arc Pro B60 24GB",
    vendor: "Intel",
    category: "GPUs & Accelerators",
    industries: ["Manufacturing", "Healthcare", "Retail", "Other"],
    powerProfile: "Medium (25–200W)",
    deploymentTypes: ["Indoor"],
    price: "Price to verify",
    priceStatus: "Research needed",
    priceNote:
      "Intel's Arc Pro B-Series overview was unable to load live pricing at the time of catalog entry. Verify availability and pricing through listed retailers or workstation OEMs before using in a basket.",
    image: "/product-images/intel-arc-pro-b60-24gb.png",
    imageAlt: "Intel Arc Pro B60 24GB workstation GPU",
    summary:
      "A 24GB Intel Xe2 workstation GPU for AI-capable professional desktops, larger local model execution, multi-display workflows, and scalable Linux workstation builds.",
    whyItMatters:
      "The Arc Pro B60 gives the catalog a serious Intel GPU option with 24GB of memory, XMX AI engines, and Gen 5 PCIe. It is useful for users exploring Intel-optimized local AI, media, visualization, and multi-GPU Linux workflows outside the CUDA-first path.",
    specs: [
      { label: "GPU Memory", value: "24GB" },
      { label: "AI / Xe Hardware", value: "20 Xe-cores / 197 pTOPS" },
      { label: "Workstation Profile", value: "456 GB/s bandwidth / 120-200W TBP / PCIe Gen 5 x8" },
    ],
    bestFor: [
      "Intel local AI workstations",
      "Power-efficient 24GB GPU builds",
      "Professional visualization and media workflows",
    ],
    usedIn: [
      "AI developer workstations",
      "Linux multi-GPU inference systems",
      "Design, engineering, and content creation desktops",
    ],
    blackScarabPov:
      "This is a good third-ecosystem card to track. It will not replace NVIDIA for CUDA-native stacks, but it may be compelling where Intel drivers, media engines, Linux multi-GPU support, and 24GB of VRAM fit the user's software plan.",
    officialUrl:
      "https://www.intel.com/content/www/us/en/products/docs/discrete-gpus/arc/workstations/b-series/overview.html",
    sourceLabel: "Official product page",
  },
  {
    slug: "google-coral-usb-accelerator",
    name: "Google Coral USB Accelerator",
    vendor: "Google Coral",
    category: "GPUs & Accelerators",
    industries: ["Agriculture", "Manufacturing", "Retail", "Other"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Indoor", "Mobile", "Industrial"],
    price: "$59.99",
    priceStatus: "Starts at",
    priceNote:
      "Coral lists the USB Accelerator starting at $59.99 with multiple distributor links, while noting that some Coral products may face stock delays. Verify live stock before adding to a deployment basket.",
    image: "/product-images/google-coral-usb-accelerator.png",
    imageAlt: "Google Coral USB Accelerator connected by USB-C",
    summary:
      "A compact USB Edge TPU accelerator for low-power TensorFlow Lite inference on existing Linux, macOS, Windows, and Raspberry Pi systems.",
    whyItMatters:
      "The Coral USB Accelerator is the opposite end of the AI hardware spectrum from H100-class GPUs. It gives edge builders a cheap, low-power way to add dedicated INT8 inference to cameras, kiosks, prototypes, and small embedded systems.",
    specs: [
      { label: "ML Accelerator", value: "Google Edge TPU coprocessor" },
      { label: "AI Performance", value: "4 TOPS INT8 / 2 TOPS per watt" },
      { label: "Edge Profile", value: "USB 3.0 Type-C / 65 mm x 30 mm / TensorFlow Lite" },
    ],
    bestFor: [
      "Low-power edge inference",
      "Raspberry Pi and small Linux prototypes",
      "TensorFlow Lite computer vision workloads",
    ],
    usedIn: [
      "Smart camera prototypes",
      "Retail and kiosk inference",
      "Agriculture and industrial edge sensors",
    ],
    blackScarabPov:
      "This is a useful catalog anchor for tiny edge AI. It will not run general LLM workloads, but it is excellent for cost-sensitive INT8 TensorFlow Lite models where low power, simple USB setup, and local inference matter.",
    officialUrl: "https://www.coral.ai/products/accelerator",
    sourceLabel: "Official product page",
  },
  {
    slug: "nvidia-rtx-6000-ada-generation",
    name: "NVIDIA RTX 6000 Ada Generation",
    vendor: "NVIDIA",
    category: "GPUs & Accelerators",
    industries: ["Manufacturing", "Healthcare", "Retail", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor"],
    price: "Request quote",
    priceStatus: "Quote required",
    priceNote:
      "NVIDIA routes RTX 6000 Ada workstation purchasing through partners and system builders. Final pricing depends on channel, workstation vendor, support, and configuration.",
    image: "/product-images/nvidia-rtx-6000-ada-generation.png",
    imageAlt: "NVIDIA RTX 6000 Ada Generation professional GPU",
    summary:
      "A 48GB Ada-generation professional GPU for AI workstations, rendering, simulation, visualization, and virtual workstation infrastructure.",
    whyItMatters:
      "The RTX 6000 Ada Generation is an important professional workstation baseline: it pairs 48GB of ECC memory with NVIDIA's pro driver ecosystem, strong Tensor Core throughput, and broad software support for AI, design, and simulation workloads.",
    specs: [
      { label: "GPU Memory", value: "48GB GDDR6 with ECC" },
      { label: "AI / FP32 Performance", value: "1457 AI TOPS / 91.1 TFLOPS FP32" },
      { label: "Workstation Profile", value: "960 GB/s bandwidth / 300W max power" },
    ],
    bestFor: [
      "Professional AI workstations",
      "Rendering and simulation pipelines",
      "Virtual workstation infrastructure",
    ],
    usedIn: [
      "Data science workstations",
      "Engineering visualization systems",
      "Professional rendering and simulation builds",
    ],
    blackScarabPov:
      "This is a useful previous-generation pro reference point against the RTX PRO 6000 Blackwell family. It remains relevant for buyers who want 48GB of professional VRAM and mature workstation integration without moving to the newest 96GB Blackwell cards.",
    officialUrl:
      "https://www.nvidia.com/en-us/products/workstations/rtx-6000/",
    sourceLabel: "Official product page",
  },
  {
    slug: "nvidia-geforce-rtx-4060-ti",
    name: "NVIDIA GeForce RTX 4060 Ti",
    vendor: "NVIDIA",
    category: "GPUs & Accelerators",
    industries: ["Manufacturing", "Retail", "Other"],
    powerProfile: "Medium (25–200W)",
    deploymentTypes: ["Indoor"],
    price: "Price to verify",
    priceStatus: "Research needed",
    priceNote:
      "NVIDIA's official product page shows specifications and buying options, but the exposed shop price is a placeholder. Verify current 8GB or 16GB board-partner pricing before using in a basket.",
    image: "/product-images/nvidia-geforce-rtx-4060-ti.png",
    imageAlt: "NVIDIA GeForce RTX 4060 Ti graphics card on a green and black background",
    summary:
      "A power-efficient Ada Lovelace GeForce GPU for budget local AI experiments, creator PCs, lightweight inference, and GPU-backed development workstations.",
    whyItMatters:
      "The RTX 4060 Ti is not a large-model powerhouse, but the 16GB version gives budget builders an accessible CUDA GPU with enough VRAM for smaller local AI workflows, prototyping, and model experimentation.",
    specs: [
      { label: "GPU Memory", value: "16GB or 8GB GDDR6" },
      { label: "CUDA / AI Performance", value: "4,352 CUDA cores / 353 AI TOPS" },
      { label: "Power Guidance", value: "160W graphics card power / 550W required system power" },
    ],
    bestFor: [
      "Budget local AI experiments",
      "Lightweight inference and prototyping",
      "Creator and development desktops",
    ],
    usedIn: [
      "Entry local AI workstations",
      "Computer vision prototype PCs",
      "CUDA development and testing systems",
    ],
    blackScarabPov:
      "This belongs in the catalog as the accessible NVIDIA option, especially in its 16GB form. It should be positioned for learning, prototyping, and smaller workloads, not as a substitute for the RTX 4090, RTX 5090, or professional RTX cards in serious production baskets.",
    officialUrl:
      "https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4060-4060ti/",
    sourceLabel: "Official product page",
  },
  {
    slug: "nvidia-geforce-rtx-4070-ti-super",
    name: "NVIDIA GeForce RTX 4070 Ti Super",
    vendor: "NVIDIA",
    category: "GPUs & Accelerators",
    industries: ["Manufacturing", "Healthcare", "Retail", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor"],
    price: "$999.99",
    priceStatus: "Distributor listing",
    priceNote:
      "Amazon listing price from the provided ASUS TUF Gaming RTX 4070 Ti Super page. Verify current seller, condition, shipping, and availability before using in a final basket.",
    image: "/product-images/nvidia-geforce-rtx-4070-ti-super.png",
    imageAlt: "ASUS TUF Gaming GeForce RTX 4070 Ti Super graphics card and retail box",
    summary:
      "A 16GB Ada Lovelace GeForce GPU for serious local AI workstations, creator systems, rendering, simulation, and CUDA-backed development without stepping up to flagship pricing.",
    whyItMatters:
      "The RTX 4070 Ti Super is one of the cleaner consumer GPU choices for local AI because it combines 16GB of GDDR6X memory, strong Tensor Core throughput, and manageable workstation-class power requirements.",
    specs: [
      { label: "GPU Memory", value: "16GB GDDR6X" },
      { label: "CUDA / AI Performance", value: "8,448 CUDA cores / 706 AI TOPS" },
      { label: "Power Guidance", value: "285W total graphics power" },
    ],
    bestFor: [
      "Mid/high-tier local AI workstations",
      "16GB VRAM inference and experimentation",
      "Creator, rendering, and simulation PCs",
    ],
    usedIn: [
      "Private AI desktop builds",
      "CUDA development workstations",
      "GPU-backed content and engineering systems",
    ],
    blackScarabPov:
      "This is the sensible step between the RTX 4060 Ti and RTX 4090. It gives buyers a meaningful 16GB VRAM tier for local AI and pro workloads while keeping power, cooling, and budget more approachable than the flagship cards.",
    officialUrl:
      "https://www.amazon.com/ASUS-Graphics-RTX4070Ti-DisplayPort-TUF-RTX4070TIS-O16G-GAMING/dp/B0CS3X3DTG/ref=sr_1_1?dib=eyJ2IjoiMSJ9.97q8KjMhSlxGgtorvgfN7DDyUlU_TveKcspa3XvJokw8Y6OcmG-Ta03B6Q3AwRqaCUmhzZ-eLIbr-blQoQvVjA94esF4mma0pWOrwPUiwczZM8Wuzcht4MWBLB4r-PTjrUnyTik55I_GymIyMr7R7gbV6RyAA4CgUqEv3UUGWCVnynl6n8SgFIE6ZsSzpg9OSM5vuu1c5A8z_gh-u4kkTsOtL6TFEokwamJYpOwxL7Q.g0BSyQ3RS-a5C0VRRmKDMgw5qNt1m5ZcXLEA8DlqrBg&dib_tag=se&keywords=geforce+rtx%E2%84%A2+4070+ti+super&qid=1779370718&sr=8-1",
    sourceLabel: "Distributor listing",
  },
  {
    slug: "nvidia-geforce-rtx-4080-super",
    name: "NVIDIA GeForce RTX 4080 Super",
    vendor: "NVIDIA",
    category: "GPUs & Accelerators",
    industries: ["Manufacturing", "Healthcare", "Retail", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor"],
    price: "Price to verify",
    priceStatus: "Research needed",
    priceNote:
      "Amazon requires cart or sign-in flow for current price visibility on the provided ASUS TUF Gaming RTX 4080 Super listing. Verify live seller, condition, shipping, and availability before using in a final basket.",
    image: "/product-images/nvidia-geforce-rtx-4080-super.png",
    imageAlt: "ASUS TUF Gaming GeForce RTX 4080 Super graphics card and retail box",
    summary:
      "A high-end 16GB Ada Lovelace GeForce GPU for premium local AI workstations, rendering, simulation, creator workloads, and CUDA-backed development systems.",
    whyItMatters:
      "The RTX 4080 Super sits just below flagship consumer GPUs while keeping the same 16GB VRAM tier as the RTX 4070 Ti Super. It offers more compute headroom for users who need stronger local AI and rendering performance without moving to RTX 4090-class power and pricing.",
    specs: [
      { label: "GPU Memory", value: "16GB GDDR6X" },
      { label: "CUDA / AI Performance", value: "10,240 CUDA cores / 836 AI TOPS" },
      { label: "Power Guidance", value: "320W total graphics power" },
    ],
    bestFor: [
      "Premium 16GB local AI workstations",
      "High-throughput inference and development",
      "Rendering, simulation, and creator systems",
    ],
    usedIn: [
      "Private AI workstation builds",
      "CUDA-heavy development desktops",
      "GPU-backed visualization and content systems",
    ],
    blackScarabPov:
      "This is the upper 16GB consumer GPU tier. It makes sense when a buyer wants more compute than the RTX 4070 Ti Super but does not need or cannot justify the VRAM, power draw, and cost profile of the RTX 4090 or RTX 5090.",
    officialUrl:
      "https://www.amazon.com/ASUS-Gaming-GeForce-Graphics-DisplayPort/dp/B0CQPZTRL3?th=1",
    sourceLabel: "Distributor listing",
  },
  {
    slug: "nvidia-geforce-rtx-5090",
    name: "NVIDIA GeForce RTX 5090",
    vendor: "NVIDIA",
    category: "GPUs & Accelerators",
    industries: ["Manufacturing", "Healthcare", "Retail", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor"],
    price: "Price to verify",
    priceStatus: "Research needed",
    priceNote:
      "NVIDIA's official product page shows specifications and buying options, but the page text exposes placeholder pricing. Verify live board-partner pricing before using in a final basket.",
    image: "/product-images/nvidia-geforce-rtx-5090.png",
    imageAlt: "NVIDIA GeForce RTX 5090 graphics card over a green wave pattern",
    summary:
      "A 32GB Blackwell-generation GeForce RTX GPU for premium local AI workstations, high-end inference, rendering, simulation, and creator workloads.",
    whyItMatters:
      "The RTX 5090 pushes the consumer workstation tier forward with 32GB of GDDR7 memory, 5th-generation Tensor Cores, and significantly higher AI throughput, making it a major candidate for serious local AI baskets.",
    specs: [
      { label: "GPU Memory", value: "32GB GDDR7" },
      { label: "CUDA / AI Performance", value: "21,760 CUDA cores / 3352 AI TOPS" },
      { label: "Power Guidance", value: "575W graphics card power / 1000W required system power" },
    ],
    bestFor: [
      "Premium local AI workstations",
      "High-end inference and experimentation",
      "Rendering, simulation, and creator workloads",
    ],
    usedIn: [
      "Private AI workstation builds",
      "Local model experimentation systems",
      "GPU-heavy creator and engineering desktops",
    ],
    blackScarabPov:
      "This should become one of the headline local AI workstation GPUs in the catalog. The extra VRAM over the RTX 4090 matters, but the power and cooling requirements mean it should be treated as a full-system design choice, not just a drop-in part.",
    officialUrl:
      "https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/",
    sourceLabel: "Official product page",
  },
  {
    slug: "nvidia-geforce-rtx-4090",
    name: "NVIDIA GeForce RTX 4090",
    vendor: "NVIDIA",
    category: "GPUs & Accelerators",
    industries: ["Manufacturing", "Healthcare", "Retail", "Other"],
    powerProfile: "High (200W+)",
    deploymentTypes: ["Indoor"],
    price: "Price to verify",
    priceStatus: "Research needed",
    priceNote:
      "NVIDIA's official product page provides specifications and where-to-buy paths, but current market pricing varies by board partner, seller, inventory, and region.",
    image: "/product-images/nvidia-geforce-rtx-4090.png",
    imageAlt: "NVIDIA GeForce RTX 4090 graphics card on a green and black background",
    summary:
      "A 24GB GeForce RTX GPU for high-end local AI workstations, model experimentation, rendering, simulation, and GPU-backed development systems.",
    whyItMatters:
      "The RTX 4090 became a defining local AI card because its 24GB of VRAM, CUDA ecosystem, and strong Tensor Core performance make it practical for serious inference, fine-tuning experiments, and creator workloads outside a data center.",
    specs: [
      { label: "GPU Memory", value: "24GB GDDR6X" },
      { label: "CUDA / AI Performance", value: "16,384 CUDA cores / 1321 AI TOPS" },
      { label: "Power Guidance", value: "450W graphics card power / 850W minimum system power" },
    ],
    bestFor: [
      "High-end local AI workstations",
      "GPU-backed model experimentation",
      "Rendering, simulation, and creator workloads",
    ],
    usedIn: [
      "Private AI workstations",
      "Local LLM inference boxes",
      "GPU development and prototyping systems",
    ],
    blackScarabPov:
      "This is one of the most important consumer GPUs to track for local AI. It is not a data center card, but the 24GB VRAM and CUDA software stack make it a practical anchor for serious workstation baskets when enterprise GPUs are over budget.",
    officialUrl:
      "https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/",
    sourceLabel: "Official product page",
  },
  {
    slug: "onlogic-karbon-804",
    name: "OnLogic Karbon 804",
    vendor: "OnLogic",
    category: "Edge Computers",
    industries: [
      "Agriculture",
      "Manufacturing",
      "Transportation & Logistics",
      "Healthcare",
    ],
    powerProfile: "Medium (25–200W)",
    deploymentTypes: ["Indoor", "Mobile", "Industrial"],
    price: "Starts at $4,051.00",
    priceStatus: "Starts at",
    priceNote:
      "OnLogic configure-and-buy pricing varies by processor, memory, storage, ModBay, PCIe, wireless, and mounting options. Verify the final configuration price before using it in a deployment basket.",
    image: "/product-images/onlogic-karbon-804.png",
    imageAlt:
      "OnLogic Karbon 804 rugged edge computer with orange front I/O panel and expansion bay",
    summary:
      "A rugged industrial edge computer with 12th or 13th Gen Intel Core processing, dual ModBay, PCIe Gen 4 expansion, and high-density I/O for automation, machine learning, and field AI deployments.",
    whyItMatters:
      "The Karbon 804 gives edge AI projects a flexible industrial compute platform that can connect cameras, sensors, PoE devices, cellular links, storage, and accelerator cards in one rugged system near the physical operation.",
    specs: [
      { label: "Processor", value: "Intel 12th or 13th Gen Core up to 24-core i9" },
      { label: "Expansion", value: "Dual ModBay plus PCIe Gen 4 x16 or dual x8" },
      { label: "Rugged I/O", value: "Up to 22x LAN or 30x USB, -40C to 70C operating range" },
    ],
    bestFor: [
      "Industrial edge AI gateways",
      "Machine vision and inspection systems",
      "Sensor-heavy field deployments",
    ],
    usedIn: [
      "Factory automation and quality inspection",
      "Fleet, rail, and logistics edge systems",
      "Remote agriculture or infrastructure monitoring",
    ],
    blackScarabPov:
      "This is the strongest Karbon 800 choice for Black Scarab because it combines ModBay I/O flexibility with PCIe expansion. It is the right flagship rugged edge computer when a deployment may need PoE cameras, extra LAN, cellular connectivity, local storage, or GPU acceleration without changing platforms.",
    officialUrl: "https://www.onlogic.com/store/k804/",
    sourceLabel: "Official product page",
  },
  {
    slug: "advantech-mic-733-ao",
    name: "Advantech MIC-733-AO",
    vendor: "Advantech",
    category: "Edge Computers",
    industries: [
      "Manufacturing",
      "Transportation & Logistics",
      "Healthcare",
      "Retail",
    ],
    powerProfile: "Medium (25–200W)",
    deploymentTypes: ["Indoor", "Mobile", "Industrial"],
    price: "Request quote",
    priceStatus: "Quote required",
    priceNote:
      "Advantech lists the MIC-733-AO through its official product and sales channels, but public checkout pricing was not shown on the official product page. Final pricing depends on Jetson AGX Orin memory configuration, PoE, GMSL, storage, expansion, and regional sales terms.",
    image: "/product-images/advantech-mic-733-ao.png",
    imageAlt:
      "Advantech MIC-733-AO fanless Jetson AGX Orin edge AI computer with front I/O",
    summary:
      "A compact fanless edge AI computer based on NVIDIA Jetson AGX Orin, built for industrial vision, robotics, remote monitoring, and high-throughput on-site inference.",
    whyItMatters:
      "The MIC-733-AO packages Jetson AGX Orin compute into a deployable industrial box with PoE-capable Ethernet, USB, serial, SIM, GMSL, NVMe, and optional PCIe expansion for sensor-heavy edge AI systems.",
    specs: [
      { label: "AI Compute", value: "NVIDIA Jetson AGX Orin, up to 275 TOPS" },
      { label: "I/O", value: "4x GbE with optional PoE, USB 3.2 Gen 2, RS-232/422/485, 4-ch DI/DO" },
      { label: "Expansion", value: "mPCIe, dual Nano SIM, M.2 3052, M.2 2280 NVMe, optional PCIe x8" },
    ],
    bestFor: [
      "Industrial computer vision systems",
      "AMR and robotics edge compute",
      "PoE camera and sensor hubs",
    ],
    usedIn: [
      "Factory inspection and machine vision",
      "Warehouse robotics and fleet intelligence",
      "Smart facility and healthcare edge monitoring",
    ],
    blackScarabPov:
      "This is a strong Jetson-based edge computer when a project needs more deployment-ready industrial I/O than a developer kit. The appeal is the combination of AGX Orin AI performance, fanless packaging, PoE-ready networking, cellular expansion paths, GMSL camera support, and optional PCIe expansion in one fieldable platform.",
    officialUrl:
      "https://www.advantech.com/en-us/products/965e4edb-fb98-429e-89ed-9a0a8435a7be/mic-733/mod_09861425-4950-46ab-ad39-1b5522881218",
    sourceLabel: "Official product page",
  },
  {
    slug: "nvidia-jetson-orin-nano-super-developer-kit",
    name: "NVIDIA Jetson Orin Nano Super Developer Kit",
    vendor: "NVIDIA",
    category: "Edge Computers",
    industries: ["Agriculture", "Manufacturing", "Retail", "Other"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Indoor", "Mobile", "Industrial"],
    price: "$249",
    priceStatus: "Exact",
    priceNote:
      "NVIDIA lists the Jetson Orin Nano Super Developer Kit at $249 USD through authorized distributors. Amazon checkout pricing can vary by seller, inventory, shipping, and regional availability, so verify the live listing before using it in a purchasable basket.",
    image: "/product-images/nvidia-jetson-orin-nano-super-developer-kit.png",
    imageAlt:
      "NVIDIA Jetson Orin Nano Super Developer Kit with cooling fan and carrier board",
    summary:
      "A compact Jetson developer kit with up to 67 INT8 TOPS for robotics, vision AI, generative AI experiments, and low-power edge inference prototypes.",
    whyItMatters:
      "The Jetson Orin Nano Super Developer Kit gives builders an affordable CUDA-capable edge AI computer with enough GPU, memory bandwidth, and JetPack ecosystem support to prototype robots, smart cameras, visual agents, and small local AI systems.",
    specs: [
      { label: "AI Compute", value: "67 INT8 TOPS" },
      { label: "GPU / CPU", value: "NVIDIA Ampere GPU with 1024 CUDA cores and 32 Tensor Cores; 6-core Arm Cortex-A78AE CPU" },
      { label: "Memory / Power", value: "8GB 128-bit LPDDR5 at 102 GB/s; 7W-25W" },
    ],
    bestFor: [
      "Jetson AI prototyping",
      "Robotics and smart camera development",
      "Low-power generative AI at the edge",
    ],
    usedIn: [
      "Educational AI labs",
      "Robot perception prototypes",
      "Retail, agriculture, and maker vision systems",
    ],
    blackScarabPov:
      "This is the right entry Jetson product for buyers who want the NVIDIA edge AI ecosystem without jumping straight to Orin NX, AGX Orin, or an industrial enclosure. It belongs in starter baskets for robotics, vision AI, and local model experiments, with the understanding that production deployments may later need a rugged carrier, enclosure, power design, and camera or sensor integration.",
    officialUrl:
      "https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/nano-super-developer-kit/",
    sourceLabel: "Official product page",
    affiliateUrl:
      "https://www.amazon.com/NVIDIA-Jetson-Orin-Nano-Developer/dp/B0BZJTQ5YP/ref=sr_1_1?adgrpid=190077213241&dib=eyJ2IjoiMSJ9.Im0a4F6pyjbDvCc3Rs1VH_ckVhzfFEsxRmkINtrk679fXF99s51_J0TnUZSeuNOMFJjxg73Bwm9-2WYdf1l6vzrxySLWrW6aL-7z2bkYuETAkNArt5ukmHQtg0J1rrHmxdyGUWjictvDQleFQGDVqC_w-ljK3YZ3ze7bxbJTpaGlw6ahmmC78XEl9qBoOITAuBnyQdFBe5Zmk5fwf_rELPKzEDTcSBKPaE2pAd48qho.JQCGvgXmvui80g7m8OyFj4m7A0iCVdlegtlSbngC_IE&dib_tag=se&hvadid=779544412932&hvdev=c&hvexpln=0&hvlocphy=9011905&hvnetw=g&hvocijid=1175338068675014701--&hvqmt=e&hvrand=1175338068675014701&hvtargid=kwd-1774738221519&hydadcr=24360_13517583_2334893&keywords=nvidia+jetson+orin+nano&mcid=ab36144e5d4c3e188645cac639d41b76&qid=1781040212&sr=8-1",
  },
  {
    slug: "seeed-studio-recomputer-j4012",
    name: "Seeed Studio reComputer J4012",
    vendor: "Seeed Studio / NVIDIA Jetson",
    category: "Edge Computers",
    industries: [
      "Agriculture",
      "Manufacturing",
      "Transportation & Logistics",
      "Retail",
    ],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Indoor", "Mobile", "Industrial"],
    price: "$949.00",
    priceStatus: "Exact",
    priceNote:
      "Seeed Studio lists the reComputer J4012 at $949.00 before taxes, shipping, and reseller variation. Verify the live Amazon checkout price before using it in a purchasable basket.",
    image: "/product-images/seeed-studio-recomputer-j4012.png",
    imageAlt:
      "Seeed Studio reComputer J4012 edge AI computer with Jetson Orin NX enclosure",
    summary:
      "A compact Jetson Orin NX 16GB edge AI computer for local inference, robotics prototypes, smart cameras, machine vision, and low-power physical AI deployments.",
    whyItMatters:
      "The J4012 packages NVIDIA Jetson Orin NX compute into a deployable mini edge computer, making it easier to move from module-level experimentation into a ruggedized on-site AI box with useful I/O, storage, and pre-installed software.",
    specs: [
      { label: "AI Compute", value: "NVIDIA Jetson Orin NX 16GB, up to 100 TOPS" },
      { label: "Memory / Storage", value: "16GB LPDDR5 / 128GB NVMe SSD" },
      { label: "I/O", value: "4x USB 3.2, HDMI, Gigabit Ethernet, CAN, 40-pin GPIO, M.2 expansion" },
    ],
    bestFor: [
      "Edge AI vision boxes",
      "Robotics and AMR prototypes",
      "Low-power local inference deployments",
    ],
    usedIn: [
      "Factory machine vision",
      "Smart retail camera analytics",
      "Robotics perception and sensor hubs",
    ],
    blackScarabPov:
      "This is a practical catalog item because buyers get a complete Jetson-based edge computer instead of sourcing a module, carrier board, storage, enclosure, and cooling separately. It belongs in early baskets for vision inspection, robotics labs, and compact on-site AI systems.",
    officialUrl: "https://www.seeedstudio.com/reComputer-J4012-p-5586.html",
    sourceLabel: "Official product page",
    affiliateUrl:
      "https://www.amazon.com/seeed-studio-reComputer-J4012-Edge-Pre-Installed/dp/B0C88V4CB7/ref=sr_1_1_sspa?adgrpid=186021838763&dib=eyJ2IjoiMSJ9.x9SygZYg5g3zrc77UfsxHxVK2z1lnBG63wyHQPfUhgswM1ErCqz_lUnQV5Lspl2LkTlsGfqy3aeG-B5x6sP4YnbODm0v5FwqA-v9kIuFQp2ZG7s8HlWGmg2Sb5WQOMSj8j2cfbDTPrMScnnJbuVCSquyf5H_vLdPqFOqLejMpJjz8tBJpNNEamF_Csl0ym0ZCa7_3c1lWhzcPEu16XJVJtSKMYbCwNEF73BwyAWGASU.ATdnPUNRrLfyxO_rn2IylMgRL-ORNP2x-aMFZhdMQUU&dib_tag=se&hvadid=779581331944&hvdev=c&hvexpln=0&hvlocphy=9011905&hvnetw=g&hvocijid=1304425388795434517--&hvqmt=e&hvrand=1304425388795434517&hvtargid=kwd-2432736111329&hydadcr=24139_13533938_2335427&keywords=recomputer%2Bsuper%2Bj4012&mcid=302820366c3c30e39cffdc6626c389ef&qid=1781017235&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
  },
  {
    slug: "raspberry-pi-5",
    name: "Raspberry Pi 5",
    vendor: "Raspberry Pi",
    category: "Boards, SBCs & Microcontrollers",
    industries: ["Agriculture", "Manufacturing", "Retail", "Other"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Indoor", "Mobile"],
    price: "Starts at $50",
    priceStatus: "Starts at",
    priceNote:
      "Raspberry Pi lists pricing by memory configuration, with entry pricing starting at $50. Verify the selected RAM size, power supply, case, storage, HATs, and reseller availability before using it in a deployment basket.",
    image: "/product-images/raspberry-pi-5.png",
    imageAlt: "Raspberry Pi 5 single-board computer with official product artwork",
    summary:
      "A versatile single-board computer for prototyping, lightweight edge workloads, robotics education, sensors, control systems, and low-cost local automation projects.",
    whyItMatters:
      "Raspberry Pi 5 is not an AI accelerator by itself, but it is one of the most useful low-cost control and prototyping boards around the edge AI stack. It can coordinate sensors, cameras, I/O, networking, dashboards, and automation workflows, especially when paired with accelerator HATs or external devices.",
    specs: [
      { label: "Processor", value: "Broadcom BCM2712 quad-core Arm Cortex-A76 at 2.4GHz" },
      { label: "Memory Options", value: "2GB, 4GB, 8GB, or 16GB LPDDR4X" },
      { label: "Expansion", value: "Dual 4-lane MIPI camera/display, PCIe 2.0 x1, 40-pin GPIO" },
    ],
    bestFor: [
      "Robotics and sensor prototypes",
      "Low-cost edge controllers",
      "Education and developer labs",
    ],
    usedIn: [
      "Camera and sensor gateways",
      "Robotics control experiments",
      "Smart retail and building automation prototypes",
    ],
    blackScarabPov:
      "This belongs in the catalog because many real edge AI projects still need a cheap controller around the expensive AI hardware. Raspberry Pi 5 is best treated as the coordination and prototyping layer, not the main accelerator for heavy model inference.",
    officialUrl: "https://www.raspberrypi.com/products/raspberry-pi-5/",
    sourceLabel: "Official product page",
  },
  {
    slug: "raspberry-pi-compute-module-5",
    name: "Raspberry Pi Compute Module 5",
    vendor: "Raspberry Pi",
    category: "Edge Computers",
    industries: ["Agriculture", "Manufacturing", "Retail", "Other"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Indoor", "Mobile", "Industrial"],
    price: "$253.99",
    priceStatus: "Distributor listing",
    priceNote:
      "The Amazon listing provided shows this Waveshare-sold Compute Module 5 configuration as buy-new from $253.99. Raspberry Pi lists base Compute Module 5 variants from $67.50, but pricing varies heavily by RAM, eMMC, wireless, reseller, and whether accessories or carrier boards are included.",
    image: "/product-images/raspberry-pi-compute-module-5.png",
    imageAlt: "Raspberry Pi Compute Module 5 embedded compute module board",
    summary:
      "An embedded Raspberry Pi 5-class compute module for custom carrier boards, industrial prototypes, edge controllers, kiosks, and productized IoT or robotics systems.",
    whyItMatters:
      "Compute Module 5 gives builders the Raspberry Pi 5 processor platform in a smaller embedded form factor with configurable memory, optional eMMC, optional wireless, PCIe, USB, Ethernet support through carrier boards, and MIPI interfaces for cameras and displays.",
    specs: [
      { label: "Processor", value: "Broadcom BCM2712 quad-core Arm Cortex-A76 at 2.4GHz" },
      { label: "Memory / Storage", value: "2GB-16GB LPDDR4X, optional 0GB-64GB eMMC" },
      { label: "Form Factor", value: "55 x 40 x 4.7 mm, 200-pin board-to-board connectors" },
    ],
    bestFor: [
      "Custom edge products",
      "Industrial carrier-board designs",
      "Embedded robotics and IoT controllers",
    ],
    usedIn: [
      "Smart camera appliances",
      "Kiosks and retail devices",
      "Custom industrial gateways",
    ],
    blackScarabPov:
      "This is the better Raspberry Pi option when a buyer is moving from prototype to product. The standard Pi 5 is convenient for development; Compute Module 5 is for builders who need a custom carrier board, embedded storage options, and a cleaner path toward repeatable hardware.",
    officialUrl: "https://www.raspberrypi.com/products/compute-module-5/",
    sourceLabel: "Official product page",
    affiliateUrl:
      "https://www.amazon.com/Waveshare-Official-Raspberry-CM5108000-Wireless/dp/B0DY1513GQ/ref=sr_1_3?adgrpid=192062292851&dib=eyJ2IjoiMSJ9.1eTJAe3q218znRpyNRFxZ2W7JTkcbAJrS1pACGtIiBmtz9fg5oiLc4gpb9UYcHiyRikjESDUc4GQ6LI7cLRug8CYMi811g-qpQOocEJ6DfLzTfY-F27NFqhhAdajoXHh7zHhLEHTkoMOdEq9_3JQs4gKMkxyTTCWEV3OAdDK5cvYzlh5uZLPq3qzRgWlpYhYNDcTya3I0t2CIC5sMnDP-5P6dyURVHEU7ybu_DWglqk.AtcAuadle-9eQ2ZJR7gUCmqIOC8BdifU3cSKS57280M&dib_tag=se&hvadid=779544499890&hvdev=c&hvexpln=0&hvlocphy=9011905&hvnetw=g&hvocijid=10037798709126297364--&hvqmt=e&hvrand=10037798709126297364&hvtargid=kwd-1379718175646&hydadcr=24366_13859585_2335234&keywords=raspberry+pi+compute+module+5&mcid=8481e353659e39cba1498d16a69d7fc6&qid=1781018993&sr=8-3",
  },
  {
    slug: "arduino-nicla-vision",
    name: "Arduino Nicla Vision",
    vendor: "Arduino",
    category: "Boards, SBCs & Microcontrollers",
    industries: ["Agriculture", "Manufacturing", "Healthcare", "Retail"],
    powerProfile: "Low (<25W)",
    deploymentTypes: ["Indoor", "Mobile", "Industrial"],
    price: "$80.20",
    priceStatus: "Exact",
    priceNote:
      "Arduino Store USA lists Nicla Vision at $80.20 before taxes, shipping, and regional availability changes. Verify the live checkout price before using it in a purchasable basket.",
    image: "/product-images/arduino-nicla-vision.png",
    imageAlt: "Arduino Nicla Vision tiny machine vision board with camera and sensors",
    summary:
      "A tiny Arduino vision AI board with a 2MP camera, dual-core STM32 processor, IMU, microphone, distance sensor, Wi-Fi, and Bluetooth LE for TinyML and low-power edge perception projects.",
    whyItMatters:
      "Nicla Vision makes on-device sensing and image processing accessible in a board small enough for embedded prototypes, smart cameras, predictive maintenance nodes, asset tracking, and battery-powered machine vision experiments.",
    specs: [
      { label: "Processor", value: "STM32H747AII6 dual Arm Cortex-M7 up to 480MHz and Cortex-M4 up to 240MHz" },
      { label: "Sensors", value: "2MP color camera, 6-axis IMU, microphone, and time-of-flight distance sensor" },
      { label: "Connectivity / Size", value: "Wi-Fi, Bluetooth LE 4.2, MicroPython support, 22.86 x 22.86 mm" },
    ],
    bestFor: [
      "TinyML vision prototypes",
      "Battery-powered sensor nodes",
      "Low-cost machine vision experiments",
    ],
    usedIn: [
      "Predictive maintenance sensing",
      "Smart agriculture and garden monitoring",
      "Retail kiosks and gesture interfaces",
    ],
    blackScarabPov:
      "This is not a Jetson-class computer, but it is exactly the kind of small perception board that belongs around an edge AI stack. Use it when the project needs a compact camera-plus-sensor node for detection, telemetry, or TinyML decisions before data ever reaches a larger gateway.",
    officialUrl: "https://store-usa.arduino.cc/products/nicla-vision",
    sourceLabel: "Official product page",
  },
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
    priceNote:
      "Module and carrier-board pricing varies by distributor, memory configuration, and whether the buyer is sourcing a complete edge computer or only the Jetson module.",
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
      "https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/",
    sourceLabel: "Official product page",
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
    priceNote:
      "Dell publishes system specifications and support documentation for the Edge Gateway 5200, but public checkout pricing was not shown on the official manual page. Final pricing depends on CPU, memory, storage, wireless, expansion, service, and partner procurement terms.",
    image: "/product-images/dell-edge-gateway-5200.png",
    imageAlt: "Dell EMC Edge Gateway 5200 industrial gateway with ribbed black chassis",
    summary:
      "An industrial edge gateway with Intel Core i3/i5/i7 TE processor options, wired and wireless connectivity, industrial I/O, and support for Windows IoT, Ubuntu, and Dell NativeEdge.",
    whyItMatters:
      "The Edge Gateway 5200 is useful when an AI or automation deployment needs a rugged on-site compute and integration layer between enterprise systems, machine networks, field devices, and local analytics workloads.",
    specs: [
      { label: "Processor / Memory", value: "Intel Core i7-9700TE, i5-9500TE, or i3-9100TE; up to 64GB DDR4" },
      { label: "Industrial I/O", value: "3x Intel GbE, 6x external USB, COM ports, 8-ch DI/DO, WiFi 6E, Bluetooth 5.3" },
      { label: "Rugged Platform", value: "12-24 VDC input, IP30, 0C to 60C operation with airflow, wall mount support" },
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
      "This is a practical edge gateway when the system problem is not only inference, but also device integration, remote operations, industrial I/O, and repeatable multi-site deployment. It is best positioned as the reliable operations layer around sensors, machines, networks, and smaller local analytics workloads.",
    officialUrl:
      "https://www.dell.com/support/manuals/en-hn/dell-edge-gateway-5200/egw-5200-users-guide/egw-5200-system-specifications?guid=guid-08a269b0-16fa-4e6e-b3cf-2194de9f924f&lang=en-us",
    sourceLabel: "Official manual",
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
  "Boards, SBCs & Microcontrollers",
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
    category: "Boards, SBCs & Microcontrollers",
    description:
      "Single-board computers, microcontrollers, and prototyping boards for small edge AI, control loops, and sensor projects.",
    examples: ["Raspberry Pi 5", "Raspberry Pi Pico", "Arduino"],
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
