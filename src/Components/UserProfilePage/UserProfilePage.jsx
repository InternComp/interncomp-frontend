import React, { useState, useEffect } from "react";
import UserInfoForm from "./UserInfoForm.jsx";
import pencilEdit from "../../assets/pencilEdit.png";
import saveButton from "../../assets/saveButton.png";
import UserIcon from "../../assets/UserIcon.png";


const UserProfilePage = () => {
    // Use a single state object for the form data
    const [formData, setFormData] = useState({
        username: "",
        programOfStudy: "Computer Science",
        location: "New York",
        institution: "NYU",
    });

    const [isUserEdit, setIsUserEdit] = useState(false);

    const [loggedUsername, setLoggedUsername] = useState("");

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
                } else {
                    throw new Error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchUserData();
    }, []); // Empty dependency array ensures this runs only once when the component mounts


    const handleEdit = () => {
        setIsUserEdit(true);
    };

    const handleSave = () => {
        setIsUserEdit(false);
        setFormData(formData);
    };

    return (
        <div className="flex pb-[100px] scroll-smooth">
            {/* Top-left section */}
            <div className="flex flex-col w-[40%] h-[200%] ml-10 drop-shadow-sm">
                <div className="flex flex-row bg-[#E1E1E1] w-80 h-[60%] mt-5 mb-5 pl-5 pr-5 pb-10 pt-5 rounded-lg text-white">
                    <button className="w-[10%] h-[7%] " type="button">
                        <img src={pencilEdit} />
                    </button>

                    <div className="drop-shadow-lg rounded-full bg-[#EEEEEE] mt-5 p-5">
                        <button>
                            <img src={UserIcon} alt="profilePicture" className="rounded-full object-center mb-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Top-right section */}
            <div className="w-[150%] ml-10 mr-10">
                <div className="grid grid-cols-12 bg-[#E1E1E1] mt-5 pl-10 pb-10 rounded-lg text-white drop-shadow-lg">
                    <div className="flex col-start-1 col-end-12 w-[90%]">
                        <div>
                            {isUserEdit ? (
                                <UserInfoForm
                                    formData={formData}
                                    onFormDataChange={setFormData}
                                />
                            ) : (
                                <div className="grid grid-rows-4 pt-10 gap-y-5">
                                    <label className="text-black">
                                        Username: {formData.username || loggedUsername}
                                    </label>
                                    <label className="text-black">
                                        Program of Study: {formData.programOfStudy}
                                    </label>
                                    <label className="text-black">
                                        Location: {formData.location}
                                    </label>
                                    <label className="text-black">
                                        Institution: {formData.institution}
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-[20%] h-[20%] mt-[20%] ml-[70%] justify-items-end">
                        {isUserEdit ? (
                            <button type="submit" onClick={handleSave}>
                                <img src={saveButton} />
                            </button>
                        ) : (
                            <button type="button" onClick={handleEdit}>
                                <img src={pencilEdit} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;
