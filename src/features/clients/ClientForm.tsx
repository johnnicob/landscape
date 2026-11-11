'use client';
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {Button} from '@/components/ui/button';
export function ClientForm(){const [message,setMessage]=useState('');const router=useRouter();return <form className="form-stack" action={async data=>{try{const response=await fetch('/api/clients',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(data))}),value=await response.json();if(!response.ok)throw Error(value.error);setMessage('Client added to your workspace.');router.refresh();}catch(e){setMessage(e instanceof Error?e.message:'Could not add this client.');}}}><label>Client name<input aria-label="Client name" name="name" required maxLength={200}/></label><label>Email (optional)<input aria-label="Email (optional)" name="email" type="email"/></label><Button>Add client</Button>{message&&<p className="notice" role="status">{message}</p>}</form>;}
