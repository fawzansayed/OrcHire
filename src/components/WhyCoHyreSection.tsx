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
  Brain,
  Sparkles,
  Play
} from "lucide-react"

interface WhyCoHyreSectionProps {
  onNavigate?: (page: string) => void
}

export function WhyCoHyreSection({ onNavigate }: WhyCoHyreSectionProps) {
  const [hoveredAgent, setHoveredAgent] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // 10 AI Features arranged in 2 staggered layers
  const aiFeatures = [
    // Inner Ring (5 items)
    {
      id: 1,
      icon: Search,
      title: "AI Talent Discovery",
      description: "400M+ Profiles Surfaced By Natural Language Prompts",
      layer: "inner",
      angle: 0 // 12 o'clock
    },
    {
      id: 2,
      icon: BarChart3,
      title: "AI Stack Ranking", 
      description: "Instant Top 10 Shortlist, Bias-Free",
      layer: "inner",
      angle: 72 // 2:24 o'clock
    },
    {
      id: 3,
      icon: Settings,
      title: "Workflow Integrations",
      description: "End - End ATS, HRMS, Job Boards, Slack, Email And Workflow",
      layer: "inner", 
      angle: 144 // 4:48 o'clock
    },
    {
      id: 4,
      icon: FileCheck,
      title: "Offer Automation",
      description: "Send, Track, Close Seamlessly",
      layer: "inner",
      angle: 216 // 7:12 o'clock
    },
    {
      id: 5,
      icon: Video,
      title: "Shadow Interviews",
      description: "Flags Anomalies, Red Flags In Real-Time",
      layer: "inner",
      angle: 288 // 9:36 o'clock
    },
    // Outer Ring (5 items) - Staggered positions
    {
      id: 6,
      icon: Mail,
      title: "Intelligent Outreach",
      description: "Automated WhatsApp, Email, Multi-Channel Sequencing",
      layer: "outer",
      angle: 36 // 1:12 o'clock (staggered)
    },
    {
      id: 7,
      icon: Target,
      title: "Contextual Matching",
      description: "No Resumes, New Benchmark For Talent Fit",
      layer: "outer",
      angle: 108 // 3:36 o'clock (staggered)
    },
    {
      id: 8,
      icon: Mic,
      title: "Voice AI Screening",
      description: "24/7 Recruiter Calls, Transcripts & Scoring",
      layer: "outer",
      angle: 180 // 6 o'clock (staggered)
    },
    {
      id: 9,
      icon: PieChart,
      title: "Insights Dashboard", 
      description: "Fitment Scoring, Skills-Gap Analytics, Candidate Comparisons",
      layer: "outer",
      angle: 252 // 8:24 o'clock (staggered)
    },
    {
      id: 10,
      icon: Users,
      title: "Candidate Agents",
      description: "No-Show Follow-Ups, Referral Checks, Auto-Scheduling",
      layer: "outer",
      angle: 324 // 10:48 o'clock (staggered)
    }
  ]

  // Calculate position for each feature
  const getPosition = (feature: typeof aiFeatures[0]) => {
    const radius = feature.layer === "inner" ? 200 : 260  // Increased radii for better spacing
    const angleRad = (feature.angle * Math.PI) / 180
    const x = Math.cos(angleRad - Math.PI / 2) * radius
    const y = Math.sin(angleRad - Math.PI / 2) * radius
    return { x, y }
  }

  return (
    <>
      {/* Section Separator Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30"></div>
      
      <section ref={sectionRef} className="relative pt-20 pb-20 px-6 overflow-hidden" style={{ minHeight: '130vh' }}>
      {/* Background */}
      <div className="absolute inset-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-block p-[1px] bg-gradient-to-r from-[#0C8EFF]/60 via-[#9F62ED]/60 to-[#0C8EFF]/60 rounded-full shadow-lg mb-6">
            <div className="flex items-center bg-background/80 backdrop-blur-xl text-foreground px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium border-0 group">
              <Play className="w-4 h-4 text-foreground transition-colors duration-300 group-hover:text-[#0C8EFF] mr-2 md:mr-3" strokeWidth={1.25} />
              Autonomous Talent Pipeline
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI-Powered Hiring Flow
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the future of hiring with our intelligent pipeline that
            transforms talent acquisition from discovery to placement
          </p>
        </div>

        {/* Feature Description Area */}
        <div className="max-w-3xl mx-auto mb-16">
          <div 
            className={`min-h-[120px] bg-gradient-to-br from-[#0C8EFF]/10 via-[#9F62ED]/8 to-[#0C8EFF]/10 backdrop-blur-xl rounded-2xl p-6 border border-[#0C8EFF]/20 shadow-lg transition-all duration-300 ${
              hoveredAgent ? 'scale-105 shadow-xl shadow-[#0C8EFF]/20' : ''
            }`}
          >
            {hoveredAgent ? (
              <div key={hoveredAgent} className="flex items-start gap-4 animate-fade-in">
                {(() => {
                  const feature = aiFeatures.find(f => f.id === hoveredAgent);
                  const Icon = feature?.icon;
                  return (
                    <>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/15 to-[#0C8EFF]/20 backdrop-blur-xl border border-[#0C8EFF]/30 flex items-center justify-center">
                        {Icon && <Icon className="w-6 h-6 text-[#0C8EFF]" strokeWidth={1.5} />}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {feature?.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature?.description}
                        </p>
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-center">
                <div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/15 to-[#0C8EFF]/20 backdrop-blur-xl border border-[#0C8EFF]/30 flex items-center justify-center mx-auto mb-3">
                    <Brain className="w-6 h-6 text-[#0C8EFF]" strokeWidth={1.5} />
                  </div>
                  <p className="text-muted-foreground">
                    Hover over any feature below to explore our AI capabilities
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Circular Feature Display */}
        <div className="absolute left-0 right-0 flex items-center justify-center min-h-[800px] py-12" style={{ top: '460px' }}>
          {/* Aria Fusion - Central Core */}
          <div
            className={`relative z-20 transition-all duration-600 ${
              isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <div 
              className="rounded-full bg-gradient-to-br from-[#0C8EFF]/15 via-[#9F62ED]/10 to-[#0C8EFF]/15 backdrop-blur-xl border border-[#0C8EFF]/30 shadow-2xl shadow-[#0C8EFF]/25 flex-shrink-0"
              style={{ 
                width: '208px', 
                height: '208px', 
                aspectRatio: '1/1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0C8EFF] to-[#9F62ED] mb-3 flex items-center justify-center shadow-lg flex-shrink-0">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="text-center flex-shrink-0">
                <div className="text-lg font-bold bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
                  aria fusion
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Multi-Agent AI Core
                </div>
              </div>
              
              {/* Sparkles around Aria */}
              <div className="absolute inset-0">
                <Sparkles className="absolute w-4 h-4 text-[#0C8EFF] top-3 right-8 animate-pulse" />
                <Sparkles 
                  className="absolute w-3 h-3 text-[#9F62ED] bottom-6 left-6 animate-pulse" 
                  style={{animationDelay: '300ms'}} 
                />
                <Sparkles 
                  className="absolute w-5 h-5 text-[#0C8EFF] top-10 left-3 animate-pulse" 
                  style={{animationDelay: '700ms'}} 
                />
              </div>
            </div>
          </div>

          {/* AI Features in Circular Orbits */}
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon
            const position = getPosition(feature)
            const isHovered = hoveredAgent === feature.id

            return (
              <div
                key={feature.id}
                className={`absolute transition-all duration-500 ${
                  isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
                  transitionDelay: `${index * 0.1}s`
                }}
                onMouseEnter={() => setHoveredAgent(feature.id)}
                onMouseLeave={() => setHoveredAgent(null)}
              >
                {/* Feature Circle */}
                <div
                  className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/15 to-[#0C8EFF]/20 backdrop-blur-xl border border-[#0C8EFF]/30 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 flex-shrink-0 ${
                    isHovered 
                      ? 'scale-125 shadow-2xl shadow-[#0C8EFF]/40 border-[#0C8EFF]/60 bg-gradient-to-br from-[#0C8EFF]/30 via-[#9F62ED]/25 to-[#0C8EFF]/30' 
                      : 'hover:scale-110 hover:shadow-xl hover:border-[#0C8EFF]/40'
                  }`}
                  style={{ aspectRatio: '1/1' }}
                >
                  <Icon 
                    className={`w-6 h-6 transition-colors duration-300 ${
                      isHovered ? 'text-[#0C8EFF]' : 'text-foreground'
                    }`} 
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    </>
  )
}