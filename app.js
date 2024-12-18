let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * 3);

  return computerChoice[randomIndex].toLowerCase();
}

function getHumanChoice() {
  const humanPlay = prompt("Do your move!", "rock", "paper", "scissors");
  return humanPlay.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("Empate");
  }
  if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log(
      `Computador: ${computerChoice} perdeu para | Humano: ${humanChoice}`
    );
  }
  if (humanChoice == "paper" && computerChoice == "rock") {
    console.log(
      `Computador: ${computerChoice} perdeu para | Humano: ${humanChoice}`
    );
  }
  if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log(
      `Computador: ${computerChoice} perdeu para | Humano: ${humanChoice}`
    );
  }
  if (computerChoice == "rock" && humanChoice == "scissors") {
    console.log(
      `Humano: ${humanChoice} perdeu para | Computador: ${computerChoice}`
    );
  }
  if (computerChoice == "paper" && humanChoice == "rock") {
    console.log(
      `Humano: ${humanChoice} perdeu para | Computador: ${computerChoice}`
    );
  }
  if (computerChoice == "scissors" && humanChoice == "paper") {
    console.log(
      `Humano: ${humanChoice} perdeu para | Computador: ${computerChoice}`
    );
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
