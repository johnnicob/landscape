import {ownedProject} from '@/server/authorization/projects';
import {publish} from '@/server/services/projects';
import {db} from '@/server/db';
import {z} from 'zod';
import {assertOrigin,body,failure,HttpError} from '@/server/security';
export async function POST(request:Request,{params}:{params:Promise<{projectId:string}>}){try{assertOrigin(request);return Response.json(await publish((await params).projectId));}catch(e){return failure(e);}}
export async function PATCH(request:Request,{params}:{params:Promise<{projectId:string}>}){try{assertOrigin(request);const {projectId}=await params;await ownedProject(projectId);const data=z.object({publicationId:z.string().nullable()}).strict().parse(await body(request,1000));if(data.publicationId&&!await db.publication.findFirst({where:{id:data.publicationId,projectId}}))throw new HttpError(404,'Publication not found.');await db.project.update({where:{id:projectId},data:{publishedId:data.publicationId}});return Response.json({ok:true});}catch(e){return failure(e);}}
