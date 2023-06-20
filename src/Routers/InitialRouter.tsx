import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Loading, Logo, Nav, NavRes } from '../components'
import { HiMenu } from 'react-icons/hi'
import { Suspense, useState } from 'react'
import {lazily} from 'react-lazily';
import { VerifyUser } from '../pages'

const { Home, Login, Registro, Error, PasswordRecovery } = lazily(()=>import('../pages'));

export const InitialRouter = () => {
  const visibility = () => {
    return location.pathname.replace("/", "") === 'recovery' 
    || location.pathname.replace("/", "") === 'verify' 
    || location.pathname.replace("/", "") === 'login' 
    || location.pathname.replace("/", "") === 'registro' 
    ? false : true 
  }
  return (
    <>
    	<Router>
        <main className='flex flex-col' >
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
        </main>
      </Router>
    </>
  );
};



