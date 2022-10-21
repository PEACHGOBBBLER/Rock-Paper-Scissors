let playerScore = 0;
let computerScore = 0;
const computerRock = "rock";
const computerPaper = "paper";
const computerScissors = "scissors";
const rock = document.getElementsByClassName("rockTwo");
const paper = document.getElementsByClassName("paperTwo");
const scissors = document.getElementsByClassName("scissorsTwo");
const choice = document.getElementsByClassName("buttons")


function getComputerChoice() {
    let choices = [computerRock, computerPaper, computerScissors];
    let choice = choices[Math.floor(Math.random() * choices.length)]; 
    return choice.toString();
}



function playRound() {

    let playerSelection = ""

    function getPlayerChoice(){
        if (element.classList.contains("rockTwo")) {
            playerSelection = "rock";
            return playerSelection.toString()
        } else if (element.classList.contains("paperTwo")) {
            playerSelection = "paper";
            return playerSelection.toString();
        } else if (element.classList.contains("scissorsTwo")) {
            playerSelection = "scissors";
            return playerSelection.toString();
        } 
    }

    playerSelection = getPlayerChoice();
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

