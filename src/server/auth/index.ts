import {getServerSession,type NextAuthOptions} from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import {compare} from 'bcryptjs';
import {z} from 'zod';
import {db,configured} from '@/server/db';
import {HttpError,limit} from '@/server/security';
export const authOptions:NextAuthOptions={secret:process.env.NEXTAUTH_SECRET,session:{strategy:'jwt',maxAge:8*60*60},pages:{signIn:'/login'},providers:[Credentials({name:'Landscape',credentials:{email:{label:'Email',type:'email'},password:{label:'Password',type:'password'}},async authorize(raw){if(!configured())return null;const result=z.object({email:z.email().max(254),password:z.string().min(1).max(200)}).safeParse(raw);if(!result.success)return null;const email=result.data.email.toLowerCase();await limit('login:'+email,8,15*60_000);const user=await db.user.findUnique({where:{email}});if(!user||!await compare(result.data.password,user.passwordHash))return null;return {id:user.id,email:user.email,name:user.name};}})],callbacks:{async jwt({token,user}){if(user)token.sub=user.id;return token;},async session({session,token}){if(session.user&&token.sub)session.user.id=token.sub;return session;}}};
export async function operator(){const session=await getServerSession(authOptions);if(!session?.user?.id)throw new HttpError(401,'Sign in to continue.');const membership=await db.membership.findFirst({where:{userId:session.user.id,role:{in:['ADMIN','OPERATOR']}},orderBy:{id:'asc'}});if(!membership)throw new HttpError(403,'This account does not have editing access.');return {...membership,user:session.user};}
