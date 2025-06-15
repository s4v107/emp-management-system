import { useState } from 'react'
import React from 'react'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import EmployeeComponent from './components/EmployeeComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
       <Routes>
          {/* {http://localhost:3000} */}
          <Route path='/' element = { <ListEmployeeComponent/>}/>
          {/* {http://localhost:3000/employees} */}
          <Route path='/employees' element = { <ListEmployeeComponent/>}/>
          {/* {http://localhost:3000/add-employee} */}
          <Route path='/add-employee' element = { <EmployeeComponent/>}/>
          {/* {http://localhost:3000/edit-employee/1} */}
          <Route path='/edit-employee/:id' element = { <EmployeeComponent/>}/>
        </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
