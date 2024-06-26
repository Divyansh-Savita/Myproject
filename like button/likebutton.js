// var container=document.querySelector("#container")
// var love=document.querySelector("i")
// let flag=0
// container.addEventListener("dblclick",function(){
//     if(flag==0){
//     love.style.transform='translate(-50%,-50%) scale(1)';
// flag=1
//     }else{
//         love.style.transform='translate(-50%,-50%) scale(0)';
// flag=0
//     }
// })
var container=document.querySelector("#container")
var love=document.querySelector("i")
container.addEventListener("dblclick",function(){
    love.style.transform='translate(-50%,-50%) scale(1)';
    love.style.opacity=0.8
    setTimeout(function(){
        love.style.opacity=0;
    },1000)
    setTimeout(function(){
        love.style.transform='translate(-50%,-50%) scale(0)';
    },2000)



})