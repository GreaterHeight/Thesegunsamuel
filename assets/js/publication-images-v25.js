(function(){
"use strict";

function publicationImageUrl(slot){
  var explicit=slot.getAttribute("data-image-src");
  if(explicit) return explicit;

  var file=slot.getAttribute("data-image-slot");
  if(!file){
    var img=slot.querySelector(".ss-real-publication-image,[data-publication-image]");
    if(img) file=(img.getAttribute("src")||"").split("/").pop();
  }
  if(!file) return null;

  var base=slot.getAttribute("data-image-base")||"/Thesegunsamuel/assets/images/";
  return base.replace(/\/?$/,"/")+file;
}

function markPlaceholder(slot){
  slot.classList.remove("has-real-image");
  slot.setAttribute("data-image-loaded","false");
  slot.style.removeProperty("--publication-image");
  slot.style.backgroundImage="";
}

function markReal(slot,url){
  slot.style.setProperty("--publication-image",'url("'+url.replace(/"/g,'\\"')+'")');
  slot.classList.add("has-real-image");
  slot.setAttribute("data-image-loaded","true");
}

function initPublicationImages(){
  var selector=[
    ".ss-publication-placeholder",
    ".ss-feature-placeholder",
    ".blog-related-media",
    ".f8-card-media",
    ".hero-media",
    ".f8-hero-media"
  ].join(",");

  document.querySelectorAll(selector).forEach(function(slot){
    var url=publicationImageUrl(slot);
    if(!url) return;

    // Remove any old visible/probing publication image. From this point on,
    // the DOM contains no image element that can render a broken-image glyph.
    slot.querySelectorAll(".ss-real-publication-image,[data-publication-image]").forEach(function(img){
      img.remove();
    });

    markPlaceholder(slot);

    var probe=new Image();
    probe.onload=function(){
      markReal(slot,url);
      probe.onload=null;
      probe.onerror=null;
    };
    probe.onerror=function(){
      markPlaceholder(slot);
      probe.onload=null;
      probe.onerror=null;
    };
    probe.src=url;
  });
}

if(document.readyState==="loading"){
  document.addEventListener("DOMContentLoaded",initPublicationImages);
}else{
  initPublicationImages();
}
})();