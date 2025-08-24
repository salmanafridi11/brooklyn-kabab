import React from "react";
import Img from "../../../../public/10.png";
import Img1 from "../../../../public/11.png";
import Img2 from "../../../../public/12.png";
import Image from "next/image";
const AboutSection2 = () => {
  return (
    <div
      className="main bg-[#18181D] relative "
      style={{ fontFamily: "unbounded" }}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center px-0 sm:px-0  py-10">
        <div className="column1 flex-shrink-0 w-full md:w-auto md:block flex justify-center">
          <Image
            className="object-cover w-full h-auto md:h-[600px]"
            src={Img}
            alt="left image"
            width={400}
            height={400}
            priority
          />
        </div>
        <div className="column2 text-white w-full md:w-auto">
          <h1 className="text-xl sm:text-2xl lg:text-3xl pb-3 sm:pb-4 uppercase">
            About Brooklyn Kabab House
          </h1>
          <p
            className="text-xl sm:text-2xl text-[#C98D45] pb-3 sm:pb-4"
            style={{ fontFamily: "alura" }}
          >
            Who We Are
          </p>
          <p className="font-thin text-gray-50 text-sm sm:text-base leading-relaxed sm:leading-7">
            Welcome to our restaurant where we serve the best of Yemeni and{" "}
            <br className="hidden md:block" />
            Turkish <br className="hidden md:block" />
            cuisine. Our chefs bring the authentic taste of Yemeni and Turkish
            food to <br className="hidden md:block" />
            your plate with their expertise and passion.
          </p>

          <div>
            <Image
              width={250}
              height={200}
              className="absolute right-2 sm:right-4 md:right-0 top-2 sm:top-3 md:top-4 w-[160px] sm:w-[200px] md:w-[250px] h-auto "
              src={Img1}
              alt="absolute"
            />
            <Image
              width={250}
              height={200}
              className="absolute right-2 sm:right-4 md:right-0 top-[10%] sm:top-[8%] md:top-[7%] w-[160px] sm:w-[200px] md:w-[250px] h-auto"
              src={Img2}
              alt="absolute"
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 250px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
