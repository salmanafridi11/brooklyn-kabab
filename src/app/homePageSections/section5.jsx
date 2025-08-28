"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Img from "../../../public/19.png";
import { FaCalendarAlt, FaClock, FaUsers, FaBaby } from "react-icons/fa";
import { toast } from "react-toastify";

const Section5 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Validate time is between 12 PM (12:00) and 2 AM (02:00)
  const validateTime = (time) => {
    if (!time) return "Time is required";

    const [hours, minutes] = time.split(":").map(Number);
    const timeIn24 = hours * 100 + minutes;

    // Valid times: 12:00 PM to 11:59 PM (1200-2359) OR 12:00 AM to 2:00 AM (0000-0200)
    if (
      (timeIn24 >= 1200 && timeIn24 <= 2359) ||
      (timeIn24 >= 0 && timeIn24 <= 200)
    ) {
      return true;
    }

    return "Time must be between 12:00 PM and 2:00 AM";
  };

  const onSubmit = async (data) => {
    try {
      // EmailJS configuration - replace with your actual service ID, template ID, and public key
      const serviceId = "service_72ihri8";
      const templateId = "template_1llvqvh";
      const publicKey = "KqCvksIHGFFtlqAry";

      // Format the data for email template
      const emailData = {
        customer_name: data.name,
        number_of_persons: data.persons,
        reservation_date: data.date,
        reservation_time: data.time,
        special_message: data.message || "No special message",
      };

      await emailjs.send(serviceId, templateId, emailData, publicKey);

      toast.success("Reservation request sent successfully!");
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send reservation request. Please try again.");
    }
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3 sm:space-y-4"
            >
              {/* Name field */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  className="w-full px-4 py-3 sm:py-4 bg-white text-gray-800 placeholder-gray-500 border-none rounded-none text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Person field */}
              <div className="">
                <div className="relative">
                  <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="number"
                    placeholder="2 Person"
                    {...register("persons", {
                      required: "Number of persons is required",
                      min: {
                        value: 1,
                        message: "At least 1 person required",
                      },
                      max: {
                        value: 20,
                        message: "Maximum 20 persons allowed",
                      },
                    })}
                    className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white text-gray-800 placeholder-gray-500 border-none rounded-none text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                {errors.persons && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.persons.message}
                  </p>
                )}
              </div>

              {/* Date and Time row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="date"
                    {...register("date", {
                      required: "Date is required",
                      validate: (value) => {
                        if (value < today) {
                          return "Date cannot be in the past";
                        }
                        return true;
                      },
                    })}
                    min={today}
                    className="md:w-full w-[400px] pl-12 pr-4 py-3 sm:py-4 bg-white text-gray-800 border-none rounded-none text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  {errors.date && (
                    <p className="text-red-400 text-sm my-1 absolute">
                      {errors.date.message}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="time"
                    placeholder="07:00 PM"
                    {...register("time", {
                      validate: validateTime,
                    })}
                    className="md:w-full w-[400px] pl-12 pr-4 py-3 sm:py-4 bg-white text-gray-800 placeholder-gray-500 border-none rounded-none text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  {errors.time && (
                    <p className="text-red-400 text-sm mt-1 absolute">
                      {errors.time.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message field */}
              <div className="relative mt-7">
                <textarea
                  placeholder="Special Message"
                  rows={4}
                  {...register("message")}
                  className="w-full px-4 py-3 sm:py-4 bg-white text-gray-800 placeholder-gray-500 border-none rounded-none text-base sm:text-lg resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#C98D45] cursor-pointer hover:bg-amber-700 text-white font-normal px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-colors duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Confirm Reservation"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
