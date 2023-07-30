import React from "react";
import growprofitlogo3 from "./images/growprofitlogo3.png";

function Signup() {
  return (
    
    <div className="login">
      
      <div className="home1">
        <h1>Welcome!</h1>
        <img src={growprofitlogo3} alt="Logo" />
      </div>

      <form className="loginform">
        <h3>SignUp to GrowProfit</h3>
        <label>
          <input type="text" placeholder="Full Name" />
        </label>
        <label>
          <input type="text" placeholder="Email" />
        </label>

        <label>
          <input type="text" placeholder="Password" />
        </label>

        <input className="btn" type="submit" value="SignUp" />
      </form>
    </div>
  );
}

export default Signup;
