import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
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
