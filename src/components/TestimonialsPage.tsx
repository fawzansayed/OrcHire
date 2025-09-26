import { motion } from "motion/react";
import { Star, Users, Building, TrendingUp, Award, Shield, Globe, CheckCircle, ArrowLeft } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface TestimonialsPageProps {
  onNavigate?: (page: string) => void;
}

export function TestimonialsPage({ onNavigate }: TestimonialsPageProps) {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Head of Talent Acquisition",
      company: "TechFlow Dynamics",
      content: "OrcHire's AI agents reduced our time-to-hire from 6 weeks to 5 days. The quality of candidates has never been better.",
      rating: 5,
      avatar: "SC",
      industry: "Technology",
      companySize: "500-1000",
      results: [
        { metric: "Time to Hire", before: "6 weeks", after: "5 days", improvement: "-88%" },
        { metric: "Quality Score", before: "72%", after: "94%", improvement: "+31%" },
        { metric: "Cost Reduction", before: "N/A", after: "$45K saved", improvement: "60%" }
      ]
    },
    {
      name: "Marcus Rodriguez",
      role: "VP of People Operations",
      company: "Scale Innovations",
      content: "We've cut hiring costs by 60% while improving candidate quality. The AI interviewer works around the clock.",
      rating: 5,
      avatar: "MR",
      industry: "Fintech",
      companySize: "1000+",
      results: [
        { metric: "Cost Reduction", before: "$85K", after: "$34K", improvement: "-60%" },
        { metric: "Interview Coverage", before: "40 hrs/week", after: "24/7", improvement: "320%" },
        { metric: "Candidate Satisfaction", before: "78%", after: "92%", improvement: "+18%" }
      ]
    },
    {
      name: "Emily Thompson",
      role: "Chief People Officer",
      company: "Future Systems Inc",
      content: "The DNA matching technology is incredible. Every hire feels like they've been with us for years.",
      rating: 5,
      avatar: "ET",
      industry: "Healthcare Tech",
      companySize: "250-500",
      results: [
        { metric: "Cultural Fit", before: "65%", after: "96%", improvement: "+48%" },
        { metric: "1-Year Retention", before: "73%", after: "94%", improvement: "+29%" },
        { metric: "Performance Rating", before: "3.2/5", after: "4.7/5", improvement: "+47%" }
      ]
    },
    {
      name: "David Kim",
      role: "Global Talent Director",
      company: "Nexus Corporation",
      content: "Scaling our team from 50 to 500 employees would have been impossible without OrcHire's autonomous agents.",
      rating: 5,
      avatar: "DK",
      industry: "SaaS",
      companySize: "500-1000",
      results: [
        { metric: "Hiring Velocity", before: "8 hires/month", after: "45 hires/month", improvement: "+463%" },
        { metric: "Quality Consistency", before: "Variable", after: "98% consistent", improvement: "N/A" },
        { metric: "Team Satisfaction", before: "69%", after: "91%", improvement: "+32%" }
      ]
    },
    {
      name: "Rachel Foster",
      role: "Head of Recruitment",
      company: "Quantum Dynamics",
      content: "The predictive analytics have transformed how we approach talent acquisition. We now hire for potential, not just past performance.",
      rating: 5,
      avatar: "RF",
      industry: "Deep Tech",
      companySize: "100-250",
      results: [
        { metric: "Predictive Accuracy", before: "N/A", after: "91%", improvement: "New Capability" },
        { metric: "Time to Productivity", before: "6 months", after: "2 months", improvement: "-67%" },
        { metric: "Innovation Index", before: "6.2/10", after: "8.9/10", improvement: "+44%" }
      ]
    },
    {
      name: "Michael Santos",
      role: "VP Human Resources",
      company: "Vertex Technologies",
      content: "Our diversity hiring has improved dramatically. The AI removes unconscious bias while maintaining the highest quality standards.",
      rating: 5,
      avatar: "MS",
      industry: "Manufacturing Tech",
      companySize: "1000+",
      results: [
        { metric: "Diversity Ratio", before: "32%", after: "67%", improvement: "+109%" },
        { metric: "Bias Incidents", before: "12/year", after: "0", improvement: "-100%" },
        { metric: "Inclusion Score", before: "6.8/10", after: "9.1/10", improvement: "+34%" }
      ]
    }
  ];

  const companyLogos = [
    { name: "TechFlow Dynamics", logo: "TF", industry: "Technology" },
    { name: "Scale Innovations", logo: "SC", industry: "Fintech" },
    { name: "Future Systems", logo: "FS", industry: "Healthcare" },
    { name: "Nexus Corp", logo: "NX", industry: "SaaS" },
    { name: "Vertex Tech", logo: "VX", industry: "Manufacturing" },
    { name: "Quantum Dynamics", logo: "QD", industry: "Deep Tech" },
    { name: "Stellar Industries", logo: "ST", industry: "Aerospace" },
    { name: "Phoenix Labs", logo: "PX", industry: "Biotech" }
  ];

  const stats = [
    {
      icon: Users,
      value: "150K+",
      label: "Candidates Interviewed",
      description: "AI agents conducting interviews globally",
      change: "+320% vs traditional"
    },
    {
      icon: TrendingUp,
      value: "96%",
      label: "Average Match Accuracy",
      description: "DNA-level precision matching",
      change: "+67% improvement"
    },
    {
      icon: Building,
      value: "500+",
      label: "Companies Transformed",
      description: "From startups to Fortune 500",
      change: "Growing 40% monthly"
    },
    {
      icon: Award,
      value: "87%",
      label: "Average Time Reduction",
      description: "Faster hiring across all sectors",
      change: "Consistent across all sizes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => onNavigate?.("home")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Premium background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
          <motion.div
            className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-[#0C8EFF]/10 via-[#9F62ED]/5 to-[#E241B7]/10 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-2/3 right-1/5 w-80 h-80 bg-gradient-to-br from-[#9F62ED]/10 via-[#E241B7]/5 to-[#0C8EFF]/10 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 bg-background/60 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-border/30 shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0C8EFF]/10 via-[#9F62ED]/10 to-[#E241B7]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-8 h-8 bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/20 to-[#E241B7]/20 rounded-full flex items-center justify-center border border-[#0C8EFF]/30 shadow-sm backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-transparent rounded-full" />
                <CheckCircle className="w-4 h-4 text-[#0C8EFF] relative z-10" />
              </div>
              <span className="text-foreground font-medium text-base relative z-10">Customer Success Stories</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Trusted by Forward-Thinking
              <br />
              <span className="bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#E241B7] bg-clip-text text-transparent">
                Companies Worldwide
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              See how industry leaders are transforming their hiring processes with 
              AI-powered automation and achieving unprecedented results across every metric that matters.
            </motion.p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            className="grid md:grid-cols-4 gap-6 mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full bg-background/50 backdrop-blur-xl border border-border/20 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/5 via-[#9F62ED]/5 to-[#E241B7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 bg-background/60 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-border/30 shadow-sm relative overflow-hidden group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.15, y: -3 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-transparent rounded-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/20 to-[#E241B7]/20 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      <Icon className="w-7 h-7 text-[#0C8EFF] relative z-10" />
                    </motion.div>
                    
                    <div className="text-3xl font-bold text-foreground mb-1 relative z-10">{stat.value}</div>
                    <div className="text-base font-semibold text-foreground mb-2 relative z-10">{stat.label}</div>
                    <div className="text-sm text-muted-foreground mb-2 relative z-10">{stat.description}</div>
                    <div className="text-xs font-medium text-[#0C8EFF] relative z-10">{stat.change}</div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Company Logos */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground mb-8">Trusted by industry leaders across every sector</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {companyLogos.map((company, index) => (
                <motion.div
                  key={company.name}
                  className="group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="aspect-square p-4 bg-background/30 backdrop-blur-xl border border-border/20 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-transparent" />
                    <div className="h-full flex flex-col items-center justify-center relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/20 to-[#E241B7]/20 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-foreground font-bold text-lg">{company.logo}</span>
                      </div>
                      <div className="text-xs text-muted-foreground text-center">{company.industry}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Detailed Testimonials */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-background/50 backdrop-blur-xl border border-border/20 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/5 via-[#9F62ED]/5 to-[#E241B7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/20 to-[#E241B7]/20 rounded-full flex items-center justify-center border border-[#0C8EFF]/30 shadow-sm backdrop-blur-sm">
                        <span className="text-[#0C8EFF] font-semibold text-sm">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-sm text-[#0C8EFF] font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                    
                    {/* Star rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center"
                        >
                          <Star className="w-3 h-3 text-white fill-current" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Company Info */}
                  <div className="flex gap-4 mb-6 relative z-10">
                    <div className="px-3 py-1 bg-background/60 backdrop-blur-sm rounded-full border border-border/30">
                      <span className="text-xs font-medium text-foreground">{testimonial.industry}</span>
                    </div>
                    <div className="px-3 py-1 bg-background/60 backdrop-blur-sm rounded-full border border-border/30">
                      <span className="text-xs font-medium text-foreground">{testimonial.companySize} employees</span>
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-foreground mb-6 leading-relaxed relative z-10">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Results Grid */}
                  <div className="space-y-3 relative z-10">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Results:</h4>
                    {testimonial.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center justify-between py-2 px-3 bg-background/40 backdrop-blur-sm rounded-lg border border-border/20">
                        <div className="text-xs text-muted-foreground">{result.metric}</div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground line-through">{result.before}</span>
                          <span className="text-xs font-medium text-foreground">{result.after}</span>
                          <span className="text-xs font-bold text-[#0C8EFF]">{result.improvement}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="p-[2px] bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#E241B7] rounded-3xl max-w-2xl mx-auto">
              <div className="bg-background/60 backdrop-blur-xl rounded-3xl p-10 border-0 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/5 via-[#9F62ED]/5 to-[#E241B7]/5 rounded-3xl" />
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Ready to Join These Success Stories?
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Discover how OrcHire.ai can transform your hiring process and deliver the same incredible results.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => onNavigate?.("contact")}
                      className="px-8 py-4 bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#E241B7] text-white border-0 hover:opacity-90 transition-opacity duration-300"
                    >
                      Schedule Your Demo
                    </Button>
                    <Button
                      onClick={() => onNavigate?.("roi-calculator")}
                      variant="outline"
                      className="px-8 py-4 bg-transparent backdrop-blur-sm border-border/50 hover:bg-muted/50"
                    >
                      Calculate Your ROI
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}