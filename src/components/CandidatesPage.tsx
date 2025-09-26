import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  ArrowRight,
  CheckCircle,
  Shield,
  Sparkles,
  Upload,
  FileText,
  Linkedin,
  Play,
  Zap
} from "lucide-react";

export function CandidatesPage() {
  const [authStep, setAuthStep] = useState<'landing' | 'linkedin' | 'upload' | 'dashboard'>('landing');
  const [uploadedCV, setUploadedCV] = useState(false);

  const handleLinkedInAuth = () => {
    // Simulate LinkedIn OAuth flow
    setAuthStep('linkedin');
    // After LinkedIn auth, show CV upload
    setTimeout(() => {
      setAuthStep('upload');
    }, 2000);
  };

  const handleCVUpload = () => {
    setUploadedCV(true);
    // After CV upload, go to dashboard
    setTimeout(() => {
      setAuthStep('dashboard');
    }, 1500);
  };



  if (authStep === 'linkedin') {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 rounded-full flex items-center justify-center">
            <Linkedin className="w-10 h-10 text-[#0077B5]" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Connecting to LinkedIn</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            We're securely connecting to your LinkedIn profile to personalize your interview experience.
          </p>
          <div className="flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-[#0C8EFF] border-t-transparent rounded-full"
            />
          </div>
        </motion.div>
      </div>
    );
  }

  if (authStep === 'upload') {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >
          <Card className="p-12 text-center bg-card/80 backdrop-blur-xl border-border/50 shadow-2xl">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 rounded-full flex items-center justify-center">
              <Upload className="w-10 h-10 text-[#0C8EFF]" />
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4">Upload Your CV</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Upload your CV so our AI can provide personalized interview questions relevant to your experience and target roles.
            </p>

            {!uploadedCV ? (
              <motion.div
                className="border-2 border-dashed border-border/50 rounded-xl p-12 mb-8 hover:border-[#0C8EFF]/50 transition-colors cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                onClick={handleCVUpload}
              >
                <FileText className="w-12 h-12 text-muted-foreground group-hover:text-[#0C8EFF] mx-auto mb-4 transition-colors" />
                <p className="text-foreground font-medium mb-2">Click to upload your CV</p>
                <p className="text-sm text-muted-foreground">PDF, DOC, or DOCX • Max 5MB</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 mb-8"
              >
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <p className="text-foreground font-medium mb-2">CV Uploaded Successfully!</p>
                <p className="text-sm text-muted-foreground">Analyzing your profile for personalized interviews...</p>
              </motion.div>
            )}

            <Button
              onClick={handleCVUpload}
              disabled={!uploadedCV}
              className="h-14 px-8 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-white rounded-full border border-white/20 shadow-lg disabled:opacity-50"
            >
              {uploadedCV ? "Continue to Dashboard" : "Upload CV First"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </motion.div>
      </div>
    );
  }

  if (authStep === 'dashboard') {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Welcome to OrcHire!</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Your profile is ready. Start practicing with AI interviews tailored to your experience.
          </p>
          <Button
            className="h-14 px-8 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-white rounded-full border border-white/20 shadow-lg"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Your First AI Interview
          </Button>
        </motion.div>
      </div>
    );
  }

  // Landing Page
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1698047681452-08eba22d0c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGludGVydmlldyUyMGNvbmZpZGVuY2UlMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNzU2NDUwMDg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional woman in interview setting showing confidence"
            className="w-full h-full object-cover"
          />
          
          {/* Multi-layer overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C8EFF]/5 via-transparent to-[#9F62ED]/5" />
        </div>

        {/* Centered Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0C8EFF]/10 to-[#9F62ED]/10 px-6 py-3 rounded-full border border-[#0C8EFF]/20 mb-12 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-[#0C8EFF]" />
              <span className="text-sm font-medium text-foreground">AI-Powered Interview Coaching</span>
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              Land Your Dream Job with
              <br />
              <span className="bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent">
                Confidence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
              Practice unlimited AI interviews, get personalized feedback, and connect directly with top companies. 
              Transform your interview anxiety into unshakeable confidence.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Badge className="bg-green-500/10 text-green-600 border-green-500/20 px-4 py-2 backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                100% Free for Candidates
              </Badge>
              <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20 px-4 py-2 backdrop-blur-sm">
                <Shield className="w-4 h-4 mr-2" />
                LinkedIn Verified Only
              </Badge>
              <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/20 px-4 py-2 backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2" />
                Instant Access
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleLinkedInAuth}
                  className="h-16 px-10 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-white rounded-full border-2 border-transparent shadow-2xl text-lg font-medium relative overflow-hidden group"
                >
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-sm" />
                  <div className="relative flex items-center">
                    <Linkedin className="w-6 h-6 mr-3" />
                    Start Free AI Interview
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="h-16 px-10 rounded-full border-2 border-border/50 hover:border-[#0C8EFF]/50 text-lg font-medium bg-background/80 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-3" />
                  Watch Demo
                </Button>
              </motion.div>
            </div>

            <p className="text-sm text-muted-foreground">
              🔒 Secure LinkedIn authentication • No passwords required • Join 50,000+ candidates
            </p>
          </motion.div>
        </div>
      </section>


    </div>
  );
}