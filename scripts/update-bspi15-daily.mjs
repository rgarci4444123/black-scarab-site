import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {calculatePerformance} from './bspi15-calculations.mjs';
import {previousCompletedDate, pendingTradingDates} from './bspi15-dates.mjs';

const root=process.cwd(),read=async p=>JSON.parse(await fs.readFile(path.join(root,p),'utf8'));
const through=process.argv.find(x=>x.startsWith('--through='))?.split('=')[1] ?? previousCompletedDate(new Date());
assert(/^\d{4}-\d{2}-\d{2}$/.test(through) && through<=previousCompletedDate(new Date()),'Use a previous completed exchange-local date');
const parse=csv=>{const lines=csv.trim().split(/\r?\n/),headers=lines.shift().split(',');return {headers,rows:lines.map(l=>Object.fromEntries(l.split(',').map((v,k)=>[headers[k],k?Number(v):v])))};};
const input=path.join(root,'data/bspi15/daily-closes.csv');
const initial=await fs.readFile(input,'utf8'), {headers,rows}=parse(initial);
const mappings=(await fs.readFile(path.join(root,'data/bspi15/instruments.csv'),'utf8')).trim().split(/\r?\n/);const keys=mappings.shift().split(',');
const instruments=mappings.map(line=>Object.fromEntries(line.split(',').map((v,k)=>[keys[k],v])));
assert.equal(instruments.length,17);assert.deepEqual(headers.slice(1),instruments.map(i=>i.Ticker));
const splits=await read('data/bspi15/splits.json'),closures=await read('data/bspi15/verified-market-closures.json');
const dates=pendingTradingDates(rows.at(-1).Date,through,instruments.map(i=>i['Expected MIC']).filter(mic=>mic!=='INDX'),closures);
const environmentText=await fs.readFile(path.join(root,'.env.local'),'utf8').catch(()=> '');
const keyMatch=environmentText.match(/^\s*MARKETSTACK_API_KEY\s*=\s*(.*?)\s*$/m);
const privateKey=keyMatch?.[1]?.replace(/^["']|["']$/g,'');
const sanitize=value=>{let text=String(value??'').replace(/access_key=[^&\s"']+/g,'access_key=[redacted]');if(privateKey)text=text.replaceAll(privateKey,'[redacted]');return text;};
const changed=[];
for (const date of dates) {
  const command=spawnSync(process.execPath,['scripts/audit-bspi15-marketstack.mjs',`--through=${date}`],{cwd:root,encoding:'utf8',maxBuffer:10000000});
  process.stdout.write(sanitize(command.stdout));process.stderr.write(sanitize(command.stderr));
  const audit=await read('data/bspi15/marketstack-audit-latest.json');
  const issues=[...(command.status!==0?[{reason:'Audit command failed',exitCode:command.status,error:sanitize(command.error?.message??command.stderr).slice(-3000)}]:[]),...(audit.identityErrors??[]),...(audit.mismatches??[]),...(audit.priceValidationErrors??[]),...(audit.corporateActionErrors??[]),...(audit.missingSourceObservations??[]),...(audit.missingRequiredObservations??[]),...(audit.invalidObservations??[]),...(audit.duplicateObservations??[]),...(audit.paginationErrors??[])];
  if(command.status!==0 || audit.status!=='passed' || audit.period.through!==date) {
    await fs.writeFile(path.join(root,`outputs/bspi15-daily-status-${date}.json`),JSON.stringify({date,updatedAt:new Date().toISOString(),status:'blocked-strict-audit',latestCompletedDate:rows.at(-1).Date,pendingDates:dates.filter(d=>d>=date),audit:{scriptStatus:command.status===0?audit.status:'failed',lastSavedAuditPeriod:audit.period,counts:audit.counts,receiptPath:audit.receiptPath,unresolvedIssues:issues},canonicalUpdated:false,pushed:false},null,2)+'\n');
    throw new Error(`Strict audit blocked ${date}; review the saved status report`);
  }
  assert.equal(audit.counts.requiredDateObservations+audit.verifiedClosures.filter(c=>c.date===date).length,17);
  const byTicker=new Map(audit.requiredDateObservations.map(o=>[o.ticker,o])),carries=[];
  const current={Date:date};
  for (const instrument of instruments) {
    const o=byTicker.get(instrument.Ticker);
    if(o) {assert.equal(o.date,date);assert.equal(o.sourceSymbol,instrument['Marketstack Symbol']);assert(Number.isFinite(o.validatedClose)&&o.validatedClose>0);current[instrument.Ticker]=o.validatedClose;}
    else {const c=audit.verifiedClosures.find(c=>c.date===date&&c.ticker===instrument.Ticker);assert(c?.sourceUrl&&c.evidence);assert.equal(c.previousAvailableClose,rows.at(-1)[instrument.Ticker]);current[instrument.Ticker]=c.previousAvailableClose;carries.push(c);}
  }
  const priorCsv=await fs.readFile(input,'utf8');assert.equal(parse(priorCsv).rows.at(-1).Date,rows.at(-1).Date,'Canonical file changed during update');
  rows.push(current);const metrics=calculatePerformance(rows,splits).metrics.at(-1);
  for(const c of metrics.constituents) Object.assign(c,{company:instruments.find(i=>i.Ticker===c.ticker).Company,sourceDate:byTicker.has(c.ticker)?date:carries.find(x=>x.ticker===c.ticker).previousAvailableDate,carriedForward:!byTicker.has(c.ticker)});
  const previousMetricsPath=`outputs/bspi15-daily-metrics-${metrics.previousDate}.json`;
  const previousMetrics=await read(previousMetricsPath);
  Object.assign(metrics,{receiptPath:audit.receiptPath,auditStatus:audit.status,marketHolidays:carries,carriedForward:carries,approvedProviderMicExceptions:audit.approvedMicObservations.filter(o=>o.date===date),approvedPriceCorrections:audit.approvedPriceCorrections.filter(o=>o.date===date),corporateActions:{providerDividends:audit.requiredDateObservations.filter(o=>o.dividend!==0).length,providerSplitFlags:audit.requiredDateObservations.filter(o=>o.splitFactor!==1).length,effectiveSplits:splits.events.filter(e=>e.effectiveTradingDate===date),upcomingEvents:previousMetrics.corporateActions.upcomingEvents.filter(e=>!e.exchangeExDate||e.exchangeExDate>date),review:'Reviewed split records and exact price corrections applied. Raw provider receipts retained; cash dividends excluded.'}});
  const dir=path.join(root,`outputs/bspi15-work/${date}`);await fs.mkdir(dir,{recursive:true});
  await fs.writeFile(path.join(dir,'prior-canonical.csv'),priorCsv);await fs.copyFile(path.join(root,'data/bspi15/review-history.json'),path.join(dir,'prior-reviewed-history.json'));
  await fs.writeFile(path.join(dir,'audit.json'),JSON.stringify(audit,null,2)+'\n');
  await fs.writeFile(path.join(root,`outputs/bspi15-daily-metrics-${date}.json`),JSON.stringify(metrics,null,2)+'\n');
  await fs.appendFile(input,(priorCsv.endsWith('\n')?'':'\n')+headers.map(h=>current[h]).join(',')+'\n');
  assert((await fs.readFile(input,'utf8')).startsWith(priorCsv));changed.push(date);
}
assert((await fs.readFile(input,'utf8')).startsWith(initial));
const build=spawnSync(process.execPath,['scripts/build-bspi15-performance.mjs'],{cwd:root,stdio:'inherit'});assert.equal(build.status,0);
console.log(JSON.stringify({appendedDates:changed,latestCompletedDate:rows.at(-1).Date,nextStep:'Run cumulative workbook, reconciliations and publication checks before pushing.'}));
