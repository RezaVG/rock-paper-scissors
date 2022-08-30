const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const random = (Math.floor(Math.random() * 3));
    return choices[random];
}

function playRound(playerSelection, computerSelction) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelction;
    if (player === computer) {
        return `It's a draw!`;
    } else if ( player === "rock" && computer === "scissors") {
        return "You Won! Rock beats Scissors";
    } else if (player === "paper" && computer === "rock") {
        return "You Won! Paper beats Rock";
    } else if (player === "scissors" && computer === "paper") {
        return "You Won! Scissors beat Paper";
    } else {
        return `You lost ${computer} beats ${player}.`
    }
}

const playerSelection = "Paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))