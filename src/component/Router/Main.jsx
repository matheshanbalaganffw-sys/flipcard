import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navlink from './Navlink'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Company from './Company'
import Team from './Team'

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Navlink/>}>
          <Route index element={<Home/>}/>

          <Route path='about' element={<About/>}>
            <Route path='team' element={<Team/>}/>
            <Route path='company' element={<Company/>}/>
          </Route>

          <Route path='contact' element={<Contact/>}/>

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default Main