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

// Initialize computer score and human score
let humanScore = 0;
let computerScore = 0;

// Create global references for display elements
const scoreBoard = document.createElement("div");
scoreBoard.setAttribute("id", "scoreBoard");
scoreBoard.textContent = "Score Board";

const humanScoreDisplay = document.createElement("p");
const computerScoreDisplay = document.createElement("p");
humanScoreDisplay.setAttribute("id", "humanScore");
computerScoreDisplay.setAttribute("id", "computerScore");
humanScoreDisplay.textContent = `Human: ${humanScore}`;
computerScoreDisplay.textContent = `Computer: ${computerScore}`;

scoreBoard.appendChild(humanScoreDisplay);
scoreBoard.appendChild(computerScoreDisplay);

document.body.appendChild(scoreBoard);

// Function to play round and update scores
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    const previousWinner = document.getElementById("previousWinner");
    if (previousWinner) document.body.removeChild(previousWinner);

    let winnerPrompt = "";
    const winner = document.createElement("p");

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

    winner.textContent = winnerPrompt;
    winner.setAttribute("id", "previousWinner");
    document.body.appendChild(winner);

    humanScoreDisplay.textContent = `Human: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;

    scoreBoard.appendChild(humanScoreDisplay);
    scoreBoard.appendChild(computerScoreDisplay);

    if ((humanScore > 4) || (computerScore > 4)) {
        document.body.removeChild(winner);
        const rockButton = document.getElementById("rockButton");
        const paperButton = document.getElementById("paperButton");
        const scissorsButton = document.getElementById("scissorsButton");

        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

        if (humanScore > computerScore) return alert("You win the game!");
        else if (computerScore > humanScore) return alert("You lost the game!");
        else return alert("It's a tie!");
    }
}

function playGame() {
    const rockButton = document.createElement("button");
    const paperButton = document.createElement("button");
    const scissorsButton = document.createElement("button");

    rockButton.setAttribute("id", "rockButton");
    paperButton.setAttribute("id", "paperButton");
    scissorsButton.setAttribute("id", "scissorsButton");

    rockButton.textContent = "Rock";
    paperButton.textContent = "Paper";
    scissorsButton.textContent = "Scissors";

    rockButton.addEventListener('click', () => {
        playRound("rock", getComputerChoice())
    });
    paperButton.addEventListener('click', () => {
        playRound("paper", getComputerChoice())
    });
    scissorsButton.addEventListener('click', () => {
        playRound("scissors", getComputerChoice())
    });

    document.body.appendChild(rockButton);
    document.body.appendChild(paperButton);
    document.body.appendChild(scissorsButton);    
}
playGame();