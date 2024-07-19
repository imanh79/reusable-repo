import { Button, Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
const Inputjs = () => {
  const isValidPhoneNumber = (phoneNumber: any) => {
    // Regex pattern for Iranian phone numbers starting with 09 and having 11 digits
    const iranianPhonePattern = /^09[0-9]{9}$/;
    return iranianPhonePattern.test(phoneNumber);
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setIsValid(isValidPhoneNumber(value));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle the form submission
  };

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <Field>
        <label className="text-sm/6 font-medium text-gray-900 dark:text-white">
          Mobile
        </label>
        <p className="text-sm/6 text-gray-600 dark:text-white/50">
          Enter a iranian phone
        </p>
        <input
          type="text"
          value={phoneNumber}
          onChange={handleChange}
          className={clsx(
            "mt-2 block w-full rounded-lg border-none bg-gray-100 dark:bg-gray-700 py-2 px-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400",
            "",
            { "border-red-500": !isValid } // Adding a red border if the input is invalid
          )}
          pattern="^09[0-9]{9}$"
          title="Please enter a valid Iranian phone number"
        />
        {/* {!isValid && (
          <p className="text-red-500 text-sm mt-2">
            Invalid phone number. Please enter a valid Iranian phone number.
          </p>
        )} */}
      </Field>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={!isValid || phoneNumber === ""}
        className={`mt-4 w-full rounded-lg py-2 px-4 text-sm/6 font-medium focus:outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 ${
          !isValid || phoneNumber === ""
            ? "bg-gray-500 dark:bg-gray-700 text-gray-300 dark:text-gray-500 cursor-not-allowed"
            : "bg-blue-500 dark:bg-blue-700 text-white cursor-pointer"
        }`}
      >
        Submit
      </button>
    </div>
  );
};

export default Inputjs;
