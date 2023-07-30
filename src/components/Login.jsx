import React from "react";
import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="login">
      <form className="loginform">
        <h3>Login in to GrowProfit</h3>
        <label>
          <input type="text" placeholder="User Name or Email" />
        </label>
        <label>
          <input type="text" placeholder="Password" />
        </label>
        <input className="btn" type="submit" value="Login" />
      </form>
      <div className="login-p">
        <p>
          Forgot account? <Link to="/Signup">Sign Up for GrowProfit </Link>
        </p>
        
      </div>
    </div>
  );
}

export default Login;
