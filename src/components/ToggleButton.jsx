import { useState } from "react";

const ToggleButton = () => {
  const [isDesigns, setIsDesigns] = useState(true);
  const [jiggle, setJiggle] = useState(false);

  const togglePage = () => {
    setIsDesigns((prev) => !prev);
  };

  return (
    <button onClick={togglePage}
      className="relative w-40 p-2 bg-white rounded-full overflow-hidden focus:outline-none"
    >
      <span className={`absolute top-0 left-0 w-1/2 h-full transition-transform duration-300 ${
          isDesigns ? "translate-x-0" : "translate-x-full"
        }`}/>

      <span className={`absolute top-0 left-0 w-1/2 h-full border-3 border-white bg-black rounded-full transition-transform duration-300 ${
          isDesigns ? "translate-x-0" : "translate-x-full"
        }`}/>
    </button>
  );
};

export default ToggleButton;
