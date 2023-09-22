import React, { useState } from 'react'
import './LoginPage.css'
import Login from '../../components/Login/Login'

function LoginPage() {
  const [LoginComponent, setLoginComponent] = useState(false);
  return (
    <div className='loginpage'>
        <div className='loginpage__header'>
            <img className='loginpage__logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='logo'/>
            <button className='loginpage__button' onClick={() => setLoginComponent(true)}>Log In</button>
        </div>
        <div className='loginpage__gradient'></div>
        <div className='loginpage__body'>
          {
            LoginComponent ? (
              <Login />
            ):(
              <>
                <h1>Unlimited movies, TV shows and more</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='loginpage__input'>
                  <form>
                    <input type='email' placeholder='Email Address'/>
                    <button className='loginpage__getStarted'>GET STARTED</button>
                  </form>
                </div>
              </>
            )
          }
        </div>
    </div>
  )
}

export default LoginPage