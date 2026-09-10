# Black Scarab Weekly publishing workflow

## Schedule

Publish every Thursday at 10:00 a.m. Eastern. The normal editorial window runs from 12:00 a.m. Eastern on the previous Thursday through 11:59 p.m. Eastern on Wednesday.

The first edition is a partial founding window covering Monday, September 7 through Wednesday, September 9, 2026.

## Source of truth

beehiiv is the subscriber database and campaign sender. Website forms create subscriptions through the server side API route. Never expose the beehiiv API key in browser code.

Use immediate subscription. Every form must state the cadence and link to the privacy notice. Never add purchased, scraped, inferred, or unrelated business contacts to the newsletter.

## Weekly content assembly

1. Identify every website News report and Insights deep dive published inside the completed editorial window.
2. Confirm that each article is live at its canonical URL.
3. Select one item as the lead based on consequence and reader usefulness, not merely recency.
4. Include every other item in a compact section. Do not omit an article simply because another article covers a similar company.
5. Write a fresh opening note and closing observation. Do not paste article introductions together.
6. Verify every link, image credit, publication date, company name, and numerical claim against the live article.
7. Send test messages to Gmail, Apple Mail, and Outlook when available. Check desktop and mobile rendering.
8. Schedule the verified campaign for Thursday at 10:00 a.m. Eastern.

## Editorial structure

Use this order:

1. Masthead, issue number, date, and reading time
2. Opening note
3. The Lead Signal
4. Deep Dives
5. News Radar
6. What We Are Watching
7. Forward and subscribe invitation
8. Author, address, privacy, and unsubscribe footer

Write with brisk business newsletter pacing while preserving Black Scarab's analytical standards. Morning Brew is a pacing reference only. Do not reproduce its language, recurring features, jokes, visual identity, or layouts.

## Visual system

Use a 620 pixel maximum content width. Set the outer background to ivory `#f6f4ef`, the primary surface to white, text to charcoal `#111827`, deep feature panels to `#10150f`, and accents to muted sage `#7c8b6b`. Body copy should render at 16 pixels or larger with generous line spacing.

Use one lead image when it adds editorial value. Preserve its label and credit. Treat all generated article covers as editorial illustrations rather than official product photographs.

## Measurement

Track confirmed website subscriptions by source, net subscriber growth, unique article clicks, click through rate, unsubscribes, bounces, and spam complaints. Treat opens as directional because privacy protections can inflate them.

Do not change the send day based on a handful of recipients. Keep the Thursday schedule for at least six editions, then evaluate behavior. Test a second day only when the list is large enough to support a meaningful comparison.

## Required configuration

The website deployment requires `BEEHIIV_API_KEY` and `BEEHIIV_PUBLICATION_ID`. The beehiiv publication must use a verified Black Scarab sending address and authenticated domain. Add a valid postal address to the campaign footer before the first live send.
