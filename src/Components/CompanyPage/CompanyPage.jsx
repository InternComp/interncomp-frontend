import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import './CompanyPage.css'; // Custom styles
import Background from '../../assets/Colab_Background.png';
import profile from '../../assets/Colab_profile.png';
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
    reviews: ""
  });

  const [isReviewVisible, setReviewVisible] = useState(false);
  const [reviewContents, setReviews] = useState([]);
  const [newReview, setNewReview] = useState(""); // New state for the review text

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
        console.error("Error fetching company data", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/reviews/company/${id}`);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews", error);
      }
    };

    fetchCompanyData();
    fetchReviews();
  }, [id]);

  const handleReviewToggle = () => {
    setReviewVisible((prev) => !prev);
  };

  const handleSubmitReview = async () => {
    const reviewData = {
      reviewer: "Anonymous",
      rating: 3,
      text: newReview,
      companyName: companyData.name,
    };

    try {
      const response = await fetch("http://localhost:3000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
        credentials: "include",
      });

      if (response.ok) {
        const createdReview = await response.json();
        setReviews([...reviewContents, createdReview]);
        setNewReview(""); // Reset review input
        setReviewVisible(false); // Close review form
      } else {
        console.error("Error submitting review");
      }
    } catch (error) {
      console.error("Error submitting review", error);
    }
  };

  return (
    <div className="company-container flex flex-col gap-10 px-6">
      {/* Banner Section */}
      <div className="relative">
        <img src={companyData.banner} alt="Company background" className="w-full h-auto object-contain" />
      </div>

      {/* Company Logo Section */}
      <div className="relative flex items-center">
        <img src={companyData.image} alt="Company profile" className="company-logo" />
      </div>

      {/* Company Info Section */}
      <div className="company-info-container flex items-start gap-8">
        {/* Left column */}
        <div className="company-info-left w-3/5">
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
            <a href={companyData.careerPages} className="button-primary">View Careers</a>
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
              <span>Primary Industry: {companyData.primaryIndustry}</span>
            </div>
            <div className="flex items-center mb-4">
              <img src={Blue_User} alt="Company size" className="w-6 h-6 mr-2" />
              <span>Company Size: {companyData.companySize}</span>
            </div>
            <div className="flex items-center">
              <img src={Blue_Calendar} alt="Founded" className="w-6 h-6 mr-2" />
              <span>Founded In: {companyData.founded}</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="about-company-card bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Contacts</h2>
            <p><strong>Phone:</strong> {companyData.phone}</p>
            <p><strong>Email:</strong> {companyData.recruiterEmails}</p>
            <p><strong>Location:</strong> {companyData.location}</p>
            <p><strong>LinkedIn:</strong> {companyData.linkedin}</p>
          </div>
          <button className="review-button" onClick={handleReviewToggle}>Write Review About Company</button>
          {isReviewVisible && (
            <div className="about-company">
              <h2 className='review-header'>Write Your Review</h2>
              <textarea 
                className='input-text' 
                placeholder="Enter your review of the company here."
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
              />
              <button 
                className="company-start-search"
                onClick={handleSubmitReview}
              >
                Submit Review
              </button>
            </div>
          )}
        </div>
      </div>

      {/* User Reviews */}
      <div className="user-reviews">
        <h2 className="review-header">User Written Reviews</h2>
        {reviewContents.length > 0 ? (
          reviewContents.map((review, index) => (
            <div key={index} className="review-item">
              <h3 className="review-title">{review.reviewer}</h3>
              <p className="review-content">{review.text}</p>
              <p className="review-rating">Rating: {review.rating}</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default CompanyPage;
