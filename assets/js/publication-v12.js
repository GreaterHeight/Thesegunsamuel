(function(){
"use strict";
function fmt(s){if(!isFinite(s)||s<0)return"0:00";return Math.floor(s/60)+":"+String(Math.floor(s%60)).padStart(2,"0")}
function audio(p){
 var a=p.querySelector("[data-audio-el]"),b=p.querySelector("[data-audio-toggle]"),f=p.querySelector("[data-audio-fill]"),c=p.querySelector("[data-audio-current]"),d=p.querySelector("[data-audio-duration]"),u=p.parentElement.querySelector("[data-audio-unavailable]");
 if(!a||!b)return;
 function icon(paused){b.innerHTML=paused?'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg>':'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z"></path></svg>';b.setAttribute("aria-label",paused?"Play audio narration":"Pause audio narration")}
 function unavailable(){if(u)u.hidden=false;b.disabled=true;icon(true)}
 if(!a.querySelector("source")){unavailable();return}
 a.addEventListener("loadedmetadata",function(){if(d)d.textContent=fmt(a.duration);if(u)u.hidden=true;b.disabled=false})
 a.addEventListener("timeupdate",function(){if(c)c.textContent=fmt(a.currentTime);if(f)f.style.width=(a.duration?a.currentTime/a.duration*100:0)+"%"})
 a.addEventListener("play",function(){icon(false)});a.addEventListener("pause",function(){icon(true)});a.addEventListener("ended",function(){icon(true);if(f)f.style.width="0%"})
 a.addEventListener("error",unavailable)
 b.addEventListener("click",function(){if(b.disabled)return;if(a.paused)a.play().catch(unavailable);else a.pause()})
 icon(true)
}
function share(n,t,u){
 var q=encodeURIComponent(u),x=encodeURIComponent(t),target="";
 if(n==="facebook")target="https://www.facebook.com/sharer/sharer.php?u="+q;
 if(n==="linkedin")target="https://www.linkedin.com/sharing/share-offsite/?url="+q;
 if(n==="x")target="https://twitter.com/intent/tweet?text="+x+"&url="+q;
 if(n==="whatsapp")target="https://wa.me/?text="+x+"%20"+q;
 if(target){window.open(target,"_blank","noopener,noreferrer,width=720,height=620");return}
 if(n==="instagram"||n==="native"){if(navigator.share)navigator.share({title:t,url:u}).catch(function(){});else if(navigator.clipboard)navigator.clipboard.writeText(u);return}
 if(n==="copy"&&navigator.clipboard)navigator.clipboard.writeText(u)
}

function imageSlots(){
 document.querySelectorAll("[data-image-slot]").forEach(function(slot){
  var file=slot.getAttribute("data-image-slot"),base=slot.getAttribute("data-image-base")||"/Thesegunsamuel/assets/images/";
  var img=slot.querySelector("[data-publication-image]");
  if(!img){img=document.createElement("img");img.setAttribute("data-publication-image","");img.alt="";img.setAttribute("aria-hidden","true");slot.appendChild(img)}
  img.onload=function(){slot.classList.add("has-real-image");img.removeAttribute("aria-hidden");img.alt=slot.getAttribute("data-image-alt")||""};
  img.onerror=function(){slot.classList.remove("has-real-image");img.removeAttribute("src")};
  img.src=base.replace(/\/?$/,"/")+file;
}
}

function init(){imageSlots();document.querySelectorAll("[data-audio-player]").forEach(audio);document.addEventListener("click",function(e){var b=e.target.closest("[data-share]");if(!b)return;e.preventDefault();share(b.dataset.share,b.dataset.shareTitle||document.title,location.href)})}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init()
})();