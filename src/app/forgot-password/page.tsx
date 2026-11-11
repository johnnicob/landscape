import Link from 'next/link';
import {Brand} from '@/components/shared/Brand';
export default function Page(){return <main className="simple-page"><Brand/><h1>A little help getting back in.</h1><p>Automatic password-reset emails are not configured in this first release. Ask your workspace administrator for help. No email is sent from this page.</p><Link href="/login" className="button button-primary">Back to sign in</Link></main>;}
