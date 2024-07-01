var path="M 10 40 Q 700 40 1490 40"
var finalPath="M 10 40 Q 700 40 1490 40"

var string=document.querySelector("#string")

// string.addEventListener("mousemove",function(dets){
//     console.log(dets.y);
// })
string.addEventListener("mousemove",function(dets){
    path=`M 10 40 Q ${dets.x} ${dets.y} 1490 40`;
    // console.log(path);
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.2,
        ease:"power3.out"
    })
})
string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease: "elastic.out(1,0.1)"
    })
})