import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs/promises';
import { reviewedCashDividend } from './bspi15-corporate-actions.mjs';
const records = JSON.parse(await fs.readFile(new URL('../data/bspi15/corporate-action-treatments.json', import.meta.url), 'utf8'));
const observation = {ticker:'ROK',date:'2026-11-16',sourceSymbol:'ROK',expectedMic:'XNYS',currency:'USD',sourceApi:'v2',dividend:1.45,splitFactor:1};
test('Exact reviewed cash dividend is accepted without changing the raw price', () => {
  assert.equal(reviewedCashDividend({...observation,close:384.9},records)?.id,'ROK-2026-11-16-cash-dividend');
});
for(const [field,value] of Object.entries({ticker:'CGNX',date:'2026-11-17',sourceSymbol:'ROK.A',expectedMic:'XNAS',currency:'EUR',sourceApi:'v1',dividend:1.46,splitFactor:5})) {
  test(`Reject unreviewed ${field}`,()=>assert.equal(reviewedCashDividend({...observation,[field]:value},records),null));
}
test('Reject missing or duplicate reviews',()=>{
  assert.equal(reviewedCashDividend(observation,{...records,events:[]}),null);
  assert.equal(reviewedCashDividend(observation,{...records,events:[...records.events,...records.events]}),null);
});
test('Reject invalid cash amounts and unsupported treatment',()=>{
  for(const dividend of [0,-1,NaN,Infinity]) assert.equal(reviewedCashDividend({...observation,dividend},records),null);
  for(const event of [{...records.events[0],sourceUrl:''},{...records.events[0],treatment:'reinvest'},{...records.events[0],reviewedAt:'unknown'}]) assert.equal(reviewedCashDividend(observation,{...records,events:[event]}),null);
});
