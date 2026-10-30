# BSPI15 daily data

`daily-closes.csv` is the canonical website input. Run the update at 7:30 AM `America/New_York` for the previous completed trading date. Add one row after every required close passes the strict audit, then run `npm run build:bspi15-performance`.

Marketstack is the approved primary source. Set `MARKETSTACK_API_KEY` in `.env.local`, then run `npm run audit:bspi15-marketstack` before changing the canonical file. The audit downloads unadjusted closes plus a fourteen-day lookback, validates every symbol against its expected exchange MIC, compares source observations with recorded closes, and saves an immutable raw receipt under `data/bspi15/raw/marketstack/`. Missing observations make the audit fail so a delayed feed cannot be mistaken for an exchange holiday. Use `--allow-missing` only for a documented review run that will not change canonical data.

Each constituent close is recorded in its listing currency. The index therefore measures local price returns and excludes foreign exchange movements. Dividends are excluded.

If an exchange is closed, carry forward the previous available close. Estun Automation and Inovance use their September 30, 2026 closes for October 1 through October 7 because Shenzhen was closed for the National Day holiday.

The October 1 and October 2 seed observations were retrieved from the archived Marketstack audit receipt. The October 5 through October 7 seed data was initially retrieved from the Yahoo Finance chart endpoint on October 7, 2026 and reconciled against Marketstack where observations were available. Marketstack is retained as the auditable source going forward. Siemens and Hexagon use the final regular market prices for October 7 because the daily observations had not yet finalized at collection time.

`instruments.csv` owns the mapping between BSPI15 tickers, Marketstack symbols, and expected exchange MICs. Constituents use Marketstack v2. The S&P 500 and Nasdaq Composite price-return benchmarks use Marketstack v1 index symbols because those exact index series are not exposed by the v2 benchmark directory.

`marketstack-observations.csv` is regenerated from the latest API audit. It preserves raw close, adjusted close, dividend, split factor, exchange MIC, and source API version for inspection. The price-return calculation uses only the unadjusted `Close` field.

## Consolidated review workbook

`outputs/bspi15-daily-review.xlsx` holds every reviewed trading date in five sheets: Summary, Prices, Returns and Contributions, Source Audit, and Corporate Actions. Update this same workbook after each successful daily audit. Do not create a separate workbook for each date.

Run the bundled Node runtime with `outputs/bspi15-work/build-history.mjs` from the project root. The builder validates all new dates against a passing audit, appends their inputs and immutable receipt references to `review-history.json`, and regenerates the cumulative workbook with inspectable formulas. Previously reviewed canonical prices must remain identical. All dates, levels, benchmarks, weights and contributions must reconcile before export. The October 1 through October 8 history was reconciled to the October 9 morning Marketstack receipt.

Use each exchange's local trading date for prices and UTC timestamps for retrieval. Always request an explicit date, since Asia may already have completed the next session when the morning update runs. Use exchange calendars separately: a holiday in one country does not close every market. Preserve pending dates in order. If any open-market observation remains missing, save the status report and wait. Carry forward only a verified exchange closure with calendar evidence. Dates when all tracked exchanges are closed do not create new trading observations.

## Ouster mapping correction

On October 14, 2026, Rodolfo approved correcting OUST from NYSE (`XNYS`) to Nasdaq (`XNAS`). The listing transfer took effect December 23, 2024. `instrument-mapping-corrections.json` records the approval and official source evidence. The website constituent metadata uses Nasdaq.

Marketstack still returns `XNYS` for OUST. Rodolfo explicitly approved using that Marketstack price series on October 14, 2026 while retaining Nasdaq (`XNAS`) in the official mapping and website. `provider-mic-exceptions.json` records the scoped authorization. The audit accepts only OUST/v2/USD with the approved Ouster security name and legacy `XNYS` tag, and reports every accepted observation separately. All other MIC, missing-price, history, corporate-action and calculation checks remain required. Raw receipts and received MICs remain unchanged. The cumulative workbook displays expected `XNAS`, received `XNYS`, and the approved exception.

## Automatic Git pushes

Rodolfo granted standing authorization on October 20, 2026 to commit and push verified BSPI15 updates to `origin/main` after the daily workflow passes. Keep the 7:30 AM America/New_York schedule and the strict data audit. Missing prices, unapproved identities, unresolved corporate actions or BSPI15 verification failures still block publication. Report known unrelated repository lint failures without blocking a verified BSPI15 update.

Fetch the latest remote main, preserve its changes and unrelated local work, and stage only the reviewed BSPI15 data, immutable receipts, cumulative workbook and review history, website data, dated reports and relevant BSPI15 documentation or fixes. Use an isolated temporary Git index when the shared checkout contains unrelated work. Never force push or include credentials. Verify the pushed commit on `origin/main`, save a dated push receipt and include the commit link in the daily report. Retry verified unpublished changes on the next run, even when there is no new trading date. Stop and report push failures or conflicts. A separate manual deployment remains outside this workflow.

## Upcoming corporate actions

Keyence (6861) announced a 5-for-1 split on October 29, 2026, with a November 20 record date and November 21 legal effective date. The announcement does not change October 29 prices or index units. [Official split notice](https://www.keyence.co.jp/pdf/PressRelease_20261029_02.pdf) and the related [dividend notice](https://www.keyence.co.jp/pdf/PressRelease_20261029_01.pdf) are retained under `raw/corporate-actions/2026-10-29-keyence/` with retrieval timestamps and hashes. The interim dividend uses the September 20 record date and is payable November 26; cash dividends remain excluded.

Before appending the first split-priced close, verify the official exchange ex-date and apply and reconcile methodology v1.0 split treatment across both index calculations and the cumulative workbook. Preserve earlier unadjusted canonical closes. The current raw-price/base-price calculation must not interpret the mechanical split as a loss. An unresolved effective split blocks the update.
