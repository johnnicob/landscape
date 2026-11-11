import {z} from 'zod';
import {ownedProject} from '@/server/authorization/projects';
import {saveDocument} from '@/server/services/projects';
import {db} from '@/server/db';
import {assertOrigin,body,failure,HttpError} from '@/server/security';
export async function GET(_request:Request,{params}:{params:Promise<{projectId:string}>}){try{const {projectId}=await params;await ownedProject(projectId);return Response.json(await db.siteRevision.findMany({where:{projectId},select:{id:true,number:true,label:true,createdAt:true},orderBy:{number:'desc'},take:40}),{headers:{'Cache-Control':'no-store'}});}catch(e){return failure(e);}}
export async function POST(request:Request,{params}:{params:Promise<{projectId:string}>}){try{assertOrigin(request);const {projectId}=await params,{project}=await ownedProject(projectId),data=z.object({revisionId:z.string()}).strict().parse(await body(request,1000));const revision=await db.siteRevision.findFirst({where:{id:data.revisionId,projectId}});if(!revision||!project.document)throw new HttpError(404,'Revision not found.');return Response.json({revision:await saveDocument(projectId,revision.data,project.document.revision,true)});}catch(e){return failure(e);}}
