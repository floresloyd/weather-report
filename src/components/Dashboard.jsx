/* eslint-disable react/prop-types */
import "../css/Info.css";
function Dashboard({ focusSearchInput }) {
  const handleSearchClick = () => {
    focusSearchInput();
  };
  return (
    <div className="container border text-center bg-color">
      <h1> DashBoard</h1>
      <h3>
        {" "}
        <a href="/">
          {/* <a href="/" onClick={() => window.location.reload()}> */}
          🏠 Home
        </a>{" "}
      </h3>
      <h3>
        <a href="/search">
          {/* <a href="/search" onClick={handleSearchClick}> */}
          🔎 Search
        </a>
      </h3>
    </div>
  );
}

export default Dashboard;
