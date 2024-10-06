import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
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
                        <li className="menuList text-[#6f6f6f] hover:text-blue-300">Home</li>
                        <li className="menuList text-[#6f6f6f] hover:text-blue-300">Jobs</li>
                        <li className="menuList text-[#6f6f6f] hover:text-blue-300">Companies</li>
                        <li className="menuList text-[#6f6f6f] hover:text-blue-300">About us</li>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Header;