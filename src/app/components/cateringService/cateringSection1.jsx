import React from "react";
import Img from "../../../../public/34.png";
import Img2 from "../../../../public/47.png";
import Img3 from "../../../../public/48.png";

import Image from "next/image";

const CateringSection1 = () => {
  return (
    <>
      <div>
        <Image
          className="w-full md:hidden block bg-black"
          src={Img2}
          alt="left"
        />
      </div>
      <div
        className="min-h-[400px] w-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${Img.src})`,
          fontFamily: "unbounded",
        }}
      >
        <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 pt-32 md:pt-36 lg:pt-44 pb-10">
          <div className="">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl  leading-tight tracking-widest mb-3 sm:mb-4 text-white text-center md:text-start">
             BOOK A RESERVATION
            </h1>
            <p className="text-[12px] sm:text-sm uppercase text-[#ca8e46] text-center md:text-center">
              Indulge in a Culinary Experience with Our Catering Service
            </p>
          </div>
        </div>
      </div>
        <div>
        <Image
          className="w-full md:hidden block bg-black"
          src={Img3}
          alt="left"
        />
      </div>
    </>
  );
};

export default CateringSection1;
