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
          {/* Mop background image */}
          <div className="absolute inset-0">
            <img 
              src="/images/mop.jpg" 
              alt="" 
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          {/* Our Process background image */}
          <div className="absolute inset-0">
            <img 
              src="/images/ourprocess.jpeg" 
              alt="" 
              className="w-full h-full object-cover opacity-5"
            />
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-600 via-emerald-600 to-purple-600 opacity-20"></div>
          {/* Floating geometric elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-sky-400/10 to-emerald-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/5 to-sky-400/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Enhanced Header Section */}
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <h3 className="text-sky-400 text-sm font-semibold uppercase tracking-wider">About Us</h3>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mt-2">
              Elevating Cleanliness to an{' '}
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Art Form
              </span>
            </h2>
          </div>

          {/* Unique About Us Content Layout */}
          <div className="max-w-5xl mx-auto">
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Left Side - Elegant Text Layout */}
              <div className="space-y-8 animate-fade-in-up">
                {/* Mission Statement */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-sky-400 to-emerald-400 rounded-full"></div>
                  <div className="pl-8">
                    <h3 className="text-2xl font-light text-white mb-4">Welcome to Luxury 1 Living</h3>
                    <p className="text-lg text-slate-300 leading-relaxed mb-4">
                      At Luxury 1 Living, cleanliness is more than a service it's an experience. We believe that a well maintained space should radiate sophistication, serenity, and care. Founded with the vision to redefine the standards of commercial cleaning, we serve clients who value precision, discretion, and polished results.
                    </p>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      With a background rooted in hospitality and luxury environments, we understand that every detail matters. From boutique office spaces to upscale retail interiors, our tailored approach ensures your space reflects the excellence of your brand.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Interactive Elements */}
              <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                {/* Brand Promise Card */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-400/10 to-emerald-400/10 p-8 border border-sky-400/20 backdrop-blur-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-400/5 to-emerald-400/5 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold text-white mb-3">Our Promise</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Luxury 1 Living is not just our name it's our commitment to delivering pure luxury through perfectly cleaned spaces.
                    </p>
                  </div>
                </div>

                {/* Tagline Display */}
                <div className="text-center py-6">
                  <div className="inline-block">
                    <span className="text-3xl font-light text-white tracking-wide">Pure luxury.</span>
                    <br />
                    <span className="text-3xl font-semibold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent tracking-wide">
                      Perfectly cleaned.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Values Grid */}
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              {/* Value 1 */}
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-sky-400/20 to-emerald-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-sky-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Sophistication</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Every detail crafted to elevate your space with refined elegance and precision.
                </p>
              </div>

              {/* Value 2 */}
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-400/20 to-purple-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Discretion</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Professional service delivered with the utmost privacy and respect for your environment.
                </p>
              </div>

              {/* Value 3 */}
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Excellence</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Uncompromising standards that ensure your space reflects the highest quality of care.
                </p>
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