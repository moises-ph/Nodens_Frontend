import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook} from 'react-icons/bs'
import {AiFillGoogleCircle, AiOutlineInstagram} from 'react-icons/ai'
import style from './login.module.css'

function Login() {
  return (
    <>
      <main className={style.main}>
        <div className={style.container_login}>
          <div className={style.login}>
            <h2>LOGIN TO YOUR ACCOUNT</h2>
            <p>Login using social networks</p>
            <div className={style.icons}>
              <Link to="/"><BsFacebook className={style.facebook}/></Link>
              <Link to="/"><AiFillGoogleCircle className={style.google}/></Link>
              <Link to="/"><AiOutlineInstagram className={style.instagram}/></Link>
            </div>
            <h3>OR</h3>
            <input type="text" className={style.email} placeholder=" Email" />
            <input type="text" className={style.password} placeholder=" Password" />
            <Link to="/" className={style.forgot}>Forgot your password?</Link>
            <input type="button" className={style.login_button} value="Log in" />
          </div>
        </div>
      </main>
    </>
  )
}

export default Login