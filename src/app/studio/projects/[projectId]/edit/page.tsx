import {ownedProject} from '@/server/authorization/projects';
import {parseDocument} from '@/features/editor/schema/document';
import {EditorShell} from '@/features/editor/components/EditorShell';
import {notFound} from 'next/navigation';
export default async function Page({params}:{params:Promise<{projectId:string}>}){const {project}=await ownedProject((await params).projectId);if(!project.document)notFound();return <EditorShell key={project.id} projectId={project.id} name={project.name} document={parseDocument(project.document.data)} revision={project.document.revision}/>;}
