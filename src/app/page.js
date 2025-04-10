'use client'

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

const data = [
  { id: 1, component: <FunWave/>, height: 500},
  { id: 2, component: <Intro/>, height: 600},
  { id: 3, component: <Liora/>, height: 500},
  { id: 4, component: <Sales/>, height:800},
  { id: 5, component: <Clarity/>, height: 600},
  { id: 6, component: <Pics/>, height: 400},
  { id: 7, component: <MadeWith/>, height: 200},
  { id: 8, component: <Info/>, height: 300},
  { id: 9, component: <Brand/>, height: 600},
  { id: 10, component: <ASL/>, height: 700},
  ];

export default function Home() {
  return (
    <>
    <div className="mt-1 ml-5">FATIMA VILLENA © 2025</div>
    <div className="flex w-full mt-10 lg:w-2/3 m-auto">
      <Masonry data={data} />
    </div>
    </>
  );
}
