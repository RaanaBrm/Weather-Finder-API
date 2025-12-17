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

$(() => {

   $(`.overlay`).delay(6000).fadeOut();
    setTimeout(() => $(`.overlay`).text(`Gathering`), 300);
    setTimeout(() => $(`.overlay`).text(`sunshine`), 1300);
    setTimeout(() => $(`.overlay`).text(`and`), 2300);
    setTimeout(() => $(`.overlay`).text(`clouds`), 3300);
    setTimeout(() => $(`.overlay`).text(`for`), 4300);
    setTimeout(() => $(`.overlay`).text(`you...`), 5300);
});