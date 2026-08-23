
/*
 SegunSamuel v3.3.1 — deterministic course catalogue engine
 Fixes the v3.3 defect where the result count changed but the cards remained visible.
 The key correction is explicit display control plus the [hidden] CSS rule.
*/
(function(){
  "use strict";

  function init(){
    var grid=document.getElementById("course-grid");
    var search=document.getElementById("course-search");
    var count=document.getElementById("course-count");
    var clear=document.getElementById("course-clear");
    var buttons=[].slice.call(document.querySelectorAll(".course-filter-v331"));
    if(!grid||!search||!count||!buttons.length)return;

    var cards=[].slice.call(grid.querySelectorAll(".course-card-v331"));
    var active="all";

    function norm(v){
      return String(v||"")
        .replace(/&amp;/g,"&")
        .replace(/\s+/g," ")
        .trim()
        .toLowerCase();
    }

    function apply(){
      var term=norm(search.value);
      var shown=0;

      cards.forEach(function(card){
        var cats=norm(card.getAttribute("data-categories")||"")
          .split("|")
          .map(function(v){return v.trim()});
        var searchable=norm(card.getAttribute("data-search")||card.textContent);
        var categoryMatch=(active==="all")||cats.indexOf(norm(active))!==-1;
        var searchMatch=!term||searchable.indexOf(term)!==-1;
        var visible=categoryMatch&&searchMatch;

        /* Explicit inline display is intentional: it overrides legacy display:flex rules. */
        card.hidden=!visible;
        card.style.display=visible?"":"none";
        card.setAttribute("aria-hidden",visible?"false":"true");

        if(visible)shown++;
      });

      count.textContent=shown+" "+(shown===1?"COURSE":"COURSES");
      clear.hidden=!term;

      buttons.forEach(function(btn){
        var selected=norm(btn.getAttribute("data-filter"))===norm(active);
        btn.classList.toggle("active",selected);
        btn.setAttribute("aria-pressed",selected?"true":"false");
      });

      var empty=document.getElementById("course-no-results");
      if(empty){
        empty.hidden=shown!==0;
      }
    }

    search.addEventListener("input",apply);

    clear.addEventListener("click",function(){
      search.value="";
      apply();
      search.focus();
    });

    buttons.forEach(function(btn){
      btn.addEventListener("click",function(){
        active=btn.getAttribute("data-filter")||"all";
        apply();
      });
    });

    /* Share fallback for the existing course-share buttons if the global helper is unavailable. */
    grid.addEventListener("click",function(e){
      var b=e.target.closest("[data-share]");
      if(!b)return;
      var title=b.getAttribute("data-title")||"Segun Samuel Course";
      var url=window.location.href;
      var network=b.getAttribute("data-share");
      var target="";
      if(network==="facebook")target="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(url);
      if(network==="x")target="https://twitter.com/intent/tweet?text="+encodeURIComponent(title)+"&url="+encodeURIComponent(url);
      if(network==="threads")target="https://www.threads.net/intent/post?text="+encodeURIComponent(title+" "+url);
      if(network==="instagram"){
        if(navigator.clipboard) navigator.clipboard.writeText(url);
        b.setAttribute("title","Course link copied — paste it into Instagram");
        return;
      }
      if(target)window.open(target,"_blank","noopener,noreferrer");
    });

    apply();
  }

  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
  else init();
})();
