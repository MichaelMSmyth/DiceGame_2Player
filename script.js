const startAgain = document.getElementById('startAgain');
const mainbox = document.getElementsByClassName('mainbox');
const currentPlayer = document.getElementsByClassName('currentPlayer');
const playerScore = document.getElementsByClassName('playerScore');
const dice = document.getElementsByClassName('dice');
const rollButton = document.getElementById('rollButton');

// Store player scores and set to 0

let player1Score = 0;
let player2Score = 0;
let currentRoll = 0;

// Function to reset the game

const gameReset = () => {
    player1Score = 0;
    player2Score = 0;
    currentRoll = 0;

    // Hide start again button until game end

    startAgain.style.visibility = "hidden";

    // Hide dice image until 1st roll of new game

    dice[0].style.visibility = "hidden";

    // Show roll button

    rollButton.style.visibility = "visible";

    // Set the game start text values

    currentPlayer[0].textContent = "Player 1"
    playerScore[0].textContent = 0;
}

// Function to reveal start again button

const startAgainReveal = () => {
    startAgain.style.visibility = "visible";
}

// Function to hide the roll button at the end of the game

const rollButtonHide = () => {
    rollButton.style.visibility = "hidden";
}

// Function to lose the game and offer reset

const youLose = () => {
    currentPlayer[0].textContent = "You lose!";
    player1Score = 0;
    rollButtonHide();
    startAgainReveal();
}

// Function to win the game and offer reset

const youWin = () => {
    currentPlayer[0].textContent = "You win!";
    rollButtonHide();
    startAgainReveal();
}

// When mouse button is pressed roll a random number between and inclusive of 1 - 6 and store as player score

const rollDice = () => {

    currentRoll = (Math.floor(Math.random() * 6) + 1);
    player1Score += currentRoll;
    playerScore[0].textContent = player1Score;

    // Display rolled number as dice image
    dice[0].src = `Images/dice-six-faces-${currentRoll}.svg`;

    if(dice[0].style.visibility != "visible"){
        dice[0].style.visibility = "visible";
    }

    // Check if player roll is 1 and display you lost message
    // Check if player score is greater than 20 and display you win message
    if (currentRoll == 1) {
        youLose();

    } else if (player1Score > 20) {
        youWin();
    }
}

// Create roll button event listener for mouse input

rollButton.addEventListener('click', rollDice );

// Create start again button event listener for mouse input

startAgain.addEventListener('click', gameReset );

gameReset();