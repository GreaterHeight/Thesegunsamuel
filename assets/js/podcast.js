(() => {
  const root=document.querySelector("[data-podcast-library]");
  if(!root)return;
  const url=root.dataset.episodes||"data/episodes.json",grid=root.querySelector("[data-podcast-grid]"),search=root.querySelector("[data-podcast-search]"),filters=root.querySelector("[data-podcast-filters]"),status=root.querySelector("[data-podcast-status]"),pagination=root.querySelector("[data-podcast-pagination]"),empty=root.querySelector("[data-podcast-empty]");
  const pageSize=9; let episodes=[],active="All",page=1;
  const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const filtered=()=>{const q=(search?.value||"").trim().toLowerCase();return episodes.filter(e=>(!q||[e.title,e.description,e.summary,e.connected,e.theme].join(" ").toLowerCase().includes(q))&&(active==="All"||e.theme===active));};
  function filtersUI(){const ts=["All",...new Set(episodes.map(e=>e.theme))];filters.innerHTML=ts.map(t=>`<button type="button" class="podcast-filter" aria-pressed="${t===active}" data-theme="${esc(t)}">${esc(t)}</button>`).join("");filters.querySelectorAll("[data-theme]").forEach(b=>b.onclick=()=>{active=b.dataset.theme;page=1;render();});}
  function card(e){return `<article class="podcast-card"><div class="podcast-card-kicker podcast-theme">${esc(e.theme)}</div><h3>${esc(e.title)}</h3><p>${esc(e.summary||e.description)}</p><div class="podcast-card-actions"><a class="podcast-btn podcast-btn-primary" href="${esc(e.slug)}/">Open Episode</a><span class="podcast-meta">${e.audioUrl?"Audio available":"Episode page"}</span></div></article>`;}
  function pages(n){const count=Math.max(1,Math.ceil(n/pageSize));pagination.innerHTML=Array.from({length:count},(_,i)=>`<button class="podcast-page-btn" type="button" data-page="${i+1}" aria-current="${i+1===page?"page":"false"}">${i+1}</button>`).join("");pagination.hidden=count<=1;pagination.querySelectorAll("[data-page]").forEach(b=>b.onclick=()=>{page=+b.dataset.page;render();document.getElementById("episodes")?.scrollIntoView({behavior:"smooth"});});}
  function render(){const f=filtered(),count=f.length,max=Math.max(1,Math.ceil(count/pageSize));if(page>max)page=max;grid.innerHTML=f.slice((page-1)*pageSize,page*pageSize).map(card).join("");empty.hidden=count!==0;status.textContent=`${count} ${count===1?"episode":"episodes"}${search.value||active!=="All"?" match the current selection":""}`;pages(count);}
  fetch(url).then(r=>r.json()).then(d=>{episodes=Array.isArray(d)?d:[];filtersUI();render();}).catch(()=>{status.textContent="Podcast library unavailable.";empty.hidden=false;});
  search.addEventListener("input",()=>{page=1;render();});
})();
