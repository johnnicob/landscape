import {db} from '@/server/db';
import {tokenHash,HttpError} from '@/server/security';
export async function reviewByToken(token:string){if(!/^[A-Za-z0-9_-]{43}$/.test(token))throw new HttpError(404,'Review unavailable.');const review=await db.review.findFirst({where:{tokenHash:tokenHash(token),revokedAt:null,expiresAt:{gt:new Date()}},include:{project:{include:{document:true}}}});if(!review?.project.document)throw new HttpError(404,'This review link is unavailable or expired.');return review;}
