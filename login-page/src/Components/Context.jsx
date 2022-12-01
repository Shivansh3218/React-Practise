import { useState, createContext } from "react";
import React from 'react'

let formValue = createContext()

export default function Context({children}) {
    let [info, setInfo] = useState ({
        email:"",
        password:"",
        address:"",
        firstname:"",
        lastname:"",
        phone:"",
        conditions:false
    })
  return (
    <div>
        <formValue.Provider value={{info, setInfo}}>
            {children}
        </formValue.Provider>
    </div>
  )
}
export {formValue}
