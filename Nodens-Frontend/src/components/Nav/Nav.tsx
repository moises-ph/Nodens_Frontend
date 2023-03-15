import React, { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import {FaHome, FaShoppingBag} from 'react-icons/fa'
import {AiOutlineUserAdd} from 'react-icons/ai'

interface NavBar {
    inView: boolean;
    setShowNav:  Dispatch<SetStateAction<boolean>>
  }

const Nav:React.FC<NavBar> = ({inView, setShowNav}) => {
  if(!inView) return null
  return (
    <div className="z-[100] w-full h-screen fixed flex flex-col justify-start items-end backdrop-blur-sm inset-0 pr-4 pt-4" onClick={()=>setShowNav(false)}>
        <nav className="bg-slate-700 h-3/5 w-5/6 flex flex-col items-start gap-5 pt-4 pl-4 rounded-xl sm:w-3/5 md:w-2/4 lg:w-1/4">
          <div className="h-[10%] w-full flex items-center">
            <Link className="h-[10%] w-11/12 flex items-center gap-2 rounded-lg text-slate-100 text-xl py-4 pl-2 transition-colors duration-300 ease-linear hover:bg-slate-400" to="/"><FaHome /> Home</Link>
            <button className="text-2xl text-slate-100 place-self-end mb-4" onClick={()=>setShowNav(false)}>X</button>
          </div>
          <Link className="h-[10%] w-11/12 flex items-center gap-2 rounded-lg text-slate-100 text-xl py-4 pl-2 transition-colors duration-300 ease-linear hover:bg-slate-400" to="/products"><AiOutlineUserAdd /> Registro</Link>
        </nav>
      </div>
  )
}

export default Nav