import React, { useState } from "react";
import { motion } from "motion/react";
import { Cookie, ChevronRight, Mail, Settings, BarChart3, Zap, Target, Activity, Wrench, MousePointer } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

export function CookiePage() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const cookieSections = [
    {
      id: "what-are-cookies",
      title: "What Are Cookies?",
      icon: Cookie,
      content: {
        intro: "Cookies are small files stored on your device that help us recognize you and improve your interaction with our platform.",
        items: []
      }
    },
    {
      id: "essential-cookies",
      title: "Essential Cookies",
      icon: Zap,
      content: {
        intro: "Required for core platform functionality:",
        items: [
          "User authentication and session management",
          "Security features and fraud prevention",
          "Basic website functionality and navigation",
          "Load balancing and performance optimization"
        ]
      }
    },
    {
      id: "performance-cookies", 
      title: "Performance Cookies",
      icon: Activity,
      content: {
        intro: "Analytics on usage and performance tracking:",
        items: [
          "Page views and user engagement metrics",
          "Error tracking and debugging information",
          "Loading times and performance analytics",
          "Feature usage and adoption rates"
        ]
      }
    },
    {
      id: "functional-cookies",
      title: "Functional Cookies", 
      icon: Wrench,
      content: {
        intro: "Remember preferences and settings:",
        items: [
          "Language and region preferences",
          "Theme and display settings",
          "Customized dashboard layouts",
          "Saved search filters and preferences"
        ]
      }
    },
    {
      id: "marketing-cookies",
      title: "Marketing Cookies",
      icon: MousePointer,
      content: {
        intro: "Measure engagement with campaigns:",
        items: [
          "Track effectiveness of marketing campaigns",
          "Personalize content and recommendations",
          "Social media integration and sharing",
          "Retargeting and remarketing activities"
        ]
      }
    },
    {
      id: "managing-cookies",
      title: "Managing Cookies",
      icon: Settings,
      content: {
        intro: "You may disable cookies in your browser settings, but certain features may not function properly. Here's how to manage cookies in popular browsers:",
        items: [
          {
            title: "Chrome",
            description: "Settings → Privacy and Security → Cookies and other site data"
          },
          {
            title: "Firefox", 
            description: "Settings → Privacy & Security → Cookies and Site Data"
          },
          {
            title: "Safari",
            description: "Preferences → Privacy → Manage Website Data"
          },
          {
            title: "Edge",
            description: "Settings → Cookies and site permissions → Cookies and site data"
          }
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
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-[#0C8EFF]/6 via-[#9F62ED]/3 to-[#0C8EFF]/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 0.9, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 6,
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
            <Cookie className="w-4 h-4 text-[#0C8EFF]" />
            <span className="text-sm font-medium bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent">
              Cookie Usage & Management
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent p-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Cookies Policy
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            OrcHire.ai uses cookies and similar technologies to enhance user experience and improve our services.
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

      {/* Cookie Sections */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {cookieSections.map((section, index) => {
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
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] mt-2 flex-shrink-0" />
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
            className="mt-12 bg-card/50 backdrop-blur-xl rounded-2xl border border-border/50 p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-[#0C8EFF]" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Need Help Managing Cookies?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have questions about our cookie usage or need assistance managing your preferences, 
              our support team is ready to help.
            </p>
            <motion.a
              href="mailto:support@orchire.ai"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              support@orchire.ai
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}