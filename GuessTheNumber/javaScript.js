let  randomNumber = parseInt(Math.random()*100 + 1);

const submit  = document.querySelector("#subt");
const userInput  = document.querySelector("#guessField");
const guessSlot  = document.querySelector(".guesses");
const reamaing  = document.querySelector(".lastResult");
const lowHigh  = document.querySelector(".lowOrHi");
const startOver  = document.querySelector(".resultParas");

const p = document.createElement('p')

let prevGuess = []
let numGuess = 0    

let playGame = true;
if(playGame){
    submit.addEventListener('click',((e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    }))
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter valid number')
    }
    else if(guess < 1){
        alert('Please enter  number grater then 1')
    }
    else if(guess > 100){
        alert('Please enter number less then 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMsg(`Game Over , Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
            
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMsg('You Guessed right')
        endGame()
    }
    else if(guess < randomNumber){
        displayMsg('Number is Tooo low')
    }
    else if(guess > randomNumber){
        displayMsg('Number is Tooo High')
    }
}
function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    reamaing.innerHTML = `${11-numGuess}`
}

function displayMsg(message) {
    lowHigh.innerHTML = `<h2>${message}</h2>`
}
function newGame() {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click',((e)=>{
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        reamaing.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true

    }))
}
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'> Start new Game </h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
    
}