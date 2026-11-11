import {ownedProject} from '@/server/authorization/projects';
import {mutateProject} from '@/server/services/projects';
import {assertOrigin,body,failure} from '@/server/security';
export async function GET(_request:Request,{params}:{params:Promise<{projectId:string}>}){try{const {project}=await ownedProject((await params).projectId);return Response.json(project,{headers:{'Cache-Control':'no-store'}});}catch(e){return failure(e);}}
export async function PATCH(request:Request,{params}:{params:Promise<{projectId:string}>}){try{assertOrigin(request);return Response.json(await mutateProject((await params).projectId,await body(request,5000)));}catch(e){return failure(e);}}
