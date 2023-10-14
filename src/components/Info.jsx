import CurrentCity from "./CurrentCity";
import Forecasts from "./Forecasts";

function Info() {
  return (
    <div className="container border">
      <div className="row">
        <div className="col-md-6">
          <CurrentCity></CurrentCity>
        </div>
        <div className="col-md-6">
          <CurrentCity></CurrentCity>
        </div>
      </div>
      <Forecasts></Forecasts>
    </div>
  );
}

export default Info;
