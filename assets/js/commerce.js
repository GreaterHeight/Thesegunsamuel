/* SegunSamuel Commerce — unified cart / order contract v1 */
(function(){
"use strict";
const CART="segun_cart_v2", LEGACY="segun_cart", LAST="segun_last_order_v1";
const read=(k,f)=>{try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(f))}catch(e){return f}};
const write=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const money=n=>new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0}).format(Number(n)||0);
function get(){
 let c=read(CART,null);
 if(!Array.isArray(c)) c=read(LEGACY,[]);
 return Array.isArray(c)?c.map(normalize):[];
}
function normalize(x){return {id:String(x.id||""),title:String(x.title||x.name||"Course"),price:Number(x.price)||0,type:String(x.type||"course"),qty:Math.max(1,Number(x.qty||x.quantity)||1)}}
function save(c){write(CART,c.map(normalize));localStorage.removeItem(LEGACY);render();return get()}
function add(data){const item=normalize({...data,qty:1});if(!item.id)return get();const c=get(),x=c.find(v=>v.id===item.id);if(x)x.qty++;else c.push(item);return save(c)}
function change(id,d){const c=get(),x=c.find(v=>v.id===String(id));if(!x)return c;x.qty+=d;if(x.qty<1)c.splice(c.indexOf(x),1);return save(c)}
function remove(id){return save(get().filter(x=>x.id!==String(id)))}
function total(c=get()){return c.reduce((n,x)=>n+x.price*x.qty,0)}
function clear(){localStorage.removeItem(CART);localStorage.removeItem(LEGACY);render()}
function createOrder(method){
 const c=get();if(!c.length)return null;
 const order={orderId:"SS-"+Date.now().toString(36).toUpperCase(),status:"payment_pending",paymentStatus:"pending",method:String(method||"unspecified"),items:c,total:total(c),currency:"NGN",createdAt:new Date().toISOString()};
 write(LAST,order);return order;
}
function getLastOrder(){return read(LAST,null)}
function render(){
 document.querySelectorAll("[data-cart-count]").forEach(e=>e.textContent=get().reduce((n,x)=>n+x.qty,0));
 const el=document.querySelector("[data-cart]");if(!el)return;
 const c=get();if(!c.length){el.innerHTML='<div class="empty-cart"><h2>Your cart is empty.</h2><a class="btn btn-primary" href="../courses/">Browse Courses</a></div>';return}
 el.innerHTML=c.map(x=>`<div class="card" style="margin-bottom:12px"><h3>${escapeHtml(x.title)}</h3><p>${money(x.price)}</p><div class="quantity"><button type="button" data-minus="${escapeHtml(x.id)}" aria-label="Decrease quantity">−</button><strong>${x.qty}</strong><button type="button" data-plus="${escapeHtml(x.id)}" aria-label="Increase quantity">+</button></div><p>Subtotal: ${money(x.price*x.qty)}</p><button type="button" class="btn btn-secondary" data-remove="${escapeHtml(x.id)}">Remove</button></div>`).join("")+`<div class="card"><h2>Total: ${money(total(c))}</h2><a class="btn btn-primary" href="../checkout/">Proceed to Checkout</a></div>`;
}
function escapeHtml(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
document.addEventListener("click",e=>{const a=e.target.closest("[data-add-cart],.add-to-cart");if(a){add({id:a.dataset.id,title:a.dataset.title||a.dataset.name,price:a.dataset.price,type:a.dataset.type});return}const p=e.target.closest("[data-plus],[data-cart-plus]");if(p){change(p.dataset.plus||p.dataset.cartPlus,1);return}const m=e.target.closest("[data-minus],[data-cart-minus]");if(m){change(m.dataset.minus||m.dataset.cartMinus,-1);return}const r=e.target.closest("[data-remove]");if(r)remove(r.dataset.remove)});
document.addEventListener("DOMContentLoaded",render);
window.SegunSamuelCart={get,save,add,change,remove,total,clear,createOrder,getLastOrder,money,render};
})();