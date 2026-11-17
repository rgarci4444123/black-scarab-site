// A reviewed cash dividend does not alter a price-return index's raw close.
export function reviewedCashDividend(observation, records) {
  if (records?.version !== 1 || records?.methodologyVersion !== '1.0' || !Array.isArray(records.events)) return null;
  if (!Number.isFinite(observation.dividend) || observation.dividend <= 0 || observation.splitFactor !== 1) return null;
  const events = records.events.filter(event =>
    event.kind === 'cash-dividend' && event.treatment === 'exclude-cash-dividend'
    && event.methodologyVersion === '1.0' && event.id && event.evidence
    && /^https:\/\//.test(event.sourceUrl) && Number.isFinite(Date.parse(event.reviewedAt))
    && ['ticker', 'date', 'sourceSymbol', 'expectedMic', 'currency', 'sourceApi', 'dividend', 'splitFactor']
      .every(key => event[key] === observation[key]));
  return events.length === 1 ? events[0] : null;
}
