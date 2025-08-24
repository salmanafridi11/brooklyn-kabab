import React from "react";
import Img from "../../../../public/25.png";
import Img1 from "../../../../public/26.png";

import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
const AboutSection3 = () => {
  return (
  <div
  className="relative bg-center bg-no-repeat bg-cover px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-10 sm:py-14 md:py-20 lg:py-24 xl:py-28"
  style={{
    backgroundImage: `url(${Img.src})`,
    fontFamily: "unbounded",
  }}
>
  <div className="bg-[#2e3035] text-[#e5e5e5] border border-[#C98D45]">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
        {/* Left content */}
        <div className="lg:col-span-7">
          <h2 className="text-white text-base sm:text-lg md:text-2xl leading-tight tracking-wide  lg:text-left">
            OUR RESTAURANT
          </h2>

          <p
            className="text-[#d6a062] text-2xl sm:text-[26px] md:text-[32px] mt-1  lg:text-left"
            style={{ fontFamily: "alura" }}
          >
            Cozy & Romantic
          </p>

          <div className="h-[3px] w-10 sm:w-12 bg-[#d6a062] mt-4 mb-6 lg:mx-0" />

          <div className="space-y-4 text-[#cfcfcf] leading-7 md:leading-8 text-[15px] md:text-[16px] text-center lg:text-left px-1 sm:px-0">
            <p>
              From our Yemeni dishes, you can indulge in mouth-watering Massloug Lamb and
              Kabsah Chicken, made with perfectly cooked meat and fragrant rice. Our Lamb
              Haneeth is slow-cooked to perfection, ensuring tender and juicy meat that
              melts in your mouth. Our YEMENI DESSERTS, is a must-try for Sweet lovers.
            </p>
            <p>
              In our Turkish menu, we offer classic dishes such as Chicken Kabab and Kafta
              Chicken Kabab, both served with warm bread and fresh salad. Our Mix Appetizer
              Plate, made with Hummas, baba ghanoush, 3 pcs falafel, is a perfect appetizer
              or snack. And if you&apos;re in the mood for something sweet, our Baklava and
              Turkish Delight will satisfy your cravings.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <button
              className="mt-8 inline-flex items-center gap-2  bg-[#C98D45] hover:bg-[#b6763e] transition-colors text-white tracking-[0.15em] text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3"
              type="button"
            >
              READ MORE
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[16/12] sm:aspect-[4/3] lg:aspect-[5/5]">
            <Image
              src={Img1}
              alt={"right side image"}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 520px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default AboutSection3;
