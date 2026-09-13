# Local AI deployment funnel

The Local AI deployment form stores inquiries in the existing Airtable intake
table and sends an administrator notification through the existing Porkbun
hosted mailbox.
No inquiry is forwarded automatically to an implementation partner.

## Required environment variables

The preview and production environments require the existing Airtable values:

* `AIRTABLE_TOKEN`
* `AIRTABLE_BASE_ID`
* `AIRTABLE_TABLE_NAME`

Email delivery requires:

* `PORKBUN_SMTP_PASSWORD`

The route uses `rodolfo@blackscarab.ai` as both the Porkbun SMTP account and the
notification recipient. `PORKBUN_SMTP_EMAIL` and
`LOCAL_AI_LEAD_NOTIFICATION_EMAIL` are optional overrides. Porkbun SMTP uses
`smtp.porkbun.com` on port 587 with STARTTLS.

## Attribution

CTA links preserve the source article, canonical source URL, CTA placement and
the four supported UTM parameters. The form also records the browser referrer.
The two supported placement values are `early_inline` and `end_of_article`.

Attribution is stored in Airtable's existing `Additional Context` field. The
project description is stored in `Primary Use Case`, and the existing contact
fields are reused for name, company, email and phone.
