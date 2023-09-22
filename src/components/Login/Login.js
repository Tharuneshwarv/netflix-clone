import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='login'>
        <h1>Log In</h1>
        <form>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password' />
            <button type='submit'>Log In</button>
        </form>
        <h4>
            <span className='login__newToNetflix'>New to Netflix? </span> 
            <span className='login__link'> SignUp Now.</span>
        </h4>
    </div>
  )
}

export default Login