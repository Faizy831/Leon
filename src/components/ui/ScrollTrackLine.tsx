"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ScrollTrackLine() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track the entire window scroll
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={ref} className="absolute inset-y-0 left-8 md:left-24 w-12 pointer-events-none z-0 hidden md:block">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 48 1000" 
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Faint background track */}
        <path
          d="M 24 0 C 24 200, 48 300, 24 500 C 0 700, 24 800, 24 1000"
          stroke="rgba(0,0,0,0.03)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        {/* Animated golden track */}
        <motion.path
          d="M 24 0 C 24 200, 48 300, 24 500 C 0 700, 24 800, 24 1000"
          stroke="#f8af41"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}
