import {z} from 'zod';
import {db} from '@/server/db';
import {ownedProject} from '@/server/authorization/projects';
import {assertOrigin,body,failure,HttpError} from '@/server/security';
import {guestSchema} from '@/features/guests/schema';
export async function POST(request:Request,{params}:{params:Promise<{projectId:string}>}){try{assertOrigin(request);const {projectId}=await params;await ownedProject(projectId);const data=guestSchema.parse(await body(request,5000));return Response.json(await db.guest.create({data:{...data,projectId}}));}catch(e){return failure(e);}}
export async function PATCH(request:Request,{params}:{params:Promise<{projectId:string}>}){try{assertOrigin(request);const {projectId}=await params;await ownedProject(projectId);const {guestId,...raw}=z.object({guestId:z.string(),...guestSchema.shape}).strict().parse(await body(request,5000));const result=await db.guest.updateMany({where:{id:guestId,projectId},data:raw});if(!result.count)throw new HttpError(404,'Guest not found.');return Response.json({ok:true});}catch(e){return failure(e);}}
