import React, { useState } from 'react'
import './Login.css'
import logo from '../../img/synca-logo.svg'

const Login = () => {

  const [loginForm, setLoginForm] = useState('login')

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const [emailError, setEmailError] = useState('Enter your email')
  const [errorPass, setErrorPass] = useState('Enter your password')

  return (
    <div className='authPage'>
      {loginForm === 'login' ? (
        <div className='authPage__login'>

          <img src={logo}/>

          <div>Please enter your data for login to system</div>

          <div>
            <div>Email</div>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div>
            <div>Password</div>
            <input
              type='password'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            ></input>
          </div>
          <button className='authPage__login_enter'>LogIn</button>
          <div className='authPage__login_line'></div>
          <div className='authPage__login_reg'>You don't have account? Please <button>Create</button></div>
        </div>
      ): loginForm === 'registration' ? (
        <></>
      ) : null}
    </div>
  )
}

export default Login