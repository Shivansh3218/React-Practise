import React, { useState } from "react";
import Welcome from "./Welcome";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    const newData = { username: username, password: password };

  };
  return (
  <>
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
