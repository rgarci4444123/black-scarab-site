# Black Scarab content taxonomy migration review

Prepared October 7, 2026. Approved October 7, 2026. This document preserves the reviewed proposal; implementation and verification are recorded in [content-taxonomy.md](content-taxonomy.md).

The inventory covers 42 News reports, all 81 internal Insights articles, and six external LinkedIn articles displayed in the Insights archive. Guides, case studies, and series introductions are included because they share the internal Insights content model.

## Proposed schema

Add a `taxonomy` object to `NewsUpdate` and `CaseStudyArticle`. Carry the same object into the derived `Insight` archive record so future archive queries do not lose classification.

```ts
type ArticleTaxonomy = {
  primaryIndustry: IndustrySlug;
  relevantIndustries?: IndustrySlug[];
  technologies: TechnologySlug[];
  applications: ApplicationSlug[];
};
```

Primary Industry is mandatory and singular. Relevant Industries is optional; absence and an empty array both mean no secondary assignments. Technology and Application arrays may be empty when the article does not substantiate a classification. All values must reference controlled registries. Disallow duplicate values and disallow the primary industry in the secondary array. Unknown terms fail validation rather than falling back to Cross-Industry.

Industry, technology, and application each have their own slug and editable display label. The proposed registry includes the requested 15 industries, 27 technology terms and 51 applications evidenced by the current archive. Applications are an initial extensible vocabulary, not a complete catalog. New terms require a registry entry before use. Retiring a term requires an explicit alias and reviewed migration; changing its label does not change its identity.

Use the existing article slug with its content type as the migration key, for example `news:figure-helix-2-5-zero-shot-homes`. Keep the proposed migration separate from the content source until reviewed. After approval, add required taxonomy values to each original article definition and factory. Do not rely on a generic default or a sidecar fallback for future articles.

Companies and authors remain independent relationships. Do not turn company names, products, people, geography, commercial models, or series names into industry values. Future company, product, and deployment links should use verified entity IDs in separate relationship fields, not taxonomy slugs. This phase creates no Intelligence entities or relationships.

## Controlled industries

| Stable slug | Display name |
| --- | --- |
| `manufacturing` | Manufacturing |
| `construction` | Construction |
| `warehousing-logistics` | Warehousing & Logistics |
| `transportation-mobility` | Transportation & Mobility |
| `mining` | Mining |
| `energy-utilities` | Energy & Utilities |
| `agriculture` | Agriculture |
| `healthcare-life-sciences` | Healthcare & Life Sciences |
| `data-centers` | Data Centers |
| `public-safety-government` | Public Safety & Government |
| `retail` | Retail |
| `hospitality-services` | Hospitality & Services |
| `consumer-home` | Consumer & Home |
| `defense-aerospace` | Defense & Aerospace |
| `cross-industry` | Physical AI |

## News report mapping

| Existing article | Current label | Proposed Primary Industry |
| --- | --- | --- |
| [Multiply Labs raises $75 million to move robotic drug manufacturing toward commercial scale](https://www.blackscarab.ai/news/multiply-labs-series-b-robotic-biomanufacturing) | Robotics and biomanufacturing | Healthcare & Life Sciences |
| [Unitree Dex5 S robotic hand: Price, specs and comparisons](https://www.blackscarab.ai/news/unitree-dex5-s-robotic-hand) | Robotics and manipulation | Cross-Industry |
| [Volvo and Waabi bring autonomous freight into Warp’s Texas network](https://www.blackscarab.ai/news/volvo-waabi-warp-customer-operations) | Deployment and autonomous systems | Transportation & Mobility |
| [ANYbotics Introduces Shift With an October Upgrade for Industrial Inspection Workflows](https://www.blackscarab.ai/news/anybotics-shift-industrial-inspection-upgrade) | Robotics Software | Manufacturing |
| [Destro Raises $8M to Coordinate Mixed Robot Fleets in Warehouses](https://www.blackscarab.ai/news/destro-ai-seed-warehouse-robot-coordination) | Capital News | Warehousing & Logistics |
| [Tangent raises 4.5 million dollars for fine manipulation in factories](https://www.blackscarab.ai/news/tangent-robotics-pre-seed-fine-motor-skills) | Capital News | Manufacturing |
| [a16z leads $7.5 million round for Aleph’s autonomous surgery program](https://www.blackscarab.ai/news/aleph-autonomous-surgery-preseed) | Capital News | Healthcare & Life Sciences |
| [NVIDIA targets the cost of watching factory video with VSS 3.3](https://www.blackscarab.ai/news/nvidia-vss-3-3-industrial-video-agents) | Infrastructure News | Manufacturing |
| [Dyna’s Taku robot takes on the laundry room, beyond folding a towel](https://www.blackscarab.ai/news/dyna-taku-laundry-workflow) | Robotics News | Hospitality & Services |
| [ABB brings robot programming to your tablet, with safety hardware attached](https://www.blackscarab.ai/news/abb-e-device-tablet-robot-safety-interface) | Robotics News | Manufacturing |
| [Sharpa links robot touch, motion, and training data at IROS](https://www.blackscarab.ai/news/sharpa-iros-dexterous-manipulation-stack) | Robotics News | Cross-Industry |
| [AMD agrees to buy World Labs for $8.2 billion](https://www.blackscarab.ai/news/amd-world-labs-8-2-billion-acquisition) | AI Infrastructure | Cross-Industry |
| [Extend Robotics raises £2.6 million to sell completed work, not robots](https://www.blackscarab.ai/news/extend-robotics-result-as-a-service) | Robotics Business | Manufacturing |
| [Microsoft tests when robots should think beyond the machine](https://www.blackscarab.ai/news/microsoft-robot-inference-offloading-edge-cloud) | Robotics Infrastructure | Cross-Industry |
| [Qualcomm reaches for the software layer that moves robots](https://www.blackscarab.ai/news/qualcomm-picknik-moveit-robotics-software) | Robotics Software | Cross-Industry |
| [Amazon plans a $100 million Indiana robotics factory](https://www.blackscarab.ai/news/amazon-indiana-robotics-manufacturing) | Robotics Manufacturing | Manufacturing |
| [OpenAI is building more than a robot team](https://www.blackscarab.ai/news/openai-general-purpose-robotics-team) | Robotics Strategy | Cross-Industry |
| [SoftBank agrees to buy Robotics and AI Institute, report says](https://www.blackscarab.ai/news/softbank-robotics-ai-institute-acquisition) | Robotics Business | Cross-Industry |
| [Faraday Future puts nine new robot configurations on sale](https://www.blackscarab.ai/news/faraday-future-nine-robot-launch) | Robotics Business | Public Safety & Government |
| [D Robotics raises $400 million for the computing layer beneath robots](https://www.blackscarab.ai/news/d-robotics-series-c-robot-computing) | Funding News | Cross-Industry |
| [Figure takes Helix 2.5 into 30 unfamiliar homes](https://www.blackscarab.ai/news/figure-helix-2-5-zero-shot-homes) | Humanoid Robotics | Consumer & Home |
| [Watney raises $80 million to build robots for the data center boom](https://www.blackscarab.ai/news/watney-series-a-data-center-robots) | Funding News | Data Centers |
| [Universal Robots rebuilds its cobot platform for the AI factory](https://www.blackscarab.ai/news/universal-robots-gen-7-ai-ready-cobot-platform) | Robotics News | Manufacturing |
| [Bain Capital Ventures raises $1.6 billion with physical AI in Fund XI](https://www.blackscarab.ai/news/bain-capital-ventures-fund-xi-physical-ai) | Funding News | Cross-Industry |
| [Synaptics brings robot touch and edge AI into NVIDIA Isaac Sim](https://www.blackscarab.ai/news/synaptics-tactile-sensing-edge-ai) | Edge AI News | Cross-Industry |
| [Odyssey says one world model can control robots, cars, drones, and games](https://www.blackscarab.ai/news/odyssey-3-foundation-world-model) | AI Systems News | Cross-Industry |
| [Agility launches Digit 5 with heavier lifts, faster charging, and a safety push](https://www.blackscarab.ai/news/agility-digit-5-humanoid-launch) | Robotics News | Warehousing & Logistics |
| [Reward AI says OM-1 learns robot skills directly from human demonstrations](https://www.blackscarab.ai/news/reward-ai-om-1-human-demonstrations-robot-policy) | Robotics News | Cross-Industry |
| [HD Hyundai backs AIDIN Robotics to bring touch sensing into shipyard robots](https://www.blackscarab.ai/news/hd-hyundai-aidin-robotics-tactile-sensors-shipyards) | Robotics News | Manufacturing |
| [UBTECH opens a humanoid robot factory designed to build 10,000 units a year](https://www.blackscarab.ai/news/ubtech-liuzhou-humanoid-robot-factory) | Robotics News | Manufacturing |
| [Samsung SDS builds Team REX to bring ten robot companies onto the factory floor](https://www.blackscarab.ai/news/samsung-sds-team-rex-robot-alliance) | Robotics News | Manufacturing |
| [Nokia and Rajant bring distributed edge AI into the field](https://www.blackscarab.ai/news/nokia-rajant-cognitive-operations-edge-ai) | Edge AI News | Mining |
| [Maven Robotics raises $100 million to automate warehouse work](https://www.blackscarab.ai/news/maven-robotics-series-a-industrial-robots) | Physical AI News | Warehousing & Logistics |
| [Antioch raises $32 million to make robot testing run like software](https://www.blackscarab.ai/news/antioch-series-a-physical-ai-simulation) | Physical AI News | Cross-Industry |
| [NEURA Robotics puts its $1.4 billion financing to the production test](https://www.blackscarab.ai/news/neura-robotics-series-c-production-test) | Physical AI News | Manufacturing |
| [Palantir turns to Nebius for sovereign AI infrastructure](https://www.blackscarab.ai/news/palantir-nebius-sovereign-ai-infrastructure-partnership) | Physical AI News | Cross-Industry |
| [Palladyne AI and FANUC pair adaptive software with industrial robots](https://www.blackscarab.ai/news/palladyne-ai-fanuc-industrial-robots-physical-ai) | Physical AI News | Manufacturing |
| [Tuya Smart unveils Doova, an AI home companion robot for seniors](https://www.blackscarab.ai/news/tuya-smart-doova-ai-companion-robot-seniors) | Physical AI News | Consumer & Home |
| [Physical Superintelligence raises $58 million to build an AI native physics lab](https://www.blackscarab.ai/news/physical-superintelligence-raises-58-million-ai-physics-lab) | Physical AI News | Data Centers |
| [Caterpillar taps FieldAI to bring autonomous robots and digital twins to industrial sites](https://www.blackscarab.ai/news/caterpillar-fieldai-industrial-ai-robots-digital-twins) | Physical AI News | Manufacturing |
| [Lyte raises $165 million at $1.6 billion valuation as investors pile into physical AI](https://www.blackscarab.ai/news/lyte-raises-165-million-physical-ai-perception) | Physical AI News | Cross-Industry |
| [Xynova introduces Prima 1, a direct drive robotic hand with 22 degrees of freedom](https://www.blackscarab.ai/news/xynova-prima-1-direct-drive-robotic-hand) | Physical AI News | Cross-Industry |

## Internal Insights mapping

| Existing article | Current label | Proposed Primary Industry |
| --- | --- | --- |
| [Vibe Manufacturing: The Next AI Opportunity Has a Shop Floor](https://www.blackscarab.ai/insights/vibe-manufacturing-ai-physical-product-development) | Manufacturing | Manufacturing |
| [Gritt AI Deep Dive: Teaching Construction Equipment to Build Solar Farms](https://www.blackscarab.ai/insights/gritt-ai-construction-robotics-solar-foundation-model-deep-dive) | Construction Robotics | Construction |
| [Sell Your Company Data to AI: micro1's $1 Million Opportunity](https://www.blackscarab.ai/insights/sell-company-data-ai-micro1-data-partnerships-referrals) | Cross Industry | Cross-Industry |
| [Robotics Data Collection: 7 Ways Robots Get Training Data](https://www.blackscarab.ai/insights/robotics-data-collection-robot-training-data-guide) | Robotics AI | Cross-Industry |
| [What Are Digital Twins? How Living Models of the Physical World Actually Work](https://www.blackscarab.ai/insights/what-are-digital-twins-complete-guide) | Physical AI Infrastructure | Cross-Industry |
| [What Is Physical AI? The Complete Guide to Intelligence That Acts in the Real World](https://www.blackscarab.ai/insights/what-is-physical-ai-complete-guide) | Physical AI | Cross-Industry |
| [How to Build a Manufacturing Plant: Equipment, Employees, Costs, Installation, and First Production](https://www.blackscarab.ai/insights/how-to-build-a-manufacturing-plant-equipment-costs-installation) | Manufacturing | Manufacturing |
| [Physical AI in Manufacturing: Robotics, Machine Vision, Digital Twins, and Smart Factories](https://www.blackscarab.ai/insights/physical-ai-manufacturing-robotics-machine-vision-digital-twins) | Manufacturing | Manufacturing |
| [Foxglove Deep Dive: The Data Stack Behind Physical AI](https://www.blackscarab.ai/insights/foxglove-robotics-data-platform-deep-dive) | Cross Industry | Cross-Industry |
| [What Are Robot Actuators? Motors, Gears, Costs, and Companies](https://www.blackscarab.ai/insights/what-are-robot-actuators-motors-gears-costs-companies) | Robotics | Cross-Industry |
| [Industrial Automation Explained: PLCs, CNC Machines, Robots, Sensors, and Factory Software](https://www.blackscarab.ai/insights/industrial-automation-explained-plc-cnc-robots-factory-software) | Manufacturing | Manufacturing |
| [How to Design a Manufacturing Plant: Process Flow, Factory Layout, Utilities, and Site Selection](https://www.blackscarab.ai/insights/how-to-design-a-manufacturing-plant-layout-process-flow) | Manufacturing | Manufacturing |
| [Who Builds a Factory? Siemens, Rockwell, FANUC, Machine Builders, and Integrators Explained](https://www.blackscarab.ai/insights/who-builds-a-factory-siemens-rockwell-fanuc-integrators) | Manufacturing | Manufacturing |
| [How a Product Is Manufactured: From Bill of Materials to Production Line](https://www.blackscarab.ai/insights/how-a-product-is-manufactured-bill-of-materials-production-line) | Manufacturing | Manufacturing |
| [Types of Manufacturing Machines: A Beginner's Guide to Factory Equipment](https://www.blackscarab.ai/insights/types-of-manufacturing-machines-factory-equipment-guide) | Manufacturing | Manufacturing |
| [Learn to See a Factory: What Every Room, Process, and Production Flow Actually Does](https://www.blackscarab.ai/insights/what-is-a-manufacturing-plant-factory-types-production-flow) | Manufacturing | Manufacturing |
| [How Modern Manufacturing Works: A Beginner's Guide to Factories and Physical AI](https://www.blackscarab.ai/insights/how-modern-manufacturing-works-factories-physical-ai-guide) | Manufacturing | Manufacturing |
| [Mexico Cannot Afford to Lose the Physical AI Race](https://www.blackscarab.ai/insights/mexico-physical-ai-manufacturing-nearshoring-automation) | Manufacturing | Manufacturing |
| [Top 15 Physical AI Venture Capital Firms and Funds in 2026](https://www.blackscarab.ai/insights/top-15-physical-ai-venture-capital-firms-funds) | Physical AI Investing | Cross-Industry |
| [Antioch Deep Dive: Can Simulation Become the Test Layer for Physical AI?](https://www.blackscarab.ai/insights/antioch-physical-ai-simulation-platform-deep-dive) | Robotics Infrastructure | Cross-Industry |
| [Plus One Robotics Deep Dive: The Economics of Supervised Warehouse Autonomy](https://www.blackscarab.ai/insights/plus-one-robotics-supervised-autonomy-warehouse-automation-deep-dive) | Transportation & Logistics | Warehousing & Logistics |
| [Palladyne AI Deep Dive: Edge AI, Robot Software, Hardware, and Pricing](https://www.blackscarab.ai/insights/palladyne-ai-edge-physical-ai-robotics-deep-dive) | Industrial Robotics | Manufacturing |
| [Humanoid Robot Components and Suppliers: The Complete Hardware Anatomy Guide](https://www.blackscarab.ai/insights/humanoid-robot-anatomy-components-suppliers-guide) | Humanoid Robotics | Cross-Industry |
| [Persona AI Deep Dive: Industrial Humanoid Robots for Welding and Shipbuilding](https://www.blackscarab.ai/insights/persona-ai-industrial-humanoid-robot-welding-shipbuilding-deep-dive) | Industrial Robotics | Manufacturing |
| [Hugging Face Deep Dive: How the Open AI Platform Works, Pricing, Robotics, and the NVIDIA Deal](https://www.blackscarab.ai/insights/hugging-face-open-ai-platform-pricing-robotics-nvidia-deep-dive) | AI Infrastructure | Cross-Industry |
| [FieldAI Deep Dive: Robot Foundation Models, Hardware Stack, Customers, and Pricing](https://www.blackscarab.ai/insights/fieldai-edge-robot-foundation-model-industrial-autonomy-deep-dive) | Cross Industry | Construction |
| [The Best Way to Source GPU Compute in 2026](https://www.blackscarab.ai/insights/compute-exchange-gpu-marketplace-deep-dive) | Cross-Industry | Cross-Industry |
| [Flock Safety Deep Dive: Hardware, Business Model, Pricing, and Tradeoffs](https://www.blackscarab.ai/insights/flock-safety-platform-hardware-business-model-pricing) | Smart Cities | Public Safety & Government |
| [NVIDIA Physical AI Deep Dive: Cosmos, Isaac, Jetson, Omniverse, and the Edge AI Stack](https://www.blackscarab.ai/insights/nvidia-physical-ai-cosmos-isaac-jetson-omniverse-guide) | Cross-Industry | Cross-Industry |
| [Prometheus Deep Dive: Jeff Bezos, Vik Bajaj, Artificial General Engineering, and Industrial AI](https://www.blackscarab.ai/insights/prometheus-industrial-ai-artificial-general-engineering-guide) | Cross-Industry | Manufacturing |
| [Physical Intelligence Deep Dive: pi 0.7, Generalist Robot Policies, and the Robot Intelligence Layer](https://www.blackscarab.ai/insights/physical-intelligence-generalist-robot-policy-guide) | Cross-Industry | Cross-Industry |
| [Skild AI Deep Dive: General-Purpose Robot Brain, Omni-Bodied Intelligence, and Physical AI Deployment](https://www.blackscarab.ai/insights/skild-ai-general-purpose-robot-brain-guide) | Cross-Industry | Cross-Industry |
| [Viam Deep Dive: Robotics Software Infrastructure, Fleet Management, Edge AI, and Programmable Machines](https://www.blackscarab.ai/insights/viam-robotics-software-platform-physical-ai-guide) | Cross-Industry | Cross-Industry |
| [FORT Robotics Deep Dive: The Trust Layer for Physical AI, Safety-Certified Control, and Supervised Autonomy](https://www.blackscarab.ai/insights/fort-robotics-trust-layer-physical-ai-safety-guide) | Cross-Industry | Cross-Industry |
| [Edge Impulse Deep Dive: Embedded AI MLOps, TinyML, and the Physical AI Deployment Layer](https://www.blackscarab.ai/insights/edge-impulse-embedded-ai-mlops-physical-ai-guide) | Cross-Industry | Cross-Industry |
| [Roboflow Deep Dive: Computer Vision Infrastructure, Visual Data, and the Physical AI Perception Layer](https://www.blackscarab.ai/insights/roboflow-computer-vision-platform-physical-ai-guide) | Cross-Industry | Cross-Industry |
| [Luxonis Deep Dive: OAK Cameras, Spatial AI, and the Edge Perception Computer](https://www.blackscarab.ai/insights/luxonis-oak-spatial-ai-cameras-physical-ai-guide) | Cross-Industry | Cross-Industry |
| [Stereolabs Deep Dive: ZED Cameras, Stereo Depth, and the Robotics Spatial Perception Stack](https://www.blackscarab.ai/insights/stereolabs-zed-spatial-perception-robotics-guide) | Cross-Industry | Cross-Industry |
| [Prophesee Deep Dive: Event-Based Vision, Neuromorphic Cameras, and the Motion Layer of Physical AI](https://www.blackscarab.ai/insights/prophesee-event-based-vision-physical-ai-guide) | Cross-Industry | Cross-Industry |
| [Hailo Deep Dive: Edge AI Acceleration, Low-Power Inference, and the Physical AI Compute Layer](https://www.blackscarab.ai/insights/hailo-edge-ai-acceleration-physical-ai-guide) | Cross-Industry | Cross-Industry |
| [Ouster Deep Dive: Digital LiDAR, Spatial Perception, and the 3D Sensing Layer of Physical AI](https://www.blackscarab.ai/insights/ouster-lidar-spatial-perception-physical-ai-guide) | Cross-Industry | Cross-Industry |
| [Gecko Robotics Deep Dive: Industrial Asset Health, Robotic Inspection, and the Physical AI Data Layer](https://www.blackscarab.ai/insights/gecko-robotics-asset-health-physical-ai-guide) | Industrial Infrastructure | Energy & Utilities |
| [OpenSpace Deep Dive: Construction Reality Capture, Visual Intelligence, and the Built-World Data Layer](https://www.blackscarab.ai/insights/openspace-construction-reality-capture-physical-ai-guide) | Construction | Construction |
| [Top 15 Physical AI Infrastructure Companies to Watch in 2026](https://www.blackscarab.ai/insights/top-15-physical-ai-infrastructure-companies) | Cross-Industry | Cross-Industry |
| [Intuitive da Vinci 5 Deep Dive: Surgical Robotics, Hospital ROI, Pricing, Adoption, and Deployment Strategy](https://www.blackscarab.ai/insights/intuitive-da-vinci-5-surgical-robotics-platform-guide) | Healthcare | Healthcare & Life Sciences |
| [Amazon Proteus Deep Dive: Autonomous Mobile Warehouse Robots, Computer Vision, Logistics ROI, Safety, and Deployment Strategy](https://www.blackscarab.ai/insights/amazon-proteus-autonomous-mobile-warehouse-robot-guide) | Transportation & Logistics | Warehousing & Logistics |
| [Universal Robots UR Series Deep Dive: Collaborative Robot Arms, Machine Tending, Packaging, Assembly, Pricing, ROI, and Deployment Strategy](https://www.blackscarab.ai/insights/universal-robots-ur-series-cobot-automation-guide) | Manufacturing | Manufacturing |
| [Unitree G1 Deep Dive: Affordable Humanoid Robots, Embodied AI Research, Pricing, ROI, and Deployment Strategy](https://www.blackscarab.ai/insights/unitree-g1-affordable-humanoid-robot-research-platform-guide) | Research & Education | Cross-Industry |
| [Tesla Optimus Deep Dive: Vertically Integrated Humanoid Robots, Factory AI, Pricing, ROI, and Deployment Strategy](https://www.blackscarab.ai/insights/tesla-optimus-vertically-integrated-humanoid-robot-guide) | Manufacturing | Manufacturing |
| [Boston Dynamics Atlas Deep Dive: All-Electric Humanoid Robots, Industrial Mobility, Manipulation, Pricing, ROI, and Deployment Strategy](https://www.blackscarab.ai/insights/boston-dynamics-atlas-industrial-humanoid-robot-guide) | Manufacturing | Manufacturing |
| [Figure 03 Deep Dive: General-Purpose Humanoid Robots, Helix AI, Dexterous Manipulation, Pricing, ROI, and Deployment Strategy](https://www.blackscarab.ai/insights/figure-03-general-purpose-humanoid-robot-guide) | Cross-Industry | Manufacturing |
| [Agility Robotics Digit Deep Dive: Logistics Humanoid Robots, Warehouse Automation, Pricing, ROI, and Deployment Strategy](https://www.blackscarab.ai/insights/agility-robotics-digit-logistics-humanoid-robot-guide) | Logistics | Warehousing & Logistics |
| [Boston Dynamics Spot Robot Deep Dive: Industrial Inspection, Pricing, ROI, and Edge AI Use Cases](https://www.blackscarab.ai/insights/boston-dynamics-spot-robot-industrial-inspection-guide) | Cross-Industry | Manufacturing |
| [ANYbotics ANYmal Deep Dive: Industrial Inspection Robots for Energy, Mining, Chemicals, and Heavy Industry](https://www.blackscarab.ai/insights/anybotics-anymal-industrial-inspection-robot-guide) | Cross-Industry | Energy & Utilities |
| [Top 10 Robots Transforming the World in 2026: Edge AI, Humanoids, Cobots, and Autonomous Systems](https://www.blackscarab.ai/insights/top-10-robots-edge-ai-automation-humanoid-robotics) | Cross-Industry | Manufacturing |
| [Local AI for Large Enterprises: Private AI Infrastructure at Scale](https://www.blackscarab.ai/insights/local-ai-enterprise-guide) | Cross-Industry | Cross-Industry |
| [Local AI for a One-Person Startup or Small Business](https://www.blackscarab.ai/insights/local-ai-small-business-guide) | Cross-Industry | Cross-Industry |
| [Local AI for Hobbyists: The Best Low-Budget Setup](https://www.blackscarab.ai/insights/local-ai-hobbyist-budget-guide) | Cross-Industry | Consumer & Home |
| [Case Study #1 — The $20-per-Acre Advantage: How Edge AI Solved Agriculture's Chemical Waste Problem](https://www.blackscarab.ai/insights/case-study-agriculture-chemical-waste) | Agriculture | Agriculture |
| [Case Study #2 — The Zero-Defect Advantage: How Edge AI Revolutionized Automotive Quality Control](https://www.blackscarab.ai/insights/case-study-manufacturing-zero-defect-advantage) | Manufacturing | Manufacturing |
| [Case Study #3: Singapore's Smart Nation – The Lamppost-as-a-Platform (LaaP)](https://www.blackscarab.ai/insights/case-study-smart-cities-lamppost-platform) | Smart Cities | Public Safety & Government |
| [Case Study #4: Walmart's Intelligent Retail Lab – Edge AI for Real-Time Inventory](https://www.blackscarab.ai/insights/case-study-retail-real-time-inventory) | Retail | Retail |
| [Case Study #5: FedEx's Smart Sorting Hubs – Edge AI for High-Velocity Logistics](https://www.blackscarab.ai/insights/case-study-logistics-smart-sorting-hubs) | Transportation & Logistics | Warehousing & Logistics |
| [Case Study #6: Mount Sinai & Butterfly Network – Edge AI for Point-of-Care Diagnostics](https://www.blackscarab.ai/insights/case-study-healthcare-point-of-care-diagnostics) | Healthcare | Healthcare & Life Sciences |
| [Case Study #7: Las Vegas Valley – Solar-Powered Edge AI for Urban Deterrence](https://www.blackscarab.ai/insights/case-study-smart-cities-urban-deterrence) | Smart Cities | Public Safety & Government |
| [Case Study #8: Burro's Edge AI Robots for Autonomous Farming in Table Grapes and Berries](https://www.blackscarab.ai/insights/case-study-burro-autonomous-farming) | Agriculture | Agriculture |
| [Case Study #9: Medtronic GI Genius and Edge AI for Real-Time Colonoscopy Detection](https://www.blackscarab.ai/insights/case-study-medtronic-gi-genius-edge-ai-colonoscopy) | Healthcare | Healthcare & Life Sciences |
| [Case Study #10: Coca-Cola HBC Warehouse Logistics with AR Picking and Edge AI](https://www.blackscarab.ai/insights/case-study-coca-cola-hbc-ar-edge-ai-warehouse-logistics) | Transportation & Logistics | Warehousing & Logistics |
| [The Edge AI Roadmap: 10 Platforms Shaping the Future of Edge Computing](https://www.blackscarab.ai/insights/edge-ai-roadmap-top-10-platforms) | Cross-Industry | Cross-Industry |
| [Why NVIDIA Jetson AGX Orin Leads Edge AI in 2026](https://www.blackscarab.ai/insights/nvidia-jetson-agx-orin-edge-ai-guide) | Cross-Industry | Cross-Industry |
| [Tesla AI5 (HW5) Latest Update: Release Timeline, Specs, and Production Outlook for 2026](https://www.blackscarab.ai/insights/tesla-ai5-hw5-guide) | Cross-Industry | Transportation & Mobility |
| [Raspberry Pi 5 + Hailo-8: Why the AI HAT+ Is a Top Edge AI Platform in 2026](https://www.blackscarab.ai/insights/raspberry-pi-5-hailo-8-guide) | Cross-Industry | Cross-Industry |
| [Google Coral Edge TPU: Why the USB Accelerator and Dev Board Still Matter in 2026](https://www.blackscarab.ai/insights/google-coral-edge-tpu-guide) | Cross-Industry | Cross-Industry |
| [Apple Mac mini for Local LLMs: Why M-Series Macs Are a Private AI Hub in 2026](https://www.blackscarab.ai/insights/apple-mac-mini-local-llm-guide) | Cross-Industry | Cross-Industry |
| [Qualcomm Robotics RB5: Why It Matters for 5G Robotics, Drones, and Edge AI in 2026](https://www.blackscarab.ai/insights/qualcomm-robotics-rb5-guide) | Cross-Industry | Cross-Industry |
| [Arduino Nicla Vision: Why It Matters for TinyML, Edge Impulse, and Edge AI in 2026](https://www.blackscarab.ai/insights/arduino-nicla-vision-guide) | Cross-Industry | Cross-Industry |
| [Intel OpenVINO: Cross-Platform Edge AI for CPUs, GPUs, NPUs, and Movidius in 2026](https://www.blackscarab.ai/insights/intel-openvino-movidius-guide) | Cross-Industry | Cross-Industry |
| [Cerebras WSE-3: Why Wafer-Scale AI Matters for Inference, Physical AI, and Edge Infrastructure in 2026](https://www.blackscarab.ai/insights/cerebras-wse-3-guide) | Cross-Industry | Cross-Industry |
| [AMD Xilinx Kria K26: Adaptive Edge AI for Vitis AI, Robotics, and Vision in 2026](https://www.blackscarab.ai/insights/amd-kria-k26-guide) | Cross-Industry | Cross-Industry |
| [How to Build Your First Local AI Server in 2026: Hardware, VRAM, Bandwidth, and Software](https://www.blackscarab.ai/insights/local-ai-server-guide) | Cross-Industry | Cross-Industry |
| [Luxonis OAK-D / DepthAI: Spatial AI, Stereo Depth, and Edge Computer Vision in 2026](https://www.blackscarab.ai/insights/luxonis-oak-d-guide) | Cross-Industry | Cross-Industry |

## External Insights archive records

These six archive cards link to LinkedIn. Their proposed industries use the existing on-site title and summary; their full external text has not been independently reviewed in this phase. Keep the external URLs and external content type. Do not create local articles or infer publication dates.

| External article | Proposed Primary Industry |
| --- | --- |
| [Nvidia Jetson Edge Computing: A Catalyst for AI Adoption in Latin America](https://www.linkedin.com/pulse/nvidia-jetson-edge-computing-catalyst-ai-adoption-latin-america-badae/?trackingId=26fz0BvRqWFYa73FiYZEaw%3D%3D) | Cross-Industry |
| [The Reflexive Fleet: Edge AI Compute - Transportation & Logistics in LatAm](https://www.linkedin.com/pulse/reflexive-fleet-edge-ai-compute-transportation-logistics-xcbze/?trackingId=DFssRfEFEY1RF3lkp2kHag%3D%3D) | Transportation & Mobility |
| [The Precision Harvest: Edge AI Compute - Agriculture in LatAm](https://www.linkedin.com/pulse/precision-harvest-edge-ai-compute-agriculture-latam-black-scarab-y8m8c/?trackingId=80skTvOUFJOjo5yxFXHHfw%3D%3D) | Agriculture |
| [The Autonomous Factory: Edge AI and the Nearshoring Gold Rush](https://www.linkedin.com/pulse/autonomous-factory-edge-ai-nearshoring-gold-rush-black-scarab-ria9e/?trackingId=y%2FyXzdJtuCc%2FgZasfy%2FU4w%3D%3D) | Manufacturing |
| [The Life-Saving Reflex: Edge AI & Decentralized Healthcare in LatAm](https://www.linkedin.com/pulse/life-saving-reflex-edge-ai-decentralized-healthcare-latam-5ggce/?trackingId=y%2BRddqMXGj2DCeZSlxT5bg%3D%3D) | Healthcare & Life Sciences |
| [The Responsive Storefront: Edge AI & The Future of Retail in LatAm](https://www.linkedin.com/pulse/responsive-storefront-edge-ai-future-retail-latam-black-scarab-bzaae/) | Retail |

## Existing categories and tags

Keep current `category`, `industry`, and `tags` values as compatibility fields during this phase. They currently affect visible labels, News RSS categories, structured data, SEO keywords, and MUSE search. The new taxonomy becomes the sole controlled classification layer; legacy values remain available to those existing consumers. Removing or replacing them now would change more than content architecture.

Cross Industry and Cross-Industry normalize to `cross-industry` only when the article concerns enabling infrastructure. FieldAI, Figure 03, Spot and ANYmal are reassigned to an operating market according to the article mapping.

Construction Robotics maps to Construction with robotics technology kept separately. Industrial Robotics and Humanoid Robotics become technology concepts; they do not determine the primary market. Robotics Software becomes a technology, not an industry.

Transportation & Logistics requires a story decision: freight on public roads belongs to Transportation & Mobility, while warehouse movement, parcel sorting and fulfillment belong to Warehousing & Logistics. Logistics maps to Warehousing & Logistics for the existing Digit article. Healthcare maps to Healthcare & Life Sciences. Smart Cities maps to Public Safety & Government for the existing municipal articles, with Transportation & Mobility relevant to the Singapore traffic story.

Capital News, Funding News, Robotics News, Physical AI News, Robotics Business, Robotics Strategy, Infrastructure News, AI Systems News and Edge AI News describe format or topic. They are retained as legacy labels and replaced as classification by the individual story mapping.

Research & Education remains useful context for Unitree G1, not a new industry. Industrial Infrastructure is too broad for Gecko and becomes an editorial market choice. AI Infrastructure, Robotics Infrastructure, Physical AI Infrastructure, Physical AI Investing, Robotics AI, Robotics and Physical AI are not automatic industry assignments.

All unique existing labels and their proposed destinations follow. Multiple destinations indicate that a global label replacement would be incorrect.

| Legacy label | Proposed destinations in this archive |
| --- | --- |
| AI Infrastructure | Cross-Industry |
| AI Systems News | Cross-Industry |
| Agriculture | Agriculture |
| Capital News | Healthcare & Life Sciences, Manufacturing, Warehousing & Logistics |
| Construction | Construction |
| Construction Robotics | Construction |
| Cross Industry | Construction, Cross-Industry |
| Cross-Industry | Consumer & Home, Cross-Industry, Energy & Utilities, Manufacturing, Transportation & Mobility |
| Deployment and autonomous systems | Transportation & Mobility |
| Edge AI News | Cross-Industry, Mining |
| Funding News | Cross-Industry, Data Centers |
| Healthcare | Healthcare & Life Sciences |
| Humanoid Robotics | Consumer & Home, Cross-Industry |
| Industrial Infrastructure | Energy & Utilities |
| Industrial Robotics | Manufacturing |
| Infrastructure News | Manufacturing |
| Logistics | Warehousing & Logistics |
| Manufacturing | Manufacturing |
| Physical AI | Cross-Industry |
| Physical AI Infrastructure | Cross-Industry |
| Physical AI Investing | Cross-Industry |
| Physical AI News | Consumer & Home, Cross-Industry, Data Centers, Manufacturing, Warehousing & Logistics |
| Research & Education | Cross-Industry |
| Retail | Retail |
| Robotics | Cross-Industry |
| Robotics AI | Cross-Industry |
| Robotics Business | Cross-Industry, Manufacturing, Public Safety & Government |
| Robotics Infrastructure | Cross-Industry |
| Robotics Manufacturing | Manufacturing |
| Robotics News | Cross-Industry, Hospitality & Services, Manufacturing, Warehousing & Logistics |
| Robotics Software | Cross-Industry, Manufacturing |
| Robotics Strategy | Cross-Industry |
| Robotics and biomanufacturing | Healthcare & Life Sciences |
| Robotics and manipulation | Cross-Industry |
| Smart Cities | Public Safety & Government |
| Transportation & Logistics | Warehousing & Logistics |

`proposed-tag-normalization.json` lists every existing unique tag and a disposition. Exact technology and application synonyms have proposed controlled concepts; every original keyword is retained. A matching tag is supporting evidence, not an instruction to assign the concept to every article without review. Company and product names such as Figure AI, FANUC, NVIDIA, Jetson and MCAP remain context keywords and independent identity candidates. Existing SEO keywords are unchanged.

## User-facing changes

Proposed visible change in this phase: none. Current labels remain exactly as rendered today. No component, stylesheet, page route, navigation, archive order, homepage or card is edited. Technology and Application values are data only.

Normalizing an existing label to the primary industry can be a later separately reviewed change. Long labels such as Warehousing & Logistics must be checked at mobile widths before activation. This proposal does not include that label switch.

Current URLs, canonical paths, SEO titles and descriptions, structured data, RSS output, publication and modification dates, article copy, source links, images, author cards, company references, layout, typography, spacing and card design remain unchanged.

## Future architecture

Each industry registry record includes `archiveEnabled: false`. Future `/industry/{slug}` routes should read this registry and return no public archive until explicitly enabled with enough editorially useful content. Display label changes do not change these routes. No industry routes, sitemap entries or feeds are created now.

Future queries should match an industry against the union of primary and relevant industries; combine an industry with a technology or application using AND; match any selected term within one facet using OR. News and internal Insights keep their existing publication dates for date ranges. External articles with no precise date must be excluded from date-window queries or handled explicitly. Cross-Industry articles are not automatically matched into every market.

## Migration risks and editorial decisions

Primary classification is an editorial choice, not evidence of a deployed customer. Applications may represent researched or announced work and do not certify production maturity. Avoid treating hypothetical buyer examples as demonstrated workflows or secondary market evidence.

Operating-market overviews do not become Cross-Industry merely because they mention several customers. Some have no dominant market; the choices below are provisional. Financial ecosystem coverage uses Cross-Industry for enabling capital and needs review as an explicit extension of the infrastructure rule.

- **ANYbotics Introduces Shift With an October Upgrade for Industrial Inspection Workflows**: Manufacturing is the proposed plant maintenance anchor. The report does not select a particular plant vertical; review against Energy & Utilities before activation.
- **Faraday Future puts nine new robot configurations on sale**: Public safety anchors the stated security offering. The launch spans education and industrial robots without a dominant market; this primary choice needs review.
- **Bain Capital Ventures raises $1.6 billion with physical AI in Fund XI**: Cross-Industry represents enabling investment capital. This extends the infrastructure rule to funding ecosystem coverage.
- **NEURA Robotics puts its $1.4 billion financing to the production test**: Manufacturing anchors the production expansion story, rather than every prospective NEURA customer market.
- **Palantir turns to Nebius for sovereign AI infrastructure**: Broad enterprise compute infrastructure, not a data center robot deployment. Retain the historical article without implying an Intelligence intake eligibility decision.
- **Caterpillar taps FieldAI to bring autonomous robots and digital twins to industrial sites**: Manufacturing anchors the stated factories and industrial inspection program. Construction and mining are explicit parts of the article; review the primary choice for this multi-market partnership.
- **Sell Your Company Data to AI: micro1's $1 Million Opportunity**: Data licensing is an enabling input across markets; this broader business data opportunity is not a robotics deployment.
- **Top 15 Physical AI Venture Capital Firms and Funds in 2026**: Cross-Industry represents enabling investment capital, an editorial extension of the infrastructure rule.
- **FieldAI Deep Dive: Robot Foundation Models, Hardware Stack, Customers, and Pricing**: Construction is anchored in DPR and Big D operating evidence, rather than the reusable model alone.
- **Prometheus Deep Dive: Jeff Bezos, Vik Bajaj, Artificial General Engineering, and Industrial AI**: Manufacturing anchors the engineering and physical product development story.
- **Gecko Robotics Deep Dive: Industrial Asset Health, Robotic Inspection, and the Physical AI Data Layer**: Energy assets anchor the asset health story; the article also substantively covers industrial production, mining and defense. Review primary selection for this multi-market overview.
- **Unitree G1 Deep Dive: Affordable Humanoid Robots, Embodied AI Research, Pricing, ROI, and Deployment Strategy**: Cross-Industry is an enabling research platform classification because Research & Education is outside the requested industry list. Preserve the original research keywords.
- **Figure 03 Deep Dive: General-Purpose Humanoid Robots, Helix AI, Dexterous Manipulation, Pricing, ROI, and Deployment Strategy**: Manufacturing anchors BMW operating evidence. Hypothetical home and warehouse applications do not become secondary industries.
- **Boston Dynamics Spot Robot Deep Dive: Industrial Inspection, Pricing, ROI, and Edge AI Use Cases**: Manufacturing anchors industrial plant inspection, with explicit energy facilities as secondary. Review primary selection because the article spans industrial inspection markets.
- **Top 10 Robots Transforming the World in 2026: Edge AI, Humanoids, Cobots, and Autonomous Systems**: Manufacturing is a provisional operating-market anchor for the mixed robot roundup. No single market dominates; review this editorial choice instead of treating operating robots as enabling infrastructure.
- **Local AI for Hobbyists: The Best Low-Budget Setup**: Consumer & Home reflects the hobbyist consumer audience for this buying guide, rather than a robot deployment. Review whether the infrastructure exception should instead apply.
- **Tesla AI5 (HW5) Latest Update: Release Timeline, Specs, and Production Outlook for 2026**: Transportation & Mobility anchors the chip rollout and vehicle owner discussion; Optimus manufacturing work is a separately discussed application.

The baseline is the current working tree, which already contains unrelated local edits. Recheck archive inventory at implementation time so newly added reports cannot be missed. Keep each content type and slug unique, detect stale migration rows, validate all vocabulary references, and reject incomplete new articles.

A staged JSON Schema validates value types, enums and array uniqueness. The primary-versus-secondary exclusion needs a shared TypeScript validator because JSON Schema alone does not compare those fields dynamically. Registry and backfill must share one authoritative vocabulary after integration, rather than maintaining two independently edited enum sets.

## Artifacts and validation

- [Controlled registry](../output/content-taxonomy/proposed-taxonomy-registry.json)
- [Full internal article backfill with four fields, legacy values and review notes](../output/content-taxonomy/proposed-article-backfill.json)
- [Taxonomy JSON Schema](../output/content-taxonomy/proposed-article-taxonomy.schema.json)
- [Every existing tag and its normalization disposition](../output/content-taxonomy/proposed-tag-normalization.json)
- [External archive proposals](../output/content-taxonomy/proposed-external-insights.json)
- [Source preservation manifest](../output/content-taxonomy/preservation-manifest.json)

Validation confirms exact coverage of all 123 internal articles, six external records, unique content keys, valid controlled values, unique arrays and no primary industry duplicated as a secondary. SHA-256 checks cover 506 existing app, component, library, public asset and configuration files. These are review artifacts only; the application does not import them. No deployment was performed.

Runtime integration follows your review of this migration. At that point run taxonomy coverage and relationship invariants, TypeScript, lint and the production build, and compare desktop and mobile output plus metadata and RSS against this baseline.

## Release reconciliation

The remote release inventory includes two already published reports absent from the original local inventory, bringing coverage to 44 News reports and 81 internal Insights articles. The six external Insights archive records are also classified.

| Additional report | Primary Industry |
| --- | --- |
| RobCo reaches a $1 billion valuation and puts Alfie on the launch calendar | Manufacturing |
| Bonsai World puts the next farm inside a simulator before the robot arrives | Agriculture |

RobCo is classified by its factory automation story. Bonsai World is classified by its agricultural autonomy deployment focus; prospective mining and defense markets are not assigned as secondary industries. Article content and metadata remain unchanged.
