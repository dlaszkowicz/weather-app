const apiKey = "8ca8be2872a54644982153831231712";
const degrees = document.querySelector(".degrees-info");
const searchForm = document.querySelector("form");
const searchBtn = document.querySelector(".search-btn");
const img = document.querySelector("img");
const weatherDescription = document.querySelector(".weather-description");
const humidity = document.querySelector(".humidity-percent");
const windSpeed = document.querySelector(".wind-speed");
const weatherInfo = document.querySelector(".weather-info");
const weatherSubInfo = document.querySelector(".weather-sub-info");
const weatherContainer = document.querySelector(".weather-container");

function getWeather(value) {
  fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}`, {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      degrees.innerHTML = `<h1>${response.current.temp_c}&deg;C</h1>`;
      weatherDescription.textContent = response.current.condition.text;
      humidity.textContent = response.current.humidity + "%";
      windSpeed.textContent = response.current.wind_kph + "Km/h";
      if (weatherDescription.textContent === "Clear") {
        img.src = "../images/clear.png";
      } else if (weatherDescription.textContent === "Mist") {
        img.src = "../images/mist.png";
      } else if (weatherDescription.textContent === "Partly cloudy") {
        img.src = "../images/cloud.png";
      } else if (weatherDescription.textContent === "Overcast") {
        img.src = "../images/overcast.png";
      } else if (
        weatherDescription.textContent === "Moderate or heavy rain with thunder"
      ) {
        img.src = "../images/thunder.png";
      } else if (
        weatherDescription.textContent === "Light rain" ||
        weatherDescription.textContent === "Rain" ||
        weatherDescription.textContent === "Patchy rain possible"
      ) {
        img.src = "../images/rain.png";
      }
    });
}
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const city = document.querySelector(".city").value;
  getWeather(city);
  weatherInfo.display = "flex";
  weatherSubInfo.display = "flex";
});

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
searchBtn.addEventListener("click", async function (event) {
  event.preventDefault(); // Prevent the default button click behavior
  const city = document.querySelector(".city").value;
  getWeather(city);
  await delay(200);
  weatherInfo.style.display = "block";
  weatherSubInfo.style.display = "flex";
  weatherContainer.style.paddingBottom = "3rem";
  weatherContainer.style.paddingTop = "2rem";
  searchForm.style.paddingBottom = "1.5rem";
});
