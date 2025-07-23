'use client';
import React from 'react';
import { Sparkles, ShieldCheck, Clock, BarChart3, Star, Award, Users, Target } from 'lucide-react';

export default function AboutSection() {
  return (
    <>
      {/* About Us Section with Enhanced Design */}
      <section id="about" className="relative isolate overflow-hidden py-24 sm:py-32">
        {/* Enhanced gradient background with animated elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-600 via-emerald-600 to-purple-600 opacity-20"></div>
          {/* Floating geometric elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-sky-400/10 to-emerald-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/5 to-sky-400/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6">
          {/* Enhanced Header Section */}
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-sm font-medium">
              <Star className="w-4 h-4" />
              About Luxury 1 Living
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Elevating Cleanliness to an{' '}
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Art Form
              </span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              At Luxury 1 Living, we believe cleanliness is an experience not just a result. Our mission is to elevate businesses and professional spaces across Greater Houston through detail-driven, white glove service that leaves a lasting impression.
            </p>
          </div>

          {/* Stats Cards - Enhanced Design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-sky-400/30 hover:-translate-y-1">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-400 mb-2">20+</div>
                <div className="text-sm text-slate-300 font-medium">Years Experience</div>
              </div>
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Award className="w-6 h-6 text-sky-400" />
              </div>
            </div>
            
            <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-emerald-400/30 hover:-translate-y-1">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">1000+</div>
                <div className="text-sm text-slate-300 font-medium">Properties Served</div>
              </div>
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Target className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
            
            <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-purple-400/30 hover:-translate-y-1">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-sm text-slate-300 font-medium">Team Members</div>
              </div>
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            
            <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-pink-400/30 hover:-translate-y-1">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">98%</div>
                <div className="text-sm text-slate-300 font-medium">Satisfaction Rate</div>
              </div>
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Star className="w-6 h-6 text-pink-400" />
              </div>
            </div>
          </div>

          {/* Core Values Section - Redesigned */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-sky-400/10 to-sky-400/5 border border-sky-400/20 transition-all duration-300 hover:bg-sky-400/15 hover:border-sky-400/40 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-sky-400/20 text-sky-400 ring-1 ring-inset ring-sky-400/30 transition-colors group-hover:bg-sky-400/30">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">Craftsmanship</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We treat every property as a showcase, perfecting even the smallest details—because true luxury is felt, not just seen.
              </p>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="w-5 h-5 text-sky-400" />
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-emerald-400/10 to-emerald-400/5 border border-emerald-400/20 transition-all duration-300 hover:bg-emerald-400/15 hover:border-emerald-400/40 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-emerald-400/20 text-emerald-400 ring-1 ring-inset ring-emerald-400/30 transition-colors group-hover:bg-emerald-400/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">Health-First</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We use hospital-grade disinfectants and eco-certified solutions, ensuring a safe, healthy environment for your staff and guests.
              </p>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-400/10 to-purple-400/5 border border-purple-400/20 transition-all duration-300 hover:bg-purple-400/15 hover:border-purple-400/40 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-purple-400/20 text-purple-400 ring-1 ring-inset ring-purple-400/30 transition-colors group-hover:bg-purple-400/30">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">24/7 Response</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Our concierge team is available around the clock for urgent needs—so you're never left waiting for service.
              </p>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Clock className="w-5 h-5 text-purple-400" />
              </div>
            </div>
          </div>

          {/* Customer Satisfaction Chart - Enhanced */}
          <div className="max-w-2xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-6 h-6 text-sky-400" />
                <h3 className="text-xl font-semibold text-white">Customer Satisfaction Index</h3>
              </div>
              <div className="h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-sky-400 mb-2">98%</div>
                  <div className="text-slate-400 text-sm">Based on 500+ client reviews</div>
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Separate from gradient background */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h3 className="text-sky-400 text-sm font-semibold uppercase tracking-wider">Our Story</h3>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mt-2">The Vision Behind Luxury 1 Living</h2>
          </div>
          
          {/* Top Section - Photo + Text */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Photo Section - Left Side */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/images/founderBubbles.png" 
                  alt="Bubbles representing the clean, fresh environment that Luxury 1 Living creates" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
            </div>

            {/* Text Content - Right Side */}
            <div className="space-y-6">
              <div className="text-slate-300 leading-relaxed text-lg">
                <p className="mb-6">
                  Luxury 1 Living was founded in 2025 with a singular mission: to elevate the commercial cleaning industry through craftsmanship, discretion, and a deep commitment to excellence. What began as a boutique operation led by founder Mary Allen has grown into one of Houston's most trusted names in premium commercial cleaning.
                </p>
                <p className="mb-6">
                  Over the past decade, we've expanded our service offerings to include not only routine and deep-clean solutions, but also specialty sanitization services tailored to executive offices, luxury retail spaces, healthcare facilities, and more.
                </p>
                <p className="mb-6">
                  Our team includes professionally trained cleaning specialists all carefully vetted, uniformed, and equipped with hospital-grade and eco-conscious products. Every member of our team upholds the same high standards Mary built the company on: respect for every space, consistency in every detail, and pride in every finish.
                </p>
                <p>
                  Today, Luxury 1 Living proudly serves clients throughout the Greater Houston area and surrounding suburbs, offering flexible service tiers and on-demand support for businesses that expect more than just a clean space but a unique luxury polished experience.
                </p>
              </div>
            </div>
          </div>

          {/* Three Cards Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-400/10 to-sky-400/5 border border-sky-400/20 text-center">
              <div className="w-12 h-12 bg-sky-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-sky-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Our Standards</h4>
              <p className="text-slate-300 text-sm">Hospital-grade protocols with luxury service standards</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-400/10 to-emerald-400/5 border border-emerald-400/20 text-center">
              <div className="w-12 h-12 bg-emerald-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Our Mission</h4>
              <p className="text-slate-300 text-sm">To transform how businesses experience commercial cleaning</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-400/10 to-purple-400/5 border border-purple-400/20 text-center">
              <div className="w-12 h-12 bg-purple-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Our Vision</h4>
              <p className="text-slate-300 text-sm">To be the gold standard in luxury commercial cleaning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Founder Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-900/50 to-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h3 className="text-sky-400 text-sm font-semibold uppercase tracking-wider mb-4">Our Founder</h3>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">
              Meet the Visionary Behind Luxury 1 Living
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A passionate entrepreneur with over two decades of experience in the commercial cleaning industry, dedicated to revolutionizing how businesses think about cleanliness.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Content - Left Column */}
            <div className="space-y-8">
              {/* Founder Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-sky-400/10 to-emerald-400/10 border border-sky-400/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-1">Mary Allen</h4>
                  <p className="text-emerald-400 font-medium">Founder & CEO</p>
                </div>
              </div>
              
              {/* Founder Story */}
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  Mary Allen, the founder of Luxury 1 Living, brings over two decades of hands-on experience in the commercial cleaning and hospitality industry. Known for her meticulous standards and deep respect for client spaces, Mary built her reputation one property at a time.
                </p>
                <p>
                  Her journey began in luxury hotels and facility management, where she quickly realized that premium spaces require more than surface-level service. They demand a refined touch, complete discretion, and unwavering attention to detail.
                </p>
                <p>
                  Driven by a passion to raise the standard of commercial cleaning, she launched Luxury 1 Living to bridge the gap between utility and elegance. Today, Mary leads a growing team dedicated to delivering the kind of service she once dreamed of luxury, consistent, and effortlessly polished.
                </p>
                <p>
                  Her vision remains clear: to make luxury commercial cleaning the golden standard!
                </p>
              </div>

              {/* Founder Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sky-400 mb-1">20+</div>
                  <div className="text-sm text-slate-400 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">500+</div>
                  <div className="text-sm text-slate-400 font-medium">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">50+</div>
                  <div className="text-sm text-slate-400 font-medium">Team Members</div>
                </div>
              </div>
            </div>

            {/* Cleaning Crew Image - Right Column */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/images/cleaningCrew.jpg" 
                  alt="Luxury 1 Living cleaning crew" 
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider - End of Founder Section */}
        <div className="relative mt-6 max-w-6xl mx-auto">
          <svg 
            className="w-full h-64" 
            viewBox="0 0 1200 500" 
            preserveAspectRatio="none"
            fill="none"
          >
            <path 
              d="M0,500 L0,300 Q200,150 400,300 Q600,450 800,300 Q1000,150 1200,300 L1200,500 Z" 
              fill="url(#founderWaveGradient)"
            />
            <defs>
              <linearGradient id="founderWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(14, 165, 233, 0.3)" />
                <stop offset="50%" stopColor="rgba(16, 185, 129, 0.3)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
} 