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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  useEffect(() => {

    const checkLoginStatus_and_getId = async () => {
        try {
            const response = await fetch('http://localhost:3000/auth/protected', {
                method: 'GET',
                credentials: 'include', // Assuming cookies need to be included with the request
            });
            if (response.ok) {
              setIsLoggedIn(true);
              const data = await response.json();
              setUserId(data.userid)
            }
            else{
              setIsLoggedIn(false);
            }
        } catch (error) {
            console.error('Error:', error);
            setIsLoggedIn(false);
        }
    };
    
    checkLoginStatus_and_getId();
  }, [userId]); 

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
  const [newRating, setNewRating] = useState(0); // New state for the review rating

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
        const response = await fetch(`http://localhost:3000/companies/${id}`);
        const data = await response.json();
        // console.log(data)
        // console.log(data.reviews)
        setReviews(data.reviews);
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

  const handleRatingClick = (rating) => {
    setNewRating((prevRating) => (prevRating === rating ? 0 : rating));
  };
  

  const handleSubmitReview = async () => {
    if (!newReview || newRating === 0) {
      alert("Please provide both a review and a rating.");
      return;
    }

    const reviewData = {
      reviewerId: userId,
      rating: newRating,
      review_text: newReview,
      companyId: id,
    };

    try {
      const response = await fetch(
        `http://localhost:3000/companies/${id}/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewData),
        }
      );

      if (response.ok) {
        const createdReview = await response.json();
        setReviewContents([...reviewContents, createdReview]);
        setNewReview("");
        setNewRating(0);
        setReviewVisible(false);
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
        
            {/* User Reviews */}
            <div className="user-reviews">
              <h2 className="review-header">Company Reviews</h2>
              <div className="scrollable-reviews">
                {reviewContents.length > 0 ? (
                  reviewContents.map((review, index) => (
                    <div key={index} className="review-item">
                          <div className="review-stars">
                      {"★".repeat(review.rating).padEnd(5, "☆")}
                    </div>

                    <div className="review-date">
                    {new Date(review.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                    <p className="review-content">{review.review}</p>
              </div>
                  ))
                ) : (
                  <p>No reviews available.</p>
                )}
              </div>
            </div>
        </div>
        {/* Right column */}
        <div className="company-info-right w-2/5">
          <div className="company-buttons flex gap-4 mb-6">
            <a href={companyData.careerPages} className="button-primary">View Careers</a>
            {/*<button className="button-primary">Company Reviews</button>
             <button className="button-secondary">
              <img src={Bookmark} alt="Bookmark" className="w-6 h-6" />
            </button>
            <button className="button-secondary">
              <img src={tab} alt="Tab" className="w-6 h-6" />
            </button> */}
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
            <a class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href={companyData.linkedin}>
              <p><strong>LinkedIn:</strong> {companyData.linkedin}</p></a>
          </div>
        {/* using conditional rendering we make sure that the write a review button only appears once the user is logged in */}
        {isLoggedIn && (
        <div>
          <button className="review-button" onClick={handleReviewToggle}>Write Review About Company</button>
          {isReviewVisible && (
            <div className="review-form">
              <h2>Write Your Review</h2>
              <div className="stars-input">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${newRating >= star ? "selected" : ""}`}
                    onClick={() => handleRatingClick(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <textarea
                placeholder="Enter your review of the company here."
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
              />
              <button onClick={handleSubmitReview}>Submit Review</button>
            </div>
          )}
        </div>
      )}




        </div>
      </div>

    </div>
  );
};

export default CompanyPage;