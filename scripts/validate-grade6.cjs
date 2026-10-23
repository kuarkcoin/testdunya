const ts=require('typescript');
const fs=require('fs');const path=require('path');
require.extensions['.ts']=(mod,file)=>mod._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2017}}).outputText,file);
const ids=new Set(); let total=0,tests=0; const errors=[];
for(const subject of ['matematik','fen','turkce','ingilizce']) {
 const file=path.resolve('app/data/grade6',subject+'.ts');
 if(!fs.existsSync(file)){errors.push('Missing '+file);continue;}
 const data=require(file)[subject+'Data'];
 for(const term of [1,2])for(const [name,qs] of Object.entries(data['term'+term])){
 tests++; if(qs.length!==10)errors.push(`${subject}/${name}: expected10, got${qs.length}`);
 const prompts=new Set();
 for(const q of qs){total++;
 if(ids.has(q.id)) errors.push('Duplicate id '+q.id);ids.add(q.id);
 if(q.subject!==subject||q.term!==term)errors.push('Wrong classification '+q.id);
 if(!q.prompt?.trim()||!q.explanation?.trim())errors.push('Empty text '+q.id);
 if(prompts.has(q.prompt))errors.push('Duplicate prompt '+q.id);prompts.add(q.prompt);
 if(!Array.isArray(q.options)||q.options.length!==4||new Set(q.options.map(x=>x.trim())).size!==4)errors.push('Bad options '+q.id);
 if(!Number.isInteger(q.correct)||q.correct<0||q.correct>3)errors.push('Bad answer '+q.id);
 }
 }
}
console.log(JSON.stringify({tests,total,uniqueIds:ids.size,errors},null,2));process.exitCode=errors.length?1:0;
