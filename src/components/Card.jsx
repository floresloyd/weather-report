import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Card(props) {
  // Split the date string into an array
  const [year, month, day] = props.day.split("-");
  const time = props.sunrise.split("T")[1];

  return (
    <Link to={`/day/${day}`}>
      <div className="container border my-3">
        <div className="top-row">
          <span>Date: {day}</span> {/* Added space after "Date:" */}
          <span>High: {props.max}</span> {/* Added space after "Max:" */}
          <span>Low : {props.min}</span> {/* Added space after "Min:" */}
        </div>
        <div className="bottom-row">
          <span>Sunrise: {time}</span> {/* Added space after "Sunrise:" */}
          <span>UV: {props.uv}</span> {/* Added space after "UV:" */}
          <span>Windspeed: {props.windspeed}</span>{" "}
          {/* Added space after "Windspeed:" */}
        </div>
      </div>
    </Link>
  );
}

export default Card;
