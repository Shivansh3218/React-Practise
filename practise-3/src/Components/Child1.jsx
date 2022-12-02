import React from 'react'
import { useContext } from 'react'
import {valueContext} from './Contextprovider'
export default function Child1() {
  let {value, setValue} = useContext(valueContext)
  const handleName =()=>{
  setValue(value.name = "Shivansh")
  console.log(value)
  }
  return (
    <div>
      <h1>Hello Child 1</h1>
      <button onClick={handleName} >name</button>
    </div>
  )
}
