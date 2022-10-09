import React from "react"
import {Link} from 'react-router-dom'
function Welcome(props){
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
           <h1> Welcome</h1>
        <h2>Hello Md</h2>
        
        </>
     
    )
}
export default Welcome