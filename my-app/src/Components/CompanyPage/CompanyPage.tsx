import { useState } from "react";
import React from "react";
import './LoginPage.css'
import Lightbulb from '../Assets/Icons/Lightbulb.png'
import Logo from '../Assets/Icons/Logo.png'
import People from '../Assets/Icons/People.png'
import Logo2 from '../Assets/Icons/Logo2.png'
import Google from '../Assets/Icons/Google.png'
import Paper from '../Assets/Icons/Paper.png'


const LoginPage = () => {
return (
    <div className="container">
    <div className="header">
    <div className="logos">
      <img src={Logo2} alt="Briefcase" className="logo2-img" /> 
      <img src={Logo} alt="InternComp" className="logo-img" />
      </div>
      <button className="nav-button">Home</button>
      <button className="nav-button">Jobs</button>
      <button className="nav-button">Companies</button>
      <button className="nav-button">About Us</button>
      <div className="header-container">
      <h1>Login</h1>
      <button className="signup">
        SignUp <img src={Paper} alt="Paper Airplane" className="button-img" />
      </button>
      </div>
    </div>
    <hr className="header-line" />
  
    <div className="text">Your search for the next dream job is over 🚀</div>
  
    <div className="grid-container">
      <div className="lightbulb-section">
        <img src={Lightbulb} alt="Lightbulb" className="image" />
      </div>
  
      <div className="login-form">
      <div className="terms-text">
        <span>Create an account or sign in. By continuing, you agree to our </span>
        <button className="text-button">Terms of Use</button>
        <span> and acknowledge our</span>
        <button className="text-button">Privacy Policy</button>
        </div>
        <button className="sign-in">
          <img src={Google} alt="Google Logo" className="button-img" />
          Sign in with Google
        </button>
  
        <div className="separator">
          <hr className="line" />
          <span className="or">or</span>
          <hr className="line" />
        </div>
  
        <div className="email-text">Enter Email</div>
        <input type="email" placeholder = "Username@mail.com" className="email-input" />
        <button className="sign-in">Continue with email</button>
  
        <button className="start-search">Start Searching →</button>
      </div>
      <div className="people">
        <img src={People} alt="People" className="image" />
      </div>
    </div>
    
  </div>
  
);

};


export default LoginPage;