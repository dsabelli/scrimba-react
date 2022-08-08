const imgLocation = document.querySelector(".image-location");
const date = new Date();
const leamCoords = {
  id: 6051122,
  name: "Leamington",
  state: "",
  country: "CA",
  coord: {
    lon: -82.599808,
    lat: 42.050091,
  },
};

async function getBackground() {
  try {
    const res = await fetch(
      "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
    );
    const data = await res.json();

    const backgroundImage = data.urls.full;
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    imgLocation.textContent = data.location.name;
  } catch (err) {
    console.log(err);
    document.body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1550491417-1345e194cbbd?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Mjc2NjgzNDY&ixlib=rb-1.2.1&q=85)";
  }
}
getBackground();

async function getCrypto() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/exchange_rates");
    const data = await res.json();

    const cadName = data.rates.cad.name;
    const cadValue = data.rates.cad.value;
    document.querySelector(
      ".ticker"
    ).textContent = `BTC to ${cadName}: $${cadValue}`;
  } catch (err) {
    console.log(err);
  }
}
getCrypto();

setInterval(getTime, 1000);
function getTime() {
  document.querySelector(".clock").textContent = date.toLocaleTimeString(
    "en-us",
    { timeStyle: "short" }
  );
}

async function getWeather() {
  try {
    const res = await fetch(
      `https://apis.scrimba.com/openweathermap/data/2.5/weather?units=metric&id=${leamCoords.id}`
    );
    const data = await res.json();
    document.querySelector(
      ".weather-container"
    ).innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" >`;
    document.querySelector(
      ".weather-container"
    ).innerHTML += `<p class = "weather-temp">${Math.round(
      data.main.feels_like
    )}°</p>`;
    document.querySelector(
      ".weather-container"
    ).innerHTML += `<p class= "weather-city">${leamCoords.name}</p>`;
    console.log(data.weather[0].icon);
  } catch (err) {
    console.log(err);
  }
}
getWeather();
