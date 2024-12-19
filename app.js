let humanScore = 0;
let computerScore = 0;
let newHumanChoice;
let humanScoreBoard = document.getElementById("humanScore");
let computerScoreBoard = document.getElementById("computerScore");

const playButtons = document.querySelectorAll("button");
const displayMessage = document.getElementById("response");
const humanTime = document.getElementById("doYourPlay");

playButtons.forEach((button) => {
  button.addEventListener("click", () => {
    newHumanChoice = button.id;
    return playRound(newHumanChoice, getComputerChoice());
  });
});

function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * 3);

  return computerChoice[randomIndex].toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    displayMessage.textContent = "Empate";
  }
  if (humanChoice == "rock" && computerChoice == "scissors") {
    displayMessage.textContent = `Computador: ${computerChoice} perdeu para || Humano: ${humanChoice}`;
  }
  if (humanChoice == "paper" && computerChoice == "rock") {
    displayMessage.textContent = `Computador: ${computerChoice} perdeu para || Humano: ${humanChoice}`;
    humanScore++;
  }
  if (humanChoice == "scissors" && computerChoice == "paper") {
    displayMessage.textContent = `Computador: ${computerChoice} perdeu para || Humano: ${humanChoice}`;
    humanScore++;
  }
  if (computerChoice == "rock" && humanChoice == "scissors") {
    displayMessage.textContent = `Humano: ${humanChoice} perdeu para || Computador: ${computerChoice}`;
    computerScore++;
  }
  if (computerChoice == "paper" && humanChoice == "rock") {
    displayMessage.textContent = `Humano: ${humanChoice} perdeu para || Computador: ${computerChoice}`;
    computerScore++;
  }
  if (computerChoice == "scissors" && humanChoice == "paper") {
    displayMessage.textContent = `Humano: ${humanChoice} perdeu para || Computador: ${computerChoice}`;
    computerScore++;
  }
  if (humanScore == 3 || computerScore == 3) {
    if (humanScore == 3) {
      displayMessage.textContent = `O Ganhador foi o Humano`;
    } else if (computerScore == 3) {
      displayMessage.textContent = `O Ganhador foi o Computador`;
    }
  }
  humanScoreBoard.textContent = `Humano: ${humanScore}`;
  computerScoreBoard.textContent = `Computador: ${computerScore}`;
}
