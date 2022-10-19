import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Parent from './Components/Parent';
import reportWebVitals from './reportWebVitals';
import Counter from './Components/Counter.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  
    <Counter/>
  /* </React.StrictMode> */
);


reportWebVitals();
