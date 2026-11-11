import {StudioShell} from '@/components/shared/StudioShell';
import {ProjectTabs} from '@/components/shared/ProjectTabs';
import {ownedProject} from '@/server/authorization/projects';
import {db} from '@/server/db';
import {GuestManager} from '@/features/guests/GuestManager';
export default async function Page({params}:{params:Promise<{projectId:string}>}){const {projectId}=await params,{project}=await ownedProject(projectId),guests=await db.guest.findMany({where:{projectId},include:{invitation:{include:{response:true}}},orderBy:{name:'asc'}});return <StudioShell><div className="studio-page"><span className="eyebrow">MAKE ROOM FOR EVERYONE</span><h1>Guests & RSVP</h1><p className="muted">{project.name}</p><ProjectTabs id={projectId}/><GuestManager projectId={projectId} guests={guests.map(g=>({id:g.id,name:g.name,email:g.email,household:g.household,maxParty:g.maxParty,entourageRole:g.entourageRole,roleConfirmed:g.roleConfirmed,response:g.invitation?.response?(g.invitation.response.attending?'Attending':'Declined'):'Pending',invited:Boolean(g.invitation&&!g.invitation.revokedAt)}))}/></div></StudioShell>;}
