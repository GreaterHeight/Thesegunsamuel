/* SegunSamuel Course Commerce Compatibility Layer — v1.7.4
   Canonical course IDs/prices. Primary cart engine: commerce.js.
   This file preserves legacy checkout/cart APIs without creating
   a second competing .add-to-cart click handler.
*/
const COURSE_DATA={
  "advanced-data-analytics-power-bi":{id:"advanced-data-analytics-power-bi",name:"Advanced Data Analytics & Power BI",price:450000},
  "pattern-intelligence":{id:"pattern-intelligence",name:"Pattern Intelligence",price:300000},
  "strategic-foresight":{id:"strategic-foresight",name:"Strategic Foresight",price:350000},
  "leadership-intelligence":{id:"leadership-intelligence",name:"Leadership Intelligence",price:325000},
  "systems-strategic-architecture":{id:"systems-strategic-architecture",name:"Systems & Strategic Architecture",price:375000},
  "execution-intelligence":{id:"execution-intelligence",name:"Execution Intelligence",price:275000},
  "institutional-intelligence":{id:"institutional-intelligence",name:"Institutional Intelligence",price:350000},
  "ai-for-strategic-capability":{id:"ai-for-strategic-capability",name:"AI for Strategic Capability",price:250000},
  "thinking-clearly":{id:"thinking-clearly",name:"Thinking Clearly in a Complex World",price:200000}
};

const money=n=>"₦"+Number(n||0).toLocaleString("en-NG");
const getCart=()=>{try{return JSON.parse(localStorage.getItem("segun_cart")||"[]")}catch(e){return[]}};
const saveCart=c=>{localStorage.setItem("segun_cart",JSON.stringify(c));updateCartCount()};
function updateCartCount(){
  const n=getCart().reduce((s,i)=>s+(Number(i.qty)||0),0);
  document.querySelectorAll("[data-cart-count]").forEach(x=>x.textContent=n);
}
function addCourse(id,qty=1){
  const d=COURSE_DATA[id];
  if(!d)return;
  const c=getCart(), x=c.find(i=>i.id===id);
  if(x)x.qty+=Math.max(1,Number(qty)||1);
  else c.push({id:d.id,title:d.name,price:d.price,type:"course",qty:Math.max(1,Number(qty)||1)});
  saveCart(c);
}
function changeCart(id,delta){
  const c=getCart(),x=c.find(i=>i.id===id); if(!x)return;
  x.qty+=delta; if(x.qty<1)c.splice(c.indexOf(x),1); saveCart(c); renderCart();
}
function renderCart(){
  const el=document.querySelector("[data-cart-items]"),sum=document.querySelector("[data-cart-summary]");
  if(!el||!sum)return;
  const c=getCart();
  if(!c.length){
    el.innerHTML='<div class="empty-cart"><h3>Your cart is empty.</h3><p>Choose a course to begin.</p><a class="btn btn-primary" href="../courses/">Explore Courses</a></div>';
    sum.innerHTML=""; return;
  }
  el.innerHTML=c.map(i=>`<div class="cart-item"><div><div class="eyebrow">Course</div><h3>${i.title||i.name}</h3><p class="muted">${money(i.price)} per learner</p></div><div class="qty-control"><button type="button" data-cart-minus="${i.id}" aria-label="Decrease quantity">−</button><input value="${i.qty}" readonly><button type="button" data-cart-plus="${i.id}" aria-label="Increase quantity">+</button></div><strong>${money(i.price*i.qty)}</strong></div>`).join("");
  const total=c.reduce((s,i)=>s+(Number(i.price)||0)*(Number(i.qty)||0),0);
  sum.innerHTML=`<div class="eyebrow">Order Summary</div><h3>Learning Investment</h3><div class="cart-total"><span>Total</span><span>${money(total)}</span></div><a class="btn btn-primary" style="width:100%;margin-top:18px" href="../checkout/">Continue to Checkout</a><p class="enrol-note">Payment routes: Paystack, Stripe, WhatsApp or bank transfer.</p>`;
}
/* Legacy pages only: do not bind .add-to-cart here; commerce.js owns it. */
document.addEventListener("click",e=>{
  const add=e.target.closest("[data-add-course]");
  if(add){e.preventDefault(); addCourse(add.dataset.id,Math.max(1,Number(add.dataset.qty||1))); return;}
  const plus=e.target.closest("[data-cart-plus]"); if(plus){changeCart(plus.dataset.cartPlus,1);return;}
  const minus=e.target.closest("[data-cart-minus]"); if(minus){changeCart(minus.dataset.cartMinus,-1);return;}
});
document.addEventListener("DOMContentLoaded",()=>{updateCartCount();renderCart()});
