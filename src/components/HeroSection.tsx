"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Badge } from "./ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"

interface HeroSectionProps {
  onNavigate: (page: string) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const trustedCompanies = [
    { name: "artha", logo: "/arthalogogreyscale.png" },
    { name: "The Chief Circle", logo: "/the-chief-circle-logo.jpg" },
    { name: "Peak XV", logo: "/peak-xv-logo.jpg" },
    { name: "Settaris Venture Partner", logo: "/settaris-venture-partner-logo.jpg" },
    { name: "Multiplier", logo: "/multiplier-logo.jpg" },
    { name: "X-10x", logo: "/x-10x-logo.jpg" },
    { name: "ThoughtSpot", logo: "/thoughtspot-logo.jpg" },
    { name: "SalarySe", logo: "/salaryse-logo.jpg" },
    { name: "eAmbak", logo: "/eambak-logo.jpg" },
    { name: "RazorPay", logo: "/Razorpaylogo.png" },
    { name: "DealShare", logo: "/DealShareLogoGreyscale.png" },
    { name: "Quince", logo: "/QuincelogogreyScale.png" }
  ]

  const mediaPartners = [
    { name: "TechCrunch", logo: "/TechieCrunch-log.png" },
    { name: "Forbes", logo: "/forbes-logo.png" },
    { name: "Wired", logo: "/wired-logo.jpg" },
    { name: "VentureBeat", logo: "/VentureBeats-logo.png" },
    { name: "MIT Tech Review", logo: "/mit-tech-review-logo.jpg" },
    { name: "Harvard Business", logo: "/harvard-business-logo.jpg" },
    { name: "Fast Company", logo: "/fast-company-logo.jpg" },
    { name: "Reuters", logo: "/reuters-logo.png" },
    { name: "Bloomberg", logo: "/bloomberg-logo.jpg" },
    { name: "The Verge", logo: "/the-verge-logo.jpg" },
    { name: "Axios", logo: "/axios-logo.png" }
  ]

  return (
   <section
  ref={sectionRef}
  className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 md:pt-40 lg:pt-48"
>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <motion.div
          className="absolute top-1/4 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-[#0C8EFF]/8 via-[#9F62ED]/4 to-[#0C8EFF]/6 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-2/3 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#9F62ED]/8 via-[#0C8EFF]/4 to-[#9F62ED]/6 rounded-full blur-3xl"
          animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Live Badge */}
        <motion.div
          className="mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block p-[1px] bg-gradient-to-r from-[#0C8EFF]/60 via-[#9F62ED]/60 to-[#0C8EFF]/60 rounded-full shadow-lg">
            <Badge className="flex items-center bg-background/80 backdrop-blur-xl text-foreground px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium border-0">
              <div className="w-2 h-2 bg-[#0C8EFF] rounded-full animate-pulse mr-2 md:mr-3" />
              Multi-Agent AI Platform Live
            </Badge>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="mb-4 md:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
            Hiring That Thinks Ahead
          </h1>
          <div className="text-base sm:text-lg md:text-2xl lg:text-3xl mb-4 md:mb-6 flex flex-wrap justify-center gap-2">
            <span className="font-semibold text-foreground">Reactive</span>
            <span className="text-muted-foreground">•</span>
            <span className="font-semibold text-foreground">Proactive</span>
            <span className="text-muted-foreground">•</span>
            <span className="font-semibold text-foreground">Autonomous</span>
            <span className="text-muted-foreground">•</span>
            <span className="font-semibold bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
              Hiring OS
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The world's most advanced multi-agent hiring intelligence built by
          global recruiters, for recruiters - redefining hiring.
        </motion.p>
      </div>

      {/* Trusted Companies Section */}
      <motion.div
        className="mb-12 md:mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <button
            onClick={() => onNavigate("testimonials")}
            className="text-sm md:text-base font-semibold text-foreground mb-8 transition-colors duration-300 group bg-background/60 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl border border-border/30"
          >
            <span>Trusted by forward-thinking companies</span>
            <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* logos untouched */}
        <div className="overflow-hidden">
          <motion.div
            className="flex will-change-transform"
            animate={{ x: [-0, -trustedCompanies.length * 200] }}
            transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
          >
            {trustedCompanies.concat(trustedCompanies).map((company, index) => (
              <motion.button
                key={`${company.name}-${index}`}
                onClick={() => onNavigate("testimonials")}
                className="flex items-center mx-8 flex-shrink-0 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-40 h-20 rounded-lg bg-muted/30 flex items-center justify-center overflow-hidden">
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    className="w-full h-full transition-all duration-500"
                    style={{ filter: "grayscale(100%)" }}
                  />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* News & Media Section */}
      <motion.div
        className="mb-12 md:mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center gap-2 md:gap-3 mb-8 bg-background/60 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl border border-border/30">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#0C8EFF]" />
            <p className="text-sm md:text-base font-semibold text-foreground">
              News & Media
            </p>
          </div>
        </div>

        {/* logos untouched */}
        <div className="overflow-hidden">
          <motion.div
            className="flex will-change-transform"
            animate={{ x: [-0, -mediaPartners.length * 220] }}
            transition={{ repeat: Infinity, duration: 140, ease: "linear" }}
          >
            {mediaPartners.concat(mediaPartners).map((media, index) => (
              <motion.button
                key={`${media.name}-${index}`}
                onClick={() => onNavigate("press")}
                className="flex items-center mx-8 flex-shrink-0 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-40 h-20 rounded-lg bg-muted/30 flex items-center justify-center overflow-hidden">
                  <img
                    src={media.logo || "/placeholder.svg"}
                    alt={`${media.name} logo`}
                    className="w-full h-full transition-all duration-500"
                    style={{ filter: "grayscale(100%)" }}
                  />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
