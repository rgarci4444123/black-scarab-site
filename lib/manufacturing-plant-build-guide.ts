import type { CaseStudyArticle } from "@/lib/case-studies";

const oshaGuarding =
  "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.212";
const oshaLockout =
  "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147";
const oshaNrtl =
  "https://www.osha.gov/nationally-recognized-testing-laboratory-program/frequently-asked-questions";
const isoQuality = "https://www.iso.org/standard/9001";
const isaAcceptance =
  "https://www.isa.org/standards-and-publications/isa-standards/isa-105-standards";
const iecAcceptance = "https://webstore.iec.ch/en/publication/67572";
const nasaVerification =
  "https://www.nasa.gov/reference/system-engineering-handbook-appendix/";
const sbaPlanning = "https://www.sba.gov/counseling/plan-your-business/";
const blsManufacturing = "https://www.bls.gov/iag/tgs/iag31-33.htm";
const doeCompressedAir =
  "https://betterbuildingssolutioncenter.energy.gov/better-plants/compressed-air";
const doeAssessment =
  "https://www.energy.gov/mesc/industrial-assessment-centers-iacs";
const nistMep =
  "https://www.nist.gov/mep/manufacturing-extension-partnership-mep";
const nistCyber = "https://csrc.nist.gov/pubs/ir/8183/r2/ipd";
const ulFieldEvaluation = "https://www.ul.com/services/field-evaluations";

export const manufacturingPlantBuildGuide = (): CaseStudyArticle => ({
  slug: "how-to-build-a-manufacturing-plant-equipment-costs-installation",
  title:
    "How to Build a Manufacturing Plant: Equipment, Employees, Costs, Installation, and First Production",
  seoTitle: "How to Build a Manufacturing Plant: Equipment, Costs, and Launch",
  summary:
    "A practical guide to the team, equipment purchases, facility work, acceptance testing, installation, commissioning, staffing, cash, and launch discipline required to turn an empty building into a working factory.",
  publishedLabel: "Deep Dive · Published September 21, 2026",
  publishedDate: "2026-09-21",
  publishedAt: "2026-09-21T10:04:00-04:00",
  typeLabel: "Deep Dive",
  formatLabel: "Inside the Physical AI Factory · Part 8",
  series: {
    name: "Inside the Physical AI Factory",
    label: "Part 8 of 8",
    href: "/insights/how-modern-manufacturing-works-factories-physical-ai-guide",
    previous: {
      title: "Physical AI in Manufacturing",
      href: "/insights/physical-ai-manufacturing-robotics-machine-vision-digital-twins",
    },
  },
  industry: "Manufacturing",
  image: "/article-images/manufacturing-plant-first-production-cover.png",
  imageFit: "cover",
  imageAlt:
    "Editorial illustration of engineers, technicians, an inspection rover, guarded automation, assembly equipment, and incoming crates during factory commissioning",
  imageCaption:
    "Original Black Scarab editorial illustration of a multidisciplinary team commissioning a rover factory and reviewing its first completed unit. This is an editorial interpretation, not an official factory photograph.",
  seoDescription:
    "Learn how to build a manufacturing plant from RFQs and equipment purchasing through facility work, FAT, SAT, installation, commissioning, staffing, costs, working capital, and first production.",
  tags: [
    "how to build a manufacturing plant",
    "manufacturing plant cost",
    "factory startup cost",
    "factory equipment cost",
    "manufacturing employees",
    "machine installation",
    "factory commissioning",
    "first production run",
  ],
  author: {
    name: "Rodolfo Garcia Calderoni, CFA",
    href: "/about",
  },
  sections: [
    {
      paragraphs: [
        [
          "This is Part 8 of ",
          {
            text: "Inside the Physical AI Factory",
            href: "/insights/how-modern-manufacturing-works-factories-physical-ai-guide",
          },
          ". The series began with the anatomy of a plant, opened the machines, turned an inspection rover into a product and production route, mapped the companies behind the factory, designed the building, traced the automation stack, and defined where adaptive intelligence belongs. The final task is to make the complete system real.",
        ],
        "An empty industrial building is not a factory. Neither is a delivered robot, a line of benches, a folder of work instructions, or a team of talented engineers. A factory exists when people, material, equipment, utilities, software, quality controls, safety controls, suppliers, maintenance, and cash operate together well enough to produce accepted units repeatedly.",
        "That distinction changes the project. The opening date is not the day the lease begins or the day the largest machine arrives. It is the day the operating system can receive material, build the product, detect problems, recover safely, preserve evidence, and release conforming output at an economically useful rate.",
        "This report follows the same hypothetical autonomous inspection rover used throughout the series. Every layout, staffing plan, cost range, schedule, and production result identified as illustrative is a teaching framework. It is not a supplier quotation, construction estimate, legal opinion, certified safety design, insurance recommendation, or promise that a particular factory can be built for the stated amount.",
      ],
    },
    {
      heading: "The Short Answer",
      paragraphs: [
        "Build the production system before you build around it. Release the product and process basis, define what the factory must prove, assign one owner to every interface, write measurable acceptance criteria into each purchase, prepare the building before equipment arrives, and commission the complete flow rather than isolated machines.",
        "The project has four synchronized workstreams. The facility team prepares the building, utilities, permits, and inspections. The equipment team specifies, buys, tests, ships, installs, and accepts machinery. The operating team hires people, creates quality and maintenance systems, trains work, and secures material. The finance and risk team controls payments, insurance, contingency, working capital, and the conditions for releasing more capital.",
        "A machine that passes its factory test may still fail after installation because the real power, air, network, environment, material, upstream process, downstream process, or operating procedure differs from the supplier test. A plant that can make one good rover may still fail as a business because it cannot repeat the result, collect cash before obligations come due, or support the equipment after the launch team leaves.",
      ],
      tables: [
        {
          title: "Factory Build at a Glance",
          columns: ["Question", "Required Evidence", "Danger Signal"],
          rows: [
            ["What must the plant produce?", "Released product definition, route, volume, takt, quality, and traceability", "The building and machines are selected around an evolving prototype"],
            ["Who owns each interface?", "Named responsibility for equipment, utilities, controls, safety, data, material, and acceptance", "Every supplier assumes another party owns the gap"],
            ["What unlocks payment?", "Contract milestones tied to objective deliverables and accepted evidence", "Payment follows calendar dates or delivery alone"],
            ["What makes equipment ready?", "FAT, installation checks, SAT, integration tests, safety validation, training, and documentation", "A powered machine is treated as a released process"],
            ["What keeps the plant alive?", "Demand, margin, working capital, maintenance, spares, competence, and controlled improvement", "The capital budget excludes launch losses and cash timing"],
          ],
        },
      ],
    },
    {
      heading: "Start With a Released Production Basis",
      paragraphs: [
        "The project should begin with a production basis document that states what is being built and what the factory must accomplish. It includes the released product configuration, annual volume and ramp assumptions, product mix, production route, make or buy decisions, quality characteristics, test strategy, regulatory obligations, packaging, material flow, operating pattern, maintenance concept, and expected expansion path.",
        "This basis is not a claim that the design will never change. It is the controlled reference against which changes can be evaluated. If the rover enclosure, battery, camera suite, sealing method, or final test changes, the team can identify the affected fixtures, tooling, suppliers, utilities, software, training, inspection, schedule, and capital before approving the revision.",
        "A weak project buys equipment from a concept image and fills the gaps during startup. A strong project connects each requirement to a physical operation and a verification method. The rover must survive its specified environment. That product requirement becomes sealing controls, torque records, leak or ingress tests, inspection criteria, calibration, traceability, and a release decision. The plant exists to execute that chain consistently.",
        [
          "The verification discipline is broader than manufacturing. The ",
          { text: "NASA Systems Engineering Handbook appendix", href: nasaVerification },
          " describes requirement verification matrices that connect each requirement to analysis, inspection, demonstration, or test. A factory can use the same principle without copying an aerospace program. Every important product and process requirement should have an owner, method, evidence location, and acceptance state.",
        ],
      ],
      visual: {
        src: "/article-images/factory-build-critical-path.svg",
        mobileSrc: "/article-images/factory-build-critical-path-mobile.svg",
        alt: "Eight factory project gates from a released production basis through project baseline, purchasing, site preparation, acceptance, installation, commissioning, and first production",
        caption:
          "A factory opens when facility, equipment, operations, and cash workstreams reach readiness together. Original Black Scarab diagram.",
      },
    },
    {
      heading: "Build a Team Around Decisions, Not Titles",
      paragraphs: [
        "The project sponsor owns the business case and the authority to stop or reshape the project. The project manager owns the integrated schedule, decision log, cost forecast, and interface register. Manufacturing engineering owns the production route, work content, equipment requirements, tooling, and capacity model. Facilities engineering owns the building, utilities, contractors, permits, and site readiness.",
        "Quality engineering defines product acceptance, process controls, measurement, calibration, nonconformance, traceability, supplier quality, and launch containment. Environmental, health, and safety leadership organizes hazard reviews, compliance work, training, emergency planning, and operating controls. Controls and information technology teams own networks, software, identity, backups, cybersecurity, data interfaces, and support boundaries. Operations, maintenance, supply chain, finance, human resources, legal, insurance, and the future plant manager need defined roles before the first purchase order.",
        "Small companies combine roles, but they cannot delete responsibilities. One founder may temporarily act as sponsor, product owner, and capital approver. One manufacturing leader may own industrial engineering, equipment, and launch. Qualified outside specialists may cover electrical design, structural review, machinery safety, code compliance, environmental work, quality systems, or industrial cybersecurity. The responsibility map should show who decides, who performs, who reviews, and who accepts.",
      ],
      tables: [
        {
          title: "Core Factory Project Responsibilities",
          columns: ["Responsibility", "Primary Decision", "Evidence"],
          rows: [
            ["Sponsor", "Whether the project still deserves capital", "Approved business case, gates, and exceptions"],
            ["Project management", "Whether the complete plan remains executable", "Integrated schedule, risk register, cost forecast, and actions"],
            ["Manufacturing engineering", "How the product will be made", "Process plan, equipment specification, cycle study, and work standards"],
            ["Facilities", "Whether the site can safely support the process", "Drawings, permits, utility capacity, inspections, and turnover"],
            ["Quality", "Whether product and process evidence supports release", "Control plan, measurement system, records, and disposition"],
            ["Operations and maintenance", "Whether the plant can run and recover", "Staffing, training, spares, preventive work, and escalation"],
            ["Finance and supply chain", "Whether cash and material can support the ramp", "Commitments, forecasts, inventory plan, and supplier readiness"],
          ],
        },
      ],
    },
    {
      heading: "Choose the Smallest Production Model That Protects the Product Promise",
      paragraphs: [
        "A startup does not need to choose between owning no production and building a complete automated plant. Production ownership is a ladder. A prototype workshop maximizes learning. A minimum viable factory owns the operations that protect product performance and customer confidence. A conventional small plant adds capacity, support functions, and more dedicated equipment. A selective smart factory adds connected and adaptive capability where the operating evidence justifies it.",
        "The rover company may continue buying machined parts, printed circuit assemblies, battery packs, castings, and cable assemblies while bringing final configuration, calibration, software loading, system test, genealogy, and customer release inside. That minimum viable factory controls the knowledge and evidence closest to the product promise without duplicating capable suppliers.",
        "Moving to the right of the ladder should require evidence. Product revisions should be slowing. Demand should be credible enough to occupy the capacity. The production route should be understood. Supplier performance should be measurable. The organization should be able to hire and support the people. Cash should cover the build, ramp, inventory, receivables, and a realistic downside case.",
      ],
      visual: {
        src: "/article-images/factory-scale-options.svg",
        mobileSrc: "/article-images/factory-scale-options-mobile.svg",
        alt: "Comparison of a prototype workshop, minimum viable factory, conventional small plant, and selective smart factory",
        caption:
          "Production ownership is a ladder. Each step should solve a measured constraint rather than express ambition through fixed assets. Original Black Scarab diagram.",
      },
    },
    {
      heading: "Turn Requirements Into a Purchase Package",
      paragraphs: [
        "An equipment request for quotation should describe the required result, the operating context, the interfaces, and the evidence required for acceptance. It should not be a shopping list of impressive components. The supplier needs the product family, process inputs and outputs, cycle expectation, changeover, quality criteria, utilities, environment, operator concept, material presentation, data exchange, safety responsibilities, documentation, training, service, spare parts, and schedule constraints.",
        "The requirement should separate mandatory performance from preferred design. If the rover final test must complete in fifteen minutes with specific coverage and traceability, state that outcome and the acceptance method. Do not casually dictate the internal architecture unless compatibility, service capability, cybersecurity, or plant standards require it. Over specification can eliminate better solutions. Under specification transfers discovery into the most expensive phase of the project.",
        "Commercial terms should follow technical risk. Define design review gates, drawing approval, long lead authorization, factory test entry criteria, test material, shipment release, installation support, site test, training, documentation, warranty start, software rights, backups, source access where negotiated, remote support, travel, taxes, freight, rigging, exclusions, and change order rates. Retain enough unpaid value that unresolved acceptance work still matters to the supplier.",
      ],
      tables: [
        {
          title: "What an Equipment RFQ Should Contain",
          columns: ["Package Element", "What It Answers", "Typical Failure"],
          rows: [
            ["User requirements", "What the system must accomplish and under which conditions", "A component list replaces a measurable outcome"],
            ["Product and material data", "What variation, tolerances, surfaces, masses, and states enter the process", "The supplier tests only ideal samples"],
            ["Interfaces", "What power, air, exhaust, network, software, material, and human connections exist", "Interfaces remain owned by nobody"],
            ["Acceptance plan", "Which tests prove which requirements and who witnesses them", "Disagreement begins after the machine is complete"],
            ["Deliverables", "Which drawings, programs, manuals, backups, certificates, spares, and training are required", "The plant receives a machine without the ability to support it"],
            ["Commercial schedule", "Which evidence unlocks design, build, shipment, installation, and final payments", "Cash leaves before risk is retired"],
          ],
        },
      ],
    },
    {
      heading: "Factory Acceptance Testing Is a Contract Milestone",
      paragraphs: [
        "A factory acceptance test, or FAT, is performed at the supplier before shipment. It should demonstrate the agreed functions against an approved procedure using known hardware and software versions. The test may use representative product, simulated interfaces, temporary utilities, and controlled faults. Those limits should be explicit because a FAT does not prove the installed production system.",
        [
          "The current ",
          { text: "ISA 105 series", href: isaAcceptance },
          " includes ANSI ISA 62381 2026, aligned with IEC 62381:2024, for factory acceptance, site acceptance, and site integration testing in process automation. The ",
          { text: "IEC 62381 overview", href: iecAcceptance },
          " emphasizes agreed scope, responsibilities, and project specific test plans. The governing lesson applies widely: acceptance is a planned demonstration against requirements, not a tour of a machine that appears to run.",
        ],
        "For a rover assembly cell, FAT might confirm sequences, cycle segments, recipes, alarms, access levels, operator controls, data records, recovery, backup restoration, and selected fault responses. If final cycle time depends on the plant network, production material, upstream delivery, downstream test, or facility environment, the FAT should identify the unproven portion rather than pretending it has been accepted.",
        "Every exception needs a description, severity, owner, disposition, due date, and retest method. Shipment approval is not the same as final acceptance. The buyer may approve shipment with defined open items because the supplier site cannot reproduce the plant. That decision should preserve leverage and prevent a known defect from becoming an undocumented startup surprise.",
      ],
      visual: {
        src: "/article-images/equipment-acceptance-chain.svg",
        mobileSrc: "/article-images/equipment-acceptance-chain-mobile.svg",
        alt: "Equipment acceptance chain from requirements through supplier design, factory testing, shipment, installation, site testing, and production release",
        caption:
          "Requirements and evidence should travel together from purchase through production release. Original Black Scarab diagram.",
      },
    },
    {
      heading: "Prepare the Building Before the Truck Arrives",
      paragraphs: [
        "Site readiness begins with verified information. Confirm the equipment footprint, operating envelope, maintenance access, floor loading, anchorage, delivery path, rigging points, ceiling clearance, doors, drains, exhaust, heat rejection, compressed air, gas, water, electrical load, protective devices, grounding, network, lighting, environmental control, fire protection, and waste streams. A layout block is not a utility design.",
        "The delivery path deserves a physical walk. Measure the loading area, yard turn, dock, doors, corridors, slab transitions, overhead obstructions, crane access, and temporary removals. Decide where the shipment will be inspected, stored, uncrated, and protected. Confirm whether the building can tolerate point loads from rigging and whether occupied areas must be isolated during installation.",
        [
          "Utilities should be designed as systems. The US Department of Energy notes that more than eighty percent of compressed air input energy can be lost as heat and recommends reducing inappropriate uses, pressure, leaks, and poor control through a systems approach. Its ",
          { text: "Better Plants compressed air resources", href: doeCompressedAir },
          " are a reminder that a utility can be both a production dependency and a permanent operating cost.",
        ],
        "Permits, inspections, environmental obligations, accessibility, fire and life safety, electrical approval, and occupancy requirements depend on jurisdiction and process. The plant team should engage the authority having jurisdiction, landlord, insurer, qualified design professionals, and contractors early. A machine can be technically complete and still remain unavailable because the installation lacks an approval, listed component, field evaluation, ventilation calculation, or safe service access.",
      ],
    },
    {
      heading: "Installation Is Controlled Construction",
      paragraphs: [
        "Receiving begins before unloading. Compare the shipment with the packing list. Photograph condition. Record shock, tilt, humidity, or other indicators when specified. Inspect packaging and preserved surfaces. Resolve visible freight damage before the evidence disappears. Confirm storage conditions for equipment that cannot move immediately to final position.",
        "Installation then follows a controlled sequence: isolate the area, verify the foundation and utilities, execute the lift plan, place and level the equipment, anchor it where required, reconnect shipped loose items, complete mechanical and electrical work, clean and inspect, and update redline drawings. Qualified personnel should perform work within their trade and authorization.",
        [
          "Electrical approval deserves early attention. OSHA explains that many kinds of workplace electrical equipment require approval by a ",
          { text: "Nationally Recognized Testing Laboratory", href: oshaNrtl },
          ". Customized or modified equipment can create additional questions. ",
          { text: "UL Solutions describes field evaluation", href: ulFieldEvaluation },
          " as documentation review, visual and mechanical inspection, code suitability review, testing, and an engineering report for equipment at its installed location. The applicable route must be determined for the actual equipment and jurisdiction.",
        ],
        "Configuration control must survive installation. Record serial numbers, firmware, software, parameter files, network addresses, licenses, calibration state, backups, and approved deviations. A change made to solve an installation problem can quietly invalidate the factory test if it is not reviewed and retested.",
      ],
    },
    {
      heading: "Commission From Energy to Product",
      paragraphs: [
        "Commissioning should advance from simple and safe states toward integrated production. Begin with mechanical completion, cleanliness, guarding, labels, lubrication, fluids, utility quality, and torque or alignment checks. Energize according to an approved plan. Verify power, phases, protective devices, grounding, air pressure, flow, network segmentation, backups, and communication before enabling motion or process energy.",
        "Next verify inputs, outputs, direction, limits, sensors, actuators, alarms, interlocks, emergency functions, access control, modes, and manual operation. Dry cycle without product. Introduce representative material at reduced authority where appropriate. Prove normal sequences, changeover, restart, recovery, fault handling, data records, and interaction with upstream and downstream systems.",
        "Site acceptance testing, or SAT, confirms the installed equipment with actual site conditions. Site integration testing then proves interfaces among equipment, controls, plant software, material handling, utilities, operators, quality systems, and support processes. A line can contain individually accepted machines and still fail as a line because buffers, handshakes, rates, identifiers, recovery rules, or material presentation do not work together.",
        "Performance demonstration should use defined product mix, run length, staffing, planned stops, quality criteria, and treatment of blocked or starved time. A short peak run may prove mechanical capability but not sustainable output. The plant needs evidence of accepted units per scheduled hour with normal losses, interventions, changeovers, and support response visible.",
      ],
      tables: [
        {
          title: "Commissioning Sequence",
          columns: ["Stage", "What Is Proved", "Exit Evidence"],
          rows: [
            ["Mechanical completion", "Equipment is assembled, clean, aligned, guarded, labeled, and ready for controlled energy", "Inspection record and open item list"],
            ["Utility verification", "Power, air, network, exhaust, cooling, and other services meet requirements", "Measured values and approved energization"],
            ["Device checks", "Inputs, outputs, sensors, actuators, direction, and communications behave correctly", "Loop and device records"],
            ["Functional checks", "Modes, sequences, alarms, interlocks, recipes, and recovery work", "Approved functional test results"],
            ["Safety validation", "Risk reduction measures perform as designed", "Validation record by qualified personnel"],
            ["Site acceptance", "Installed equipment meets contractual requirements", "SAT report and exception closure"],
            ["Production demonstration", "The full system produces accepted output under defined conditions", "Rate, quality, downtime, intervention, and release evidence"],
          ],
        },
      ],
    },
    {
      heading: "Safety Is a Release Condition",
      paragraphs: [
        "Construction safety, equipment safety, and production safety overlap during startup. Temporary power, incomplete guarding, open panels, disabled interlocks, contractors, stored energy, unusual access, manual recovery, and simultaneous work create conditions that do not exist in normal production. The commissioning plan should define who controls the area, who can authorize energy, how work is coordinated, and when the system changes state.",
        [
          "OSHA general machine guarding requirements state that one or more guarding methods must protect operators and other employees from hazards such as points of operation, nip points, rotating parts, chips, and sparks. The ",
          { text: "machine guarding standard", href: oshaGuarding },
          " also requires fixed machinery to be securely anchored. The exact safeguards depend on the machine and risk assessment.",
        ],
        [
          "Servicing and commissioning can expose people to unexpected energy. OSHA's ",
          { text: "control of hazardous energy standard", href: oshaLockout },
          " establishes requirements for controlling hazardous energy during servicing and maintenance. A startup schedule does not justify bypassing an energy control procedure or treating temporary work as an exception to safe authorization.",
        ],
        "Production release should require completed risk actions, validated protective measures, approved procedures, trained authorized people, emergency response, maintenance access, and controlled handling of residual exceptions. A signed machine handover is not enough if the surrounding material flow, operator task, cleaning method, recovery action, or nearby traffic creates a hazard the equipment supplier never evaluated.",
      ],
    },
    {
      heading: "Build the Quality System Before the Ramp",
      paragraphs: [
        "Quality cannot be added after the first customer complaint. Before launch, the plant needs released specifications, bills of material, drawings, approved suppliers, incoming controls, work instructions, process parameters, inspection and test plans, measurement equipment, calibration, nonconformance, rework, deviation, change control, genealogy, record retention, and final release authority.",
        [
          "The newly published ",
          { text: "ISO 9001:2026 standard overview", href: isoQuality },
          " describes a quality management framework covering context, leadership, planning, support, operation, performance evaluation, and improvement. Certification is optional for many organizations. The underlying discipline is still relevant: the plant needs controlled processes that meet customer and applicable requirements, evidence that those processes work, and a method for improvement.",
        ],
        "The rover launch should define critical characteristics and the reaction to failure. If camera alignment affects inspection performance, the control plan may connect supplier condition, assembly fixture, calibration procedure, software version, test target, result limits, operator authorization, and final record. If the measurement system cannot distinguish an acceptable unit from a failing one, production volume only creates uncertain inventory faster.",
        "Launch containment should be deliberate and temporary. Early units may receive additional inspection, engineering review, data capture, or customer release approval. Define who can remove containment and which evidence is required. Otherwise temporary caution becomes permanent hidden labor, or it disappears before the process is capable.",
      ],
    },
    {
      heading: "Hire the Operating System, Not Just Operators",
      paragraphs: [
        "A manufacturing workforce includes direct production and the support that makes direct work possible. The plant manager owns safe, reliable delivery. Supervisors coordinate people, priorities, abnormalities, and escalation. Operators build and test. Manufacturing engineers improve the process. Quality personnel control acceptance and nonconformance. Maintenance restores and preserves equipment. Supply chain keeps material moving. Information technology and controls support connected systems. Environmental, health, safety, finance, human resources, and facilities responsibilities remain even when the team is small.",
        [
          "Labor planning should use employer cost rather than wage alone. The ",
          { text: "Bureau of Labor Statistics manufacturing industry profile", href: blsManufacturing },
          " reported average private manufacturing compensation of $48.62 per hour in the second quarter of 2026, including $32.50 in wages and $16.12 in benefits. That is an industry average, not a rate for a particular occupation, region, shift, or startup. Recruiting, overtime, training, payroll taxes, management time, travel, temporary labor, and lost productivity during ramp may add further cost.",
        ],
        "Hiring should follow learning lead time. The future owners of the process should participate in supplier reviews, FAT, installation, commissioning, work instruction development, spare parts planning, and training. Bringing operators and maintenance technicians in only after equipment is complete discards months of knowledge and leaves the launch team with a system it did not help shape.",
      ],
      tables: [
        {
          title: "Illustrative Minimum Viable Rover Factory Team",
          columns: ["Capability", "Illustrative Coverage", "Do Not Leave Unowned"],
          rows: [
            ["Plant leadership", "One accountable plant or operations leader", "Safety, delivery, cost, priorities, and escalation"],
            ["Production", "Cross trained assemblers and test technicians sized to work content", "Standard work, skill matrix, attendance, and daily control"],
            ["Manufacturing engineering", "One internal owner with specialist support", "Process, tooling, cycle, change, and improvement"],
            ["Quality", "Independent release authority with metrology support", "Incoming, in process, final test, calibration, and nonconformance"],
            ["Maintenance and facilities", "Internal first response plus planned external service", "Preventive work, spares, utilities, and recovery"],
            ["Supply chain", "Planning, purchasing, receiving, inventory, and supplier follow up", "Material availability, identity, shortages, and cash"],
            ["Controls, data, and security", "Named internal owner plus qualified support", "Backups, access, networks, updates, incidents, and interfaces"],
          ],
          note: "Illustrative responsibility model only. Actual staffing depends on product, process, volume, shifts, regulation, outsourcing, and local labor conditions.",
        },
      ],
    },
    {
      heading: "The Capital Budget Is More Than Equipment",
      paragraphs: [
        "A factory estimate should separate scope, quantity, basis, uncertainty, owner, timing, and cash treatment. Equipment purchase price is only one category. Add freight, duties where applicable, rigging, foundations, utilities, building modifications, engineering, integration, software, safety, inspections, commissioning, test material, training, spares, calibration, launch support, taxes, insurance, contingency, and the cost of disruption or delay.",
        "Costs should be time phased because payment timing drives financing needs. A supplier may require deposits before fabrication, progress payments before FAT, and shipment payment months before the equipment produces revenue. Contractors invoice while permits, inspections, and startup continue. Inventory arrives before units ship. Customers may pay after delivery. Profitability on paper does not remove a cash gap.",
        "For the hypothetical rover, Black Scarab uses wide illustrative planning ranges to compare operating models. They are not current market prices. They exclude land purchase, product research and development, financing costs, taxes, and unusual regulatory or environmental work. A real project requires location specific quotes, professional estimates, contract terms, and contingency based on design maturity.",
      ],
      tables: [
        {
          title: "Illustrative Rover Production Models",
          columns: ["Model", "Illustrative Startup Capital", "Illustrative Team", "Capability Boundary"],
          rows: [
            ["Prototype workshop", "$100,000 to $500,000", "3 to 10 people", "Engineering builds, flexible tools, outsourced fabrication, limited rate"],
            ["Minimum viable factory", "$800,000 to $3 million", "10 to 30 people", "Owned final assembly, calibration, test, genealogy, and release"],
            ["Conventional small plant", "$4 million to $15 million", "30 to 100 people", "Dedicated flow, support functions, more owned processes, repeatable volume"],
            ["Selective smart factory", "$6 million to $25 million", "35 to 120 people", "Connected production plus justified vision, autonomy, and adaptive cells"],
          ],
          note: "Black Scarab illustrative planning ranges for one hypothetical rover business. These are not construction benchmarks, supplier prices, financing guidance, or estimates for another product or location.",
        },
        {
          title: "Illustrative $5.8 Million Small Plant Funding Need",
          columns: ["Category", "Illustrative Amount", "What It Covers"],
          rows: [
            ["Facility and utilities", "$900,000", "Leasehold work, power, air, network, fire and life safety, inspections"],
            ["Production equipment and tooling", "$1,700,000", "Assembly, fabrication support, fixtures, tools, material handling"],
            ["Quality and test", "$650,000", "Calibration, final test, measurement, environmental and support equipment"],
            ["Automation and production data", "$750,000", "Controls, selective automation, traceability, software, integration, security"],
            ["Engineering, installation, and launch", "$600,000", "Design, contractors, rigging, commissioning, training, launch support"],
            ["Initial material and spares", "$600,000", "Opening inventory, spare parts, consumables, packaging, test material"],
            ["Working capital and contingency", "$600,000", "Ramp losses, payroll, receivables, changes, schedule and performance risk"],
          ],
          note: "Illustrative allocation only. The same total can be dangerously low or unnecessarily high depending on scope, location, building condition, product maturity, volume, outsourcing, and contract terms.",
        },
      ],
    },
    {
      heading: "Working Capital Can Stop a Factory That Is Technically Ready",
      paragraphs: [
        [
          "The ",
          { text: "US Small Business Administration planning guidance", href: sbaPlanning },
          " separates one time startup expenses from monthly costs and recommends forecasting income statements, balance sheets, cash flow, and capital expenditures. Manufacturing makes that discipline especially important because cash can be committed to equipment and inventory long before finished goods generate collected revenue.",
        ],
        "Build a monthly cash model from purchase deposits through stable production. Include supplier payment terms, minimum order quantities, transit, receiving, yield loss, work in process, finished goods, customer payment terms, payroll, benefits, rent, utilities, insurance, service contracts, taxes, warranty, scrap, rework, and debt or investor conditions. Model the downside case in which installation slips, yield is lower, demand ramps later, or a critical component must be bought early.",
        "Inventory is not one number. Separate raw material, supplier work in process, inbound material, quarantine, usable stock, line stock, internal work in process, finished goods, nonconforming material, service spares, and customer returns. A balance sheet can show valuable inventory while production is stopped because the one constrained component is missing or the available parts await disposition.",
        "Contingency should follow known uncertainty rather than a ceremonial percentage. Immature equipment design, incomplete site information, foreign freight, custom controls, limited test material, unresolved permits, product changes, and single source components each create different exposure. Retire uncertainty with engineering and quotes where possible. Fund the remainder explicitly.",
      ],
    },
    {
      heading: "Insurance and Contracts Shape the Real Risk Boundary",
      paragraphs: [
        "The insurance program may include property, equipment breakdown, general liability, product liability, workers compensation, commercial auto, cyber, cargo, business interruption, builder risk during construction, and coverage required by lenders, landlords, customers, or contracts. The correct program depends on jurisdiction, product, process, customer promises, stored energy, hazardous materials, construction scope, and contractual allocation.",
        "The insurer and broker should see the actual process, fire protection, utilities, storage, battery handling, equipment values, interruption dependencies, contractor activity, testing, and emergency planning. Declared values and business interruption assumptions should follow the current project, not the prior tenant or an early budget.",
        "Contracts should address ownership of design, confidential information, software, data, tooling, drawings, spare parts, warranties, defects, delay, indemnity, limitation of liability, insurance, site rules, change control, acceptance, termination, and dispute process. The technical team needs to understand the commercial consequences of a decision. A friendly email agreeing to an undocumented change can alter cost, schedule, warranty, and responsibility.",
      ],
    },
    {
      heading: "The First Production Run Is a Controlled Experiment",
      paragraphs: [
        "The first production run should not be a public celebration disguised as a test. Define the product configuration, material lots, equipment state, software versions, tools, fixtures, operators, instructions, quality plan, expected rate, data collection, stop criteria, escalation, and disposition authority before the run begins.",
        "Track each rover from receiving through final release. Record shortages, substitutions, defects, rework, process deviations, equipment stops, manual interventions, test failures, retests, queue time, labor, and unresolved questions. Separate a failure of the product design from a supplier defect, process weakness, measurement problem, training gap, equipment fault, software problem, or planning error.",
        "A good first run may be slow. The objective is to expose the real system while protecting people and customers. Release only units that meet requirements. Preserve nonconforming units and evidence long enough to learn. Update instructions, tooling, controls, suppliers, staffing, and the capacity model through change control.",
        "The launch review should compare planned and actual accepted output, first pass yield, total yield, defects, rework, scrap, downtime, intervention, labor, cycle distribution, material usage, and safety observations. It should produce a prioritized recovery plan with owners and dates, not a single statement that the line worked.",
      ],
      tables: [
        {
          title: "First Production Run Scorecard",
          columns: ["Measure", "Question", "What It Prevents"],
          rows: [
            ["Accepted output", "How many released units emerged per scheduled hour?", "Confusing activity with production"],
            ["First pass yield", "How many units passed without rework or retest?", "Hiding instability behind repair"],
            ["Cycle distribution", "How wide is the range around average cycle time?", "Planning capacity from one fast cycle"],
            ["Intervention", "How often did engineers, maintenance, or quality rescue the process?", "Calling expert support normal operation"],
            ["Downtime and recovery", "Which failures stopped flow and how long did recovery take?", "Ignoring maintainability and support load"],
            ["Material and genealogy", "Can every critical component, process, software version, and result be traced?", "Shipping units with uncertain configuration"],
            ["Safety and workload", "Did the actual work match the reviewed task and human capability?", "Optimizing rate around an unsafe or unsustainable method"],
          ],
        },
      ],
    },
    {
      heading: "Use Selective Intelligence Where the Launch Creates Evidence",
      paragraphs: [
        "The factory should not wait for perfect intelligence, but it should not automate uncertainty blindly. A connected production record can begin with product identity, material lots, work completion, torque results, calibration, software version, final test, and nonconformance. That foundation may create more value than an ambitious adaptive cell because it reveals where defects, delays, and interventions actually occur.",
        "Machine vision may earn a place where a repeatable inspection consumes time or where a missed condition carries high cost. Autonomous material movement may earn a place when routes, containers, dispatch logic, traffic, and labor demand are understood. Predictive maintenance may begin as advisory monitoring on a constrained asset. Generative assistance may help retrieve approved procedures and equipment history without receiving authority to release product or modify controls.",
        "The purchasing package should preserve interfaces for later improvement without forcing immature technology into the opening date. Provide useful camera mounting, lighting control, network segmentation, data identity, spare cabinet space, safe robot access, modular fixtures, and documented control interfaces when the incremental cost is justified. Avoid building an expensive digital shell around processes that have not yet demonstrated stable value.",
        [
          "Connected production also creates cyber exposure. The draft ",
          { text: "NIST Cybersecurity Framework 2.0 Manufacturing Profile", href: nistCyber },
          " aligns manufacturing risk management with the CSF 2.0 functions and includes supply chain risk, platform security, and infrastructure resilience. A small plant still needs named ownership for accounts, remote access, backups, updates, network boundaries, vendor support, recovery, and incident response.",
        ],
      ],
    },
    {
      heading: "A Practical 180 Day Launch Sequence",
      paragraphs: [
        "Days 1 through 30: release the production basis, confirm demand scenarios, choose the production ownership model, establish governance, complete site due diligence, create the integrated schedule, identify permits and long lead items, and issue the first technical packages. Do not sign a building or equipment commitment until the critical assumptions are visible.",
        "Days 31 through 60: complete concept and preliminary design reviews, select suppliers, negotiate acceptance and commercial milestones, submit permits, release facility design, hire the future operations leaders, establish the quality system skeleton, and begin supplier readiness work. Freeze the interfaces that contractors and equipment builders need.",
        "Days 61 through 100: execute building modifications, review equipment design, prepare networks and production data, develop work instructions and test procedures, order opening material and spares, recruit and train the core team, and maintain a current risk and cash forecast. Use design reviews to remove work from startup rather than admire progress renderings.",
        "Days 101 through 130: witness FAT, close or formally disposition exceptions, release shipment, finish site readiness, execute receiving and rigging plans, verify utilities, and complete installation. Protect configuration and evidence through disassembly, freight, placement, and reconnection.",
        "Days 131 through 160: commission energy, devices, functions, safety, site performance, integration, quality records, maintenance, backups, cybersecurity, training, and abnormal recovery. Run representative material and prove the entire production route, not only the showpiece cell.",
        "Days 161 through 180: execute controlled pilot production, contain early output, close launch issues, update staffing and capacity, secure customer release where required, and hold a formal readiness review. The actual duration may be shorter or much longer. The value of the sequence is dependency logic, not a universal six month promise.",
      ],
    },
    {
      heading: "Common Factory Build Mistakes",
      paragraphs: [
        "The first mistake is signing a lease before confirming the process, utilities, permits, delivery path, and expansion logic. The second is buying the largest machine before fixing the product route and make or buy strategy. The third is writing equipment specifications around components rather than measurable operating results.",
        "The fourth is leaving interfaces between equipment supplier, integrator, contractor, information technology, facilities, and operations unowned. The fifth is accepting a machine from a polished demonstration without an approved test procedure, representative material, fault testing, records, and exception closure. The sixth is allowing FAT shipment approval to become final acceptance by habit.",
        "The seventh is installing equipment before the building is ready. The eighth is treating commissioning as a supplier task rather than the controlled integration of a production system. The ninth is delaying safety validation, quality records, maintenance, spares, training, cybersecurity, and backups until after the first run.",
        "The tenth is budgeting equipment but not working capital. The eleventh is hiring direct labor without the support system that keeps direct work productive. The twelfth is automating the process before measuring its failure and variation. The thirteenth is declaring success when one unit works. The fourteenth is scaling output before the plant can explain why units fail.",
      ],
    },
    {
      heading: "Black Scarab Verdict",
      paragraphs: [
        "A factory should be treated as a product. It has requirements, architecture, interfaces, suppliers, configurations, tests, operators, failure modes, releases, and a lifecycle. The company that manages those elements explicitly can start smaller, learn faster, and commit capital with more control. The company that treats the plant as a collection of purchases inherits every unresolved interface during startup.",
        "For an early physical product company, the strongest default is often a minimum viable factory. Own the processes that protect performance, configuration, test evidence, customer response, and the most important learning. Buy capable components and processes from suppliers. Use flexible conventional equipment while volume and design are moving. Add dedicated automation when the process is stable and the captured operating value exceeds the complete installed and recurring cost.",
        "Physical AI belongs where measured variation makes fixed methods expensive or weak. It should enter through bounded applications, useful production data, independent safety, clear authority, representative validation, and an economic result visible in accepted output. An intelligent machine does not rescue a factory without material, maintenance, quality, cash, or operating discipline.",
        "The first accepted production run completes the series, but it does not complete the factory. The real system begins learning after launch. Suppliers change. Tools wear. People improve the work. Demand moves. Product revisions arrive. The enduring advantage is not the original layout or the most advanced cell. It is the ability to observe the complete production system, make controlled changes, verify the result, and keep shipping products customers can trust.",
      ],
    },
    {
      heading: "Your Factory Builder Checkpoint",
      paragraphs: [
        "You should now be able to trace an idea into a product, route, supplier network, factory design, control architecture, selective physical intelligence, equipment purchase, installed system, operating team, cost model, and accepted production run.",
        "When evaluating any factory proposal, ask what product promise the plant protects, which requirements are released, which interfaces remain open, what evidence unlocks each payment and gate, how the system fails and recovers, how people will operate and maintain it, what the cash model assumes, and which result would justify the next increment of automation.",
      ],
      tables: [
        {
          title: "Ten Questions Before Approving a Factory",
          columns: ["Question", "A Credible Answer Contains"],
          rows: [
            ["Why own this production?", "A specific product, learning, quality, lead time, capacity, supply, or customer reason"],
            ["What is released?", "Controlled product, process, volume, quality, and interface baselines"],
            ["What is the smallest viable system?", "A deliberate boundary among owned processes, suppliers, and shared capacity"],
            ["What must every supplier prove?", "Requirements, representative tests, records, exceptions, support, and final acceptance"],
            ["Is the site truly ready?", "Verified delivery, structure, utilities, environment, permits, inspections, and service access"],
            ["Can the plant operate without the project team?", "Trained people, instructions, spares, maintenance, backups, escalation, and authority"],
            ["Can the plant release product confidently?", "Measurement, traceability, control, nonconformance, and independent release"],
            ["Can the company survive the cash gap?", "Time phased commitments, inventory, payroll, receivables, contingency, and downside cases"],
            ["Where does intelligence earn its cost?", "A measured problem, bounded authority, complete integration cost, and captured benefit"],
            ["What proves launch?", "Accepted output over a defined run with quality, rate, intervention, downtime, and safety visible"],
          ],
        },
      ],
    },
    {
      heading: "Research Method",
      paragraphs: [
        "This report uses OSHA machine guarding, hazardous energy, and electrical equipment approval materials for the workplace safety and equipment acceptance boundary. ISA 105 and IEC 62381 support the structure of factory, site, and integration acceptance. ISO 9001:2026 supports the quality management discussion. NASA systems engineering guidance supports requirement traceability and verification planning.",
        "US Small Business Administration planning material supports the startup cost and cash flow framework. Bureau of Labor Statistics data supplies current US manufacturing compensation context. US Department of Energy Better Plants and Industrial Training and Assessment Center materials support utility, energy, assessment, and workforce context. NIST Manufacturing Extension Partnership and manufacturing cybersecurity materials support small manufacturer assistance and connected plant risk management.",
        "The project gates, four factory models, team design, purchase framework, commissioning sequence, illustrative staffing, cost ranges, $5.8 million example, 180 day sequence, rover launch, and buyer questions are Black Scarab analysis. They do not replace quotes, engineering, codes, standards, permitting, legal review, tax advice, insurance advice, financing analysis, labor planning, safety validation, or quality requirements for an actual project and jurisdiction.",
        [
          "US manufacturers can also explore the ",
          { text: "NIST Manufacturing Extension Partnership", href: nistMep },
          " for local technical assistance and the Department of Energy's ",
          { text: "Industrial Training and Assessment Centers", href: doeAssessment },
          " for qualifying energy assessments and workforce resources. Availability and eligibility depend on the organization and program.",
        ],
      ],
    },
  ],
  sources: [
    "OSHA machine guarding and control of hazardous energy standards",
    "OSHA Nationally Recognized Testing Laboratory program",
    "ISO 9001:2026 quality management systems",
    "ISA 105 and IEC 62381 acceptance testing frameworks",
    "NASA Systems Engineering Handbook verification and validation guidance",
    "US Small Business Administration startup cost and cash flow planning",
    "US Bureau of Labor Statistics manufacturing compensation data",
    "US Department of Energy Better Plants and Industrial Training and Assessment Centers",
    "NIST Manufacturing Extension Partnership",
    "NIST Cybersecurity Framework 2.0 Manufacturing Profile",
    "UL Solutions field evaluation overview",
  ],
  sourceLinks: [
    { label: "OSHA general machine guarding requirements", url: oshaGuarding },
    { label: "OSHA control of hazardous energy standard", url: oshaLockout },
    { label: "OSHA Nationally Recognized Testing Laboratory FAQ", url: oshaNrtl },
    { label: "ISO 9001:2026 quality management systems", url: isoQuality },
    { label: "ISA 105 acceptance and commissioning standards", url: isaAcceptance },
    { label: "IEC 62381:2024 acceptance and integration testing", url: iecAcceptance },
    { label: "NASA Systems Engineering Handbook appendix", url: nasaVerification },
    { label: "US Small Business Administration business planning", url: sbaPlanning },
    { label: "US Bureau of Labor Statistics manufacturing profile", url: blsManufacturing },
    { label: "Department of Energy Better Plants compressed air", url: doeCompressedAir },
    { label: "Department of Energy Industrial Training and Assessment Centers", url: doeAssessment },
    { label: "NIST Manufacturing Extension Partnership", url: nistMep },
    { label: "NIST Cybersecurity Framework 2.0 Manufacturing Profile", url: nistCyber },
    { label: "UL Solutions field evaluation services", url: ulFieldEvaluation },
  ],
});
