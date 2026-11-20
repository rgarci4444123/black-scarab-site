import assert from 'node:assert/strict';

// Keep original responses separately; only combine their unchanged observations.
export async function collectMarketstackPages(fetchPage) {
  const pages=[];let offset=0,total=null;
  do {
    const response=await fetchPage(offset),p=response.pagination;
    assert(p && Array.isArray(response.data),'Invalid Marketstack page');
    assert(Number.isInteger(p.total)&&p.total>=0 && p.offset===offset && p.count===response.data.length,'Inconsistent Marketstack pagination');
    if(total===null)total=p.total;else assert.equal(p.total,total,'Marketstack total changed during pagination');
    pages.push(response);offset+=response.data.length;
    assert(offset<=total,'Marketstack page exceeds total');
    assert(offset>=total || response.data.length>0,'Marketstack pagination made no progress');
  } while(offset<total);
  if(pages.length===1)return {response:pages[0],pages};
  return {response:{receiptType:'paginated-source-aggregate',pagination:{limit:pages[0].pagination.limit,offset:0,count:offset,total},data:pages.flatMap(p=>p.data)},pages};
}
