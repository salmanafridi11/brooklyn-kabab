"use client";

import React, { useState } from "react";
import { FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import Img from "../../../public/50.png";
import Img1 from "../../../public/46.png";

import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const baseLink =
    "text-black hover:text-orange-100 transition-colors duration-200 font-medium tracking-wide";
  const active = "bg-[#c98d45] text-white";

  return (
    <div className="w-full" style={{ fontFamily: "unbounded" }}>
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center md:justify-center justify-between h-20 md:gap-36">
            {/* Logo Section */}
            <div className="">
              <Image
                className="hidden md:block h-[60px] w-[60px]"
                src={Img}
                alt="logo"
              />
              <Image className="block md:hidden" src={Img1} alt="Mobile logo" />
            </div>

            {/* Navigation Menu for desktop */}
            <nav className="hidden md:flex items-center space-x-2 text-[12px] font-normal">
              <a
                href="/"
                className={`${baseLink} ${
                  pathname === "/" ? active : ""
                } py-12 px-3`}
              >
                HOME
              </a>
              <a
                href="/about-us"
                className={`${baseLink} ${
                  pathname === "/about-us" ? active : ""
                } py-5 px-1`}
              >
                ABOUT US
              </a>
              <a
                href="/menu"
                className={`${baseLink} ${
                  pathname === "/menu" ? active : ""
                } py-7 px-2`}
              >
                MENU
              </a>
              <a
                href="/catering"
                className={`${baseLink} ${
                  pathname === "/catering" ? active : ""
                } py-7 px-2`}
              >
                CATERING SERVICE
              </a>
              <a
                href="/contact-us"
                className={`${baseLink} ${
                  pathname === "/contact-us" ? active : ""
                } py-7 px-2`}
              >
                CONTACT US
              </a>
              <a
                href="/order-online"
                className={`${baseLink} ${
                  pathname === "/order-online" ? active : ""
                } py-7 px-2`}
              >
                ORDER ONLINE
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative z-[99999]">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-black hover:text-orange-100 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
              <nav className="flex flex-col space-y-4">
                <a
                  href="/"
                  className={`${baseLink} ${
                    pathname === "/" ? active : ""
                  } py-3 px-4 rounded`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </a>
                <a
                  href="/about-us"
                  className={`${baseLink} ${
                    pathname === "/about-us" ? active : ""
                  } py-3 px-4 rounded`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ABOUT US
                </a>
                <a
                  href="/menu"
                  className={`${baseLink} ${
                    pathname === "/menu" ? active : ""
                  } py-3 px-4 rounded`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  MENU
                </a>
                <a
                  href="/catering"
                  className={`${baseLink} ${
                    pathname === "/catering" ? active : ""
                  } py-3 px-4 rounded`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CATERING SERVICE
                </a>
                <a
                  href="/contact-us"
                  className={`${baseLink} ${
                    pathname === "/contact-us" ? active : ""
                  } py-3 px-4 rounded`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT US
                </a>
                <a
                  href="/order-online"
                  className={`${baseLink} ${
                    pathname === "/order-online" ? active : ""
                  } py-3 px-4 rounded`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ORDER ONLINE
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
