"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  Briefcase,
  Filter,
  Building2,
  Users,
  TrendingUp,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  Send,
} from "lucide-react"

export function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [locationFilter, setLocationFilter] = useState("")

  const featuredJobs = [
    {
      id: 1,
      title: "Senior UI/UX Designer",
      company: "Amazon",
      companyLogo: "A",
      companyBg: "bg-black",
      location: "San Francisco, CA",
      type: "Part-time",
      workStyle: "Senior level",
      salary: "$120/hr",
      posted: "5 days ago",
      saved: false,
    },
    {
      id: 2,
      title: "Graphic Designer",
      company: "Google",
      companyLogo: "G",
      companyBg: "bg-white border-2 border-gray-200",
      logoColor: "text-gray-600",
      location: "Mountain View, CA",
      type: "Full-time",
      workStyle: "Flexible schedule",
      salary: "$150 - 220k",
      posted: "30 days ago",
      saved: true,
    },
    {
      id: 3,
      title: "Senior Motion Designer",
      company: "Dribbble",
      companyLogo: "D",
      companyBg: "bg-pink-500",
      location: "San Francisco, CA",
      type: "Contract",
      workStyle: "Remote",
      salary: "$85/hr",
      posted: "18 days ago",
      saved: false,
    },
    {
      id: 4,
      title: "UX Designer",
      company: "Meta",
      companyLogo: "M",
      companyBg: "bg-blue-600",
      location: "New York, NY",
      type: "Full-time",
      workStyle: "In office",
      salary: "$200 - 250k",
      posted: "3 months ago",
      saved: true,
    },
    {
      id: 5,
      title: "Junior UX/UI Designer",
      company: "Airbnb",
      companyLogo: "A",
      companyBg: "bg-red-500",
      location: "San Francisco, CA",
      type: "Contract",
      workStyle: "Remote",
      salary: "$100/hr",
      posted: "1 day ago",
      saved: false,
    },
    {
      id: 6,
      title: "Graphic Designer",
      company: "Apple",
      companyLogo: "🍎",
      companyBg: "bg-black",
      location: "Cupertino, CA",
      type: "Full-time",
      workStyle: "Flexible schedule",
      salary: "$85 - 120k",
      posted: "4 days ago",
      saved: true,
    },
    {
      id: 7,
      title: "Product Designer",
      company: "Netflix",
      companyLogo: "N",
      companyBg: "bg-red-600",
      location: "Los Angeles, CA",
      type: "Full-time",
      workStyle: "Hybrid",
      salary: "$160 - 240k",
      posted: "2 days ago",
      saved: false,
    },
    {
      id: 8,
      title: "Senior Frontend Developer",
      company: "Spotify",
      companyLogo: "S",
      companyBg: "bg-green-500",
      location: "New York, NY",
      type: "Full-time",
      workStyle: "Remote",
      salary: "$140 - 200k",
      posted: "1 week ago",
      saved: true,
    },
    {
      id: 9,
      title: "DevOps Engineer",
      company: "Microsoft",
      companyLogo: "M",
      companyBg: "bg-blue-500",
      location: "Seattle, WA",
      type: "Full-time",
      workStyle: "In office",
      salary: "$130 - 180k",
      posted: "3 days ago",
      saved: false,
    },
    {
      id: 10,
      title: "Mobile App Developer",
      company: "Uber",
      companyLogo: "U",
      companyBg: "bg-black",
      location: "San Francisco, CA",
      type: "Contract",
      workStyle: "Remote",
      salary: "$110/hr",
      posted: "1 day ago",
      saved: true,
    },
    {
      id: 11,
      title: "Data Scientist",
      company: "Tesla",
      companyLogo: "T",
      companyBg: "bg-red-500",
      location: "Austin, TX",
      type: "Full-time",
      workStyle: "In office",
      salary: "$150 - 220k",
      posted: "5 days ago",
      saved: false,
    },
    {
      id: 12,
      title: "Marketing Manager",
      company: "Slack",
      companyLogo: "S",
      companyBg: "bg-purple-600",
      location: "Remote",
      type: "Full-time",
      workStyle: "Remote",
      salary: "$90 - 130k",
      posted: "2 weeks ago",
      saved: true,
    },
  ]

  const jobStats = [
    {
      icon: Briefcase,
      label: "Active Jobs",
      value: "12,847",
      change: "+234 this week",
    },
    {
      icon: Building2,
      label: "Companies Hiring",
      value: "3,421",
      change: "+87 this week",
    },
    {
      icon: Users,
      label: "Candidates Placed",
      value: "8,943",
      change: "+156 this month",
    },
    {
      icon: TrendingUp,
      label: "Average Match Score",
      value: "91%",
      change: "+3% improvement",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Smart NLP Search Bar */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Main Search Container - Single container without external button */}
            <div className="relative px-6 py-3 md:px-8 md:py-4 bg-white/[0.12] dark:bg-white/[0.04] backdrop-blur-2xl border border-white/[0.25] dark:border-white/[0.12] rounded-full shadow-[0_20px_80px_rgba(0,0,0,0.08)] group-hover:shadow-[0_32px_120px_rgba(12,142,255,0.12)] transition-all duration-500">
              {/* Enhanced Glass Border System */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60" />

              {/* Multi-layer Inner Glow */}
              <div className="absolute inset-1 bg-gradient-to-br from-white/[0.15] via-white/[0.05] to-transparent rounded-full pointer-events-none opacity-60" />
              <div className="absolute inset-2 bg-gradient-to-tl from-[#0C8EFF]/[0.08] via-transparent to-[#9F62ED]/[0.06] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Smart Search Input */}
              <div className="relative z-10 flex items-center gap-3 md:gap-4">
                {/* AI Search Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-5 h-5 md:w-6 md:h-6 relative">
                    <Search className="w-5 h-5 md:w-6 md:h-6 text-[#0C8EFF]/80 group-hover:text-[#0C8EFF] transition-colors duration-300" />

                    {/* Subtle AI indicator pulse */}
                    <motion.div
                      className="absolute inset-0 w-5 h-5 md:w-6 md:h-6 border-2 border-[#0C8EFF]/30 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.2, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>

                {/* NLP Search Input */}
                <div className="flex-1 relative">
                  <input
                    placeholder="Tell me what you're looking for... (e.g., 'Remote React developer at a startup' or 'Marketing roles in San Francisco')"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-0.5 text-sm md:text-base bg-transparent border-none text-foreground/95 placeholder:text-muted-foreground/50 focus:outline-none focus:placeholder:text-muted-foreground/30 transition-all duration-300"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      fontWeight: "400",
                    }}
                  />

                  {/* Smart suggestion indicator */}
                  {searchQuery.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs text-[#0C8EFF]/70"
                    >
                      <div className="w-1 h-1 bg-[#0C8EFF]/70 rounded-full animate-pulse" />
                      <span className="hidden sm:inline">AI analyzing...</span>
                    </motion.div>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 p-3 md:p-4 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                  onClick={() => {
                    // Handle search submission
                    console.log("Search submitted:", searchQuery)
                  }}
                >
                  <Send className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                </motion.button>
              </div>
            </div>

            {/* Smart Search Suggestions */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: searchQuery.length > 2 ? 1 : 0, y: searchQuery.length > 2 ? 0 : 8 }}
              className="mt-3 flex flex-wrap gap-1.5 justify-center"
            >
              {["Remote opportunities", "Senior positions", "Startup culture", "AI/ML roles", "Design jobs"].map(
                (suggestion, index) => (
                  <motion.button
                    key={suggestion}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-2.5 py-1 text-xs bg-white/[0.1] dark:bg-white/[0.05] backdrop-blur-xl border border-white/[0.15] dark:border-white/[0.08] rounded-full text-foreground/70 hover:text-[#0C8EFF] hover:border-[#0C8EFF]/30 transition-all duration-200"
                    onClick={() => setSearchQuery(suggestion)}
                  >
                    {suggestion}
                  </motion.button>
                ),
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">Available Opportunities</h2>
              <p className="text-sm text-muted-foreground">{featuredJobs.length} jobs • Updated hourly</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-white/[0.15] dark:bg-white/[0.05] backdrop-blur-xl border border-white/[0.18] dark:border-white/[0.08] rounded-xl text-foreground/90 hover:bg-white/[0.22] dark:hover:bg-white/[0.08] transition-all duration-200 shadow-sm"
            >
              <Filter className="w-4 h-4" />
              Filters
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="group"
              >
                <div className="relative group h-full">
                  {/* Liquid Glass Card */}
                  <div className="relative p-4 h-full flex flex-col bg-white/[0.15] dark:bg-white/[0.05] backdrop-blur-xl border border-white/[0.18] dark:border-white/[0.08] rounded-2xl transition-all duration-300 group-hover:bg-white/[0.22] dark:group-hover:bg-white/[0.08] group-hover:border-white/[0.25] dark:group-hover:border-white/[0.15] shadow-[0_8px_32px_rgba(0,0,0,0.08)] group-hover:shadow-[0_16px_64px_rgba(12,142,255,0.15)]">
                    {/* Glass Border Highlights */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60" />
                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent opacity-60" />

                    {/* Subtle Inner Glow */}
                    <div className="absolute inset-1 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Header */}
                    <div className="flex items-start justify-between mb-3 relative z-10">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-full ${job.companyBg} flex items-center justify-center ${job.logoColor || "text-white"} shadow-lg backdrop-blur-sm border border-white/20`}
                        >
                          <span className="text-xs font-bold">{job.companyLogo}</span>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-foreground/90">{job.company}</p>
                          <p className="text-xs text-muted-foreground/80">{job.posted}</p>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1 rounded-full hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-sm transition-colors"
                      >
                        {job.saved ? (
                          <BookmarkCheck className="w-4 h-4 text-[#0C8EFF]" />
                        ) : (
                          <Bookmark className="w-4 h-4 text-muted-foreground/70" />
                        )}
                      </motion.button>
                    </div>

                    {/* Job Title */}
                    <h4 className="text-sm font-semibold text-foreground/95 mb-3 leading-tight line-clamp-2 relative z-10">
                      {job.title}
                    </h4>

                    {/* Job Type Badges */}
                    <div className="flex flex-wrap gap-1 mb-4 relative z-10">
                      <div className="text-xs px-2 py-1 h-5 bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-full text-foreground/80 flex items-center">
                        {job.type}
                      </div>
                      <div className="text-xs px-2 py-1 h-5 bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-full text-foreground/80 flex items-center">
                        {job.workStyle}
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Footer */}
                    <div className="flex items-center justify-between relative z-10">
                      <div>
                        <p className="text-sm font-semibold text-foreground/95">{job.salary}</p>
                        <p className="text-xs text-muted-foreground/80 truncate">{job.location}</p>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 text-xs rounded-lg bg-white/30 dark:bg-white/20 backdrop-blur-sm border border-white/40 dark:border-white/30 text-foreground/90 hover:bg-white/40 dark:hover:bg-white/25 transition-all duration-200 shadow-sm"
                      >
                        Apply
                      </motion.button>
                    </div>

                    {/* Floating Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Animated Glass Edge */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border border-[#0C8EFF]/0 group-hover:border-[#0C8EFF]/20 transition-all duration-300"
                      whileHover={{
                        boxShadow: "0 0 20px rgba(12, 142, 255, 0.15)",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-sm bg-white/[0.15] dark:bg-white/[0.05] backdrop-blur-xl border border-white/[0.18] dark:border-white/[0.08] rounded-xl text-foreground/90 hover:bg-white/[0.22] dark:hover:bg-white/[0.08] transition-all duration-200 shadow-sm"
            >
              Load More Jobs
            </motion.button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {jobStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="p-4 text-center bg-white/[0.15] dark:bg-white/[0.05] backdrop-blur-xl border border-white/[0.18] dark:border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/[0.22] dark:hover:bg-white/[0.08] transition-all duration-300">
                      {/* Glass Border Highlights */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-80" />
                      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent opacity-80" />

                      <Icon className="w-6 h-6 text-[#0C8EFF] mx-auto mb-2 relative z-10" />
                      <div className="text-lg font-bold text-foreground/95 mb-1 relative z-10">{stat.value}</div>
                      <div className="text-xs text-muted-foreground/80 mb-1 relative z-10">{stat.label}</div>
                      <div className="text-xs text-green-600 font-medium relative z-10">{stat.change}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="p-8 bg-white/[0.15] dark:bg-white/[0.05] backdrop-blur-xl border border-white/[0.18] dark:border-white/[0.08] rounded-3xl shadow-[0_16px_64px_rgba(0,0,0,0.12)]">
                {/* Glass Border Highlights */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-80" />
                <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent opacity-80" />

                {/* Subtle Inner Glow */}
                <div className="absolute inset-1 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent rounded-3xl pointer-events-none opacity-50" />

                <h2 className="text-xl md:text-2xl font-bold text-foreground/95 mb-4 relative z-10">
                  Ready to Find Your Dream Job?
                </h2>
                <p className="text-sm md:text-base text-muted-foreground/80 mb-6 max-w-xl mx-auto relative z-10">
                  Join thousands of professionals who have found their perfect career match through our AI-powered
                  platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-2 text-sm bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-white rounded-xl backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Get Started Now
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 text-sm bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl text-foreground/90 hover:bg-white/30 dark:hover:bg-white/15 transition-all duration-200"
                  >
                    Learn More
                  </motion.button>
                </div>

                <p className="text-xs text-muted-foreground/70 mt-4 relative z-10">
                  Free for job seekers • No hidden fees • Instant notifications
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}