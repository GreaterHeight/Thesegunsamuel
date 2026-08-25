(function(){
const root="/Thesegunsamuel/";
function filter(i,g,c){const a=document.getElementById(i),grid=document.getElementById(g),out=document.getElementById(c);if(!a||!grid)return;const cards=[...grid.children];const run=()=>{let n=0,q=a.value.trim().toLowerCase();cards.forEach(x=>{let ok=!q||(x.dataset.search||"").includes(q);x.style.display=ok?"flex":"none";if(ok)n++});if(out)out.textContent=n+" RESULT"+(n===1?"":"S")};a.addEventListener("input",run);run()}
filter("framework-search","framework-grid","framework-count");filter("case-search","case-grid","case-count");
async function connect(){const m=document.querySelector("[data-knowledge-connections]");if(!m)return;try{
const [g,fr,cs]=await Promise.all([fetch(root+"explore/data/knowledge-graph.json").then(r=>r.json()),fetch(root+"knowledge/data/framework-registry.json").then(r=>r.json()),fetch(root+"knowledge/data/case-study-registry.json").then(r=>r.json())]);
const path=location.pathname.replace(/\/+$/,""),slug=path.split("/").pop(),title=(document.querySelector("main h1")||{}).textContent?.trim()||"", out=[];
const entity=(g.entities||[]).find(e=>e.route&&e.route.replace(/\/+$/,"").split("/").pop()===slug);
if(entity?.parent_id){const x=g.entities.find(e=>e.id===entity.parent_id);if(x)out.push({type:"PARENT",name:x.name,desc:x.short_definition,route:x.route})}
;(entity?.related_ids||[]).forEach(id=>{const x=g.entities.find(e=>e.id===id);if(x)out.push({type:String(x.type).replace("_"," ").toUpperCase(),name:x.name,desc:x.short_definition,route:x.route})});
if(path.includes("/frameworks/")){const me=fr.find(x=>x.slug===slug);if(me)cs.filter(x=>x.framework.toLowerCase()===me.title.toLowerCase()).forEach(x=>out.push({type:"CASE STUDY",name:x.title,desc:"Case study using "+x.framework+".",route:x.route}))}
if(path.includes("/case-studies/")){const me=cs.find(x=>x.slug===slug),f=fr.find(x=>x.title.toLowerCase()===me?.framework.toLowerCase());if(f)out.push({type:"FRAMEWORK IP",name:f.title,desc:f.description,route:f.route})}
const unique=out.filter((x,i,a)=>a.findIndex(y=>y.name===x.name)===i).slice(0,9);
m.innerHTML=unique.length?'<div class="connection-grid">'+unique.map(x=>'<article class="connection-card"><div class="type">'+esc(x.type)+'</div><h3>'+esc(x.name)+'</h3><p>'+esc(x.desc||"")+'</p>'+(x.route?'<a href="'+x.route+'">OPEN →</a>':"")+'</article>').join("")+"</div>":"<p>No explicit connected entities are currently registered for this item.</p>";
}catch(e){m.innerHTML="<p>Connected knowledge is temporarily unavailable.</p>"}}
function esc(v){return String(v||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
document.readyState==="loading"?document.addEventListener("DOMContentLoaded",connect):connect();
})();