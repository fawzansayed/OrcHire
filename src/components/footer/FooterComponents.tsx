import { motion } from "motion/react";
import { FooterLink, SocialLink, ContactInfo } from "./FooterData";

interface FooterLinkComponentProps {
  link: FooterLink;
  index: number;
  onLinkClick: (link: FooterLink) => void;
}

export function FooterLinkComponent({ link, onLinkClick }: FooterLinkComponentProps) {
  return (
    <li>
      <button
        onClick={() => onLinkClick(link)}
        className="text-xs text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-200 text-left block"
      >
        {link.name}
      </button>
    </li>
  );
}

interface SocialIconProps {
  social: SocialLink;
  index: number;
}

export function SocialIcon({ social }: SocialIconProps) {
  const Icon = social.icon;
  
  return (
    <a
      href={social.href}
      className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
      aria-label={social.name}
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}

interface ContactItemProps {
  contact: ContactInfo;
  index: number;
}

export function ContactItem({ contact }: ContactItemProps) {
  const Icon = contact.icon;
  
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-3 h-3 text-gray-400" />
      <span className="text-xs text-gray-600">{contact.text}</span>
    </div>
  );
}

export function NewsletterSection() {
  return (
    <div className="border-t border-gray-200 pt-8 mb-8">
      <div className="max-w-lg">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">
          Stay updated
        </h4>
        <p className="text-xs text-gray-600 mb-4">
          Get the latest insights on AI-powered hiring and recruitment trends.
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 text-xs bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          />
          <button className="px-4 py-2 text-xs font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}