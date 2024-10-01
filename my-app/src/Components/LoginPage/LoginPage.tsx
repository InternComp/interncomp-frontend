import { useState } from "react";
import React from "react";
import './LoginPage.css'
import Lightbulb from '../Assets/Icons/Lightbulb.png'
import Logo from '../Assets/Icons/Logo.png'
import People from '../Assets/Icons/People.png'
import Logo2 from '../Assets/Icons/Logo2.png'
import Google from '../Assets/Icons/Google.png'
import Paper from '../Assets/Icons/Paper.png'
import User from '../Assets/Icons/User.png'

const LoginPage = () => {
return (
    <div className = 'container'>
         <div className = 'header'>
        <img src = {Logo2} alt='' />
            <img src = {Logo} alt='' /> 
            <button className='nav-button'>Home</button>
            <button className='nav-button'>Jobs</button>
            <button className='nav-button'>Companies</button>
            <button className='nav-button'>About Us</button>
            <h1> Login </h1>
            <button className='signup'>Signup <img src={Paper} alt='Paper Airplane' className='button-img' />
            </button>
            </div>
        <div className="text">Your search for the next dream job is over 🚀 </div>
        <div className = "text">Create an account or sign in. By continuing, you agree to our </div>
        <button className='text-button'>Terms of Use</button>
        <div className = "text"> and acknowledge our</div>
        <button className='text-button'>Privacy Policy</button>
    
        <button className='sign-in'>
        <img src={Google} alt='Google Logo' className='button-img' />
        Sign in with Google </button>
      

        <div className="separator">
        <hr className="line" />
        <span className="or">or</span>
        <hr className="line" />
      </div>

      <div className="text"> Enter Email </div>
      <button className='sign-in'>
        <img src={User} alt='User Icon' className='button-img' />
        Username@mail.com </button>
        <button className='sign-in'>
        Continue with email </button>

        <div>
        <button>
        Start Searching → </button>
        </div>
    
    
</div>
);

};


export default LoginPage;