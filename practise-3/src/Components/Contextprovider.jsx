import React from 'react'
import { useState, createContext } from 'react'

let valueContext = createContext()

 function Contextprovider({children}) {
    let [value, setValue] = useState({ name:"", age:""})
    // let value = {name:"", age:""}
  return (
  <valueContext.Provider value={{value,setValue}}>
    {children}
  </valueContext.Provider>
  )
}
export {Contextprovider, valueContext}