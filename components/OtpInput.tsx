import React, { useState } from "react";
import { Button, Input } from "@headlessui/react";

const isValidOtp = (otp:any) => {
  // Example validation for OTP: length should be 6 digits
  return /^[0-9]{6}$/.test(otp);
};

const OtpInput = () => {
  const [otp, setOtp] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e:any) => {
    const value = e.target.value;
    setOtp(value);
    setIsValid(isValidOtp(value));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert(`OTP ${otp} submitted!`);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div>
        <label className="block text-sm font-medium text-gray-900 dark:text-white">
          Enter OTP
        </label>
        <p className="text-sm text-gray-600 dark:text-white/50">
          Enter the 6-digit OTP you received.
        </p>
        <input
          type="text"
          value={otp}
          maxLength={6}
          onChange={handleChange}
          className={`mt-2 block w-full rounded-lg border-none bg-gray-100 dark:bg-gray-700 py-2 px-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${
            !isValid && otp !== "" ? "border-red-500" : ""
          }`}
          pattern="[0-9]{6}"
          title="Please enter a valid 6-digit OTP"
        />
        {/* {!isValid && otp !== "" && (
          <p className="text-red-500 text-sm mt-2">
            Invalid OTP. Please enter a valid 6-digit OTP.
          </p>
        )} */}
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={!isValid || otp === ""}
        className={`mt-4 w-full rounded-lg py-2 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${
          !isValid || otp === ""
            ? "bg-gray-500 dark:bg-gray-700 text-gray-300 dark:text-gray-500 cursor-not-allowed"
            : "bg-blue-500 dark:bg-blue-700 text-white cursor-pointer"
        }`}
      >
        Submit
      </button>
    </div>
  );
};

export default OtpInput;
