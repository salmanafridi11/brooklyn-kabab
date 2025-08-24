"use client";

import Image from "next/image";
import React from "react";
import { Great_Vibes } from "next/font/google";
import { FiChevronRight } from "react-icons/fi";
import Img from "../../../../public/68.png";
import Img1 from "../../../../public/69.png";
import Img2 from "../../../../public/70.png";
import Img3 from "../../../../public/71.png";
import Img4 from "../../../../public/72.png";
import Img5 from "../../../../public/73.png";
import Img6 from "../../../../public/74.png";
import Img7 from "../../../../public/75.png";
import Img8 from "../../../../public/76.png";
import Img9 from "../../../../public/77.png";
import Img10 from "../../../../public/78.png";
import Img11 from "../../../../public/79.png";
import Img12 from "../../../../public/80.png";
import Img13 from "../../../../public/81.png";
import Img14 from "../../../../public/82.png";
import Img15 from "../../../../public/83.png";
import Img16 from "../../../../public/84.png";
import Img17 from "../../../../public/85.png";
import Img18 from "../../../../public/86.png";
import Img19 from "../../../../public/87.png";
import Img20 from "../../../../public/88.png";
import Img21 from "../../../../public/89.png";
import Img22 from "../../../../public/90.png";
import Img23 from "../../../../public/91.png";
import Img24 from "../../../../public/92.png";
import Img25 from "../../../../public/93.png";
import Img26 from "../../../../public/94.png";
import Img27 from "../../../../public/95.png";
import Img28 from "../../../../public/96.png";
import Img29 from "../../../../public/97.png";
import Img30 from "../../../../public/98.png";
import Img31 from "../../../../public/99.png";
import Img32 from "../../../../public/100.png";
import Img33 from "../../../../public/101.png";
import Img34 from "../../../../public/102.png";
import Img35 from "../../../../public/103.png";
import Img36 from "../../../../public/104.png";
import Img37 from "../../../../public/105.png";
import Img38 from "../../../../public/106.png";
import Img39 from "../../../../public/107.png";
import Img40 from "../../../../public/108.png";
import Img41 from "../../../../public/109.png";
import Img42 from "../../../../public/110.png";
import Img43 from "../../../../public/111.png";
import Img44 from "../../../../public/112.png";
import Img45 from "../../../../public/113.png";
import Img46 from "../../../../public/114.png";
import Img47 from "../../../../public/115.png";
import Img48 from "../../../../public/116.png";
import Img49 from "../../../../public/117.png";
import Img50 from "../../../../public/63.png";
import Img51 from "../../../../public/64.png";


const menuItems = [
  { name: "Cheese Burger", img: Img2 },
  { name: "Margherita Pizza", img: Img3 },
  { name: "Sprich Sandwich", img: Img4 },
  { name: "Chicken Shawarma", img: Img5 },
  { name: "Falafel Beans", img: Img6 },
  { name: "Hummus", img: Img7 },
  { name: "Sku Pasta & Pomice", img: Img8 },
  { name: "Soy Azmaneleri & Tomato", img: Img9 },
  { name: "Lamm Döner", img: Img10 },
  { name: "Vegetarisch Pizza & Oliv", img: Img11 },
  { name: "Gıozleme", img: Img12 },
  { name: "Vezirtoprak Pizza", img: Img13 },
  { name: "Doner im Lamm-Direk", img: Img14 },
  { name: "Gemüse Suppe", img: Img15 },
  { name: "Chicken Salad", img: Img16 },
  { name: "Turkey Burger", img: Img17 },
  { name: "Falafel Rinde", img: Img18 },
  { name: "Döner Kebab", img: Img19 },
  { name: "Gıozleme Special", img: Img20 },
  { name: "Döner Teller", img: Img21 },
  { name: "Döner Plate", img: Img22 },
  { name: "Coffee & Tea", img: Img23 },
  { name: "Döner Box", img: Img24 },
  { name: "Mozzarella Sandwich", img: Img25 },
  { name: "Chicken Döner", img: Img26 },
  { name: "Kıottos & Fish", img: Img27 },
  { name: "Sıt Fish & Meat", img: Img28 },
  { name: "Chicken & Fries", img: Img29 },
  { name: "Spezialitäten", img: Img30 },
  { name: "Spice & Herb", img: Img31 },
  { name: "Döner Special", img: Img32 },
  { name: "Chips mit Chicken", img: Img33 },
  { name: "Fish & Meat Special", img: Img34 },
  { name: "Döner Special Mix", img: Img35 },
  { name: "Köfte Sandwich Spiez", img: Img36 },
  { name: "Turkey Salad", img: Img37 },
  { name: "Healthy Salad Cocktail", img: Img38 },
  { name: "Gıch & Vegetables", img: Img39 },
  { name: "Tea & Sauce", img: Img40 },
  { name: "Lamar Pomegranate Drink", img: Img41 },
  { name: "Grilled Fish", img: Img42 },
  { name: "Döner Special", img: Img43 },
  { name: "Rice & Chicken Stew", img: Img44 },
  { name: "Wings & Serving Spiez", img: Img45 },
  { name: "Chips & Pepsi", img: Img46 },
  { name: "Chicken Wings", img: Img47 },
  { name: "Döner Special", img: Img48 },
  { name: "Mixed Vegetables", img: Img49 },
];

const MenuSection2 = () => {
  return (
    <div
      className="min-h-screen  bg-[#f5eadc] relative overflow-hidden"
      style={{ fontFamily: "unbounded" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 ">
        {/* Left triangular pattern */}
        <div className="absolute left-0 top-0 h-full">
          <Image className="h-full hidden md:block" src={Img} alt="left" />
          {/* <Image className=" block md:hidden min-h-screen" src={Img50} alt="left" /> */}

        </div>

        {/* Right triangular pattern */}
        <div className="absolute right-0 top-0  h-full">
          <Image className="h-full hidden md:block" src={Img1} alt="left" />
          {/* <Image className="block md:hidden h-full" src={Img51} alt="left" /> */}

        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8  rounded-lg p-6 mx-4">
          <h1 className="text-2xl md:text-[32px] font-normal text-black mb-3">
            Our Menu
          </h1>
          <p className="text-sm md:text-[32px] text-black mx-auto font-normal leading-relaxed">
            Explore Our Selection Of Authentic Yemeni And Turkish Dishes,
            Crafted To Offer You The Best Of Both Rich Traditions.
          </p>

          {/* Search and Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="flex items-center bg-white rounded-full px-4 py-2 min-w-[200px]">
              <svg
                className="w-4 h-4 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="outline-none flex-1 py-3 text-sm bg-white w-[400px]"
              />
            </div>
            <button className="bg-[#C98D45] text-white px-12 py-2 rounded-full text-sm hover:bg-[#B8935A] transition-colors">
              All
            </button>
            <button className="bg-transparent border-[#C98D45] border-1 text-[#C98D45]  px-4 py-2 rounded-full text-sm hover:bg-[#B8935A] hover:text-white transition-colors">
              Appetizers
            </button>

            <button className="bg-transparent border-[#C98D45] border-1 text-[#C98D45]  px-4 py-2 rounded-full text-sm hover:bg-[#B8935A] hover:text-white transition-colors">
              Main Course
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-8 px-4">
          {menuItems?.map((item, index) => (
            <div
              key={index}
              className="bg-white/95 md:h-[346px] h-[270px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Placeholder */}
              <div className=" bg-gradient-to-br from-gray-100 to-gray-200  justify-center ">
                <div className="text-center ">
                  <div className="  rounded-full flex items-center justify-center  mb-2">
                    <Image className="w-full " src={item.img} alt="menu" />
                  </div>
                </div>
              </div>

              {/* Overlay for item name on image (like original) */}
              <div className="relative -mt-2 z-10  mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="uppercase absolute bottom-0 left-0 right-0 bg-[#c98d45]/60 text-white font-normal py-3 px-4 text-center">
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="h-8"></div>
      </div>
    </div>
  );
};

export default MenuSection2;
