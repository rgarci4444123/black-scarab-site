import { writeFile } from "node:fs/promises";
import { mexicoAutomationDeepDive } from "../lib/mexico-automation.ts";

const a=mexicoAutomationDeepDive();
const p=(v)=>typeof v==='string'?v:v.map(x=>typeof x==='string'?x:`[${x.text}](${x.href})`).join('');
const path=(v)=>`../../../public${v}`;
let md=`# ${a.title}\n\nBy ${a.author.name}\n\n${a.summary}\n\n![${a.imageAlt}](${path(a.image)})\n\n${a.imageCaption}\n`;
for(const s of a.sections){
 if(s.heading)md+=`\n## ${s.heading}\n`;
 for(const v of s.paragraphs)md+=`\n${p(v)}\n`;
 if(s.visual)md+=`\n![${s.visual.alt}](${path(s.visual.src)})\n\n${s.visual.caption}\n`;
 for(const t of s.tables??[])md+=`\n### ${t.title}\n\n| ${t.columns.join(' | ')} |\n| ${t.columns.map(()=>'---').join(' | ')} |\n${t.rows.map(r=>`| ${r.join(' | ')} |`).join('\n')}\n\n${t.note??''}\n`;
}
md+='\n## References\n\n'+a.sourceLinks.map(s=>`* [${s.label}](${s.url})`).join('\n')+'\n';
await writeFile(new URL('../output/insights/mexico-automation/article.md',import.meta.url),md);
const strings=[a.title,a.summary,a.seoDescription,...a.sections.flatMap(s=>[s.heading??'',...s.paragraphs.map(v=>typeof v==='string'?v:v.map(x=>typeof x==='string'?x:x.text).join('')),s.visual?.caption??'',...s.tables?.flatMap(t=>[t.title,...t.columns,...t.rows.flat(),t.note??''])??[]])];
const dashes=strings.filter(s=>/[\u2010-\u2015]|\w-\w/.test(s));
if(dashes.length)throw Error(`Published copy contains dash punctuation: ${dashes.join('\n')}`);
if(a.sections.filter(s=>s.visual).length<4)throw Error('Missing supporting visuals');
console.log(JSON.stringify({words:strings.join(' ').split(/\s+/).length,sections:a.sections.length,sources:a.sourceLinks.length,supportingImages:a.sections.filter(s=>s.visual).length,dashCheck:'pass'}));
