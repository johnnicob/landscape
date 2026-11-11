'use client';
import {createContext,useContext,useEffect,useRef,type ReactNode} from 'react';
import {useStore} from 'zustand';
import type {SiteDocument} from '../schema/document';
import {createEditorStore,type EditorStore,type EditorState} from './store';
const Context=createContext<EditorStore|null>(null);
export function EditorProvider({document,revision,children}:{document:SiteDocument;revision:number;children:ReactNode}){const ref=useRef<EditorStore|null>(null);if(!ref.current)ref.current=createEditorStore(document,revision);return <Context.Provider value={ref.current}>{children}</Context.Provider>;}
export function useEditorApi(){const store=useContext(Context);if(!store)throw Error('EditorProvider is required.');return store;}
export function useEditor<T>(selector:(state:EditorState)=>T){return useStore(useEditorApi(),selector);}
export function useShortcuts(){const store=useEditorApi();useEffect(()=>{const key=(e:KeyboardEvent)=>{if(e.target instanceof Element&&e.target.closest('input,textarea,select,[contenteditable="true"]'))return;if(e.key==='Escape')store.getState().select(null);if((e.ctrlKey||e.metaKey)&&['z','y'].includes(e.key.toLowerCase())){e.preventDefault();const redo=e.shiftKey||e.key.toLowerCase()==='y';store.getState()[redo?'redo':'undo']();}};window.addEventListener('keydown',key);return ()=>window.removeEventListener('keydown',key);},[store]);}
