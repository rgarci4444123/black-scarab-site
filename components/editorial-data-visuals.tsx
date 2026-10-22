const demandDrivers = [
  { title: "Robot families", detail: "Different bodies and sensors" },
  { title: "Skills", detail: "More tasks and actions" },
  { title: "Environments", detail: "New sites, objects and conditions" },
  { title: "Model updates", detail: "Failures become new examples" },
];

const reviewRate = { low: 6, high: 12 };
const annualVolumes = [
  { hours: 100_000_000, label: "100 million hours" },
  { hours: 500_000_000, label: "500 million hours" },
  { hours: 1_000_000_000, label: "1 billion hours" },
];
const chartMaximum = 12_000_000_000;

function billions(amount: number) {
  return `$${amount / 1_000_000_000}B`;
}

function DemandDrivers() {
  return (
    <figure
      aria-labelledby="robotics-data-demand-title"
      data-editorial-visual="robotics-data-demand"
      className="my-8 rounded-2xl border border-zinc-200 bg-white p-4 font-sans text-sm leading-normal sm:p-5"
    >
      <h3 id="robotics-data-demand-title" className="text-base font-medium leading-6 tracking-tight text-zinc-950">
        What expands the data workload
      </h3>
      <dl className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4">
        {demandDrivers.map((driver) => (
          <div key={driver.title} className="rounded-lg bg-zinc-50 px-3 py-3.5">
            <dt className="text-[13px] font-medium leading-5 text-zinc-900">{driver.title}</dt>
            <dd className="mt-1 text-xs leading-5 text-zinc-500">{driver.detail}</dd>
          </div>
        ))}
      </dl>
      <figcaption className="mt-4 text-xs leading-5 text-zinc-500">
        New edge cases create repeat demand for collection, curation and review.
      </figcaption>
    </figure>
  );
}

function DataServicesMarket() {
  return (
    <figure
      aria-labelledby="robotics-data-tam-title"
      data-editorial-visual="robotics-data-tam"
      className="my-8 rounded-2xl border border-zinc-200 bg-white p-4 font-sans text-sm leading-normal sm:p-5"
    >
      <header>
        <h3 id="robotics-data-tam-title" className="text-base font-medium leading-6 tracking-tight text-zinc-950">
          The market behind the hours
        </h3>
        <p className="mt-1 text-xs leading-5 text-zinc-500">Illustrative annual curation spend, USD</p>
      </header>
      <dl className="mt-5 space-y-5">
        {annualVolumes.map(({ hours, label }) => {
          const low = hours * reviewRate.low;
          const high = hours * reviewRate.high;

          return (
            <div key={hours}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <dt className="text-xs leading-5 text-zinc-600">{label}</dt>
                <dd className="text-sm font-semibold leading-5 tabular-nums text-zinc-950 sm:text-base">
                  {billions(low)} to {billions(high)}
                </dd>
              </div>
              <div aria-hidden="true" className="relative mt-2 h-2 rounded-full bg-zinc-100">
                <div
                  className="absolute inset-y-0 rounded-full bg-[#748b68]"
                  style={{
                    left: `${(low / chartMaximum) * 100}%`,
                    width: `${((high - low) / chartMaximum) * 100}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </dl>
      <div aria-hidden="true" className="mt-2 flex justify-between text-[11px] leading-5 tabular-nums text-zinc-400">
        <span>$0</span><span>$6B</span><span>$12B</span>
      </div>
      <figcaption className="mt-4 text-xs leading-5 text-zinc-500">
        Black Scarab volume scenarios at $6 to $12 per reviewed hour, using DexSet’s 2026 curation and QA benchmark.
      </figcaption>
    </figure>
  );
}

export default function EditorialDataVisual({ kind }: { kind: "robotics-data-demand" | "robotics-data-tam" }) {
  return kind === "robotics-data-demand" ? <DemandDrivers /> : <DataServicesMarket />;
}
