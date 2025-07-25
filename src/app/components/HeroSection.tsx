'use client';
import React from 'react';
import { MessageSquare, UserPlus } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Right half background image */}
      <div className="absolute right-0 top-0 w-3/5 h-full z-0">
        <img
          src="/images/hero.png"
          alt="Luxury 1 Living commercial cleaning services"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'right 25%' }}
        />
        {/* Enhanced gradient overlay for smooth fade effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
        {/* Additional fade effect on the right edge */}
        <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-slate-950/40 to-transparent"></div>
      </div>

      {/* Decorative Bubbles - Corner and Edge Placement */}
      <div className="absolute inset-0 pointer-events-none z-30">
        {/* Top Left Corner */}
        <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-white/5 to-sky-400/8 rounded-full blur-md animate-pulse"></div>
        
        {/* Top Right Corner */}
        <div className="absolute top-12 right-12 w-20 h-20 bg-gradient-to-br from-white/6 to-emerald-400/8 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Bottom Left Corner */}
        <div className="absolute bottom-12 left-12 w-18 h-18 bg-gradient-to-br from-white/5 to-blue-400/8 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Bottom Right Corner */}
        <div className="absolute bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-white/6 to-teal-400/8 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        
        {/* Left Edge - Middle */}
        <div className="absolute top-1/2 -left-4 w-12 h-12 bg-gradient-to-br from-white/4 to-teal-400/6 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Right Edge - Middle */}
        <div className="absolute top-1/2 -right-4 w-12 h-12 bg-gradient-to-br from-white/5 to-sky-300/7 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Top Edge - Middle */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-white/6 to-blue-400/8 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        
        {/* Bottom Edge - Middle */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-white/5 to-emerald-400/7 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.7s' }}></div>

        {/* Additional bubbles scattered throughout */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-white/4 to-sky-400/6 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-br from-white/5 to-emerald-400/7 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-gradient-to-br from-white/4 to-teal-400/6 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-gradient-to-br from-white/5 to-blue-400/7 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-7 h-7 bg-gradient-to-br from-white/4 to-sky-300/6 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.6s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-9 h-9 bg-gradient-to-br from-white/5 to-emerald-300/7 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>

      {/* Left Side Decorative Shimmers */}
      <div className="absolute left-0 top-0 w-1/2 h-full pointer-events-none z-25">
        {/* Shimmer bubbles on the left side */}
        <div className="absolute top-20 left-16 w-6 h-6 bg-gradient-to-br from-sky-400/40 to-white/60 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-32 left-8 w-4 h-4 bg-gradient-to-br from-emerald-400/35 to-white/55 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-48 left-24 w-5 h-5 bg-gradient-to-br from-blue-400/45 to-white/65 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-64 left-12 w-3 h-3 bg-gradient-to-br from-teal-400/38 to-white/58 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.6s' }}></div>
        <div className="absolute top-80 left-20 w-4 h-4 bg-gradient-to-br from-sky-300/42 to-white/62 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        
        {/* Additional top shimmers */}
        <div className="absolute top-24 left-4 w-3 h-3 bg-gradient-to-br from-emerald-300/36 to-white/56 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.7s' }}></div>
        <div className="absolute top-40 left-28 w-4 h-4 bg-gradient-to-br from-blue-300/39 to-white/59 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-56 left-6 w-5 h-5 bg-gradient-to-br from-teal-300/41 to-white/61 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.9s' }}></div>
        <div className="absolute top-72 left-22 w-3 h-3 bg-gradient-to-br from-sky-400/37 to-white/57 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        
        {/* Middle section shimmers */}
        <div className="absolute top-1/3 left-6 w-5 h-5 bg-gradient-to-br from-emerald-300/43 to-white/63 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.4s' }}></div>
        <div className="absolute top-1/2 left-16 w-3 h-3 bg-gradient-to-br from-blue-300/35 to-white/55 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute top-2/3 left-8 w-4 h-4 bg-gradient-to-br from-teal-300/40 to-white/60 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.8s' }}></div>
        
        {/* Additional middle shimmers */}
        <div className="absolute top-1/3 left-26 w-4 h-4 bg-gradient-to-br from-sky-300/44 to-white/64 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute top-1/2 left-4 w-6 h-6 bg-gradient-to-br from-emerald-400/38 to-white/58 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute top-2/3 left-22 w-3 h-3 bg-gradient-to-br from-blue-400/41 to-white/61 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        
        {/* Bottom section shimmers */}
        <div className="absolute bottom-32 left-12 w-6 h-6 bg-gradient-to-br from-sky-400/45 to-white/65 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute bottom-48 left-20 w-4 h-4 bg-gradient-to-br from-emerald-400/39 to-white/59 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute bottom-64 left-8 w-5 h-5 bg-gradient-to-br from-blue-400/42 to-white/62 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-80 left-16 w-3 h-3 bg-gradient-to-br from-teal-400/40 to-white/60 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Additional bottom shimmers */}
        <div className="absolute bottom-40 left-4 w-4 h-4 bg-gradient-to-br from-sky-300/43 to-white/63 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.1s' }}></div>
        <div className="absolute bottom-56 left-24 w-3 h-3 bg-gradient-to-br from-emerald-300/41 to-white/61 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        <div className="absolute bottom-72 left-10 w-5 h-5 bg-gradient-to-br from-blue-300/37 to-white/57 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.6s' }}></div>
        <div className="absolute bottom-88 left-18 w-4 h-4 bg-gradient-to-br from-teal-400/36 to-white/56 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.9s' }}></div>
        
        {/* Floating shimmers */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-gradient-to-br from-white/70 to-sky-400/50 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.1s' }}></div>
        <div className="absolute top-3/4 left-1/4 w-3 h-3 bg-gradient-to-br from-white/65 to-emerald-400/45 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Shimmers around "Serving Greater Houston" area */}
        <div className="absolute bottom-24 left-14 w-5 h-5 bg-gradient-to-br from-sky-400/50 to-white/70 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.1s' }}></div>
        <div className="absolute bottom-20 left-8 w-3 h-3 bg-gradient-to-br from-emerald-400/45 to-white/65 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-16 left-22 w-4 h-4 bg-gradient-to-br from-blue-400/48 to-white/68 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-28 left-6 w-3 h-3 bg-gradient-to-br from-teal-400/42 to-white/62 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute bottom-12 left-18 w-5 h-5 bg-gradient-to-br from-sky-300/52 to-white/72 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-8 left-12 w-4 h-4 bg-gradient-to-br from-emerald-300/44 to-white/64 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.4s' }}></div>
        
        {/* Extra scattered shimmers for fullness */}
        <div className="absolute top-1/6 left-1/4 w-3 h-3 bg-gradient-to-br from-blue-300/46 to-white/66 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.0s' }}></div>
        <div className="absolute top-5/6 left-1/3 w-4 h-4 bg-gradient-to-br from-teal-300/43 to-white/63 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute top-2/5 left-1/5 w-5 h-5 bg-gradient-to-br from-sky-400/40 to-white/60 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-4/5 left-1/6 w-3 h-3 bg-gradient-to-br from-emerald-400/47 to-white/67 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-2xl space-y-8 lg:pt-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight animate-hero-title">
            Pure Luxury,<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-teal-400 to-blue-500 animate-gradient-shift">Perfectly Cleaned</span>
          </h2>
          <p className="max-w-xl text-lg sm:text-xl font-medium leading-tight text-slate-300 tracking-wide animate-hero-subtitle" style={{ fontFamily: 'Bitcount Prop Double, monospace', letterSpacing: '0.02em' }}>
            Luxury premium commercial cleaning services crafted for businesses that expect flawless attention to detail, discreet professionalism, and a polished finish that speaks volumes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="flex gap-2 items-center font-semibold bg-sky-400 hover:bg-emerald-600 text-white rounded-lg pt-3 pr-6 pb-3 pl-6 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 animate-cta-pulse hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 animate-icon-bounce" /> Get a Quote
            </a>
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 hover:scale-105">
              <UserPlus className="w-4 h-4" /> Sign Up
            </button>
          </div>
          <div className="mt-12">
            <blockquote className="text-lg sm:text-xl font-medium text-sky-300 tracking-wide italic relative animate-gentle-float" style={{ fontFamily: 'Lexend, sans-serif', letterSpacing: '0.05em' }}>
              "Serving Greater Houston<br />
              and surrounding areas"
            </blockquote>
          </div>
        </div>
      </div>

      {/* Sparkle effects on the image side */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-sky-400/60 rounded-full animate-sparkle z-10"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-emerald-400/50 rounded-full animate-sparkle z-10" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-teal-400/40 rounded-full animate-sparkle z-10" style={{ animationDelay: '2s' }}></div>
    </section>
  );
} 