import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Application from './Application';
import Useref from './Components/Useref'
  import { NameProvider } from './contexts/NameContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <NameProvider>
 <BrowserRouter>
   <Application/> 
     {/* <Useref /> */}
 </BrowserRouter> 
  </NameProvider>
 
  /* </React.StrictMode> */
);


reportWebVitals();
