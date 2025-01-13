import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ScrollingSubtitleRight = ({ children }) => {
  const subtitleRef = useRef(null);

  useEffect(() => {
    const subtitle = subtitleRef.current;
    const textWidth = subtitle.scrollWidth;

    gsap.fromTo(
      subtitle,
      { x: `-${textWidth}px` },
      {
        x: '100%',
        duration: 20,
        repeat: -1,
        ease: 'linear',
      }
    );
  }, []);

  return (
    <div className="flex justify-center">
      <div className="relative w-1/2 h-[100px] overflow-hidden border-b-2 border-t-2 border-black text-black flex items-center">
        <div ref={subtitleRef} className="absolute whitespace-nowrap text-5xl font-semibold uppercase">
          <span>{children} </span>
          <span>{children} </span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingSubtitleRight;
