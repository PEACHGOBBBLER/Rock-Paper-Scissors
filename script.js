let playerScore = 0;
let computerScore = 0;
const rock = document.getElementsByClassName("rockTwo");
const paper = document.getElementsByClassName("paperTwo");
const scissors = document.getElementsByClassName("scissorsTwo");
const choice = 



function getComputerChoice() {
    let choices = [rock, paper, scissors];
    let choice = choices[Math.floor(Math.random() * choices.length)]; 
    return choice.toString();
}

function battleBox() {
    if (document.getElementsByClassName("buttons").addEventListener("click")) {
        document.getElementsByClassName("battleBox").style.visibility ="visible";
    }
}

function playRound() {
    playerSelection = getPlayerChoice(); /* Causes issues with if function below. Replace with "rock" for testing*/
    computerSelection = getComputerChoice();
    alert(`You chose ${playerSelection}.\nYour opponent chose ${computerSelection}.`); 

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
        alert("You win\nYour Score: " + (++playerScore));   
    }
    else if (playerSelection === computerSelection) {
        alert("Its a draw\nYour Score: " + (playerScore) + "\nOpponent's Score: " + (computerScore));   
    }
    else {
        alert("You lose\nOpponent's Score: " + (++computerScore));
    }
}

function playGame() {
    for(i = 0; i < 100; i++) {
        playRound(i);
        
        if (playerScore == 3) {
            return "YOU HAVE WON THE GAME! Your Score: " + (playerScore);
        } else if (computerScore == 3) {
            return "YOUR OPPONENT HAS WON THE GAME. Opponent's Score: " + (computerScore);
        }
    }

    }
