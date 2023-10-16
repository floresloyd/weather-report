/* eslint-disable react/prop-types */
function CurrentCity(props) {
  const tempInFahrenheit = ((props.temp - 273.15) * 1.8 + 32).toFixed(2);
  const feels = ((props.feels - 273.15) * 1.8 + 32).toFixed(2);
  return (
    <div className="container border">
      <h1>
        Current City: <h3>{props.city}</h3>{" "}
      </h1>
      <h1>
        Temperature : <h3>{tempInFahrenheit}</h3>
      </h1>
      <h1>
        Feels Like : <h3>{feels} </h3>
      </h1>
      <img
        src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt="icon"
      />
    </div>
  );
}

export default CurrentCity;
