const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
let playerSelection;
const results = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
console.log(buttons);

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playRound(button.className);
  })
);

function playRound(playerSelection) {
  const player = playerSelection;
  const computer = getComputerChoice();
  console.log(player);
  console.log(computer);
  if (playerScore < 5 && computerScore < 5) {
    if (player === computer) {
      results.textContent = `It's a tie!`;
      return;
    } else if (player === "rock" && computer === "scissors") {
      playerScore++;
      results.textContent = "Rock beats Scissors!";
    } else if (player === "paper" && computer === "rock") {
      playerScore++;
      results.textContent = "Paper beats Rock!";
    } else if (player === "scissors" && computer === "paper") {
      playerScore++;
      results.textContent = "Scissors beat Paper!";
    } else {
      computerScore++;
      results.textContent = `${computer} beats ${player}!`;
    }
  }

  document.querySelector("#PlayerScore").textContent = playerScore;
  document.querySelector("#ComputerScore").textContent = computerScore;
  console.log(playerScore);
  console.log(computerScore);
  if (computerScore === 5) {
    results.textContent = "Computer won!";
    return;
  }
  if (playerScore === 5) {
    results.textContent = "You won!";
    return;
  }
}
