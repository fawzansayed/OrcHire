"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import {
  Check,
  X,
  ArrowRight,
  Sparkles,
  UserCheck,
  Building2,
  Crown,
  DollarSign,
  IndianRupee,
  Phone,
  MessageSquareMore,
  Rocket,
  Gem,
  Target,
} from "lucide-react"

interface PricingTier {
  id: string
  name: string
  tagline: string
  monthlyPriceUSD: number
  annualPriceUSD: number
  monthlyPriceINR: number
  annualPriceINR: number
  originalPriceUSD?: number
  originalPriceINR?: number
  icon: any
  popular?: boolean
  features: Array<{
    name: string
    included: boolean
    highlight?: boolean
  }>
  cta: string
  ctaStyle: "primary" | "secondary" | "outline"
}

interface ServiceCard {
  id: string
  title: string
  description: string
  cta: string
  icon: any
}

type Currency = "USD" | "INR"
type BillingPeriod = "monthly" | "annually"

export function PricingPage() {
  const [currency, setCurrency] = useState<Currency>("INR")
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly")

  const pricingTiers: PricingTier[] = [
    {
      id: "trial",
      name: "Trial User",
      tagline: "for testing our platform",
      monthlyPriceUSD: 36,
      annualPriceUSD: 36,
      monthlyPriceINR: 3000,
      annualPriceINR: 3000,
      originalPriceUSD: 72,
      originalPriceINR: 6000,
      icon: UserCheck,
      features: [
        { name: "400 AI Credits", included: true },
        { name: "1 User - Free Posting", included: true },
        { name: "AI Resume Sourcing", included: true },
        { name: "AI CV Assessment", included: true },
        { name: "Email API", included: true },
        { name: "In-built ATS", included: false },
        { name: "OrcHire Pool Suggestions", included: false },
        { name: "AI Conversation Assessment", included: false },
        { name: "AI Voice Calling", included: false },
      ],
      cta: "Contact Us",
      ctaStyle: "secondary",
    },
    {
      id: "starter",
      name: "Starter",
      tagline: "Rapid Results Hiring",
      monthlyPriceUSD: 500,
      annualPriceUSD: 500,
      monthlyPriceINR: 42000,
      annualPriceINR: 42000,
      icon: Rocket,
      features: [
        { name: "2000 AI Credits", included: true, highlight: true },
        { name: "Multiple Users & Job Postings", included: true },
        { name: "Unlimited Users & Jobs", included: true },
        { name: "AI Resume Sourcing", included: true },
        { name: "OrcHire Pool Suggestions", included: true },
        { name: "AI CV Assessment", included: true },
        { name: "In-built ATS", included: true },
        { name: "AI Conversation Assessment", included: false },
        { name: "AI Voice Calling", included: false },
      ],
      cta: "Contact Us",
      ctaStyle: "secondary",
    },
    {
      id: "growth",
      name: "Growth",
      tagline: "For Scaling Teams",
      monthlyPriceUSD: 1000,
      annualPriceUSD: 850,
      monthlyPriceINR: 85000,
      annualPriceINR: 72000,
      icon: Target,
      popular: true,
      features: [
        { name: "5000 AI Credits", included: true, highlight: true },
        { name: "Unlimited Users & Jobs", included: true },
        { name: "AI Resume Sourcing", included: true },
        { name: "AI CV Assessment", included: true },
        { name: "OrcHire Pool Suggestions", included: true },
        { name: "AI Conversation Assessment", included: true, highlight: true },
        { name: "In-built ATS", included: true },
        { name: "AI Voice Calling", included: false },
      ],
      cta: "Contact Us",
      ctaStyle: "primary",
    },
    {
      id: "scaleup",
      name: "Scaleup",
      tagline: "For Growth Companies",
      monthlyPriceUSD: 1800,
      annualPriceUSD: 1500,
      monthlyPriceINR: 150000,
      annualPriceINR: 125000,
      icon: Building2,
      features: [
        { name: "10000 AI Credits", included: true, highlight: true },
        { name: "Unlimited Users & Jobs", included: true },
        { name: "AI Resume Sourcing", included: true },
        { name: "AI CV Assessment", included: true },
        { name: "OrcHire Pool Suggestions", included: true },
        { name: "AI Conversation Assessment", included: true },
        { name: "AI Voice Calling", included: true, highlight: true },
        { name: "In-built ATS", included: true },
      ],
      cta: "Contact Us",
      ctaStyle: "secondary",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      tagline: "For Scale",
      monthlyPriceUSD: 0,
      annualPriceUSD: 0,
      monthlyPriceINR: 0,
      annualPriceINR: 0,
      icon: Crown,
      features: [
        { name: "Everything in Scaleup", included: true },
        { name: "Custom Integrations", included: true, highlight: true },
        { name: "Custom ATS", included: true },
        { name: "Premium Support", included: true },
        { name: "Dedicated Account Manager", included: true, highlight: true },
        { name: "Volume-based Pricing", included: true },
        { name: "White-label Solution", included: true, highlight: true },
      ],
      cta: "Contact Us",
      ctaStyle: "secondary",
    },
  ]

  const serviceCards: ServiceCard[] = [
    {
      id: "consultation",
      title: "Talk it through",
      description: "Need to talk through OrcHire.ai in detail? Schedule a call with us today.",
      cta: "Book a Call",
      icon: Phone,
    },
    {
      id: "audit",
      title: "Audit your hiring",
      description: "Need some quick wins for improving your hiring process, app or workflow?",
      cta: "Audit us",
      icon: MessageSquareMore,
    },
  ]

  const formatPrice = (price: number, currencyType: Currency) => {
    if (price === 0) return "Custom"

    if (currencyType === "USD") {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price)
    } else {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price)
    }
  }

  const getCurrentPrice = (tier: PricingTier) => {
    const basePrice =
      currency === "USD"
        ? billingPeriod === "annually"
          ? tier.annualPriceUSD
          : tier.monthlyPriceUSD
        : billingPeriod === "annually"
          ? tier.annualPriceINR
          : tier.monthlyPriceINR

    const originalPrice = currency === "USD" ? tier.originalPriceUSD : tier.originalPriceINR

    return { basePrice, originalPrice }
  }

  const getSavingsPercentage = (monthly: number, annual: number) => {
    if (monthly === annual || annual === 0) return 0
    return Math.round(((monthly - annual) / monthly) * 100)
  }

  const getCardStyles = (tier: PricingTier, index: number) => {
    if (tier.popular) {
      return {
        background: "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(34, 197, 94, 0.15) 100%)",
        border: "1px solid rgba(6, 182, 212, 0.3)",
        highlight: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
        button: "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-cyan-500/25",
      }
    } else if (tier.id === "enterprise") {
      return {
        background: "linear-gradient(135deg, rgba(159, 98, 237, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)",
        border: "1px solid rgba(159, 98, 237, 0.3)",
        highlight: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        button: "bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:shadow-lg hover:shadow-purple-500/25",
      }
    } else {
      return {
        background: "rgba(255, 255, 255, 0.03)",
        
        highlight: "bg-gray-500/20 text-gray-400 border-gray-500/30",
        button: "bg-white/10 text-foreground border border-border hover:bg-white/20",
      }
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen overflow-hidden">
      {/* Fluid Organic Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base background */}
        <div className="absolute inset-0 bg-background" />

        {/* Organic flowing shapes */}
        <motion.div
          className="absolute top-0 left-0 w-[60%] h-[80%] opacity-60"
          style={{
            background: "linear-gradient(135deg, rgba(255, 154, 115, 0.3) 0%, rgba(255, 206, 154, 0.2) 100%)",
            borderRadius: "0% 100% 80% 20% / 0% 50% 50% 100%",
            filter: "blur(60px)",
          }}
          animate={{
            borderRadius: [
              "0% 100% 80% 20% / 0% 50% 50% 100%",
              "20% 80% 100% 0% / 50% 0% 100% 50%",
              "0% 100% 80% 20% / 0% 50% 50% 100%",
            ],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-[70%] h-[70%] opacity-50"
          style={{
            background: "linear-gradient(225deg, rgba(159, 98, 237, 0.25) 0%, rgba(168, 85, 247, 0.15) 100%)",
            borderRadius: "80% 20% 0% 100% / 50% 100% 0% 50%",
            filter: "blur(80px)",
          }}
          animate={{
            borderRadius: [
              "80% 20% 0% 100% / 50% 100% 0% 50%",
              "100% 0% 20% 80% / 100% 50% 50% 0%",
              "80% 20% 0% 100% / 50% 100% 0% 50%",
            ],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 5 }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[60%] opacity-40"
          style={{
            background: "linear-gradient(45deg, rgba(6, 182, 212, 0.2) 0%, rgba(34, 197, 94, 0.15) 100%)",
            borderRadius: "50% 50% 50% 50% / 60% 40% 60% 40%",
            filter: "blur(100px)",
          }}
          animate={{
            borderRadius: [
              "50% 50% 50% 50% / 60% 40% 60% 40%",
              "40% 60% 40% 60% / 50% 50% 50% 50%",
              "50% 50% 50% 50% / 60% 40% 60% 40%",
            ],
          }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 10 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl lg:text-6xl font-semibold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The Smarter Way to Hire
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Flexible plans powered by AI agents to fit your recruiting needs.
          </motion.p>

          {/* Premium Control Panel */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Premium Currency Switch */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground font-medium">Currency</span>
              <div className="relative">
                <div className="w-16 h-8 bg-gradient-to-r from-muted/60 via-muted/40 to-muted/60 backdrop-blur-xl rounded-full border border-border/40 shadow-inner flex-shrink-0 relative">
                  {/* thumb */}
                  <motion.div
                    className="absolute top-0.5 w-7 h-7 rounded-full shadow-lg border bg-foreground text-background border-border/40"
                    animate={{ x: currency === "USD" ? 1.4 : 29 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />

                  {/* overlay with equal halves (FIX) */}
                  <div className="absolute inset-0 grid grid-cols-2 place-items-center">
                    <motion.button
                      onClick={() => setCurrency("USD")}
                      className="w-full h-full inline-flex items-center justify-center z-10"
                      whileTap={{ scale: 0.9 }}
                    >
                      <DollarSign
                        className={`w-3 h-3 transition-colors duration-200 ${
                          currency === "USD" ? "text-background" : "text-muted-foreground/60"
                        }`}
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => setCurrency("INR")}
                      className="w-full h-full inline-flex items-center justify-center z-10"
                      whileTap={{ scale: 0.9 }}
                    >
                      <IndianRupee
                        className={`w-3 h-3 transition-colors duration-200 ${
                          currency === "INR" ? "text-background" : "text-muted-foreground/60"
                        }`}
                      />
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="text-sm font-medium text-foreground flex-grow">{currency}</div>
            </div>

            {/* Premium Billing Switch */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground font-medium">Billing</span>
              <div className="relative">
                <div className="w-24 h-8 bg-gradient-to-r from-muted/60 via-muted/40 to-muted/60 backdrop-blur-xl rounded-full border border-border/40 shadow-inner flex-shrink-0">
                  <motion.div
                    className="absolute top-0.5 w-11 h-7 rounded-full shadow-lg border bg-foreground text-background border-border/40"
                    animate={{
                      x: billingPeriod === "monthly" ? 1.5 : 43,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                  <div className="absolute inset-0 grid grid-cols-2 place-items-center">
                    <motion.button
                      onClick={() => setBillingPeriod("monthly")}
                      className="relative flex-1 h-6"
                      whileTap={{ scale: 0.95 }}
                    >
                      <span
                        className={`absolute inset-0 flex items-center justify-center leading-none text-xs font-medium transition-colors duration-200 ${
                          billingPeriod === "monthly" ? "text-background" : "text-muted-foreground/60"
                        }`}
                        style={{ transform: "translateY(1px)" }}   // <-- nudge down
                      >
                        M
                      </span>
                    </motion.button>
                    <motion.button
                      onClick={() => setBillingPeriod("annually")}
                      className="relative flex-1 h-6"
                      whileTap={{ scale: 0.95 }}
                    >
                      <span
                        className={`absolute inset-0 flex items-center justify-center leading-none text-xs font-medium transition-colors duration-200 ${
                          billingPeriod === "annually" ? "text-background" : "text-muted-foreground/60"
                        }`}
                        style={{ transform: "translateY(1px)" }}   // <-- nudge down
                      >
                        A
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-grow">
                <span className="text-sm font-medium text-foreground">
                  {billingPeriod === "monthly" ? "Monthly" : "Annual"}
                </span>
                {billingPeriod === "annually" && (
                  <Badge className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 border-emerald-500/30 text-xs px-2 py-0.5 font-medium">
                    <Gem className="w-3 h-3 mr-1" />
                    Save 15%
                  </Badge>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Pricing Cards - All 5 Plans in Single Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-16 max-w-7xl mx-auto relative">
          {pricingTiers[2].popular && (
            <motion.div
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + 2 * 0.1 }}
            >
              <div className="bg-gradient-to-r from-[#0C8EFF] via-[#0EA5E9] to-[#9F62ED] text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-xl border border-white/20 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span className="whitespace-nowrap">Most Popular</span>
              </div>
            </motion.div>
          )}
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon
            const { basePrice, originalPrice } = getCurrentPrice(tier)
            const savingsPercentage =
              billingPeriod === "annually" && tier.monthlyPriceINR !== tier.annualPriceINR
                ? getSavingsPercentage(
                    currency === "USD" ? tier.monthlyPriceUSD : tier.monthlyPriceINR,
                    currency === "USD" ? tier.annualPriceUSD : tier.annualPriceINR,
                  )
                : 0
            const styles = getCardStyles(tier, index)
            const isPlainTier = !tier.popular && tier.id !== "enterprise"

            return (
              <motion.div
                key={tier.id}
                className={`relative group ${tier.popular ? "lg:scale-105 z-10" : ""}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                {/* Card */}
                <div
                  className={`
          relative h-full p-6 rounded-2xl backdrop-blur-xl transition-all duration-300 group-hover:shadow-2xl overflow-hidden ${isPlainTier ? "border border-black/10 dark:border-white/10" : ""}
        `}
                  style={{
                    background: styles.background,
                    border: !isPlainTier ? (styles as any).border : undefined,
                  }}
                >
                  {/* Glass Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none rounded-2xl" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm border ${
                          tier.popular
                            ? "bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 border-[#0C8EFF]/30"
                            : tier.id === "enterprise"
                              ? "bg-gradient-to-br from-purple-500/20 to-violet-500/20 border-purple-500/30"
                              : "bg-muted/50 border-border/50"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            tier.popular
                              ? "text-[#0C8EFF]"
                              : tier.id === "enterprise"
                                ? "text-purple-400"
                                : "text-muted-foreground"
                          }`}
                        />
                      </div>

                      {savingsPercentage > 0 && billingPeriod === "annually" && (
                        <Badge className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 text-emerald-400 border-emerald-500/20 text-xs font-medium">
                          <Gem className="w-3 h-3 mr-1" />
                          Save {savingsPercentage}%
                        </Badge>
                      )}
                    </div>

                    {/* Plan Info */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-foreground mb-1">{tier.name}</h3>
                      <p className="text-muted-foreground text-xs uppercase tracking-wide font-medium">
                        {tier.tagline}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${currency}-${billingPeriod}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          {tier.id === "trial" ? (
                            <div>
                              <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-3xl font-bold text-foreground">
                                  {formatPrice(basePrice, currency)}
                                </span>
                                {originalPrice && (
                                  <span className="text-lg text-muted-foreground line-through">
                                    {formatPrice(originalPrice, currency)}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground">50% off first month</p>
                            </div>
                          ) : tier.id === "enterprise" ? (
                            <div>
                              <div className="text-3xl font-bold text-foreground mb-1">Custom</div>
                              <p className="text-xs text-muted-foreground">Tailored to your needs</p>
                            </div>
                          ) : (
                            <div>
                              <div className="text-3xl font-bold text-foreground mb-1">
                                {formatPrice(basePrice, currency)}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {billingPeriod === "annually" ? "per month, billed annually" : "per month"}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* CTA Button */}
                    <div className="mb-6">
                      <Button
                        className={`w-full h-10 rounded-xl font-medium transition-all duration-300 text-sm ${
                          tier.ctaStyle === "primary"
                            ? "bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-white hover:shadow-lg hover:shadow-[#0C8EFF]/25"
                            : tier.ctaStyle === "secondary"
                              ? "bg-muted text-foreground hover:bg-muted/80"
                              : "border border-border hover:border-foreground/30 bg-transparent hover:bg-muted/50"
                        }`}
                      >
                        {tier.cta}
                      </Button>
                    </div>

                    {/* Features List - Compact */}
                    <div className="space-y-2">
                      {tier.features.slice(0, 6).map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + featureIndex * 0.05 }}
                        >
                          <div
                            className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                              feature.included
                                ? feature.highlight
                                  ? "bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED]"
                                  : "bg-green-500/20"
                                : "bg-muted/50"
                            }`}
                          >
                            {feature.included ? (
                              <Check className={`w-2.5 h-2.5 ${feature.highlight ? "text-white" : "text-green-600"}`} />
                            ) : (
                              <X className="w-2.5 h-2.5 text-muted-foreground" />
                            )}
                          </div>
                          <span
                            className={`text-xs ${
                              feature.included
                                ? feature.highlight
                                  ? "text-foreground font-medium"
                                  : "text-foreground"
                                : "text-muted-foreground"
                            }`}
                          >
                            {feature.name}
                          </span>
                        </motion.div>
                      ))}
                      {tier.features.length > 6 && (
                        <p className="text-xs text-muted-foreground italic">
                          +{tier.features.length - 6} more features
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {serviceCards.map((card, index) => {
            const Icon = card.icon

            return (
              <motion.div
                key={card.id}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="relative p-6 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/30 transition-all duration-300 group-hover:shadow-xl overflow-hidden">
                  {/* Glass Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none rounded-2xl" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm border border-border/30 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-muted-foreground" />
                    </div>

                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant="outline"
                      className="w-full rounded-xl border-border/50 hover:border-foreground/30 bg-transparent hover:bg-muted/50"
                    >
                      {card.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm text-muted-foreground mb-8">
            * All Multi-User plans include unlimited users and unlimited job postings. All Credits are renewed monthly.
          </p>

          {/* Contact CTA */}
          <div className="bg-muted/30 backdrop-blur-xl rounded-2xl border border-border/50 p-8 inline-block">
            <h3 className="text-xl font-semibold text-foreground mb-2">Need help choosing?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Our team can help you find the perfect plan for your hiring needs.
            </p>
            <Button className="bg-foreground text-background hover:bg-foreground/90">Schedule a Demo</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
