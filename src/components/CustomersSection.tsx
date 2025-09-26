import { motion } from "motion/react";
import { Star, Users, Building, TrendingUp, Award, Shield, Globe, CheckCircle } from "lucide-react";
import { GlassCard } from "./ui/card";

export function CustomersSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Head of Talent Acquisition",
      company: "TechFlow Dynamics",
      content: "OrcHire's AI agents reduced our time-to-hire from 6 weeks to 5 days. The quality of candidates has never been better.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "VP of People Operations",
      company: "Scale Innovations",
      content: "We've cut hiring costs by 60% while improving candidate quality. The AI interviewer works around the clock.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Thompson",
      role: "Chief People Officer",
      company: "Future Systems Inc",
      content: "The DNA matching technology is incredible. Every hire feels like they've been with us for years.",
      rating: 5,
      avatar: "ET"
    }
  ];

  const companyLogos = [
    { name: "TechFlow", logo: "TF" },
    { name: "Scale", logo: "SC" },
    { name: "Future", logo: "FT" },
    { name: "Nexus", logo: "NX" },
    { name: "Vertex", logo: "VX" },
    { name: "Quantum", logo: "QT" }
  ];

  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Candidates Interviewed",
      description: "AI agents conducting interviews 24/7"
    },
    {
      icon: TrendingUp,
      value: "94%",
      label: "Match Accuracy",
      description: "DNA-level precision matching"
    },
    {
      icon: Building,
      value: "200+",
      label: "Companies Trust Us",
      description: "From startups to enterprises"
    },
    {
      icon: Award,
      value: "85%",
      label: "Faster Hiring",
      description: "Average time reduction"
    }
  ];

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      {/* Premium background with enhanced glass effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-purple-50/40" />
        
        {/* Enhanced floating glass orbs */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-80 h-80 bg-gradient-to-br from-blue-400/10 via-purple-400/8 to-teal-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-72 h-72 bg-gradient-to-br from-teal-400/10 via-blue-400/8 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-white/40 shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-green-500/30 shadow-sm backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-full" />
              <CheckCircle className="w-4 h-4 text-green-600 relative z-10" />
            </div>
            
            <span className="text-slate-700 font-semibold text-base relative z-10">Customer Success Stories</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted by Forward-Thinking
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Companies Worldwide
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            See how industry leaders are transforming their hiring processes with 
            AI-powered automation and achieving unprecedented results.
          </motion.p>
        </motion.div>

        {/* Stats section with premium circular icons */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 text-center bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  {/* Premium circular icon container */}
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-200/50 shadow-sm relative overflow-hidden group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.15, y: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent rounded-full" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    <Icon className="w-7 h-7 text-blue-600 relative z-10" />
                  </motion.div>
                  
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-base font-semibold text-slate-800 mb-2">{stat.label}</div>
                  <div className="text-sm text-slate-600">{stat.description}</div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Company logos */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <p className="text-lg text-slate-600">Trusted by industry leaders</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companyLogos.map((company, index) => (
              <motion.div
                key={company.name}
                className="w-16 h-16 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/40 shadow-sm hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-2xl" />
                <span className="text-slate-700 font-bold text-lg relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                  {company.logo}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Star rating with premium circular icons */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 bg-amber-100/70 rounded-full flex items-center justify-center border border-amber-200/50"
                    >
                      <Star className="w-3 h-3 text-amber-500 fill-current" />
                    </div>
                  ))}
                </div>
                
                <blockquote className="text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  {/* Premium circular avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-full flex items-center justify-center border border-blue-200/50 shadow-sm backdrop-blur-sm">
                    <span className="text-blue-700 font-semibold text-sm">{testimonial.avatar}</span>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}