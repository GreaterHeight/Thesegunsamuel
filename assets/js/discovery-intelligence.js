(function(){
  const ROOT="/Thesegunsamuel/";
  const DATA=ROOT+"explore/data/knowledge-graph.json";
  const REL=ROOT+"knowledge/data/knowledge-relationships.json";
  const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
  const route=r=>{if(!r)return "";return String(r).startsWith("/")?r:ROOT+String(r).replace(/^\/+/,"")};
  const TYPE_LABEL={
    framework:"Framework",case_study:"Case Study",course:"Course",book:"Book",podcast:"Podcast",
    insight:"Insight",learning_path:"Learning Path",masterclass:"Masterclass",event:"Event",model:"Model",
    concept:"Concept",method:"Method",system:"System",battle:"Battle",stage:"Stage",tool:"Tool",
    service:"Service",application:"Application",diagnostic:"Diagnostic",worldview:"Worldview"
  };
  const EDGE_LABEL={
    part_of:"PART OF",contains:"CONTAINS",related_to:"RELATED TO",source_of:"SOURCE OF",
    connects_to:"CONNECTS TO",teaches:"TAUGHT THROUGH",possible_alias_of:"ALIAS OF",
    delivered_through:"DELIVERED THROUGH",extends:"EXTENDS",demonstrates:"DEMONSTRATES",
    USES_FRAMEWORK:"USES FRAMEWORK"
  };
  const css=`<style id="discovery-intelligence-style">
  .discovery-intelligence{margin:54px 0 12px;padding:30px;border:1px solid rgba(0,48,32,.14);border-radius:18px;background:linear-gradient(145deg,#f7fbf8 0%,#eaf5f1 100%)}
  .discovery-intelligence .di-eyebrow{font:700 9px Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8c0d0c}
  .discovery-intelligence h2{font:clamp(24px,3vw,36px);line-height:1.08;margin:7px 0 8px;color:#003020;font-family:Georgia,serif}
  .discovery-intelligence .di-intro{max-width:760px;color:#486258;font-size:13px;line-height:1.65;margin:0 0 22px}
  .di-current{display:flex;align-items:center;gap:10px;padding:11px 13px;border-radius:9px;background:#fff;border:1px solid rgba(0,48,32,.1);margin-bottom:18px;font-size:11px;color:#355247}
  .di-current strong{color:#003020}
  .di-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
  .di-card{background:#fff;border:1px solid rgba(0,48,32,.1);border-radius:12px;padding:17px;min-height:180px;display:flex;flex-direction:column}
  .di-card .di-type{font:700 8px Arial,sans-serif;letter-spacing:.11em;text-transform:uppercase;color:#8c0d0c}
  .di-card h3{font:600 18px/1.12 Georgia,serif;color:#003020;margin:7px 0 7px}
  .di-card p{font-size:11px;line-height:1.5;color:#53685f;margin:0 0 12px;flex:1}
  .di-edge{font:700 8px Arial,sans-serif;letter-spacing:.07em;text-transform:uppercase;color:#78857f;margin-bottom:9px}
  .di-card a{font:700 9px Arial,sans-serif;letter-spacing:.08em;color:#8c0d0c;text-decoration:none}
  .di-card a:hover{text-decoration:underline}
  .di-footer{margin-top:18px;padding-top:14px;border-top:1px solid rgba(0,48,32,.12);font-size:10px;color:#66776f}
  .di-footer strong{color:#003020}
  @media(max-width:850px){.di-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
  @media(max-width:580px){.discovery-intelligence{padding:22px 16px}.di-grid{grid-template-columns:1fr}}
  </style>`;
  function insert(html){
    if(document.querySelector(".discovery-intelligence"))return;
    document.head.insertAdjacentHTML("beforeend",css);
    const footer=document.querySelector("footer");
    if(footer)footer.insertAdjacentHTML("beforebegin",html);
    else document.querySelector("main")?.insertAdjacentHTML("beforeend",html);
  }
  function pickConnections(current, entities, edges){
    const by=new Map(entities.map(x=>[String(x.id),x]));
    const direct=edges.filter(e=>String(e.source_id)===String(current.id)||String(e.target_id)===String(current.id)).map(e=>{
      const other=String(e.source_id)===String(current.id)?String(e.target_id):String(e.source_id);
      return {edge:e,node:by.get(other)};
    }).filter(x=>x.node);
    // Prefer different knowledge types, then explicit relationship strength.
    const priority={part_of:8,contains:7,teaches:7,USES_FRAMEWORK:7,demonstrates:7,source_of:6,delivered_through:6,connects_to:5,extends:5,related_to:4,possible_alias_of:2};
    direct.sort((a,b)=>(priority[b.edge.type]||1)-(priority[a.edge.type]||1));
    const chosen=[], seenTypes=new Set();
    for(const x of direct){
      const type=x.node.type;
      if(!seenTypes.has(type)){chosen.push(x);seenTypes.add(type)}
      if(chosen.length>=6)break;
    }
    for(const x of direct){
      if(chosen.length>=6)break;
      if(!chosen.some(y=>y.node.id===x.node.id))chosen.push(x);
    }
    // If there are fewer than 6 direct connections, show second-hop registered connections.
    if(chosen.length<6){
      const directIds=new Set(direct.map(x=>String(x.node.id)).concat(String(current.id)));
      const second=[];
      for(const x of direct){
        edges.filter(e=>String(e.source_id)===String(x.node.id)||String(e.target_id)===String(x.node.id)).forEach(e=>{
          const oid=String(e.source_id)===String(x.node.id)?String(e.target_id):String(e.source_id);
          if(!directIds.has(oid)){
            const n=by.get(oid); if(n)second.push({edge:e,node:n,via:x.node});
          }
        });
      }
      for(const x of second){
        if(chosen.length>=6)break;
        if(!chosen.some(y=>y.node.id===x.node.id))chosen.push(x);
      }
    }
    return chosen.slice(0,6);
  }
  async function init(){
    const path=location.pathname.replace(/\/+$/,"");
    const section=path.split("/")[2], slug=path.split("/")[3];
    if(!section||!slug)return;
    const main=document.querySelector("main"); if(!main)return;
    try{
      const [g,r]=await Promise.all([
        fetch(DATA,{cache:"no-store"}).then(x=>x.json()),
        fetch(REL,{cache:"no-store"}).then(x=>x.json())
      ]);
      const entities=g.entities||[], edges=r.relationships||[];
      const current=entities.find(e=>e.route&&e.route.replace(/\/+$/,"").split("/").pop()===slug);
      if(!current)return;
      const picks=pickConnections(current,entities,edges);
      const currentType=TYPE_LABEL[current.type]||String(current.type||"Knowledge").replace(/_/g," ");
      const cards=picks.map(x=>{
        const n=x.node, u=route(n.route), label=EDGE_LABEL[x.edge.type]||String(x.edge.type||"CONNECTED").replace(/_/g," ").toUpperCase();
        const desc=n.short_definition||n.long_definition||"Continue exploring this connected body of knowledge.";
        return `<article class="di-card"><div class="di-edge">${esc(label)}</div><div class="di-type">${esc(TYPE_LABEL[n.type]||n.type)}</div><h3>${esc(n.name)}</h3><p>${esc(desc)}</p>${u?`<a href="${esc(u)}">EXPLORE →</a>`:""}</article>`;
      }).join("");
      const html=`<section class="discovery-intelligence" aria-label="Knowledge Discovery Intelligence">
        <div class="di-eyebrow">Knowledge Discovery Intelligence</div>
        <h2>Where this idea leads.</h2>
        <p class="di-intro">This is not a list of arbitrary recommendations. It follows registered relationships in the Segun Samuel knowledge architecture so that one idea can lead deliberately into the next.</p>
        <div class="di-current"><strong>${esc(current.name)}</strong><span>·</span><span>${esc(currentType)}</span><span>·</span><span>Explore the registered intellectual neighbourhood.</span></div>
        ${picks.length?`<div class="di-grid">${cards}</div>`:`<p class="di-footer"><strong>No registered next step yet.</strong> This asset is canonical, but its surrounding relationship layer has not yet been explicitly mapped.</p>`}
        <div class="di-footer"><strong>Integrity rule:</strong> connections shown here are registered relationships, not keyword-based guesses.</div>
      </section>`;
      insert(html);
    }catch(err){/* Discovery is supplemental; never break the page. */}
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();