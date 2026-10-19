"use client";

import { useState } from "react";
import { calculatePalletizerPlan, palletizerPlanDefaults, palletizerPlanLimits, type PalletizerPlanInputs } from "@/lib/palletizer-planner";
import styles from "./palletizers.module.css";

const fields: { key: keyof PalletizerPlanInputs; label: string; unit: string; step: string }[] = [
  { key: "packageKg", label: "Filled package weight", unit: "kg", step: "0.1" },
  { key: "casesPerMinute", label: "Line rate", unit: "cases/min", step: "0.5" },
  { key: "operatingHours", label: "Annual operating hours", unit: "hours/year", step: "100" },
  { key: "laborPerHour", label: "Loaded labor cost", unit: "USD/hour", step: "1" },
  { key: "casesPerPick", label: "Cases moved per pick", unit: "cases", step: "1" },
  { key: "gripperKg", label: "Gripper and carried tooling", unit: "kg", step: "0.1" },
  { key: "operators", label: "Operators assigned to palletizing", unit: "per operating hour", step: "0.25" },
  { key: "avoidablePercent", label: "Paid time actually avoidable", unit: "%", step: "5" },
  { key: "installedCost", label: "Installed project budget", unit: "USD", step: "5000" },
  { key: "annualOperatingCost", label: "Additional annual running cost", unit: "USD/year", step: "1000" },
];
const number = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });
const limitNumber = new Intl.NumberFormat("en-US", { maximumFractionDigits: 3 });
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const initial = Object.fromEntries(Object.entries(palletizerPlanDefaults).map(([key,value]) => [key,String(value)])) as Record<keyof PalletizerPlanInputs,string>;

export default function PalletizerPlanner() {
  const [values, setValues] = useState(initial);
  const input = Object.fromEntries(Object.entries(values).map(([key,value]) => [key,value.trim() === "" ? NaN : Number(value)])) as PalletizerPlanInputs;
  const invalid = fields.filter(({key}) => {
    const [min,max] = palletizerPlanLimits[key];
    return !Number.isFinite(input[key]) || input[key] < min || input[key] > max || (key === "casesPerPick" && !Number.isInteger(input[key]));
  });
  const plan = invalid.length ? null : calculatePalletizerPlan(input);
  function field(config: typeof fields[number]) {
    const [min,max] = palletizerPlanLimits[config.key];
    const hasError = invalid.some(item => item.key === config.key);
    return <label className={styles.field} key={config.key} htmlFor={`palletizer-${config.key}`}>
      <span>{config.label}</span>
      <div className={styles.inputWrap}><input id={`palletizer-${config.key}`} type="number" inputMode="decimal" min={min} max={max} step={config.step} value={values[config.key]} aria-invalid={hasError} aria-describedby={hasError ? `palletizer-error-${config.key}` : undefined} onChange={event => setValues(previous => ({...previous,[config.key]:event.target.value}))} /><span>{config.unit}</span></div>
      {hasError ? <small id={`palletizer-error-${config.key}`}>Enter {config.key === "casesPerPick" ? "a whole number" : "a number"} from {limitNumber.format(min)} to {limitNumber.format(max)}.</small> : null}
    </label>;
  }
  return <div className={styles.planner}>
    <p className={styles.note}>Start with the illustrative inputs or enter your production figures. Weight and line rate set the handling target. Savings use the paid time you can actually avoid.</p>
    <div className={styles.plannerColumns}>
      <div>
        <div className={styles.fields}>{fields.slice(0,4).map(field)}</div>
        <details className={styles.assumptions}>
          <summary>Tooling, staffing and project budget</summary>
          <div className={styles.fields}>{fields.slice(4).map(field)}</div>
        </details>
        <button type="button" className={styles.reset} onClick={() => setValues(initial)}>Reset example</button>
      </div>
      <div className={styles.results} aria-live="polite" aria-atomic="true">
        {plan ? <>
          <p className={styles.eyebrow}>Your handling target</p>
          <div className={styles.metricGrid}>
            <div><strong data-result="picks">{number.format(plan.picksPerMinute)}</strong><span>picks per minute</span></div>
            <div><strong data-result="load">{number.format(plan.totalKgPerPick)} kg</strong><span>product plus tooling per pick</span></div>
          </div>
          <p className={styles.note}>{number.format(plan.secondsPerPick)} seconds per nominal cycle, carrying {number.format(plan.productKgPerPick)} kg of product. Allow capacity for pallet changes and interruptions in the supplier trial.</p>
          <div className={styles.payback}>
            <p className={styles.eyebrow}>Simple payback</p>
            <strong data-result="payback">{plan.paybackYears === null ? "No positive annual benefit" : `${number.format(plan.paybackYears)} years`}</strong>
            <p>Project budget {money.format(input.installedCost)}.</p>
            <p><span data-result="annual-benefit">{money.format(plan.netAnnualBenefit)}</span> net benefit per year from {number.format(plan.avoidedHours)} avoided paid hours.</p>
          </div>
          <p className={styles.note}>Gross labor benefit {money.format(plan.grossAnnualBenefit)}, less {money.format(input.annualOperatingCost)} additional annual running cost. Reassigning staff creates cash savings only when it changes paid hours, overtime or hiring.</p>
        </> : <p className={styles.empty}>Complete the highlighted fields to calculate your handling target and payback.</p>}
      </div>
    </div>
    {plan ? <div className={styles.sensitivity}>
      <h3>How much paid time can you avoid?</h3>
      <p className={styles.note}>Same project budget and running cost. Only the avoidable share of assigned labor changes.</p>
      <div className={styles.tableScroll} role="region" aria-label="Payback sensitivity" tabIndex={0}>
        <table><thead><tr><th scope="col">Avoidable share</th><th scope="col">Paid hours/year</th><th scope="col">Net benefit/year</th><th scope="col">Payback</th></tr></thead>
          <tbody>{plan.sensitivity.map(row=><tr key={row.percent} className={row.percent === input.avoidablePercent ? styles.selectedRow : undefined}><th scope="row">{row.percent}%</th><td>{number.format(row.hours)}</td><td>{money.format(row.net)}</td><td>{row.years === null ? "No payback" : `${number.format(row.years)} yr`}</td></tr>)}</tbody>
        </table>
      </div>
    </div> : null}
    <p className={styles.method}>Simple payback = installed cost ÷ annual net cash benefit. This initial screen excludes financing, taxes, discounting and commissioning cash flows. Use a supplier quotation for the installed budget.</p>
  </div>;
}
