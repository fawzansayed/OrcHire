"use client"

import { useRef, useEffect, useState } from "react"
import { Badge } from "./ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"

interface HeroSectionProps {
  onNavigate: (page: string) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
  // We'll use ONE tile size for both rows.
  const H_MARGIN = 32 // mx-8 on each tile
  const TILE_WIDTH = 208 // Tailwind w-52 (same for both rows)
  const TILE_HEIGHT = 96 // Tailwind h-24

  const STRIDE = TILE_WIDTH + H_MARGIN * 2 // 208 + 64 = 272

  // Uniform frame (same for both rows) - forced dimensions
  const LogoFrame = ({ children }: { children: React.ReactNode }) => (
    <div
      className="flex items-center justify-center overflow-hidden flex-shrink-0
                 border-2 border-muted-foreground/60 rounded-xl bg-background/70 backdrop-blur-sm
                 mx-8"
      style={{ 
        width: `${TILE_WIDTH}px`, 
        height: `${TILE_HEIGHT}px`,
        minWidth: `${TILE_WIDTH}px`, 
        minHeight: `${TILE_HEIGHT}px`,
        maxWidth: `${TILE_WIDTH}px`, 
        maxHeight: `${TILE_HEIGHT}px`,
        padding: '16px'
      }}
    >
      {children}
    </div>
  )

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-8 md:pt-12 lg:pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-[#0C8EFF]/8 via-[#9F62ED]/4 to-[#0C8EFF]/6 rounded-full blur-3xl animate-pulse-slow"
        />
        <div
          className="absolute top-2/3 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#9F62ED]/8 via-[#0C8EFF]/4 to-[#9F62ED]/6 rounded-full blur-3xl animate-pulse-slow-delayed"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center mb-8 md:mb-12 lg:mb-16">
        {/* Live Badge */}
        <div
          className={`mb-6 md:mb-8 mt-16 md:mt-20 lg:mt-24 transition-all duration-600 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="inline-block p-[1px] bg-gradient-to-r from-[#0C8EFF]/60 via-[#9F62ED]/60 to-[#0C8EFF]/60 rounded-full shadow-lg">
            <Badge className="flex items-center bg-background/80 backdrop-blur-xl text-foreground px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium border-0">
              <div className="w-2 h-2 bg-[#0C8EFF] rounded-full animate-pulse mr-2 md:mr-3" />
              Multi-Agent AI Platform Live
            </Badge>
          </div>
        </div>

        {/* Heading */}
        <div
          className={`mb-4 md:mb-6 transition-all duration-800 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
          }`}
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
        </div>

        {/* Description */}
        <p
          className={`text-xs sm:text-sm md:text-base text-muted-foreground max-w-3xl mx-auto mb-4 md:mb-6 leading-relaxed transition-all duration-800 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          The world's most advanced multi-agent hiring intelligence built by
          global recruiters, for recruiters — redefining hiring.
        </p>
      </div>

      {/* ---------- Trusted Companies (color / perfect sizing) ---------- */}
      <div
        className={`mb-8 md:mb-12 lg:mb-16 transition-all duration-800 delay-600 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
        }`}
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

        <div className="max-w-7xl mx-auto overflow-hidden relative z-10 px-8">
          {/* Prominent frosty edge effects using background color */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-24 backdrop-blur-md z-20" 
               style={{ 
                 background: "linear-gradient(to right, hsl(var(--background) / 0.8) 0%, hsl(var(--background) / 0.4) 50%, transparent 100%)",
                 maskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 70%, transparent 100%)",
                 WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 70%, transparent 100%)"
               }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-24 backdrop-blur-md z-20" 
               style={{ 
                 background: "linear-gradient(to left, hsl(var(--background) / 0.8) 0%, hsl(var(--background) / 0.4) 50%, transparent 100%)",
                 maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 70%, transparent 100%)",
                 WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 70%, transparent 100%)"
               }} />

          <div
            className="flex will-change-transform animate-scroll-right"
            style={{ animationDuration: '30s' }}
          >
            {trustedCompanies.concat(trustedCompanies).map((company, i) => (
              <button
                key={`${company.name}-${i}`}
                onClick={() => onNavigate("testimonials")}
                className="group flex flex-shrink-0 items-center cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <LogoFrame>
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="block max-h-full max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </LogoFrame>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- News & Media (grayscale / zoomed-in) ---------- */}
      <div
        className={`mb-12 md:mb-16 transition-all duration-800 delay-800 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center gap-2 md:gap-3 mb-8 bg-background/60 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl border border-border/30 group">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-foreground transition-colors duration-300 group-hover:text-[#0C8EFF]" />
            <p className="text-sm md:text-base font-semibold text-foreground">
              News & Media
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto overflow-hidden relative z-10 px-8">
          {/* Prominent frosty edge effects using background color */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-24 backdrop-blur-md z-20" 
               style={{ 
                 background: "linear-gradient(to right, hsl(var(--background) / 0.8) 0%, hsl(var(--background) / 0.4) 50%, transparent 100%)",
                 maskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 70%, transparent 100%)",
                 WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 70%, transparent 100%)"
               }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-24 backdrop-blur-md z-20" 
               style={{ 
                 background: "linear-gradient(to left, hsl(var(--background) / 0.8) 0%, hsl(var(--background) / 0.4) 50%, transparent 100%)",
                 maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 70%, transparent 100%)",
                 WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 70%, transparent 100%)"
               }} />

          <div
            className="flex will-change-transform animate-scroll-right"
            style={{ animationDuration: '40s' }}
          >
            {mediaPartners.concat(mediaPartners).map((media, i) => (
              <button
                key={`${media.name}-${i}`}
                onClick={() => onNavigate("press")}
                className="group flex flex-shrink-0 items-center cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <LogoFrame>
                  <img
                    src={media.logo}
                    alt={`${media.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="block max-h-full max-w-full object-contain transition-all duration-300"
                    style={{
                      filter: "grayscale(1) brightness(1) contrast(0.2)",
                      WebkitFilter: "grayscale(1) brightness(1) contrast(0.2)",
                    }}
                  />
                </LogoFrame>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}