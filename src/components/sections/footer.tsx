"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
          {/* Main footer content */}
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12 mb-12">
            
            {/* Company branding section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  <span className="bg-gradient-to-r from-[#7B68EE] to-[#4A6CF7] bg-clip-text text-transparent">
                    Zertain
                  </span>
                </h3>
                <p className="text-white/70 text-sm font-medium">
                  automate integrate manage
                </p>
              </div>
              
              <p className="text-white/80 text-sm leading-relaxed">
                Drive real business results with enterprise-ready AI development solutions. 
                Transform your operations with cutting-edge automation and integration.
              </p>

              {/* Social media links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group border border-white/10"
                  >
                    <social.icon className="w-4 h-4 group-hover:animate-pulse" />
                  </a>
                ))}
              </div>
            </div>

            {/* About section */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">About</h4>
              <ul className="space-y-3">
                {footerSections.about.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-flex items-center group"
                    >
                      {link.label}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services section */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-3">
                {footerSections.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-flex items-center group"
                    >
                      {link.label}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources section */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Resources</h4>
              <ul className="space-y-3">
                {footerSections.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-flex items-center group"
                    >
                      {link.label}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter section */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              
              {/* Contact information */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#7B68EE] mt-0.5 flex-shrink-0" />
                  <p className="text-white/70 text-sm">
                    123 Innovation Drive<br />
                    Tech City, TC 12345
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#7B68EE] flex-shrink-0" />
                  <a href="tel:+1234567890" className="text-white/70 hover:text-white text-sm transition-colors duration-300">
                    +1 (234) 567-8900
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#7B68EE] flex-shrink-0" />
                  <a href="mailto:hello@zertain.com" className="text-white/70 hover:text-white text-sm transition-colors duration-300">
                    hello@zertain.com
                  </a>
                </div>
              </div>

              {/* Newsletter signup */}
              <div className="space-y-4">
                <h5 className="text-sm font-medium text-white">Stay Updated</h5>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#7B68EE] focus:ring-[#7B68EE] backdrop-blur-sm h-11"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#7B68EE] to-[#4A6CF7] hover:from-[#8A7AEE] hover:to-[#5A7CF7] text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 h-11"
                    disabled={isSubscribed}
                  >
                    {isSubscribed ? (
                      "Subscribed!"
                    ) : (
                      <>
                        Subscribe
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
                {isSubscribed && (
                  <p className="text-green-400 text-xs animate-fade-in">
                    Thank you for subscribing!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Bottom section with copyright */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Zertain. All rights reserved.
              </p>
              
              <div className="flex space-x-6">
                <a
                  href="/privacy"
                  className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
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
                </a>
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