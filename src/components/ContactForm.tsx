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
import { toast } from "sonner@2.0.3";

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
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-foreground mb-1">Get Started</h3>
        <p className="text-sm text-muted-foreground">Book a demo to see OrcHire.ai in action</p>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
        {/* Essential fields only */}
        <div>
          <Label htmlFor="companyName" className="text-sm text-foreground mb-1.5 block">
            Company Name *
          </Label>
          <Input
            id="companyName"
            type="text"
            required
            value={formData.companyName}
            onChange={(e) => handleInputChange("companyName", e.target.value)}
            placeholder="Your company name"
            className="bg-background/50 border-border/50 focus:border-border h-10"
          />
        </div>

        <div>
          <Label htmlFor="companyEmail" className="text-sm text-foreground mb-1.5 block">
            Work Email *
          </Label>
          <Input
            id="companyEmail"
            type="email"
            required
            value={formData.companyEmail}
            onChange={(e) => handleInputChange("companyEmail", e.target.value)}
            placeholder="name@company.com"
            className="bg-background/50 border-border/50 focus:border-border h-10"
          />
        </div>

        <div>
          <Label htmlFor="yourName" className="text-sm text-foreground mb-1.5 block">
            Your Name *
          </Label>
          <Input
            id="yourName"
            type="text"
            required
            value={formData.yourName}
            onChange={(e) => handleInputChange("yourName", e.target.value)}
            placeholder="Your full name"
            className="bg-background/50 border-border/50 focus:border-border h-10"
          />
        </div>

        <div>
          <Label htmlFor="teamSize" className="text-sm text-foreground mb-1.5 block">
            Company Size *
          </Label>
          <select
            id="teamSize"
            required
            value={formData.teamSize}
            onChange={(e) => handleInputChange("teamSize", e.target.value)}
            className="w-full h-10 px-3 bg-background/50 border border-border/50 rounded-md focus:border-border focus:outline-none text-sm"
          >
            <option value="">Select company size</option>
            {teamSizeOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Simple consent */}
        <div className="flex items-start gap-3 mt-2">
          <Checkbox
            id="consent"
            checked={formData.consent}
            //@ts-ignore
            onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
            className="mt-0.5"
          />
          <Label 
            htmlFor="consent" 
            className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
          >
            I agree to receive product updates and marketing communications from OrcHire.ai
          </Label>
        </div>

        {/* Submit Button */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="mt-6"
        >
<div className="w-full p-[1px] bg-gradient-to-r from-[#0C8EFF]/60 via-[#9F62ED]/60 to-[#0C8EFF]/60 rounded-xl shadow-lg">
            <Button
              type="submit"
              disabled={isSubmitting || !formData.consent}
              className="w-full bg-background/80 backdrop-blur-xl text-foreground hover:bg-background/90 hover:text-[#0C8EFF] h-11 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 border-0 rounded-xl"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                  Booking Demo...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Book Demo
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </Button>
          </div>
        </motion.div>
      </form>

      {/* Simple contact info */}
      <div className="mt-6 pt-4 border-t border-border/20 text-center">
        <p className="text-xs text-muted-foreground">
          Questions? Contact us at <span className="font-medium text-foreground">sales@orchire.ai</span>
        </p>
      </div>
    </div>
  );
}