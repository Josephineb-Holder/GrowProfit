import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";


function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The information you enter is as follow: ${email} ${password}`)
  }


  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="loginform">
        <h3>Login in to GrowProfit</h3>
        <label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        </label>
        <label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="Password" />
        </label>
        <input className="btn" type="submit" value="Login" />
      </form>
      <div className="login-p">
        <p>
          Forgot account? <Link className="link" to="/Signup">Sign Up for GrowProfit </Link>
        </p>
        
      </div>
    </div>
  );
}

export default Login;
