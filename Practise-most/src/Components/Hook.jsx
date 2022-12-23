import React, { useState } from "react";
import "./Hook.css";
import { ThemeContext } from "./Context";
import {Link} from 'react-router-dom'
import { useContext } from "react";

export default function Hook() {
  const {theme,setTheme} = useContext(ThemeContext)
  const [pageTheme,setPageTheme] =  useState(theme.light)
  let [name, setName] = useState({
    firstname: "",
    lastname: "",
    email: "",
    team: "",
  });
  let [para, setpara] = useState([]);
  const [count,setCount ]=  useState(0)

  let addpara = (e) => {
    e.preventDefault();
    setpara([...para, name]);
    setName({firstname:"",lastname:"",email:"",team:""})
    console.log(para)
  };


  const handleTheme = ()=>{
    console.log("theme")
    count==0? setCount(1):setCount(0)
    count==0? setPageTheme(theme.dark):setPageTheme(theme.light)
   }
   
  // const handleTheme = ()=>{
  //   console.log(theme.dark)
  // }
  return (
    < div style={pageTheme}>
      <button onClick={handleTheme}>Toggle Theme</button>
         <ul>
          <li>
            <Link to="/Hook">Hook</Link></li>
            <li><Link to="/">Checkbox</Link></li>
            <li><Link to="/Keyboard">Keyboard</Link></li>
            <li> <Link to="/LoginPage">LoginPage</Link></li>
            <li> <Link to="/Useeffect">Useeffect</Link></li>
            <li> <Link to="/Welcome">Welcome</Link></li>
        </ul>
    <h1>HOOK </h1>
      <form>
        <div className="form_class">
            <h3>First Name</h3>
          <input value={name.firstname}
            type="text"
            onChange={(e) => {
              setName({ ...name,firstname: e.target.value });
            }}
          />  <h3>last Name</h3>
          <input
          value={name.lastname}
            type="text"
            onChange={(e) => {
              setName({ ...name,lastname: e.target.value });
            }}
          />
          <h3>email</h3>
          <input
          value={name.email}
            type="text"
            onChange={(e) => {
              setName({...name, email: e.target.value });
            }}
          />
          <h3>team</h3>
          <input
            type="text"
            value={name.team}
            onChange={(e) => {
              setName({...name, team: e.target.value });
            }}
          />
          <button onClick={addpara}>Submit</button>
        </div>
      </form>

      {para.map((item) => {
        return (
               
          <div className="content">
            <p>{item.firstname}</p>
            <p>{item.lastname}</p>
            <p>{item.email}</p>
            <p>{item.team}</p>
            <button onClick={(e)=>{
                
            }}>edit</button>
            <button   onClick={() => {
              let filteredItems = para.filter((value) => value !== item);
              setpara([...filteredItems])
             }}>delete</button>
          </div>
        );
      })}
    </div>
  );
}
