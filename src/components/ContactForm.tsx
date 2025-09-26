import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { 
  Mail, 
  Building, 
  User, 
  Users, 
  MessageSquare,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    yourName: "",
    interest: "",
    teamSize: "",
    message: "",
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions = [
    "AI-Powered Hiring Platform",
    "Multi-Agent Automation",
    "Enterprise Solutions", 
    "Integration & API",
    "Custom Implementation",
    "General Inquiry"
  ];

  const teamSizeOptions = [
    "1-10 employees",
    "11-50 employees", 
    "51-200 employees",
    "201-1000 employees",
    "1000+ employees"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error("Please accept the terms to continue");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      companyName: "",
      companyEmail: "",
      yourName: "",
      interest: "",
      teamSize: "",
      message: "",
      consent: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="p-6 bg-background/40 backdrop-blur-xl border border-border/30 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-foreground">Get in Touch</h3>
          <p className="text-sm text-muted-foreground">Let's discuss your hiring needs</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Company Name */}
        <div>
          <Label htmlFor="companyName" className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
            <Building className="w-4 h-4" />
            Company Name *
          </Label>
          <Input
            id="companyName"
            type="text"
            required
            value={formData.companyName}
            onChange={(e) => handleInputChange("companyName", e.target.value)}
            placeholder="Your company name"
            className="bg-background/50 border-border/50 focus:border-border"
          />
        </div>

        {/* Company Email */}
        <div>
          <Label htmlFor="companyEmail" className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Company Email *
          </Label>
          <Input
            id="companyEmail"
            type="email"
            required
            value={formData.companyEmail}
            onChange={(e) => handleInputChange("companyEmail", e.target.value)}
            placeholder="company@example.com"
            className="bg-background/50 border-border/50 focus:border-border"
          />
        </div>

        {/* Your Name */}
        <div>
          <Label htmlFor="yourName" className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
            <User className="w-4 h-4" />
            Your Name *
          </Label>
          <Input
            id="yourName"
            type="text"
            required
            value={formData.yourName}
            onChange={(e) => handleInputChange("yourName", e.target.value)}
            placeholder="Your full name"
            className="bg-background/50 border-border/50 focus:border-border"
          />
        </div>

        {/* Interest */}
        <div>
          <Label htmlFor="interest" className="text-sm font-medium text-foreground mb-2">
            What are you interested to explore? *
          </Label>
          <select
            id="interest"
            required
            value={formData.interest}
            onChange={(e) => handleInputChange("interest", e.target.value)}
            className="w-full p-3 bg-background/50 border border-border/50 rounded-lg focus:border-border focus:outline-none text-sm"
          >
            <option value="">Select an option</option>
            {interestOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Team Size */}
        <div>
          <Label htmlFor="teamSize" className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Team Size *
          </Label>
          <select
            id="teamSize"
            required
            value={formData.teamSize}
            onChange={(e) => handleInputChange("teamSize", e.target.value)}
            className="w-full p-3 bg-background/50 border border-border/50 rounded-lg focus:border-border focus:outline-none text-sm"
          >
            <option value="">Select team size</option>
            {teamSizeOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2">
            Additional Message (Optional)
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder="Tell us more about your hiring challenges or specific requirements..."
            className="bg-background/50 border-border/50 focus:border-border min-h-[100px]"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg border border-border/20">
          <Checkbox
            id="consent"
            checked={formData.consent}
            //@ts-ignore
            onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
            className="mt-1"
          />
          <div className="flex-1">
            <Label 
              htmlFor="consent" 
              className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
            >
              I consent to receive calls, emails, and other marketing materials from CoHyre.ai. 
              I understand I can unsubscribe at any time. By submitting this form, I agree to 
              CoHyre.ai's Privacy Policy and Terms of Service.
            </Label>
          </div>
        </div>

        {/* Submit Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            disabled={isSubmitting || !formData.consent}
            className="w-full bg-foreground text-background hover:bg-foreground/90 shadow-lg py-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                Submitting...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                Send Message
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </Button>
        </motion.div>
      </form>

      {/* Contact Info */}
      <div className="mt-6 pt-6 border-t border-border/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-muted/30 flex items-center justify-center">
              <Mail className="w-4 h-4 text-foreground/80" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-foreground">sales@cohyre.ai</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-muted/30 flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Response Time</p>
              <p className="text-sm font-medium text-foreground">Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}