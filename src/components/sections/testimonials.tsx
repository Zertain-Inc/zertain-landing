"use client";

import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CTO",
      company: "TechNova Solutions",
      image: "/api/placeholder/80/80",
      rating: 5,
      testimonial: "The AI-driven automation solutions delivered by this team have revolutionized our workflow efficiency. We've seen a 40% reduction in processing time and significant cost savings across all departments."
    },
    {
      name: "Marcus Rodriguez",
      title: "VP of Engineering",
      company: "DataFlow Systems",
      image: "/api/placeholder/80/80",
      rating: 5,
      testimonial: "Outstanding technical expertise and seamless integration. Their enterprise-ready AI development approach helped us scale our operations while maintaining the highest security standards. Truly exceptional work."
    },
    {
      name: "Emily Thompson",
      title: "Head of Innovation",
      company: "CloudTech Dynamics",
      image: "/api/placeholder/80/80",
      rating: 5,
      testimonial: "From consultation to deployment, the entire process was smooth and professional. The AI solutions have transformed our business intelligence capabilities and delivered measurable ROI within just three months."
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-blue-600/20" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover how leading companies are transforming their operations with our AI-driven solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="p-8 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-purple-300 opacity-80" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-white/90 text-lg leading-relaxed mb-8 flex-grow">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Star Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  {/* Avatar Placeholder */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl border-2 border-white/20">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-purple-200 text-sm">
                      {testimonial.title}
                    </p>
                    <p className="text-white/70 text-sm font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/80 text-lg mb-6">
            Ready to join our satisfied clients?
          </p>
          <div className="inline-flex items-center space-x-4">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200" />
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl" />
    </section>
  );
};