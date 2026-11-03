import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createContentLoader} from './content-source-loader.mjs';

// Offline review only. Input is a genuine Search Analytics API export with dateRange and dimensions.
const {publishedCareerGuides,guidePath}=createContentLoader()('lib/career-paths/guides.ts');
const pages=publishedCareerGuides.map(guide=>({page:`https://www.blackscarab.ai${guidePath(guide)}`,occupationId:guide.occupationId}));
if(!process.argv[2]) {
  console.log(JSON.stringify({status:'No Search Console data supplied',pages,requiredExport:{siteUrl:'verified property',dateRange:{startDate:'YYYY-MM-DD',endDate:'YYYY-MM-DD'},searchType:'web',dimensions:['page','query'],rows:'Unmodified Search Analytics rows: keys, clicks, impressions, ctr, position. Optional dimensions: date, country, device.'},review:'Compare equivalent periods and filters; inspect query/page rows before changing content. Query privacy and row limits prevent treating exported sums as complete site totals.'},null,2));
} else {
  const data=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
  assert.ok(data.siteUrl&&data.dateRange?.startDate&&data.dateRange?.endDate&&data.searchType);
  const pageIndex=data.dimensions.indexOf('page'),queryIndex=data.dimensions.indexOf('query');
  assert.ok(pageIndex>=0&&queryIndex>=0);
  const allowed=new Set(pages.map(item=>item.page));
  const rows=[];
  for(const row of data.rows) {
    assert.equal(row.keys.length,data.dimensions.length);
    assert.ok([row.clicks,row.impressions,row.ctr,row.position].every(Number.isFinite));
    assert.ok(row.clicks>=0&&row.impressions>0&&row.clicks<=row.impressions&&row.ctr>=0&&row.ctr<=1&&row.position>=1);
    assert.ok(Math.abs(row.ctr-row.clicks/row.impressions)<0.001);
    const url=new URL(row.keys[pageIndex]);url.hash='';url.search='';url.pathname=url.pathname.replace(/\/$/,'');
    if(allowed.has(url.href)) rows.push({...row,page:url.href,query:row.keys[queryIndex]});
  }
  console.log(JSON.stringify({status:'Supplied Search Console observations',property:data.siteUrl,dateRange:data.dateRange,searchType:data.searchType,dimensions:data.dimensions,rows:rows.sort((a,b)=>b.impressions-a.impressions),review:'No fabricated estimates or automatic edits. Sort visible query/page rows by impressions, then review relevance and clicks in context. Positions are supplied averages, not fixed ranks.'},null,2));
}
