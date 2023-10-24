import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Info from "./components/Info";
import "./css/App.css";
import Day from "./components/Day";
import { useState, useEffect } from "react";
import axios from "axios";
import { defaultcurrJson, defaultJson } from "./components/defaultData";

const App = () => {
  // State and functions from Info component
  const [city, setCurrentCity] = useState("New York City");
  const [newCity, setNewCity] = useState("");
  const [currentForecast, setCurrentforcast] = useState(defaultcurrJson);
  const [weekForecast, setWeekForecast] = useState(defaultJson);
  const [currentTime, setCurrentTime] = useState(new Date());
  const apiKey = "aa33a959de8beacdf6a591b04cc64207";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
      setWeekForecast(forecastData);
    } catch (error) {
      console.error("Error fetching forecast data: ", error);
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <Dashboard />
        </div>
        <div className="col-md-1">
          <div className="separator"></div>
        </div>
        <div className="col-md-7">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Info
                    city={city}
                    newCity={newCity}
                    currentForecast={currentForecast}
                    weekForecast={weekForecast}
                    handleFetch={handleFetch}
                    sortWeatherByMaxTemp={sortWeatherByMaxTemp}
                    currentTime={currentTime}
                    setNewCity={setNewCity}
                  />
                }
              />
              <Route
                path="/search"
                element={
                  <Info
                    city={city}
                    newCity={newCity}
                    currentForecast={currentForecast}
                    weekForecast={weekForecast}
                    handleFetch={handleFetch}
                    sortWeatherByMaxTemp={sortWeatherByMaxTemp}
                    currentTime={currentTime}
                    setNewCity={setNewCity}
                  />
                }
              />
              <Route path="/date/:day" element={<Day />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
