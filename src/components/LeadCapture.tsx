import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "./ui/dialog";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { 
  Mail, 
  Phone, 
  Calendar, 
  Users, 
  Building, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Globe,
  BarChart3,
  PlayCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";

interface LeadForm {
  type: 'demo' | 'newsletter' | 'whitepaper' | 'contact' | 'early-access';
  title: string;
  description: string;
  fields: FormField[];
  cta: string;
  followUp?: string;
}

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'checkbox' | 'radio';
  required: boolean;
  options?: string[];
  placeholder?: string;
}

const leadForms: Record<string, LeadForm> = {
  demo: {
    type: 'demo',
    title: 'Book a Personalized Demo',
    description: 'See OrcHire in action with a tailored demo for your organization',
    cta: 'Schedule Demo',
    followUp: 'We\'ll reach out within 24 hours to schedule your demo',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Your full name' },
      { name: 'email', label: 'Work Email', type: 'email', required: true, placeholder: 'you@company.com' },
      { name: 'company', label: 'Company', type: 'text', required: true, placeholder: 'Your company name' },
      { name: 'role', label: 'Role', type: 'select', required: true, options: ['CHRO', 'VP Talent', 'Talent Lead', 'Head of Recruiting', 'Recruiter', 'HR Director', 'Other'] },
      { name: 'companySize', label: 'Company Size', type: 'select', required: true, options: ['1-50', '51-200', '201-1000', '1000-5000', '5000+'] },
      { name: 'hiringVolume', label: 'Monthly Hiring Volume', type: 'select', required: true, options: ['1-10', '11-50', '51-100', '100-500', '500+'] },
      { name: 'challenges', label: 'Primary Hiring Challenges', type: 'textarea', required: false, placeholder: 'What are your biggest hiring pain points?' },
      { name: 'timeline', label: 'Implementation Timeline', type: 'select', required: false, options: ['Immediate (1-30 days)', 'Short-term (1-3 months)', 'Medium-term (3-6 months)', 'Long-term (6+ months)', 'Just exploring'] }
    ]
  },
  
  'early-access': {
    type: 'early-access',
    title: 'Get Early Access',
    description: 'Be among the first to experience the future of hiring',
    cta: 'Request Early Access',
    followUp: 'You\'ll receive early access updates and beta invitations',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Your full name' },
      { name: 'email', label: 'Work Email', type: 'email', required: true, placeholder: 'you@company.com' },
      { name: 'company', label: 'Company', type: 'text', required: true, placeholder: 'Your company name' },
      { name: 'role', label: 'Role', type: 'select', required: true, options: ['CHRO', 'VP Talent', 'Talent Lead', 'Recruiter', 'HR Director', 'Other'] },
      { name: 'industry', label: 'Industry', type: 'select', required: true, options: ['Technology', 'BFSI', 'Media & Entertainment', 'Consulting', 'Healthcare', 'Manufacturing', 'Other'] },
      { name: 'interests', label: 'What interests you most?', type: 'textarea', required: false, placeholder: 'What specific features or capabilities are you most excited about?' }
    ]
  },

  newsletter: {
    type: 'newsletter',
    title: 'Stay Updated',
    description: 'Get the latest insights on AI-native hiring and industry trends',
    cta: 'Subscribe',
    followUp: 'You\'ll receive our weekly newsletter with exclusive insights',
    fields: [
      { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'Enter your email' },
      { name: 'interests', label: 'Content Interests', type: 'checkbox', required: false, options: ['Thought Leadership', 'Product Updates', 'Industry Reports', 'Case Studies', 'Event Invitations'] }
    ]
  },

  whitepaper: {
    type: 'whitepaper',
    title: 'Download Whitepaper',
    description: 'Get our comprehensive guide to autonomous hiring',
    cta: 'Download Now',
    followUp: 'Check your email for the download link',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Your full name' },
      { name: 'email', label: 'Work Email', type: 'email', required: true, placeholder: 'you@company.com' },
      { name: 'company', label: 'Company', type: 'text', required: true, placeholder: 'Your company name' },
      { name: 'role', label: 'Role', type: 'select', required: true, options: ['CHRO', 'VP Talent', 'Talent Lead', 'Recruiter', 'HR Director', 'Consultant', 'Other'] }
    ]
  },

  contact: {
    type: 'contact',
    title: 'Get in Touch',
    description: 'Have questions? We\'d love to hear from you',
    cta: 'Send Message',
    followUp: 'We\'ll get back to you within 24 hours',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Your full name' },
      { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'your@email.com' },
      { name: 'company', label: 'Company', type: 'text', required: false, placeholder: 'Your company (optional)' },
      { name: 'subject', label: 'Subject', type: 'select', required: true, options: ['General Inquiry', 'Product Demo', 'Partnership', 'Media Inquiry', 'Support', 'Other'] },
      { name: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'How can we help you?' }
    ]
  }
};

interface LeadCaptureFormProps {
  formType: keyof typeof leadForms;
  trigger?: React.ReactNode;
  inline?: boolean;
  compact?: boolean;
}

export function LeadCaptureForm({ formType, trigger, inline = false, compact = false }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const form = leadForms[formType];

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    form.fields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }

      if (field.type === 'email' && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          newErrors[field.name] = 'Please enter a valid email address';
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call to CRM/lead management system
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would integrate with your actual CRM:
      // - Salesforce
      // - HubSpot
      // - Pipedrive
      // - Custom backend API
      
      console.log('Lead captured:', { formType, data: formData });
      
      setIsSubmitted(true);
      toast.success(form.followUp || 'Thank you for your interest!');
      
      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({});
      }, 3000);

    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'select':
        return (
          <Select onValueChange={(value) => handleInputChange(field.name, value)}>
            <SelectTrigger>
              <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map(option => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'textarea':
        return (
          <Textarea
            placeholder={field.placeholder}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className="min-h-[100px]"
          />
        );

      case 'checkbox':
        return (
          <div className="space-y-2">
            {field.options?.map(option => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={`${field.name}-${option}`}
                  checked={formData[field.name]?.includes(option) || false}
                  onCheckedChange={(checked) => {
                    const currentValues = formData[field.name] || [];
                    if (checked) {
                      handleInputChange(field.name, [...currentValues, option]);
                    } else {
                      handleInputChange(field.name, currentValues.filter((v: string) => v !== option));
                    }
                  }}
                />
                <Label htmlFor={`${field.name}-${option}`} className="text-sm">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        );

      default:
        return (
          <Input
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
          />
        );
    }
  };

  const FormContent = () => (
    <AnimatePresence mode="wait">
      {!isSubmitted ? (
        <motion.form
          onSubmit={handleSubmit}
          className={`space-y-4 ${compact ? 'space-y-3' : 'space-y-4'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {form.fields.map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Label htmlFor={field.name} className={`block mb-2 ${compact ? 'text-sm' : ''}`}>
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </Label>
              {renderField(field)}
              {errors[field.name] && (
                <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: form.fields.length * 0.1 }}
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-white/80 backdrop-blur-sm text-purple-700 border-2 border-purple-300/50 hover:border-purple-400/70 hover:bg-white/90 ${
                compact ? 'py-2' : 'py-3'
              }`}
            >
              {isSubmitting ? (
                <motion.div
                  className="flex items-center"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Submitting...
                </motion.div>
              ) : (
                <span className="flex items-center justify-center">
                  {form.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              )}
            </Button>
          </motion.div>
        </motion.form>
      ) : (
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          </motion.div>
          <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
          <p className="text-gray-600">{form.followUp}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (inline) {
    return (
      <Card className={`p-6 bg-white/60 backdrop-blur-sm border border-gray-200/30 shadow-lg ${compact ? 'p-4' : 'p-6'}`}>
        <div className="mb-4">
          <h3 className={`font-semibold mb-2 ${compact ? 'text-lg' : 'text-xl'}`}>
            {form.title}
          </h3>
          <p className={`text-gray-600 ${compact ? 'text-sm' : ''}`}>
            {form.description}
          </p>
        </div>
        <FormContent />
      </Card>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-white/80 backdrop-blur-sm text-purple-700 border-2 border-purple-300/50 hover:border-purple-400/70 hover:bg-white/90">
            {form.cta}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{form.title}</DialogTitle>
          <DialogDescription>{form.description}</DialogDescription>
        </DialogHeader>
        <FormContent />
      </DialogContent>
    </Dialog>
  );
}

// Specialized lead capture components for different use cases
export function NewsletterSignup() {
  return (
    <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200/30 shadow-xl shadow-purple-500/10">
      <div className="mb-6">
        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-transparent shadow-lg"
             style={{
               backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #3B82F6, #8B5CF6, #06B6D4)',
               backgroundOrigin: 'border-box',
               backgroundClip: 'content-box, border-box'
             }}>
          <Mail 
            className="w-8 h-8"
            style={{
              background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #06B6D4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 4px rgba(139, 92, 246, 0.25))'
            }}
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">Stay Ahead of the Curve</h3>
        <p className="text-gray-600">
          Get weekly insights on the future of hiring, AI trends, and exclusive OrcHire updates.
        </p>
      </div>
      <LeadCaptureForm formType="newsletter" inline compact />
    </div>
  );
}

// Premium Minimal CTA Banner Component
interface CTABannerProps {
  onNavigate?: (page: string) => void;
}

export function CTABanner({ onNavigate }: CTABannerProps) {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-background/60 backdrop-blur-xl border border-border/20 shadow-lg p-12">
        {/* Subtle Glass Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/20 to-transparent" />
        
        {/* Minimal floating elements */}
        <motion.div
          className="absolute top-6 right-6 w-2 h-2 bg-[#0C8EFF]/40 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-[#9F62ED]/40 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Minimal performance indicators */}
        <div className="absolute top-4 left-4 text-xs text-muted-foreground/60">
          15m avg
        </div>
        <div className="absolute top-4 right-16 text-xs text-muted-foreground/60">
          94%
        </div>
        <div className="absolute bottom-4 right-4 text-xs text-muted-foreground/60">
          24/7
        </div>

        {/* Centered Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Subtle icon */}
          <motion.div
            className="w-12 h-12 bg-muted/50 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6 border border-border/30"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="w-5 h-5 text-foreground/70" />
          </motion.div>

          <motion.h3 
            className="text-2xl md:text-3xl font-medium text-foreground mb-3 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Experience AI-Native Hiring
          </motion.h3>
          
          <motion.p 
            className="text-base text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join industry leaders transforming talent acquisition with autonomous intelligence.
          </motion.p>

          {/* Minimal Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => onNavigate?.('videos')}
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl text-sm font-medium hover:bg-foreground/90 transition-all duration-300 shadow-sm"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <PlayCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              See AI Agents
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
            </motion.button>
            
            <motion.button
              onClick={() => onNavigate?.('roi-calculator')}
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-foreground border border-border/40 rounded-xl text-sm font-medium hover:bg-muted/50 hover:border-border/60 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <BarChart3 className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              Calculate ROI
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}