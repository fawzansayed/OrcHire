"use client"
import { motion } from "motion/react"
import { Linkedin, Twitter, Github } from "lucide-react"

interface FooterProps {
  onNavigate: (page: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Pricing", page: "pricing" },
        { name: "Comparison", page: "comparison" },
        // { name: "Calculate ROI", page: "roi-calculator" },
      ],
    },
    // {
    //   title: "Resources",
    //   links: [
    //     { name: "Knowledge Base", page: "resources" },
    //     { name: "Press", page: "press" },
    //   ],
    // },
    {
      title: "Company",
      links: [
        // { name: "About", page: "about" },
        // { name: "Careers", page: "careers" },
        { name: "Contact Us", page: "contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", page: "privacy" },
        { name: "Terms of Service", page: "terms" },
        { name: "Cookie Policy", page: "cookies" },
        { name: "Security", page: "security" }
      ],
    },
  ]

  return (
    <footer className="bg-background">
      {/* Top separator line */}
      <div className="border-t border-border"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Enhanced Gradient Typography Section with Animated Glow - Fixed clipping */}
        <div className="py-20 text-center">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] dark:from-[#0C8EFF] dark:via-[#9F62ED] dark:to-[#0C8EFF] bg-clip-text text-transparent leading-relaxed pb-[0.2em] inline-block overflow-visible max-w-6xl mx-auto relative"
            animate={{
              filter: [
                "drop-shadow(0 0 20px rgba(12, 142, 255, 0.3))",
                "drop-shadow(0 0 40px rgba(159, 98, 237, 0.4))",
                "drop-shadow(0 0 20px rgba(12, 142, 255, 0.3))",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            }}
          >
            Future Of Hiring, Now.
          </motion.h2>
        </div>

        {/* Main footer content */}
        <div className="py-12 mt-8 border-t border-border">
          {/* Top description */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground max-w-4xl">Ultimate Hiring OS.</p>
          </div>

          {/* Footer links grid */}
         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8">
  {footerSections.map((section) => (
    <div key={section.title}>
      <h3 className="text-sm font-medium text-foreground mb-4">{section.title}</h3>
      <ul className="space-y-1">
        {section.links.map((link) => (
          <li key={link.name}>
            <button
              onClick={() => {
                onNavigate(link.page)
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

        </div>

        {/* Bottom section with extra padding */}
        <div className="border-t border-border py-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Copyright and additional links */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Vednya Hiring Intelligence Private Limited. All Rights Reserved.</span>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  India
                </span>
              </div>
            </div>

            {/* Social icons - minimal and premium */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => window.open("https://linkedin.com", "_blank")}
                className="w-9 h-9 bg-card/40 backdrop-blur-xl rounded-xl border border-border/20 flex items-center justify-center text-muted-foreground hover:text-[#0C8EFF] hover:bg-card/60 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glass effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent dark:from-white/[0.03] rounded-xl" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
                <Linkedin className="w-4 h-4 relative z-10" strokeWidth={1.5} />
              </motion.button>

              <motion.button
                onClick={() => window.open("https://twitter.com", "_blank")}
                className="w-9 h-9 bg-card/40 backdrop-blur-xl rounded-xl border border-border/20 flex items-center justify-center text-muted-foreground hover:text-[#9F62ED] hover:bg-card/60 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glass effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent dark:from-white/[0.03] rounded-xl" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
                <Twitter className="w-4 h-4 relative z-10" strokeWidth={1.5} />
              </motion.button>

              <motion.button
                onClick={() => window.open("https://github.com", "_blank")}
                className="w-9 h-9 bg-card/40 backdrop-blur-xl rounded-xl border border-border/20 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card/60 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glass effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent dark:from-white/[0.03] rounded-xl" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
                <Github className="w-4 h-4 relative z-10" strokeWidth={1.5} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}