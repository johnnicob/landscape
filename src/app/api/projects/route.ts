import {listProjects,createProject} from '@/server/services/projects';
import {assertOrigin,body,failure} from '@/server/security';
export async function GET(){try{return Response.json(await listProjects(),{headers:{'Cache-Control':'no-store'}});}catch(e){return failure(e);}}
export async function POST(request:Request){try{assertOrigin(request);return Response.json(await createProject(await body(request,20_000)),{status:201});}catch(e){return failure(e);}}
