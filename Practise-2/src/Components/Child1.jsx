import React from 'react'
import { useContext } from 'react'
import{NameContext} from '../contexts/NameContext'
import { FastForwardOutlined } from '@ant-design/icons'
export default function Child1(n) {
  const {name} = useContext(NameContext)
  return (
    <div>
        <h1>Child1 name = {name}</h1>
        <FastForwardOutlined  style={{color:"red"}}/>
        {console.log(NameContext)}
    </div>
  )
}
