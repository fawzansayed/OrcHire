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
      
      <section ref={sectionRef} className="relative pt-32 pb-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          
          {/* Header */}
          <div className={`text-center mb-8 transition-all duration-800 ${
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

          {/* Animation Container - Wider spacing */}
          <div className="relative mx-auto mb-8" style={{ width: '500px', height: '500px' }}>
            
            {/* Individual Capability Orbs */}
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              
              // Calculate positions for a wider circle like reference image
              const angle = (index * 36) - 90 // 360/10 = 36 degrees, start from top
              const centerX = 250 // Half of container width (increased)
              const centerY = 250 // Half of container height (increased)
              const radius = 220  // Even wider radius for better spread
              
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
              
              {/* Double-circle Aria Fusion orb like reference image */}
              <div className="relative rounded-full flex items-center justify-center" style={{ width: '240px', height: '240px' }}>
                {/* Outer ring with glassy effect */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(12, 142, 255, 0.15) 0%, rgba(12, 142, 255, 0.05) 50%, transparent 80%)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(12, 142, 255, 0.3)",
                    boxShadow: "0 8px 40px rgba(12, 142, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                  }}
                />
                
                {/* Inner circle with theme-aware background - sized to fit text snugly */}
                <div 
                  className="relative rounded-full flex flex-col items-center justify-center bg-background/80 dark:bg-black/60"
                  style={{
                    width: '200px',
                    height: '200px',
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(12, 142, 255, 0.4)",
                    boxShadow: "inset 0 2px 10px rgba(12, 142, 255, 0.1)"
                  }}
                >
                  {/* Brain icon with circular background */}
                  <div className="relative mb-4">
                    {/* Circle behind brain icon */}
                    <div 
                      className="absolute inset-0 w-12 h-12 rounded-full bg-[#0C8EFF]/10 border border-[#0C8EFF]/20"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        backdropFilter: 'blur(8px)'
                      }}
                    />
                    <div className="relative text-[#0C8EFF] w-12 h-12 flex items-center justify-center">
                      <Brain className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Text content with lowercase circle text */}
                  <div className="text-center">
                    <div className="text-xl font-semibold mb-1">
                      <span className="bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent">
                        aria fusion
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">Multi-Agent AI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities List */}
          <div className={`-mt-2 mb-16 transition-all duration-800 ${
            animationStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-card/40 backdrop-blur-xl border border-border/20 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-4">Powered by 10 AI Capabilities</div>
                <TooltipProvider>
                  <div className="space-y-2">
                    {/* First row - 6 items */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {capabilities.slice(0, 6).map((cap, index) => (
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
                    
                    {/* Second row - 4 items */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {capabilities.slice(6, 10).map((cap, index) => (
                        <Tooltip key={cap.name} delayDuration={200}>
                          <TooltipTrigger asChild>
                            <span className={`px-3 py-1.5 bg-card/50 backdrop-blur-sm border border-border/20 rounded-full text-sm text-foreground hover:bg-[#0C8EFF]/10 hover:border-[#0C8EFF]/30 transition-all duration-200 cursor-help ${
                              animationStage >= 4 ? 'animate-fade-in' : 'opacity-0'
                            }`}
                            style={{ animationDelay: `${(index + 6) * 50}ms` }}>
                              {cap.name}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-xs">
                            <p className="text-sm">{cap.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
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