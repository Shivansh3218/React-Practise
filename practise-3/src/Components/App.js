import React ,{ createContext, useState} from "react";
import Child1 from './Child1'
import Child2 from './Child2'
export let abc = createContext()
function App() {
  let [name,setName]= useState("Shivansh")
  return (
    <abc.Provider value={{name:name}}>
      <div>
        <h1>App Component</h1>
        <Child1/>
        <Child2 />
      </div>

    </abc.Provider>
   
  );
}

export default App;
