import { motion } from "motion/react";
import { Activity, CheckCircle, Lock, Settings, Shield, User } from "react-feather";
import { GlassCard } from "./ui/card";
import { Globe } from "lucide-react";

export function SecurityComplianceSection() {
  const certifications = [
    {
      icon: Shield,
      title: "SOC 2 Type II Certified",
      description: "Annual third-party security audits ensuring data protection and privacy compliance.",
      status: "Certified",
      details: "Comprehensive security controls audit"
    },
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Full compliance with European data protection regulations and privacy rights.",
      status: "Compliant",
      details: "Data protection and privacy rights"
    },
    {
      icon: Lock,
      title: "ISO 27001 Standard",
      description: "International standard for information security management systems implementation.",
      status: "Implemented",
      details: "Information security management"
    },
    {
      icon: CheckCircle,
      title: "CCPA Ready",
      description: "California Consumer Privacy Act compliance for enhanced user data control.",
      status: "Ready",
      details: "Consumer privacy protection"
    }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "Enterprise-Grade Encryption",
      description: "End-to-end AES-256 encryption for all data transmission and storage."
    },
    {
      icon: User,
      title: "Role-Based Access Control",
      description: "Granular permissions and multi-factor authentication for secure access."
    },
    {
      icon: Globe,
      title: "Data Residency Control",
      description: "Choose where your data is stored with global infrastructure options."
    },
    {
      icon: Activity,
      title: "Continuous Monitoring",
      description: "24/7 security monitoring with real-time threat detection and response."
    }
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Minimal Glass Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <motion.div
          className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-br from-[#0C8EFF]/6 via-[#9F62ED]/4 to-[#0C8EFF]/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-64 h-64 bg-gradient-to-br from-[#9F62ED]/6 via-[#0C8EFF]/4 to-[#9F62ED]/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.9, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-background/60 backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-border/40 shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C8EFF]/10 via-[#9F62ED]/10 to-[#0C8EFF]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-8 h-8 bg-background/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-border/20 shadow-sm">
              <Shield className="w-4 h-4 text-foreground" strokeWidth={1.5} />
            </div>
            
            <span className="text-foreground font-semibold text-base relative z-10">Security & Compliance</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Enterprise-Grade
            <br />
            <span className="bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
              Security & Privacy
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Your data protection is our highest priority. OrcHire.ai meets the strictest security standards 
            and compliance requirements for enterprise-level peace of mind.
          </motion.p>
        </motion.div>

        {/* Compliance Certifications */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center space-x-2 bg-background/40 backdrop-blur-xl px-4 py-2 rounded-full mb-6 border border-border/30"
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle className="w-4 h-4 text-foreground" strokeWidth={1.5} />
              <span className="text-sm font-medium text-foreground">Certified & Compliant</span>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <GlassCard className="p-6 text-center bg-background/40 backdrop-blur-xl border border-border/20 shadow-sm hover:shadow-md hover:border-border/40 transition-all duration-300 h-full">
                    {/* Premium Clean Icon Container */}
                    <div className="w-14 h-14 mx-auto mb-4 bg-background/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-border/20 shadow-md">
                      <Icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-block bg-green-500/10 text-green-600 px-2 py-1 rounded-full text-xs font-medium mb-2">
                        {cert.status}
                      </span>
                    </div>
                    
                    <h4 className="text-base font-semibold text-foreground mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{cert.description}</p>
                    
                    <div className="text-xs text-muted-foreground/80 italic">
                      {cert.details}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Security Features - Single Line Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Advanced Security Features
            </h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Multi-layered security architecture protecting your sensitive hiring data
            </p>
          </div>

          {/* Changed from md:grid-cols-2 to md:grid-cols-4 for single line */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-6 bg-background/30 backdrop-blur-xl border border-border/20 shadow-sm hover:shadow-md hover:border-border/40 transition-all duration-300 group h-full">
                    <div className="flex flex-col items-center text-center">
                      {/* Premium Clean Icon Container */}
                      <div className="w-14 h-14 mb-4 bg-background/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-border/20 shadow-md flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                        <Icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-foreground mb-3">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto p-8 bg-background/40 backdrop-blur-xl border border-border/20 rounded-2xl shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 bg-background/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-border/20 shadow-lg">
              <Shield className="w-8 h-8 text-foreground" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Your Trust, Our Commitment
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We understand that hiring data is among your most sensitive information. That's why we've built 
              OrcHire.ai with privacy-by-design principles, ensuring your candidate and company data remains 
              secure, private, and under your complete control.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}