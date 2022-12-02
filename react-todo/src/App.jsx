import "./App.css";
import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([]);
  const [item, setItem] = useState("");

  const handleItem = (e) => setItem(e.target.value);
  const handleFruit = () => {
    console.log(fruits);
    setFruits([...fruits, item]);
  };

  const handleDelete = (id) => {

    const newFruits = fruits.filter((ele,index) => {
      return id !== index;
    });
    setFruits(newFruits);
  };

  return (
    <div className="App">
      <input type="text" value={item} onChange={handleItem} />
      <button onClick={handleFruit}>submit</button>
      <br />
      <br />
      <div style={{ backgroundColor: "#000", color: "white" }} className="data">
        {fruits.map((fruit, index) => {
          console.log(fruit);
          return (
            <div key={index} className="fruit" style={{ display: "flex" }}>
              <h1>{fruit}</h1>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
