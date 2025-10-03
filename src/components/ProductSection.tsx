"use client"
import { FileText, Search, CheckSquare, Mic, BarChart2, Cpu, Activity, Zap, CheckCircle, ArrowRight } from "react-feather"
import { useState, useRef, useEffect } from "react"

export function ProductSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
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

  // Streamlined AI hiring flow - focused on automation
  const hiringFlow = [
    {
      id: 1,
      icon: FileText,
      title: "Analyze",
      description: "AI understands job requirements",
    },
    {
      id: 2,
      icon: Search,
      title: "Discover",
      description: "400M+ profiles scanned",
    },
    {
      id: 3,
      icon: CheckSquare,
      title: "Screen",
      description: "Multi-dimensional evaluation",
    },
    {
      id: 4,
      icon: Mic,
      title: "Interview",
      description: "Autonomous conversations",
    },
    {
      id: 5,
      icon: BarChart2,
      title: "Rank",
      description: "Intelligent candidate ranking",
    },
    {
      id: 6,
      icon: CheckSquare,
      title: "Close",
      description: "Automated offer management",
    },
  ]

  return (
    <>
      {/* Section Separator Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30"></div>
      
      <section ref={sectionRef} id="product" className="py-16 px-6 relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0" />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Header - Compact */}
        <div
          className={`text-center mb-16 transition-all duration-600 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
          }`}
        >
          {/* Standardized Badge */}
          <div className="inline-block p-[1px] bg-gradient-to-r from-[#0C8EFF]/60 via-[#9F62ED]/60 to-[#0C8EFF]/60 rounded-full shadow-lg mb-6">
            <div className="flex items-center bg-background/80 backdrop-blur-xl text-foreground px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium border-0 group hover:scale-105 transition-all duration-300">
              <Cpu className="w-4 h-4 text-foreground group-hover:text-[#0C8EFF] transition-colors duration-300 mr-3" strokeWidth={1.5} />
              <span className="text-foreground font-medium text-base">AI-Led Automation</span>
            </div>
          </div>

          {/* Heading */}
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight transition-all duration-600 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <span className="block">Autonomous Hiring</span>
            <span className="block bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
              From Job to Hire
            </span>
          </h2>

          {/* Subheading */}
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-600 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Complete hiring automation in 6 intelligent steps - from job analysis to offer acceptance.
          </p>
        </div>

        {/* AI Process Flow Infographic - Standardized Card */}
        <div className="relative max-w-7xl mx-auto">
          {/* Plain Card with Purple Border and Container Hover Effect */}
          <div 
            className="relative rounded-3xl p-8 md:p-12 overflow-hidden group transition-all duration-500"
            style={{
              border: "3px solid rgba(159, 98, 237, 0.3)"
            }}
          >
            {/* Plain Background - Shows site background */}
            <div className="absolute inset-0 rounded-3xl bg-transparent" />

            {/* Container Hover Gradient Effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div 
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, rgba(12, 142, 255, 0.08) 0%, rgba(159, 98, 237, 0.06) 35%, rgba(12, 142, 255, 0.04) 70%, transparent 100%)",
                  filter: "blur(0.5px)"
                }}
              />
              <div 
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "radial-gradient(ellipse at top right, rgba(12, 142, 255, 0.06) 0%, rgba(159, 98, 237, 0.03) 40%, transparent 80%)"
                }}
              />
            </div>

            {/* Section Label Badge */}
            <div
              className={`flex items-center justify-center gap-2 mb-8 transition-all duration-600 delay-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <div
                className="inline-flex items-center gap-2 bg-transparent px-4 py-2 rounded-full border border-muted-foreground/20 relative overflow-hidden group transition-all duration-500 hover:scale-105"
              >
                {/* Plain Background - Shows site background */}
                <div className="absolute inset-0 rounded-full bg-transparent" />

                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, rgba(12, 142, 255, 0.1) 0%, rgba(159, 98, 237, 0.08) 50%, transparent 100%)",
                      filter: "blur(0.3px)"
                    }}
                  />
                </div>

                <Zap className="w-4 h-4 text-foreground transition-colors duration-300 group-hover:text-[#0C8EFF] relative z-10" />
                <span className="text-sm font-medium text-foreground/80 relative z-10">Autonomous AI Process</span>
              </div>
            </div>

            {/* Process Flow Container */}
            <div className="relative">
              {/* Process Steps - Clean Design */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
                {hiringFlow.map((step, index) => {
                  const Icon = step.icon

                  return (
                    <div
                      key={step.id}
                      className={`relative group flex flex-col items-center transition-all duration-600 ${
                        isInView ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-80 translate-y-12'
                      }`}
                      style={{ 
                        transitionDelay: `${0.8 + index * 0.15}s` 
                      }}
                      onMouseEnter={() => setActiveStep(index)}
                      onMouseLeave={() => setActiveStep(null)}
                    >
                      {/* Step Number Above Circle */}
                      <div
                        className="mb-4 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border border-foreground/30 text-foreground/70"
                        style={{
                          borderColor: activeStep === index ? "#0C8EFF" : "",
                          color: activeStep === index ? "#0C8EFF" : ""
                        }}
                      >
                        {step.id}
                      </div>

                      <div
                        className="relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 bg-card/60 backdrop-blur-xl border border-border/30 shadow-lg hover:scale-110 hover:-translate-y-2"
                        style={{
                          boxShadow: activeStep === index ? "0 12px 40px rgba(12, 142, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)" : "",
                          background: activeStep === index ? "linear-gradient(135deg, rgba(12, 142, 255, 0.15) 0%, rgba(159, 98, 237, 0.1) 100%)" : ""
                        }}
                      >
                        {/* Minimal glass reflection */}
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background:
                              "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
                          }}
                        />

                        {/* Icon - Theme-aware colors, blue on individual hover only */}
                        <div className="transition-transform duration-200 hover:scale-110">
                          <Icon
                            className="w-8 h-8 text-foreground transition-colors duration-300"
                            style={{
                              color: activeStep === index ? "#0C8EFF" : ""
                            }}
                            strokeWidth={1.8}
                          />
                        </div>
                      </div>

                      <div
                        className={`text-center mt-4 space-y-2 transition-all duration-400 ${
                          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}
                        style={{ 
                          transitionDelay: `${1 + index * 0.1}s` 
                        }}
                      >
                        {/* Step Title - Blue on individual hover only */}
                        <h4 
                          className="font-semibold transition-colors duration-300 text-foreground/80"
                          style={{
                            color: activeStep === index ? "#0C8EFF" : ""
                          }}
                        >
                          {step.title}
                        </h4>

                        {/* Step Description - Normal theme-aware color */}
                        <p className="text-xs text-foreground/60 leading-relaxed max-w-[100px] mx-auto">
                          {step.description}
                        </p>
                      </div>

                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          width: "120px",
                          height: "120px",
                          left: "50%",
                          top: "0",
                          transform: "translateX(-50%)",
                        }}
                      >
                        {/* Corner squares that appear on hover */}
                        {[0, 1, 2, 3].map((corner) => (
                          <div
                            key={corner}
                            className={`absolute w-2 h-2 border border-[#0C8EFF]/60 bg-[#0C8EFF]/20 transition-all duration-200 ${
                              activeStep === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                            }`}
                            style={{
                              top: corner < 2 ? "0" : "100%",
                              left: corner % 2 === 0 ? "0" : "100%",
                              transform:
                                corner < 2
                                  ? corner % 2 === 0
                                    ? "translate(0, 0)"
                                    : "translate(-100%, 0)"
                                  : corner % 2 === 0
                                    ? "translate(0, -100%)"
                                    : "translate(-100%, -100%)",
                              transitionDelay: `${corner * 0.05}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div
                className={`flex items-center justify-center gap-3 mt-8 transition-all duration-600 delay-[2s] ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-foreground/10 to-foreground/10" />
                <div className="flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-xl rounded-full border-2 border-muted-foreground/40 shadow-lg group">
                  <Activity className="w-4 h-4 text-foreground transition-colors duration-300 group-hover:text-[#0C8EFF]" />
                  <span className="text-sm font-medium text-foreground/70">Autonomous Processing</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-foreground/10 to-foreground/10" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto transition-all duration-600 delay-[1.5s] ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {[
            { label: "Automation", value: "100", suffix: "%" },
            { label: "Accuracy", value: "98", suffix: "%" },
            { label: "Speed", value: "10x", suffix: "" },
          ].map((metric, index) => {
            return (
              <div
                key={metric.label}
                className={`kpi-card text-center transition-all duration-400 hover:-translate-y-1 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ 
                  transitionDelay: `${1.7 + index * 0.1}s` 
                }}
              >
                {/* Large Value */}
                <div
                  className={`kpi-number text-4xl md:text-5xl lg:text-6xl font-semibold mb-2 transition-all duration-300 ${
                    isInView ? 'scale-100' : 'scale-0'
                  }`}
                  style={{ 
                    transitionDelay: `${1.8 + index * 0.1}s`
                  }}
                >
                  {metric.value}{metric.suffix}
                </div>

                {/* Small Label */}
                <div className="kpi-label text-sm font-light transition-colors duration-300">
                  {metric.label}
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