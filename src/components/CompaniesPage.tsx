import React from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Target,
  Brain,
  Globe,
  Shield,
  Award
} from "lucide-react";

export function CompaniesPage() {
  const companyBenefits = [
    {
      icon: Zap,
      title: "85% Faster Hiring",
      description: "Reduce time-to-hire from weeks to days with AI-powered automation",
      stat: "Average 12 days vs 42 days industry standard"
    },
    {
      icon: Target,
      title: "94% Better Matches",
      description: "AI evaluates culture fit and skills beyond traditional screening",
      stat: "47% improvement in candidate quality"
    },
    {
      icon: Brain,
      title: "60% Cost Reduction",
      description: "Lower hiring costs through process automation and efficiency",
      stat: "Average savings of $15K per hire"
    },
    {
      icon: Globe,
      title: "24/7 Global Reach",
      description: "Access talent worldwide with continuous AI sourcing",
      stat: "400M+ profiles across platforms"
    }
  ];

  const companyTypes = [
    {
      category: "Startups",
      description: "Scale your team efficiently without scaling hiring overhead",
      features: ["Rapid team growth", "Cost-effective hiring", "Culture-first matching"],
      companies: ["Series A-C companies", "High-growth startups", "Tech companies"]
    },
    {
      category: "Enterprise",
      description: "Transform hiring at scale with enterprise-grade AI solutions",
      features: ["Volume hiring automation", "Compliance & security", "Integration ready"],
      companies: ["Fortune 500", "Global corporations", "Large enterprises"]
    },
    {
      category: "Mid-Market",
      description: "Professional hiring intelligence for growing businesses",
      features: ["Process optimization", "Quality improvements", "Scalable solutions"],
      companies: ["Growing businesses", "Regional leaders", "Expanding companies"]
    }
  ];

  const useCases = [
    {
      title: "Tech Companies",
      description: "Find engineers, developers, and technical talent faster",
      metrics: "90% match accuracy for technical roles"
    },
    {
      title: "Sales Organizations",
      description: "Build high-performing sales teams with proven methodologies",
      metrics: "3x faster sales hiring process"
    },
    {
      title: "Healthcare",
      description: "Connect with qualified healthcare professionals efficiently",
      metrics: "Specialized healthcare talent pipeline"
    },
    {
      title: "Financial Services",
      description: "Secure, compliant hiring for financial institutions",
      metrics: "SOC 2 compliance built-in"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Premium Gradient Border Pill */}
            <div className="inline-block p-[1px] bg-gradient-to-r from-[#0C8EFF]/60 via-[#9F62ED]/60 to-[#0C8EFF]/60 rounded-full shadow-lg hover:from-[#0C8EFF] hover:via-[#9F62ED] hover:to-[#0C8EFF] hover:shadow-xl hover:shadow-[#0C8EFF]/20 transition-all duration-300 group">
              <motion.div
                className="inline-flex items-center space-x-2 bg-background/80 backdrop-blur-xl px-4 py-2 rounded-full border-0 group-hover:bg-background/90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Building2 className="w-4 h-4 text-[#0C8EFF]" />
                <span className="text-sm font-medium text-foreground">For Companies</span>
              </motion.div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
                Hiring Process
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Join forward-thinking companies using AI to hire better, faster, and more efficiently. 
              From startups to Fortune 500, OrcHire.ai powers the future of talent acquisition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] text-white px-8 py-3">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="px-8 py-3">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Companies Choose OrcHire.ai
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable improvements in hiring speed, quality, and cost-effectiveness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="apple-glass" className="p-6 h-full transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/20 to-[#0C8EFF]/20 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#0C8EFF]" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {benefit.description}
                    </p>
                    <p className="text-xs text-[#0C8EFF] font-medium">
                      {benefit.stat}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Types Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Solutions for Every Company Size
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored AI hiring solutions that scale with your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyTypes.map((type, index) => (
              <motion.div
                key={type.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="apple-glass" className="p-8 h-full">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {type.category}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {type.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    {type.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Perfect for:</p>
                    {type.companies.map((company) => (
                      <Badge key={company} variant="secondary" className="mr-2 mb-2">
                        {company}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized AI hiring intelligence for your industry's unique requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="apple-glass" className="p-6 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-[#0C8EFF] transition-colors">
                      {useCase.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-[#0C8EFF] group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {useCase.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-foreground">
                      {useCase.metrics}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0C8EFF]/10 via-[#9F62ED]/10 to-[#0C8EFF]/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using OrcHire.ai to build better teams faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] text-white px-8 py-3 text-lg">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="px-8 py-3 text-lg">
                Schedule Demo
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • 14-day free trial • Setup in minutes
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}