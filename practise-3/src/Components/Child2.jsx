import React from 'react'
import { useContext } from 'react'
import { valueContext } from './Contextprovider'

export default function Child2() {
  let value = useContext(valueContext)
  return (
    <div>
        <h1>This is Child 2 and he loves {value.value}</h1>
       
    </div>
  )
}
