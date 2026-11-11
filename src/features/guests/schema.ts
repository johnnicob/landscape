import {z} from 'zod';
export const guestSchema=z.object({name:z.string().trim().min(1).max(200),email:z.union([z.literal(''),z.email()]).default(''),household:z.string().max(200).default(''),maxParty:z.coerce.number().int().min(1).max(20).default(1),entourageRole:z.string().max(200).default('')}).strict();
export const responseSchema=z.object({attending:z.boolean(),partySize:z.number().int().min(0).max(20),notes:z.string().max(2000).default(''),roleConfirmed:z.boolean().optional()}).strict();
export function validateResponse(raw:unknown,maxParty:number){const data=responseSchema.parse(raw);if(data.attending&&(data.partySize<1||data.partySize>maxParty))throw Error('Choose a guest count within your invitation.');return {...data,partySize:data.attending?data.partySize:0};}
