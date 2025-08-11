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

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

let humanScore = 0;
let computerScore = 0;