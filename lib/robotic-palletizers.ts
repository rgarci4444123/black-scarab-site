import type { CaseStudyArticle } from "@/lib/case-studies";

export const roboticPalletizersDeepDive = (): CaseStudyArticle => ({
  slug: "best-robotic-palletizers",
  taxonomy: {
    primaryIndustry: "manufacturing",
    relevantIndustries: ["warehousing-logistics"],
    technologies: ["industrial-robotics", "collaborative-robotics", "manipulation"],
    applications: ["palletizing"],
  },
  title: "Best Robotic Palletizers in 2026: Top Systems Compared",
  seoTitle: "Best Robotic Palletizers in 2026: Top Systems Compared",
  summary: "Compare eight robotic palletizing systems for cartons, bags, heavy loads and cold storage, with practical guidance on payload, throughput, installed cost and payback.",
  seoDescription: "Compare the best robotic palletizers for 2026, including Robotiq, FANUC, ABB and more. Explore cobot systems, payload, cost, throughput and buying criteria.",
  publishedLabel: "Deep Dive · Published October 17, 2026",
  publishedDate: "2026-10-17",
  publishedAt: "2026-10-17T17:03:25.857454Z",
  typeLabel: "Deep Dive",
  formatLabel: "Systems, specifications and buying guide",
  industry: "Industrial Robotics",
  image: "/article-images/best-robotic-palletizers.png",
  imageAlt: "Screen print style editorial illustration of a robotic vacuum gripper lifting three cartons above a loaded pallet against a red background",
  imageCaption: "Original Black Scarab editorial illustration of robotic palletizing.",
  sourceLinksPlacement: "bottom",
  tags: ["robotic palletizers", "palletizing robots", "cobot palletizer", "palletizer cost", "packaging automation", "industrial robotics"],
  author: { name: "Rodolfo Garcia Calderoni, CFA", href: "/about" },
  sections: [
    {
      paragraphs: [
        "The best robotic palletizers in 2026 include Robotiq PAL Series and Vention Rapid Series for compact, configurable cells; Columbia/Okura miniPAL for integrated cobot palletizing; FANUC M-410 and ABB IRB 460 for industrial lines; Yaskawa PL190 for heavier loads and longer reach; KUKA KR QUANTEC PA Arctic for frozen products; and Premier Tech CHRONOS RPL systems for automated packaging lines.",
        "Choosing between them starts with the package leaving your conveyor. A small carton that arrives every ten seconds is a different automation problem from a heavy bag, a group of cases or a frozen load. The robot has to grip that package, carry it through the required path and build a stable pallet while the rest of the line keeps moving.",
        "A palletizer therefore earns its place through sustained output, straightforward recovery and manageable ownership cost. The arm is one part of that decision. The gripper, infeed, pallet exchange, software and service arrangement determine how much useful work the complete system delivers.",
      ],
    },
    {
      heading: "How we chose the best robotic palletizers",
      paragraphs: [
        "Black Scarab selected these eight options to cover distinct production needs, using current manufacturer specifications, product documentation and deployment accounts reviewed on October 17, 2026. The recommendations are our assessment of application fit. Performance figures are manufacturer ratings; this is a researched comparison rather than a hands on equipment test.",
        "Three suppliers package cobot cells around robot hardware, while FANUC, ABB, Yaskawa and KUKA supply industrial robots that become palletizers through integration. Premier Tech supplies complete packaging systems. That distinction matters when comparing proposals: a robot quotation and an installed cell quotation cover different work.",
        "Independent trade reporting provides context for that integration work. Packaging World's October 2025 report on Griffith Foods in Colombia describes a Robotiq PE10 and Universal Robots UR10e installation commissioned by IGPS in August 2024. Its account emphasizes product trials, simulation and operator training alongside the equipment.",
      ],
      callouts: [
        { title: "Compact carton lines", body: "Start with Robotiq, Vention and Columbia/Okura. Compare the complete cell against your cases, stack heights and pallet change routine." },
        { title: "Industrial loads and sustained volume", body: "Shortlist FANUC, ABB and Yaskawa with an integrator who can demonstrate the proposed gripper and material flow." },
        { title: "Special operating conditions", body: "Consider KUKA Arctic for deep freeze environments and Premier Tech when bag preparation, pallet handling and load exit belong in one project." },
      ],
    },
    {
      heading: "1. Robotiq PAL Series: Best starting point for compact carton palletizing",
      paragraphs: [
        "Robotiq is a strong first comparison for a manufacturer replacing repetitive manual carton stacking. Its PAL Series combines standard PE and AX configurations with software, grippers, infeed and safeguarding modules. PAL Ready is the assembled cell option. The distinction gives buyers a choice between a defined package and a more configurable installation.",
        "The currently linked PAL specification sheet lists the PE20 at 23 kg payload, up to 13 cycles per minute and 2,150 mm pallet height. The AX20 adds a vertical axis and lists 3,000 mm pallet height, 23 kg payload and up to 10 cycles per minute. These are configuration dependent ratings. The taller model is valuable when the top layer would otherwise fall outside the working envelope.",
        "Robotiq's RAIN case study describes a PE20 with a Universal Robots cobot handling 30 pound beverage cartons arriving at six per minute. The customer founder says two workers moved into other roles. That is a useful example of the commercial proposition: relieve repetitive lifting and put existing staff where the plant needs them.",
        "Our recommendation is to begin with the simplest PE configuration that reaches every required position, then consider AX when stack height justifies the additional mechanism. Send actual filled cartons for gripping trials. A vacuum tool needs to work with the board, seams and surface condition that arrive in production.",
      ],
    },
    {
      heading: "2. Vention Rapid Series: Best for a configurable automation package",
      paragraphs: [
        "Vention suits a buyer who wants to configure the palletizer alongside conveyors, tooling and operating software. Its Rapid Series 3.0 documentation identifies four basic arrangements: a Universal Robots UR20 or FANUC CRX-30iA, each on a fixed pedestal or telescopic column.",
        "Vention lists up to 13 picks per minute for the UR20 configuration and eight for the CRX configuration. Its published robot payload figures are 25 kg and 30 kg respectively. Usable product mass must be checked with the selected gripper. The tallest arrangement reaches a pallet height of 3,465 mm using a telescopic column and riser, which makes overhead clearance and stability important design inputs.",
        "The package includes the Palletizer MachineApp, a MachineMotion pendant and a first year operating bundle with support and analytics. Safety and pneumatic options change the configuration and price. Black Scarab would compare the complete bill of materials and recurring service terms, then test the actual recipe at the required stack height.",
        "The advantage is a common configuration and support environment for a broader automation project. The practical test is how easily your team can introduce another carton, recover a partial pallet and diagnose a stopped infeed after commissioning.",
      ],
    },
    {
      heading: "3. Columbia/Okura miniPAL: Best for integration support and a rental route",
      paragraphs: [
        "Columbia/Okura approaches cobot palletizing as an integration problem. Its miniPAL range combines the robot with tooling, pattern software and the surrounding cell. That makes it worth considering when the buyer wants one supplier to help connect the equipment to an existing packaging operation.",
        "The current miniPAL 20 specification sheet lists a combined payload of 25 kg and a rate of six to 28 cases per minute, dependent on pattern and picking multiple cases together. It identifies vacuum or clamp tooling, a Hytrol E24 infeed and Rocketfarm's Pally software. The upper rate requires the right handling arrangement; it is not 28 separate robot picks every minute.",
        "There is also a distinct US rental program for cases, with an initiation fee, a minimum three month commitment, deployment and basic training. Its published rental configuration lists a 44 pound load capacity and up to eight picks per minute. Evaluate that configuration on its own terms.",
        "For a manufacturer testing whether palletizing is its next useful automation project, rental can make operational learning part of the commercial decision. Compare the total rental commitment, conversion terms and support obligations against purchase. The strongest trial includes the operators who will run the cell after the supplier leaves.",
      ],
    },
    {
      heading: "4. FANUC M-410: Best for a custom industrial palletizing cell",
      paragraphs: [
        "FANUC's M-410 family belongs on the shortlist when the task calls for an industrial cell with substantial tooling, heavier loads or a customized layout. The M-410iC/110 is a four axis example with a rated 110 kg payload and 2,403 mm reach in FANUC's technical table. The page specifies the R-30iB Plus controller.",
        "That payload gives the integrator room to evaluate grouped cases and larger tools. The resulting capacity depends on tool mass, load distribution and the required motion. A 110 kg robot rating is not permission to put 110 kg of product on any gripper at any speed.",
        "FANUC's integrator route is especially relevant where the plant already supports its controllers and wants to reuse maintenance knowledge. Ask the cell builder to demonstrate the full sequence: product accumulation, picking, stacking, sheet placement where needed, pallet exchange and restart.",
        "Our preference for this route strengthens as the handling problem becomes more specialized. It also makes the integrator's execution central to the buying decision. A capable arm will spend its shift waiting if the conveyor cannot present the next group of cases or the finished pallet cannot leave.",
      ],
    },
    {
      heading: "5. ABB IRB 460: Best for a focused industrial bag palletizing proposal",
      paragraphs: [
        "ABB's IRB 460 is a compact four axis palletizing robot rated for 110 kg with 2.4 m reach. ABB publishes up to 2,190 cycles per hour with a 60 kg load and describes a bag handling combination using its FlexGripper Claw and RobotStudio Palletizing PowerPac.",
        "That combination makes ABB a useful comparison for bag handling projects where tooling and motion need to be developed together. RobotStudio supports offline layout and programming work, allowing the integrator to examine the planned installation before the production line is interrupted.",
        "Black Scarab would choose between ABB and a competing industrial system through the tested cell proposal, existing plant expertise and service coverage. Small differences between vendor cycle benchmarks should carry less weight than a demonstration with the actual bag and stack pattern.",
        "Bags change shape as their contents settle. The test should examine how the gripper supports the load, how the bag is prepared before pickup and whether the completed layers remain stable during transport. Nominal lifting capacity answers only part of that problem.",
      ],
    },
    {
      heading: "6. Yaskawa PL190: Best for heavier picks and a larger working envelope",
      paragraphs: [
        "The Yaskawa Motoman PL190 offers a different payload and reach combination: 190 kg and 3,159 mm, with four axes. Yaskawa describes an achievable stacking height above 2,600 mm and applications involving cartons, boxes and bags.",
        "The larger envelope is useful when the cell must reach several positions or carry a heavier tool and product group. It can also give a layout designer more freedom around the infeed and pallet locations. The simulation still needs to validate every corner and layer with the actual tool geometry.",
        "Our reason to shortlist the PL190 is the physical requirement. If a lighter, shorter robot already meets it comfortably, additional reach and capacity may add little value. When those limits constrain the layout, the PL190 gives the integrator a more capable starting point.",
        "Include foundation requirements, access for maintenance and protected working space in the proposal. A longer reach has consequences beyond the robot's base. It affects where people, pallet trucks and neighboring equipment can operate while the cell is running.",
      ],
    },
    {
      heading: "7. KUKA KR QUANTEC PA Arctic: Best for deep freeze palletizing",
      paragraphs: [
        "KUKA's KR QUANTEC PA Arctic is the most distinctive option in this comparison because its purpose is defined by the environment. KUKA specifies operation from minus 30°C to plus 10°C, with 3,195 mm reach and payload variants of 120, 180 and 240 kg. It describes operation without a protective suit or robot arm heater.",
        "For frozen food operations, that creates a concrete reason to evaluate a specialized palletizing robot. The application may keep product within a controlled cold chain while reducing the amount of repetitive work people perform in the freezer.",
        "The cold environment must be qualified across the entire cell. Gripper seals, vacuum performance, hoses, sensors, lubrication, packaging and condensation during temperature transitions can all affect operation. The arm's temperature rating does not qualify those components automatically.",
        "Black Scarab would request a cold environment acceptance test with the intended packaging and pallet pattern. Confirm the exact Arctic variant and controller arrangement in the quotation. The standard KR QUANTEC PA family and the Arctic configuration should remain distinct in the purchasing specification.",
      ],
    },
    {
      heading: "8. Premier Tech CHRONOS RPL: Best for a complete packaging line project",
      paragraphs: [
        "Premier Tech Systems and Automation is a useful starting point when the project includes bagging or case handling, pallet supply, slip sheets and finished load movement. Its CHRONOS RPL range addresses the complete flow around the robot.",
        "The RPL-4000 uses separate equipment for pallet and sheet handling so the arm can concentrate on stacking. Premier Tech publishes case rates from 20 to 80 per minute with multiple unit picks and bag rates up to 23 per minute. Its RPL-2000 instead uses the robot to handle pallets, sheets and product, trading a different equipment arrangement against the arm's available time.",
        "The company's Grain Millers case study describes an OML-1170-N bagger, RPL-4111-N palletizer and LSH-1100 stretch hooder installed as a line. Reported improvements belong to that combined process. It illustrates why a packaging supplier can be a better project lead when the bottleneck spans several machines.",
        "Our recommendation is to define acceptance at the finished load exit. Specify stable pallets ready for the next logistics step, including changeovers and replenishment. That encourages the supplier to optimize the complete line rather than only the robot's motion.",
      ],
    },
    {
      heading: "Industrial palletizing robot specifications",
      paragraphs: [
        "These four industrial models provide a useful dimensional comparison. Rated robot payload includes the load imposed by tooling and product. Reach describes the arm, while usable pallet height and floor space depend on the complete installation.",
      ],
      tables: [{
        title: "Payload and reach",
        columns: ["Robot model", "Rated payload", "Reach"],
        rows: [
          ["FANUC M-410iC/110", "110 kg", "2,403 mm"],
          ["ABB IRB 460", "110 kg", "2,400 mm"],
          ["Yaskawa PL190", "190 kg", "3,159 mm"],
          ["KUKA KR 240 R3200-2 PA", "240 kg", "3,195 mm"],
        ],
        note: "Manufacturer specifications reviewed October 17, 2026. The KUKA row describes the standard model; select an Arctic variant for the documented cold environment capability.",
      }],
    },
    {
      heading: "Cobot palletizer or industrial robot?",
      paragraphs: [
        "A cobot cell is often a sensible first proposal for a moderate carton flow, frequent product changes and an existing production area. Standardized hardware and approachable recipe software can reduce the work involved in deployment. The cell still needs enough capacity to absorb peaks and enough space to exchange pallets.",
        "An industrial palletizing robot becomes more attractive as product groups, grippers, reach and sustained output grow. Purpose built four axis machines are well suited to keeping a load level while moving it between the infeed and stack. Their value comes through the engineered cell and its material handling sequence.",
        "Collaborative operation is a property of the application. Universal Robots' safety documentation calls for assessment of the complete robot application, including foreseeable collisions. A heavy carton, sharp tool or trapping point changes the assessment even when the arm has force limiting functions. Ask for output measured with the final safeguarding and operating rules in place.",
        "Conventional layer palletizers are another option when a steady product stream supports efficient layer formation. Mixed product order pallets pose a separate problem involving item sequencing, stack planning and product stability. A cell that changes recipes between uniform pallets should not be assumed to build arbitrary mixed pallets.",
      ],
    },
    {
      heading: "What is inside a robotic palletizing system?",
      paragraphs: [
        "The infeed establishes where and when the package can be picked. Conveyors, stops and sensors may align individual cartons or form groups. Poor presentation can waste robot time or produce unreliable grips. For bags, settling and flattening can be as consequential as the arm selection.",
        "The end effector establishes the physical connection to the load. Vacuum tools suit appropriate sealed surfaces; mechanical fingers or clamps support other package types. Multiple pick tooling can move more cases per cycle, but requires the upstream equipment to assemble the group and the pallet pattern to accept it. Tool weight, center of gravity and inertia must fit the robot's load limits.",
        "Local control coordinates the work. The robot controller executes motion, while cell controls exchange signals with conveyors, pallet sensors and other machines. Recipe software converts package dimensions and a pallet pattern into the intended sequence. Vision can help with variable presentation or verification where the application needs it.",
        "Cloud tools can support design, simulation, monitoring and service. Rocketfarm, for example, describes Pally programs with waypoints computed in the cloud for its URCap X workflow. Buyers should establish which steps require connectivity, what continues locally and how a saved program is restored after a controller replacement.",
        "The final layer is the operator workflow. A good system shows which product is selected, where the pallet stopped and what the operator must do next. Demonstrate recovery from a missing case, a failed grip and a partly completed pallet. Those small interruptions often determine how confidently the team uses the equipment.",
      ],
    },
    {
      heading: "How to compare palletizer throughput",
      paragraphs: [
        "Start with three different quantities: robot cycles, packages moved and accepted pallets leaving the cell. A cycle can move one case or several. A high case rate may rely on accumulation equipment and a particular pattern. Neither number captures every interruption during the shift.",
        "Consider a hypothetical line delivering 12 cases per minute. Single case handling gives the robot five seconds per case before allowing for interruptions. Picking two at a time changes the nominal requirement to six picks per minute, provided the conveyor forms pairs and the stack accepts them. The complete cycle still includes approach, gripping, travel, placement and return.",
        "Now assume a pallet holds 60 cases and a single pallet position requires a one minute production stop for exchange. Filling takes five minutes at the nominal rate, but the complete six minute sequence averages ten cases per minute. A second pallet position or automated exchange may recover more output than a faster arm.",
        "Measure the difficult products as well as the common ones. Include the highest layer, longest travel, least reliable grip, product changes and normal pallet handling. Agree whether the promised rate is instantaneous, averaged during a run or sustained over a production shift.",
      ],
    },
    {
      heading: "How much does a robotic palletizer cost?",
      paragraphs: [
        "Robotiq currently states that palletizing in the Americas starts at US$85,000. That is a useful vendor price anchor for a first conversation. The final quotation needs to identify the exact workcell, tooling, safeguarding, infeed, delivery and installation scope.",
        "Build the budget around four groups of costs: equipment, site preparation, commissioning and ongoing operation. Equipment includes the robot, controller, gripper, conveyors and pallet handling. Site work can include power, compressed air, anchoring and layout changes. Commissioning includes programming, trials, training and the time needed to bring production back to its target rate.",
        "Ongoing costs include maintenance, replacement cups or gripping surfaces, software and support subscriptions, energy and the people still needed to supply and clear the cell. Vention's first year operating bundle and Columbia/Okura's rental route are examples of why commercial terms deserve their own comparison.",
        "Ask each bidder to price the same production boundary. If one proposal includes automated pallet discharge and another requires an operator to stop the line and exchange pallets, the difference belongs in both capital cost and the operating model.",
      ],
    },
    {
      heading: "A practical palletizer payback example",
      paragraphs: [
        "Use simple payback as an initial screen: installed project cost divided by annual net cash benefit. Keep the labor assumption tied to a real change in staffing, overtime or avoided hiring. Reassigning a person can improve the plant without immediately reducing payroll.",
        "For a hypothetical project, assume US$140,000 installed cost and 3,000 hours of avoidable paid labor each year at a fully loaded US$30 per hour. That creates US$90,000 of annual gross labor benefit. Subtract an assumed US$12,000 for incremental maintenance, support and operating costs, leaving US$78,000. Simple payback is about 1.8 years.",
        "If only 1,500 hours are actually avoidable, the same assumptions produce US$33,000 of annual net benefit and approximately 4.2 years of payback. These are illustrative inputs, not supplier prices or expected customer returns. The labor hours change the decision more than a small difference in robot purchase price.",
        "Add incremental production value only when the plant can make and sell that output, and use contribution after its additional costs. Count damage reduction or avoided overtime when there is a defensible baseline. For a final investment decision, include commissioning time, financing, taxes and the timing of cash flows.",
      ],
    },
    {
      heading: "Three buying situations that change the shortlist",
      paragraphs: [
        "A hypothetical beverage producer runs eight kilogram cases at six per minute and changes products several times a week. Robotiq, Vention and miniPAL are natural starting points. Test the case surface, maximum pallet height and the operator's changeover routine. The plant may get more value from predictable recovery than excess rated speed.",
        "A hypothetical food processor ships 25 kilogram bags continuously. Begin with an industrial proposal from ABB, FANUC or Yaskawa and a complete packaging proposal from Premier Tech. Compare bag preparation, gripping, layer stability and load exit. A carton cell's attractive demonstration does not establish that it can handle this product.",
        "A hypothetical frozen food plant palletizes at minus 25°C. KUKA Arctic warrants early consideration because the environment is within its published range. The supplier still needs to qualify the tool and surrounding equipment at temperature, including the transition into and out of the freezer.",
      ],
    },
    {
      heading: "What to require before ordering",
      paragraphs: [
        "Give suppliers a short application file with package dimensions and filled weights, production rates, pallet sizes, stacking patterns, maximum load height, product change frequency and a dimensioned floor layout. Include photographs or samples of difficult packaging and the available utilities.",
        "Require a factory acceptance test with representative product, then a site acceptance test with the real upstream and downstream equipment. Define accepted output, damage limits, pallet stability, changeover time, interventions and the observation period. Run the tests with the agreed safeguarding active.",
        "Name the owner of every interface. The robot supplier, integrator, conveyor provider and software vendor may be different organizations. Establish who answers the service call, who can change a recipe, which backups the plant receives and how critical spare parts are obtained.",
        "Finally, have the production team demonstrate ordinary operation themselves. Starting a new product, exchanging a pallet and recovering a stopped cycle should be part of acceptance. A system that only the commissioning engineer can run has not yet delivered the intended operational benefit.",
      ],
    },
    {
      heading: "Frequently asked questions",
      paragraphs: [
        "What is the best robotic palletizer for a small manufacturer? Start by comparing a Robotiq PE cell, Vention Rapid Series and Columbia/Okura miniPAL against the actual carton flow and available space. The best choice is the package that meets sustained output and is easiest for the team to operate and support.",
        "How much weight can a palletizing robot lift? Models in the industrial comparison range from 110 to 240 kg rated payload. That rating must accommodate tooling and product under the specified load conditions. Packaged cobot systems have their own usable payload limits, which should be confirmed for the exact gripper and motion.",
        "Does a cobot palletizer need a fence? The answer comes from the application risk assessment and final operating configuration. Scanners, guarding, separation and reduced speed can change both the required floor space and achieved throughput.",
        "Can one robot palletize multiple products? Many systems store multiple recipes and can change between products. Building a single mixed product pallet is a different capability that needs explicit support for sequencing, geometry and stability.",
        "Does robotic palletizing require AI? A repeatable case arriving at a known pickup position can be handled through configured motion and recipes. Vision and adaptive planning become useful when presentation or product mix varies. Buy those capabilities when they resolve a defined production problem.",
      ],
    },
    {
      heading: "The Black Scarab verdict",
      paragraphs: [
        "For a first carton palletizing project, we would begin with Robotiq, Vention and Columbia/Okura, using the same products and operating requirements in each evaluation. For heavier loads or a custom industrial layout, we would compare FANUC, ABB and Yaskawa through qualified cell proposals. KUKA Arctic has a clear role in deep freeze applications, while Premier Tech deserves attention when the project extends across the packaging line.",
        "The most valuable specification is the number of stable, accepted pallets the installation can produce during an ordinary shift. Choose the supplier that can demonstrate that result with your packaging, your people and your material flow, then put the result and support obligations into the acceptance agreement.",
      ],
    },
  ],
  sources: [],
  sourceLinks: [
    { label: "Packaging World reporting on Griffith Foods palletizing in Colombia", url: "https://www.packworld.com/secondary-packaging/robotics/article/22953522/griffith-foods-model-in-colombia-robots-with-a-human-touch" },
    { label: "Robotiq Lean Palletizing and Americas starting price", url: "https://robotiq.com/solutions/palletizing" },
    { label: "Robotiq PAL Series specifications", url: "https://robotiq.com/hubfs/PAL_Product_Sheet_EN_Recto_Verso_WEB.pdf" },
    { label: "Robotiq RAIN deployment case study", url: "https://robotiq.com/resource-center/case-studies/rain" },
    { label: "Vention Rapid Series Palletizer 3.0 documentation", url: "https://docs.vention.com/docs/rapid-series-palletizer-30" },
    { label: "Columbia/Okura collaborative palletizers", url: "https://columbiaokura.com/products/collaborative-robots/" },
    { label: "Columbia/Okura miniPAL 20 current specification sheet", url: "https://columbiaokura.com/wp-content/uploads/2025/07/Cutsheet-miniPAL20_07.22.25.pdf" },
    { label: "Columbia/Okura US cobot rental program", url: "https://columbiaokura.com/products/cobot-rental/" },
    { label: "FANUC M-410iC/110 specifications", url: "https://www.fanuc.eu/eu-en/product/robot/m-410ic110" },
    { label: "FANUC M-410 family", url: "https://www.fanucamerica.com/products/series/m-410" },
    { label: "ABB IRB 460 specifications and palletizing software", url: "https://new.abb.com/products/robotics/nl/onze-robots/articulated-robots/irb-460" },
    { label: "Yaskawa PL190 specifications", url: "https://www.yaskawa.co.uk/robotics/robots/palletizing/productdetail/product/pl190_12185" },
    { label: "KUKA KR QUANTEC PA specifications", url: "https://www.kuka.com/en-us/products/robotics-systems/industrial-robots/kr-quantec-pa" },
    { label: "KUKA KR QUANTEC PA Arctic temperature and payload ratings", url: "https://www.kuka.com/en-us/products/robotics-systems/industrial-robots/kr-quantec-pa/kr-quantec-pa-arctic" },
    { label: "Premier Tech CHRONOS RPL-4000", url: "https://www.ptchronos.com/products/palletizing/palletizing-robots/high-performant-palletizing-robot" },
    { label: "Premier Tech CHRONOS RPL-2000", url: "https://www.ptchronos.com/products/palletizing/palletizing-robots/fully-automatic-palletizing-robot" },
    { label: "Premier Tech Systems and Automation company and integration background", url: "https://www.ptchronos.com/about-us" },
    { label: "Premier Tech Grain Millers packaging line case study", url: "https://www.ptchronos.com/testimonials/grain-millers" },
    { label: "Rocketfarm Pally software architecture", url: "https://www.rocketfarm.no/resource-center/insights/3-key-components-of-pally/" },
    { label: "Rocketfarm Pally URCap X release documentation", url: "https://rocketfarm.no/software-products/palletizing/pally-official-software-download/" },
    { label: "Universal Robots palletizing applications", url: "https://www.universal-robots.com/applications/palletizing/" },
    { label: "Universal Robots payload design guide", url: "https://www.universal-robots.com/articles/ur/application-installation/how-to-design-for-higher-payloads/" },
    { label: "Universal Robots application risk assessment documentation", url: "https://www.universal-robots.com/manuals/EN/HTML/SW5_24/Content/prod-usr-man/complianceUR10e/H_g5_sections/safety_g5/risk_assessment.htm" },
  ],
});
