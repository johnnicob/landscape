import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {db,configured} from '@/server/db';
import {parseDocument} from '@/features/editor/schema/document';
import {SiteRenderer} from '@/features/editor/renderer/SiteRenderer';
import {VisitTracker} from '@/features/analytics/VisitTracker';
export const dynamic='force-dynamic';
type Props={params:Promise<{slug:string;path?:string[]}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{if(!configured())return {};const {slug}=await params,project=await db.project.findUnique({where:{slug},include:{published:true}});if(!project?.published)return {};const doc=parseDocument(project.published.data);return {title:doc.metadata.title,description:doc.metadata.description,openGraph:{title:doc.metadata.title,description:doc.metadata.description,type:'website'}};}
export default async function Page({params}:Props){if(!configured())notFound();const {slug,path}=await params,project=await db.project.findUnique({where:{slug},include:{published:true}});if(!project?.published)notFound();const document=parseDocument(project.published.data),page=document.pages.find(p=>p.path==='/'+(path?.join('/')??''));if(!page)notFound();return <><VisitTracker slug={slug}/><SiteRenderer document={document} pageId={page.id}/></>;}
