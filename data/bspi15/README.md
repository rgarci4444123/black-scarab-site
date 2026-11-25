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

## Split continuity and source corrections

`daily-closes.csv` retains original, unadjusted closes. `splits.json` records verified exchange trading dates and split ratios under methodology 1.0. Calculation prices are expressed on the latest share basis: original close × cumulative split factor on that date ÷ latest cumulative split factor. All historical comparisons, launch returns, contributions and drifted weights use that same basis. The website's direct price-relative index and the workbook's sequential contribution index reconcile. Quarterly equal-weight reviews remain unchanged.

Keyence's verified 5-for-1 split starts with the November 19, 2026 trading session, as confirmed by [JPX](https://www.jpx.co.jp/english/news/2020/20260105-01.html) and [Nikkei](https://indexes.nikkei.co.jp/nkave/archives/news/20261106E_1.pdf). November 12's original JPY 75,030 is JPY 15,006 on the new share basis. November 18's original JPY 73,610 is JPY 14,722; the November 19 JPY 14,690 close therefore represents a 0.2174% decline. Existing canonical rows, immutable receipts and reviewed ledger entries are preserved.

Rodolfo approved the November 18 Keyence source exception on November 20, 2026. `price-corrections.json` accepts only the exact 6861.T/XJPX/JPY/v2 observation and known erroneous provider close, with the correct JPY 73,610 close verified against the retained official JPX daily report, page 26. It records the original provider value, corrected unadjusted value, evidence hash, authorization and date. A corrected provider response is accepted normally. Any different erroneous value or identity still fails. Raw receipts and `marketstack-observations.csv` remain unchanged; the audit and workbook show the approved correction separately.

## Daily command

Run `npm run update:bspi15-daily -- --through=YYYY-MM-DD` for the previous completed trading date. Without `--through`, the command selects the prior weekday in `America/New_York`, including daylight-saving changes. It audits and appends pending eligible dates in chronological order, one complete row at a time. It omits weekends and dates when all actual exchange MICs have documented closures. An individual closed market requires existing verified calendar evidence and its previous canonical close. It rejects a current or future date, an audit failure, an unreviewed split/dividend or a split-neutral price change of 50% or more. It never infers a split or multiplies an arbitrary provider value to clear an error.

After the command succeeds, run the bundled Node runtime with `outputs/bspi15-work/build-history.mjs`, then the required reconciliations, tests, type checking, lint, production build, desktop/mobile and holdings CSV checks. Run `npm run test:bspi15` after changes to the split, source or calculation code. The cumulative workbook includes original prices, calculation prices, cumulative split factors, source correction evidence and corporate-action treatment in the same five sheets. Its saved formulas must recalculate and reconcile before publication.

For a future split or reverse split, verify the exact security, exchange-local first adjusted trading date and ratio against official exchange/issuer evidence. Register the reviewed event once in `splits.json`; the daily calculation and workbook then apply it automatically to every comparison crossing the event. Preserve the source, review date and authorization basis. Unverified events, mergers, spin-offs and source errors outside an approved exact correction remain review stops. Never use dividend-adjusted prices for this price-return index.

## Reviewed cash dividends

`corporate-action-treatments.json` records evidence for each reviewed provider dividend flag. The cumulative workbook accepts only an exact date, security, currency, API and amount match, retains the flag and source, and excludes cash from the price-return calculation. Unreviewed dividend flags and unresolved split treatment still block updates.

The audit follows all Marketstack pages as history grows. It retains each original page response when pagination is needed, plus an aggregate of the unchanged observations. Inconsistent totals, duplicate observations and stalled pagination remain failures.

## Temporary validation copies

Before creating an isolated production-build copy, check available disk space. Retain the latest review preview. Remove obsolete generated BSPI15 validation copies after a successful push, or when space is needed, only when their exact directories are recorded in older verified push receipts and lie under `/private/tmp/bspi15-`. Verify that a copy is not the current preview; if stopping its server, require its process working directory to match that exact copy. Keep canonical data, source receipts, review workbooks, project working files and unrelated temporary directories intact. Record reclaimed space and any cleanup in the daily report.
