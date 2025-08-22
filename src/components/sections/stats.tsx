"use client";

import React, { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Award, Calendar } from 'lucide-react';

interface StatisticItemProps {
  icon: React.ReactNode;
  number: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatisticItem: React.FC<StatisticItemProps> = ({ 
  icon, 
  number, 
  label, 
  suffix = "", 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`stat-${label.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startCount = 0;
    const endCount = number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startCount + (endCount - startCount) * easeOutQuart);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, number, duration]);

  return (
    <Card 
      id={`stat-${label.replace(/\s+/g, '-').toLowerCase()}`}
      className="group relative overflow-hidden p-8 bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-2xl"></div>
      </div>
      
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white transform group-hover:rotate-12 transition-transform duration-500">
          {icon}
        </div>
        
        {/* Counter */}
        <div className="mb-2">
          <span className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
            {count.toLocaleString()}
          </span>
          <span className="text-4xl md:text-5xl font-bold text-purple-300">
            {suffix}
          </span>
        </div>
        
        {/* Label */}
        <p className="text-lg font-medium text-white/90 group-hover:text-white transition-colors duration-300">
          {label}
        </p>
        
        {/* Animated underline */}
        <div className="mt-3 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping [animation-delay:100ms]"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping [animation-delay:300ms]"></div>
        <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping [animation-delay:500ms]"></div>
      </div>
    </Card>
  );
};

export const StatisticsSection: React.FC = () => {
  const statistics = [
    {
      icon: <Award className="w-8 h-8" />,
      number: 250,
      label: "Projects Completed",
      suffix: "+",
      duration: 2500
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: 98,
      label: "Client Satisfaction Rate",
      suffix: "%",
      duration: 2200
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: 8,
      label: "Years of Experience",
      suffix: "+",
      duration: 1800
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: 45,
      label: "Team Members",
      suffix: "+",
      duration: 2000
    }
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background with enhanced patterns */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900"></div>
        
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20 animate-pulse"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white/20 rounded-full animate-spin"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full animate-reverse-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full"></div>
        </div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-xl [animation-delay:1s] animate-bounce"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <TrendingUp className="w-5 h-5 mr-2 text-purple-300" />
            <span className="text-sm font-medium text-white/90">Our Achievements</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Impressive Numbers That
            <span className="block bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover the measurable impact we've made across projects, client relationships, 
            and team excellence over the years.
          </p>
        </div>
        
        {/* Statistics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 [animation-delay:150ms] animate-in slide-in-from-bottom-4"
              style={{ 
                animationDelay: `${index * 150}ms`
              }}
            >
              <StatisticItem {...stat} />
            </div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="mt-20 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};