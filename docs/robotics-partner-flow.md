# Robotics partner inquiry flow

Implemented October 27, 2026.

## Existing Local AI implementation inspected

The Local AI guides use `components/local-ai-implementation-cta.tsx`, linking to
`/local-ai/deployment` with the article slug, canonical URL and placement in the
query string. The shared engagement tracker carries four UTM parameters into the
link on activation.

The CTA uses a pale sage background, charcoal text and pill button, 22 to 24px
corner radii, and 24 to 32px responsive padding. Its heading is 20 to 24px;
supporting copy is 14 to 16px with generous line height. Its content and button
stack on small screens.

`components/local-ai-deployment-form.tsx` renders a white form against the dark
inquiry page. It uses 28px corners, 24 to 40px responsive padding, 24px field gaps,
16px input text, rounded inputs and sage focus rings. Name and company form the
first row; email and phone form the second; a six-row project textarea spans the
third. The first two rows become two columns at 640px. Name, email and project
are required. Company and phone are optional.

The form sends JSON to `/api/local-ai/deployment`. It records one start event on
first focus and a submit event after a successful response. Submission disables
the button; errors retain the fields and restore the button. Success replaces
the form with a status message. Its existing backend saves to Airtable, then
attempts an internal Porkbun SMTP email. There is no automated partner forwarding.

Existing safeguards are server validation, contact and attribution length limits,
email format validation, an offscreen honeypot, a 1.2 second to 24 hour completion
window, origin checks and a 16,000 byte content-length header limit. There is no
application rate limiter in the existing route. No external spam service is used.

## New behavior and placement

The NVIDIA guide at `/insights/how-to-build-a-robot-with-nvidia` renders the
robotics CTA immediately after `get-started`, before `bigger-picture`. Its
existing newsletter cards remain in place. Editorial content and graphics were
not edited.

The CTA links to `/robotics/partner`, which reuses the five-field Local AI form
with the requested robotics label and placeholder. It posts to
`/api/robotics/partner`. The Local AI endpoint, default form, field layout,
validation and event names retain their existing behavior.

`lib/project-inquiry-handler.ts` holds the shared backend, extracted from the
Local AI route. Each endpoint selects its inquiry type on the server. Robotics
leads use `robotics_partner_inquiry`; the type is not taken from user input.

## Storage and notifications

The same Airtable table and seven existing columns are reused:

* `Submitted At`: submission timestamp.
* `Primary Use Case`: the project description.
* `Additional Context`: inquiry type, article slug, canonical URL, referrer,
  placement and campaign attribution.
* `Full Name`, `Company Name`, `Email`, `Phone / WhatsApp`: contact fields.

Canonical source URLs are reconstructed from the allowed article slugs rather
than trusting the supplied URL. Robotics article eligibility and CTA section
boundaries are declared in `lib/robotics-partner.ts`. Add an eligible article's
slug and section ID there for future use. The CTA also accepts a story-specific
`description` prop.

Notifications use the existing Porkbun account and internal destination. Robotics
email subjects begin `Robotics partner project from`; the message contains
contact details, project text and attribution. No new provider, table or columns
are needed.

As in the original Local AI backend, an Airtable failure returns a retryable
error without sending email. An SMTP failure after storage logs an error and
returns success because the lead is already saved. There is no automatic mail
retry in the existing system; the Airtable table is the durable intake record.

## Configuration

Both routes require the existing configuration in the deployment environment:

* `AIRTABLE_TOKEN`
* `AIRTABLE_BASE_ID`
* `AIRTABLE_TABLE_NAME`
* `PORKBUN_SMTP_PASSWORD`

Optional existing overrides:

* `PORKBUN_SMTP_EMAIL`, default `rodolfo@blackscarab.ai`.
* `LOCAL_AI_LEAD_NOTIFICATION_EMAIL`, default the SMTP account.

SMTP uses `smtp.porkbun.com`, port 587 and required STARTTLS. No new environment
variable is introduced. `.env.example` documents these SMTP settings.

## Analytics

The existing Vercel Analytics provider records:

* `robotics_partner_cta_view`: once per visit when at least 35 percent of the CTA
  is visible.
* `robotics_partner_cta_click`: link activation, including middle click.
* `robotics_partner_form_start`: once on first focus.
* `robotics_partner_form_submit`: each validated browser submission attempt.
* `robotics_partner_form_success`: after an accepted API response.

CTA events include article URL, identifier and placement. Form events include
source article, article URL and placement. Contact fields and project text are
not sent to analytics. As in Local AI, silently dropped spam receives a success
response and can therefore produce a client success event.

The newsletter popup is excluded from the robotics inquiry page to keep the
form uninterrupted. Newsletter behavior elsewhere is retained.

## Files

Created:

* `components/robotics-partner-cta.tsx`
* `app/robotics/partner/page.tsx`
* `app/api/robotics/partner/route.ts`
* `lib/robotics-partner.ts`
* `lib/project-inquiry-handler.ts`
* `scripts/project-inquiry.test.mjs`
* `scripts/content-source-loader.test.mjs`
* `docs/robotics-partner-flow.md`
* `output/robotics-partner-qa/`: browser screenshots.

Modified:

* `app/insights/[slug]/page.tsx`: section-boundary CTA insertion.
* `components/local-ai-deployment-form.tsx`: optional robotics variant.
* `components/engagement-analytics.tsx`: robotics view/click events.
* `components/newsletter-capture.tsx`: inquiry-page popup exclusion.
* `lib/local-ai-deployment.ts`: optional inquiry type and source attribution.
* `app/api/local-ai/deployment/route.ts`: delegates to shared handler.
* `.env.example`: existing SMTP settings, locally ignored by Git.

## Validation

`node --test scripts/project-inquiry.test.mjs scripts/referral-analytics.test.mjs`
passes 20 tests. The loader and taxonomy tests add five passing tests. Tests exercise both inquiry types, the five-field interface,
storage and notification payloads, canonical attribution, optional fields,
validation, spam, foreign origins, malformed/oversized requests, configuration
errors, storage/mail failures, form error recovery, confirmation, lifecycle
analytics, CTA visibility/clicks and existing referral analytics. Airtable and
SMTP are mocked; these tests do not establish live delivery.

Targeted ESLint and TypeScript checks pass. Desktop and 390px mobile browser
checks verified form layout, mobile overflow, required-field validation, server
validation errors with retained input, CTA placement and attributed navigation.
The original Local AI form was also inspected in the browser. All 148 built
article previews pass `npm run validate:article-previews`.

## Release preparation

The release is isolated on `codex/robotics-partner-inquiry` from production commit
`018a194a2ec3015b324b1747b730701909a2b897`. Only the CTA insertion is applied to
the current production article renderer, preserving its newer code and content.

The original workspace's content-loader failure was caused by missing
`esModuleInterop` when transpiling default JSON imports. The workspace has been
corrected; latest production source already includes that setting. A regression
test verifies article identity and taxonomy survive JSON import.

The full release `npm run build` passes, including source taxonomy and article
preview validation. Application lint passes with one existing image warning;
25 tests pass across inquiry, analytics, content-loader and taxonomy coverage.

Vercel project `black-scarab-site` has the Airtable variables for all environments
and a sensitive `PORKBUN_SMTP_PASSWORD` in Production. Sensitive variables do not
expose their values through inspection. A staged production deployment with
`--skip-domain` permits delivery testing with that existing secret before the
live domain changes. No secret is copied into the repository.

The shared handler logs SMTP acceptance after a successful send, without logging
lead contact information or project content. This verifies SMTP acceptance;
inbox receipt requires checking the receiving mailbox.
