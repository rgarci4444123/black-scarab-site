import type { CaseStudyArticle } from "@/lib/case-studies";

const iq = "https://www.palladyneai.com/products/ai-software/palladyne-iq-ai-robot/";
const brochure = "https://www.palladyneai.com/download/Palladyne_IQ_brochure.pdf";
const filing = "https://www.sec.gov/Archives/edgar/data/1826681/000119312526336656/pdyn-20260630.htm";
const fanuc = "https://www.palladyneai.com/press-releases/palladyne-ai-and-fanuc-america-announce-strategic-collaboration-to-advance-intelligent-robotic-automation/";
const q1 = "https://investor.palladyneai.com/static-files/6300b80f-3db3-4920-acca-c20af4f13f1a";
const airForce = "https://investor.palladyneai.com/node/9111/pdf";
const pilot = "https://www.palladyneai.com/products/ai-software/palladyne-pilot-ai-drones/";
const swarm = "https://www.palladyneai.com/products/ai-software/swarmos/";

export const palladyneAiDeepDive = (): CaseStudyArticle => ({
  slug: "palladyne-ai-edge-physical-ai-robotics-deep-dive",
  title: "Palladyne AI Deep Dive: Edge AI, Robot Software, Hardware, and Pricing",
  seoTitle: "Palladyne AI: Edge AI, Robotics, Hardware and Pricing",
  summary: "Inside Palladyne IQ, Pilot, and SwarmOS: how local robot intelligence works, which companies supply the hardware, what the FANUC collaboration changes, and how buyers should assess performance, cost, and deployment.",
  publishedLabel: "Deep Dive · Published September 8, 2026",
  publishedDate: "2026-09-08",
  typeLabel: "Deep Dive",
  formatLabel: "Edge architecture, hardware, and commercial analysis",
  industry: "Industrial Robotics",
  image: "/article-images/palladyne-ai-edge-physical-ai-deep-dive.png",
  imageAlt: "Original editorial illustration of an industrial robot, stereo camera, and local edge computer working together on a curved metal component",
  seoDescription: "Explore Palladyne AI's edge robotics software, IQ architecture, hardware suppliers, FANUC partnership, Pilot, SwarmOS, customers, pricing, and deployment economics.",
  tags: ["Palladyne AI", "Palladyne IQ", "edge AI", "physical AI", "industrial robot software", "FANUC", "Palladyne Pilot", "SwarmOS"],
  author: { name: "Rodolfo Garcia Calderoni, CFA", href: "/about" },
  sections: [
    {
      paragraphs: [
        "A robot arm can repeat a motion thousands of times and still struggle when the next part arrives a few centimeters away from where it was expected. The difficult part of automation is often the space between a precise machine and an imperfect workplace. Palladyne AI is trying to build a business in that space.",
        "Its industrial software, Palladyne IQ, adds perception, task learning, and adaptive decisions to robots made by other manufacturers. The central idea is that a machine should use its sensors to adjust its work locally, without sending every operational decision to a remote server. The mechanical arm remains valuable. The software aims to make it useful across more variation.",
        "This deep dive examines that proposition from the inside out: the edge computer, controller interfaces, cameras, tools, learning workflow, commercial evidence, and economics. It also explains how the company's aerial products relate to its industrial platform. The practical question throughout is whether the intelligence produces more accepted work with less engineering and supervision.",
      ],
      links: [{ label: "Palladyne AI and FANUC news report", href: "/news/palladyne-ai-fanuc-industrial-robots-physical-ai", description: "The announcement that prompted this closer examination of Palladyne's technology and business." }],
    },
    {
      heading: "Executive View",
      paragraphs: [
        "Palladyne is most interesting where the robot is capable but programming, changing parts, or difficult process conditions prevent economical automation. A successful implementation could preserve existing machinery while reducing the work required to teach and maintain useful behavior.",
        "The distinction between technical feasibility and repeatability matters. A demonstration establishes that a task can work under particular conditions. A factory needs the same result across shifts, operators, batches, worn tools, and maintenance events. The strongest commercial evidence will be a second installation that needs substantially less engineering than the first.",
      ],
      tables: [{
        title: "Palladyne AI at a Glance",
        columns: ["Dimension", "Position", "Buyer Implication"],
        rows: [
          ["Industrial software", "Palladyne IQ provides adaptive robot autonomy at the edge.", "Evaluate a complete workcell and its output."],
          ["Aerial software", "Pilot and SwarmOS address perception and coordination across mobile platforms.", "These are distinct products and integration programs."],
          ["Hardware relationship", "IQ uses third party robots, sensors, and tools.", "Compatibility must be established for the exact configuration."],
          ["Commercial evidence", "An initial commercial IQ 2.0 deployment was reported in May 2026.", "Deployment activity does not establish fleet scale or published customer returns."],
          ["FANUC relationship", "A strategic collaboration was announced on September 8, 2026.", "A partnership is a route to productization, not a universal availability guarantee."],
          ["Pricing", "No public IQ rate card was found in the materials reviewed.", "Obtain a project quotation with hardware and services separated."],
        ],
        note: "Sources: Palladyne product pages, May 2026 results, and the September 2026 FANUC announcement. Analysis current as of September 8, 2026.",
      }],
    },
    {
      heading: "The Company Behind the Software",
      paragraphs: [
        ["Palladyne's current business extends beyond industrial autonomy. Its ", { text: "June 2026 quarterly filing", href: filing }, " records the November 2025 acquisitions of GuideTech, Warnke Precision Machining, and MKR Fabrication. These added avionics, engineering, and manufacturing capabilities."],
        "That broader portfolio changes how the company should be evaluated. A manufacturer buying IQ primarily needs dependable software, robot integration, and ongoing service. Revenue from another division can support the organization, but it does not demonstrate that the industrial software has achieved broad adoption.",
        "The strategic opportunity is to reuse autonomy expertise across physical systems while building practical delivery capacity. The organizational challenge is maintaining focus across businesses with very different development schedules, customers, hardware obligations, and support needs.",
      ],
    },
    {
      heading: "What Palladyne IQ Actually Does",
      paragraphs: [
        ["Palladyne describes IQ as a system that combines sensing, learning, reasoning, and action. Its ", { text: "product documentation", href: iq }, " identifies a local Control Interface Module, validated sensors and end effectors, and an optional demonstration and teleoperation package. A cloud portal supports training and maintenance, but is not required for autonomous operation."],
        "Consider a finishing task. The system must determine where the workpiece is, relate that position to the robot, select a workable tool path, execute the motion, and observe the result. If the part differs from the expected geometry, useful adaptation means changing the action within the process limits. Simply recognizing the object does not finish the part.",
        "This makes the product more demanding than a camera application. Perception, motion, tool behavior, and process quality must agree. A correct visual classification can still produce a poor result if calibration is wrong, the tool is worn, or the part moves during contact. The quality of the connections between those functions matters as much as the model itself.",
      ],
    },
    {
      heading: "The Edge Architecture",
      paragraphs: [
        "Edge AI places computation near the machine that needs the answer. The practical advantage is removing a wide area network trip from time sensitive decisions. Local processing can also reduce the amount of raw production imagery sent outside the facility. It does not eliminate internal networking, storage, software maintenance, or hardware failure.",
        "The architecture below is Black Scarab's functional interpretation of the published product description, not a proprietary schematic. It distinguishes task decisions from the controller that executes motion. A planner deciding where a tool should move and a drive maintaining motor current operate at different levels and on different timing budgets.",
        "A useful engineering review measures the full interval from sensor capture to a meaningful machine response. Camera exposure, image transfer, perception, planning, command delivery, and controller execution all contribute. A fast inference number alone cannot establish the response time of the workcell.",
      ],
      tables: [{
        title: "From Observation to Physical Work",
        columns: ["Layer", "Role", "Connection to the Next Layer"],
        rows: [
          ["Sensors", "Observe the part, workspace, and relevant process state.", "Deliver time aligned measurements to local processing."],
          ["Perception", "Estimate objects and geometry from observations.", "Supply a representation in coordinates the robot can use."],
          ["Task logic and planning", "Choose an action consistent with the learned task and constraints.", "Send motion requests through the supported robot interface."],
          ["Robot controller", "Execute the requested motion within its configured control system.", "Coordinate drives and return machine state."],
          ["Tool and workpiece", "Turn motion into gripping, finishing, inspection, or other useful work.", "Create a result that must be observed and checked."],
          ["Process verification", "Determine whether the completed work meets acceptance criteria.", "Continue, retry within limits, or involve an operator."],
        ],
        note: "Functional interpretation. This table does not specify Palladyne's proprietary algorithms, control frequencies, or certified safety architecture.",
      }],
    },
    {
      heading: "The Hardware Basket and Its Suppliers",
      paragraphs: [
        "The software lives inside a physical integration. Payload, reach, camera placement, tool access, vibration, cable routing, and maintenance access can decide whether the application succeeds before model performance becomes the limiting factor.",
        ["Palladyne's ", { text: "2025 IQ brochure", href: brochure }, " provides a concrete compatibility snapshot. It should be treated as a dated starting point, not a complete IQ 2.0 support matrix. The exact robot, controller generation, firmware, options, and accessories need confirmation for a new installation."],
      ],
      tables: [{
        title: "Published Compatibility Snapshot",
        columns: ["Component", "Named Companies or Products", "Practical Check"],
        rows: [
          ["Robot", "FANUC M710iC and other listed arms; ABB IRB 1300; Universal Robots UR10e and UR20", "Confirm the complete model and payload configuration."],
          ["Controller interface", "FANUC J519 Motion Streaming; ABB EGM; Universal Robots External Control URCap", "Confirm licenses, versions, and integration responsibility."],
          ["Vision", "Luxonis OAK D Pro PoE FF", "Validate mounting, calibration, and visibility."],
          ["Electric grippers", "Robotiq 2F 85; Schunk EGU", "Check grasp, surface damage, and tool load."],
          ["Vacuum tooling", "Gimatic; Schmalz", "Check sealing and part retention."],
          ["Tool changing", "TripleA Robotics Wingman", "Include utilities and repeatability."],
          ["Communications", "Ethernet, Modbus, IO Link", "Verify interfaces across the full cell."],
        ],
        note: "Source: Palladyne IQ brochure, version 1.0, © 2025. Product names are abbreviated here; order codes and current compatibility require supplier confirmation.",
      }],
    },
    {
      heading: "What Is Inside the Edge Computer?",
      paragraphs: [
        "The reviewed IQ materials identify the Control Interface Module but do not provide a complete public specification for its processor, accelerator, memory, storage, power consumption, or sustained thermal performance. Assigning a particular GPU to this system would be speculation.",
        "For a buyer, those missing details translate into practical questions. How many cameras and robots can one module support? What happens when logs fill the disk? Does performance change in a hot cabinet? Can the unit be replaced without repeating the entire calibration? How long are software updates available for the supplied hardware?",
        "Compute should be selected around the measured workload. A small, dependable system that keeps up with the application can be more valuable than a larger accelerator whose advertised throughput does not improve accepted output. The requirement is sustained performance with enough margin for the actual deployment, including logging and diagnostics.",
        "The local network also belongs in the hardware budget. A camera cable routed through a moving joint, an unreliable connector, or a crowded cabinet can undermine an otherwise capable software stack. Service access, electrical protection, and replacement procedures deserve the same attention as the computer specification.",
      ],
    },
    {
      heading: "Teaching the Robot and Managing Change",
      paragraphs: [
        "Palladyne says selected tasks can be learned from one to five demonstrations. Its interface uses action tiles, routines, objects, and scenes to organize behavior. These are company descriptions of the training workflow, not an independent guarantee of deployment time or generalization.",
        "Teaching a motion is only part of the work. An operator must also establish which objects are valid, how the task begins, what completion means, and which variations are acceptable. A good demonstration does not automatically describe every failure condition.",
        "Imagine teaching a robot to pick a metal bracket. A successful example with a clean, isolated part leaves unanswered what happens when two brackets overlap, a reflective surface confuses depth, or the gripper closes without securing the load. Those conditions belong in validation even when they are absent from the training demonstration.",
        "The deployment team should preserve a known working version of each routine and its configuration. Changes to a camera, fixture, tool, or learned behavior should be tested against representative previous cases. Otherwise, an improvement on the newest part can quietly degrade a task that already worked.",
      ],
    },
    {
      heading: "The FANUC Collaboration",
      paragraphs: [
        ["The ", { text: "September 8 announcement", href: fanuc }, " connects FANUC's industrial robot portfolio with Palladyne IQ. It describes work involving adaptive motion, teleoperation, human assisted learning, simulation, and model training for manufacturing and logistics. It does not publish a launch price, deployment count, or a finished joint product's availability date."],
        "The potential commercial advantage is repeatable delivery. An integrator needs a supported package, a predictable commissioning process, and a clear answer about who resolves faults. A close relationship between the robot manufacturer and software supplier can make those questions easier to answer.",
        "Existing technical compatibility and a new strategic collaboration are different milestones. Support for a particular interface demonstrates an integration path. A commercial program must add documentation, training, service ownership, application validation, and a buying process that customers can use repeatedly.",
        "The most revealing next announcement would identify a production application and its acceptance results. That would let buyers judge how much custom engineering remains, how the system handles exceptions, and whether the installation improves the economics of an actual line.",
      ],
    },
    {
      heading: "Customers, Programs, and the Evidence So Far",
      paragraphs: [
        ["In October 2024, Palladyne ", { text: "reported completion of Phase I", href: airForce }, " of its Warner Robins Air Logistics Complex program. The release described a contemplated four year effort valued at $13.8 million and continued integration and validation for aircraft component remediation, including media blasting. That program value should not be mistaken for a software license price or revenue already recognized."],
        ["Separately, the company's ", { text: "May 2026 results", href: q1 }, " reported that integration had begun for the first commercial IQ 2.0 customer. The disclosure is evidence of commercial activity, but it does not identify the customer or provide a public production scorecard."],
        "The useful evidence is therefore layered: a funded development program, reported commercial integration, and a new major robot collaboration. Together they justify a serious evaluation. They still leave questions about repeat installations, sustained uptime, intervention, and customer returns.",
      ],
      tables: [{
        title: "What Each Milestone Establishes",
        columns: ["Milestone", "Evidence", "What Remains Open"],
        rows: [
          ["Warner Robins program", "Company reported a completed development phase.", "Routine production output and independent operating metrics."],
          ["IQ 2.0 commercial integration", "Company reported initial customer deployment activity.", "Customer identity, installation scale, and results."],
          ["FANUC collaboration", "A defined relationship to develop industrial capabilities.", "Packaged availability and repeatable customer delivery."],
        ],
      }],
    },
    {
      heading: "Who the Industrial Platform Is For",
      paragraphs: [
        "The best prospect has a recurring process whose variations are expensive but understandable. The work should have a measurable output, enough demand to keep the robot productive, and a team capable of owning integration and maintenance. Automation becomes much easier to justify when it relieves a specific production bottleneck.",
        "Surface preparation is an informative example because the tool interacts with an imperfect physical object. Material handling offers another: the challenge may be inconsistent presentation rather than insufficient arm speed. In both cases, buyers should separate the value of adapting to variation from the value of simply installing a robot.",
      ],
      tables: [{
        title: "Potential Buyer Applications",
        columns: ["Buyer", "Application to Evaluate", "Success Measure"],
        rows: [
          ["Maintenance and repair operation", "Preparation or cleaning of varied components", "Accepted parts and reduced manual exposure."],
          ["Manufacturer with frequent changeovers", "Handling a bounded family of parts", "Changeover hours and interventions per batch."],
          ["Assembly operation", "Kitting and part presentation", "Correct kits delivered at the required rate."],
          ["Quality team", "Robot positioning for inspection", "Usable measurements and escaped defects."],
          ["Systems integrator", "A reusable adaptive workcell", "Engineering hours saved on subsequent installations."],
        ],
        note: "Application analysis, not a list of confirmed Palladyne customer deployments.",
      }],
    },
    {
      heading: "Pilot and SwarmOS: The Broader Edge Strategy",
      paragraphs: [
        ["Palladyne's ", { text: "Pilot platform", href: pilot }, " is designed for aerial perception, tracking, and collaboration. Its public description emphasizes local processing and sharing compact information between platforms rather than continuously exchanging raw video. The intended applications include monitoring, reconnaissance, and perimeter security."],
        ["The company describes ", { text: "SwarmOS", href: swarm }, " as software for decentralized coordination among different autonomous systems and sensors. Its proposed architecture combines locally extracted information into shared situational understanding, allowing platforms to adjust their roles as conditions change."],
        "The common engineering idea is distributing computation close to the sensors and machines. However, an industrial arm and an aircraft impose different timing, power, communications, and recovery constraints. Capability demonstrated in one product should not be assumed to transfer unchanged to another.",
        "Distributed operation also creates a distinction between acting locally and agreeing collectively. A platform may retain some local function when communications are interrupted, while the team's shared information becomes incomplete. Buyers need a precise description of behavior under degraded connectivity rather than treating edge operation as immunity to network failure.",
      ],
    },
    {
      heading: "Business Model and Commercial Maturity",
      paragraphs: [
        "An industrial autonomy supplier creates value through software access, application engineering, supported integrations, and continuing service. The contract determines how those elements are charged. Buyers should establish whether the license is tied to a robot, controller, workstation, site, or time period, and what happens when hardware is replaced.",
        ["Palladyne reported approximately $5.8 million in total second quarter 2026 revenue in its ", { text: "quarterly filing", href: filing }, ". The filing attributes product revenue mainly to acquired manufacturing and avionics businesses and also reports engineering and development revenue. The total cannot be used as a measure of IQ software sales. It estimates the IQ sales cycle at 12 to 18 months or longer."],
        "That length is consistent with the work involved in a consequential industrial purchase: process selection, technical assessment, budget approval, integration, and acceptance. It also means a promising pipeline can take considerable time to become recurring business.",
        "For the platform to scale efficiently, more of the next deployment needs to come from reusable tooling, configuration, documentation, and support practices. The key commercial indicator is not just more agreements. It is less bespoke effort per accepted installation while performance remains dependable.",
      ],
    },
    {
      heading: "How Much Does Palladyne IQ Cost?",
      paragraphs: [
        "There is no verified public price in the reviewed materials for an IQ license or a complete installed cell. A precise subscription figure would be invented. Government program values and consolidated company revenue do not provide a substitute price.",
        "The useful question is what the quotation includes. Two proposals can carry the same software price and very different total costs if one excludes cameras, controller options, commissioning, process tooling, travel, or ongoing support. The buyer should compare the same operating outcome across proposals.",
      ],
      tables: [{
        title: "The Complete Cost Basket",
        columns: ["Cost", "What to Include", "Why It Matters"],
        rows: [
          ["Software", "License unit, term, capabilities, updates, and transfer rights", "Determines recurring commitment and expansion cost."],
          ["Local hardware", "Compute module, cameras, networking, mounting, and spares", "Determines the actual installed configuration."],
          ["Robot integration", "Controller options, adapters, calibration, and commissioning", "Existing equipment may still need paid changes."],
          ["Process equipment", "Tool, fixtures, utilities, extraction, and consumables", "These produce the physical result."],
          ["Validation", "Representative testing, quality checks, and production acceptance", "A demonstration is not the completed project."],
          ["Operations", "Supervision, maintenance, cleaning, support, and recovery", "These costs continue after installation."],
        ],
      }],
    },
    {
      heading: "An Illustrative Buyer Case",
      paragraphs: [
        "Consider Harbor Components, a fictional repair shop with several families of metal housings. Manual surface preparation is a bottleneck. Management is evaluating whether a supported industrial arm and adaptive software can process a limited group of housings while technicians handle unusual parts and inspect the output. This is an example, not a Palladyne deployment or quotation.",
        "The first step is recording the current process: preparation time, accepted parts, rework, changeover effort, and operator involvement. The team then selects a part family with enough repeat work to justify a cell and enough variation to test the value of adaptive software.",
        "Next comes an equipment review. The arm must reach every required surface with the actual tool attached. Cameras must see useful geometry despite reflections and contamination. Fixtures must retain the part. The process engineer defines acceptable finishing quality and how it will be measured.",
        "A pilot should use representative parts that were not all used for training. The team records every assist, reset, rejected part, and maintenance interruption. A faster individual motion has no value if setup, inspection, or recovery makes the complete process slower.",
        "For a purely illustrative calculation, suppose the shop invests $120,000 in the complete installation and saves 1,800 paid hours each year at $45 per hour. That produces $81,000 in annual labor value. If annual software, service, and incremental operating costs total $30,000, the net annual benefit is $51,000 and simple payback is about 2.35 years.",
        "If realized savings are only 900 hours, annual labor value falls to $40,500. With the same $30,000 cost, net benefit falls to $10,500 and payback stretches to about 11.4 years. None of these figures is a Palladyne price or performance claim. The example shows why utilization and residual supervision can dominate the decision.",
        "The calculation also assumes saved hours become an actual financial benefit. If staff remain on payroll, the return may instead come from extra accepted output. In that case, use incremental contribution from sales the shop can really fulfill, and avoid counting the same labor capacity twice.",
      ],
      tables: [{
        title: "Illustrative Economics, Not Vendor Pricing",
        columns: ["Assumption", "Higher Utilization", "Lower Utilization"],
        rows: [
          ["Initial installed investment", "$120,000", "$120,000"],
          ["Annual hours saved", "1,800", "900"],
          ["Value per hour", "$45", "$45"],
          ["Annual gross benefit", "$81,000", "$40,500"],
          ["Annual incremental cost", "$30,000", "$30,000"],
          ["Annual net benefit", "$51,000", "$10,500"],
          ["Simple payback", "2.35 years", "11.4 years"],
        ],
        note: "Black Scarab hypothetical model. Excludes financing, tax, discounting, ramp time, and residual value. Replace every assumption with a quotation and measured pilot results.",
      }],
    },
    {
      heading: "Benefits and the Conditions Behind Them",
      paragraphs: [
        "The strongest potential benefit is keeping automation useful when production changes. A reusable behavior that handles a bounded range of part positions or shapes can reduce dependence on perfect presentation. Faster changeovers may make smaller batches economical.",
        "A second benefit is protecting the value of existing equipment. An installed arm with adequate payload, reach, and remaining service life may gain new tasks through software and tooling. The refurbishment, interface, and integration costs still need to be compared with buying a complete new cell.",
        "Local autonomy can also simplify operation where external connectivity is restricted or unreliable. Its business value comes from continuity and predictable response, not the edge label itself. The buyer should test the required workflow with the external connection unavailable.",
        "Finally, automating strenuous or unpleasant work can shift technicians toward setup, inspection, and exception handling. That benefit is strongest when the system does not repeatedly send people back into the same environment to recover from faults.",
      ],
    },
    {
      heading: "Competitive Positioning",
      paragraphs: [
        "The relevant comparison begins with the process, not a list of AI companies. A stable task with inexpensive fixtures may already be served well by conventional automation. A more variable task may justify additional perception and adaptive behavior. Some problems are best solved by changing how parts arrive at the station.",
        "For Palladyne, the competitive test is whether it reduces the combined burden of programming, changeovers, exceptions, and support. It does not have to be the broadest robot intelligence platform to win a valuable industrial task. It has to make that task work economically and repeatedly.",
      ],
      tables: [{
        title: "Compare the Available Approaches",
        columns: ["Approach", "Best Fit", "Tradeoff"],
        rows: [
          ["Conventional robot programming", "Stable geometry and repeated motions", "Variation can require more engineering or fixtures."],
          ["Specialist vision and motion package", "A clearly bounded handling or inspection problem", "Capability may be limited outside the selected application."],
          ["Palladyne IQ evaluation", "Variable work with a supported robot and measurable output", "Current compatibility, economics, and acceptance need validation."],
          ["General robot learning platform", "A team developing broad manipulation capability", "Research flexibility can bring substantial integration work."],
          ["Internal development", "Large scale with unique requirements and a permanent robotics team", "The owner carries maintenance and engineering obligations."],
          ["Manual process improvement", "Low utilization or highly exceptional work", "May offer better near term economics with less automation."],
        ],
      }],
      links: [
        { label: "FieldAI deep dive", href: "/insights/fieldai-edge-robot-foundation-model-industrial-autonomy-deep-dive", description: "A separate examination of mobile autonomy, hardware integration, and field deployment." },
        { label: "Persona AI deep dive", href: "/insights/persona-ai-industrial-humanoid-robot-welding-shipbuilding-deep-dive", description: "A different route to industrial work through a humanoid body and skilled task development." },
      ],
    },
    {
      heading: "Limitations and Production Questions",
      paragraphs: [
        "Public materials leave important gaps: the exact edge computer specification, a current complete support matrix, independently measured intervention rates, and detailed customer economics. These gaps should shape the evaluation rather than be filled with assumptions.",
        "A robot's operating boundary also needs to be explicit. Perception can become unreliable. Tools wear. Fixtures move. A useful system detects conditions it cannot handle and makes recovery understandable to the operator. Repeated retries that damage a part are not productive autonomy.",
        "The industrial buyer should establish responsibility across software, robot, tool, and integration suppliers. When a job fails, someone must be able to determine whether the cause is a model, calibration, machine fault, or process condition. Clear logs and a single escalation path can be more valuable than another advertised feature.",
      ],
      tables: [{
        title: "Evidence That Would Change the Buying Decision",
        columns: ["Question", "Useful Evidence"],
        rows: [
          ["Does it tolerate our variation?", "Accepted output across representative parts withheld from training."],
          ["How much assistance remains?", "All operator time, including loading, resets, inspection, and recovery."],
          ["Does local operation work as promised?", "Observed behavior during loss of external connectivity."],
          ["Can we support the equipment?", "Replacement procedures, spare availability, and current hardware specifications."],
          ["Can we repeat the installation?", "Engineering effort and acceptance results at a second station."],
          ["What changes after an update?", "Versioned configurations, regression results, and rollback procedure."],
        ],
      }],
    },
    {
      heading: "Black Scarab Verdict",
      paragraphs: [
        "Palladyne is addressing a commercially meaningful problem: making capable machines less dependent on perfectly arranged work. The edge architecture is well aligned with physical processes that need prompt local decisions, and the published hardware interfaces provide a more concrete starting point than a broad promise of robot intelligence.",
        "The commercial story is still developing. Initial customer integration and the FANUC collaboration are useful milestones, but the strongest proof will come from repeat installations, accepted output, reduced intervention, and an installation cost that improves as experience accumulates.",
        "For a buyer with a valuable, variable task and a supported robot, Palladyne belongs on the evaluation list. Start with one process, measure the entire workflow, and compare the result with the simplest credible alternative. The deciding metric is how much useful work the complete system delivers over time.",
      ],
    },
    {
      heading: "Research Method",
      paragraphs: [
        "Prepared September 8, 2026 from Palladyne product documentation, its dated IQ compatibility brochure, regulatory filings, and company announcements. Product claims and reported milestones are attributed. Technical interpretations, buyer recommendations, and the fictional economic example are Black Scarab analysis.",
        "This report does not claim an independent equipment test or unpublished customer access. The cover is an original AI generated editorial illustration of a representative workcell, not a photograph of a Palladyne product or installation.",
      ],
    },
  ],
  sources: ["Palladyne product and technical documentation", "Company disclosures and SEC filings", "Black Scarab engineering and buyer analysis"],
  sourceLinks: [
    { label: "Palladyne IQ product and architecture", url: iq },
    { label: "IQ compatibility brochure, version 1.0, 2025", url: brochure },
    { label: "FANUC collaboration, September 8, 2026", url: fanuc },
    { label: "First commercial IQ 2.0 integration, May 2026 results", url: q1 },
    { label: "Warner Robins Phase I announcement, October 2024", url: airForce },
    { label: "June 2026 quarterly SEC filing", url: filing },
    { label: "Palladyne Pilot product description", url: pilot },
    { label: "SwarmOS product description", url: swarm },
  ],
});
