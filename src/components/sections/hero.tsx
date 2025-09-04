"use client";
// @ts-ignore
import { Sparkles, Zap, Rocket, ArrowRight, CheckCircle, Users, Award, TrendingUp, AlertCircle } from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const HeroSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Client-side validation
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone) {
      const phoneRegex = /^[\d\s+()-]+$/;
      if (!phoneRegex.test(formData.phone)) {
        errors.phone = 'Please enter a valid phone number';
      }
    }
    
    if (formData.message && formData.message.length > 500) {
      errors.message = `Message too long (${formData.message.length}/500 characters)`;
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }

    // Clear general submit status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/hubspot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you! We\'ll contact you soon.'
        });
        
        // Clear form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setFormErrors({});
      } else {
        // Handle validation errors from server
        if (data.errors) {
          setFormErrors(data.errors);
        }
        
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
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

                {/* Status Messages */}
                {submitStatus.type && (
                  <div className={`mb-4 p-4 rounded-xl flex items-start space-x-2 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/20 text-green-100 border border-green-400/30' 
                      : 'bg-red-500/20 text-red-100 border border-red-400/30'
                  }`}>
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    )}
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-white/10 backdrop-blur-sm border rounded-xl px-4 py-3 text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 ${
                        formErrors.name ? 'border-red-400/50' : 'border-white/20'
                      }`}
                      disabled={isSubmitting}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs text-red-300">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-white/10 backdrop-blur-sm border rounded-xl px-4 py-3 text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 ${
                          formErrors.email ? 'border-red-400/50' : 'border-white/20'
                        }`}
                        disabled={isSubmitting}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-xs text-red-300">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full bg-white/10 backdrop-blur-sm border rounded-xl px-4 py-3 text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 ${
                          formErrors.phone ? 'border-red-400/50' : 'border-white/20'
                        }`}
                        disabled={isSubmitting}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-xs text-red-300">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full bg-white/10 backdrop-blur-sm border rounded-xl px-4 py-3 text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 resize-none ${
                        formErrors.message ? 'border-red-400/50' : 'border-white/20'
                      }`}
                      disabled={isSubmitting}
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-xs text-red-300">{formErrors.message}</p>
                    )}
                    {formData.message && (
                      <p className="mt-1 text-xs text-purple-200 text-right">
                        {formData.message.length}/500 characters
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Start Your Project</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
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