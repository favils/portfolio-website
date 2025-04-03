'use client'

import "./globals.css";
import dynamic from "next/dynamic"

const Scene = dynamic(() => import('../components/Scene.jsx'), { ssr: false})

export default function Home() {
  return (
    <Scene />
  );
}

