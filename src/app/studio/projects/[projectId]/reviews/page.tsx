import {ownedProject} from '@/server/authorization/projects';
import {db} from '@/server/db';
import {StudioShell} from '@/components/shared/StudioShell';
import {ProjectTabs} from '@/components/shared/ProjectTabs';
import {ReviewManager} from '@/features/reviews/ReviewManager';
export default async function Page({params}:{params:Promise<{projectId:string}>}){const {projectId}=await params,{project}=await ownedProject(projectId),reviews=await db.review.findMany({where:{projectId},select:{id:true,expiresAt:true,revokedAt:true,approvedRevision:true,feedback:true}});return <StudioShell><div className="studio-page"><span className="eyebrow">A COLLABORATIVE LITTLE DETAIL</span><h1>Client reviews</h1><p className="muted">{project.name}</p><ProjectTabs id={projectId}/><ReviewManager projectId={projectId} reviews={reviews.map(r=>({...r,expiresAt:r.expiresAt.toISOString(),revokedAt:r.revokedAt?.toISOString()??null}))}/></div></StudioShell>;}
