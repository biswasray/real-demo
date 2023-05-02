import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'

export default function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
    </div>
  )
}
