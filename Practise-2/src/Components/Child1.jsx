import React from 'react'
import { createContext, useContext } from 'react'
import { Link } from 'react-router-dom'
import Parent from './Parent'
import{NameContext} from '../contexts/NameContext'
export default function Child1(n) {
  const {name,handleChange} = useContext(NameContext)
  return (
    <div>
        <h1>Child1 name = {name}</h1>
    </div>
  )
}
