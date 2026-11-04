from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urljoin,urlparse
from html.parser import HTMLParser
from concurrent.futures import ThreadPoolExecutor
import json,re,hashlib,argparse

SITES=[('OUST','https://ouster.com'),('CGNX','https://www.cognex.com/en'),('ROK','https://www.rockwellautomation.com/en-us.html'),('NOVT','https://novanta.com'),('HSAI','https://www.hesaitech.com'),('6383.T','https://www.daifuku.com'),('6324.T','https://www.hds.co.jp'),('SIE.DE','https://www.siemens.com/en-us/'),('277810.KQ','https://rainbow-robotics.com'),('6268.T','https://www.nabtesco.com'),('6481.T','https://www.thk.com'),('XPEV','https://www.xpeng.com'),('NVDA','https://www.nvidia.com/en-us/'),('MOG.A','https://www.moog.com'),('SYM','https://www.symbotic.com')]
OCTOBER_SITES=[('6954.T','https://www.fanuc.co.jp/en/'),('6506.T','https://www.yaskawa-global.com'),('002747.SZ','https://www.estun.com'),('TER','https://www.teradyne.com'),('300124.SZ','https://www.inovance.com'),('6861.T','https://www.keyence.com'),('NXPI','https://www.nxp.com'),('HEXA-B.ST','https://hexagon.com'),('TSLA','https://www.tesla.com'),('688836.SS','https://www.unitree.com'),('454910.KS','https://www.doosanrobotics.com/en/'),('005380.KS','https://www.hyundai.com/worldwide/en'),('ABBN.SW','https://global.abb/group/en'),('ISRG','https://www.intuitive.com/en-us'),('688017.SS','https://www.leaderdrive.com'),('002050.SZ','https://www.sanhua.com'),('601689.SS','https://www.tuopu.com')]
args=argparse.ArgumentParser();args.add_argument('--month',choices=['2026-10','2026-11'],default='2026-11');selected=args.parse_args().month
if selected=='2026-10':SITES=OCTOBER_SITES
BASE=Path('docs/earnings-calendar/company-mark-sources');BASE.mkdir(parents=True,exist_ok=True)
class Parser(HTMLParser):
 def __init__(self):super().__init__();self.icons=[];self.logos=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='link' and 'icon' in a.get('rel','').lower() and a.get('href'):self.icons.append(a)
  if tag=='img' and re.search('logo',(a.get('alt') or '')+' '+(a.get('class') or '')+' '+(a.get('src') or ''),re.I) and a.get('src'):self.logos.append(a)
def request(url):
 with urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=20) as r:return r.read(),r.headers.get('Content-Type',''),r.url
def fetch(item):
 ticker,url=item;result={'ticker':ticker,'pageUrl':url,'checkedDate':'2026-11-03'}
 try:
  raw,_,pageurl=request(url);parser=Parser();parser.feed(raw.decode('utf-8','replace'));result['pageUrl']=pageurl
  candidates=sorted(parser.icons,key=lambda a:('apple-touch' not in a.get('rel',''), 'svg' not in a.get('href',''), -int(re.search(r'\d+',a.get('sizes','0')).group() if re.search(r'\d+',a.get('sizes','0')) else 0)))
  urls=[urljoin(pageurl,a['href']) for a in candidates]+[urljoin(pageurl,'/favicon.ico')]
  result['logoCandidates']=[urljoin(pageurl,a['src']) for a in parser.logos[:8]]
  errors=[]
  for asseturl in dict.fromkeys(urls):
   try:
    data,typ,final=request(asseturl)
    if len(data)<50 or 'text/html' in typ:raise ValueError('Not an image')
    ext='.svg' if 'svg' in typ or data.lstrip().startswith(b'<svg') else '.png' if data.startswith(b'\x89PNG') else '.ico' if data.startswith(b'\x00\x00\x01\x00') else '.jpg' if data.startswith(b'\xff\xd8') else '.webp' if data[8:12]==b'WEBP' else '.bin'
    filename=ticker.lower().replace('.','-')+ext;(BASE/filename).write_bytes(data);result.update(assetUrl=final,rawFile=str(BASE/filename),sha256=hashlib.sha256(data).hexdigest(),contentType=typ,status='downloaded');return result
   except Exception as e:errors.append(str(e))
  result.update(status='missing',errors=errors)
 except Exception as e:result.update(status='missing',errors=[str(e)])
 return result
with ThreadPoolExecutor(max_workers=8) as pool: results=list(pool.map(fetch,SITES))
(BASE/('manifest-2026-10.json' if selected=='2026-10' else 'manifest.json')).write_text(json.dumps(results,indent=2)+'\n')
for r in results:print(r['ticker'],r['status'],r.get('rawFile',''),r.get('errors',[])[:1])
