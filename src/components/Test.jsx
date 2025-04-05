import React, { useEffect } from "react";
import Waves from "./ui/Waves/Waves";

export default function Test() {
  useEffect(() => {
    console.log("Waves component mounted");
  }, []);

  return (
    <div className="h-full border-2 border-black rounded-4xl bg-white">
      <Waves
        lineColor="black"
        backgroundColor="transparent"
        
      />
    </div>
  );
}
