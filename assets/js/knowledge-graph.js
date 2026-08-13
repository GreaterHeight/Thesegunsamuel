let N=[],active="All";
const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
function normaliseGraph(d){
  if(Array.isArray(d.nodes)) return d.nodes;
  const entities=Array.isArray(d.entities)?d.entities:[];
  const rels=Array.isArray(d.relationships)?d.relationships:[];
  const byId=new Map(entities.map(e=>[String(e.id),e]));
  return entities.map(e=>({id:e.id,title:e.name,type:e.type,text:e.short_definition||e.long_definition||"",tags:e.tags||[],url:e.route||null,connections:rels.filter(r=>String(r.source_id)===String(e.id)).map(r=>({title:(byId.get(String(r.target_id))||{}).name||String(r.target_id),relationship:r.type}))}));
}
function safeHref(route){
  const v=String(route||"").trim();
  if(!v)return "";
  if(/^https?:\/\//i.test(v))return v;
  if(v.startsWith("/Thesegunsamuel/"))return v;
  if(v.startsWith("/"))return "/Thesegunsamuel"+v;
  return "/Thesegunsamuel/"+v.replace(/^\/+/,"");
}
function render(){
  const input=document.querySelector("#graph-search"),q=(input?.value||"").toLowerCase().trim();
  const z=N.filter(n=>(active==="All"||n.type===active)&&(!q||[n.title,n.type,n.text].concat(n.tags||[]).join(" ").toLowerCase().includes(q)));
  const count=document.querySelector("#graph-count");if(count)count.textContent=`${z.length} nodes`;
  const box=document.querySelector("#graph-results");if(!box)return;
  box.innerHTML=z.map(n=>`<article class="card course-card"><div><div class="eyebrow">${esc(n.type)}</div><h3>${esc(n.title)}</h3><p>${esc(n.text||"Knowledge node in the SegunSamuel ecosystem.")}</p></div>${safeHref(n.url)?`<a class="btn btn-primary" href="${esc(safeHref(n.url))}">Open Node</a>`:`<button class="btn btn-secondary graph-node-connections" type="button" data-node-id="${esc(n.id)}">View Connections</button>`}</article>`).join("")||'<div class="card"><h3>No nodes found.</h3><p>Try another search or choose All layers.</p></div>';
  box.querySelectorAll(".graph-node-connections").forEach(btn=>btn.onclick=()=>{const node=z.find(n=>String(n.id)===String(btn.dataset.nodeId));if(!node)return;const existing=btn.parentElement.querySelector(".graph-connections");if(existing){existing.remove();return;}const wrap=document.createElement("div");wrap.className="graph-connections";const c=node.connections||[];wrap.innerHTML=c.length?`<div class="eyebrow">Connected</div><ul>${c.map(x=>`<li>${esc(x.title)} <small>— ${esc(x.relationship)}</small></li>`).join("")}</ul>`:"<p>No confirmed outward relationships are currently recorded for this node.</p>";btn.parentElement.appendChild(wrap);});
}
async function init(){
  try{
    const r=await fetch("/Thesegunsamuel/explore/data/knowledge-graph.json",{cache:"no-store"});if(!r.ok)throw new Error("Graph data unavailable");N=normaliseGraph(await r.json());
    const filters=document.querySelector("#layer-filters"),types=["All",...new Set(N.map(x=>x.type).filter(Boolean))];
    if(filters){filters.innerHTML=types.map(t=>`<button class="btn btn-secondary" data-layer="${esc(t)}" style="margin:4px 0;width:100%">${esc(t)}</button>`).join("");filters.onclick=e=>{const b=e.target.closest("[data-layer]");if(!b)return;active=b.dataset.layer;render();};}
    const search=document.querySelector("#graph-search");if(search)search.oninput=render;render();
  }catch(e){N=[];const box=document.querySelector("#graph-results");if(box)box.innerHTML='<div class="card"><h3>Knowledge Graph unavailable.</h3><p>The graph data could not be loaded.</p></div>';const count=document.querySelector("#graph-count");if(count)count.textContent="0 nodes";}
}
document.addEventListener("DOMContentLoaded",init);
