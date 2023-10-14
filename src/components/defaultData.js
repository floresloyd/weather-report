const defaultcurrJson = {
  coord: {
    lon: 120.9783,
    lat: 14.5949,
  },
  weather: [
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02d",
    },
  ],
  base: "stations",
  main: {
    temp: 304.41,
    feels_like: 311.41,
    temp_min: 303.72,
    temp_max: 304.91,
    pressure: 1010,
    humidity: 70,
  },
  visibility: 10000,
  wind: {
    speed: 4.02,
    deg: 340,
    gust: 8.94,
  },
  clouds: {
    all: 20,
  },
  dt: 1697252657,
  sys: {
    type: 2,
    id: 2008256,
    country: "PH",
    sunrise: 1697233615,
    sunset: 1697276237,
  },
  timezone: 28800,
  id: 7521311,
  name: "National Capital Region",
  cod: 200,
};

const defaultJson = {
  latitude: 14.625,
  longitude: 121.0,
  generationtime_ms: 0.05996227264404297,
  utc_offset_seconds: -14400,
  timezone: "America/New_York",
  timezone_abbreviation: "EDT",
  elevation: 7.0,
  daily_units: {
    time: "iso8601",
    weathercode: "wmo code",
    temperature_2m_max: "°C",
    temperature_2m_min: "°C",
    sunrise: "iso8601",
    uv_index_max: "",
    windspeed_10m_max: "km/h",
  },
  daily: {
    time: [
      "2023-10-13",
      "2023-10-14",
      "2023-10-15",
      "2023-10-16",
      "2023-10-17",
      "2023-10-18",
      "2023-10-19",
    ],
    weathercode: [95, 96, 80, 3, 3, 80, 45],
    temperature_2m_max: [33.0, 32.6, 33.1, 34.7, 34.4, 33.5, 33.6],
    temperature_2m_min: [26.0, 25.0, 24.8, 25.1, 26.1, 26.7, 24.8],
    sunrise: [
      "2023-10-12T17:47",
      "2023-10-13T17:47",
      "2023-10-14T17:47",
      "2023-10-15T17:47",
      "2023-10-16T17:47",
      "2023-10-17T17:47",
      "2023-10-18T17:48",
    ],
    uv_index_max: [7.65, 7.75, 8.35, 8.25, 8.15, 5.65, 6.5],
    windspeed_10m_max: [5.7, 6.9, 7.2, 10.2, 9.5, 5.4, 3.8],
  },
};

export { defaultcurrJson, defaultJson };
