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

  // ---------------- DATA ----------------
  const trustedCompanies = [
    { name: "ArisInfra",        logo: "/logo1/ArisInfra.png" },
    { name: "arya.ag",          logo: "/logo1/arya.ag.png" },
    { name: "Captain Fresh",    logo: "/logo1/CaptainFresh.png" },
    { name: "RED Health",       logo: "/logo1/RedHealth.png" },
    { name: "Razorpay",         logo: "/logo1/RazorPay.png" },
    { name: "DealShare",        logo: "/logo1/DealShare.png" },
    { name: "artha",            logo: "/logo1/artha.png" },
    { name: "The Chief Circle", logo: "/logo1/TheChiefCircle.png" },
  ]

  const mediaPartners = [
    { name: "Bharat Fast",     logo: "/logo2/BharatFast.webp" },
    { name: "Digital Pulse",   logo: "/logo2/CXODigitalPulse.png" },
    { name: "CXO Today",       logo: "/logo2/CXOToday.png" },
    { name: "HR Katha",        logo: "/logo2/HRKatha.png" },
    { name: "HR Today",        logo: "/logo2/HRToday.svg" },
    { name: "ISN",             logo: "/logo2/ISN.webp" },
    { name: "IT Voice",        logo: "/logo2/ITVoice.png" },
    { name: "MediaBrief",      logo: "/logo2/MediaBrief.jpg" },
    { name: "PeopleMatters",   logo: "/logo2/PeopleMatters.webp" },
    { name: "TechCircle",      logo: "/logo2/TechCircle.jpg" },
    { name: "Techno Secrets",  logo: "/logo2/TechnoSecrets.png" },
    { name: "Media Infoline",  logo: "/logo2/MediaInfoline.png" },
  ]

  // ---------------- SIZING / STRIDE ----------------
  const H_MARGIN = 32                       // mx-8 on each tile
  const COMPANY_TILE_WIDTH = 176            // w-44
  const MEDIA_TILE_WIDTH   = 160            // w-40

  const COMPANY_STRIDE = COMPANY_TILE_WIDTH + H_MARGIN * 2 // 176 + 64 = 240
  const MEDIA_STRIDE   = MEDIA_TILE_WIDTH   + H_MARGIN * 2 // 160 + 64 = 224

  // First row (perfect) – compact frame, no background
  const CompanyLogoFrame = ({ children }: { children: React.ReactNode }) => (
    <div className="w-44 h-16 md:h-20 flex items-center justify-center overflow-hidden">
      {children}
    </div>
  )

  // Second row (intentionally zoomed) – same width but taller tile, image fills it
  const MediaLogoFrame = ({ children }: { children: React.ReactNode }) => (
    <div className="w-40 h-12 flex items-center justify-center overflow-hidden">
      {children}
    </div>
  )

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 md:pt-40 lg:pt-48"
    >
      {/* Background */}
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

        {/* Heading */}
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
          global recruiters, for recruiters — redefining hiring.
        </motion.p>
      </div>

      {/* ---------- Trusted Companies (color / perfect sizing) ---------- */}
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

        <div className="overflow-hidden relative z-10">
          <motion.div
            className="flex will-change-transform"
            animate={{ x: [0, -(trustedCompanies.length * COMPANY_STRIDE)] }}
            transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
          >
            {trustedCompanies.concat(trustedCompanies).map((company, i) => (
              <motion.button
                key={`${company.name}-${i}`}
                onClick={() => onNavigate("testimonials")}
                className="group mx-8 flex flex-shrink-0 items-center cursor-pointer"
                whileHover={{ scale: 1.04 }}
              >
                <CompanyLogoFrame>
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="block max-h-full max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </CompanyLogoFrame>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ---------- News & Media (grayscale / zoomed-in) ---------- */}
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

        <div className="overflow-hidden relative z-10">
          <motion.div
            className="flex will-change-transform"
            animate={{ x: [0, -(mediaPartners.length * MEDIA_STRIDE)] }}
            transition={{ repeat: Infinity, duration: 140, ease: "linear" }}
          >
            {mediaPartners.concat(mediaPartners).map((media, i) => (
              <motion.button
                key={`${media.name}-${i}`}
                onClick={() => onNavigate("press")}
                className="group mx-8 flex flex-shrink-0 items-center cursor-pointer"
                whileHover={{ scale: 1.04 }}
              >
                <MediaLogoFrame>
                  <img
                    src={media.logo}
                    alt={`${media.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain transition-all duration-300"
                    style={{
                      filter: "grayscale(1) saturate(0) contrast(.9)",
                      WebkitFilter: "grayscale(1) saturate(0) contrast(.9)", // Safari fallback
                    }}
                  />
                </MediaLogoFrame>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
