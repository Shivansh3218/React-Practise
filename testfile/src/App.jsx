// import './App.css';
// import React from 'react';
// import {useState, useEffect } from 'react';
// import axios from 'axios';
// function App() {

//   const [coinData, setCoinData] = useState([]);
//   useEffect(() => {
//     async function getdata() {
//       var response = await axios.get(
//         `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=dogecoin%2C%2bitcoin&category=cryptocurrency&order=market_cap_desc&per_page=100&page=1&sparkline=false `
//       );
//       setCoinData([ ...response.data ]);
//       console.log(response.data);
//     }
//     getdata();
//   }, []);

//   return (
// <>
// {
//   !(coinData.length === 0) ?
//  ( coinData.map((item)=>{
//     return(
//      <div key={item.symbol}>
//        <p>{item.name}</p>
//       <img src= {item.image} alt="" />
//      </div>
//     )
//   })):
//   null
// }

// </>
//   );
// }

// export default App;








import React from 'react';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './login';
import Mainpage from './main';

function App() {
const [user] = useAuthState(auth);
return (
	user ? <Mainpage/> : <Login/>
);
}

export default App;
