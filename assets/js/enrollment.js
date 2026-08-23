/* SegunSamuel Enrollment — frontend contract / demo adapter */
(function(){
  "use strict";
  const K="segun_enrollments_v1";
  const get=()=>{try{return JSON.parse(localStorage.getItem(K)||"[]")}catch(e){return[]}};
  const save=x=>localStorage.setItem(K,JSON.stringify(x));
  const normalize=e=>({
    enrollmentId:String(e.enrollmentId||("demo-"+e.courseId+"-"+Date.now())),
    courseId:String(e.courseId||""),
    title:String(e.title||"Course"),
    price:Number(e.price)||0,
    state:String(e.state||"active"),
    enrolledAt:e.enrolledAt||new Date().toISOString(),
    progress:Number(e.progress)||0,
    completedLessons:Number(e.completedLessons)||0,
    totalLessons:Number(e.totalLessons)||0
  });
  function enroll(e){
    const item=normalize(e), all=get().filter(x=>x.courseId!==item.courseId);
    all.push(item); save(all); return item;
  }
  function isEnrolled(courseId){
    return get().some(x=>x.courseId===String(courseId) && ["pending","active","completed"].includes(x.state));
  }
  function getEnrollment(courseId){return get().find(x=>x.courseId===String(courseId))||null;}
  window.SegunSamuelEnrollment={get,save,enroll,isEnrolled,getEnrollment};
})();