import React from 'react'
import Child1 from './Child1'

export default function ChildToParent() {

    const getName = (data)=>{console.log(data)    }
  return (
    <div>
    <Child1 value = {getName}/>
    </div>
  )
}
