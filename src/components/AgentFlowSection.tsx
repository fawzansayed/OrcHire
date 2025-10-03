import React, { useRef, useEffect, useState } from "react";
import { Clock, Award, BarChart, Cpu, Eye, Globe, Server, Shield, Target, TrendingUp, Zap } from "react-feather";

export function AgentFlowSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const platformOverview = {
    coreCapabilities: [
      {
        icon: Cpu,
        title: "AI-Powered Intelligence",
        description: "Advanced ML algorithms that understand context, intent, and quality",
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
    <>
      {/* Section Separator Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30"></div>
      
      <section ref={sectionRef} className="pt-20 pb-8 px-6 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/5 w-96 h-96 bg-gradient-to-br from-[#0C8EFF]/8 via-[#9F62ED]/6 to-transparent rounded-full blur-3xl animate-float-slow"
        />
        <div
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-br from-[#9F62ED]/8 via-[#0C8EFF]/6 to-transparent rounded-full blur-3xl animate-float-slow-delayed"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-600 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight transition-all duration-800 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Automate Hiring
            <br />
            <span className="bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
              End-to-End
            </span>
          </h2>
          <p 
            className={`text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed transition-all duration-800 delay-400 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            A comprehensive AI-powered platform that transforms your entire hiring process. 
          </p>
        </div>

        {/* Core Capabilities - Cards with Default Frost Effect */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {platformOverview.coreCapabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-600 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="relative p-8 h-full transition-all duration-500 group overflow-hidden rounded-2xl border border-muted-foreground/20">
                  {/* Default Frost Effect - Light and Subtle */}
                  <div className="absolute inset-0 rounded-2xl">
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 35%, rgba(255, 255, 255, 0.015) 70%, rgba(255, 255, 255, 0.01) 100%)",
                        backdropFilter: "blur(8px) saturate(110%)",
                        WebkitBackdropFilter: "blur(8px) saturate(110%)"
                      }}
                    />
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: "radial-gradient(ellipse at top right, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 40%, rgba(255, 255, 255, 0.008) 80%)",
                        backdropFilter: "blur(6px)",
                        WebkitBackdropFilter: "blur(6px)"
                      }}
                    />
                  </div>

                  {/* Hover Gradient Effect - Enhanced on Hover */}
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
                    <div 
                      className="w-16 h-16 md:w-20 md:h-20 bg-transparent border border-muted-foreground/20 rounded-2xl flex items-center justify-center mb-6 group-hover:border-[#0C8EFF]/40 transition-all duration-300 hover:scale-105 hover:rotate-3"
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-foreground/90 group-hover:text-[#0C8EFF] transition-colors duration-300" strokeWidth={1.5} />
                    </div>

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
              </div>
            );
          })}
        </div>

        {/* Key Metrics - KPI Format */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {platformOverview.keyMetrics.map((metric, index) => {
            return (
              <div
                key={index}
                className={`kpi-card text-center transition-all duration-400 hover:-translate-y-1 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${1.6 + index * 0.1}s` }}
              >
                {/* Large Value */}
                <div
                  className={`kpi-number text-4xl md:text-5xl lg:text-6xl font-semibold mb-2 transition-all duration-300 ${
                    isInView ? 'scale-100' : 'scale-0'
                  }`}
                  style={{ 
                    transitionDelay: `${1.7 + index * 0.1}s`
                  }}
                >
                  {metric.value}{metric.suffix}
                </div>

                {/* Small Label */}
                <div className="kpi-label text-sm font-light transition-colors duration-300">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
}