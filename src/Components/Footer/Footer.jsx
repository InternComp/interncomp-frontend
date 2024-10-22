import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <div className="footer p-4 sm:p-8 lg:p-[4rem] bg-gray-500 w-full grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-start justify-start overflow-hidden">
            {/* Logo and Description Section */}
            <div>
                <div className="logoDiv flex items-center mb-4">
                    <img src={logo} alt="logo" className="h-6 max-w-full mr-2" />
                    <h1 className="logo text-base lg:text-[14px] text-white">
                        InternComp
                    </h1>
                </div>
                <p className="text-white text-sm lg:text-[12px] opacity-80 leading-6 mb-4">
                    We connect talented individuals with innovative companies, making the process seamless and impactful. Whether you're seeking the perfect job or the ideal candidate, we ensure the best matches for lasting success.
                </p>
            </div>

            {/* Company Links Section */}
            <div className="text-left">
                <span className="divTitle text-sm lg:text-[12px] font-semibold pb-4 text-white">
                    Company
                </span>
                <ul className="mt-4 space-y-2 text-sm lg:text-[12px]">
                    <li className="text-white opacity-70 hover:opacity-100">About Us</li>
                    <li className="text-white opacity-70 hover:opacity-100">Features</li>
                    <li className="text-white opacity-70 hover:opacity-100">News</li>
                    <li className="text-white opacity-70 hover:opacity-100">FAQ</li>
                </ul>
            </div>

            {/* Job Categories Section */}
            <div className="text-left">
                <span className="divTitle text-sm lg:text-[12px] font-semibold pb-4 text-white">
                    Job Categories
                </span>
                <ul className="mt-4 space-y-2 text-sm lg:text-[12px]">
                    <li className="text-white opacity-70 hover:opacity-100">IT & Technology</li>
                    <li className="text-white opacity-70 hover:opacity-100">Construction</li>
                    <li className="text-white opacity-70 hover:opacity-100">Automation</li>
                    <li className="text-white opacity-70 hover:opacity-100">Telecommunications</li>
                </ul>
            </div>

            {/* Contact Support Section */}
            <div className="text-left">
                <span className="divTitle text-sm lg:text-[12px] font-semibold pb-4 text-white">
                    Contact Support
                </span>
                <ul className="mt-4 space-y-2 text-sm lg:text-[15px]">
                    <li className="text-white opacity-70">contactSupport@gmail.com</li>
                    <li className="text-white opacity-70">phone: +1 800 456 7890</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
