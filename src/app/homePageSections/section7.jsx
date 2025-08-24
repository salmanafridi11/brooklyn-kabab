import React from "react";
import Img from "../../../public/19.png";
import Img1 from "../../../public/52.png";
import Image from "next/image";

const Section7 = () => {
  return (
    <div
      className="bg-cover relative bg-center  min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] pt-32 md:py-32"
      style={{
        backgroundImage: `url(${Img.src})`,
        fontFamily: "unbounded",
      }}
    >
      <div className="flex justify-center items-center md:px-0 px-5">
        <Image src={Img1} alt="choclate" />
      </div>
    </div>
  );
};

export default Section7;
