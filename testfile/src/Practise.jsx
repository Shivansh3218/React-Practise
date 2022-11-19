import React from 'react'
import {useState, useEffect } from 'react';
import axios from 'axios';


export default function Practise() {

    const [coinData, setCoinData] = useState([]);
    const [coinData1, setCoinData1] = useState([]);
    useEffect(() => {
      async function getdata() {
        var response = await axios.get(
          `https://api.coingecko.com/api/v3/search/trending `
        )
        setCoinData([...response.data.coins] );
        // console.log(response.data.coins)
      }
      getdata();
    }, []);

 
    return (
  <>
  {
    !(coinData.length === 0) ?
   ( coinData.map((i)=>{
      return(
       <div key={i.item.name}>
         <p>{i.item.symbol}</p>
       </div>
      )
    })):
    null
  }
  
  </>
    );
}
