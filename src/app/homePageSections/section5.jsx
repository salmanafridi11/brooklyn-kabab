"use client";
import React, { useState } from "react";
import Img from "../../../public/19.png";
import { FaCalendarAlt, FaClock, FaUsers, FaBaby } from "react-icons/fa";

const Section5 = () => {
  const [formData, setFormData] = useState({
    name: "",
    persons: "",
    kids: "",
    date: "",
    time: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div
      className="relative min-h-screen bg-gray-900 overflow-hidden py-16"
      style={{ fontFamily: "unbounded" }}
    >
      {/* Geometric chevron pattern background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Img.src})`,
        }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Right side - Call to Action */}
          <div className="lg:flex lg:items-center lg:justify-center order-1 md:order-1">
            <div className="mt-6 lg:mt-0 border-2 border-[#C98D45] p-5 sm:p-8 lg:p-12 bg-gray-800/60 backdrop-blur-sm">
              <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-white text-lg sm:text-xl lg:text-[24px] font-light uppercase tracking-wider">
                  Like To Book A Table?
                </h2>
                <div className="text-[#C98D45] text-xl sm:text-2xl lg:text-[40px] font-bold tracking-wide">
                  CALL AHEAD (929) 292-2001
                </div>
              </div>
            </div>
          </div>
          {/* Left side - Reservation Form */}
          <div
            className="space-y-5 sm:space-y-3 order-2 md:order-2"
            style={{ fontFamily: "sans-serif" }}
          >
            {/* Reserve label */}
            <div
              className="text-amber-500 italic text-2xl sm:text-3xl font-light"
              style={{ fontFamily: "alura" }}
            >
              Reserve
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[40px] font-normal text-white leading-tight"
              style={{ fontFamily: "unbounded" }}
            >
              Book A Table
            </h1>

            {/* Form */}
            <div className="space-y-3 sm:space-y-4">
              {/* Name field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 sm:py-4 bg-white text-gray-800 placeholder-gray-500 border-none rounded-none text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Person and Kids row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="relative">
                  <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    name="persons"
                    placeholder="2 Person"
                    value={formData.persons}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white text-gray-800 placeholder-gray-500 border-none rounded-none text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div className="relative">
                  <FaBaby className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    name="kids"
                    placeholder="3 Kids"
                    value={formData.kids}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white text-gray-800 placeholder-gray-500 border-none rounded-none text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Date and Time row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="md:w-full w-[400px] pl-12 pr-4 py-3 sm:py-4 bg-white text-gray-800 border-none rounded-none text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div className="relative">
                  <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="time"
                    name="time"
                    placeholder="07:00 PM"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="md:w-full w-[400px] pl-12 pr-4 py-3 sm:py-4 bg-white text-gray-800 placeholder-gray-500 border-none rounded-none text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Special Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 sm:py-4 bg-white text-gray-800 placeholder-gray-500 border-none rounded-none text-base sm:text-lg resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Submit button */}
              <button className="bg-[#C98D45] hover:bg-amber-700 text-white font-normal px-6 sm:px-8 py-3 sm:py-4  text-base sm:text-lg transition-colors duration-300 transform hover:scale-105">
                Confirm Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
