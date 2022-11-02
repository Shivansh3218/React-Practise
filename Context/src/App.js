import { createContext } from "react";
import Child1 from './Components/Child1'
import { useState } from 'react'

let transfer = createContext()
function App() {
  const [data, setData] = useState([])

  return (
    <div>
      <input type="text" value={data} onChange={(e) => {
        setData(e.target.value)
      }} />
      <transfer.Provider value={data}>
        <Child1 />
      </transfer.Provider>
    </div>
  );
}

export default App;
export { transfer }