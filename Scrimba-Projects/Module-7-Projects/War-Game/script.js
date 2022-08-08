let deckId;
let card1;
let card2;
let p1Score = 0;
let p2Score = 0;
const cardValues = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "JACK",
  "QUEEN",
  "KING",
  "ACE",
];

function handleClick() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => {
      deckId = data.deck_id;
      document.getElementById("remaining-cards").textContent = `
      Remaining Cards: ${data.remaining}`;
      document.getElementById("draw-cards").disabled = false;
      p1Score = 0;
      p2Score = 0;
      document.getElementById("p1-score").textContent = `Player 1 Score: `;
      document.getElementById("p2-score").textContent = `Player 2 Score: `;
      document.getElementById("round-winner").textContent = `Game of War`;
    });
}

function drawCards() {
  fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then((res) => res.json())
    .then((data) => {
      let cardsRemaining = data.remaining;

      document.getElementById("remaining-cards").textContent = `
      Remaining Cards: ${data.remaining}`;
      document.getElementById("cards").children[0].innerHTML = `
      <img src=${data.cards[0].image} class="card" />
  `;
      document.getElementById("cards").children[1].innerHTML = `
      <img src=${data.cards[1].image} class="card" />
  `;
      warWinner(data.cards[0], data.cards[1]);
      if (cardsRemaining === 0) {
        document.getElementById("draw-cards").disabled = true;
        if (p1Score > p2Score) {
          document.getElementById(
            "round-winner"
          ).textContent = `Player 1 Wins the Game`;
        } else if (p1Score < p2Score) {
          document.getElementById(
            "round-winner"
          ).textContent = `Player 2 Wins the Game`;
        } else {
          document.getElementById("round-winner").textContent = `Tie Game`;
        }
      }
    });
}

function warWinner(card1, card2) {
  const card1Value = cardValues.indexOf(card1.value);
  const card2Value = cardValues.indexOf(card2.value);

  if (card1Value > card2Value) {
    p1Score++;
    document.getElementById(
      "p1-score"
    ).textContent = `Player 1 Score: ${p1Score}`;
    document.getElementById("round-winner").textContent = `Player 1 Wins!`;
  } else if (card1Value < card2Value) {
    p2Score++;
    document.getElementById(
      "p2-score"
    ).textContent = `Player 2 Score: ${p2Score}`;
    document.getElementById("round-winner").textContent = `Player 2 Wins!`;
  } else {
    document.getElementById("round-winner").textContent = `War!`;
  }
}

document.getElementById("new-deck").addEventListener("click", handleClick);
document.getElementById("draw-cards").addEventListener("click", drawCards);
