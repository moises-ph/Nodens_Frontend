import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Loading, Logo, Nav, NavRes } from '../components'
import { HiMenu } from 'react-icons/hi'
import { Suspense, useState } from 'react'
import Footer from '../components/Footer/Footer'
import {lazily} from 'react-lazily';
import { VerifyUser } from '../pages'

const { Home, Login, Registro, Error, PasswordRecovery } = lazily(()=>import('../pages'));

export const InitialRouter = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const visibility = () => location.pathname.replace("/", "") === 'recovery' || location.pathname.replace("/", "") === 'verify' ? false : true 
  return (
    <>
    	<Router>
      {visibility() &&
      <>
        <NavRes />
        <header className="fixed w-full flex justify-between items-center text-slate-100 py-4 px-4 bg-slate-900 shadow-lg z-50 md:hidden">
          <Link to='/' className='cursor-pointer'><h1 className="text-2xl flex items-center"><Logo dimensions='h-7 w-7'/> Nodens</h1></Link>
          <button onClick={()=>setShowNav(true)}><HiMenu /></button>
        </header>
        <Nav inView={showNav} setShowNav={setShowNav} />
      </>
      }
        <main className='flex flex-col pt-4 '>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/registro" element={<Registro />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/recovery" element={<PasswordRecovery />}></Route>
              <Route path="/verify" element={<VerifyUser />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Routes>
          </Suspense>
        {visibility() && <Footer />}
        </main>
      </Router>
    </>
  );
};
