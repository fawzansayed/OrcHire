import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Sun, Moon, ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { ImageWithFallback } from "./figma/ImageWithFallback";
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
    { name: "Candidates", page: "candidates" },
    { name: "Jobs", page: "jobs" },
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
              onClick={() => onNavigate("contact")}
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

            {/* Enhanced Premium Get Started Button */}
    <motion.div
  className="relative group"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
>
  {/* Outer glow effect */}
  <div className="absolute -inset-1 bg-gradient-to-r from-[#0C8EFF]/20 via-[#9F62ED]/20 to-[#0C8EFF]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
  
  {/* Gradient border with enhanced animation */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] rounded-xl p-[1.5px] group-hover:p-[2px] transition-all duration-300">
    <div className="w-full h-full bg-background rounded-[10px]" />
  </div>
  
  <button
    onClick={() => onNavigate("pricing")}
    className="relative px-6 py-3 rounded-xl text-sm font-semibold overflow-hidden border border-primary/70 hover:border-primary"
  >
    {/* Enhanced glass background */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90 backdrop-blur-xl rounded-xl"
      initial={{ opacity: 1 }}
      whileHover={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    />
    
    {/* Premium gradient overlay */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] rounded-xl opacity-0 group-hover:opacity-100"
      initial={{ opacity: 0, scale: 0.9 }}
      whileHover={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    />

    {/* Floating light effect */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    />

    {/* Shimmer effect */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
      animate={{ x: [-200, 200] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut"
      }}
    />

    {/* Button Content */}
    <div className="relative z-10 flex items-center gap-2 text-foreground group-hover:text-foreground transition-colors duration-300">
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>
      <span className="font-semibold">Get Started for Free</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
    </div>
  </button>
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
                  onNavigate("contact");
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
              
              {/* Mobile Get Started for Free */}
              <div className="p-[2px] bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] rounded-xl">
                <motion.button
                  onClick={() => {
                    onNavigate("pricing");
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] text-white hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  whileHover={{ x: 4 }}
                >
                  <Sparkles className="w-4 h-4" />
                  Get Started for Free
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}