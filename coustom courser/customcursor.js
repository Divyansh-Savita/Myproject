var main=document.querySelector("#main")
var cursor=document.querySelector(".cursor")
// cursor.style.backgroundColor="green"
main.addEventListener("mousemove",function(dets){
// console.log(dets.x);
cursor.style.left=dets.x+"px"
cursor.style.top=dets.y+"px"
})