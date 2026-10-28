'use strict';
// Native Node checks only. Does not launch or automate a browser.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const {createRequire}=require('node:module');
const root=path.resolve(__dirname,'..');
const req=createRequire(path.join(root,'package.json'));
const ts=req('typescript'),React=req('react'),server=req('react-dom/server');
function loader(pageReact=React){
 const cache=new Map();
 function load(file){
  file=path.resolve(root,file); if(cache.has(file))return cache.get(file).exports;
  let source=fs.readFileSync(file,'utf8');
  if(file.endsWith('/iq-test/page.tsx'))source+='\nexport {Options, Results, Practice, QuestionFigure};';
  const mod={exports:{}};cache.set(file,mod);
  const js=ts.transpileModule(source,{fileName:file,compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;
  function local(request){
   if(request==='react'&&file.endsWith('/iq-test/page.tsx'))return pageReact;
   if(!request.startsWith('.'))return req(request);
   const base=path.resolve(path.dirname(file),request);
   const resolved=[base,base+'.ts',base+'.tsx',base+'.js'].find(p=>fs.existsSync(p)&&fs.statSync(p).isFile());
   return load(resolved);
  }
  new vm.Script('(function(require,module,exports){'+js+'\n})',{filename:file}).runInThisContext()(local,mod,mod.exports);return mod.exports;
 }
 return load;
}
let checks=0;function check(name,run){try{run();checks++;console.log('PASS '+name);}catch(e){e.message=name+': '+e.message;throw e;}}
const load=loader(),bank=load('app/data/questions.ts'),api=load('app/iq-test/attempt.ts'),page=load('app/iq-test/page.tsx');
const initialTime=1793160000000;
const html=server.renderToStaticMarkup(React.createElement(page.default));
check('SSR introduction is Turkish, explains limits, targets adults and does not leak a rendered scored item',()=>{
 assert.match(html,/<main lang="tr"/);assert.match(html,/18 yaş ve üzerindeyim/);assert.match(html,/standardize edilmemiş/);assert.match(html,/işe alım/);
 assert(!html.includes('type="radio"'));assert(!html.includes('<svg'));assert(!html.includes('Soru gezgini'));assert.match(html,/disabled=""[^>]*>Kayıt kontrol ediliyor/);
});
check('Feature page, home card and SEO share the exact user-requested Turkish title',()=>{
 const title='Görsel Mantık ve Akıl Yürütme Testi';assert(html.includes(title));
 const home=fs.readFileSync(path.join(root,'app/HomePageClient.tsx'),'utf8');const featureCard=home.slice(home.indexOf('href="/iq-test"'),home.indexOf('</Link>',home.indexOf('href="/iq-test"')));assert(featureCard.includes(title));
 const seo=fs.readFileSync(path.join(root,'lib/seo-pages.ts'),'utf8');const featureSeo=seo.slice(seo.indexOf("path: '/iq-test'"),seo.indexOf('},',seo.indexOf("path: '/iq-test'")));assert(featureSeo.includes("title: '"+title+"'"));assert(featureSeo.includes("locale: 'tr_TR'"));
});
check('SSR primary controls do not inherit conflicting dark hover or border colors',()=>{
 const primaryTag=[...html.matchAll(/<button\b[^>]*>/g)].map(m=>m[0]).find(tag=>tag.includes('bg-cyan-300'));
 assert(primaryTag);const classes=primaryTag.match(/class="([^"]+)"/)[1].split(/\s+/);assert.deepEqual(classes.filter(c=>c.startsWith('hover:bg-')),['hover:bg-cyan-200']);assert.deepEqual(classes.filter(c=>/^border-(?:cyan|slate)-/.test(c)),['border-cyan-300']);assert(classes.includes('text-slate-950'));
});
check('SSR practice uses four native labelled radio controls and unscored instructions',()=>{
 const h=server.renderToStaticMarkup(React.createElement(page.Practice));assert.equal((h.match(/type="radio"/g)||[]).length,4);assert.equal((h.match(/aria-label="[ABCD] seçeneği:/g)||[]).length,4);assert.match(h,/Puansız, süresiz/);assert.match(h,/<fieldset/);assert.match(h,/<legend/);
});
check('SSR shuffled controls map display letters to original answer values',()=>{
 const q=bank.questions[0],order=[3,1,0,2];const h=server.renderToStaticMarkup(React.createElement(page.Options,{question:q,order,selected:0,name:q.id,onSelect(){}}));
 const values=[...h.matchAll(/<input[^>]*value="(\d)"/g)].map(m=>+m[1]);assert.deepEqual(values,order);assert.equal((h.match(/checked=""/g)||[]).length,1);assert.match(h,/aria-label="A seçeneği:/);
});
check('SSR result has an explained raw 0–100 score, counts, four subtype rows and thirty explanations',()=>{
 let a=api.createAttempt(bank.questions,initialTime,()=>.4);for(let i=0;i<5;i++)a=api.answerAttempt(a,i,bank.questions[i].correct,initialTime+20);for(let i=5;i<12;i++)a=api.answerAttempt(a,i,(bank.questions[i].correct+1)%4,initialTime+20);
 a=api.finishAttempt(a,initialTime+2000);const h=server.renderToStaticMarkup(React.createElement(page.Results,{attempt:a,onRestart(){}}));assert.match(h,/5 \/ 30 doğru/);assert.match(h,/Test puanın/);assert.match(h,/>17<span[^>]*>\/ 100<\/span>/);assert.match(h,/Bu puan IQ değildir; yalnız bu testteki doğru yanıt oranını gösterir/);assert.match(h,/Boş sorular da toplam 30 soruya dahildir/);assert.equal((h.match(/<details/g)||[]).length,30);assert.equal((h.match(/scope="row"/g)||[]).length,4);assert(!h.includes('role="timer"'));assert(!h.includes('type="radio"'));assert.match(h,/Hız bonusu veya ağırlıklı puan yoktur/);
});

// Event-wiring harness: a minimal deterministic hook/host model, NOT a DOM/browser.
// Does not verify real React effect timing/batching, hydration, focus, native keyboard
// behavior, assistive technology output, visual layout or cross-tab race ordering.
function harness(storage=new Map(),startTime=initialTime){
 let time=startTime,slots=[],cursor=0,pending=[],dirty=false,tree,intervals=new Map(),nextId=1;
 const winEvents=new Map(),docEvents=new Map();let throws=false;
 const equal=(a,b)=>a&&b&&a.length===b.length&&a.every((v,i)=>Object.is(v,b[i]));
 const hooks={...React,useState(initial){const i=cursor++;if(!(i in slots))slots[i]=typeof initial==='function'?initial():initial;return[slots[i],next=>{const value=typeof next==='function'?next(slots[i]):next;if(!Object.is(slots[i],value)){slots[i]=value;dirty=true;}}];},useRef(value){const i=cursor++;if(!(i in slots))slots[i]={current:value};return slots[i];},useCallback(fn,deps){const i=cursor++;if(!slots[i]||!equal(slots[i].deps,deps))slots[i]={deps,fn};return slots[i].fn;},useEffect(fn,deps){const i=cursor++;if(!slots[i]||!equal(slots[i].deps,deps)){const old=slots[i];slots[i]={deps,cleanup:old?.cleanup};pending.push(()=>{slots[i].cleanup?.();slots[i].cleanup=fn();});}}};
 const nativeDate=Date.now,previous={window:global.window,document:global.document,localStorage:global.localStorage};
 const hostStorage={getItem:k=>{if(throws)throw Error('blocked');return storage.get(k)??null;},setItem:(k,v)=>{if(throws)throw Error('blocked');storage.set(k,v);},removeItem:k=>{if(throws)throw Error('blocked');storage.delete(k);}};
 global.localStorage=hostStorage;global.window={setInterval:fn=>{let id=nextId++;intervals.set(id,fn);return id;},addEventListener:(k,v)=>winEvents.set(k,v),removeEventListener:k=>winEvents.delete(k)};global.document={addEventListener:(k,v)=>docEvents.set(k,v),removeEventListener:k=>docEvents.delete(k)};
 const nativeClear=global.clearInterval;global.clearInterval=id=>intervals.delete(id);Date.now=()=>time;
 const component=loader(hooks)('app/iq-test/page.tsx').default;
 function render(){let max=20;do{dirty=false;cursor=0;pending=[];tree=component();pending.forEach(fn=>fn());assert(--max>0,'render did not stabilize');}while(dirty);return tree;}
 function all(node){if(node==null||typeof node==='boolean')return[];if(Array.isArray(node))return node.flatMap(all);if(typeof node!=='object')return[];return[node,...all(node.props?.children)];}
 function text(node){if(node==null||typeof node==='boolean')return'';if(Array.isArray(node))return node.map(text).join('');if(typeof node!=='object')return String(node);return text(node.props?.children);}
 function find(predicate){const n=all(tree).find(predicate);assert(n,'element not found');return n;}
 function click(label){find(n=>n.type==='button'&&text(n).includes(label)).props.onClick();render();}
 function dispose(){slots.forEach(s=>{if(s?.cleanup)s.cleanup();});Date.now=nativeDate;global.clearInterval=nativeClear;for(const[k,v]of Object.entries(previous)){if(v===undefined)delete global[k];else global[k]=v;}}
 return{render,all,find,text,click,storage,dispose,setTime:t=>{time=t;},setStorageError:v=>{throws=v;},getTime:()=>time,tick(){[...intervals.values()].forEach(f=>f());render();},event(type,event={}){(winEvents.get(type)||docEvents.get(type))?.(event);render();},start(){find(n=>n.type==='input'&&n.props.type==='checkbox').props.onChange({target:{checked:true}});render();click('Denemeyi başlat');},getAttempt:()=>JSON.parse(storage.get(api.STORAGE_KEY))};
}
check('Native event wiring: explicit start, answer mapping, navigation, stable reload and nonzero event-time display',()=>{
 const h=harness();try{h.render();assert.equal(h.storage.size,0);h.start();const a=h.getAttempt();assert.equal(a.startedAt,initialTime);h.setTime(initialTime+1234);const opts=h.find(n=>n.type?.name==='Options');opts.props.onSelect(opts.props.order[2]);h.render();assert.equal(h.getAttempt().answers[0],opts.props.order[2]);const timer=h.find(n=>n.props?.role==='timer');assert.notEqual(h.text(timer),'00:00');h.click('Sonraki');assert.equal(h.getAttempt().currentIndex,1);assert.notEqual(h.text(h.find(n=>n.props?.role==='timer')),'00:00');}finally{h.dispose();}
 const resumed=harness(h.storage,initialTime+60_000);try{resumed.render();assert.equal(resumed.getAttempt().currentIndex,1);assert.equal(resumed.getAttempt().startedAt,initialTime);assert.equal(resumed.getAttempt().deadline,initialTime+api.DURATION_MS);assert.equal(resumed.text(resumed.find(n=>n.props?.role==='timer')),'29:00');}finally{resumed.dispose();}
});
check('Native event wiring: delayed expiry and early-finish confirmation do not accept late answers',()=>{
 const h=harness();try{h.render();h.start();h.click('Denemeyi bitir');assert(h.find(n=>n.type==='button'&&h.text(n).includes('Çözmeye devam et')));h.setTime(initialTime+api.DURATION_MS+1);const opts=h.find(n=>n.type?.name==='Options');opts.props.onSelect(0);h.render();assert.equal(h.getAttempt().endReason,'expired');assert.equal(h.getAttempt().answers[0],null);assert(h.find(n=>n.type?.name==='Results'));}finally{h.dispose();}
});
check('Native event wiring: refresh after deadline and malformed-save recovery',()=>{
 const a=api.createAttempt(bank.questions,initialTime,()=>.3);const stored=new Map([[api.STORAGE_KEY,JSON.stringify(a)]]);const h=harness(stored,initialTime+api.DURATION_MS+500);try{h.render();assert.equal(h.getAttempt().endReason,'expired');assert(h.find(n=>n.type?.name==='Results'));}finally{h.dispose();}
 const broken=harness(new Map([[api.STORAGE_KEY,'{broken']]));try{broken.render();assert.equal(broken.storage.size,0);assert.match(broken.text(broken.find(n=>n.props?.role==='status')),/Yeni bir deneme/);}finally{broken.dispose();}
});
check('Native event wiring: storage-denied path warns and still permits an in-memory attempt',()=>{
 const h=harness();try{h.setStorageError(true);h.render();assert(h.find(n=>n.props?.role==='alert'));h.start();assert(h.find(n=>n.type?.name==='Options'));assert.equal(h.storage.size,0);}finally{h.dispose();}
});
check('Native event wiring: ordinary other-tab clock writes do not dismiss finish confirmation',()=>{
 const h=harness();try{h.render();h.start();h.click('Denemeyi bitir');h.setTime(initialTime+4000);const updated=api.tickAttempt(h.getAttempt(),initialTime+4000);h.event('storage',{key:api.STORAGE_KEY,newValue:JSON.stringify(updated)});assert(h.find(n=>n.type==='button'&&h.text(n).includes('Çözmeye devam et')));assert.equal(h.text(h.find(n=>n.props?.role==='timer')),'29:56');}finally{h.dispose();}
});
check('Native event wiring: repeated start is idempotent; clear, back and cancelled finish preserve the deadline',()=>{
 const h=harness();try{h.render();h.find(n=>n.type==='input'&&n.props.type==='checkbox').props.onChange({target:{checked:true}});h.render();const start=h.find(n=>n.type==='button'&&h.text(n).includes('Denemeyi başlat')).props.onClick;start();const first=h.getAttempt();h.setTime(initialTime+50);start();h.render();assert.deepEqual(h.getAttempt(),first);h.find(n=>n.type?.name==='Options').props.onSelect(2);h.render();h.click('Yanıtı temizle');assert.equal(h.getAttempt().answers[0],null);h.click('Sonraki');h.click('Önceki');assert.equal(h.getAttempt().currentIndex,0);h.click('Denemeyi bitir');h.click('Çözmeye devam et');assert.equal(h.getAttempt().endedAt,null);assert.equal(h.getAttempt().deadline,initialTime+api.DURATION_MS);assert.deepEqual(h.getAttempt().optionOrders,first.optionOrders);}finally{h.dispose();}
});
check('Native event wiring: hidden-tab expiry and clock rollback terminate before editing',()=>{
 const h=harness();try{h.render();h.start();h.setTime(initialTime+api.DURATION_MS+10);h.event('visibilitychange');assert.equal(h.getAttempt().endReason,'expired');}finally{h.dispose();}
 const rolled=harness();try{rolled.render();rolled.start();rolled.setTime(initialTime+1000);rolled.tick();rolled.setTime(initialTime+900);rolled.event('focus');assert.equal(rolled.getAttempt().endReason,'clock-changed');assert(rolled.find(n=>n.type?.name==='Results'));}finally{rolled.dispose();}
});
check('Native event wiring: finish locks the saved result and reset clears only the attempt record',()=>{
 const h=harness(new Map([['unrelated-key','retain-me']]));try{h.render();h.start();h.setTime(initialTime+7000);h.click('Denemeyi bitir');h.click('Evet, bitir');assert.equal(h.getAttempt().endReason,'submitted');const result=h.find(n=>n.type?.name==='Results');result.props.onRestart();h.render();assert.equal(h.storage.has(api.STORAGE_KEY),false);assert.equal(h.storage.get('unrelated-key'),'retain-me');assert.equal(h.find(n=>n.type==='input'&&n.props.type==='checkbox').props.checked,false);}finally{h.dispose();}
});
check('Native event wiring: failed reset never falsely promises the stored record was deleted',()=>{
 const h=harness();try{h.render();h.start();h.click('Denemeyi bitir');h.click('Evet, bitir');const before=h.storage.get(api.STORAGE_KEY);h.setStorageError(true);h.find(n=>n.type?.name==='Results').props.onRestart();h.render();assert.equal(h.storage.get(api.STORAGE_KEY),before);const notice=h.text(h.find(n=>n.props?.role==='status'));assert(!notice.includes('kaydı bu tarayıcıdan silindi'));assert.match(notice,/silin|silme/);assert(h.find(n=>n.props?.role==='alert'));}finally{h.dispose();}
});
console.log(JSON.stringify({checks,kind:'Native SSR plus mocked hook/host event integration; no browser coverage'},null,2));
