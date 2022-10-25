import React from 'react'
import { useContext } from 'react'
import {data,data1} from './App'
export default function Child() {
    let name = useContext(data)
    let gender = useContext(data1)
  return (
    <div>
        <h1>My Name is {name} and my gender is  {gender} </h1>
    </div>
  )
}
