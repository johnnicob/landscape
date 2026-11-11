import {z} from 'zod';
import {operator} from '@/server/auth';
import {db} from '@/server/db';
import {assertOrigin,body,failure} from '@/server/security';
export async function POST(request:Request){try{assertOrigin(request);const actor=await operator(),input=z.object({name:z.string().trim().min(1).max(200),email:z.union([z.literal(''),z.email()]).default('')}).strict().parse(await body(request,5000));return Response.json(await db.client.create({data:{...input,workspaceId:actor.workspaceId}}));}catch(e){return failure(e);}}
