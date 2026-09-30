import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

let checked = 0;
for (const section of ["insights", "news"]) {
  const directory = join(process.cwd(), ".next/server/app", section);
  for (const filename of await readdir(directory)) {
    if (!filename.endsWith(".html")) continue;
    const html = await readFile(join(directory, filename), "utf8");
    const head = html.split("</head>")[0];
    const tags = [...head.matchAll(/<meta\s+(?:property|name)="([^"]+)"\s+content="([^"]*)"/g)];
    const values = (name) => tags.filter((tag) => tag[1] === name).map((tag) => tag[2]);
    const images = values("og:image");
    if (images.length !== 1 || !images[0].startsWith("https://www.blackscarab.ai/images/") || !images[0].endsWith(".jpg")) {
      throw new Error(`${section}/${filename}: expected one article JPEG preview in head, got ${images}`);
    }
    if (values("twitter:image")[0] !== images[0] || values("og:image:secure_url")[0] !== images[0]) {
      throw new Error(`${section}/${filename}: inconsistent preview URLs`);
    }
    const path = new URL(images[0]).pathname;
    const file = await readFile(join(process.cwd(), "public", path));
    const { format, width, height } = await sharp(file).metadata();
    if (file.length > 300_000 || format !== "jpeg" || width !== 1200 ||
        Number(values("og:image:width")[0]) !== width ||
        Number(values("og:image:height")[0]) !== height ||
        values("og:image:type")[0] !== "image/jpeg") {
      throw new Error(`${section}/${filename}: invalid preview dimensions, size or type`);
    }
    checked++;
  }
}
if (!checked) throw new Error("No built article pages found");
console.log(`Verified ${checked} article previews in built HTML, including image files, dimensions and size.`);
