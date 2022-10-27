import React from 'react'
import { useContext } from 'react'
import{NameContext} from '../contexts/NameContext'
export default function Child1(n) {
  const {name} = useContext(NameContext)
  return (
    <div>
        <h1>Child1 name = {name}</h1>
    </div>
  )
}
