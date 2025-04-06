'use client'

import Masonry from "@/components/ui/Masonry/Masonry";
import FunWave from "@/components/FunWave";
import Intro from "@/components/Intro";
import ASL from "@/components/ASL";
import Sales from "@/components/SalesTranscript";
import Pics from "@/components/Pics";
import MadeWith from "@/components/MadeWith";
import Info from "@/components/Info";

const data = [
  { id: 1, component: <FunWave/>, height: 500},
  { id: 2, component: <Intro/>, height: 600},
  { id: 3, component: <ASL/>, height: 900},
  { id: 4, component: <Sales/>, height:800},
  { id:5, component: <Pics/>, height: 400},
  { id: 6, component: <MadeWith/>, height: 200},
  { id: 7, component: <Info/>, height: 300},
  ];

export default function Home() {
  return (
    <>
    <div className="mt-1 ml-5">FATIMA VILLENA © 2025</div>
    <div className="flex w-full mt-20 lg:w-2/3 m-auto">
      <Masonry data={data} />
    </div>
    </>
  );
}
