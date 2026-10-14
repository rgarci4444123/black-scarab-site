export function approvedProviderMicException(row, exceptions) {
  return exceptions.find(e => e.id === "ouster-marketstack-legacy-nyse-tag"
    && e.ticker === "OUST" && row.ticker === e.ticker
    && e.sourceSymbol === "OUST" && row.sourceSymbol === e.sourceSymbol
    && e.apiVersion === "v2" && row.sourceApi === e.apiVersion
    && e.expectedMic === "XNAS" && row.expectedMic === e.expectedMic
    && e.acceptedSourceMic === "XNYS" && row.mic === e.acceptedSourceMic
    && e.currency === "USD" && row.currency === e.currency
    && row.sourceCurrency === e.currency && e.sourceNames.includes(row.sourceName)
    && row.date >= e.from && (!e.through || row.date <= e.through)
    && e.approvedAt && e.authorization && e.identityEvidence?.length);
}
