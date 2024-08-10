let rightArrow=document.getElementById("rightarrow")
let leftArrow=document.getElementById("leftarrow")
let firstAppleCount=document.getElementById("firstapplecount")
let secondField=document.getElementById("2ndfield")
const apples=10
let secondBasket=0
let firstBasket=apples-secondBasket

rightArrow.addEventListener("click",()=>{
    if(firstBasket>0){//yah pr js mein vnaya hua variable aaega n ki html ki id
    firstBasket--;
    secondBasket++;
    firstAppleCount.innerText=firstBasket;
    
    secondField.innerText=secondBasket;
    }
})
leftArrow.addEventListener("click",()=>{
    if(secondBasket>0){
    firstBasket++;
    secondBasket--;
    firstAppleCount.innerText=firstBasket;
    
    secondField.innerText=secondBasket;
    }
})