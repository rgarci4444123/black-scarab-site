from pathlib import Path
from urllib.request import Request,urlopen
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
from urllib.parse import urljoin
import json,hashlib
BASE=Path('docs/earnings-calendar/company-mark-sources')
manifest=json.loads((BASE/'manifest-2026-10.json').read_text())
urls={
 '002747.SZ':['https://www.estun.com/skin/images/logo.png'],
 'TER':['https://www.teradyne.com/wp-content/uploads/2022/08/Teradyne-logo-white-2.svg'],
 'HEXA-B.ST':['https://ichs-p-001.sitecorecontenthub.cloud/api/public/content/a-s-s-e-t---3-9-4-2-4-39424?v=ba59b6e9'],
 '688836.SS':['https://www.unitree.com/unitree-favicon.svg'],
 'ISRG':['https://cdn.cookielaw.org/logos/2d81edac-a4d2-43b5-aaad-2f1926e3e40e/670cb061-7b74-41a0-850b-349ca43f5152/e146af79-afd0-4c73-86e0-088e3f3f823c/intuitive_logo160.png'],
 'TSLA':['https://www.tesla.com/themes/custom/tesla_frontend/assets/favicons/favicon-96x96.png'],
 '002050.SZ':['https://www.zjshc.com/static/en/images/logo.png'],
}
def fetch(item):
 e=item.copy();ticker=e['ticker']
 if e['status']=='downloaded':return e
 for url in urls.get(ticker,[]):
  try:
   with urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0','Referer':e['pageUrl']}),timeout=20) as r:data=r.read();typ=r.headers.get('Content-Type','');final=r.url
   if 'text/html' in typ or len(data)<50:raise ValueError('Not an image')
   ext='.svg' if 'svg' in typ else '.png';p=BASE/(ticker.lower().replace('.','-')+ext);p.write_bytes(data)
   e.update(status='downloaded',assetUrl=final,rawFile=str(p),sha256=hashlib.sha256(data).hexdigest(),contentType=typ);e.pop('errors',None);break
  except Exception as error:e['errors']=[str(error)]
 return e
with ThreadPoolExecutor(max_workers=5) as pool:out=list(pool.map(fetch,manifest))
(BASE/'manifest-2026-10.json').write_text(json.dumps(out,indent=2)+'\n')
for e in out:print(e['ticker'],e['status'],e.get('errors',''))
