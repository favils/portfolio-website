"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const HOVER_SELECTOR = "a, button, [role='button'], input, textarea";

export default function CursorBlob() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.5 });

  useEffect(() => {
    const fineTouch = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fineTouch && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("cursor-none");

    function onMove(e) {
      x.set(e.clientX);
      y.set(e.clientY);
      setHovering(Boolean(e.target.closest?.(HOVER_SELECTOR)));
    }

    function onDown() {
      setPressed(true);
    }

    function onUp() {
      setPressed(false);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = pressed ? (hovering ? 128 : 64) : hovering ? 88 : 40;

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-blob pointer-events-none fixed left-0 top-0 z-[70] hidden lg:block"
      style={{ x: springX, y: springY }}
      transformTemplate={(_, generated) => `${generated} translate(-50%, -50%)`}
      animate={{ width: size, height: size }}
      transition={{ type: "spring", stiffness: 400, damping: 26 }}
    />
  );
}
