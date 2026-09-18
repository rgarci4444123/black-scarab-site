import type { CaseStudyArticle } from "@/lib/case-studies";

export const factoryBuildersGuide = (): CaseStudyArticle => ({
  slug: "who-builds-a-factory-siemens-rockwell-fanuc-integrators",
  title:
    "Who Builds a Factory? Siemens, Rockwell, FANUC, Machine Builders, and Integrators Explained",
  seoTitle:
    "Who Builds a Factory? Siemens, Rockwell, FANUC, and Integrators",
  summary:
    "A practical map of the companies behind industrial production, from equipment and controls suppliers to machine builders, integrators, engineering firms, contractors, software providers, and contract manufacturers.",
  publishedLabel: "Deep Dive · Published September 18, 2026",
  publishedDate: "2026-09-18",
  publishedAt: "2026-09-18T16:25:30-04:00",
  typeLabel: "Deep Dive",
  formatLabel: "Inside the Physical AI Factory · Part 4",
  series: {
    name: "Inside the Physical AI Factory",
    label: "Part 4 of 8",
    href: "/insights/how-modern-manufacturing-works-factories-physical-ai-guide",
    previous: {
      title: "How a Product Is Manufactured",
      href: "/insights/how-a-product-is-manufactured-bill-of-materials-production-line",
    },
  },
  industry: "Manufacturing",
  image: "/article-images/who-builds-a-factory-ecosystem-cover.png",
  imageFit: "contain",
  imageAlt:
    "Editorial illustration of engineers and specialists reviewing a guarded robot machine tending cell",
  imageCaption:
    "Original Black Scarab editorial illustration of the specialists and equipment behind a robot machine tending cell. This is an editorial interpretation, not an official factory or product photograph.",
  seoDescription:
    "Learn who builds a factory, how Siemens, Rockwell, FANUC, machine builders, integrators, engineers, contractors, and software providers divide the work, and who owns the final result.",
  tags: [
    "who builds factories",
    "industrial automation companies",
    "Siemens versus Rockwell",
    "FANUC factory automation",
    "machine builders",
    "systems integrators",
    "robot machine tending",
    "factory engineering",
  ],
  author: {
    name: "Rodolfo Garcia Calderoni, CFA",
    href: "/about",
  },
  sections: [
    {
      paragraphs: [
        [
          "This is Part 4 of ",
          {
            text: "Inside the Physical AI Factory",
            href: "/insights/how-modern-manufacturing-works-factories-physical-ai-guide",
          },
          ". Part 1 mapped the plant. Part 2 opened the machines. Part 3 turned a hypothetical autonomous inspection rover into a bill of materials and production route. Now we meet the companies that make the route real.",
        ],
        "No single company builds a modern factory. A machine tool manufacturer may supply the equipment that cuts metal. A robot manufacturer supplies the arm and controller. A controls company supplies programmable controllers, drives, networks, and industrial software. A machine builder packages repeatable equipment. A systems integrator makes different products behave as one cell. Engineers design the process and facility. Contractors install power, air, structure, and utilities. The owner still has to define the result and accept the risk.",
        "The confusion begins because the boundaries overlap. Siemens and Rockwell Automation sell products, software, and services, but their partner networks also include distributors, original equipment manufacturers, and integrators. FANUC manufactures robots and numerical controls, while authorized integrators turn those products into applications. A large engineering firm may manage an entire plant program, while a specialist integrator owns only one production line. The logo on the controller does not reveal who designed the complete system.",
        "This report separates those roles and then reconnects them through one worked example: a robot loading and unloading a computer numerical control machine. The goal is not to declare one supplier best. It is to show who should own each requirement, interface, test, document, and service obligation before a purchase order is signed.",
      ],
    },
    {
      heading: "The Short Answer",
      paragraphs: [
        "The factory owner is the only party with the complete business problem. It knows the product, demand, labor model, quality requirement, site, customers, and capital limit. Every supplier sees a narrower slice. The central management job is therefore to turn one operating need into coordinated scopes without leaving the interfaces unowned.",
        "A useful way to read the ecosystem is from products to outcomes. Product companies make reusable hardware and software. Delivery companies combine those products for a specific application. Facility companies create the building and utilities around the process. Operating companies manufacture the product or run the plant after handover. One firm can occupy several categories, but the contract should still say which role it performs on this project.",
      ],
      tables: [
        {
          title: "The Factory Ecosystem at a Glance",
          columns: ["Role", "What It Delivers", "What It Usually Does Not Prove"],
          rows: [
            [
              "Equipment manufacturer",
              "A machine, robot, drive, sensor, controller, or other catalog product",
              "That the complete application will meet the owner's output and quality targets",
            ],
            [
              "Automation platform supplier",
              "Controls, motion, networking, safety, visualization, and industrial software",
              "That products from every vendor have been integrated and validated at the site",
            ],
            [
              "Machine builder",
              "A repeatable machine or configurable equipment package",
              "That the surrounding line, building, data systems, and operating process are complete",
            ],
            [
              "Systems integrator",
              "Application engineering that connects equipment, controls, software, safety, and process",
              "That every upstream building or downstream business system is inside its scope",
            ],
            [
              "Engineering and construction team",
              "Process design, facility design, permits, utilities, construction, and site execution",
              "That a specialized production cell performs unless its contract includes that responsibility",
            ],
            [
              "Software provider",
              "A product for design, operations, quality, maintenance, planning, or business management",
              "That the data model, interfaces, and operating governance have been implemented",
            ],
            [
              "Contract manufacturer",
              "Production capacity and operating execution for another company's product",
              "That it owns the product design, market demand, or every supplier risk",
            ],
          ],
        },
      ],
    },
    {
      heading: "Begin With the Owner, Not the Vendor List",
      paragraphs: [
        "A factory project should begin with the product and the required operating result. How many accepted units are needed? Which variants will run? Which processes create safety, quality, environmental, or regulatory risk? What must be traceable? How much change is expected? When must production start? Those answers determine the equipment and the delivery team.",
        "The owner does not need to design every wire or write every robot instruction. It does need an accountable internal team that can define requirements, approve changes, resolve conflicts, and accept the finished system. Outsourcing engineering transfers work. It does not transfer the commercial consequence of choosing the wrong process or producing the wrong product.",
        "The owner should also define system boundaries before asking for quotations. A request for a machine tending cell may or may not include the machine tool, foundation, electrical feeder, compressed air, network drop, safety assessment, part presentation, gauges, production data connection, operator training, spare parts, and weekend support. Two bids are not comparable when each bidder silently assumes a different boundary.",
      ],
      tables: [
        {
          title: "The Owner's Minimum Project Definition",
          columns: ["Decision", "Question", "Evidence Before Award"],
          rows: [
            [
              "Business case",
              "Which capacity, quality, labor, safety, or resilience problem is being solved?",
              "Demand model, current baseline, financial boundary, and named benefit owner",
            ],
            [
              "Process requirement",
              "What enters, what must happen, and what counts as an accepted output?",
              "Part family, drawings, cycle demand, quality limits, failure rules, and sample material",
            ],
            [
              "Site boundary",
              "Which building, utility, network, environmental, and access conditions apply?",
              "Verified site survey, utility data, layout, floor capacity, and installation constraints",
            ],
            [
              "Responsibility boundary",
              "Who owns every machine, interface, permit, test, and handover record?",
              "Scope matrix with one accountable party for each deliverable",
            ],
            [
              "Acceptance",
              "How will the owner decide that the system is complete?",
              "Factory and site acceptance plans tied to measurable requirements",
            ],
            [
              "Lifecycle support",
              "Who responds after production begins?",
              "Warranty, spares, backups, escalation, service hours, and obsolescence plan",
            ],
          ],
        },
      ],
    },
    {
      heading: "Ten Roles Build One Factory",
      paragraphs: [
        "The ecosystem becomes easier to understand when each participant is classified by its normal deliverable. The map below follows one project from the owner's operating requirement through products, application delivery, facility delivery, and production. Arrows represent coordination, not a universal contract structure.",
        "Real projects rearrange the boxes. An owner may buy equipment directly and hire an integrator separately. A machine builder may subcontract the robot integration. A design builder may hold one contract for the facility and many lower tier agreements. A contract manufacturer may own the plant and buy the entire cell. The labels still matter because technical responsibility can become unclear even when commercial responsibility appears simple.",
      ],
      visual: {
        src: "/article-images/factory-builder-ecosystem-map.svg",
        mobileSrc: "/article-images/factory-builder-ecosystem-map-mobile.svg",
        alt: "Map of ten company roles that connect a factory owner's requirement to operating production",
        caption:
          "A factory is delivered through connected product, application, facility, software, and operating roles. One company may perform several roles, but each responsibility still needs an owner. Original Black Scarab diagram.",
      },
      tables: [
        {
          title: "Who Does What",
          columns: ["Role", "Typical Deliverable", "Selection Evidence"],
          rows: [
            [
              "Equipment manufacturer",
              "Machine tool, robot, conveyor, compressor, inspection machine, or process equipment",
              "Application range, specifications, installed base, service coverage, and lifecycle support",
            ],
            [
              "Component supplier",
              "Motors, drives, sensors, controls, bearings, pneumatics, tooling, safety devices, and enclosures",
              "Exact part data, compatibility, certification, availability, and change notice practice",
            ],
            [
              "Distributor",
              "Authorized access to products, inventory, local application support, training, and commercial service",
              "Authorization, technical capability, stock, credit terms, and escalation path",
            ],
            [
              "Automation platform supplier",
              "Controller, input and output, motion, safety, networks, human machine interface, and software environment",
              "Architecture fit, skills availability, cybersecurity support, migration path, and partner ecosystem",
            ],
            [
              "Machine builder",
              "A designed and assembled machine that performs a repeatable transformation",
              "Similar machines in production, process knowledge, design controls, test capacity, and service",
            ],
            [
              "Systems integrator",
              "A complete cell, line, control system, robot application, or information integration",
              "Relevant references, engineering methods, safety competence, documentation, and support depth",
            ],
            [
              "Manufacturing engineering firm",
              "Process plan, equipment specification, line balance, layout, simulation, and launch support",
              "Experience with the product and process, independent judgment, and implementation record",
            ],
            [
              "Architecture, engineering, and construction team",
              "Building, structure, utilities, permits, construction, and facility commissioning",
              "Licensed disciplines, code experience, project controls, trade coordination, and site safety",
            ],
            [
              "Software provider and implementer",
              "Product lifecycle, manufacturing operations, quality, maintenance, data, scheduling, or enterprise software",
              "Functional fit, interfaces, deployment partner, data ownership, security, and upgrade policy",
            ],
            [
              "Contract manufacturer",
              "Purchased material, production labor, equipment operation, quality, and shipment under an agreed scope",
              "Process capability, capacity, quality system, supply chain, traceability, economics, and customer references",
            ],
          ],
        },
      ],
    },
    {
      heading: "Equipment and Component Manufacturers Supply the Building Blocks",
      paragraphs: [
        "Equipment manufacturers design products that can be sold repeatedly. A machining center, industrial robot, press, coordinate measuring machine, air compressor, or conveyor has a defined product architecture and option set. The supplier should document what the product can do, the conditions it needs, and the support available over its life.",
        "A catalog product is not a production result. A robot specification can state payload and reach, but it does not prove that the arm can grip an oily part, clear the machine door, meet the required cycle, recover from a mispick, or produce an accepted component. Those outcomes depend on the application around the product.",
        "Component suppliers sit one level deeper. They provide the sensors, drives, motors, safety devices, pneumatic valves, grippers, cable systems, enclosures, power supplies, network equipment, and thousands of other items that make a machine function. Their engineering data shapes the design even when the owner never signs a direct contract with them.",
        "Distributors connect many manufacturers with local customers. A strong authorized distributor can provide inventory, application advice, training, credit, and a route into the original manufacturer's support organization. A distributor is not automatically the designer of the complete system. Some firms also operate integration groups, so the quotation should distinguish product supply from engineering responsibility.",
      ],
    },
    {
      heading: "Siemens and Rockwell Are Platforms, Not Entire Factories",
      paragraphs: [
        [
          "Siemens describes its Digital Industries portfolio as a connection between automation, industrial software, digital twins, and industrial artificial intelligence. Its ",
          {
            text: "Totally Integrated Automation",
            href: "https://www.siemens.com/en-gb/products/tia/",
          },
          " approach brings controllers, drives, safety, visualization, and engineering tools into one environment. Siemens also maintains a certified partner ecosystem because customers still need companies that apply those products to a real process.",
        ],
        [
          "Rockwell Automation follows a similar ecosystem logic around its controls and software portfolio. Its ",
          {
            text: "PartnerNetwork locators",
            href: "https://partners.rockwellautomation.com/en-US/partner-locators/",
          },
          " separate authorized distributors, technology partners, original equipment manufacturers, and system integrators. The categories reveal an important fact: buying an automation platform and delivering an application are different jobs.",
        ],
        "The choice between Siemens and Rockwell is therefore not a simple contest between controller specifications. A plant must consider its installed base, workforce skills, machine supplier preferences, regional support, safety architecture, software environment, cybersecurity practice, spare parts strategy, and the integrators available to deliver and maintain the system. A theoretically elegant platform can become expensive when nobody at the site can support it at two in the morning.",
        "A large factory can also contain several platforms. The plant level architecture may standardize one family while purchased machines arrive with another. The integration plan then needs rules for data exchange, network boundaries, remote access, backups, naming, time synchronization, and change control. Standardization reduces unnecessary variation, but forcing every specialized machine into one vendor can also create cost and performance tradeoffs.",
      ],
      tables: [
        {
          title: "How to Compare Automation Platforms",
          columns: ["Question", "Why It Matters", "Evidence to Request"],
          rows: [
            [
              "Does the platform fit the process?",
              "Discrete assembly, motion control, process control, safety, and batch operations create different demands",
              "Reference architecture and comparable operating applications",
            ],
            [
              "Can the local ecosystem support it?",
              "Engineers, integrators, distributors, and maintenance technicians determine recovery speed",
              "Named partners, training plan, service response, and local spare strategy",
            ],
            [
              "How does it connect?",
              "Machines, robots, quality systems, manufacturing software, and enterprise systems must exchange controlled information",
              "Protocol list, data model, interface ownership, cybersecurity design, and tested recovery",
            ],
            [
              "What is the lifecycle?",
              "Plants often operate longer than one controller or software generation",
              "Support dates, migration path, license terms, backup method, and obsolescence notice",
            ],
            [
              "Who owns application performance?",
              "The platform supplier may warrant products while another party owns the complete line",
              "Written responsibility matrix and one prime path for application defects",
            ],
          ],
          note:
            "Siemens and Rockwell are representative automation platform suppliers. This comparison is a buyer framework, not a ranking or claim that the two portfolios are identical.",
        },
      ],
    },
    {
      heading: "FANUC Supplies Robots and Controls, Integrators Supply Applications",
      paragraphs: [
        [
          "FANUC manufactures industrial robots, computer numerical controls, and factory automation products. Its official ",
          {
            text: "system integrator program",
            href: "https://www.fanucamerica.com/integrators",
          },
          " directs customers to authorized companies that design and implement applications. That distinction is visible in machine tending, where the robot must be combined with a machine tool, part presentation, tooling, safety, controls, and an operating sequence.",
        ],
        [
          "FANUC's ",
          {
            text: "machine tending guidance",
            href: "https://www.fanucamerica.com/applications/machine-tending",
          },
          " shows both industrial robots and collaborative robots, plus standardized packages from integration partners. ABB similarly offers robots, simulation software, application templates, and machine tending modules while stating that integrators customize the site specific system. The pattern is broader than either brand: robot manufacturers create reusable platforms and application tools, while delivery partners make them productive in a particular plant.",
        ],
        "A machine builder occupies a related but distinct role. It designs a machine whose mechanical structure, tooling, controls, and process knowledge are packaged as a repeatable product. A builder may use FANUC numerical controls, Siemens motion, Rockwell controllers, or many other supplier components. The owner buys the machine for its function, not merely for the logo on the control cabinet.",
        "The strongest machine builders and integrators preserve knowledge in standards, templates, libraries, test procedures, and service records. That reuse is where delivery becomes more scalable. A new cell should not require every electrical drawing, alarm, safety function, and data interface to be invented from zero.",
      ],
    },
    {
      heading: "What a Systems Integrator Actually Owns",
      paragraphs: [
        [
          "The Control System Integrators Association defines a control system integrator as a company that designs and implements control systems for manufacturing, process, and industrial facilities. The Association for Advancing Automation describes integrators that can design, specify, build, install, program, train, and maintain automation systems. Those descriptions are broad because integration is the work of closing gaps among specialized products.",
        ],
        "For a robot cell, the integrator may select the arm, design the base, choose the gripper, define part presentation, program motion, connect the machine, build the electrical panel, implement safety, simulate reach and cycle time, assemble the cell, run factory acceptance, install it, train operators, and support production. The exact scope varies. The word integrator is not a substitute for a written list.",
        "Integrator selection should match the application. A company skilled in automotive welding may not be the best partner for regulated assembly, food handling, or high mix machining. Vendor authorization indicates training and relationship with a product supplier. Independent certification can add evidence about safety or business systems. Neither replaces references from comparable operating projects.",
        "The buyer should evaluate both technical competence and organizational durability. Who owns the source code and design files? How are changes reviewed? Can another engineer support the project? Does the integrator maintain backups and test records? What happens if a key programmer leaves? A brilliant prototype delivered by one person can become an operating liability when the plant needs ten years of support.",
      ],
      tables: [
        {
          title: "Integrator Evidence Before Award",
          columns: ["Area", "Evidence", "Warning Sign"],
          rows: [
            [
              "Application experience",
              "Operating references with similar parts, process hazards, cycle, and environment",
              "A polished demonstration with no comparable production reference",
            ],
            [
              "Safety competence",
              "Risk assessment method, qualified personnel, standards practice, and validation records",
              "Claim that a collaborative robot or safety component makes the application automatically safe",
            ],
            [
              "Engineering control",
              "Drawing standards, software version control, review, backup, and change history",
              "Files held on individual laptops without a controlled release process",
            ],
            [
              "Project execution",
              "Schedule, design reviews, issue tracking, procurement control, and acceptance planning",
              "Acceptance criteria deferred until the equipment is already built",
            ],
            [
              "Support",
              "Named escalation, response hours, remote access rules, spares, and training",
              "One programmer is the only person who understands the system",
            ],
            [
              "Commercial clarity",
              "Milestones, exclusions, change process, intellectual property, warranty, and liability boundaries",
              "Low price built on unstated owner responsibilities",
            ],
          ],
        },
      ],
    },
    {
      heading: "The Facility Team Builds the World Around Production",
      paragraphs: [
        "Production equipment cannot operate without a suitable site. Architects, civil engineers, structural engineers, mechanical engineers, electrical engineers, fire protection specialists, environmental professionals, and code consultants translate the manufacturing program into a permitted facility. Contractors and specialty trades then construct the building and install the utilities.",
        [
          "Autodesk's ",
          {
            text: "factory design guidance",
            href: "https://www.autodesk.com/solutions/factory-design",
          },
          " separates production engineering from the building disciplines while emphasizing coordination among them. The production team decides what equipment and flow are needed. Architects and contractors contribute the building information that keeps equipment installation from colliding with structure, access, utilities, or maintenance needs.",
        ],
        "Large projects may use an engineering, procurement, and construction firm, a construction manager, separate designer and general contractor, or a design builder. The Design Build Institute of America defines design build by one owner contract covering design and construction. That single commercial point can simplify responsibility for the building, but it does not automatically include specialized process equipment unless the scope says so.",
        "The difficult interfaces sit between facility and process. Who designs the machine foundation? Who confirms floor loading? Who brings power to the disconnect? Who specifies cooling water quality? Who owns dust extraction, fire classification, network pathways, roof penetrations, rigging access, and final connection? A three dimensional model can reveal physical clashes, but only a responsibility matrix can reveal an unowned obligation.",
      ],
    },
    {
      heading: "Software Providers Connect Design, Production, and the Business",
      paragraphs: [
        "Factory software spans different time scales and owners. Product lifecycle systems manage designs and revisions. Manufacturing execution and operations systems manage production, quality, and genealogy. Supervisory systems present process status. Maintenance systems organize assets and work. Enterprise planning systems manage demand, purchasing, inventory, finance, and logistics.",
        [
          "The ",
          {
            text: "ISA 95 framework",
            href: "https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard",
          },
          " gives manufacturers common language for the boundary between physical production, controls, manufacturing operations, and business planning. It does not prescribe one vendor. Its value is helping teams define which system owns an object, event, or decision before they build interfaces.",
        ],
        [
          "OPC Unified Architecture provides a vendor independent framework for information exchange from devices and controls through manufacturing and enterprise systems. The ",
          {
            text: "OPC Foundation specification",
            href: "https://reference.opcfoundation.org/specs/OPC-10000-1/4",
          },
          " defines information, message, communication, and conformance models. A supported protocol helps, but useful integration still requires agreed names, units, timestamps, states, quality flags, security, and ownership.",
        ],
        "Software providers often rely on implementation partners because configuring a production system requires plant knowledge and data governance. A license does not create a digital thread. The owner, machine builder, integrator, and software implementer must decide which records are created at the cell, which system becomes authoritative, how changes are synchronized, and what happens when a connection fails.",
      ],
    },
    {
      heading: "A Contract Manufacturer Operates Production for Someone Else",
      paragraphs: [
        "A contract manufacturer makes products or assemblies for another company under an agreed technical and commercial scope. It may buy material, operate equipment, provide labor, perform tests, manage suppliers, package units, and ship finished goods. The customer may retain product design, key components, software release, regulatory ownership, or final market responsibility.",
        "This route can avoid building a dedicated plant before demand is proven. It also creates a new integration challenge between the customer's product definition and the manufacturer's production system. Drawings, bills of materials, approved sources, software images, test limits, deviations, forecasts, inventory, and engineering changes must cross the company boundary without ambiguity.",
        "The label contract manufacturer covers very different capabilities. One supplier may specialize in electronics assembly. Another may provide machining, fabrication, assembly, and fulfillment. A global provider may manage complex supply chains, while a local specialist may offer faster engineering feedback. Selection should follow the exact process, quality, volume, geography, intellectual property, and support need.",
        "The customer remains responsible for understanding what has been outsourced. A low unit quote can exclude tooling, test development, nonrecurring engineering, minimum material commitments, quality containment, software handling, packaging, warranty returns, and future changes. The complete commercial model belongs beside the technical scope.",
      ],
    },
    {
      heading: "One Robot Machine Tending Cell Connects the Whole Ecosystem",
      paragraphs: [
        "Consider a hypothetical cell that loads metal blanks into a computer numerical control machining center, starts the cycle, removes the finished part, clears chips from a locating surface, presents the part to a gauge, and places accepted output in a tray. The owner wants reliable unattended intervals, controlled quality, safe operator access, and enough flexibility for a defined part family.",
        "The robot arm is only one item. The complete cell needs part presentation, end of arm tooling, robot base, machine interface, guarding or protective sensing, safety controls, electrical distribution, pneumatics, chip and coolant tolerance, dimensional inspection, rejected part handling, operator controls, production data, programs, documentation, training, and recovery procedures.",
        "The system must also respect the machine tool. The door, chuck, fixture, and numerical control need reliable states and commands. Opening a door is not proof that motion has stopped safely. A robot reaching the machine is not proof that the part can be seated, clamped, machined, removed, and inspected across real variation.",
      ],
      visual: {
        src: "/article-images/machine-tending-responsibility-stack.svg",
        mobileSrc: "/article-images/machine-tending-responsibility-stack-mobile.svg",
        alt: "Responsibility stack for a robot machine tending cell from products through integration and site utilities",
        caption:
          "The application result sits above many product and delivery layers. The named examples represent common supplier categories, not a required bill of materials. Original Black Scarab diagram.",
      },
      tables: [
        {
          title: "Who Supplies the Machine Tending Cell",
          columns: ["Element", "Typical Lead Party", "Interface That Must Be Closed"],
          rows: [
            [
              "Machining process and machine tool",
              "Owner, manufacturing engineer, and machine tool builder",
              "Part, fixture, program, cycle, door, chuck, coolant, chips, and machine states",
            ],
            [
              "Robot and controller",
              "Robot manufacturer through the integrator or distributor",
              "Payload, reach, mounting, options, software, dress, service, and spare strategy",
            ],
            [
              "Gripper and tooling",
              "Integrator with a tooling or component supplier",
              "Part geometry, force, contamination, retention, sensing, collision, and changeover",
            ],
            [
              "Part presentation",
              "Machine builder or integrator",
              "Orientation, replenishment, empty state, mixed parts, damage, and ergonomic access",
            ],
            [
              "Control and electrical system",
              "Integrator using an automation platform and component suppliers",
              "Sequence, input and output, alarms, modes, network, cabinet, power, and backups",
            ],
            [
              "Safety system",
              "Integrator and owner with qualified safety specialists",
              "Hazard analysis, protective measures, access, reset, validation, and residual risk",
            ],
            [
              "Inspection and traceability",
              "Owner quality team, integrator, and software implementer",
              "Gauge method, calibration, result limits, part identity, rejection, and record retention",
            ],
            [
              "Facility and installation",
              "Owner, facility engineer, contractor, and integrator",
              "Floor, power, air, network, rigging, access, permits, shutdown, and final connections",
            ],
            [
              "Production ownership",
              "Owner operations and maintenance",
              "Staffing, replenishment, preventive work, fault response, changeover, and escalation",
            ],
          ],
        },
      ],
    },
    {
      heading: "The Delivery Sequence Matters as Much as the Supplier List",
      paragraphs: [
        "A successful cell is developed through evidence, not one final demonstration. The owner first releases an application requirement. Suppliers then complete concept work, risk review, simulation, detailed design, procurement, build, programming, and internal test. Factory acceptance proves agreed functions before shipment. Site acceptance proves the installed system with the real utilities, interfaces, material, and people.",
        "Factory acceptance and site acceptance are not interchangeable. A cell can pass at the integrator and fail after installation because the site air pressure, network, machine version, floor, lighting, coolant, part variation, or production data differ. The owner should decide which tests can use simulation, which need sample parts, and which require representative production conditions.",
        "Robot safety standards also separate the robot from the application. ISO 10218 Part 1 addresses the industrial robot as partly completed machinery. ISO 10218 Part 2 addresses integration and robot applications. That division mirrors the commercial reality: a compliant robot does not make the finished cell safe by itself.",
      ],
      visual: {
        src: "/article-images/factory-project-delivery-gates.svg",
        mobileSrc: "/article-images/factory-project-delivery-gates-mobile.svg",
        alt: "Factory project delivery gates from requirement through design, build, acceptance, and production support",
        caption:
          "Each gate retires a different risk. Acceptance should trace back to released requirements rather than appear at the end as a general demonstration. Original Black Scarab diagram.",
      },
      tables: [
        {
          title: "Evidence at Each Delivery Gate",
          columns: ["Gate", "Decision", "Minimum Evidence"],
          rows: [
            [
              "Application requirement",
              "Is the problem defined well enough to buy?",
              "Part family, demand, process, quality, site, safety, data, support, and acceptance requirements",
            ],
            [
              "Concept review",
              "Can the proposed system solve the problem in principle?",
              "Layout, reach, cycle model, process concept, risks, utility load, scope, and budget basis",
            ],
            [
              "Detailed design review",
              "Is the system ready to build?",
              "Mechanical, electrical, controls, safety, software, interface, and test designs with open issues controlled",
            ],
            [
              "Factory acceptance",
              "Is the built system ready to ship?",
              "Requirement based test results, backups, drawings, issue list, sample output, and shipment approval",
            ],
            [
              "Site acceptance",
              "Does the installed system work in the real plant?",
              "Utility, interface, safety, quality, rate, recovery, training, and documentation results",
            ],
            [
              "Production release",
              "Can operations own it?",
              "Qualified people, maintenance plan, spares, escalation, capability evidence, and closed critical issues",
            ],
            [
              "Sustained support",
              "Is the promised value being realized?",
              "Accepted output, downtime, intervention, quality loss, changeover, maintenance, and benefit review",
            ],
          ],
        },
      ],
    },
    {
      heading: "Commercial Structure Decides Where Problems Land",
      paragraphs: [
        "The owner can place one purchase order for a turnkey cell or hold separate contracts for the robot, machine tool, integrator, software, and installation. A turnkey structure simplifies the commercial path only when the prime supplier actually controls its subcontractors and accepts the application requirements. A single invoice does not guarantee a single engineering authority.",
        "Separate contracts can preserve choice and price transparency, but the owner becomes the integrator of contracts. When the robot arrives late, the machine interface changes, or the network is unavailable, the owner must decide who absorbs the cost. The more interfaces the owner retains, the more internal engineering and project management it needs.",
        "Payment milestones should follow verified progress. Design approval, long lead release, factory acceptance, delivery, site acceptance, and final documentation are more useful milestones than elapsed calendar dates alone. Retention can protect completion, but the contract must define what completion means.",
        "No universal price can be assigned to the ecosystem. Project cost depends on process difficulty, equipment, options, engineering novelty, safety, site work, software, validation, travel, schedule, and support. Buyers should compare a complete cost boundary rather than a robot price or controls bill.",
      ],
      tables: [
        {
          title: "Cost Layers Beyond the Main Equipment",
          columns: ["Cost Layer", "Examples", "Common Omission"],
          rows: [
            [
              "Application engineering",
              "Concept, simulation, design, programming, safety, documentation, and project management",
              "Assuming catalog products connect without custom work",
            ],
            [
              "Peripheral hardware",
              "Tooling, fixtures, sensors, guarding, panels, conveyors, gauges, and part presentation",
              "Quoting the robot or machine without the surrounding cell",
            ],
            [
              "Facility work",
              "Foundations, power, air, cooling, exhaust, networks, rigging, and building changes",
              "Leaving site readiness to a late owner expense",
            ],
            [
              "Launch and validation",
              "Samples, test material, travel, training, rate trials, quality studies, and issue closure",
              "Treating the first successful cycle as production release",
            ],
            [
              "Software and data",
              "Licenses, servers, interfaces, cybersecurity, backups, reporting, and implementation",
              "Buying licenses without integration and governance",
            ],
            [
              "Lifecycle",
              "Spares, service, preventive work, upgrades, remote support, and obsolescence",
              "Evaluating only initial capital cost",
            ],
          ],
        },
      ],
    },
    {
      heading: "Physical AI Adds a New Supplier Without Removing the Old Ones",
      paragraphs: [
        "A perception model, adaptive robot policy, or industrial agent can help a system recognize variation and choose an action. It does not eliminate the robot, machine, tooling, controls, safety system, integration, facility, or operating process. Physical AI enters the ecosystem as another capability that must be connected to accountable machinery.",
        "The integration boundary becomes more important because learned behavior can change without a mechanical drawing changing. The team needs to know which model and data were released, where inference runs, what observations it uses, what command authority it has, how uncertainty is handled, which safety functions remain independent, and how updates are tested.",
        "A conventional integrator may add an AI specialist. A robot manufacturer may package perception or application templates. A software provider may work through certified delivery partners. A machine builder may embed a model inside a repeatable machine. The commercial winner will often be the team that turns the new capability into a supported product boundary, not the company with the most impressive isolated demonstration.",
        "The machine tending example shows the limit clearly. A vision system may locate a part that moved. An adaptive planner may revise the approach. The gripper still needs physical retention, the machine still needs a safe interface, the control system still needs deterministic states, and the completed part still needs measurable acceptance. Intelligence changes how the cell handles variation. It does not remove the requirement to engineer the cell.",
      ],
      tables: [
        {
          title: "Questions for a Physical AI Delivery Team",
          columns: ["Question", "Why It Matters", "Accountable Evidence"],
          rows: [
            [
              "What is learned and what is fixed?",
              "The boundary determines testing, change control, and failure behavior",
              "Released architecture and operating modes",
            ],
            [
              "What action authority does the model have?",
              "Perception advice, path generation, and direct machine command create different risks",
              "Command path, limits, safe state, and independent protective functions",
            ],
            [
              "Which conditions were validated?",
              "A model can perform well on familiar material and fail on rare but costly variation",
              "Representative test set, failure cases, uncertainty rules, and site trial",
            ],
            [
              "Who supports the complete stack?",
              "Robot, sensor, model, compute, network, and process faults can resemble one another",
              "One escalation map with diagnostic ownership",
            ],
            [
              "How are updates controlled?",
              "A software or model change can alter physical behavior",
              "Version, approval, regression test, deployment, rollback, and unit history",
            ],
          ],
        },
      ],
    },
    {
      heading: "How to Choose the Team",
      paragraphs: [
        "Start with the risk that can stop the project. If the process itself is uncertain, begin with process development and sample evidence. If the building is constrained, verify the site before fixing the cell. If safety dominates, involve qualified specialists during concept design. If data integration matters, define system ownership before the controls are programmed.",
        "Then select the prime delivery model. A standardized package can reduce engineering for a bounded application. A machine builder can provide process depth and a repeatable machine. A specialist integrator can combine best fit products. A large engineering firm can coordinate many lines and facility disciplines. A contract manufacturer can provide operating capacity without a new plant. The correct route depends on what the owner wants to retain.",
        "Evaluate the proposed people, not only the company brochure. The project manager, mechanical lead, controls lead, safety specialist, software architect, commissioning lead, and service team determine delivery. Confirm their availability and ask how the company transfers knowledge when staffing changes.",
        "Finally, make the interfaces visible. Every item should have one party responsible for design, supply, installation, connection, programming, testing, documentation, training, warranty, and support. Shared responsibility sounds collaborative but can become no responsibility when the line stops.",
      ],
      tables: [
        {
          title: "Buyer Diligence Checklist",
          columns: ["Area", "Buyer Question", "Strong Answer"],
          rows: [
            [
              "Comparable delivery",
              "Where has this team delivered the same kind of process and risk?",
              "Named references, operating evidence, and honest differences from the new project",
            ],
            [
              "Scope",
              "What is included, excluded, assumed, and supplied by the owner?",
              "A line item boundary that covers every interface and acceptance test",
            ],
            [
              "Performance",
              "Which measurable result is guaranteed or only estimated?",
              "Conditions, measurement method, remedies, and exclusions stated before award",
            ],
            [
              "Safety and compliance",
              "Who performs risk assessment, design, validation, and documentation?",
              "Qualified owners, applicable standards, and traceable records",
            ],
            [
              "Data and intellectual property",
              "Who owns programs, models, drawings, passwords, and production data?",
              "Contract rights, editable files, credentials, backup, and permitted reuse defined",
            ],
            [
              "Change",
              "How are requirement, site, and design changes priced and approved?",
              "Written change process with cost, schedule, validation, and effectivity",
            ],
            [
              "Support",
              "Who answers after handover and how quickly?",
              "Named service path, remote access controls, spares, response, and training",
            ],
          ],
        },
      ],
    },
    {
      heading: "Seven Ways Factory Projects Lose Accountability",
      paragraphs: [
        "The first failure is buying products before defining the process. The second is treating a vendor partner badge as proof of application experience. The third is comparing quotations that contain different scope boundaries. The fourth is assigning an interface to two parties and assuming they will coordinate it later.",
        "The fifth failure is accepting a demonstration without testing faults, recovery, changeover, quality, and representative variation. The sixth is handing operations a system without editable files, backups, training, spares, and an escalation path. The seventh is assuming that a new model or software layer can compensate for weak mechanical, electrical, safety, or process design.",
        "Most of these failures do not begin as technical impossibilities. They begin as missing decisions. The ecosystem works when each specialist can perform its role inside a shared architecture and one accountable owner can see the whole result.",
      ],
    },
    {
      heading: "Your Factory Ecosystem Checkpoint",
      paragraphs: [
        "You should now be able to separate an equipment manufacturer from a machine builder, a distributor from a systems integrator, and a production engineering firm from the team that designs and constructs the building. You should also be able to explain why Siemens, Rockwell, FANUC, ABB, and similar companies need partner ecosystems around their products.",
        "The central idea is that factories are not assembled from logos. They are assembled from requirements, products, interfaces, contracts, evidence, and people. The most important supplier may be the one that accepts responsibility for the gaps between excellent components.",
      ],
      tables: [
        {
          title: "Five Questions You Should Now Be Able to Answer",
          columns: ["Question", "What a Good Answer Contains"],
          rows: [
            [
              "Who owns the production result?",
              "A named owner, measurable requirement, system boundary, and acceptance authority",
            ],
            [
              "Who supplies products and who supplies applications?",
              "Equipment, component, platform, builder, integrator, software, and facility roles separated",
            ],
            [
              "Where do contracts meet?",
              "Every technical and commercial interface assigned to one accountable party",
            ],
            [
              "How will the system be accepted?",
              "Requirement based design reviews, factory tests, site tests, production evidence, and issue closure",
            ],
            [
              "Who supports the factory after launch?",
              "Operations, maintenance, suppliers, files, backups, spares, service, and change control",
            ],
          ],
        },
      ],
    },
    {
      heading: "Next in the Series",
      paragraphs: [
        "Part 5 will turn the ecosystem into a physical plant design. We will begin with the product and process, choose a site, create material flow, compare layout types, place receiving, production, quality, storage, utilities, offices, and shipping, and examine how expansion changes the plan.",
        "The hypothetical rover will return as the reference product. The question will no longer be only who supplies the equipment. It will be where people, machines, materials, utilities, information, and waste should move so the factory can operate safely and grow without rebuilding itself after the first production increase.",
      ],
    },
    {
      heading: "Research Method",
      paragraphs: [
        "This report uses current official materials from Siemens, Rockwell Automation, FANUC, and ABB to describe the difference between automation products, partner ecosystems, machine tending applications, and system integration. Named companies are representative examples. Inclusion does not imply endorsement, a complete market ranking, or a supplier relationship with the hypothetical cell.",
        "CSIA and the Association for Advancing Automation provide independent industry context on integrator roles and certification. ISO provides the current 2025 industrial robot safety standard boundaries between robot manufacturers and application integrators. ISA and the OPC Foundation provide the manufacturing software and interoperability context.",
        "Autodesk and the Design Build Institute of America provide general facility planning and project delivery context. NIST Manufacturing Extension Partnership materials support the discussion of manufacturing suppliers and external capability. Contract terms, codes, standards, licensing, permits, and professional responsibilities vary by jurisdiction, facility, process, and delivery model.",
        "The machine tending cell, scope boundaries, project sequence, commercial examples, and buyer checklists are Black Scarab teaching frameworks. They do not describe a quoted project, guaranteed performance, required supplier list, or universal legal allocation. A real factory project requires qualified manufacturing, engineering, safety, cybersecurity, construction, commercial, and legal review.",
      ],
    },
  ],
  sources: [
    "Siemens Digital Industries and Solution Partner materials",
    "Rockwell Automation PartnerNetwork and machine builder materials",
    "FANUC America integrator and machine tending materials",
    "ABB Robotics machine tending and channel partner materials",
    "Control System Integrators Association guidance",
    "Association for Advancing Automation integrator certification guidance",
    "ISO industrial robot safety standards",
    "ISA 95 enterprise and control integration framework",
    "OPC Foundation interoperability specifications",
    "Autodesk factory design guidance",
    "Design Build Institute of America project delivery guidance",
    "NIST Manufacturing Extension Partnership supplier resources",
  ],
  sourceLinks: [
    {
      label: "Siemens Digital Industries",
      url: "https://www.siemens.com/en-gb/company/about/businesses/digital-industries/",
    },
    {
      label: "Siemens Totally Integrated Automation",
      url: "https://www.siemens.com/en-gb/products/tia/",
    },
    {
      label: "Siemens Solution Partners",
      url: "https://www.siemens.com/en-us/partners/industry/solution-partners/",
    },
    {
      label: "Rockwell Automation OEM and machine builder program",
      url: "https://www.rockwellautomation.com/en-us/capabilities/oem-machine-builders.html",
    },
    {
      label: "Rockwell Automation PartnerNetwork locators",
      url: "https://partners.rockwellautomation.com/en-US/partner-locators/",
    },
    {
      label: "FANUC authorized system integrators",
      url: "https://www.fanucamerica.com/integrators",
    },
    {
      label: "FANUC machine tending robots",
      url: "https://www.fanucamerica.com/applications/machine-tending",
    },
    {
      label: "ABB Robotics machine tending",
      url: "https://www.abb.com/global/en/areas/robotics/applications/machine-tending",
    },
    {
      label: "ABB channel partners",
      url: "https://www.abb.com/global/en/channel-partners",
    },
    {
      label: "Control System Integrators Association",
      url: "https://controlsys.org/about/",
    },
    {
      label: "Association for Advancing Automation system integrators",
      url: "https://www.automate.org/system-integration",
    },
    {
      label: "A3 Certified Robot Integrator program",
      url: "https://www.automate.org/robotics/robotics-certifications/robotic-integrator-certification-program",
    },
    {
      label: "ISO 10218 Part 1 industrial robot safety",
      url: "https://www.iso.org/standard/73933.html",
    },
    {
      label: "ISO 10218 Part 2 robot applications and cells",
      url: "https://www.iso.org/standard/73934.html",
    },
    {
      label: "ISA 95 enterprise and control system integration",
      url: "https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard",
    },
    {
      label: "OPC Unified Architecture overview",
      url: "https://reference.opcfoundation.org/specs/OPC-10000-1/4",
    },
    {
      label: "Autodesk factory design guidance",
      url: "https://www.autodesk.com/solutions/factory-design",
    },
    {
      label: "Design Build Institute of America owner guidance",
      url: "https://dbia.org/owners/owners-faq/",
    },
    {
      label: "NIST Manufacturing Extension Partnership supplier scouting",
      url: "https://www.nist.gov/mep/supply-chain/supplier-scouting",
    },
  ],
});
