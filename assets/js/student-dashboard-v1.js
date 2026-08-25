(function(){
"use strict";
const ROOT="/Thesegunsamuel/";
const esc=v=>String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
function enrollments(){
  try{return window.SegunSamuelEnrollment&&window.SegunSamuelEnrollment.get?window.SegunSamuelEnrollment.get():[]}catch(e){return[]}
}
async function courseProgress(e){
  const key="ss-learning-state-v1:"+e.courseId;
  let state={completed:[]};
  try{state=JSON.parse(localStorage.getItem(key)||'{"completed":[]}')}catch(_){}
  const completed=Array.isArray(state.completed)?state.completed:[];
  let total=Number(e.totalLessons)||0;
  if(!total){
    try{
      const r=await fetch(ROOT+"learning/data/"+encodeURIComponent(e.courseId)+".json",{cache:"no-store"});
      if(r.ok){const d=await r.json();total=(d.modules||[]).reduce((n,m)=>n+(m.lessons||[]).length,0)}
    }catch(_){}
  }
  const done=completed.length;
  return {...e,completedLessons:done,totalLessons:total,progress:total?Math.round(done/total*100):Number(e.progress)||0};
}
async function init(){
 const root=ROOT;
 let server={enrollments:[],saved:[],certificates:[]};
 try{const r=await fetch(root+"student/data/student-state.json",{cache:"no-store"});if(r.ok)server=await r.json()}catch(_){}
 const map={};
 (server.enrollments||[]).forEach(e=>map[e.courseId]={...e});
 enrollments().forEach(e=>map[e.courseId]={...map[e.courseId],...e});
 const courses=await Promise.all(Object.values(map).map(courseProgress));
 const completed=courses.reduce((n,c)=>n+(Number(c.completedLessons)||0),0);
 const total=courses.reduce((n,c)=>n+(Number(c.totalLessons)||0),0);
 const avg=courses.length?Math.round(courses.reduce((n,c)=>n+(Number(c.progress)||0),0)/courses.length):0;
 const el=id=>document.getElementById(id);
 if(el("course-count"))el("course-count").textContent=courses.length;
 if(el("overall-progress"))el("overall-progress").textContent=avg+"%";
 if(el("lessons-completed"))el("lessons-completed").textContent=completed+" / "+total;
 if(el("certificate-count"))el("certificate-count").textContent=(server.certificates||[]).length;
 if(el("saved-count"))el("saved-count").textContent=(server.saved||[]).length+" saved item"+((server.saved||[]).length===1?"":"s");
 const active=courses.find(c=>c.state==="active"||c.status==="active")||courses[0];
 if(active){
   if(el("continue-course"))el("continue-course").innerHTML='<div class="student-continue"><div><p class="eyebrow">CONTINUE · '+active.progress+'% COMPLETE</p><h3>'+esc(active.title)+'</h3><p>'+(active.lastLesson?esc(active.lastLesson):"Continue your next lesson.")+'</p><a class="student-btn" href="'+root+'learning/?course='+encodeURIComponent(active.courseId)+'">CONTINUE LEARNING →</a></div><div class="student-progress" style="min-width:160px"><span style="width:'+Math.min(100,active.progress)+'%"></span></div></div>';
   if(el("next-move-title"))el("next-move-title").textContent="Continue "+active.title;
   if(el("next-move-copy"))el("next-move-copy").textContent="Your current progress is "+active.progress+"%. Keep building the capability.";
   if(el("next-move-link")){el("next-move-link").href=root+"learning/?course="+encodeURIComponent(active.courseId);el("next-move-link").textContent="CONTINUE LEARNING →"}
 }else if(el("continue-course")){
   el("continue-course").innerHTML='<div class="student-continue"><div><p class="eyebrow">YOUR NEXT STEP</p><h3>Choose a course to begin.</h3><p>Explore the catalogue and build your first learning plan.</p><a class="student-btn" href="'+root+'courses/">BROWSE COURSES →</a></div></div>';
 }
 if(el("courses"))el("courses").innerHTML=courses.length?courses.map(c=>'<article class="student-course"><div><span class="student-course-meta">'+esc(c.state||c.status||"active")+'</span><h3>'+esc(c.title)+'</h3><p>'+esc(c.lastLesson||"Ready to continue learning.")+'</p><div class="student-progress"><span style="width:'+Math.min(100,c.progress)+'%"></span></div><span class="student-progress-label">'+c.progress+'% · '+c.completedLessons+' / '+c.totalLessons+' lessons</span></div><a class="student-btn" href="'+root+'learning/?course='+encodeURIComponent(c.courseId)+'">OPEN</a></article>').join(""):'<article class="student-course"><div><span class="student-course-meta">NO ENROLMENTS</span><h3>Your learning portfolio is empty.</h3><p>Explore the catalogue to choose your next capability.</p></div><a class="student-btn" href="'+root+'courses/">BROWSE</a></article>';
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();