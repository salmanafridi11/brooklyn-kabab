import React from "react";
import Image from "next/image";
import Img from "../../../public/10.png";
import Img1 from "../../../public/11.png";
import Img2 from "../../../public/12.png";

const Section3 = () => {
  return (
    <div
      className="main bg-[#18181D] relative"
      style={{ fontFamily: "unbounded" }}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-center items-center px-4 sm:px-6 md:px-10 lg:px-12 py-10">
        <div className="column1 flex-shrink-0 w-full md:w-auto flex justify-center md:block">
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
            Welcome To Brooklyn Kabab House
          </h1>
          <p
            className="text-xl sm:text-2xl text-[#C98D45] pb-3 sm:pb-4"
            style={{ fontFamily: "alura" }}
          >
            The Art of Cookings
          </p>
          <p className="font-thin text-gray-50 text-sm sm:text-base leading-relaxed sm:leading-7">
            Our restaurant provides a cozy and welcoming atmosphere, perfect for
            a night out <br></br> with family and friends. Our dishes are made
            with fresh ingredients and traditional <br></br> recipes, ensuring
            an authentic dining experience. At Brooklyn Kebab House, we offer{" "}
            <br></br> a range of delicious kebabsand other dishes inspired by
            Yemeni and Turkish cuisine.<br></br> Our friendly staff is always
            ready to assist you and make your dining experience<br></br>{" "}
            memorable. We also offer takeout and delivery options for your
            convenience. Come <br></br> and savor the authentic taste of Yemeni
            and Turkish cuisine at our restaurant. We <br></br> look forward to
            serving you!
          </p>
          <button className="bg-[#C98D45] mt-12 text-white px-6 py-3  font-normal text-sm hover:bg-yellow-600 transition-all shadow-lg">
            Read More
          </button>
          <div>
            <Image
              width={250}
              height={200}
              className="absolute right-2 sm:right-4 md:right-6 top-2 sm:top-3 md:top-4 w-[160px] sm:w-[200px] md:w-[250px] h-auto"
              src={Img1}
              alt="absolute"
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 250px"
            />
            <Image
              width={250}
              height={200}
              className="absolute right-2 sm:right-4 md:right-6 top-[10%] sm:top-[8%] md:top-[7%] w-[160px] sm:w-[200px] md:w-[250px] h-auto"
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

export default Section3;
