function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*100)
    let choice = "";

    if (randomNumber<=33) choice = "Rock"; 
    if (randomNumber>33 && randomNumber<=66) choice = "Paper";
    if (randomNumber>66) choice = "Scissors";

    return choice;
}
        
const choice = getComputerChoice();

console.log(choice);