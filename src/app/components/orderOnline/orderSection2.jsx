"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
    { name: "Grubhub", img: Img1, link: "https://www.grubhub.com" },
    { name: "Doordash", img: Img2, link: "https://www.doordash.com" },
    { name: "UberEats", img: Img3, link: "https://www.ubereats.com/?utm_source=AdWords_Brand&utm_campaign=CM2551141-search-google-brand_1_-99_US-National_e_web_acq_cpc_en_T92_Generic_BM_ubereats_kwd-111378724377_756813756881_172131283663_b_m&campaign_id=22118132589&adg_id=172131283663&fi_id=&match=b&net=g&dev=m&dev_m=&ad_id=756813756881&cre=756813756881&kwid=kwd-111378724377&kw=ubereats&placement=&tar=&gclsrc=aw.ds&gad_source=1&gad_campaignid=22118132589&gbraid=0AAAAADi-0CgeRS9BhHGyQbzoXCV-RURtY&gclid=Cj0KCQjw8KrFBhDUARIsAMvIApYnGnROjx-8SUuVfVO072R3BFl4JxXJvCKXorQsmyAk96ScTbl9iIYaAualEALw_wcB" },
    { name: "Seamless", img: Img4, link: "https://www.seamless.com" },
    { name: "Toasttab", img: Img5, link: "https://order.toasttab.com" },
    { name: "Yelp", img: Img6, link: "https://www.yelp.com" },
    { name: "Postmates", img: Img7, link: "https://postmates.com" },
    { name: "Slicelife", img: Img8, link: "https://www.slicelife.com" },
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
              {/* Image slot */}
              <div className="relative w-full aspect-square bg-white/5 border border-white/10">
                <Image src={it.img} alt={it.name} fill className="object-cover" />
              
              </div>

              {/* Label */}
              <div className="mt-4 text-white/90">{it.name}</div>

              {/* Button with Link */}
              <Link href={it.link} passHref>
                <button
                  type="button"
                  className="mt-3 cursor-pointer inline-flex items-center justify-center rounded-sm bg-[#c88c45] px-5 py-4 text-xs tracking-wider text-white hover:bg-[#b6844b] transition-colors"
                >
                  ORDER ONLINE
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}