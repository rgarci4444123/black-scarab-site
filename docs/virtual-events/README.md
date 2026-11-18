# Virtual events directory

The implementation is based on production repository commit `85c774f847364207bba025fe0a1eb247deb6c453`, in an isolated checkout because the Desktop copy contained older event rendering and unrelated uncommitted work.

## Website

`/events` retains the live in-person calendar and its existing expiration handling. Its only page change is the two-link navigation below `SectionHero`. `/events/virtual` reuses the shared frame, hero, header, signup form and footer, with a compact chronological calendar and muted teal active tab. Both routes participate in browser history.

Only explicitly approved records with unchanged approval fingerprints pass the public gate. Official details, online attendance, schedule and registration links are verified before approval. Per Rodolfo's November 18, 2026 direction, approved listings receive no follow-up cancellation, change or registration checks. The public page reads saved approved records without contacting organizers. Verification age does not remove an already approved listing; candidates still require recent verification before approval. No search or language-model credentials are needed by the public site.

The calendar is prerendered and cached, with five-minute regeneration to advance the attendance window. Regeneration reads local records only. Request headers are read only for the development preview. A route loading state keeps the shared layout and tabs responsive during uncached navigation.

The next 30 days are shown, limited to 20 events, in chronological order. Both tabs use the same monthly groups, event rows, typography and action buttons. Server HTML uses explicit UTC dates and times; the browser converts month groups, dates and times to its local IANA zone. Open pages remove started events every 30 seconds and when visibility changes. Since the directory is for upcoming attendance, events leave the public list at their start; internal expiration uses a confirmed end when available and otherwise the start. End times are never fabricated.

Metadata includes a canonical URL and social description, the sitemap includes the route, and eligible visible listings receive Event JSON-LD. Existing Vercel Analytics records `Virtual Events Visit` and `Virtual Event Registration Click` with event ID and organizer.

## Discovery and storage

`data/virtual-events/sources.json` contains 40 organizers across the three requested tiers. Located event URLs are recorded explicitly. Organizations without a located calendar use their official homepage and discovered same-domain event links; a guessed events endpoint is never inserted. Extend this registry to add sources or verified timezone aliases.

`events.json` retains candidates, approvals, rejections, cancellations and expired records. Records include UTC and source timestamps, evidence excerpts, registration/source URLs, weighted score and rationale, review identity, a fingerprint, URL aliases and change notes. `publishedAt` stays null until an actual deployment timestamp is recorded; approval itself is not a verified deployment.

Retrieval uses ordinary public HTTPS with bounded redirects, response sizes, timeouts and source depth, and four source workers. Restricted pages, CAPTCHAs, HTTP errors and rate limits become failed checks. Adapters support JSON-LD Event records, non-recurring ICS events with explicit UTC or TZID, RSS/Atom links, and conservative single-event HTML schedules. Floating dates, all-day dates, ambiguous daylight-saving wall times, missing time zones and on-demand recordings are withheld. An optional OpenAI Responses API adapter, capped at 24 calls per scan, extracts exact evidence from retrieved HTML and drafts original summaries; dates are parsed independently of the model. Without it, structured candidates may require an editor to write the summary.

Weekly Brave Search queries cover a date-aware 60-day horizon. Results from registered official domains are retrieved and verified. New domains enter `organizer-leads.json` for identity review and registry addition. Search snippets never verify an event or confer organizer credibility.

Scores use relevance 35, credibility 25, education 20, topic/speaker quality 10, accessibility 10. Deterministic matches and tier assignments are recorded in each rationale; 80+ is high priority, 65–79 secondary, and below 65 is rejected. A named editor may supply an explicit low-score override; a score override cannot substitute for verification. Human review remains the final relevance and substantive-quality judgment. A paid event requires a confirmed disclosed price. Unknown cost is retained without a free claim.

An editor who independently checks an official page in a browser can record manual verification with a reviewer, evidence note, source URLs and a fingerprint of the exact event facts. This handles HTTP 403/429 restrictions, JavaScript-only programme shells, or schedule/attendance facts that need browser review. It expires at the event start or 30 days after review, whichever comes first. Explicit cancellation, changed facts, missing/broken registration pages and unrecognized failures still hide the event. Automated errors remain recorded as errors; human verification does not manufacture an automated success or a new `lastVerifiedAt`. Factual or editorial edits invalidate both verification and approval fingerprints.

URL normalization removes tracking parameters. Organizer/title/session-day identities catch alternate event URLs; stable URL aliases catch rescheduling. Editorial changes to stored material facts invalidate approval. Discovery leaves approved records unchanged, including when the same session is found again; distinct sessions on a shared programme page can still enter review. Identical rejected candidates remain rejected. The scan and editorial commands share a local exclusive lock and write JSON atomically. GitHub jobs share a concurrency group. A stale local `.scan.lock` must be removed only after confirming the process ended.

## Schedules and persistence

`.github/workflows/virtual-events.yml` defines these IANA-aware schedules in `America/New_York`:

| Operation | Time |
| --- | --- |
| New event discovery, candidate verification, expiration | Daily, 8:00 AM Eastern |
| Broad discovery | Tuesday, 9:00 AM Eastern |
| New/changed editorial batch | Tuesday and Friday, 10:00 AM Eastern |

GitHub schedules are best effort, not exact-time guarantees. Approved event URLs are not added to the scan queue for follow-up verification, and approved records are excluded from the candidate recheck pass. Each job continues the persistent `codex/virtual-events-review` branch, merges the latest default branch, saves state, and opens or updates one review pull request. Verification failures and provider configuration appear in `scan-status.json`, logs and retained workflow artifacts. An all-source retrieval failure fails the scan. A broad scan without search credentials reports `not-configured` and fails visibly while preserving any feasible official-source results. Merge conflicts stop the job for resolution rather than overwriting state.

Review batches contain at most 20 new or materially changed candidates. Their notification fingerprint excludes routine verification timestamps, so unchanged candidates do not repeat. Rejected candidates remain in history. Historical records keep the database useful without adding a separate service.

## Approving, rejecting and editing

After activation, open **GitHub → Actions → Virtual events discovery and review → Run workflow**. Choose `review` to prepare a batch, or `approve`/`reject` with an event ID from the batch. The optional summary and display-title inputs edit those fields before approval. Your GitHub identity is recorded as reviewer. Approval reruns live verification and checks a 12–24 word editorial description before setting an approval fingerprint. Descriptions use one short sentence; official titles remain complete. The user's Very High curated priorities use the same red Priority badge as in-person anchor events.

For factual edits beyond title/summary, check out the review branch and edit the JSON, then use the commands below. Match every field to the linked authoritative source and rerun approval. Directly changing approved content invalidates its fingerprint and hides it.

```sh
npm run events:scan
npm run events:discover
npm run events:review
npm run events:approve -- EVENT_ID 'Reviewer name'
npm run events:reject -- EVENT_ID 'Reviewer name'
npm run validate:virtual-events
npm run test:virtual-events
```

Set `EVENT_SUMMARY`, `EVENT_DISPLAY_TITLE`, `EVENT_REVIEWER` and, if needed, `EVENT_OVERRIDE_REASON` in the command environment. The Actions form supplies these without shell interpolation. `events:import -- /absolute/path/candidate.json` supports manually researched records in the same schema and always resets them to candidate status and rechecks their links.

For an explicitly authorized independent browser review, the existing approval command also accepts `EVENT_MANUAL_VERIFIED=1` and a required `EVENT_VERIFICATION_NOTE`. This is a separate named human attestation, not an automation default. On November 17, 2026, Rodolfo approved publishing all 20 curated entries after confirming independent verification; the records retain that decision and the source audit.

Review the resulting pull-request diff and merge it to the default branch. The existing Vercel Git integration can then deploy the approved records; confirm that deployment succeeded. Merging unapproved candidates leaves them hidden. Automatic publication is deliberately absent; future trusted-source publication can reuse the same verification and fingerprint gates but must be an explicit new policy.

## Activation and credentials

1. Merge the implementation pull request to the repository default branch and verify the existing Vercel deployment at `/events` and `/events/virtual`.
2. Enable the Actions workflow. In repository **Settings → Actions → General**, allow GitHub Actions to create pull requests. The current repository setting returned `can_approve_pull_request_reviews: false`, so review-PR creation needs this one-time setting. The workflow explicitly requests `contents: write` and `pull-requests: write` and never merges its own PR.
3. Add repository secret `BRAVE_SEARCH_API_KEY` for weekly industry search. This key is absent from the inspected repository secret list.
4. Optionally add repository secret `OPENAI_API_KEY` and repository variable `VIRTUAL_EVENTS_OPENAI_MODEL` for HTML extraction and original summary drafts. Neither is configured in the inspected repository. The model must support the Responses API and strict JSON-schema output. No model is silently selected.
5. Run `daily` and `broad` manually, inspect diagnostics, then review and approve suitable candidates. JavaScript-only or restricted sources may need a public feed or a source-specific adapter; do not bypass their restrictions.

No database, CMS, separate cron service or new analytics dependency is required. GitHub Actions provides `GITHUB_TOKEN`; it is not stored in source. No API key is exposed through Next.js public environment variables. Search and model API account billing must be configured in those services by the owner.

## Validation and known limits

The event routes share `app/events/layout.tsx`, so the site navigation, Events / Physical AI Events header, short description, tabs and footer persist while the listings change. Tabs preserve the current scroll position.

For local visual review of the submitted 20, set `BLACK_SCARAB_VIRTUAL_EVENTS_PREVIEW=1` in `.env.local` and run the development server. This preview requires a loopback host and is disabled in production and Vercel environments. It uses only IDs from the curated intake and retains the future-date window. The catalogue's approval state is unchanged.

The November 16 curated intake added only the latest 20 submitted events as candidates. Six passed automated checks; 14 required independent browser verification because of restricted retrieval, JavaScript-only programmes or combined-page evidence. On November 17 Rodolfo approved all 20 for publication after confirming manual verification. All 20 passed the production-mode local publication gate. See [the intake audit](curated-import-2026-11-16.md) for schedules, prices, alternate MathWorks sessions and registration issues, and [the editorial batch](review-batch.md) for the initial review snapshot. The website uses the saved approval and automatically removes started events; organizer checks are performed before approval.

The suite now contains 41 event tests, including explicit manual verification, fingerprint/expiry limits, hard cancellation and broken-link failures, local-preview isolation, regional URL aliases, separate Siemens sessions, source schedules, member pricing and curated reimport/expiration behavior.

The final live source scan made 152 checks across the 40-organizer registry: 139 successful fetches and 13 failed checks. Successful retrieval is not event verification. Several conferences in an IEEE calendar lacked explicit online-attendance evidence or a verified session start time and were rejected. Midnight-only calendar metadata requires an explicit source time quote. Their records are retained as rejection history. No event has been approved or published by this implementation.

The 29-test suite covers verified review intake, approval gates, alternate URLs, multiple events in one calendar, rescheduling, cancellation, expiration, inaccessible sources, broken registration, on-demand recordings, the 30/60-day windows, daylight-saving boundaries, empty states, paid-event disclosure, explicit overrides, private-network exclusions, missing providers, repeated scans, review deduplication and overlapping operations.

Production build, TypeScript, all 29 event tests, 25 glossary tests, four taxonomy tests and five referral analytics tests passed. Targeted lint passed. Repository-wide lint has existing errors in `output/x/plus-one/render.cjs` (three forbidden CommonJS imports) and `scripts/earnings-calendar.test.mjs` (assignment to `module`), plus an existing image warning in `app/insights/page.tsx`. These files are unchanged.

Desktop and 390-pixel mobile previews were checked; tab navigation, browser back/forward and the empty state work. The public page remains empty until suitable records pass live verification and human approval. Scheduled execution and external search cannot be described as active until the workflow is merged, configured and a run is verified.

## Provider references

- [GitHub timezone-aware schedule syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#onschedule)
- [Brave Search API](https://api-dashboard.search.brave.com/documentation/quickstart)
- [OpenAI structured outputs](https://developers.openai.com/api/docs/guides/structured-outputs)
