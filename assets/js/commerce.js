/* SegunSamuel Commerce — single cart store */
(function(){
  "use strict";
  const K="segun_cart";
  const get=()=>{try{return JSON.parse(localStorage.getItem(K)||"[]")}catch(e){return[]}};
  const save=c=>{localStorage.setItem(K,JSON.stringify(c));render()};
  const money=n=>new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0}).format(Number(n)||0);
  function normalizeItem(data){
    return {
      id:String(data.id||""),
      title:String(data.title||data.name||"Course"),
      price:Number(data.price)||0,
      type:String(data.type||"course"),
      qty:Math.max(1,Number(data.qty)||1)
    };
  }
  function render(){
    const cart=get();
    document.querySelectorAll("[data-cart-count]").forEach(e=>e.textContent=cart.reduce((n,x)=>n+(Number(x.qty)||0),0));
    const el=document.querySelector("[data-cart]");
    if(!el)return;
    const total=cart.reduce((n,x)=>n+(Number(x.price)||0)*(Number(x.qty)||0),0);
    if(!cart.length){
      el.innerHTML='<div class="empty-cart"><h2>Your cart is empty.</h2><a class="btn btn-primary" href="../courses/">Browse Courses</a></div>';
      return;
    }
    el.innerHTML=cart.map(x=>`<div class="card" style="margin-bottom:12px"><h3>${x.title}</h3><p>${money(x.price)}</p><div class="quantity"><button type="button" data-minus="${x.id}" aria-label="Decrease quantity">−</button><strong>${x.qty}</strong><button type="button" data-plus="${x.id}" aria-label="Increase quantity">+</button></div><p>Subtotal: ${money(x.price*x.qty)}</p><button type="button" class="btn btn-secondary" data-remove="${x.id}">Remove</button></div>`).join("")+`<div class="card"><h2>Total: ${money(total)}</h2><a class="btn btn-primary" href="../checkout/">Proceed to Checkout</a></div>`;
  }
  function add(data){
    const item=normalizeItem(data);
    if(!item.id)return;
    const cart=get();
    const existing=cart.find(x=>x.id===item.id);
    if(existing)existing.qty+=1; else cart.push(item);
    save(cart);
  }
  function change(id,d){
    const cart=get(),x=cart.find(x=>x.id===id); if(!x)return;
    x.qty+=d;
    if(x.qty<1)cart.splice(cart.indexOf(x),1);
    save(cart);
  }
  document.addEventListener("click",e=>{
    const addBtn=e.target.closest("[data-add-cart], .add-to-cart");
    if(addBtn){
      add({id:addBtn.dataset.id,title:addBtn.dataset.title||addBtn.dataset.name,price:addBtn.dataset.price,type:addBtn.dataset.type});
      return;
    }
    const plus=e.target.closest("[data-plus], [data-cart-plus]"); if(plus){change(plus.dataset.plus||plus.dataset.cartPlus,1);return;}
    const minus=e.target.closest("[data-minus], [data-cart-minus]"); if(minus){change(minus.dataset.minus||minus.dataset.cartMinus,-1);return;}
    const remove=e.target.closest("[data-remove]"); if(remove){save(get().filter(x=>x.id!==remove.dataset.remove));}
  });
  document.addEventListener("DOMContentLoaded",render);
  window.SegunSamuelCart={get,add,render};
})();
