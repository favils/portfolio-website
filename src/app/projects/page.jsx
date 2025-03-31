"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Scene from "../components/Scene";

export default function ProjectsPage() {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <div className="relative w-screen h-screen">
      

      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full bg-black"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-black"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={() => setAnimationComplete(true)}
      />

      {animationComplete && (
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-white text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <ul className="space-y-4 text-left text-9xl">
            <li>ASL Interpreter</li>
            <li>resume.ly</li>
            <li>Comments for Rilla</li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}