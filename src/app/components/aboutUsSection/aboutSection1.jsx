import React from "react";
import Img from "../../../../public/24.png";
import Img5 from "../../../../public/47.png";
import Img6 from "../../../../public/48.png";
import Image from "next/image";
const AboutSection1 = () => {
  return (
    <>
      <div>
        <Image className="w-full md:hidden block bg-black" src={Img5} alt="left" />
      </div>
      <div
        className="min-h-[400px] w-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${Img.src})`,
          fontFamily: "unbounded",
        }}
      >
        <div className="flex justify-center items-center px-4">
          <h1 className="text-2xl uppercase font-normal  md:text-3xl lg:text-5xl  leading-tight tracking-widest text-center md:text-start text-white pt-32 md:pt-32 lg:pt-40 mb-6">
            About Us
          </h1>
        </div>
      </div>
        <div>
        <Image className="w-full md:hidden block bg-black" src={Img6} alt="left" />
      </div>
    </>
  );
};

export default AboutSection1;
