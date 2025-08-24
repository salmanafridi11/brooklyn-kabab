import React from "react";
import Img from "../../../public/13.png";
import Img1 from "../../../public/14.png";
import Img2 from "../../../public/18.png";
import Img3 from "../../../public/15.png";
import Img4 from "../../../public/16.png";
import Img5 from "../../../public/17.png";

import Image from "next/image";
const Section4 = () => {
  return (
    <div
      className="bg-cover bg-center px-4 sm:px-8 md:px-14 lg:px-24 xl:px-40 2xl:px-60 pt-10 md:pt-12 pb-16 md:pb-28 min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh]"
      style={{
        backgroundImage: `url(${Img.src})`,
        fontFamily: "unbounded",
      }}
    >
      <div
        className="relative z-10 pt-16 pb-32 md:px-12 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Img1.src})` }}
      >
        {/* Title */}
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl text-white uppercase mb-6 sm:mb-10 md:mb-12">
          Fresh And Delicious
        </h2>

        {/* Food Items Grid */}
        <div className="flex md:flex-row flex-col justify-center gap-8 md:gap-6">
          {/* Mix Grill */}
          <div className="flex flex-col items-center w-full md:w-52 lg:w-[500px]">
            <div className="relative overflow-hidden  shadow-lg">
              <Image
                src={Img2}
                alt="Hummus"
                className="object-cover md:w-[400px] h-[290px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#c98d45]/60 text-white font-normal py-3 px-4 text-center">
                Mix GRILL
              </div>
            </div>
          </div>

          {/* Falafel */}
          <div className="flex flex-col items-center  w-full md:w-52 lg:w-[500px]">
            <div className="relative overflow-hidden  shadow-lg">
              <Image
                src={Img3}
                alt="FLAFEL"
                className="object-cover md:w-[400px] h-[290px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#c98d45]/60 text-white font-normal py-3 px-4 text-center">
                FALAFEL
              </div>
            </div>
          </div>

          {/* Massloug Lamb */}
          <div className="flex flex-col items-center  w-full md:w-52 lg:w-[500px]">
            <div className="relative overflow-hidden  shadow-lg">
              <Image
                src={Img3}
                alt="MASSLOUG LAMB"
                className="object-cover md:w-[400px] h-[290px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#c98d45]/60 text-white font-normal py-3 px-4 text-center">
                MASSLOUG LAMB
              </div>
            </div>
          </div>

          {/* Baba Ghanoush */}
          <div className="flex flex-col items-center  w-full md:w-58 lg:w-[500px]">
            <div className="relative overflow-hidden  shadow-lg">
              <Image
                src={Img5}
                alt=" BABAGHANOUSH"
                className="object-cover md:w-[400px] h-[290px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#c98d45]/60 text-white font-normal py-3 px-4 text-center">
                BABA GHANOUSH
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
