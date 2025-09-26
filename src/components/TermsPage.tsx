import React, { useState } from "react";
import { motion } from "motion/react";
import { FileText, ChevronRight, Mail, Scale, UserCheck, CreditCard, Shield, AlertTriangle, Users, Building, Gavel, UserX, Briefcase, Zap } from "lucide-react";
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
      id: "eligibility",
      title: "Eligibility",
      icon: UserCheck,
      content: {
        intro: "You must be at least 18 years old and authorized to act on behalf of your company.",
        items: []
      }
    },
    {
      id: "services-provided",
      title: "Services Provided", 
      icon: Briefcase,
      content: {
        intro: "OrcHire.ai provides AI-driven hiring solutions, including but not limited to:",
        items: [
          "AI candidate search & matching",
          "Voice AI interviews",
          "Candidate engagement automation", 
          "Offer and pipeline management"
        ]
      }
    },
    {
      id: "user-responsibilities",
      title: "User Responsibilities",
      icon: Users,
      content: {
        intro: "As a user of our platform, you agree to:",
        items: [
          "Provide accurate information during account setup",
          "Use the platform only for lawful hiring and HR purposes",
          "Ensure compliance with labor and employment laws",
          "Do not misuse the platform (e.g., upload unlawful, discriminatory, or harmful content)"
        ]
      }
    },
    {
      id: "subscription-payments",
      title: "Subscription & Payments",
      icon: CreditCard,
      content: {
        intro: "Our payment and subscription terms:",
        items: [
          "Services are provided on a subscription model (monthly/annual)",
          "Fees are non-refundable unless otherwise specified",
          "Late payments may result in suspension of services"
        ]
      }
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: Shield,
      content: {
        intro: "Ownership and licensing terms:",
        items: [
          {
            title: "OrcHire.ai IP",
            description: "All AI models, algorithms, and platform IP belong to OrcHire.ai"
          },
          {
            title: "User Data Rights",
            description: "Users retain rights to their own data but grant OrcHire.ai a license to process it"
          }
        ]
      }
    },
    {
      id: "termination",
      title: "Termination",
      icon: UserX,
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
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          <motion.div
            className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-[#9F62ED]/8 via-[#0C8EFF]/4 to-[#9F62ED]/6 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9F62ED]/10 to-[#0C8EFF]/10 backdrop-blur-xl border-2 border-[#9F62ED]/30 px-6 py-3 mb-8"
            style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FileText className="w-4 h-4 text-[#9F62ED]" />
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
            Welcome to OrcHire.ai. By accessing or using our platform, you agree to these Terms of Service.
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
                      <div className="group bg-card/50 backdrop-blur-xl border-2 border-border/50 p-6 hover:border-[#9F62ED]/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
                           style={{ clipPath: 'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)' }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#9F62ED]/20 to-[#0C8EFF]/20 flex items-center justify-center relative"
                                 style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}>
                              <Icon className="w-6 h-6 text-[#9F62ED]" />
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
                        className="mt-4 bg-card/30 backdrop-blur-xl border-2 border-border/30 p-6 relative"
                        style={{ clipPath: 'polygon(15px 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%)' }}
                      >
                        {section.content.intro && (
                          <p className="text-muted-foreground mb-4">{section.content.intro}</p>
                        )}
                        
                        {section.content.items.length > 0 && (
                          <div className="space-y-3">
                            {section.content.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-[#9F62ED] to-[#0C8EFF] mt-2 flex-shrink-0 transform rotate-45" />
                                <div>
                                  {typeof item === 'string' ? (
                                    <p className="text-muted-foreground">{item}</p>
                                  ) : (
                                    <>
                                      <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                                      <p className="text-muted-foreground text-sm">{item.description}</p>
                                    </>
                                  )}
                                </div>
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

          {/* Contact Section */}
          <motion.div
            className="mt-12 bg-card/50 backdrop-blur-xl border-2 border-border/50 p-8 text-center relative"
            style={{ clipPath: 'polygon(30px 0%, 100% 0%, calc(100% - 30px) 100%, 0% 100%)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#9F62ED]/20 to-[#0C8EFF]/20 flex items-center justify-center mx-auto mb-4"
                 style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}>
              <Mail className="w-8 h-8 text-[#9F62ED]" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Questions About Our Terms?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have any questions about these Terms of Service or need clarification on any policies, 
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}