import Link from 'next/link';
import {notFound} from 'next/navigation';
import {templates} from '@/features/templates/catalog';
import {TemplatePreview} from '@/features/templates/TemplatePreview';
export default async function Page({params}:{params:Promise<{templateId:string}>}){const {templateId}=await params,t=templates.find(t=>t.id===templateId);if(!t)notFound();return <main className="public-page"><Link className="text-link" href="/templates">← Back to the collection</Link><header className="page-heading"><div><span className="eyebrow">{t.style} / WEDDING</span><h1>{t.name}</h1><p className="muted">{t.description}</p></div><Link className="button button-primary" href={'/studio/new?template='+t.id}>Make this your starting point</Link></header><TemplatePreview id={t.id}/></main>;}
