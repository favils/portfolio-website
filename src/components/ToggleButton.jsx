import { useState } from "react";

const ToggleButton = ({ isDesigns, setIsDesigns }) => {
  const togglePage = () => {
    setIsDesigns((prev) => !prev);
  };

  return (
    <button
      onClick={togglePage}
      className="relative w-40 p-4 bg-black border-white  border-1 overflow-hidden focus:outline-none transform transition-transform duration-300 hover:scale-105"
    >
      <span
        className={`absolute top-0 left-0 w-1/2 h-full border-1 border-white bg-white transition-transform duration-300 ${
          isDesigns ? "translate-x-full" : "translate-x-0"
        }`}
      />

      <span
        className={`absolute top-0 left-0 w-1/2 h-full flex justify-center items-center text-center transition-colors duration-300 ${
          isDesigns ? "text-white" : "text-black"
        }`}
      >
        Projects
      </span>

      <span
        className={`absolute top-0 left-1/2 w-1/2 h-full flex justify-center items-center text-center transition-colors duration-300 ${
          isDesigns ? "text-black" : "text-white"
        }`}
      >
        Designs
      </span>
    </button>
  );
};

export default ToggleButton;
