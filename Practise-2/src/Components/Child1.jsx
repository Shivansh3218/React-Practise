import React from 'react'
import { createContext, useContext } from 'react'
import { Link } from 'react-router-dom'
import Parent from './Parent'
export default function Child1(n) {
  let user = useContext(user)
  return (
    <div>
        <h1>Child1 name = {localStorage.getItem("name")}</h1>
    </div>
  )
}
