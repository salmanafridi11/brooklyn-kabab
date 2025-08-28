"use client";
import React, { useMemo } from "react";
import Img from "../../../../public/25.png";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { send } from "@emailjs/browser";
import moment from "moment";
import { toast } from "react-toastify";

/**
 * IMPORTANT: set these constants to your EmailJS values
 * SERVICE_ID: service_xxx
 * TEMPLATE_ID: template_xxx
 * USER_ID   : user_xxx  (or pass user via init if you prefer)
 */
const EMAILJS_SERVICE_ID = "service_72ihri8";
const EMAILJS_TEMPLATE_ID = "template_03o1n1b";
const EMAILJS_USER_ID = "KqCvksIHGFFtlqAry";

const CateringSection3 = () => {
  // helper: today's date in yyyy-mm-dd for min attribute using moment
  const todayStr = useMemo(() => moment().format("YYYY-MM-DD"), []);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      guests: "",
      date: "",
      time: "",
      specialRequests: "",
    },
  });

 

  // Validate time between 12:00 (noon) and 02:00 (next day)
  const isTimeInAllowedRange = (timeStr) => {
    if (!timeStr) return false;
    // timeStr expected as "HH:mm"
    const m = moment(timeStr, "HH:mm");
    if (!m.isValid()) return false;
    const minutes = m.hours() * 60 + m.minutes();
    // Allowed if minutes >= 12:00 (720) OR minutes < 2:00 (120)
    return minutes >= 720 || minutes < 120;
  };

  // Validate date not in the past using moment
  const isDateTodayOrFuture = (dateStr) => {
    if (!dateStr) return false;
    const selected = moment(dateStr, "YYYY-MM-DD").startOf("day");
    const today = moment().startOf("day");
    return selected.isSameOrAfter(today);
  };

  // Phone validation for US using numeric check:
  // react-phone-input-2 returns digits like "1##########" (no +) in value
  const validateUSPhone = (val) => {
    if (!val) return false;
    const cleaned = val.replace(/\D/g, "");
    // expect '1' + 10 digits = 11 length and startsWith '1'
    return cleaned.length === 11 && cleaned.startsWith("1");
  };

  const onSubmit = async (data) => {
    // Additional runtime validation (defensive)
    if (!isDateTodayOrFuture(data.date)) {
      return setError("date", {
        type: "manual",
        message: "Date cannot be in the past.",
      });
    }
    if (!isTimeInAllowedRange(data.time)) {
      return setError("time", {
        type: "manual",
        message: "Time must be between 12:00 PM and 2:00 AM.",
      });
    }

    let formattedDate = data.date
      ? moment(data.date, "YYYY-MM-DD").format("dddd, MMMM Do YYYY")
      : "(no date)";
    let formattedTime = data.time
      ? moment(data.time, "HH:mm").format("h:mm A")
      : "(no time)";

    const combined = data.date
      ? moment(`${data.date} ${data.time}`, "YYYY-MM-DD HH:mm")
      : null;
    console.log(data, "data");
    const combinedISO =
      combined && combined.isValid() ? combined.toISOString() : "";

    // Build payload for EmailJS (template variables)
    const templateParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      guests: data.guests,
      date: formattedDate,
      time: formattedTime,
      datetime_iso: combinedISO, // machine-friendly combined datetime
      specialRequests: data.specialRequests || "(none)",
      fullName: `${data.firstName} ${data.lastName}`,
      // raw fields too, if you need them:
      raw_date: data.date || "",
      raw_time: data.time || "",
    };

    try {
      // send via EmailJS - make sure to replace constants above with your real ids
      const resp = await send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      toast.success("Reservation submitted — we'll be in touch shortly.");
      reset({})
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error(
        "Something went wrong while sending the reservation. Check console and EmailJS configuration."
      );
    }
  };

  return (
    <div
      className="min-h-screen relative bg-gray-800 text-white p-4 md:p-8 bg-center bg-cover"
      style={{
        backgroundImage: `url(${Img.src})`,
        fontFamily: "unbounded",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("firstName", {
                      required: "First name is required",
                      maxLength: {
                        value: 80,
                        message: "Max length is 80 characters",
                      },
                    })}
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-300 mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "Last name is required",
                      maxLength: {
                        value: 80,
                        message: "Max length is 80 characters",
                      },
                    })}
                    placeholder="Last name"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-300 mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                {errors.email && (
                  <p className="text-sm text-red-300 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: "Phone number is required",
                    validate: (val) =>
                      validateUSPhone(val) || "Enter a valid US phone number",
                  }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      country={"us"}
                      onlyCountries={["us"]}
                      value={value}
                      onChange={onChange}
                      inputProps={{
                        name: "phone",
                        required: true,
                        className:
                          "w-full pl-12 py-3 bg-white text-gray-900 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500",
                      }}
                      containerStyle={{}}
                      inputStyle={{
                        width: "100%",
                        background: "white",
                        color: "#111827",
                      }}
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-sm text-red-300 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="number"
                  {...register("guests", {
                    required: "Number of guests is required",
                    min: { value: 1, message: "At least 1 guest required" },
                    max: { value: 1000, message: "Enter a realistic number" },
                  })}
                  placeholder="Number of guests"
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                {errors.guests && (
                  <p className="text-sm text-red-300 mt-1">
                    {errors.guests.message}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <label className="block text-lg font-medium">
                  Special Request or Note
                </label>
                <textarea
                  {...register("specialRequests")} // not required per request
                  name="specialRequests"
                  placeholder="Please let us know about any dietary restrictions, allergies, special occasions, or other requests..."
                  rows={6}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-vertical"
                />
                {errors.specialRequests && (
                  <p className="text-sm text-red-300 mt-1">
                    {errors.specialRequests.message}
                  </p>
                )}
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
                  {...register("date", {
                    required: "Date is required",
                    validate: (v) =>
                      isDateTodayOrFuture(v) || "Date cannot be in the past",
                  })}
                  placeholder="dd/mm/yyyy"
                  min={todayStr}
                  className="md:w-full w-[400px] px-4 py-3 bg-white text-gray-900 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                {errors.date && (
                  <p className="text-sm text-red-300 mt-1">
                    {errors.date.message}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <label className="block text-lg font-medium">
                  Perfect Time
                </label>
                <div>
                  <input
                    type="time"
                    {...register("time", {
                      required: "Time is required",
                      validate: (v) =>
                        isTimeInAllowedRange(v) ||
                        "Time must be between 12:00 PM and 2:00 AM",
                    })}
                    className="px-4 py-3 rounded-md border-2 transition-all duration-200 bg-white border-gray-300 text-gray-900 hover:border-amber-500 hover:bg-amber-50 w-full md:w-[240px]"
                  />
                  {errors.time && (
                    <p className="text-sm text-red-300 mt-1">
                      {errors.time.message}
                    </p>
                  )}
                  <p className="text-sm text-gray-300 mt-2">
                    Choose a time between 12:00 PM (noon) and 2:00 AM (next
                    day).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Terms and Submit Section */}
          <div className="mt-8 space-y-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-md font-semibold text-lg transition-all duration-200 ${"bg-[#C98D45] hover:bg-amber-700 text-white cursor-pointer"}`}
            >
              {isSubmitting ? "Submitting..." : "SUBMIT"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CateringSection3;
