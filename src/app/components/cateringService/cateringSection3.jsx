"use client";
import React, { useState } from "react";
import Img from "../../../../public/25.png";
const CateringSection3 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    specialRequests: "",
    agreeToTerms: false,
  });

  const timeSlots = [
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTimeSelect = (time) => {
    setFormData((prev) => ({
      ...prev,
      time,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="min-h-screen relative bg-gray-800 text-white p-4 md:p-8 bg-center bg-cover"
      style={{
        backgroundImage: `url(${Img.src})`,
        fontFamily: "unbounded",
      }}
    >
      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Event Details Section */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Event Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white text-gray-900 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white text-gray-900 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <input
                type="number"
                name="guests"
                placeholder="Number of guests"
                value={formData.guests}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white text-gray-900 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-lg font-medium">
                Special Request or Note
              </label>
              <textarea
                name="specialRequests"
                placeholder="Please let us know about any dietary restrictions, allergies, special occasions, or other requests..."
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 bg-white text-gray-900 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-vertical"
              />
            </div>
          </div>

          {/* Reservation Details Section */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Reservation Details
            </h2>

            <div>
              <input
                type="date"
                name="date"
                placeholder="dd/mm/yyyy"
                value={formData.date}
                onChange={handleInputChange}
                className="md:w-full w-[400px] px-4 py-3 bg-white text-gray-900 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-lg font-medium">Perfect Time</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {timeSlots.map((time, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleTimeSelect(time)}
                    className={`px-4 py-3 rounded-md border-2 transition-all duration-200 ${
                      formData.time === time
                        ? "bg-amber-600 border-amber-600 text-white"
                        : "bg-white border-gray-300 text-gray-900 hover:border-amber-500 hover:bg-amber-50"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Submit Section */}
        <div className="mt-8 space-y-6">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 accent-amber-600 rounded focus:ring-2 focus:ring-amber-500"
            />
            <label className="text-sm text-gray-300 leading-relaxed">
              I agree to the terms and conditions and cancellation policy. I
              understand that reservations must be cancelled at least 2 hours in
              advance.
            </label>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={!formData.agreeToTerms}
            className={`w-full py-4 rounded-md font-semibold text-lg transition-all duration-200 ${
              formData.agreeToTerms
                ? "bg-amber-600 hover:bg-amber-700 text-white cursor-pointer"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CateringSection3;
