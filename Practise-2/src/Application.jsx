import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Child1 from './Components/Child1'
import Parent from './Components/Parent'
import App from './Components/App'
import Tabs from'./Components/Tabs'
export default function Application() {
  return (
    <div>
     <Routes>
     <Route path='/' element={<Tabs/>}/>
      <Route path='/child' element={<Child1/>}/>
      <Route path='/parent' element={<Parent/>}/>
      <Route path='/app' element={<App/>}/>
     </Routes>
    </div>
  )
}
