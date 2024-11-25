import React, { useState, useEffect } from "react";
import ProfileIcon from "../../assets/ProfileIcon.png";
import settingsIcon from "../../assets/settingsIcon.png";
import saveButton from "../../assets/saveButton.png";
import briefcaseIcon from "../../assets/briefcase.png";

const RecruiterProfilePage = () => {
    const [loggedUsername, setLoggedUsername] = useState("");
    const [loggedEmail, setLoggedEmail] = useState("");
    const [currentView, setCurrentView] = useState("profile"); // State for switching views

    const [formData, setFormData] = useState({
        fullName: "",
        company: "",
        location: "",
        email: "",
    });

    const [isRecruiterEdit, setIsRecruiterEdit] = useState(false);

    const handleEdit = () => setIsRecruiterEdit(true);
    const handleSave = () => {
        setFormData(formData);
        setIsRecruiterEdit(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:3000/auth/protected', {
                    method: 'GET',
                    credentials: 'include', // Assuming cookies need to be included with the request
                });
                if (response.ok) {
                    const data = await response.json();
                    setLoggedUsername(data.username);
                    setLoggedEmail(data.email);
                } else {
                    throw new Error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchUserData();
    }, []); // Empty dependency array ensures this runs only once when the component mounts


    const renderMainContent = () => {
        switch (currentView) {
            case "profile":
                return (
                    <div className="rounded-3xl bg-white row-start-2 row-span-5 grid grid-rows-4 p-10"> {/* main content*/}
                    <div className=" grid grid-cols-2 ">
                        <div className="col-start-1 col-span-1 flex">
                            <div className="rounded-full w-[120px] h-[120px] bg-[#F3F3F3]"></div>
                            <div className="ml-10">
                                <p className="mt-10"> {formData.fullName||loggedUsername}<br></br></p>

                                <p className="mt-5"> { loggedEmail || "UserEmail@blingblaow.ca"}</p>
                            </div>

                        </div>
                        <div className="justify-self-end">
                            {!isRecruiterEdit ? (<button type="button" onClick={handleEdit} className="text-white  rounded-xl hover:bg-blue-400  bg-blue-500 h-[50px] w-[100px]">Edit</button>)
                                : (<button type="button" onClick={handleSave} className="text-white justify-self-end rounded-xl hover:bg-green-400  bg-green-500 h-[50px] w-[100px]">Save</button>)
                            }
                        </div>


                    </div>
                    <div className="grid grid-cols-3 pt-5">

                        <label className="flex flex-col "> Full name
                            {isRecruiterEdit ?
                                (<input type="text" 
                                    name="fullName"
                                    value={ formData.fullName} 
                                    onChange={handleChange} 
                                    placeholder="Your Full Name" className=" bg-[#F3F3F3] pl-3 w-[70%] h-[50px] rounded-xl mt-3 hover:border-2 border-blue-300"></input>) :
                                (<div className="mt-3  w-[70%] h-[50px] pt-3 pl-3 bg-[#F3F3F3] rounded-xl">
                                    { loggedUsername || formData.fullName || "Full Name"}
                                </div>)}
                        </label>

                        <label className="flex flex-col mb-5">Company
                            {isRecruiterEdit ?
                                (<input type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Your Company"
                                    className="bg-[#F3F3F3] pl-3 w-[70%] h-[50px] rounded-xl mt-3 hover:border-2 border-blue-300"></input>) :
                                (<div className="mt-3 w-[70%] h-[50px] pt-3 pl-3 bg-[#F3F3F3] rounded-xl">
                                    {(formData.company) || "Company"}
                                </div>)}
                        </label>

                        <label className="flex flex-col"> Location
                            {isRecruiterEdit ?
                                (<input type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="Your Location"
                                    className="bg-[#F3F3F3] pl-3 w-[70%] h-[50px] rounded-xl mt-3 hover:border-2 border-blue-300"></input>) :
                                (<div className="mt-3 w-[70%] h-[50px] pt-3 pl-3 bg-[#F3F3F3] rounded-xl">
                                    {formData.location || "Location"}
                                </div>)}
                        </label>

                    </div>
                    <div className="grid grid-cols-3 pt-5">
                        <label className="flex flex-col "> Email
                            {isRecruiterEdit ?
                                (<input type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Location"
                                    className="bg-[#F3F3F3] pl-3 w-[70%] h-[50px] rounded-xl mt-3 hover:border-2 border-blue-300"></input>) :
                                (<div className="mt-3 w-[70%] h-[50px] pt-3 pl-3 bg-[#F3F3F3] rounded-xl">
                                    {formData.email || "Email"}
                                </div>)}
                        </label>

                        
                    </div>

                </div>
                );
            case "jobs":
                return (
                    <div className="rounded-3xl bg-white row-start-2 row-span-5 p-10">
                        <h2>Job Postings</h2>
                       <div className="grid grid-cols-3 grid-rows-5 ">
                            <div className="col-start-3 row-start-1 justify-self-end">
                                <button className=" text-white  rounded-xl hover:bg-blue-400  bg-blue-500 h-[50px] w-[100px] ">Create Job</button>
                            </div>
                            <div className="col-start-1 col-span-3 row-start-2">
                                <div className="grid grid-cols-3">
                                    <div className="col-start-1 col-span-1">
                                        
                                    </div>
                                    <div className="col-start-2 col-span-1">
                                        <p>Company</p>
                                    </div>
                                    <div className="col-start-3 col-span-1">
                                        <p>Location</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "settings":
                return (
                    <div className="rounded-3xl bg-white row-start-2 row-span-5 p-10">
                        <h2>Settings</h2>
                        <p>Adjust your profile and account settings here.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="grid grid-cols-12 grid-flow-row bg-[#F3F3F3] h-[750px]">
            <div className="grid grid-rows-9 pt-5 bg-white w-[80px] justify-items-center h-[750px] col-start-1 col-span-1 rounded-r-lg">
                <div onClick={() => setCurrentView("profile")} className="row-start-1 w-[80px] h-[80px] hover:bg-blue-100 p-5 cursor-pointer">
                    <img src={UserIcon} alt="Edit Profile" />
                </div>
                <div onClick={() => setCurrentView("jobs")} className="row-start-2 w-[80px] h-[80px] hover:bg-blue-100 p-5 cursor-pointer">
                    <img src={briefcaseIcon} alt="Create Jobs" />
                </div>
                <div onClick={() => setCurrentView("settings")} className="row-start-3 w-[80px] h-[80px] hover:bg-blue-100 p-5 cursor-pointer">
                    <img src={settingsIcon} alt="Settings" />
                </div>
            </div>
            <div className="grid grid-rows-6 col-start-2 col-span-11 pb-10 pr-5">
                <div className="rounded-3xl pt-5 text-2xl">Welcome, Recruiter</div>
                {renderMainContent()}
            </div>
        </div>
    );
};

export default RecruiterProfilePage;
