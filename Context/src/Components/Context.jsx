import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
const InputContext = createContext()


function Context({children}) {
let [input, setInput]= useState("Etherum")


  return (
    <div>
        <InputContext.Provider value={{input, setInput}}>
        {children}
        </InputContext.Provider>
    </div>
  )
}
export {InputContext, Context}