import React from "react";
import Img from "../../../../public/34.png";
import Img1 from "../../../../public/47.png";
import Img2 from "../../../../public/48.png";
import Image from "next/image";

const ContactSection1 = () => {
  return (
    <>
      <div>
        <Image
          className="w-full md:hidden block bg-black"
          src={Img1}
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
        <div className="flex justify-center items-center ">
          <div>
            <h1 className="text-xl pt-36 md:text-3xl md:text-start text-center lg:text-5xl font-semibold leading-tight tracking-widest mb-6 text-white">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
        <div>
        <Image
          className="w-full md:hidden block bg-black"
          src={Img2}
          alt="left"
        />
      </div>
    </>
  );
};

export default ContactSection1;
