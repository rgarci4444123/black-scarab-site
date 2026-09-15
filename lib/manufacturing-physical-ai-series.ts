import type { CaseStudyArticle } from "@/lib/case-studies";

export const manufacturingPhysicalAiSeriesIntroduction = (): CaseStudyArticle => ({
  slug: "how-modern-manufacturing-works-factories-physical-ai-guide",
  title:
    "How Modern Manufacturing Works: A Beginner's Guide to Factories and Physical AI",
  seoTitle: "How Modern Manufacturing Works and Where Physical AI Fits",
  summary:
    "A first principles map of the modern factory, from materials, machines, and production flow to automation, industrial software, company roles, and the emerging place of physical AI.",
  publishedLabel: "Deep Dive · Published September 14, 2026",
  publishedDate: "2026-09-14",
  publishedAt: "2026-09-14T01:14:14-04:00",
  typeLabel: "Deep Dive",
  formatLabel: "Learning series introduction",
  series: {
    name: "Inside the Physical AI Factory",
    label: "Series introduction",
    href: "/insights/how-modern-manufacturing-works-factories-physical-ai-guide",
    next: {
      title: "Learn to See a Factory",
      href: "/insights/what-is-a-manufacturing-plant-factory-types-production-flow",
    },
  },
  industry: "Manufacturing",
  image: "/article-images/how-modern-manufacturing-works-physical-ai-guide.png",
  imageAlt:
    "Editorial illustration of a connected modern factory transforming raw materials into compact autonomous inspection rovers",
  imageCaption:
    "Original Black Scarab editorial illustration of a connected modern factory. This is an editorial interpretation, not an official product photograph.",
  seoDescription:
    "Learn how modern manufacturing works, how factories connect machines, people, software, and suppliers, and where physical AI fits inside production.",
  tags: [
    "how manufacturing works",
    "manufacturing plant",
    "factory automation",
    "physical AI",
    "smart manufacturing",
    "industrial machinery",
    "manufacturing for beginners",
    "industrial automation",
  ],
  author: {
    name: "Rodolfo Garcia Calderoni, CFA",
    href: "/about",
  },
  sections: [
    {
      paragraphs: [
        "A frontier model can help a founder turn a sketch into computer aided design, write firmware, compare components, and prepare a first bill of materials. The design still has to survive contact with metal, plastic, electricity, heat, friction, tolerances, workers, suppliers, and customers. Someone must decide how every part will be made, which machines will perform the work, how those machines will be controlled, and how each finished product will be tested.",
        "That physical system is the missing layer in many conversations about artificial intelligence. Software can propose a geometry. A factory must produce that geometry repeatedly. A robot can demonstrate a task. A production system must perform useful work at the required rate, quality, cost, and level of safety. The difference between an impressive demonstration and a durable industrial business often lives inside that gap.",
        "Black Scarab is opening a nine part learning series to study the gap from first principles. We will follow one hypothetical autonomous inspection rover from idea to production, enter the machines that shape its components, meet the companies that connect the factory, and eventually design the plant that could build its first 1,000 units. Along the way, we will examine physical AI from both directions: how factories manufacture intelligent machines and how intelligent machines change factories.",
      ],
      tables: [
        {
          title: "The Series at a Glance",
          columns: ["Question", "Working Answer"],
          rows: [
            [
              "What is a factory?",
              "A system that transforms inputs into acceptable products repeatedly.",
            ],
            [
              "What determines the plant?",
              "The product, required volume, process, quality, delivery target, and economics.",
            ],
            [
              "What makes it smart?",
              "Connected information, measurable performance, and the ability to respond to changing conditions.",
            ],
            [
              "Where does physical AI fit?",
              "Where a machine must perceive physical conditions, decide what to do, and act under real constraints.",
            ],
            [
              "What will we build?",
              "A complete conceptual path from an autonomous rover design to a functioning small factory.",
            ],
          ],
        },
      ],
    },
    {
      heading: "The Factory Is a System Before It Is a Building",
      paragraphs: [
        "The simplest definition of a factory is a system that transforms inputs into acceptable products. The inputs may be steel, resin, electronic components, food ingredients, energy, designs, labor, and capital. The output may be a robot, automobile, medicine, circuit board, or packaged meal. The building contains the transformation, but the building is not the transformation.",
        "A useful factory must repeat the result. It must deliver the intended product at a required production rate, within a target cost, at a defined quality level, without exposing people to unacceptable risk. It also has to recover from ordinary disturbances such as a late supplier, worn cutting tool, absent employee, failed sensor, design revision, or defective batch.",
        "This systems view explains why buying a collection of advanced machines does not automatically create a capable plant. The machines need material, tooling, instructions, power, controls, operators, maintenance, quality checks, spare parts, and a production schedule. Each machine also has to fit the processes before and after it. A fast machine can make the factory slower when it produces inventory that the next operation cannot consume.",
        "Modern factory design therefore starts with the product, expected volume, and required workflow. Autodesk describes plant layout planning in this sequence, beginning with product and workflow requirements before equipment placement, simulation, and validation. The later deep dive on plant design will examine this process in detail.",
      ],
      visual: {
        src: "/article-images/manufacturing-five-flows.svg",
        alt: "Diagram showing materials, work, information, energy, and money converging in a repeatable factory system",
        caption:
          "Five connected flows determine whether a factory can produce the right result repeatedly. Original Black Scarab diagram.",
      },
    },
    {
      heading: "Five Flows Make the Factory Move",
      paragraphs: [
        "Materials are the easiest flow to see. Trucks arrive with raw stock and purchased components. Parts move through storage, fabrication, assembly, inspection, packaging, and shipping. Some material becomes finished product. Some becomes scrap, rework, packaging waste, or inventory waiting for the next operation.",
        "Work is the sequence of actions performed by people and machines. A machinist secures a part. A cutting tool removes material. An assembler tightens a fastener. A robot transfers a component. An inspector measures a critical dimension. The order, duration, and reliability of these actions determine production capacity.",
        "Information tells the factory what to make and whether the result is acceptable. It includes product designs, tolerances, bills of materials, work instructions, software versions, schedules, machine programs, inspection results, maintenance records, and customer orders. NIST describes the digital thread as the effort to connect this information across design, manufacturing, quality, and product support. Gaps between those systems can prevent feedback from reaching the people who need it.",
        "Energy enters through electricity, compressed air, fuel, water, steam, and other utilities. A machine may appear self contained while depending on a transformer, cooling system, dust collector, exhaust duct, air compressor, network connection, and safe means of isolating stored energy. These requirements affect which building can support the process and what installation really costs.",
        "Money moves through all four flows. It pays for equipment, labor, buildings, tooling, inventory, maintenance, energy, insurance, and the production losses that occur while a factory learns. Revenue arrives only when customers accept the output. A technically impressive process can still fail if it ties up too much capital or cannot produce at an economic rate.",
      ],
      tables: [
        {
          title: "A First Principles Factory Scorecard",
          columns: ["Flow", "Question to Ask", "Typical Failure"],
          rows: [
            [
              "Materials",
              "Where is every item, and what happens to it next?",
              "Excess travel, shortages, damage, scrap, or hidden inventory.",
            ],
            [
              "Work",
              "Which operation sets the rate for the complete system?",
              "One bottleneck leaves people and machines waiting.",
            ],
            [
              "Information",
              "Does every person and machine have the correct current instruction?",
              "An old drawing or software version creates the wrong product.",
            ],
            [
              "Energy",
              "Can the facility power, cool, ventilate, and safely isolate the process?",
              "A purchased machine cannot operate as intended after delivery.",
            ],
            [
              "Money",
              "Does the output justify the installed cost and continuing expense?",
              "The plant produces units but destroys cash.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Machines Are Easier to Understand as Verbs",
      paragraphs: [
        "A first visit to an equipment catalog can feel like entering a language built entirely from unfamiliar nouns. CNC mill, lathe, press brake, injection molding machine, coordinate measuring machine, servo drive, PLC, SCADA, and MES arrive before the beginner knows which problem each one solves.",
        "We will organize machines by their physical action. Some remove material by cutting, grinding, drilling, or erosion. Some form material through pressure, bending, rolling, or heat. Some add material through printing, deposition, or coating. Others mold, cast, join, assemble, inspect, transport, or package. The machine name becomes much easier to remember once its action in the production sequence is clear.",
        "The same discipline applies to robots. An industrial robot is a programmable motion platform, not a finished application. It needs a tool, fixture, controller, safety system, programming, and a process around it. A robot manufacturer may supply the arm and controller. A separate company may build the gripper. An integrator may design the cell, connect the control system, program the motion, and prove that the complete application meets its requirement.",
        "The International Federation of Robotics reported that factories installed 542,000 industrial robots in 2024, more than twice the total recorded ten years earlier. Annual installations exceeded 500,000 for the fourth consecutive year. That scale makes robots an established part of manufacturing, but it does not make every task a good robotics application.",
      ],
    },
    {
      heading: "No Single Company Builds the Whole Factory",
      paragraphs: [
        "Industrial companies make more sense when they are placed into functional roles. FANUC supplies products that include industrial robots, numerical controls, machining centers, electrical discharge machines, and injection molding equipment. Siemens spans industrial software, automation, communications, drives, controls, and digital engineering. Rockwell Automation connects control hardware, industrial networks, software, safety, and plant operations through its Allen Bradley and FactoryTalk portfolios. Their offerings can overlap, but they are not interchangeable versions of one product.",
        "These suppliers are only part of the system. Machine builders package components into equipment designed for a process. Systems integrators connect robots, controls, safety, vision, software, and customer equipment. Distributors sell and support products. Architecture and engineering firms design the building and utilities. Contractors construct them. Riggers move heavy machines. Factory employees operate, maintain, and improve the finished system.",
        "A future article will trace one robot cell across this complete chain. The important lesson for now is that the factory owner remains responsible for the production result even when many companies contribute to it. Contracts can allocate work and risk, but they do not remove the need for an owner who understands the whole system.",
      ],
      tables: [
        {
          title: "Who Contributes to a Modern Factory",
          columns: ["Provider", "Typical Contribution", "What It Usually Does Not Guarantee Alone"],
          rows: [
            [
              "Equipment manufacturer",
              "Machine, robot, controller, sensor, drive, or production equipment.",
              "Performance of the complete production line.",
            ],
            [
              "Machine builder",
              "Purpose built equipment combining mechanical, electrical, and control systems.",
              "Every connection to the wider factory unless included in scope.",
            ],
            [
              "Systems integrator",
              "Connection, programming, safety integration, commissioning, and testing.",
              "Product demand or the owner's operating discipline.",
            ],
            [
              "Architecture and engineering firm",
              "Building layout, structure, power, ventilation, water, fire protection, and permits.",
              "The manufacturing process unless that expertise is explicitly included.",
            ],
            [
              "Contract manufacturer",
              "Components, subassemblies, or complete products built to an agreed specification.",
              "Ownership of the product design and commercial demand.",
            ],
            [
              "Factory owner",
              "Product, process requirements, capital, people, acceptance, and operating model.",
              "The ability to delegate final accountability for the product.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Automation Has Layers",
      paragraphs: [
        "Factory automation begins below artificial intelligence. A sensor detects whether a part is present. A programmable controller evaluates logic. A drive regulates electrical power. A motor creates motion. An operator sees status through a human machine interface. A safety controller or independent device stops hazardous movement when required.",
        "Above the machine, software manages designs, orders, inventory, schedules, quality, maintenance, and production records. Rockwell describes smart manufacturing as connectivity from device to machine, system, and enterprise. Siemens similarly presents an integrated path between product development, simulation, automation, production, and service. The commercial details vary, but both descriptions reveal the same systems problem: useful information must travel between layers without weakening reliable control or safety.",
        "NIST notes that the cost of common platforms, standards, and integration remains a barrier, especially for smaller manufacturers. That is a useful correction to the idea that adding sensors or artificial intelligence automatically creates a smart factory. Connectivity produces data. The factory still needs trustworthy context, clear decisions, competent people, and a process that can act on the result.",
      ],
      tables: [
        {
          title: "From Physical Action to Business Decision",
          columns: ["Layer", "Plain Language Role", "Examples"],
          rows: [
            [
              "Physical process",
              "Changes, moves, or measures material.",
              "Cutting, welding, assembly, transport, and inspection.",
            ],
            [
              "Devices",
              "Sense conditions and create motion.",
              "Sensors, motors, actuators, cameras, valves, and drives.",
            ],
            [
              "Machine control",
              "Runs equipment according to reliable logic and operating limits.",
              "PLC, CNC, robot controller, motion control, and safety control.",
            ],
            [
              "Operations",
              "Coordinates production, quality, inventory, and maintenance.",
              "Production management, quality, warehouse, and maintenance software.",
            ],
            [
              "Enterprise",
              "Connects manufacturing with orders, finance, purchasing, and customers.",
              "Enterprise planning, product data, supply chain, and financial systems.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Physical AI Begins When the Machine Must Interpret the World",
      paragraphs: [
        "For this series, physical AI means a system that observes physical conditions, interprets what those observations mean, chooses an action, and affects the physical world. The definition includes more than a model and more than a robot. It includes sensors, compute, control interfaces, actuators, safety systems, the operating environment, and the people responsible for the result.",
        "A fixed automation system may move the same part between the same two positions for years. A physical AI system becomes useful when the position, shape, route, condition, or task can vary enough that perception and adaptation create value. Examples include picking objects that do not arrive in a precise orientation, inspecting changing surfaces, navigating around people and equipment, or helping engineers diagnose a failure from images, logs, and measurements.",
        "The boundary deserves care. A connected machine is not necessarily intelligent. A dashboard is not autonomy. A language model that proposes a tool path has not proved that the tool path is safe or manufacturable. NIST describes smart manufacturing systems as adaptive systems with differing levels of autonomy, while also emphasizing performance assurance, standards, and measurement. Those last elements determine whether adaptation can be trusted in production.",
        "Frontier models are beginning to reach deeper into engineering software. OpenAI has shown GPT 6 Astra performing printed circuit board layout in KiCad and evaluated it on CAD reconstruction with tools. These are provider demonstrations and benchmark results, not evidence that a model can assume engineering responsibility. Their significance is that more of the design and coordination work surrounding a physical product may become accessible to a small team. Physical testing remains the authority that connects a generated design to reality.",
        "Safety remains an independent obligation. OSHA notes that many robot accidents occur during programming, maintenance, testing, setup, or adjustment, precisely when ordinary production conditions are interrupted. The intelligent behavior of a robot does not remove the need for guarding, energy isolation, approved operating limits, training, and safe procedures for unusual states.",
      ],
      tables: [
        {
          title: "The Path From Mechanization to Physical AI",
          columns: ["Stage", "What the System Does", "Example"],
          rows: [
            [
              "Manual work",
              "A person observes, decides, and acts.",
              "An assembler selects and installs every component.",
            ],
            [
              "Mechanization",
              "A machine supplies power while a person directs the operation.",
              "A powered press assists a repeated assembly task.",
            ],
            [
              "Fixed automation",
              "Equipment repeats a predefined physical sequence.",
              "A dedicated transfer line moves one product configuration.",
            ],
            [
              "Programmable automation",
              "The sequence can change through programs and settings.",
              "A CNC machine produces different parts from different programs.",
            ],
            [
              "Perception based automation",
              "Sensors locate or classify changing physical inputs.",
              "A vision system guides a robot to parts in varying positions.",
            ],
            [
              "Adaptive physical AI",
              "The system interprets uncertainty and adjusts action within defined limits.",
              "A mobile robot changes its route as the factory environment changes.",
            ],
          ],
        },
      ],
    },
    {
      heading: "One Autonomous Rover Will Carry the Story",
      paragraphs: [
        "The series needs one physical object that can make abstract manufacturing decisions visible. We will use a hypothetical compact autonomous inspection rover. It will have a frame, enclosure, wheels, motors, gearboxes, battery, computer, cameras, sensors, printed circuit boards, cable harnesses, embedded software, and packaging. No specifications, suppliers, customers, prices, or performance results will be invented. The rover is a teaching model, not a commercial product claim.",
        "At ten units, engineers may assemble the product at benches using printed parts and components ordered in small quantities. At 100 units, repeated failures and labor time begin to justify dedicated fixtures, clearer work instructions, supplier agreements, structured inspection, and a controlled software loading process. At 1,000 units per year, the company must treat assembly, testing, inventory, quality, maintenance, and production planning as a connected operating system.",
        "The rover is useful because it exposes both sides of physical AI. It is an intelligent machine that must itself be manufactured. It may also enter another factory and perform inspection or data collection. Understanding its body, production process, and deployment environment makes it harder to confuse model capability with complete system capability.",
      ],
      tables: [
        {
          title: "How Production Changes With Volume",
          columns: ["Stage", "Primary Objective", "Likely Production Character"],
          rows: [
            [
              "First 10 units",
              "Learn whether the product works.",
              "Engineering builds, flexible tools, outside suppliers, and frequent design changes.",
            ],
            [
              "First 100 units",
              "Learn whether the process can repeat.",
              "Dedicated fixtures, work instructions, traceability, supplier control, and production testing.",
            ],
            [
              "Capacity for 1,000 units",
              "Deliver at a predictable rate, cost, and quality.",
              "Designed cells, trained operators, managed inventory, controlled changes, and selective automation.",
            ],
          ],
        },
      ],
    },
    {
      heading: "The Nine Part Journey",
      paragraphs: [
        "Each installment will stand alone for a reader arriving through search, but together they form one course. We begin by learning what happens inside a factory, move down into machines and controls, then return to the full problem of designing, financing, installing, and operating a plant.",
        "The sequence matters. A beginner who starts with artificial intelligence vendors may never see the production constraint. A beginner who starts with machinery catalogs may buy capacity without a process. We will begin with the product and transformation, then add the equipment, companies, building, automation, and intelligence required to make the system work.",
      ],
      visual: {
        src: "/article-images/inside-physical-ai-factory-series-map.svg",
        alt: "Nine part learning path from manufacturing fundamentals through factory construction and physical AI",
        caption:
          "The series moves from factory fundamentals to a complete production system. Original Black Scarab diagram.",
      },
      tables: [
        {
          title: "Inside the Physical AI Factory",
          columns: ["Part", "Deep Dive", "What the Reader Will Learn"],
          rows: [
            [
              "1",
              "What Is a Manufacturing Plant?",
              "Factory types, production systems, material flow, and the major areas of a plant.",
            ],
            [
              "2",
              "Types of Manufacturing Machines",
              "The equipment that removes, forms, adds, joins, assembles, inspects, and moves material.",
            ],
            [
              "3",
              "How a Product Is Manufactured",
              "Bills of materials, production routing, capacity, suppliers, and the path from 10 to 1,000 units.",
            ],
            [
              "4",
              "Who Builds a Factory?",
              "Equipment companies, automation platforms, machine builders, integrators, contractors, and manufacturers.",
            ],
            [
              "5",
              "How to Design a Manufacturing Plant",
              "Process flow, layout, site selection, utilities, safety, inventory, and expansion.",
            ],
            [
              "6",
              "Industrial Automation Explained",
              "PLCs, CNC, sensors, drives, robots, industrial networks, and factory software.",
            ],
            [
              "7",
              "Physical AI in Manufacturing",
              "Machine vision, adaptive robotics, mobile autonomy, digital twins, and practical adoption boundaries.",
            ],
            [
              "8",
              "How to Build a Manufacturing Plant",
              "Equipment, employees, costs, installation, commissioning, and the first production run.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Why Black Scarab Is Building This Series",
      paragraphs: [
        "Physical AI is frequently presented through a visible product: a humanoid, robot arm, autonomous vehicle, camera, or intelligent machine. Commercial adoption depends on a much wider industrial network. Sensors provide observations. Compute runs models. Controls translate decisions into machine behavior. Integrators connect systems. Manufacturers build the hardware. Distributors, installers, maintenance providers, and software companies keep it operating.",
        "Understanding this network matters to anyone entering physical AI. The visible machine is only one layer of the commercial and technical system around it. Evaluating a product, investment, partnership, or deployment requires knowing which process creates demand, who specifies the equipment, how suppliers and integrators divide responsibility, what installation requires, and who supports the system after commissioning.",
        "That knowledge becomes even more important as manufacturing grows more accessible to smaller teams. Better design tools, digital fabrication, shared facilities, flexible automation, and stronger supplier networks may allow more entrepreneurs to launch physical products without owning a conventional factory. Their success will still depend on dependable equipment, components, expertise, production capacity, and quality systems. This series provides the industrial foundation needed to understand both today's factories and the emerging creator economy for physical products.",
      ],
    },
    {
      heading: "Your First Factory Learning Checkpoint",
      paragraphs: [
        "The opening map is intentionally simple. You do not need to memorize machine catalogs or factory software acronyms yet. You need a set of questions that works whenever you encounter a new plant, product, or industrial technology.",
        "Ask what is being transformed, what must repeat, what determines the production rate, how quality is measured, which company owns each layer, and what happens when the system leaves its expected conditions. Then ask where perception, adaptation, or autonomy would improve the result enough to justify its cost and complexity.",
        "The next deep dive begins inside the building. We will learn the principal types of manufacturing, walk through every major factory area, and follow material from the receiving dock to the finished goods door. By the end, the plant should stop looking like an intimidating collection of machines and start looking like a system you can read.",
      ],
      tables: [
        {
          title: "Questions to Carry Into Every Factory",
          columns: ["Question", "What It Reveals"],
          rows: [
            [
              "What product leaves this facility?",
              "The purpose of the production system.",
            ],
            [
              "What enters, and how is it transformed?",
              "The materials and manufacturing processes.",
            ],
            [
              "Which operation limits output?",
              "The current production bottleneck.",
            ],
            [
              "How does the plant know a unit is acceptable?",
              "The quality system and measurement plan.",
            ],
            [
              "Who supplied and integrated each layer?",
              "The provider ecosystem and responsibility boundaries.",
            ],
            [
              "What happens when conditions change?",
              "The flexibility, resilience, and possible role for physical AI.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Research Method",
      paragraphs: [
        "This introduction was prepared from current manufacturing system research and guidance from NIST, factory planning material from Autodesk, industrial automation portfolios from Siemens, Rockwell Automation, and FANUC, robot market data from the International Federation of Robotics, machine and robotics safety guidance from OSHA, and current OpenAI material on engineering work with GPT 6 Astra.",
        "Supplier descriptions identify the categories those companies publicly serve. They are not endorsements, complete market maps, or evidence that one vendor can deliver an entire factory. Robot installation figures come from the International Federation of Robotics and reflect supplier and national association reporting. Model demonstrations and benchmarks come from OpenAI and should not be interpreted as independent validation of production engineering capability.",
        "The inspection rover and its future production scenarios are hypothetical teaching devices. Later reports will source current machinery prices, installation requirements, staffing costs, software, standards, integrators, and manufacturing economics before presenting buyer conclusions.",
      ],
    },
  ],
  sources: [
    "NIST smart manufacturing systems research",
    "NIST digital thread research",
    "Autodesk manufacturing plant layout guidance",
    "International Federation of Robotics World Robotics 2025 summary",
    "OSHA robotics and machine guarding guidance",
    "Siemens Digital Enterprise",
    "Rockwell Automation smart manufacturing",
    "FANUC America product portfolio",
    "OpenAI GPT 6 Astra overview",
  ],
  sourceLinks: [
    {
      label: "NIST smart manufacturing systems",
      url: "https://www.nist.gov/programs-projects/smart-manufacturing-systems-design-and-analysis-program",
    },
    {
      label: "NIST digital thread for smart manufacturing",
      url: "https://www.nist.gov/programs-projects/digital-thread-smart-manufacturing",
    },
    {
      label: "Autodesk manufacturing plant layout guide",
      url: "https://www.autodesk.com/solutions/design-manufacturing/plant-layout-design",
    },
    {
      label: "International Federation of Robotics World Robotics 2025",
      url: "https://ifr.org/ifr-press-releases/global-robot-demand-in-factories-doubles-over-10-years",
    },
    {
      label: "OSHA robotics guidance",
      url: "https://www.osha.gov/robotics",
    },
    {
      label: "OSHA machine guarding guidance",
      url: "https://www.osha.gov/machine-guarding/",
    },
    {
      label: "Siemens Digital Enterprise",
      url: "https://www.siemens.com/en-us/company/insights/digital-enterprise/",
    },
    {
      label: "Rockwell Automation smart manufacturing",
      url: "https://www.rockwellautomation.com/en-us/capabilities/smart-manufacturing.html",
    },
    {
      label: "FANUC America products",
      url: "https://www.fanucamerica.com/products",
    },
    {
      label: "OpenAI GPT 6 Astra",
      url: "https://openai.com/index/gpt-6-astra/",
    },
  ],
});
