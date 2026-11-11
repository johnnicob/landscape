import {notFound} from 'next/navigation';
import {instantiateTemplate,templates} from '@/features/templates/catalog';
import {SiteRenderer} from '@/features/editor/renderer/SiteRenderer';
export default async function Page({params}:{params:Promise<{templateId:string}>}){const {templateId}=await params;if(!templates.some(t=>t.id===templateId))notFound();return <SiteRenderer document={instantiateTemplate(templateId)}/>;}
