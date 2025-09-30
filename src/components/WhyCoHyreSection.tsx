"use client"

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
  const workflowSteps = [
    {
      icon: Search,
      title: "Source & Discover",
      description:
        "AI scans 400M+ profiles globally, identifying top talent across platforms",
      flowMetric: "400M+ Profiles",
    },
    {
      icon: UserCheck,
      title: "Screen & Assess",
      description:
        "Advanced evaluation through skills analysis and cultural fit prediction",
      flowMetric: "Multi-dimensional Analysis",
    },
    {
      icon: MessageSquare,
      title: "Interview & Match",
      description:
        "Autonomous AI conducts structured interviews and ranks candidates",
      flowMetric: "24/7 AI Interviewers",
    },
    {
      icon: Settings,
      title: "Optimize & Learn",
      description:
        "Continuous learning improves precision and reduces time-to-fill",
      flowMetric: "Self-Improving AI",
    },
  ]

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Workflow Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-block p-[1px] bg-gradient-to-r from-[#9F62ED]/40 via-[#0C8EFF]/40 to-[#9F62ED]/40 rounded-full shadow-md">
              <div className="inline-flex items-center space-x-2 bg-background/70 backdrop-blur-xl px-4 py-2 rounded-full">
                <Play className="w-4 h-4 text-[#9F62ED]" strokeWidth={1.25} />
                <span className="text-sm font-medium text-foreground">
                  Autonomous Talent Pipeline
                </span>
              </div>
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
                  <div
                    key={step.title}
                    className="relative group"
                  >
                    <div className="relative p-8 min-h-[320px] h-full flex flex-col justify-between rounded-3xl border border-muted-foreground/20 transition-all duration-500 overflow-hidden hover:scale-105">
                      {/* Plain Background - Shows site background */}
                      <div className="absolute inset-0 rounded-3xl bg-transparent" />

                      {/* Hover Gradient Effect - Fogged Glass */}
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

                      <div className="relative h-full flex flex-col justify-center items-center text-center z-10 pt-6">
                        {/* Icon */}
                        <div className="mb-6">
                          <div className="w-16 h-16 bg-transparent border border-muted-foreground/20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#0C8EFF]/40">
                            <Icon
                              className="w-8 h-8 text-foreground transition-colors duration-300 group-hover:text-[#0C8EFF]"
                              strokeWidth={1.5}
                            />
                          </div>
                        </div>

                        {/* Title & Description */}
                        <div className="mb-6 space-y-2">
                          <h4 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-[#0C8EFF]">
                            {step.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Metric */}
                        <div className="mt-auto">
                          <div className="inline-flex items-center gap-2 bg-transparent px-4 py-2 rounded-full border border-muted-foreground/20 transition-all duration-300 group-hover:scale-105 group-hover:border-[#0C8EFF]/30">
                            <div className="w-2 h-2 rounded-full bg-[#0C8EFF]" />
                            <span className="text-sm font-medium text-foreground">
                              {step.flowMetric}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}