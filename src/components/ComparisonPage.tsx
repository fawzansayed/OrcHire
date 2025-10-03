import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Clock, 
  Users, 
  TrendingUp,
  Brain, 
  Target,
  ArrowRight,
  Monitor,
  Bot,
  Search,
  BarChart3,
  DollarSign,
  Globe,
  Sparkles,
  Zap
} from "lucide-react";

interface ComparisonPageProps {
  onNavigate: (page: string) => void
}

export function ComparisonPage({ onNavigate }: ComparisonPageProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { theme } = useTheme();

  const comparisonFeatures = [
    {
      feature: "Time to Hire",
      icon: Clock,
      traditional: "42 days",
      orchire: "3 days",
    },
    {
      feature: "Process Automation", 
      icon: Bot,
      traditional: "10% automated",
      orchire: "95% automated",
    },
    {
      feature: "Candidate Sourcing",
      icon: Search,
      traditional: "Manual search",
      orchire: "AI-powered sourcing",
    },
    {
      feature: "Screening Accuracy",
      icon: Target,
      traditional: "68% accuracy",
      orchire: "94% accuracy",
    },
    {
      feature: "Cost per Hire",
      icon: DollarSign,
      traditional: "$4,129 average",
      orchire: "$890 average",
    },
    {
      feature: "Candidate Experience",
      icon: Users,
      traditional: "Generic process",
      orchire: "Personalized journey",
    },
    {
      feature: "Bias Reduction",
      icon: Brain,
      traditional: "Human bias present",
      orchire: "AI objective analysis",
    },
    {
      feature: "Scalability",
      icon: TrendingUp,
      traditional: "Limited scalability",
      orchire: "Unlimited scaling",
    },
    {
      feature: "24/7 Operations",
      icon: Globe,
      traditional: "Business hours only",
      orchire: "Always available",
    }
  ];

  return (
    <main className="pt-20 min-h-screen">
      <section ref={sectionRef} className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Standardized Badge */}
            <div className="inline-block p-[1px] rounded-full shadow-lg mb-6" style={{ background: 'linear-gradient(90deg, rgba(12, 142, 255, 0.6), rgba(159, 98, 237, 0.6), rgba(12, 142, 255, 0.6))' }}>
              <div className="flex items-center bg-background/80 backdrop-blur-xl text-foreground px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium border-0 group transition-all duration-300">
                <Sparkles className="w-4 h-4 text-foreground group-hover:text-[#0C8EFF] transition-colors duration-300 mr-3" strokeWidth={1.5} />
                <span className="text-foreground font-medium text-base">Hiring Comparison</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
              <span className="block">Traditional vs</span>
              <span className="block bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
                OrcHire.ai
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how AI-powered hiring compares to traditional methods across key metrics that matter to your business.
            </p>
          </motion.div>



          {/* Modern Comparison Table */}
          <motion.div
            className="max-w-5xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Table Container with Frost Effect */}
            <div className="rounded-2xl overflow-hidden shadow-xl backdrop-blur-md" style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              border: '2px solid rgba(107, 114, 128, 0.2)' 
            }}>
              {/* Enhanced Table Header */}
              <div style={{ 
                background: 'rgba(107, 114, 128, 0.05)', 
                borderBottom: '2px solid rgba(107, 114, 128, 0.2)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr auto 1fr',
                gap: '1.5rem',
                alignItems: 'center',
                padding: '2rem'
              }}>
                  {/* Metric Column */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(12, 142, 255, 0.1)' }}>
                      <Monitor className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="font-semibold text-foreground text-lg">Metric</span>
                  </div>
                  
                  {/* Traditional Hiring Column */}
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <span className="font-semibold text-foreground text-lg block">Traditional Hiring</span>
                      <span className="text-xs text-muted-foreground">Legacy methods</span>
                    </div>
                  </div>

                  {/* VS Symbol */}
                  <div className="flex items-center justify-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border border-border/30 shadow-sm"
                      style={{ background: 'rgba(12, 142, 255, 0.08)' }}
                    >
                      <span className="text-sm font-semibold text-foreground">VS</span>
                    </div>
                  </div>

                  {/* OrcHire Column with Logo */}
                  <div className="flex items-center justify-center">
                    <div className="text-center flex flex-col items-center">
                      <div className="w-28 mb-1">
                        <ImageWithFallback
                          src={theme === "dark" ? "/assets/whitelogoOrcHireMain.png" : "/assets/BlackLogoOrcHireMain.png"}
                          alt="OrcHire.ai"
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">OrcHire.ai</span>
                    </div>
                  </div>
              </div>

              {/* Table Body */}
              <div>
                {comparisonFeatures.map((item, index) => {
                  const Icon = item.icon;
                  
                  // Calculate proportional values and improvement percentages
                  const getValues = () => {
                    if (item.feature === "Time to Hire") return { 
                      traditional: 85, // 42 days is high
                      orchire: 10, // 3 days is very low
                      improvement: 93 
                    };
                    if (item.feature === "Process Automation") return { 
                      traditional: 10, // 10% automated
                      orchire: 95, // 95% automated
                      improvement: 850 
                    };
                    if (item.feature === "Screening Accuracy") return { 
                      traditional: 68, // 68% accuracy
                      orchire: 94, // 94% accuracy
                      improvement: 38 
                    };
                    if (item.feature === "Cost per Hire") return { 
                      traditional: 80, // $4,129 is high cost
                      orchire: 20, // $890 is much lower
                      improvement: 78 
                    };
                    return { traditional: 40, orchire: 85, improvement: 75 }; // Default values
                  };

                  const values = getValues();
                  
                  return (
                    <motion.div
                      key={index}
                      className="transition-all duration-300 group hover:bg-background/60"
                      style={{ 
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr auto 1fr',
                        gap: '1.5rem',
                        alignItems: 'center',
                        padding: '1.5rem 2rem',
                        borderTop: '1px solid rgba(107, 114, 128, 0.2)',
                        borderBottom: index === comparisonFeatures.length - 1 ? '1px solid rgba(107, 114, 128, 0.2)' : 'none'
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      {/* Metric Column */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(12, 142, 255, 0.1)' }}>
                          <Icon className="w-5 h-5 text-foreground" />
                        </div>
                        <span className="font-medium text-foreground">{item.feature}</span>
                      </div>

                      {/* Traditional Column */}
                      <div className="text-center">
                        <div className="rounded-xl p-4" style={{ 
                          background: 'rgba(107, 114, 128, 0.1)', 
                          border: '1px solid rgba(107, 114, 128, 0.2)' 
                        }}>
                          <p className="font-semibold text-foreground mb-2">{item.traditional}</p>
                          <div className="w-full rounded-full h-2" style={{ background: 'rgba(107, 114, 128, 0.2)' }}>
                            <motion.div 
                              className="h-2 rounded-full"
                              style={{ background: 'rgba(113, 113, 130, 0.6)' }}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${values.traditional}%` } : { width: 0 }}
                              transition={{ duration: 1.2, delay: 0.6 + index * 0.1 }}
                            ></motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Spacer for VS Column */}
                      <div className="flex items-center justify-center">
                        <div className="w-px h-8" style={{ background: 'rgba(107, 114, 128, 0.2)' }}></div>
                      </div>

                      {/* OrcHire Column */}
                      <div className="text-center">
                        <div className="relative rounded-xl p-4 group-hover:scale-105 transition-all duration-300" style={{
                          background: 'rgba(159, 98, 237, 0.08)',
                          border: '1px solid rgba(159, 98, 237, 0.2)'
                        }}>
                          <p className="font-semibold text-foreground mb-2">{item.orchire}</p>
                          <div className="w-full rounded-full h-2 mb-2" style={{ background: 'rgba(107, 114, 128, 0.2)' }}>
                            <motion.div 
                              className="h-2 rounded-full"
                              style={{ background: 'linear-gradient(90deg, #0C8EFF, #9F62ED)' }}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${values.orchire}%` } : { width: 0 }}
                              transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                            ></motion.div>
                          </div>
                          
                          {/* Improvement Indicator */}
                          <div className="flex items-center justify-center gap-1">
                            <ArrowRight className="w-3 h-3 rotate-[-45deg]" style={{ color: '#22c55e' }} />
                            <span className="text-xs font-medium" style={{ color: '#22c55e' }}>+{values.improvement}% better</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Table Footer */}
              <div className="px-8 py-6" style={{ 
                background: 'rgba(107, 114, 128, 0.05)', 
                borderTop: '2px solid rgba(107, 114, 128, 0.2)' 
              }}>
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(113, 113, 130, 0.6)' }}></div>
                    <span>Traditional Methods</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-3 h-3 rounded-full" style={{ background: 'linear-gradient(90deg, #0C8EFF, #9F62ED)' }}></div>
                    <span>AI-Powered OrcHire</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>



          {/* Enhanced Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="backdrop-blur-xl rounded-2xl p-8 inline-block" style={{ 
              background: 'rgba(107, 114, 128, 0.1)', 
              border: '2px solid rgba(107, 114, 128, 0.2)' 
            }}>
              <h3 className="text-xl font-semibold text-foreground mb-2">Ready to Transform Your Hiring?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
               Join forward-thinking companies that have already made the switch to AI-powered recruitment.
              </p>
              <Button 
                className="bg-foreground text-background hover:bg-foreground/90"
                onClick={() => onNavigate("contact")}
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}