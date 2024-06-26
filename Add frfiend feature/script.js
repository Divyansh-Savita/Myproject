var istatus=document.querySelector("h5")
var addFriend=document.querySelector("#add")
// var removeFriend=document.querySelector("#remove")
var check=0

addFriend.addEventListener("click",function(){
    if(check==0){
    istatus.innerHTML="Friends"
    istatus.style.color="green"
    addFriend.innerHTML="Remove"
    addFriend.style.backgroundColor="#dadada"
    addFriend.style.color="#111"
check=1
}else{
    istatus.innerHTML="Stranger"
    istatus.style="red"
    addFriend.innerHTML="Add Friend"
    check=0
}
})
// removeFriend.addEventListener("click",function(){
//     istatus.innerHTML="Paas aaye duriya fir bhi km na hui"
//     istatus.style="red"
// })