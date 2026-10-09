import fs from "node:fs/promises";
import path from "node:path";
import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;

const root = process.cwd();
loadEnvConfig(root);

const apiKey = process.env.MARKETSTACK_API_KEY;

if (!apiKey) {
  throw new Error(
    "MARKETSTACK_API_KEY is required. Add it to .env.local or export it for this command.",
  );
}

const instrumentsPath = path.join(root, "data/bspi15/instruments.csv");
const closesPath = path.join(root, "data/bspi15/daily-closes.csv");
const auditPath = path.join(root, "data/bspi15/marketstack-audit-latest.json");
const observationsPath = path.join(root, "data/bspi15/marketstack-observations.csv");

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];

    if (character === '"') {
      if (quoted && line[index + 1] === '"') {
        current += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === "," && !quoted) {
      values.push(current);
      current = "";
    } else {
      current += character;
    }
  }

  values.push(current);
  return values;
}

function parseCsv(csv) {
  const lines = csv.trim().split(/\r?\n/);
  const headers = parseCsvLine(lines[0]);

  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    return Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""]));
  });
}

function csvCell(value) {
  const text = value == null ? "" : String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function publicUrl(url) {
  const safe = new URL(url);
  safe.searchParams.delete("access_key");
  return safe.toString();
}

async function fetchMarketstack(apiVersion, symbols, dateFrom, dateTo) {
  const url = new URL(`https://api.marketstack.com/${apiVersion}/eod`);
  url.searchParams.set("access_key", apiKey);
  url.searchParams.set("symbols", symbols.join(","));
  url.searchParams.set("date_from", dateFrom);
  url.searchParams.set("date_to", dateTo);
  url.searchParams.set("limit", "1000");
  url.searchParams.set("sort", "ASC");

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });
  const body = await response.json();

  if (!response.ok || body.error) {
    const detail = body.error?.message ?? `HTTP ${response.status}`;
    throw new Error(`Marketstack ${apiVersion} request failed: ${detail}`);
  }

  return {
    requestUrl: publicUrl(url),
    response: body,
  };
}

const [instrumentsCsv, closesCsv] = await Promise.all([
  fs.readFile(instrumentsPath, "utf8"),
  fs.readFile(closesPath, "utf8"),
]);

const instruments = parseCsv(instrumentsCsv);
const closes = parseCsv(closesCsv);
const dateFrom = process.argv.find((argument) => argument.startsWith("--from="))?.split("=")[1]
  ?? closes[0]?.Date;
const dateTo = process.argv.find((argument) => argument.startsWith("--through="))?.split("=")[1]
  ?? formatDate(new Date());
const allowMissing = process.argv.includes("--allow-missing");
const verifiedMarketClosures = JSON.parse(
  await fs.readFile(path.join(root, "data/bspi15/verified-market-closures.json"), "utf8"),
);


if (!dateFrom || !dateTo) {
  throw new Error("The audit needs a start date and end date.");
}

const sourceFromDate = new Date(`${dateFrom}T12:00:00Z`);
sourceFromDate.setUTCDate(sourceFromDate.getUTCDate() - 14);
const sourceDateFrom = sourceFromDate.toISOString().slice(0, 10);

const constituents = instruments.filter((instrument) => instrument.Type === "Constituent");
const benchmarks = instruments.filter((instrument) => instrument.Type === "Benchmark");

const [constituentResult, benchmarkResult] = await Promise.all([
  fetchMarketstack(
    "v2",
    constituents.map((instrument) => instrument["Marketstack Symbol"]),
    sourceDateFrom,
    dateTo,
  ),
  fetchMarketstack(
    "v1",
    benchmarks.map((instrument) => instrument["Marketstack Symbol"]),
    sourceDateFrom,
    dateTo,
  ),
]);

const fetchedAt = new Date().toISOString();
const receiptFolder = fetchedAt.replaceAll(":", "-").replace(".", "-");
const receiptPath = path.join(root, "data/bspi15/raw/marketstack", receiptFolder);

await fs.mkdir(receiptPath, { recursive: true });
await Promise.all([
  fs.writeFile(
    path.join(receiptPath, "constituents-v2.json"),
    `${JSON.stringify(constituentResult.response, null, 2)}\n`,
  ),
  fs.writeFile(
    path.join(receiptPath, "benchmarks-v1.json"),
    `${JSON.stringify(benchmarkResult.response, null, 2)}\n`,
  ),
]);

const instrumentBySourceSymbol = new Map(
  instruments.map((instrument) => [instrument["Marketstack Symbol"], instrument]),
);
const sourceRows = [
  ...constituentResult.response.data.map((row) => ({ ...row, sourceApi: "v2" })),
  ...benchmarkResult.response.data.map((row) => ({ ...row, sourceApi: "v1" })),
].map((row) => {
  const instrument = instrumentBySourceSymbol.get(row.symbol);

  if (!instrument) {
    throw new Error(`Unexpected Marketstack symbol in response: ${row.symbol}`);
  }

  return {
    date: row.date.slice(0, 10),
    ticker: instrument.Ticker,
    company: instrument.Company,
    sourceSymbol: row.symbol,
    mic: row.exchange,
    expectedMic: instrument["Expected MIC"],
    currency: instrument.Currency,
    type: instrument.Type,
    close: Number(row.close),
    adjustedClose: Number(row.adj_close),
    dividend: Number(row.dividend ?? 0),
    splitFactor: Number(row.split_factor ?? 1),
    sourceApi: row.sourceApi,
  };
});

const identityErrors = sourceRows
  .filter((row) => row.mic !== row.expectedMic)
  .map((row) => ({
    ticker: row.ticker,
    sourceSymbol: row.sourceSymbol,
    expectedMic: row.expectedMic,
    receivedMic: row.mic,
  }));

const closeByDateAndTicker = new Map(
  closes.flatMap((row) =>
    instruments.map((instrument) => [
      `${row.Date}|${instrument.Ticker}`,
      Number(row[instrument.Ticker]),
    ]),
  ),
);

const comparisons = sourceRows
  .filter((row) => closeByDateAndTicker.has(`${row.date}|${row.ticker}`))
  .map((row) => {
    const recordedClose = closeByDateAndTicker.get(`${row.date}|${row.ticker}`);
    const difference = row.close - recordedClose;
    const tolerance = Math.max(0.01, Math.abs(recordedClose) * 0.000001);

    return {
      date: row.date,
      ticker: row.ticker,
      sourceSymbol: row.sourceSymbol,
      recordedClose,
      marketstackClose: row.close,
      difference,
      status: Math.abs(difference) <= tolerance ? "match" : "mismatch",
    };
  });

const mismatches = comparisons.filter((comparison) => comparison.status === "mismatch");
const sourceByDateAndTicker = new Map(
  sourceRows.map((row) => [`${row.date}|${row.ticker}`, row]),
);
const canonicalDates = closes
  .map((row) => row.Date)
  .filter((date) => date >= dateFrom && date <= dateTo);
const verifiedClosures = [];
function checkMissing(date, instrument, canonicalClose = null) {
  const previous = sourceRows
    .filter((row) => row.ticker === instrument.Ticker && row.date < date)
    .sort((left, right) => right.date.localeCompare(left.date))[0];
  const closure = verifiedMarketClosures.find((entry) =>
    entry.mic === instrument["Expected MIC"]
    && entry.from <= date && date <= entry.through
    && entry.sourceUrl && entry.evidence && entry.verifiedAt,
  );
  const validCarry = closure && previous
    && previous.mic === instrument["Expected MIC"]
    && Number.isFinite(previous.close) && previous.close > 0
    && (canonicalClose === null || canonicalClose === previous.close);
  const detail = {
    date, ticker: instrument.Ticker,
    sourceSymbol: instrument["Marketstack Symbol"],
    expectedMic: instrument["Expected MIC"],
    previousAvailableDate: previous?.date ?? null,
    previousAvailableClose: previous?.close ?? null,
  };
  if (validCarry) {
    verifiedClosures.push({ ...detail, holiday: closure.name,
      sourceUrl: closure.sourceUrl, evidence: closure.evidence,
      canonicalClose, status: "verified-market-closure" });
    return null;
  }
  return { ...detail, reason: closure
    ? "Closure carry-forward could not be reconciled with prior source close"
    : "Required observation unavailable; no verified market closure" };
}
const missingSourceObservations = canonicalDates.flatMap((date) =>
  instruments.filter((instrument) => !sourceByDateAndTicker.has(`${date}|${instrument.Ticker}`))
    .map((instrument) => checkMissing(date, instrument,
      closeByDateAndTicker.get(`${date}|${instrument.Ticker}`)))
    .filter(Boolean),
);
const missingRequiredObservations = instruments
  .filter((instrument) => !sourceByDateAndTicker.has(`${dateTo}|${instrument.Ticker}`))
  .map((instrument) => checkMissing(dateTo, instrument,
    closeByDateAndTicker.get(`${dateTo}|${instrument.Ticker}`) ?? null))
  .filter(Boolean);
const invalidObservations = sourceRows.filter((row) => !Number.isFinite(row.close) || row.close <= 0);
const seenObservationKeys = new Set();
const duplicateObservations = sourceRows.filter((row) => {
  const key = `${row.date}|${row.ticker}`;
  if (seenObservationKeys.has(key)) return true;
  seenObservationKeys.add(key);
  return false;
});
const paginationErrors = [constituentResult, benchmarkResult]
  .filter((result) => result.response.pagination?.total > result.response.data.length)
  .map((result) => ({ requestUrl: result.requestUrl, pagination: result.response.pagination }));
const requiredDateObservations = sourceRows.filter((row) => row.date === dateTo);
const passed = identityErrors.length === 0 && mismatches.length === 0
  && missingSourceObservations.length === 0 && missingRequiredObservations.length === 0
  && invalidObservations.length === 0 && duplicateObservations.length === 0
  && paginationErrors.length === 0;
const sortedRows = sourceRows.sort((left, right) =>
  left.date.localeCompare(right.date) || left.ticker.localeCompare(right.ticker),
);
const observationHeaders = [
  "Date",
  "Ticker",
  "Company",
  "Marketstack Symbol",
  "MIC",
  "Currency",
  "Type",
  "Close",
  "Adjusted Close",
  "Dividend",
  "Split Factor",
  "API Version",
];
const observationLines = sortedRows.map((row) => [
  row.date,
  row.ticker,
  row.company,
  row.sourceSymbol,
  row.mic,
  row.currency,
  row.type,
  row.close,
  row.adjustedClose,
  row.dividend,
  row.splitFactor,
  row.sourceApi,
]);

await fs.writeFile(
  observationsPath,
  `${[observationHeaders, ...observationLines].map((row) => row.map(csvCell).join(",")).join("\n")}\n`,
);

const audit = {
  fetchedAt,
  period: { from: dateFrom, through: dateTo, sourceFrom: sourceDateFrom },
  provider: "Marketstack",
  methodology: "Unadjusted local-currency closes for the price-return index",
  requests: [constituentResult.requestUrl, benchmarkResult.requestUrl],
  receiptPath: path.relative(root, receiptPath),
  status: passed ? "passed" : "failed",
  counts: {
    instruments: instruments.length,
    sourceObservations: sourceRows.length,
    comparedObservations: comparisons.length,
    matches: comparisons.length - mismatches.length,
    mismatches: mismatches.length,
    identityErrors: identityErrors.length,
    missingSourceObservations: missingSourceObservations.length,
    verifiedClosureObservations: new Set(verifiedClosures.map((row) => `${row.date}|${row.ticker}`)).size,
    requiredDateObservations: requiredDateObservations.length,
    missingRequiredObservations: missingRequiredObservations.length,
    invalidObservations: invalidObservations.length,
    duplicateObservations: duplicateObservations.length,
    paginationErrors: paginationErrors.length,
  },
  identityErrors,
  mismatches,
  missingSourceObservations,
  missingRequiredObservations,
  verifiedClosures,
  requiredDateObservations,
  invalidObservations,
  duplicateObservations,
  paginationErrors,
  comparisons,
};

await fs.writeFile(auditPath, `${JSON.stringify(audit, null, 2)}\n`);

console.log(
  `Marketstack audit: ${audit.counts.matches}/${audit.counts.comparedObservations} available closes matched; ${missingSourceObservations.length} canonical observations were unavailable from the source.`,
);
console.log(`Requested date ${dateTo}: ${requiredDateObservations.length}/17 source observations; ${missingRequiredObservations.length} unresolved missing. Verified closure observations: ${audit.counts.verifiedClosureObservations}. Audit: ${audit.status}.`);
console.log(`Receipt: ${audit.receiptPath}`);

if (
  identityErrors.length > 0
  || mismatches.length > 0
  || invalidObservations.length > 0 || duplicateObservations.length > 0
  || paginationErrors.length > 0
  || ((missingSourceObservations.length > 0 || missingRequiredObservations.length > 0) && !allowMissing)
) {
  process.exitCode = 1;
}
