import Link from 'next/link';
import {LandPlot} from 'lucide-react';
export function Brand({compact=false}:{compact?:boolean}){return <Link href="/" className="brand" aria-label="Landscape home"><span className="brand-mark"><LandPlot size={25} strokeWidth={1.6}/></span>{!compact&&<span>landscape<span className="brand-sub">STUDIO</span></span>}</Link>;}
