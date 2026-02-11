import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import Service from './Pages/Service'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        
      </Routes>
    </div>
  )
}

export default App