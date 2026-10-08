# BSPI15 daily update prompt

Update the Black Scarab Physical AI 15 for `[YYYY-MM-DD]` after all tracked markets have closed.

Work in `/Users/rodolfogarcia/Desktop/black-scarab-site`.

Use Marketstack as the approved primary market data source. Load `MARKETSTACK_API_KEY` from `.env.local` and run `npm run audit:bspi15-marketstack` before changing any canonical index data. If a required price is unavailable, delayed, or questionable, stop and identify the missing observation. Never estimate or invent market data.

Do not change the index constituents, methodology, base date, or target weights.

For every BSPI15 constituent:

1. Record the latest unadjusted closing price in its listing currency.
2. Compare it with the previous available closing price.
3. Carry forward the previous price and assign a zero return when its exchange was closed.
4. Apply split adjustments when necessary.
5. Exclude dividends because BSPI15 is a price return index.
6. Calculate its local currency price return.
7. Calculate its drifted weight from the previous effective weight.

Calculate the new BSPI15 level as the previous index level multiplied by one plus the sum of each previous effective weight multiplied by its constituent return.

Record the official closing levels for the S&P 500 Price Return Index and Nasdaq Composite Price Return Index using the Marketstack index mappings in `data/bspi15/instruments.csv`. Add one complete row to `data/bspi15/daily-closes.csv`. Update their rebased series using 1,000 on October 1, 2026 as the common baseline.

Retain the generated Marketstack receipt and `data/bspi15/marketstack-audit-latest.json` as the source paper trail. Do not use `adj_close` for the price-return index. Compare every available source observation with the canonical close and resolve any mismatch before continuing.

Run `npm run build:bspi15-performance`. This generates the website observations and current constituent weights from the daily closes file.

Confirm that the generated observation contains:

* Date and display date
* BSPI15 rebased level
* S&P 500 rebased level
* Nasdaq Composite rebased level
* Current drifted weight for all fifteen constituents

Do not change the target allocation donut. It represents the latest quarterly rebalance.

Check for splits, mergers, delistings, ticker changes, suspensions, and other corporate actions. Report any event requiring methodology treatment before changing the index.

Run type checking, linting, the production build, and desktop and mobile visual checks. Open the finished local preview at the Performance section. Do not deploy until I approve it.

Report the BSPI15 closing level, daily change, since launch return, benchmark returns, excess returns, missing prices, market holidays, corporate actions, and changed files.
