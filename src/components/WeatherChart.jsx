import { Line } from "react-chartjs-2";

const WeatherChart = ({ weekForecast }) => {
  // If weekForecast is not defined or is not an array, return null
  if (
    !weekForecast ||
    !Array.isArray(weekForecast) ||
    weekForecast.length === 0
  ) {
    return null;
  }

  const days = weekForecast.map((f) =>
    new Date(f.sunrise * 1000).toLocaleDateString()
  );
  const maxTemps = weekForecast.map((f) => f.temperature_2m_max);
  const minTemps = weekForecast.map((f) => f.temperature_2m_min);

  const data = {
    labels: days,
    datasets: [
      {
        label: "Max Temperature",
        data: maxTemps,
        fill: false,
        borderColor: "red",
      },
      {
        label: "Min Temperature",
        data: minTemps,
        fill: false,
        borderColor: "blue",
      },
    ],
  };

  return <Line data={data} />;
};

export default WeatherChart;
