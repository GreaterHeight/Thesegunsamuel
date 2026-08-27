
/* V105 — Event List modal.
 * Front-end capture only. Delivery/provider integration is intentionally
 * deferred until the site's mail strategy is chosen.
 */
(function(){
  "use strict";
  function init(){
    var modal=document.getElementById("event-registration-modal");
    if(!modal)return;
    var form=document.getElementById("event-registration-form");
    var success=document.getElementById("event-registration-success");
    var status=document.getElementById("event-registration-status");
    var title=document.getElementById("event-registration-title");
    var lastTrigger=null;
    var previousFocus=null;

    function open(trigger){
      lastTrigger=trigger||null; previousFocus=document.activeElement;
      var hero=document.querySelector(".ev-detail-hero");
      var eventTitle=hero && (hero.getAttribute("data-event-title") || (hero.querySelector("h1")||{}).textContent || "Event");
      if(title) title.textContent="Stay informed about this event.";
      var hidden=form && form.elements.event;
      if(hidden) hidden.value=eventTitle.trim();
      modal.classList.add("is-open"); modal.setAttribute("aria-hidden","false");
      document.body.classList.add("ev-modal-open");
      if(form) form.hidden=false;
      if(success) success.hidden=true;
      if(status) status.textContent="";
      setTimeout(function(){var first=form && form.elements.name;if(first)first.focus();},30);
    }
    function close(){
      modal.classList.remove("is-open"); modal.setAttribute("aria-hidden","true");
      document.body.classList.remove("ev-modal-open");
      if(lastTrigger) lastTrigger.focus();
      else if(previousFocus) previousFocus.focus();
    }

    document.querySelectorAll('a[href*="/newsletter/"],a[href="https://thesegunsamuel.substack.com/"]').forEach(function(a){
      if(a.textContent.trim().toUpperCase()==="JOIN EVENT LIST"){
        var b=document.createElement("button");
        b.type="button"; b.className=a.className; b.innerHTML=a.innerHTML || "JOIN EVENT LIST";
        b.setAttribute("data-event-modal-open","");
        a.replaceWith(b);
      }
    });
    document.querySelectorAll('[data-event-modal-open]').forEach(function(b){b.addEventListener("click",function(){open(b);});});
    modal.querySelectorAll("[data-event-modal-close]").forEach(function(b){b.addEventListener("click",close);});
    document.addEventListener("keydown",function(e){if(e.key==="Escape" && modal.classList.contains("is-open"))close();});

    form.addEventListener("submit",function(e){
      e.preventDefault();
      if(!form.checkValidity()){form.reportValidity();return;}
      status.textContent="Thank you. Preparing your event-list registration…";
      // Deliberately do not fake email delivery. Provider integration comes later.
      setTimeout(function(){
        form.hidden=true;
        success.hidden=false;
        var closeBtn=success.querySelector("[data-event-modal-close]");
        if(closeBtn) closeBtn.focus();
      },350);
    });
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});
  else init();
}());
