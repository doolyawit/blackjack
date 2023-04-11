//var declare & start the game
let cards = []; // array of all cards -- at start the game no card & sum=0
let sum = 0;
// Craete player object
let player = {
  name: "Noo-Rat",
  chips: 200,
};
// boolean declare (for check)
let hasBlackJack = false;
let isAlive = false;
// for store message
let message = "";

//output space
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");
// show player information
playerEl.textContent = player.name + " : $" + player.chips;

//Function startGame() for  draw 2 cards & call renderGame() [game initial]
function startGame() {
  isAlive = true;
  let first = getRandomCard();
  let second = getRandomCard();
  cards.push(first, second); // insert to array
  sum = first + second; // cal sum
  renderGame();
}

// Function Conditions for check blackjack point
function renderGame() {
  cardsEl.textContent = "Cards: "; // first
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "; // show cards
  }

  sumEl.textContent = "Sum : " + sum; // show sum
  // game rules
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message; // show message
}

//Function to random card & convert card according game's rule
function getRandomCard() {
  let cardRan = Math.floor(Math.random() * 13 + 1); // 13 cards
  if (cardRan === 1) {
    return 10; // A card
  } else if (cardRan > 10) {
    return 10; // J Q K card --> 11,12,13
  } else {
    return cardRan; // other card
  }
}

//Function for draw new card
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    //allow to get new card only alive and not blackjack
    let card = getRandomCard(); // new card
    sum += card; // update value var
    cards.push(card); // add new card to cards array
    renderGame(); // call for show output of sum(update value) & update message
  }
}
