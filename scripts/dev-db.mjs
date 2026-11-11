import {existsSync,mkdirSync,readFileSync,writeFileSync,unlinkSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {execFileSync} from 'node:child_process';
import {randomBytes} from 'node:crypto';
const root=process.cwd(),local=join(root,'.local'),data=join(local,'postgres'),envPath=join(root,'.env');
const bin=process.env.POSTGRES_BIN||(process.platform==='win32'?'C:/Program Files/PostgreSQL/18/bin':'');
const exe=name=>bin?join(bin,name+(process.platform==='win32'?'.exe':'')):name;
const run=(name,args,options={})=>execFileSync(exe(name),args,{stdio:'inherit',windowsHide:true,...options});
if(!['start','stop'].includes(process.argv[2]))throw Error('Use db:dev or db:stop.');
mkdirSync(local,{recursive:true});
if(process.argv[2]==='stop'){if(existsSync(join(data,'postmaster.pid')))run('pg_ctl',['-D',data,'-m','fast','-w','stop']);process.exit(0);}
let env=existsSync(envPath)?readFileSync(envPath,'utf8'):'';
if(!existsSync(data)||!existsSync(join(data,'PG_VERSION'))){
 if(/DATABASE_URL=.+/m.test(env))throw Error('An existing database URL is configured. Use that database, or remove the URL before creating a separate local database.');
 const password=randomBytes(24).toString('base64url'),pwfile=join(local,'init-password');writeFileSync(pwfile,password,{mode:0o600});
 try{run('initdb',['-D',data,'-U','landscape','--auth=scram-sha-256','--encoding=UTF8','--no-locale','--pwfile='+pwfile]);}finally{unlinkSync(pwfile);}
 env=env.replace(/^DATABASE_URL=.*\r?\n?/m,'').replace(/^NEXTAUTH_SECRET=.*\r?\n?/m,'');
 env+='\nDATABASE_URL=postgresql://landscape:'+password+'@127.0.0.1:55441/postgres\nNEXTAUTH_SECRET='+randomBytes(48).toString('base64url')+'\n';
 if(!/^NEXTAUTH_URL=/m.test(env))env+='NEXTAUTH_URL=http://127.0.0.1:3000\n';
 if(!/^APP_URL=/m.test(env))env+='APP_URL=http://127.0.0.1:3000\n';
 writeFileSync(envPath,env,{mode:0o600});
}
if(!/^ASSET_STORAGE=/m.test(env)){env+='ASSET_STORAGE=local\n';writeFileSync(envPath,env,{mode:0o600});}
if(!existsSync(join(data,'postmaster.pid')))run('pg_ctl',['-D',resolve(data),'-l',join(local,'postgres.log'),'-o','-h 127.0.0.1 -p 55441','-w','start']);
console.log('Landscape local PostgreSQL is ready on loopback port 55441. Credentials stay in ignored .env.');
