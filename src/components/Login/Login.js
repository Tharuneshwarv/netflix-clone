import React, { useRef, useState } from 'react'
import './Login.css'
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { login, populateUser } from '../../redux/reducers/userReducer';

function Login() {

    const [login, setLogin] = useState(true);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();

    const register = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userAuth) => dispatch(login({
            uid: userAuth.user.uid,
            email: userAuth.user.email
        })))
        .catch((e) => alert(e));
    }

    const logIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userAuth) => dispatch(login({
            uid: userAuth.user.uid,
            email: userAuth.user.email
        })))
        .catch((e) => alert(e));

    }

    return (
        <div className='login'>
            <h1>{login ? 'Log In' : 'SignUp'}</h1>
            <form>
                <input ref={emailRef} type='email' placeholder='Email'/>
                <input ref={passwordRef} type='password' placeholder='Password' />
                { login ?
                    (<button type='submit' onClick={(e) => logIn(e)}>Log In</button>):
                    (<button type='submit' onClick={(e) => register(e)}>Sign Up</button>)
                }
                
                
            </form>
            {login && 
            <h4>
                <span className='login__newToNetflix'>New to Netflix? </span> 
                <span className='login__link' onClick={(e) => setLogin(false)}> SignUp Now.</span>
            </h4>}
        </div>
    )
}

export default Login