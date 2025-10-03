"use client"

import React, { useEffect, useRef, useState } from "react"
import { Filter, MapPin, Star, Sparkles } from "lucide-react"
import { Badge } from "./ui/badge"

export function TalentGPTSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  
  // Typing animation text
  const searchQuery = "Find 2-3 years experience Frontend Software Engineers in Bangalore from scaleups"
  const [typedText, setTypedText] = useState("")
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [showCards, setShowCards] = useState(false)

  // Dummy candidate profiles with generic names and placeholder images
  const candidates = [
    {
      id: 1,
      name: "Alex Johnson",
      title: "Senior Frontend Developer at TechCorp",
      location: "Bangalore, Karnataka, India",
      rating: 4.9,
      skills: ["React", "TypeScript", "Node.js", "GraphQL"],
      experience: "4.2 years of experience specializing in modern web development with expertise in React ecosystem and scalable frontend architectures.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Frontend Engineer at StartupXYZ",
      location: "Bengaluru, Karnataka, India",
      rating: 4.8,
      skills: ["Vue.js", "JavaScript", "CSS3", "Webpack"],
      experience: "3.5 years of experience in building responsive web applications with strong focus on user experience and performance optimization.",
      avatar: "https://images.unsplash.com/photo-1712174766230-cb7304feaafe?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Rahul Patel",
      title: "Software Developer at InnovateLabs",
      location: "Bangalore Urban, Karnataka, India",
      rating: 4.7,
      skills: ["Angular", "RxJS", "SCSS", "Firebase"],
      experience: "2.8 years of experience developing enterprise-level applications with modern JavaScript frameworks and cloud technologies.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    }
  ]

  // Intersection Observer to detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      { 
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: "0px 0px -10% 0px" // Slight offset from bottom
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  // Animation sequence when section becomes visible
  useEffect(() => {
    if (isVisible) {
      // Show search bar first
      const searchBarTimer = setTimeout(() => {
        setShowSearchBar(true)
      }, 500)

      // Start typing animation
      const typingTimer = setTimeout(() => {
        let currentIndex = 0
        const typingInterval = setInterval(() => {
          if (currentIndex <= searchQuery.length) {
            setTypedText(searchQuery.substring(0, currentIndex))
            currentIndex++
          } else {
            clearInterval(typingInterval)
            // Show cards after typing is complete
            setTimeout(() => {
              setShowCards(true)
            }, 800)
          }
        }, 50) // Typing speed
      }, 1000)

      return () => {
        clearTimeout(searchBarTimer)
        clearTimeout(typingTimer)
      }
    }
  }, [isVisible, searchQuery])

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 overflow-hidden min-h-screen flex items-center"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#0C8EFF]/10 to-[#9F62ED]/10 border border-[#0C8EFF]/20 mb-6 hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 text-[#0C8EFF] mr-2" />
            <span className="text-sm font-medium bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent">
              TalentGPT
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent">
            AI-Powered Talent Discovery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simply describe your requirements in natural language and watch our AI find the perfect candidates from 400M+ profiles
          </p>
        </div>

        {/* Demo Container */}
        <div className="max-w-6xl mx-auto">
          {/* Search Interface */}
          <div className={`mb-12 transition-all duration-800 ease-out ${
            showSearchBar 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-95 translate-y-8'
          }`}>
            <div className="relative group">
              {/* Glass search bar */}
              <div className="relative bg-card/40 backdrop-blur-xl border border-border/20 rounded-2xl p-6 shadow-2xl overflow-hidden">
                {/* Sheen effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Search bar content */}
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#0C8EFF]/20 to-[#9F62ED]/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#0C8EFF]" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-lg text-foreground min-h-[28px] flex items-center">
                      {typedText}
                      {typedText.length < searchQuery.length && showSearchBar && (
                        <span className="w-px h-6 bg-[#0C8EFF] ml-1 animate-pulse" />
                      )}
                    </div>
                  </div>
                  
                  {/* Search Button */}
                  <div className="hover:scale-102 transition-transform duration-300">
                    <div className="inline-block p-[1px] bg-gradient-to-r from-[#0C8EFF]/60 via-[#9F62ED]/60 to-[#0C8EFF]/60 rounded-full shadow-lg">
                      <button className="flex items-center bg-background/80 backdrop-blur-xl text-foreground px-6 py-3 rounded-full text-sm font-medium border-0 transition-all duration-300 hover:bg-background/90 hover:text-[#0C8EFF]">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Search with AI
                      </button>
                    </div>
                  </div>
                  
                  <button className="w-12 h-12 rounded-xl bg-card/60 backdrop-blur-sm border border-border/30 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">
                    <Filter className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Candidate Profiles - Grid Layout */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-800 ease-out ${
            showCards 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            {candidates.map((candidate, index) => (
              <div
                key={candidate.id}
                className={`group transition-all duration-600 ease-out ${
                  showCards ? 'animate-talent-fade-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: showCards ? `${index * 200}ms` : '0ms',
                  animationFillMode: 'both'
                }}
              >
                <div className="bg-card/40 backdrop-blur-xl border border-border/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full">
                  {/* Sheen effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Profile content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header with Avatar and Rating */}
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={candidate.avatar}
                        alt={candidate.name}
                        className="w-16 h-16 rounded-xl object-cover border-2 border-border/30 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-1">
                              {candidate.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-1 line-clamp-2">
                              {candidate.title}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{candidate.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{candidate.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {candidate.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="secondary"
                            className="bg-[#0C8EFF]/10 text-[#0C8EFF] border-[#0C8EFF]/20 hover:bg-[#0C8EFF]/20 text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Experience summary */}
                    <div className="mb-6 flex-1">
                      <h4 className="text-sm font-medium text-foreground mb-2">AI Analysis</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {candidate.experience}
                      </p>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-3 mt-auto">
                      {/* Import Button */}
                      <div className="flex-1 hover:scale-102 transition-transform duration-300">
                        <div className="inline-block p-[1px] bg-gradient-to-r from-[#0C8EFF]/60 via-[#9F62ED]/60 to-[#0C8EFF]/60 rounded-full shadow-lg w-full">
                          <button className="w-full bg-background/80 backdrop-blur-xl text-foreground py-2 px-4 rounded-full text-sm font-medium border-0 transition-all duration-300 hover:bg-background/90 hover:text-[#0C8EFF]">
                            Import
                          </button>
                        </div>
                      </div>
                      
                      <button className="flex-1 py-2 px-4 border border-border/30 text-muted-foreground rounded-full text-sm font-medium hover:text-foreground hover:bg-card/60 transition-all duration-300 hover:scale-102">
                        Pass
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}