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

// DEBUGGING CONSOLE.LOGS
console.log("humanChoice: ", humanChoice);
console.log("computerChoice: ", computerChoice);

// Initialize computer score and human score
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    let winnerPrompt = "";

    switch(humanChoice) {
        case "rock":
            if (computerChoice == "scissors") {
                winnerPrompt = "You win! Rock beats scissors.";
                humanScore++;
                break;
            }
            else if (computerChoice == "paper") {
                winnerPrompt = "You lose! Paper beats rock.";
                computerScore++;
                break;
            }
            else {
                winnerPrompt = "It's a tie!";
                break;
            }
        case "scissors":
            if (computerChoice == "rock") {
                winnerPrompt = "You lose! Rock beats scissors.";
                computerScore++;
                break;
            }
            else if (computerChoice == "paper") {
                winnerPrompt = "You win! Scissors beats paper.";
                humanScore++;
                break;
            }
            else {
                winnerPrompt = "It's a tie!";
                break;
            }
        case "paper":
            if (computerChoice == "scissors") {
                winnerPrompt = "You lose! Scissors beats paper.";
                computerScore++;
                break;
            }
            else if (computerChoice == "rock") {
                winnerPrompt = "You win! Paper beats rock.";
                humanScore++;
                break;
            }
            else {
                winnerPrompt = "It's a tie!";
                break;
            }
    }
    console.log("winnerPrompt: ", winnerPrompt);
    console.log("humanScore: ", humanScore);
    console.log("computerScore: ", computerScore);
}

playRound(humanChoice, computerChoice);