import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook} from 'react-icons/bs'
import {AiFillGoogleCircle, AiOutlineInstagram} from 'react-icons/ai'
import style from './register.module.css'

function Register() {
  return (
    <>
      <main className={style.main}>
        <div className={style.container_register}>
            <div className={style.register}>
              <h2 className={style.h2sign}>Sign Up</h2>
              <input type="text" className={style.email_box} placeholder="Email" />
              <input type="text" className={style.password_box} placeholder="Password" />
              <input type="text" className={style.password} placeholder="Repeat password" />
              <div className={style.check}>
                  <input type="checkbox" className={style.checkbox} /><p>Remember Me</p>
              </div>
              <h4>Or Sign with social networks</h4>
              <div className={style.icons}>
                <Link to =""><BsFacebook className={style.facebook}/></Link>
                <Link to =""><AiFillGoogleCircle className={style.google}/></Link>
                <Link to =""><AiOutlineInstagram className={style.instagram}/></Link>
              </div>
              <input type="button" className={style.button_box} value="Sign Up"/>
            </div>
        </div>
      </main>
    </>
  )
}

export default Register