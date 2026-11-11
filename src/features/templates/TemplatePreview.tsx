'use client';
import {useState} from 'react';
export function TemplatePreview({id}:{id:string}){const [device,setDevice]=useState('desktop');return <><div className="preview-switch" role="group" aria-label="Preview device">{['desktop','tablet','mobile'].map(d=><button key={d} aria-pressed={d===device} onClick={()=>setDevice(d)}>{d}</button>)}</div><div className="template-preview-stage"><iframe title="Website template preview" src={'/templates/'+id+'/preview'} style={{width:device==='desktop'?'100%':device==='tablet'?768:390,height:950}}/></div></>;}
