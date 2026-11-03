import Link from 'next/link';
import type {CareerResource} from '@/lib/career-paths/resources';
export function CareerResources({resources}:{resources:CareerResource[]}){
 if(!resources.length)return null;
 return <section id="further-reading" className="discovery-resources"><div className="discovery-section-heading"><div><p className="eyebrow">LEARN WITH A PURPOSE</p><h2>Useful reading and practical resources</h2></div></div><ul>{resources.map(resource=><li key={resource.id}><div><span className="discovery-resource-meta">{resource.provider} · {resource.level}</span><h3>{resource.href.startsWith('/')?<Link href={resource.href}>{resource.title} <span aria-hidden="true">↗</span></Link>:<a href={resource.href} target="_blank" rel="noreferrer">{resource.title} <span aria-hidden="true">↗</span></a>}</h3><p>{resource.description}</p></div><span className="discovery-resource-kind">{resource.kind==='explainer'?'Concept guide':resource.kind==='reference'?'Reference':'Tutorial'}</span></li>)}</ul></section>;
}
