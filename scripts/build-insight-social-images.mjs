import { createHash } from "node:crypto";
import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

// Keep original editorial artwork intact. Share crawlers receive small JPEGs.
const root = process.cwd();
const imagePaths = new Set();
for (const filename of (await readdir(join(root, "lib"))).sort()) {
  if (!filename.endsWith(".ts") || filename === "news.ts") continue;
  const source = await readFile(join(root, "lib", filename), "utf8");
  for (const match of source.matchAll(/\bimage:\s*"(\/(?:article-images|images\/insights)\/[^\"]+)"/g)) {
    imagePaths.add(match[1]);
  }
}

const destination = join(root, "public/images/insights/social");
await mkdir(destination, { recursive: true });
const manifest = {};
for (const imagePath of [...imagePaths].sort()) {
  const source = await readFile(join(root, "public", imagePath));
  const version = createHash("sha256").update(source).digest("hex").slice(0, 12);
  const filename = `${parse(imagePath).name}-${version}.jpg`;
  let jpeg;
  for (const quality of [85, 78, 70, 60, 50, 40]) {
    jpeg = await sharp(source).rotate().flatten({ background: "#ffffff" })
      .resize({ width: 1200 }).jpeg({ quality, mozjpeg: true }).toBuffer();
    if (jpeg.length <= 300_000) break;
  }
  if (jpeg.length > 300_000) throw new Error(`Share image exceeds 300 KB: ${imagePath}`);
  const { width, height } = await sharp(jpeg).metadata();
  await writeFile(join(destination, filename), jpeg);
  manifest[imagePath] = {
    path: `/images/insights/social/${filename}`,
    width,
    height,
    bytes: jpeg.length,
  };
}
if (!Object.keys(manifest).length) throw new Error("No Insights covers found");
await writeFile(join(root, "lib/insight-social-images.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Prepared ${Object.keys(manifest).length} Insights share images, each below 300 KB.`);

// News already has lightweight derivatives. Read real dimensions instead of
// assuming every future cover has the same aspect ratio.
const newsSource = await readFile(join(root, "lib/news.ts"), "utf8");
const newsManifest = {};
for (const match of newsSource.matchAll(/\b"?image"?:\s*"(\/images\/news\/[^\"]+)"/g)) {
  const imagePath = match[1];
  const path = `/images/news/social/${parse(imagePath).name}.jpg`;
  const jpeg = await readFile(join(root, "public", path));
  const { width, height, format } = await sharp(jpeg).metadata();
  if (format !== "jpeg" || width !== 1200 || jpeg.length > 300_000) {
    throw new Error(`Invalid News share image: ${path}`);
  }
  newsManifest[imagePath] = { path, width, height, bytes: jpeg.length };
}
await writeFile(join(root, "lib/news-social-images.json"), `${JSON.stringify(newsManifest, null, 2)}\n`);
