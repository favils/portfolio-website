import React, { useState } from "react";

const BubbleText = ({ text }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      {text.split("").map((char, idx) => {
        let fontWeight = "font-light";

        if (hoveredIndex === idx) {
          fontWeight = "font-black";
        } else if (hoveredIndex === idx - 1 || hoveredIndex === idx + 1) {
          fontWeight = "font-medium";
        } else if (hoveredIndex === idx - 2 || hoveredIndex === idx + 2) {
          fontWeight = "font-light";
        }

        return (
          <span
            key={idx}
            className={`transition-all duration-300 ${fontWeight}`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default BubbleText;

