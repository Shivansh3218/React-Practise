import React from 'react'
import { transfer } from '../App'
import { useContext } from 'react'
export default function Child4() {
  const data = useContext(transfer)
  return (
    <div>Child4 name is {data}</div>
  )
}
