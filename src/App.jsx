import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Info from "./components/Info";
import "./css/App.css";

const App = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* Dashboard on the left */}
        <div className="col-md-4">
          <Dashboard /> {/* Use your Dashboard component here */}
        </div>
        {/* Separator */}
        <div className="col-md-1">
          <div className="separator"></div>
        </div>
        {/* Info on the right */}
        <div className="col-md-7">
          <Info /> {/* Use your Info component here */}
        </div>
      </div>
    </div>
  );
};

export default App;
