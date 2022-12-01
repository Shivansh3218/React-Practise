import React, { useState } from 'react'

export default function Login() {
let[isSignup,setSignup]=useState(false)

let handlesubmit= ()=>{
    !isSignup?setSignup(true):setSignup(false)
}

  return(
        <> 
            {!isSignup?
 <div className="input">
 <div className="username_field inactive">
   <label htmlFor="Username ">Username*:&nbsp;</label>
   <br />
   <input type="text" name="" id="" />
 </div>
 <div className="email-field">
   <label htmlFor="email">Email*:&nbsp;</label>
   <br />
   <input type="text" />
 </div>
 <div className="password-field">
   <label htmlFor="password">Password*:&nbsp;</label>
   <br />
   <input type="password" />
 </div>
 <div className="buttons_login_signup">
   <button className="login">Login</button>

   <button
     className="signup"
     onClick={()=>{
        handlesubmit()
     }}
     >Not a User ? Sign up</button>
     </div>   
  </div>
  :
  <div className="input">
      <div className="username_field">
        <label htmlFor="Username ">Username*:&nbsp;</label>
        <br />
        <input type="text" name="" id="" />
      </div>
      <div className="email-field">
        <label htmlFor="email">Email*:&nbsp;</label>
        <br />
        <input type="text" />
      </div>
      <div className="password-field">
        <label htmlFor="password">Password*:&nbsp;</label>
        <br />
        <input type="password" />
      </div>
      <div className="buttons_login_signup">
        <button className="login">Login</button>
        <button
     className="signup"
     onClick={()=>{
        handlesubmit()
     }}
     >Already a User ? Login</button>
</div>
</div>
}
  </>
  )

    }

