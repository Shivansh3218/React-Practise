import React from 'react'
import { useContext } from 'react'
import {valueContext} from './Contextprovider'
export default function Child1() {
  let {value, setValue} = useContext(valueContext)
  return (
    <div>
      <select onChange={ (e)=>{
        setValue(e.target.value)
      }}>
        <option value="donut">donut</option>
        <option value="banana">banana</option>
        <option value="apple">apple</option>
        <option value="cherry">cherry</option>
      </select>

      <h1>{value}</h1>
    </div>
  )
}
