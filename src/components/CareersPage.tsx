"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

export function CareersPage() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [selectedDepartment, setSelectedDepartment] = useState("View all")

  const departments = [
    "View all",
    "Engineering",
    "Product",
    "Sales",
    "Design",
    "Customer Success",
    "Operations",
  ]

  const openRoles = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      description:
        "We're looking for a senior AI engineer to build autonomous AI agents that revolutionize hiring.",
      isRemote: true,
      isFullTime: true,
    },
    {
      title: "Product Manager - AI Platform",
      department: "Product",
      description:
        "We're looking for a product manager to lead product strategy for our 11-agent AI platform.",
      isRemote: true,
      isFullTime: true,
    },
    {
      title: "Enterprise Sales Director",
      department: "Sales",
      description:
        "We're looking for an enterprise sales director to scale revenue with Fortune 500 clients.",
      isRemote: false,
      isFullTime: true,
    },
    {
      title: "UX Designer",
      department: "Design",
      description:
        "We're looking for a UX designer to design intuitive experiences for AI-powered hiring.",
      isRemote: true,
      isFullTime: true,
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      description:
        "We're looking for a DevOps engineer to scale infrastructure for autonomous AI systems.",
      isRemote: true,
      isFullTime: true,
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      description:
        "We're looking for a customer success manager to ensure customer success with AI hiring transformation.",
      isRemote: false,
      isFullTime: true,
    },
  ]

  const filteredRoles =
    selectedDepartment === "View all"
      ? openRoles
      : openRoles.filter((role) => role.department === selectedDepartment)

  return (
    <section
      ref={sectionRef}
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        position: "relative",
        minHeight: "100vh",
        background: "hsl(var(--background))",
      }}
    >
      <div
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Header */}
        <motion.div
          style={{ marginBottom: "4rem" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.5rem 1rem",
              marginBottom: "2rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              background:
                "linear-gradient(to right, rgba(12, 142, 255, 0.1), rgba(159, 98, 237, 0.1))",
              border: "1px solid rgba(12, 142, 255, 0.2)",
              borderRadius: "9999px",
              color: "#0C8EFF",
            }}
          >
            We're hiring!
          </div>

          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              lineHeight: 1.2,
              color: "hsl(var(--foreground))",
            }}
          >
            Be part of our{" "}
            <span
              style={{
                background: "linear-gradient(to right, #0C8EFF, #9F62ED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              mission
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: "hsl(var(--muted-foreground))",
              maxWidth: "42rem",
              lineHeight: 1.75,
            }}
          >
            We're looking for passionate people to join us on our mission. We
            value flat hierarchies, clear communication, and full ownership and
            responsibility.
          </p>
        </motion.div>

        {/* Department Filters */}
        <motion.div
          style={{ marginBottom: "3rem" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                style={{
                  borderRadius: "9999px",
                  padding: "0.5rem 1.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "all 0.2s",
                  border:
                    selectedDepartment === dept
                      ? "none"
                      : "1px solid hsl(var(--border))",
                  background:
                    selectedDepartment === dept
                      ? "linear-gradient(to right, #0C8EFF, #9F62ED)"
                      : "transparent",
                  color:
                    selectedDepartment === dept
                      ? "white"
                      : "hsl(var(--foreground))",
                  cursor: "pointer",
                  boxShadow:
                    selectedDepartment === dept
                      ? "0 10px 15px -3px rgba(12, 142, 255, 0.25)"
                      : "none",
                }}
              >
                {dept}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Job Listings */}
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            marginBottom: "5rem",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredRoles.map((role, index) => (
            <motion.div
              key={role.title}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.5rem 2rem",
                borderRadius: "1.25rem", // normal rounded corners
                background: "linear-gradient(90deg, #4F8BFF 0%, #9F62ED 100%)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                transition: "transform .25s ease, box-shadow .25s ease",
                cursor: "pointer",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 24px 60px rgba(12,142,255,.20)",
              }}
            >
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "white",
                    marginBottom: "0.5rem",
                  }}
                >
                  {role.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,.9)",
                    marginBottom: "1rem",
                    lineHeight: 1.75,
                  }}
                >
                  {role.description}
                </p>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  {role.isRemote && (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        border: "1px solid rgba(255,255,255,.35)",
                        borderRadius: "9999px",
                        color: "white",
                        background: "transparent",
                      }}
                    >
                      100% remote
                    </span>
                  )}
                  {role.isFullTime && (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        border: "1px solid rgba(255,255,255,.35)",
                        borderRadius: "9999px",
                        color: "white",
                        background: "transparent",
                      }}
                    >
                      Full-time
                    </span>
                  )}
                </div>
              </div>

              <div style={{ marginLeft: "2rem" }}>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "#0C8EFF", // solid blue
                    color: "white",
                    padding: "0.5rem 1.5rem",
                    borderRadius: "9999px", // pill button
                    border: "none",
                    cursor: "pointer",
                    transition:
                      "box-shadow .25s ease, transform .25s ease",
                    boxShadow: "0 8px 15px rgba(0,0,0,0.25)",
                  }}
                >
                  Apply
                  <ArrowRight
                    className="arrow-icon"
                    style={{
                      width: "1rem",
                      height: "1rem",
                      marginLeft: "0.5rem",
                      transition: "transform 0.25s ease",
                    }}
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
