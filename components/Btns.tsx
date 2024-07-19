import { Button } from "@headlessui/react";
import React from "react";

const Btns = () => {
  const handleButtonClick = (color:string) => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        // alert(`Color ${color} copied to clipboard!`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        className="w-32 h-12 flex items-center rounded-lg justify-center bg-blue-600 text-sm font-semibold text-white shadow-inner shadow-blue-900/10 focus:outline-none hover:bg-blue-500 focus:bg-blue-600 focus:outline-2 focus:outline-blue-300"
        onClick={() => handleButtonClick("#2563eb")}
      >
        submit
      </Button>
      <Button
        className="w-32 h-12 flex items-center rounded-lg justify-center bg-red-600 text-sm font-semibold text-white shadow-inner shadow-red-900/10 focus:outline-none hover:bg-red-500 focus:bg-red-600 focus:outline-2 focus:outline-red-300"
        onClick={() => handleButtonClick("#dc2626")}
      >
        delete
      </Button>
      <Button
        className="w-32 h-12 flex items-center rounded-lg justify-center bg-green-600 text-sm font-semibold text-white shadow-inner shadow-green-900/10 focus:outline-none hover:bg-green-500 focus:bg-green-600 focus:outline-2 focus:outline-green-300"
        onClick={() => handleButtonClick("#16a34a")}
      >
        edit
      </Button>
      <Button
        className="w-32 h-12 flex items-center rounded-lg justify-center bg-yellow-500 text-sm font-semibold text-black shadow-inner shadow-yellow-700/10 focus:outline-none hover:bg-yellow-400 focus:bg-yellow-500 focus:outline-2 focus:outline-yellow-300"
        onClick={() => handleButtonClick("#eab308")}
      >
        download
      </Button>
      <Button
        className="w-32 h-12 flex items-center rounded-lg justify-center bg-purple-600 text-sm font-semibold text-white shadow-inner shadow-purple-900/10 focus:outline-none hover:bg-purple-500 focus:bg-purple-600 focus:outline-2 focus:outline-purple-300"
        onClick={() => handleButtonClick("#7c3aed")}
      >
        upload
      </Button>
      <Button
        className="w-32 h-12 flex items-center rounded-lg justify-center bg-orange-600 text-sm font-semibold text-white shadow-inner shadow-orange-900/10 focus:outline-none hover:bg-orange-500 focus:bg-orange-600 focus:outline-2 focus:outline-orange-300"
        onClick={() => handleButtonClick("#ea580c")}
      >
        save
      </Button>
      <Button
        className="w-32 h-12 flex items-center rounded-lg justify-center bg-pink-600 text-sm font-semibold text-white shadow-inner shadow-pink-900/10 focus:outline-none hover:bg-pink-500 focus:bg-pink-600 focus:outline-2 focus:outline-pink-300"
        onClick={() => handleButtonClick("#db2777")}
      >
        share
      </Button>
      <Button
        className="w-32 h-12 flex items-center rounded-lg justify-center bg-teal-600 text-sm font-semibold text-white shadow-inner shadow-teal-900/10 focus:outline-none hover:bg-teal-500 focus:bg-teal-600 focus:outline-2 focus:outline-teal-300"
        onClick={() => handleButtonClick("#0d9488")}
      >
        info
      </Button>
      <Button
        className="w-32 h-12 flex items-center rounded-lg justify-center bg-indigo-600 text-sm font-semibold text-white shadow-inner shadow-indigo-900/10 focus:outline-none hover:bg-indigo-500 focus:bg-indigo-600 focus:outline-2 focus:outline-indigo-300"
        onClick={() => handleButtonClick("#4f46e5")}
      >
        settings
      </Button>
    </div>
  );
};

export default Btns;
