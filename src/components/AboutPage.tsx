"use client"

import { motion } from "framer-motion"
import { Brain, Heart, Target, ArrowRight, Sparkles, Rocket } from "lucide-react"

export function AboutPage() {
  const values = [
    {
      icon: Brain,
      title: "Context over Keywords",
      description: "We go beyond resumes to understand the true DNA of a candidate.",
      accentColor: "#0C8EFF"
    },
    {
      icon: Heart,
      title: "Autonomous, Not Manual",
      description: "We automate workflows so recruiters can focus on what matters: relationships and decisions.",
      accentColor: "#9F62ED"
    },
    {
      icon: Target,
      title: "Recruiter-Built, AI-Native",
      description: "Built with input from 50+ seasoned talent leaders, our platform mirrors how the world's best recruiters think, decide, and act.",
      accentColor: "#0C8EFF"
    },
  ]

  return (
    <div style={{
      minHeight: "100vh",
      background: "hsl(var(--background))",
      color: "hsl(var(--foreground))",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Hero Section */}
      <section style={{
        position: "relative",
        paddingTop: "10rem",
        paddingBottom: "10rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        textAlign: "center",
        overflow: "hidden"
      }}>
        <motion.div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "72rem",
            margin: "0 auto"
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
              marginBottom: "2rem",
              background: "rgba(12, 142, 255, 0.1)",
              border: "1px solid rgba(12, 142, 255, 0.2)",
              borderRadius: "9999px",
              color: "#0C8EFF",
              fontWeight: "600"
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <Sparkles style={{ width: "1rem", height: "1rem" }} />
            About Us
          </motion.div>

          <h1 style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            lineHeight: "1.2"
          }}>
            <span style={{
              background: "linear-gradient(to right, #0C8EFF, #9F62ED, #0C8EFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Hiring That
            </span>
            <span style={{
              display: "block",
              background: "linear-gradient(to right, #9F62ED, #0C8EFF, #9F62ED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Thinks Ahead
            </span>
          </h1>

          <motion.p
            style={{
              fontSize: "1.25rem",
              maxWidth: "42rem",
              margin: "0 auto",
              color: "hsl(var(--foreground))",
              lineHeight: "1.75",
              marginBottom: "3rem"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            At OrcHire.ai, we believe hiring should be more than filling a vacancy - it should be about building
            futures, shaping organizations, and unlocking human potential.
          </motion.p>

          <motion.button
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              paddingLeft: "1.75rem",
              paddingRight: "1.75rem",
              paddingTop: "0.875rem",
              paddingBottom: "0.875rem",
              background: "linear-gradient(to right, #0C8EFF, #9F62ED)",
              color: "white",
              borderRadius: "9999px",        // pill shape → semicircle ends
              fontWeight: "bold",
              fontSize: "1rem",              // a bit smaller
              transition: "all 0.3s",
              boxShadow: "0 18px 30px -12px rgba(0,0,0,0.25)",
              overflow: "hidden",
              border: "none",
              cursor: "pointer"
            }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Rocket style={{ width: "1rem", height: "1rem" }} />
            Explore Our Vision
            <ArrowRight style={{ width: "1rem", height: "1rem" }} />
          </motion.button>
        </motion.div>
      </section>

      {/* Philosophy Section - Updated Cards */}
      <section style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        position: "relative"
      }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <motion.div
            style={{
              textAlign: "center",
              marginBottom: "5rem"
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                marginBottom: "2rem",
                background: "rgba(12, 142, 255, 0.1)",
                border: "1px solid rgba(12, 142, 255, 0.2)",
                borderRadius: "9999px",
                color: "#0C8EFF",
                fontWeight: "600"
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <Sparkles style={{ width: "1rem", height: "1rem" }} />
              Our Philosophy
            </motion.div>
            <h2 style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              background: "linear-gradient(to right, #0C8EFF, #9F62ED, #0C8EFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              padding: "0.75rem"
            }}>
              Philosophy That Drives Us
            </h2>
            <p style={{
              fontSize: "1.25rem",
              color: "hsl(var(--foreground))",
              maxWidth: "48rem",
              margin: "0 auto"
            }}>
              The world of hiring has long been trapped in outdated systems - resumes, forms, and keyword filters. These
              processes reduce people to static documents and make hiring reactive. We exist to change that.
            </p>
          </motion.div>

          {/* Updated Cards Grid - Matching Reference Style */}
          <div style={{
            position: "relative",
            maxWidth: "80rem",
            margin: "0 auto"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              position: "relative",
              zIndex: 10,
              alignItems: "stretch"
            }}>
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div 
                    key={value.title} 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: index * 0.15 }} 
                    style={{ position: "relative" }}
                    viewport={{ once: true }}
                  >
                 <div style={{
  position: "relative",
  padding: "2rem",
  minHeight: "350px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: `${value.accentColor}15`, // Light transparent shade
  backdropFilter: "blur(24px)",
  border: `2px solid ${value.accentColor}`, // Use the accent color
  borderRadius: "1.5rem",
  boxShadow: `0 25px 50px -12px ${value.accentColor}30`, // Slight colored shadow
  transition: "all 0.5s",
  cursor: "pointer",
  overflow: "hidden"
}}

                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
                      e.currentTarget.style.transform = "scale(1.02)"
                      e.currentTarget.style.borderColor = "hsla(var(--border), 0.4)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      e.currentTarget.style.transform = "scale(1)"
                      e.currentTarget.style.borderColor = "hsla(var(--border), 0.2)"
                    }}
                    >
                      <div style={{
                        position: "relative",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        zIndex: 10,
                        paddingTop: "2rem"
                      }}>
                        <div style={{ marginBottom: "1.5rem" }}>
                          <motion.div 
                            style={{
                              width: "4rem",
                              height: "4rem",
                              background: "hsla(var(--card), 0.8)",
                              backdropFilter: "blur(24px)",
                              border: "1px solid hsla(var(--border), 0.3)",
                              borderRadius: "1rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                            }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Icon style={{ 
                              width: "2rem", 
                              height: "2rem", 
                              strokeWidth: 1.25, 
                              color: value.accentColor 
                            }} />
                          </motion.div>
                        </div>
                        <div style={{ 
                          marginBottom: "1.5rem", 
                          display: "flex", 
                          flexDirection: "column", 
                          gap: "0.75rem" 
                        }}>
                          <h4 style={{
                            fontSize: "1.25rem",
                            fontWeight: "bold",
                            color: "hsl(var(--foreground))"
                          }}>
                            {value.title}
                          </h4>
                          <p style={{
                            color: "hsl(var(--muted-foreground))",
                            fontSize: "0.875rem",
                            lineHeight: "1.75"
                          }}>
                            {value.description}
                          </p>
                        </div>
                        <div style={{ marginTop: "auto" }}>
                          <div style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            background: "hsla(var(--card), 0.6)",
                            backdropFilter: "blur(4px)",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                            borderRadius: "9999px",
                            border: "1px solid hsla(var(--border), 0.2)",
                            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                            borderColor: `${value.accentColor}30`
                          }}>
                            <div style={{
                              width: "0.5rem",
                              height: "0.5rem",
                              borderRadius: "9999px",
                              backgroundColor: value.accentColor
                            }} />
                            <span style={{
                              fontSize: "0.875rem",
                              fontWeight: "500",
                              color: "hsl(var(--foreground))"
                            }}>
                              Core Value
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        position: "relative"
      }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative" }}>
          <motion.div
            style={{
              textAlign: "center",
              marginBottom: "5rem"
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                marginBottom: "1.5rem",
                background: "rgba(12, 142, 255, 0.1)",
                border: "1px solid rgba(12, 142, 255, 0.2)",
                borderRadius: "9999px",
                color: "#0C8EFF",
                fontWeight: "600"
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Rocket style={{ width: "1rem", height: "1rem" }} />
              Our Journey So Far
            </motion.div>
            <h2 style={{
              fontSize: "3rem",   // bigger like Mission
              fontWeight: "bold",
              marginBottom: "1.5rem",
              background: "linear-gradient(to right, #0C8EFF, #9F62ED, #0C8EFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Our Vision
            </h2>
            <p style={{
              fontSize: "1.5rem",   // larger paragraph font
              lineHeight: "1.75",
              color: "hsl(var(--foreground))",
              maxWidth: "48rem",
              margin: "0 auto",
              textAlign: "center"   // ensures consistent centering
            }}>
              OrcHire.ai was founded with one clear mission: to end the ATS and resume era and pioneer the future of
              hiring. From day one, we've built with recruiters, for recruiters, refining our product daily with
              real-world mandates and live hiring data.
            </p>
          </motion.div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            maxWidth: "80rem",
            margin: "0 auto"
          }}>
            <div style={{
              position: "relative",
              padding: "3rem",
              borderRadius: "1.5rem",
              background: "hsla(var(--card), 0.5)",
              backdropFilter: "blur(24px)",
              border: "1px solid hsla(var(--border), 0.5)",
              textAlign: "center"                      // center like Mission
            }}>
              <h2 style={{
                fontSize: "3rem",                       // same size as Mission
                fontWeight: "bold",
                marginBottom: "1.5rem",
                background: "linear-gradient(to right, #0C8EFF, #9F62ED, #0C8EFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                Our Approach
              </h2>
              <p style={{
                fontSize: "1.5rem",                     // same paragraph size as Mission
                lineHeight: "1.75",
                color: "hsl(var(--foreground))",
                maxWidth: "48rem",
                margin: "0 auto"                        // center the paragraph
              }}>
                We see hiring as both Reactive, Proactive, and Autonomous. OrcHire.ai unites AI-powered
                sourcing, engagement, interviewing, and decision-making into one seamless hiring OS.
                The result? A system that not only keeps up with today's demands but also anticipates tomorrow's.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        position: "relative"
      }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <motion.div
            style={{
              textAlign: "center",
              marginBottom: "5rem"
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                marginBottom: "1.5rem",
                background: "rgba(159, 98, 237, 0.1)",
                borderRadius: "9999px",
                color: "#9F62ED",
                fontWeight: "600"
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Rocket style={{ width: "1rem", height: "1rem" }} />
              The Road Ahead
            </motion.div>
            <h2 style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              background: "linear-gradient(to right, #0C8EFF, #9F62ED, #0C8EFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Our Mission
            </h2>
            <p style={{
              fontSize: "1.5rem",
              color: "hsl(var(--foreground))",
              maxWidth: "48rem",
              margin: "0 auto",
              lineHeight: "1.75"
            }}>
              We're just getting started. Our mission is to make every hire smarter, faster, and more human - and in
              doing so, set the global standard for the future of work.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}