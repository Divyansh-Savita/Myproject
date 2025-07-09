const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")
buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{//e sirf naam h kuch bhi naam dia ja skta h  e for event 
        console.log(e)//yha event dia h
        console.log(e.target)//target me span dia h    kis target se ye element aaya h
        if(e.target.id=="grey"){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id=="white"){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id=="blue"){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id=="yellow"){
            body.style.backgroundColor=e.target.id
        }
    })
})
// there are losts and lost of events in broswer like hover,mouseevent u can take it in function and do any task on it