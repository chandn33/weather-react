import React from "react";
import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function App() {
  let weatherData = {
    date: "Thursday 7:30",
    city: "Leicester",
    description: "Sunny",
    temperature: 15,
    humidity: 89,
    wind: 3,
    weatherIcon: (
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="goldenrod"
        size="40"
        animate="true"
      />
    )
  };

  return (
    <div class="container">
      <div class="weather-app">
        <form class="mb-3">
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                class="form-control"
                id="city-input"
              />
            </div>
            <div class="col-3">
              <input type="submit" value="search" class="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
        <div class="row">
          <div class="col-6">
            {weatherData.weatherIcon}
            <strong>{weatherData.temperature}</strong>
            <span class="units">
              {" "}
              <a href="celsius" class="active">
                {" "}
                °C
              </a>{" "}
              | <a href="fahrenheit">°F</a>
            </span>
          </div>
          <div class="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} KMPH</li>
            </ul>
          </div>
        </div>
      </div>
      <script src="src/index.js"></script>
      <footer>
        <a href="https://github.com/chandn33/weather-react">
          Open-source code
        </a>{" "}
        by Chandni Patel🌻
      </footer>
    </div>
  );
}