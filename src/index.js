import "../src/styles.css";
import clearImage from "../images/clear.png";
import cloudImage from "../images/cloud.png";
import mistImage from "../images/mist.png";
import overcastImage from "../images/overcast.png";
import rainImage from "../images/rain.png";

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

      // Update image paths based on the imported variables
      if (weatherDescription.textContent === "Clear") {
        img.src = clearImage;
      } else if (
        weatherDescription.textContent === "Mist" ||
        weatherDescription.textContent === "Fog" ||
        weatherDescription.textContent === "Freezing Fog"
      ) {
        img.src = mistImage;
      } else if (weatherDescription.textContent === "Partly cloudy") {
        img.src = cloudImage;
      } else if (weatherDescription.textContent === "Overcast") {
        img.src = overcastImage;
      } else if (
        weatherDescription.textContent === "Moderate or heavy rain with thunder"
      ) {
        // Assuming you have a thunder image
        img.src = "../images/thunder.png";
      } else if (
        weatherDescription.textContent === "Light rain" ||
        weatherDescription.textContent === "Rain" ||
        weatherDescription.textContent === "Patchy rain possible"
      ) {
        img.src = rainImage;
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
  event.preventDefault();
  const city = document.querySelector(".city").value;
  getWeather(city);
  weatherInfo.style.display = "block";
  weatherSubInfo.style.display = "flex";
  weatherContainer.style.paddingBottom = "3rem";
  weatherContainer.style.paddingTop = "2rem";
  searchForm.style.paddingBottom = "1.5rem";
});
