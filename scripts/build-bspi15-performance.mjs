import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const inputPath = path.join(root, "data/bspi15/daily-closes.csv");
const outputPath = path.join(root, "public/data/bspi15-performance.json");

const constituentTickers = [
  "6954",
  "6506",
  "002747",
  "TER",
  "6268",
  "300124",
  "6861",
  "CGNX",
  "OUST",
  "HSAI",
  "ROK",
  "SIE",
  "NXPI",
  "6383",
  "HEXA B",
];

const requiredColumns = ["Date", ...constituentTickers, "S&P 500", "Nasdaq Composite"];
const csv = await fs.readFile(inputPath, "utf8");
const lines = csv.trim().split(/\r?\n/);
const headers = lines[0].split(",");

for (const column of requiredColumns) {
  if (!headers.includes(column)) {
    throw new Error(`Missing required BSPI15 column: ${column}`);
  }
}

const observations = lines.slice(1).map((line) => {
  const values = line.split(",");
  return Object.fromEntries(headers.map((header, index) => [header, values[index]]));
});

if (observations.length === 0) {
  throw new Error("BSPI15 daily closes must contain at least one observation.");
}

const base = observations[0];

const output = observations.map((observation) => {
  const ratios = constituentTickers.map((ticker) => {
    const current = Number(observation[ticker]);
    const initial = Number(base[ticker]);

    if (!Number.isFinite(current) || !Number.isFinite(initial) || current <= 0 || initial <= 0) {
      throw new Error(`Invalid close for ${ticker} on ${observation.Date}`);
    }

    return [ticker, current / initial];
  });
  const ratioTotal = ratios.reduce((total, [, ratio]) => total + ratio, 0);
  const date = new Date(`${observation.Date}T12:00:00Z`);

  return {
    date: observation.Date,
    dateLabel: new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    }).format(date),
    bspi15: (1000 * ratioTotal) / constituentTickers.length,
    sp500: (1000 * Number(observation["S&P 500"])) / Number(base["S&P 500"]),
    nasdaqComposite:
      (1000 * Number(observation["Nasdaq Composite"])) / Number(base["Nasdaq Composite"]),
    constituentWeights: Object.fromEntries(
      ratios.map(([ticker, ratio]) => [ticker, (100 * ratio) / ratioTotal]),
    ),
  };
});

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`);

console.log(`Built ${output.length} BSPI15 performance observations.`);
