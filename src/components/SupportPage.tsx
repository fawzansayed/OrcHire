import { motion } from "motion/react"
import { HelpCircle, BookOpen, MessageCircle, Phone, Mail, Search } from "lucide-react"
import { GlassCard } from "./ui/card"
import { Button } from "./ui/button"

export function SupportPage() {
  const supportCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Setup guides and onboarding resources",
      count: "15 articles",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      icon: HelpCircle,
      title: "Platform Usage",
      description: "How to use AI agents and features",
      count: "28 guides",
      color: "from-purple-500/20 to-teal-500/20",
    },
    {
      icon: MessageCircle,
      title: "Troubleshooting",
      description: "Common issues and solutions",
      count: "22 solutions",
      color: "from-teal-500/20 to-green-500/20",
    },
    {
      icon: Phone,
      title: "API & Integrations",
      description: "Technical documentation and guides",
      count: "18 docs",
      color: "from-green-500/20 to-blue-500/20",
    },
  ]

  const popularArticles = [
    {
      title: "Setting Up Your First AI Agent",
      category: "Getting Started",
      readTime: "5 min read",
      helpful: 156,
    },
    {
      title: "Configuring Interview Parameters",
      category: "Platform Usage",
      readTime: "8 min read",
      helpful: 142,
    },
    {
      title: "Integrating with Your Existing ATS",
      category: "API & Integrations",
      readTime: "12 min read",
      helpful: 128,
    },
    {
      title: "Understanding AI Agent Responses",
      category: "Platform Usage",
      readTime: "6 min read",
      helpful: 119,
    },
    {
      title: "Troubleshooting Connection Issues",
      category: "Troubleshooting",
      readTime: "4 min read",
      helpful: 98,
    },
  ]

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Available 24/7",
      response: "< 2 minutes",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send detailed questions to our experts",
      availability: "support@cohyre.ai",
      response: "< 4 hours",
      color: "from-purple-500/20 to-teal-500/20",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical team",
      availability: "Mon-Fri 9AM-6PM EST",
      response: "Available now",
      color: "from-teal-500/20 to-green-500/20",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            className="inline-flex items-center space-x-3 bg-background/60 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/10 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/20 to-[#0C8EFF]/20 rounded-full flex items-center justify-center border border-[#0C8EFF]/30 shadow-sm backdrop-blur-sm">
              <HelpCircle className="w-4 h-4 text-[#0C8EFF]" />
            </div>
            <span className="text-foreground font-semibold text-base">Support Center</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            How Can We
            <br />
            <span className="bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
              Help You Today?
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get the most out of OrcHire's AI agents with comprehensive guides, tutorials, and 24/7 support from our
            expert team.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and tutorials..."
                className="w-full pl-12 pr-4 py-4 bg-background/60 backdrop-blur-xl border border-white/10 rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0C8EFF]/50 focus:border-[#0C8EFF]/50 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Find the help you need organized by topic</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-6 text-center bg-background/40 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                    <div className="w-16 h-16 mx-auto mb-4 bg-background/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 shadow-sm relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/10 via-transparent to-[#9F62ED]/10 rounded-full" />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                      <Icon className="w-7 h-7 text-foreground relative z-10" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{category.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                    <span className="text-xs text-[#0C8EFF] font-medium">{category.count}</span>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-4">
              Popular Help Articles
            </h2>
            <p className="text-lg text-muted-foreground">Most helpful resources from our community</p>
          </motion.div>

          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 bg-background/40 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-[#0C8EFF]/20 text-[#0C8EFF] px-3 py-1 rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{article.readTime}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-[#0C8EFF] transition-colors duration-300">
                        {article.title}
                      </h4>
                    </div>
                    <div className="text-sm text-muted-foreground ml-4">
                      <span className="text-xs">👍 {article.helpful} helpful</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-4">
              Still Need Help?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our expert support team is here to help you succeed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-8 text-center bg-background/40 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group h-full relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                    <div className="w-16 h-16 mx-auto mb-6 bg-background/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 shadow-sm relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/10 via-transparent to-[#9F62ED]/10 rounded-full" />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${option.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                      <Icon className="w-7 h-7 text-foreground relative z-10" />
                    </div>

                    <h4 className="text-lg font-semibold text-foreground mb-3">{option.title}</h4>
                    <p className="text-muted-foreground mb-4">{option.description}</p>

                    <div className="space-y-2 mb-6">
                      <p className="text-sm text-muted-foreground">{option.availability}</p>
                      <p className="text-sm text-[#0C8EFF] font-medium">Response: {option.response}</p>
                    </div>

                    <Button className="bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-white group-hover:scale-105 transition-transform duration-300">
                      Start {option.title}
                    </Button>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-background/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/5 via-[#9F62ED]/5 to-[#0C8EFF]/5 rounded-3xl" />

            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-muted-foreground mb-6">Quick answers to common questions about OrcHire's AI agents</p>

              <Button className="bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-white">View All FAQs</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
