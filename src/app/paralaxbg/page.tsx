"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsMouse2Fill } from "react-icons/bs";
import BubbleCursor from "@/components/CursorComponents/BubbleCursor";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    const moveX = (clientX / innerWidth - 0.5) * -200; // Adjust movement range
    const moveY = (clientY / innerHeight - 0.5) * 30;

    setPosition({ x: moveX, y: moveY });
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <BubbleCursor />

      <motion.div
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <BsMouse2Fill className="text-blue-500 text-6xl" />
      </motion.div>
    </div>
  );
}
