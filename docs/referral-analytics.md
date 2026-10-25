# Referral button measurement

Added October 25, 2026 for the micro1 company data article. The shared referral template also measures the Compute Exchange referral card. Existing referral URLs, referral codes, destination query parameters and disclosure text are preserved.

## Events in Vercel Web Analytics

- **Referral CTA View**: at least 50 percent of a referral button or linked card enters the viewport. Recorded once per link per article page visit.
- **Referral CTA Click**: a referral link is activated, including clicks on its child elements, keyboard activation and middle clicks. Opening the link is not delayed or intercepted.

Both events use two custom properties, `placement` and `cta_version`, within the standard Pro plan limit. Vercel associates events with the page path. Referral codes and URL query parameters are not included in custom event properties.

For the micro1 article:

- `placement`: `article_top` for the beginning button and `article_end_primary` for the matching button after the verdict. Earlier events may include `article_end_additional` from the removed all opportunities card.
- `cta_version`: `micro1-data-revenue-v1`
- Top button: **Get paid for your company’s data**

## Read the results

Open the project in Vercel, choose Analytics, and filter the page to `/insights/sell-company-data-ai-micro1-data-partnerships-referrals`. In Events, open **Referral CTA Click** and inspect the placement and version properties. Use `article_top` to answer how many people clicked the beginning button. Use `article_end_primary` for the matching button at the end.

For a view-to-click rate, use the Visitors counts for **Referral CTA Click** divided by **Referral CTA View**, with matching article, placement, version and date filters. Totals count repeated events; do not treat them as unique people. For a page-to-click rate, compare click visitors with article visitors for the same period.

Measurement begins with this deployment. There is no historical click baseline for this button, so the first version establishes one. A click records a handoff to micro1, not a completed application or paid partnership.

## Screenshot interpretation

The user supplied a screenshot showing 166 visitors, 197 page views, a 78 percent bounce rate and 70 visitors with 113 Insight Read events. Insight Read records 50 and 90 percent scroll milestones, so 70 is the number of visitors with at least one recorded milestone, not 70 completed applications or full article reads. The existing implementation did not instrument these external referral links. Absence of a referral event therefore does not establish zero clicks.

## Validation

Run `npm run test:referral-analytics` for nested clicks, attribution preservation, impression thresholds and deduplication, middle clicks, source-event isolation and navigation cleanup. Run source lint and the production build. Review the article at desktop and mobile widths. Change `analyticsVersion` when deliberately revising the micro1 CTA again.

Reference: https://vercel.com/docs/analytics/custom-events

Plan limits reference: https://vercel.com/docs/analytics/limits-and-pricing

## micro1 link cleanup, October 25, 2026

At Rodolfo’s request, routine body hyperlinks and the linked Sources list were converted to plain text. The three existing micro1 referral links remain with their referral code, placement markers and analytics version preserved. Source names and prose attribution remain visible; the original research URLs are retained in the link cleanup research record and Git history. Treat this deployment as a separate conversion context when comparing date ranges.

## Matching end card, October 25, 2026

At Rodolfo’s request, the final Explore a Company Data Partnership section and its two opportunity cards were replaced by the same revenue card used at the top. Both buttons say Get paid for your company’s data and use exactly the same selected paid referral URL, including its referral code and link ID. The end button retains article_end_primary for view and click measurement; article_end_additional is now historical. The top card and its attribution are unchanged.
