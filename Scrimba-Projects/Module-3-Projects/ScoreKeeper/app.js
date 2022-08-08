const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const score1 = document.querySelector("#h1-1");
const score2 = document.querySelector("#h1-3");
const playingTo = document.querySelector("#playing-to");
const message = document.querySelector(".message");

btn1.addEventListener("click", function () {
  if (
    score1.innerText !== playingTo.value &&
    score2.innerText !== playingTo.value
  ) {
    score1.innerText++;
  } else if (score1.innerText === playingTo.value) {
    message.innerText = "Player 1 wins! Press Reset to play again";
    score1.innerText = playingTo.value;
  }
});
btn2.addEventListener("click", function () {
  if (
    score2.innerText !== playingTo.value &&
    score1.innerText !== playingTo.value
  ) {
    score2.innerText++;
  } else if (score2.innerText === playingTo.value) {
    message.innerText = "Player 2 wins! Press Reset to play again";
    score2.innerText = playingTo.value;
  }
});

btn3.addEventListener("click", function () {
  score1.innerText = 0;
  score2.innerText = 0;
  message.innerText = "";
});

if (score1.innerText > score2.innerText) {
}
