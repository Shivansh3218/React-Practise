import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import Child2 from './Child2'
import { InputContext } from './Context'

export default function Child1() {
  let {input,setInput} = useContext(InputContext)
  let [data,setData]= useState("")
  let [string, setString] = useState("")
  return (
    <div>
        This is Child 1 Data transefered from here
        <input type="text" value={string} onChange={(e)=>{
          setString(e.target.value)
        }} />
        {/* {console.log(input)} */}
        <button onClick={()=>{
          setInput(string)
        }}>Transfer</button>
    </div>
  )
}
