import test from 'node:test';
import assert from 'node:assert/strict';
import {createContentLoader} from './content-source-loader.mjs';
const {calculateWelding:calc,weldingDefaults:base}=createContentLoader()(process.cwd()+'/lib/welding-planner.ts');
test('published example counts setup, failed attempts and cash realization',()=>{
  const {result:r}=calc(base);
  assert.equal(r.capacity,14254);
  assert.equal(r.acceptedParts,10000);
  assert.ok(Math.abs(r.operatorHours-612.244897959184)<1e-8);
  assert.ok(Math.abs(r.netBenefit-24428.5714285714)<1e-8);
  assert.ok(Math.abs(r.payback-6.14035087719298)<1e-8);
});
test('only demand served earns savings; zero output cannot earn a benefit',()=>{
  const low=calc({...base,demand:'1000'}).result;
  assert.equal(low.acceptedParts,1000);
  assert.ok(low.netBenefit<0);
  for(const patch of [{yieldPercent:'0'},{availability:'0'},{demand:'0'}]) {
    const r=calc({...base,...patch}).result;
    assert.equal(r.acceptedParts,0);assert.equal(r.netBenefit,-12000);assert.equal(r.payback,null);
  }
  const full=calc({...base,demand:'100000'}).result;
  assert.equal(full.acceptedParts,14254);assert.equal(full.shortfall,85746);
});
test('smaller batches consume setup capacity and paid hours',()=>{
  const a=calc(base).result,b=calc({...base,batchParts:'5'}).result;
  assert.equal(b.cycleMinutes,12);assert.ok(b.capacity<a.capacity);assert.ok(b.operatorHours>a.operatorHours);
});
test('increased operator demand is charged fully even at zero cash conversion',()=>{
  const r=calc({...base,robotTouchMinutes:'20',cashPercent:'0'}).result;
  assert.ok(r.savedHours<0);assert.ok(r.netBenefit<-12000);assert.equal(r.payback,null);
});
test('invalid fields suppress stale results and specify the affected field',()=>{
  for(const patch of [{arcMinutes:''},{capital:'0'},{availability:'101'},{yieldPercent:'-1'},{batchParts:'1.5'},{demand:'2.5'},{annualHours:'8761'},{hourlyCost:'Infinity'}]){
    const r=calc({...base,...patch});assert.equal(r.result,null);assert.equal(Object.keys(r.errors).length,1);
  }
});
