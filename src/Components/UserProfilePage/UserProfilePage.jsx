import React, { useState, useEffect } from "react";
import UserIcon from "../../assets/UserIcon.png";
import settingsIcon from "../../assets/settingsIcon.png";
import saveButton from "../../assets/saveButton.png";
import briefcaseIcon from "../../assets/briefcase.png";
import reviewsIcon from "../../assets/review.png";



const UserProfilePage = () => {

    const [loggedUsername, setLoggedUsername] = useState("");
    const [loggedEmail, setLoggedEmail] = useState("");

    // Fetch user data when the component mounts
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

    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        programOfStudy: "",
        location: "",
        institution: "",
        gender: "X",
        email:"",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const [isUserEdit, setIsUserEdit] = useState(false);

    const handleEdit = () => {
        setIsUserEdit(true);
    };

    const handleSave = () => {
        setFormData(formData);
        setIsUserEdit(false);
    }

    return (
        <div className="grid grid-cols-12 grid-flow-row bg-[#F3F3F3] h-[750px] ">
            <div className="grid grid-rows-9 pt-5 bg-white w-[80px] justify-items-center h-[750px]  col-start-1 col-span-1 rounded-r-lg ">{/* left vertical nav*/}
                <div className="row-start-1 w-[80px] h-[80px] hover:bg-blue-100 p-5"><img src={UserIcon} /></div>
                <div className="row-start-2 w-[80px] h-[80px] hover:bg-blue-100 p-5"><img src={briefcaseIcon} /></div>
                <div className="row-start-3 w-[80px] h-[80px] hover:bg-blue-100 p-5"><img src={reviewsIcon} /></div>
                <div className="row-start-4 w-[80px] h-[80px] hover:bg-blue-100 p-5"><img src={settingsIcon} /></div>

            </div>

            <div className="grid grid-rows-6 col-start-2 col-span-11 pb-10 pr-5 "> {/* right side content*/}
                <div className="rounded-3xl pt-5 text-2xl">Welcome, {formData.username || " User"}</div> {/* top nav*/}

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
                            {!isUserEdit ? (<button type="button" onClick={handleEdit} className="text-white  rounded-xl hover:bg-blue-400  bg-blue-500 h-[50px] w-[100px]">Edit</button>)
                                : (<button type="button" onClick={handleSave} className="text-white justify-self-end rounded-xl hover:bg-green-400  bg-green-500 h-[50px] w-[100px]">Save</button>)
                            }
                        </div>


                    </div>
                    <div className="grid grid-cols-3 pt-5">

                        <label className="flex flex-col "> Full name
                            {isUserEdit ?
                                (<input type="text" 
                                    name="fullName"
                                    value={ formData.fullName} 
                                    onChange={handleChange} 
                                    placeholder="Your Full Name" className=" bg-[#F3F3F3] pl-3 w-[70%] h-[50px] rounded-xl mt-3 hover:border-2 border-blue-300"></input>) :
                                (<div className="mt-3  w-[70%] h-[50px] pt-3 pl-3 bg-[#F3F3F3] rounded-xl">
                                    { loggedUsername || formData.fullName || "Full Name"}
                                </div>)}
                        </label>

                        <label className="flex flex-col mb-5">Username
                            {isUserEdit ?
                                (<input type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="Your Username"
                                    className="bg-[#F3F3F3] pl-3 w-[70%] h-[50px] rounded-xl mt-3 hover:border-2 border-blue-300"></input>) :
                                (<div className="mt-3 w-[70%] h-[50px] pt-3 pl-3 bg-[#F3F3F3] rounded-xl">
                                    {(formData.username) || "Username"}
                                </div>)}
                        </label>

                        <label className="flex flex-col"> Program of Study
                            {isUserEdit ?
                                (<input type="text"
                                    name="programOfStudy"
                                    value={formData.programOfStudy}
                                    onChange={handleChange}
                                    placeholder="Your Progam"
                                    className="bg-[#F3F3F3] pl-3 w-[70%] h-[50px] rounded-xl mt-3 hover:border-2 border-blue-300"></input>) :
                                (<div className="mt-3 w-[70%] h-[50px] pt-3 pl-3 bg-[#F3F3F3] rounded-xl">
                                    {formData.programOfStudy || "Program of Study"}
                                </div>)}
                        </label>

                    </div>
                    <div className="grid grid-cols-3 pt-5">
                        <label className="flex flex-col "> Location
                            {isUserEdit ?
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

                        <label className="flex flex-col mb-5">Institution
                            {isUserEdit ?
                                (<input type="text"
                                    name="institution"
                                    value={formData.institution}
                                    onChange={handleChange}
                                    placeholder="Your Institution"
                                    className="bg-[#F3F3F3] pl-3 w-[70%] h-[50px] rounded-xl mt-3 hover:border-2 border-blue-300"></input>) :
                                (<div className="mt-3 w-[70%] h-[50px] pt-3 pl-3 bg-[#F3F3F3] rounded-xl">
                                    {formData.institution || "Institution"}
                                </div>)}
                        </label>

                        <label className="flex flex-col"> Gender
                            {isUserEdit ?
                                (<select type="text"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="bg-[#F3F3F3] w-[70%] h-[50px] rounded-xl mt-3 pl-3 hover:border-2 border-blue-300">
                                    <option>M</option>
                                    <option>F</option>
                                    <option>X</option>

                                </select>) :
                                (<div className="mt-3 w-[70%] h-[50px] pt-3 pl-3 bg-[#F3F3F3] rounded-xl">
                                    {formData.gender || "Gender"}
                                </div>)}
                        </label>
                    </div>






                </div>

            </div>


        </div>
    );

};

export default UserProfilePage;