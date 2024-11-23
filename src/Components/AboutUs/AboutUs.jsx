import { useState } from "react";
import React from "react";
import './AboutUs.css'
import Stock from '../Assets/Icons/Stock.jpg'

const AboutUs = () => {
    return (
    <div className="about-us-container flex items-center gap-8 p-6">
        {/* Left column */}
        <div className="left-column w-3/5">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-gray-700 mb-4">
                Interncomp is a company focused on aligning students with internship opportunities. Interncomp searches the job market for companies and internship opportunities and brings it right to you! All you need to do is find your dream job and apply! Our goal is to empower students and inform about which companies are hiring. It's time to find your dream job with Interncomp! 
                🚀 
                </p>
          
        </div>

        {/* Right column */}
        <div className="right-column w-2/5">
        <img src={Stock} alt="Stock" className="rounded-lg shadow-lg w-full h-auto" />

         
          </div>
          </div>





    );
};












export default AboutUs;