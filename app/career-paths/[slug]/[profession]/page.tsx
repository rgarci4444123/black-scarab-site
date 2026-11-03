import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {publishedCareerGuides,guidePath} from '@/lib/career-paths/guides';
import {getFamily,siteUrl} from '@/lib/career-paths/families';
import {occupations} from '@/lib/career-paths/occupations';
import {CareerProfessionGuide} from '@/components/career-profession-guide';

export const dynamicParams=false;
export function generateStaticParams(){return publishedCareerGuides.map(guide=>({slug:guide.familyId,profession:guide.slug}));}
type Props={params:Promise<{slug:string;profession:string}>};
const findGuide=(family:string,slug:string)=>publishedCareerGuides.find(guide=>guide.familyId===family&&guide.slug===slug);

export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug,profession}=await params,guide=findGuide(slug,profession);
 if(!guide)return {};
 return {title:{absolute:guide.seoTitle},description:guide.description,alternates:{canonical:guidePath(guide)},openGraph:{type:'article',title:guide.seoTitle,description:guide.description,url:guidePath(guide),...(guide.publishedAt?{publishedTime:guide.publishedAt}:{}),modifiedTime:guide.reviewedAt}};
}
export default async function Page({params}:Props){
 const {slug,profession}=await params,guide=findGuide(slug,profession);
 if(!guide)notFound();
 const family=getFamily(guide.familyId),occupation=occupations.find(role=>role.id===guide.occupationId);
 if(!family||!occupation)notFound();
 const url=siteUrl+guidePath(guide);
 const schema={'@context':'https://schema.org','@graph':[
  {'@type':'Article',headline:guide.title,description:guide.description,mainEntityOfPage:url,...(guide.publishedAt?{datePublished:guide.publishedAt}:{}),dateModified:guide.reviewedAt,author:{'@type':'Organization',name:'Black Scarab',url:siteUrl},citation:guide.citations.map(citation=>citation.url.startsWith('/')?siteUrl+citation.url:citation.url)},
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Career Paths',item:siteUrl+'/career-paths'},{'@type':'ListItem',position:2,name:family.name,item:siteUrl+'/career-paths/'+family.slug},{'@type':'ListItem',position:3,name:occupation.title,item:url}]}
 ]};
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/><CareerProfessionGuide guide={guide} family={family} occupationTitle={occupation.title}/></>;
}
