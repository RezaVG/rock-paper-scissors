const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function playRound(playerSelection, computerSelction) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelction;
  if (player === computer) {
    return 0;
  } else if (player === "rock" && computer === "scissors") {
    return playerScore++;
  } else if (player === "paper" && computer === "rock") {
    return playerScore++;
  } else if (player === "scissors" && computer === "paper") {
    return playerScore++;
  } else {
    return computerScore++;
  }
}

function game() {
  while (computerScore < 5 && playerScore < 5) {
    let playerSelection = prompt(`Your'r round! Pick you chioce: `);
    playRound(playerSelection, getComputerChoice());
    console.log(playerScore);
    console.log(computerScore);
  }
  if (playerScore > computerScore) {
    alert(`You Won!`);
  } else if (computerScore > playerScore) {
    alert(`Computer Won!`);
  } else {
    alert(`It's a Draw!`);
  }
}
game();
