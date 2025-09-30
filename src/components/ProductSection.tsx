"use client"
import { FileText, Search, CheckSquare, Mic, BarChart2, Cpu, Activity, Zap, CheckCircle, ArrowRight } from "react-feather"
import { motion, useInView } from "motion/react"
import { useState, useRef } from "react"

export function ProductSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

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
    <section ref={sectionRef} id="product" className="py-16 px-6 relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0" />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Header - Compact */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Standardized Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-transparent px-4 py-2 rounded-full mb-6 border border-muted-foreground/20 relative overflow-hidden group transition-all duration-500"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
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

            <Cpu className="w-5 h-5 text-foreground transition-colors duration-300 group-hover:text-[#0C8EFF] relative z-10" />
            <span className="text-foreground font-medium text-sm relative z-10">AI-Led Automation</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block">Autonomous Hiring</span>
            <span className="block bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
              From Job to Hire
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Complete hiring automation in 6 intelligent steps - from job analysis to offer acceptance.
          </motion.p>
        </motion.div>

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
            <motion.div
              className="flex items-center justify-center gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-transparent px-4 py-2 rounded-full border border-muted-foreground/20 relative overflow-hidden group transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
              </motion.div>
            </motion.div>

            {/* Process Flow Container */}
            <div className="relative">
              {/* Process Steps - Clean Design */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
                {hiringFlow.map((step, index) => {
                  const Icon = step.icon

                  return (
                    <motion.div
                      key={step.id}
                      className="relative group flex flex-col items-center"
                      initial={{ opacity: 0, scale: 0.8, y: 50 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                      onHoverStart={() => setActiveStep(index)}
                      onHoverEnd={() => setActiveStep(null)}
                    >
                      {/* Step Number Above Circle */}
                      <motion.div
                        className="mb-4 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border border-foreground/30 text-foreground/70"
                        style={{
                          borderColor: activeStep === index ? "#0C8EFF" : "",
                          color: activeStep === index ? "#0C8EFF" : ""
                        }}
                      >
                        {step.id}
                      </motion.div>

                      <motion.div
                        className="relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 bg-card/60 backdrop-blur-xl border border-border/30 shadow-lg"
                        whileHover={{
                          scale: 1.1,
                          y: -8,
                          boxShadow: "0 12px 40px rgba(12, 142, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                          background: "linear-gradient(135deg, rgba(12, 142, 255, 0.15) 0%, rgba(159, 98, 237, 0.1) 100%)",
                          transition: { duration: 0.3, ease: "easeOut" },
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
                        <motion.div
                          whileHover={{
                            scale: 1.1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon
                            className="w-8 h-8 text-foreground transition-colors duration-300"
                            style={{
                              color: activeStep === index ? "#0C8EFF" : ""
                            }}
                            strokeWidth={1.8}
                          />
                        </motion.div>
                      </motion.div>

                      <motion.div
                        className="text-center mt-4 space-y-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
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
                      </motion.div>

                      <motion.div
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
                          <motion.div
                            key={corner}
                            className="absolute w-2 h-2 border border-[#0C8EFF]/60 bg-[#0C8EFF]/20"
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
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                              scale: activeStep === index ? 1 : 0,
                              opacity: activeStep === index ? 1 : 0,
                            }}
                            transition={{ duration: 0.2, delay: corner * 0.05 }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                className="flex items-center justify-center gap-3 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2 }}
              >
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-foreground/10 to-foreground/10" />
                <div className="flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-xl rounded-full border-2 border-muted-foreground/40 shadow-lg group">
                  <Activity className="w-4 h-4 text-foreground transition-colors duration-300 group-hover:text-[#0C8EFF]" />
                  <span className="text-sm font-medium text-foreground/70">Autonomous Processing</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-foreground/10 to-foreground/10" />
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          {[
            { label: "Automation", value: "100", suffix: "%" },
            { label: "Accuracy", value: "98", suffix: "%" },
            { label: "Speed", value: "10x", suffix: "" },
            { label: "Intelligence", value: "AI", suffix: "" },
          ].map((metric, index) => {
            return (
              <motion.div
                key={metric.label}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1.7 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Large Value */}
                <motion.div
                  className="text-4xl md:text-5xl lg:text-6xl font-thin text-foreground mb-2 transition-all duration-300 group-hover:text-[#0C8EFF]"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                >
                  {metric.value}{metric.suffix}
                </motion.div>

                {/* Small Label */}
                <div className="text-sm text-muted-foreground font-light group-hover:text-[#0C8EFF] transition-colors duration-300">{metric.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}