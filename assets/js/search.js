
(function(){
  const box=document.querySelector('#global-search');
  const results=document.querySelector('#search-results');
  const count=document.querySelector('#search-count');
  const filters=document.querySelectorAll('[data-filter]');
  let index=[], active='All';
  fetch('/Thesegunsamuel/assets/knowledge-index.json').then(r=>r.json()).then(d=>{index=d; render('');}).catch(()=>{});
  function render(q){
    const query=q.toLowerCase().trim();
    let arr=index.filter(x=>active==='All'||x.type===active);
    if(query) arr=arr.filter(x=>(x.title+' '+x.type+' '+x.text).toLowerCase().includes(query));
    count.textContent=arr.length+' result'+(arr.length===1?'':'s');
    results.innerHTML=arr.slice(0,60).map(x=>`<article class="card search-card"><div><div class="eyebrow">${esc(x.type)}</div><h3>${esc(x.title)}</h3><p>${esc(x.text.slice(0,240))}…</p></div><div class="course-actions"><a class="btn btn-primary" href="/Thesegunsamuel/${x.url}">Explore</a></div></article>`).join('') || '<div class="card"><h3>No results found.</h3><p>Try a broader term or choose another content type.</p></div>';
  }
  box&&box.addEventListener('input',e=>render(e.target.value));
  filters.forEach(b=>b.addEventListener('click',()=>{active=b.dataset.filter;filters.forEach(x=>x.classList.remove('active'));b.classList.add('active');render(box.value)}));
  function esc(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
})();
