const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const dir = __dirname;
const esc = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const text = (x, y, value, size = 42, color = "#15191B", weight = 400, family = "Helvetica Neue, Helvetica, Arial") =>
  `<text x="${x}" y="${y}" font-family="${family}" font-size="${size}" fill="${color}" font-weight="${weight}">${esc(value)}</text>`;
const lines = (x, y, values, size = 42, color = "#15191B", weight = 400, gap = 1.35) =>
  values.map((value, index) => text(x, y + index * size * gap, value, size, color, weight)).join("");
const rect = (x, y, width, height, fill = "#EDF2EF", radius = 14) =>
  `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" fill="${fill}"/>`;
const base = (height, title, subtitle, body, foot) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="${height}" viewBox="0 0 1200 ${height}"><rect width="1200" height="${height}" fill="#FFFFFF"/>${text(68, 72, "BLACK SCARAB   /   RESEARCH", 28, "#5A7164", 600)}${text(68, 157, title, 63, "#15191B", 600, "Georgia, Times New Roman")}${text(68, 216, subtitle, 32, "#56605A")}<path d="M68 255H1132" stroke="#CCD6CF" stroke-width="2"/>${body}<path d="M68 ${height - 140}H1132" stroke="#CCD6CF" stroke-width="2"/>${lines(68, height - 94, foot, 29, "#56605A")}</svg>`;

async function save(name, svg) {
  fs.writeFileSync(path.join(dir, `${name}.svg`), svg);
  await sharp(Buffer.from(svg)).png().toFile(path.join(dir, `${name}.png`));
}

async function main() {
  const hero = path.join(dir, "../../../public/article-images/plus-one-robotics-supervised-autonomy-deep-dive.png");
  const coverOverlay = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="640"><rect width="1600" height="640" fill="#111615" fill-opacity="0.60"/><rect x="0" y="0" width="850" height="640" fill="#111615" fill-opacity="0.86"/>${text(78, 66, "BLACK SCARAB   /   DEEP DIVE", 23, "#B8C8BE", 600)}${lines(78, 158, ["Plus One", "Robotics"], 76, "#FFFFFF", 600, 1.03)}${lines(78, 362, ["Can human supervision make", "warehouse autonomy dependable?"], 36, "#E8EEE9", 500, 1.25)}${text(78, 585, "RODOLFO GARCIA CALDERONI, CFA", 22, "#B8C8BE", 500)}</svg>`;
  await sharp(hero).resize(1600, 640, { fit: "cover" }).composite([{ input: Buffer.from(coverOverlay) }]).png().toFile(path.join(dir, "cover.png"));

  let body = "";
  const workflow = [
    ["01", "Present", ["Mixed parcels enter", "a usable pick area."]],
    ["02", "Perceive", ["Images and depth support", "candidate selection."]],
    ["03", "Move", ["The controller and gripper", "execute the requested pick."]],
    ["04", "Verify", ["Confirm placement and", "accepted downstream work."]],
  ];
  workflow.forEach((step, index) => {
    const y = 300 + index * 245;
    body += rect(68, y, 1064, 206) + text(98, y + 67, step[0], 42, "#6F8A7A", 600) + text(195, y + 66, step[1], 47, "#15191B", 600) + lines(195, y + 122, step[2], 39);
    if (index < 3) body += `<path d="M600 ${y + 210}v29m-9-10 9 10 9-10" fill="none" stroke="#6F8A7A" stroke-width="3"/>`;
  });
  body += text(68, 1320, "Measure accepted output across the complete cell.", 36, "#34483C", 500);
  await save("01-workflow", base(1530, "From parcel to accepted work", "A functional view of the induction workflow", body, ["Black Scarab interpretation of Plus One materials.", "Not a proprietary diagram or certified safety architecture."]));

  body = rect(68, 295, 1064, 155) + text(98, 350, "PRODUCTION EXAMPLES", 29, "#5A7164", 600) + text(98, 412, "6,000 Crew Chief responses", 45, "#15191B", 600);
  const evidence = [
    ["Exact selection similarity", "Below 30%", "AI often chose a different parcel"],
    ["Human judged acceptability", "80%", "Different can still be workable"],
    ["Human first pass success", "Above 95%", "Humans remained the benchmark"],
    ["Mean model timing", "3 to 7 sec", "Maximum reported up to 22 sec"],
  ];
  evidence.forEach((row, index) => {
    const y = 505 + index * 205;
    body += rect(68, y, 1064, 170, index === 2 ? "#E4ECE7" : "#F5F7F5") + text(98, y + 48, row[0], 30, "#5A7164", 600) + text(98, y + 112, row[1], 50, "#15191B", 600) + text(470, y + 105, row[2], 33, "#56605A");
  });
  body += lines(68, 1390, ["Decision: do not operate independently.", "Explore AI as a prelabeler for human supervisors."], 35, "#34483C", 600);
  await save("02-aicc", base(1650, "The AI Crew Chief result", "A useful experiment that did not clear the human bar", body, ["Source: Plus One Robotics AICC experiment, 2026.", "Company reported results. Black Scarab did not reproduce the test."]));

  body = rect(68, 290, 1064, 163) + text(98, 349, "HYPOTHETICAL MODEL", 31, "#5A7164", 600) + text(98, 411, "Not Plus One pricing or measured performance.", 38);
  body += text(68, 528, "Same assumed installed investment: $220,000", 42, "#15191B", 600) + text(68, 588, "Same assumed recurring cost: $38,000 per year", 40);
  body += rect(68, 680, 506, 506) + rect(598, 680, 534, 506, "#F6F7F6");
  body += text(98, 743, "EXPECTED CASE", 28, "#5A7164", 600) + text(628, 743, "LOWER VALUE CASE", 28, "#5A7164", 600);
  body += text(98, 830, "$125,000", 62, "#15191B", 600) + text(628, 830, "$80,000", 62, "#15191B", 600) + text(98, 881, "gross value per year", 32) + text(628, 881, "gross value per year", 32);
  body += text(98, 982, "$87,000 net", 38, "#34483C", 600) + text(628, 982, "$42,000 net", 38, "#34483C", 600);
  body += text(98, 1084, "2.53 years", 58, "#15191B", 600) + text(628, 1084, "5.24 years", 58, "#15191B", 600) + text(98, 1144, "Simple payback", 34) + text(628, 1144, "Simple payback", 34);
  body += lines(68, 1300, ["Net benefit = gross operating value less recurring cost.", "Simple payback = installed investment divided by net benefit."], 34, "#34483C");
  await save("03-economics", base(1540, "Utilization changes the return", "Two outcomes for a fictional warehouse operator", body, ["Black Scarab illustration. All inputs are hypothetical.", "Excludes finance, tax, discounting, ramp, and residual value."]));

  const markdown = fs.readFileSync(path.join(dir, "article.md"), "utf8");
  const inline = (value) => esc(value).replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2">$1</a>');
  const html = markdown.split(/\n\n+/).map((block) => {
    const image = block.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (image) return "";
    if (block.startsWith("# ")) return "";
    if (block.startsWith("## ")) return `<h2>${inline(block.slice(3))}</h2>`;
    if (block.startsWith("*") && block.endsWith("*")) return `<p><em>${inline(block.slice(1, -1))}</em></p>`;
    if (/^\d+\. /.test(block)) return `<ol>${block.split("\n").map((line) => `<li>${inline(line.replace(/^\d+\. /, ""))}</li>`).join("")}</ol>`;
    return `<p>${inline(block)}</p>`;
  }).join("\n");
  fs.writeFileSync(path.join(dir, "paste.html"), `<!doctype html><html lang="en"><meta charset="utf-8"><style>body{font:18px/1.6 Arial,sans-serif;max-width:760px;margin:40px auto}img{max-width:100%}h1{font-size:38px}h2{margin-top:42px}</style><main>${html}</main></html>`);
  console.log("Rendered Plus One X Article cover, three figures, and paste HTML.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
