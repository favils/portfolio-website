"use client";

import { useEffect, useRef, useState } from "react";

export default function CoordinateReadout() {
  const [pos, setPos] = useState(null);
  const [enabled, setEnabled] = useState(false);
  const frame = useRef(null);

  useEffect(() => {
    const fineTouch = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fineTouch && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    function onMove(e) {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    }

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [enabled]);

  if (!enabled || !pos) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-6 right-6 z-50 hidden font-mono text-[11px] tracking-wider text-paper-faint lg:block"
    >
      X:{String(pos.x).padStart(4, "0")} Y:{String(pos.y).padStart(4, "0")}
    </div>
  );
}
