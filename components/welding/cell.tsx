const stages = [
  ["Present the joint", "Fixtures, clamps and positioners make the seam accessible and repeatable."],
  ["Locate and plan", "A taught path, touch sensing or vision establishes where the torch should travel."],
  ["Control the weld", "Robot motion, wire feed, shielding gas and the power source execute the procedure."],
  ["Inspect and release", "Inspection determines acceptance; process records support traceability."],
];

export default function WeldingCell() {
  return <figure className="rounded-2xl bg-[#f1f2ea] p-5 sm:p-7"><ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{stages.map(([title, body], index) => <li key={title} className="min-w-0"><span className="text-sm font-semibold tabular-nums text-[#718066]">0{index + 1}</span><h3 className="mt-2 text-base font-semibold text-[#263528]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#5b6557]">{body}</p></li>)}</ol><figcaption className="mt-6 border-t border-[#d7ddce] pt-4 text-xs leading-5 text-[#63715a]">Safeguarding, extraction and trained supervision span the whole process.</figcaption></figure>;
}
