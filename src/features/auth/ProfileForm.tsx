'use client';
import {signOut} from 'next-auth/react';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
export function ProfileForm({name,email}:{name:string;email:string}){const [message,setMessage]=useState('');return <form className="form-stack" action={async data=>{const response=await fetch('/api/profile',{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(data))});setMessage(response.ok?'Your profile is updated.':'Could not update your profile.');}}><label>Your name<input aria-label="Your name" name="name" defaultValue={name} required maxLength={100}/></label><label>Email<input aria-label="Email" value={email} readOnly/></label><Button>Save profile</Button><Button variant="outline" type="button" onClick={()=>void signOut({callbackUrl:'/login'})}>Sign out</Button>{message&&<p role="status">{message}</p>}</form>;}
