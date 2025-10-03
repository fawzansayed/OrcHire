"use client"

import { useState, useRef, useEffect } from "react"
import {
  Search,
  Mail,
  Target,
  BarChart3,
  Mic,
  Settings,
  PieChart,
  FileCheck,
  Users,
  Video,
  Brain
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface WhyCoHyreSectionProps {
  onNavigate?: (page: string) => void
}

export function WhyCoHyreSection({ onNavigate }: WhyCoHyreSectionProps) {
  const [animationStage, setAnimationStage] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && animationStage === 0) {
          // Start animation sequence
          setTimeout(() => setAnimationStage(1), 500)   // Show header
          setTimeout(() => setAnimationStage(2), 1000)  // Show orbs
          setTimeout(() => setAnimationStage(3), 3000)  // Start fusion
          setTimeout(() => setAnimationStage(4), 4500)  // Complete fusion + show text
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [animationStage])

  const capabilities = [
    { icon: Search, name: "Discovery", description: "AI-powered talent discovery across 400M+ profiles using advanced search algorithms" },
    { icon: BarChart3, name: "Ranking", description: "Intelligent candidate ranking based on skills, experience, and job fit analysis" },
    { icon: Settings, name: "Integration", description: "Seamless integration with existing HR tools and ATS platforms" },
    { icon: FileCheck, name: "Automation", description: "Complete automation of repetitive hiring tasks and workflow management" },
    { icon: Video, name: "Interviews", description: "AI-conducted video interviews with natural language processing" },
    { icon: Mail, name: "Outreach", description: "Personalized candidate outreach and communication at scale" },
    { icon: Target, name: "Matching", description: "Precise job-candidate matching using machine learning algorithms" },
    { icon: Mic, name: "Screening", description: "Automated phone and voice screening with intelligent conversation flow" },
    { icon: PieChart, name: "Insights", description: "Advanced analytics and hiring insights for data-driven decisions" },
    { icon: Users, name: "Agents", description: "Multi-agent AI system coordinating complex hiring workflows" }
  ]

  return (
    <>
      {/* Section Separator Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30"></div>
      
      <section ref={sectionRef} className="relative pt-24 pb-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 bg-background/40" />
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          
          {/* Header */}
          <div className={`text-center mb-4 transition-all duration-800 ${
            animationStage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Meet </span>
              <span className="bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent">
                Aria Fusion
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch as 10 AI capabilities merge into one powerful intelligence
            </p>
          </div>

          {/* Animation Container - Compact size */}
          <div className="relative mx-auto mb-4" style={{ width: '400px', height: '400px' }}>
            
            {/* Individual Capability Orbs */}
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              
              // Calculate positions for a compact circle
              const angle = (index * 36) - 90 // 360/10 = 36 degrees, start from top
              const centerX = 200 // Half of container width
              const centerY = 200 // Half of container height
              const radius = 140  // Much smaller radius for tight formation
              
              const x = centerX + Math.cos(angle * Math.PI / 180) * radius
              const y = centerY + Math.sin(angle * Math.PI / 180) * radius
              
              // Determine current position based on animation stage
              let currentX = centerX
              let currentY = centerY
              let opacity = 0
              let scale = 0
              
              if (animationStage >= 2 && animationStage < 3) {
                // Show in wide circle
                currentX = x
                currentY = y
                opacity = 1
                scale = 1
              } else if (animationStage >= 3) {
                // Move back to center and fade
                currentX = centerX
                currentY = centerY
                opacity = 0
                scale = 0
              }
              
              return (
                <div
                  key={capability.name}
                  className="absolute w-16 h-16 rounded-full flex items-center justify-center transition-all duration-1500 ease-out z-10"
                  style={{
                    left: `${currentX - 32}px`, // Subtract half width to center
                    top: `${currentY - 32}px`,  // Subtract half height to center
                    opacity,
                    transform: `scale(${scale})`,
                    transitionDelay: animationStage === 2 ? `${index * 100}ms` : '0ms',
                    background: "radial-gradient(circle, rgba(12, 142, 255, 0.15) 0%, rgba(12, 142, 255, 0.08) 50%, transparent 100%)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(12, 142, 255, 0.2)",
                    boxShadow: "0 4px 20px rgba(12, 142, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                  }}
                >
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-[#0C8EFF]/10 rounded-full blur-sm opacity-60 animate-pulse" />
                  <Icon className="w-8 h-8 text-[#0C8EFF] relative z-10" strokeWidth={1.5} />
                </div>
              )
            })}

            {/* Central Aria Fusion Orb */}
            <div 
              className={`absolute transition-all duration-1000 ease-out ${
                animationStage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              {/* Outer glow effects */}
              <div className="absolute w-80 h-80 rounded-full bg-[#0C8EFF]/15 blur-3xl animate-pulse-slow" 
                   style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
              <div className="absolute w-60 h-60 rounded-full bg-[#0C8EFF]/20 blur-2xl animate-pulse-slow-delayed" 
                   style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
              
              {/* Main fusion orb */}
              <div className="relative w-56 h-56 rounded-full bg-card/90 backdrop-blur-xl border border-border/30 shadow-2xl flex items-center justify-center">
                {/* Inner gradient background */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#0C8EFF]/5 via-[#9F62ED]/5 to-[#0C8EFF]/5" />
                
                {/* Content */}
                <div className="relative z-10 text-center px-6 py-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/50 backdrop-blur-sm border border-[#0C8EFF]/20 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-1 bg-gradient-to-br from-[#0C8EFF]/10 to-[#9F62ED]/10 rounded-full" />
                    <Brain className="w-8 h-8 text-[#0C8EFF] relative z-10" strokeWidth={1.5} />
                  </div>
                  <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent">
                    Aria Fusion
                  </div>
                  <div className="text-sm text-muted-foreground">Multi-Agent AI</div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-[#0C8EFF]/40 animate-particle-float"
                      style={{
                        left: '50%',
                        top: '50%',
                        animationDelay: `${i * 0.8}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities List */}
          <div className={`-mt-6 mb-16 transition-all duration-800 ${
            animationStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-card/40 backdrop-blur-xl border border-border/20 rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-4">Powered by 10 AI Capabilities</div>
                <TooltipProvider>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {capabilities.map((cap, index) => (
                      <Tooltip key={cap.name} delayDuration={200}>
                        <TooltipTrigger asChild>
                          <span className={`px-3 py-1.5 bg-card/50 backdrop-blur-sm border border-border/20 rounded-full text-sm text-foreground hover:bg-[#0C8EFF]/10 hover:border-[#0C8EFF]/30 transition-all duration-200 cursor-help ${
                            animationStage >= 4 ? 'animate-fade-in' : 'opacity-0'
                          }`}
                          style={{ animationDelay: `${index * 50}ms` }}>
                            {cap.name}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">{cap.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30"></div>
    </>
  )
}