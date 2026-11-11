import {ownedProject} from '@/server/authorization/projects';
import {parseDocument} from '@/features/editor/schema/document';
import {SiteRenderer} from '@/features/editor/renderer/SiteRenderer';
import {notFound} from 'next/navigation';
export default async function Page({params,searchParams}:{params:Promise<{projectId:string}>;searchParams:Promise<{page?:string}>}){const {project}=await ownedProject((await params).projectId);if(!project.document)notFound();return <SiteRenderer document={parseDocument(project.document.data)} pageId={(await searchParams).page}/>;}
