"use client";
// @ts-ignore
import { Brain, Globe, Smartphone, BarChart3, Cloud, Users } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Development",
      description: "Custom AI solutions that automate processes, enhance decision-making, and drive innovation across your organization.",
      color: "text-pink-400"
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.",
      color: "text-blue-400"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that engage users and extend your business reach on all devices.",
      color: "text-purple-400"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization solutions.",
      color: "text-green-400"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services that optimize performance while reducing operational costs.",
      color: "text-cyan-400"
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Strategic technology consulting to align your digital transformation goals with business objectives.",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#3B1D6B] via-[#5D4E75] to-[#4A6CF7] relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Glass morphism overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <feature.icon className={`w-8 h-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Subtle shine effect on hover */}
                <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-400/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
      </div>
    </section>
  );
};