import { useState, useEffect } from "react";
import React from "react";
import './CompanyPage.css'
import Background from '../../assets/Colab_Background.png'
import profile from '../../assets/Colab_profile.png'
import logo from '../../assets/New_Briefcase.png'
import clock from '../../assets/clock.png'
import clip from '../../assets/clip.png'
import pin from '../../assets/map-pin.png'
import Bookmark from '../../assets/Bookmark.png'
import tab from '../../assets/tab.png'
import Blue_Briefcase from '../../assets/Blue_Briefcase.png'
import Blue_User from '../../assets/Blue_User.png'
import Blue_Calendar from '../../assets/Blue_Calendar.png'


const CompanyPage = () => {

  const [companyData, setCompanyData] = useState({
    name: "Loading name...",
    description: "Loading company description...",
    industry: "Loading industry...",
    size: "Loading size...",
    founded: "Loading year...",
    location: "Loading location...",
    benefits: "Loading benefits...",
    email: "Loading email...",
    profileImage: "Loading email...", 
    jobTitle: "Loading jobtitle...",
    salary: "Loading salary...",
    jobType: "Loading jobtype...",
    background: "Loading background...",
    phone: "Loading phone...",
    position: "Loading position...",
    culture: "Loading culture...",
    linkedin: "Loading LinkedIn...",

  });

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch("insert API here"); 
        const data = await response.json();

        setCompanyData({
          name: data.name || "CoLab",
          description: data.description,
          industry: data.industry,
          size: data.size,
          founded: data.founded,
          location: data.location,
          benefits: data.benefits,
          email: data.email,
          profileImage: data.profileImage || profile,
          jobTitle: data.jobTitle,
          salary: data.salary,
          jobType: data.jobType,
          background: data.background,
          phone: data.phone,
          position: data.position,
          culture: data.culture,
          linkedin: data.linkedin
        });

      } catch (error) {
        console.error("Did not fetch data", error);
      }
    };

    fetchCompanyData();
  }, []);

  return (
    <div className="company-container">
    <div className = "background-wrapper">
    <img src={companyData.background} alt="Background" className="Company-background" />
    
    <div className = "text-on-image">
    <h1> Home/Jobs/Companies</h1>
    <h1 className = "company-text"> {companyData.name} </h1>
    </div>
    </div>
    <img src={companyData.profileImage} alt="profile" className="Company-profile" />

    <div className = "info">
    <div className="info-item">
    <img src={logo} alt="logo" className="company-icon"/>
    <h1 className="info-text">{companyData.industry}</h1>
    </div>
    <div className="info-item">
    <img src={clock} alt="clock" className="company-icon"/>
    <h1 className="info-text">{companyData.position}</h1>
    </div>
    <div className="info-item">
    <img src={clip} alt="clip" className="company-icon"/>
    <h1 className="info-text">{companyData.salary}</h1>
    </div>
    <div className="info-item">
    <img src={pin} alt="pin" className="company-icon"/>
    <h1 className="info-text">{companyData.location}</h1>
    </div>
    </div>
<div className = 'rows'>
<div className = 'description'>
<h1 className= 'company-big-text'>Company Description</h1>
<h1 className = 'company-little-text'>{companyData.description}​</h1>
<h1 className= 'company-big-text'>Company Culture</h1>
<h1 className = 'company-little-text'>{companyData.culture}​</h1>
<h1 className= 'company-big-text'>Company Benefits</h1>
<h1 className = 'company-little-text'>{companyData.benefits}​ </h1>

</div>
<div className = "alignment">
<div className = "company-buttons">
<button className="company-start-search">Contact This Company</button>
<button className="company-start-search">Company Reviews</button>
<button className = 'other-buttons'>
          <img src={Bookmark} alt="Bookmark" className="company-button-img" />
        </button>
        <button className = 'other-buttons'>
          <img src={tab} alt="tabs" className="company-button-img" />
        </button>
        </div>
        <div className = "about-company">
          <h2 className = 'about-company-header'>About Company</h2>
          <div className="company-info">
          <div className = "about-company-item">
          <img src={Blue_Briefcase} alt="Briefcase" className="info-icon" />
          <div className="info-content">
          <h3>Primary Industry:</h3>
          <p>{companyData.industry}</p>
          </div>
          </div>
          <div className="about-company-item">
          <img src={Blue_User} alt="User" className="info-icon"/>
          <div className="info-content">
          <h3>Company Size:</h3>
          <p>{companyData.size}</p>
          </div>
        </div>
        <div className="about-company-item">
        <img src={Blue_Calendar} alt="calendar" className="info-icon"/>
        <div className="info-content">
          <h3>Founded In:</h3>
          <p>{companyData.founded}</p>
          </div>
        </div>
        </div>
        <h1 className = 'about-company-header'>Contacts</h1>

        <div className="contacts-container">
          <div className="contact-row">
        <div className="about-company-item">
          <div className="info-content">
          <h3>Phone:</h3>
          <p>{companyData.phone}</p>
          </div>
        </div>

        <div className="about-company-item">
          <div className="info-content">
          <h3>Email:</h3>
          <p>{companyData.email}</p>
          </div>
        </div>
        </div>
        
        </div>
        <div className="contacts-container">
        <div className="contact-row">
        <div className="about-company-item">
          <div className="info-content">
          <h3>Location:</h3>
          <p>{companyData.location}</p>
          </div>
        </div>

        <div className="about-company-item">
          <div className="info-content">
          <h3>LinkedIn:</h3>
          <p>{companyData.linkedin}</p>
          </div>
        </div>
        </div>

        </div>
        </div>

      

        <button className="review-button">Write Review About Company</button>

        </div>
        </div>
        </div>
       

  )
};


export default CompanyPage;