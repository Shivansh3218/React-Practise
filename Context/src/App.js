import { useContext } from "react";
import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";
import Child3 from "./Components/Child3";
import Child4 from "./Components/Child4";
import { Context } from "./Components/Context";

function App() {

  return (
    <div>
      <Context>
        <Child1 />
        <Child2 />
        <Child3 />
        <Child4 />
      </Context>
    </div>
  );
}
export default App;