import { Button, Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

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

const Inputjs = () => {
  const isValidPhoneNumber = (phoneNumber: any) => {
    // Regex pattern for Iranian phone numbers starting with 09 and having 11 digits
    const iranianPhonePattern = /^09[0-9]{9}$/;
    return iranianPhonePattern.test(phoneNumber);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: any) => {
    let value = e.target.value;
    value = convertToEnglishNumbers(value); // تبدیل اعداد فارسی به انگلیسی
    setPhoneNumber(value);
    setIsValid(isValidPhoneNumber(value));
    
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle the form submission
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-4">
      <form onSubmit={handleSubmit}>
        <Field>
          <Label className="block text-sm font-medium text-gray-900">
            Mobile
          </Label>
          <Description className="mt-1 text-sm text-gray-600">
            Enter an Iranian phone number
          </Description>
          <Input
            type="text"
            value={phoneNumber}
            onChange={handleChange}
            inputMode="decimal"
            className={clsx(
              "mt-2 block w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <Button
          type="submit"
          disabled={!isValid || phoneNumber === ""}
          className={clsx(
            "mt-4 w-full rounded-lg py-2 px-4 text-sm font-medium focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
            {
              "bg-gray-500 text-gray-300 cursor-not-allowed":
                !isValid || phoneNumber === "",
              "bg-blue-500 text-white cursor-pointer":
                isValid && phoneNumber !== "",
            }
          )}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Inputjs;
