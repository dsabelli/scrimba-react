let p1Score = 0;
let p2Score = 0;
let p1Turn = true;

const pTurnMessage = document.querySelector("#message");
const p1ScoreDisplay = document.querySelector("#player1Scoreboard");
const p2ScoreDisplay = document.querySelector("#player2Scoreboard");
const p1Die = document.querySelector("#player1Dice");
const p2Die = document.querySelector("#player2Dice");
const rollBtn = document.querySelector("#rollBtn");
const resetBtn = document.querySelector("#resetBtn");

function rollDie() {
  let rollDieResult = Math.floor(Math.random() * 6 + 1);

  if (p1Turn) {
    pTurnMessage.textContent = "Player 1 Turn";
    p2Die.classList.remove("active");
    p1Die.classList.add("active");
    p1Die.textContent = rollDieResult;
    p1Score += rollDieResult;
    p1ScoreDisplay.textContent = p1Score;
    p1Turn = false;
  } else {
    pTurnMessage.textContent = "Player 2 Turn";
    p1Die.classList.remove("active");
    p2Die.classList.add("active");
    p2Die.textContent = rollDieResult;
    p2Score += rollDieResult;
    p2ScoreDisplay.textContent = p2Score;
    p1Turn = true;
  }

  if (p1Score > 20) {
    pTurnMessage.textContent = "Player 1 Wins!";
    displayResetBtn();
  } else if (p2Score > 20) {
    pTurnMessage.textContent = "Player 2 Wins!";
    displayResetBtn();
  }
}
function displayResetBtn() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

function reset() {
  rollBtn.style.display = "block";
  resetBtn.style.display = "none";
  p1Score = 0;
  p2Score = 0;
  p2Die.classList.remove("active");
  p1Die.classList.add("active");
  pTurnMessage.textContent = "Player 1 Turn";
  p1Die.textContent = "-";
  p2Die.textContent = "-";
  p1ScoreDisplay.textContent = "0";
  p2ScoreDisplay.textContent = "0";
  p1Turn = true;
}

rollBtn.addEventListener("click", rollDie);
resetBtn.addEventListener("click", reset);
