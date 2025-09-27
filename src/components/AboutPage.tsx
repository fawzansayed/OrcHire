"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Target, ArrowRight, Sparkles, Rocket } from "lucide-react";

export function AboutPage() {
  const philosophyValues = [
    {
      icon: Brain,
      title: "Context over Keywords",
      description: "We go beyond resumes to understand the true DNA of a candidate.",
      accentColor: "#0C8EFF",
    },
    {
      icon: Heart,
      title: "Autonomous, Not Manual",
      description:
        "We automate workflows so recruiters can focus on what matters: relationships and decisions.",
      accentColor: "#9F62ED",
    },
    {
      icon: Target,
      title: "Recruiter-Built, AI-Native",
      description:
        "Built with input from 50+ seasoned talent leaders, our platform mirrors how the world's best recruiters think, decide, and act.",
      accentColor: "#0C8EFF",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ================= HERO ================= */}
      <section
        style={{
          position: "relative",
          padding: "10rem 1.5rem",
          textAlign: "center",
        }}
      >
        <motion.div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "72rem",
            margin: "0 auto",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Pill heading */}
          <motion.div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              marginBottom: "2rem",
              background: "rgba(12, 142, 255, 0.1)",
              border: "1px solid rgba(12, 142, 255, 0.2)",
              borderRadius: "9999px",
              color: "#0C8EFF",
              fontWeight: "600",
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <Sparkles style={{ width: "1rem", height: "1rem" }} />
            About Us
          </motion.div>

          {/* Hero Title */}
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              lineHeight: 1.2,
            }}
          >
            <span
              style={{
                background: "linear-gradient(to right, #0C8EFF, #9F62ED, #0C8EFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Hiring That
            </span>
            <span
              style={{
                display: "block",
                background: "linear-gradient(to right, #9F62ED, #0C8EFF, #9F62ED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Thinks Ahead
            </span>
          </h1>

          {/* Hero Subtitle */}
          <motion.p
            style={{
              fontSize: "1.25rem",
              maxWidth: "42rem",
              margin: "0 auto 3rem",
              color: "hsl(var(--foreground))",
              lineHeight: 1.75,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            At OrcHire.ai, we believe hiring should be more than filling a vacancy — it should be
            about building futures, shaping organizations, and unlocking human potential.
          </motion.p>

          {/* Hero Button */}
          <motion.button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.75rem",
              background: "linear-gradient(to right, #0C8EFF, #9F62ED)",
              color: "white",
              borderRadius: "9999px",
              fontWeight: "bold",
              fontSize: "1rem",
              boxShadow: "0 18px 30px -12px rgba(0,0,0,0.25)",
              border: "none",
              cursor: "pointer",
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

      {/* ============== PHILOSOPHY ============== */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <motion.div
            style={{ textAlign: "center", marginBottom: "5rem" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Pill heading */}
            <motion.div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                marginBottom: "2rem",
                background: "rgba(12, 142, 255, 0.1)",
                border: "1px solid rgba(12, 142, 255, 0.2)",
                borderRadius: "9999px",
                color: "#0C8EFF",
                fontWeight: "600",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <Sparkles style={{ width: "1rem", height: "1rem" }} />
              Our Philosophy
            </motion.div>

            {/* Title */}
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                background: "linear-gradient(to right, #0C8EFF, #9F62ED, #0C8EFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Philosophy That Drives Us
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: "hsl(var(--foreground))",
                maxWidth: "48rem",
                margin: "0 auto",
              }}
            >
              The world of hiring has long been trapped in outdated systems — resumes, forms, and
              keyword filters. These processes reduce people to static documents and make hiring
              reactive. We exist to change that.
            </p>
          </motion.div>

          {/* Grid of values */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {philosophyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div
                    style={{
                      padding: "2rem",
                      minHeight: "350px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      background: `${value.accentColor}15`,
                      border: `2px solid ${value.accentColor}`,
                      borderRadius: "1.5rem",
                      boxShadow: `0 25px 50px -12px ${value.accentColor}30`,
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <motion.div
                        style={{
                          width: "4rem",
                          height: "4rem",
                          background: "hsla(var(--card), 0.8)",
                          borderRadius: "1rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 1.5rem",
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon
                          style={{
                            width: "2rem",
                            height: "2rem",
                            strokeWidth: 1.25,
                            color: value.accentColor,
                          }}
                        />
                      </motion.div>
                      <h4 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{value.title}</h4>
                      <p style={{ fontSize: "0.875rem", lineHeight: 1.75 }}>{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== JOURNEY (Vision / Approach / Mission) ============== */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <motion.div
            style={{
              textAlign: "center",
              marginBottom: "3rem",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Pill heading */}
            <motion.div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                marginBottom: "2rem",
                background: "rgba(12, 142, 255, 0.1)",
                border: "1px solid rgba(12, 142, 255, 0.2)",
                borderRadius: "9999px",
                color: "#0C8EFF",
                fontWeight: "600",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <Rocket style={{ width: "1rem", height: "1rem" }} />
              Our Journey So Far
            </motion.div>

            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                background: "linear-gradient(to right, #0C8EFF, #9F62ED, #0C8EFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Vision • Approach • Mission
            </h2>
          </motion.div>

          {/* Boxes grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Vision */}
            <div
              style={{
                padding: "2.5rem",
                borderRadius: "1.5rem",
                background: "#0C8EFF15",
                border: "2px solid #0C8EFF",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
                Our Vision
              </h3>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
                OrcHire.ai was founded to end the ATS and resume era and pioneer the future of
                hiring. From day one, we've built with recruiters, for recruiters, refining our
                product daily with real-world mandates and live hiring data.
              </p>
            </div>

            {/* Approach */}
            <div
              style={{
                padding: "2.5rem",
                borderRadius: "1.5rem",
                background: "#9F62ED15",
                border: "2px solid #9F62ED",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
                Our Approach
              </h3>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
                We see hiring as both Reactive, Proactive, and Autonomous. OrcHire.ai unites
                AI-powered sourcing, engagement, interviewing, and decision-making into one seamless
                hiring OS.
              </p>
            </div>

            {/* Mission */}
            <div
              style={{
                padding: "2.5rem",
                borderRadius: "1.5rem",
                background: "#10B98115",
                border: "2px solid #10B981",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
                Our Mission
              </h3>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
                We're just getting started. Our mission is to make every hire smarter, faster, and
                more human — and in doing so, set the global standard for the future of work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
