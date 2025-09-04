'use client';

import Link from 'next/link';
// @ts-ignore
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 backdrop-blur-sm bg-white/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
           <img src="/headerlogo.png" alt="logo"></img>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">
              About Us
            </Link>
            <div className="group relative">
              <button className="flex items-center text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">
                Services
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
            </div>
            <Link href="#metrics" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">
              Metrics
            </Link>
            <div className="group relative">
              <button className="flex items-center text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">
                Resources
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
            </div>
            <Link href="#faq" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">
              FAQ
            </Link>
          </nav> */}

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => window.open('https://zertain.com', '_blank')} className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-200 border border-white/20">
              Visit Zertain
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <Link href="#about" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">
                About Us
              </Link>
              <Link href="#services" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">
                Services
              </Link>
              <Link href="#metrics" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">
                Metrics
              </Link>
              <Link href="#resources" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">
                Resources
              </Link>
              <Link href="#faq" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">
                FAQ
              </Link>
              <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-200 border border-white/20 w-fit">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;