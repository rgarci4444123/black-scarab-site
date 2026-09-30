# Article link previews

News and Insights article metadata must point to the article artwork, not the organization logo or original multi-megabyte cover.

`npm run build` prepares 1,200 pixel wide Insights JPEG derivatives below 300 KB, reads News derivative dimensions, and validates the rendered metadata for every article. Preview images include their HTTPS URL, MIME type, width, height and alt text. The full resolution website artwork is unchanged.

Insights derivatives live in `public/images/insights/social/`. Filenames include a source content hash so a cover change gets a fresh image URL. The generated image manifests in `lib/` are committed with the images and metadata changes. Run `npm run build:insight-social-images` after changing a cover if using the development server without a production build.

News derivatives retain the established `public/images/news/social/` naming convention. Their actual dimensions are read into the generated News manifest, including quoted keys in article data. An absent or oversized derivative fails the build.

`npm run validate:article-previews` checks built News and Insights HTML for exactly one article JPEG in the document head, matching Open Graph and Twitter URLs, HTTPS secure URL, valid local image bytes, 1,200 pixel width, matching dimensions and the 300 KB ceiling.

After deployment, request representative article URLs with WhatsApp and facebookexternalhit user agents. Confirm the emitted image URL returns HTTP 200 with image/jpeg and the expected size. This verifies the crawler response, not the messaging app's own cache. Existing WhatsApp previews may retain their cached appearance; a newly pasted URL with a query parameter can be used to test a fresh URL while keeping the canonical article unchanged.
