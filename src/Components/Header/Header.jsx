import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import Paper from '../Assets/Icons/Paper.png';
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
                        <Link to="/" className="menuList text-[#6f6f6f] hover:text-blue-300 text-lg">Home</Link>
                        <Link to="/Jobs" className="menuList text-[#6f6f6f] hover:text-blue-300 text-lg">Jobs</Link>
                        <Link to="/Companies" className="menuList text-[#6f6f6f] hover:text-blue-300 text-lg">Companies</Link>
                        <Link to="/AboutUs" className="menuList text-[#6f6f6f] hover:text-blue-300 text-lg">About Us</Link>
                    </div>
                </div>

                <Link to={isLoggedIn? "/UserProfilePage":"/LoginPage"} className="signup">
                    <button>
                    <div style={{padding:'0px', display:"flex"}}>
                        {/* this is basically if else statement if loggen in then profile else signup */}
                        {isLoggedIn? "Profile" : "SignUp"}
                        <div style={{paddingLeft:'10px',paddingTop:'2px', display:"flex"}}>
                            <img src={Paper} alt="Paper Airplane" className="button-img" />
                        </div>
                    </div>
                    </button>
                </Link>
{/* 
                <button className="signup">
                    {isLoggedIn ? (
                        <Link to="/UserProfilePage">Profile</Link>
                    ) : (
                        <Link to="/LoginPage">SignUp</Link>
                    )}
                    <div style={{padding:'5px'}}> </div> 
                    <img src={Paper} alt="Paper Airplane" className="button-img" />
                </button> */}
            </div>
        </div>  
    );
}

export default Header;
