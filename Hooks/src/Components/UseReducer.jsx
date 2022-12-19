import React, { useReducer } from "react";

export default function UseReducer() {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action === "increment") {
      return state + 1;
    }
    if (action === "decrement") {
      return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increment")}> increment </button>
      <button onClick={() => dispatch("decrement")}>decrement </button>
    </div>
  );
}
