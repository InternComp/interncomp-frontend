// Importing necessary hooks and assets
import { useState } from "react";
import { Link } from 'react-router-dom';
import React from "react";
import spotify from "../../assets/spotify.svg";
import slack from "../../assets/slack.svg";
import adobe from "../../assets/adobe.svg";
import asana from "../../assets/asana.svg";
import linear from "../../assets/linear.svg";
import community from '../../assets/community.svg';
import bestindustry from '../../assets/bestindustry.svg';
import './Home.css';

// Home component function definition
const Home = () => {
return (
  <div>
    {/* Section for the banner image */}
    <div className="w-full">
      <img src={bestindustry} alt="Join the best companies" className="w-full max-w-[100%]" />
    </div>

    {/* Scrolling logos section */}
    <div className="w-full bg-gray-800 py-4">
        <div className="flex justify-around items-center max-w-[300%] animate-scroll-logos space-x-8">
          <img src={spotify} alt="Spotify" className="h-[40px]" />
          <img src={slack} alt="Slack" className="h-[40px]" />
          <img src={adobe} alt="Adobe" className="h-[40px]" />
          <img src={asana} alt="Asana" className="h-[40px]" />
          <img src={linear} alt="Linear" className="h-[40px]" />
        </div>
    </div>

    {/* Section with a motivational message and image */}
    <div className="flex items-center">
      <img src={community} alt="Community" className="w-[350px] h-[350px] m-10" />
      <div>
          {/* Main headline */}
          <h1 style={{ fontSize: '30px', fontWeight: 'bold'}}><br/>Good Life Begins With <br/>A Good Company</h1>
          
          {/* Supporting paragraph */}
          <p className="text-sm mt-4">
          <br/>At InternComp, we connect talented individuals with top companies<br/> to help you build a fulfilling career. 
          Whether you're seeking an internship<br/> or a senior role, we provide the tools to help you succeed.
          </p>

          {/* Search Jobs button */}
          <br></br>
          <div>
          <Link to="/Jobs" className="bg-gray-800 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded mt-4">Search Jobs</Link>
          </div>
      </div>
    </div>

    {/* Statistics section */}
    <div className="flex justify-around items-start my-10">
      {/* Box 1 - Clients worldwide */}
      <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-300">12k+</h2>
          <h3 className="font-bold">Clients worldwide</h3>
          <p className="text-sm text-gray-500">
          <br/>We have proudly served over 12,000 clients globally, connecting 
          <br/>talented individuals with top companies across various industries.
          </p>
      </div>

      {/* Box 2 - Active resumes */}
      <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-300">20k+</h2>
          <h3 className="font-bold">Active resume</h3>
          <p className="text-sm text-gray-500">
            <br/> Our platform hosts more than 20,000 active resumes, making 
            <br/> it easier for recruiters to find the perfect match for their teams.
          </p>
      </div>

      {/* Box 3 - Companies */}
      <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-300">18k+</h2>
          <h3 className="font-bold">Companies</h3>
          <p className="text-sm text-gray-500">
              <br/>We collaborate with over 18,000 companies, providing them 
              <br/>with top talent to meet their business needs and growth ambitions.
          </p>
      </div>
    </div>

    {/* Testimonials section */}
    <div className="bg-blue-100 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonials from Our Users</h2>
        <p className="text-center text-gray-500 mb-10">
          Hear what our satisfied clients have to say about the amazing services and experiences they've had with our platform. We're proud to help individuals and companies achieve their goals.
        </p>

        {/* Testimonial cards */}
        <div className="flex justify-around items-start space-x-4">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center w-80">
                <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
                <h3 className="font-bold text-lg">Amazing services</h3>
                <p className="text-sm text-gray-500 mt-2 mb-4">
                    "InternComp made it easy for me to find a company that matched my career goals. The process was smooth, and the support was excellent throughout my journey."
                </p>
                <div className="flex items-center justify-center">
                    <div>
                        <p className="font-bold">Marco Kihn</p>
                        <p className="text-gray-500 text-sm">Happy Client</p>
                    </div>
                </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center w-80">
                <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
                <h3 className="font-bold text-lg">Everything simple</h3>
                <p className="text-sm text-gray-500 mt-2 mb-4">
                  "From start to finish, everything was simple and straightforward. I found the perfect internship in no time, thanks to the intuitive interface and detailed listings."
                </p>
                <div className="flex items-center justify-center">
                    <div>
                        <p className="font-bold">Kristin Hester</p>
                        <p className="text-gray-500 text-sm">Happy Client</p>
                    </div>
                </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center w-80">
                <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
                <h3 className="font-bold text-lg">Awesome, thank you!</h3>
                <p className="text-sm text-gray-500 mt-2 mb-4">
                  "InternComp exceeded my expectations. Not only did I land a great job, but I also had access to valuable resources that helped me improve my resume and interview skills."
                </p>
                <div className="flex items-center justify-center">
                    <div>
                        <p className="font-bold">Zion Cisneros</p>
                        <p className="text-gray-500 text-sm">Happy Client</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

// Exporting the Home component
export default Home;
