/* eslint-disable react/prop-types */
function CurrentCity(props) {
  return (
    <div className="container border">
      <h1> {props.city} </h1>
      <h1> {props.temp}</h1>
      <h1> {props.feels} </h1>
      <img
        src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt="icon"
      />
    </div>
  );
}

export default CurrentCity;
