import React, { useState } from "react";
import { Button, Input } from "@headlessui/react";

// تابع تبدیل اعداد فارسی به انگلیسی
const convertToEnglishNumbers = (inputValue: any) => {
  const persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ];
  for (let i = 0; i < 10; i++) {
    inputValue = inputValue.replace(persianNumbers[i], i);
  }
  return inputValue;
};

const isValidOtp = (otp: any) => {
  // مثال اعتبارسنجی برای OTP: طول باید 6 رقم باشد
  return /^[0-9]{6}$/.test(otp);
};

const OtpInput = () => {
  const [otp, setOtp] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: any) => {
    let value = e.target.value;
    value = convertToEnglishNumbers(value); // تبدیل اعداد فارسی به انگلیسی
    setOtp(value);
    setIsValid(isValidOtp(value));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`OTP ${otp} submitted!`);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Enter OTP
          </label>
          <p className="text-sm text-gray-600">
            Enter the 6-digit OTP you received.
          </p>
          <input
            type="text"
            value={otp}
            maxLength={6}
            inputMode="decimal"
            onChange={handleChange}
            className={`mt-2 block w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
          disabled={!isValid || otp === ""}
          className={`mt-4 w-full rounded-lg py-2 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            !isValid || otp === ""
              ? "bg-gray-500 text-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white cursor-pointer"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default OtpInput;
