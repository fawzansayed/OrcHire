import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Clock, Award, BarChart, Cpu, Eye, Globe, Server, Shield, Target, TrendingUp, Zap } from "react-feather";


export function AgentFlowSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const platformOverview = {
    coreCapabilities: [
      {
        icon: Cpu,
        title: "AI-Powered Intelligence",
        description: "Advanced machine learning algorithms that understand context, intent, and quality",
        metric: "11 Specialized AI Agents",
        gradient: "from-[#0C8EFF] to-[#9F62ED]"
      },
      {
        icon: Globe,
        title: "Global Talent Network",
        description: "Access to 400M+ professional profiles across all major platforms and databases",
        metric: "400M+ Profiles",
        gradient: "from-[#9F62ED] to-[#0C8EFF]"
      },
      {
        icon: Clock,
        title: "Autonomous Operations",
        description: "24/7 continuous operation with intelligent decision-making and self-optimization",
        metric: "24/7 Active",
        gradient: "from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF]"
      }
    ],
    keyMetrics: [
      { value: 85, label: "Faster Hiring", suffix: "%", icon: TrendingUp },
      { value: 94, label: "Match Accuracy", suffix: "%", icon: Target },
      { value: 67, label: "Cost Reduction", suffix: "%", icon: BarChart },
      { value: 24, label: "Hours Active", suffix: "/7", icon: Clock }
    ],
    trustIndicators: [
      {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-level encryption and compliance with global data protection standards",
        badges: ["SOC 2", "GDPR", "CCPA"]
      },
      {
        icon: Award,
        title: "Proven Results",
        description: "Trusted by Fortune 500 companies with verified performance improvements",
        badges: ["ISO 27001", "Enterprise", "Fortune 500"]
      },
      {
        icon: Server,
        title: "Scale & Reliability",
        description: "Cloud-native architecture supporting organizations from 50 to 50,000+ employees",
        badges: ["99.9% Uptime", "Global CDN", "Auto-Scale"]
      }
    ]
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/5 w-96 h-96 bg-gradient-to-br from-[#0C8EFF]/8 via-[#9F62ED]/6 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-br from-[#9F62ED]/8 via-[#0C8EFF]/6 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 0.8, 1] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Automate Hiring
            <br />
            <span className="bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
              End-to-End
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A comprehensive AI-powered platform that transforms your entire hiring process. 
          </motion.p>
        </motion.div>

        {/* Core Capabilities - Plain Cards with Hover Gradient */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {platformOverview.coreCapabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="relative p-8 h-full transition-all duration-500 group overflow-hidden rounded-2xl border border-muted-foreground/20">
                  {/* Plain Background - Shows site background */}
                  <div className="absolute inset-0 rounded-2xl bg-transparent" />

                  {/* Hover Gradient Effect - Top Right to Bottom Left with Cloudy Blue/Purple */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(12, 142, 255, 0.15) 0%, rgba(159, 98, 237, 0.12) 35%, rgba(12, 142, 255, 0.08) 70%, transparent 100%)",
                        filter: "blur(0.5px)"
                      }}
                    />
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: "radial-gradient(ellipse at top right, rgba(12, 142, 255, 0.1) 0%, rgba(159, 98, 237, 0.06) 40%, transparent 80%)"
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Icon Container */}
                    <motion.div 
                      className="w-16 h-16 md:w-20 md:h-20 bg-transparent border border-muted-foreground/20 rounded-2xl flex items-center justify-center mb-6 group-hover:border-[#0C8EFF]/40 transition-all duration-300"
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-foreground/90 group-hover:text-[#0C8EFF] transition-colors duration-300" strokeWidth={1.5} />
                    </motion.div>

                    {/* Metric Badge */}
                    <div className="inline-flex px-4 py-2 bg-transparent border border-muted-foreground/20 rounded-full group-hover:border-[#0C8EFF]/30 transition-all duration-300 mb-4">
                      <span className="text-sm font-semibold bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent">{cap.metric}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-tight group-hover:text-[#0C8EFF] mb-3 transition-colors duration-300">{cap.title}</h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg transition-colors duration-300">{cap.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Metrics - KPI Format */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {platformOverview.keyMetrics.map((metric, index) => {
            return (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Large Value */}
                <motion.div
                  className="text-4xl md:text-5xl lg:text-6xl font-thin text-foreground mb-2 transition-all duration-300 group-hover:text-[#0C8EFF]"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                >
                  {metric.value}{metric.suffix}
                </motion.div>

                {/* Small Label */}
                <div className="text-sm text-muted-foreground font-light group-hover:text-[#0C8EFF] transition-colors duration-300">{metric.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}