
(function(){
  "use strict";
  function confirmImage(img){
    var slot=img.closest(".ss-publication-placeholder,.ss-feature-placeholder");
    if(!slot)return;
    slot.classList.add("has-real-image");
    slot.setAttribute("data-image-loaded","true");
    img.removeAttribute("aria-hidden");
  }
  function rejectImage(img){
    var slot=img.closest(".ss-publication-placeholder,.ss-feature-placeholder");
    if(!slot)return;
    slot.classList.remove("has-real-image");
    slot.setAttribute("data-image-loaded","false");
    img.setAttribute("aria-hidden","true");
    img.removeAttribute("src");
  }
  function init(){
    document.querySelectorAll(".ss-real-publication-image").forEach(function(img){
      img.addEventListener("load",function(){confirmImage(img)},{once:true});
      img.addEventListener("error",function(){rejectImage(img)},{once:true});
      if(img.complete){
        if(img.naturalWidth>0)confirmImage(img);
        else rejectImage(img);
      }
    });
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();

(function(){
 function initRelatedPublicationImages(){
   document.querySelectorAll("[data-image-slot]").forEach(function(slot){
     var file=slot.getAttribute("data-image-slot");
     var base=slot.getAttribute("data-image-base")||"/Thesegunsamuel/assets/images/";
     if(!file)return;
     var src=base.replace(/\/?$/,"/")+file;
     var img=slot.querySelector("[data-publication-image]");
     if(!img){
       img=document.createElement("img");
       img.setAttribute("data-publication-image","");
       img.alt="";
       img.setAttribute("aria-hidden","true");
       slot.appendChild(img);
     }
     img.onload=function(){slot.classList.add("has-real-image");img.removeAttribute("aria-hidden")};
     img.onerror=function(){slot.classList.remove("has-real-image");img.removeAttribute("src")};
     img.src=src;
   });
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initRelatedPublicationImages);
 else initRelatedPublicationImages();
})();
