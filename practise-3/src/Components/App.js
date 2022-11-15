import React ,{ createContext, useState} from "react";
import Child1 from './Child1'
import Child2 from './Child2'
function App() {
  return (
      <div>
        <h1>App Component</h1>
        <Child1/>
        <Child2 />
      </div>
   
  );
}

export default App;
