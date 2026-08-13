let N=[],active="All";
const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
function render(){
  const input=document.querySelector("#graph-search");
  const q=(input?.value||"").toLowerCase().trim();
  const z=N.filter(n=>(active==="All"||n.type===active)&&(!q||((n.title||"")+" "+(n.type||"")+" "+(n.text||"")+" "+(n.tags||[]).join(" ")).toLowerCase().includes(q)));
  const count=document.querySelector("#graph-count"); if(count) count.textContent=`${z.length} nodes`;
  const box=document.querySelector("#graph-results"); if(!box)return;
  box.innerHTML=z.map(n=>`<article class="card course-card"><div><div class="eyebrow">${esc(n.type)}</div><h3>${esc(n.title)}</h3><p>${esc(n.text||"Knowledge node in the SegunSamuel ecosystem.")}</p>${(n.connections||[]).length?`<div class="eyebrow">Connected</div><ul>${n.connections.map(c=>`<li>${esc(c.title)} <small>— ${esc(c.relationship)}</small></li>`).join("")}</ul>`:""}</div>${n.url?`<a class="btn btn-primary" href="../${esc(n.url)}">Open Node</a>`:""}</article>`).join("")||'<div class="card"><h3>No nodes found.</h3><p>Try another search or choose All layers.</p></div>';
}
async function init(){
  try{
    const d=await fetch("../explore/data/knowledge-graph.json",{cache:"no-store"}).then(r=>{if(!r.ok)throw new Error("Graph data unavailable");return r.json()});
    N=Array.isArray(d.nodes)?d.nodes:[];
    const filters=document.querySelector("#layer-filters");
    const types=["All",...new Set(N.map(x=>x.type).filter(Boolean))];
    if(filters){
      filters.innerHTML=types.map(t=>`<button class="btn btn-secondary" data-layer="${esc(t)}" style="margin:4px 0;width:100%">${esc(t)}</button>`).join("");
      filters.onclick=e=>{const b=e.target.closest("[data-layer]");if(!b)return;active=b.dataset.layer;render()};
    }
    const search=document.querySelector("#graph-search"); if(search) search.oninput=render;
    render();
  }catch(e){
    N=[];
    const box=document.querySelector("#graph-results"); if(box) box.innerHTML='<div class="card"><h3>Knowledge Graph unavailable.</h3><p>Please try again shortly.</p></div>';
    const count=document.querySelector("#graph-count"); if(count) count.textContent="0 nodes";
  }
}
document.addEventListener("DOMContentLoaded",init);
