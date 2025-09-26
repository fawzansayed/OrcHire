import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Lock, Eye, EyeOff, Shield, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface AdminAuthProps {
  onAuthenticated: () => void;
}

export function AdminAuth({ onAuthenticated }: AdminAuthProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);

  // Simple admin password - in production, this would be handled by proper backend auth
  const ADMIN_PASSWORD = "orchire_admin_2024";
  const MAX_ATTEMPTS = 3;

  useEffect(() => {
    // Check if already authenticated
    const isAuthenticated = localStorage.getItem("orchire_admin_auth") === "true";
    if (isAuthenticated) {
      onAuthenticated();
    }
  }, [onAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (attempts >= MAX_ATTEMPTS) {
      toast.error("Too many failed attempts. Please wait before trying again.");
      return;
    }

    setIsLoading(true);

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("orchire_admin_auth", "true");
      toast.success("Admin access granted");
      onAuthenticated();
    } else {
      setAttempts(prev => prev + 1);
      setPassword("");
      toast.error(`Invalid credentials. ${MAX_ATTEMPTS - attempts - 1} attempts remaining.`);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 bg-[#0C8EFF]/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <Shield className="w-8 h-8 text-[#0C8EFF]" />
          </motion.div>
          
          <h1 className="text-2xl font-semibold mb-2">Admin Access</h1>
          <p className="text-muted-foreground">
            Enter admin credentials to access the Knowledge Base CMS
          </p>
        </div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-8"
        >
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Admin Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full pl-10 pr-12 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C8EFF]/20 focus:border-[#0C8EFF]/50 transition-all duration-200"
                  disabled={isLoading || attempts >= MAX_ATTEMPTS}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Warning for multiple attempts */}
            {attempts > 0 && attempts < MAX_ATTEMPTS && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 p-3 bg-yellow-50/50 dark:bg-yellow-950/20 border border-yellow-200/50 dark:border-yellow-800/50 rounded-lg"
              >
                <AlertCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  {attempts} failed attempt{attempts > 1 ? 's' : ''}. {MAX_ATTEMPTS - attempts} remaining.
                </p>
              </motion.div>
            )}

            {/* Lockout message */}
            {attempts >= MAX_ATTEMPTS && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 p-3 bg-red-50/50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-800/50 rounded-lg"
              >
                <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0" />
                <p className="text-sm text-red-800 dark:text-red-200">
                  Access temporarily locked due to multiple failed attempts.
                </p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading || attempts >= MAX_ATTEMPTS || !password.trim()}
              className="w-full py-3 bg-[#0C8EFF] text-white rounded-lg font-medium hover:bg-[#0C8EFF]/90 focus:outline-none focus:ring-2 focus:ring-[#0C8EFF]/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Authenticating...
                </>
              ) : (
                "Access CMS"
              )}
            </button>
          </form>

          {/* Demo credentials note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 p-4 bg-muted/30 rounded-lg"
          >
            <p className="text-xs text-muted-foreground text-center">
              <span className="font-medium">Demo Environment:</span> This is a demonstration of admin authentication.
              <br />
              In production, this would integrate with your actual authentication system.
            </p>
          </motion.div>
        </motion.div>

        {/* Back to home */}
        <div className="text-center mt-6">
          <button
            onClick={() => window.location.reload()}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            ← Back to Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// Admin logout function
export const logoutAdmin = () => {
  localStorage.removeItem("orchire_admin_auth");
  toast.success("Logged out successfully");
  window.location.reload();
};

// Check if user is admin
export const isAdmin = () => {
  return localStorage.getItem("orchire_admin_auth") === "true";
};