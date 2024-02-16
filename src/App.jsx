import React from 'react'

import { Route, Routes } from "react-router-dom"

import LandingPage from "./pages/LandingPage"

import RegForm from "./pages/RegForm"

import RegTable from "./pages/RegTable"


function App() {
  

  return (
    <>
    
     <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="register" element={<RegForm/>}/>
      <Route path="table" element={<RegTable/>}/>
     </Routes>
    </>
  )
}

export default App
