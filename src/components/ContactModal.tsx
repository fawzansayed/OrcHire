import * as React from "react";
import { ContactForm } from "./ContactForm";
import { motion } from "motion/react";

export function ContactModal() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        {/* Left Side - 3D Image Display */}
        <motion.div 
          className="w-[60%] relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center p-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#0C8EFF]/10 to-[#9F62ED]/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[#9F62ED]/10 to-[#0C8EFF]/10 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
            <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl animate-float-slow"></div>
          </div>

          {/* Platform Diagram Container */}
          <motion.div 
            className="relative w-full max-w-3xl h-96"
            initial={{ scale: 0.8, rotateY: -20 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ perspective: "1000px" }}
          >
            {/* Shadow beneath the diagram */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-transparent via-black/20 to-transparent blur-xl rounded-full"></div>
            
            {/* Main diagram with 3D effect */}
            <motion.div
              className="relative w-full h-full"
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                rotateX: -2,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ 
                transformStyle: "preserve-3d",
                filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))"
              }}
            >
              <div 
                className="w-full h-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
                style={{
                  transform: "translateZ(20px)",
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
                }}
              >
                <img 
                  src="/PlatformImage.png"
                  alt="Job To Candidate Matching Engine - OrcHire.ai Platform Diagram"
                  className="w-full h-full object-contain p-4"
                  style={{
                    filter: "brightness(1.05) contrast(1.1) saturate(1.05)",
                  }}
                />
                
                {/* Theme-adaptive overlay for better integration */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-background/5 to-transparent dark:from-transparent dark:via-background/10 dark:to-transparent pointer-events-none" />
              </div>
              
              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#0C8EFF] to-[#9F62ED] rounded-full opacity-80 blur-sm"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transform: "translateZ(40px)" }}
              />
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-[#9F62ED] to-[#0C8EFF] rounded-full opacity-60 blur-sm"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                style={{ transform: "translateZ(30px)" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div 
          className="w-[40%] bg-card/80 backdrop-blur-xl border-l border-border/30 relative flex flex-col min-h-screen"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {/* Form Container */}
          <div className="flex-1 p-8 flex flex-col justify-center">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}