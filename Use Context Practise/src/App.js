import { useContext , createContext } from "react";
import Child from './Child'
let data = createContext()
let data1 = createContext()
function App() {
  let name = "Shivansh"
  let gender = "Male"
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <Child/>
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default App;
export {data,data1}