import { useState } from "react";
import React from "react";
import './CompanyPage.css'
import Logo from './Assets/Icons/Logo.png'
import Logo2 from '../Assets/Icons/Logo2.png'
import Paper from '../Assets/Icons/Paper.png'
import Background from '../Assets/Icons/Background.png'
import profile from '../Assets/Icons/CoLab logo.png'


const CompanyPage = () => {
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
    <div className = "company-header">

    <img src={Background} alt="Background" className="Background" />
    <img src={profile} alt="profile" className="profile" />








    </div>
  </div>
  
);

};


export default CompanyPage;