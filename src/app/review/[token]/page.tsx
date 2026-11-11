import {notFound} from 'next/navigation';
import {configured} from '@/server/db';
import {reviewByToken} from '@/server/services/reviews';
import {parseDocument} from '@/features/editor/schema/document';
import {SiteRenderer} from '@/features/editor/renderer/SiteRenderer';
import {ReviewForm} from '@/features/reviews/ReviewForm';
export const dynamic='force-dynamic';
export const metadata={title:'Private design review',robots:{index:false,follow:false},referrer:'no-referrer' as const};
export default async function Page({params}:{params:Promise<{token:string}>}){if(!configured())notFound();const {token}=await params;let review;try{review=await reviewByToken(token);}catch{notFound();}return <><header className="review-header"><strong>Landscape / Your private design review</strong><span>{review.project.name}</span></header><SiteRenderer document={parseDocument(review.project.document!.data)} assetToken={token}/><ReviewForm token={token} revision={review.project.document!.revision}/></>;}
