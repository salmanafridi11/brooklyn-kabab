"use client";

import React from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Img from "../../../../public/19.png";
export default function App() {
  return <MenuCategoryGrid />;
}

const defaultCategories = [
  "APPETIZERS",
  "SOUPS",
  "SALADS",
  "GRILLED ENT REES",
  "FAMILY MEAL",
  "ENT REES",
  "ALL DAY BREAKFAST",
];

const defaultItems = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: "Grape Leaves (4 pcs)",
  desc: "Topped with special House Vinaigrette.",
  price: "$6.00",
}));

export const MenuSection3 = ({
  backgroundImageSrc,
  categories = defaultCategories,
  activeIndex = 0,
  items = defaultItems,
  currentPage = 1,
  totalPages = 6,
  onPageChange,
}) => {
  return (
    <section
      className="relative w-full text-[#e7e7e7]"
      style={{ fontFamily: "unbounded" }}
    >
      {/* Background image slot */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={Img}
          alt="Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* subtle overlay to match the dimmed look */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Tabs */}
        <div className="overflow-x-auto">
          <div className="inline-flex gap-1.5 sm:gap-2 border border-[#C98D45] rounded-sm p-1 bg-[#232329] backdrop-blur-[1px]">
            {categories.map((cat, idx) => (
              <button
                key={cat + idx}
                className={`whitespace-nowrap px-3 sm:px-4 py-2 text-xs sm:text-sm tracking-wide rounded-[3px] transition-colors snap-center ${
                  idx === activeIndex
                    ? "bg-[#C98D45] text-white border-[#d09a5c]"
                    : "bg-transparent text-[#e7e7e7] border-[#6b4a34]/60 hover:bg-white/5"
                }`}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1  lg:grid-cols-3  gap-4 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative border border-[#6b4a34]/60 bg-[#2a2e35]/95 text-[#f2f2f2] shadow-[0_2px_0_0_rgba(0,0,0,0.4)]"
            >
              <div className="p-4 sm:p-6">
                <h3 className="text-[16px] sm:text-[17px] font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="text-[12.5px] sm:text-[13px] text-[#c9c9c9] mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="h-[52px] sm:h-[56px] bg-[#87633a] flex items-center justify-center text-white text-xs sm:text-sm tracking-wider">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-0 sm:justify-between border border-[#6b4a34]/60 bg-black/30 px-3 py-2">
          <button
            type="button"
            className="p-2 text-[#e7e7e7] hover:text-white disabled:opacity-40"
            onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
            disabled={currentPage <= 1}
            aria-label="Previous page"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 sm:gap-3 text-sm">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-sm border text-center leading-7 sm:leading-8 transition-colors ${
                  i + 1 === currentPage
                    ? "bg-[#d09a5c] text-white border-[#d09a5c]"
                    : "bg-transparent text-[#e7e7e7] border-[#6b4a34]/60 hover:bg-white/5"
                }`}
                onClick={() => onPageChange?.(i + 1)}
                aria-current={i + 1 === currentPage ? "page" : undefined}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="p-2 text-[#e7e7e7] hover:text-white disabled:opacity-40"
            onClick={() =>
              onPageChange?.(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage >= totalPages}
            aria-label="Next page"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
