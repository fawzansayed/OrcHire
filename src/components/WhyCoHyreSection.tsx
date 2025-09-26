"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Search,
  UserCheck,
  MessageSquare,
  Settings,
  Play,
} from "react-feather"

interface WhyCoHyreSectionProps {
  onNavigate?: (page: string) => void
}

export function WhyCoHyreSection({ onNavigate }: WhyCoHyreSectionProps) {
  const sectionRef = useRef(null)
  const workflowRef = useRef(null)

  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const workflowInView = useInView(workflowRef, { once: true, amount: 0.3 })

  const workflowSteps = [
    {
      icon: Search,
      title: "Source & Discover",
      description:
        "AI scans 400M+ profiles globally, identifying top talent across platforms",
      flowMetric: "400M+ Profiles",
      accentColor: "#0C8EFF",
    },
    {
      icon: UserCheck,
      title: "Screen & Assess",
      description:
        "Advanced evaluation through skills analysis and cultural fit prediction",
      flowMetric: "Multi-dimensional Analysis",
      accentColor: "#9F62ED",
    },
    {
      icon: MessageSquare,
      title: "Interview & Match",
      description:
        "Autonomous AI conducts structured interviews and ranks candidates",
      flowMetric: "24/7 AI Interviewers",
      accentColor: "#E241B7",
    },
    {
      icon: Settings,
      title: "Optimize & Learn",
      description:
        "Continuous learning improves precision and reduces time-to-fill",
      flowMetric: "Self-Improving AI",
      accentColor: "#00C853",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Workflow Section */}
        <motion.div
          ref={workflowRef}
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-16">
            <div className="inline-block p-[1px] bg-gradient-to-r from-[#9F62ED]/40 via-[#0C8EFF]/40 to-[#9F62ED]/40 rounded-full shadow-md">
              <motion.div className="inline-flex items-center space-x-2 bg-background/70 backdrop-blur-xl px-4 py-2 rounded-full">
                <Play className="w-4 h-4 text-[#9F62ED]" strokeWidth={1.25} />
                <span className="text-sm font-medium text-foreground">
                  Autonomous Talent Pipeline
                </span>
              </motion.div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI-Powered Hiring Flow
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of hiring with our intelligent pipeline that
              transforms talent acquisition from discovery to placement
            </p>
          </div>

          {/* Workflow Cards */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10 items-stretch">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={workflowInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative"
                  >
                    <div
                      className="relative p-8 min-h-[320px] h-full flex flex-col justify-between 
                                 backdrop-blur-xl border rounded-3xl shadow-lg transition-all duration-500 overflow-hidden"
                      style={{
                        background: `${step.accentColor}08`, // very light tint
                        boxShadow: `0 0 18px ${step.accentColor}33`, // soft glow
                        borderColor: `${step.accentColor}25`,
                      }}
                    >
                      <div className="relative h-full flex flex-col justify-center items-center text-center z-10 pt-6">
                        {/* Icon */}
                        <div className="mb-6">
                          <div
                            className="w-16 h-16 backdrop-blur-xl border rounded-2xl flex items-center justify-center shadow-md"
                            style={{
                              borderColor: `${step.accentColor}30`,
                              background: `${step.accentColor}12`,
                              boxShadow: `0 0 10px ${step.accentColor}22`,
                            }}
                          >
                            <Icon
                              className="w-8 h-8"
                              strokeWidth={1.5}
                              style={{ color: step.accentColor }}
                            />
                          </div>
                        </div>

                        {/* Title & Description */}
                        <div className="mb-6 space-y-2">
                          <h4 className="text-xl font-bold text-foreground">
                            {step.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Metric */}
                        <div className="mt-auto">
                          <div
                            className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full border shadow-sm"
                            style={{
                              borderColor: `${step.accentColor}30`,
                              background: `${step.accentColor}10`,
                            }}
                          >
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: step.accentColor }}
                            />
                            <span className="text-sm font-medium text-foreground">
                              {step.flowMetric}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
