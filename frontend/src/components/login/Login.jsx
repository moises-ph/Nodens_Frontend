import React from 'react'
import { Link } from 'react-router-dom'
import style from './login.module.css'

function Login() {
  return (
    <>
      <main class="main">
        <div class="container-login">
          <div class="login">
            <h2>LOGIN TO YOUR ACCOUNT</h2>
            <p>Login using social networks</p>
            <div class="icons">
              <Link to="/"><i class="fa-brands fa-facebook"></i></Link>
              <Link to="/"><i class="fa-brands fa-google-plus"></i></Link>
              <Link to="/"><i class="fa-brands fa-instagram"></i></Link>
            </div>
            <h3>OR</h3>
            <input type="text" class="email-box" placeholder=" Email" />
            <input type="text" class="password-box" placeholder=" Password" />
            <Link to="/" class="forgot-box">Forgot your password?</Link>
            <input type="button" class="login-button" value="Log in" />
          </div>
        </div>
      </main>
    </>
  )
}

export default Login