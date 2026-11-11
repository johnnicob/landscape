import {describe,it,expect} from 'vitest';
import {validateResponse} from '@/features/guests/schema';
describe('authorized attendance constraints',()=>{it('enforces invitation party limits',()=>{expect(()=>validateResponse({attending:true,partySize:3,notes:''},2)).toThrow();expect(validateResponse({attending:true,partySize:2,notes:''},2).partySize).toBe(2);});it('keeps role acceptance separate from declined attendance',()=>{expect(validateResponse({attending:false,partySize:2,notes:'',roleConfirmed:true},2)).toEqual({attending:false,partySize:0,notes:'',roleConfirmed:true});});});
