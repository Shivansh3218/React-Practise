import React,{useState} from "react";
// import { LoginPage } from "./LoginPage";

export function LoginPage(){

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    // const [datas,setDatas]=useState("");

    // const getUsername=localStorage.getItem("userData");
    // const getPassword=localStorage.getItem("userpswd")

    console.log(username)
    console.log(password)

    const handleSubmit=(e)=>{
        e.preventDefault();
        // const newData={username:username,password:password};
        // setDatas([...datas,newData])
        // console.log(datas);
        // if(username.current.value===username && password.current.value===password){
        //     localStorage.setItem("userData",username)
        //     localStorage.setItem("userpswd",password)
        // }
    }


    return(
        <>
        <div>

          
        
            <div >
                <form  onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Login</legend>
                    <div>
                        <label htmlFor="username">Username : </label><br />
                        <input type="text" id="username" placeholder="Enter username"
                        onChange={(e)=>setUsername(e.target.value)} value={username}
                        />
                    </div>
                    <div>
                        <label htmlFor="pswd">Password : </label><br />
                        <input type="password" id="pswd" placeholder="Enter password" 
                        onChange={(e)=>setPassword(e.target.value)} value={password}
                        />
                    </div>
                    <div className="btn_div">
                    <button type="submit" className="submit_btn">Submit</button>
                    </div>
                    </fieldset>
                </form>
            </div>
           
            </div>
        </>
    )
}