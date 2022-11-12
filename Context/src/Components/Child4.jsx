import React from 'react'
import { transfer } from '../App'
import { useContext } from 'react'
import { InputContext } from './Context'

export default function Child4() {
  let data = useContext(InputContext)

  return (
    <div>this is Child 4 The data must Show here  {data.input}</div>
  )
}
