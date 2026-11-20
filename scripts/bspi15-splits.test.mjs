import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {calculatePerformance} from './bspi15-calculations.mjs';
import {splitFactor,validateSplits,resolvePrice,priceContinuityIssues} from './bspi15-price-policy.mjs';
import {previousCompletedDate,pendingTradingDates} from './bspi15-dates.mjs';
const split={id:'test',ticker:'K',ratio:5,effectiveTradingDate:'2026-11-19',sourceUrl:'https://example.com/exchange',reviewedAt:'2026-11-20',authorization:'reviewed',methodologyVersion:'1.0'};
const records={version:1,methodologyVersion:'1.0',events:[split]};
const row=(Date,K)=>({Date,K,'S&P 500':100,'Nasdaq Composite':100});
test('Pure five-for-one split leaves index level and weight unchanged',()=>{
 const result=calculatePerformance([row('2026-10-01',75000),row('2026-11-18',75000),row('2026-11-19',15000)],records,['K']);
 assert.deepEqual(result.observations.map(x=>x.bspi15),[1000,1000,1000]);assert.equal(result.metrics.at(-1).dailyReturn,0);assert.equal(result.metrics.at(-1).constituents[0].weight,1);
});
test('November 12, launch and split-day comparisons all use the same share basis',()=>{
 const r=calculatePerformance([row('2026-10-01',81200),row('2026-11-12',75030),row('2026-11-18',73610),row('2026-11-19',14690)],records,['K']);
 assert(Math.abs(r.metrics.at(-1).dailyReturn-(14690/14722-1))<1e-12);
 assert(Math.abs(r.observations.at(-1).bspi15/r.observations[1].bspi15-1-(14690/15006-1))<1e-12);
 assert(Math.abs(r.metrics.at(-1).sinceLaunch-(14690/(81200/5)-1))<1e-12);
});
test('Repeated and reverse splits compound, including quarter boundaries',()=>{
 const r={...records,events:[{...split,effectiveTradingDate:'2026-11-19'},{...split,id:'reverse',ratio:0.5,effectiveTradingDate:'2027-01-04'}]};
 const x=calculatePerformance([row('2026-10-01',100),row('2026-11-19',20),row('2026-12-31',20),row('2027-01-04',40)],r,['K']);
 assert.equal(splitFactor('K','2027-01-04',r),2.5);assert(x.observations.every(x=>x.bspi15===1000));
});
test('Duplicate, invalid and unsupported split records fail',()=>{
 assert.throws(()=>validateSplits({...records,events:[split,split]}));
 for(const ratio of [0,-1,NaN,1,Infinity])assert.throws(()=>validateSplits({...records,events:[{...split,ratio}]}));
 assert.throws(()=>validateSplits({...records,events:[{...split,authorization:null}]}));
});
test('Exact approved correction is required; unknown prices and identities fail',async()=>{
 const corrections=JSON.parse(await fs.readFile(new URL('../data/bspi15/price-corrections.json',import.meta.url),'utf8'));
 const e=corrections.corrections[0],o={ticker:e.ticker,date:e.date,sourceSymbol:e.sourceSymbol,sourceName:e.sourceName,mic:e.mic,currency:e.currency,sourceCurrency:e.currency,sourceApi:e.sourceApi,close:14722,adjustedClose:14722,splitFactor:1};
 assert.equal(resolvePrice(o,corrections).close,73610);assert.equal(resolvePrice({...o,close:73610},corrections).correction,null);
 for(const patch of [{close:14723},{mic:'XNAS'},{sourceName:'Different security'},{sourceCurrency:'USD'},{splitFactor:5}])assert.throws(()=>resolvePrice({...o,...patch},corrections));
 assert.equal(resolvePrice({...o,date:'2026-11-17'},corrections).close,14722);
});
test('Unreviewed split flags and unflagged mechanical drops are blocked',()=>{
 const a={ticker:'K',date:'2026-11-18',validatedClose:100,splitFactor:1,type:'Constituent'};
 assert.equal(priceContinuityIssues([a,{...a,date:'2026-11-19',validatedClose:20,splitFactor:5}],records).length,0);
 assert(priceContinuityIssues([a,{...a,date:'2026-11-19',validatedClose:20,splitFactor:1}],{...records,events:[]}).length>0);
 assert(priceContinuityIssues([{...a,splitFactor:2}],records).length>0);
});
test('Eastern previous date handles DST and does not mix the next Asian session',()=>{
 assert.equal(previousCompletedDate(new Date('2026-11-20T12:30:00Z')),'2026-11-19');
 assert.equal(previousCompletedDate(new Date('2026-11-02T12:30:00Z')),'2026-10-30');
 assert.equal(previousCompletedDate(new Date('2026-10-30T11:30:00Z')),'2026-10-29');
 assert.deepEqual(pendingTradingDates('2026-11-17','2026-11-20',['XJPX'],[]),['2026-11-18','2026-11-19','2026-11-20']);
 assert.deepEqual(pendingTradingDates('2026-11-20','2026-11-23',['XJPX','XNAS'],[{mic:'XJPX',from:'2026-11-23',through:'2026-11-23',sourceUrl:'u',evidence:'e',verifiedAt:'v'}]),['2026-11-23']);
});

test('Actual launch, November 12 and November 17 index levels are preserved',async()=>{
 const lines=(await fs.readFile(new URL('../data/bspi15/daily-closes.csv',import.meta.url),'utf8')).trim().split(/\r?\n/),headers=lines.shift().split(',');
 const rows=lines.map(l=>Object.fromEntries(l.split(',').map((v,k)=>[headers[k],k?Number(v):v])));
 const splits=JSON.parse(await fs.readFile(new URL('../data/bspi15/splits.json',import.meta.url),'utf8'));
 const data=calculatePerformance(rows,splits).observations;
 for(const [date,level] of [['2026-10-01',1000],['2026-11-12',918.3974572823612],['2026-11-17',848.7737615918654]])assert(Math.abs(data.find(x=>x.date===date).bspi15-level)<1e-9);
});


test('Long Marketstack histories paginate without changing raw records',async()=>{
 const {collectMarketstackPages}=await import('./bspi15-marketstack-pages.mjs');
 const raw=[{pagination:{limit:2,offset:0,count:2,total:3},data:[{close:10},{close:20}]},{pagination:{limit:2,offset:2,count:1,total:3},data:[{close:30}]}];
 const before=JSON.stringify(raw),offsets=[];const result=await collectMarketstackPages(async offset=>{offsets.push(offset);return raw[offset?1:0];});
 assert.deepEqual(offsets,[0,2]);assert.deepEqual(result.response.data,[{close:10},{close:20},{close:30}]);assert.equal(JSON.stringify(raw),before);assert.deepEqual(result.pages,raw);
});
test('Inconsistent or stalled Marketstack pagination fails',async()=>{
 const {collectMarketstackPages}=await import('./bspi15-marketstack-pages.mjs');
 await assert.rejects(collectMarketstackPages(async()=>({pagination:{limit:2,offset:0,count:0,total:3},data:[]})));
 let n=0;await assert.rejects(collectMarketstackPages(async offset=>({pagination:{limit:1,offset,count:1,total:++n===1?2:3},data:[{close:1}]})));
});
