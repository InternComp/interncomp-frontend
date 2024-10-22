import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import './CompanyPage.css'; // Separate CSS file for custom styles
import Background from '../../assets/Colab_Background.png';
import profile from '../../assets/Colab_profile.png';
import logo from '../../assets/New_Briefcase.png';
import clock from '../../assets/clock.png';
import clip from '../../assets/clip.png';
import pin from '../../assets/map-pin.png';
import Bookmark from '../../assets/Bookmark.png';
import tab from '../../assets/tab.png';
import Blue_Briefcase from '../../assets/Blue_Briefcase.png';
import Blue_User from '../../assets/Blue_User.png';
import Blue_Calendar from '../../assets/Blue_Calendar.png';

const CompanyPage = () => {
  const { id } = useParams();
  const [companyData, setCompanyData] = useState({
    name: "",
    description: "",
    industry: "",
    size: "",
    founded: "",
    location: "",
    benefits: "",
    email: "",
    image: "", 
    jobTitle: "",
    salary: "",
    jobType: "",
    background: "",
    phone: "",
    position: "",
    culture: "",
    linkedin: "",
  });

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/companies/${id}`);
        const data = await response.json();
        setCompanyData({
          ...companyData,
          ...data,
          image: data.image || profile,
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchCompanyData();
  }, []);

  return (
    <div className="company-container flex flex-col gap-10 px-6">
      <div className="relative">
        <img src={companyData.banner} alt="Company background" className="w-full h-auto object-contain" />
      </div>

      <div className="relative flex items-center">
        <img src={companyData.image} alt="Company profile" className="company-logo" />
      </div>

      <div className="company-info-container flex items-start gap-8">
        {/* Left column */}
        <div className="company-info-left w-3/5">
          {/* Company Details */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Company Description</h2>
            <p className="mt-2">{companyData.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold">Company Culture</h2>
            <p className="mt-2">{companyData.culture}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold">Company Benefits</h2>
            <p className="mt-2">{companyData.benefits}</p>
          </div>
        </div>

        {/* Right column */}
        <div className="company-info-right w-2/5">
          <div className="company-buttons flex gap-4 mb-6">
            <button className="button-primary">View Careers</button>
            <button className="button-primary">Company Reviews</button>
            <button className="button-secondary">
              <img src={Bookmark} alt="Bookmark" className="w-6 h-6" />
            </button>
            <button className="button-secondary">
              <img src={tab} alt="Tab" className="w-6 h-6" />
            </button>
          </div>

          {/* About Company Section */}
          <div className="about-company-card bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-xl font-bold mb-4">About Company</h2>
            <div className="flex items-center mb-4">
              <img src={Blue_Briefcase} alt="Briefcase" className="w-6 h-6 mr-2" />
              <span>Primary Industry: {companyData.industry}</span>
            </div>
            <div className="flex items-center mb-4">
              <img src={Blue_User} alt="Company size" className="w-6 h-6 mr-2" />
              <span>Company Size: {companyData.size}</span>
            </div>
            <div className="flex items-center">
              <img src={Blue_Calendar} alt="Founded" className="w-6 h-6 mr-2" />
              <span>Founded In: {companyData.founded}</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="about-company-card bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Contacts</h2>
            <div className="mb-2">
              <h3 className="font-semibold">Phone:</h3>
              <p>{companyData.phone}</p>
            </div>
            <div className="mb-2">
              <h3 className="font-semibold">Email:</h3>
              <p>{companyData.email}</p>
            </div>
            <div>
              <h3 className="font-semibold">Location:</h3>
              <p>{companyData.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
