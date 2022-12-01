import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path='/page3' element={<Page3/>}/>
      </Routes>
    </div>
  )
}
