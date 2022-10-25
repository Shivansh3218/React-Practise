import React from "react";
import Child1 from "./Child1";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { createContext } from "react";
let data = createContext();
function Parent() {
  let [name, setName] = useState("");
  return (
    <>   <data.Provider value={name}>
    <Child1 />
  </data.Provider>
  
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
          localStorage.setItem("name",name)
        }}
      />
      <h1>Parent</h1>
      <li>
        <Link to={"/child"}>Child</Link>
      </li>
    </div>
    </>
  );
}
export default Parent;
export { data };
