import React from "react";
import Img from "../../../../public/25.png";
import Img1 from "../../../../public/30.png";
import Img2 from "../../../../public/49.png";

import Image from "next/image";

const MenuSection1 = () => {
  return (
    <div
      className="p-16 bg-center bg-no-repeat bg-cover "
      style={{
        backgroundImage: `url(${Img.src})`,
        fontFamily: "unbounded",
      }}
    >
      <div className="flex justify-center">
        <Image className="hidden md:block" src={Img1} alt="menu" />
        <Image className="block md:hidden" src={Img2} alt="menu" />

      </div>
    </div>
  );
};

export default MenuSection1;
