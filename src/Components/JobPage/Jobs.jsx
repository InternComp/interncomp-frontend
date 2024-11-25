import React, { useState, useEffect } from 'react';
import './Jobs.css'; // Importing CSS file for styling
import SearchBar from './SearchBar'; // Importing SearchBar component for filtering jobs
import { BiTimeFive } from 'react-icons/bi'; // Importing an icon for displaying time
import { FiX } from 'react-icons/fi'; // Importing an icon for the close button

const Jobs = () => {
  // State to store fetched jobs and manage pagination
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredJobs, setFilteredJobs] = useState([]); //State for filtered jobs
  const [selectedJob, setSelectedJob] = useState(null);
  const jobsPerPage = 25;

  // Fetch data from the backend API on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:3000/jobs"); // API URL
        const data = await response.json();
        setJobs(data); // Store fetched jobs in state
        setFilteredJobs(data); // Store fetched jobs in filtered state
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchJobs();
  }, []);

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseDetail = () => {
    setSelectedJob(null);
  };

  // Calculate days since the job was posted
  const getDaysSincePosted = (postedDate) => {
    const currentDate = new Date();
    const postDate = new Date(postedDate);
    const differenceInTime = currentDate - postDate; // Difference in milliseconds
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); // Convert to days

    if (differenceInDays === 0) return 'Posted today';
    if (differenceInDays === 1) return 'Posted 1 day ago';
    return `Posted ${differenceInDays} days ago`;
  };

  // Define the handleSearch function to filter jobs
  const handleSearch = ({ jobTitle, location }) => {
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredJobs(filtered);
    setCurrentPage(1); // Reset to the first page after search
  };

  return (
    <div className="jobs-container py-10">
      <SearchBar onSearch={handleSearch}/> {/* Render search bar component */}

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="job-detail-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-1/2 relative">
            <button onClick={handleCloseDetail} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
              <FiX size={24} />
            </button>

            {/* Company Image and Name */}
            <div className="flex items-center mb-6">
              <img
                src={selectedJob.companyImage}
                alt={`${selectedJob.company} logo`}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{selectedJob.companyName}</h3>
              </div>
            </div>
            
            <h2 className="text-xl font-bold">{selectedJob.title}</h2>
            <p className="text-gray-500">{selectedJob.company} - {selectedJob.location}</p>
            {/* Section: Description */}
            <div className="section mt-4">
              <h3 className="font-semibold text-lg">Description</h3>
              <p className="text-gray-700 mt-2">{selectedJob.description}</p>
            </div>

            {/*Section: Key Responsibilities */}
            {selectedJob.keyResponsibilities && selectedJob.keyResponsibilities.length > 0 && (
              <div className="section mt-4">
                <h3 className="font-semibold text-lg">Key Responsibilities</h3>
                <ul className="list-disc list-outside text-gray-700 mt-2">
                  {selectedJob.keyResponsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Section: Basic Qualifications */}
            {selectedJob.basicQualifications && selectedJob.basicQualifications.length > 0 && (
              <div className="section mt-4">
                <h3 className="font-semibold text-lg">Basic Qualifications</h3>
                <ul className="list-disc list-outside text-gray-700 mt-2">
                  {selectedJob.basicQualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Section: Preferred Qualifications */}
            {selectedJob.preferredQualifications && selectedJob.preferredQualifications.length > 0 && (
              <div className="section mt-4">
                <h3 className="font-semibold text-lg">Preferred Qualifications</h3>
                <ul className="list-disc list-outside text-gray-700 mt-2">
                  {selectedJob.preferredQualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Section: Skills Required */}
            <div className="mt-4">
              <h3 className="font-semibold text-lg">Skills Required</h3>
              <ul className="list-disc list-outside text-gray-700 mt-2">
                {selectedJob.skillsRequired.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Section: Additional Information */}
            {selectedJob.additionalInfo && selectedJob.additionalInfo.length > 0 && (
              <div className="section mt-5">
                <p className='text-gray-700'>
                  {selectedJob.additionalInfo}
                </p>
              </div>
            )}


            {/* Section: Apply Now */}
            <a href={selectedJob.jobLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded">
              Apply Now
            </a>
          </div>
        </div>
      )}

      {/* Job Cards Grid */}
      <div className="flex-auto mx-auto px-60 py-12">
        <div
          className={`jobs-grid grid ${
            currentJobs.length < 4
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center"
              : "grid-cols-4"
          } gap-4`}
        >
          {currentJobs.map((job) => (
            <div
              key={job.id}
              className="group singleJob w-[350px] p-[20px] bg-white rounded-[10px] hover:bg-blue-300 shadow-lg shadow-gray-400/70 hover:shadow-lg cursor-pointer"
              onClick={() => handleJobClick(job)}
            >
              {/* Flexbox container for company name and logo */}
              <div className="flex items-center gap-4">
                <img src={job.companyImage} alt={`${job.company} logo`} className="w-12 h-12 mb-6" />
                <h6 className="text-[16px] font-semibold text-textColor">{job.companyName}</h6>
              </div>

              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{job.title}</h1>
              </span>

              <h6 className="text-[#ccc]">{job.company} - {job.location}</h6>
              <div className="tags flex gap-2 mt-2">
                <span className="tag bg-blue-100 text-blue-500 px-3 py-1 rounded-md">{job.employmentType}</span>
                <span className="tag bg-blue-100 text-blue-500 px-3 py-1 rounded-md">{job.workType}</span>
                <span className="tag bg-blue-100 text-blue-500 px-3 py-1 rounded-md">{job.internType}</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="flex items-center text-[#64748b] text-sm gap-2">
                  <BiTimeFive /> {getDaysSincePosted(job.postedDate)}
                </span>
               {/* <span className="text-sm text-gray-600">{job.applicants} Applicants</span>*/}
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Pagination Controls */}
      {!selectedJob && (
        <div className="pagination flex justify-center mt-8">
          <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-4 py-2 mx-2 bg-gray-200 rounded hover:bg-gray-300">
            Previous
          </button>
          <span className="px-4 py-2">{currentPage} / {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-4 py-2 mx-2 bg-gray-200 rounded hover:bg-gray-300">
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Jobs;