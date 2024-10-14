import { useState } from "react";
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


const CompanyPage = () => {
return (
    <div className="company-container">
    <div className = "background-wrapper">
    <img src={Background} alt="Background" className="Company-background" />
    
    <div className = "text-on-image">
    <h1> Home/Jobs/Companies</h1>
    <h1 className = "colab-text"> CoLab</h1>
    </div>
    </div>
    <img src={profile} alt="profile" className="Company-profile" />

    <div className = "info">
    <div className="info-item">
    <img src={logo} alt="logo" className="company-icon"/>
    <h1 className="info-text"> Software </h1>
    </div>
    <div className="info-item">
    <img src={clock} alt="clock" className="company-icon"/>
    <h1 className="info-text"> Full time</h1>
    </div>
    <div className="info-item">
    <img src={clip} alt="clip" className="company-icon"/>
    <h1 className="info-text"> $75,000 - $98,598 per year</h1>
    </div>
    <div className="info-item">
    <img src={pin} alt="pin" className="company-icon"/>
    <h1 className="info-text"> New-York, USA</h1>
    </div>
    </div>
<div className = 'rows'>
<div className = 'description'>
<h1 className= 'company-big-text'>Company Description</h1>
<h1 className = 'company-little-text'>CoLab Software is a St. John’s-based tech company that provides a cloud-based Design Engagement System (DES) for engineering teams. Their platform helps streamline the review and collaboration process on 3D CAD models, enhancing communication, reducing design errors, and improving productivity. Since its founding in 2017 by Adam Keating and Jeremy Andrews, CoLab has gained clients like Ford and Komatsu, who use its technology to cut product development times and facilitate remote team collaboration​</h1>
<h1 className= 'company-big-text'>Company Culture</h1>
<h1 className = 'company-little-text'>CoLab Software emphasizes a collaborative and innovative work environment that draws from the supportive tech ecosystem in Newfoundland and Labrador. The company culture is rooted in the founders' vision of maintaining a great work-life balance, providing employees with a positive and friendly work atmosphere. CoLab values community engagement and actively participates in local initiatives focused on student entrepreneurship and diversity in tech. Employees have relocated from other regions due to the unique cultural strengths and passion the company fosters​</h1>
<h1 className= 'company-big-text'>Company Benefits</h1>
<h1 className = 'company-little-text'>Growth opportunities as part of CoLab's expansion into AI and engineering tools. Focus on innovation, allowing employees to work on cutting-edge projects. Career advancement in the tech sector, with opportunities to develop new skills. Funded growth, supported by government programs that have enabled 20% of the workforce to be hired through initiatives. Dynamic work environment, where employee contributions are recognized and rewarded. Support for team growth, ensuring a collaborative and forward-thinking workplace​ </h1>

</div>

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
          <h1 className = 'about-company-header'>About Company</h1>
          <div className = "about-company-item">
          <h3>Primary Industry</h3>
          <p>Software Development</p>
          </div>
          <div className="about-company-item">
          <h3>Company Size</h3>
          <p>51-200 employees</p>
        </div>
        <div className="about-company-item">
          <h3>Founded In</h3>
          <p>2017</p>
        </div>
        <div className="about-company-item">
          <h3>Location</h3>
          <p>New-York, USA</p>
        </div>


        </div>


</div>


    </div>
  
);

};


export default CompanyPage;