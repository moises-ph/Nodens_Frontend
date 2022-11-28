import React, { lazy, Suspense } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/footer/Footer'
import Landing from './components/landing/Landing'

const Nav = lazy(()=>import('./components/nav/Nav'))

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Landing />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App