(function(){
  const K='ss_cookie_consent_v1';
  const read=()=>{try{return JSON.parse(localStorage.getItem(K)||'null')}catch(e){return null}};
  const save=v=>{try{localStorage.setItem(K,JSON.stringify(v))}catch(e){}};

  function init(){
    const l=document.createElement('div');
    l.className='ss-loader';
    l.id='ss-loader';
    l.setAttribute('role','status');
    l.innerHTML='<div class="ss-loader-inner"><img src="/Thesegunsamuel/assets/images/segunsamuel-logo.png" alt=""></div>';
    document.body.prepend(l);
    addEventListener('load',()=>setTimeout(()=>l.classList.add('is-hidden'),120));

    if(!read()){
      const b=document.createElement('section');
      b.className='ss-cookie-banner';
      b.setAttribute('aria-label','Cookie consent');
      b.innerHTML='<div class="ss-cookie-copy"><div class="ss-cookie-eyebrow">PRIVACY</div><h2>Your cookie choices</h2><p>Segun Samuel uses essential browser storage to operate this website and remember your privacy choice. This static website does not load analytics or advertising cookies by default. Non-essential cookies are optional and will only be activated where you give permission.</p><a class="ss-cookie-policy" href="/Thesegunsamuel/privacy/">READ OUR COOKIE POLICY</a></div><div class="ss-cookie-actions"><button class="ss-cookie-btn primary" data-c="accept">ACCEPT ALL</button><button class="ss-cookie-btn" data-c="reject">REJECT NON-ESSENTIAL</button><button class="ss-cookie-btn" data-c="prefs">MANAGE PREFERENCES</button></div>';
      document.body.appendChild(b);

      b.onclick=e=>{
        const x=e.target.closest('[data-c]');
        if(!x)return;
        if(x.dataset.c==='prefs')return location.href='/Thesegunsamuel/cookie-preferences/';
        save({essential:true,analytics:x.dataset.c==='accept',marketing:x.dataset.c==='accept',updatedAt:new Date().toISOString()});
        b.classList.add('is-closing');
        setTimeout(()=>b.remove(),180);
      };
    }

    const s=document.querySelector('[data-cookie-save]');
    if(s)s.onclick=()=>{
      save({essential:true,analytics:!!document.querySelector('[name=analytics]').checked,marketing:!!document.querySelector('[name=marketing]').checked,updatedAt:new Date().toISOString()});
      const o=document.querySelector('[data-cookie-status]');
      if(o)o.textContent='Your preferences have been saved.';
    };

    const r=document.querySelector('[data-cookie-reset]');
    if(r)r.onclick=()=>{localStorage.removeItem(K);location.reload()};

    const p=read();
    if(p){
      const a=document.querySelector('[name=analytics]'),m=document.querySelector('[name=marketing]');
      if(a)a.checked=!!p.analytics;
      if(m)m.checked=!!p.marketing;
    }
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
