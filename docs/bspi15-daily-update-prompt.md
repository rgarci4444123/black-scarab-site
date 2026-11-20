# BSPI15 daily update prompt

Update the Black Scarab Physical AI 15 for `[YYYY-MM-DD]`, the previous completed trading date, at 7:30 AM `America/New_York`. Keep older pending dates in chronological order.

Work in `/Users/rodolfogarcia/Desktop/black-scarab-site`.

Use Marketstack as the approved primary market data source. Load `MARKETSTACK_API_KEY` from `.env.local` and run `npm run audit:bspi15-marketstack -- --through=YYYY-MM-DD` before changing any canonical index data. If a required price is unavailable, delayed, or questionable, stop and identify the missing observation. Never estimate or invent market data.

Do not change the index constituents, methodology, base date, or target weights.

For every BSPI15 constituent:

1. Record the explicit requested trading date’s unadjusted closing price in its listing currency.
2. Compare it with the previous available closing price.
3. Carry forward the previous canonical price and assign a zero return only when an official exchange calendar verifies the closure. Retain the calendar URL and date.
4. Use verified `splits.json` events to express every historical comparison on one share basis. Original closes remain in canonical/audit inputs; calculation prices include the cumulative split factor. Register future routine splits only after verifying the exact trading ex-date and ratio against official evidence. Unverified or complex actions remain blocked.
5. Exclude dividends because BSPI15 is a price return index.
6. Calculate its local currency price return.
7. Calculate its drifted weight from the previous effective weight.

Calculate the new BSPI15 level as the previous index level multiplied by one plus the sum of each previous effective weight multiplied by its constituent return.

Record the official closing levels for the S&P 500 Price Return Index and Nasdaq Composite Price Return Index using the Marketstack index mappings in `data/bspi15/instruments.csv`. Run `npm run update:bspi15-daily -- --through=YYYY-MM-DD` to audit and append each pending complete row to `data/bspi15/daily-closes.csv` in chronological order. The command uses the previous completed Eastern date by default and preserves earlier rows. Update their rebased series using 1,000 on October 1, 2026 as the common baseline.

Retain the generated Marketstack receipt and `data/bspi15/marketstack-audit-latest.json` as the source paper trail. Do not use `adj_close` for the price-return index. Compare every available source observation with the canonical close and resolve any mismatch before continuing.

Update `outputs/bspi15-daily-review.xlsx`, the single cumulative, formula-based five-sheet workbook. Retain every prior reviewed date and its source receipts in `data/bspi15/review-history.json`. Use the bundled Node runtime to run `outputs/bspi15-work/build-history.mjs` after website data generation and reconcile its formulas against every website observation. Do not create date-specific workbooks. If the audit fails, save `outputs/bspi15-daily-status-YYYY-MM-DD.json` and wait without updating canonical data.

Run `npm run build:bspi15-performance`. This generates the website observations and current constituent weights from the daily closes file.

Confirm that the generated observation contains:

* Date and display date
* BSPI15 rebased level
* S&P 500 rebased level
* Nasdaq Composite rebased level
* Current drifted weight for all fifteen constituents

Do not change the target allocation donut. It represents the latest quarterly rebalance.

Check for splits, mergers, delistings, ticker changes, suspensions, and other corporate actions. Report any event requiring methodology treatment before changing the index.

Run type checking, linting, the production build, and desktop and mobile visual checks. Open the finished local preview at the Performance section. After all BSPI15 checks pass, automatically commit and push the reviewed BSPI15 changes to `origin/main` under Rodolfo’s standing October 20, 2026 authorization. Report known unrelated repository lint failures without blocking an otherwise verified update. Fetch current main first, preserve remote changes and unrelated local work, and stage only the reviewed BSPI15 files. Use an isolated temporary Git index when needed. Never force push or include credentials. Verify the remote commit, save a dated push receipt and include the commit link in the daily report. Retry verified unpublished changes on subsequent runs even if there is no new trading date. Stop and report push failures or conflicts. Do not run a separate manual deployment.

Report the BSPI15 closing level, daily change, since launch return, benchmark returns, excess returns, missing prices, market holidays, corporate actions, and changed files.

Ouster provider metadata exception, approved October 14, 2026: retain Nasdaq/XNAS in `instruments.csv`, constituent metadata and holdings CSV, but use Marketstack's OUST unadjusted closes carrying the legacy XNYS tag. Apply only the exact authorized exception in `data/bspi15/provider-mic-exceptions.json`. Keep raw MICs and receipts unchanged, and show the exception in the audit and review workbook. This exception does not authorize any other identity mismatch, missing observation, price substitution or corporate-action adjustment.

Keyence continuity and source exception, approved November 20, 2026: apply the verified 5-for-1 split from November 19 using `splits.json`. Honor only the exact November 18 official JPY 73,610 unadjusted close correction under `price-corrections.json`, retaining Marketstack’s received JPY 14,722 field and immutable receipts. The strict audit validates the authorization, identity, original provider value and official receipt hash. Show the exception separately in the audit and cumulative workbook. Do not extrapolate this exception to other dates, securities or values. All prior canonical prices and reviewed ledger entries remain unchanged. Verify the November 12 comparison and split-day continuity; neither daily nor since-launch returns, weights, benchmarks or contributions may contain a mechanical split loss. The strict audit also blocks unknown split flags, unreviewed dividend flags and split-neutral changes of 50% or more.
