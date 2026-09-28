import { readFile, stat } from "node:fs/promises";
import { basename, join, parse } from "node:path";

const root = process.cwd();
const newsSource = await readFile(join(root, "lib/news.ts"), "utf8");
const articleImages = [
  ...newsSource.matchAll(/^\s+image:\s+"([^"]+)",$/gm),
].map((match) => match[1]);
const maxBytes = 300_000;

function getJpegDimensions(buffer) {
  if (buffer[0] !== 0xff || buffer[1] !== 0xd8) {
    throw new Error("not a JPEG file");
  }

  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);
    if (marker >= 0xc0 && marker <= 0xc3) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }

    offset += length + 2;
  }

  throw new Error("missing JPEG dimensions");
}

const failures = [];
for (const articleImage of articleImages) {
  const socialFilename = `${parse(basename(articleImage)).name}.jpg`;
  const relativePath = join("public/images/news/social", socialFilename);
  const absolutePath = join(root, relativePath);

  try {
    const [file, fileStats] = await Promise.all([
      readFile(absolutePath),
      stat(absolutePath),
    ]);
    const dimensions = getJpegDimensions(file);

    if (fileStats.size > maxBytes) {
      failures.push(
        `${relativePath} is ${fileStats.size} bytes; maximum is ${maxBytes}`,
      );
    }
    if (dimensions.width !== 1200) {
      failures.push(
        `${relativePath} is ${dimensions.width} pixels wide; expected 1200`,
      );
    }
  } catch (error) {
    failures.push(`${relativePath}: ${error.message}`);
  }
}

if (failures.length > 0) {
  console.error(`News social image validation failed:\n${failures.join("\n")}`);
  process.exit(1);
}

console.log(`Validated ${articleImages.length} news social images.`);
