import React from "react";
import Child1 from "./Child1";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { createContext } from "react";
import { NameContext } from "../contexts/NameContext";
function Parent() {
  const { name, handleChange } = useContext(NameContext);
  return (
    <>
      <div>
        <input type="text" value={name} onChange={handleChange} />
        <h1>Parent</h1>
        <li>
          <Link to={"/child"}>Child</Link>
        </li>
      </div>
    </>
  );
}
export default Parent;
