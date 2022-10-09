import React, { useState } from "react";
import "./Hook.css";
export default function Hook() {
  let [name, setName] = useState({
    firstname: "",
    lastname: "",
    email: "",
    team: "",
  });
  let [para, setpara] = useState([]);

  let addpara = (e) => {
    e.preventDefault();
    setpara([...para, name]);
    setName({firstname:"",lastname:"",email:"",team:""})
    console.log(para)
  };
  return (
    <><h1>HOOK </h1>
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
    </>
  );
}
