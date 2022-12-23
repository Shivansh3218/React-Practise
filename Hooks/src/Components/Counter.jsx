import React from "react";
import { useState } from "react";
export default function Counter() {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let [state, setState] = useState(true);
  // let incrementCounter = () => setCount(count + 1);
  // let decrementCounter = () => setCount(count - 1);
  
  let handleCount = () => {
   setCount(count+1)
   setCount(count+1)
   setCount(count+1)
   setCount1((x)=>x+1)
   setCount1((x)=>x+1)
   setCount1((x)=>x+1)
    }
  
  return (
    <div>
      <h1>{count}</h1>
      <h1>{count1}</h1>
      <button
        onClick={() => {
          handleCount();
        }}
      >
        Increment
      </button>
      <button
        className="name"
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
    </div>
  );

};