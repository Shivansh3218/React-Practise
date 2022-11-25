import React, {useState} from 'react'
export default function Counter() {
    
let [count, setCount]= useState(0)
let [count2, setCount2]= useState(0)

const handleIncrement  = ()=>{

setCount(count+1)
setCount(count+1)
setCount2((x)=>x+1)
setCount2((x)=>x+1)

}
const showCount = ()=>{
    console.log(count)
    console.log(count2)
}
  return (
    <div>
        <button onClick={handleIncrement}>Click </button>
        <button onClick={showCount}>Show</button>
    </div>
  )
}
