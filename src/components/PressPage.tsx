import { motion } from "motion/react"
import { Newspaper, Award, Calendar, ExternalLink, Download } from "lucide-react"
import { GlassCard } from "./ui/card"
import { Button } from "./ui/button"

export function PressPage() {
  const pressReleases = [
    {
      title: "OrcHire Raises $25M Series A to Accelerate AI-Powered Hiring Revolution",
      date: "December 1, 2024",
      excerpt:
        "Funding led by Andreessen Horowitz will fuel expansion of 11-agent AI platform that's transforming talent acquisition for 200+ companies.",
      category: "Funding",
      featured: true,
    },
    {
      title: "OrcHire AI Agents Achieve 94% Accuracy in Candidate Matching",
      date: "November 15, 2024",
      excerpt:
        "Independent study validates OrcHire's DNA matching technology outperforms traditional ATS systems by 300% in quality-of-hire metrics.",
      category: "Product",
      featured: true,
    },
    {
      title: "Fortune 500 Companies Adopt OrcHire for Autonomous Hiring at Scale",
      date: "October 28, 2024",
      excerpt:
        "Major enterprises report 85% reduction in time-to-hire and 60% cost savings after implementing OrcHire's AI agent network.",
      category: "Business",
      featured: false,
    },
  ]

  const mediaKit = [
    {
      title: "Company Logos & Brand Assets",
      description: "High-resolution logos, brand guidelines, and visual assets",
      type: "ZIP Package",
      size: "15.2 MB",
    },
    {
      title: "Executive Team Photos",
      description: "Professional headshots and team photos",
      type: "ZIP Package",
      size: "8.7 MB",
    },
    {
      title: "Product Screenshots & UI",
      description: "Platform screenshots and interface examples",
      type: "ZIP Package",
      size: "22.1 MB",
    },
    {
      title: "Company Fact Sheet",
      description: "Key statistics, milestones, and company information",
      type: "PDF",
      size: "2.3 MB",
    },
  ]

  const mediaOutlets = [
    { name: "TechCrunch", logo: "TC", featured: true },
    { name: "VentureBeat", logo: "VB", featured: true },
    { name: "Forbes", logo: "FB", featured: true },
    { name: "Harvard Business Review", logo: "HBR", featured: false },
    { name: "Wired", logo: "WD", featured: false },
    { name: "Fast Company", logo: "FC", featured: false },
    { name: "Wall Street Journal", logo: "WSJ", featured: false },
    { name: "Financial Times", logo: "FT", featured: false },
  ]

  const awards = [
    {
      title: "Best AI Innovation in HR Tech",
      organization: "HR Technology Awards 2024",
      date: "November 2024",
      description: "Recognized for breakthrough AI agent technology transforming talent acquisition",
    },
    {
      title: "Startup of the Year - Enterprise Software",
      organization: "TechCrunch Disrupt 2024",
      date: "October 2024",
      description: "Selected from 1000+ startups for revolutionary approach to hiring automation",
    },
    {
      title: "Top 10 AI Companies to Watch",
      organization: "Fast Company 2024",
      date: "September 2024",
      description: "Featured for democratizing AI-powered recruiting for companies of all sizes",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/20 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/20 to-[#0C8EFF]/20 rounded-full flex items-center justify-center border border-[#0C8EFF]/30 shadow-sm backdrop-blur-sm">
              <Newspaper className="w-4 h-4 text-[#0C8EFF]" />
            </div>
            <span className="text-foreground font-semibold text-base">Press & Media Coverage</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            OrcHire in the
            <br />
            Media Spotlight
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Latest news, press releases, awards, and media coverage of OrcHire's mission to end the "ATS & Resume Era"
            with autonomous AI-powered hiring.
          </motion.p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent">
              Latest Press Releases
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Official company announcements and news updates
            </p>
          </motion.div>

          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-white/10">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="bg-[#0C8EFF]/20 text-[#0C8EFF] px-3 py-1 rounded-full text-xs font-medium">
                      {release.category}
                    </span>
                    {release.featured && (
                      <span className="bg-[#9F62ED]/20 text-[#9F62ED] px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground ml-auto">
                      <Calendar className="w-3 h-3" />
                      <span>{release.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-[#0C8EFF] transition-colors duration-300">
                    {release.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">{release.excerpt}</p>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 hover:bg-[#0C8EFF]/10 hover:border-[#0C8EFF]/30 bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Full Release
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 hover:bg-[#9F62ED]/10 hover:border-[#9F62ED]/30 bg-transparent"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg" />
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}

    </div>
  )
}
