import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

export interface FooterLink {
  name: string;
  href: string;
  action?: () => void;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  icon: any;
  href: string;
  color: string;
}

export interface ContactInfo {
  icon: any;
  text: string;
  href: string;
}

export const getFooterSections = (onNavigate?: (page: string) => void): FooterSection[] => [
  {
    title: "Platform",
    links: [
      { name: "AI Agent Network", href: "#", action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
      { name: "ROI Calculator", href: "#", action: () => onNavigate?.("roi-calculator") },
      { name: "Pricing Plans", href: "#", action: () => onNavigate?.("pricing") },
      { name: "Product Demo", href: "#", action: () => onNavigate?.("contact") },
      { name: "Enterprise Solutions", href: "#", action: () => onNavigate?.("contact") }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About CoHyre", href: "#", action: () => onNavigate?.("about") },
      { name: "Leadership Team", href: "#", action: () => onNavigate?.("leadership") },
      { name: "Careers", href: "#", action: () => onNavigate?.("careers") },
      { name: "Press & Media Coverage", href: "#", action: () => onNavigate?.("press") }
    ]
  },
  {
    title: "Resources", 
    links: [
      { name: "Resources & Insights", href: "#", action: () => onNavigate?.("resources") },
      { name: "Research & Whitepapers", href: "#", action: () => onNavigate?.("research") },
      { name: "Videos & Webinars", href: "#", action: () => onNavigate?.("videos") },
      { name: "Implementation Guide", href: "#", action: () => onNavigate?.("resources") }
    ]
  },
  {
    title: "Support",
    links: [
      { name: "How To Use?", href: "#", action: () => onNavigate?.("support") },
      { name: "Contact Support", href: "#", action: () => onNavigate?.("contact") },
      { name: "Talk To Sales", href: "#", action: () => onNavigate?.("contact") },
      { name: "API Documentation", href: "#", action: () => onNavigate?.("support") }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "User Terms", href: "#", action: () => onNavigate?.("terms") },
      { name: "Privacy Policy", href: "#", action: () => onNavigate?.("privacy") },
      { name: "Security Policy", href: "#", action: () => onNavigate?.("security") },
      { name: "Cookie Policy", href: "#", action: () => onNavigate?.("cookies") }
    ]
  }
];

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "from-blue-600 to-blue-700" },
  { name: "Twitter", icon: Twitter, href: "#", color: "from-sky-500 to-sky-600" },
  { name: "YouTube", icon: Youtube, href: "#", color: "from-red-500 to-red-600" },
  { name: "Instagram", icon: Instagram, href: "#", color: "from-pink-500 to-purple-600" }
];

export const contactInfo: ContactInfo[] = [
  { icon: Mail, text: "hello@cohyre.ai", href: "mailto:hello@cohyre.ai" },
  { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, text: "San Francisco, CA", href: "#" }
];