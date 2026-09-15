import type { CaseStudyArticle } from "@/lib/case-studies";

export const manufacturingMachinesGuide = (): CaseStudyArticle => ({
  slug: "types-of-manufacturing-machines-factory-equipment-guide",
  title: "Types of Manufacturing Machines: A Beginner's Guide to Factory Equipment",
  seoTitle: "Types of Manufacturing Machines and Factory Equipment Explained",
  summary:
    "A visual machine atlas covering how factory equipment removes, forms, adds, molds, casts, joins, assembles, inspects, moves, and packages material.",
  publishedLabel: "Deep Dive · Published September 15, 2026",
  publishedDate: "2026-09-15",
  publishedAt: "2026-09-15T09:26:43-04:00",
  typeLabel: "Deep Dive",
  formatLabel: "Inside the Physical AI Factory · Part 2",
  industry: "Manufacturing",
  image: "/article-images/manufacturing-machines-guide-cover.png",
  imageAlt:
    "Editorial illustration of an aluminum inspection rover wheel hub secured in a CNC machining center",
  imageCaption:
    "Original Black Scarab editorial illustration of a rover wheel hub inside a CNC machining center. This is an editorial interpretation, not an official machine or product photograph.",
  seoDescription:
    "Learn the major types of manufacturing machines, what each one does, what it needs, how buyers compare equipment, and when outsourcing is smarter.",
  tags: [
    "manufacturing machines",
    "factory equipment",
    "industrial machinery",
    "CNC machines",
    "injection molding",
    "additive manufacturing",
    "industrial robots",
    "factory automation",
  ],
  author: {
    name: "Rodolfo Garcia Calderoni, CFA",
    href: "/about",
  },
  sections: [
    {
      paragraphs: [
        [
          "This is Part 2 of ",
          {
            text: "Inside the Physical AI Factory",
            href: "/insights/how-modern-manufacturing-works-factories-physical-ai-guide",
          },
          ". Part 1 taught us to read the factory as a system. Now we move inside the equipment that performs the physical work.",
        ],
        "A machine becomes easier to understand when you stop memorizing model names and ask one practical question: what action does it perform on the material? A saw separates. A mill removes. A press brake forms. A printer adds. A molding machine forces material into a tool. A welder joins. A coordinate measuring machine inspects. A conveyor moves. The commercial catalog is enormous, but the underlying actions are manageable.",
        "This guide organizes factory equipment by ten actions: remove, separate, form, add, mold, cast, join, assemble, inspect, move, and package. The categories overlap. A laser can separate sheet and prepare an edge. A robot can weld, assemble, inspect, or move parts depending on its tool and surrounding cell. The purpose of the atlas is not to force every machine into one box. It is to help a beginner identify the process, inputs, constraints, and missing pieces around it.",
        "We will keep following the hypothetical autonomous inspection rover introduced earlier. Its aluminum frame, wheel hubs, sheet metal enclosure, polymer covers, circuit boards, cable harnesses, sensors, fasteners, software, and packaging give each machine a real job. The example is illustrative. It does not represent the design, cost, supplier relationships, or production plan of a real product.",
      ],
      tables: [
        {
          title: "The Machine in One Sentence",
          columns: ["Receives", "Performs", "Returns"],
          rows: [
            [
              "Material, energy, tooling, instructions, and an operator or automated command",
              "A controlled physical action inside a defined operating envelope",
              "A changed, moved, measured, or packaged item plus data, heat, wear, waste, and risk",
            ],
          ],
        },
      ],
    },
    {
      heading: "Start With the Action, Not the Brand",
      paragraphs: [
        "Machine names often describe a mechanism, geometry, or market category rather than the manufacturing purpose. A vertical machining center and a five axis mill both remove material. A press brake and a stamping press both form sheet, but one bends along a controlled line while the other can shape or cut with dedicated tooling. An injection molding machine and a die casting machine both fill a tool, but the material, temperature, pressure, tooling, and safety conditions differ sharply.",
        "The action tells you what physical change to expect. The process tells you how that action is produced. The specific machine tells you the available work envelope, force, speed, accuracy, material compatibility, controls, and support model. Buyers who begin with the machine name can end up adapting the product to equipment they already chose. Buyers who begin with the required part and process can compare machines against an actual production need.",
      ],
      visual: {
        src: "/article-images/manufacturing-machine-taxonomy.svg",
        mobileSrc: "/article-images/manufacturing-machine-taxonomy-mobile.svg",
        alt: "Manufacturing machine taxonomy organized by ten physical actions",
        caption:
          "The machine atlas begins with the physical action performed on material. Original Black Scarab diagram.",
      },
      tables: [
        {
          title: "Ten Actions in the Machine Atlas",
          columns: ["Action", "What Changes", "Representative Equipment", "Rover Example"],
          rows: [
            ["Remove", "Material is cut away", "Lathes, mills, grinders, electrical discharge machines", "Wheel hubs, motor mounts, and shafts"],
            ["Separate", "Stock is divided or profiled", "Saws, shears, laser cutters, plasma cutters, waterjets", "Frame stock and enclosure blanks"],
            ["Form", "Material changes shape without being added", "Press brakes, stamping presses, rollers, forging presses", "Bent enclosure panels and brackets"],
            ["Add", "Material is deposited or fused", "Polymer and metal additive manufacturing systems", "Prototype fixtures, ducts, and early covers"],
            ["Mold", "Softened material fills a reusable tool", "Injection, compression, and blow molding machines", "Production polymer covers and seals"],
            ["Cast", "Liquid material solidifies in a mold or die", "Sand casting, investment casting, and die casting systems", "Potential high volume aluminum housings"],
            ["Join", "Separate items become one assembly", "Welders, adhesive dispensers, riveters, and brazing systems", "Frame joints, bonded seals, and harness terminals"],
            ["Assemble", "Components are positioned and secured", "Benches, presses, torque tools, feeders, and robot cells", "Motors, wheels, electronics, and sensors"],
            ["Inspect", "A requirement is measured or tested", "Gauges, vision systems, CMMs, electrical testers, and test stands", "Dimensions, wiring, calibration, and function"],
            ["Move and package", "Items change location or gain protection", "Cranes, forklifts, conveyors, mobile robots, fillers, sealers, and palletizers", "Kits, completed rovers, and shipment protection"],
          ],
        },
      ],
    },
    {
      heading: "Every Machine Has the Same Basic Questions",
      paragraphs: [
        "OSHA describes three fundamental machine areas: the point of operation, the power transmission apparatus, and the operating controls. That is a strong safety starting point. A production buyer must widen the view. The useful machine also includes structure, motion, tooling, workholding, material handling, utilities, software, guarding, maintenance access, and a method for proving the result.",
        "The point of operation is where the work happens. On a mill, it is where the cutter meets the part. On a press brake, it is where the punch forces sheet into a die. On a robot cell, it is where the end tool meets the product. Hazards and quality are concentrated at this interface because energy, motion, material, and human access meet there.",
        "A machine specification never describes the complete application. Travel does not guarantee that a part can be fixtured. Payload does not include every effect of tool weight, cable routing, reach, and center of gravity. Positioning repeatability does not guarantee finished part accuracy. The buyer must connect the machine specification with tooling, process capability, environment, inspection, and the actual product mix.",
      ],
      visual: {
        src: "/article-images/manufacturing-machine-anatomy.svg",
        mobileSrc: "/article-images/manufacturing-machine-anatomy-mobile.svg",
        alt: "Generic machine anatomy showing structure, motion, tool, workholding, controls, utilities, guarding, and outputs",
        caption:
          "A machine creates value only when its surrounding application is complete. Original Black Scarab diagram.",
      },
      tables: [
        {
          title: "The Machine Anatomy Checklist",
          columns: ["Element", "Question", "What Beginners Miss"],
          rows: [
            ["Structure and work envelope", "Can the machine support and reach the complete part and fixture?", "Door openings, access, floor loading, and maintenance clearance"],
            ["Motion and power", "What creates force, speed, heat, pressure, or movement?", "Peak demand, stored energy, braking, and heat rejection"],
            ["Tooling", "What actually touches or changes the material?", "Tool life, change time, sharpening, cleaning, and replacement inventory"],
            ["Workholding", "How is the part located, supported, and restrained?", "A capable machine can still make bad parts from a weak fixture"],
            ["Control and program", "How does the machine know what action to perform?", "Revisions, backups, permissions, recipes, and recovery after a fault"],
            ["Material interface", "How do parts and consumables enter and leave?", "Loading labor, chip removal, powder handling, scrap, and finished part cooling"],
            ["Safety", "How are people separated from hazardous motion and energy?", "Setup, clearing jams, maintenance, and foreseeable misuse"],
            ["Measurement", "How is the result verified?", "Calibration, sampling, environmental effects, and traceability"],
          ],
        },
      ],
    },
    {
      heading: "Removing Material With Mills, Lathes, Grinders, and EDM",
      paragraphs: [
        "Machining begins with more material than the final part needs. Cutting tools remove chips to create faces, pockets, holes, threads, and contours. A lathe rotates the workpiece while a tool cuts it, which suits shafts and other rotational geometry. A mill moves a rotating cutter relative to a fixed or repositioned workpiece. A machining center adds automatic tool changing and controlled axes so multiple operations can occur in one setup.",
        "Grinding uses abrasive grains to remove smaller amounts of material and improve geometry or surface finish. Electrical discharge machining removes electrically conductive material through controlled electrical discharges. Wire EDM can cut intricate profiles through a part. Sinker EDM can reproduce the shape of an electrode inside the workpiece. These processes can reach geometry or hardness conditions that frustrate conventional cutting, but they bring their own speed, electrode, fluid, and material constraints.",
        "Haas lists its VF 2 vertical machining center with three axes, 762 by 406 by 508 millimeters of travel, an 8,100 revolution per minute spindle, and a 20 tool capacity. The same page also lists compressed air, three phase electrical, coolant, shipping size, and weight. Those supporting specifications are not footnotes. They determine whether the machine can be installed and operated in the intended building.",
        "For the rover, a mill could produce low volume wheel hubs and sensor mounts from aluminum blanks. A lathe could produce shafts or spacers. The decisive variables are not merely whether the machine can cut aluminum. They include part envelope, tolerance, surface finish, setup time, tool access, workholding, inspection, operator capability, and demand. At ten prototypes, a qualified machine shop is usually more rational than buying a machining center. At recurring volume, ownership becomes a question of utilization, lead time, design confidentiality, learning speed, and total installed cost.",
      ],
      tables: [
        {
          title: "Machine Profile: CNC Machining Center",
          columns: ["Dimension", "Practical Answer"],
          rows: [
            ["Inputs and outputs", "Metal or machinable stock, a program, tools, fixtures, coolant, and inspection become a finished part, chips, heat, wear, and process data"],
            ["Capacity", "Part envelope, axis travel, spindle capability, tool capacity, setup time, cycle time, and available operating hours"],
            ["Accuracy", "Machine geometry, thermal condition, tooling, fixture, material, program, probing, and measurement method all contribute"],
            ["People and utilities", "Programming, setup, operation, inspection, maintenance, power, compressed air, coolant management, and chip handling"],
            ["Safety", "Enclosure, interlocks, guarding, eye protection, safe chip handling, and hazardous energy control during service"],
            ["Pricing evidence", "Public examples range from compact equipment to full industrial systems. Tormach lists an 1100MX base machine at $23,995 plus package options. Haas showed a configured VF 2 inventory machine at $60,995 sale and $81,080 retail when accessed September 15, 2026"],
            ["Buy versus outsource", "Buy when the process is stable, demand can support utilization, internal learning matters, and the organization can staff tooling, programming, inspection, and maintenance"],
          ],
        },
      ],
    },
    {
      heading: "Separating Stock With Saws, Shears, Lasers, Plasma, and Waterjets",
      paragraphs: [
        "Separation creates blanks or profiles for later operations. A band saw cuts bar, tube, and plate with a moving toothed blade. A shear separates sheet along a straight line. Laser and plasma systems use concentrated thermal energy. Waterjets use high pressure water, often with abrasive, to erode a path without creating the same heat affected zone as thermal cutting.",
        "The useful comparison includes more than maximum thickness. Material type, edge quality, kerf, heat input, cutting speed, piercing, nesting, consumables, fume or abrasive management, and downstream finishing all matter. A fast cutting process can still be expensive if the edge needs extensive cleanup or if sheets wait for the next bending operation.",
        "TRUMPF presents its TruLaser portfolio as systems for two dimensional and three dimensional laser cutting, with automation options for material storage and handling. The commercial lesson is that the cutting head is one part of a larger production system. Sheet loading, unloading, nesting software, assist gas, extraction, scrap removal, and downstream sorting can determine the labor and throughput of the cell.",
        "The rover enclosure could begin as a laser or waterjet cut sheet blank before bending. Frame tubes or bars could be sawed to length. Outsourcing is attractive when a supplier can spread expensive cutting equipment, gas, extraction, maintenance, and nesting expertise across many customers. Ownership becomes more attractive when recurring demand, short response time, sensitive designs, or synchronized downstream flow justify the complete cell.",
      ],
    },
    {
      heading: "Forming Material With Press Brakes, Stamping Presses, Rolls, and Forging",
      paragraphs: [
        "Forming changes geometry without adding or removing most of the material. A press brake bends sheet between a punch and die. A stamping press drives dedicated tooling through repeated strokes that may blank, pierce, bend, draw, or coin. Roll forming passes strip through successive rolls to build a continuous profile. Forging compresses material into shape and can improve grain flow for demanding parts.",
        "Force and stroke do not tell the whole story. Tool geometry, material strength, thickness variation, bend allowance, springback, lubrication, feeding, part support, and changeover affect the result. TRUMPF describes its TruBend Series 5000 with six axis backgauge options, automatic tool changing, and angle measurement that can compensate from measured springback. Those are vendor claims about available functions, not proof that every part will hold its required angle.",
        "The rover enclosure is a good press brake part when annual volume is modest and design revisions remain possible. Dedicated stamping tooling may become attractive only when stable geometry and repeated demand can repay the tool and press setup. A buyer should compare the whole route: cut blank, bend sequence, handling, inspection, surface treatment, and assembly. One fewer bend or a better locating feature in the product design can save more than a faster press.",
      ],
      tables: [
        {
          title: "Machine Profile: Press Brake or Stamping Press",
          columns: ["Dimension", "Practical Answer"],
          rows: [
            ["Inputs and outputs", "Sheet or strip, tooling, a program or die set, and handling become bent or stamped parts plus trim, heat, noise, and tool wear"],
            ["Capacity", "Tonnage, bed length, stroke, daylight, throat, feed system, strokes per minute, setup time, and part handling"],
            ["Accuracy", "Tool condition, material variation, springback, backgauge control, die alignment, and part support"],
            ["People and utilities", "Tool selection, setup, material handling, guarding, power, lubrication, and often lifting support"],
            ["Safety", "Point of operation protection, safeguarded controls, part handling, stored mechanical or hydraulic energy, and controlled setup"],
            ["Pricing evidence", "Industrial systems are commonly configured by force, length, controls, tooling, and automation and sold by quotation. A bare machine price would omit tooling, feeding, guarding, installation, and process development"],
            ["Buy versus outsource", "Outsource while geometry or volume changes. Buy when repeat demand, control of schedule, and the value of rapid process feedback justify tooling and operator capability"],
          ],
        },
      ],
    },
    {
      heading: "Adding Material With Industrial Three Dimensional Printing",
      paragraphs: [
        "Additive manufacturing builds a part from a digital model by placing or forming material layer by layer. Common families include material extrusion, vat photopolymerization, polymer powder bed fusion, metal laser powder bed fusion, binder jetting, and directed energy deposition. Each family has distinct feedstock, support, atmosphere, thermal, postprocessing, inspection, and qualification requirements.",
        "The printer is rarely the complete process. Resin parts may need washing and curing. Powder systems need controlled powder handling, depowdering, and recycling. Metal parts may need stress relief, support removal, machining, surface finishing, heat treatment, and nondestructive evaluation. NIST emphasizes material characterization, in process monitoring, machine and part qualification, and data integration because a completed build is not automatically an accepted part.",
        "Public pricing is more visible at the professional polymer end of the market. Formlabs listed the Form 4 starting at $2,625 and a complete package at $5,749 when accessed September 15, 2026. Its setup guidance separately identifies the printer, resin tank, build platform, mixer, cleaning tools, and postprocessing equipment. That difference between the printer and the usable workflow is exactly what buyers should notice.",
        "For the rover, additive manufacturing is strong for early fixtures, cable guides, sensor brackets, ducts, and prototype covers because it avoids dedicated tooling and supports rapid revision. It does not win automatically at higher volume. Build time, nesting, material price, labor, postprocessing, dimensional control, surface finish, and qualification must be compared with machining, molding, forming, or supplier production.",
      ],
      tables: [
        {
          title: "Machine Profile: Additive Manufacturing System",
          columns: ["Dimension", "Practical Answer"],
          rows: [
            ["Inputs and outputs", "A digital model, prepared build file, feedstock, energy, and process settings become a near net shape part plus supports, unused material, and process records"],
            ["Capacity", "Build volume, layer strategy, packing density, build and cooldown time, material changeover, and postprocessing capacity"],
            ["Accuracy", "Process family, orientation, shrinkage, thermal history, supports, feedstock, calibration, and finishing"],
            ["People and utilities", "Design preparation, material handling, ventilation or atmosphere controls, cleaning, curing, heat treatment, inspection, and maintenance"],
            ["Safety", "Resin, powder, laser, heat, inert gas, combustible dust, chemical exposure, and postprocessing hazards depend on the process"],
            ["Pricing evidence", "Professional polymer printers can publish prices in the low thousands, while industrial polymer and metal systems are usually quoted. Facility controls and postprocessing can materially exceed the apparent printer scope"],
            ["Buy versus outsource", "Buy for fast iteration, protected learning, and well utilized repeat work. Outsource when material qualification, rare processes, powder controls, or downstream finishing exceed internal capability"],
          ],
        },
      ],
    },
    {
      heading: "Molding and Casting Multiply the Tool",
      paragraphs: [
        "Molding and casting reverse the economics of many low volume methods. The machine cycle can become fast, but the reusable tool, process development, and supporting equipment require capital and time before the first accepted part. The same tool can then create many copies. That makes design stability and expected volume central to the decision.",
        "An injection molding machine plasticizes polymer, closes a mold with sufficient force, injects material, holds pressure, cools the part, opens the tool, and ejects the result. The cell may also need material drying, conveying, temperature control, a robot, trimming, scrap handling, inspection, and cavity traceability. ENGEL lists its all electric e mac family with 500 to 5,000 kilonewtons of clamping force and integrated control options for robots and peripherals. Pricing is quotation based because machine size, injection unit, mold, automation, and auxiliaries depend on the application.",
        "Casting fills a mold with liquid material. Sand casting uses a consumable mold and can support complex metal parts at varied volumes. Investment casting builds a ceramic shell around a pattern. Die casting injects molten metal into a reusable die under pressure. Bühler lists its Carat two platen die casting family with die locking forces from 10,500 to 92,000 kilonewtons for large structural components. Its productivity statements are vendor claims and should not be generalized to an unrelated part or plant.",
        "A molded rover cover may make sense once geometry is stable and recurring volume can absorb the mold, validation, color, texture, and change control. A cast housing or wheel component must compete with machining, fabrication, and purchased parts on total cost and risk. At ten or one hundred units, the tool may dominate. At sustained higher volume, unit labor and cycle time can shift the answer.",
      ],
      tables: [
        {
          title: "Machine Profile: Molding or Casting Cell",
          columns: ["Dimension", "Practical Answer"],
          rows: [
            ["Inputs and outputs", "Prepared polymer or metal, a qualified tool, heat, pressure, cooling, and handling become repeated near net shape parts plus runners, flash, rejected starts, and process data"],
            ["Capacity", "Clamp or locking force, shot capacity, cavity count, fill and cooling time, tool change, auxiliary capacity, and downstream handling"],
            ["Accuracy", "Tool design, temperature, pressure, material condition, shrinkage, venting, cooling balance, wear, and process stability"],
            ["People and utilities", "Tooling, process setup, material preparation, heating, cooling, extraction, handling, maintenance, and inspection"],
            ["Safety", "Hot material, pressure, pinch and crush zones, stored energy, fumes, moving platens, robots, and heavy tool changes"],
            ["Pricing evidence", "Major industrial suppliers generally require a configured quotation. The mold or die, auxiliaries, robot, cooling, utilities, installation, and launch scrap belong in the investment case"],
            ["Buy versus outsource", "Outsource until the product, material, volume, and tool ownership model are clear. Buy when proprietary process knowledge, utilization, quality control, or supply risk justify the complete capability"],
          ],
        },
      ],
    },
    {
      heading: "Joining With Heat, Pressure, Chemistry, and Fasteners",
      paragraphs: [
        "Joining can melt base material, add filler, deform a fastener, cure an adhesive, or combine several mechanisms. Arc welding, resistance welding, laser welding, brazing, soldering, riveting, crimping, fastening, and adhesive dispensing each create different joints and inspection needs. The best process begins with load, material, geometry, environment, service, repair, appearance, and production volume.",
        "A welding power source does not create a complete welding process by itself. The cell needs a torch or gun, wire or electrodes, shielding gas where applicable, fixtures, grounding, extraction, procedures, operator skill or robot programming, consumable control, and inspection. Lincoln Electric offers manual equipment and robotic welding systems, including functions such as touch sensing, path following, and vision based guidance. Those capabilities do not remove the need for a stable joint design, repeatable part location, fume control, and validated settings.",
        "OSHA identifies metal fumes, ultraviolet radiation, burns, eye damage, electrical shock, and material handling hazards in welding and cutting. Ventilation requirements depend on the process, material, space, and exposure. Safety planning must therefore begin before a robot or welder is selected. Automation can move a person away from the arc, but it also adds robot motion, maintenance access, fixtures, and stored energy.",
        "The rover may use welded frame members, crimped cable terminals, threaded fasteners, and bonded seals. The connection method should be visible in quality planning. Torque records do not prove a correct joint when the fastener, thread, surface, tool, or sequence is wrong. A cured adhesive may need surface preparation, controlled dispense, time, temperature, and verification that cannot be seen afterward.",
      ],
      tables: [
        {
          title: "Machine Profile: Welding or Joining Cell",
          columns: ["Dimension", "Practical Answer"],
          rows: [
            ["Inputs and outputs", "Prepared parts, filler or fasteners, energy, fixtures, and a procedure become a joined assembly plus heat, fumes, spatter, cure time, or recorded torque"],
            ["Capacity", "Joint length and count, deposition or fastening rate, fixture loading, cooling or cure time, changeover, and inspection"],
            ["Accuracy", "Part fit, fixture repeatability, tool path, process settings, surface preparation, consumables, and heat distortion"],
            ["People and utilities", "Qualified procedures, setup, programming, extraction, power, gas, consumables, inspection, and maintenance"],
            ["Safety", "Radiation, fumes, burns, fire, electrical energy, pressure, robot motion, pinch points, and chemical exposure"],
            ["Pricing evidence", "Manual equipment may have public prices, while engineered robotic cells are quotation based. The robot or power source is only one line in the cell cost"],
            ["Buy versus outsource", "Own frequent joints that support core product learning and stable fixtures. Outsource certified, hazardous, low utilization, or specialized joining until internal capability is justified"],
          ],
        },
      ],
    },
    {
      heading: "Assembly Machines Turn Parts Into a Product",
      paragraphs: [
        "Assembly equipment ranges from a shaped hand fixture to a fully automated line. Benches, lifts, presses, torque tools, dispensers, feeders, index tables, test fixtures, and robots can all belong to the same system. The goal is not maximum automation. It is a controlled sequence in which each component is correct, present, oriented, secured, and recorded.",
        "An industrial robot is a programmable motion platform. The application still needs an end tool, product fixture, material presentation, controller, safety functions, programs, cables, and recovery procedures. FANUC lists the LR Mate 200iD with a 7 kilogram payload, 717 millimeter reach, and pose repeatability of plus or minus 0.01 millimeter. Universal Robots lists the UR10e with 12.5 kilogram payload, 1,300 millimeter reach, and pose repeatability of plus or minus 0.05 millimeter under ISO 9283 conditions. These numbers describe different platforms and test conditions. They do not rank complete applications.",
        "Payload is not merely the part weight. It includes the end tool and must be evaluated with reach, orientation, acceleration, and center of gravity. Repeatability describes returning to commanded poses under defined conditions. It is not the same as absolute accuracy, process capability, or the tolerance of a completed assembly. A flexible operator with a good fixture may outperform a poorly engineered robot cell when the product changes frequently.",
        "For the rover, assembly starts with controlled benches, kitting, torque tools, cable aids, software loading, and functional fixtures. At higher volume, a robot may dispense adhesive, load a test stand, tend a machine, or handle a stable subassembly. The most valuable first automation is often the one that removes a measured constraint or quality failure, not the one that looks most advanced.",
      ],
      tables: [
        {
          title: "Machine Profile: Industrial Robot Assembly Cell",
          columns: ["Dimension", "Practical Answer"],
          rows: [
            ["Inputs and outputs", "Presented parts, programs, tools, fixtures, sensors, and commands become a handled, joined, tested, or inspected assembly"],
            ["Capacity", "Complete cell cycle, payload, reach, tool change, part presentation, fixture loading, fault rate, and recovery time"],
            ["Accuracy", "Robot repeatability, calibration, tool center point, fixture, sensing, compliance, product variation, and process physics"],
            ["People and utilities", "Application engineering, programming, safety validation, maintenance, power, air, networks, spares, and operator training"],
            ["Safety", "Risk assessment for the complete application, safeguarded space, safe motion functions, tools, parts, and human tasks"],
            ["Pricing evidence", "Robot manufacturers commonly quote configured systems. Installed cost must include the tool, fixture, guarding, sensors, controls, integration, validation, and startup"],
            ["Buy versus outsource", "Use an integrator when internal teams lack cell design, safety, controls, or acceptance experience. Build internally only when the organization can own the complete lifecycle"],
          ],
        },
      ],
    },
    {
      heading: "Inspection Machines Do Not Create Quality by Themselves",
      paragraphs: [
        "Inspection compares a physical result with a requirement. Hand gauges are fast and flexible for selected dimensions. Optical comparators and vision systems measure or classify visible features. Coordinate measuring machines move tactile or optical sensors through a defined measurement plan. Electrical testers, leak testers, dynamometers, and functional rigs measure whether a product behaves as intended.",
        "ZEISS lists its CONTURA coordinate measuring machine in several measuring volumes with tactile and optical sensor options, published accuracy from 1.4 plus L divided by 350 micrometers, and maximum workpiece weights from 730 to 1,200 kilograms depending on size. The same machine can produce poor decisions if the fixture, program, temperature, probe qualification, sampling plan, or response to failure is weak.",
        "KEYENCE describes a vision system as a combination of industrial cameras, lenses, lighting, and a controller. Lighting is part of the measurement, not decoration. A model cannot recover a feature the optical system never reveals reliably. Conventional vision tools are often best for stable edges, dimensions, presence, codes, and contrast. Learned methods can help with variable surfaces or patterns, but they need representative data, controlled imaging, acceptance thresholds, monitoring, and a safe response to uncertain cases.",
        "The rover needs dimensional checks on machined and formed parts, electrical continuity, correct software identity, sensor alignment, camera calibration, braking, communications, and a controlled operating test. No single inspection machine covers that route. Quality comes from connecting requirements, process controls, measurement, traceability, and corrective action.",
      ],
      tables: [
        {
          title: "Machine Profile: CMM or Vision Inspection System",
          columns: ["Dimension", "Practical Answer"],
          rows: [
            ["Inputs and outputs", "A controlled part, measurement plan, calibrated sensor, fixture, and environment become dimensional or visual results linked to a decision"],
            ["Capacity", "Loading, field or measuring volume, feature count, acquisition time, program time, reporting, sampling, and response to failures"],
            ["Accuracy", "Sensor, optics, lighting, fixture, calibration, environment, algorithm, uncertainty, and the definition of the requirement"],
            ["People and utilities", "Metrology or vision engineering, programming, calibration, controlled placement, clean air or environment where required, networks, and data ownership"],
            ["Safety", "Safe loading, probe and axis motion, lifting, electrical test energy, lasers or lighting, and controlled access to failed products"],
            ["Pricing evidence", "Industrial CMM and vision systems are commonly quoted around measuring volume, sensors, optics, software, fixtures, installation, calibration, training, and service"],
            ["Buy versus outsource", "Use an outside laboratory for rare, specialized, or independent measurements. Own frequent checks that guide daily process control and require rapid feedback"],
          ],
        },
      ],
    },
    {
      heading: "Moving and Packaging Equipment Control the Space Between Machines",
      paragraphs: [
        "Cranes and hoists lift. Forklifts and pallet trucks carry unit loads. Conveyors establish fixed paths. Automated storage systems hold and retrieve inventory. Automated guided vehicles follow defined guidance. Autonomous mobile robots plan routes within a mapped operating environment. Packaging machines fill, wrap, seal, label, case pack, and palletize. None of these processes changes the product design, but each can determine whether production reaches the customer safely and on time.",
        "Fixed conveyors can deliver high, predictable flow when origins, destinations, product geometry, and routes remain stable. Mobile equipment is more flexible but must manage traffic, charging, pickup, handoff, fleet control, and human interaction. MiR lists the MiR250 with a 250 kilogram payload, an 800 by 580 millimeter footprint, and speed up to 2 meters per second. Its own product page also makes the systems point explicit: top modules, charging, fleet software, and integration are needed around the mobile platform.",
        "Packaging must be designed as part of manufacturing. A sealer needs compatible material and process settings. A labeler needs correct data and placement. A palletizer needs stable cases, pallets, patterns, and load containment. The rover may need cushioning, moisture protection, battery handling, accessories, documentation, serialized configuration, and a package that can survive the chosen distribution route.",
      ],
      tables: [
        {
          title: "Machine Profile: Material Handling or Packaging System",
          columns: ["Dimension", "Practical Answer"],
          rows: [
            ["Inputs and outputs", "Defined loads, pickup points, destinations, packaging materials, routing rules, and commands become safely moved or protected products"],
            ["Capacity", "Load size and weight, rate, route, accumulation, availability, charging, changeover, and upstream and downstream balance"],
            ["Accuracy", "Positioning, docking, tracking, sensing, load stability, label placement, seal integrity, and data matching"],
            ["People and utilities", "Traffic design, floor and aisle conditions, charging or power, controls, maintenance, packaging replenishment, and recovery"],
            ["Safety", "Pedestrian interaction, falling loads, pinch points, traffic, fire risk, stored energy, and safe intervention"],
            ["Pricing evidence", "Conveyors, mobile robot fleets, automated storage, and packaging lines are application specific and usually quoted. Civil work, controls, interfaces, and operating changes can dominate the platform price"],
            ["Buy versus outsource", "Own frequent internal flow that supports the plant constraint. Outsource freight and specialized packaging tests when external networks and laboratories offer better capability"],
          ],
        },
      ],
    },
    {
      heading: "Capacity Is a System Result",
      paragraphs: [
        "A catalog cycle is not factory throughput. The complete cycle may include loading, clamping, sensing, processing, unloading, inspection, cleaning, tool changes, material replenishment, planned maintenance, faults, and changeovers. Some tasks happen while the machine runs. Others stop it. Capacity must be calculated for the product mix and operating pattern the plant will actually use.",
        "Accuracy, precision, and repeatability are not interchangeable. Accuracy concerns closeness to a reference. Repeatability concerns the spread of repeated results under defined conditions. A process can repeat the wrong dimension. ISO 230 provides test methods for machine tool positioning accuracy and repeatability. ISO 9283 defines robot performance criteria and related test methods. Acceptance still has to connect those machine measures with the finished product requirement.",
        "Thermal conditions matter. Machine structures, spindles, tools, workpieces, molds, and measurement systems change with temperature. ISO 230 notes that machine users are responsible for providing a suitable test environment under the supplier's thermal guidance or accepting reduced performance. A climate statement in a specification becomes a facility requirement when the tolerance depends on it.",
      ],
      tables: [
        {
          title: "A Better Capacity Calculation",
          columns: ["Question", "Why It Changes the Answer"],
          rows: [
            ["What is the complete cycle boundary?", "Prevents processing time from being mistaken for finished output"],
            ["How often does the product or tool change?", "Exposes setup and first piece approval time"],
            ["What work can overlap?", "Separates external preparation from machine stopping time"],
            ["What is the expected yield?", "Converts attempted cycles into acceptable output"],
            ["Which resource is the constraint?", "Prevents local machine speed from being confused with line throughput"],
            ["How is downtime restored?", "Makes maintenance, spares, troubleshooting, and response ownership visible"],
          ],
        },
      ],
    },
    {
      heading: "The Purchase Price Is the Smallest Useful Number",
      paragraphs: [
        "A machine quote is an entry point, not an investment total. Installed cost can include freight, duties, rigging, foundations, structural work, electrical distribution, compressed air, cooling, ventilation, fire protection, networks, guarding, tooling, fixtures, software, integration, programming, inspection equipment, training, spare parts, trial material, launch scrap, and the production time consumed during startup.",
        "Operating cost adds labor, energy, consumables, service, calibration, maintenance, tooling, software subscriptions, waste, downtime, insurance, floor space, inventory, and working capital. A lower purchase price can be the expensive choice when support is slow, changeovers are long, yield is weak, or the machine cannot hold the real process requirement.",
        "Public prices help establish scale but do not make unlike machines comparable. A Formlabs Form 4 package, a Tormach 1100MX, and a configured Haas VF 2 serve different materials, envelopes, production expectations, and support needs. Their published prices are evidence of individual offers at a point in time, not universal category prices.",
      ],
      visual: {
        src: "/article-images/manufacturing-machine-installed-cost.svg",
        mobileSrc: "/article-images/manufacturing-machine-installed-cost-mobile.svg",
        alt: "Installed machine cost waterfall from quoted equipment through startup and operating readiness",
        caption:
          "The machine becomes productive only after the surrounding system is funded and proven. Original Black Scarab diagram.",
      },
      tables: [
        {
          title: "From Quote to Operating Capability",
          columns: ["Cost Layer", "Typical Inclusions", "Evidence to Request"],
          rows: [
            ["Equipment", "Base machine, selected options, controller, standard documentation, and warranty", "Detailed configuration, exclusions, delivery terms, and option compatibility"],
            ["Process package", "Tooling, fixtures, molds, dies, end tools, recipes, programs, and consumables", "Sample part, process study, cycle assumptions, tool life, and acceptance criteria"],
            ["Site and installation", "Freight, rigging, foundation, power, air, water, cooling, extraction, network, and permits", "Layout, utility schedule, load data, environmental limits, and responsibility matrix"],
            ["Integration and safety", "Material handling, guarding, controls, interfaces, risk reduction, and validation", "Functional specification, risk assessment, software ownership, and test plan"],
            ["Launch and support", "Training, spares, trial material, inspection, runoff, startup labor, and early scrap", "Factory acceptance test, site acceptance test, support response, and handover records"],
          ],
        },
      ],
    },
    {
      heading: "Buy, Outsource, or Build a Hybrid Route",
      paragraphs: [
        "The right decision is rarely a philosophical preference for ownership or outsourcing. It is a comparison of capability, economics, speed, control, and risk. A supplier can spread specialized machines, operators, maintenance, compliance, and quality systems across many customers. An internal machine can shorten feedback, protect process knowledge, synchronize flow, and remove supplier lead time. Both can fail when the production requirement is unclear.",
        "The rover team should outsource most fabrication for the first ten prototypes while keeping design feedback, final assembly, software, calibration, and system test close to the product team. At the first one hundred units, it can add fixtures, controlled tools, inspection, and selective internal processes that solve known delays or quality problems. At capacity for one thousand units per year, it can evaluate dedicated equipment against measured annual demand, product mix, supplier performance, staffing, and the next likely design revision.",
        "A hybrid route is normal. A company may own final assembly and testing, outsource circuit board assembly and injection molding, keep one additive system for fixtures, and use local machine shops for low volume metal parts. The operating advantage comes from controlling the interfaces: drawings, revisions, acceptance, traceability, packaging, lead time, and corrective action.",
      ],
      tables: [
        {
          title: "The Buy Versus Outsource Test",
          columns: ["Question", "Evidence That Favors Ownership", "Evidence That Favors Outsourcing"],
          rows: [
            ["Is demand stable enough to use the asset?", "Recurring load across a known product mix", "Low, uncertain, seasonal, or highly varied demand"],
            ["Is the process strategically important?", "Rapid learning, protected methods, or direct influence on product performance", "Standard process available from qualified suppliers"],
            ["Can the company operate it well?", "Named owners for process, maintenance, safety, quality, and scheduling", "Capability would depend on one person or unbuilt support systems"],
            ["Does lead time constrain the business?", "Supplier delay repeatedly blocks development or customer delivery", "Supplier capacity and response meet the real requirement"],
            ["Is the complete economics case positive?", "Installed and operating cost beat qualified alternatives under realistic utilization", "Capital, working capital, risk, and support exceed the value of control"],
          ],
        },
      ],
    },
    {
      heading: "Where Physical AI Changes the Machine",
      paragraphs: [
        "Conventional machines execute programmed motion, logic, recipes, and process control. Physical AI becomes relevant when the system must perceive variation, interpret conditions, select an action, and affect the physical process. The difference is not whether the machine contains software. It is whether learned perception or planning changes what the machine does under real operating constraints.",
        "NIST machining research is developing methods that combine metrology, physical models, and artificial intelligence to monitor and predict machine performance in real time. Its additive manufacturing work studies high speed imaging, thermal measurements, feedback control, machine characterization, and data integration. These are serious measurement and control problems, not a promise that a general model can safely operate any machine from a text instruction.",
        "Near term uses include assisting with process planning, tool selection, program creation, anomaly detection, vision inspection, robot path generation, maintenance diagnosis, and setup guidance. The machine still needs deterministic controls, validated limits, guards, interlocks, safe states, and people who own exceptions. A recommendation system that proposes a cutting parameter is different from a controller that can create hazardous motion.",
        "The strongest applications connect intelligence with a measurable production problem. Can a vision system locate variable parts that defeated fixed fixturing? Can spindle monitoring identify tool wear early enough to prevent scrap? Can a robot recover from ordinary presentation variation without creating unsafe behavior? Can process data shorten the time to a stable first piece? If the answer cannot be measured in quality, rate, cost, delivery, safety, or learning time, the AI layer is still a demonstration rather than a production case.",
      ],
      tables: [
        {
          title: "From Fixed Machine to Adaptive System",
          columns: ["Layer", "Example", "Required Boundary"],
          rows: [
            ["Fixed execution", "Run a proven CNC program or press recipe", "Qualified program, controlled setup, and reliable machine logic"],
            ["Sensing", "Measure vibration, force, temperature, image, or position", "Calibrated sensors, known sampling, and trustworthy context"],
            ["Interpretation", "Detect wear, defect, drift, or an unusual condition", "Validated performance, uncertainty handling, and monitored data shift"],
            ["Decision support", "Recommend a tool, path, inspection, or maintenance action", "Human review, traceability, permissions, and rollback"],
            ["Adaptive action", "Adjust a path, force, speed, or handling plan", "Constrained authority, deterministic safety, verification, and safe fallback"],
          ],
        },
      ],
    },
    {
      heading: "Seven Beginner Mistakes When Buying Machines",
      paragraphs: [
        "The first mistake is buying for a maximum specification rather than the recurring product mix. The second is comparing machine prices without tooling, fixtures, utilities, integration, inspection, and startup. The third is treating repeatability as finished part accuracy.",
        "The fourth mistake is ignoring loading, unloading, cleaning, inspection, changeover, and recovery when calculating capacity. The fifth is assuming automation removes labor when it often changes labor into programming, replenishment, maintenance, troubleshooting, and supervision. The sixth is selecting equipment before assigning ownership for safety and service.",
        "The seventh mistake is buying a sophisticated process that the organization cannot yet stabilize. A simpler machine with accessible support, capable people, good fixtures, visible work, and disciplined maintenance can create more value than an advanced platform surrounded by unclear responsibility.",
      ],
    },
    {
      heading: "Your Machine Learning Checkpoint",
      paragraphs: [
        "You should now be able to enter a production area and identify the physical action before the brand. Find the point of operation. Identify the material, tool, fixture, energy, control, safety boundary, operator task, output, waste, and measurement. Then ask what limits acceptable output for the complete process.",
        "You should also be able to separate the machine from the application. A robot arm is not an assembly cell. A printer is not a qualified additive process. A press is not a formed part. A CMM is not a quality system. The useful asset is the complete operating capability, with people and evidence around it.",
      ],
      tables: [
        {
          title: "Five Questions to Ask Before Selecting Factory Equipment",
          columns: ["Question", "What a Good Answer Reveals"],
          rows: [
            ["What exact physical action and result are required?", "The process requirement rather than a preferred machine"],
            ["What complete product mix and production rate must it support?", "The real work envelope, capacity, and changeover burden"],
            ["What surrounds the machine?", "Tooling, fixtures, utilities, safety, handling, inspection, people, and data"],
            ["How will acceptance be proven?", "A measurable sample part, cycle, capability, safety, and handover plan"],
            ["Why should this capability be owned?", "The economic, strategic, delivery, quality, or learning case for capital"],
          ],
        },
      ],
    },
    {
      heading: "Next in the Series",
      paragraphs: [
        "Part 3 will turn the machine atlas into a production route. We will break the autonomous inspection rover into a bill of materials, decide which parts to buy or make, connect each part with a process and supplier, and compare how the route changes across ten prototypes, the first one hundred units, and capacity for one thousand units per year.",
        "The machines will stop being categories and become decisions. Every operation will need an input, output, owner, acceptance requirement, capacity assumption, and economic reason to exist inside the route.",
      ],
    },
    {
      heading: "Research Method",
      paragraphs: [
        "This report uses OSHA machine guarding, hazardous energy, and welding guidance for the general safety framework. ISO 230 and ISO 9283 identify current test methods for machine tool and robot performance. NIST machining and additive manufacturing programs provide the research basis for metrology, monitoring, qualification, and adaptive control.",
        "Haas, Tormach, TRUMPF, Formlabs, ENGEL, Bühler, Lincoln Electric, FANUC, Universal Robots, ZEISS, KEYENCE, Dematic, and Mobile Industrial Robots illustrate representative machine and system categories. Product specifications and prices are vendor supplied and were accessed September 15, 2026. They describe individual offers, not independent performance verification or category wide pricing.",
        "The rover components, volumes, process choices, and buy versus outsource examples are hypothetical teaching cases. They do not claim real product specifications, customers, supplier relationships, prices, shipment volumes, or performance results. Safety requirements vary by process, machine, application, material, facility, and jurisdiction. This guide is educational and does not replace a qualified risk assessment, engineering review, or legal compliance analysis.",
      ],
    },
  ],
  sources: [
    "United States Occupational Safety and Health Administration machine guarding and hazardous energy guidance",
    "National Institute of Standards and Technology machining and additive manufacturing research",
    "International Organization for Standardization machine tool and robot performance standards",
    "Current official product documentation from representative equipment suppliers",
  ],
  sourceLinks: [
    { label: "OSHA machine guarding general requirements", url: "https://www.osha.gov/etools/machine-guarding/introduction/general-requirements" },
    { label: "OSHA control of hazardous energy standard", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" },
    { label: "OSHA welding, cutting, and brazing hazards", url: "https://www.osha.gov/welding-cutting-brazing/hazards-solutions" },
    { label: "NIST machining research", url: "https://www.nist.gov/machining" },
    { label: "NIST measurement science for additive manufacturing", url: "https://www.nist.gov/programs-projects/measurement-science-additive-manufacturing-program" },
    { label: "NIST advanced machines, monitoring, and control for additive manufacturing", url: "https://www.nist.gov/programs-projects/advanced-machines-monitoring-and-control-additive-manufacturing" },
    { label: "ISO 230 machine tool positioning accuracy and repeatability", url: "https://www.iso.org/obp/ui/#iso:std:iso:230:-2:ed-4:v1:en" },
    { label: "ISO 9283 industrial robot performance criteria", url: "https://www.iso.org/standard/22244.html" },
    { label: "Haas VF 2 vertical machining center", url: "https://www.haascnc.com/machines/vertical-mills/vf-series/models/small/vf-2.html" },
    { label: "Haas available inventory pricing", url: "https://www.haascnc.com/shop/category/inventory.haascnc.haascnc.html" },
    { label: "Tormach 1100MX education configuration and pricing", url: "https://cnc.tormach.com/education" },
    { label: "TRUMPF TruBend Series 5000", url: "https://www.trumpf.com/en_US/products/machines-systems/bending-machines/trubend-series-5000/" },
    { label: "TRUMPF laser cutting machines", url: "https://www.trumpf.com/en_US/products/machines-systems/laser-cutting-machines/" },
    { label: "Formlabs Form 4 comparison and pricing", url: "https://formlabs.com/compare/form-4-vs-bambu-lab-x1/" },
    { label: "Formlabs Form 4 setup and workflow", url: "https://formlabs.com/support/Receiving-and-unboxing-your-Form-4-generation-printer/" },
    { label: "ENGEL e mac injection molding machine", url: "https://www.engelglobal.com/en/us/products/injection-molding-machines/small-injection-molding-machine" },
    { label: "Bühler Carat die casting machine", url: "https://www.buhlergroup.com/global/en/products/carat_die-castingmachine.html" },
    { label: "Lincoln Electric robotic welding system", url: "https://www.lincolnelectric.com.cn/en/automation/robot-welding-system" },
    { label: "FANUC LR Mate 200iD", url: "https://www.fanucamerica.com/products/robots/series/lr-mate/lr-mate-200id" },
    { label: "Universal Robots UR10e technical specifications", url: "https://www.universal-robots.com/manuals/EN/HTML/SW5_19/Content/prod-usr-man/complianceUR10e/H_g5_sections/appendix_g5/tech_spec_sheet.htm" },
    { label: "ZEISS CONTURA coordinate measuring machine", url: "https://www.zeiss.com/metrology/en/systems/cmms/bridge-type-cmms/contura.html" },
    { label: "KEYENCE machine vision basics", url: "https://www.keyence.com/ss/products/vision/visionbasics/" },
    { label: "Dematic manufacturing logistics", url: "https://www.dematic.com/content/dam/dematic/downloads/brochures/NA_BR-1124_Manufacturing_Logistics.pdf" },
    { label: "Mobile Industrial Robots MiR250", url: "https://mobile-industrial-robots.com/products/robots/mir250" },
  ],
});
