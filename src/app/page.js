'use client'

import Masonry from "@/components/ui/Masonry/Masonry";
import FunWave from "@/components/FunWave";
import Intro from "@/components/Intro";
import ASL from "@/components/ASL";

const data = [
  { id: 1, component: <FunWave/>, height: 500},
  { id: 2, component: <Intro/>, height: 600},
  { id: 3, component: <ASL/>, height: 900},
  ];

export default function Home() {
  return (
    <>
    <div className="flex w-full md:w-1/2 m-auto">
      <Masonry data={data} />
    </div>
    </>
  );
}
