"use strict";

const body = document.querySelector("body");
const messageWin = document.querySelector(".message");
const guessWin = document.querySelector(".guess");
const numberWin = document.querySelector(".number");
const highscoreFile = document.querySelector(".highscore");
const scoreFile = document.querySelector(".score");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");

const displayMessage = (message) => (messageWin.textContent = message);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function checkGuess() {
  const guess = Number(guessWin.value);

  if (!guess) {
    displayMessage("⛔️ No number");
  } else if (guess >= 21 || guess <= 0) {
    displayMessage("🤨Invalid number range");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number");
    numberWin.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    numberWin.style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      highscoreFile.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage("📈Too high!")
        : displayMessage("📉Too low!");
      score--;
      scoreFile.textContent = score;
    } else {
      displayMessage("💥You lost the game!");
      scoreFile.textContent = 0;
    }
  }
}

checkBtn.addEventListener("click", checkGuess);

guessWin.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkGuess();
  }
});

function again() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  scoreFile.textContent = score;
  numberWin.textContent = "?";
  guessWin.value = "";
  body.style.backgroundColor = "#222";
  numberWin.style.width = "15rem";
}

againBtn.addEventListener("click", again);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    e.preventDefault();
    againBtn.focus();
    again();
  }
});
