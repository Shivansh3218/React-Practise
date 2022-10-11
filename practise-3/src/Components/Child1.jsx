import React from 'react'
import { useContext } from 'react'
import {abc} from './App.js'
export default function Child1() {
    let {val}= useContext(abc) 
    console.log("val",val)
  return (
    <div>
        <h1>This is Child 1</h1>
    </div>
  )
}
