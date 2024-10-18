import React from "react";
import logo from "../../assets/logo.png";
import Paper from '../Assets/Icons/Paper.png'
import { Link } from 'react-router-dom';
const Header = ({ setActiveComponent }) => {
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
                        <button className="menuList text-[#6f6f6f] hover:text-blue-300"><Link to="/">Home</Link></button>
                        <button className="menuList text-[#6f6f6f] hover:text-blue-300" >Jobs</button>
                        <button className="menuList text-[#6f6f6f] hover:text-blue-300" ><Link to="/CompanyPage">Companies</Link></button>
                        <button className="menuList text-[#6f6f6f] hover:text-blue-300">About Us</button>
                    </div>
                    
                </div>
                <button className="signup"><Link to="/LoginPage">SignUp</Link>
                    <div style={{padding:'5px'}}> </div> 
                    <img src={Paper} alt="Paper Airplane" className="button-img" />
                </button>
            </div>
        </div>  
    )
}

export default Header;
