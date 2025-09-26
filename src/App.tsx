"use client"

import { lazy, Suspense, useState, useRef, memo } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { ThemeProvider } from "./components/ThemeProvider"
import { Toaster } from "./components/ui/sonner"


const Navigation = lazy(() => import("./components/Navigation").then((m) => ({ default: m.Navigation })))
const HeroSection = lazy(() => import("./components/HeroSection").then((m) => ({ default: m.HeroSection })))
const ProductSection = lazy(() => import("./components/ProductSection").then((m) => ({ default: m.ProductSection })))
const AgentFlowSection = lazy(() =>
  import("./components/AgentFlowSection").then((m) => ({ default: m.AgentFlowSection })),
)
const WhyCoHyreSection = lazy(() =>
  import("./components/WhyCoHyreSection").then((m) => ({ default: m.WhyCoHyreSection })),
)
const SecurityComplianceSection = lazy(() =>
  import("./components/SecurityComplianceSection").then((m) => ({ default: m.SecurityComplianceSection })),
)
const Footer = lazy(() => import("./components/Footer").then((m) => ({ default: m.Footer })))

const ComparisonPage = lazy(() => import("./components/ComparisonPage").then((m) => ({ default: m.ComparisonPage })))
const PricingPage = lazy(() => import("./components/PricingPage").then((m) => ({ default: m.PricingPage })))
const AboutPage = lazy(() => import("./components/AboutPage").then((m) => ({ default: m.AboutPage })))
const KnowledgeBasePage = lazy(() => import("./components/KnowledgeBasePage").then((m) => ({ default: m.KnowledgeBasePage })))

const PressPage = lazy(() => import("./components/PressPage").then((m) => ({ default: m.PressPage })))
const SupportPage = lazy(() => import("./components/SupportPage").then((m) => ({ default: m.SupportPage })))

const CareersPage = lazy(() => import("./components/CareersPage").then((m) => ({ default: m.CareersPage })))

const TermsPage = lazy(() => import("./components/TermsPage").then((m) => ({ default: m.TermsPage })))
const PrivacyPage = lazy(() => import("./components/PrivacyPage").then((m) => ({ default: m.PrivacyPage })))
const SecurityPage = lazy(() => import("./components/SecurityPage").then((m) => ({ default: m.SecurityPage })))
const CookiePage = lazy(() => import("./components/CookiePage").then((m) => ({ default: m.CookiePage })))
const ROICalculatorPage = lazy(() =>
  import("./components/ROICalculatorPage"))
const TestimonialsPage = lazy(() =>
  import("./components/TestimonialsPage").then((m) => ({ default: m.TestimonialsPage })),
)
const CandidatesPage = lazy(() => import("./components/CandidatesPage").then((m) => ({ default: m.CandidatesPage })))
const JobsPage = lazy(() => import("./components/JobsPage").then((m) => ({ default: m.JobsPage })))

const LoadingSpinner = memo(() => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
))

const OptimizedBackground = memo(({ scrollYProgress }: { scrollYProgress: any }) => {
  const primaryOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.8])
  const primaryScale = useTransform(scrollYProgress, [0, 1], [1, 1.5])

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <motion.div
        className="absolute w-[120vw] h-[100vh] -left-[10vw] -top-[10vh]"
        style={{
          background: `radial-gradient(ellipse 100% 70% at 40% 50%, rgba(12, 142, 255, 0.15) 0%, rgba(159, 98, 237, 0.1) 50%, transparent 100%)`,
          scale: primaryScale,
          filter: "blur(100px)",
          opacity: primaryOpacity,
        }}
        animate={{
          x: [0, 50, -25, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 60,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 bg-background/20 backdrop-blur-[0.5px]" />
    </div>
  )
})

const ScrollToTopButton = memo(({ scrollYProgress }: { scrollYProgress: any }) => (
  <motion.div
    className="fixed bottom-8 right-8 z-50"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 2, duration: 0.3 }}
  >
    <motion.button
      className="w-11 h-11 bg-card/80 backdrop-blur-md border border-border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        className="w-4 h-4 text-muted-foreground mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  </motion.div>
))

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <main className="relative">
            <Suspense fallback={<LoadingSpinner />}>
              <HeroSection onNavigate={setCurrentPage} />
              <ProductSection />
              <AgentFlowSection />
              <WhyCoHyreSection onNavigate={setCurrentPage} />
              <SecurityComplianceSection />
              <Footer onNavigate={setCurrentPage} />
            </Suspense>
          </main>
        )
      case "comparison":
        return (
          <main className="relative">
            <Suspense fallback={<LoadingSpinner />}>
              <ComparisonPage />
              <Footer onNavigate={setCurrentPage} />
            </Suspense>
          </main>
        )
      case "pricing":
        return (
          <main className="relative pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <PricingPage />
              <Footer onNavigate={setCurrentPage} />
            </Suspense>
          </main>
        )
      case "about":
        return (
          <main className="relative pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <AboutPage />
              <Footer onNavigate={setCurrentPage} />
            </Suspense>
          </main>
        )
      case "resources":
        return (
          <main className="relative pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <KnowledgeBasePage />
              <Footer onNavigate={setCurrentPage} />
            </Suspense>
          </main>
        )
 
      case "press":
        return (
          <main className="relative pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <PressPage />
              <Footer onNavigate={setCurrentPage} />
            </Suspense>
          </main>
        )
      case "support":
        return (
          <main className="relative pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <SupportPage />
              <Footer onNavigate={setCurrentPage} />
            </Suspense>
          </main>
        )

      case "careers":
        return (
          <main className="relative pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <CareersPage />
              <Footer onNavigate={setCurrentPage} />
            </Suspense>
          </main>
        )

      case "terms":
        return (
          <main className="relative pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <TermsPage />
              <Footer onNavigate={setCurrentPage} />
            </Suspense>
          </main>
        )
      case "privacy":
        return (
          <main className="relative pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <PrivacyPage />
              <Footer onNavigate={setCurrentPage} />
            </Suspense>
          </main>
        )
      case "security":
        return (
          <main className="relative pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <SecurityPage />
              <Footer onNavigate={setCurrentPage} />
            </Suspense>
          </main>
        )
      case "cookies":
        return (
          <main className="relative pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <CookiePage />
              <Footer onNavigate={setCurrentPage} />
            </Suspense>
          </main>
        )
      case "roi-calculator":
        return (
          <main className="relative pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <ROICalculatorPage />
              <Footer onNavigate={setCurrentPage} />
            </Suspense>
          </main>
        )
      case "testimonials":
        return (
          <main className="relative">
            <Suspense fallback={<LoadingSpinner />}>
              <TestimonialsPage onNavigate={setCurrentPage} />
              <Footer onNavigate={setCurrentPage} />
            </Suspense>
          </main>
        )
      case "candidates":
        return (
          <main className="relative">
            <Suspense fallback={<LoadingSpinner />}>
              <CandidatesPage />
              <Footer onNavigate={setCurrentPage} />
            </Suspense>
          </main>
        )
      case "jobs":
        return (
          <main className="relative pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <JobsPage />
              <Footer onNavigate={setCurrentPage} />
            </Suspense>
          </main>
        )
      default:
        return renderPage()
    }
  }

  return (
    <ThemeProvider>
      <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-background text-foreground">
        <OptimizedBackground scrollYProgress={scrollYProgress} />

        <div className="relative z-10 min-h-screen">
          <Suspense fallback={<LoadingSpinner />}>
            <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
          </Suspense>
          {renderPage()}
        </div>

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              color: "hsl(var(--foreground))",
            },
          }}
        />

        <ScrollToTopButton scrollYProgress={scrollYProgress} />
      </div>
    </ThemeProvider>
  )
}
