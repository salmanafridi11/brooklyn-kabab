import React from "react";
import Img from "../../../../public/35.png";
import Img1 from "../../../../public/11.png";
import Img2 from "../../../../public/12.png";
import Image from "next/image";
const CateringSection2 = () => {
  return (
    <div
      className="main bg-[#18181D] relative"
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
          <h1 className="text-lg sm:text-xl md:text-2xl pb-3 sm:pb-4 uppercase leading-relaxed">
            Satisfy Your Guests' Taste Buds with{" "}
            <br className="hidden md:block" /> Our Delicious Catering Menu.
          </h1>

          {/* hr must be self-closing in JSX */}
          <hr
            className="border-0 bg-[#C98D45] w-[80px] sm:w-[100px] h-[6px] sm:h-[8px] mb-4"
            style={{ fontFamily: "alura" }}
          />

          <p className="font-normal text-[#999999] text-sm sm:text-base leading-7 sm:leading-8">
            Our catering service provides an exceptional culinary experience for
            your <br className="hidden md:block" />
            next event. Whether you are hosting a corporate gathering, a
            wedding, or a <br className="hidden md:block" />
            private party, we offer a wide range of menu options to suit your
            taste and <br className="hidden md:block" />
            dietary preferences.
            
            Our team of professional chefs and staff take pride in <br className="hidden md:block" />using only
            the 
            freshest ingredients and preparing everything from scratch <br className="hidden md:block" /> to ensure{" "}
 
            quality and taste. We can create customized menus that suit your <br className="hidden md:block" />
            event 
            theme, or you can choose from our pre-designed menu options that
            cater <br className="hidden md:block" />
            to a variety of tastes. We take pride in making every event
            memorable,
           
            and <br className="hidden md:block" />
            our catering service is no exception. We strive to exceed your{" "}
            
            expectations
            <br className="hidden md:block" />
            and provide a dining experience that you and your guests will
            remember <br className="hidden md:block" />
            for years to come. Contact us today to discuss your catering needs{" "}
            <br className="hidden md:block" />
            and let us help you plan a successful event.
          </p>

          <div>
            <Image
              width={250}
              height={200}
              className="absolute right-2 sm:right-4 md:right-0 top-2 sm:top-3 md:top-4 w-[150px] sm:w-[200px] md:w-[250px] h-auto"
              src={Img1}
              alt="absolute"
              sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 250px"
            />
            <Image
              width={250}
              height={200}
              className="absolute right-2 sm:right-4 md:right-0 top-[10%] sm:top-[8%] md:top-[7%] w-[150px] sm:w-[200px] md:w-[250px] h-auto"
              src={Img2}
              alt="absolute"
              sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 250px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateringSection2;
