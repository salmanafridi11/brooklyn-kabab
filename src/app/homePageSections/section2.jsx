import React from "react";
import Img from "../../../public/5.png";
import Img1 from "../../../public/6.png";
import Img2 from "../../../public/7.png";
import Img3 from "../../../public/8.png";
import Img4 from "../../../public/9.png";
import Img5 from "../../../public/47.png";
import Img6 from "../../../public/48.png";

import Image from "next/image";

const Section2 = () => {
  return (
    <div className="main relative bg-white" style={{ fontFamily: "unbounded" }}>
      <div className="justify-between absolute w-full hidden md:flex">
        <Image className="" src={Img} alt="left" />
        <Image src={Img1} alt="left" />
      </div>
      <div>
        <Image className="w-full md:hidden block" src={Img5} alt="left" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center  gap-6 w-full pb-12 pt-20  px-4">
        {/* Hummus Section */}

        <div className="flex-1 md:max-w-sm max-w-full text-center">
          <div className="relative overflow-hidden  shadow-lg">
            <Image
              src={Img2}
              alt="Hummus"
              className="object-cover md:w-[400px] h-[290px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="uppercase absolute bottom-0 left-0 right-0 bg-[#c98d45]/60 text-white font-normal py-3 px-4 text-center">
              HUMMUS
            </div>
          </div>
        </div>

        {/* Kebab Section */}
        <div className="flex-1 md:max-w-sm max-w-full text-center">
         <div className="relative overflow-hidden  shadow-lg">
            <Image
              src={Img3}
              alt="Hummus"
              className="object-cover md:w-[400px] h-[290px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="uppercase absolute bottom-0 left-0 right-0 bg-[#c98d45]/60 text-white font-normal py-3 px-4 text-center">
              Kebab
            </div>
          </div>
        </div>

        {/* Shawarma Section */}
        <div className="flex-1 md:max-w-sm max-w-full text-center">
         <div className="relative overflow-hidden  shadow-lg">
            <Image
              src={Img4}
              alt="Hummus"
              className="object-cover md:w-[400px] h-[290px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="uppercase absolute bottom-0 left-0 right-0 bg-[#c98d45]/60 text-white font-normal py-3 px-4 text-center">
              SHAWARMA
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image className="w-full md:hidden block" src={Img6} alt="left" />
      </div>
    </div>
  );
};

export default Section2;
