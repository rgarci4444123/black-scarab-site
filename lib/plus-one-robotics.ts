import type { CaseStudyArticle } from "@/lib/case-studies";

const home = "https://www.plusonerobotics.com/";
const about = "https://www.plusonerobotics.com/about";
const pickOne = "https://www.plusonerobotics.com/pick-one";
const yonder = "https://www.plusonerobotics.com/human-in-the-loop";
const induction = "https://www.plusonerobotics.com/automated-parcel-induction";
const inductOne = "https://www.plusonerobotics.com/inductone";
const depalOne = "https://www.plusonerobotics.com/depalone";
const partners = "https://www.plusonerobotics.com/partners";
const aicc =
  "https://www.plusonerobotics.com/blog/from-human-in-the-loop-to-ai-in-the-loop-the-aicc-experiment";
const patents =
  "https://www.plusonerobotics.com/blog/10-patents-that-power-human-robot-collaboration-inside-plus-one-robotics-ip-milestone";
const fedex =
  "https://www.plusonerobotics.com/case-studies/fedex-automation-success";
const msc =
  "https://cdn.mscdirect.com/global/media/pdf/corporate/press-releases/20200304_plusone.pdf";
const funding =
  "https://techcrunch.com/2023/03/07/plusone-raises-50m-for-its-parcel-robotics-vision-systems/";
const depalLaunch =
  "https://www.prnewswire.com/news-releases/plus-one-robotics-officially-launches-depalone-a-scalable-plug-and-play-depalletizing-solution-302484529.html";
const yonderPatent =
  "https://patents.google.com/patent/US20200319627A1/en";
const ebook =
  "https://info.plusonerobotics.com/hubfs/White%20Papers/Plus%20One%20Robotics%20-%20The%20Key%20to%20Successful%20Automation%20Initiatives%20Ebook.pdf?hsLang=en";

export const plusOneRoboticsDeepDive = (): CaseStudyArticle => ({
  slug: "plus-one-robotics-supervised-autonomy-warehouse-automation-deep-dive",
  title:
    "Plus One Robotics Deep Dive: The Economics of Supervised Warehouse Autonomy",
  seoTitle:
    "Plus One Robotics: PickOne, Yonder, InductOne, DepalOne, Pricing and Economics",
  summary:
    "Inside Plus One Robotics and its supervised autonomy model: how PickOne sees parcels, how Yonder resolves exceptions, what InductOne and DepalOne sell, what the evidence establishes, and how buyers should calculate value.",
  publishedLabel: "Deep Dive · Published September 9, 2026",
  publishedDate: "2026-09-09",
  typeLabel: "Deep Dive",
  formatLabel: "Technology, deployment, and commercial analysis",
  industry: "Transportation & Logistics",
  image:
    "/article-images/plus-one-robotics-supervised-autonomy-deep-dive.png",
  imageAlt:
    "Original editorial illustration of two industrial robot arms sorting varied parcels while a human operator supervises the warehouse cell",
  seoDescription:
    "A detailed Plus One Robotics analysis covering PickOne vision, Yonder human supervision, InductOne, DepalOne pricing, customers, hardware, AI experiments, economics, and buyer diligence.",
  tags: [
    "Plus One Robotics",
    "PickOne",
    "Yonder",
    "InductOne",
    "DepalOne",
    "warehouse automation",
    "parcel induction",
    "depalletizing",
    "supervised autonomy",
    "human in the loop robotics",
  ],
  author: { name: "Rodolfo Garcia Calderoni, CFA", href: "/about" },
  sections: [
    {
      paragraphs: [
        "Warehouse robots do not fail only because they are too slow. They fail because the world arriving on the conveyor is messy. A crushed box hides an edge. Two mailers cling together. A label faces the wrong direction. The robot can perform thousands of ordinary picks, then lose valuable minutes on one scene that a person understands immediately.",
        "Plus One Robotics has built its company around that gap between autonomous performance and operational reality. PickOne provides machine vision and pick guidance. Yonder connects uncertain robots to remote human supervisors called Crew Chiefs. InductOne and DepalOne package those capabilities into complete cells for parcel induction and pallet handling.",
        "The important question is not whether a robot can pick a parcel in a demonstration. It is whether the complete system can preserve accepted throughput through variation, exceptions, staffing constraints, model changes, maintenance, and peak season. This report examines the technology, hardware, commercial evidence, pricing, deployment model, and buyer economics behind that proposition.",
      ],
    },
    {
      heading: "Executive View",
      paragraphs: [
        "Plus One represents a practical school of robotics. It does not require perfect autonomy before deployment. It combines local perception, deterministic industrial motion, remote human judgment, and production data so a difficult edge case does not have to become a long stop.",
        [
          "That architecture has meaningful evidence behind it. Plus One says its systems have completed more than 1.5 billion picks across 15 countries on its ",
          { text: "current website", href: home },
          ". A newer company engineering article describes nearly two billion picks. The figures are cumulative company claims rather than independently audited shipment or revenue measures, but they indicate a substantially larger operating history than a laboratory demonstration.",
        ],
        "The commercial thesis is strongest where parcel variability and labor scarcity make rigid automation expensive to support. The risk is that remote supervision, integration, and service remain hidden operating costs if buyers focus only on headline picks per hour. The buyer must evaluate the complete cell, the surrounding flow, and the frequency and duration of every exception.",
      ],
      tables: [
        {
          title: "Plus One Robotics at a Glance",
          columns: ["Dimension", "Evidence", "Buyer Implication"],
          rows: [
            [
              "Core product",
              "PickOne vision software and Yonder supervised autonomy support robot picking applications.",
              "Evaluate the combined workcell and support model, not the software in isolation.",
            ],
            [
              "Packaged systems",
              "InductOne addresses parcel induction. DepalOne addresses palletizing and depalletizing.",
              "Standardization may reduce integration time, but site interfaces still matter.",
            ],
            [
              "Operating scale",
              "The company reports more than 1.5 billion picks across 15 countries.",
              "Request customer specific uptime, quality, intervention, and maintenance evidence.",
            ],
            [
              "Public pricing",
              "DepalOne starts at $155,000. No public InductOne or Yonder rate card was found.",
              "Compare complete installed and recurring cost rather than entry price.",
            ],
            [
              "Commercial history",
              "Public deployments include FedEx and MSC Industrial Supply. The company reported more than 130 deployed robots in 2023.",
              "Confirm the current production reference that most closely matches the proposed task.",
            ],
            [
              "Strategic differentiation",
              "Remote humans resolve uncertain scenes and generate data for model improvement.",
              "The value depends on response time, intervention rate, staffing, and data governance.",
            ],
          ],
          note:
            "Sources: Plus One Robotics current product and company materials, MSC Industrial Supply, and TechCrunch. Company performance figures are identified as company claims.",
        },
      ],
    },
    {
      heading: "From ROS Industrial to Warehouse Production",
      paragraphs: [
        [
          "Plus One was founded in San Antonio in 2016 by robotics and computer vision specialists with roots in ROS Industrial. Its ",
          { text: "company history", href: about },
          " traces PickOne development to work by Shaun Edwards and Paul Hvass, followed by the release of PickOne 1.0 in 2018 and the first Yonder deployment in 2019.",
        ],
        "That lineage matters because the product sits between software and industrial machinery. A vision system can propose a grasp, but the robot controller, end effector, conveyor, scanner, safety system, and warehouse controls must convert it into a completed parcel movement. Open interfaces and integration experience are commercial assets when the customer already owns equipment from several vendors.",
        [
          "Plus One raised a $50 million Series C in 2023, bringing reported funding at the time to $94 million. ",
          { text: "TechCrunch reported", href: funding },
          " more than 130 deployed robots using the company's vision systems, plus additional software licenses independent of complete robot arms. Private company revenue, profitability, current valuation, and current installed unit count are not public.",
        ],
      ],
    },
    {
      heading: "What the Company Sells",
      paragraphs: [
        "Plus One now offers two commercial routes. A customer or systems integrator can embed PickOne into a robotic cell, or it can buy a more standardized system such as InductOne or DepalOne. The first route preserves hardware flexibility. The second can reduce design decisions and commissioning work.",
        "These routes create different obligations. A software deployment needs a clear compatibility matrix and an integrator responsible for the whole cell. A turnkey cell needs a precise definition of what turnkey includes, where the vendor boundary ends, and which facility changes remain the customer's responsibility.",
      ],
      tables: [
        {
          title: "The Product Stack",
          columns: ["Product", "Function", "Commercial Form"],
          rows: [
            [
              "PickOne",
              "Uses two dimensional and three dimensional perception to identify pickable items, estimate pick information, and communicate with the robot controller.",
              "Vision software and perception layer for partner or customer cells.",
            ],
            [
              "Yonder",
              "Routes uncertain scenes to remote Crew Chiefs who select an action or resolve an exception.",
              "Supervision software and service with cloud or on premises options described by the company.",
            ],
            [
              "InductOne",
              "Uses two robot arms to move mixed parcels into downstream sortation.",
              "Preengineered cell including robots, grippers, vision, conveyors, safety, installation, training, and support.",
            ],
            [
              "DepalOne",
              "Palletizes, depalletizes, or rebuilds pallets using tiered PickOne capability.",
              "Portable cell with cobot, industrial robot, or customized configuration.",
            ],
            [
              "ICC gripper",
              "Controls several vacuum cups to adapt the contact pattern to parcel geometry.",
              "Application specific end effector used in parcel handling configurations.",
            ],
          ],
          note:
            "Product descriptions are based on current Plus One Robotics pages. Exact inclusions, compatibility, and service terms require a project quotation.",
        },
      ],
    },
    {
      heading: "How a Pick Becomes Accepted Work",
      paragraphs: [
        [
          "The ",
          { text: "published induction workflow", href: induction },
          " begins when the PickOne Perception Kit captures the pick area. Two dimensional images provide appearance information, while depth data provides surface geometry. The software identifies candidate parcels, assigns confidence, and sends location data through its application programming interface to the robot controller.",
        ],
        "The robot does not create business value merely by touching a package. It must secure the parcel, move it without a collision or drop, place it within the downstream sorter's tolerance, and allow the barcode or routing system to continue the process. Plus One describes motion detection, place verification, double recovery, empty zone detection, and scan in flight functions around that broader outcome.",
        "This distinction explains why advertised robot speed and facility throughput often diverge. Infeed starvation, nonconveyable items, scanner performance, recirculation, blocked chutes, safety stops, maintenance, and downstream congestion can reduce accepted output even when the arm itself is fast.",
      ],
      tables: [
        {
          title: "From Scene to Accepted Parcel",
          columns: ["Layer", "Job", "Failure to Measure"],
          rows: [
            [
              "Infeed",
              "Present enough parcels inside a usable pick area.",
              "Robot waits, packages bridge, or unsuitable items enter the zone.",
            ],
            [
              "Perception",
              "Segment objects, estimate geometry, and score possible picks.",
              "Occlusion, glare, deformation, or weak confidence prevents a useful target.",
            ],
            [
              "Pick planning",
              "Choose an item, contact point, grip strategy, and motion request.",
              "The proposed pick is unstable, unreachable, or creates a poor next scene.",
            ],
            [
              "Robot and gripper",
              "Execute motion and retain the parcel.",
              "Vacuum loss, double pick, drop, collision, or cycle delay.",
            ],
            [
              "Placement",
              "Orient and release the parcel inside sorter tolerance.",
              "Bad angle, wrong spacing, unreadable label, or recirculation.",
            ],
            [
              "Verification",
              "Confirm that the completed movement is acceptable.",
              "A fast motion creates rework or a hidden downstream exception.",
            ],
          ],
          note:
            "Black Scarab functional interpretation of the published workflow. This is not a proprietary control diagram.",
        },
      ],
    },
    {
      heading: "Why Yonder Is More Than Teleoperation",
      paragraphs: [
        [
          "When no candidate exceeds the configured confidence threshold, PickOne can shuffle the pile and rescan or send a request through ",
          { text: "Yonder", href: yonder },
          ". A Crew Chief sees the scene and provides the selection needed to resume. The intent is not continuous manual driving. It is rapid, targeted judgment when the autonomous system reaches its boundary.",
        ],
        "That changes the economics of failure. Without remote support, a local worker may need to notice the stop, walk to the cell, understand the problem, and restart production. With Yonder, some perception problems can be resolved before that person would reach the machine. Physical faults still require local action.",
        [
          "The architecture also creates a data loop. Plus One's ",
          { text: "early Yonder patent family", href: yonderPatent },
          " describes remote selection information and automated learning from corrected picks. In commercial terms, every useful intervention can become both an operating recovery and a labeled example for future model improvement.",
        ],
        "The buyer should not treat that loop as free labor or unlimited learning. The contract must identify who supplies the Crew Chiefs, the covered hours, response commitments, concurrency assumptions, data ownership, permitted model training, retention, security, and behavior when the network or service is unavailable.",
      ],
    },
    {
      heading: "The AI Crew Chief Experiment",
      paragraphs: [
        [
          "In 2026, Plus One published an unusually useful negative result. Its ",
          { text: "AI Crew Chief in the Cloud experiment", href: aicc },
          " asked whether a cloud model could handle some Yonder requests without a person. Plus One worked with Google DeepMind and 66 Degrees on a system that combined Meta's Segment Anything Model 2 with Gemini reasoning.",
        ],
        "The team used 6,000 examples of human Crew Chief responses from production cells. Segmentation proposed parcel masks. Gemini selected the next object. The output used the same basic response format expected by PickOne, which allowed the experiment to target the supervision layer without replacing older hardware and software at each site.",
        "The result was not a victory lap. The model selected the same object as the human in fewer than 30 percent of validation examples under the comparison described by the company. Expert Crew Chiefs judged 80 percent of generated selections acceptable, while human first pass success exceeded 95 percent. Mean model timing ranged from three to seven seconds, with maximums as high as 22 seconds. The company concluded that current accuracy and timing did not support independent operation.",
        "Plus One is exploring the model as a prelabeler for human supervisors instead. That is strategically coherent. If AI shortens human decision time or filters routine exceptions without weakening quality, Yonder could supervise more robots per person while retaining human authority over ambiguous or rare events.",
      ],
      tables: [
        {
          title: "What the 2026 Experiment Actually Established",
          columns: ["Measure", "Reported Result", "Interpretation"],
          rows: [
            [
              "Training evidence",
              "6,000 production examples of Crew Chief solutions.",
              "The experiment used real difficult scenes rather than only a synthetic benchmark.",
            ],
            [
              "Exact selection similarity",
              "Below 30 percent under the reported matching comparison.",
              "The reasoning layer often chose a different parcel than the human.",
            ],
            [
              "Human judged acceptability",
              "80 percent of generated selections were judged acceptable.",
              "A different choice can still work, but acceptable is not identical to a completed production pick.",
            ],
            [
              "Human benchmark",
              "Crew Chiefs exceeded 95 percent first pass success.",
              "The human remained the stronger decision maker in the disclosed test.",
            ],
            [
              "Model timing",
              "Means from three to seven seconds, with maximums up to 22 seconds.",
              "Average speed was competitive, but tail latency can matter during production stops.",
            ],
            [
              "Current decision",
              "Do not allow independent model operation. Explore human prelabeling support.",
              "The near term product path is assisted supervision rather than replacing Crew Chiefs.",
            ],
          ],
          note:
            "Source: Plus One Robotics AICC engineering article. Results were reported by the company and were not independently reproduced by Black Scarab.",
        },
      ],
    },
    {
      heading: "InductOne and the Dual Arm Throughput Bet",
      paragraphs: [
        [
          "InductOne packages two robot arms, PickOne, Yonder, individual cup control grippers, vision sensors, conveyors, safety equipment, installation, training, analytics, and ongoing support. Plus One's ",
          { text: "current product page", href: inductOne },
          " reports sustained rates of 2,200 to 2,300 parcels per hour and a peak capability of 3,300. It specifies parcels up to 15 pounds and up to 27 by 19 by 17 inches.",
        ],
        "Two coordinated arms can increase productive motion inside a compact footprint, but a peak rate is not the same as a shift average. The relevant denominator is the time the cell is scheduled and available to work. Buyers should request sustained distributions across representative parcel mixes, not one best interval.",
        "The dual arm layout also raises coordination questions. The system must prevent arm conflicts, maintain clear pick zones, synchronize infeed and outfeed, and preserve safe access for recovery and maintenance. The engineering benefit is greater asset density. The tradeoff is a more interconnected cell whose performance depends on both arms and the flow around them.",
      ],
    },
    {
      heading: "DepalOne and the Move Toward Standard Products",
      paragraphs: [
        [
          "DepalOne is a portable palletizing and depalletizing cell developed with beRobox. The ",
          { text: "2025 launch announcement", href: depalLaunch },
          " described cobot, industrial robot, and custom configurations, with PickOne Lite, Core, and Pro tiers for increasingly variable work.",
        ],
        [
          "The ",
          { text: "current DepalOne page", href: depalOne },
          " lists a starting price of $155,000, typical throughput from 500 to 1,000 packages per hour, capacity up to 70 pounds, palletizing height up to 98 inches, and up to nine cycles per minute with two pallet locations. These are vendor specifications, not a guarantee for every item mix or facility.",
        ],
        "Tiering is commercially important. A simple box pallet should not carry the same perception burden as a mixed pallet with patterned bags, slip sheets, overhangs, and changing layers. Packaging capability into tiers can widen the market if customers can start with a bounded task and upgrade without replacing the rest of the cell.",
        "The unresolved question is how much of the promised rapid deployment survives the real facility. Floor condition, power, network access, guarding, pallet presentation, label workflow, upstream scheduling, downstream accumulation, and acceptance testing can still extend the project even when the cell itself is standardized.",
      ],
      tables: [
        {
          title: "Published DepalOne Tier Logic",
          columns: ["Tier", "Published Scope", "Buyer Test"],
          rows: [
            [
              "PickOne Lite",
              "Single item picking, simple boxes or bags, level layers, and up to 500 packages per hour.",
              "Test the simplest repeatable pallet family and all expected packaging changes.",
            ],
            [
              "PickOne Core",
              "Basic multipick, basic pallet and slip sheet detection, moderate patterns, and up to 650 packages per hour.",
              "Include real slip sheets, damaged pallets, patterns, and layer transitions.",
            ],
            [
              "PickOne Pro",
              "Advanced multipick, varied slip sheets, mixed layers, broader patterns, and up to 1,000 packages per hour.",
              "Measure difficult item coverage, exception rate, and accepted output across the full mix.",
            ],
          ],
          note:
            "Source: current DepalOne product page. Capability depends on the selected robot, tooling, item mix, layout, and acceptance method.",
        },
      ],
    },
    {
      heading: "Hardware, Partners, and Integration Ownership",
      paragraphs: [
        [
          "Plus One describes PickOne as compatible with major robot manufacturers. Its ",
          { text: "current partner page", href: partners },
          " names Honeywell, PSA Systems, EuroSort, Zebra Technologies, NPSG Global, Tompkins Robotics, Fameccanica, Yaskawa, and FANUC. A listed partnership supports commercial relevance, but it does not prove compatibility with every model, controller, firmware version, gripper, or application.",
        ],
        [
          "The public ",
          { text: "FedEx case study", href: fedex },
          " provides a clearer example. Yaskawa Motoman supplied robot arms, grippers, and integration for the initial Memphis deployment, while Plus One supplied three dimensional vision, artificial intelligence, and industrial computing. That allocation shows why buyers need a responsibility matrix covering the full cell.",
        ],
        "Plus One does not publish a complete current bill of materials for InductOne or every DepalOne configuration. Public pages also do not specify the processors, accelerators, memory, storage, power, thermal limits, or replacement policy inside its industrial compute layer. Those details should be obtained for cybersecurity, lifecycle, spare parts, and upgrade planning.",
      ],
      tables: [
        {
          title: "Hardware Diligence Beyond the Robot Arm",
          columns: ["Layer", "Questions to Resolve"],
          rows: [
            [
              "Robot and controller",
              "Exact model, payload at reach, controller option, firmware, interface license, duty cycle, and regional service.",
            ],
            [
              "Perception",
              "Camera model, field of view, lighting, calibration, contamination, occlusion, replacement, and data retention.",
            ],
            [
              "Compute",
              "Processor, accelerator, memory, storage, operating system, thermal margin, security updates, and spare strategy.",
            ],
            [
              "End effector",
              "Cup layout, vacuum generation, sensing, parcel surfaces, double picks, consumables, and change time.",
            ],
            [
              "Material flow",
              "Infeed, singulation, spacing, sorter tolerance, barcode visibility, nonconveyable path, accumulation, and recirculation.",
            ],
            [
              "Safety",
              "Risk assessment, guarding, scanners, stops, restart, remote action limits, lockout, and local recovery.",
            ],
            [
              "Service",
              "First response owner, remote access, parts, field support, restoration commitment, logs, and escalation across suppliers.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Commercial Evidence and What It Proves",
      paragraphs: [
        [
          "MSC Industrial Supply announced in 2020 that it had deployed a Plus One robotic packing system in Harrisburg and planned to expand across five major fulfillment centers. The ",
          { text: "MSC announcement", href: msc },
          " is useful because the customer itself described the deployment and expansion intent. It does not publish a complete return calculation, uptime history, or current network status.",
        ],
        "FedEx deployed four Yaskawa arms using Plus One technology at its Memphis hub in 2020. Plus One later described plans for additional deployments. The evidence establishes use inside a consequential parcel network, but public materials do not provide a current robot count, site by site output, intervention rate, or contract value.",
        "The cumulative pick count is the broadest scale signal. It shows exposure to real parcel variation and supports the data advantage behind PickOne and Yonder. It does not reveal how many picks required intervention, how quality was measured, how much fleet concentration exists, or how revenue scales with each pick.",
      ],
      tables: [
        {
          title: "Evidence Ladder",
          columns: ["Evidence", "What It Establishes", "What Remains Open"],
          rows: [
            [
              "MSC customer announcement",
              "A production packing deployment and stated expansion plan across five centers in 2020.",
              "Current footprint, realized economics, reliability, and renewal status.",
            ],
            [
              "FedEx Memphis deployment",
              "Four production robot arms using Plus One vision and Yaskawa integration.",
              "Current count, output, intervention, and return data.",
            ],
            [
              "More than 130 robots reported in 2023",
              "A meaningful installed base at the time of the Series C.",
              "Current installed base, active utilization, and customer concentration.",
            ],
            [
              "More than 1.5 billion cumulative picks",
              "Large aggregate operating exposure claimed by the company.",
              "Independent audit, quality definition, intervention rate, and economics per pick.",
            ],
            [
              "AICC production dataset",
              "Difficult real scenes are being reused for a new supervision model.",
              "Production improvement, product availability, and customer terms.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Business Model and Pricing",
      paragraphs: [
        "Plus One can earn value across software, complete cells, integration support, training, remote supervision, analytics, upgrades, and ongoing service. Public materials do not provide the revenue mix, gross margin, contract length, renewal rate, customer concentration, or Yonder pricing unit.",
        "DepalOne's $155,000 starting price is the clearest public benchmark. It is not a complete budget for every deployment. The buyer should separate the base cell, selected PickOne tier, robot, tooling, safety, conveyor interfaces, facility work, freight, installation, validation, training, spares, recurring software, Crew Chief service, and maintenance.",
        "InductOne includes more of the system in its published package, but a public price was not found. A quote should define sustained throughput conditions and the remedy if acceptance fails. It should also state whether Yonder is required, optional, included for a period, or priced by robot, request, shift, site, or service level.",
      ],
      tables: [
        {
          title: "The Complete Cost Basket",
          columns: ["Cost", "Include", "Why It Matters"],
          rows: [
            [
              "Base system",
              "Robot, controller, compute, cameras, gripper, conveyors, safety, and controls.",
              "Determines what the public starting price actually buys.",
            ],
            [
              "Software",
              "PickOne tier, licenses, analytics, upgrades, term, and transfer rights.",
              "Defines recurring commitment and expansion economics.",
            ],
            [
              "Supervision",
              "Yonder access, Crew Chief coverage, response target, concurrency, and overage.",
              "Converts exceptions into an operating service cost.",
            ],
            [
              "Integration",
              "Facility survey, controls, warehouse software, sortation, scanners, power, network, and commissioning.",
              "A standardized cell still connects to a specific building and process.",
            ],
            [
              "Validation",
              "Representative packages, peak tests, quality method, safety approval, and acceptance support.",
              "Separates a successful demonstration from an accepted production system.",
            ],
            [
              "Operations",
              "Maintenance, cups, filters, cleaning, spares, local recovery, remote support, and training refreshers.",
              "These costs continue after the cell goes live.",
            ],
          ],
        },
      ],
    },
    {
      heading: "An Illustrative Buyer Case",
      paragraphs: [
        "Consider Northline Distribution, a fictional operator unloading mixed cartons from pallets. The work creates ergonomic strain and requires variable staffing. Northline is evaluating a DepalOne class system for two shifts. This example is not a Plus One customer, quotation, or performance claim.",
        "Northline first measures accepted packages per paid hour, injuries and near misses, overtime, pallet waiting time, damaged goods, rework, local interventions, and downstream starvation. It then selects representative pallets, including leaning loads, patterned cartons, bags, slip sheets, damaged packaging, and items outside the proposed operating envelope.",
        "For a purely illustrative model, assume a complete installed investment of $220,000. That is higher than the published $155,000 starting price because it includes assumed facility integration, validation, training, and contingency. Assume $125,000 of annual labor, capacity, and safety related value, plus $38,000 of recurring software, service, maintenance, and operating cost. Annual net benefit would be $87,000 and simple payback about 2.53 years.",
        "If realized annual value is only $80,000 while recurring cost remains $38,000, annual net benefit falls to $42,000 and payback stretches to about 5.24 years. The robot has not changed. Utilization, residual supervision, process flow, and accepted output changed the investment case.",
        "Northline should not count redeployed labor as cash savings unless the financial benefit is real. If the same employees remain, value may come from avoiding overtime, filling vacancies, increasing accepted volume, reducing injury exposure, or moving people to work that changes revenue or service. Each benefit needs its own baseline and owner.",
      ],
      tables: [
        {
          title: "Illustrative Economics, Not Vendor Pricing",
          columns: ["Assumption", "Expected Case", "Lower Value Case"],
          rows: [
            ["Complete installed investment", "$220,000", "$220,000"],
            ["Annual gross operating value", "$125,000", "$80,000"],
            ["Annual recurring cost", "$38,000", "$38,000"],
            ["Annual net benefit", "$87,000", "$42,000"],
            ["Simple payback", "2.53 years", "5.24 years"],
          ],
          note:
            "Black Scarab hypothetical model. Excludes financing, tax, discounting, ramp time, residual value, and downtime outside the assumed benefit. Replace every assumption with a quotation and measured pilot results.",
        },
      ],
    },
    {
      heading: "What the Automation Ebook Adds",
      paragraphs: [
        [
          "The user supplied ",
          { text: "Plus One sponsored automation ebook", href: ebook },
          " is most useful as an implementation framework. Its nine contributors emphasize three conditions: quantify the business case, build the cross functional team early, and treat the automation supplier as a long term operating partner. Those ideas are broader than Plus One's product claims and fit the evidence from difficult warehouse deployments.",
        ],
        "The guide argues that a robot can appear to be the bottleneck when upstream or downstream flow prevents it from reaching expected throughput. It also recommends involving operations, maintenance, information technology, finance, sales, human resources, and affected workers before commissioning. These are practical controls against buying a technically impressive island of automation.",
        "The ebook includes an anecdote about four robots at an unnamed eastern United States warehouse where an employee recognition program allowed workers to name the machines. The facility was described as the best service building in the operator's network. Because the customer, measurement period, baseline, and causal evidence are not disclosed, the story should be treated as an illustrative company example rather than proof that the engagement program caused the result.",
        "The strongest lesson is that training cannot end at launch. Operators must understand normal production, immediate recovery, maintenance, escalation, and the limits of remote support. Managers need review intervals tied to throughput, quality, safety, interventions, downtime, and financial results.",
      ],
      tables: [
        {
          title: "Implementation Gates Before Scale",
          columns: ["Gate", "Evidence Required"],
          rows: [
            [
              "Business case",
              "Measured baseline, target outcome, complete cost, accountable owner, and sensitivity to utilization.",
            ],
            [
              "Cross functional design",
              "Operations, maintenance, information technology, finance, safety, human resources, and worker concerns resolved.",
            ],
            [
              "Technical acceptance",
              "Representative item mix, sustained accepted output, exception rate, recovery, quality, safety, and integration tests passed.",
            ],
            [
              "Operating readiness",
              "Trained operators, maintainers, supervisors, Crew Chief workflow, spares, logs, and escalation ownership.",
            ],
            [
              "Financial acceptance",
              "Actual labor, capacity, service, maintenance, and downtime results compared with the approved model.",
            ],
            [
              "Expansion",
              "The next cell can be deployed with less custom work while preserving performance and support quality.",
            ],
          ],
          note:
            "Black Scarab synthesis based partly on The Key to Successful Automation Initiatives, sponsored by Plus One Robotics and published by Mighty Guides in 2025.",
        },
      ],
    },
    {
      heading: "Benefits and the Conditions Behind Them",
      paragraphs: [
        "Supervised autonomy can improve resilience when the autonomous system handles ordinary parcels and a small shared team resolves ambiguous scenes. The benefit is strongest when remote resolution is faster than local response and intervention remains low enough that one Crew Chief can support several cells without a queue.",
        "A second advantage is learning from real exceptions. Difficult production scenes are expensive data. Yonder can capture the image, human decision, context, and outcome needed to prioritize model improvement. That advantage depends on disciplined labels, version control, customer permission, and evidence that updates improve the relevant fleet without breaking older hardware.",
        "Standardized cells can shorten the path from purchase to production. InductOne packages much of the induction stack. DepalOne narrows the application and offers capability tiers. The condition is that the standard configuration matches the customer's parcel mix and facility interfaces closely enough to avoid recreating a custom project around it.",
        "The workforce benefit is credible where robots remove repetitive lifting, awkward reaches, or unpleasant work and the organization has a plan for supervision, maintenance, quality, and advancement. It becomes a slogan if the new roles, training, staffing, and financial treatment are left undefined.",
      ],
    },
    {
      heading: "Alternatives and Competitive Pressure",
      paragraphs: [
        "The strongest alternative is often not another artificial intelligence vendor. A facility may improve parcel presentation, add inexpensive fixtures, change the conveyor, restrict the item set, or use conventional vision and robot programming. Structure can be cheaper than intelligence when the process can be redesigned.",
        "Other warehouse robotics suppliers offer integrated picking, induction, sorting, and depalletizing systems with different levels of vision, learning, remote support, and robot ownership. A fair comparison uses the same item mix, accepted output definition, shift profile, service coverage, building constraints, and contract horizon.",
        "Internal development can make sense for a very large operator with unique scale, proprietary data, robotics engineering, and a long product horizon. The organization then owns integration, model operations, on call support, cybersecurity, safety validation, and hardware lifecycle. That burden is exactly what a product supplier is meant to absorb.",
      ],
      tables: [
        {
          title: "Compare Approaches at the Process Level",
          columns: ["Approach", "Best Fit", "Tradeoff"],
          rows: [
            [
              "Process redesign",
              "Variation can be reduced with packaging rules, fixtures, spacing, or conveyor changes.",
              "May deliver better economics but can limit flexibility or require supplier cooperation.",
            ],
            [
              "Conventional automation",
              "Stable item geometry and predictable presentation.",
              "Lower intelligence burden, but exceptions may require more local engineering.",
            ],
            [
              "Plus One supervised autonomy",
              "High volume parcel work with bounded variation and measurable exceptions.",
              "Remote support and data loops add resilience but create service and network dependencies.",
            ],
            [
              "Alternative integrated cell",
              "Buyer wants one supplier accountable for a complete application.",
              "Compare true supported item coverage, acceptance, service, and expansion cost.",
            ],
            [
              "Internal robotics program",
              "Unique task, large repeatable scale, permanent engineering team, and strategic data value.",
              "The operator carries product development and lifetime support obligations.",
            ],
            [
              "Manual or assisted process",
              "Low utilization, extreme variability, or weak financial case.",
              "May remain economically superior despite lower headline automation.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Limitations and Open Questions",
      paragraphs: [
        "Public evidence does not reveal Plus One's revenue, profitability, customer concentration, current deployed robot count, renewal rate, or gross margin. The cumulative pick count is impressive but cannot answer those commercial questions.",
        "The company publishes strong headline performance specifications, but representative third party benchmarks for sustained throughput, first pass yield, intervention frequency, Crew Chief queue time, uptime, and total cost are limited. Buyers should request raw distributions and reference calls from comparable sites.",
        "AICC exposes a real lifecycle issue. Newer models may be difficult to install on older production hardware. A cloud supervision layer can extend fleet intelligence, but it introduces latency, network, cloud cost, data transfer, and availability questions. The buyer needs an explicit offline and degraded service mode.",
        "Remote intervention also creates safety and accountability questions. A human selection is not a replacement for the cell's independent risk controls. The contract and technical design must define which parameters a remote operator can influence, which actions remain prohibited, and how every intervention is logged and reviewed.",
      ],
    },
    {
      heading: "Buyer Diligence Checklist",
      paragraphs: [
        "The pilot should be designed backward from a production decision. Use real difficult parcels, define the acceptance method before testing, record every intervention, and agree on the commercial framework for expansion before the pilot becomes a success story without a scalable contract.",
      ],
      tables: [
        {
          title: "Questions to Answer Before Signing",
          columns: ["Area", "Evidence to Request"],
          rows: [
            [
              "Application",
              "Supported and unsupported items, presentation assumptions, nonconveyable path, peak mix, and change process.",
            ],
            [
              "Performance",
              "Sustained accepted output, first pass yield, drop rate, recirculation, intervention, uptime, and recovery distributions.",
            ],
            [
              "Yonder",
              "Covered hours, response time, queue behavior, concurrency, staffing, service location, security, and offline mode.",
            ],
            [
              "Hardware",
              "Complete bill of materials, lifecycle, environmental limits, spares, controller options, firmware, and replacement procedure.",
            ],
            [
              "Artificial intelligence",
              "Model release process, validation set, regression testing, rollback, compatibility, customer approval, and performance monitoring.",
            ],
            [
              "Data",
              "Images and telemetry collected, ownership, training rights, processing locations, retention, deletion, access, and export.",
            ],
            [
              "Cybersecurity",
              "Network architecture, remote access, identity, encryption, logging, updates, vulnerability response, and incident obligations.",
            ],
            [
              "Safety",
              "Risk assessment, remote action boundaries, guarding, emergency stops, restart, lockout, and local recovery.",
            ],
            [
              "Economics",
              "Complete one time and recurring price, staffing, utilization, maintenance, facilities, validation, training, and expansion terms.",
            ],
            [
              "References",
              "Current production customers with similar packages, throughput, shifts, facility constraints, and service requirements.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Who Should Evaluate Plus One Robotics",
      paragraphs: [
        "Plus One is a strong candidate for parcel carriers, ecommerce fulfillment operators, third party logistics providers, industrial distributors, and warehouses with repetitive pallet handling where variability creates costly exceptions. The buyer should have enough volume and operating hours to justify a cell and enough process discipline to measure accepted output.",
        "It is especially relevant when labor availability constrains throughput, workers face repetitive or awkward handling, a brownfield site limits new equipment, or the operator wants to preserve human judgment without stationing one person at every robot.",
        "It is a weaker fit when volume is intermittent, item variability is outside the supported envelope, upstream and downstream flow are unstable, the business cannot maintain industrial equipment, or a simpler process change solves the problem. Supervised autonomy cannot rescue a business case that begins with too little useful work.",
      ],
    },
    {
      heading: "Black Scarab Verdict",
      paragraphs: [
        "Plus One Robotics has chosen a commercially grounded answer to an uncomfortable truth: production autonomy is rarely perfect, and the last few difficult cases can dominate downtime. PickOne handles the repeatable perception problem. Yonder turns human judgment into an exception service and a source of training data. InductOne and DepalOne move the company toward products that buyers can evaluate as complete operating systems.",
        "The strongest strategic asset may be the combination of installed experience and corrected edge case data. The 2026 AICC experiment shows how that data could reduce the burden on human supervisors over time. It also shows welcome restraint. The company disclosed that the AI did not match human first pass performance and chose assistance over premature autonomy.",
        "The central commercial risk is that resilience can hide complexity. A cell may depend on robot hardware, cameras, compute, conveyors, controls, remote Crew Chiefs, cloud services, integrators, and local maintenance. Plus One wins when it makes those layers feel like one accountable product and when the next deployment needs less custom work than the last.",
        "Buyers should evaluate Plus One on accepted packages per paid hour, sustained across real shifts, with every intervention and operating cost included. The robot's fastest pick is interesting. The warehouse's dependable output is what pays the bill.",
      ],
    },
    {
      heading: "Research Method",
      paragraphs: [
        "This report uses current Plus One Robotics product, company, partner, patent, customer, pricing, and engineering materials; an MSC Industrial Supply announcement; independent funding reporting from TechCrunch; patent records; and The Key to Successful Automation Initiatives, a 2025 Mighty Guides ebook sponsored by Plus One Robotics and supplied by the user.",
        "Company claims are attributed. Public materials do not disclose audited financial statements, a complete installed base, a full current hardware bill of materials, Yonder pricing, customer concentration, or independently verified fleet performance. Those gaps are treated as diligence questions rather than filled with assumptions.",
        "The cover is an original Black Scarab editorial illustration. It represents the operating concept and is not an official Plus One Robotics product photograph or a proprietary machine design.",
      ],
    },
  ],
  sources: [
    "Plus One Robotics current product, company, partner, customer, patent, and engineering materials",
    "MSC Industrial Supply customer announcement",
    "Independent funding reporting",
    "The Key to Successful Automation Initiatives ebook",
  ],
  sourceLinks: [
    { label: "Plus One Robotics", url: home },
    { label: "Plus One Robotics company history", url: about },
    { label: "PickOne vision software", url: pickOne },
    { label: "Yonder supervised autonomy", url: yonder },
    { label: "Automated parcel induction workflow", url: induction },
    { label: "InductOne", url: inductOne },
    { label: "DepalOne", url: depalOne },
    { label: "Plus One Robotics partners", url: partners },
    { label: "AI Crew Chief in the Cloud experiment", url: aicc },
    { label: "Plus One Robotics patent overview", url: patents },
    { label: "Yonder patent family", url: yonderPatent },
    { label: "FedEx deployment case study", url: fedex },
    { label: "MSC Industrial Supply announcement", url: msc },
    { label: "DepalOne launch announcement", url: depalLaunch },
    { label: "Plus One Robotics Series C reporting", url: funding },
    { label: "The Key to Successful Automation Initiatives", url: ebook },
  ],
});
