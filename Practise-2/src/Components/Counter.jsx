import React from "react";
import { useState } from "react";
export default function Counter() {
  let [count, setCount] = useState(0);
  let [state, setState] = useState(true);
  let incrementCounter = () => setCount(count + 1);
  let decrementCounter = () => setCount(count - 1);
  
  let handleCount = () => {
    if (state === true) {
      if (count < 10) {
        incrementCounter();
      }
      if (count === 10) {
        decrementCounter();
        setState(false);
        document.querySelector("button").innerHTML = "decrement";
      }
    }
    if (state === false) {
      if (count < 10) {
        decrementCounter();
      }
      if (count === 0) {
        incrementCounter();
        setState(true);
        document.querySelector("button").innerHTML = "Increment";
      }
    }
  };
  return (
    <div>
      <h1>{count}</h1>
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
}
