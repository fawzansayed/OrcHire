import React, { useState } from "react";
import { motion } from "motion/react";
import { FileText, ChevronRight, Mail, Users, UserCheck, Shield, Scale, Gavel, Building2, CreditCard } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

export function TermsPage() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const termsSections = [
    {
      id: "acceptance-terms",
      title: "Acceptance of Terms",
      icon: FileText,
      content: {
        intro: "By accessing and using OrcHire.ai, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
        items: []
      }
    },
    {
      id: "platform-usage",
      title: "Platform Usage",
      icon: Users,
      content: {
        intro: "OrcHire.ai is designed for legitimate recruitment purposes:",
        items: [
          "Users must be 18+ years old and authorized to enter binding agreements",
          "Accounts are non-transferable and for business use only",
          "Users must provide accurate information and maintain account security",
          "Prohibited uses include spam, harassment, or illegal activities"
        ]
      }
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: Shield,
      content: {
        intro: "Rights and ownership of platform content:",
        items: [
          "OrcHire.ai retains all rights to platform technology and algorithms",
          "Customer data remains owned by the customer",
          "Users grant OrcHire.ai limited rights to process data for service delivery",
          "Third-party integrations subject to respective terms"
        ]
      }
    },
    {
      id: "data-privacy",
      title: "Data Privacy & Protection",
      icon: UserCheck,
      content: {
        intro: "Our commitment to data privacy:",
        items: [
          "GDPR and CCPA compliant data processing",
          "Data used solely for recruitment purposes",
          "Candidates can request data deletion at any time",
          "Regular security audits and compliance reviews"
        ]
      }
    },
    {
      id: "service-availability",
      title: "Service Availability",
      icon: Building2,
      content: {
        intro: "Service level commitments and limitations:",
        items: [
          "99.9% uptime SLA for enterprise customers",
          "Scheduled maintenance with advance notice",
          "Force majeure exceptions for outages beyond our control",
          "Backup and disaster recovery procedures in place"
        ]
      }
    },
    {
      id: "billing-payments",
      title: "Billing & Payments",
      icon: CreditCard,
      content: {
        intro: "Payment terms and billing policies:",
        items: [
          "Subscription fees billed in advance",
          "30-day payment terms for enterprise customers",
          "Automatic renewal unless cancelled with 30 days notice",
          "Refunds subject to service level agreement terms"
        ]
      }
    },
    {
      id: "termination",
      title: "Termination",
      icon: Scale,
      content: {
        intro: "Account termination conditions:",
        items: [
          "Either party may terminate with written notice",
          "OrcHire.ai may suspend services for violation of these terms"
        ]
      }
    },
    {
      id: "liability-disclaimer",
      title: "Liability Disclaimer",
      icon: Scale,
      content: {
        intro: "Important limitations and disclaimers:",
        items: [
          "OrcHire.ai is not responsible for hiring decisions made by customers",
          "No guarantee of employment outcomes",
          "Our liability is limited to the fees paid in the past 12 months"
        ]
      }
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: Gavel,
      content: {
        intro: "These terms are governed by the laws of India, with recognition of applicable international data protection standards.",
        items: []
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9F62ED]/10 to-[#0C8EFF]/10 backdrop-blur-xl rounded-full px-6 py-3 border border-[#9F62ED]/20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FileText className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium bg-gradient-to-r from-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
              Legal Terms & Conditions
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#9F62ED] via-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Terms of Service
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            These Terms of Service govern your use of OrcHire.ai's recruitment platform and services. 
            Please read carefully before using our platform.
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

      {/* Terms Sections */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {termsSections.map((section, index) => {
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
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9F62ED]/20 to-[#0C8EFF]/20 flex items-center justify-center">
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
                        <div className="absolute inset-0 bg-gradient-to-br from-[#9F62ED]/[0.02] via-transparent to-[#0C8EFF]/[0.02]" />
                        
                        <div className="relative z-10">
                          {section.content.intro && (
                            <p className="text-muted-foreground mb-4">{section.content.intro}</p>
                          )}
                          
                          {section.content.items.length > 0 && (
                            <div className="space-y-3">
                              {section.content.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex items-start gap-3">
                                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#9F62ED] to-[#0C8EFF] mt-2 flex-shrink-0" />
                                  <div>
                                    {typeof item === 'string' ? (
                                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                                    ) : (
                                      <>
                                        <h4 className="font-medium text-muted-foreground mb-1">{item.title}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                      </>
                                    )}
                                  </div>
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

          {/* Contact Section */}
          <motion.div
            className="mt-12 bg-card/50 backdrop-blur-xl rounded-2xl border border-border/50 p-8 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#9F62ED]/[0.03] via-transparent to-[#0C8EFF]/[0.03]" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9F62ED]/20 to-[#0C8EFF]/20 flex items-center justify-center mx-auto mb-4 group">
                <Mail className="w-8 h-8 text-muted-foreground group-hover:text-[#0C8EFF] transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-muted-foreground">Questions About Our Terms?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you have questions about these Terms of Service or need clarification on any provisions, 
                our legal team is here to help.
              </p>
              <motion.a
                href="mailto:legal@orchire.ai"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9F62ED] to-[#0C8EFF] text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4" />
                legal@orchire.ai
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}