# BSPI15 daily data

`daily-closes.csv` is the canonical website input. Add one row after all tracked markets have closed, then run `npm run build:bspi15-performance`.

Marketstack is the approved primary source. Set `MARKETSTACK_API_KEY` in `.env.local`, then run `npm run audit:bspi15-marketstack` before changing the canonical file. The audit downloads unadjusted closes plus a fourteen-day lookback, validates every symbol against its expected exchange MIC, compares source observations with recorded closes, and saves an immutable raw receipt under `data/bspi15/raw/marketstack/`. Missing observations make the audit fail so a delayed feed cannot be mistaken for an exchange holiday. Use `--allow-missing` only for a documented review run that will not change canonical data.

Each constituent close is recorded in its listing currency. The index therefore measures local price returns and excludes foreign exchange movements. Dividends are excluded.

If an exchange is closed, carry forward the previous available close. Estun Automation and Inovance use their September 30, 2026 closes for October 1 through October 7 because Shenzhen was closed for the National Day holiday.

The October 1 and October 2 seed observations were retrieved from the archived Marketstack audit receipt. The October 5 through October 7 seed data was initially retrieved from the Yahoo Finance chart endpoint on October 7, 2026 and reconciled against Marketstack where observations were available. Marketstack is retained as the auditable source going forward. Siemens and Hexagon use the final regular market prices for October 7 because the daily observations had not yet finalized at collection time.

`instruments.csv` owns the mapping between BSPI15 tickers, Marketstack symbols, and expected exchange MICs. Constituents use Marketstack v2. The S&P 500 and Nasdaq Composite price-return benchmarks use Marketstack v1 index symbols because those exact index series are not exposed by the v2 benchmark directory.

`marketstack-observations.csv` is regenerated from the latest API audit. It preserves raw close, adjusted close, dividend, split factor, exchange MIC, and source API version for inspection. The price-return calculation uses only the unadjusted `Close` field.
