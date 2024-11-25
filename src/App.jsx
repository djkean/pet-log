import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Nav } from './components/Nav/Nav.jsx'
import { PetsPage } from './pages//pets/pets.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/pets' element={<PetsPage/>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
