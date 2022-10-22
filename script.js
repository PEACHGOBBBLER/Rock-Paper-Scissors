let playerScore = 0;
let computerScore = 0;
const computerRock = "rock";
const computerPaper = "paper";
const computerScissors = "scissors";
const rock = "rock";
const paper = "paper";
const scissors = "scissors";



function getComputerChoice() {
    let choices = [computerRock, computerPaper, computerScissors];
    let choice = choices[Math.floor(Math.random() * choices.length)]; 
    return choice.toString();
}



function playRound(val) {

    let playerSelection = val;
    computerSelection = getComputerChoice();
    alert(`You chose ${playerSelection}.\nYour opponent chose ${computerSelection}.`); 

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
        alert("You win");   
    }
    else if (playerSelection === computerSelection) {
        alert("Its a draw");   
    }
    else {
        alert("You lose");
    }
}

