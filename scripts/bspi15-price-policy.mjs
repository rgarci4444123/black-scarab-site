import assert from 'node:assert/strict';

export function validateSplits(records) {
  assert.equal(records.version, 1);
  assert.equal(records.methodologyVersion, '1.0');
  const keys = new Set();
  for (const event of records.events) {
    const key = `${event.ticker}|${event.effectiveTradingDate}`;
    assert(!keys.has(key), `Duplicate split: ${key}`); keys.add(key);
    assert(event.id && event.ticker && /^\d{4}-\d{2}-\d{2}$/.test(event.effectiveTradingDate));
    assert(Number.isFinite(event.ratio) && event.ratio > 0 && event.ratio !== 1);
    assert(event.effectiveTradingDate > '2026-10-01' && event.sourceUrl?.startsWith('https://'));
    assert(event.reviewedAt && event.authorization && event.methodologyVersion === '1.0');
  }
  return records;
}

export function splitFactor(ticker, date, splits) {
  return splits.events.filter(e => e.ticker === ticker && e.effectiveTradingDate <= date)
    .reduce((factor, event) => factor * event.ratio, 1);
}

export function splitOn(ticker, date, splits) {
  return splits.events.find(e => e.ticker === ticker && e.effectiveTradingDate === date) ?? null;
}

// Exact, evidenced corrections only. A changed provider value must be reviewed again.
export function resolvePrice(observation, records) {
  assert.equal(records.version, 1);
  assert.equal(records.methodologyVersion, '1.0');
  assert(Number.isFinite(observation.close) && observation.close > 0, 'Invalid raw close');
  const candidates = records.corrections.filter(e => e.ticker === observation.ticker && e.date === observation.date);
  assert(candidates.length <= 1, 'Duplicate price correction');
  if (!candidates.length) return {close:observation.close, correction:null};
  const event = candidates[0];
  assert(event.id && event.authorization && event.approvedAt && event.sourceUrl?.startsWith('https://'));
  assert(event.receipt && /^[a-f0-9]{64}$/.test(event.receiptSha256));
  assert(Number.isFinite(event.correctedClose) && event.correctedClose > 0);
  for (const key of ['sourceSymbol','mic','currency','sourceApi']) assert.equal(observation[key],event[key],`Correction identity: ${key}`);
  assert.equal(observation.sourceName,event.sourceName,'Correction security name');
  assert.equal(observation.sourceCurrency,event.currency,'Correction source currency');
  if (observation.close === event.correctedClose) return {close:observation.close,correction:null};
  assert.equal(observation.close,event.providerClose,'Provider close changed outside the approved correction');
  assert.equal(observation.adjustedClose,event.providerAdjustedClose,'Provider adjusted close changed');
  assert.equal(observation.splitFactor,event.providerSplitFactor,'Provider split flag changed');
  return {close:event.correctedClose,correction:event};
}

export function priceContinuityIssues(rows, splits) {
  const issues = [];
  const previous = new Map();
  for (const row of [...rows].sort((a,b) => a.date.localeCompare(b.date))) {
    const event = splitOn(row.ticker,row.date,splits);
    if (row.splitFactor !== 1 && (!event || row.splitFactor !== event.ratio)) {
      issues.push({date:row.date,ticker:row.ticker,reason:'Unreviewed provider split flag',received:row.splitFactor});
    }
    const prior = previous.get(row.ticker);
    if (prior && row.type !== 'Benchmark') {
      const value = row.validatedClose * splitFactor(row.ticker,row.date,splits)
        / (prior.validatedClose * splitFactor(prior.ticker,prior.date,splits)) - 1;
      if (Math.abs(value) >= 0.5) issues.push({date:row.date,ticker:row.ticker,reason:'Split-neutral price change requires review',dailyReturn:value});
    }
    previous.set(row.ticker,row);
  }
  return issues;
}
