import React from "react";
import Login from "./Login";
import growprofitlogo3 from "./images/growprofitlogo3.png";

function Home() {
  return (
    <div className="home">
      <div className="home1">
        <h1>Welcome!</h1>
        <img src={growprofitlogo3} alt="Logo" />
      </div>
      <Login></Login>
    </div>
  );
}

export default Home;
