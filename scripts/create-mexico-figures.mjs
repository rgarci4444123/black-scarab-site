import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

const dir = new URL("../public/article-images/mexico-automation/", import.meta.url);
const output = new URL("../output/insights/mexico-automation/", import.meta.url);
await mkdir(dir, { recursive: true });
await mkdir(output, { recursive: true });
const ink = "#222925", sage = "#748775", pale = "#e1e6dc", muted = "#59625c";
const esc = (s) => String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;");
const text = (x,y,s,size=30,color=ink,weight=400) => `<text x="${x}" y="${y}" font-family="Arial, sans-serif" font-size="${size}" fill="${color}" font-weight="${weight}">${esc(s)}</text>`;
const rect = (x,y,w,h,color) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${color}"/>`;
const line = (x,y,x2,y2,color=pale) => `<line x1="${x}" y1="${y}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="2"/>`;
function shell(title, subtitle, body, note) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">${rect(0,0,1600,1000,"#f6f4ef")}${text(88,83,"BLACK SCARAB  /  INSIGHTS",23,sage,700)}${text(88,155,title,51,ink,700)}${text(88,211,subtitle,28,muted)}${body}${line(88,885,1512,885)}${text(88,934,note,23,muted)}</svg>`;
}
async function save(name, svg) {
  await writeFile(new URL(`${name}.svg`,dir),svg);
  await sharp(Buffer.from(svg)).png().toFile(new URL(`${name}.png`,dir).pathname);
}

let body="";
const robotData=[['China',295000],['United States',34200],['Mexico',5600]];
for(let i=0;i<3;i++){
  const [label,value]=robotData[i],y=330+i*150;
  body+=text(88,y+39,label,33,ink,700)+rect(385,y,950*value/300000,64,i===2?sage:ink)+text(400+950*value/300000,y+43,value.toLocaleString('en-US'),33,ink,700);
}
body+=line(385,785,1335,785,muted);
for(const v of [0,100000,200000,300000])body+=text(375+950*v/300000,830,v===0?'0':`${v/1000}k`,25,muted);
await save('robots',shell('The scale of industrial robot adoption','Annual installations in 2024  •  Shared linear scale  •  Rounded IFR figures',body,'Source: IFR, World Robotics 2025. Installations are not productivity or AI adoption.'));

body=text(88,309,'US goods trade with Mexico in 2025',34,ink,700);
body+=text(88,385,'Imports from Mexico',30)+rect(450,345,820,68,ink)+text(1290,391,'$534.3bn',32,ink,700);
body+=text(88,500,'Exports to Mexico',30)+rect(450,460,820*337.3/534.3,68,sage)+text(470+820*337.3/534.3,506,'$337.3bn',32,ink,700);
body+=line(88,593,1512,593)+text(88,710,'More than 80%',77,ink,700)+text(720,671,'of Mexico’s goods exports went',33)+text(720,725,'to the United States in 2024',33)+text(88,811,'Interdependence raises the cost of disruption. Exposure remains unequal.',30,muted);
await save('trade',shell('A deep relationship with unequal exposure','Gross goods trade in US dollars  •  Destination share shown for a separate year',body,'Source: USTR, Mexico trade summary, accessed September 12, 2026. Not GDP or value added.'));

const factor=(r)=>(1-(1+r)**-10)/r;
const model=[['Continue in Mexico',0,1],['Upgrade Mexico',1.2,.7],['New US capacity',3,.55],['Lower cost US build',2,.55]];
body=text(88,295,'Initial investment',25,ink,700)+rect(335,275,30,25,ink)+text(420,295,'Discounted operating costs',25,sage,700)+rect(794,275,30,25,sage);
for(let i=0;i<4;i++){
 const [label,cap,annual]=model[i],y=350+i*108,op=annual*factor(.1),scale=125;
 body+=text(88,y+38,label,29,ink,700)+rect(425,y,cap*scale,57,ink)+rect(425+cap*scale,y,op*scale,57,sage)+text(445+(cap+op)*scale,y+39,`$${(cap+op).toFixed(2)}m`,30,ink,700);
}
body+=text(88,827,'Equal output  •  10 years  •  10% discount rate  •  No terminal value',29,muted);
await save('economics',shell('The upgrade changes the benchmark','HYPOTHETICAL EXAMPLE  •  Present cost in USD millions  •  Lower is better',body,'Method: initial cost + annual operating cost × 6.144567. Not plant prices or a forecast.'));

body=text(88,300,'DELAYED UPGRADES',29,ink,700)+text(855,300,'SUSTAINED UPGRADES',29,sage,700)+line(800,280,800,795);
const left=[['01','Productivity falls behind','Production awards migrate elsewhere'],['02','Industrial clusters weaken','Suppliers lose work, skills and investment'],['03','Living standards face pressure','Weaker incomes and public finances']];
const right=[['01','Sustain investment and adoption','Build skills alongside productive capacity'],['02','Industry keeps improving','Suppliers compete in evolving value chains'],['03','A stronger base for prosperity','More productive work and local capability']];
for(let i=0;i<3;i++){
 const y=388+i*145;
 for(const [list,x,c] of [[left,88,ink],[right,855,sage]]){
  const [n,h,s]=list[i];body+=text(x,y,n,25,c,700)+text(x+65,y,h,30,ink,700)+text(x+65,y+48,s,25,muted);
 }
}
body+=text(88,830,'Both paths remain exposed to demand, trade policy, utilities and execution.',29,muted);
await save('futures-long-term',shell('Two different economies in twenty years','CONDITIONAL SCENARIOS  •  Successive investment decisions shape the outcome',body,'Source: Black Scarab analysis. Sequences illustrate mechanisms, not measured causal estimates.'));
const data={
  robotInstallations:{year:2024,source:'https://ifr.org/worldrobotics/report-2025',data:robotData},
  trade:{source:'https://www.ustr.gov/countries-regions/americas/mexico',year:2025,units:'USD billions',usImportsFromMexico:534.3,usExportsToMexico:337.3,mexicanExportShareToUS:{year:2024,value:'More than 80 percent'}},
  model:{hypothetical:true,units:'USD millions',years:10,discountRate:.1,timing:'Initial investment at time zero; annual operating costs at year end',equalOutput:true,terminalValue:0,exclusions:['Taxes','Financing structure','Ramp costs','Currency changes','Demand risk'],options:model.map(([name,initial,annual])=>({name,initial,annual,presentCost:initial+annual*factor(.1)})),sensitivity:[.06,.1,.15].map(rate=>({rate,options:model.map(([name,initial,annual])=>({name,presentCost:initial+annual*factor(rate)}))})),usBreakEvenInitial:1.2+(.7-.55)*factor(.1)}
};
await writeFile(new URL('figure-data.json',output),JSON.stringify(data,null,2)+'\n');
console.log('Created four SVG and PNG figures with reproducible source data.');
