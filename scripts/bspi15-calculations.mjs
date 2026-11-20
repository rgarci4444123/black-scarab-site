import assert from 'node:assert/strict';
import {splitFactor, validateSplits} from './bspi15-price-policy.mjs';

export const constituentTickers = ['6954','6506','002747','TER','6268','300124','6861','CGNX','OUST','HSAI','ROK','SIE','NXPI','6383','HEXA B'];
const sum = values => values.reduce((total,value) => total + value,0);
const quarter = date => `${date.slice(0,4)}-${Math.floor((Number(date.slice(5,7))-1)/3)}`;

export function calculatePerformance(rows, splits, tickers=constituentTickers) {
  validateSplits(splits); assert(rows.length); assert.equal(rows[0].Date,'2026-10-01');
  const output = [], metrics = [];
  let anchor = rows[0], anchorLevel = 1000;
  const comparable = (row,ticker) => Number(row[ticker]) * splitFactor(ticker,row.Date,splits);
  for (let d=0;d<rows.length;d++) {
    const row=rows[d], prior=rows[d-1], base=rows[0];
    if (prior) assert(row.Date>prior.Date,'Dates must be chronological and unique');
    for (const ticker of [...tickers,'S&P 500','Nasdaq Composite']) assert(Number.isFinite(Number(row[ticker])) && Number(row[ticker])>0,`Invalid ${ticker} close: ${row.Date}`);
    const reset = !d || quarter(row.Date)!==quarter(prior.Date);
    if (d && reset) {anchor=prior;anchorLevel=output[d-1].bspi15;}
    const ratios=tickers.map(ticker => comparable(row,ticker)/comparable(anchor,ticker));
    const ratioTotal=sum(ratios), level=anchorLevel*ratioTotal/tickers.length;
    const constituents=tickers.map((ticker,k) => {
      const previousWeight = reset ? 1/tickers.length : output[d-1].constituentWeights[ticker]/100;
      const dailyReturn = d ? comparable(row,ticker)/comparable(prior,ticker)-1 : 0;
      return {ticker,baseClose:Number(base[ticker]),previousClose:prior?Number(prior[ticker]):null,close:Number(row[ticker]),
        cumulativeSplitFactor:splitFactor(ticker,row.Date,splits),previousWeight,dailyReturn,contribution:previousWeight*dailyReturn,
        weight:ratios[k]/ratioTotal,sinceLaunch:comparable(row,ticker)/comparable(base,ticker)-1};
    });
    const contributionTotal=sum(constituents.map(x=>x.contribution));
    const previousLevel=d?output[d-1].bspi15:1000, dailyReturn=d?level/previousLevel-1:0;
    assert(Math.abs(previousLevel*(1+contributionTotal)-level)<1e-8,'Independent index calculations differ');
    const benchmarks=Object.fromEntries(['S&P 500','Nasdaq Composite'].map(ticker=>[ticker,{close:Number(row[ticker]),rebased:1000*Number(row[ticker])/Number(base[ticker]),dailyReturn:d?Number(row[ticker])/Number(prior[ticker])-1:0,sinceLaunch:Number(row[ticker])/Number(base[ticker])-1}]));
    output.push({date:row.Date,dateLabel:new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${row.Date}T12:00:00Z`)),bspi15:level,sp500:benchmarks['S&P 500'].rebased,nasdaqComposite:benchmarks['Nasdaq Composite'].rebased,constituentWeights:Object.fromEntries(constituents.map((x,k)=>[x.ticker,100*ratios[k]/ratioTotal]))});
    const sinceLaunch=level/1000-1;
    metrics.push({date:row.Date,baseDate:base.Date,previousDate:prior?.Date??null,level,previousLevel,dailyReturn,sinceLaunch,benchmarks,
      excessReturns:Object.fromEntries(Object.entries(benchmarks).map(([ticker,b])=>[ticker,{daily:dailyReturn-b.dailyReturn,sinceLaunch:sinceLaunch-b.sinceLaunch}])),constituents,
      weightTotal:sum(constituents.map(x=>x.weight)),contributionTotal,reconciliationDifference:contributionTotal-dailyReturn});
  }
  return {observations:output,metrics};
}
