import type {Metadata} from 'next';
import '@/styles/globals.css';
export const metadata:Metadata={metadataBase:new URL(process.env.APP_URL||'http://127.0.0.1:3000'),title:{default:'Landscape Studio — Your vision. Your canvas. Your website.',template:'%s | Landscape'},description:'A thoughtful visual studio for websites that feel like you.',robots:{index:false,follow:false}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;}
