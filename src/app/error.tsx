'use client';
import Link from 'next/link';
export default function Page({reset}:{reset:()=>void}){return <main className="simple-page"><h1>Something needs a second look.</h1><p>We could not open this page. Your saved work has not been replaced.</p><button className="button button-primary" onClick={reset}>Try again</button> <Link className="button button-outline" href="/studio">Back to your workspace</Link></main>;}
