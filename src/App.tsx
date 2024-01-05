import React from 'react'
import './App.css'
import SideNavigation from './components/SideNavigation'
import { Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <React.Fragment>
      <SideNavigation />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="*" element={<>No Page</>} />
      </Routes>
    </React.Fragment>
  )
}

export default App
