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

eval("const apiKey = \"8ca8be2872a54644982153831231712\";\nconst degrees = document.querySelector(\".degrees-info\");\nconst searchForm = document.querySelector(\"form\");\nconst searchBtn = document.querySelector(\".search-btn\");\nconst img = document.querySelector(\"img\");\nconst weatherDescription = document.querySelector(\".weather-description\");\nconst humidity = document.querySelector(\".humidity-percent\");\nconst windSpeed = document.querySelector(\".wind-speed\");\nconst weatherInfo = document.querySelector(\".weather-info\");\nconst weatherSubInfo = document.querySelector(\".weather-sub-info\");\nconst weatherContainer = document.querySelector(\".weather-container\");\n\nfunction getWeather(value) {\n  fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}`, {\n    mode: \"cors\",\n  })\n    .then(function (response) {\n      return response.json();\n    })\n    .then(function (response) {\n      degrees.innerHTML = `<h1>${response.current.temp_c}&deg;C</h1>`;\n      weatherDescription.textContent = response.current.condition.text;\n      humidity.textContent = response.current.humidity + \"%\";\n      windSpeed.textContent = response.current.wind_kph + \"Km/h\";\n      if (weatherDescription.textContent === \"Clear\") {\n        img.src = \"../images/clear.png\";\n      } else if (weatherDescription.textContent === \"Mist\") {\n        img.src = \"../images/mist.png\";\n      } else if (weatherDescription.textContent === \"Partly cloudy\") {\n        img.src = \"../images/cloud.png\";\n      } else if (weatherDescription.textContent === \"Overcast\") {\n        img.src = \"../images/overcast.png\";\n      } else if (\n        weatherDescription.textContent === \"Moderate or heavy rain with thunder\"\n      ) {\n        img.src = \"../images/thunder.png\";\n      } else if (\n        weatherDescription.textContent === \"Light rain\" ||\n        weatherDescription.textContent === \"Rain\"\n      ) {\n        img.src = \"../images/rain.png\";\n      }\n    });\n}\nsearchForm.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n  const city = document.querySelector(\".city\").value;\n  getWeather(city);\n  weatherInfo.display = \"flex\";\n  weatherSubInfo.display = \"flex\";\n});\nsearchBtn.addEventListener(\"click\", function (event) {\n  event.preventDefault(); // Prevent the default button click behavior\n  const city = document.querySelector(\".city\").value;\n  getWeather(city);\n  weatherInfo.style.display = \"block\";\n  weatherSubInfo.style.display = \"flex\";\n  weatherContainer.style.paddingBottom = \"3rem\";\n  weatherContainer.style.paddingTop = \"2rem\";\n  searchForm.style.paddingBottom = \"1.5rem\";\n});\n\n\n//# sourceURL=webpack://basic-template/./src/index.js?");

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