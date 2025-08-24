"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel1 from "../../../public/2.webp";
import Carousel2 from "../../../public/3.webp";
import carousel3 from "../../../public/4.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";


const Section1 = () => {
  const router = useRouter();
  return (
    <section
      className="relative overflow-hidden"
      style={{ fontFamily: "unbounded" }}
    >
      {/* Carousel as Background */}
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={false}
        showIndicators={true}
        renderIndicator={(onClickHandler, isSelected, index, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            className={`inline-block z-50 w-12 h-1 mx-1 rounded-full transition-all cursor-pointer ${
              isSelected ? "bg-yellow-400" : "bg-gray-400"
            }`}
            aria-label={label}
          />
        )}
        className="absolute inset-0 z-0"
      >
        {/* Solution 1: Better responsive heights with aspect ratio */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen">
          <Image
            src={Carousel1}
            alt="Carousel Image 1"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center center", // Better centering
            }}
            priority // For better loading
          />
        </div>
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen">
          <Image
            src={Carousel2}
            alt="Carousel Image 2"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen">
          <Image
            src={carousel3}
            alt="Carousel Image 3"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
      </Carousel>

      {/* Decorative Elements - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 opacity-30 z-30 hidden sm:block">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-red-400 rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-6 h-6 border-2 border-yellow-400 transform rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-1 bg-orange-400 transform rotate-12"></div>

        {/* Sparkle effects */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-ping animation-delay-200"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white rounded-full animate-ping animation-delay-400"></div>
      </div>

      {/* Main Content - Better mobile spacing */}
      <div className="relative z-[9] m-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex items-center justify-center">
        <div>
          {/* Left Content */}
          <div className="text-white text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-normal leading-tight tracking-widest">
              ENJOY YOUR FOOD
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center">
              <button
                onClick={() => router.push("/menu")}
                className="bg-[#C98D45] cursor-pointer text-white px-6 py-3  font-normal text-sm hover:bg-yellow-600 transition-all shadow-lg"
              >
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
