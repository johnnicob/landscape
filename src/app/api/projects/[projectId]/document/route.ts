import {z} from 'zod';
import {ownedProject} from '@/server/authorization/projects';
import {saveDocument} from '@/server/services/projects';
import {assertOrigin,body,failure} from '@/server/security';
export async function GET(_request:Request,{params}:{params:Promise<{projectId:string}>}){try{const {project}=await ownedProject((await params).projectId);return Response.json(project.document,{headers:{'Cache-Control':'no-store'}});}catch(e){return failure(e);}}
export async function PUT(request:Request,{params}:{params:Promise<{projectId:string}>}){try{assertOrigin(request);const input=z.object({document:z.unknown(),expectedRevision:z.number().int().nonnegative(),checkpoint:z.boolean().optional()}).strict().parse(await body(request));return Response.json({revision:await saveDocument((await params).projectId,input.document,input.expectedRevision,input.checkpoint)});}catch(e){return failure(e);}}
