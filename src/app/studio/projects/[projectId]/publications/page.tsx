import {StudioShell} from '@/components/shared/StudioShell';
import {ProjectTabs} from '@/components/shared/ProjectTabs';
import {ownedProject} from '@/server/authorization/projects';
import {db} from '@/server/db';
import {PublicationManager} from '@/features/publishing/PublicationManager';
export default async function Page({params}:{params:Promise<{projectId:string}>}){const {projectId}=await params,{project}=await ownedProject(projectId),publications=await db.publication.findMany({where:{projectId},select:{id:true,revision:true,createdAt:true},orderBy:{createdAt:'desc'}});return <StudioShell><div className="studio-page"><span className="eyebrow">EVERY CHAPTER, SAFELY KEPT</span><h1>Publication history</h1><p className="muted">{project.name}</p><ProjectTabs id={projectId}/><PublicationManager projectId={projectId} slug={project.slug} liveId={project.publishedId} publications={publications.map(p=>({...p,createdAt:p.createdAt.toISOString()}))}/></div></StudioShell>;}
