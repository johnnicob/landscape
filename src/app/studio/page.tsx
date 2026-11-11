import {StudioShell} from '@/components/shared/StudioShell';
import {operator} from '@/server/auth';
import {Projects} from '@/features/projects/Projects';
export default async function Page(){const actor=await operator();return <StudioShell name={actor.user.name??'Your workspace'}><Projects overview name={actor.user.name??'there'}/></StudioShell>;}
