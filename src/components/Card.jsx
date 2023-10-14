/* eslint-disable react/prop-types */
function Card(props) {
  return (
    <div className="container border">
      <div className="top-row">
        <span>Day : {props.day}</span>
        <span>WeatherCode :{props.weathercode}</span>
        <span>Max : {props.max}</span>
        <span>Min :{props.min}</span>
      </div>
      <div className="bottom-row">
        <span>Sunrise : {props.sunrise}</span>
        <span>UV : {props.uv}</span>
        <span>Windspeed : {props.windspeed}</span>
      </div>
    </div>
  );
}

export default Card;
