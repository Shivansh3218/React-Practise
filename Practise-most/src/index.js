import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import  Headlines from './Components/Headlines'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
   <App/> 
  </BrowserRouter> 
/* < Headlines/> */
  /* </React.StrictMode> */
);

reportWebVitals();
