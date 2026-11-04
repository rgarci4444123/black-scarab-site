import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
const root = "docs/earnings-calendar/company-mark-sources";
const primary = JSON.parse(await readFile(`${root}/manifest.json`, "utf8"));
let fallback=[];
try { fallback=JSON.parse(await readFile(`${root}/manifest-fallback.json`, "utf8")); } catch {}
let october=[];
try { october=JSON.parse(await readFile(`${root}/manifest-2026-10.json`, "utf8")); } catch {}
const entries=[...primary,...october].map(entry=>fallback.find(other=>other.ticker===entry.ticker&&other.status==='downloaded')??entry);
const manifest=JSON.parse(await readFile("data/earnings/company-marks.json", "utf8"));
for (const entry of entries) {
  if(entry.status!=='downloaded')continue;
  const filename=entry.ticker.toLowerCase().replaceAll('.','-')+'.png';
  try {
    let raw=await readFile(entry.decodedFile??entry.rawFile);
    if(entry.ticker==='TER')raw=Buffer.from(raw.toString().replaceAll("#FFFFFF", "#1d1d1f"));
    let mark=sharp(raw,{density:192});
    if(entry.ticker==='SYM')mark=mark.flatten({background:'#1d1d1f'});
    await mark.resize(96,96,{fit:'contain',background:{r:255,g:255,b:255,alpha:0}}).png().toFile(`public/images/earnings/company-marks/${filename}`);
    const encoded=(await readFile(`public/images/earnings/company-marks/${filename}`)).toString('base64');
    manifest[entry.ticker]={dataUri:`data:image/png;base64,${encoded}`,file:`/images/earnings/company-marks/${filename}`,sourceUrl:entry.assetUrl,pageUrl:entry.pageUrl,checkedDate:entry.checkedDate};
  } catch(error) { process.stderr.write(`${entry.ticker}: ${error.message}\n`); }
}
await writeFile('data/earnings/company-marks.json',JSON.stringify(manifest,null,2)+'\n');
process.stdout.write(`Normalized ${Object.keys(manifest).length} official company marks.\n`);
