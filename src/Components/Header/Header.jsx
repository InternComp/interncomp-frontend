import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import Paper from '../Assets/Icons/Paper.png';
import UserIcon from '../../assets/placeholderUser.png';
import { Link } from 'react-router-dom';

const Header = ({ setActiveComponent }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await fetch('http://localhost:3000/auth/protected', {
                    method: 'GET',
                    credentials: 'include', // Assuming cookies need to be included with the request
                });
                setIsLoggedIn(response.ok);
            } catch (error) {
                console.error('Error:', error);
                setIsLoggedIn(false);
            }
        };
        
        checkLoginStatus();
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="full-page">
            <div className='header flex justify-between items-center p-[1.5rem]'>
                <div className='logoDiv flex items-center'>
                    <img src={logo} alt="logo" className='h-[20px] w-[20px] mr-[10px]' />
                    <h1 className="logo text-[25px] flex">
                        <strong className="text-black inline-block"> Intern </strong>
                        <strong className="text-blue-300 inline-block">Comp</strong>
                    </h1>
                </div>

                <div className="menu-container flex justify-center w-full">
                    <div className="menu flex gap-8">
                        <Link to="/" className="menuList text-[#6f6f6f] hover:text-blue-300 text-lg transition ease-in-out delay-50 hover:-translate-y-1">Home</Link>
                        <Link to="/Jobs" className="menuList text-[#6f6f6f] hover:text-blue-300 text-lg transition ease-in-out delay-50 hover:-translate-y-1">Jobs</Link>
                        <Link to="/Companies" className="menuList text-[#6f6f6f] hover:text-blue-300 text-lg transition ease-in-out delay-50 hover:-translate-y-1">Companies</Link>
                        <Link to="/ComingSoon" className="menuList text-[#6f6f6f] hover:text-blue-300 text-lg transition ease-in-out delay-50 hover:-translate-y-1">About Us</Link>
                        {/* <Link to="/UserProfilePage" className="menuList text-[#6f6f6f] hover:text-blue-300 text-lg transition ease-in-out delay-50 hover:-translate-y-1">User Profile</Link> */}
                        {/* <Link to="/RecruiterProfilePage" className="menuList text-[#6f6f6f] hover:text-blue-300 text-lg transition ease-in-out delay-50 hover:-translate-y-1">Recruiter Profile</Link> */}

                    </div>
                </div>

                {isLoggedIn ? (
                        <Link to="/UserProfilePage" >
                            <div className=" w-[40px] h-[40px] rounded-full shadow-inner transition ease-in-out delay-50 hover:-translate-y-1 hover:shadow-xl hover:scale-110 ">
                                <img src={UserIcon} className=""/>
                            </div>
                        </Link>     
                ):(
                    <button className="signup">
                        <Link to="/LoginPage">SignUp</Link>
                        <img src={Paper} alt="Paper Airplane" className="button-img" />
                    </button>
                    )}

                {/* <button >
                    {isLoggedIn ? (
                        <Link to="/UserProfilePage">Profile</Link>
                    ) : (
                        <Link to="/LoginPage">SignUp</Link>
                    )}
                    
                </button> */}
            </div>
        </div>  
    );
}

export default Header;
