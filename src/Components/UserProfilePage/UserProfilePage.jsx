import React, { useState, useEffect } from "react";
/* import ProfileIcon from "../../assets/ProfileIcon.png";
import settingsIcon from "../../assets/settingsIcon.png";
import saveButton from "../../assets/saveButton.png";
import briefcaseIcon from "../../assets/briefcase.png";
import reviewsIcon from "../../assets/review.png"; */
import LogoutIcon from "../../assets/logout.png";
import UserIcon from "../../assets/placeholderUser.png";
import ConfirmationModal from "./ConfirmationModal";
import PhotoModal from "./PhotoModal";


const UserProfilePage = () => {

    const [loggedUsername, setLoggedUsername] = useState("");
    const [user, setUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [userId, setUserId] = useState(null);
    const [loggedEmail, setLoggedEmail] = useState("");
    const [profileImage, setProfileImage] = useState(UserIcon);
    const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
    const handleOpenPhotoModal = () => setIsPhotoModalOpen(true);
    const handleClosePhotoModal = () => setIsPhotoModalOpen(false);



    // Fetch user data when the component mounts
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:3000/auth/protected', {
                    method: 'GET',
                    credentials: 'include', 
                });
                if (response.ok) {
                    const data = await response.json();
                    setLoggedUsername(data.username);
                    setLoggedEmail(data.email);
                    setUserId(data.userid)
                } else {
                    throw new Error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchUserData();
    }, []); // Empty dependency array ensures this runs only once when the component mounts

        // Fetch detailed user profile using 'userId'
        useEffect(() => {
            if (!userId) return; // Ensure 'userId' is present
            const fetchUserProfile = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/user/${userId}`);
                    if (response.ok) {
                        const userInfo = await response.json();
                        setUser(userInfo);
                    } else {
                        throw new Error('Failed to fetch user profile');
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            };
            fetchUserProfile();
        }, [userId]);

    // const [formData, setFormData] = useState({
    //     name: "",
    //     username: "",
    //     programOfStudy: "",
    //     location: "",
    //     institution: "",
    //     gender: "X",
    //     email:"",
    // })

    const [formData, setFormData] = useState({
        name: "",
        program: "",
        university: "",
        location: "",
        institution: "",
        email:"",
        profileImage: null,
    })
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || "",
                program: user.program || "",
                university: user.university || "",
                location: user.location || "",
                institution: user.institution || "",
                email: user.email || "",
            });
        }
    }, [user]);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file)); // Preview the image
            setFormData((prevFormData) => ({
                ...prevFormData,
                profileImage: file, // Store the file in the form data
            }));
        }
    };
    

    const [isUserEdit, setIsUserEdit] = useState(false);

    const handleEdit = () => {
        setIsUserEdit(true);
    };

    const handleSave = async () => {
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("program", formData.program);
            formDataToSend.append("university", formData.university);
            formDataToSend.append("location", formData.location);
            formDataToSend.append("institution", formData.institution);
            formDataToSend.append("email", formData.email);
            if (formData.profileImage) {
                formDataToSend.append("profileImage", formData.profileImage);
            }
    
            const response = await fetch(`http://localhost:3000/user/${userId}`, {
                method: "POST",
                body: formDataToSend,
            });
            
            setIsUserEdit(false);
            if (response.ok) {
                const updatedUser = await response.json();
                setFormData(updatedUser.data);
                setProfileImage(updatedUser.data.profileImage || UserIcon);
            } else {
                throw new Error("Failed to update profile");
            }
        } catch (error) {
            console.error(error);
        }
    };


    const handleRemovePhoto = () => {
        setProfileImage(UserIcon); // Set to placeholder image
        setFormData((prevFormData) => ({
            ...prevFormData,
            profileImage: null,
        }));
        handleClosePhotoModal();
    };

    const handleUploadPhoto = (newPhoto) => {
        const photoUrl = URL.createObjectURL(newPhoto);
        setProfileImage(photoUrl); // Preview the new photo
        setFormData((prevFormData) => ({
            ...prevFormData,
            profileImage: newPhoto, // Store the file in the form data
        }));
    };
    
    

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:3000/logout', {
                method: 'GET', // Include cookies for the request
                credentials: 'include'
            });
            if (response.ok) {
                console.log("response ok")
                window.location.href='/'
            } else {
                throw new Error("Logout failed");
            }
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };


    return (
        
            <div className="grid grid-cols-12 grid-flow-row bg-[#F3F3F3] h-[750px] ">
            {/*left vertical nav*/}{/* 
            <div className="grid grid-rows-9 pt-5 bg-white w-[80px] justify-items-center h-[750px]  col-start-1 col-span-1 rounded-r-lg "> 
                <div className="row-start-1 w-[80px] h-[80px] hover:bg-blue-100 p-5"><img src={ProfileIcon} /></div>
                <div className="row-start-2 w-[80px] h-[80px] hover:bg-blue-100 p-5"><img src={briefcaseIcon} /></div>
                <div className="row-start-3 w-[80px] h-[80px] hover:bg-blue-100 p-5"><img src={reviewsIcon} /></div>
                <div className="row-start-4 w-[80px] h-[80px] hover:bg-blue-100 p-5"><img src={settingsIcon} /></div>

            </div>
            */}
            <div className="grid grid-rows-6 col-start-2 col-span-11 pb-10 pr-5 "> {/* right side content*/}
                <div className="rounded-3xl pt-5 text-2xl">Welcome, {formData.name || " User"}</div> {/* top nav*/}

                <div className="rounded-3xl bg-white row-start-2 row-span-5 grid grid-rows-4 p-10"> {/* main content*/}
                    <div className=" grid grid-cols-2 ">
                        <div className="col-start-1 col-span-1 flex">
                            <div className="rounded-full w-[120px] h-[120px] bg-[#F3F3F3] transition ease-in-out delay-50 hover:scale-110">
                                {isUserEdit ? (
                                    <>
                                        <div
                                            className="rounded-full w-[120px] h-[120px] bg-[#F3F3F3] transition ease-in-out delay-50 hover:scale-100 cursor-pointer"
                                            onClick={isUserEdit ? handleOpenPhotoModal : undefined}
                                        >
                                            <img
                                                src={profileImage}
                                                alt="Profile"
                                                className="rounded-full w-[120px] h-[120px] bg-[#F3F3F3] object-cover"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <img src={profileImage} alt="Profile" className="rounded-full w-[120px] h-[120px] bg-[#F3F3F3] object-cover" />
                                )}
                                

                            </div>
                            <div className="ml-10">
                                <p className="mt-10"> {loggedUsername||" "}<br></br></p>

                                <p className="mt-5"> { loggedEmail}</p>
                            </div>
                            <PhotoModal
                                isOpen={isPhotoModalOpen}
                                currentPhoto={profileImage}
                                onClose={handleClosePhotoModal}
                                onRemove={handleRemovePhoto}
                                onUpload={handleUploadPhoto}
                            />

                        </div>
                        <div className="justify-self-end">
                            {!isUserEdit ? (<button type="button" onClick={handleEdit} className="text-white  rounded-xl hover:bg-blue-400  bg-blue-500 h-[50px] w-[100px] transition ease-in-out delay-50 hover:-translate-y-1">Edit</button>)
                                : (<button type="button" onClick={handleSave} className="text-white justify-self-end rounded-xl hover:bg-green-400  bg-green-500 h-[50px] w-[100px] transition ease-in-out delay-50 hover:-translate-y-1">Save</button>)
                            }
                        </div>


                    </div>
                    <div className="grid grid-cols-3 pt-5">

                        <label className="flex flex-col "> Full name
                            {isUserEdit ?
                                (<input type="text" 
                                    name="name"
                                    value={ formData.name} 
                                    onChange={handleChange} 
                                    placeholder="Your Full Name" className=" bg-[#F3F3F3] pl-3 w-[70%] h-[50px] rounded-xl mt-3 hover:border-2 border-blue-300"></input>) :
                                (<div className="mt-3  w-[70%] h-[50px] pt-3 pl-3 bg-[#F3F3F3] rounded-xl">
                                    {formData.name || "Full Name"}
                                </div>)}
                        </label>

                        {/* <label className="flex flex-col mb-5">Username
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
                        </label> */}

                        <label className="flex flex-col"> Program of Study
                            {isUserEdit ?
                                (<input type="text"
                                    name="program"
                                    value={formData.program}
                                    onChange={handleChange}
                                    placeholder="Your Progam"
                                    className="bg-[#F3F3F3] pl-3 w-[70%] h-[50px] rounded-xl mt-3 hover:border-2 border-blue-300"></input>) :
                                (<div className="mt-3 w-[70%] h-[50px] pt-3 pl-3 bg-[#F3F3F3] rounded-xl">
                                    {formData.program || "Program of Study"}
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


                        {/* <label className="flex flex-col"> Gender
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
                        </label> */}
                    </div>

                    
                    <div className="grid grid-cols-3  pt-5 place-items-end">
                        <button  class=" flex col-start-3 text-black hover:text-white  rounded-xl hover:bg-slate-400  bg-slate-300 h-12 w-28 p-3 transition ease-in-out delay-50 hover:-translate-y-1"
                                    type="button"
                                    onClick={openModal}> 
                            <img src={LogoutIcon} className="h-5 pr-2 "/> Log out 

                        </button>
                        <ConfirmationModal
                                isOpen={isModalOpen}
                                title="Confirm Logout"
                                message="Are you sure you want to log out?"
                                onConfirm={() => {
                                    closeModal(); // Close the modal
                                    handleLogout(); // Call the logout function
                                }}
                                onCancel={closeModal} // Close the modal if the user cancels
                            />
                    
                    </div>





                </div>

            </div>


        </div>
    );

};

export default UserProfilePage;