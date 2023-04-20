import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Home, Login, Registro, Error } from '../pages'
import { Loading, Logo, Nav, NavRes } from '../components'
import { HiMenu } from 'react-icons/hi'
import { useState } from 'react'
import Footer from '../components/Footer/Footer'

export const InitialRouter = () => {
  const [showNav, setShowNav] = useState<boolean>(false)
  return (
    <>
    	<Router>
        {/* <Nav inView={showNav} setShowNav={setShowNav}/> */}
        <NavRes inView={showNav} setShowNav={setShowNav}/>
        <header className="fixed w-full flex justify-between items-center text-slate-100 py-4 px-4 bg-slate-900 shadow-lg z-50 md:hidden">
          <Link to='/' className='cursor-pointer'><h1 className="text-2xl flex items-center"><Logo dimensions='h-7 w-7'/> Nodens</h1></Link>
          <button onClick={()=>setShowNav(true)}><HiMenu /></button>
        </header>
        <Nav inView={showNav} setShowNav={setShowNav}/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/registro' element={<Registro />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
