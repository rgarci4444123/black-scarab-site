export type IndexSleeve =
  | "Robot platforms"
  | "Motion and actuation"
  | "Perception and navigation"
  | "Control and edge compute"
  | "Deployment and autonomy";

export type IndexConstituent = {
  company: string;
  ticker: string;
  exchange: string;
  country: string;
  sleeve: IndexSleeve;
  weight: number;
  role: string;
};

const equalWeight = 100 / 15;

export const physicalAiAdoptionIndex = {
  name: "Black Scarab Physical AI 15",
  shortName: "Physical AI 15",
  symbol: "BSPI15",
  baseDate: "October 1, 2026",
  launchDate: "October 1, 2026",
  baseLevel: "1,000.00",
  constituentCount: 15,
  weighting: "Equal weight",
  rebalance: "Quarterly",
  returnType: "Currency neutral price return",
  methodologyVersion: "1.0",
} as const;

export const physicalAiAdoptionConstituents: IndexConstituent[] = [
  {
    company: "FANUC",
    ticker: "6954",
    exchange: "Tokyo",
    country: "Japan",
    sleeve: "Robot platforms",
    weight: equalWeight,
    role: "Industrial robots, CNC systems, and servo technology",
  },
  {
    company: "Yaskawa Electric",
    ticker: "6506",
    exchange: "Tokyo",
    country: "Japan",
    sleeve: "Robot platforms",
    weight: equalWeight,
    role: "Industrial robots, servo motors, motion controllers, and drives",
  },
  {
    company: "Estun Automation",
    ticker: "002747",
    exchange: "Shenzhen",
    country: "China",
    sleeve: "Robot platforms",
    weight: equalWeight,
    role: "Industrial robots, motion control systems, and automation",
  },
  {
    company: "Teradyne",
    ticker: "TER",
    exchange: "Nasdaq",
    country: "United States",
    sleeve: "Robot platforms",
    weight: equalWeight,
    role: "Collaborative and autonomous mobile robots through Universal Robots and MiR",
  },
  {
    company: "Nabtesco",
    ticker: "6268",
    exchange: "Tokyo",
    country: "Japan",
    sleeve: "Motion and actuation",
    weight: equalWeight,
    role: "Precision reduction gears for medium and large robot joints",
  },
  {
    company: "Inovance",
    ticker: "300124",
    exchange: "Shenzhen",
    country: "China",
    sleeve: "Motion and actuation",
    weight: equalWeight,
    role: "Servos, drives, controllers, robots, and integrated actuators",
  },
  {
    company: "Keyence",
    ticker: "6861",
    exchange: "Tokyo",
    country: "Japan",
    sleeve: "Perception and navigation",
    weight: equalWeight,
    role: "Industrial sensors, machine vision, and measurement systems",
  },
  {
    company: "Cognex",
    ticker: "CGNX",
    exchange: "Nasdaq",
    country: "United States",
    sleeve: "Perception and navigation",
    weight: equalWeight,
    role: "Machine vision, identification, and robotic guidance",
  },
  {
    company: "Ouster",
    ticker: "OUST",
    exchange: "NYSE",
    country: "United States",
    sleeve: "Perception and navigation",
    weight: equalWeight,
    role: "Lidar, cameras, sensor fusion, and perception software for autonomous machines",
  },
  {
    company: "Hesai",
    ticker: "HSAI",
    exchange: "Nasdaq",
    country: "China",
    sleeve: "Perception and navigation",
    weight: equalWeight,
    role: "Lidar systems for autonomous vehicles, robots, and industrial equipment",
  },
  {
    company: "Rockwell Automation",
    ticker: "ROK",
    exchange: "NYSE",
    country: "United States",
    sleeve: "Control and edge compute",
    weight: equalWeight,
    role: "Industrial control, servo systems, networking, and integrated robotics",
  },
  {
    company: "Siemens",
    ticker: "SIE",
    exchange: "Xetra",
    country: "Germany",
    sleeve: "Control and edge compute",
    weight: equalWeight,
    role: "Factory automation, motion control, industrial software, and edge systems",
  },
  {
    company: "NXP Semiconductors",
    ticker: "NXPI",
    exchange: "Nasdaq",
    country: "Netherlands",
    sleeve: "Control and edge compute",
    weight: equalWeight,
    role: "Edge processors, sensing, networking, motor control, and drone electronics",
  },
  {
    company: "Daifuku",
    ticker: "6383",
    exchange: "Tokyo",
    country: "Japan",
    sleeve: "Deployment and autonomy",
    weight: equalWeight,
    role: "Automated material handling and deployment systems",
  },
  {
    company: "Hexagon",
    ticker: "HEXA B",
    exchange: "Stockholm",
    country: "Sweden",
    sleeve: "Deployment and autonomy",
    weight: equalWeight,
    role: "Positioning, sensor fusion, perception, and autonomous systems",
  },
];

export const physicalAiAdoptionSleeves = [
  {
    name: "Robot platforms" as const,
    weight: 26.67,
    count: 4,
    description: "Industrial robots, collaborative systems, and autonomous mobile platforms.",
  },
  {
    name: "Motion and actuation" as const,
    weight: 13.33,
    count: 2,
    description: "The drives, controls, and precision gearing that create physical movement.",
  },
  {
    name: "Perception and navigation" as const,
    weight: 26.67,
    count: 4,
    description: "Vision, lidar, sensing, identification, mapping, and robotic guidance.",
  },
  {
    name: "Control and edge compute" as const,
    weight: 20,
    count: 3,
    description: "Real time control, industrial software, networking, and onboard intelligence.",
  },
  {
    name: "Deployment and autonomy" as const,
    weight: 13.33,
    count: 2,
    description: "The integration, positioning, and operating systems behind scaled deployment.",
  },
];
