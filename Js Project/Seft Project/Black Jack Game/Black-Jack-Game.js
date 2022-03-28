let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
let cardsEl = document.getElementById("cards-el")
let playerName = "Hai Do"
let playerChips = 145

playerEl.textContent = playerName + ": $" + playerChips
// let sumEl = document.querySelector("#sum-el")





function getRandomCard() {
    let randomNumber =  Math.floor(Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}



function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
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
    if (isAlive === true && hasBlackJack === false) {
        console.log("drawing a new card from the desk!")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }


}
