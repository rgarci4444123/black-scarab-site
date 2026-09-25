import type { CaseStudyArticle } from "@/lib/case-studies";

const dtcDefinition =
  "https://www.digitaltwinconsortium.org/2020/12/digital-twin-consortium-defines-digital-twin/";
const dtcFramework =
  "https://www.digitaltwinconsortium.org/press-room/digital-twin-consortium-announces-the-digital-twin-system-framework/";
const nistProgram = "https://www.nist.gov/digital-twins";
const nistUseCases =
  "https://www.nist.gov/publications/use-case-scenarios-digital-twin-implementation-based-iso-23247";
const nistCredibility =
  "https://www.nist.gov/publications/credibility-consideration-digital-twins-manufacturing";
const nistSecurity = "https://csrc.nist.gov/pubs/ir/8356/final";
const nistEconomics =
  "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=958153";
const isoPrinciples = "https://www.iso.org/standard/75066.html";
const isoArchitecture = "https://www.iso.org/standard/78743.html";
const isoDigitalThread =
  "https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso%3A23247%3A-5%3Adis%3Aed-1%3Av1%3Aen";
const nasaNeed =
  "https://science.nasa.gov/biological-physical/why-does-the-world-and-nasa-need-digital-twins/";
const nasaJstar = "https://www.nasa.gov/jstar-digital-twins/";
const destinationEarth =
  "https://digital-strategy.ec.europa.eu/en/policies/destination-earth";
const nihHearts =
  "https://www.nhlbi.nih.gov/news/2025/building-digital-twins-and-hearts";
const healthcareReview =
  "https://pmc.ncbi.nlm.nih.gov/articles/PMC13305746/";
const awsProduct = "https://aws.amazon.com/iot-twinmaker/";
const awsPricing = "https://aws.amazon.com/iot-twinmaker/pricing/";
const azurePricing =
  "https://azure.microsoft.com/en-us/pricing/details/digital-twins/";
const bentleyPricing = "https://developer.bentley.com/pricing/";
const bentleyITwin = "https://www.bentley.com/products/itwin-experience";
const autodeskTandem = "https://www.autodesk.com/products/tandem/overview";
const autodeskPricing = "https://www.autodesk.com/products/tandem/buy";
const autodeskComparison =
  "https://www.autodesk.com/products/tandem/compare";
const siemensTwin =
  "https://www.siemens.com/en-gb/company/digital-twin/comprehensive-digital-twin-for-industry/";
const ansysTwinBuilder =
  "https://ansys.synopsys.com/products/digital-twin/ansys-twin-builder";
const ptcThingWorx =
  "https://www.ptc.com/en/thingworx-applications/manufacturing";
const nvidiaFacilityTwins =
  "https://www.nvidia.com/en-us/use-cases/industrial-facility-digital-twins/";
const fieldAiCaterpillar =
  "https://www.caterpillar.com/en/news/corporate-press-releases/h/caterpillar-and-fieldai-advance-ai-powered-industrial-innovation.html";
const legacyRealityCheck =
  "https://link.springer.com/article/10.1007/s10845-025-02727-w";
const costMethod = "https://doi.org/10.1016/j.jmsy.2025.04.004";

export const digitalTwinsDeepDive = (): CaseStudyArticle => ({
  slug: "what-are-digital-twins-complete-guide",
  title:
    "What Are Digital Twins? How Living Models of the Physical World Actually Work",
  seoTitle: "What Are Digital Twins? Technology, Companies, Costs and Impact",
  summary:
    "A practical guide to digital twin architecture, simulation, data, standards, companies, costs, implementation, risks, and the ways trustworthy twins could change industry, infrastructure, climate planning, healthcare research, and physical AI.",
  publishedLabel: "Deep Dive · Published September 24, 2026",
  publishedDate: "2026-09-24",
  publishedAt: "2026-09-24T22:21:08-04:00",
  typeLabel: "Deep Dive",
  formatLabel: "Definition, architecture, companies, economics, and global impact",
  industry: "Physical AI Infrastructure",
  image: "/article-images/what-are-digital-twins-guide.png",
  imageAlt:
    "Screen print editorial illustration showing a physical industrial site, its synchronized digital representation, and several possible future configurations",
  imageCaption:
    "Original AI generated editorial illustration. The three fields represent a physical system, a synchronized digital twin, and alternative futures that can be tested before action. They do not depict a real facility or proprietary technical design.",
  seoDescription:
    "Learn what digital twins are, how they work, which companies build them, what they cost, where they create value, how they fail, and how they could change the world.",
  tags: [
    "digital twins",
    "digital twin technology",
    "industrial simulation",
    "smart manufacturing",
    "physical AI",
    "predictive maintenance",
    "virtual commissioning",
    "industrial IoT",
    "digital thread",
    "simulation",
  ],
  author: { name: "Rodolfo Garcia Calderoni, CFA", href: "/about" },
  sections: [
    {
      paragraphs: [
        "A digital twin is useful for the same reason a flight simulator is useful. It creates a place to observe, test, and learn about a physical system without making every mistake on the system itself. The difference is that a true twin does not remain an isolated model. It stays connected to evidence from a particular machine, product, process, building, network, person, or environment.",
        [
          "The Digital Twin Consortium defines a digital twin as a virtual representation of real world entities and processes, synchronized at a specified frequency and fidelity. The words frequency and fidelity do most of the work. A useful twin updates often enough, represents the details that matter, and supports a defined decision. The ",
          { text: "consortium definition", href: dtcDefinition },
          " does not require a photorealistic three dimensional model, instant updates, artificial intelligence, or autonomous control.",
        ],
        "That makes the category both powerful and easy to abuse. A computer aided design file can be an important input, but it is not automatically a twin. A dashboard can display live sensor data without modeling how a system behaves. A simulation can predict behavior without being connected to one operating asset. A twin brings selected models and data together around the state and decisions of a real subject.",
        "This report explains that system from first principles. It covers the architecture, hardware, software, synchronization, simulation, standards, company landscape, pricing evidence, implementation process, security risks, and buyer economics. It also examines the larger question: what changes when societies can test more physical decisions in a credible virtual environment before committing money, material, machines, and human lives?",
      ],
      links: [
        {
          label: "What Is Physical AI?",
          href: "/insights/what-is-physical-ai-complete-guide",
          description:
            "A companion guide to the machines and intelligent systems that can use digital twins to learn, plan, and act in the physical world.",
        },
        {
          label: "Physical AI in Manufacturing",
          href: "/insights/physical-ai-manufacturing-robotics-machine-vision-digital-twins",
          description:
            "The manufacturing guide that places digital twins beside robotics, machine vision, predictive maintenance, and intelligent scheduling.",
        },
      ],
    },
    {
      heading: "The Short Answer",
      paragraphs: [
        "A digital twin is a fit for purpose digital representation of a real entity or process that is kept meaningfully synchronized with evidence from that reality. It may describe current state, explain past behavior, predict possible futures, recommend an action, or help control a system. The more authority it has, the more evidence, security, and governance it needs.",
        "The twin is not one file. It is a system of models, data, relationships, software, operating rules, and people. Geometry may show where things are. Time series data shows how measurements change. A physics model estimates forces, heat, flow, or wear. A process model represents queues and cycle times. A knowledge graph connects assets and dependencies. An interface makes those results usable. Validation establishes when any of it should be trusted.",
      ],
      tables: [
        {
          title: "Digital Twins at a Glance",
          columns: ["Question", "Practical Answer"],
          rows: [
            [
              "What is being twinned?",
              "A specific product, asset, process, facility, network, person, or environment.",
            ],
            [
              "What makes it a twin?",
              "A real subject, meaningful synchronization, and a defined purpose.",
            ],
            [
              "Does it need three dimensional graphics?",
              "No. Equations, events, graphs, or process logic can be enough.",
            ],
            [
              "Does it need real time data?",
              "No. The update pace should match the decision.",
            ],
            [
              "Does it need artificial intelligence?",
              "No. Physics, rules, statistics, and conventional simulation may be sufficient.",
            ],
            [
              "Can it control the real system?",
              "Sometimes, with explicit authority and safeguards.",
            ],
            [
              "What is the value?",
              "Better decisions with less testing, downtime, waste, risk, or uncertainty.",
            ],
          ],
        },
      ],
    },
    {
      heading: "A Model, a Shadow, and a Twin Are Not the Same Thing",
      paragraphs: [
        "The market uses digital twin as a flexible label, so buyers need a stricter test. The first question is not whether software looks realistic. It is how information moves between reality and the representation, how the representation is validated, and what decision it is allowed to influence.",
      ],
      callouts: [
        {
          label: "Digital model",
          title: "A representation with no required operating connection",
          body: "A design model, process simulation, or finite element analysis can be highly valuable even if it does not receive data from a real instance. It becomes a twin only when a defined subject, synchronization method, and operating purpose are established.",
        },
        {
          label: "Digital shadow",
          title: "Reality updates the digital representation",
          body: "Sensor readings, work records, inspection data, or scans flow from the physical system into the model. The representation can support monitoring and analysis, while changes to reality still depend on people or another system.",
        },
        {
          label: "Digital twin",
          title: "Synchronization supports a governed decision loop",
          body: "The representation is tied to a real subject and a defined use. Information can flow from reality into the twin and, when authorized, recommendations or commands can flow back. Bidirectional data alone does not make the loop safe or trustworthy.",
        },
        {
          label: "Digital twin system",
          title: "Many components deliver the outcome",
          body: "Sensors, networks, models, data stores, interfaces, identity, cybersecurity, workflows, operators, and physical controls form the operating system around the twin. The Digital Twin Consortium formalized this broader system concept in August 2026.",
        },
      ],
    },
    {
      heading: "The Twin Starts with a Decision",
      paragraphs: [
        "A team that begins by trying to copy everything usually builds an expensive archive. A team that begins with a decision can choose the evidence, model, update rate, and tolerance that decision requires. The purpose might be to detect pump degradation, balance a production line, test a robot release, reduce building energy use, schedule bridge maintenance, or compare flood defenses.",
        "Fit for purpose is not an apology for low fidelity. It is a design principle. A maintenance twin may need vibration, load, temperature, lubricant condition, and service history while requiring only simple geometry. A collision planning twin may need accurate dimensions and motion envelopes but not a molecular model of the paint. A hospital wayfinding twin and a physiological heart twin should not share the same definition of fidelity.",
        "The decision also sets the cost ceiling. If an avoided failure is worth thousands of dollars, a twin that requires millions to create is not economical. If the twin supports a spacecraft, power grid, semiconductor plant, or regional flood plan, the value of earlier evidence can be enormous. Digital twin economics are application economics.",
      ],
    },
    {
      heading: "Inside the Architecture",
      paragraphs: [
        "Every implementation is different, but the operating logic is consistent. Reality produces evidence. The twin maps that evidence to an identity and current state. Models evaluate what the state means and what may happen next. A person or authorized system chooses an intervention. New observations show whether the intervention worked.",
        "The physical side includes the asset or process, sensors, controllers, maintenance actions, operating context, and people. The digital side includes data ingestion, time alignment, asset identity, geometry, state models, simulation, analytics, scenario management, interfaces, access control, and version history. The synchronization layer is the bridge between them.",
      ],
      visual: {
        src: "/article-images/digital-twin-decision-loop.svg",
        mobileSrc: "/article-images/digital-twin-decision-loop-mobile.svg",
        alt: "Digital twin decision loop connecting a physical system, synchronized evidence, current state, simulation, governed decisions, action, and validation",
        caption:
          "Black Scarab functional interpretation. Not a proprietary or certified control design.",
      },
      tables: [
        {
          title: "Core Layers",
          columns: ["Layer", "Function", "Failure Mode"],
          rows: [
            [
              "Physical subject",
              "Defines what is represented.",
              "Reality moves outside the assumed boundary.",
            ],
            [
              "Observation",
              "Collects evidence from reality.",
              "Evidence is missing, biased, delayed, or misidentified.",
            ],
            [
              "Synchronization",
              "Aligns identity, time, version, and state.",
              "Stale or mismatched records look current.",
            ],
            [
              "Representation",
              "Stores structure, relationships, state, and history.",
              "Important dependencies or changes are missing.",
            ],
            [
              "Models and simulation",
              "Interprets state and tests possible futures.",
              "The model is used outside its valid range.",
            ],
            [
              "Decision layer",
              "Turns results into a recommendation or action.",
              "The wrong objective is optimized.",
            ],
            [
              "Action and feedback",
              "Acts on reality and measures the result.",
              "Authority is unclear or outcomes go unmeasured.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Synchronization Is More Important Than Realism",
      paragraphs: [
        "A detailed rendering can be stale. A simple state estimate can be current and useful. Synchronization answers which physical subject the data describes, when the evidence was collected, which configuration was active, how the digital state was updated, and what uncertainty remains.",
        [
          "The ",
          { text: "Digital Twin Consortium", href: dtcDefinition },
          " deliberately allows different synchronization frequencies. A warehouse traffic twin may update positions many times per second. A facility space model may change only after construction work. A product twin may receive a new inspection record at each manufacturing step and a service record months later. The right cadence follows the rate at which the decision can become wrong.",
        ],
        "Synchronization also moves in two directions. Observation causes the virtual representation to match reality more closely. Intervention causes reality to move toward a desired state represented in the twin. The second direction deserves a higher burden of proof. Recommending a valve setting is not the same as commanding the valve, and commanding a process setpoint is not the same as replacing an independent safety function.",
      ],
    },
    {
      heading: "Fidelity Is a Contract, Not a Compliment",
      paragraphs: [
        "A twin should state what it represents accurately, across which conditions, at what resolution, and within what tolerance. Geometry can be millimeter accurate while thermal behavior is approximate. A process model can predict average throughput while missing rare blockages. A learned model can fit historical data while failing after a supplier changes a material.",
        [
          "NIST argues that credibility requires verification, validation, and uncertainty quantification throughout the twin lifecycle. Verification asks whether the model was implemented correctly. Validation asks whether it represents reality well enough for the intended purpose. Uncertainty quantification expresses what is not known and how that uncertainty affects the result. The ",
          { text: "NIST credibility paper", href: nistCredibility },
          " treats those disciplines as a continuing obligation rather than a final project gate.",
        ],
        "This is especially important when a twin uses artificial intelligence. A fast surrogate can approximate an expensive physics simulation and make interactive scenario testing possible. The speed is valuable only inside the conditions represented by its training and validation data. A prediction without a known operating boundary is a guess with better graphics.",
      ],
    },
    {
      heading: "The Digital Thread Connects Time",
      paragraphs: [
        "A twin represents a subject at one or more stages. A digital thread connects the information that explains how that subject reached its current state. Requirements lead to design. Design leads to manufacturing plans. Actual production records show which materials, settings, inspections, and deviations created one unit. Service history records how that unit was used, repaired, updated, and retired.",
        [
          "The emerging ",
          { text: "ISO 23247 Part 5", href: isoDigitalThread },
          " describes a digital thread as dependable and trustworthy information linking twins across structure, behavior, space, time, and lifecycle stages. The distinction matters. A live pump twin may estimate current condition. Its digital thread can show the exact configuration, supplier component, commissioning test, duty cycle, repair, and software version behind that condition.",
        ],
        "Without the thread, teams spend time reconciling identifiers, drawings, spreadsheets, maintenance systems, and sensor tags before they can trust the analysis. With a governed thread, the twin can become a traceable operating record. That record can support quality investigations, service, product improvement, compliance, resale, remanufacturing, and recycling.",
      ],
    },
    {
      heading: "Types of Digital Twins",
      paragraphs: [
        "The categories overlap because real systems overlap. A product moves through a process inside a facility supported by equipment and people. The useful distinction is the question each twin answers.",
      ],
      tables: [
        {
          title: "Common Twin Scopes",
          columns: ["Scope", "Primary Question", "Typical Evidence"],
          rows: [
            [
              "Component twin",
              "How is one critical part behaving?",
              "Material, load, vibration, inspection, service history.",
            ],
            [
              "Product twin",
              "What was built and how will it perform?",
              "Design, configuration, test, usage, maintenance.",
            ],
            [
              "Asset twin",
              "What is this operating asset's current state?",
              "Telemetry, alarms, maintenance, environment.",
            ],
            [
              "Process twin",
              "How does work or material move?",
              "Cycle time, queues, recipes, quality, resources.",
            ],
            [
              "Production system twin",
              "What will constrain production?",
              "Layout, capacity, downtime, labor, demand, controls.",
            ],
            [
              "Facility twin",
              "How is a building or site operating?",
              "Models, scans, equipment, occupancy, energy, work orders.",
            ],
            [
              "Network twin",
              "How will a network respond to change?",
              "Topology, flows, constraints, demand, failures.",
            ],
            [
              "Human or biological twin",
              "How might a body or biological system respond?",
              "Imaging, physiology, biomarkers, treatment, population evidence.",
            ],
            [
              "Environmental twin",
              "How could natural and human systems interact?",
              "Earth observation, weather, hydrology, emissions, infrastructure.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Where Artificial Intelligence Fits",
      paragraphs: [
        "Digital twins existed before the current artificial intelligence wave and do not depend on it. Engineering equations, discrete event simulation, control models, statistical estimation, and rules remain essential because they encode known structure and can be inspected. Artificial intelligence adds value where state is difficult to observe, relationships are hard to specify, or a full simulation is too slow for the decision.",
        "Machine learning can detect anomalies, estimate hidden condition, predict remaining useful life, approximate computationally expensive solvers, recognize objects in images, reconcile records, generate scenarios, and search large decision spaces. Generative systems can help users query the twin and draft explanations. None of those capabilities establishes physical truth on its own.",
        [
          "The connection to ",
          { text: "physical AI", href: "/insights/what-is-physical-ai-complete-guide" },
          " is direct. Robots and autonomous systems need environments in which they can learn, test, and rehearse. Operating robots can then update those environments with new observations. The twin becomes a memory and test surface around the machine, while the physical AI system supplies perception and action.",
        ],
      ],
    },
    {
      heading: "The Company and Platform Landscape",
      paragraphs: [
        "No company owns the complete digital twin category. The stack crosses engineering design, simulation, industrial data, cloud services, building information, geospatial systems, robotics, visualization, controls, and integration. A buyer may use several platforms around one decision.",
        "Vendor language should be mapped to function. A physics model is different from an asset graph. A photorealistic environment is different from a maintenance application. A robotics observability platform is different from a factory planning suite. They may interoperate, compete at the edges, or become components of the same twin system.",
      ],
      tables: [
        {
          title: "Representative Companies by Role",
          columns: ["Role", "Representative Companies", "Function"],
          rows: [
            [
              "Industrial lifecycle and automation",
              "Siemens, Dassault Systèmes, PTC, Rockwell Automation, Schneider Electric, and Hexagon",
              "Connect design, production, operations, and service.",
            ],
            [
              "Physics and system simulation",
              "Ansys, Siemens, Dassault Systèmes, MathWorks, Altair, and Modelon",
              "Model physical and system behavior.",
            ],
            [
              "Cloud twin services",
              "Microsoft Azure Digital Twins and AWS IoT TwinMaker",
              "Provide graphs, APIs, connectors, and application building blocks.",
            ],
            [
              "Buildings and infrastructure",
              "Bentley Systems, Autodesk, Esri, Hexagon, and Trimble",
              "Connect design, geospatial, asset, and maintenance data.",
            ],
            [
              "High fidelity spatial simulation",
              "NVIDIA Omniverse, Epic Games, Unity, and specialized industrial developers",
              "Create interactive environments for simulation and testing.",
            ],
            [
              "Robotics simulation and evaluation",
              "Antioch, NVIDIA, Applied Intuition, Parallel Domain, and internal engineering platforms",
              "Run scenarios and compare autonomy releases.",
            ],
            [
              "Robotics data and observability",
              "Foxglove and internal fleet data systems",
              "Synchronize, replay, and inspect robot data.",
            ],
            [
              "Mobile reality capture",
              "FieldAI, Caterpillar, Boston Dynamics partners, drone providers, and inspection robotics companies",
              "Refresh spatial and condition evidence from the field.",
            ],
          ],
          note:
            "Illustrative, not a ranking. Most implementations combine platforms.",
        },
      ],
      links: [
        {
          label: "FieldAI Deep Dive",
          href: "/insights/fieldai-edge-robot-foundation-model-industrial-autonomy-deep-dive",
          description:
            "How mobile robots, edge autonomy, sensors, and digital twin workflows connect in changing industrial environments.",
        },
        {
          label: "Foxglove Deep Dive",
          href: "/insights/foxglove-robotics-data-platform-deep-dive",
          description:
            "The data and observability layer that helps robotics teams synchronize, replay, search, and inspect physical system evidence.",
        },
        {
          label: "Antioch Deep Dive",
          href: "/insights/antioch-physical-ai-simulation-platform-deep-dive",
          description:
            "A focused examination of simulation, digital twin calibration, cloud evaluation, and the evidence required to trust virtual tests.",
        },
        {
          label: "Caterpillar and FieldAI",
          href: "/news/caterpillar-fieldai-industrial-ai-robots-digital-twins",
          description:
            "Black Scarab reporting on autonomous inspection, changing site records, industrial robots, and live digital twin ambitions.",
        },
      ],
    },
    {
      heading: "What the Major Platforms Actually Contribute",
      paragraphs: [
        [
          "Siemens describes a comprehensive twin spanning product, machine, production, and plant lifecycles. Its strongest position is the connection between engineering software and industrial automation. The company says teams can use physics based simulation to test and optimize before acting in the real world. That is a broad suite strategy rather than one standalone twin product. See the ",
          { text: "Siemens digital twin overview", href: siemensTwin },
          ".",
        ],
        [
          "Ansys Twin Builder focuses on connected models of in service assets. It can combine system models with reduced order models derived from detailed physics simulation, then integrate third party models through standards such as the Functional Mockup Interface. The value is computational: preserve enough physical behavior to make a model useful at operating speed. Ansys publishes performance and maintenance benefit claims, but buyers should require evidence for their own asset. See ",
          { text: "Ansys Twin Builder", href: ansysTwinBuilder },
          ".",
        ],
        [
          "AWS IoT TwinMaker and Azure Digital Twins sit closer to the application infrastructure layer. AWS supplies entity models, unified data access, knowledge graph queries, connectors, and visualization integration. Azure provides a managed model and graph service for environments such as factories, buildings, farms, railways, and cities. Neither service automatically supplies a validated physics model, clean source data, operating workflow, or business case. See ",
          { text: "AWS IoT TwinMaker", href: awsProduct },
          " and the ",
          { text: "Azure pricing description", href: azurePricing },
          ".",
        ],
        [
          "Bentley iTwin and Autodesk Tandem address buildings and infrastructure from different entry points. Bentley emphasizes engineering information, reality data, infrastructure context, and applications built on its iTwin Platform. Autodesk Tandem turns building information models into an operational facility representation connected to assets, documents, and time series data. See ",
          { text: "Bentley iTwin Experience", href: bentleyITwin },
          " and ",
          { text: "Autodesk Tandem", href: autodeskTandem },
          ".",
        ],
        [
          "NVIDIA Omniverse provides libraries and workflows for high fidelity spatial representation, OpenUSD data exchange, physics, sensor simulation, synthetic data, and robot development. Its relevance is strongest when visual and physical simulation of a facility or machine is part of the use case. It is not a replacement for product lifecycle management, maintenance records, industrial control, validation, or domain specific models. See the ",
          { text: "industrial facility twin workflow", href: nvidiaFacilityTwins },
          ".",
        ],
        [
          "PTC ThingWorx represents machines and data sources as connected software objects and supports applications such as asset monitoring, utilization, performance management, and work instructions. It illustrates an important category boundary: industrial IoT software can become part of a twin when it is connected to a fit for purpose representation and decision. Connectivity and dashboards alone do not settle the definition. See ",
          { text: "ThingWorx manufacturing applications", href: ptcThingWorx },
          ".",
        ],
      ],
    },
    {
      heading: "Standards Matter Because Twins Must Outlive Tools",
      paragraphs: [
        [
          "The ",
          { text: "ISO 23247 series", href: isoPrinciples },
          " supplies manufacturing terminology, principles, a reference architecture, information attributes, and exchange requirements. The architecture is intentionally neutral about one data format or protocol. It gives organizations a common structure for discussing observable manufacturing elements, digital representations, and the services around them.",
        ],
        "Other standards solve narrower pieces. STEP carries product model data. Building information standards such as IFC support facilities. OPC UA and MTConnect exchange industrial information. Functional Mockup Interface packages simulation models for exchange and combined execution. OpenUSD can connect complex three dimensional scene data. Asset Administration Shell provides a structured digital representation for industrial assets. No one standard makes the complete twin.",
        "Interoperability has commercial consequences. A twin assembled from proprietary identifiers, undocumented transformations, and one vendor interface can become expensive to extend or leave. Buyers should negotiate model export, data ownership, schema access, version history, interface rights, and transition support before the twin becomes operationally critical.",
      ],
    },
    {
      heading: "Where Digital Twins Already Create Value",
      paragraphs: [
        [
          "NASA provides unusually clear examples because physical access is difficult and failure is consequential. The agency describes twins used to test and monitor the James Webb Space Telescope, including thermal behavior and the sunshield deployment. NASA also uses software twins that emulate spacecraft hardware so flight software can be developed and validated before all physical hardware is available. These are engineering and mission tools, not decorative replicas. See NASA on ",
          { text: "why digital twins matter", href: nasaNeed },
          " and the ",
          { text: "JSTAR software twin program", href: nasaJstar },
          ".",
        ],
        "Manufacturers use twins for virtual commissioning, line balancing, process optimization, quality investigation, asset monitoring, training, and maintenance. A controls team can test machine logic against a simulated line before installation. A production planner can explore buffers and schedules. A maintenance team can combine condition evidence with an asset model. The value comes from a shorter or safer path to a decision, not from the twin label.",
        "Buildings and infrastructure create value through information continuity. A useful facility twin can connect rooms, equipment, documents, sensors, work orders, energy, inspections, and changes. A bridge or rail twin can connect geometry and condition evidence with maintenance planning. These applications often update more slowly than a robot twin, but their lifecycle can span decades.",
        [
          "Robotics makes the feedback loop visible. FieldAI and Caterpillar plan to use mobile robots for inspection and changing site records, while digital environments support testing and operational analysis. Foxglove helps teams inspect synchronized robot data. Antioch positions simulation as a continuous evaluation layer. Each company covers a different part of the system. The ",
          { text: "Caterpillar announcement", href: fieldAiCaterpillar },
          " does not disclose a customer rollout, price, or measured return, so its larger twin vision remains a development program rather than proven commercial evidence.",
        ],
      ],
    },
    {
      heading: "How Digital Twins Could Change the World",
      paragraphs: [
        "The deepest consequence is not that every object receives a virtual copy. It is that more decisions about the physical world can become testable, reversible, and evidence based before they consume scarce resources or create irreversible harm. That changes the cost of learning.",
        "The following ramifications are Black Scarab analysis grounded in current programs and technical direction. They are possible outcomes, not forecasts with guaranteed dates or adoption rates.",
      ],
      callouts: [
        {
          label: "Design",
          title: "Physical development can begin with more virtual failure",
          body: "Products, factories, buildings, and infrastructure can be tested across more conditions before construction. That can reduce physical prototypes and late changes, but only when the virtual evidence is calibrated and the final system still receives appropriate physical verification.",
        },
        {
          label: "Industrial capacity",
          title: "The first installation can teach the next hundred",
          body: "A governed twin can preserve layout, process, failure, commissioning, and operating knowledge that normally stays with one team. Repeat deployment could become faster when the reusable parts are explicit, while site differences remain visible instead of being hidden by a standard template.",
        },
        {
          label: "Maintenance",
          title: "Economies can move from repair toward anticipation",
          body: "Assets can be maintained according to observed condition and predicted consequence rather than a calendar alone. The larger shift is organizational: budgets, spares, labor, and shutdowns can be planned around risk before failure interrupts service.",
        },
        {
          label: "Infrastructure",
          title: "Cities can operate from a shared spatial record",
          body: "Roads, utilities, buildings, transit, drainage, permits, construction, and emergency plans can be related in one governed environment. Better coordination can reduce avoidable conflicts, but it also concentrates sensitive information about people and critical systems.",
        },
        {
          label: "Climate and disasters",
          title: "Policy can be rehearsed against detailed scenarios",
          body: "Flood defenses, heat plans, energy demand, evacuation, water use, agriculture, and infrastructure investment can be tested across plausible environmental futures. The twin does not remove political choices. It can make assumptions, tradeoffs, affected places, and uncertainty harder to ignore.",
        },
        {
          label: "Healthcare research",
          title: "Treatment could become more individualized and simulated",
          body: "Patient specific models may help researchers and clinicians compare disease trajectories, procedures, or treatments. Current evidence remains early, and biological complexity, clinical validation, privacy, equity, and regulatory responsibility make this a much more demanding claim than twinning a machine.",
        },
        {
          label: "Physical AI",
          title: "Machines can learn from worlds they do not have to damage",
          body: "Robots and autonomous systems can train and test across rare, dangerous, or expensive conditions in simulation. Real operations can refresh the scenario library. Physical testing remains necessary because the simulated world can never prove that it contains every important surprise.",
        },
        {
          label: "Work",
          title: "Operating knowledge can become executable infrastructure",
          body: "Experienced workers often carry the real model of a plant or asset in their heads. A useful twin can preserve evidence, relationships, and procedures for a broader team. The risk is stripping context from workers while centralizing decisions in software that appears more certain than it is.",
        },
        {
          label: "Markets",
          title: "The best model can become a strategic advantage",
          body: "A company that understands how its products and operations behave can design faster, price service more accurately, manage risk, and improve every deployed unit. Twin data can also create dependence on the platform that controls the model, identifiers, history, and interfaces.",
        },
        {
          label: "Government",
          title: "Public decisions can become more inspectable or more technocratic",
          body: "A public twin can expose assumptions and let communities compare options. It can also hide value judgments inside inaccessible models. Legitimacy requires transparent objectives, uncertainty, public input, audit rights, and a clear boundary between analytical support and political authority.",
        },
      ],
    },
    {
      heading: "A Digital Twin of the Earth Is No Longer Just a Metaphor",
      paragraphs: [
        [
          "The European Commission's ",
          { text: "Destination Earth initiative", href: destinationEarth },
          " combines Earth observation, environmental models, socioeconomic data, cloud services, high performance computing, and interactive applications. Initial twins address extreme events and climate adaptation. The program aims to help users test responses to floods, droughts, fires, resource stress, and policy choices at useful geographic scales.",
        ],
        "This is a digital twin at system of systems scale. No single model captures Earth. Weather, oceans, land, infrastructure, population, and economic activity use different data and time horizons. The twin is therefore an organized environment in which multiple models and observations can interact, with reliability information attached to scenario results.",
        "The world changing potential is better preparation. A region could compare where to strengthen a flood barrier, how an evacuation route performs, which power assets face heat stress, or how a water policy affects agriculture. The danger is false authority. A detailed map can make a conditional scenario look like a certain future. The public value depends on visible assumptions, competing scenarios, and decisions that remain accountable to people.",
      ],
    },
    {
      heading: "Human Digital Twins Require a Higher Standard",
      paragraphs: [
        [
          "The National Heart, Lung, and Blood Institute describes research toward personalized models that could estimate disease risk, treatment response, or surgical outcomes. It also states that the technology is in its infancy. A 2026 systematic review found applications across diagnosis, therapy optimization, physiological monitoring, and health system modeling, while noting the need to distinguish conceptual proposals, prototypes, and patient level implementations. See the ",
          { text: "NIH research feature", href: nihHearts },
          " and the ",
          { text: "systematic review", href: healthcareReview },
          ".",
        ],
        "A biological twin is harder than an industrial asset twin because the subject is adaptive, partly observed, socially situated, and ethically protected. The data may be incomplete or uneven across populations. A model can influence diagnosis or treatment even when its uncertainty is poorly understood. Privacy loss can be permanent because physiology and identity cannot simply be reset like a password.",
        "The credible path is narrow and clinical. Define one decision, one population, one evidence standard, and one accountable professional workflow. Compare predictions with outcomes. Study bias and failure. Protect consent and data rights. A virtual human that claims to predict everything is marketing. A validated model that improves one decision can be medicine.",
      ],
    },
    {
      heading: "What Digital Twins Cost",
      paragraphs: [
        "There is no useful average price for a digital twin. A developer experiment with a managed graph service, a facility model connected to a few systems, a production line commissioning environment, and a national infrastructure twin have different labor, data, model, compute, security, and lifecycle burdens.",
        [
          "NIST's ",
          { text: "economics report", href: nistEconomics },
          " warns that software application estimates do not necessarily include sensors, data standardization, modeling, integration, and implementation. A 2025 peer reviewed cost methodology similarly treats twin cost as a collection of data and model activities rather than one license. See the ",
          { text: "cost methodology", href: costMethod },
          ".",
        ],
        "The largest cost is often not the twin platform. It is making source information trustworthy, mapping asset identities, instrumenting the physical system, integrating operational technology and enterprise systems, validating models, changing workflows, and maintaining the result after equipment and software change.",
      ],
      tables: [
        {
          title: "Public Platform Pricing Evidence",
          columns: ["Platform", "Published Evidence", "Not Included"],
          rows: [
            [
              "AWS IoT TwinMaker",
              "$197.53 monthly standard example or $220 tier bundle for 800 entities and the stated workload.",
              "Source services, storage, Grafana, sensors, engineering, validation, and operations.",
            ],
            [
              "Bentley iTwin Platform",
              "$199 monthly Standard with 200 credits or $499 Premium with 500 credits.",
              "Data preparation, capture, processing, integration, and professional work.",
            ],
            [
              "Azure Digital Twins",
              "Consumption billing across operations, messages, and query units.",
              "Ingestion, storage, analytics, simulation, integration, and implementation.",
            ],
            [
              "Autodesk Tandem",
              "Free tier with capacity limits, then capacity based pricing.",
              "Model quality, sensors, integration, commissioning, and governance.",
            ],
            [
              "Enterprise industrial suites",
              "Product selection and commercial quotation required.",
              "Architecture, services, deployment, support, and exit terms.",
            ],
          ],
          note:
            "Reviewed September 24, 2026. Service prices are not project totals.",
        },
      ],
    },
    {
      heading: "A Practical Buyer Example",
      paragraphs: [
        "Consider Harbor Thermal Systems, a fictional manufacturer of industrial heat exchangers. One final pressure and thermal test station limits shipments. The company is considering a digital twin to predict queue formation, identify test instability, and evaluate schedule and maintenance changes. This is an analytical example, not a supplier deployment or quotation.",
        "The baseline should record accepted units, retests, cycle time, wait time, product mix, station faults, technician attention, energy, maintenance, and reasons for delay. The team should first ask whether conventional reporting, better scheduling rules, an additional fixture, or process standardization solves the problem more cheaply. A twin is justified only if representing interactions and possible futures improves the decision.",
        "The first twin can be narrow. A discrete event model represents arrivals, recipes, fixtures, queues, technicians, and outages. Live production events update current state. Equipment telemetry provides pressure, temperature, and alarm evidence. Maintenance history estimates likely interruptions. A scenario service compares schedule, buffer, staffing, and maintenance options.",
        "Acceptance should use a period the model did not see during calibration. The twin must reproduce agreed measures within stated tolerances and rank proposed interventions reliably enough for the planning decision. If it cannot explain why a recommendation changed, the team should limit it to analysis. It should not write directly to the test controller.",
        "Value comes from additional accepted shipments, fewer retests, lower waiting, better maintenance timing, and avoided capital that would otherwise be spent on the wrong constraint. Cost includes integration, licenses, model development, instrumentation, validation, operator time, support, and continuous updates. The test is net value from better decisions, not whether the model looks like the station.",
      ],
    },
    {
      heading: "How to Build One Without Boiling the Ocean",
      paragraphs: [
        "Start with one consequential decision and one accountable owner. Define the physical subject, users, action, current baseline, error cost, acceptable delay, required evidence, and authority boundary. If the team cannot describe how a better decision creates value, it is not ready to select a platform.",
      ],
      tables: [
        {
          title: "A Practical Deployment Sequence",
          columns: ["Stage", "Work", "Exit Test"],
          rows: [
            [
              "1. Frame the decision",
              "Name the user, decision, outcome, cadence, and error cost.",
              "Owned use case with a measurable baseline.",
            ],
            [
              "2. Set the boundary",
              "Choose the minimum scope needed.",
              "Exclusions and blind spots are explicit.",
            ],
            [
              "3. Audit the evidence",
              "Map sources, identity, time, quality, ownership, and gaps.",
              "Required and missing evidence is known.",
            ],
            [
              "4. Select the model",
              "Choose the simplest credible modeling approach.",
              "Assumptions, versions, and tolerances are recorded.",
            ],
            [
              "5. Build the minimum twin",
              "Connect only what the first decision requires.",
              "The user no longer reconstructs the answer manually.",
            ],
            [
              "6. Verify and validate",
              "Test implementation, evidence, uncertainty, and edge conditions.",
              "Performance meets the named operating boundary.",
            ],
            [
              "7. Operate with limited authority",
              "Start with observation or recommendation and record outcomes.",
              "Measured value exceeds operating burden.",
            ],
            [
              "8. Expand deliberately",
              "Add scope or authority only after the first use works.",
              "Each expansion has value, validation, security, and rollback.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Why Digital Twin Projects Fail",
      paragraphs: [
        [
          "A 2026 review of twins in legacy manufacturing found that integration barriers, cost, complexity, and weak value assessment continue to complicate business cases. It also noted that much supporting evidence remains conceptual or tied to broad transformation programs rather than isolated twin impact. See the ",
          { text: "legacy systems review", href: legacyRealityCheck },
          ".",
        ],
      ],
      callouts: [
        {
          label: "Scope failure",
          title: "The project tries to twin everything",
          body: "Teams collect data and geometry without a decision boundary. Cost grows, ownership blurs, and the first user waits for a perfect world model that never arrives.",
        },
        {
          label: "Identity failure",
          title: "Systems disagree about what an asset is",
          body: "A machine has different names across design, control, maintenance, finance, and sensor systems. Data can be individually correct and collectively attached to the wrong subject.",
        },
        {
          label: "Freshness failure",
          title: "The twin becomes an elegant memory",
          body: "Physical configuration, software, tools, layout, or operating rules change while the model remains untouched. Users cannot see that its current appearance represents an obsolete state.",
        },
        {
          label: "Model failure",
          title: "Accuracy is claimed without a condition or tolerance",
          body: "A model validated under normal load is used during an extreme event, or a prediction for one output is treated as proof of every other behavior.",
        },
        {
          label: "Workflow failure",
          title: "The right answer arrives where nobody works",
          body: "A separate dashboard asks operators to leave their established tools and supplies no approved action. Insight without an operating path becomes another screen.",
        },
        {
          label: "Authority failure",
          title: "A recommendation silently becomes control",
          body: "Automation is added before users understand error modes, independent safety layers, access control, fallback, and responsibility for a bad command.",
        },
        {
          label: "Economic failure",
          title: "The technology works but the decision is not valuable",
          body: "Integration and maintenance cost exceed the downtime, waste, risk, or capital avoided. A technically impressive twin can still be a poor investment.",
        },
        {
          label: "Ownership failure",
          title: "The pilot ends when the project team leaves",
          body: "No operating team owns data quality, model updates, user support, validation, cybersecurity, budget, and retirement. The twin decays because maintenance was never designed as part of the product.",
        },
      ],
    },
    {
      heading: "Security Changes When the Copy Can Influence the Original",
      paragraphs: [
        [
          "NIST's ",
          { text: "Security and Trust Considerations for Digital Twin Technology", href: nistSecurity },
          " explains that twins inherit conventional cybersecurity problems and introduce new trust questions around instrumentation, monitoring, simulation, and control. A twin can expose the topology, condition, vulnerabilities, and operating logic of a critical system. If compromised, it can also present a false state or recommend a harmful action.",
        ],
        "The security model should separate observation, analysis, recommendation, and control. Source devices and users need identity. Data needs integrity, provenance, and time. Models and configurations need signed versions, approval, and rollback. Networks need segmentation. Commands need an authorized path through existing control and safety systems. Logs need to show what the twin knew, predicted, recommended, and changed.",
        "Privacy expands the problem. A building twin can reveal occupancy and movement. A city twin can combine mobility, infrastructure, imagery, and public records. A worker twin can become surveillance. A human health twin contains deeply personal information. Data minimization, purpose limits, access rights, retention, consent, and redress belong in the architecture, not in a policy added after deployment.",
      ],
    },
    {
      heading: "Alternatives Can Be Better",
      paragraphs: [
        "A digital twin is one way to improve a decision. A conventional simulation may be sufficient for design. A historian and dashboard may be sufficient for monitoring. Statistical process control may detect variation without a system model. A maintenance rule may outperform a fragile prediction. A spreadsheet can answer a low frequency planning question. A physical test may be cheaper and more credible.",
        "The correct comparison is not twin versus no technology. It is the complete twin system versus the simplest credible way to improve the same outcome. The alternative should include current pain, labor, risk, accuracy, response time, and future change. Sometimes a twin wins because the decision repeats and the model improves. Sometimes it loses because the system is stable, evidence is scarce, or the consequence is too small.",
        "The most common sensible starting point is a digital shadow with human action. Connect reliable evidence, build the minimum representation, show current state in the user's workflow, and record outcomes. Prediction, optimization, and automatic control can follow when the organization has earned trust in the data and model.",
      ],
    },
    {
      heading: "Questions Every Buyer Should Ask",
      paragraphs: [
        "A serious proposal should answer the questions below in writing. The answers define the product more clearly than the phrase digital twin.",
      ],
      callouts: [
        {
          label: "Purpose",
          title: "Which decision changes?",
          body: "Name the user, action, baseline, target outcome, update cadence, and cost of a wrong result.",
        },
        {
          label: "Boundary",
          title: "What exactly is represented?",
          body: "List the assets, processes, environments, lifecycle stages, versions, conditions, and deliberate exclusions.",
        },
        {
          label: "Evidence",
          title: "How is reality synchronized?",
          body: "Identify every source, asset identifier, timestamp, calibration, transformation, quality check, owner, and stale data rule.",
        },
        {
          label: "Credibility",
          title: "Where is the model valid?",
          body: "Request verification, validation, uncertainty, test data separation, operating limits, drift monitoring, and revalidation triggers.",
        },
        {
          label: "Authority",
          title: "What can the twin cause?",
          body: "Separate display, alert, recommendation, planning, supervised command, and automatic control. Preserve independent safety functions.",
        },
        {
          label: "Economics",
          title: "What is the total cost per improved decision?",
          body: "Include instrumentation, integration, licenses, compute, storage, modeling, validation, workflow change, support, updates, and exit.",
        },
        {
          label: "Ownership",
          title: "Who maintains truth?",
          body: "Assign the asset model, data mapping, model performance, security, user workflow, vendor relationship, budget, and retirement plan.",
        },
        {
          label: "Portability",
          title: "What survives a platform change?",
          body: "Confirm export of source data, relationships, models, geometry, configuration, results, history, and documentation in usable forms.",
        },
      ],
    },
    {
      heading: "The Black Scarab Verdict",
      paragraphs: [
        "Digital twins are becoming part of the infrastructure through which complex physical systems are designed, tested, operated, and improved. The category deserves attention because it joins several mature capabilities into a more continuous decision loop: engineering models, operational data, simulation, spatial context, industrial software, and human judgment.",
        "The winning implementation will rarely be the largest or most realistic copy. It will be the smallest trustworthy representation that improves an important decision and remains maintained as reality changes. That standard makes a twin less glamorous and more useful.",
        "The ramifications can be profound. More products can fail in software before material is consumed. More infrastructure can be maintained before service is lost. More robots can encounter danger in simulation before people encounter it at work. More climate and public policy choices can be explored with local consequences visible. Some medical decisions may eventually become more individualized. In every case, the benefit depends on whether the model exposes uncertainty instead of hiding it.",
        "A digital twin should therefore be treated as evidence infrastructure, not a visual effect. Start with the decision. Connect the minimum reality. Validate the representation. Limit its authority. Measure the result. Then expand only when the twin has earned the right to influence more of the world it represents.",
      ],
    },
    {
      heading: "Research Method and Disclosure",
      paragraphs: [
        "This report was prepared September 24, 2026 from ISO digital twin standards, NIST manufacturing, credibility, economics, and security work, Digital Twin Consortium definitions and its August 2026 system framework, NASA programs, the European Commission Destination Earth program, NIH research material, a 2026 healthcare systematic review, official platform documentation, public pricing pages, and peer reviewed research on cost and legacy implementation.",
        "Company capabilities, examples, and prices are attributed to the organizations that publish them. They are not independent performance tests or customer quotations. The larger ramifications, platform role map, buyer framework, fictional manufacturing example, and verdict are Black Scarab analysis.",
        "The cover is an original AI generated editorial illustration of a generic industrial and infrastructure twin. The architecture diagram is an original Black Scarab functional interpretation. Neither image depicts a customer deployment, proprietary design, certified control system, or official platform interface.",
      ],
    },
  ],
  sources: [
    "ISO 23247 digital twin framework for manufacturing",
    "National Institute of Standards and Technology digital twin research",
    "Digital Twin Consortium definitions and system framework",
    "NASA digital twin programs",
    "European Commission Destination Earth",
    "NIH and peer reviewed healthcare research",
    "Official platform product and pricing documentation",
    "Peer reviewed cost and legacy implementation research",
  ],
  sourceLinks: [
    { label: "Digital Twin Consortium definition", url: dtcDefinition },
    { label: "Digital Twin System Framework announcement", url: dtcFramework },
    { label: "NIST Digital Twins program", url: nistProgram },
    { label: "NIST ISO 23247 implementation scenarios", url: nistUseCases },
    { label: "NIST digital twin credibility research", url: nistCredibility },
    { label: "NIST digital twin security and trust report", url: nistSecurity },
    { label: "NIST economics of digital twins", url: nistEconomics },
    { label: "ISO 23247 Part 1 general principles", url: isoPrinciples },
    { label: "ISO 23247 Part 2 reference architecture", url: isoArchitecture },
    { label: "ISO 23247 Part 5 digital thread draft", url: isoDigitalThread },
    { label: "NASA on digital twin applications", url: nasaNeed },
    { label: "NASA JSTAR software digital twins", url: nasaJstar },
    { label: "European Commission Destination Earth", url: destinationEarth },
    { label: "NIH research on digital twins and hearts", url: nihHearts },
    { label: "Healthcare digital twin systematic review", url: healthcareReview },
    { label: "Siemens comprehensive digital twin", url: siemensTwin },
    { label: "Ansys Twin Builder", url: ansysTwinBuilder },
    { label: "PTC ThingWorx manufacturing applications", url: ptcThingWorx },
    { label: "AWS IoT TwinMaker", url: awsProduct },
    { label: "AWS IoT TwinMaker pricing", url: awsPricing },
    { label: "Azure Digital Twins pricing", url: azurePricing },
    { label: "Bentley iTwin Platform pricing", url: bentleyPricing },
    { label: "Bentley iTwin Experience", url: bentleyITwin },
    { label: "Autodesk Tandem", url: autodeskTandem },
    { label: "Autodesk Tandem pricing model", url: autodeskPricing },
    { label: "Autodesk Tandem tier comparison", url: autodeskComparison },
    { label: "NVIDIA industrial facility digital twins", url: nvidiaFacilityTwins },
    { label: "Caterpillar and FieldAI collaboration", url: fieldAiCaterpillar },
    { label: "Digital twin cost methodology", url: costMethod },
    { label: "Digital twins in legacy manufacturing review", url: legacyRealityCheck },
  ],
});
