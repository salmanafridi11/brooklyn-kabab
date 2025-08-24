import React from "react";
import Image from "next/image";
import Img from "../../../../public/36.png";
import Img1 from "../../../../public/37.png";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";
const ContactSection2 = () => {
  return (
    <div
      className="main bg-cover bg-center bg-no-repeat relative py-16"
      style={{
        backgroundImage: `url(${Img.src})`,
        fontFamily: "unbounded",
      }}
    >
      <div className="flex gap-12 justify-center items-center p-12">
        <div className="column1 ">
          <Image className="object-cover h-[400px]" src={Img1} alt="left image" />
          <div className="">
            <div className="flex gap-16 justify-center  mt-12 text-center">
              <div className="flex flex-col items-center">
                <FiMapPin className="text-[#d09a5c] text-3xl mb-2" />
                <div className="font-semibold tracking-wide text-white">Address</div>
                <div className="text-sm text-white/90 leading-5 whitespace-pre-line">
                  6823 5th Ave{"\n"}Brooklyn, NY 11220
                </div>
              </div>

              <div className="flex flex-col items-center">
                <FiPhone className="text-[#d09a5c] text-3xl mb-2" />
                <div className="font-semibold tracking-wide text-white">Phone</div>
                <div className="text-sm text-white/90">(929) 292-2001</div>
              </div>

              <div className="flex flex-col items-center">
                <FiClock className="text-[#d09a5c] text-3xl mb-2" />
                <div className="font-semibold tracking-wide text-white">Time</div>
                <div className="text-sm text-white/90">10:00am to 2:00am</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection2;
