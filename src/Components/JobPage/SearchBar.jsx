import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
    const [jobTitle, setJobTitle] = useState("");
    const [location, setLocation] = useState("");

    const handleSearch = () => {
        onSearch({ jobTitle, location });
    };

    const clearFields = () => {
        setJobTitle("");
        setLocation("");
        onSearch({ jobTitle: "", location: "" }); // Reset search in parent
    };

    return (
        <div className="searchDiv flex flex-col md:flex-row w-full max-w-[50%] mx-auto p-4 md:p-5 gap-3">
            {/* Job Title / Skill Input */}
            <div className="flex items-center gap-2 flex-1 bg-white rounded-lg px-4 py-2 shadow-md border border-gray-300">
                <AiOutlineSearch className="text-gray-500 text-[20px]" />
                <input
                    type="text"
                    placeholder="Title, skill or company"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="bg-transparent focus:outline-none w-full text-gray-700"
                />
            </div>

            {/* Location Input */}
            <div className="flex items-center gap-2 flex-1 bg-white rounded-lg px-4 py-2 shadow-md border border-gray-300">
                <CiLocationOn className="text-gray-500 text-[20px]" />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="bg-transparent focus:outline-none w-full text-gray-700"
                />
            </div>

            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white rounded-md px-4 py-2 w-full md:w-auto"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
