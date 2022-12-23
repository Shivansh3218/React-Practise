import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import  Headlines from './Components/Headlines'
import App from './App';
import { Context } from './Components/Context';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Context>
  <BrowserRouter>
   <App/> 
  </BrowserRouter> 
  </Context>
/* < Headlines/> */
  /* </React.StrictMode> */
);

reportWebVitals();
