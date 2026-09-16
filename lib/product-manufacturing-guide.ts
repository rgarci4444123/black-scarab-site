import type { CaseStudyArticle } from "@/lib/case-studies";

export const productManufacturingGuide = (): CaseStudyArticle => ({
  slug: "how-a-product-is-manufactured-bill-of-materials-production-line",
  title: "How a Product Is Manufactured: From Bill of Materials to Production Line",
  seoTitle: "How a Product Is Manufactured: Bill of Materials to Production Line",
  summary:
    "A worked manufacturing plan for an autonomous inspection rover, from product architecture and supplier choices to routing, quality, cost, and capacity for the first 1,000 units.",
  publishedLabel: "Deep Dive · Published September 16, 2026",
  publishedDate: "2026-09-16",
  publishedAt: "2026-09-16T10:03:08-04:00",
  typeLabel: "Deep Dive",
  formatLabel: "Inside the Physical AI Factory · Part 3",
  series: {
    name: "Inside the Physical AI Factory",
    label: "Part 3 of 8",
    href: "/insights/how-modern-manufacturing-works-factories-physical-ai-guide",
    previous: {
      title: "Types of Manufacturing Machines",
      href: "/insights/types-of-manufacturing-machines-factory-equipment-guide",
    },
  },
  industry: "Manufacturing",
  image: "/article-images/product-manufacturing-rover-cover.png",
  imageFit: "contain",
  imageAlt:
    "Editorial illustration of an autonomous inspection rover progressing from separated components to assembly and final testing",
  imageCaption:
    "Original Black Scarab editorial illustration of a hypothetical inspection rover moving from components through assembly and test. This is an editorial interpretation, not an official product photograph.",
  seoDescription:
    "Learn how a product is manufactured through a complete rover example covering the bill of materials, suppliers, production routing, make versus buy choices, cost, quality, and capacity.",
  tags: [
    "how products are manufactured",
    "bill of materials",
    "manufacturing process",
    "production routing",
    "prototype to production",
    "make versus buy",
    "production line",
    "physical AI manufacturing",
  ],
  author: {
    name: "Rodolfo Garcia Calderoni, CFA",
    href: "/about",
  },
  sections: [
    {
      paragraphs: [
        [
          "This is Part 3 of ",
          {
            text: "Inside the Physical AI Factory",
            href: "/insights/how-modern-manufacturing-works-factories-physical-ai-guide",
          },
          ". Part 1 mapped the factory. Part 2 mapped the machines. Now we connect product, parts, suppliers, operations, people, and evidence into one route that can produce an accepted unit repeatedly.",
        ],
        "A prototype can work even when its manufacturing system does not. An engineer may spend a day adjusting a bracket, replace an unavailable connector, hand route a cable, load software from a laptop, and remember the one unusual calibration step. The finished rover moves. The knowledge required to build it again still lives in the engineer rather than in a controlled production process.",
        "Manufacturing begins when that hidden knowledge becomes explicit. The product needs a released definition. Every item needs an identity, quantity, source, revision, and acceptance requirement. Every operation needs an input, output, sequence, resource, time assumption, and response to failure. The route must produce the same approved configuration without depending on memory or improvisation.",
        "This report builds that system around the hypothetical autonomous inspection rover used throughout the series. We will take it apart, construct a bill of materials, map representative suppliers, choose what to make and buy, write the production route, and compare ten prototypes, the first one hundred commercial units, and capacity for one thousand units per year. All rover specifications, costs, labor times, yields, and volumes are illustrative planning assumptions. They do not describe a real product or supplier relationship.",
      ],
      tables: [
        {
          title: "A Manufactured Product in One Sentence",
          columns: ["Product Definition", "Production System", "Accepted Result"],
          rows: [
            [
              "Requirements, drawings, software, bill of materials, approved sources, and test criteria",
              "A controlled route of purchasing, fabrication, assembly, programming, inspection, and records",
              "A traceable unit that conforms to its released configuration and performs its intended job",
            ],
          ],
        },
      ],
    },
    {
      heading: "The Product Is More Than Its Shape",
      paragraphs: [
        "A three dimensional model may define the geometry of a bracket, but it does not define the complete product. Production also needs materials, finishes, tolerances, purchased part numbers, electrical drawings, cable definitions, software versions, calibration data, labels, packaging, inspection methods, and approved deviations. The build package must answer what to make, what to buy, how the pieces connect, and how acceptance will be proven.",
        "NASA describes approved specifications, drawings, parts lists, and other configuration documentation as the baseline of a product. Its configuration management guidance focuses on keeping the physical product and its information consistent as changes occur. The underlying lesson applies far beyond aerospace. If the drawing says revision C, the work instruction says revision B, and the purchasing system orders the revision A component, the factory does not have one product definition.",
        "The digital thread is the connection among these records. NIST describes it as lifecycle information linking design, manufacturing, quality, and product support. For the rover, a failed camera alignment test should point to the unit serial number, camera lot, bracket revision, fixture version, calibration procedure, result, and corrective action. That chain turns a defect into usable engineering feedback rather than an isolated surprise.",
      ],
      tables: [
        {
          title: "The Minimum Production Definition",
          columns: ["Record", "Question It Answers", "Rover Example"],
          rows: [
            ["Requirements", "What must the product do and withstand?", "Inspection mission, operating environment, safety behavior, runtime, and interfaces"],
            ["Engineering drawings and models", "What is the approved geometry and material?", "Frame, enclosure, wheel hub, sensor bracket, and gasket definitions"],
            ["Bill of materials", "What items and quantities form one shippable unit?", "Motors, gearboxes, battery, boards, cameras, harnesses, fasteners, labels, and packaging"],
            ["Software configuration", "Which code, model, settings, and credentials belong on the unit?", "Boot image, motor control firmware, perception model, calibration file, and release identifier"],
            ["Process plan", "Which operations transform the inputs?", "Receive, kit, assemble, wire, program, calibrate, test, and pack"],
            ["Quality plan", "What is checked, when, by whom, and against which limit?", "Incoming evidence, torque records, continuity, calibration, braking, navigation, and final audit"],
            ["Change record", "Why did the baseline change and where was it applied?", "New connector, revised bracket, alternate camera, updated model, or corrected work instruction"],
          ],
        },
      ],
    },
    {
      heading: "Take the Rover Apart Before Planning the Factory",
      paragraphs: [
        "A useful bill of materials follows product structure. The top level rover contains major subassemblies that can be designed, purchased, assembled, inspected, and changed with clear boundaries. Each subassembly then contains lower level parts. This hierarchy helps engineering manage interfaces and helps production decide where work should happen.",
        "The teaching rover uses eight major groups: structure and enclosure, mobility, electrical power, control electronics, perception, communications, cable harnesses, and shipment items. Software and calibration are configuration items even though they are not physical inventory. Fixtures, tools, spare consumables, and factory test equipment belong to the manufacturing system rather than the sellable product bill.",
        "Interfaces deserve special attention because defects collect where subsystems meet. A motor may pass its supplier test while the rover fails because the gearbox ratio, wheel diameter, encoder convention, motor controller settings, cable pinout, and software sign convention do not agree. Product architecture is therefore also an integration plan.",
      ],
      visual: {
        src: "/article-images/rover-exploded-product-map.svg",
        mobileSrc: "/article-images/rover-exploded-product-map-mobile.svg",
        alt: "Exploded product map of a hypothetical autonomous inspection rover and its eight major subassemblies",
        caption:
          "The rover is organized into controlled subassemblies before any production route is chosen. All specifications are illustrative. Original Black Scarab diagram.",
      },
      tables: [
        {
          title: "Illustrative Rover Product Structure",
          columns: ["Subassembly", "Representative Contents", "Critical Interfaces", "Acceptance Focus"],
          rows: [
            ["Structure and enclosure", "Frame, panels, covers, brackets, seals, and fasteners", "Mounting datums, stiffness, clearances, grounding, and environmental sealing", "Dimensions, finish, thread condition, fit, and sealing surfaces"],
            ["Mobility", "Motors, gearboxes, wheels, hubs, bearings, encoders, and brakes", "Mechanical mounting, shaft connection, power, feedback, and control direction", "Free rotation, alignment, backlash, encoder response, and braking"],
            ["Electrical power", "Battery pack, battery management, protection, contactor, charging port, and distribution", "Voltage, current, grounding, thermal path, communication, and safe isolation", "Identity, polarity, insulation, protection behavior, and charge function"],
            ["Control electronics", "Embedded computer, carrier board, motor controllers, safety controller, and storage", "Power rails, networks, input and output, timing, and software compatibility", "Correct revision, firmware, communication, thermal contact, and functional input and output"],
            ["Perception", "Cameras, depth sensors, illumination, inertial sensing, and protective windows", "Field of view, mounting, time synchronization, compute, calibration, and cleaning", "Image quality, alignment, timestamps, calibration, and occlusion"],
            ["Communications", "Wireless module, antennas, service port, and internal network components", "Radio region, antenna placement, network identity, cybersecurity, and service access", "Connectivity, configuration, identity, and permitted transmit behavior"],
            ["Cable harnesses", "Power cables, signal harnesses, connectors, labels, clips, and protective sleeving", "Pinout, bend radius, retention, routing, abrasion, and service loops", "Continuity, insulation, pull security, labeling, and routing"],
            ["Shipment items", "Protective packaging, charger, accessories, documentation, and serial label", "Configuration match, battery shipping rules, customer setup, and transport protection", "Pack audit, label match, accessory count, and package integrity"],
          ],
          note: "The architecture is a teaching example. It is not a released rover specification and does not imply that every real inspection robot uses these components.",
        },
      ],
    },
    {
      heading: "Build a Bill of Materials That Purchasing Can Use",
      paragraphs: [
        "A bill of materials is often introduced as an ingredients list. Production needs more than item names and quantities. Each row should identify the internal part number, description, revision, quantity, unit of measure, make or buy status, approved manufacturer and supplier information, lifecycle risk, lead time assumption, inspection requirement, and the assembly in which the item is consumed.",
        "The engineering bill of materials explains the designed product. The manufacturing bill adds what is needed to build and ship it through the chosen route. A design may show one cable assembly. The manufacturing record may also need labels, tie points, protective sleeving, consumable allowance, test adapters, and the sequence in which branches are installed. Packaging and included accessories belong in the shippable product definition even when they are absent from the engineering model.",
        "IPC's production checklist identifies the bill of materials alongside board data, fabrication notes, assembly notes, drawings, and other engineering documentation. Its design for manufacturing guidance also shows why a board file alone is not enough. The manufacturer must be able to compare the design with process capability before material is committed.",
        "Public catalog examples show how quickly a provisional choice becomes configuration data. Raspberry Pi currently offers Compute Module 5 in multiple memory, storage, and wireless variants, with official product documentation and lifecycle information. Luxonis lists several OAK camera configurations with different optics, enclosures, interfaces, and public prices. Writing only Compute Module or depth camera in a bill of materials would not control what arrives, what fits, or what software image should be loaded.",
      ],
      visual: {
        src: "/article-images/rover-bom-supplier-map.svg",
        mobileSrc: "/article-images/rover-bom-supplier-map-mobile.svg",
        alt: "Bill of materials and supplier map for a hypothetical autonomous inspection rover",
        caption:
          "A production bill connects internal configuration with approved external sources and acceptance evidence. Named companies are representative supplier examples, not claimed rover suppliers. Original Black Scarab diagram.",
      },
      tables: [
        {
          title: "Illustrative Bill of Materials Extract",
          columns: ["Item", "Quantity", "Source Strategy", "Production Record", "Main Risk"],
          rows: [
            ["Welded or bolted frame assembly", "1", "Fabricate from released drawing through a qualified local supplier", "Drawing revision, material certificate where required, dimensional report, and finish record", "Distortion, datum error, late design change, or supplier capacity"],
            ["Drive motor and gearbox assembly", "4", "Buy configured motion assemblies from an approved manufacturer or distributor", "Exact manufacturer part number, ratio, encoder, connector, and lot", "Single source, long lead time, or interface change"],
            ["Battery pack with management system", "1", "Buy a documented pack or engage a qualified pack supplier", "Configuration, safety documentation, lot, state at receipt, and test evidence", "Transport, cell change, certification boundary, thermal design, or obsolescence"],
            ["Embedded compute module", "1", "Buy an exact released variant through authorized channels", "Memory, storage, wireless option, serial identity, and software compatibility", "Allocation, silent substitution, lifecycle, or regional radio configuration"],
            ["Custom carrier board assembly", "1", "Outsource board fabrication and assembly from released production data", "Board revision, assembly revision, approved parts, test result, and rework history", "Component shortage, footprint error, workmanship, or untested substitution"],
            ["Depth camera assembly", "1", "Buy a selected catalog device or qualified custom module", "Exact model, firmware, calibration identity, cable, and incoming function", "Field of view, environmental limit, interface, or supplier revision"],
            ["Main cable harness set", "1", "Build internally for prototypes, then outsource to released drawings and test requirements", "Harness revision, connector and terminal identity, continuity result, and operator or supplier lot", "Pinout error, incorrect crimp, routing conflict, or uncontrolled alternate"],
            ["Final package set", "1", "Buy converted packaging to a released specification", "Package revision, included accessories, labels, and pack audit", "Transit damage, missing accessory, battery marking, or version mismatch"],
          ],
          note: "The table defines information needs, not actual purchasing commitments. Supplier qualification must match the product, market, safety case, and jurisdiction.",
        },
      ],
    },
    {
      heading: "Make Versus Buy Is a Capability Decision",
      paragraphs: [
        "The make versus buy decision should not begin with the price of one part. It should begin with the capability required to deliver the part repeatedly. Owning a process means owning its equipment, people, safety, quality, maintenance, scheduling, materials, waste, data, and recovery when something fails. Buying the part means owning the specification, supplier selection, incoming evidence, change control, commercial terms, and contingency plan.",
        "For ten rovers, outsourced laser cutting, machining, board assembly, battery packs, and cable fabrication can provide capabilities that would be irrational to build. Internal work can focus on integration, software, fixtures, calibration, and learning. At one hundred units, recurring lead time and quality problems may justify bringing selected harness, fixture, or final assembly work inside. At one thousand units, a stable and heavily used process may justify dedicated equipment, but volume alone does not make every process strategic.",
        "The product boundary matters. A startup can own the design, software, final integration, test records, and customer support while buying nearly every component and fabricated part. That is still a manufacturer if it controls the product configuration and accepts responsibility for the finished result. Outsourcing transfers work. It does not transfer product accountability.",
      ],
      tables: [
        {
          title: "Rover Make Versus Buy Decisions by Stage",
          columns: ["Capability", "10 Prototypes", "100 Units", "1,000 Unit Capacity", "Reasoning"],
          rows: [
            ["Frame and sheet fabrication", "Outsource flexible processes", "Outsource with fixtures and agreed inspection", "Compete qualified suppliers against an internal cell only if utilization supports it", "Specialized machines, finishing, and skilled fabrication are available externally"],
            ["Printed circuit board assembly", "Outsource prototypes", "Outsource controlled batches", "Outsource recurring production with test coverage and alternate planning", "Electronics assembly requires process control, capital, material handling, and inspection beyond a pick and place machine"],
            ["Cable harnesses", "Build or modify internally to learn", "Use a qualified supplier for released harnesses while retaining rapid repair capability", "Outsource stable volume or own a dedicated documented cell", "Harnesses are labor intensive and defect sensitive, but early revisions change often"],
            ["Final mechanical and electrical assembly", "Own the learning", "Own or supervise a flexible assembly cell", "Own the final route or place it with a contract manufacturer under strong configuration control", "Integration captures cross subsystem defects and product knowledge"],
            ["Software loading and calibration", "Own", "Own", "Own the process definition, data, release authority, and audit trail even if a partner operates the station", "Software identity and calibration determine the actual behavior of the physical product"],
            ["Environmental and specialized compliance testing", "Use external laboratories", "Use external laboratories for qualification and selected audits", "Combine internal screening with external certification and surveillance as required", "Rare equipment and independent evidence favor qualified laboratories"],
          ],
        },
      ],
    },
    {
      heading: "The Routing Tells the Product Where to Go",
      paragraphs: [
        "The bill of materials says what belongs in the rover. The routing says how one accepted rover is produced. Each operation should identify the work center, predecessor, standard input, instructions, tools or fixtures, expected time, quality gate, output status, and record created. A route can include outside supplier operations as well as internal work.",
        "The route should follow physical and verification logic. Hidden joints are checked before they are covered. Electrical continuity is tested before expensive electronics are connected. A software image is verified before calibration. Subsystems are tested before final integration when that makes fault isolation cheaper. The final functional test proves the released unit, not just a collection of passing parts.",
        "NASA separates verification from validation. Verification asks whether the product conforms to its requirements. Validation asks whether it performs the intended purpose in the intended environment. A rover can pass dimensional, electrical, software, and braking requirements yet still fail to complete a representative inspection mission. Production acceptance needs both the build requirements and an appropriate operational demonstration.",
      ],
      tables: [
        {
          title: "Illustrative Rover Production Route",
          columns: ["Operation", "Input", "Work", "Quality Gate", "Output Record"],
          rows: [
            ["Receive and identify", "Purchased and fabricated items", "Match part, revision, quantity, condition, and required supplier evidence", "Accept, quarantine, or reject against purchase and inspection requirements", "Receipt lot and status"],
            ["Kit one unit", "Released bill and available inventory", "Collect verified parts by serial, lot, or quantity and stage shortages visibly", "Independent kit check for critical and similar looking items", "Kit identity and shortage list"],
            ["Build structure", "Frame, panels, inserts, seals, and fasteners", "Assemble in a fixture and record controlled joints", "Datums, clearances, thread condition, torque where required, and visual acceptance", "Structure serial and assembly record"],
            ["Install mobility", "Motor, gearbox, wheel, hub, encoder, brake, and cables", "Mount, align, connect, and establish direction conventions", "Free rotation, current response, encoder direction, brake action, and clearance", "Mobility test result"],
            ["Install power and controls", "Battery, protection, distribution, boards, compute, and safety components", "Mount with controlled thermal, electrical, and grounding interfaces", "Polarity, insulation, ground, connector lock, power rail, and safe state checks", "Electrical build and test record"],
            ["Install perception and communications", "Cameras, inertial sensor, antennas, windows, mounts, and network cables", "Mount to controlled datums and protect optical paths", "Identity, image, network, placement, visibility, and mechanical retention", "Sensor identity map"],
            ["Load software", "Released image, firmware, model, settings, and device credentials", "Program the unit through a controlled station", "Cryptographic or recorded release identity, successful boot, and correct device configuration", "Software manifest linked to unit serial"],
            ["Calibrate", "Complete powered rover and calibrated fixture", "Estimate sensor, wheel, and motion parameters under controlled conditions", "Values within defined limits and calibration data saved to the correct unit", "Calibration file and station version"],
            ["Final verification and validation", "Released configured rover", "Run safety, communications, mobility, perception, charging, and representative mission checks", "All required results pass, exceptions are closed, and the exact configuration is captured", "Final acceptance record"],
            ["Pack and release", "Accepted rover, accessories, labels, documents, and package", "Protect, identify, audit, seal, and transfer to finished goods", "Serial, software, accessories, battery state, package revision, and shipment data agree", "Pack audit and release status"],
          ],
        },
      ],
    },
    {
      heading: "Ten Prototypes Buy Knowledge",
      paragraphs: [
        "The first ten units should not pretend to be a mature line. Their purpose is to expose interface errors, difficult assembly steps, weak parts, missing requirements, test gaps, supplier limitations, and the real sequence of work. Flexibility is more valuable than local efficiency because the design is still moving.",
        "Prototype parts may be machined from stock, printed, laser cut, or assembled from development modules. Harnesses may be made on a bench. Engineers may perform most of the integration. That is acceptable only when every workaround becomes visible. Redlines, substitutions, rework, calibration changes, and failures must return to the released definition or be closed before the next build.",
        "The most useful output is not ten matching shells. It is a more complete production package. The team should finish the build with corrected drawings, a structured bill of materials, known supplier questions, preliminary work instructions, repeatable test methods, a defect record, and evidence about which design decisions are ready to freeze.",
      ],
      tables: [
        {
          title: "What to Learn From Ten Prototypes",
          columns: ["Learning Question", "Evidence to Capture", "Decision Before the Next Stage"],
          rows: [
            ["Does every interface fit and function?", "Actual dimensions, assembly interference, connector access, cable routing, thermal contact, and software integration", "Correct the design or formally accept the interface"],
            ["Can another person build it?", "Observed build sequence, questions, mistakes, tool access, and time by operation", "Create usable instructions and simplify ambiguous work"],
            ["Can requirements be tested?", "Test setup, repeatability, failures, false failures, and missing limits", "Release preliminary acceptance methods and fixtures"],
            ["Can the parts be sourced again?", "Supplier quote, lead time, minimum quantity, lifecycle, alternates, and change notice process", "Approve sources and identify redesign risk"],
            ["Which choices should remain flexible?", "Failure severity, learning rate, customer feedback, and cost of future change", "Freeze only the interfaces required to proceed"],
          ],
          note: "Illustrative planning assumption for cost modeling: 32 direct labor hours per prototype. This is not a measured rover build time.",
        },
      ],
    },
    {
      heading: "The First One Hundred Units Prove Repeatability",
      paragraphs: [
        "The first one hundred commercial units create a different problem. Customers now expect consistent configuration and support. Purchasing must place orders before every detail is convenient. Suppliers need forecasts and release packages. Assemblers need work that can be trained. Quality needs defined limits and a way to contain defects without stopping learning.",
        "A pilot cell is usually more appropriate than a rigid line. Benches can be arranged in route order while people flex among kitting, mechanical assembly, electrical assembly, software, calibration, and test. Fixtures become more durable. Torque tools, electrical testers, and software stations capture records automatically where the value is clear. Batch size remains small enough to detect a problem before it spreads across a large inventory position.",
        "This stage should establish the product and process baseline for growth. The manufacturer needs a formal method for engineering changes, supplier deviations, nonconforming material, rework, and software release. A corrected part on unit 37 must not quietly create three different rover configurations by unit 60.",
      ],
      tables: [
        {
          title: "What Changes at One Hundred Units",
          columns: ["System", "Prototype Behavior", "Pilot Production Requirement"],
          rows: [
            ["Material planning", "Buy when needed and expedite shortages", "Time phased demand, purchase orders, shortage review, and controlled alternates"],
            ["Work instructions", "Engineer knowledge and build notes", "Released visual sequence with tools, limits, warnings, and reaction plans"],
            ["Quality", "Debug until the unit works", "Defined incoming, in process, and final acceptance with defect ownership"],
            ["Traceability", "Notebook, file folder, or informal serial list", "Unit history connecting critical parts, software, calibration, tests, and deviations"],
            ["Training", "Core team builds everything", "Qualified operators can complete work consistently and call for help at defined points"],
            ["Supplier management", "One successful delivery", "Repeat delivery, change notice, quality response, capacity, and commercial terms"],
            ["Service feedback", "Engineering handles every issue", "Field failures return to product, supplier, and process corrective action"],
          ],
          note: "Illustrative planning assumption for cost modeling: 18 direct labor hours per unit in the pilot cell. This is not a measured result.",
        },
      ],
    },
    {
      heading: "One Thousand Units Per Year Is a Capacity Problem",
      paragraphs: [
        "Capacity begins with demand and available production time. In the illustrative case, the plant plans one shift for 250 days per year with 420 net production minutes per day after breaks and planned meetings. One thousand accepted units therefore require an average takt time of 105 net minutes per unit. Takt is the demand pace, not the time required to build one rover.",
        "The assumed route contains 515 minutes of direct work across kitting, structure, mobility, electrical integration, enclosure, programming, calibration, final test, and packing. That work can be divided among stations operating in parallel. The longest assumed station is final test at 100 minutes, which fits inside the 105 minute takt on paper. The line would have theoretical capacity for 1,000 units only if availability, yield, staffing, supply, and changeovers were perfect.",
        "The planning model therefore targets about 1,190 attempted units before losses, then applies an illustrative 84 percent combined allowance for uptime, staffing variation, changeover, and accepted yield. That returns approximately 1,000 accepted units. This is arithmetic for teaching. A real capacity study would use measured cycle distributions, product mix, failure history, shift calendars, material availability, repair loops, maintenance, and simulation where interactions are complex.",
      ],
      visual: {
        src: "/article-images/rover-production-routing.svg",
        mobileSrc: "/article-images/rover-production-routing-mobile.svg",
        alt: "Production routing comparison for ten rover prototypes, one hundred pilot units, and capacity for one thousand units per year",
        caption:
          "The route becomes more controlled and parallel as volume grows. Times and capacity are illustrative planning assumptions, not measured performance. Original Black Scarab diagram.",
      },
      tables: [
        {
          title: "Illustrative Capacity Calculation for 1,000 Units",
          columns: ["Planning Input", "Assumption", "Calculation", "Meaning"],
          rows: [
            ["Net annual time", "250 days times 420 minutes", "105,000 minutes", "Available scheduled production time after planned nonproduction periods"],
            ["Required accepted output", "1,000 units", "105,000 divided by 1,000", "105 minutes of takt per accepted unit"],
            ["Longest station", "100 minutes", "100 is less than 105", "The proposed balance fits takt before losses"],
            ["Theoretical attempted output", "One unit every 105 minutes", "1,000 units", "No reserve exists if takt is used as the operating cycle"],
            ["Planning cycle", "One attempted unit every 88 minutes", "105,000 divided by 88", "Approximately 1,193 attempted units before losses"],
            ["Combined planning allowance", "84 percent accepted availability", "1,193 times 0.84", "Approximately 1,002 accepted units"],
          ],
          note: "The 84 percent factor is an explicit teaching assumption, not an industry benchmark. Availability and yield should be modeled separately with measured evidence in a real factory.",
        },
        {
          title: "Illustrative Parallel Station Balance",
          columns: ["Station", "Direct Work per Unit", "Main Resource", "Capacity Risk"],
          rows: [
            ["Kitting and identity", "35 minutes", "Material handler and controlled inventory", "Shortage, wrong revision, or unverified substitute"],
            ["Structure assembly", "75 minutes", "Fixture, torque tools, and assembler", "Datum shift, fit issue, or slow fastener access"],
            ["Mobility assembly", "60 minutes", "Assembly fixture and functional tester", "Alignment, encoder convention, or brake adjustment"],
            ["Electrical integration", "90 minutes", "Electrical bench and technician", "Harness routing, connector damage, or power fault"],
            ["Enclosure and perception", "45 minutes", "Alignment tools and clean handling", "Optical contamination, occlusion, or seal damage"],
            ["Software and calibration", "80 minutes", "Controlled station, target, and operator", "Network delay, wrong release, unstable fixture, or retry loop"],
            ["Final test", "100 minutes", "Test area, course, charger, and operator supervision", "Test congestion, false failure, repair return, or environmental variation"],
            ["Pack and release", "30 minutes", "Packaging cell and final audit", "Accessory, label, or battery shipment mismatch"],
          ],
          note: "Total assumed direct work is 515 minutes, or about 8.6 hours per unit. Parallel stations allow throughput to differ from total labor content.",
        },
      ],
    },
    {
      heading: "Cost Falls Only When the System Earns It",
      paragraphs: [
        "Higher volume can reduce purchased part prices, spread tooling and launch work, improve labor through fixtures and training, and lower rework through process control. It can also increase working capital, minimum order commitments, tooling exposure, field liability, and the cost of a design mistake. A lower quoted unit price does not guarantee a lower economic risk.",
        "The following model makes its assumptions visible. It is not a quote, forecast, target margin, or estimate for a real rover. Purchased materials, supplier fabrication, labor rates, labor hours, quality loss, packaging, and launch investment are invented teaching inputs. The purpose is to show how a manufacturing team should structure the calculation and which exclusions can make an attractive unit number misleading.",
        "Public component prices can anchor individual line items but cannot establish the finished bill. Raspberry Pi and Luxonis publish prices for selected compute and camera products. A manufacturer would still need the exact released variants, volume terms, carrier board, cables, thermal solution, duties, freight, inventory, incoming verification, integration, and lifecycle plan. Catalog price is evidence for one item on one date, not a product cost model.",
      ],
      tables: [
        {
          title: "Illustrative Unit Cost Model",
          columns: ["Cost Layer", "10 Prototypes", "100 Units", "1,000 Unit Capacity"],
          rows: [
            ["Purchased components and materials", "$4,800", "$3,600", "$2,850"],
            ["Outsourced fabrication and processing", "$1,500", "$900", "$650"],
            ["Direct labor", "$2,080 at 32 hours and $65 per hour", "$990 at 18 hours and $55 per hour", "$387 at 8.6 hours and $45 per hour"],
            ["Illustrative scrap and rework allowance", "$756", "$270", "$105"],
            ["Packaging and inbound or outbound handling", "$350", "$250", "$180"],
            ["Allocated development, tooling, fixtures, and launch", "$3,000", "$1,200", "$450"],
            ["Illustrative planning total", "$12,486", "$7,210", "$4,622"],
          ],
          note: "Invented teaching case in United States dollars. Excludes company overhead, software development, certification, capital financing, warranty, service, sales, general administration, taxes, profit, and the cost of inventory timing. It must not be used as a market price or investment forecast.",
        },
        {
          title: "Costs That a Bill of Materials Does Not Capture",
          columns: ["Cost", "Why It Matters"],
          rows: [
            ["Nonrecurring engineering", "Design, tooling, fixtures, programs, validation, supplier setup, and launch work occur before stable output"],
            ["Working capital", "Material is often paid for before the customer pays for the finished rover"],
            ["Minimum quantities", "The plant may buy more batteries, boards, connectors, packaging, or custom parts than near term demand consumes"],
            ["Quality loss", "Inspection, repair, scrap, containment, line interruption, returns, and corrective action consume real capacity"],
            ["Change exposure", "Inventory and tooling can become obsolete when the design changes"],
            ["Warranty and service", "Field diagnosis, replacement parts, shipping, software support, and customer downtime continue after release"],
            ["Capacity reserve", "A line planned at perfect utilization has no practical room for failures, training, demand variation, or maintenance"],
          ],
        },
      ],
    },
    {
      heading: "Quality Must Follow the Product Through the Route",
      paragraphs: [
        "Final inspection cannot economically discover every hidden defect. Quality gates should sit where information is cheapest and corrective action is still possible. A harness is tested before installation. Power polarity is checked before sensitive electronics are connected. Sensor visibility is confirmed before the enclosure closes. Software identity is captured before calibration. The final test then confirms the integrated configuration.",
        "IPC identifies separate expectations for printed boards, soldered assemblies, cable and wire harnesses, and design documentation. The correct standards and acceptance class depend on the actual product and contract. A startup should not copy a standard number into a drawing without understanding the requirements, supplier capability, inspection method, and commercial consequences.",
        "For an industrial mobile platform, safety and compliance planning starts during architecture. UL Solutions notes that automated mobile platform evaluation can involve fire, shock, energy hazards, batteries, object detection, functional safety, payloads, and product integration. The applicable requirements depend on the product, market, use environment, and jurisdiction. Buying a listed component does not automatically certify the integrated rover.",
      ],
      tables: [
        {
          title: "A Layered Rover Quality Plan",
          columns: ["Gate", "Typical Evidence", "Failure Response"],
          rows: [
            ["Supplier approval", "Capability review, sample, certificate scope, process evidence, commercial terms, and change notice agreement", "Approve, conditionally approve with controls, develop another source, or redesign"],
            ["Incoming control", "Identity, condition, quantity, certificate, sample measurement, or functional screen based on risk", "Quarantine the lot, notify supplier, contain affected inventory, and decide disposition"],
            ["In process assembly", "Fixture result, torque, continuity, polarity, clearance, image, software identity, and operator signoff", "Stop at the station, correct if authorized, record rework, and investigate recurrence"],
            ["Calibration", "Station status, reference artifact, environmental condition, calculated parameters, and limit result", "Prevent release, verify setup, repeat only under controlled rules, and retain original data"],
            ["Final acceptance", "Complete configuration, safety functions, operating mission, communications, charging, accessories, and audit", "Hold the unit and any suspect population until scope and cause are understood"],
            ["Field feedback", "Unit history, symptom, environment, logs, returned hardware, and corrective action", "Protect customers, contain affected configurations, correct product or process, and verify effectiveness"],
          ],
        },
      ],
    },
    {
      heading: "Change Control Prevents Invisible Products",
      paragraphs: [
        "A physical AI product changes in hardware, software, models, data, calibration, and suppliers. A new perception model can alter operating behavior without changing one screw. A replacement camera can fit the same bracket while changing optics, timing, firmware, thermal load, or calibration. A new battery cell can preserve voltage and capacity while changing safety evidence and thermal behavior.",
        "Every proposed change should identify the reason, affected items, compatibility, inventory disposition, tests required, documents updated, units receiving the change, and approval authority. The team also needs an effectivity rule: the change may begin at a named serial number, lot, work order, or service event. Without effectivity, the company knows the new design but not which product exists in the field.",
        "Configuration control does not mean refusing to learn. It means making learning traceable. Engineers should be able to run controlled experiments and urgent corrective changes. Production and service should then know exactly which approved result applies to each unit.",
      ],
      tables: [
        {
          title: "One Change, Seven Questions",
          columns: ["Question", "Required Answer"],
          rows: [
            ["Why change?", "Defect, cost, availability, performance, safety, compliance, service, or simplification"],
            ["What changes?", "Part, drawing, supplier, process, tool, software, model, calibration, label, test, or documentation"],
            ["What else is affected?", "Interfaces, inventory, fixtures, service parts, training, certifications, customer commitments, and data"],
            ["How is it verified and validated?", "Analysis, inspection, test, demonstration, regression coverage, and realistic use"],
            ["Who approves it?", "Named technical, quality, operations, safety, commercial, and release authorities as appropriate"],
            ["When does it begin?", "Defined serial, lot, order, date, software release, or retrofit campaign"],
            ["How is history preserved?", "Old and new baselines, decision record, results, deviations, and affected unit list"],
          ],
        },
      ],
    },
    {
      heading: "Physical AI Can Accelerate the Work Without Owning the Baseline",
      paragraphs: [
        "AI tools can help engineers compare requirements with drawings, summarize supplier documents, flag bill of materials gaps, generate draft work instructions, classify defects, search historical failures, propose inspection plans, and analyze cycle data. Vision models can support assembly verification. Simulation and generated test cases can expose interface assumptions before hardware is cut.",
        "The useful boundary is assistance with evidence and decisions, not unreviewed authority over the product. A generated work instruction may omit a safety step. A supplier match may confuse similar part numbers. A vision classifier may fail on a rare defect or new lighting condition. A language model may produce a plausible but nonexistent specification. Released manufacturing data still needs accountable owners, controlled sources, verification, permissions, and change history.",
        "Physical AI also changes the product being manufactured. The rover leaves the line with sensors, compute, models, software, and calibration that determine its actions. Manufacturing must therefore prove both physical construction and configured behavior. The product is not complete when the hardware looks right. It is complete when the approved hardware and software configuration performs safely within the intended operating boundary.",
      ],
      tables: [
        {
          title: "AI Assistance Across Product Realization",
          columns: ["Task", "Potential Use", "Required Control"],
          rows: [
            ["Design review", "Compare requirements, interfaces, drawings, and prior failures for missing questions", "Engineer review against controlled source data and real process capability"],
            ["Sourcing", "Normalize supplier descriptions and identify candidate alternates", "Exact manufacturer data, authorized source, qualification, and approved substitution"],
            ["Work instructions", "Create a first draft from models, routes, and build notes", "Operator trial, safety review, revision control, and verified images"],
            ["Quality inspection", "Detect visible presence, orientation, damage, or process patterns", "Representative data, controlled imaging, uncertainty handling, monitoring, and human escalation"],
            ["Production planning", "Explore line balances, shortages, schedules, and what if scenarios", "Validated inputs, transparent assumptions, constraint review, and controlled release to operations"],
            ["Failure analysis", "Connect logs, test data, unit history, and similar defects", "Data integrity, privacy, engineering diagnosis, and verification of corrective action"],
          ],
        },
      ],
    },
    {
      heading: "Seven Beginner Mistakes From Prototype to Production",
      paragraphs: [
        "The first mistake is treating the prototype bill as a production bill. Development boards, hand modified parts, substitute connectors, temporary cables, and engineer knowledge can prove a concept without defining a repeatable product. The second is ordering long lead material before interfaces and change exposure are understood.",
        "The third mistake is optimizing purchase price while ignoring tooling, freight, inspection, failures, inventory, and supplier response. The fourth is automating an unstable sequence. Automation repeats ambiguity quickly. The fifth is waiting until final test to discover hidden assembly defects.",
        "The sixth mistake is freezing hardware while allowing software, models, and calibration to change without equivalent configuration discipline. The seventh is confusing one hundred completed units with a capable process. Output becomes evidence only when the team knows the configuration, attempted quantity, accepted quantity, defect pattern, rework, cycle distribution, downtime, and field result.",
      ],
    },
    {
      heading: "Your Product Manufacturing Checkpoint",
      paragraphs: [
        "You should now be able to start with a product architecture, turn it into a controlled bill of materials, connect each item to a make or buy decision, and place every transformation on a production route. You should also be able to distinguish total labor content from takt, a catalog price from finished product cost, and a passing component from a validated integrated rover.",
        "The central idea is simple. A product becomes manufacturable when its design, supply chain, process, quality evidence, software, and change history describe the same approved thing. Volume does not create that discipline. Volume exposes whether it exists.",
      ],
      tables: [
        {
          title: "Five Questions You Should Now Be Able to Answer",
          columns: ["Question", "What a Good Answer Contains"],
          rows: [
            ["What exactly is the product?", "Requirements, product structure, revisions, software, calibration, labels, packaging, and accepted configuration"],
            ["What must be made and bought?", "Structured bill, approved sources, process ownership, interfaces, lead time, and qualification evidence"],
            ["How does one unit move through production?", "Ordered operations, resources, instructions, quality gates, records, repair loops, and release authority"],
            ["Can the route meet demand?", "Net time, takt, measured cycles, parallel work, constraint, availability, yield, staffing, material, and reserve"],
            ["How will the company know what changed?", "Controlled baseline, review, effectivity, validation, inventory decision, and unit history"],
          ],
        },
      ],
    },
    {
      heading: "Next in the Series",
      paragraphs: [
        "Part 4 will move beyond the rover and map the industrial ecosystem that makes production possible. We will separate equipment manufacturers, component suppliers, automation platforms, machine builders, distributors, systems integrators, contract manufacturers, engineering firms, contractors, and software providers.",
        "One robot machine tending cell will show who supplies the arm, tooling, safety, controls, vision, fixture, machine interface, programming, installation, acceptance, and ongoing service. The goal is to understand not only what a factory needs, but which kind of company is responsible for delivering each layer.",
      ],
    },
    {
      heading: "Research Method",
      paragraphs: [
        "This report uses NIST digital thread research for the connection among product design, manufacturing, measurement, and lifecycle information. NASA systems engineering guidance supplies the general distinctions among configuration management, product realization, verification, and validation. These practices are adapted as educational manufacturing principles and do not imply that the hypothetical rover follows a NASA program standard.",
        "IPC materials provide the electronics design, documentation, assembly, cable harness, and acceptance context. ASQ provides the definitions of takt time, cycle time, process capability, and standard work. UL Solutions provides general context on the safety evaluation topics that can apply to industrial automated mobile platforms.",
        "Raspberry Pi and Luxonis are representative public component examples. Their specifications, availability statements, and listed prices were accessed September 16, 2026. Maxon is included as a representative robotics motion supplier. No named company is claimed to supply the hypothetical rover, approve this architecture, or validate the illustrative production plan.",
        "Every rover specification, supplier choice, labor time, cost, yield, route, and capacity number in this report is an explicit hypothetical teaching assumption. The material is educational. A real product requires qualified engineering, safety, quality, compliance, cybersecurity, commercial, and legal review for its intended markets and use environments.",
      ],
    },
  ],
  sources: [
    "National Institute of Standards and Technology digital thread research",
    "NASA Systems Engineering Handbook product realization and configuration management guidance",
    "IPC electronics design and manufacturing standards resources",
    "American Society for Quality manufacturing definitions",
    "UL Solutions industrial automated mobile platform safety overview",
    "Current official product information from representative component suppliers",
    "Independent hardware manufacturing context from O'Reilly and MIT research",
  ],
  sourceLinks: [
    { label: "NIST digital thread for smart manufacturing", url: "https://www.nist.gov/programs-projects/digital-thread-smart-manufacturing" },
    { label: "NIST methodology for digital twins supported by the digital thread", url: "https://www.nist.gov/publications/methodology-digital-twins-product-lifecycle-supported-digital-thread" },
    { label: "NASA systems engineering fundamentals", url: "https://www.nasa.gov/reference/2-0-fundamentals-of-systems-engineering/" },
    { label: "NASA product realization guidance", url: "https://www.nasa.gov/reference/5-0-product-realization/" },
    { label: "NASA configuration management guidance", url: "https://www.nasa.gov/reference/6-5-configuration-management/" },
    { label: "NASA verification and validation appendix", url: "https://www.nasa.gov/reference/system-engineering-handbook-appendix/" },
    { label: "IPC design for manufacturing guidance", url: "https://www.ipc.org/design-manufacturing-confirmed-ipc-standards" },
    { label: "IPC electronics production checklist", url: "https://www.ipc.org/sites/default/files/documents/PCBA-Checklist_0.pdf" },
    { label: "IPC design standards", url: "https://www.ipc.org/ipc-design-standards" },
    { label: "IPC electronics manufacturing certifications", url: "https://www.ipc.org/ipc-certifications" },
    { label: "ASQ quality glossary", url: "https://asq.org/quality-resources/quality-glossary" },
    { label: "UL Solutions industrial automated mobile platform safety overview", url: "https://www.ul.com/resources/are-your-industrial-automated-mobile-robots-or-platforms-safe" },
    { label: "Raspberry Pi Compute Module 5", url: "https://www.raspberrypi.com/products/compute-module-5/" },
    { label: "Raspberry Pi Compute Module 5 product information", url: "https://pip.raspberrypi.com/categories/944-raspberry-pi-compute-module-5" },
    { label: "Luxonis OAK camera catalog", url: "https://new-store.luxonis.com/collections/oak-cameras-col" },
    { label: "Luxonis OAK D Short Range", url: "https://shop.luxonis.com/products/oak-d-sr" },
    { label: "Maxon robotics motion systems", url: "https://store-prd.maxongroup.com/en/market-solutions/mobility-solutions/robotics" },
    { label: "O'Reilly hardware startup manufacturing overview", url: "https://www.oreilly.com/content/hardware-startup-manufacturing/" },
    { label: "MIT research on electronics outsourcing and production transfer", url: "https://ipc.mit.edu/wp-content/uploads/2023/07/Exploring-the-Risks-of-Value-Chain-Modularity-Electronics-Outsourcing-During-the-Industry-Cycle-of-1992-2002.pdf" },
  ],
});
