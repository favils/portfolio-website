import React, { useEffect } from "react";
import Waves from "./ui/Waves/Waves";

export default function FunWave() {
  return (
    <div className="h-full border-2 border-black rounded-4xl bg-white flex flex-col justify-center items-center">
      <div className="hidden lg:block text-black text-center text-base">
        Hover me.
      </div>
      <Waves
        lineColor="black"
        backgroundColor="transparent"
      />
    </div>
  );
}
