import performanceData from "@/public/data/bspi15-performance.json";

export type PhysicalAiAdoptionPerformanceObservation = {
  date: string;
  dateLabel: string;
  bspi15: number;
  sp500: number;
  nasdaqComposite: number;
  constituentWeights: Record<string, number>;
};

export const physicalAiAdoptionPerformance =
  performanceData as PhysicalAiAdoptionPerformanceObservation[];

export const latestPhysicalAiAdoptionPerformance =
  physicalAiAdoptionPerformance[physicalAiAdoptionPerformance.length - 1];
