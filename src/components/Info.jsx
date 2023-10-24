import { useState, useEffect, useRef } from "react";
import axios from "axios";
import CurrentCity from "./CurrentCity";
import Card from "./Card";
import "../css/Info.css";
import { defaultcurrJson, defaultJson } from "./defaultData";
import WeatherChart from "../components/WeatherChart";

function Info() {
  const [city, setCurrentCity] = useState("New York City");
  const [newCity, setNewCity] = useState(""); // State for the new city input
  const [currentForecast, setCurrentforcast] = useState(defaultcurrJson);
  const [weekForecast, setWeekForecast] = useState(defaultJson);
  const apiKey = "aa33a959de8beacdf6a591b04cc64207";
  const [currentTime, setCurrentTime] = useState(new Date());

  const searchInputRef = useRef(null);

  const focusSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };
  // Update the current time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const fetchWeatherData = async (selectedCity) => {
    const cityURL = `http://api.openweathermap.org/geo/1.0/direct?q=${selectedCity}&limit=5&appid=${apiKey}`;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}`;
    const forecastURL = `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.lat}&longitude=${selectedCity.lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,uv_index_max,windspeed_10m_max&timezone=America%2FNew_York`;
    console.log(selectedCity);
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
      setWeekForecast(forecastData);
    } catch (error) {
      console.error("Error fetching forecast data:handleFetch ", error);
    }
  };

  const handleFetch = () => {
    fetchWeatherData(newCity || city); // Use the newCity if provided, otherwise use the current city
  };

  const sortWeatherByMaxTemp = () => {
    setWeekForecast((prevWeekForecast) => {
      const sortedForecast = [...prevWeekForecast.daily];
      sortedForecast.sort(
        (a, b) => b.temperature_2m_max - a.temperature_2m_max
      );
      return { daily: sortedForecast };
    });
  };
  return (
    <div className="container border bg-color">
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
            <p>Current Time: {currentTime.toLocaleTimeString()}</p>
            <input
              ref={focusSearchInput}
              type="text"
              placeholder="Enter a city"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleFetch}>
              Forecast
            </button>
            <WeatherChart weekForecast={weekForecast.daily} />
          </div>
        </div>
      </div>
      <div className="container border">
        <h1>Forecast</h1>
        <button className="btn btn-success" onClick={sortWeatherByMaxTemp}>
          Sort by Max Temp
        </button>
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
