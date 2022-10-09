import React,{useState} from "react";
import {Link} from "react-router-dom"

let  Keyboard = ()=>{

    let[btn,setBtn]= useState("")
    let add =(e)=>{
        setBtn(btn+e.target.innerHTML)
    }
    return(
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
        <h1>KEYBOARD</h1>
        <input type="text" value={btn}/>
        <button onClick={add}>q</button>
        <button onClick={add}>w</button>
        <button onClick={add}>e</button>
        <button onClick={add}>r</button>
        <button onClick={add}>t</button>
        <button onClick={add}>u</button>
        <button onClick={add}>i</button>
        <button onClick={add}>o</button>
        <button onClick={add}>p</button>
        <button onClick={add}>a</button>
        <button onClick={add}>s</button>
        <button onClick={add}>d</button>
        <button onClick={add}>f</button>
        <button onClick={add}>g</button>
        <button onClick={add}>h</button>
        <button onClick={add}>j</button>
        <button onClick={add}>k</button>
        <button onClick={add}>l</button>
        <button onClick={()=>{
          setBtn(btn.slice(0,-1))
        }}>BackSpace</button>
        </>
    )
}

export default Keyboard