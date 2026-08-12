/* v3.3.7 — resilient course testimonial media
   Priority: video > image > branded placeholder.
   Media files can be added later without changing the HTML template.
*/
(function(){
  'use strict';

  function probeImage(url){
    return new Promise(function(resolve,reject){
      if(!url){ reject(new Error('No image URL')); return; }
      var image=new Image();
      image.onload=function(){ resolve(image); };
      image.onerror=function(){ reject(new Error('Image unavailable')); };
      image.src=url;
    });
  }

  function probeVideo(url, poster){
    return new Promise(function(resolve,reject){
      if(!url){ reject(new Error('No video URL')); return; }
      var video=document.createElement('video');
      video.controls=true;
      video.preload='metadata';
      video.playsInline=true;
      if(poster) video.poster=poster;

      var settled=false;
      function success(){
        if(settled)return;
        settled=true;
        cleanup();
        resolve(video);
      }
      function failure(){
        if(settled)return;
        settled=true;
        cleanup();
        reject(new Error('Video unavailable'));
      }
      function cleanup(){
        video.removeEventListener('loadedmetadata',success);
        video.removeEventListener('canplay',success);
        video.removeEventListener('error',failure);
        video.removeEventListener('abort',failure);
      }

      video.addEventListener('loadedmetadata',success,{once:true});
      video.addEventListener('canplay',success,{once:true});
      video.addEventListener('error',failure,{once:true});
      video.addEventListener('abort',failure,{once:true});
      video.src=url;
      video.load();
    });
  }

  function renderImage(frame,image){
    frame.innerHTML='';
    image.alt='Learner testimonial';
    image.loading='lazy';
    frame.appendChild(image);
    frame.classList.remove('is-loading');
    frame.classList.add('has-media','is-image');
  }

  function renderVideo(frame,video){
    frame.innerHTML='';
    frame.appendChild(video);
    frame.classList.remove('is-loading');
    frame.classList.add('has-media','is-video');
  }

  function renderPlaceholder(frame){
    frame.classList.remove('is-loading','has-media','is-image','is-video');
    frame.classList.add('is-placeholder');
  }

  function initFrame(frame){
    var imageURL=frame.getAttribute('data-image-src');
    var videoURL=frame.getAttribute('data-video-src');

    frame.classList.add('is-loading');

    /* Probe the image independently so it can serve as the video poster. */
    var imagePromise=probeImage(imageURL);

    /* Video has priority. If it succeeds, it wins regardless of image availability. */
    probeVideo(videoURL,null).then(function(video){
      return imagePromise.catch(function(){ return null; }).then(function(image){
        if(image) video.poster=image.src;
        renderVideo(frame,video);
      });
    }).catch(function(){
      imagePromise.then(function(image){
        renderImage(frame,image);
      }).catch(function(){
        renderPlaceholder(frame);
      });
    });
  }

  function init(){
    document.querySelectorAll('[data-testimonial-media]').forEach(initFrame);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init,{once:true});
  }else{
    init();
  }
})();
