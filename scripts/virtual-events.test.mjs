import test from 'node:test';
import assert from 'node:assert/strict';
import { createContentLoader } from './content-source-loader.mjs';
import { toCandidate, calendarEvents, extractEvents, htmlEvent, scoreEvent } from './virtual-events/extract.mjs';
import { verifyCandidate } from './virtual-events/evidence.mjs';
import { normalizeText, isPublicAddress, linkedPages } from './virtual-events/network.mjs';
import { braveSearch, extractWithOpenAI, discoveryQueries } from './virtual-events/providers.mjs';
import { parseSchedule, zonedIso } from './virtual-events/schedule.mjs';
const core = createContentLoader()('lib/virtual-events.ts');
const now = new Date('2026-11-16T12:00:00Z');
// Synthetic fixtures are isolated to tests and never imported by public pages.
const source = { id: 'test', name: 'Fixture Robotics Lab', website: 'https://example.org', domains: ['example.org'], tier: 2 };
const detail = { name: 'Robot Simulation Technical Workshop', startDate: '2026-11-24T10:00:00-05:00',
  endDate: '2026-11-24T11:00:00-05:00', eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  description: 'A live hands-on engineering workshop on robot simulation, manufacturing and industrial deployment. Researchers demonstrate machine vision, autonomous robotics and digital twin training through a technical case study.',
  url: 'https://example.org/events/workshop', isAccessibleForFree: true };
const pageFor = data => { const body = `<h1>${data.name}</h1><script type="application/ld+json">${JSON.stringify({ '@type':'Event', ...data })}</script>`; return { url:'https://example.org/events/workshop', body, text:normalizeText(body) }; };
const page = pageFor(detail);
const getPage = async () => page;
async function candidate() {
  const e = toCandidate(detail, source, page, now);
  assert.ok(e);
  e.summary = 'Engineers explore robot simulation and machine vision through a technical workshop from Fixture Robotics Lab. The session covers industrial deployment, digital twins and autonomous robot training through a practical demonstration.';
  return verifyCandidate(e, getPage, now);
}
async function approved() { return core.approve(await candidate(), 'Test editor', now); }

test('a verified future online event enters review but remains hidden until human approval', async () => {
  const e = await candidate(); assert.equal(e.status, 'candidate'); assert.equal(core.eligible(e, now), true);
  assert.deepEqual(core.upcomingVirtualEvents([e], now), []);
  core.approve(e, 'Editor', now); assert.equal(core.upcomingVirtualEvents([e], now).length, 1);
});
test('missing timezone and floating/all-day start times cannot produce verified candidates', () => {
  assert.equal(toCandidate({...detail, startDate:'2026-11-24T10:00:00'},source,page,now), null);
  assert.equal(toCandidate({...detail, startDate:'2026-11-24'},source,page,now), null);
  assert.equal(parseSchedule('November 24, 2026 10 AM'), null);
  assert.equal(parseSchedule('November 24, 2026 10 AM IST'), null);
});
test('mandatory verification cannot be overridden with an editorial score', async () => {
  for (const field of ['official','online','schedule','registration','live']) {
    const e = await candidate(); e.verification[field] = false; e.score = 100; e.overrideReason = 'Test override';
    assert.throws(() => core.approve(e,'Editor',now)); assert.equal(core.upcomingVirtualEvents([{...e,status:'approved'}],now).length,0);
  }
});
test('tracking URLs and different event URLs deduplicate by organizer, title and session day', async () => {
  const first = await candidate(); const records = [first];
  const second = structuredClone(first); second.id = 'other'; second.url += '?utm_source=test'; second.sourceUrl = 'https://example.org/another';
  core.reconcile(records, second); assert.equal(records.length,1); assert.equal(records[0].id,first.id);
});
test('two events on one calendar page remain separate', async () => {
  const first = await candidate(); first.sourceUrl = 'https://example.org/calendar'; const records = [first];
  const next = structuredClone(first); next.officialTitle = 'Another workshop'; next.displayTitle = next.officialTitle; next.id = 'another'; next.url = 'https://example.org/events/another'; next.duplicateKey = core.duplicateKey(next.organizer,next.officialTitle,next.startUtc);
  core.reconcile(records,next); assert.equal(records.length,2);
});
test('regional MathWorks URLs deduplicate while distinct Siemens sessions sharing a program URL survive reimport', async () => {
  assert.equal(core.canonicalUrl('https://uk.mathworks.com/company/events/test?utm_source=mail'), core.canonicalUrl('https://www.mathworks.com/company/events/test'));
  const records=[];
  for (const [i,title] of ['Physical AI session','Agentic factory session','Autonomous production session'].entries()) {
    const e=await candidate(); e.id=`siemens-${i}`; e.organizer='Siemens'; e.officialTitle=title; e.displayTitle=title;
    e.sourceUrl=e.url='https://sps.virtualevent.siemens.com/en/'; e.duplicateKey=core.duplicateKey(e.organizer,title,e.startUtc);
    core.reconcile(records,e); core.reconcile(records,structuredClone(e));
  }
  assert.equal(records.length,3);
  assert.equal(new Set(records.map(e=>e.id)).size,3);
});
test('official shared meridiem, abbreviated month and explicit offset schedules parse without assuming a zone', () => {
  for (const [quote,utc] of [
    ['November 24, 2026 | 12-1 PM ET','2026-11-24T17:00:00.000Z'],
    ['Nov 17, 2026 — 8:00 – 9:00 AM PT','2026-11-17T16:00:00.000Z'],
    ['December 3, 2026 | 11:00 a.m. EST (UTC-05:00)','2026-12-03T16:00:00.000Z'],
    ['December 8, 2026 16:00 - 16:40 UTC+01:00','2026-12-08T15:00:00.000Z'],
    ['November 18, 2026 12:00 - 13:00 UTC-05:00','2026-11-18T17:00:00.000Z'],
  ]) assert.equal(new Date(parseSchedule(quote).startDate).toISOString(),utc);
  assert.equal(parseSchedule('November 18, 2026 12:00 - 13:00'),null);
  assert.equal(parseSchedule('February 30, 2026 12:00 UTC-05:00'),null);
});
test('date-only schema uses an explicit source time and still detects date changes', async () => {
  const e=await candidate();
  e.evidence.schedule='November 24, 2026 10 AM EST';
  const p=pageFor({...detail,startDate:'2026-11-24'}); p.text+=` ${e.evidence.schedule}`;
  await verifyCandidate(e,async()=>p,now); assert.equal(core.verified(e,now),true);
  const changed=pageFor({...detail,startDate:'2026-11-25'}); changed.text+=` ${e.evidence.schedule}`;
  await verifyCandidate(e,async()=>changed,now); assert.match(e.verification.error,/changed the event date/);
});
test('aggregate member pricing uses disclosed general admission and catches fee changes', async () => {
  const e=await candidate(); e.cost='paid'; e.price='DKK 195';
  const priced={...detail,isAccessibleForFree:undefined,offers:{'@type':'AggregateOffer',priceCurrency:'DKK',offers:[{price:'0.00',priceCurrency:'DKK'},{price:'195.00',priceCurrency:'DKK'}]}};
  await verifyCandidate(e,async()=>pageFor(priced),now); assert.equal(core.verified(e,now),true);
  const free=structuredClone(e); free.cost='free'; free.price=null;
  await verifyCandidate(free,async()=>pageFor(priced),now); assert.match(free.verification.error,/member pricing/);
  priced.offers.offers[1].price='225.00'; await verifyCandidate(e,async()=>pageFor(priced),now);
  assert.match(e.verification.error,/changed event pricing/);
});
test('the curated intake preserves 20 identities and reimport keeps approval and expiration gates', async () => {
  const { readFile }=await import('node:fs/promises');
  const intake=JSON.parse(await readFile(new URL('../data/virtual-events/intakes/2026-11-16-curated.json',import.meta.url),'utf8'));
  const records=JSON.parse(await readFile(new URL('../data/virtual-events/events.json',import.meta.url),'utf8'));
  assert.deepEqual(intake.map(e=>e.number),Array.from({length:20},(_,i)=>i+1));
  const ids=new Set(intake.map(e=>e.eventId)); assert.equal(ids.size,20);
  const candidates=structuredClone(records.filter(e=>ids.has(e.id))).map(e=>({...e,status:'candidate',approvedFingerprint:null})); assert.equal(candidates.length,20);
  assert.deepEqual(core.upcomingVirtualEvents(candidates,now),[]);
  for(const e of candidates) {
    const words=e.summary.split(/\s+/).length; assert.ok(words>=25 && words<=45);
    assert.equal(e.status,'candidate'); assert.equal(e.approvedFingerprint,null);
    assert.equal(Date.parse(e.originalStart),Date.parse(e.startUtc));
  }
  const again=structuredClone(records); candidates.forEach(e=>core.reconcile(again,structuredClone(e)));
  assert.equal(again.length,records.length);
  core.expireEvents(again,new Date('2026-12-11T12:00:00Z'));
  assert.equal(again.filter(e=>ids.has(e.id) && e.status==='expired').length,20);
});
test('a rescheduled event keeps its identity and loses approval', async () => {
  const first = await approved(); const records = [first]; const updated = structuredClone(first);
  updated.startUtc = '2026-11-25T15:00:00.000Z'; updated.originalStart = '2026-11-25T10:00:00-05:00'; updated.endUtc = '2026-11-25T16:00:00.000Z';
  updated.duplicateKey = core.duplicateKey(updated.organizer, updated.officialTitle, updated.startUtc);
  core.reconcile(records,updated); assert.equal(records.length,1); assert.equal(records[0].status,'candidate'); assert.equal(records[0].approvedFingerprint,null);
});
test('a rejected unchanged event does not reenter review on a new scan', async () => {
  const first = await candidate(); first.status='rejected'; const records=[first]; core.reconcile(records, await candidate()); assert.equal(records[0].status,'rejected');
});
test('canceled events are hidden, even when the score and previous approval are valid', async () => {
  const e = await approved(); const canceledPage = pageFor({...detail, eventStatus:'https://schema.org/EventCancelled'});
  await verifyCandidate(e,async()=>canceledPage,now); assert.equal(e.status,'canceled'); assert.deepEqual(core.upcomingVirtualEvents([e],now),[]);
});
test('concluded events expire; missing end times do not acquire invented durations', async () => {
  const e = await approved(); core.expireEvents([e],new Date('2026-11-24T16:00:00Z')); assert.equal(e.status,'expired');
  const noEnd = await candidate(); noEnd.endUtc=null; core.expireEvents([noEnd], new Date(noEnd.startUtc)); assert.equal(noEnd.status,'expired');
});
test('inaccessible sources do not advance last verified time or remain visible', async () => {
  const e = await approved(); const old=e.lastVerifiedAt;
  await verifyCandidate(e,async()=>{throw new Error('HTTP 403');}, new Date('2026-11-16T13:00:00Z'));
  assert.equal(e.lastVerifiedAt,old); assert.match(e.verification.error,/403/); assert.deepEqual(core.upcomingVirtualEvents([e],now),[]);
});
test('broken registration URLs prevent approval and publication', async () => {
  const e=await candidate(); e.url='https://example.org/broken';
  await verifyCandidate(e,async url=>{ if(url.endsWith('broken'))throw new Error('HTTP 404');return page;},now);
  assert.throws(()=>core.approve(e,'Editor',now)); assert.match(e.verification.error,/404/);
});
test('on-demand recordings do not become upcoming events', () => {
  assert.equal(toCandidate({...detail,name:'Robot Simulation On-demand recording'},source,page,now),null);
});
test('discovery accepts 60 days while public display is restricted to 30 days', async () => {
  const e=await approved(); e.startUtc='2026-12-28T15:00:00Z';e.originalStart='2026-12-28T10:00:00-05:00';e.endUtc=null;e.approvedFingerprint=core.fingerprint(e);
  assert.equal(core.upcomingVirtualEvents([e],now).length,0);
  assert.ok(toCandidate({...detail,startDate:'2026-12-28T10:00:00-05:00'},source,page,now));
  assert.equal(toCandidate({...detail,startDate:'2027-03-01T10:00:00-05:00'},source,page,now),null);
});
test('Eastern daylight-saving transitions use the correct source offset', () => {
  assert.equal(parseSchedule('November 1, 2026 | 8 AM ET').startDate, '2026-11-01T08:00:00-05:00');
  assert.equal(parseSchedule('October 31, 2026 | 8 AM ET').startDate, '2026-10-31T08:00:00-04:00');
  assert.equal(zonedIso(2027,3,14,2,30,'America/New_York'), null);
  assert.equal(zonedIso(2026,11,1,1,30,'America/New_York'), null);
  assert.equal(parseSchedule('November 24, 2026 | 11 AM - 12 PM ET').startDate,'2026-11-24T11:00:00-05:00');
});
test('calendar extraction rejects missing zones and recurring series', () => {
  const body='BEGIN:VCALENDAR\nBEGIN:VEVENT\nUID:test\nSUMMARY:Robot Workshop\nDTSTART:20261124T150000Z\nLOCATION:Online\nURL:https://example.org/event\nEND:VEVENT\nEND:VCALENDAR';
  assert.equal(calendarEvents(body).length,1);
  assert.equal(calendarEvents(body.replace('150000Z','150000')).length,0);
  assert.equal(calendarEvents(body.replace('UID:test','UID:test\nRRULE:FREQ=DAILY')).length,0);
});
test('edits after approval invalidate the public record', async () => {
  const e=await approved();e.summary+=' Unreviewed claim.';assert.equal(core.upcomingVirtualEvents([e],now).length,0);
});
test('scores use the requested weights and reject unrelated generic enterprise topics', () => {
  assert.deepEqual(core.SCORE_MAX,{relevance:35,credibility:25,education:20,quality:10,accessibility:10});
  const generic={...detail,name:'Enterprise Sales AI',description:'Increase sales with customer service chatbots.'};
  assert.equal(scoreEvent(generic,source).relevance,0);assert.equal(toCandidate(generic,source,page,now),null);
});
test('missing search and extraction credentials degrade explicitly without fake success', async () => {
  assert.deepEqual(await braveSearch('robotics',{},()=>{throw new Error('must not fetch');}),{status:'not-configured',results:[]});
  assert.deepEqual(await extractWithOpenAI(page,{},()=>{throw new Error('must not fetch');}),{status:'not-configured',events:[]});
  assert.match(discoveryQueries(now)[0],/after:2026-11-16 before:2027-01-15/);
});
test('no suitable events is a valid empty result and small calendars avoid headings', () => {
  assert.deepEqual(core.upcomingVirtualEvents([],now),[]);assert.equal(core.groupVirtualEvents([],now)[0].label,null);
});
test('paid events require a confirmed price and low scores require an explicit human override', async () => {
  const e=await candidate();e.cost='paid';e.price=null;assert.equal(core.eligible(e,now),false);
  e.price='USD 20';e.score=64;assert.throws(()=>core.approve(e,'Editor',now));e.overrideReason='Specific educational value';assert.equal(core.approve(e,'Editor',now).status,'approved');
});
test('private destinations are excluded and discovered event links prioritize details', () => {
  for(const ip of ['127.0.0.1','10.0.0.2','169.254.169.254','172.16.1.1','192.168.0.1','::1','::ffff:127.0.0.1']) assert.equal(isPublicAddress(ip),false);
  assert.equal(isPublicAddress('8.8.8.8'),true);
  const links=linkedPages('<a href="/webinars">All</a><a href="/ai/webinars/robot-demo">Demo</a>','https://example.org',['example.org']);
  assert.equal(links[0],'https://example.org/ai/webinars/robot-demo');
  assert.deepEqual(linkedPages('<a href="#register">Register</a><a href="/events/demo#agenda">Agenda</a>','https://example.org/events/demo',['example.org']),[]);
});
test('HTML extraction requires an explicit full date, time and zone', () => {
  const body='<h1>Robot Simulation Workshop</h1><p>November 24, 2026 | 11 AM - 12 PM ET</p><h2>ABOUT THIS WEBINAR</h2><p>Technical robot simulation demonstration for engineers.</p><h2>PRESENTER</h2>';
  const p={url:source.website,body,text:normalizeText(body)};
  assert.equal(htmlEvent(p,source)[0].startDate,'2026-11-24T11:00:00-05:00');
  assert.equal(htmlEvent({...p,body:body.replace(' PM ET',' PM')},source).length,0);
  assert.equal(extractEvents(page).length,1);
});

test('scans are idempotent, review batches suppress repeats, and overlap is rejected', async () => {
  const { mkdtemp, mkdir, writeFile, readFile, rm } = await import('node:fs/promises');
  const { tmpdir } = await import('node:os'); const { join } = await import('node:path');
  const { scan, reviewBatch } = await import('./virtual-events/scan.mjs');
  const directory=await mkdtemp(join(tmpdir(),'black-scarab-events-test-'));const original=process.cwd();
  try {
    await mkdir(join(directory,'data/virtual-events'),{recursive:true});await mkdir(join(directory,'docs/virtual-events'),{recursive:true});
    await writeFile(join(directory,'data/virtual-events/events.json'),'[]');await writeFile(join(directory,'data/virtual-events/organizer-leads.json'),'[]');
    await writeFile(join(directory,'data/virtual-events/sources.json'),JSON.stringify([{...source,sources:[page.url]}]));
    process.chdir(directory);
    await scan({getPage,env:{},now});await scan({getPage,env:{},now});
    let records=JSON.parse(await readFile('data/virtual-events/events.json','utf8'));
    assert.equal(records.length,1);assert.equal(records[0].status,'candidate');assert.equal(records[0].lastVerifiedAt,now.toISOString());
    assert.equal((await reviewBatch(now)).length,1);assert.equal((await reviewBatch(now)).length,0);
    await writeFile('data/virtual-events/.scan.lock','test');
    await assert.rejects(()=>scan({getPage,env:{},now}),/Another virtual-events operation/);
  } finally {process.chdir(original);await rm(directory,{recursive:true,force:true});}
});

test('an approved programme or price change is hidden immediately', async () => {
  const e=await approved();const changed=pageFor({...detail,description:'The workshop now covers a different subject.'});
  await verifyCandidate(e,async()=>changed,now);assert.match(e.verification.error,/programme changed/);assert.deepEqual(core.upcomingVirtualEvents([e],now),[]);
});

test('calendar boilerplate about online submission does not imply online attendance', () => {
  const body='BEGIN:VCALENDAR\nBEGIN:VEVENT\nUID:inperson\nSUMMARY:Robotics Research Conference\nDTSTART:20261124T150000Z\nLOCATION:Conference Center\nDESCRIPTION:Submit papers online. Robotics research and simulation workshops.\nURL:https://example.org/conference\nEND:VEVENT\nEND:VCALENDAR';
  assert.deepEqual(calendarEvents(body),[]);
});

test('calendar markup is crawlable, uses explicit UTC fallback, and changes the day with local zones', async () => {
  const { readFileSync } = await import('node:fs');
  const { createRequire } = await import('node:module');
  const ts = (await import('typescript')).default;
  const require = createRequire(import.meta.url);
  const React = require('react'); const { renderToStaticMarkup }=require('react-dom/server');
  const filename='components/virtual-events-list.tsx';
  const code=ts.transpileModule(readFileSync(filename,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,jsx:ts.JsxEmit.ReactJSX}}).outputText;
  const exports={};
  new Function('require','exports',code)(id=>id==='@/lib/virtual-events'?core:id==='@vercel/analytics/react'?{track:()=>{}}:require(id),exports);
  const e=await approved();
  const html=renderToStaticMarkup(React.createElement(exports.default,{events:[e],renderedAt:now.toISOString()}));
  assert.match(html,/dateTime="2026-11-24T15:00:00.000Z"/);assert.match(html,/UTC/);assert.match(html,/Robot Simulation Technical Workshop/);assert.match(html,/Event Details/);
  assert.doesNotMatch(html,/approvedFingerprint|firstDiscoveredAt|scoring rationale/);
  assert.equal(exports.eventDateParts('2026-11-24T01:00:00Z','America/New_York').day,'23');
  assert.equal(exports.eventDateParts('2026-11-24T01:00:00Z','UTC').day,'24');
  const empty=renderToStaticMarkup(React.createElement(exports.default,{events:[],renderedAt:now.toISOString()}));
  assert.match(empty,/More virtual events coming soon/);
});

test('midnight calendar placeholders do not verify an all-day event start time', async () => {
  const data={...detail,startDate:'2026-11-24T00:00:00-05:00'};const p=pageFor(data);
  const e=toCandidate(data,source,p,now);assert.ok(e);assert.equal(e.verification.schedule,false);
  await verifyCandidate(e,async()=>p,now);assert.match(e.verification.error,/Midnight/);
});

test('alternate calendar citations and rescoring do not resurrect a rejected event', async () => {
  const e=await candidate();e.status='rejected';const changed=structuredClone(e);
  changed.sourceUrl='https://example.org/another-calendar';changed.score=90;changed.summary='';
  const records=[e];core.reconcile(records,changed);assert.equal(records[0].status,'rejected');
  const newLow=structuredClone(changed);newLow.startUtc='2026-11-25T15:00:00.000Z';newLow.originalStart='2026-11-25T10:00:00-05:00';newLow.status='rejected';newLow.score=62;
  core.reconcile(records,newLow);assert.equal(records[0].status,'rejected');
});

test('TZID calendar entries preserve original wall time and authoritative zone', () => {
  const body='BEGIN:VCALENDAR\nBEGIN:VEVENT\nUID:tzid\nSUMMARY:Robot Simulation Workshop\nDTSTART;TZID=America/New_York:20261124T100000\nLOCATION:Online\nURL:https://example.org/workshop\nEND:VEVENT\nEND:VCALENDAR';
  const e=calendarEvents(body)[0];assert.equal(e.startDate,'2026-11-24T10:00:00-05:00');assert.equal(e.sourceTimezone,'America/New_York');
});
