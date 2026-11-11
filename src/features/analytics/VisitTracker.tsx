'use client';
import {useEffect} from 'react';
export function VisitTracker({slug}:{slug:string}){useEffect(()=>{void fetch('/api/visits/'+encodeURIComponent(slug),{method:'POST',keepalive:true}).catch(()=>{});},[slug]);return null;}
