/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  const apiKey = \"8ca8be2872a54644982153831231712\";\n  const degrees = document.querySelector(\".degrees-info\");\n  const searchForm = document.querySelector(\"form\");\n  const searchBtn = document.querySelector(\".search-btn\");\n  const img = document.querySelector(\"img\");\n  const weatherDescription = document.querySelector(\".weather-description\");\n  const humidity = document.querySelector(\".humidity-percent\");\n  const windSpeed = document.querySelector(\".wind-speed\");\n  const weatherInfo = document.querySelector(\".weather-info\");\n  const weatherSubInfo = document.querySelector(\".weather-sub-info\");\n  const weatherContainer = document.querySelector(\".weather-container\");\n  weatherContainer.innerHTML = \"\";\n\n  function getWeather(value) {\n    fetch(\n      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}`,\n      {\n        mode: \"cors\",\n      }\n    )\n      .then(function (response) {\n        return response.json();\n      })\n      .then(function (response) {\n        degrees.innerHTML = `<h1>${response.current.temp_c}&deg;C</h1>`;\n        weatherDescription.textContent = response.current.condition.text;\n        humidity.textContent = response.current.humidity + \"%\";\n        windSpeed.textContent = response.current.wind_kph + \"Km/h\";\n\n        // Update image paths based on the imported variables\n        if (weatherDescription.textContent === \"Clear\") {\n          img.src = clearImage;\n        } else if (\n          weatherDescription.textContent === \"Mist\" ||\n          weatherDescription.textContent === \"Fog\" ||\n          weatherDescription.textContent === \"Freezing Fog\"\n        ) {\n          img.src = mistImage;\n        } else if (weatherDescription.textContent === \"Partly cloudy\") {\n          img.src = cloudImage;\n        } else if (weatherDescription.textContent === \"Overcast\") {\n          img.src = overcastImage;\n        } else if (\n          weatherDescription.textContent ===\n          \"Moderate or heavy rain with thunder\"\n        ) {\n          // Assuming you have a thunder image\n          img.src = \"../images/thunder.png\";\n        } else if (\n          weatherDescription.textContent === \"Light rain\" ||\n          weatherDescription.textContent === \"Rain\" ||\n          weatherDescription.textContent === \"Patchy rain possible\"\n        ) {\n          img.src = rainImage;\n        }\n        weatherInfo.classList.add(\"animate\");\n        weatherSubInfo.classList.add(\"animate\");\n      });\n  }\n\n  searchForm.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    const city = document.querySelector(\".city\").value;\n    getWeather(city);\n    weatherInfo.display = \"flex\";\n    weatherSubInfo.display = \"flex\";\n  });\n\n  function delay(ms) {\n    return new Promise((resolve) => setTimeout(resolve, ms));\n  }\n\n  searchBtn.addEventListener(\"click\", async function (event) {\n    event.preventDefault();\n    const city = document.querySelector(\".city\").value;\n    getWeather(city);\n    weatherInfo.style.display = \"block\";\n    weatherSubInfo.style.display = \"flex\";\n    weatherContainer.style.paddingBottom = \"3rem\";\n    weatherContainer.style.paddingTop = \"2rem\";\n    searchForm.style.paddingBottom = \"1.5rem\";\n  });\n});\n\n\n//# sourceURL=webpack://basic-template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;