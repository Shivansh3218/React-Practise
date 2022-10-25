import React from 'react'
import Child1 from './Child1'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Parent() {
  let [name,setName] = useState("")
  const handlesubmit =(e)=>{
    setName(e.target.value)
    localStorage.setItem("name",name)
  }
  return (
    <div>
      <input type="text" onChange={(e)=>{
       handlesubmit(e)
            }} />
        <h1>Parent</h1>
        <li><Link to={'/child'}>Child</Link></li>
    </div>
    )
}
