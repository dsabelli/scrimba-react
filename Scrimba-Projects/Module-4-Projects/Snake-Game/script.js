const grid = document.querySelector(".grid");
const startBtn = document.querySelector("#start");
const scoreDisplay = document.querySelector("#score");
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
const width = 10;
let appleIndex = 0;
let timerId = 0;
let score = 0;
let intervalTime = 1000;
const speed = 0.9;

function createGrid() {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    grid.appendChild(square);
    square.classList.add("square");
    squares.push(square);
  }
}
createGrid();

currentSnake.forEach((index) => squares[index].classList.add("snake"));

function startGame() {
  currentSnake.forEach((index) => squares[index].classList.remove("snake"));
  squares[appleIndex].classList.remove("apple");
  clearInterval(timerId);
  currentSnake = [2, 1, 0];
  timerId = 0;
  direction = 1;
  intervalTime = 1000;
  score = 0;
  scoreDisplay.textContent = score;
  timerId = setInterval(move, intervalTime);
  generateApples();
  currentSnake.forEach((index) => squares[index].classList.add("snake"));
}

startBtn.addEventListener("click", startGame);

function move() {
  if (
    (currentSnake[0] + width >= width * width && direction === width) ||
    (currentSnake[0] % width === width - 1 && direction === 1) ||
    (currentSnake[0] % width === 0 && direction === -1) ||
    (currentSnake[0] + width <= 0 && direction === -width) ||
    squares[currentSnake[0] + direction].classList.contains("snake")
  ) {
    clearInterval(timerId);
  }

  const tail = currentSnake.pop();
  squares[tail].classList.remove("snake");
  currentSnake.unshift(currentSnake[0] + direction);
  if (squares[currentSnake[0]].classList.contains("apple")) {
    squares[currentSnake[0]].classList.remove("apple");
    squares[tail].classList.add("snake");
    currentSnake.push(tail);
    score++;
    scoreDisplay.textContent = score;
    generateApples();
    clearInterval(timerId);
    intervalTime *= speed;
    timerId = setInterval(move, intervalTime);
  }

  squares[currentSnake[0]].classList.add("snake");
}

function control(e) {
  if (e.keyCode === 39) {
    direction = 1;
  } else if (e.keyCode === 38) {
    direction = -width;
  } else if (e.keyCode === 37) {
    direction = -1;
  } else if (e.keyCode === 40) {
    direction = width;
  }
}

document.addEventListener("keyup", control);

function generateApples() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains("snake"));
  squares[appleIndex].classList.add("apple");
}
generateApples();
