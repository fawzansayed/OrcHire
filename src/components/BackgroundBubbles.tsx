"use client"

import { motion } from "motion/react"

export function BackgroundBubbles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* DEBUG: Highly visible bubble to test if component is working */}
      <motion.div
        className="absolute w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(12, 142, 255, 0.8) 0%, rgba(12, 142, 255, 0.4) 50%, transparent 100%)",
          top: "20%",
          left: "20%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 0.4, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bubble 1 - Large Blue */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(12, 142, 255, 0.4) 0%, rgba(12, 142, 255, 0.2) 40%, transparent 70%)",
          filter: "blur(20px)",
          top: "10%",
          left: "-5%",
        }}
        animate={{
          x: [0, 100, 150, 50, 0],
          y: [0, -50, 30, -20, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bubble 2 - Medium Purple */}
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(159, 98, 237, 0.4) 0%, rgba(159, 98, 237, 0.25) 45%, transparent 75%)",
          filter: "blur(15px)",
          top: "60%",
          right: "0%",
        }}
        animate={{
          x: [0, -120, -80, -160, 0],
          y: [0, 40, -30, 60, 0],
          scale: [1, 0.8, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Bubble 3 - Large Blue-Purple Gradient */}
      <motion.div
        className="absolute w-[28rem] h-[28rem] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(12, 142, 255, 0.3) 0%, rgba(159, 98, 237, 0.2) 30%, rgba(12, 142, 255, 0.15) 60%, transparent 80%)",
          filter: "blur(25px)",
          top: "25%",
          right: "20%",
        }}
        animate={{
          x: [0, -80, 60, -40, 0],
          y: [0, 80, -60, 40, 0],
          scale: [1, 1.1, 0.85, 1.2, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Bubble 4 - Small Accent Bubble */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(159, 98, 237, 0.4) 0%, rgba(12, 142, 255, 0.3) 50%, transparent 75%)",
          filter: "blur(10px)",
          bottom: "15%",
          left: "15%",
        }}
        animate={{
          x: [0, 90, -30, 120, 0],
          y: [0, -40, -80, -10, 0],
          scale: [1, 1.3, 1, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />
    </div>
  )
}