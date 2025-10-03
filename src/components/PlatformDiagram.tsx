import React from "react";
import { motion } from "motion/react";

export function PlatformDiagram() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="relative w-full h-full">
        {/* Main Frosted Glass Container */}
        <motion.div
          className="relative w-full h-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Frosted Glass Background - Adapts to light/dark mode */}
          <div className="absolute inset-0 rounded-2xl bg-background/60 dark:bg-background/40 backdrop-blur-xl border border-border/20 dark:border-border/10 shadow-2xl" />
          
          {/* Gradient Overlay for better blending */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-background/20 via-transparent to-background/30 dark:from-background/10 dark:via-transparent dark:to-background/20" />
          
          {/* Animated Background Glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-60 dark:opacity-40"
            style={{
              background: `
                radial-gradient(circle at 20% 30%, rgba(12, 142, 255, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(159, 98, 237, 0.08) 0%, transparent 50%)
              `,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Platform Flow Diagram */}
          <div className="relative w-full h-full p-8 flex items-center justify-center">
            <div className="w-full max-w-4xl h-full relative">
              
              {/* Job Analysis - Left */}
              <motion.div
                className="absolute left-0 top-1/4 w-24 h-24"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#0C8EFF]/20 to-[#0C8EFF]/10 border border-[#0C8EFF]/30 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/10 to-transparent rounded-2xl"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <svg className="w-8 h-8 text-[#0C8EFF] relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                </div>
                <div className="text-center mt-2">
                  <p className="text-xs font-medium text-foreground/80">Job Analysis</p>
                </div>
              </motion.div>

              {/* AI Processing Center */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/20 to-[#0C8EFF]/20 border-2 border-gradient-to-r from-[#0C8EFF]/40 to-[#9F62ED]/40 backdrop-blur-lg flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/15 via-[#9F62ED]/15 to-[#0C8EFF]/15 rounded-3xl"
                    animate={{ 
                      opacity: [0.4, 0.8, 0.4],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="relative z-10 flex flex-col items-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <svg className="w-12 h-12 text-[#9F62ED]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
                    </svg>
                  </motion.div>
                </div>
                <div className="text-center mt-2">
                  <p className="text-xs font-medium text-foreground/80">AI Engine</p>
                </div>
              </motion.div>

              {/* Candidate Pool - Right */}
              <motion.div
                className="absolute right-0 top-1/4 w-24 h-24"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#9F62ED]/20 to-[#9F62ED]/10 border border-[#9F62ED]/30 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#9F62ED]/10 to-transparent rounded-2xl"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  <svg className="w-8 h-8 text-[#9F62ED] relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16,4C18.22,4 20,5.78 20,8C20,10.22 18.22,12 16,12C13.78,12 12,10.22 12,8C12,5.78 13.78,4 16,4M16,14C20.42,14 24,15.79 24,18V20H8V18C8,15.79 11.58,14 16,14M6,6H8V4H6V6M6,10H8V8H6V10M6,14H8V12H6V14Z" />
                  </svg>
                </div>
                <div className="text-center mt-2">
                  <p className="text-xs font-medium text-foreground/80">400M+ Profiles</p>
                </div>
              </motion.div>

              {/* Screening Process - Bottom Left */}
              <motion.div
                className="absolute left-1/4 bottom-1/4 w-20 h-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#0C8EFF]/15 to-[#9F62ED]/15 border border-foreground/20 backdrop-blur-sm flex items-center justify-center relative">
                  <svg className="w-6 h-6 text-foreground/70" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V21A2,2 0 0,0 5,23H19A2,2 0 0,0 21,21V9M19,9H14V4H5V19L10.5,13.5L13.5,16.5L19,11V9Z" />
                  </svg>
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-foreground/80">Screen</p>
                </div>
              </motion.div>

              {/* Final Results - Bottom Right */}
              <motion.div
                className="absolute right-1/4 bottom-1/4 w-20 h-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#9F62ED]/15 to-[#0C8EFF]/15 border border-foreground/20 backdrop-blur-sm flex items-center justify-center relative">
                  <svg className="w-6 h-6 text-foreground/70" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,5V19H5V5H19M16.5,16L13.5,19L7.5,13L9,11.5L13.5,16L15,14.5L16.5,16Z" />
                  </svg>
                </div>
                <div className="text-center mt-1">
                  <p className="text-xs font-medium text-foreground/80">Ranked Match</p>
                </div>
              </motion.div>

              {/* Connecting Lines with Flow Animation */}
              <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                {/* Job to AI */}
                <motion.path
                  d="M 80 75 Q 150 50 200 75"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
                
                {/* AI to Candidates */}
                <motion.path
                  d="M 200 75 Q 250 50 320 75"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                />
                
                {/* AI to Screening */}
                <motion.path
                  d="M 180 150 Q 150 180 120 200"
                  stroke="url(#gradient3)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.6 }}
                />
                
                {/* Screening to Results */}
                <motion.path
                  d="M 150 220 Q 200 240 280 220"
                  stroke="url(#gradient4)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.8 }}
                />

                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0C8EFF" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#9F62ED" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9F62ED" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#0C8EFF" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0C8EFF" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#9F62ED" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9F62ED" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#0C8EFF" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </motion.svg>

              {/* Data Flow Particles */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] rounded-full"
                  initial={{ 
                    x: 80 + Math.random() * 240,
                    y: 75 + Math.random() * 150,
                    opacity: 0 
                  }}
                  animate={{
                    x: [80, 120, 200, 280, 320],
                    y: [75, 85, 100, 180, 200],
                    opacity: [0, 0.8, 1, 0.8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5 + 2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Subtle corner accents */}
          <motion.div
            className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-[#0C8EFF]/40 to-[#9F62ED]/40 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-[#9F62ED]/40 to-[#0C8EFF]/40 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </motion.div>

        {/* External Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl -z-10"
          style={{
            background: `
              radial-gradient(circle at 30% 40%, rgba(12, 142, 255, 0.12) 0%, transparent 60%),
              radial-gradient(circle at 70% 60%, rgba(159, 98, 237, 0.12) 0%, transparent 60%)
            `,
            filter: "blur(30px)",
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}