'use client';
import {Fragment,type ReactNode} from 'react';
import Image from 'next/image';
import {Heart,Leaf,Sparkles,Star,ArrowRight} from 'lucide-react';
import type {SiteDocument,SiteNode,NodeType} from '../schema/document';
import {documentCSS} from './styles';
import {Countdown,SiteTabs} from './Interactive';
import {RichText} from './RichText';
export type RenderInteraction={selectedId?:string;onSelect?:(id:string)=>void;onText?:(id:string,text:string)=>void;onEditRich?:(id:string)=>void};
type RenderProps={node:SiteNode;children:ReactNode;doc:SiteDocument;interaction?:RenderInteraction;assetToken?:string};
const bound=(node:SiteNode,key:'text'|'src'|'target',fallback:string,doc:SiteDocument)=>{const binding=node.bindings?.[key];return binding&&Object.hasOwn(doc.eventData,binding.path)?doc.eventData[binding.path]:fallback;};
function Text({node,doc,interaction}:{node:Extract<SiteNode,{type:'heading'|'paragraph'}>;doc:SiteDocument;interaction?:RenderInteraction}){const value=bound(node,'text',node.props.text,doc);const Tag=node.type==='heading'?node.props.level:'p';return <Tag contentEditable={Boolean(interaction&&interaction.selectedId===node.id&&!node.locked)} suppressContentEditableWarning onDoubleClick={e=>{if(interaction&&!node.locked){e.currentTarget.focus();}}} onBlur={e=>{if(interaction&&e.currentTarget.textContent!==value)interaction.onText?.(node.id,e.currentTarget.textContent??'');}} onKeyDown={e=>{if(e.key==='Escape'){e.currentTarget.textContent=value;e.currentTarget.blur();}if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();e.currentTarget.blur();}}}>{value}</Tag>;}
const imageSource=(src:string,token?:string)=>src.startsWith('/api/assets/')&&token?src+'?review='+encodeURIComponent(token):src;
const renderers:Record<NodeType,(p:RenderProps)=>ReactNode>={
 section:({children})=>children,container:({children})=>children,stack:({children})=>children,grid:({children})=>children,columns:({children})=>children,overlay:({children})=>children,card:({children})=>children,
 heading:({node,doc,interaction})=>node.type==='heading'?<Text node={node} doc={doc} interaction={interaction}/>:null,
 paragraph:({node,doc,interaction})=>node.type==='paragraph'?<Text node={node} doc={doc} interaction={interaction}/>:null,
 richtext:({node,interaction})=>node.type==='richtext'?<div onDoubleClick={()=>interaction?.onEditRich?.(node.id)}><RichText value={node.props.json}/></div>:null,
 image:({node,doc,assetToken})=>node.type==='image'&&bound(node,'src',node.props.src,doc)?<Image src={imageSource(bound(node,'src',node.props.src,doc),assetToken)} alt={node.props.alt} width={1400} height={1000} sizes="(max-width:768px) 100vw, 70vw" unoptimized={node.props.src.startsWith('/api/')}/>:<div className="site-image-empty">Choose an image</div>,
 background:({node,doc,assetToken})=>node.type==='background'&&node.props.src?<Image src={imageSource(bound(node,'src',node.props.src,doc),assetToken)} alt={node.props.alt} width={1600} height={1100} sizes="100vw" unoptimized={node.props.src.startsWith('/api/')}/>:null,
 button:({node})=>node.type==='button'?<a className="site-button" href={node.props.href}>{node.props.text}</a>:null,
 link:({node})=>node.type==='link'?<a href={node.props.href}>{node.props.text}</a>:null,
 badge:({node,doc})=>node.type==='badge'?<span className="site-badge">{bound(node,'text',node.props.text,doc)}</span>:null,
 icon:({node})=>{if(node.type!=='icon')return null;const Icon={heart:Heart,sparkles:Sparkles,leaf:Leaf,star:Star,arrow:ArrowRight}[node.props.name];return <Icon aria-hidden="true" size={28}/>;},
 spacer:()=>null,divider:()=> <hr/>,
 gallery:({node,assetToken})=>node.type==='gallery'?<div className="site-gallery">{node.props.images.map((m,i)=><Image key={i} src={imageSource(m.src,assetToken)} alt={m.alt} width={800} height={900} sizes="(max-width:768px) 100vw, 33vw" unoptimized={m.src.startsWith('/api/')}/>)}</div>:null,
 video:({node})=>node.type==='video'?node.props.url?<iframe title={node.props.title} src={node.props.url} allowFullScreen loading="lazy" sandbox="allow-scripts allow-same-origin allow-presentation"/>:<p>Add an approved YouTube or Vimeo embed in the inspector.</p>:null,
 accordion:({node})=>node.type==='accordion'?<div className="site-faq">{node.props.items.map(item=><details key={item.id}><summary>{item.title}</summary><p>{item.body}</p></details>)}</div>:null,
 tabs:({node})=>node.type==='tabs'?<SiteTabs items={node.props.items}/>:null,
 countdown:({node,doc})=>node.type==='countdown'?<Countdown target={bound(node,'target',node.props.target,doc)} label={node.props.label}/>:null,
 form:({node})=>node.type==='form'?<div className="site-rsvp"><h2>{node.props.heading}</h2><p>{node.props.description}</p><small>Use your personal invitation link to submit an authorized RSVP.</small></div>:null,
 map:({node})=>node.type==='map'?<a className="site-button" href={node.props.url} target="_blank" rel="noopener noreferrer">{node.props.label} ↗</a>:null,
 navigation:({node})=>node.type==='navigation'?<nav aria-label="Website navigation">{node.props.links.map((link,i)=><a key={i} href={link.href}>{link.label}</a>)}</nav>:null,
 shape:({node})=>node.type==='shape'?<div aria-hidden="true" className={'site-shape '+node.props.kind}/>:null,
 social:({node})=>node.type==='social'?<nav aria-label="Social links">{node.props.links.map((link,i)=><a key={i} href={link.href} rel="noopener noreferrer">{link.label}</a>)}</nav>:null,
 cta:({node})=>node.type==='cta'?<div><h2>{node.props.heading}</h2><p>{node.props.text}</p><a className="site-button" href={node.props.href}>{node.props.buttonText}</a></div>:null
};
export function SiteRenderer({document:doc,pageId,interaction,assetToken}:{document:SiteDocument;pageId?:string;interaction?:RenderInteraction;assetToken?:string}){
 const page=doc.pages.find(p=>p.id===pageId)??doc.pages[0];
 function render(node:SiteNode):ReactNode{if(node.hidden)return interaction?<button className="hidden-node" key={node.id} onClick={()=>interaction.onSelect?.(node.id)}>Hidden element · select to show</button>:null;const renderContent=renderers[node.type];if(!renderContent)return <Fragment key={node.id}/>;const Tag=node.type==='section'?'section':'div';return <Tag id={node.id} key={node.id} data-node={node.id} data-node-type={node.type} className={`site-node node-${node.type}${interaction?' selectable':''}${interaction?.selectedId===node.id?' selected':''}`} onClick={interaction?e=>{e.stopPropagation();interaction.onSelect?.(node.id);}:undefined}>{renderContent({node,doc,interaction,assetToken,children:node.children.map(render)})}</Tag>;}
 return <div className="site-document" data-site={doc.pages[0].id} style={{background:doc.theme.background,color:doc.theme.text,'--site-accent':doc.theme.accent,'--site-heading':doc.theme.headingFont==='serif'?'Georgia,serif':'Arial,sans-serif','--site-body':doc.theme.bodyFont==='serif'?'Georgia,serif':'Arial,sans-serif'} as React.CSSProperties}><style>{documentCSS(doc)}</style>{page.nodes.map(render)}</div>;
}
