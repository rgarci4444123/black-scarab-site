This queue contains discovered event candidates and verification updates. Candidates remain hidden until explicitly approved.

Review `docs/virtual-events/review-batch.md` and `data/virtual-events/events.json`. Confirm the official schedule, online attendance, registration link, cost, and original editorial summary. Use **Actions → Virtual events discovery and review → Run workflow → approve/reject**, supplying the event ID. Optional summary and title fields edit the record before approval. Alternatively, check out this branch and run the documented editorial commands.

Merge this pull request after reviewing the resulting changes. The existing Vercel Git integration publishes approved records; the public directory applies its verification and rolling date gates at request time.

Source failures and missing providers appear in `data/virtual-events/scan-status.json` and the workflow logs. A successful HTTP fetch alone does not verify an event.
