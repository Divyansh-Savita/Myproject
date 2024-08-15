let count=0
const counter=document.getElementById("counter")
const btns=document.querySelectorAll(".btn")
btns.forEach(function (btn) {
    btn.addEventListener("click",function (e){
        // console.log(e.currentTarget.classList)
        const styless=e.currentTarget.classList;
        if (styless.contains("decrease")) {
            count--
        }
        else if (styless.contains("increase")) {
            count++
        }
        else{
            count=0
        }
        if(count>0){
            counter.style.color="Green"
        }
        if(count<0){
            counter.style.color="red"
        }
        if(count===0){
            counter.style.color="white"
            document.body.style.backgroundColor="black"
        }
        counter.textContent =count;
    })
});

