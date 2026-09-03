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
