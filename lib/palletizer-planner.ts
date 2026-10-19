export type PalletizerPlanInputs = {
  packageKg: number;
  casesPerMinute: number;
  casesPerPick: number;
  gripperKg: number;
  operatingHours: number;
  operators: number;
  avoidablePercent: number;
  laborPerHour: number;
  installedCost: number;
  annualOperatingCost: number;
};

export const palletizerPlanDefaults: PalletizerPlanInputs = {
  packageKg: 8, casesPerMinute: 12, casesPerPick: 1, gripperKg: 3,
  operatingHours: 4000, operators: 1, avoidablePercent: 75,
  laborPerHour: 30, installedCost: 140000, annualOperatingCost: 12000,
};

export const palletizerPlanLimits: Record<keyof PalletizerPlanInputs, [number, number]> = {
  packageKg: [0.01, 1000], casesPerMinute: [0.1, 1000], casesPerPick: [1, 100],
  gripperKg: [0, 1000], operatingHours: [1, 8760], operators: [0, 20],
  avoidablePercent: [0, 100], laborPerHour: [0, 1000],
  installedCost: [1, 100000000], annualOperatingCost: [0, 10000000],
};

export function calculatePalletizerPlan(input: PalletizerPlanInputs) {
  for (const key of Object.keys(palletizerPlanLimits) as (keyof PalletizerPlanInputs)[]) {
    const [min, max] = palletizerPlanLimits[key];
    if (!Number.isFinite(input[key]) || input[key] < min || input[key] > max) {
      throw new RangeError(`Invalid ${key}`);
    }
  }
  if (!Number.isInteger(input.casesPerPick)) throw new RangeError('Cases per pick must be a whole number');
  const picksPerMinute = input.casesPerMinute / input.casesPerPick;
  const productKgPerPick = input.packageKg * input.casesPerPick;
  const totalKgPerPick = productKgPerPick + input.gripperKg;
  const baselinePaidHours = input.operatingHours * input.operators;
  const avoidedHours = baselinePaidHours * input.avoidablePercent / 100;
  const grossAnnualBenefit = avoidedHours * input.laborPerHour;
  const netAnnualBenefit = grossAnnualBenefit - input.annualOperatingCost;
  const paybackYears = netAnnualBenefit > 0 ? input.installedCost / netAnnualBenefit : null;
  const breakEvenHours = input.laborPerHour > 0 ? input.annualOperatingCost / input.laborPerHour : null;
  const sensitivity = [25, 50, 75, 100].map(percent => {
    const hours = baselinePaidHours * percent / 100;
    const net = hours * input.laborPerHour - input.annualOperatingCost;
    return { percent, hours, net, years: net > 0 ? input.installedCost / net : null };
  });
  return { picksPerMinute, secondsPerPick: 60 / picksPerMinute, productKgPerPick,
    totalKgPerPick, avoidedHours, grossAnnualBenefit, netAnnualBenefit, paybackYears,
    breakEvenHours, sensitivity };
}
