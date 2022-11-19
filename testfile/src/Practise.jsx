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
      for(let i=0;i<response.data.coins.length;i++){
        setCoinData([...coinData,response.data.coins[i].item])
        console.log(coinData)
      }
      }
      getdata();
    }, [coinData1]);


    if(coinData.length>0){
        setCoinData1([...coinData])
    }
    return (
  <>
  {/* {
    !(coinData.length === 0) ?
   ( coinData.map((item)=>{
      return(
       <div key={item.url}>
         <p>{item.name}</p>
        <img src= {item.image} alt="" />
       </div>
      )
    })):
    null
  } */}
  
  </>
    );
}
