const idea = document.querySelector(".idea");
const btn = document.querySelector(".btn-1");

function getIdea() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      idea.innerText = data.activity;
    });
}

btn.addEventListener("click", getIdea);
