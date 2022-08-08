const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const score1 = document.querySelector("#h1-1");
const score2 = document.querySelector("#h1-3");
const playingTo = document.querySelector("#playing-to");
const message = document.querySelector(".message");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

playingTo.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

btn1.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
      document.getElementById("h1-1").style.color = "green";
      document.getElementById("h1-3").style.color = "red";
      message.innerText = "Player 1 wins! Press Reset to play again";
    }
    score1.innerText = p1Score;
  }
});

btn2.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      isGameOver = true;
      document.getElementById("h1-1").style.color = "red";
      document.getElementById("h1-3").style.color = "green";
      message.innerText = "Player 2 wins! Press Reset to play again";
    }
    score2.innerText = p2Score;
  }
});

btn3.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  score1.innerText = 0;
  score2.innerText = 0;
  message.innerText = "";
  document.getElementById("h1-1").style.color = "black";
  document.getElementById("h1-3").style.color = "black";
}
