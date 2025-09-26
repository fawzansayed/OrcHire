import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Monitor, 
  Tablet, 
  Smartphone,
  Play,
  Star,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Calendar,
  Clock,
  Filter,
  Search
} from "lucide-react";

export function ProductMockupSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="py-16 px-6 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-xl px-3 py-1.5 rounded-full mb-4 border border-border/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:bg-card/10 dark:border-white/10 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
            <div className="w-4 h-4 bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 rounded-full flex items-center justify-center">
              <Monitor className="w-2.5 h-2.5 text-[#0C8EFF]" />
            </div>
            <span className="text-foreground font-medium text-xs relative z-10">Product Experience</span>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            See CoHyre.ai
            <span className="block bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
              In Action
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the future of hiring across all your devices
          </motion.p>
        </motion.div>

        {/* Compact Device Showcase */}
        <div className="grid lg:grid-cols-3 gap-8 items-end mb-12">
          
          {/* MacBook - Primary */}
          <motion.div
            className="lg:col-span-2 relative group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* MacBook Image */}
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1594892342285-9b86df3ad47a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNib29rJTIwbGFwdG9wJTIwbW9kZXJuJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NjM4ODEzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="MacBook"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                
                {/* Dashboard Overlay */}
                <div className="absolute top-[8%] left-[12%] right-[12%] bottom-[15%] bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-inner">
                  {/* SaaS Dashboard Interface */}
                  <div className="h-full flex flex-col">
                    {/* Top Navigation Bar */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-[#0C8EFF] to-[#9F62ED] rounded-md flex items-center justify-center">
                          <span className="text-white text-xs font-bold">C</span>
                        </div>
                        <span className="text-xs font-medium text-gray-900 dark:text-gray-100">CoHyre.ai</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">Live</span>
                      </div>
                    </div>
                    
                    {/* Main Dashboard Content */}
                    <div className="flex-1 p-3 bg-gray-50 dark:bg-gray-900">
                      <div className="grid grid-cols-4 gap-2 h-full">
                        {/* Left Sidebar */}
                        <div className="space-y-2">
                          <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                          <div className="w-3/4 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                          <div className="space-y-1">
                            {[...Array(4)].map((_, i) => (
                              <div key={i} className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-[#0C8EFF]/30 rounded-full"></div>
                                <div className="w-8 h-1 bg-gray-200 dark:bg-gray-700 rounded"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Main Content */}
                        <div className="col-span-2 space-y-2">
                          <div className="aspect-video bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 rounded flex items-center justify-center">
                            <BarChart3 className="w-6 h-6 text-[#0C8EFF]" />
                          </div>
                          <div className="grid grid-cols-3 gap-1">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-700 rounded"></div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Right Panel */}
                        <div className="space-y-2">
                          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="p-1 bg-gray-200 dark:bg-gray-700 rounded">
                              <div className="w-full h-1 bg-gray-300 dark:bg-gray-600 rounded mb-0.5"></div>
                              <div className="w-2/3 h-0.5 bg-gray-300 dark:bg-gray-600 rounded"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -top-3 -right-3"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 shadow-lg">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Desktop
                </Badge>
              </motion.div>
            </div>
          </motion.div>

          {/* Tablet - Secondary */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618344880247-3969cea5b81e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGFkJTIwdGFibGV0JTIwZGV2aWNlJTIwbW9ja3VwfGVufDF8fHx8MTc1NjM4ODEzNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="iPad"
                className="w-full h-auto rounded-xl shadow-xl"
              />
              
              {/* Tablet Dashboard Overlay */}
              <div className="absolute top-[6%] left-[8%] right-[8%] bottom-[8%] bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                <div className="h-full flex flex-col p-2">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-gradient-to-br from-[#0C8EFF] to-[#9F62ED] rounded"></div>
                      <div className="w-12 h-1.5 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                    <div className="flex gap-0.5">
                      <div className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Grid Content */}
                  <div className="flex-1 grid grid-cols-2 gap-1.5">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="aspect-square bg-gray-100 dark:bg-gray-800 rounded flex flex-col justify-between p-1">
                        <div className="w-full h-1/2 bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 rounded"></div>
                        <div className="space-y-0.5">
                          <div className="w-full h-0.5 bg-gray-300 dark:bg-gray-600 rounded"></div>
                          <div className="w-2/3 h-0.5 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <Badge className="absolute -top-2 -right-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 shadow-lg">
                <Tablet className="w-3 h-3 mr-1" />
                Tablet
              </Badge>
            </div>
          </motion.div>
        </div>

        {/* Features & Stats Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            { icon: Users, label: "Active Users", value: "50K+", desc: "Growing daily", color: "text-blue-500" },
            { icon: TrendingUp, label: "Success Rate", value: "94%", desc: "Hiring accuracy", color: "text-green-500" },
            { icon: Clock, label: "Time Saved", value: "85%", desc: "Faster hiring", color: "text-purple-500" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} variant="apple-glass" className="p-4 text-center">
                <div className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.desc}</div>
              </Card>
            );
          })}
        </motion.div>

        {/* Compact CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Card variant="apple-glass" className="p-6 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Ready to Transform Your Hiring?
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Experience our AI-powered platform with a personalized demo
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] text-white px-6 py-2">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
              <Button variant="outline" className="px-6 py-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-3">
              No credit card required • 14-day trial • 2-minute setup
            </p>
          </Card>
        </motion.div>

        {/* Mobile Preview - Small floating element */}
        <motion.div
          className="absolute top-16 right-4 hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="w-16 relative group">
            <div className="bg-gray-900 rounded-xl p-1 shadow-xl">
              <div className="aspect-[9/16] bg-white dark:bg-gray-800 rounded-lg p-2 overflow-hidden">
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-2 h-2 bg-gray-300 rounded"></div>
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="aspect-video bg-gradient-to-br from-[#0C8EFF]/30 to-[#9F62ED]/30 rounded-sm"></div>
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-700 rounded-sm">
                        <div className="w-2 h-2 bg-[#0C8EFF]/30 rounded-full"></div>
                        <div className="flex-1 space-y-0.5">
                          <div className="w-full h-0.5 bg-gray-300 dark:bg-gray-600 rounded"></div>
                          <div className="w-2/3 h-0.5 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Badge className="absolute -top-1 -right-3 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 shadow-lg text-xs px-1 py-0.5">
              <Smartphone className="w-2 h-2 mr-1" />
              Mobile
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}