import React from 'react'
import { Link } from 'react-router-dom'
import Parent from './Parent'
export default function Child1(n) {
  return (
    <div>
        <h1>Child1 name = {localStorage.getItem("name")}</h1>
    </div>
  )
}
