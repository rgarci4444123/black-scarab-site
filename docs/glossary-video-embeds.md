# Glossary video embeds

The shared glossary article template places a responsive YouTube player immediately after the introductory definition when the term's publication record has `youtube_video_id`. The privacy-enhanced player is lazy loaded and starts only when the visitor presses Play. Matching `VideoObject` metadata is rendered in the page's existing JSON-LD graph.

`content/physical-ai-glossary/videos.json` stores the video title, description, thumbnail, publication date, duration, channel and visibility. `content/physical-ai-glossary/publication.json` links term IDs to video IDs. The initial release covers 5G, Acceptance Testing, Accuracy, Action Tokens, Adaptation and LiDAR. YouTube publication dates and durations were checked against the public watch pages on November 25, 2026.

## Sync published uploads

Set `YOUTUBE_DATA_API_KEY` in the execution environment, then run:

```sh
npm run sync:glossary-videos
npm run sync:glossary-videos -- --apply
npm run test:glossary
npm run validate:glossary
npm run build
```

The first command previews changes. API sync reads the channel's uploads playlist and video status, accepts only public, embeddable Black Scarab videos and matches one exact glossary URL in each description. Scheduled private and unlisted videos cannot populate a term. A complete API scan also removes embeds for videos that no longer qualify as public. Fetch errors stop the run before writes. Duplicate videos for one term require resolution before applying.

For an upload that has just been verified Public in YouTube Studio, local production receipts can seed the same mapping:

```sh
npm run sync:glossary-videos -- --receipts /absolute/path/to/outputs/glossary-videos --term BSG-001
npm run sync:glossary-videos -- --receipts /absolute/path/to/outputs/glossary-videos --term BSG-001 --apply
```

Receipts require published status, public visibility, explicit Studio verification, the correct channel and passed production QA. They are a snapshot, so use API sync for ongoing visibility changes. API metadata is preferred for publication dates and durations.

After a sync, review the JSON changes, run the checks, publish the site through the existing GitHub/Vercel deployment and verify the live term pages. A scheduled API job requires a configured API key and deployment credentials; adding this script alone does not activate a recurring job.
