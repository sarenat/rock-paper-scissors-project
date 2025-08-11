// Functions to get computer choice and human choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*100);
    let choice = "";

    if (randomNumber<=33) choice = "Rock"; 
    if (randomNumber>33 && randomNumber<=66) choice = "Paper";
    if (randomNumber>66) choice = "Scissors";

    return choice;
}
function getHumanChoice() {
    let choice = prompt("Choose your weapon: ");
    return choice;
}

// Load choices into variables
const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

// Initialize computer score and human score
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    computerChoice.toLowerCase();
}