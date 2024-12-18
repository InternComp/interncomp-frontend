import { useState } from "react";
import React from "react";
import './LoginPage.css'
import Lightbulb from '../Assets/Icons/Lightbulb.png'
import People from '../Assets/Icons/People.png'
import Google from '../Assets/Icons/Google.png'



const LoginPage = () => {
  const handleGoogleSignIn = () => {
    window.location.href = "http://localhost:3000/auth/google/";
  };
return (
    <div className="container" style={{paddingBottom:'200px'}}>
  
    <div className="text">Your search for the next dream job is over 🚀</div>
  
    <div className="grid-container"> 
      <div className="lightbulb-section">
        <img src={Lightbulb} alt="Lightbulb" className="image" />
      </div>
  
      <div className="login-form">
      <div className="terms-text">
        <span>Create an account or sign in. By continuing, you agree to our </span>
        <button className="text-button"> Terms of Use</button>
        <span> and acknowledge our</span>
        <button className="text-button"> Privacy Policy</button>
        </div>

        <button className="sign-in" onClick={handleGoogleSignIn}>
          
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