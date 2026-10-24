const groups = [
  { title: "Cobot packages", note: "Start here for repeatable work taught by the fabrication team.", options: [
    { id: "hirebotics", name: "Hirebotics Cobot Welder", fit: "Our first call for app based teaching", fact: "UR8 Long arm with 68.9 inch reach. Beacon teaching and monitoring.", price: "From US$105,000", detail: "Supplier starting offer; software upgrades and site work add cost." },
    { id: "miller", name: "Miller Copilot Builder", fit: "Reconfigurable work in a Miller shop", fact: "Auto Deltaweld 350 package; detachable components and touch sensing.", price: "Price the chosen package", detail: "FANUC long arm, aluminum and Blue iQ models are separate configurations." },
    { id: "fronius", name: "Fronius CWC", fit: "A defined welding cell and process package", fact: "CWC S: CRX 10iA arm and TPS 320i Pulse. CWC D adds two station operation.", price: "Quote the cell and tooling", detail: "CWC S working area without rotary unit: 1,500 × 1,000 × 700 mm." },
  ] },
  { title: "Industrial cells", note: "Compare the fixture, positioner and loading arrangement with the robot.", options: [
    { id: "lincoln", name: "Lincoln Electric Fab Pak", fit: "Repeat production with an integrated process", fact: "CDZ combines a FANUC robot, Power Wave source and fixed table.", price: "Quote the installed cell", detail: "Positioning variants suit other geometries. Price extraction, tooling and installation explicitly." },
    { id: "yaskawa", name: "Yaskawa ArcWorld", fit: "Compact cells and coordinated part positioning", fact: "RS uses a revolving door and table; larger CS systems offer other part envelopes.", price: "Quote the regional model", detail: "Confirm the exact robot, fixture load and cell layout in the proposal." },
    { id: "abb", name: "ABB OmniVance FlexArc", fit: "Modular industrial welding with positioners", fact: "Modular, LITE and Compact packages. FlexArc R lists up to 1,000 kg including fixtures.", price: "Quote the configuration", detail: "The 1,000 kg figure is positioner capacity, separate from robot wrist payload." },
  ] },
  { title: "Specialized systems", note: "Shortlist these when joint geometry or part variation drives the investment.", options: [
    { id: "novarc", name: "Novarc Spool Welding Robot", fit: "Pipe spools that can rotate during welding", fact: "Published SWR range: 2 to 60 inch pipe and pressure vessel applications.", price: "Quote process and positioners", detail: "Specify MIG, TIGMIG or TIPTIG and the required autonomy package." },
    { id: "path", name: "Path Robotics intelligent cells", fit: "Heavy fabrication with changing joint geometry", fact: "Vision guided seam finding, path planning and adaptive multipass fill.", price: "Service contract proposal", detail: "Path advertises zero capital expenditure. Compare fees, term and accepted output." },
  ] },
];

export default function WeldingComparison() {
  return <div className="space-y-7">{groups.map(group => <section key={group.title}>
    <h3 className="text-xl font-semibold tracking-tight text-[#223128]">{group.title}</h3>
    <p className="mt-2 text-sm leading-6 text-[#62695f]">{group.note}</p>
    <div className="mt-4 grid items-start gap-3 md:grid-cols-2">{group.options.map(option => <details key={option.id} className="group min-w-0 rounded-xl border border-[#dedfd4] bg-[#fafbf6] p-5 open:bg-white">
      <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden"><span className="min-w-0"><strong className="block text-base text-[#17271c]">{option.name}</strong><span className="mt-2 block text-sm leading-5 text-[#52614e]">{option.fit}</span><span className="mt-3 block text-xs font-semibold text-[#3e5946]">{option.price}</span></span><span aria-hidden="true" className="text-xl text-[#657b59] group-open:rotate-45">+</span></summary>
      <div className="mt-4 border-t border-[#e1e5d9] pt-4 text-sm leading-6"><p>{option.fact}</p><p className="mt-2 text-[#60675c]">{option.detail}</p><a href={`#${option.id}`} className="mt-4 inline-flex min-h-11 items-center font-semibold text-[#3b5740] underline underline-offset-4">Read our assessment</a></div>
    </details>)}</div>
  </section>)}<p className="text-xs leading-5 text-[#73786e]">Reviewed October 24, 2026. Shortlisted by application fit from manufacturer documentation and published deployment accounts. Open a system for configuration and commercial details.</p></div>;
}
