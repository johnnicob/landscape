import {S3Client,PutObjectCommand,GetObjectCommand,DeleteObjectCommand} from '@aws-sdk/client-s3';
import {mkdir,readFile,writeFile,unlink} from 'node:fs/promises';
import {resolve,dirname,sep} from 'node:path';
import {HttpError} from '@/server/security';
const local=()=>process.env.NODE_ENV!=='production'&&process.env.ASSET_STORAGE==='local';
function localPath(key:string){const root=resolve('.local/assets'),path=resolve(root,key);if(!path.startsWith(root+sep))throw new HttpError(400,'Invalid asset key.');return path;}
function s3(){if(!process.env.S3_BUCKET||!process.env.S3_ACCESS_KEY_ID||!process.env.S3_SECRET_ACCESS_KEY)throw new HttpError(503,'Configure S3-compatible storage before uploading photographs. Local development can use ASSET_STORAGE=local.');return new S3Client({endpoint:process.env.S3_ENDPOINT||undefined,region:process.env.S3_REGION||'auto',forcePathStyle:Boolean(process.env.S3_ENDPOINT),credentials:{accessKeyId:process.env.S3_ACCESS_KEY_ID,secretAccessKey:process.env.S3_SECRET_ACCESS_KEY}});}
export async function putAsset(key:string,body:Uint8Array){if(local()){const path=localPath(key);await mkdir(dirname(path),{recursive:true});await writeFile(path,body);return;}await s3().send(new PutObjectCommand({Bucket:process.env.S3_BUCKET,Key:key,Body:body,ContentType:'image/jpeg'}));}
export async function readAsset(key:string):Promise<Uint8Array>{if(local())return readFile(localPath(key));const object=await s3().send(new GetObjectCommand({Bucket:process.env.S3_BUCKET,Key:key}));const bytes=await object.Body?.transformToByteArray();if(!bytes)throw new HttpError(404,'Photograph not found.');return bytes;}
export async function deleteAsset(key:string){if(local())return unlink(localPath(key));await s3().send(new DeleteObjectCommand({Bucket:process.env.S3_BUCKET,Key:key}));}
