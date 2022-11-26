import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './components/landing/Landing'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App