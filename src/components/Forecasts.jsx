import axios from "axios";
import { useState } from "react";

function Forecasts() {
  const [latitude, setCurrentLatitude] = useState("14.5948914");
  const [longitude, setCurrentLongitude] = useState("120.9782618");
  const [city, setCurrentCity] = useState("Manila");
  const [units, setCurrentUnits] = useState("metric");
  const exclude = "current, minutely, hourly";
  const apiKey = "aa33a959de8beacdf6a591b04cc64207";
  const cityURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  const forecastURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,uv_index_max,windspeed_10m_max&timezone=America%2FNew_York`;

  const fetchCityData = async () => {
    try {
      const response = await axios.get(cityURL);
      const cityData = response.data[0]; // Assuming you want the first result
      if (cityData) {
        // SET CURRENT STATES TO DATA PULLED
        setCurrentLatitude(cityData.lat);
        setCurrentLongitude(cityData.lon);
        setCurrentCity(cityData.name);
        console.log(`Lat: ${latitude} | Lon: ${longitude} | ${city}`);
      } else {
        console.log("No city data found.");
      }
    } catch (error) {
      console.error("Error fetching city data: ", error);
    }
  };

  const fetchWeatherData = async () => {
    fetchCityData();
    // Current Forecast
    //const response = await axios.get(weatherURL);
    //const weatherData = response.data.daily;
    // 10-Day Forecast
    const response2 = await axios.get(forecastURL);
    const forecastData = response2.data.daily.time;
    //console.log(weatherData);
    console.log(forecastData);
  };

  return (
    <div className="container border">
      <h1> Forecast</h1>
      <button className="btn btn-success" onClick={fetchWeatherData}>
        {" "}
        Fetch{" "}
      </button>
    </div>
  );
}

export default Forecasts;
