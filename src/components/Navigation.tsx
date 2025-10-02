import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Sun, Moon, ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
 import orchireLogoLight from "../../public/assets/whitelogoOrcHireMain.png";
 
 import orchireLogoDark from "../../public/assets/BlackLogoOrcHireMain.png";
// import orchireIconLight from "figma:asset/a32c7fad1533d3940430e972772de8b05a4cb347.png";
// import orchireIconDark from "figma:asset/a32c7fad1533d3940430e972772de8b05a4cb347.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", page: "home" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/30" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Official OrcHire.ai Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center space-x-3 group"
            >
              {/* Use full logo on desktop, icon on mobile - Theme aware */}
               <div className="hidden sm:block">
                <ImageWithFallback
                  src={theme === "dark" ? orchireLogoLight : orchireLogoDark}
                  alt="OrcHire.ai Logo"
                  className="h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div> 
               {/* <div className="block sm:hidden">
                <ImageWithFallback
                  src={theme === "dark" ? orchireIconDark : orchireIconLight}
                  alt="OrcHire.ai Icon"
                  className="h-8 w-8 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div> */}
            </button>
          </motion.div>

        
         {/* Centered Navigation */}
<div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
  {navItems.map((item) => (
    <motion.button
      key={item.name}
      onClick={() => onNavigate(item.page)}
      className={`relative px-6 py-3 text-sm font-medium transition-all duration-500 overflow-hidden group ${
        currentPage === item.page
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 font-medium">{item.name}</span>
      {currentPage === item.page && (
        <motion.div
          className="absolute bottom-0 left-1/2 w-1 h-1 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] rounded-full"
          initial={{ scale: 0, x: "-50%" }}
          animate={{ scale: 1, x: "-50%" }}
          transition={{ duration: 0.3 }}
          layoutId="activeIndicator"
        />
      )}
    </motion.button>
  ))}
</div>


          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Sign In Button with Glass Effect */}
            <motion.button
              onClick={() => window.open("https://aria.cohyre.ai", "_blank")}
              className="relative px-4 py-2 rounded-xl text-sm font-medium overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Glass Background */}
              <motion.div
                className="absolute inset-0 bg-background/40 backdrop-blur-xl border border-border/20 rounded-xl opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Glass Reflection */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />

              <span className="relative z-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Sign In
              </span>
            </motion.button>



            {/* Book a Demo Button - Badge Style (CTA) */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="inline-block p-[1px] bg-gradient-to-r from-[#0C8EFF]/60 via-[#9F62ED]/60 to-[#0C8EFF]/60 rounded-full shadow-lg">
                <button
                  onClick={() => onNavigate("contact")}
                  className="flex items-center bg-background/80 backdrop-blur-xl text-foreground px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium border-0 transition-all duration-300 hover:bg-background/90 hover:text-[#0C8EFF]"
                >
                  Book a Demo
                </button>
              </div>
            </motion.div>



            {/* Theme Toggle - Moved to the right */}
            <motion.button
              onClick={toggleTheme}
              className="relative w-11 h-11 rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glass Background */}
              <motion.div
                className="absolute inset-0 bg-background/40 backdrop-blur-xl border border-border/20 rounded-xl opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Glass Reflection */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />

              <div className="relative z-10 w-full h-full flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                <motion.div
                  animate={{
                    rotate: theme === "dark" ? 180 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.div>
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glass Background */}
              <motion.div
                className="absolute inset-0 bg-background/40 backdrop-blur-xl border border-border/20 rounded-xl opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10 w-full h-full flex items-center justify-center text-foreground">
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu with Glass Effect */}
        <motion.div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 bg-background/80 backdrop-blur-xl border-t border-border/30">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => {
                  onNavigate(item.page);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                  currentPage === item.page
                    ? "text-foreground bg-muted/50"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ x: 4 }}
              >
                {/* Mobile Glass Effect */}
                <motion.div
                  className="absolute inset-0 bg-background/40 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative z-10">{item.name}</span>
              </motion.button>
            ))}
            
            <div className="pt-4 border-t border-border/30 space-y-2">
              {/* Mobile Sign In */}
              <motion.button
                onClick={() => {
                  window.open("https://aria.cohyre.ai", "_blank");
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground relative overflow-hidden group transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <motion.div
                  className="absolute inset-0 bg-background/40 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Sign In</span>
              </motion.button>


              
              {/* Mobile Book a Demo - Badge Style (CTA) */}
              <motion.div
                whileHover={{ x: 4 }}
                className="flex justify-center"
              >
                <div className="inline-block p-[1px] bg-gradient-to-r from-[#0C8EFF]/60 via-[#9F62ED]/60 to-[#0C8EFF]/60 rounded-full shadow-lg">
                  <button
                    onClick={() => {
                      onNavigate("contact");
                      setIsOpen(false);
                    }}
                    className="flex items-center bg-background/80 backdrop-blur-xl text-foreground px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium border-0 transition-all duration-300 hover:bg-background/90 hover:text-[#0C8EFF]"
                  >
                    Book a Demo
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}