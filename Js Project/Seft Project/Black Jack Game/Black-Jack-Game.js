let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

// let sumEl = document.querySelector("#sum-el")

let cardsEl = document.getElementById("cards-el")

cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;

sumEl.textContent = "Sum: " + sum;

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        messageEl.innerText = message;
    } else if (sum === 21) {
        message = "Wohoo! You got a Blackjack!"
        hasBlackJack = true
        messageEl.innerText = message;
    } else {
        message = "You are out of the game"
        isAlive = false
        messageEl.innerText = message;
    }
}


function newCard() {
 console.log("drawing a new card from the desk!")
    let card = 4;
    sum += card;
    renderGame();
    sumEl.textContent = "Sum: " + sum;
}
// cast out money