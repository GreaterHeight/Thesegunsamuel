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

// Audio fallback: keep the play control present even without an audio asset.
document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-podcast-play]");
  if (!button) return;
  const player = button.closest("[data-podcast-player]");
  if (!player) return;
  const audio = player.querySelector("audio");
  const message = player.querySelector("[data-podcast-player-message]");
  if (!audio || !audio.getAttribute("src")) {
    if (message) {
      message.textContent = "The audio is coming soon";
      message.classList.add("is-visible");
    }
    return;
  }
  if (audio.paused) audio.play().catch(()=>{});
  else audio.pause();
});
document.addEventListener("play", e => {
  const player=e.target.closest?.("[data-podcast-player]");
  const button=player?.querySelector("[data-podcast-play]");
  if(button) button.textContent="Ⅱ";
}, true);
document.addEventListener("pause", e => {
  const player=e.target.closest?.("[data-podcast-player]");
  const button=player?.querySelector("[data-podcast-play]");
  if(button) button.textContent="▶";
}, true);

(function(){
  function resolveImageSlots(){
    document.querySelectorAll('[data-image-slot]').forEach(function(slot){
      var filename=slot.getAttribute('data-image-slot');
      var base=slot.getAttribute('data-image-base') || '/Thesegunsamuel/assets/images/';
      var src=base.replace(/\/?$/,'/')+filename;
      var test=new Image();
      test.onload=function(){
        slot.classList.add('image-slot--real');
        var img=slot.querySelector('[data-image-placeholder-image]');
        if(!img){img=document.createElement('img');img.setAttribute('data-image-placeholder-image','');slot.appendChild(img);}
        img.src=src; img.alt=slot.getAttribute('data-image-alt')||'';
      };
      test.onerror=function(){slot.classList.remove('image-slot--real');};
      test.src=src+(src.indexOf('?')>-1?'&':'?')+'slotcheck=1';
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',resolveImageSlots);
  else resolveImageSlots();
})();
