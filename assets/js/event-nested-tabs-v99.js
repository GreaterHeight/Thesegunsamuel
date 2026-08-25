/* V99 — nested Exhibitor / Sponsor / Speaker tabs + exhibit application modal */
(function(){
  function initNestedTabs(){
    document.querySelectorAll('.ev-subtabs').forEach(function(group){
      var buttons=[].slice.call(group.querySelectorAll('[data-subtab]'));
      if(!buttons.length) return;
      var scope=group.parentElement;
      function activate(btn){
        buttons.forEach(function(b){
          var on=b===btn, id=b.getAttribute('data-subtab'), panel=document.getElementById(id);
          b.classList.toggle('active',on); b.setAttribute('aria-selected',on?'true':'false');
          if(panel) panel.hidden=!on;
        });
      }
      buttons.forEach(function(btn){ btn.addEventListener('click',function(){activate(btn);}); });
      activate(buttons[0]);
    });
  }
  function initModal(){
    var modal=document.getElementById('exhibit-application-modal');
    if(!modal) return;
    function open(){modal.hidden=false;document.body.classList.add('ev-modal-open');var first=modal.querySelector('input,select,textarea');if(first) setTimeout(function(){first.focus();},20);}
    function close(){modal.hidden=true;document.body.classList.remove('ev-modal-open');}
    document.querySelectorAll('[data-open-exhibit]').forEach(function(b){b.addEventListener('click',open);});
    modal.querySelectorAll('[data-close-exhibit]').forEach(function(b){b.addEventListener('click',close);});
    modal.addEventListener('click',function(e){if(e.target===modal)close();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!modal.hidden)close();});
    var form=modal.querySelector('form');
    if(form) form.addEventListener('submit',function(e){e.preventDefault();var note=modal.querySelector('.ev-form-note');if(note) note.textContent='Thank you. Your exhibition enquiry has been captured. The event team will follow up with you.';});
  }
  function init(){initNestedTabs();initModal();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
