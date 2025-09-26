import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import orchireLogoLight from "../../public/assets/whitelogoOrcHireMain.png";
import orchireLogoDark  from "../../public/assets/BlackLogoOrcHireMain.png";
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
// import orchireLogo from "@/assets/orchire-logo.png";
// import traditionalLogo from "@/assets/traditional-logo.png";

export function ComparisonPage() {
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
    <main className="pt-20 min-h-screen bg-background">
      <section ref={sectionRef} className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 bg-blue-50 border-blue-200 text-blue-600">
              <Sparkles className="w-4 h-4 mr-2" />
              Hiring Comparison
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Traditional vs{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                OrcHire.ai
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how AI-powered hiring compares to traditional methods across key metrics that matter to your business.
            </p>
          </motion.div>

          {/* Logos Section */}
          <motion.div
            className="grid grid-cols-3 items-center gap-8 mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Traditional Logo */}
            <div className="text-center">
              {/* <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-200">
                <img 
                  src={traditionalLogo} 
                  alt="Traditional Hiring" 
                  className="w-16 h-16 object-contain opacity-80"
                />
              </div> */}
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Traditional Hiring</h2>
              <p className="text-sm text-gray-600">Legacy recruitment methods</p>
            </div>

            {/* VS Section */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                VS
              </span>
            </div>

            {/* OrcHire.ai Logo */}
            <div className="text-center flex flex-col items-center justify-center">
              <div className="w-28 mb-2 flex items-center justify-center">
                <ImageWithFallback
                  src={theme === "dark" ? orchireLogoLight : orchireLogoDark}
                  alt="OrcHire.ai"
                  className="h-8 w-auto object-contain mx-auto"
                />
              </div>
              <span className="sr-only">OrcHire.ai</span>
            </div>
          </motion.div>

          {/* Comparison Cards */}
   <div className="space-y-6 mb-16">
  {comparisonFeatures.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={index}
        className="flex max-w-4xl mx-auto gap-4 items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
      >
        {/* Left Column - Traditional (40%) */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 relative overflow-hidden hover:bg-gray-100 transition-all duration-300 text-center flex-1" style={{ flex: '0 0 40%' }}>
          <p className="text-sm text-gray-400 mb-2 font-medium">{item.feature}</p>
          <p className="text-lg font-semibold text-gray-900">{item.traditional}</p>
        </div>

        {/* Middle Column - Icon Only (20%) */}
        <div className="flex items-center justify-center" style={{ flex: '0 0 20%' }}>
          <div className="w-12 h-12  rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
            <Icon className="w-6 h-6 " />
          </div>
        </div>

        {/* Right Column - OrcHire.ai (40%) */}
        <div className="relative overflow-hidden rounded-2xl group hover:scale-[1.02] transition-all duration-300 p-6 flex-1 text-center" style={{
    flex: '0 0 40%',
    background: 'rgba(159, 98, 237, 0.15)',
    border: '1px solid rgba(159, 98, 237, 0.3)'
  }}>
          <p className="text-sm text-gray-400 mb-2 font-medium">{item.feature}</p>
          <p className="text-lg font-semibold text-gray-900">{item.orchire}</p>
        </div>
      </motion.div>
    );
  })}
</div>



          {/* Enhanced Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
                <div className="bg-muted/30 backdrop-blur-xl rounded-2xl border border-border/50 p-8 inline-block">
            <h3 className="text-xl font-semibold text-foreground mb-2">Ready to Transform Your Hiring?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
             Join forward-thinking companies that have already made the switch to AI-powered recruitment.
            </p>
            <Button className="bg-foreground text-background hover:bg-foreground/90">   Start Free Trial
</Button>
          </div>
        
          </motion.div>
        </div>
      </section>
    </main>
  );
}