import React from "react";
import { useEffect, useRef, useState } from "react";
export default function Useref() {
  let [name, setName] = useState("");
  let counter = useRef(0)
useEffect(()=>{
    console.log(counter)
    counter.current+=1
})
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
/>
        <h1>My name is {name}</h1>
        <h2>My count is {counter.current}</h2>
    </div>
  );
}
