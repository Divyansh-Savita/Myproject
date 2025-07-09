const form=document.querySelector('form')
const actualresult=Math.floor(Math.random()*100+1)
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const input=parseInt(document.querySelector('#inputt').value)
    
    const num=document.querySelector('.num')
    if(actualresult>input){
        num.innerHTML=`<span>your value ${input} is low</span>`
    }
    else if(actualresult<input){
        num.innerHTML=`your value ${input} is high`
    }else{
        num.innerHTML='You won'
    }
})



