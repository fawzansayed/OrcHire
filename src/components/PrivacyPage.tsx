import React, { useState } from "react";
import { motion } from "motion/react";
import { Shield, ChevronDown, ChevronRight, Mail, Calendar, Database, Lock, Users, FileText, Globe, Eye, UserCheck, Settings, HardDrive, UserCog, Scale, Folder } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

export function PrivacyPage() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const privacySections = [
    {
      id: "information-collect",
      title: "Information We Collect",
      icon: HardDrive,
      content: {
        intro: "We collect the following types of information:",
        items: [
          {
            title: "Account Information",
            description: "Name, email, phone number, company name, job title."
          },
          {
            title: "Candidate Data", 
            description: "Resumes, job applications, assessments, interview responses, background information (where legally permissible)."
          },
          {
            title: "Usage Data",
            description: "Log files, device details, browser type, IP address, operating system, session activity."
          },
          {
            title: "Cookies & Tracking",
            description: "To enhance user experience and deliver personalized services."
          },
          {
            title: "Third-Party Data",
            description: "From integrated systems (ATS, HRMS, job boards, etc.), where customers have authorized sharing."
          }
        ]
      }
    },
    {
      id: "how-we-use",
      title: "How We Use Your Data",
      icon: UserCog,
      content: {
        intro: "We use personal data for:",
        items: [
          "Delivering hiring and recruitment services",
          "Running AI-driven talent discovery and matching",
          "Providing customer support and responding to inquiries", 
          "Improving our platform through analytics and research",
          "Compliance with legal obligations"
        ]
      }
    },
    {
      id: "legal-basis",
      title: "Legal Basis for Processing (GDPR)",
      icon: Scale,
      content: {
        intro: "Our legal basis for processing includes:",
        items: [
          {
            title: "Consent",
            description: "When you sign up or opt-in."
          },
          {
            title: "Contractual Necessity", 
            description: "To deliver services as agreed."
          },
          {
            title: "Legitimate Interests",
            description: "Improving services, fraud prevention, security."
          },
          {
            title: "Legal Obligation",
            description: "Compliance with applicable law."
          }
        ]
      }
    },
    {
      id: "data-sharing",
      title: "Data Sharing",
      icon: Users,
      content: {
        intro: "We do not sell your data. We may share with:",
        items: [
          {
            title: "Service Providers",
            description: "For hosting, communication, analytics."
          },
          {
            title: "Customers/Employers",
            description: "Candidate data shared with authorized employers."
          },
          {
            title: "Legal Authorities",
            description: "Where required by law."
          },
          {
            title: "Business Transfers",
            description: "In case of merger, acquisition, or restructuring."
          }
        ]
      }
    },
    {
      id: "international-transfers",
      title: "International Data Transfers", 
      icon: Globe,
      content: {
        intro: "Data may be stored and processed across multiple regions (India, US, EU, APAC). We ensure compliance with GDPR-approved mechanisms (Standard Contractual Clauses, Data Processing Agreements).",
        items: []
      }
    },
    {
      id: "data-retention",
      title: "Data Retention",
      icon: Folder,
      content: {
        intro: "We retain candidate and customer data only as long as necessary for recruitment purposes or legal compliance. Candidates may request deletion of their data at any time.",
        items: []
      }
    },
    {
      id: "your-rights",
      title: "Your Rights",
      icon: UserCheck,
      content: {
        intro: "You may exercise rights under GDPR/CCPA:",
        items: [
          "Access, rectification, deletion",
          "Data portability", 
          "Restrict or object to processing",
          "Opt-out of cookies or marketing",
          "Requests can be sent to privacy@orchire.ai"
        ]
      }
    },
    {
      id: "security",
      title: "Security",
      icon: Lock,
      content: {
        intro: "We implement enterprise-grade encryption (AES-256, TLS 1.2+), multi-factor authentication, and continuous monitoring.",
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
            className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-[#0C8EFF]/8 via-[#9F62ED]/4 to-[#0C8EFF]/6 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0C8EFF]/10 to-[#9F62ED]/10 backdrop-blur-xl border-2 border-[#0C8EFF]/30 px-6 py-3 mb-8"
            style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-4 h-4 text-[#0C8EFF]" />
            <span className="text-sm font-medium bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent">
              Privacy & Data Protection
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Privacy Policy
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Thanks for using OrcHire.ai! Our Privacy Policy details how we handle your info. 
            By using OrcHire.ai, you agree to these practices.
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

      {/* Privacy Sections */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {privacySections.map((section, index) => {
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
                      <div className="group bg-card/50 backdrop-blur-xl border-2 border-border/50 p-6 hover:border-[#0C8EFF]/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
                           style={{ clipPath: 'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)' }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 flex items-center justify-center relative"
                                 style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}>
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
                                <div className="w-2 h-2 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] mt-2 flex-shrink-0 transform rotate-45" />
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
            <div className="w-16 h-16 bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 flex items-center justify-center mx-auto mb-4"
                 style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}>
              <Mail className="w-8 h-8 text-[#0C8EFF]" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Questions About Our Privacy Policy?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or our data practices, 
              we're here to help. Reach out to our privacy team anytime.
            </p>
            <motion.a
              href="mailto:privacy@orchire.ai"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              privacy@orchire.ai
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}