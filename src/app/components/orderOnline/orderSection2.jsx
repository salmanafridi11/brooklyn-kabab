"use client";

import React from "react";
import Image from "next/image";
import Img from "../../../../public/36.png";
import Img1 from "../../../../public/45.png";
import Img2 from "../../../../public/38.png";
import Img3 from "../../../../public/39.png";
import Img4 from "../../../../public/40.png";
import Img5 from "../../../../public/41.png";
import Img6 from "../../../../public/42.png";
import Img7 from "../../../../public/43.png";
import Img8 from "../../../../public/44.png";

export default function OrderSection2() {
  const items = [
    { name: "Grubhub", img: Img1 },
    { name: "Doordash", img: Img2 },
    { name: "UberEats", img: Img3 },
    { name: "Seemless", img: Img4 },
    { name: "Toasttab", img: Img5 },
    { name: "Yelp", img: Img6 },
    { name: "Postmates", img: Img7 },
    { name: "Slicelife", img: Img8 },
  ];

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{
        backgroundImage: `url(${Img.src})`,
        fontFamily: "unbounded",
      }}
    >
      {/* Decorative angled sides */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 sm:w-52 opacity-70">
        <div className="absolute -left-28 top-10 h-72 w-72 rotate-45 bg-[#5a422e]/40" />
        <div className="absolute -left-16 top-40 h-72 w-72 rotate-45 bg-[#7a5a3c]/30" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 sm:w-52 opacity-70">
        <div className="absolute -right-28 top-20 h-72 w-72 -rotate-45 bg-[#5a422e]/40" />
        <div className="absolute -right-16 top-52 h-72 w-72 -rotate-45 bg-[#7a5a3c]/30" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Heading */}
        <div className="text-center">
          <h2 className="tracking-[0.35em] text-sm sm:text-base text-white/90">
            ORDER ONLINE
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-10 bg-[#c29258]" />
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-0">
          {items.map((it, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Image slot (replace the wrapper with your Image src) */}
              <div className="relative w-full aspect-square bg-white/5 border border-white/10">
                <Image src={it.img} alt={"abc"} fill className="object-cover" />

                <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
                  Add {it.name} Image
                </div>
              </div>

              {/* Label */}
              <div className="mt-4 text-white/90">{it.name}</div>

              {/* Button */}
              <button
                type="button"
                className="mt-3 inline-flex items-center justify-center rounded-sm bg-[#c88c45] px-5 py-4 text-xs  tracking-wider text-white hover:bg-[#b6844b] transition-colors"
              >
                ORDER ONLINE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
