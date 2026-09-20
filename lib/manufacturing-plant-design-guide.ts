import type { CaseStudyArticle } from "@/lib/case-studies";

export const manufacturingPlantDesignGuide = (): CaseStudyArticle => ({
  slug: "how-to-design-a-manufacturing-plant-layout-process-flow",
  title:
    "How to Design a Manufacturing Plant: Process Flow, Factory Layout, Utilities, and Site Selection",
  seoTitle: "How to Design a Manufacturing Plant and Factory Layout",
  summary:
    "A first principles guide to turning a product, production route, and capacity target into a practical factory layout, utility plan, site decision, and expansion path.",
  publishedLabel: "Deep Dive · Published September 19, 2026",
  publishedDate: "2026-09-19",
  publishedAt: "2026-09-19T09:10:49-04:00",
  typeLabel: "Deep Dive",
  formatLabel: "Inside the Physical AI Factory · Part 5",
  series: {
    name: "Inside the Physical AI Factory",
    label: "Part 5 of 8",
    href: "/insights/how-modern-manufacturing-works-factories-physical-ai-guide",
    previous: {
      title: "Who Builds a Factory?",
      href: "/insights/who-builds-a-factory-siemens-rockwell-fanuc-integrators",
    },
    next: {
      title: "Industrial Automation Explained",
      href: "/insights/industrial-automation-explained-plc-cnc-robots-factory-software",
    },
  },
  industry: "Manufacturing",
  image: "/article-images/manufacturing-plant-design-cover.png",
  imageFit: "cover",
  imageAlt:
    "Editorial illustration of engineers reviewing a factory floor plan beside rover assembly cells and marked material routes",
  imageCaption:
    "Original Black Scarab editorial illustration of a team shaping a factory around production flow, utilities, safe movement, and future expansion. This is an editorial interpretation, not an official factory photograph.",
  seoDescription:
    "Learn how to design a manufacturing plant from product routing and capacity through factory layout, material flow, utilities, site selection, permitting, and expansion.",
  tags: [
    "manufacturing plant design",
    "factory layout design",
    "manufacturing process flow",
    "plant site selection",
    "factory utilities",
    "material flow",
    "factory expansion",
    "physical AI factory",
  ],
  author: {
    name: "Rodolfo Garcia Calderoni, CFA",
    href: "/about",
  },
  sections: [
    {
      paragraphs: [
        [
          "This is Part 5 of ",
          {
            text: "Inside the Physical AI Factory",
            href: "/insights/how-modern-manufacturing-works-factories-physical-ai-guide",
          },
          ". Part 1 mapped the plant. Part 2 opened the machines. Part 3 turned a hypothetical autonomous inspection rover into a bill of materials and production route. Part 4 identified the companies that could supply and integrate the system. Now the route becomes a building.",
        ],
        "A factory layout is not an exercise in fitting rectangles onto a floor plan. It is a physical expression of the operating model. Product design determines the work. Demand determines the rate. The route determines which processes must connect. Equipment determines space, access, foundations, and utilities. Inventory policy determines storage. Quality and safety rules determine separation. The site and building constrain every choice.",
        "The sequence matters because a beautiful plan can still be a poor factory. Machines may fit while materials cross each other all day. A large warehouse may hide slow purchasing and unreliable suppliers. A cheap building may require expensive power, ventilation, drainage, fire protection, or floor reinforcement. An automation ready aisle may be too narrow once charging, staging, pedestrians, and fault recovery are considered.",
        "This report follows the hypothetical rover from a production brief to a progressive plant plan for 10 prototypes, 100 commercial units, and capacity for 1,000 units annually. Every area and dimension is illustrative. The purpose is to teach the decisions and evidence behind a layout, not to provide a construction drawing or a universal code solution.",
      ],
    },
    {
      heading: "The Short Answer",
      paragraphs: [
        "Design the production system before designing the building around it. Define the accepted product, annual volume, mix, route, process time, uptime assumption, quality gates, inventory policy, make versus buy boundary, workforce, and growth case. Only then can the team estimate equipment, space, utilities, material movement, and facility requirements.",
        "The design should advance from one dimension to three. First, map the sequence of work. Second, test capacity and buffers. Third, arrange departments and flows. Fourth, place real equipment with service access and utility connections. Fifth, validate the design against safety, building, environmental, operational, and expansion requirements. Simulation can test behavior, but it cannot repair weak input assumptions.",
      ],
      tables: [
        {
          title: "The Plant Design Brief at a Glance",
          columns: ["Input", "Question", "Required Evidence"],
          rows: [
            [
              "Product",
              "What is made, what varies, and what counts as accepted?",
              "Released drawings, bill of materials, specifications, test limits, and change forecast",
            ],
            [
              "Demand",
              "How many units are needed by period and how uncertain is the forecast?",
              "Base, downside, upside, seasonality, product mix, and launch schedule",
            ],
            [
              "Process",
              "Which steps transform, assemble, inspect, calibrate, test, and pack the product?",
              "Routing, process times, yields, batch rules, rework paths, and traceability needs",
            ],
            [
              "Resources",
              "Which people, machines, tools, suppliers, and systems perform the route?",
              "Capacity model, staffing plan, equipment data, supplier capability, and maintenance plan",
            ],
            [
              "Facility",
              "What must the building and site provide?",
              "Space, floor loads, clear heights, docks, utilities, environment, access, and code review",
            ],
            [
              "Economics",
              "Which design produces acceptable service, risk, and return?",
              "Capital, operating cost, working capital, ramp, contingency, and expansion cases",
            ],
          ],
        },
      ],
    },
    {
      heading: "Follow the Design Sequence",
      paragraphs: [
        "Factory design is iterative, but it should not be random. NIST describes factory design as a connected activity model that moves through production planning, line design, layout, material handling, support systems, information systems, and verification. The model is useful because it exposes feedback loops. A utility constraint can change equipment. An equipment choice can change the route. A revised route can change the building.",
        "The practical sequence below begins with the operating result and delays irreversible decisions until the evidence becomes strong enough. Each gate should produce an artifact that the next team can inspect. A demand number without a mix assumption is incomplete. A layout without a route is decoration. A site comparison without utility evidence is a real estate opinion.",
      ],
      visual: {
        src: "/article-images/factory-design-sequence.svg",
        mobileSrc: "/article-images/factory-design-sequence-mobile.svg",
        alt: "Nine stage factory design sequence from product definition through verified expansion plan",
        caption:
          "Factory design moves from the operating requirement into process, capacity, space, utilities, site, validation, and expansion. Feedback is expected before commitments become difficult to reverse. Original Black Scarab diagram.",
      },
      tables: [
        {
          title: "Nine Factory Design Gates",
          columns: ["Gate", "Decision", "Output"],
          rows: [
            ["1", "Define the product and accepted output", "Product family, variants, quality limits, and traceability boundary"],
            ["2", "Set volume, mix, and service targets", "Demand cases, operating calendar, takt requirement, and uncertainty range"],
            ["3", "Build the production route", "Operation sequence, process data, quality gates, rework, and outsourcing boundary"],
            ["4", "Model capacity and resources", "People, equipment, tooling, buffers, uptime, and constraint model"],
            ["5", "Create flow and block layouts", "Department relationships, material routes, storage, and alternative concepts"],
            ["6", "Develop equipment and utility layout", "Real footprints, access envelopes, power, air, water, exhaust, network, and support space"],
            ["7", "Screen sites and buildings", "Verified site shortlist, gap cost, schedule risk, permitting path, and resilience review"],
            ["8", "Validate the complete design", "Safety, code, simulation, constructability, maintainability, and operating reviews"],
            ["9", "Freeze phases and expansion triggers", "Launch layout, future layout, reserved interfaces, decision dates, and change control"],
          ],
        },
      ],
    },
    {
      heading: "Begin With Flow, Not Square Feet",
      paragraphs: [
        "The first drawing should show the product route without a building. For the rover, purchased frames, motors, gearboxes, batteries, cameras, sensors, circuit boards, and harnesses enter receiving. Incoming inspection samples or verifies critical items. Kitting gathers the correct revision of each component. Mechanical assembly builds the chassis. Electrical assembly installs power and signal paths. Software loading and calibration establish device identity. Functional test proves the complete unit. Final inspection releases it to packaging and finished goods.",
        "That sequence has side paths. A failed battery inspection needs quarantine and supplier disposition. A test failure needs a controlled diagnosis and rework loop. Calibration needs reference equipment and records. Engineering changes need a clear effectivity point so old and new parts do not mix. Waste, returns, tools, maintenance parts, and empty packaging move too. The layout must accommodate the exceptions because production eventually becomes a sequence of exceptions.",
        [
          "NIST describes ",
          {
            text: "value stream mapping",
            href: "https://www.nist.gov/mep/value-stream-mapping",
          },
          " as a method for visualizing material, process, and information flow. A block layout should begin with that shared operating picture. A spaghetti diagram can then expose distance and crossing paths. The objective is not always the shortest possible route. It is a safe, understandable route with controlled inventory and few unnecessary touches.",
        ],
      ],
      tables: [
        {
          title: "The Rover Production Route",
          columns: ["Stage", "Primary Input", "Accepted Output", "Layout Consequence"],
          rows: [
            ["Receiving", "Supplier shipments and records", "Identified material in the system", "Dock, weather protection, count area, and discrepancy hold"],
            ["Incoming quality", "Risk selected parts", "Accepted, rejected, or quarantined material", "Inspection bench, measurement environment, secure hold, and data access"],
            ["Storage and kitting", "Released inventory and work order", "Complete kit at the correct revision", "Point of use stock, replenishment routes, supermarkets, and kit staging"],
            ["Mechanical assembly", "Frame, motion parts, fasteners, and fixtures", "Mechanically complete rover", "Ergonomic stations, lifting aids, tooling, torque control, and work in process"],
            ["Electrical assembly", "Harnesses, battery, boards, sensors, and camera", "Electrically complete rover", "Electrostatic controls where required, protected battery work, and cable test access"],
            ["Software and calibration", "Complete hardware and released software", "Configured and calibrated rover", "Network, controlled references, fixtures, version records, and quiet test conditions"],
            ["Functional test", "Configured rover", "Evidence that required functions pass", "Safe test zone, charging, fault containment, data capture, and rework route"],
            ["Pack and ship", "Released rover and accessories", "Protected shipment with complete records", "Packaging material, final audit, finished goods, and outbound dock access"],
          ],
        },
      ],
    },
    {
      heading: "Capacity Turns the Route Into Space",
      paragraphs: [
        "Annual demand does not directly tell the designer how many stations are needed. The calculation needs an operating calendar, shift pattern, planned downtime, changeover, yield, mix, and variability. A simple theoretical capacity can be calculated from available production time divided by effective cycle time, but the answer should be tested against real constraints rather than treated as truth.",
        "Suppose the illustrative rover plan requires 1,000 accepted units each year. If the plant operates 230 days on one shift, the average requirement is about 4.35 accepted units per day. That average is not a station design. Supplier deliveries may arrive in lots. Customers may order unevenly. Rework may consume capacity. A calibration fixture may become the constraint even when assembly has spare labor. The team should model at least a base case, a stressed demand case, and a disrupted case.",
        "Space follows resources and movement. A workstation needs the operator envelope, incoming material, outgoing work, tools, information, safe access, service access, and abnormal material area. A machine needs loading space, doors, guarding, panels, chip or waste handling, maintenance access, and removal paths for major components. A rack needs forklift or tugger access, fire protection review, and inventory identification. Adding only machine footprints creates a plan that cannot operate.",
      ],
      tables: [
        {
          title: "Capacity Questions Before Layout",
          columns: ["Question", "Weak Assumption", "Better Evidence"],
          rows: [
            ["What is the required rate?", "Annual demand divided by 365 days", "Demand by period, operating calendar, shift plan, service target, and ramp"],
            ["Which step constrains output?", "The longest listed cycle time", "Effective cycle, uptime, changeover, staffing, yield, queue, and shared resource analysis"],
            ["How much buffer is needed?", "Fill every open area with inventory", "Replenishment frequency, supplier variation, process decoupling, risk, and recovery time"],
            ["How much space does equipment need?", "Vendor footprint only", "Operating, guarding, service, loading, utility, rigging, and future change envelopes"],
            ["How much growth should be installed?", "Build the upside case immediately", "Phased triggers, reserved interfaces, lead times, and cost of later disruption"],
          ],
          note:
            "The rover volumes and calculations in this report are illustrative teaching examples, not a production forecast or quoted operating plan.",
        },
      ],
    },
    {
      heading: "Choose a Layout That Matches the Work",
      paragraphs: [
        "Four common layout families help organize the decision. A process layout groups similar resources, such as machining in one department and inspection in another. A product layout places operations in the production sequence. A cellular layout brings the resources for a product family together. A fixed position layout keeps a large product in place while people and equipment move to it.",
        "No family is inherently superior. Process layouts support variety and shared expertise but can create long routes and queues. Product layouts can deliver clear flow at stable volume but may be brittle when the product or mix changes. Cells can balance flow and flexibility but may duplicate equipment. Fixed position work fits aircraft, ships, buildings, and other products that are difficult to move, but coordination becomes the central challenge.",
        "The rover plant is likely to combine them. Early prototypes may use a flexible workshop organized by capability. At 100 units, one mixed assembly cell can connect kitting, mechanical work, electrical work, calibration, and test. At capacity for 1,000 units, the product may justify a clearer sequence, dedicated fixtures, shared quality resources, and scheduled replenishment. Expensive machining and specialized circuit board production can remain with suppliers.",
      ],
      tables: [
        {
          title: "Factory Layout Types",
          columns: ["Layout", "Best Fit", "Strength", "Risk", "Rover Use"],
          rows: [
            ["Process", "High variety and shared specialist resources", "Flexible routing and concentrated expertise", "Distance, queues, scheduling complexity, and excess work in process", "Prototype fabrication, shared lab, and repair"],
            ["Product", "Stable sequence and higher repeat volume", "Visible flow, simpler control, and low travel", "Demand or product change can strand dedicated capacity", "Mature assembly and test sequence"],
            ["Cellular", "Related product family with moderate variety", "Short feedback loops and flexible staffing", "Balancing and equipment duplication may be difficult", "Rover mechanical and electrical assembly cell"],
            ["Fixed position", "Large, fragile, or immovable product", "Product movement is minimized", "People, tools, material, and information must be coordinated at the product", "Not preferred for the small rover, but useful for large physical AI systems"],
          ],
        },
      ],
    },
    {
      heading: "The Rover Factory Grows in Three Stages",
      paragraphs: [
        "The first 10 rovers do not justify a miniature mass production line. They need a controlled engineering workshop with adaptable benches, secure components, measurement tools, software loading, calibration, and a safe functional test area. The most valuable output is learning. The team should record process steps, failures, time, tooling needs, and design changes.",
        "The first 100 commercial units need repeatability. The layout introduces defined receiving, quarantine, kitting, point of use stock, controlled workstations, released instructions, serial records, and a separate test zone. Fixtures should remove variation where the process has stabilized. The team still needs room for engineering changes and supplier defects because the product is not yet mature.",
        "Capacity for 1,000 units annually requires a deliberate production system. Material arrives to a supermarket, kits feed a balanced assembly cell, calibration and functional test have enough parallel capacity to avoid becoming permanent queues, and replenishment follows a standard route. The design reserves an adjacent bay for another cell or expanded test capacity. It does not install every future machine on the first day.",
      ],
      visual: {
        src: "/article-images/rover-factory-progressive-layout.svg",
        mobileSrc: "/article-images/rover-factory-progressive-layout-mobile.svg",
        alt: "Three progressive floor plans for 10 rover prototypes, 100 commercial units, and capacity for 1,000 units annually",
        caption:
          "The rover facility moves from a flexible workshop into controlled cells and then into a repeatable flow with reserved expansion. Areas are illustrative and not construction dimensions. Original Black Scarab diagram.",
      },
      tables: [
        {
          title: "What Changes With Volume",
          columns: ["Decision", "First 10", "First 100", "Capacity for 1,000"],
          rows: [
            ["Layout", "Flexible benches around shared tools", "Defined assembly cell and test area", "Balanced flow with parallel constraints and planned replenishment"],
            ["Inventory", "Project bins and direct engineering control", "Identified locations, quarantine, kits, and cycle counts", "Supermarket, point of use stock, reorder logic, and supplier schedules"],
            ["Quality", "Engineer verifies each build", "Released checks and serial records", "Risk based incoming control, in process evidence, final release, and trend analysis"],
            ["Automation", "Portable tools and test scripts", "Selective fixtures and assisted testing", "Automation only where repeatability, rate, safety, or evidence justifies it"],
            ["Expansion", "Keep commitments reversible", "Reserve utility and space interfaces", "Add a cell or constraint resource when trigger conditions are met"],
          ],
        },
      ],
    },
    {
      heading: "Learn to Read a Factory Floor Plan",
      paragraphs: [
        "A useful floor plan should answer more than where equipment sits. Begin at the receiving door and trace one normal material path. Then trace people, empty containers, waste, maintenance, visitors, emergency egress, and every expected exception. Count crossings. Look for blind corners, shared staging, blocked panels, long replenishment walks, and material that must reverse direction.",
        "Next, inspect relationships. Receiving should connect logically to identification, incoming quality, and storage. Kitting should reach both inventory and production. Quality should be close enough to respond without becoming a hallway. Maintenance should reach equipment and spares. Packaging and finished goods should connect to shipping without sending completed product back through dirty or congested areas.",
        "Finally, inspect the invisible layers. Where do power, compressed air, ventilation, process exhaust, cooling, drainage, network, lighting, fire protection, and security enter? Can a machine be isolated without stopping the entire plant? Can a large component be replaced? Can the roof and floor carry the loads? Can the plant operate during service? A floor plan becomes credible when it shows access and dependencies as clearly as production equipment.",
      ],
      tables: [
        {
          title: "A Ten Minute Floor Plan Review",
          columns: ["Trace", "Look For", "Warning Sign"],
          rows: [
            ["Material", "One direction, controlled buffers, few touches, and clear ownership", "Repeated crossings, backtracking, and unmarked overflow"],
            ["People", "Safe access to work, support, welfare, and exits", "Pedestrians share blind routes with lift trucks or mobile robots"],
            ["Quality", "Inspection at the right risk points and contained nonconforming material", "Failed material can reenter normal stock or bypass disposition"],
            ["Maintenance", "Panels, service sides, overhead access, spares, and equipment removal", "The machine fits but cannot be safely repaired or replaced"],
            ["Utilities", "Capacity, connection, isolation, drainage, exhaust, and monitoring", "Utility routes collide with expansion or have one fragile failure point"],
            ["Emergency", "Unobstructed exits, response access, alarms, and incident containment", "Inventory or equipment narrows paths assumed to remain open"],
            ["Growth", "Reserved bay, repeatable cell, utility stub, and decision trigger", "Future capacity exists only as an arrow beyond the property line"],
          ],
        },
      ],
    },
    {
      heading: "Separate Flows That Should Not Meet",
      paragraphs: [
        "Efficient flow does not mean every route should be combined. Pedestrians, lift trucks, tuggers, autonomous mobile robots, visitors, hazardous material, clean components, scrap, and finished goods may need distinct paths, times, controls, or environments. Separation can be physical, procedural, scheduled, or technical, but it must be deliberate.",
        [
          "OSHA requires workplaces, passageways, storage rooms, service rooms, and walking surfaces to remain orderly and capable of supporting intended loads. It also requires safe access and egress. Its ",
          {
            text: "exit route guidance",
            href: "https://www.osha.gov/etools/evacuation-plans-procedures/emergency-standards/design-construction",
          },
          " treats an exit route as a continuous and unobstructed path to safety. These are minimum regulatory boundaries, not a complete layout method. Local building and fire codes, insurer requirements, process hazards, and qualified safety analysis can impose additional constraints.",
        ],
        "Movement rules must also survive normal pressure. If inbound material has no staging area, it will occupy an aisle. If a failed unit has no hold location, it will sit beside the test station. If packaging material has no home, it will migrate toward the shipping door. The designer should create legitimate locations for predictable states instead of relying on floor markings to defeat operational reality.",
      ],
    },
    {
      heading: "Inventory Is a Design Decision",
      paragraphs: [
        "Inventory occupies space, consumes cash, requires movement, and hides uncertainty. Too little can stop production. Too much can conceal supplier instability, quality problems, engineering changes, and weak scheduling. The correct quantity depends on replenishment time, demand variation, supplier risk, minimum order quantities, shelf life, handling requirements, and the cost of a shortage.",
        "The plan should distinguish raw material, purchased components, line side stock, work in process, quarantined material, rework, maintenance spares, packaging, finished goods, returns, and waste. Each category needs ownership, identification, location, capacity, and a transaction rule. A generic area labeled storage is not an inventory system.",
        "For the rover, batteries deserve special attention because chemistry, state of charge, damage, transport, fire protection, and supplier instructions can affect storage and handling. Sensitive electronics may need electrostatic controls and environmental protection. Calibrated tools and reference equipment need controlled status. Real product data must define these requirements before the facility team designs the areas.",
      ],
    },
    {
      heading: "Utilities Are Part of the Production Process",
      paragraphs: [
        "Factory utilities are not background services. They are production inputs. Electrical power can determine machine capacity and reliability. Compressed air can affect actuation, cleaning, and test. Ventilation and exhaust can protect people and product. Cooling can hold process temperature. Water quality can matter as much as water quantity. Networks carry work instructions, recipes, test records, and equipment data.",
        "The utility schedule should begin at each load and work backward to the source. Record normal demand, peak demand, quality, pressure or voltage, temperature, redundancy, isolation, metering, maintenance access, and growth allowance. Coincidence matters because not every load peaks at once. So does startup behavior. A system that meets average demand may fail when several machines start or when a compressor, chiller, or network switch is unavailable.",
        [
          "DOE notes that compressed air loses more than 80 percent of its input energy as heat and recommends alternatives where possible. Its ",
          {
            text: "Better Plants guidance",
            href: "https://betterbuildingssolutioncenter.energy.gov/better-plants/compressed-air",
          },
          " emphasizes demand reduction, lower pressure, storage and controls, leak reduction, and maintenance. This is a useful design lesson: convenient utilities can become expensive habits when the process requirement is never challenged.",
        ],
      ],
      visual: {
        src: "/article-images/factory-utility-dependency-map.svg",
        mobileSrc: "/article-images/factory-utility-dependency-map-mobile.svg",
        alt: "Map connecting factory production areas to electrical power, air, ventilation, cooling, water, data, and safety systems",
        caption:
          "Utilities should be designed from production loads back to plant infrastructure, with quality, isolation, monitoring, service, and growth considered at every layer. Original Black Scarab diagram.",
      },
      tables: [
        {
          title: "Factory Utility Design Questions",
          columns: ["System", "Load Questions", "Layout Questions", "Evidence"],
          rows: [
            ["Electrical", "Voltage, phase, power, peak, startup, quality, and backup need", "Source, distribution, panels, isolation, clearances, cable route, and expansion", "Equipment data, load list, utility study, and licensed design"],
            ["Compressed air", "Pressure, flow, quality, duty, storage, and permitted uses", "Compressor room, ring or branch distribution, drops, isolation, condensate, noise, and heat", "Demand model, leakage plan, pressure study, and energy case"],
            ["Ventilation and exhaust", "Heat, particles, fumes, humidity, cleanliness, and pressure relationship", "Capture point, duct route, discharge, makeup air, filters, service, and zoning", "Hazard assessment, process data, industrial hygiene, and mechanical design"],
            ["Cooling and water", "Temperature, flow, quality, return, treatment, and discharge", "Plant loop, local chiller, drainage, spill control, meters, and maintenance", "Heat loads, water balance, discharge path, and utility confirmation"],
            ["Data and controls", "Devices, bandwidth, latency, availability, time, identity, and retention", "Network rooms, wired and wireless coverage, segmentation, remote access, and spare pathways", "Architecture, coverage test, cybersecurity review, and recovery plan"],
            ["Fire and life safety", "Occupancy, materials, process hazards, detection, suppression, and response", "Exits, access, separation, water supply, alarm, and responder access", "Code analysis, authority review, insurer input, and tested plan"],
          ],
        },
      ],
    },
    {
      heading: "Site Selection Is a Production Decision",
      paragraphs: [
        "A site should be evaluated by the complete operating case, not rent alone. The factory needs access to customers, suppliers, workforce, logistics, power, water, communications, emergency response, maintenance services, and qualified contractors. It also needs a permitting path, acceptable environmental conditions, security, resilience, and enough room for the planned life of the operation.",
        "The weighting depends on the product. A small rover assembly plant may value technical labor, parcel and freight access, reliable power, broadband, and an adaptable light industrial building. A foundry, chemical plant, food facility, semiconductor fab, or battery plant would assign very different weight to water, wastewater, energy, emissions, process safety, geology, transport, and community impact.",
        "Incentives should be evaluated after operational fit. A grant or tax benefit rarely rescues a site with inadequate utilities, slow permits, poor access, or an unsustainable labor model. The team should compare the present value of incentives with the cost and risk of building modifications, utility upgrades, delays, logistics, training, turnover, insurance, and future expansion.",
      ],
      tables: [
        {
          title: "A Practical Site Selection Scorecard",
          columns: ["Category", "Questions", "Verification"],
          rows: [
            ["Market and supply chain", "How does the site connect to customers, suppliers, ports, airports, roads, and parcel networks?", "Lane data, carrier evidence, lead time, disruption alternatives, and landed cost"],
            ["Workforce", "Can the operation recruit, train, retain, and commute the required skills?", "Labor data, local interviews, wage and benefit model, education partners, and shift access"],
            ["Utilities", "Are capacity, quality, reliability, lead time, and expansion available?", "Written utility confirmation, outage history, upgrade scope, rate structure, and schedule"],
            ["Building and land", "Do structure, floor, height, docks, yard, drainage, fire protection, and expansion fit?", "Survey, condition assessment, structural review, environmental diligence, and concept layout"],
            ["Permits and community", "Which land use, building, fire, air, water, waste, and operating approvals apply?", "Qualified counsel and engineer review, authority meetings, permit matrix, and critical path"],
            ["Resilience and security", "How exposed is the site to weather, flood, wildfire, heat, grid, water, transport, crime, and single points of failure?", "Hazard data, insurer input, emergency services, mitigation plan, and recovery scenarios"],
            ["Economics", "What is the complete cost to launch and operate?", "Occupancy, modification, utilities, tax, logistics, labor, insurance, capital, working capital, and exit cost"],
          ],
        },
      ],
    },
    {
      heading: "A Building Is Not Ready Because It Is Empty",
      paragraphs: [
        "An existing building can shorten schedule, but only if its hidden conditions are understood. The due diligence team should verify legal use, property boundaries, access rights, environmental history, flood and drainage conditions, roof and envelope, structural grid, floor capacity, clear height, docks, yard circulation, fire protection, electrical service, gas, water, sewer, communications, ventilation, and the condition of major systems.",
        "The concept layout should be placed into the candidate building before commercial commitment. Equipment must clear columns and bracing. Docks must serve the actual vehicle mix. The production route must work around exits, stairs, mechanical rooms, restrooms, and protected areas. Utility distribution and exhaust must have feasible paths. The future bay must exist in both the plan and the lease or property boundary.",
        "Permits vary by jurisdiction and process. Building, electrical, mechanical, plumbing, fire, land use, air, wastewater, stormwater, hazardous material, and waste approvals may apply. EPA notes that specified categories of industrial activity can require stormwater permit coverage, often through an authorized state program. A permit matrix should identify the responsible party, submission basis, dependencies, review duration, inspections, and operating conditions. This report is not legal or engineering advice.",
      ],
    },
    {
      heading: "Design for Physical AI Without Designing a Fantasy",
      paragraphs: [
        "Physical AI systems need a disciplined physical environment. Mobile robots need suitable floors, routes, intersections, charging, communications, load interfaces, and recovery procedures. Vision systems need controlled views, lighting, mounting, references, and access for cleaning and calibration. Adaptive manipulation still needs stable part presentation, safe tooling, defined failure states, and a deterministic path to stop hazardous motion.",
        [
          "ISO 3691 Part 4 covers safety requirements and verification for driverless industrial trucks and notes that operating zone conditions significantly affect safe operation. The ",
          {
            text: "A3 industrial mobile robot standard family",
            href: "https://www.automate.org/store/categories/industrial-robot-standards",
          },
          " likewise addresses the robot, system, application, use, risk assessment, and management of change. The facility is therefore part of the application. Buying a mobile robot does not convert an improvised traffic pattern into a safe autonomous route.",
        ],
        "Connectivity should also be planned as infrastructure, not added through improvised wireless coverage. Equipment identity, time synchronization, network segmentation, software distribution, data ownership, remote access, logging, and recovery need an architecture. CISA guidance treats segmentation between business and industrial control environments as a layered security measure. The precise design depends on risk, but the pathways, rooms, coverage, and ownership should exist before equipment arrives.",
        "Future readiness does not mean installing immature technology everywhere. It can mean flat and maintainable floors, clear routes, consistent load interfaces, good lighting, spare conduit, measured utility capacity, equipment data access, accurate digital layouts, modular workstations, and room for safe trials. These features improve conventional operations even if a planned autonomous system is delayed or never purchased.",
      ],
      tables: [
        {
          title: "Physical AI Readiness in the Facility",
          columns: ["Capability", "Facility Condition", "Evidence Before Deployment"],
          rows: [
            ["Mobile material movement", "Stable floors, controlled intersections, defined traffic, charging, communication, and load transfer", "Site survey, route risk assessment, fleet study, coverage test, and recovery plan"],
            ["Machine vision", "Repeatable view, lighting, background, mounting, protection, cleaning, and calibration access", "Representative image set, variation study, acceptance test, and maintenance method"],
            ["Adaptive robot work", "Controlled task boundary, safe cell, predictable inputs, tools, fault states, and human roles", "Risk assessment, representative trials, integration design, and measurable acceptance"],
            ["Digital twin and simulation", "Accurate equipment, process, layout, logic, and operating data", "Model purpose, validated inputs, version control, comparison to production, and named owner"],
            ["AI assisted operations", "Trusted source data, clear decision rights, protected interfaces, and human escalation", "Data lineage, evaluation set, access controls, monitoring, and rollback"],
          ],
        },
      ],
    },
    {
      heading: "Use Digital Models to Test Behavior",
      paragraphs: [
        "Two dimensional layout confirms whether objects fit. Three dimensional coordination can expose access, height, duct, structure, utility, and installation conflicts. Discrete event simulation can test queues, resource use, throughput, staffing, downtime, and variable arrivals over time. A digital twin may later connect the model to operating data. These are different tools with different evidence.",
        "A simulation should answer a decision. What happens if calibration takes twenty percent longer? How much buffer protects output from a supplier delivery pattern? Does one shared test station create a queue? Can a tugger replenish two cells without blocking outbound product? Which additional resource raises accepted throughput? A colorful animation without calibrated inputs or a decision question is not validation.",
        "The model should record assumptions, sources, versions, and confidence. Compare its output with hand calculations and observed data where possible. Test extreme conditions and equipment failures, not only the expected day. The model becomes more valuable after launch when actual process times, yields, downtime, and routes can correct the original assumptions.",
      ],
    },
    {
      heading: "Plan Expansion With Triggers and Interfaces",
      paragraphs: [
        "Expansion should be designed as a sequence of options. The launch plant may reserve an adjacent bay, electrical capacity, network pathway, utility headers, dock position, quality capacity, and a repeatable cell interface. That reservation has a cost, but it is different from buying all future equipment before demand exists.",
        "Each phase needs a trigger. A second assembly cell might be released when the demand backlog, effective capacity, and quality stability pass defined thresholds. A second calibration station might be added earlier because it has a long lead time or creates a single point of failure. Additional inventory space might be avoided if supplier delivery frequency improves. The trigger should combine demand, process evidence, supplier lead time, installation disruption, and financial approval.",
        "The future plan must be physically credible. A box labeled expansion is meaningless if material would have to cross shipping, the utility room is on the wrong side, the roof cannot accept new exhaust, or the lease ends before the investment pays back. The team should rehearse the next phase on the same model used for the launch plan.",
      ],
    },
    {
      heading: "Compare Designs With Total Economics",
      paragraphs: [
        "The cheapest building, shortest route, smallest footprint, and highest automation level can point to four different designs. The decision should compare service, quality, safety, resilience, flexibility, capital, operating cost, working capital, launch schedule, and downside risk. No single ratio captures the whole factory.",
        "Installed capital includes more than equipment purchase price. It can include engineering, freight, rigging, foundations, utilities, guarding, controls, software, building modifications, permits, validation, training, spares, startup scrap, and contingency. Operating cost includes labor, occupancy, energy, maintenance, consumables, software, insurance, logistics, quality loss, and support. Inventory and the production ramp consume cash before steady output arrives.",
        "A compact layout can reduce travel and occupancy cost, but a plan with no service access or expansion margin can create larger future expense. A flexible manual cell may beat automation at uncertain volume. A more expensive site may win if it shortens launch, supports hiring, avoids utility upgrades, and reaches suppliers and customers reliably. The economic model should preserve these tradeoffs instead of hiding them inside one square foot rate.",
      ],
      tables: [
        {
          title: "Factory Design Economic Boundary",
          columns: ["Category", "Examples", "Often Missed"],
          rows: [
            ["Facility capital", "Building work, structure, docks, offices, fire protection, HVAC, and site", "Temporary conditions, surveys, professional fees, testing, and restoration"],
            ["Production capital", "Machines, fixtures, tools, inspection, handling, and automation", "Integration, guarding, software, freight, rigging, spares, and acceptance"],
            ["Utility capital", "Power, air, water, cooling, exhaust, network, and metering", "Source upgrades, redundancy, isolation, controls, and future connection points"],
            ["Launch cost", "Hiring, training, trial builds, validation, and production support", "Low yield, overtime, supplier containment, engineering changes, and delayed revenue"],
            ["Operating cost", "Labor, occupancy, energy, maintenance, logistics, consumables, and software", "Downtime, rework, quality escape, obsolete inventory, security, and technical support"],
            ["Working capital", "Raw material, work in process, finished goods, receivables, and payables", "Minimum orders, long lead items, ramp inventory, and engineering change exposure"],
          ],
        },
      ],
    },
    {
      heading: "Ten Common Factory Design Mistakes",
      paragraphs: [
        "The first mistake is choosing a building before defining the route. The second is using annual demand without mix, calendar, uptime, yield, or uncertainty. The third is laying out vendor footprints without access, service, guarding, material, and utility envelopes. The fourth is optimizing normal flow while ignoring quarantine, rework, maintenance, waste, and recovery.",
        "The fifth is treating inventory as whatever occupies the remaining floor. The sixth is assuming listed utility service equals usable capacity, quality, schedule, and resilience. The seventh is allowing pedestrians, lift equipment, and autonomous systems to inherit one ambiguous traffic pattern. The eighth is believing a simulation whose inputs have not been tested.",
        "The ninth is buying future capacity instead of preserving practical expansion options. The tenth is treating permits, safety, environmental review, information architecture, and operating ownership as tasks that begin after the layout is complete. These subjects shape the layout from the start.",
      ],
    },
    {
      heading: "Your Factory Design Checkpoint",
      paragraphs: [
        "You should now be able to move from a product and volume target into a route, capacity model, block layout, equipment plan, utility schedule, site scorecard, and phased expansion case. You should also be able to challenge a floor plan that shows machines but not the flows, access, infrastructure, and abnormal conditions required to operate them.",
        "The central idea is simple: a factory is designed from the production result outward. The building contains the system, but the system gives the building its purpose. Good plant design makes normal work clear, exceptions controllable, maintenance possible, growth credible, and future technology optional rather than compulsory.",
      ],
      tables: [
        {
          title: "Five Questions You Should Now Be Able to Answer",
          columns: ["Question", "What a Good Answer Contains"],
          rows: [
            ["What should be designed first?", "Accepted product, demand cases, route, capacity, quality, inventory, and make versus buy decisions"],
            ["Which layout fits the work?", "A reasoned choice among process, product, cellular, fixed position, or a hybrid"],
            ["How do you test a floor plan?", "Trace every flow, inspect relationships, verify access and utilities, and challenge abnormal conditions"],
            ["How do you compare sites?", "Operational fit, verified utilities, workforce, logistics, permits, resilience, complete economics, and expansion"],
            ["What makes a factory ready for physical AI?", "Stable process, safe geometry, good lighting, controlled traffic, connectivity, data, interfaces, and recovery"],
          ],
        },
      ],
    },
    {
      heading: "Next in the Series",
      paragraphs: [
        "Part 6 will open the factory nervous system. We will start with the control loop and connect sensors, actuators, motors, drives, programmable controllers, safety controllers, human machine interfaces, computer numerical control, industrial networks, robots, and the factory software stack.",
        "The rover plant will return as the working environment. One production order will move from business planning into scheduled work, machine and operator instructions, physical action, inspection evidence, and the production record. The goal will be to understand which decisions require deterministic control and where perception, learning, planning, and adaptation can safely add value.",
      ],
    },
    {
      heading: "Research Method",
      paragraphs: [
        "This report uses NIST factory design, production system, manufacturing readiness, value stream, and Manufacturing Extension Partnership materials for the design sequence, flow, layout, and verification framework. DOE Better Plants materials support the utility discussion. OSHA materials support general walking surface, access, and exit route boundaries. EPA materials support the permitting examples.",
        "ISO and the Association for Advancing Automation provide the current industrial mobile robot safety context. CISA provides the network segmentation context. Autodesk factory design materials illustrate the distinction between spatial layout and dynamic operational simulation. Vendor materials describe capabilities and workflows, not independently verified performance for the hypothetical rover factory.",
        "The rover route, volumes, layouts, space relationships, capacity examples, scorecards, economic boundaries, and expansion triggers are Black Scarab teaching frameworks. They do not describe a real factory, quoted project, legal requirement, guaranteed output, or recommended investment. Facility design requires qualified manufacturing, architecture, engineering, safety, environmental, cybersecurity, insurance, commercial, and legal review for the actual site and jurisdiction.",
      ],
    },
  ],
  sources: [
    "NIST Factory Design and Improvement Activity Model",
    "NIST Smart Manufacturing Systems Readiness Level Tool",
    "NIST Manufacturing Extension Partnership value stream and facility layout materials",
    "US Department of Energy Better Plants industrial utility guidance",
    "US Occupational Safety and Health Administration workplace and exit route standards",
    "US Environmental Protection Agency industrial stormwater guidance",
    "ISO 3691 Part 4 driverless industrial truck safety standard",
    "Association for Advancing Automation industrial mobile robot safety standards",
    "CISA industrial control system network segmentation guidance",
    "Autodesk factory layout and simulation guidance",
  ],
  sourceLinks: [
    {
      label: "NIST Factory Design and Improvement Activity Model",
      url: "https://www.nist.gov/services-resources/software/factory-design-and-improvement-fdi-activity-model",
    },
    {
      label: "NIST reference activity model for smart factory design",
      url: "https://www.nist.gov/publications/activity-model-factory-design-and-improvement",
    },
    {
      label: "NIST design production system model",
      url: "https://pages.nist.gov/circular-economy-manufacturing-models/pce/pce/actuseDesign_production_systems1205.html",
    },
    {
      label: "NIST Smart Manufacturing Systems Readiness Level Tool",
      url: "https://www.nist.gov/services-resources/software/smart-manufacturing-systems-readiness-level-smsrl-tool",
    },
    {
      label: "NIST value stream mapping",
      url: "https://www.nist.gov/mep/value-stream-mapping",
    },
    {
      label: "NIST facility layout for growth and efficiency",
      url: "https://www.nist.gov/mep/successstories/2024/facility-layout-ensure-growth-and-efficiency",
    },
    {
      label: "NIST highly efficient plant layout case",
      url: "https://www.nist.gov/mep/successstories/2023/highly-efficient-plant-layout",
    },
    {
      label: "DOE Better Plants compressed air guidance",
      url: "https://betterbuildingssolutioncenter.energy.gov/better-plants/compressed-air",
    },
    {
      label: "DOE Better Plants process cooling and HVAC guidance",
      url: "https://betterbuildingssolutioncenter.energy.gov/better-plants/process-cooling-and-hvac",
    },
    {
      label: "DOE Better Plants process heating guidance",
      url: "https://betterbuildingssolutioncenter.energy.gov/better-plants/process-heating",
    },
    {
      label: "OSHA general walking and working surface requirements",
      url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.22",
    },
    {
      label: "OSHA exit route design and construction guidance",
      url: "https://www.osha.gov/etools/evacuation-plans-procedures/emergency-standards/design-construction",
    },
    {
      label: "EPA industrial stormwater guidance",
      url: "https://www.epa.gov/npdes/stormwater-discharges-industrial-activities",
    },
    {
      label: "ISO 3691 Part 4 driverless industrial trucks",
      url: "https://www.iso.org/standard/83545.html",
    },
    {
      label: "A3 industrial mobile robot standards",
      url: "https://www.automate.org/store/categories/industrial-robot-standards",
    },
    {
      label: "CISA network segmentation guidance",
      url: "https://www.cisa.gov/sites/default/files/publications/layering-network-security-segmentation_infographic_508_0.pdf",
    },
    {
      label: "Autodesk manufacturing plant layout guidance",
      url: "https://www.autodesk.com/solutions/design-manufacturing/plant-layout-design",
    },
    {
      label: "Autodesk factory layout and operational simulation",
      url: "https://www.autodesk.com/blogs/design-and-manufacturing/factory-layout-software-autodesk/",
    },
  ],
});
