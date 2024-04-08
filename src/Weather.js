import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import { Audio } from "react-loader-spinner";

export default function Weather() {
    <h1>Welcome to Weather</h1>;
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render();
    function Weather() {
      return (
        <div class="container">
          <div class="weather-app-wrapper">
            <div class="weather-app">
              <form id="search-form" class="mb-3">
                <div class="row">
                  <div class="col-9">
                    <input
                      type="search"
                      placeholder="Type a city.."
                      class="form-control"
                      id="city-input"
                      autocomplete="off"
                    />
                  </div>
                  <div class="col-3">
                    <input
                      type="submit"
                      value="Search"
                      class="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
              <div class="overview">
                <h1 id="city"></h1>
                <ul>
                  <li>
                    Last updated: <span id="date"></span>
                  </li>
                  <li id="description"></li>
                </ul>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="clearfix weather-temperature">
                    <img src="" alt="Clear" id="icon" class="float-left" />
                    <div class="float-left">
                      <strong id="temperature"></strong>
                      <span class="units">
                        <a href="#" id="celsius-link" class="active">
                          °C
                        </a>{" "}
                        |
                        <a href="#" id="fahrenheit-link">
                          °F
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <ul>
                    <li>
                      Humidity: <span id="humidity"></span>%
                    </li>
                    <li>
                      Wind: <span id="wind"></span> km/h
                    </li>
                  </ul>
                </div>
              </div>
              <div class="weather-forecast" id="forecast">
                <div class="row">
                  <div class="col-2">
                    <div class="weather-forecast-date">Thu</div>
                    <img
                      src="http://openweathermap.org/img/wn/50d@2x.png"
                      alt=""
                      width="42"
                    />
                    <div class="weather-forecast-temperatures">
                      <span class="weather-forecast-temperature-max">
                        {" "}
                        18°{" "}
                      </span>
                      <span class="weather-forecast-temperature-min">
                        {" "}
                        12°{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href=" https://github.com/jogit99/vanilla-weather-app-.git"
              target="_blank"
            >
              Open-source code
            </a>
            by Jo
          </div>
        </div>
      );
    }
 
}
