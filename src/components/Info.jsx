import { useState } from "react";
import axios from "axios";
import CurrentCity from "./CurrentCity";
import Card from "./Card";
import "../css/Info.css";
import { defaultcurrJson, defaultJson } from "./defaultData";

function Info() {
  const [city, setCurrentCity] = useState("Manila");
  const [newCity, setNewCity] = useState(""); // State for the new city input
  const [currentForecast, setCurrentforcast] = useState(defaultcurrJson);
  const [weekForecast, seetWeekForecast] = useState(defaultJson);
  const apiKey = "aa33a959de8beacdf6a591b04cc64207";

  const fetchWeatherData = async (selectedCity) => {
    const cityURL = `http://api.openweathermap.org/geo/1.0/direct?q=${selectedCity}&limit=5&appid=${apiKey}`;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}`;
    const forecastURL = `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.lat}&longitude=${selectedCity.lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,uv_index_max,windspeed_10m_max&timezone=America%2FNew_York`;

    try {
      const cityResponse = await axios.get(cityURL);
      const cityData = cityResponse.data[0];
      if (cityData) {
        setCurrentCity(cityData.name);
      }
    } catch (error) {
      console.error("Error fetching city data: ", error);
    }

    try {
      const response = await axios.get(weatherURL);
      const weatherData = response.data;
      setCurrentforcast(weatherData);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }

    try {
      const response2 = await axios.get(forecastURL);
      const forecastData = response2.data.daily;
      seetWeekForecast(forecastData);
    } catch (error) {
      console.error("Error fetching forecast data: ", error);
    }
  };

  const handleFetch = () => {
    fetchWeatherData(newCity || city); // Use the newCity if provided, otherwise use the current city
  };

  return (
    <div className="container border">
      <div className="row">
        <div className="col-md-6">
          <CurrentCity
            city={city}
            temp={currentForecast.main.temp}
            weather={currentForecast.weather[0].description}
            icon={currentForecast.weather[0].icon}
            feels={currentForecast.main.feels_like}
          />
        </div>
        <div className="col-md-6">
          <div>
            <input
              type="text"
              placeholder="Enter a city"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleFetch}>
              Fetch
            </button>
          </div>
        </div>
      </div>
      <div className="container border">
        <h1>Forecast</h1>
        {weekForecast.daily.time.map((day, index) => (
          <Card
            key={index}
            day={weekForecast.daily.time[index]}
            weathercode={weekForecast.daily.weathercode[index]}
            max={weekForecast.daily.temperature_2m_max[index]}
            min={weekForecast.daily.temperature_2m_min[index]}
            sunrise={weekForecast.daily.sunrise[index]}
            uv={weekForecast.daily.uv_index_max[index]}
            windspeed={weekForecast.daily.windspeed_10m_max[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default Info;
