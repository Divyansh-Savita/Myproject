let randomNum=parseInt(Math.floor(Math.random()*100+1))

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guesSLot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHigh=document.querySelector('.lowOrHigh')
const startOver=document.querySelector('.resultparas')

const p=document.createElement('p')
let prevGuess=[]
let numGuess=1

let playGame=true
if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    })
}

function validateGuess(guess){//this is very important
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess<1 && guess>100){
        alert('Please enter a valid number')
    }else{
        prevGuess.push(guess)
        if(numGuess>=10){
            displayGuess(guess)
            displayMessage(`Game OVer number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess==randomNum){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess<randomNum){
        displayMessage(`Number is too low`)
    }else if(guess>randomNum){
        displayMessage(`Number is too high`)
    }
}
function displayGuess(guess){
    userInput.value=''
    guesSLot.innerHTML+=`${guess} `
    numGuess++
    remaining.innerHTML=`${10-numGuess}`
}
function displayMessage(Message){
    lowOrHigh.innerHTML=`<h2>${Message}</h2>`
}
function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    randomNum=parseInt(Math.floor(Math.random()*100+1))
    prevGuess=[]
    numGuess=1
    guesSLot.innerHTML=''
    remaining.innerHTML=`${10-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild()

    playGame=true
})
}
function endGame(){
userInput.value=''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h1 id='newGame'>Start new Game</h1>`
startOver.appendChild(p)
playGame=false
newGame()
}