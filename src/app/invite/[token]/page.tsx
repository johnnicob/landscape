import {notFound} from 'next/navigation';
import Link from 'next/link';
import {invitationByToken} from '@/server/services/invitations';
import {configured} from '@/server/db';
import {InvitationForm} from '@/features/guests/InvitationForm';
import {Brand} from '@/components/shared/Brand';
export const dynamic='force-dynamic';
export const metadata={title:'Your personal invitation',robots:{index:false,follow:false},referrer:'no-referrer' as const};
export default async function Page({params}:{params:Promise<{token:string}>}){if(!configured())notFound();const {token}=await params;let invitation;try{invitation=await invitationByToken(token);}catch{notFound();}return <main className="simple-page"><Brand/><InvitationForm token={token} name={invitation.guest.name} maxParty={invitation.guest.maxParty} role={invitation.guest.entourageRole} initial={invitation.response?{attending:invitation.response.attending,partySize:invitation.response.partySize,notes:invitation.response.notes,roleConfirmed:invitation.guest.roleConfirmed??undefined}:undefined}/><Link className="text-link" href={'/sites/'+invitation.project.slug}>View the wedding website ↗</Link></main>;}
