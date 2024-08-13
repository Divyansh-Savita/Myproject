const colors=['green','red','blue','rbga(133,122,200)','#f15025']
let btn=document.getElementById("btn")
let textt=document.getElementById("text")
btn.addEventListener("click",()=>{
    let random=getRandomNumber()
    document.body.style.backgroundColor=colors[random]
    textt.textContent=colors[random]
    
})
function getRandomNumber() {
    return Math.floor(Math.random()*colors.length)
}