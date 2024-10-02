import React from "react";
import logo from "../../assets/logo.png";
import spotify from "../../assets/spotify.png";
import slack from "../../assets/slack.png";
import adobe from "../../assets/adobe.png";
import asana from "../../assets/asana.png";
import linear from "../../assets/linear.png";

const Footer = () => {
    return (
        <div className="footer p-[4rem] mb-2 bg-gray-500 w-full grid grid-cols-4 items-start justify-start gap-[4rem]"> {/* Added gap between grid columns */}
            <div>
                <div className="logoDiv flex items-center">
                    <img src={logo} alt="logo" className='h-[15px] w-[15px] mr-[5px]' />
                    <h1 className="logo text-[14px] text-white">
                        InternComp
                    </h1>
                </div>

                <p className="text-white text-[12px] pb-[1px] opacity-80 leading-6 mb-[2rem]"> {/* Adjusted margin-bottom */}
                    We connect talented individuals with innovative companies, making the process seamless and impactful. Whether you're seeking the perfect job or the ideal candidate,
                    we ensure the best matches for lasting success.
                </p>
            </div>

            <div className="grid text-left ml-[2rem]"> {/* Added ml-[4rem] for more space */}
                <span className="divTitle text-[12px] font-semibold pb-[1.5rem] text-white">
                    Company
                </span>
                <div className="grid gap-3 text-[12px]">
                    <li className="text-white opacity-[.7] hover:opacity-[1]">About Us</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">Features</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
                </div>
            </div>

            <div className="grid text-left">
                <span className="divTitle text-[12px] font-semibold pb-[1.5rem] text-white">
                    Job Categories
                </span>
                <div className="grid gap-3 text-[12px]">
                    <li className="text-white opacity-[.7] hover:opacity-[1]">IT&Technology</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">Construction</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">Automation</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">Telecommunications</li>
                </div>
            </div>

            <div className="grid text-left text-[12px]">
                <span className="divTitle text-[12px] font-semibold pb-[1.5rem] text-white">
                    Contact Support
                </span>
                
                <div className="grid gap-3 text-[15px]">
                    <small className="opacity-[.7] text-white">
                        contactSupport@gmail.com
                    </small>
                    <small className="opacity-[.7] text-white">
                        phone: +1 800 456 7890
                    </small>
                </div>
            </div>
        </div>
    )
}

export default Footer;