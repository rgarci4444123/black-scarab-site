"use client";

import { useState } from "react";
import { calculateWelding, weldingDefaults, weldingFields, type WeldingInputs } from "@/lib/welding-planner";

const money = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
const count = (n: number) => Math.round(n).toLocaleString("en-US");

export default function WeldingPlanner() {
  const [inputs, setInputs] = useState<WeldingInputs>({ ...weldingDefaults });
  const { errors, result } = calculateWelding(inputs);
  return <div className="rounded-2xl bg-[#f3f3eb] p-5 sm:p-8">
    <p className="max-w-3xl text-sm leading-6 text-[#536056]">Use a timed production trial to replace these illustrative inputs. Other cell time includes loading, movement, sensing and cleaning that extend the cycle. Operator time also includes attended work outside the cell cycle.</p>
    <div className="mt-6 grid gap-8 lg:grid-cols-2">
      {[["Production", weldingFields.slice(0, 8)], ["Economics", weldingFields.slice(8)]] .map(([title, fields]) => <fieldset key={title as string} className="min-w-0">
        <legend className="mb-4 text-lg font-semibold">{title as string}</legend>
        <div className="grid gap-4 sm:grid-cols-2">{(fields as typeof weldingFields[number][]).map(field => <div key={field.key} className="min-w-0">
          <label htmlFor={`weld-${field.key}`} className="mb-1.5 block text-sm font-medium leading-5">{field.label} <span className="font-normal text-[#657063]">({field.unit})</span></label>
          <input id={`weld-${field.key}`} type="number" inputMode="decimal" min={field.min} max={field.max} step={field.key === "batchParts" || field.key === "demand" ? "1" : "any"} value={inputs[field.key]} onChange={e => setInputs(p => ({ ...p, [field.key]: e.target.value }))} aria-invalid={Boolean(errors[field.key])} aria-describedby={errors[field.key] ? `weld-error-${field.key}` : undefined} className="min-h-11 w-full min-w-0 rounded-lg border border-[#c8cfc0] bg-white px-3 py-2 text-base text-[#19231c] outline-none focus-visible:ring-2 focus-visible:ring-[#526b5b]" />
          {errors[field.key] ? <p id={`weld-error-${field.key}`} className="mt-1 text-xs text-[#9c3327]">{errors[field.key]}</p> : null}
        </div>)}</div>
      </fieldset>)}
    </div>
    <button type="button" onClick={() => setInputs({ ...weldingDefaults })} className="mt-5 min-h-11 rounded-lg px-1 text-sm font-semibold text-[#395541] underline underline-offset-4">Reset example</button>
    <div aria-live="polite" aria-atomic="true" className="mt-6 border-t border-[#cbd2c2] pt-6">
      {result ? <>
        <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[["Annual accepted capacity", `${count(result.capacity)} parts`], ["Demand served", `${count(result.acceptedParts)} parts`], ["Annual net cash benefit", money(result.netBenefit)], ["Simple payback", result.payback === null ? "No positive payback" : `${result.payback.toFixed(1)} years`]].map(([label, value]) => <div key={label}><dt className="text-xs font-medium uppercase tracking-wide text-[#526056]">{label}</dt><dd className="mt-2 text-2xl font-semibold tracking-tight">{value}</dd></div>)}
        </dl>
        <p className="mt-5 text-sm leading-6 text-[#536056]">Effective cycle: {result.cycleMinutes.toFixed(2)} minutes per attempt. Paid hours released: {count(result.savedHours)} per year, before the cash conversion assumption. {result.shortfall > 0 ? `${count(result.shortfall)} required parts exceed cell capacity.` : ""}</p>
        <details className="mt-5 rounded-lg bg-white/70 p-4"><summary className="cursor-pointer text-sm font-semibold">What if more saved hours reduce cash cost?</summary>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">{result.sensitivity.map(s => <p key={s.percent} className="text-sm leading-6"><strong className="block">{s.percent}% realized</strong>{money(s.benefit)} a year<br />{s.payback === null ? "No positive payback" : `${s.payback.toFixed(1)} year payback`}</p>)}</div>
        </details>
      </> : <p className="text-sm text-[#9c3327]">Complete the highlighted fields to calculate output and payback.</p>}
    </div>
    <details className="mt-5 text-sm leading-6 text-[#536056]"><summary className="cursor-pointer font-semibold">Calculation and assumptions</summary><div className="mt-3 space-y-3">
      <p>Capacity = scheduled minutes × availability × first pass yield ÷ (arc minutes + other cell minutes + setup minutes ÷ batch size). Annual accepted parts are capped at demand. Setup is spread across batches for planning.</p>
      <p>Manual paid hours = accepted parts × manual minutes ÷ 60. Robot paid hours = attempted parts × (operator minutes + setup minutes ÷ batch size) ÷ 60. Operator minutes should include inspection and reject handling; include repair costs in annual operating cost. Enter availability after unplanned losses, with routine cleaning and setup counted in their own inputs.</p>
      <p>Net benefit = released paid hours × cash conversion × labor cost, less extra annual operating cost. Additional labor requirements are charged in full. Payback = installed investment ÷ positive net annual benefit. This purchase model uses annual averages; add commissioning, financing, tax and ramp time to a detailed business case. Compare a service contract using its actual recurring fees.</p>
    </div></details>
  </div>;
}
