"use client";

import { Sparkles, Zap, Rocket, ArrowRight, CheckCircle, Users, Award, TrendingUp } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-pink-400/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-pulse"></div>
      </div>

      <div className="relative z-10 pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Top Banner */}
          <div className="mb-16 flex justify-center">
            <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20 shadow-lg">
              <div className="flex items-center space-x-3">
                <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse" />
                <p className="text-center text-sm md:text-base font-medium text-white">
                  🚀 Explore AI-Driven Web Solutions for Your Business! Start with a Free Consultation.
                </p>
                <ArrowRight className="h-4 w-4 text-white animate-pulse" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Main Content */}
            <div className="lg:col-span-7 text-white space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Transform Your Business with 
                  <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    AI-Powered Solutions
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-purple-100 leading-relaxed max-w-2xl">
                  Accelerate growth with enterprise-grade AI development. From intelligent automation to advanced analytics, we build solutions that deliver measurable results.
                </p>
              </div>

              {/* Feature Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">AI Automation</h3>
                    <p className="text-sm text-purple-200">Automate complex workflows and boost productivity</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Smart Analytics</h3>
                    <p className="text-sm text-purple-200">Data-driven insights for better decisions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <Rocket className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Rapid Deployment</h3>
                    <p className="text-sm text-purple-200">Launch faster with our proven frameworks</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Enterprise Grade</h3>
                    <p className="text-sm text-purple-200">Scalable, secure, and reliable solutions</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-purple-200">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-purple-200">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-purple-200">Support Available</div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-purple-200 text-sm">
                    Let's discuss your project and explore how we can help transform your business.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-center space-x-6 text-sm text-purple-200">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>No Commitment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;