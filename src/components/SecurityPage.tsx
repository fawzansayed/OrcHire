import React, { useState } from "react";
import { motion } from "motion/react";
import { Shield, ChevronRight, Mail, Server, Lock, Brain, AlertTriangle, Award } from "lucide-react";
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
      id: "infrastructure-security",
      title: "Infrastructure Security",
      icon: Server,
      content: {
        intro: "At OrcHire.ai, security is fundamental. Our infrastructure security includes:",
        items: [
          "Cloud-hosted on SOC 2 / ISO 27001 certified environments",
          "Firewalls, intrusion detection, and DDoS protection",
          "Multi-region deployment with disaster recovery",
          "24/7 infrastructure monitoring and alerting"
        ]
      }
    },
    {
      id: "data-protection",
      title: "Data Protection",
      icon: Lock,
      content: {
        intro: "We implement comprehensive data protection measures:",
        items: [
          "End-to-end encryption (at rest & in transit)",
          "Role-based access control (RBAC)",
          "Regular penetration testing",
          "Automated security scanning and vulnerability assessment"
        ]
      }
    },
    {
      id: "ai-model-security",
      title: "AI & Model Security",
      icon: Brain,
      content: {
        intro: "Our AI models are secured with specialized protections:",
        items: [
          "Models are trained only on de-identified, recruiter-approved datasets",
          "Strict controls against bias and misuse",
          "Continuous monitoring for anomalies",
          "Model versioning and rollback capabilities"
        ]
      }
    },
    {
      id: "compliance",
      title: "Compliance",
      icon: Award,
      content: {
        intro: "We maintain compliance with industry standards:",
        items: [
          "GDPR (General Data Protection Regulation)",
          "CCPA (California Consumer Privacy Act)",
          "HIPAA (where applicable)",
          "Regular third-party audits and certifications"
        ]
      }
    },
    {
      id: "incident-response",
      title: "Incident Response",
      icon: AlertTriangle,
      content: {
        intro: "Our incident response procedures ensure rapid threat mitigation:",
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
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          <motion.div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-[#0C8EFF]/8 via-[#9F62ED]/4 to-[#0C8EFF]/6 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0C8EFF]/10 to-[#9F62ED]/10 backdrop-blur-xl rounded-full px-6 py-3 border border-[#0C8EFF]/20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-4 h-4 text-[#0C8EFF]" />
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
                      <div className="group bg-card/50 backdrop-blur-xl rounded-2xl border border-border/50 p-6 hover:border-[#0C8EFF]/30 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-[#0C8EFF]" />
                            </div>
                            <h2 className="text-xl font-semibold text-left">{section.title}</h2>
                          </div>
                          <motion.div
                            animate={{
                              rotate: isOpen ? 90 : 0
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
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
                        className="mt-4 bg-card/30 backdrop-blur-xl rounded-2xl border border-border/30 p-6"
                      >
                        {section.content.intro && (
                          <p className="text-muted-foreground mb-4">{section.content.intro}</p>
                        )}
                        
                        {section.content.items.length > 0 && (
                          <div className="space-y-3">
                            {section.content.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] mt-2 flex-shrink-0" />
                                <p className="text-muted-foreground">{item}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    </CollapsibleContent>
                  </Collapsible>
                </motion.div>
              );
            })}
          </div>

          {/* Security Badges */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { name: "SOC 2", description: "Type II Certified" },
              { name: "ISO 27001", description: "Information Security" },
              { name: "GDPR", description: "Compliant" },
              { name: "AES-256", description: "Encryption" }
            ].map((badge, index) => (
              <div key={badge.name} className="text-center p-4 bg-card/30 backdrop-blur-xl rounded-xl border border-border/30">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-[#0C8EFF]" />
                </div>
                <h4 className="font-semibold text-sm">{badge.name}</h4>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="mt-12 bg-card/50 backdrop-blur-xl rounded-2xl border border-border/50 p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-[#0C8EFF]" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Security Questions or Concerns?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have questions about our security practices or need to report a security issue, 
              our security team is available 24/7.
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-xl border border-border/50 text-foreground font-medium rounded-xl hover:border-[#0C8EFF]/30 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <AlertTriangle className="w-4 h-4" />
                Report Security Issue
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}