"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// @ts-ignore
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  ArrowRight,
  Send
} from "lucide-react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerSections = {
    about: [
      { label: "Our Story", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Partners", href: "/partners" }
    ],
    services: [
      { label: "AI Development", href: "/services/ai-development" },
      { label: "Web Solutions", href: "/services/web-solutions" },
      { label: "Automation", href: "/services/automation" },
      { label: "Integration", href: "/services/integration" },
      { label: "Consulting", href: "/services/consulting" }
    ],
    resources: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/api" },
      { label: "Tutorials", href: "/tutorials" },
      { label: "Blog", href: "/blog" },
      { label: "Support", href: "/support" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3B1D6B]/95 via-[#5D4E75]/90 to-[#4A6CF7]/95 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Subtle border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-16">


          {/* Bottom section with copyright */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Zertain. All rights reserved.
              </p>
              
              <div className="flex space-x-6">
                <a
                  href="https://www.zertain.com/privacy-policy" target="_blank"
                  className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                {/* <a
                  href="/terms"
                  className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="/cookies"
                  className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                >
                  Cookie Policy
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#7B68EE]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#4A6CF7]/10 rounded-full blur-3xl" />
    </footer>
  );
};