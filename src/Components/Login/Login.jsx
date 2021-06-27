import React, { useState } from 'react';
//import Signup from "../Signup/Signup";
import './Login.css';
import login from './../../assets/login.png';

const Login = () => {
    return (
        <div className="loign-container">
       <img
                    src={login}
                    className='login-image'
                    alt=''
        />
            
        </div>
    )
}

export default Login;