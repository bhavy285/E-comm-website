import React from 'react'
import { Link , useHistory} from 'react-router-dom'
import './Login.css'
import { useState } from 'react';
import {auth} from './firebase'

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const SignIn = e =>
    {
            e.preventDefault();
            auth
            .signInWithEmailAndPassword(email , password)
            .then((auth)=>
                {
                    history.push('/')
                })
            .catch(error => alert(error.message))
    }
   const register = e =>
   {
       e.preventDefault();
       auth
        .createUserWithEmailAndPassword(email , password)
        .then((auth)=>
        {
            // it is suceesfully created new user with email and password 
            console.log(auth);
            if(auth)
            {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
   }
  
    return (
        <div className="login">
            <Link to="/">
            <img  className="login_logo"src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" srcset="" />
            </Link>
            <div className="login_container">
                <h1 className='h1'>Sign In</h1>
                <form>
                    <h5 className='h5'>Email :</h5>
                    <input className='input' type="text" value={email} onChange={e=>setEmail(e.target.value)} />
                    <h5 className='h5'>Password :</h5>
                    <input className='input' type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button className="btn2" onClick={SignIn} type='submit'>Sign In</button>
                </form>
                <p classname='term'>
                    By signing-in you agree to amazon's clone Conditions of Use & Sale. Please see our privacy notice ,our Cookies notice and Our Interest-Based Ads Notice.
                </p>
                <button className="btn3"  onClick={register}>
                    Create Your Amazon clone Account
                </button>
            </div>
        </div>
    )
}

export default Login
