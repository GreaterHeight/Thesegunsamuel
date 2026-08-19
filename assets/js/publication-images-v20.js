
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
