'use client'

import Masonry from "@/components/ui/Masonry/Masonry";
import Test from "@/components/Test";
import Waves from "@/components/ui/Waves/Waves";
import Intro from "@/components/Intro";

const data = [
  { id: 1, component: <Test/>, height: 500},
  { id: 2, component: <Intro/>, height: 600},
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
