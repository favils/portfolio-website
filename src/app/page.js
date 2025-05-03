'use client'

import { useState } from "react";
import Masonry from "@/components/ui/Masonry/Masonry";
import FunWave from "@/components/FunWave";
import Intro from "@/components/Intro";
import ASL from "@/components/ASL";
import Sales from "@/components/SalesTranscript";
import Pics from "@/components/Pics";
import MadeWith from "@/components/MadeWith";
import Info from "@/components/Info";
import Brand from "@/components/Branding";
import Clarity from "@/components/Clarity";
import Liora from "@/components/Liora";
import Film from "@/components/Film";

const rawData = [
  { id: 1, component: <FunWave/>, height: 500, categories: ["all"] },
  { id: 2, component: <Intro/>, height: 600, categories: ["all"] },
  { id: 3, component: <Liora/>, height: 500, categories: ["all", "sites"] },
  { id: 4, component: <Sales/>, height: 800, categories: ["all", "sites"] },
  { id: 5, component: <Clarity/>, height: 600, categories: ["all", "designs"] },
  { id: 6, component: <Pics/>, height: 400, categories: ["all"] },
  { id: 7, component: <MadeWith/>, height: 200, categories: ["all"] },
  { id: 8, component: <Info/>, height: 300, categories: ["all"] },
  { id: 9, component: <Brand/>, height: 600, categories: ["all", "designs"] },
  { id: 10, component: <ASL/>, height: 700, categories: ["all", "sites"] },
  { id: 10, component: <Film/>, height: 600, categories: ["all", "designs"] }
];

export default function Home() {
  const [filter, setFilter] = useState("all");

  const filteredData = rawData.filter(item =>
    item.categories.includes(filter)
  );

  return (
    <>
      <div className="mt-1 ml-5">FATIMA VILLENA © 2025</div>

      <div className="flex gap-4 justify-center mt-6">
        <button onClick={() => setFilter("all")} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">All</button>
        <button onClick={() => setFilter("sites")} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Sites</button>
        <button onClick={() => setFilter("designs")} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Designs</button>
      </div>

      <div className="flex w-full mt-10 lg:w-2/3 m-auto">
        <Masonry data={filteredData} />
      </div>
    </>
  );
}
