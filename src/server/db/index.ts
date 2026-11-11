import {PrismaClient} from '@prisma/client';
const globalDb=globalThis as unknown as {landscapeDb?:PrismaClient};
export const db=globalDb.landscapeDb??new PrismaClient();
if(process.env.NODE_ENV!=='production')globalDb.landscapeDb=db;
export const configured=()=>Boolean(process.env.DATABASE_URL);
