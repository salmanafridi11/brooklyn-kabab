import React from "react";
import Img from "../../../public/53.png";
import Img1 from "../../../public/54.png";
import Img2 from "../../../public/55.png";
import Img3 from "../../../public/56.png";
import Img4 from "../../../public/57.png";
import Img5 from "../../../public/58.png";
import Img6 from "../../../public/59.png";
import Img7 from "../../../public/61.png";
import Img8 from "../../../public/62.png";
import Img9 from "../../../public/60.png";
import Img10 from "../../../public/63.png";
import Img11 from "../../../public/64.png";
import Img12 from "../../../public/65.png";
import Img13 from "../../../public/66.png";
import Img14 from "../../../public/67.png";


import Image from "next/image";

const Section8 = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: "unbounded" }}>
      <div className="mx-auto md:bg-[#f5eadc] bg-white relative overflow-hidden">
        {/* Geometric Pattern Background */}
        <div className="">
          {/* Left triangular pattern */}
          <div className="h-[1000px] absolute left-0 hidden md:block">
            <Image src={Img} alt="left" />
          </div>
          <div className="h-[1000px] absolute left-0 block md:hidden">
            <Image src={Img10} alt="left" />
          </div>
          {/* Right triangular pattern */}
          <div className="h-[1000px] absolute right-0 hidden md:block">
            <Image src={Img1} alt="left" />
          </div>
          <div className="h-[1000px] absolute right-0 block md:hidden">
            <Image src={Img11} alt="left" />
          </div>
        </div>

        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 w-full md:max-w-[800px] lg:max-w-[800px] xl:max-w-[800px] 2xl:max-w-[1000px] py-8 md:py-16">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12 relative">
              {/* Decorative swirls */}
              <div className="relative pb-12 md:pb-20">
                <Image
                  className="absolute hidden md:block"
                  src={Img2}
                  alt="left"
                />
                <Image
                  className="absolute right-0 hidden md:block"
                  src={Img3}
                  alt="left"
                />
              </div>

              <div className="text-base md:text-lg text-black mb-2 font-normal text-center">
                Aldenaire & Partners
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-[40px] text-black tracking-tight text-center">
                Dessert Menu
              </h1>
            </div>

            {/* Ice Cream Section */}
            <div className="mb-8 md:mb-10 relative">
              <div className="hidden md:block absolute -left-2 md:-left-5 top-0 text-white px-2 py-5 text-sm font-semibold tracking-widest origin-bottom-left">
                <Image className="w-8 md:w-[40px]" src={Img5} alt="left" />
              </div>

              {/* Image placeholder for ice cream */}
              <div className="absolute hidden md:flex right-2 md:right-5 top-5  items-center justify-center">
                <Image
                  className=" md:w-[250px] md:h-auto"
                  src={Img4}
                  alt="left"
                />
              </div>

              <div className="ml-6 md:ml-10">
                <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 md:gap-64 items-center mb-5">
                  <Image
                    className=" md:w-[250px] md:h-auto md:hidden block"
                    src={Img12}
                    alt="left"
                  />
                  <Image
                    className=" md:w-[250px] md:h-auto md:hidden block"
                    src={Img4}
                    alt="left"
                  />
                  <h2 className="text-xl md:text-2xl text-gray-800 md:text-start">
                    WAFFLES
                  </h2>
                  <div className="text-lg md:text-xl text-gray-800 md:text-start">
                    $1,234,56
                  </div>
                </div>

                <div className="text-xs text-gray-600 mb-4 leading-tight md:text-start text-center">
                  CLASSIC WAFFLE
                  <br />
                  CLASSIC WAFFLE
                  <br />
                  CLASSIC WAFFLE
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start text-center sm:text-left">
                    <div className="flex-1 max-w-sm">
                      <h3 className="text-lg md:text-xl text-gray-800 mb-1 md:text-start text-center">
                        Chocolate Ice Cream
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed md:text-start text-center">
                        Chocolate ice cream with brownie chunks-rich and
                        indulgent.C
                      </p>
                    </div>
                    <div className="text-lg text-gray-800 ml-0 sm:ml-5 mt-2 sm:mt-0 md:text-start text-center">
                      $1,234,56
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start text-center sm:text-left">
                    <div className="flex-1 max-w-sm">
                      <h3 className="text-lg md:text-xl text-gray-800 mb-1  md:text-start">
                        Strawberry Ice Cream
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed  md:text-start">
                        Strawberry ice cream with real strawberry puree swirls.
                      </p>
                    </div>
                    <div className="text-lg text-gray-800 ml-0 sm:ml-5 mt-2 sm:mt-0  md:text-start">
                      $1,234,56
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Muffins Section */}
            <div className="mb-8 md:mb-10 relative">
              <div className="hidden md:block absolute -left-2 md:-left-5 top-0 text-white py-5 text-sm font-semibold tracking-widest origin-bottom-left">
                <Image className="w-8 md:w-[250px]" src={Img6} alt="left" />
              </div>

              {/* Image placeholder for muffins */}
              <div className="absolute right-2 md:right-5 top-16 md:top-20 w-12 h-12 md:w-20 md:h-20 hidden md:flex items-center justify-center">
                <Image
                  className="w-12 h-12 md:w-auto md:h-[250px]"
                  src={Img7}
                  alt="left"
                />
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start text-center">
                  <Image
                    className=" md:w-[250px] md:h-auto md:hidden block my-5"
                    src={Img13}
                    alt="left"
                  />
                  <Image
                    className=" md:w-[250px] md:h-auto md:hidden block my-5"
                    src={Img6}
                    alt="left"
                  />
                  <div className="flex-1 max-w-xs">
                    <h3 className="text-lg md:text-xl text-gray-800 mb-1 md:text-start text-center">
                      Blueberry Muffin
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed md:text-start text-center">
                      A classic muffin bursting with fresh blueberries, moist
                      and fluffy.
                    </p>
                  </div>
                  <div className="text-lg text-gray-800 ml-0 sm:ml-5 mt-2 sm:mt-0 md:text-start text-center">
                    $1,234,56
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start text-center">
                  <div className="flex-1 max-w-xs">
                    <h3 className="text-lg md:text-xl text-gray-800 mb-1 md:text-start text-center">
                      Chocolate Chip Muffin
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed md:text-start text-center">
                      Rich, buttery batter with smooth chocolate chunks.
                    </p>
                  </div>
                  <div className="text-lg text-gray-800 ml-0 sm:ml-5 mt-2 sm:mt-0 md:text-start text-center">
                    $1,234,56
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start text-center">
                  <div className="flex-1 max-w-xs">
                    <h3 className="text-lg md:text-xl text-gray-800 mb-1 md:text-start text-center">
                      Banana Nut Muffin
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed md:text-start text-center">
                      Ripe bananas and crunchy walnuts
                    </p>
                  </div>
                  <div className="text-lg text-gray-800 ml-0 sm:ml-5 mt-2 sm:mt-0 md:text-start text-center">
                    $1,234,56
                  </div>
                </div>
              </div>
            </div>

            {/* Cakes Section */}
            <div className="relative mt-12 md:mt-16">
              <div className="hidden md:block absolute  left-[-15px] md:left-[-25px] top-0 text-white px-2 py-5 text-sm font-semibold tracking-widest origin-bottom-left">
                <Image className="w-8 md:h-[250px]" src={Img8} alt="left" />
              </div>

              {/* Image placeholder for cakes */}
              <div className="absolute right-2 md:right-5 bottom-5 hidden md:flex items-center justify-center">
                <Image
                  className="w-12 h-12 md:w-[250px] md:h-full"
                  src={Img9}
                  alt="left"
                />
              </div>

              <div className="space-y-6 ml-6 md:ml-[40px]">
                <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start text-center sm:text-left">
                     <Image
                    className=" md:w-[250px] md:h-auto md:hidden block my-5"
                    src={Img14}
                    alt="left"
                  />
                  <Image
                    className=" md:w-[250px] md:h-auto md:hidden block my-5"
                    src={Img6}
                    alt="left"
                  />
                  <div className="flex-1 max-w-sm">
                    <h3 className="text-lg md:text-xl text-gray-800 mb-1 md:text-start text-center">
                      Cheesecake
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed md:text-start text-center">
                      A rich dessert with a graham cracker crust and a creamy
                      cheese filling
                    </p>
                  </div>
                  <div className="text-lg text-gray-800 ml-0 sm:ml-5 mt-2 sm:mt-0 md:text-start text-center">
                    $1,234,56
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start text-center sm:text-left">
                  <div className="flex-1 max-w-sm">
                    <h3 className="text-lg md:text-xl text-gray-800 mb-1 md:text-start text-center">
                      Red Velvet
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed md:text-start text-center">
                      A red cake with a tangy flavor, often paired with cream
                      choose frosting.
                    </p>
                  </div>
                  <div className="text-lg text-gray-800 ml-0 sm:ml-5 mt-2 sm:mt-0 md:text-start text-center">
                    $1,234,56
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start text-center sm:text-left">
                  <div className="flex-1 max-w-sm">
                    <h3 className="text-lg md:text-xl text-gray-800 mb-1 md:text-start text-center">
                      Vanilla Cake
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed md:text-start text-center">
                      Simple and classic, perfect for pairing with various
                      frostings and toppings.
                    </p>
                  </div>
                  <div className="text-lg text-gray-800 ml-0 sm:ml-5 mt-2 sm:mt-0 md:text-start text-center">
                    $1,234,56
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
