import { useRef, useEffect, useState } from "react";
import { Activity, CheckCircle, Lock, Settings, Shield, User } from "react-feather";
import { Globe } from "lucide-react";

export function SecurityComplianceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <>
      {/* Section Separator Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30"></div>
      
      <section ref={sectionRef} className="relative py-20 px-6 overflow-hidden">
        {/* Animated Background Bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" />
          
          {/* Primary Bubble */}
          <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-br from-[#0C8EFF]/6 via-[#9F62ED]/4 to-[#0C8EFF]/6 rounded-full blur-3xl animate-security-float-1"></div>
          
          {/* Secondary Bubble */}
          <div className="absolute bottom-1/4 right-1/5 w-64 h-64 bg-gradient-to-br from-[#9F62ED]/6 via-[#0C8EFF]/4 to-[#9F62ED]/6 rounded-full blur-3xl animate-security-float-2"></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-[#0C8EFF]/3 to-[#9F62ED]/3 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-[#9F62ED]/4 to-[#0C8EFF]/4 rounded-full blur-xl animate-float-slow-delayed"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block p-[1px] bg-gradient-to-r from-[#0C8EFF]/60 via-[#9F62ED]/60 to-[#0C8EFF]/60 rounded-full shadow-lg mb-6">
              <div className="flex items-center bg-background/80 backdrop-blur-xl text-foreground px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium border-0 group hover:scale-105 transition-all duration-300">
                <Shield className="w-4 h-4 text-foreground group-hover:text-[#0C8EFF] transition-colors duration-300 mr-3" strokeWidth={1.5} />
                <span className="text-foreground font-medium text-base">Security & Compliance</span>
              </div>
            </div>

            <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Enterprise-Grade
              <br />
              <span className="bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
                Security & Privacy
              </span>
            </h2>
            
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Your data protection is our highest priority. OrcHire.ai meets the strictest security standards 
              and compliance requirements for enterprise-level peace of mind.
            </p>
          </div>

          {/* Compliance Certifications */}
          <div className={`mb-20 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12">
              <div className="inline-block p-[1px] bg-gradient-to-r from-[#0C8EFF]/60 via-[#9F62ED]/60 to-[#0C8EFF]/60 rounded-full shadow-lg mb-6">
                <div className="flex items-center bg-background/80 backdrop-blur-xl text-foreground px-4 py-2 rounded-full text-sm font-medium border-0 group hover:scale-105 transition-all duration-300">
                  <CheckCircle className="w-4 h-4 text-foreground group-hover:text-[#0C8EFF] transition-colors duration-300 mr-2" strokeWidth={1.5} />
                  <span className="text-foreground font-medium">Certified & Compliant</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={cert.title}
                    className={`group transition-all duration-600 hover:-translate-y-1 ${
                      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="relative p-6 h-full transition-all duration-500 group overflow-hidden rounded-2xl border border-muted-foreground/20 text-center group-hover:bg-background/50">
                      {/* Transparent Background - Shows site background */}
                      <div className="absolute inset-0 rounded-2xl bg-transparent" />

                      {/* Hover Gradient Effect - Top Right to Bottom Left with Cloudy Blue/Purple */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div 
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            background: "linear-gradient(135deg, rgba(12, 142, 255, 0.15) 0%, rgba(159, 98, 237, 0.12) 35%, rgba(12, 142, 255, 0.08) 70%, transparent 100%)",
                            filter: "blur(0.5px)"
                          }}
                        />
                        <div 
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            background: "radial-gradient(ellipse at top right, rgba(12, 142, 255, 0.1) 0%, rgba(159, 98, 237, 0.06) 40%, transparent 80%)"
                          }}
                        />
                      </div>

                      <div className="relative z-10">
                        {/* Icon Container */}
                        <div className="w-14 h-14 mx-auto mb-4 bg-transparent border border-muted-foreground/20 rounded-2xl flex items-center justify-center group-hover:border-[#0C8EFF]/40 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                          <Icon className="w-7 h-7 text-foreground group-hover:text-[#0C8EFF] transition-colors duration-300" strokeWidth={1.5} />
                        </div>
                        
                        {/* Status Badge */}
                        <div className="mb-3">
                          <span className="inline-block bg-green-500/10 text-green-600 px-2 py-1 rounded-full text-xs font-medium mb-2">
                            {cert.status}
                          </span>
                        </div>
                        
                        <h4 className="text-base font-semibold text-foreground mb-4 group-hover:text-[#0C8EFF] transition-colors duration-300">{cert.title}</h4>
                        
                        {/* Separator Line - Fading Gray */}
                        <div className="w-32 mx-auto separator-line my-4"></div>
                        {/* Blank spacer line for visual centering */}
                        <div className="h-0 mb-4"></div>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cert.description}</p>
                        
                        {/* Separator Line - Fading Gray */}
                        <div className="w-28 mx-auto separator-line-secondary my-4"></div>
                        {/* Blank spacer line for visual centering */}
                        <div className="h-0 mb-4"></div>
                        
                        <div className="text-xs text-muted-foreground/80 italic">
                          {cert.details}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Separator Line */}
          <div className={`mb-16 max-w-5xl mx-auto transition-all duration-1000 delay-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>
          </div>

          {/* Security Features - Single Line Layout */}
          <div className={`transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Advanced Security Features
              </h3>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Multi-layered security architecture protecting your sensitive hiring data
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`group transition-all duration-600 hover:-translate-y-1 ${
                      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${1.0 + index * 0.1}s` }}
                  >
                    <div className="relative p-6 h-full transition-all duration-500 group overflow-hidden rounded-2xl border border-muted-foreground/20 group-hover:bg-background/40">
                      {/* Transparent Background - Shows site background */}
                      <div className="absolute inset-0 rounded-2xl bg-transparent" />

                      {/* Hover Gradient Effect - Top Right to Bottom Left with Cloudy Blue/Purple */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div 
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            background: "linear-gradient(135deg, rgba(12, 142, 255, 0.15) 0%, rgba(159, 98, 237, 0.12) 35%, rgba(12, 142, 255, 0.08) 70%, transparent 100%)",
                            filter: "blur(0.5px)"
                          }}
                        />
                        <div 
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            background: "radial-gradient(ellipse at top right, rgba(12, 142, 255, 0.1) 0%, rgba(159, 98, 237, 0.06) 40%, transparent 80%)"
                          }}
                        />
                      </div>
                      
                      <div className="relative z-10 flex flex-col items-center text-center">
                        {/* Icon Container */}
                        <div className="w-14 h-14 mb-4 bg-transparent border border-muted-foreground/20 rounded-2xl flex items-center justify-center group-hover:border-[#0C8EFF]/40 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 flex-shrink-0">
                          <Icon className="w-7 h-7 text-foreground group-hover:text-[#0C8EFF] transition-colors duration-300" strokeWidth={1.5} />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-foreground mb-3 group-hover:text-[#0C8EFF] transition-colors duration-300">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trust Statement */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-3xl mx-auto relative p-8 transition-all duration-500 group overflow-hidden rounded-2xl border border-muted-foreground/20 group-hover:bg-background/50 group-hover:shadow-md">
              {/* Transparent Background - Shows site background */}
              <div className="absolute inset-0 rounded-2xl bg-transparent" />

              {/* Hover Gradient Effect - Top Right to Bottom Left with Cloudy Blue/Purple */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(12, 142, 255, 0.15) 0%, rgba(159, 98, 237, 0.12) 35%, rgba(12, 142, 255, 0.08) 70%, transparent 100%)",
                    filter: "blur(0.5px)"
                  }}
                />
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "radial-gradient(ellipse at top right, rgba(12, 142, 255, 0.1) 0%, rgba(159, 98, 237, 0.06) 40%, transparent 80%)"
                  }}
                />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-transparent border border-muted-foreground/20 rounded-2xl flex items-center justify-center group-hover:border-[#0C8EFF]/40 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                  <Shield className="w-8 h-8 text-foreground group-hover:text-[#0C8EFF] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-[#0C8EFF] transition-colors duration-300">
                  Your Trust, Our Commitment
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that hiring data is among your most sensitive information. That's why we've built 
                  OrcHire.ai with privacy-by-design principles, ensuring your candidate and company data remains 
                  secure, private, and under your complete control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}