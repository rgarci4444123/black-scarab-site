export const weldingFields = [
  { key: "arcMinutes", label: "Arc time per attempted part", unit: "min", value: "4", min: 0.01, max: 10000 },
  { key: "otherMinutes", label: "Other cell time per attempt", unit: "min", value: "2", min: 0, max: 10000 },
  { key: "setupMinutes", label: "Cell setup per batch", unit: "min", value: "30", min: 0, max: 10000 },
  { key: "batchParts", label: "Attempted parts per batch", unit: "parts", value: "50", min: 1, max: 1000000 },
  { key: "annualHours", label: "Scheduled cell hours per year", unit: "hours", value: "2000", min: 1, max: 8760 },
  { key: "availability", label: "Available share of scheduled hours", unit: "%", value: "80", min: 0, max: 100 },
  { key: "yieldPercent", label: "First pass accepted share", unit: "%", value: "98", min: 0, max: 100 },
  { key: "demand", label: "Annual accepted parts required", unit: "parts", value: "10000", min: 0, max: 100000000 },
  { key: "capital", label: "Complete installed investment", unit: "US$", value: "150000", min: 1, max: 100000000 },
  { key: "manualMinutes", label: "Manual paid time per accepted part", unit: "min", value: "12", min: 0, max: 10000 },
  { key: "robotTouchMinutes", label: "Operator paid time per robot attempt", unit: "min", value: "3", min: 0, max: 10000 },
  { key: "hourlyCost", label: "Loaded labor cost per hour", unit: "US$", value: "35", min: 0, max: 10000 },
  { key: "cashPercent", label: "Saved hours that reduce cash cost", unit: "%", value: "75", min: 0, max: 100 },
  { key: "annualCost", label: "Extra annual operating cost", unit: "US$", value: "12000", min: 0, max: 100000000 },
] as const;

export type WeldingField = typeof weldingFields[number]["key"];
export type WeldingInputs = Record<WeldingField, string>;
export const weldingDefaults = Object.fromEntries(weldingFields.map(f => [f.key, f.value])) as WeldingInputs;

export function calculateWelding(input: WeldingInputs) {
  const numbers = {} as Record<WeldingField, number>;
  const errors: Partial<Record<WeldingField, string>> = {};
  for (const field of weldingFields) {
    const n = Number(input[field.key]);
    if (input[field.key].trim() === "" || !Number.isFinite(n) || n < field.min || n > field.max || ((field.key === "batchParts" || field.key === "demand") && !Number.isInteger(n))) {
      errors[field.key] = `Enter ${field.min.toLocaleString("en-US")} to ${field.max.toLocaleString("en-US")}${field.key === "batchParts" || field.key === "demand" ? " in whole parts" : ""}.`;
    } else numbers[field.key] = n;
  }
  if (Object.keys(errors).length) return { errors, result: null };
  const n = numbers;
  const cycleMinutes = n.arcMinutes + n.otherMinutes + n.setupMinutes / n.batchParts;
  const attempts = n.annualHours * n.availability / 100 * 60 / cycleMinutes;
  const capacity = Math.floor(attempts * n.yieldPercent / 100);
  const acceptedParts = Math.min(n.demand, capacity);
  const plannedAttempts = n.yieldPercent > 0 ? acceptedParts / (n.yieldPercent / 100) : 0;
  // Setup consumes cell time AND operator time. Rejects consume attempts; no repair recovery is credited.
  const operatorHours = plannedAttempts * (n.robotTouchMinutes + n.setupMinutes / n.batchParts) / 60;
  const savedHours = acceptedParts * n.manualMinutes / 60 - operatorHours;
  const netBenefitAt = (cashPercent: number) => (savedHours >= 0 ? savedHours * cashPercent / 100 : savedHours) * n.hourlyCost - n.annualCost;
  const netBenefit = netBenefitAt(n.cashPercent);
  return { errors, result: { cycleMinutes, capacity, acceptedParts, operatorHours, savedHours, netBenefit, payback: netBenefit > 0 ? n.capital / netBenefit : null, shortfall: Math.max(0, n.demand - capacity), sensitivity: [50, 75, 100].map(percent => { const benefit = netBenefitAt(percent); return { percent, benefit, payback: benefit > 0 ? n.capital / benefit : null }; }) } };
}
