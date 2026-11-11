import {db} from '@/server/db';
import {operator} from '@/server/auth';
import {HttpError} from '@/server/security';
export async function ownedProject(id:string){const actor=await operator();const project=await db.project.findFirst({where:{id,workspaceId:actor.workspaceId},include:{document:true,published:true}});if(!project)throw new HttpError(404,'Project not found in this workspace.');return {actor,project};}
