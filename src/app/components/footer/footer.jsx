import React from "react";
import Img from "../../../../public/23.png";
import Img1 from "../../../../public/1.png";
import Img2 from "../../../../public/50.png";
import Img3 from "../../../../public/51.png";

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <div
      className="relative bg-black overflow-hidden "
      style={{
        backgroundImage: `url(${Img.src})`,
        fontFamily: "unbounded",
      }}
    >
      <div className="relative z-10 py-16 px-4">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h1 className="text-lg md:text-2xl lg:text-3xl  text-white leading-tight max-w-4xl mx-auto">
         From our slow-roasted Yemeni Mandi to our authentic Turkish Adana Kebab
          
          </h1>
        </div>

        {/* Footer content with border */}
        <div className="max-w-6xl mx-auto border border-amber-600  p-8 md:p-12  bg-opacity-50 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Left side - Copyright */}
            <div className="text-gray-300 text-sm md:text-base text-center md:text-left">
              <p>© Copyright Brooklyn Kebab House Inc</p>
            </div>

            {/* Center - Logo */}
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-3">
                {/* Company name */}
                <Image className="hidden md:block " src={Img3} alt="abc" />
                <Image className="hidden md:block " src={Img2} alt="abc" />
                <Image
                  className="block md:hidden h-[150px] w-[150px]"
                  src={Img2}
                  alt="abc"
                />
              </div>
            </div>
            <Image className="block md:hidden " src={Img3} alt="abc" />

            {/* Right side - Social media icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full  hover:bg-amber-600 flex items-center justify-center transition-colors duration-300 group"
              >
                <FaFacebookF className="text-white text-lg group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full  hover:bg-amber-600 flex items-center justify-center transition-colors duration-300 group"
              >
                <FaInstagram className="text-white text-lg group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full  hover:bg-amber-600 flex items-center justify-center transition-colors duration-300 group"
              >
                <FaTiktok className="text-white text-lg group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
