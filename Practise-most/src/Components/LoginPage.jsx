import React, { useState } from "react";
import Welcome from "./Welcome";
import {Link} from 'react-router-dom'

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    const newData = { username: username, password: password };

  };
  return (
  <>
       <ul>
          <li>
            <Link to="/Hook">Hook</Link></li>
            <li><Link to="/">Checkbox</Link></li>
            <li><Link to="/Keyboard">Keyboard</Link></li>
            <li> <Link to="/LoginPage">LoginPage</Link></li>
            <li> <Link to="/Useeffect">Useeffect</Link></li>
            <li> <Link to="/Welcome">Welcome</Link></li>
        </ul>
  <h1>LOGIN PAGE</h1> 
   <form action="./Welcome.jsx">
    <label htmlFor="Username" >Enter Username</label>
    <input className="user" onChange={(e)=>{
      setUsername(e.target.value)
    }} type="text" />
    <label htmlFor="password">Enter Password</label>
    <input type="password" />
    <button onClick={(e)=>{
        
    }}> submit</button>

  </form>
    </>
  );
}
