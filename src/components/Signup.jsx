import React from "react";
import growprofitlogo3 from "./images/growprofitlogo3.png";
import { useState } from "react";

function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The information you enter is as follow: ${name} ${email} ${password}`)
  }


  return (
    
    <div className="login">
      
      <div className="home1">
        <h1>Welcome!</h1>
        <img src={growprofitlogo3} alt="Logo" />
      </div>

      <form onSubmit={handleSubmit} className="loginform">
        <h3>SignUp to GrowProfit</h3>
        <label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full Name" />
        </label>
        <label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        </label>

        <label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="Password" />
        </label>

        <input className="btn" type="submit" value="SignUp" />
      </form>
    </div>
  );
}

export default Signup;
