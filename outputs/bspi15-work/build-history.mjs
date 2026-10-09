import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import os from 'node:os';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

const runtimeRequire = createRequire(path.join(os.homedir(), '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json'));
const { Workbook, SpreadsheetFile } = await import(pathToFileURL(runtimeRequire.resolve('@oai/artifact-tool')).href);

const root = process.cwd();
const output = path.join(root, 'outputs/bspi15-daily-review.xlsx');
const ledgerPath = path.join(root, 'data/bspi15/review-history.json');
const qaDir = path.join(root, 'outputs/bspi15-work/history');
const parse = text => {
  const lines = text.trim().split(/\r?\n/), keys = lines.shift().split(',');
  return lines.map(line => Object.fromEntries(line.split(',').map((value, i) => [keys[i], value])));
};
const instruments = parse(await fs.readFile(path.join(root, 'data/bspi15/instruments.csv'), 'utf8'));
const canonical = parse(await fs.readFile(path.join(root, 'data/bspi15/daily-closes.csv'), 'utf8'));
const audit = JSON.parse(await fs.readFile(path.join(root, 'data/bspi15/marketstack-audit-latest.json'), 'utf8'));
assert.equal(audit.status, 'passed', 'A strict, passing audit is required.');
assert.equal(instruments.length, 17);
assert.equal(canonical[0].Date, '2026-10-01');
const observations = parse(await fs.readFile(path.join(root, 'data/bspi15/marketstack-observations.csv'), 'utf8'));
const source = new Map(observations.map(row => [row.Date + ':' + row.Ticker, row]));
let ledger;
try { ledger = JSON.parse(await fs.readFile(ledgerPath, 'utf8')); }
catch (error) { if (error.code !== 'ENOENT') throw error; ledger = { version: 1, methodologyVersion: '1.0', baseDate: '2026-10-01', days: [] }; }
const saved = new Map(ledger.days.map(day => [day.date, day]));
assert.equal(saved.size, ledger.days.length, 'Duplicate dates in review history.');
assert(ledger.days.length <= canonical.length, 'Canonical history lost a reviewed date.');
for (let d = 0; d < canonical.length; d++) {
  const row = canonical[d];
  if (d) assert(row.Date > canonical[d - 1].Date, 'Dates must be unique and chronological.');
  const existing = saved.get(row.Date);
  if (existing) {
    assert.equal(ledger.days[d]?.date, row.Date, 'Reviewed dates cannot be reordered.');
    for (const i of instruments) assert.equal(existing.prices[i.Ticker], Number(row[i.Ticker]), 'Previously reviewed price changed: ' + row.Date + ' ' + i.Ticker);
    continue;
  }
  assert(row.Date <= audit.period.through, 'Canonical date exceeds the audited period.');
  const entries = instruments.map(i => {
    let s = source.get(row.Date + ':' + i.Ticker), closure = null;
    if (!s) {
      closure = audit.verifiedClosures.find(x => x.date === row.Date && x.ticker === i.Ticker);
      assert(closure, 'Missing live-market observation: ' + row.Date + ' ' + i.Ticker);
      s = source.get(closure.previousAvailableDate + ':' + i.Ticker);
      assert(s && closure.sourceUrl && closure.evidence, 'Closure needs source evidence.');
      assert.equal(Number(row[i.Ticker]), closure.previousAvailableClose);
    }
    assert.equal(s['Marketstack Symbol'], i['Marketstack Symbol']);
    assert.equal(s.MIC, i['Expected MIC']);
    const close = Number(s.Close), canonicalClose = Number(row[i.Ticker]);
    assert(close > 0 && canonicalClose > 0);
    assert(Math.abs(close - canonicalClose) <= Math.max(0.01, canonicalClose * 0.000001), 'Canonical close does not match receipt.');
    assert.equal(Number(s['Split Factor']), 1, 'Resolve split treatment before reviewing.');
    assert.equal(Number(s.Dividend), 0, 'Review dividend flags before reviewing.');
    return { ticker: i.Ticker, sourceDate: s.Date, rawClose: close, adjustedClose: Number(s['Adjusted Close']), dividend: Number(s.Dividend), splitFactor: Number(s['Split Factor']), symbol: s['Marketstack Symbol'], mic: s.MIC, api: s['API Version'], closure,
      receipt: path.join(audit.receiptPath, i.Type === 'Benchmark' ? 'benchmarks-v1.json' : 'constituents-v2.json') };
  });
  ledger.days.push({ date: row.Date, prices: Object.fromEntries(instruments.map(i => [i.Ticker, Number(row[i.Ticker])])), fetchedAt: audit.fetchedAt, auditStatus: 'passed', entries });
}

const wb = Workbook.create();
const names = ['Summary', 'Prices', 'Returns and Contributions', 'Source Audit', 'Corporate Actions'];
const sh = Object.fromEntries(names.map(name => [name, wb.worksheets.add(name)]));
const colors = { ink: '#202A25', header: '#324D42', pale: '#EAF0EC', blue: '#2456A5', green: '#23804B' };
const pct = '0.00%;(0.00%);"-"', num = '#,##0.00;(#,##0.00);"-"';
const excelTimestamp = d => (Date.parse(d) - Date.UTC(1899,11,30)) / 86400000;
const excelDate = d => (Date.parse(d + 'T00:00:00Z') - Date.UTC(1899,11,30)) / 86400000;
const put = (s, cell, value) => s.getRange(cell).values = [[value]];
const formula = (s, cell, value) => { s.getRange(cell).formulas = [[value]]; s.getRange(cell).format.font.color = value.includes('!') ? colors.green : colors.ink; };
function setup(s, title, widths, headers, count, note) {
  const rows = count + 5;
  s.showGridLines = false;
  const all = s.getRangeByIndexes(0,0,rows,widths.length);
  all.format.font = {name:'Arial', size:11, color:colors.ink};
  all.format.rowHeight = 27; all.format.verticalAlignment = 'center';
  widths.forEach((w,i) => s.getRangeByIndexes(0,i,rows,1).format.columnWidth = w);
  put(s,'A2',title); s.getRange('A2').format.font = {name:'Arial',size:18,bold:true,color:colors.ink};
  s.getRangeByIndexes(1,0,1,Math.min(4,widths.length)).merge();
  put(s,'A3',note); s.getRangeByIndexes(2,0,1,Math.min(10,widths.length)).merge();
  s.getRangeByIndexes(2,0,1,Math.min(10,widths.length)).format.font.size = 10;
  const head = s.getRangeByIndexes(4,0,1,widths.length);
  head.values = [headers];
  head.format = {fill:colors.header,font:{name:'Arial',size:11,bold:true,color:'#FFFFFF'},wrapText:true,rowHeight:46,verticalAlignment:'center'};
  s.freezePanes.freezeRows(5); s.freezePanes.freezeColumns(2);
  s.getRange(`A6:A${rows}`).setNumberFormat('mm/dd/yy');
  for (let i=0;i<count;i++) if (i%2===1) s.getRangeByIndexes(i+5,0,1,widths.length).format.fill=colors.pale;
}
const N = ledger.days.length, total = N*17;
setup(sh.Prices,'Closing price history',[14,27,17,18,13,12,18,18,18,14,20],['Date','Company','Ticker','Marketstack symbol','MIC','Currency','Previous close','Close','Launch close','Source date','Market status'],total,'Unadjusted prices in listing currency. Sources and exchange calendars are in Source Audit.');
setup(sh['Returns and Contributions'],'Daily returns and contributions',[14,27,16,21,20,20,20,20],['Date','Company','Ticker','Previous weight','Daily price return','Contribution','Closing weight','Since launch return'],N*15,'Contributions use previous effective weights. Weights reset equally at quarterly reviews.');
setup(sh['Source Audit'],'Marketstack source history',[14,17,18,18,14,13,14,14,21,60,60,25],['Date','Ticker','Raw close','Adjusted close','Dividend','Split factor','Expected MIC','Received MIC','Validation','Raw receipt','Exchange calendar','Fetched at (UTC)'],total,'Raw receipts are immutable. Closed-market rows retain the date and evidence for their earlier source close.');
setup(sh['Corporate Actions'],'Corporate action history',[14,27,17,17,16,16,31,46],['Date','Company','Ticker','Source date','Dividend','Split factor','Provider review','Treatment'],total,'Provider split, dividend and security identity checks for each reviewed observation.');
setup(sh.Summary,'BSPI15 daily review',[14,19,19,19,19,19,19,19,19,19,19,19,17,20,16,19,25,18,22,22],['Date','BSPI15 level','Daily return','Since launch','S&P 500 level','S&P daily','S&P since launch','Nasdaq level','Nasdaq daily','Nasdaq since launch','Daily excess / S&P','Daily excess / Nasdaq','Weight total','Contribution difference','Holiday carries','Source audit','Fetched at (UTC)','Level difference','Since launch excess / S&P','Since launch excess / Nasdaq'],N,'Launch: October 1, 2026 = 1,000. Benchmark levels are rebased. Excess returns are percentage points.');
const p=sh.Prices,c=sh['Returns and Contributions'],a=sh['Source Audit'],ca=sh['Corporate Actions'],s=sh.Summary;
s.tabColor=colors.header;
for(let d=0;d<N;d++) {
  const day=ledger.days[d], previous=ledger.days[d-1], sr=6+d;
  const priceStart=6+17*d, retStart=6+15*d, retEnd=retStart+14;
  const quarter=x=>x.slice(0,4)+'-'+Math.floor((Number(x.slice(5,7))-1)/3);
  const reset=d===0||quarter(day.date)!==quarter(previous.date);
  for(let k=0;k<17;k++) {
    const i=instruments[k], e=day.entries[k], pr=priceStart+k;
    assert.equal(e.ticker,i.Ticker,'Instrument mapping changed.');
    p.getRange(`A${pr}:K${pr}`).values=[[excelDate(day.date),i.Company,i.Ticker,i['Marketstack Symbol'],i['Expected MIC'],i.Currency,null,day.prices[i.Ticker],ledger.days[0].prices[i.Ticker],excelDate(e.sourceDate),e.closure?'Verified closure':'Open']];
    if(d) formula(p,`G${pr}`,`=H${pr-17}`);
    a.getRange(`A${pr}:L${pr}`).values=[[excelDate(day.date),i.Ticker,e.rawClose,e.adjustedClose,e.dividend,e.splitFactor,i['Expected MIC'],e.mic,null,e.receipt,e.closure?.sourceUrl??'',excelTimestamp(day.fetchedAt)]];
    formula(a,`I${pr}`,`=IF(AND(G${pr}=H${pr},C${pr}>0,ABS(C${pr}-'Prices'!H${pr})<=MAX(0.01,'Prices'!H${pr}*0.000001)),"${e.closure?'Verified closure':'Match'}","Mismatch")`);
    ca.getRange(`A${pr}:H${pr}`).values=[[excelDate(day.date),i.Company,i.Ticker,excelDate(e.sourceDate),null,null,null,'No continuity adjustment']];
    formula(ca,`E${pr}`,`='Source Audit'!E${pr}`);formula(ca,`F${pr}`,`='Source Audit'!F${pr}`);
    formula(ca,`G${pr}`,`=IF(AND(E${pr}=0,F${pr}=1,'Source Audit'!G${pr}='Source Audit'!H${pr}),"No provider flag","Review required")`);
    if(i.Ticker==='002747') {p.getRange(`C${pr}`).setNumberFormat('000000');a.getRange(`B${pr}`).setNumberFormat('000000');ca.getRange(`C${pr}`).setNumberFormat('000000');}
    if(k>=15) continue;
    const cr=retStart+k;
    c.getRange(`A${cr}:C${cr}`).values=[[excelDate(day.date),i.Company,i.Ticker]];
    if(i.Ticker==='002747') c.getRange(`C${cr}`).setNumberFormat('000000');
    formula(c,`D${cr}`,reset?'=1/15':`=G${cr-15}`);
    if(d) {formula(c,`E${cr}`,`='Prices'!H${pr}/'Prices'!G${pr}-1`);formula(c,`F${cr}`,`=D${cr}*E${cr}`);}
    formula(c,`G${cr}`,d?`=D${cr}*(1+E${cr})/(1+SUM($F$${retStart}:$F$${retEnd}))`:'=1/15');
    formula(c,`H${cr}`,`='Prices'!H${pr}/'Prices'!I${pr}-1`);
  }
  put(s,`A${sr}`,excelDate(day.date));
  formula(s,`B${sr}`,d?`=B${sr-1}*(1+SUM('Returns and Contributions'!F${retStart}:F${retEnd}))`:'=1000');
  if(d) formula(s,`C${sr}`,`=B${sr}/B${sr-1}-1`);
  formula(s,`D${sr}`,`=B${sr}/$B$6-1`);
  for(const [offset,level,daily,since] of [[15,'E','F','G'],[16,'H','I','J']]) {
    const pr=priceStart+offset;
    formula(s,`${level}${sr}`,`=1000*'Prices'!H${pr}/'Prices'!I${pr}`);
    if(d) formula(s,`${daily}${sr}`,`=${level}${sr}/${level}${sr-1}-1`);
    formula(s,`${since}${sr}`,`=${level}${sr}/1000-1`);
  }
  if(d) {
    formula(s,`K${sr}`,`=(C${sr}-F${sr})*100`);formula(s,`L${sr}`,`=(C${sr}-I${sr})*100`);
    formula(s,`N${sr}`,`=SUM('Returns and Contributions'!F${retStart}:F${retEnd})-C${sr}`);
  }
  formula(s,`M${sr}`,`=SUM('Returns and Contributions'!G${retStart}:G${retEnd})`);
  put(s,`O${sr}`,day.entries.filter(e=>e.closure).length);
  formula(s,`P${sr}`,`=IF(COUNTIF('Source Audit'!I${priceStart}:I${priceStart+16},"Mismatch")=0,"Passed","Failed")`);
  put(s,`Q${sr}`,excelTimestamp(day.fetchedAt));
  formula(s,`S${sr}`,`=(D${sr}-G${sr})*100`);formula(s,`T${sr}`,`=(D${sr}-J${sr})*100`);
  // Independent, within-quarter price-relative calculation for reconciliation.
  const quarterStart=ledger.days.findIndex(x=>quarter(x.date)===quarter(day.date));
  const anchorDay=quarterStart===0?0:quarterStart-1, anchorRow=6+17*anchorDay;
  const anchorSummary=6+anchorDay;
  formula(s,`R${sr}`,`=B${sr}-${quarterStart===0?'1000':`B${anchorSummary}`}*(${Array.from({length:15},(_,k)=>`'Prices'!H${priceStart+k}/'Prices'!H${anchorRow+k}`).join('+')})/15`);
}
for(const col of ['B','E','H'])s.getRange(`${col}6:${col}${N+5}`).setNumberFormat(num);
for(const col of ['C','D','F','G','I','J','M'])s.getRange(`${col}6:${col}${N+5}`).setNumberFormat(pct);
s.getRange(`K6:L${N+5}`).setNumberFormat('0.00" pp";(0.00)" pp";"-"');
s.getRange(`N6:N${N+5}`).setNumberFormat('0.000000000000');s.getRange(`R6:R${N+5}`).setNumberFormat('0.000000000000');
s.getRange(`Q6:Q${N+5}`).setNumberFormat('yyyy-mm-dd hh:mm:ss');s.getRange(`S6:T${N+5}`).setNumberFormat('0.00" pp";(0.00)" pp";"-"');s.getRange(`A6:R${N+5}`).format.rowHeight=40;
p.getRange(`G6:I${total+5}`).setNumberFormat(num);p.getRange(`H6:I${total+5}`).format.font.color=colors.blue;p.getRange(`J6:J${total+5}`).setNumberFormat('mm/dd/yy');
c.getRange(`D6:H${N*15+5}`).setNumberFormat(pct);
a.getRange(`C6:E${total+5}`).setNumberFormat(num);a.getRange(`F6:F${total+5}`).setNumberFormat('0.0000');
a.getRange(`L6:L${total+5}`).setNumberFormat('yyyy-mm-dd hh:mm:ss');a.getRange(`J6:L${total+5}`).format.wrapText=true;a.getRange(`A6:L${total+5}`).format.rowHeight=50;
ca.getRange(`D6:D${total+5}`).setNumberFormat('mm/dd/yy');ca.getRange(`E6:E${total+5}`).setNumberFormat(num);
ca.getRange(`F6:F${total+5}`).setNumberFormat('0.0000');
// Native filtered tables make all dates and companies easy to review.
for(const [sheet,lastCol,count] of [[s,'T',N],[p,'K',total],[c,'H',N*15],[a,'L',total],[ca,'H',total]]) { const table=sheet.tables.add(`A5:${lastCol}${count+5}`,true,`${sheet.name.replaceAll(' ','')}History`);table.style='TableStyleLight1'; }
wb.recalculate();
const website=JSON.parse(await fs.readFile(path.join(root,'public/data/bspi15-performance.json'),'utf8'));
assert.equal(website.length,N);
for(let d=0;d<N;d++) {
  const r=6+d, actual=s.getRange(`A${r}:R${r}`).values[0], expected=website[d];
  assert.equal(ledger.days[d].date,expected.date);
  for(const [col,key] of [[1,'bspi15'],[4,'sp500'],[7,'nasdaqComposite']])assert(Math.abs(actual[col]-expected[key])<1e-8);
  assert(Math.abs(actual[12]-1)<1e-12);assert(Math.abs(actual[17])<1e-8);
  if(d)assert(Math.abs(actual[13])<1e-12);
  assert.equal(actual[15],'Passed');
  for(let k=0;k<15;k++)assert(Math.abs(c.getRange(`G${6+15*d+k}`).values[0][0]-expected.constituentWeights[instruments[k].Ticker]/100)<1e-12);
}
const lastPrice=6+17*(N-1), original=p.getRange(`H${lastPrice}`).values[0][0], before=s.getRange(`B${N+5}`).values[0][0];
put(p,`H${lastPrice}`,original*1.01);wb.recalculate();assert(s.getRange(`B${N+5}`).values[0][0]>before);assert.equal(a.getRange(`I${lastPrice}`).values[0][0],'Mismatch');assert.equal(s.getRange(`P${N+5}`).values[0][0],'Failed');
put(p,`H${lastPrice}`,original);wb.recalculate();assert(Math.abs(s.getRange(`B${N+5}`).values[0][0]-before)<1e-9);
await fs.mkdir(qaDir,{recursive:true});
const errors=await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:30}});
await fs.writeFile(path.join(qaDir,'formula-errors.ndjson'),errors.ndjson);
assert(errors.ndjson.includes('matched 0 entries'), 'Unexpected formula errors.');
console.log(errors.ndjson);
const inspection=await wb.inspect({kind:'table',range:`Summary!A5:T${N+5}`,include:'values,formulas',tableMaxRows:N+1,tableMaxCols:20,maxChars:9000});
await fs.writeFile(path.join(qaDir,'summary.ndjson'),inspection.ndjson);
for(const [name,range] of [['Summary',`A1:J${N+5}`],['Prices','A1:K22'],['Returns and Contributions','A1:H20'],['Source Audit','A1:L22'],['Corporate Actions','A1:H22']]) {
  const blob=await wb.render({sheetName:name,range,scale:1,format:'png'});
  await fs.writeFile(path.join(qaDir,name.toLowerCase().replaceAll(' ','-')+'.png'),new Uint8Array(await blob.arrayBuffer()));
}
const file=await SpreadsheetFile.exportXlsx(wb);
await fs.writeFile(ledgerPath,JSON.stringify(ledger,null,2)+'\n');
await file.save(output);
const checks={workbook:output,dates:N,firstDate:ledger.days[0].date,lastDate:ledger.days.at(-1).date,prices:total,contributionRows:N*15,sheets:names,formulaRecalculation:'passed',websiteReconciliation:'passed',inputChangeAndAuditFailure:'passed',historicalInputs:'preserved'};
await fs.writeFile(path.join(qaDir,'checks.json'),JSON.stringify(checks,null,2)+'\n');
console.log(JSON.stringify(checks));
