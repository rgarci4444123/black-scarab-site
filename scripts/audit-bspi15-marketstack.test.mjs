import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import test from "node:test";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const instrumentCsv = await fs.readFile(path.join(root, "data/bspi15/instruments.csv"), "utf8");
const instruments = instrumentCsv.trim().split("\n").slice(1).map((line) => {
  const [ticker, company, symbol, mic, exchange, currency, type] = line.split(",");
  return { ticker, company, symbol, mic, exchange, currency, type };
});
const closures = await fs.readFile(path.join(root, "data/bspi15/verified-market-closures.json"), "utf8");
async function scenario(change = () => {}) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "bspi15-audit-test-"));
  try {
    const data = path.join(dir, "data/bspi15");
    await fs.mkdir(data, { recursive: true });
    await fs.writeFile(path.join(data, "instruments.csv"), instrumentCsv);
    await fs.writeFile(path.join(data, "verified-market-closures.json"), closures);
    let canonical = instruments.map(() => 100);
    let rows = instruments.flatMap((i) => [
      { symbol: i.symbol, exchange: i.mic, date: "2026-09-30T00:00:00+0000", close: 100, adj_close: 100 },
      ...(i.mic === "XSHE" ? [] : [{ symbol: i.symbol, exchange: i.mic, date: "2026-10-01T00:00:00+0000", close: 100, adj_close: 100 }]),
      { symbol: i.symbol, exchange: i.mic, date: "2026-10-08T00:00:00+0000", close: 101, adj_close: 101 },
    ]);
    const state = { canonical, rows, paginationExtra: 0 };
    change(state);
    await fs.writeFile(path.join(data, "daily-closes.csv"),
      `Date,${instruments.map((i) => i.ticker).join(",")}\n2026-10-01,${state.canonical.join(",")}\n`);
    const responses = {};
    for (const version of ["v1", "v2"]) {
      const selected = state.rows.filter((row) => (row.exchange === "INDX") === (version === "v1"));
      responses[version] = { pagination: { count: selected.length, total: selected.length + state.paginationExtra }, data: selected };
    }
    await fs.writeFile(path.join(dir, "responses.json"), JSON.stringify(responses));
    const entry = pathToFileURL(path.join(root, "scripts/audit-bspi15-marketstack.mjs")).href;
    await fs.writeFile(path.join(dir, "run.mjs"), `import fs from "node:fs/promises"; const responses = JSON.parse(await fs.readFile("responses.json", "utf8")); globalThis.fetch = async (url) => ({ ok: true, json: async () => responses[new URL(url).pathname.includes("/v2/") ? "v2" : "v1"] }); await import(${JSON.stringify(entry)});`);
    const result = spawnSync(process.execPath, ["run.mjs", "--through=2026-10-08"], { cwd: dir, env: { ...process.env, MARKETSTACK_API_KEY: "fixture-only" }, encoding: "utf8" });
    assert.equal(result.signal, null, result.stderr);
    const audit = JSON.parse(await fs.readFile(path.join(data, "marketstack-audit-latest.json"), "utf8"));
    return { code: result.status, audit };
  } finally { await fs.rm(dir, { recursive: true, force: true }); }
}

test("verified holiday carry-forward passes with all requested closes", async () => {
  const { code, audit } = await scenario();
  assert.equal(code, 0); assert.equal(audit.status, "passed");
  assert.equal(audit.counts.verifiedClosureObservations, 2);
  assert.equal(audit.counts.requiredDateObservations, 17);
});
test("missing live-market close fails even before its canonical row exists", async () => {
  const { code, audit } = await scenario((s) => { s.rows = s.rows.filter((r) => !(r.symbol === "002747.SZ" && r.date.startsWith("2026-10-08"))); });
  assert.equal(code, 1); assert.equal(audit.missingRequiredObservations[0].ticker, "002747");
});
test("historical carry-forward must equal the prior source close", async () => {
  const { code, audit } = await scenario((s) => { s.canonical[2] = 99; });
  assert.equal(code, 1); assert.equal(audit.counts.missingSourceObservations, 1);
});
test("wrong exchange MIC fails", async () => {
  const { code, audit } = await scenario((s) => { s.rows.find((r) => r.symbol === "TER").exchange = "XNYS"; });
  assert.equal(code, 1); assert.equal(audit.counts.identityErrors, 1);
});
test("nonpositive close fails", async () => {
  const { code, audit } = await scenario((s) => { s.rows.find((r) => r.symbol === "TER" && r.date.startsWith("2026-10-08")).close = 0; });
  assert.equal(code, 1); assert.equal(audit.counts.invalidObservations, 1);
});
test("earlier canonical mismatch fails", async () => {
  const { code, audit } = await scenario((s) => { s.canonical[0] = 99; });
  assert.equal(code, 1); assert.equal(audit.counts.mismatches, 1);
});
test("duplicate observation fails", async () => {
  const { code, audit } = await scenario((s) => { s.rows.push({ ...s.rows[0] }); });
  assert.equal(code, 1); assert.equal(audit.counts.duplicateObservations, 1);
});
test("incomplete pagination fails", async () => {
  const { code, audit } = await scenario((s) => { s.paginationExtra = 1; });
  assert.equal(code, 1); assert.equal(audit.counts.paginationErrors, 2);
});
