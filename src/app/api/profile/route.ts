import {z} from 'zod';
import {operator} from '@/server/auth';
import {db} from '@/server/db';
import {assertOrigin,body,failure} from '@/server/security';
export async function PATCH(request:Request){try{assertOrigin(request);const actor=await operator(),input=z.object({name:z.string().trim().min(1).max(100)}).strict().parse(await body(request,1000));await db.user.update({where:{id:actor.userId},data:input});return Response.json({ok:true});}catch(e){return failure(e);}}
