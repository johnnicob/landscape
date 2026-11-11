import {redirect} from 'next/navigation';
import {getServerSession} from 'next-auth';
import {authOptions,operator} from '@/server/auth';
import {configured} from '@/server/db';
import {SetupNotice} from '@/components/shared/SetupNotice';
export const dynamic='force-dynamic';
export default async function Layout({children}:{children:React.ReactNode}){if(!configured())return <SetupNotice/>;if(!await getServerSession(authOptions))redirect('/login');await operator();return children;}
