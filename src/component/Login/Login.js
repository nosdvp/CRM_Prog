import React, { useState } from 'react'
import './Login.css'
import logo from '../../img/synca-logo.svg'

const Login = () => {

  const [loginForm, setLoginForm] = useState('login')

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [errorPass, setErrorPass] = useState(false)

  return (
    <div className='authPage'>
      {loginForm === 'login' ? (
        <div className='authPage__login'>
          <img src={logo}/>
          <p className='authPage__login_title'>Please enter your data for login to system!</p>

          <div className='authPage__login_emailInputBlock'>
            {emailError === false ? <p className='authPage__login_emailInputBlock_emailDefault'>Email</p> : <p className='authPage__login_emailInputBlock_emailError'>Email</p>}
            <div className={emailError === false ? 'authPage__login_emailInputBlock_inputDefault' : 'authPage__login_emailInputBlock_inputError'}>
              <div className='authPage__login_emailInputBlock_inputDefault_emailImg'></div>
              <input
                placeholder={emailError === false ? 'Enter your email' : 'Please enter your email'}
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              >
              </input>
            </div>
          </div>

          <div className='authPage__login_passInputBlock'>
            {errorPass === false ? <p className='authPage__login_passInputBlock_passDefault'>Password</p> : <p className='authPage__login_emailInputBlock_passError'>Password</p>}
            <div className={errorPass === false ? 'authPage__login_passInputBlock_inputDefault' : 'authPage__login_passInputBlock_inputError'}>
              <div className='authPage__login_passInputBlock_inputDefault_passImg'></div>
              <input
                placeholder={errorPass === false ? 'Enter your pass' : 'Please enter your pass'}
                type='pass'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              >
              </input>
            </div>
          </div>
          <button 
            className='authPage__login_enter'
            onClick={() => {
              email === '' && setEmailError(true)
              pass === '' && setErrorPass(true)
            }}
          >LogIn</button>
          <div className='authPage__login_line'></div>
          <div className='authPage__login_reg'>You don't have account? Please <button onClick={() => setLoginForm('registration')}>Create</button></div>
        </div>
      ): loginForm === 'registration' ? (
        <div className='authPage__login'>
          <img src={logo}/>
          <p className='authPage__login_title'>Please enter your data for registration!</p>

          <div className='authPage__login_emailInputBlock'>
            {emailError === false ? <p className='authPage__login_emailInputBlock_emailDefault'>Email</p> : <p className='authPage__login_emailInputBlock_emailError'>Email</p>}
            <div className={emailError === false ? 'authPage__login_emailInputBlock_inputDefault' : 'authPage__login_emailInputBlock_inputError'}>
              <div className='authPage__login_emailInputBlock_inputDefault_emailImg'></div>
              <input
                placeholder={emailError === false ? 'Enter your email' : 'Please enter your email'}
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              >
              </input>
            </div>
          </div>

          <div className='authPage__login_passInputBlock'>
            {errorPass === false ? <p className='authPage__login_passInputBlock_passDefault'>Password</p> : <p className='authPage__login_emailInputBlock_passError'>Password</p>}
            <div className={errorPass === false ? 'authPage__login_passInputBlock_inputDefault' : 'authPage__login_passInputBlock_inputError'}>
              <div className='authPage__login_passInputBlock_inputDefault_passImg'></div>
              <input
                placeholder={errorPass === false ? 'Enter your pass' : 'Please enter your pass'}
                type='pass'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              >
              </input>
            </div>
          </div>
          <button 
            className='authPage__login_enter'
            onClick={() => {
              email === '' && setEmailError(true)
              pass === '' && setErrorPass(true)
            }}
          >Registration</button>
          <div className='authPage__login_line'></div>
          <div className='authPage__login_reg'>You have account? Please <button onClick={() => setLoginForm('login')}>LogIn</button></div>
        </div>
      ) : null}
    </div>
  )
}

export default Login