import React, { useState } from "react";
import { useCallback } from "react";
import UseCallbackChild from "./UseCallbackChild";

export default function UseCallback() {
  let [count1, setCount1] = useState(0);
  let [count, setCount] = useState([]);
  const handleCount1 = () => {
    setCount1((count) => count + 1);
  };

  let fun = useCallback(() => {
    console.log("Coming from parent");
  }, [count]);
  
  return (
    <div>
      <UseCallbackChild value={count} fun={fun} />
      <h1>{count1}</h1>
      <button onClick={handleCount1}>Increment</button>
    </div>
  );
}
