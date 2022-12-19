import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Application from './Application';
import UseRef2 from './Components/UseRef2'
  import { NameProvider } from './contexts/NameContext';
import UseMemo from './Components/UseMemo';
import UseCallback from './Components/UseCallback';
import Timer from './Components/Timer';
import UseReducer from './Components/UseReducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <NameProvider>
 <BrowserRouter>
   {/* <Application/>  */}
     <UseRef2 />
     <UseMemo/>
     {/* <Timer/> */}
     {/* <UseReducer/> */}
     <UseCallback/>
 </BrowserRouter> 
  </NameProvider>
 
  /* </React.StrictMode> */
);


reportWebVitals();
