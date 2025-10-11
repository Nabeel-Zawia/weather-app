document.addEventListener('DOMContentLoaded', () => {
  const cityInput = document.getElementById("cityInput");
  const getWeatherButton = document.getElementById("getWeatherButton");
  const result = document.querySelector(".result");
  const cityNameEl = document.querySelector(".cityName");
  const tempratureEl = document.querySelector(".temprature");
  const descriptionEl = document.querySelector(".description");
  const errorMessageEl = document.querySelector(".errorMessage");
  const API_KEY = "YOUR_API_KEY_HERE";

  getWeatherButton.addEventListener('click', async () => {
    const cityName = cityInput.value.trim();
    if (!cityName) return;

    try {
      const weatherData = await fetchWeatherData(cityName);
      displayWeatherData(weatherData);
    } catch (e) {
      showError();
    }
  });

  async function fetchWeatherData(cityName) {
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    const geoResponse = await fetch(geoUrl);
    if (!geoResponse.ok) throw new Error("Geo data not found");

    const geoData = await geoResponse.json();
    if (!geoData.length) throw new Error("City not found");

    const { lat, lon, name } = geoData[0];

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    const weatherResponse = await fetch(weatherUrl);
    if (!weatherResponse.ok) throw new Error("Weather data not found");

    const weatherData = await weatherResponse.json();
    return { ...weatherData, name };
  }

  function displayWeatherData(data) {
    const { name, main, weather } = data;

    cityNameEl.textContent = name;
    tempratureEl.textContent = `🌡️ Temperature: ${main.temp.toFixed(1)}°C`;
    descriptionEl.textContent = `☁️ ${weather[0].description}`;

    errorMessageEl.classList.add("hidden");
    result.classList.remove("hidden");
  }

  function showError() {
    result.classList.remove("hidden");
    errorMessageEl.classList.remove("hidden");
    cityNameEl.textContent = "";
    tempratureEl.textContent = "";
    descriptionEl.textContent = "";
  }
});
