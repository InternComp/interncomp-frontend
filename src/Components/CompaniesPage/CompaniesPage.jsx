import React, { useState, useEffect} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./CompaniesPage.css";
import CompanyPage from "../CompanyPage/CompanyPage";

// Reusable CompanyCard component
const CompanyCard = ({ company, onClick }) => {
  return (
    <button
      className="company-card"
      onClick={() => onClick(company.id)}
      style={{ cursor: "pointer" }}
    >
      <img src={company.image} alt={company.name} />
      <div className="company-info">
        <h3>{company.name}</h3>
        <p>{company.description}</p>
      </div>
    </button>
  );
};

// CompaniesPage Template
const CompaniesPage = () => {
  const [companies, setCompanies] = useState([]); // to store the companies data from the API
  const  [searchTerm, setSearchTerm] = React.useState("");
  const navigate = useNavigate();

  // Fetch companies data from API
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch("http://localhost:3000/companies"); // API URL
        const data = await response.json();
        setCompanies(data); // store the data in the state
      }
      catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchCompanies(); // call the function
  }, []);

  // Handle card click to navigate to the detailed page
  const handleCardClick = (id) => {
    navigate(`/Companies/${id}`); // Navigate to the company detail page using companyId
  };

  //Filter companies based on search term
    const filteredCompanies = companies.filter((company) => {
        return company.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

  return (
    <div>
      <div>
        <h1 className="companies">Companies</h1>
        <div className="description-container">
          <p className="description">
            Below is a curated list of companies, each excelling in their
            respective fields and pushing the boundaries of innovation.
          </p>
        </div>
      </div>

      <form className="w-[500px] mx-auto mt-4 my-auto relative">
            <div className="flex items-center relative">
                <input 
                    type="search" 
                    placeholder="Search for companies" 
                    className="w-full p-4 text-md bg-white border border-gray-300 rounded-lg focus:outline-none" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                <button type="button" className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-gray-400 rounded-full">
                    <AiOutlineSearch />
                </button>
            </div>
        </form>

      <div className="companies-list">
        {filteredCompanies.map((company) => (
          <CompanyCard
            key={company.id}
            company={company}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CompaniesPage;
