const API_KEY = "a887201f96aaf456017667a0680fad31";
const LAST_CITY_KEY = "lastCity";

const weatherBox = document.querySelector("#weatherBox");
const statusBox = document.querySelector("#status");
const cityInput = document.querySelector("#cityInput")
const forecastBox = document.querySelector("#forecastBox");
const cityNameEl = document.querySelector("#cityName");
const temperatureEl = document.querySelector("#temperature");
const descriptionEl = document.querySelector("#description");
const humidityEl = document.querySelector("#humidity");
const feelsLikeEl = document.querySelector("#feelsLike");
const windEl = document.querySelector("#wind");
const iconEl = document.querySelector("#weatherIcon");

const fetchForecast = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric`;
  
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error("Failed to fetch forecast");
    }
  
    return response.json();
  };
  
  const renderForecast = (data) => {
    forecastBox.innerHTML = "";
    forecastBox.classList.remove("hidden");
  
    for (let i = 0; i < data.list.length; i += 8) {
      const item = data.list[i];
  
      const day = new Date(item.dt * 1000).toLocaleDateString("en-US", {
        weekday: "short",
      });
  
      const temp = Math.round(item.main.temp);
      const icon = item.weather[0].icon;
  
      const div = document.createElement("div");
      div.classList.add("forecast-item");
  
      div.innerHTML = `
        <strong>${day}</strong>
        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="">
        <span>${temp}°C</span>
      `;
  
      forecastBox.appendChild(div);
    }
  };

  const fetchWeather = async (city) => {
  try {
    statusBox.classList.remove("error");
    statusBox.innerText = "Loading weather...";
    weatherBox.classList.add("hidden");
    forecastBox.classList.add("hidden");

    const URL =
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("City not found or invalid API key");
    }

    const data = await response.json();
    
    localStorage.setItem(LAST_CITY_KEY, city);

    statusBox.innerText = "";
    cityNameEl.innerText = data.name + ", " + data.sys.country;
    temperatureEl.innerText = Math.floor(data.main.temp) + "°C";
    descriptionEl.innerText = data.weather[0].description;
    humidityEl.innerText = "Humidity: " + data.main.humidity + "%";
    feelsLikeEl.innerText = "Feels like: " + Math.floor(data.main.feels_like) + "°C";
    windEl.innerText = "Wind: " + data.wind.speed + " m/s";

    iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    iconEl.alt = data.weather[0].description;
    weatherBox.classList.remove("hidden");

    const forecastData = await fetchForecast(city);
    renderForecast(forecastData);

  } catch (error) {
    statusBox.classList.add("error");
    statusBox.innerText = error.message;
    weatherBox.classList.add("hidden");
    forecastBox.classList.add("hidden");
    forecastBox.innerHTML = "";
  }
};

document.querySelector("#weatherForm").addEventListener("submit", (event) => {
  event.preventDefault(); 

  const city = cityInput.value.trim();

  if (city === "") {
    statusBox.classList.add("error");
    statusBox.innerText = "Please enter a city first.";
    return;
  }

  fetchWeather(city);
});
document.addEventListener("DOMContentLoaded", () => {
    const lastCity = localStorage.getItem(LAST_CITY_KEY);
  
    if (lastCity) {
      cityInput.value = lastCity;
      fetchWeather(lastCity);
    }
  });
   

$(() => {

   $(`.overlay`).delay(6000).fadeOut();
    setTimeout(() => $(`.overlay`).text(`Gathering`), 300);
    setTimeout(() => $(`.overlay`).text(`sunshine`), 1300);
    setTimeout(() => $(`.overlay`).text(`and`), 2300);
    setTimeout(() => $(`.overlay`).text(`clouds`), 3300);
    setTimeout(() => $(`.overlay`).text(`for`), 4300);
    setTimeout(() => $(`.overlay`).text(`you...`), 5300);
});