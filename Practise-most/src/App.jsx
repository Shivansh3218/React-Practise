import React from 'react'
import Checkbox from './Components/Checkbox'
import Hook from './Components/Hook'
import Keyboard from './Components/Keyboard'
import { LoginPage } from './Components/LoginPage'
import Todo from './Components/Todo'
import { Route, Routes } from 'react-router-dom'
import Welcome from './Components/Welcome'
import Useeffect from './Components/Useeffect'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Checkbox/>}/>
      <Route path='/Hook' element={  <Hook />}/>
      <Route path='/Keyboard' element={<Keyboard/>}/>
      <Route path='/LoginPage' element={<LoginPage/>}/>
      <Route path='/Todo' element={<Todo/>}/>
      <Route path='/Welcome' element={<Welcome/>}/>
      <Route path='/Useeffect' element={<Useeffect/>}/>
    </Routes>
  )
}
