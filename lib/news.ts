export type NewsSource = {
  label: string;
  url: string;
};

export type NewsSection = {
  heading: string;
  paragraphs: string[];
};

export type NewsUpdate = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedDate: string;
  publishedLabel: string;
  author: {
    name: string;
    href: string;
  };
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  readingTime: string;
  keyPoints: string[];
  sections: NewsSection[];
  sources: NewsSource[];
};

export const newsUpdates: NewsUpdate[] = [
  {
    slug: "lyte-raises-165-million-physical-ai-perception",
    title:
      "Lyte raises $165 million at $1.6 billion valuation as investors pile into physical AI",
    summary:
      "The former Apple and PrimeSense team is moving its integrated robot perception platform into production with fresh capital for silicon, sensors, software, and commercial expansion.",
    category: "Physical AI News",
    publishedDate: "2026-09-04",
    publishedLabel: "September 4, 2026",
    author: {
      name: "Rodolfo Garcia Calderoni, CFA",
      href: "/about",
    },
    image: "/images/news/lyte-series-c-physical-ai-perception.png",
    imageAlt:
      "Editorial visualization of a mobile robot and robotic arm sharing an integrated spatial perception field",
    imageCaption:
      "An editorial interpretation of the integrated sensing, custom silicon, and spatial software at the center of Lyte's platform.",
    readingTime: "7 min read",
    keyPoints: [
      "Lyte raised a $165 million Series C led by Maverick Silicon at a $1.6 billion post money valuation.",
      "The financing brings total capital raised to $272 million and comes eight months after the company emerged from stealth.",
      "Lyte says it has entered production and is shipping its perception platform to robotics customers in inspection, logistics, and manufacturing.",
    ],
    sections: [
      {
        heading: "Lyte joins the unicorn club",
        paragraphs: [
          "Lyte just raised $165 million to solve a basic robotics problem: machines still struggle to see the world reliably.",
          "Maverick Silicon led the Series C, with Fidelity Management and Research Company, Atreides Management, Key1 Capital, Ora Global, and other investors joining the round. The deal values Lyte at $1.6 billion after the investment and brings its total capital raised to $272 million.",
          "Andrew Homan, managing partner at Maverick Silicon, is joining the board. Lyte says the money will help it produce more sensing silicon, expand its LyteVision platform, improve its perception software, and support more robotics customers.",
          "The speed is hard to miss. Lyte emerged from stealth in January with $107 million in aggregate funding. Eight months later, it has a unicorn valuation and a much larger manufacturing assignment.",
        ],
      },
      {
        heading: "From Face ID to factory floors",
        paragraphs: [
          "The founding team knows a few things about teaching machines to see. Alexander Shpunt cofounded PrimeSense, whose depth technology powered the original Microsoft Kinect. Apple acquired PrimeSense in 2013, and Lyte's founders later worked on sensing systems connected to Apple's depth platform and Face ID.",
          "Shpunt started Lyte with Arman Hajati and Yuval Gerson in 2021. Their bet is that the integrated approach used in consumer electronics can solve a growing headache for robot companies.",
          "A robot does not experience a camera as one neat stream of truth. It has to coordinate optics, depth, color, motion, timing, inertial data, calibration, compute, and software. If those layers disagree, the robot can misunderstand where an object is or where it is heading. That is inconvenient for a warehouse robot and potentially dangerous for a machine working beside people.",
        ],
      },
      {
        heading: "What Lyte actually sells",
        paragraphs: [
          "The core product is LyteVision. It combines 4D coherent vision, high resolution color imaging, and an inertial measurement unit in one sensing platform. Lyte's custom silicon synchronizes and fuses those inputs at the edge before sending the result into the robot's control stack.",
          "The fourth dimension is motion. Many perception systems estimate movement by comparing separate images after capture. Lyte says its system measures position and motion together, giving a robot a more immediate view of where something is and where it is going.",
          "The broader platform is called Lyte Galaxy. It connects the sensing modules, custom compute, spatial software, and algorithms. Lyte is pitching that stack to makers of autonomous mobile robots, robot arms, delivery vehicles, quadrupeds, robotaxis, and humanoid robots.",
          "In plain English, Lyte wants robot builders to spend less time getting sensors to agree and more time making the robot useful.",
        ],
      },
      {
        heading: "Why investors care",
        paragraphs: [
          "Robot perception is usually assembled from parts made by several suppliers. Each component can arrive with its own clock, coordinate system, interface, data format, and calibration routine. Engineers have to stitch everything together before they can tackle navigation, manipulation, or safety.",
          "Lyte argues that one synchronized platform can remove much of that work. The possible benefits are lower latency, less calibration drift, cleaner data, fewer cables, and a faster path from prototype to production.",
          "Owning the stack also gives Lyte more ways to build a durable business. Custom silicon can create technical differentiation. Software and developer tools can make the platform harder to replace. Production design wins can turn one customer relationship into years of repeat hardware shipments.",
          "There is a catch. Building chips and sensors is expensive. It requires specialized teams, manufacturing partners, quality control, supply planning, and enough unit volume to spread those costs. The new round gives Lyte more room to prove that the integrated model works commercially.",
        ],
      },
      {
        heading: "The real signal is production",
        paragraphs: [
          "The valuation makes the headline, but production is the part worth watching. Lyte says it is already shipping to robotics customers in inspection, logistics, and manufacturing. That suggests LyteVision has moved beyond laboratory evaluation.",
          "The company has not named those customers or disclosed shipment volumes, revenue, contract sizes, or how many production programs are active. So the claim is meaningful, but still difficult to measure from the outside.",
          "The target industries fit the product. Logistics robots must track pallets, forklifts, workers, and changing aisle conditions. Manufacturing systems need precise vision for inspection and manipulation. Field inspection robots have to perceive through difficult lighting, terrain, and weather.",
          "Lyte is also working with NVIDIA. Its platform can stream sensing data into GPU memory through NVIDIA Holoscan Sensor Bridge, creating a direct path from physical capture into simulation, training, and digital twins. It has also joined the NVIDIA Halos ecosystem, which focuses on safety systems for robots working around people.",
        ],
      },
      {
        heading: "What $165 million buys",
        paragraphs: [
          "First, manufacturing. Lyte plans to scale production of its sensing chips and complete LyteVision modules. That means more than ordering wafers. It includes assembly, calibration, testing, packaging, supply assurance, and field support.",
          "Second, software. Clean sensor data only becomes valuable when robot developers can integrate it, inspect it, and trust it. Lyte will keep investing in perception algorithms, artificial intelligence, developer tools, and the software that connects physical capture to robot decisions.",
          "Third, people. The company expects to hire across silicon, optics, software, manufacturing, operations, and commercial roles. This is what happens when your product spans everything from photons to a customer's factory floor.",
        ],
      },
      {
        heading: "Reality check",
        paragraphs: [
          "A $1.6 billion valuation shows that investors are confident. It does not show that Lyte has already won the market.",
          "The company has not published pricing, annual revenue, gross margins, production yield, customer concentration, or field reliability. It also does not provide detailed public data sheets for the current product. Buyers still need to validate range, accuracy, field of view, update rate, power use, environmental protection, interfaces, and failure behavior for the exact module they plan to deploy.",
          "Robot makers will also consider supplier dependence. One integrated module can save months of engineering, but it places sensing, processing, calibration, and software with a single company. Customers will want a stable product road map, dependable supply, safety evidence, strong support, clear data terms, and a credible service plan.",
        ],
      },
      {
        heading: "The bigger funding picture",
        paragraphs: [
          "Lyte is riding a much larger wave. Crunchbase reported that physical AI companies raised $47.4 billion across 521 deals during the first half of 2026. That was nearly four times the $12 billion raised during the second half of 2025. A few enormous rounds and a broad category definition can move those totals, but the direction is clear.",
          "Most robotics attention goes to complete machines and foundation models. Lyte offers investors a different route. Every robot needs reliable information about geometry, color, and motion before any model can make a useful decision. A perception supplier can sell across many kinds of machines without building every robot itself.",
          "What comes next: customer names, repeat orders, production volume, and evidence that LyteVision works outside controlled demonstrations. Lyte now has the capital. The harder job is turning perception into a standard component that robot makers keep buying.",
        ],
      },
    ],
    sources: [
      {
        label: "Lyte announcement of its $165 million Series C",
        url: "https://lyte.ai/news/series-c",
      },
      {
        label: "Lyte technology overview for LyteVision and Lyte Galaxy",
        url: "https://lyte.ai/technology",
      },
      {
        label: "Lyte announcement of its NVIDIA Halos participation",
        url: "https://lyte.ai/news/safer-robots",
      },
      {
        label: "Lyte news archive and emergence from stealth announcement",
        url: "https://lyte.ai/news",
      },
      {
        label: "Crunchbase News report on the funding round and physical AI investment",
        url: "https://news.crunchbase.com/venture/robotics-ai-startup-lyte-seriesc-raise-maverick/",
      },
      {
        label: "CTech report on Lyte's funding, founders, and perception platform",
        url: "https://www.calcalistech.com/ctechnews/article/4dsejsrni",
      },
    ],
  },
  {
    slug: "xynova-prima-1-direct-drive-robotic-hand",
    title:
      "Xynova introduces Prima 1, a direct drive robotic hand with 22 degrees of freedom",
    summary:
      "The human scale hand combines independent joint actuation, precise force control, and visual touch sensing for demanding manipulation tasks.",
    category: "Physical AI News",
    publishedDate: "2026-09-03",
    publishedLabel: "September 3, 2026",
    author: {
      name: "Rodolfo Garcia Calderoni, CFA",
      href: "/about",
    },
    image: "/images/news/xynova-prima-1-physical-ai.png",
    imageAlt:
      "Editorial illustration of a dexterous robotic hand drawing with a pencil",
    imageCaption:
      "An editorial interpretation of the precise drawing task Xynova demonstrated with Prima 1 at the World Robot Conference.",
    readingTime: "6 min read",
    keyPoints: [
      "Prima 1 has 22 independently driven degrees of freedom in a hand that weighs about 850 grams.",
      "Xynova reports a full open and close cycle of 0.08 seconds, force control accuracy of 0.5 newtons, and lifting capacity of up to 20 kilograms.",
      "Visual and touch sensors across all five fingers provide contact data for precise manipulation and robot learning.",
    ],
    sections: [
      {
        heading: "A new hand for precise manipulation",
        paragraphs: [
          "Xynova has introduced Prima 1, a dexterous robotic hand designed to combine human scale movement with the speed, strength, and sensing needed for advanced manipulation. The company first revealed the hand online before giving it a public debut at the 2026 World Robot Conference in Beijing.",
          "At the conference, a robot equipped with Prima 1 held a pen and drew an outline on paper. The demonstration looked simple, but it brought several difficult requirements together. The hand had to maintain a stable grip, control the pressure at the pen tip, and coordinate a continuous path without crushing the tool or losing contact with the page.",
          "Prima 1 has 22 active degrees of freedom, which means its fingers and joints can form a wide range of poses without depending on a small number of mechanically linked motions. The hand measures 190 millimeters in length and weighs about 850 grams, according to reporting from the conference. Its proportions are close to those of a human hand, making it easier to use tools and workspaces designed for people.",
        ],
      },
      {
        heading: "Direct drive puts the motors at the joints",
        paragraphs: [
          "The central design choice is a fully direct drive architecture. Each active joint is controlled by its own motor instead of relying on tendons or cables that pull the fingers from a distance. Xynova describes the mechanism as having zero backlash, meaning there should be very little unwanted movement when a motor changes direction.",
          "That arrangement can make force control more transparent because commands move through fewer flexible mechanical elements before reaching the joint. It can also make the hand easier to move backward when an outside force is applied. Prima 1 has a stated minimum backdrive torque of 0.04 newton meters, a feature intended to support compliant motion and safer contact.",
          "Direct drive is not a free advantage. Fitting motors, sensors, control electronics, and communications into a hand sized package creates challenges around heat, weight, power use, and durability. Prima 1 is Xynova's answer to that packaging problem. The company says the complete hand can open and close in 0.08 seconds while maintaining a control response bandwidth of 1 kilohertz.",
        ],
      },
      {
        heading: "Vision and touch meet at the fingertips",
        paragraphs: [
          "Movement alone does not tell a robot whether an object is secure. Prima 1 includes visual and touch sensing across all five fingers, allowing the control system to observe small changes at the points of contact. That feedback can help detect where an object is touching the hand, how pressure is distributed, and whether the object begins to slip.",
          "The company reports force control accuracy of 0.5 newtons and repeatability of 0.5 millimeters. Together, those figures describe a hand intended to do more than reach a commanded position. It is designed to adjust force while it moves, which is useful for tasks such as holding tools, handling delicate materials, and maintaining a stable grasp as an object changes orientation.",
          "Xynova calls the sensing system visual touch because it combines optical information inside the fingertips with tactile feedback. This type of sensor can produce richer data than a simple contact switch. The resulting streams can also be recorded for training and evaluating manipulation policies.",
        ],
      },
      {
        heading: "Strength in a human scale package",
        paragraphs: [
          "Xynova says each of four fingers can deliver at least 15 newtons of fingertip force and that the hand can lift objects weighing up to 20 kilograms. Those numbers describe different kinds of strength. Fingertip force matters during pinching and controlled contact, while the lifting figure reflects a broader grasp in a favorable configuration.",
          "A demonstration or maximum rating does not establish how a hand will perform through a full workday. Useful comparisons will depend on the object shape, wrist orientation, speed, thermal limits, safety settings, and how long the hand must hold the load. Still, the combination of an 850 gram hand and a stated 20 kilogram lifting capacity gives developers a sense of the operating range Xynova is targeting.",
          "The company showed that range by placing Prima 1 beside its Flex 2 hand at the conference. Prima 1 handled the drawing demonstration, while robots using Flex 2 performed tasks such as carrying a birdcage, moving a fan, and pouring liquids. The two products represent different mechanical approaches within Xynova's growing hand portfolio.",
        ],
      },
      {
        heading: "Built as a development platform",
        paragraphs: [
          "The World Robot Conference lists the Prima series as a research grade platform for embodied intelligence development. That positioning is important because dexterous hands are often evaluated as part of a larger system that includes cameras, robot arms, simulation, data collection, and learned control models.",
          "A hand with independently controlled joints creates a large action space. That gives a model more ways to approach an object, but it also increases the amount of data and control work required to produce reliable behavior. Fast sensing and force feedback can help close that loop by giving the system frequent information about what happened after each motion.",
          "Conference coverage reports support for CAN FD and EtherCAT communications, ROS 1 and ROS 2, and model formats for MuJoCo and Isaac Lab. Those integrations would let research teams connect the hand to common robot software and simulation tools. Xynova's public product page, however, does not yet provide detailed documentation for every interface, so buyers will need to confirm the available software package and integration support directly with the company.",
        ],
      },
      {
        heading: "What still needs to be proven",
        paragraphs: [
          "Prima 1 arrives with an ambitious specification sheet and a memorable public demonstration. The next evidence will come from sustained use outside Xynova's own booth. Developers will want to see grasp success across varied objects, resistance to impacts and dust, thermal behavior during repeated motion, calibration stability, repair procedures, and the quality of the software tools.",
          "Price and general availability will also shape adoption. Xynova invites customers to place orders through its product page, but it does not publish a price or delivery schedule. The company says it operates an integrated production line for motors, controllers, actuators, and hand assembly, which may give it more control over manufacturing as demand grows.",
          "For now, the performance figures in this report should be read as manufacturer claims unless otherwise noted. Prima 1 gives researchers and robot builders another technically distinct option in a rapidly expanding market for dexterous hands. Its real test will be whether the speed, sensing, and strength shown in controlled demonstrations remain dependable during long, unpredictable tasks.",
        ],
      },
    ],
    sources: [
      {
        label: "Xynova product specifications for Prima 1",
        url: "https://xynova.com.cn/en/xynova-prima-1",
      },
      {
        label: "World Robot Conference exhibitor profile for Xynova",
        url: "https://wrc.cie.org.cn/list_339/525.html",
      },
      {
        label: "NE Time report from the Prima 1 public debut",
        url: "https://www.ne-time.cn/web/article/39489",
      },
      {
        label: "Caijing report on dexterous hands at the 2026 conference",
        url: "https://m.caijing.com.cn/s/202608/5178196",
      },
    ],
  },
];

export function getNewsUpdateBySlug(slug: string) {
  return newsUpdates.find((update) => update.slug === slug);
}
