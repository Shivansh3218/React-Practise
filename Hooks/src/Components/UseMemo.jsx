import React from 'react'
import { useState, useMemo } from 'react'
export default function UseMemo() {
let [count1, setCount1]= useState(0)
let [count2, setCount2]= useState(0)

const handleCount1 = ()=>{
    setCount1((count)=>count+1)
    console.log(count1, "this is count 1")
}
// const isEven = ()=>{                  //Making my app wait because this function is taking time
//     for(let i=0;i<1000000000;i++){}
//     console.log("even function runs", count1)
//     return count1 %2 ===0
// }

//USEMEMO is used now

const isEven = useMemo(()=>{
    for(let i=0;i<1000000000;i++){}
    console.log("this is memo")
    return count1%2===0
},[count1])

//Now this prevents the function to run unless only the count1 state changes.

const handleCount2 = ()=>{
    setCount2((count)=>count+1)
    console.log(count2, "this is count 2")
}
  return (
   <>
        <h1>{count1 } </h1><h2>{ isEven? <p>Even</p>:<p>Odd</p>}</h2>
        <button onClick={handleCount1}>Counter 1 increase</button>
        <h2>{count2}  </h2>
        <button onClick={handleCount2}>Counter 2 increase</button>
    </>
  )
}
