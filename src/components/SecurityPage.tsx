import React, { useState } from "react";
import { motion } from "motion/react";
import { Shield, ChevronRight, Mail, AlertTriangle, Lock, Database, Eye, Zap } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

export function SecurityPage() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const securitySections = [
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      content: {
        intro: "We implement industry-leading security measures to protect your data:",
        items: [
          "End-to-end encryption (AES-256) for data at rest and in transit",
          "Multi-factor authentication (MFA) for all user accounts",
          "Role-based access controls with principle of least privilege",
          "Regular security audits and penetration testing"
        ]
      }
    },
    {
      id: "infrastructure-security",
      title: "Infrastructure Security",
      icon: Database,
      content: {
        intro: "Our infrastructure is built with security-first principles:",
        items: [
          "SOC 2 Type II compliant cloud infrastructure",
          "Network segmentation and firewall protection",
          "Automated backup and disaster recovery systems",
          "Regular security patches and system updates"
        ]
      }
    },
    {
      id: "access-controls",
      title: "Access Controls",
      icon: Eye,
      content: {
        intro: "Strict access management ensures only authorized personnel can access systems:",
        items: [
          "Zero-trust security model implementation",
          "Time-limited access tokens and session management",
          "Audit logging for all system access and changes",
          "Regular access reviews and deprovisioning procedures"
        ]
      }
    },
    {
      id: "incident-response",
      title: "Incident Response",
      icon: Zap,
      content: {
        intro: "Comprehensive incident response procedures ensure rapid resolution:",
        items: [
          "24/7 monitoring with real-time alerts",
          "Immediate customer notification within 72 hours of any data breach (per GDPR/CCPA)",
          "Dedicated incident response team",
          "Post-incident analysis and remediation"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0C8EFF]/10 to-[#9F62ED]/10 backdrop-blur-xl rounded-full px-6 py-3 border border-[#0C8EFF]/20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent">
              Enterprise-Grade Security
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent p-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Security
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At OrcHire.ai, security is fundamental. We implement comprehensive security measures to protect your data and ensure platform integrity.
          </motion.p>

          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Last Updated: December 2024
          </motion.p>
        </div>
      </section>

      {/* Security Sections */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {securitySections.map((section, index) => {
              const Icon = section.icon;
              const isOpen = openSections.includes(section.id);
              
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Collapsible
                    open={isOpen}
                    onOpenChange={() => toggleSection(section.id)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <div className="group bg-card/50 backdrop-blur-xl rounded-2xl border border-border/50 p-6 hover:border-[#0C8EFF]/30 hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden">
                        {/* Subtle hover sheen effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        
                        <div className="flex items-center justify-between relative z-10">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-muted-foreground group-hover:text-[#0C8EFF] transition-colors duration-300" />
                            </div>
                            <h2 className="text-xl font-semibold text-left text-muted-foreground">{section.title}</h2>
                          </div>
                          <motion.div
                            animate={{
                              rotate: isOpen ? 90 : 0
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-muted-foreground transition-colors" />
                          </motion.div>
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 bg-card/30 backdrop-blur-xl rounded-2xl border border-border/30 p-6 relative overflow-hidden"
                      >
                        {/* Subtle background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/[0.02] via-transparent to-[#9F62ED]/[0.02]" />
                        
                        <div className="relative z-10">
                          {section.content.intro && (
                            <p className="text-muted-foreground mb-4">{section.content.intro}</p>
                          )}
                          
                          {section.content.items.length > 0 && (
                            <div className="space-y-3">
                              {section.content.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex items-start gap-3">
                                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] mt-2 flex-shrink-0" />
                                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </CollapsibleContent>
                  </Collapsible>
                </motion.div>
              );
            })}
          </div>

          {/* Compliance Badges */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { name: "SOC 2", description: "Type II" },
              { name: "ISO 27001", description: "Certified" },
              { name: "GDPR", description: "Compliant" },
              { name: "AES-256", description: "Encryption" }
            ].map((badge, index) => (
              <motion.div
                key={badge.name}
                className="bg-card/40 backdrop-blur-xl rounded-xl border border-border/30 p-4 text-center group hover:border-[#0C8EFF]/30 transition-all duration-300"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-muted-foreground group-hover:text-[#0C8EFF] transition-colors duration-300" />
                </div>
                <h4 className="font-semibold text-sm mb-1 text-muted-foreground">{badge.name}</h4>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="mt-12 bg-card/50 backdrop-blur-xl rounded-2xl border border-border/50 p-8 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/[0.03] via-transparent to-[#9F62ED]/[0.03]" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 flex items-center justify-center mx-auto mb-4 group">
                <Mail className="w-8 h-8 text-muted-foreground group-hover:text-[#0C8EFF] transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-muted-foreground">Security Questions or Concerns?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you have security-related questions or need to report a security issue, 
                please contact our security team immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:security@orchire.ai"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-4 h-4" />
                  security@orchire.ai
                </motion.a>
                <motion.a
                  href="mailto:security-urgent@orchire.ai"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-xl border border-border/50 text-muted-foreground font-medium rounded-xl hover:border-[#0C8EFF]/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AlertTriangle className="w-4 h-4 text-muted-foreground group-hover:text-[#0C8EFF] transition-colors duration-300" />
                  Report Security Issue
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}