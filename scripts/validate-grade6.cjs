const ts=require('typescript');
const fs=require('fs');const path=require('path');
require.extensions['.ts']=(mod,file)=>mod._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2017}}).outputText,file);
const ids=new Set(); let total=0,tests=0; const errors=[];
let images=0;
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
 if(q.imageUrl){
 images++;
 const publicRoot=path.resolve('public');
 const imageFile=path.resolve(publicRoot,'.'+q.imageUrl);
 if(!q.imageUrl.startsWith('/')||!imageFile.startsWith(publicRoot+path.sep)||!fs.existsSync(imageFile)){
 errors.push('Missing or invalid local image '+q.id);continue;
 }
 if(!q.imageAlt?.trim())errors.push('Missing image description '+q.id);
 if(!Number.isFinite(q.imageWidth)||q.imageWidth<=0||!Number.isFinite(q.imageHeight)||q.imageHeight<=0)errors.push('Invalid image dimensions '+q.id);
 if(path.extname(imageFile)==='.svg'){
 const svg=fs.readFileSync(imageFile,'utf8');
 // Quiz diagrams must be passive, self-contained vector assets.
 const allowedTags=new Set(['svg','title','desc','g','rect','circle','ellipse','line','text','tspan','polygon','polyline','path']);
 for(const [,tag] of svg.matchAll(/<\/?([a-zA-Z][\w:.-]*)\b/g))if(!allowedTags.has(tag))errors.push('Unsafe SVG element '+tag+' in '+q.id);
 if(/<!|<\?|\son[\w-]+\s*=|\s(?:href|[\w-]+:href|style)\s*=|url\s*\(|@import/i.test(svg))errors.push('Active or external SVG content '+q.id);
 if(!svg.includes('<title>')||!svg.includes(`viewBox="0 0 ${q.imageWidth} ${q.imageHeight}"`))errors.push('Missing SVG title or wrong dimensions '+q.id);
 }
 }
 }
 }
}
const registry=require(path.resolve('app/data/grade6/seo.ts'));
const registeredTests=registry.grade6Subjects.flatMap(subject=>registry.getGrade6Tests(subject.id));
if(registeredTests.length!==tests||registeredTests.reduce((sum,test)=>sum+test.questions.length,0)!==total)errors.push('Registry and data counts differ');
console.log(JSON.stringify({tests,total,images,uniqueIds:ids.size,errors},null,2));process.exitCode=errors.length?1:0;
