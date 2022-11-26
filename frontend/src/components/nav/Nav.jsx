import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import style from './nav.module.css'
import {IoEnter} from 'react-icons/io5'
import {BsFillPersonPlusFill} from 'react-icons/bs'

const Nav = () => {
  const nav = useRef();
  const [color, setColor] = useState(style.clear);


  console.log(window.innerHeight);

  useEffect(()=>{
    const change = event => {
      console.log(window.scrollY);
      if(window.scrollY> window.innerHeight*0.85){
        setColor(style.dark)
      }
      else {
        setColor(style.clear)
      }
    }
    window.addEventListener('scroll', change)
    return ()=>{ window.removeEventListener('scroll', change)}
  },[])

  

  return (
    <>
      <nav className={`${style.nav} ${color}`}>
        <h2><Link className={style.title} to='/'>NODENS</Link></h2>
        <div className={style.links}>
          <Link className={style.link} to='/login'>Sign In <BsFillPersonPlusFill /></Link>
          <Link className={style.link} to='/registro'>Sign Up <IoEnter /></Link>
        </div>
      </nav>
    </>
  )
}

export default Nav