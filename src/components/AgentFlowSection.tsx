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
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background/95" />

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

        <div className="absolute inset-0 bg-background/40 backdrop-blur-[0.5px]" />
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

        {/* Core Capabilities */}
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
                <div className="relative p-8 h-full transition-all duration-500 group overflow-hidden rounded-2xl">
                  {/* Glass Background */}
                  <div className="absolute inset-0 rounded-2xl bg-background/60 dark:bg-background/40 backdrop-blur-xl group-hover:bg-background/80 dark:group-hover:bg-background/60 transition-all duration-500" />

                  {/* Strong Border */}
                  <div className="absolute inset-0 rounded-2xl border border-black dark:border-white/10 group-hover:border-[#0C8EFF]/40 shadow-lg group-hover:shadow-xl transition-all duration-500" />

                  {/* Glass Reflections */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/15" />
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent dark:via-white/15" />

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#0C8EFF]/10 to-transparent dark:from-[#0C8EFF]/5 rounded-tr-2xl" />

                  {/* Inner Glow */}
                  <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-white/[0.05] via-transparent to-transparent dark:from-white/[0.03] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 md:w-20 md:h-20 bg-background/80 dark:bg-background/60 backdrop-blur-xl border border-black dark:border-white/20 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:bg-gradient-to-br group-hover:from-[#0C8EFF]/10 group-hover:to-[#9F62ED]/10 transition-all duration-300"
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-foreground/90 group-hover:text-[#0C8EFF] transition-colors duration-300" strokeWidth={1.5} />
                    </motion.div>

                    <div className="inline-flex px-4 py-2 bg-background/80 dark:bg-background/60 backdrop-blur-sm rounded-full border border-black dark:border-white/20 shadow-sm group-hover:border-[#0C8EFF]/30 group-hover:bg-gradient-to-r group-hover:from-[#0C8EFF]/5 group-hover:to-[#9F62ED]/5 transition-all duration-300">
                      <span className="text-sm font-semibold bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent">{cap.metric}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-tight group-hover:text-[#0C8EFF] mt-4">{cap.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg group-hover:text-muted-foreground/90">{cap.description}</p>
                  </div>

                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0C8EFF]/5 via-[#9F62ED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {platformOverview.keyMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              >
                <div className="relative p-6 text-center transition-all duration-500 group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 rounded-xl bg-white/30 dark:bg-background/40 backdrop-blur-xl group-hover:bg-white/40 dark:group-hover:bg-background/60 transition-all duration-500" />
                  <div className="absolute inset-0 rounded-xl border border-black dark:border-white/10 group-hover:border-[#0C8EFF]/40 shadow-lg group-hover:shadow-xl transition-all duration-500" />

                  <div className="relative z-10">
                    <motion.div
                      className="w-12 h-12 bg-white/20 dark:bg-background/60 backdrop-blur-sm border border-black dark:border-white/20 rounded-xl flex items-center justify-center shadow-sm mb-4 mx-auto group-hover:bg-gradient-to-br group-hover:from-[#0C8EFF]/20 group-hover:to-[#9F62ED]/20 transition-all duration-300"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-6 h-6 text-foreground/90 group-hover:text-[#0C8EFF] transition-colors duration-300" strokeWidth={1.5} />
                    </motion.div>

                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                      {metric.value}
                      <span className="text-lg text-muted-foreground ml-1">{metric.suffix}</span>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
                  </div>

                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
